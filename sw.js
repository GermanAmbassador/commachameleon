const CACHE_NAME = "comma-chameleon-2.0.0";
const APP_ROOT = new URL("./", self.location.href).pathname;
const assetPath = (file) => new URL(file, self.location.href).pathname;
const CORE_ASSETS = [
  APP_ROOT,
  assetPath("manifest.webmanifest"),
  assetPath("chameleon.png"),
  assetPath("favicon-192.png"),
  assetPath("favicon-512.png"),
];

async function cacheAppShell() {
  const cache = await caches.open(CACHE_NAME);
  const response = await fetch(APP_ROOT, { cache: "no-cache" });
  if (!response.ok) throw new Error("App shell could not be loaded");

  await cache.put(APP_ROOT, response.clone());
  const html = await response.text();
  const assetUrls = Array.from(html.matchAll(/(?:src|href)=["']([^"']+)["']/g))
    .map((match) => new URL(match[1], new URL(APP_ROOT, self.location.origin)).pathname);

  const urls = [...new Set([...CORE_ASSETS.slice(1), ...assetUrls])];
  await Promise.all(
    urls.map(async (url) => {
      try {
        const asset = await fetch(url);
        if (asset.ok) await cache.put(url, asset);
      } catch {
        // A non-essential asset may be absent without breaking installation.
      }
    }),
  );
}

self.addEventListener("install", (event) => {
  event.waitUntil(cacheAppShell().then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then(async (response) => {
          if (response.ok) (await caches.open(CACHE_NAME)).put(APP_ROOT, response.clone());
          return response;
        })
        .catch(async () => (await caches.match(APP_ROOT)) || Response.error()),
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then(async (response) => {
        if (response.ok) (await caches.open(CACHE_NAME)).put(request, response.clone());
        return response;
      });
    }),
  );
});
