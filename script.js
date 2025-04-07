(function() {
    'use strict';

    // =========================================================================
    // Story Data (Überarbeitet für Lesemotivation 6-10 Jahre)
    // =========================================================================
    const allStories = [
        // --- Überarbeitete Geschichten (ca. 170+) ---
        "Der kleine Hase Hoppel, kuschelweich und weiß, saß im Gras. Er knabberte an einem saftigen Kleeblatt, das sehr lecker schmeckte, und wackelte neugierig mit der Nase.",
        "Mia und ihr kleiner Bruder Ben suchten im Wald nach Tannenzapfen! Sie entdeckten einen roten Vogel, einen riesigen Baum, und viele bunte Waldblumen.",
        "Auf dem Bauernhof gackerten die Hühner laut und aufgeregt. Der stolze Hahn, mit seinen bunten Federn, krähte allen einen lauten Morgengruß zu!",
        "Im Meer schwamm ein silberner Fisch, blitzschnell zwischen den Algen. Er traf seine Freunde, den langsamen Seestern und die schwebende Qualle, und sie spielten lustiges Verstecken!",
        "Oma backte einen Apfelkuchen, rund und goldbraun. Es duftete im ganzen Haus herrlich nach Äpfeln, Zimt und vielleicht einem Geheimnis?",
        "Der Zirkus war da, mit lustigen Clowns und mutigen Akrobaten! Ein riesiger Elefant, grau und stark, balancierte vorsichtig auf einem großen Ball.",
        "Lina malte ein Bild, mit leuchtenden Wasserfarben. Sie malte die Sonne, gelb und strahlend, den Himmel, blau wie das Meer, und eine Wiese voller Gänseblümchen.",
        "Ein Kätzchen schlief im Korb, weich und warm zusammengerollt. Es träumte von wilden Mäusejagden, von warmer Milch, und von sanften Streicheleinheiten!",
        "Der mutige Ritter, in glänzender Rüstung, ritt auf seinem treuen Pferd. Er suchte das verwunschene Schloss, fand einen schlafenden Drachen, und weckte die Prinzessin mit einem Lied!",
        "Es regnete draußen, Pitter, Patter, Platsch auf das Fensterbrett. Tim baute drinnen eine geheime Räuberhöhle, gemütlich und dunkel, aus Decken, Kissen und Stühlen.",
        "Leo der Löwe, der mächtige König der Tiere, lag faul in der warmen Savannensonne! Er gähnte so laut, streckte seine großen Tatzen, und träumte bestimmt von einem Mittagsschläfchen.",
        "Ein Raumschiff sauste zu den Sternen, schnell und leise wie ein Gedanke. An Bord waren Astronauten, mutig und klug, auf einer wichtigen Forschungsmission!",
        "Paula pustete Seifenblasen, schillernd und federleicht. Sie flogen hoch in die Luft, tanzten im Sonnenlicht, und zerplatzten mit einem leisen 'Plopp'!",
        "Der Bär Bruno suchte Beeren, rot und prall im Wald. Er fand einen ganzen Busch voll, versteckt hinter einem Felsen, und brummte zufrieden vor sich hin.",
        "Am Strand baute Max eine riesige Sandburg, mit Mauern und Türmen. Er grub einen tiefen Wassergraben, schmückte die Zinnen mit Muscheln, und rief: Meine Burg ist die schönste!",
        "Die Eule Ulla wachte auf, als der Mond aufging. Sie hatte riesige Augen, konnte im Dunkeln sehen wie am Tag, und rief leise 'Schuhu' in den stillen Wald.",
        "Ein kleiner Pinguin watschelte über das glitzernde Eis, ein bisschen unbeholfen aber fröhlich! Er rutschte auf dem Bauch, schnell wie ein Pfeil, direkt ins eiskalte Wasser.",
        "Sophie las ein spannendes Buch, über Piraten und verborgene Schätze. Sie stellte sich vor, wie sie selbst eine Schatzkarte findet, auf einer einsamen Insel, ganz weit weg!",
        "Der Gärtner pflanzte neue Blumen, in allen Farben des Regenbogens! Er goss sie fleißig mit der Gießkanne, zupfte lästiges Unkraut, und freute sich auf die bunte Blütenpracht.",
        "Im Puppenhaus wohnte Familie Klein, Puppen mit lustigen aufgemalten Gesichtern. Sie hatten winzige Stühle, einen gedeckten Tisch, und sogar eine kleine Katze aus Plüsch.",
        "Ein flinkes Eichhörnchen sammelte eifrig Nüsse und Eicheln. Es versteckte seinen Vorrat im weichen Moosboden, für den langen Winter, und sprang geschwind von Ast zu Ast.",
        "Der Zug fuhr durch die Landschaft, ratternd und pfeifend! Aus dem Fenster sah man grasende Kühe, grüne Wiesen mit Butterblumen, und kleine Dörfer mit spitzen Kirchtürmen.",
        "Finn spielte Fußball im Garten, mit seinem besten Freund Leo. Sie schossen tolle Tore, dribbelten geschickt um die Büsche, und lachten herzlich!",
        "Eine winzige Maus huschte durch die stille Küche, ihre Nase zitterte auf der Suche nach etwas Essbarem. Sie fand einen duftenden Käsekrümel, lecker und gelb, und quietschte leise vor Glück!",
        "Der Mond schien hell am Nachthimmel, silbern und geheimnisvoll. Die Sterne funkelten, wie tausend kleine Diamanten, und irgendwo zog eine Sternschnuppe ihre Bahn!",
        "Clara half Mama beim Backen, sie rührte eifrig den Schokoteig. Es gab leckeren Kuchen, mit bunten Zuckerstreuseln, mmh wie das duftete!",
        "Ein Feuerwehrauto raste vorbei, mit lautem Tatütata und Blaulicht! Es hatte eine lange Leiter, dicke Wasserschläuche, und mutige Feuerwehrleute fuhren zum Einsatz.",
        "Am Himmel tanzte ein bunter Drachen, hoch oben im Wind. Der Wind zog ihn immer höher, wie einen Vogel, bis er fast in den Wolken verschwand.",
        "Der Hund Bello wedelte wild mit dem Schwanz, als Herrchen nach Hause kam. Er bellte freudig 'Wuff!', sprang hoch, und brachte seinen Lieblingsball zum Spielen!",
        "Im Zoo gab es viele Tiere, lustige Affen, gestreifte Tiger und brummige Bären. Ein kleiner Panda, schwarz-weiß gefleckt, knabberte genüsslich an einem Bambusstängel.",
        "Lena machte einen Purzelbaum, auf der weichen Wiese hinterm Haus. Das Gras kitzelte ihre Nase, die Sonne schien warm, was für ein toller Tag!",
        "Ein Schmetterling flatterte von Blume zu Blume, leicht und wunderschön. Seine Flügel schimmerten blau, gelb und orange, wie ein kleines Kunstwerk.",
        "Der Bäcker backte frische Brötchen, knusprig und noch warm vom Ofen! Der Duft zog durch die ganze Straße, lockte hungrige Kunden an, und machte Appetit auf Frühstück.",
        "Paul pustete alle Kerzen aus, auf seinem Geburtstagskuchen mit Smarties. Alle sangen 'Happy Birthday', klatschten im Takt, und Paul strahlte vor Freude!",
        "Ein Segelschiff glitt über das Meer, mit weißen, geblähten Segeln. Die Wellen rauschten leise, der Wind trieb es voran, und Möwen begleiteten es kreischend!",
        "Anna und Tom bauten einen lustigen Schneemann, im frisch verschneiten Garten. Er bekam eine Karottennase, Kohlenaugen, und Papas alten Schal um den Hals.",
        "Der Igel rollte sich schnell zusammen, zu einer stacheligen Kugel. Er hörte Schritte im Laub, versteckte seine Nase, und wartete ganz still.",
        "Im Wald raschelte es im Laub, war das ein scheues Reh? Es schaute neugierig aus dem Dickicht, mit großen braunen Augen, und sprang dann blitzschnell weiter.",
        "Der kleine Vogel lernte fliegen, flatterte aufgeregt mit den Flügeln! Mama Vogel rief 'Du schaffst das!', zeigte wie es geht, und bald flog er eine kleine Runde allein.",
        "Lisa tanzte im Zimmer, zu ihrer Lieblingsmusik aus dem Radio. Sie drehte sich wild im Kreis, hüpfte hoch wie ein Flummi, und sang lauthals mit!",
        "Ein Traktor tuckerte über das Feld, brummend und stark wie ein Bär. Er zog einen großen Pflug hinter sich her, machte die Erde locker, für die neue Saat.",
        "Der Frosch quakte im Teich, ein lautes 'Quak, Quak'! Er saß auf einem Seerosenblatt, schnappte blitzschnell eine Fliege, und sprang mit einem Platscher ins kühle Wasser.",
        "Opa erzählte eine Piratengeschichte, spannend und voller Abenteuer! Es ging um einen vergrabenen Schatz, eine geheime Karte mit einem X, und ein altes Schiffswrack am Meeresgrund.",
        "Die Katze putzte ihr samtweiches Fell, sorgfältig mit ihrer rauen Zunge. Sie schnurrte dabei wohlig, schloss halb die Augen, und genoss die Ruhe.",
        "Ein Bagger grub ein tiefes Loch, auf der lauten Baustelle nebenan. Er hatte eine riesige Schaufel, machte viel Krach 'Rummms!', und bewegte Berge von Erde.",
        "Die Sonne ging langsam unter, und malte den Himmel rot und orange. Es wurde Abend, die Vögel sangen Schlaflieder, ein schöner Tag ging zu Ende.",
        "Jonas kletterte auf den Apfelbaum, höher und höher, wie ein Äffchen! Von oben sah alles winzig aus, die Häuser wie Spielzeug, die Autos wie Käfer, und die Menschen wie Ameisen.",
        "Eine Biene summte im Garten, auf der Suche nach süßem Nektar. Sie landete auf einer großen Sonnenblume, krabbelte tief hinein, und sammelte fleißig Pollen an ihren Beinen.",
        "Marie half Papa im Garten, sie goss die durstigen Blumen. Die roten Rosen dufteten süß, die Tulpen leuchteten bunt, wie schön war Papas Garten!",
        "Ein Krankenwagen kam schnell angefahren, mit Sirene 'Tatüüü!' und Blaulicht! Jemand brauchte dringend Hilfe, Sanitäter sprangen heraus, und kümmerten sich sofort.",
        "Der Wind pustete kräftig, und ließ die Herbstblätter tanzen wie wild! Äste schwankten im Sturm, Wolken jagten über den Himmel, es wurde richtig ungemütlich.",
        "Ein Pferd galoppierte über die weite Wiese, elegant und frei wie der Wind! Seine Mähne wehte im Wind, seine Hufe trommelten auf dem Boden, wie schnell es doch war!",
        "Nico spielte mit bunten Bausteinen, und baute einen unglaublich hohen Turm. Er stapelte Stein auf Stein, ganz vorsichtig, bis der Turm schließlich mit Geklapper umfiel!",
        "Eine Entenmama schwamm auf dem See, gefolgt von ihren flauschigen Küken. Sie tauchten nach Wasserpflanzen, schnatterten leise, und watschelten dann gemeinsam ans Ufer.",
        "Das Baby lachte laut, quietschte vor Vergnügen und strampelte mit den Beinen! Mama machte lustige Grimassen, kitzelte es am Bauch, und spielte das Guck-guck-Spiel.",
        "Der Polizist regelte den Verkehr, mit Handzeichen und einer schrillen Pfeife! Autos mussten warten, Fußgänger gingen schnell über die Straße, so gab es kein Durcheinander.",
        "Ein Regenbogen spannte sich über den Himmel, direkt nach dem Sommerregen. Er leuchtete in allen Farben, rot, orange, gelb, grün, blau und lila, einfach wunderschön!",
        "Sarah malte mit Fingerfarben, ein tolles, buntes Bild für Oma! Ihre Hände waren voller Farbe, rot, grün, blau, das machte riesigen Spaß und ein bisschen Kleckserei.",
        "Ein Delfin sprang hoch aus dem Wasser, glitzernd und elegant wie ein Tänzer! Er machte einen Salto in der Luft, planschte zurück ins Meer, und schwamm mit seinen Freunden davon.",
        "Der Briefträger brachte die Post, Briefe für Mama und ein Paket für Papa. Er klingelte laut an der Tür, warf die Briefe in den Kasten, und wünschte einen schönen Tag!",
        "Emil fuhr mit seinem neuen Roller, schnell den Gehweg entlang wie ein Rennfahrer! Er trug einen Helm, passte gut auf Fußgänger auf, und genoss den kühlen Fahrtwind im Gesicht.",
        "Eine Spinne webte ihr kunstvolles Netz, zwischen zwei Sonnenblumenstielen. Es war fein wie Seide, klebrig für Fliegen, und glitzerte wunderschön im Morgentau.",
        "Der Koch bereitete das Mittagessen zu, in der großen Restaurantküche. Er schnitt knackiges Gemüse, briet duftendes Fleisch, und schmeckte die leckere Soße sorgfältig ab!",
        "Laura schaukelte im Garten, immer höher und höher bis in den Himmel! Sie spürte den Wind in den Haaren, sah die Wolken vorbeiziehen, und fühlte sich frei wie ein Vogel.",
        "Ein Wolf heulte in der Ferne, ein langer, unheimlicher Ruf in der Nacht? Der Mond schien fahl auf den dunklen Wald, es war ganz still, nur der Wolf war zu hören.",
        "Der Angler warf seine Angel aus, weit hinaus in den ruhigen See. Er wartete geduldig im Boot, hoffte auf einen dicken Fisch, und lauschte dem Plätschern des Wassers.",
        "Ida pflückte Erdbeeren vom Feld, leuchtend rot und zuckersüß! Sie aß gleich ein paar, sammelte viele im Korb, für einen leckeren Kuchen mit Sahne.",
        "Ein Flugzeug zog hoch am Himmel, und hinterließ einen langen weißen Streifen. Es war sicher auf dem Weg in ein fernes Land, mit vielen Urlaubern an Bord, wohin wohl die Reise ging?",
        "Die Schnecke kroch langsam über das Salatblatt, mit ihrem gestreiften Haus auf dem Rücken. Sie hinterließ eine silbrige Spur, suchte nach dem saftigsten Stück, und hatte es gar nicht eilig.",
        "Der Lehrer erklärte eine schwierige Rechenaufgabe, an der großen Tafel vorne. Die Kinder hörten gespannt zu, schrieben fleißig mit, und plötzlich verstanden es alle!",
        "Julia spielte Verstecken im Park, hinter dem dichten Rhododendronbusch! Sie hielt die Luft an, kicherte leise, hoffentlich würde Max sie nicht so schnell finden?",
        "Ein Murmeltier pfiff laut 'Fiüüüt!', als Warnung für seine Familie! Ein Adler kreiste hoch am Himmel, auf der Suche nach Beute, doch alle Murmeltiere waren sicher in ihrem Bau.",
        "Der Musiker spielte Gitarre im Park, und sang ein fröhliches Lied über die Sonne. Die Melodie klang schön, der Rhythmus ging ins Ohr, und die Leute blieben stehen und hörten zu.",
        "Ein kleiner Käfer krabbelte über einen warmen Stein, er war rot mit sieben schwarzen Punkten. Es war ein Marienkäfer, ein echter Glücksbringer, wie schön!",
        "Felix half Oma beim Einkaufen, er schob den quietschenden Einkaufswagen. Sie kauften frisches Brot, Milch, knackige Äpfel, und Omas Lieblingsschokolade.",
        "Ein Schwan schwamm majestätisch über den See, weiß und anmutig wie eine Königin. Sein Hals war lang und gebogen, seine Bewegungen ruhig, ein wirklich prächtiger Vogel!",
        "Marlene las ihrer Lieblingspuppe Anna vor, aus einem dicken Märchenbuch. Die Puppe saß brav auf ihrem Schoß, 'hörte' gespannt zu, und schlief dabei fast ein.",
        "Der Bergsteiger kletterte die steile Felswand hoch, gesichert mit einem dicken Seil! Es war sehr anstrengend, aber die Aussicht vom Gipfel war atemberaubend, einfach fantastisch!",
        "Eine Maus nagte an einem alten Brotkanten, oje, hoffentlich hat die Katze nichts gehört! Zum Glück war sie satt und schlief, die Maus schnappte sich den Kanten, und huschte davon.",
        "Der Künstler malte ein Porträt von einem lachenden Mädchen, mit Pinsel und bunten Ölfarben. Er traf das Lächeln genau, die funkelnden Augen, es wurde ein richtiges kleines Meisterwerk!",
        "Hannah sprang Seil im Hof, immer schneller und geschickter! Sie sang einen lustigen Reim dazu, schaffte über dreißig Sprünge ohne Fehler, toll gemacht!",
        "Ein Uhu rief im dunklen Wald, ein tiefes 'Huu-huuu', das unheimlich klang. Er war der Jäger der Nacht, saß lautlos auf einem Ast, und beobachtete alles mit seinen großen Augen.",
        "Der Bauer melkte die Kuh Lotte, im Stall am frühen Morgen. Die warme Milch floss plätschernd in den Eimer, frisch und gesund, perfekt für das Frühstücksmüsli!",
        "Lukas baute eine geheime Hütte im Wald, aus dicken Ästen und weichem Moos! Sie war gut versteckt hinter Büschen, gemütlich drinnen, sein eigenes kleines Abenteuerreich.",
        "Eine Qualle trieb sanft im Meer, durchsichtig und fast unsichtbar. Ihre langen Tentakel schwebten im Wasser, sie bewegte sich wie in Zeitlupe, ganz faszinierend!",
        "Die Prinzessin tanzte im prächtigen Ballsaal, in einem glitzernden Kleid aus Seide. Der Prinz führte sie übers Parkett, die Musik spielte einen Walzer, es war wie in einem echten Märchen!",
        "Ein Specht hämmerte an den Baumstamm, tack, tack, tack, das hörte man weithin! Er suchte nach leckeren Insekten unter der Rinde, sein Schnabel war spitz und stark wie ein Meißel.",
        "Florian fuhr mit seinem Fahrrad, zum ersten Mal ohne Stützräder! Er war mächtig stolz, hielt wackelig das Gleichgewicht, und rief laut: Schaut mal, ich fahre ganz allein!",
        "Die Sterne leuchteten besonders hell, in dieser klaren Sommernacht. Man sah den Großen Wagen am Himmel, den funkelnden Polarstern, und vielleicht sogar die Milchstraße?",
        "Pia sammelte die schönsten bunten Blätter, im raschelnden Herbstwald. Sie waren rot wie Feuer, gelb wie die Sonne, braun wie Schokolade, und sie wollte damit basteln.",
        "Der Taucher erkundete das bunte Korallenriff, tief unter dem Meeresspiegel. Er sah lustige Clownfische, schillernde Papageienfische, und eine riesige, alte Meeresschildkröte!",
        "Ein Schaf blökte auf der grünen Weide, ein zufriedenes 'Määäh'! Es hatte ein dickes, weißes Wollkleid an, fraß saftiges Gras, und folgte gemütlich seiner Herde.",
        "Ben und Lisa spielten Memory, und deckten bunte Bildkarten auf. Sie suchten passende Paare, erinnerten sich gut an die Verstecke, wer würde wohl die meisten finden?",
        "Ein Gewitter zog auf, dunkle Wolken türmten sich am Himmel. Es donnerte laut 'Groll, Groll!', Blitze zuckten hell auf, und dicker Regen prasselte auf das Dach!",
        "Der Zauberer zeigte einen verblüffenden Trick, er ließ eine Münze verschwinden! Er sprach eine geheime Formel 'Simsalabim!', wedelte mit dem Zauberstab, und die Münze war weg, einfach unglaublich!",
        "Tina half beim Tischdecken, sie legte Messer und Gabeln ordentlich hin. Sie stellte bunte Teller auf, faltete Papierservietten zu Fächern, alles sollte schön aussehen für die Gäste.",
        "Ein riesiger Wal schwamm ruhig durch den Ozean, groß wie ein Bus! Er stieß eine Wasserfontäne hoch in die Luft, tauchte dann langsam tief ab, und sang vielleicht ein Wal-Lied?",
        "Der Gärtner schnitt die lange Hecke, gerade und ordentlich mit der Heckenschere. Die Schere klapperte 'Klack, Klack!', grüne Zweige fielen zu Boden, die Hecke sah danach wieder super aus.",
        "Sophia schrieb einen Brief an ihre beste Freundin, die im Urlaub war. Sie erzählte von ihrem Kätzchen, malte ein lachendes Herz dazu, und klebte eine bunte Briefmarke auf den Umschlag.",
        "Ein Krokodil lag reglos am Flussufer, getarnt wie ein Baumstamm? Es sonnte sich faul, wartete auf ahnungslose Beute, seine spitzen Zähne blitzten gefährlich.",
        "Moritz spielte auf seiner Blockflöte, eine einfache, aber schöne Melodie. Die Töne klangen klar und hell, er übte jeden Tag fleißig, bald konnte er sein erstes richtiges Lied spielen!",
        "Die Henne Berta legte ein Ei, in ihr gemütliches Nest aus weichem Stroh. Es war braun gesprenkelt, oval und noch ganz warm, ein Frühstücksei für morgen!",
        "Anton warf flache Steine ins Wasser, platsch, platsch, die machten tolle Kreise! Die Kreise wurden immer größer auf der Oberfläche, breiteten sich aus, und verschwanden dann langsam wieder.",
        "Eine Fledermaus flatterte lautlos durch die Dämmerung, auf der Jagd nach Mücken. Sie 'sah' mit ihren Ohren durch Echo-Ortung, ein faszinierendes Nachttier, fandest du nicht auch?",
        "Die Kinder machten eine wilde Kissenschlacht, juchzten und lachten laut! Weiche Federn flogen durch die Luft, Kissen landeten mit einem 'Puff!', was für ein lustiges Chaos im Kinderzimmer.",
        "Der Kapitän steuerte das große Schiff, sicher durch die hohen Wellen auf dem Meer! Er kannte den Kurs genau, hielt das Steuerrad fest, und rief Kommandos durch ein Megafon.",
        "Johanna malte ein zauberhaftes Einhorn, mit einer Mähne in Regenbogenfarben! Es war strahlend weiß, hatte ein goldenes Glitzerhorn, und stand auf einer Wiese voller Sternenblumen.",
        "Ein Biber baute einen Damm im Bach, aus Ästen, Steinen und Schlamm. Er fällte Bäume mit seinen scharfen Zähnen, staute das Wasser geschickt, sein Bauwerk war wirklich beeindruckend!",
        "Der Astronaut schwebte in der Raumstation, völlig schwerelos wie ein Ballon! Er blickte durchs Fenster auf die wunderschöne Erde, blau und grün und weiß, was für ein unglaublicher Anblick!",
        "Greta suchte besondere Muscheln am Strand, glatt geschliffen vom Meerwasser. Sie fand Schneckenhäuser mit Spiralen, flache Jakobsmuscheln, und sogar einen kleinen, roten Seestern!",
        "Der Förster ging durch seinen Wald, und prüfte die Gesundheit der alten Bäume. Er kannte jeden Pfad, hörte das Klopfen des Spechts, und liebte die frische Waldluft.",
        "Ein Kamel wanderte gemächlich durch die heiße Wüste, Schritt für Schritt durch den Sand. Es trug schweres Gepäck auf seinem Rücken, konnte tagelang ohne Wasser auskommen, ein echtes Wüstenschiff!",
        "Luisa half beim Abwaschen, sie trocknete das glänzende Geschirr sorgfältig ab. Teller, Tassen, Löffel, alles wurde blitzblank und kam zurück in den Schrank.",
        "Ein gefährlicher Drache bewachte seinen Goldschatz, in einer dunklen, feuchten Höhle! Er spie Feuer wenn jemand nahte, seine Schuppen glänzten grünlich, wer traute sich da wohl heran?",
        "Jan spielte mit seinem roten Spielzeugauto, und machte laute 'Brumm Brumm'-Geräusche! Er fuhr über den Teppich, baute eine Rampe aus Büchern, und ließ das Auto darüber springen.",
        "Eine Robbe lag auf einem Sonnenfelsen, und streckte ihre Flossen gemütlich aus. Sie platschte dann ins kühle Wasser, schwamm elegant wie ein Fisch, und fing sich einen Hering zum Mittagessen.",
        "Die Oma strickte einen kuscheligen Schal, Masche für Masche mit dicker Wolle. Die Stricknadeln klapperten leise 'Klick, Klack!', der Schal wurde immer länger, bald war er fertig für den Winter!",
        "Theo beobachtete Ameisen auf dem Gartenweg, wie sie winzige Krümel trugen! Sie liefen in einer langen Reihe, arbeiteten toll zusammen, diese kleinen Tierchen sind ja superstark!",
        "Ein Kolibri schwirrte vor einer roten Blüte, fast unsichtbar standen seine Flügel in der Luft! Er schlug sie unglaublich schnell, trank süßen Nektar mit seinem langen Schnabel, ein fliegendes Juwel!",
        "Franzi half beim Unkrautjäten, im großen Gemüsebeet hinterm Haus. Sie zog Löwenzahn mit langen Wurzeln raus, Giersch und Disteln, damit die Tomaten besser wachsen konnten.",
        "Ein Känguru hüpfte mit riesigen Sätzen, durch das hohe Gras in Australien! Es hatte ein kleines Baby im Beutel, das neugierig herausschaute, und war unglaublich schnell unterwegs.",
        "Der Clown machte lustige Späße in der Manege, und warf bunte Bälle hoch in die Luft! Er trug riesige Schuhe, eine rote Schaumstoffnase, und brachte alle Kinder zum Lachen.",
        "Charlotte fädelte bunte Holzperlen auf, für eine Kette für ihre Mama. Sie nahm rote, blaue, gelbe und grüne Perlen, die Kette wurde wunderschön und ganz individuell!",
        "Ein Faultier hing gemütlich im Baum, und bewegte sich fast gar nicht. Es schlief fast den ganzen Tag eingekuschelt, war sehr sehr langsam, und schien zufrieden zu lächeln.",
        "Der Müllmann leerte die großen Tonnen, früh am Montagmorgen mit viel Gerumpel! Das Müllauto presste den Müll laut zusammen, schluckte alles herunter, und fuhr zur nächsten Straße.",
        "Nele baute mit Decken und Kissen eine Ritterburg, mitten im Wohnzimmer! Sie legte Kissen als Mauern aus, spannte Decken als Dach darüber, ihre eigene gemütliche Festung.",
        "Ein Seepferdchen schwamm aufrecht im Seegras, klein und ganz besonders geformt. Es hielt sich mit dem Schwanz fest, ließ sich von der Strömung treiben, was für ein faszinierendes Meerestier!",
        "Der König saß auf seinem goldenen Thron, und trug eine schwere Krone auf dem Kopf. Er hörte seinen klugen Beratern zu, traf wichtige Entscheidungen für sein Land, und aß dabei einen Apfel.",
        "Jakob spielte im Sandkasten, und schaufelte Sand in seinen gelben Eimer. Er baute eine lange Straße für seine Autos, grub einen tiefen Tunnel, und war ganz vertieft in sein Spiel.",
        "Eine Libelle sonnte sich auf einem Schilfhalm, ihre durchsichtigen Flügel glitzerten im Licht! Sie jagte kleine Mücken über dem Teich, flog blitzschnell hin und her, ein echter Flugkünstler!",
        "Die Tante las eine Gute-Nacht-Geschichte vor, mit sanfter und ruhiger Stimme. Die Geschichte handelte von kleinen Sternen, die Augen fielen langsam zu, und bald schliefen alle fest ein.",
        "Ein Adler kreiste majestätisch hoch über dem Berg, und spähte scharf nach unten. Seine ausgebreiteten Flügel waren riesig, er nutzte den Wind geschickt, der wahre König der Lüfte!",
        "Arthur half Papa beim Autowaschen, er schrubbte eifrig mit einem großen Schwamm! Wasser spritzte überall hin, dicker Seifenschaum entstand, das Auto glänzte danach wie neu.",
        "Eine Schildkröte zog langsam ihren Kopf und ihre Beine ein, als Gefahr drohte! Ihr harter Panzer bot perfekten Schutz, wie ein kleines Haus, sie war sicher darin.",
        "Die Tänzerin schwebte elegant zur Musik, über die große Bühne im Theater! Sie machte anmutige Pirouetten, hohe Sprünge voller Leichtigkeit, und verbeugte sich tief vor dem Applaus.",
        "Mats kletterte geschickt auf das hohe Klettergerüst, Sprosse für Sprosse nach oben. Er erreichte die lange Rutsche, setzte sich schwungvoll hin, und sauste mit Juchzen hinunter!",
        "Eine Motte flatterte aufgeregt ums Lampenlicht, magisch angezogen vom hellen Schein. Ihre Flügel waren samtig und staubig, sie tanzte wild im Lichtkegel, und fand nicht mehr hinaus.",
        "Die Lehrerin gab die Aufsatzhefte zurück, mit Noten und netten Kommentaren. Manche Kinder freuten sich riesig, andere waren ein bisschen enttäuscht, aber alle wollten es nächstes Mal besser machen!",
        "Emma und Paul spielten Fangen im Park, rannten lachend über die große Wiese! Paul war schneller, erwischte Emma mit einem leichten Tippen, jetzt war sie die Fängerin!",
        "Ein Storch stand in seinem riesigen Nest, auf dem hohen Schornstein der alten Fabrik. Er klapperte laut mit dem Schnabel zur Begrüßung, fütterte seine hungrigen Jungen, und wachte stolz über sie.",
        "Der Detektiv suchte nach wichtigen Spuren, mit seiner Lupe und scharfen Augen! Er fand einen schlammigen Fußabdruck, einen verlorenen Knopf, und wusste nun, wer den Kuchen geklaut hatte!",
        "Stella half Papa beim Zeltaufbau, sie steckte die Heringe fest in den Boden. Sie spannte die Zeltleinen straff, zog den Reißverschluss zu, das Camping-Abenteuer konnte beginnen!",
        "Ein Oktopus versteckte sich geschickt zwischen den Felsen, und wechselte blitzschnell seine Farbe! Er hatte acht lange Arme, konnte Tinte spritzen zur Verteidigung, ein wirklich cleveres Tier.",
        "Ein Eskimo, auch Inuit genannt, baute ein Iglu, aus großen, festen Schneeblöcken. Es war drinnen erstaunlich warm, schützte vor dem eisigen Wind, und leuchtete nachts von innen.",
        "Ein winziger Kolibri verteidigte sein Revier, er jagte sogar größere Vögel mutig weg! Obwohl er so klein war, zeigte er viel Tapferkeit, und beschützte seine Lieblingsblüten.",
        "Die Köchin probierte die heiße Gemüsesuppe, fehlte vielleicht noch ein bisschen Salz? Sie nahm einen sauberen Löffel, schmeckte vorsichtig ab, und nickte zufrieden 'Perfekt!'.",
        "Noah ließ sein selbstgebautes Schiffchen schwimmen, im plätschernden Bach hinterm Garten. Die Strömung trug es langsam fort, unter einer kleinen Holzbrücke durch, auf eine spannende Reise!",
        "Eine Gottesanbeterin lauerte auf einem grünen Blatt, perfekt getarnt wie ein Teil der Pflanze. Sie wartete geduldig auf eine Fliege, hielt ihre Fangbeine bereit, eine geschickte Jägerin!",
        "Die Bibliothekarin sortierte neue Bücher, in die hohen Regale der Bücherei ein. Sie liebte den Geruch von Papier, half den Kindern bei der Suche nach Lesestoff, und sorgte für angenehme Ruhe.",
        "Fabian malte lustige Strichmännchen, mit Kringelhaaren und Wackelbeinen! Eines spielte Fußball, ein anderes fuhr Rad, seiner Fantasie waren keine Grenzen gesetzt.",
        "Ein Flamingo stand elegant auf einem Bein, im flachen Wasser des Sees. Sein Gefieder leuchtete rosa, sein krummer Schnabel suchte nach kleinen Krebsen, ein wirklich exotischer Vogel!",
        "Die Oma zeigte alte Schwarz-Weiß-Fotos, von ihrer eigenen Schulzeit. Mama war darauf ein kleines Mädchen mit Zöpfen, Opa hatte noch volles Haar, wie sehr sich doch alles verändert!",
        "David spielte Trompete auf dem Balkon, und übte eine laute Fanfare! Die Töne klangen schmettern und feierlich, die Nachbarn klatschten Beifall, er freute sich auf den Auftritt beim Schulfest."
    ];


    // =========================================================================
    // Configuration & Constants
    // =========================================================================
    const POINTS_PER_TARGET = 10;
    const BONUS_POINTS_CHAMELEON = 5;
    const TARGETABLE_PUNCTUATION = [',', '.', '?', '!'];
    const TUTORIAL_STORAGE_KEY = 'commaChameleonTutorialShown_v3'; // sessionStorage used
    const HIGHSCORE_STORAGE_KEY = 'commaChameleonHighScore_v1'; // localStorage used
    const THEME_STORAGE_KEY = 'commaChameleonTheme_v1';         // localStorage used
    const FONT_SIZE_STORAGE_KEY = 'commaChameleonFontSize_v1';   // localStorage used
    const SPEED_STORAGE_KEY = 'commaChameleonSpeed_v1';         // localStorage used
    const ACHIEVEMENTS_STORAGE_KEY = 'commaChameleonAchievements_v1'; // NEU für Erfolge
    const SPEED_SETTINGS = { slow: 650, normal: 450, fast: 300 }; // Milliseconds interval for chameleon movement
    const READING_DELAY_SETTINGS = { // Milliseconds delay AFTER chameleon disappears
        slow: 1800,  // More time for beginners / slow setting
        normal: 1000, // Medium time
        fast: 500    // Less time for advanced readers / fast setting
    };

    // =========================================================================
    // DOM Element References
    // =========================================================================
    const storyTextElement = document.getElementById('story-text');
    const chameleonElement = document.getElementById('chameleon');
    const startButton = document.getElementById('start-button');
    const gameArea = document.getElementById('game-area');
    const scoreDisplay = document.getElementById('score');
    const highscoreDisplay = document.getElementById('highscore');
    const feedbackDisplay = document.getElementById('feedback');
    const bodyElement = document.body;
    const correctEffectElement = document.getElementById('correct-effect');
    const themeGirlButton = document.getElementById('theme-girl');
    const themeBoyButton = document.getElementById('theme-boy');
    const themeContrastButton = document.getElementById('theme-contrast');
    const themeButtons = [themeGirlButton, themeBoyButton, themeContrastButton];
    const fontSmallButton = document.getElementById('font-small');
    const fontMediumButton = document.getElementById('font-medium');
    const fontLargeButton = document.getElementById('font-large');
    const fontButtons = [fontSmallButton, fontMediumButton, fontLargeButton];
    const speedSlowButton = document.getElementById('speed-slow');
    const speedNormalButton = document.getElementById('speed-normal');
    const speedFastButton = document.getElementById('speed-fast');
    const speedButtons = [speedSlowButton, speedNormalButton, speedFastButton];
    const achievementsGalleryContainer = document.querySelector('#achievements-gallery .badges-container'); // NEU
    const audioElements = {
        click: document.getElementById('audio-click'),
        correct: document.getElementById('audio-correct'),
        bonus: document.getElementById('audio-bonus'),
        appear: document.getElementById('audio-appear'),
        achievement: document.getElementById('audio-achievement') // NEU
    };

    // =========================================================================
    // Game State Variables
    // =========================================================================
    let currentStoryPunctuation = [];
    let gameInProgress = false;
    let targetIsHighlighted = false;
    let animationTimeoutId = null;
    let score = 0;
    let highScore = 0;
    let chameleonClickedThisRound = false;
    let showingTutorial = false;
    let currentTheme = 'girl';
    let currentFontSize = 'medium';
    let currentSpeed = 'normal';
    let playerAchievementState = {}; // NEU: Wird beim Start geladen

    // =========================================================================
    // Achievements Definition & Logic -- NEUER ABSCHNITT
    // =========================================================================

    const achievements = {
        score100: {
            name: "Erste 100 Punkte!",
            description: "Sammle deine ersten 100 Punkte.",
            svg: `<svg viewBox="0 0 100 100"><polygon points="50,5 61,39 98,39 68,61 79,95 50,74 21,95 32,61 2,39 39,39" fill="#FFD700" stroke="#DAA520" stroke-width="3"/><text x="50" y="55" font-size="20" font-weight="bold" text-anchor="middle" fill="#A0522D">100</text></svg>`,
            check: (state) => state.score >= 100,
            requiresProgress: false // Hängt nur vom aktuellen Score ab
        },
        chameleonMaster: {
            name: "Chamäleon-Fänger!",
            description: "Fange das Chamäleon 25 Mal.",
            svg: `<svg viewBox="0 0 60 50"><path d="M51.5,19.8c-0.4-1-1.1-1.9-2.1-2.4c-1.6-0.9-3.5-1-5.4-0.4c-0.7,0.2-1.4,0.5-2,0.9c-3.1,1.9-6.8,2.2-10.2,1 c-1.4-0.5-2.8-1.2-4.1-2c-3-1.9-6.6-2.5-9.9-1.5c-1.5,0.5-2.8,1.3-3.9,2.4c-1.5,1.5-2.3,3.5-2.3,5.6c0,1.9,0.6,3.7,1.7,5.2 c0.6,0.8,1.3,1.5,2.1,2.1c1.2,0.9,2.5,1.6,4,2c3.1,0.8,6.2,0.5,9-0.7c1.1-0.5,2.1-1.1,3.1-1.7c2.8-1.9,6-2.9,9.3-2.9 c1.8,0,3.5,0.3,5.2,0.9c1.5,0.5,2.9,1.3,4.1,2.3c1.6,1.4,2.6,3.2,2.8,5.2c0.1,1.1-0.2,2.2-0.7,3.1c-0.3,0.6-0.7,1.1-1.2,1.6 c-0.8,0.8-1.7,1.4-2.8,1.8c-1.5,0.6-3.1,0.8-4.7,0.7c-3.7-0.4-7.1-1.9-9.8-4.3c-0.6-0.5-1.2-1-1.9-1.5 M15.1,17.5 c1.4,0,2.6,1.2,2.6,2.6c0,1.4-1.2,2.6-2.6,2.6s-2.6-1.2-2.6-2.6C12.5,18.7,13.7,17.5,15.1,17.5z" fill="#32CD32" stroke="#228B22" stroke-width="1.5"/></svg>`,
            target: 25, // Wie oft muss es passieren?
            check: (state, progress) => progress.chameleonClicks >= achievements.chameleonMaster.target,
            requiresProgress: true
        },
        perfect10: {
            name: "10-mal Richtig!",
            description: "Finde 10 Mal das richtige Satzzeichen.",
            svg: `<svg viewBox="0 0 100 100"><path d="M20,50 L45,75 L80,25" stroke="#008000" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round"/><text x="50" y="90" font-size="20" font-weight="bold" text-anchor="middle" fill="#006400">10x</text></svg>`,
            target: 10,
            check: (state, progress) => progress.correctPunctuationClicks >= achievements.perfect10.target,
            requiresProgress: true
        },
        punctuationPro: {
            name: "Satzzeichen-Profi!",
            description: "Finde jeden Satzzeichen-Typ mindestens einmal.",
            svg: `<svg viewBox="0 0 100 100"><text x="50" y="65" font-size="60" font-weight="bold" text-anchor="middle" fill="#4682B4">,.?!</text></svg>`,
            targetTypes: TARGETABLE_PUNCTUATION,
            check: (state, progress) => achievements.punctuationPro.targetTypes.every(type => progress.clickedPunctuationTypes[type]),
            requiresProgress: true
        },
        fastReader: {
            name: "Lese-Rakete!",
            description: "Schaffe 5 Runden im schnellen Tempo.",
            svg: `<svg viewBox="0 0 100 100"><polygon points="50,5 70,45 60,45 60,75 40,75 40,45 30,45" fill="#FF4500" stroke="#8B0000" stroke-width="3"/><polygon points="50,70 60,95 40,95" fill="#FFA500"/><ellipse cx="50" cy="85" rx="15" ry="10" fill="#FFA500"/></svg>`,
            target: 5,
            check: (state, progress) => progress.fastRoundsCompleted >= achievements.fastReader.target,
            requiresProgress: true
        }
        // --- Weitere Erfolge könnten hier hinzugefügt werden ---
        // z.B. Highscore-Meilensteine, fehlerfreie Runden etc.
    };

    // Lädt den Erfolgsstatus des Spielers aus localStorage
    function loadAchievements() {
        try {
            const storedState = localStorage.getItem(ACHIEVEMENTS_STORAGE_KEY);
            if (storedState) {
                playerAchievementState = JSON.parse(storedState);
                // Stelle sicher, dass alle erwarteten Progress-Felder existieren
                initializeMissingProgress();
            } else {
                initializeAchievementState(); // Kein Speicherstand, initialisiere
            }
        } catch (e) {
            console.warn("Failed to load achievements from localStorage, resetting.", e);
            initializeAchievementState();
        }
        updateAchievementsGallery(); // Galerie beim Start aktualisieren
    }

    // Initialisiert den leeren Erfolgsstatus
    function initializeAchievementState() {
         playerAchievementState = {
             earned: {}, // Objekt zum Speichern der IDs der errungenen Erfolge
             progress: { // Objekt zum Speichern des Fortschritts für bestimmte Erfolge
                 chameleonClicks: 0,
                 correctPunctuationClicks: 0,
                 clickedPunctuationTypes: {}, // Wird gefüllt mit z.B. { ',': true, '.': true }
                 fastRoundsCompleted: 0
                 // Hier weitere Zähler hinzufügen, falls nötig
             }
         };
         // Initialisiere clickedPunctuationTypes für alle Zieltypen auf false
         TARGETABLE_PUNCTUATION.forEach(type => {
            playerAchievementState.progress.clickedPunctuationTypes[type] = false;
         });
         // Speichere den initialen Zustand sofort, damit er existiert
         saveAchievements();
    }

    // Stellt sicher, dass neue Progress-Felder hinzugefügt werden, falls sie im Speicherstand fehlen
    function initializeMissingProgress() {
        let stateNeedsUpdate = false;
        if (!playerAchievementState.progress) {
            playerAchievementState.progress = {};
            stateNeedsUpdate = true; // Wenn progress komplett fehlt, initialisiere alles neu
        }
        if (playerAchievementState.progress.chameleonClicks === undefined) { playerAchievementState.progress.chameleonClicks = 0; stateNeedsUpdate = true; }
        if (playerAchievementState.progress.correctPunctuationClicks === undefined) { playerAchievementState.progress.correctPunctuationClicks = 0; stateNeedsUpdate = true; }
        if (playerAchievementState.progress.clickedPunctuationTypes === undefined) { playerAchievementState.progress.clickedPunctuationTypes = {}; stateNeedsUpdate = true; }
        if (playerAchievementState.progress.fastRoundsCompleted === undefined) { playerAchievementState.progress.fastRoundsCompleted = 0; stateNeedsUpdate = true; }

        // Stelle sicher, dass alle Satzzeichen-Typen im Progress-Objekt sind
         TARGETABLE_PUNCTUATION.forEach(type => {
            if (playerAchievementState.progress.clickedPunctuationTypes[type] === undefined) {
                playerAchievementState.progress.clickedPunctuationTypes[type] = false;
                stateNeedsUpdate = true;
            }
         });

         // Speichere den aktualisierten Zustand, wenn etwas fehlte
         if (stateNeedsUpdate) {
             saveAchievements();
         }
    }


    // Speichert den aktuellen Erfolgsstatus im localStorage
    function saveAchievements() {
        try {
            localStorage.setItem(ACHIEVEMENTS_STORAGE_KEY, JSON.stringify(playerAchievementState));
        } catch (e) {
            console.warn("Failed to save achievements to localStorage:", e);
        }
    }

    // Überprüft nach einer Aktion, ob neue Erfolge errungen wurden
    function checkAchievements(gameState) {
        let newlyEarned = false;
        for (const id in achievements) {
            // Überspringe bereits errungene Erfolge
            if (!playerAchievementState.earned[id]) {
                const achievement = achievements[id];
                // Rufe die Check-Funktion des Erfolgs auf
                // Stelle sicher, dass 'progress' existiert, bevor darauf zugegriffen wird
                 if (playerAchievementState.progress && achievement.check(gameState, playerAchievementState.progress)) {
                    earnAchievement(id);
                    newlyEarned = true;
                }
            }
        }
        if (newlyEarned) {
            saveAchievements(); // Speichere nur, wenn sich etwas geändert hat
        }
    }

    // Markiert einen Erfolg als errungen und gibt Feedback
    function earnAchievement(id) {
        if (!playerAchievementState.earned[id]) {
            const achievement = achievements[id];
            console.log(`Achievement earned: ${achievement.name}`); // Log im Console
            playerAchievementState.earned[id] = true; // Im Status merken
            showFeedback(`🎉 Erfolg freigeschaltet: ${achievement.name}`, 3000); // Längere Anzeige
            playSound('achievement'); // Spezieller Sound
            updateSingleBadgeInGallery(id); // Galerie-Badge aktualisieren
        }
    }

    // Aktualisiert die Anzeige der Erfolge-Galerie
    function updateAchievementsGallery() {
        if (!achievementsGalleryContainer) {
            console.warn("Achievement gallery container not found!");
            return;
        }
        achievementsGalleryContainer.innerHTML = ''; // Leere die Galerie zuerst

        for (const id in achievements) {
            const achievement = achievements[id];
            const badgeElement = document.createElement('div');
            badgeElement.classList.add('badge');
            badgeElement.id = `badge-${id}`;
            badgeElement.setAttribute('data-title', `${achievement.name}\n${achievement.description}`); // Titel und Beschreibung für Tooltip

            if (playerAchievementState.earned[id]) {
                badgeElement.classList.add('earned');
            }

            badgeElement.innerHTML = achievement.svg; // Füge das SVG ein
            achievementsGalleryContainer.appendChild(badgeElement);
        }
    }

    // Aktualisiert nur ein einzelnes Badge, wenn es gerade verdient wurde
    function updateSingleBadgeInGallery(id) {
         const badgeElement = document.getElementById(`badge-${id}`);
         if (badgeElement && !badgeElement.classList.contains('earned')) {
             badgeElement.classList.add('earned');
             // Optional: Kleine Animation hinzufügen
             badgeElement.style.transform = 'scale(1.2)';
             setTimeout(() => { badgeElement.style.transform = 'scale(1)'; }, 300);
         }
    }

    // Aktualisiert Fortschrittszähler (wird an relevanten Stellen aufgerufen)
    function updateAchievementProgress(type, value = null) {
        // Stelle sicher, dass progress initialisiert ist
        if (!playerAchievementState.progress) {
            initializeMissingProgress(); // Initialisiere, falls noch nicht geschehen
        }

        let stateChanged = false;
        switch(type) {
            case 'chameleonClick':
                playerAchievementState.progress.chameleonClicks++;
                stateChanged = true;
                break;
            case 'correctPunctuation':
                playerAchievementState.progress.correctPunctuationClicks++;
                // Stelle sicher, dass clickedPunctuationTypes initialisiert ist
                if (!playerAchievementState.progress.clickedPunctuationTypes) {
                    playerAchievementState.progress.clickedPunctuationTypes = {};
                     TARGETABLE_PUNCTUATION.forEach(ptype => {
                        playerAchievementState.progress.clickedPunctuationTypes[ptype] = false;
                     });
                }
                if (value && TARGETABLE_PUNCTUATION.includes(value)) {
                     playerAchievementState.progress.clickedPunctuationTypes[value] = true;
                }
                // Zähle Runden im schnellen Tempo nur bei korrektem Klick
                if(currentSpeed === 'fast') {
                    playerAchievementState.progress.fastRoundsCompleted = (playerAchievementState.progress.fastRoundsCompleted || 0) + 1;
                }
                stateChanged = true;
                break;
        }
        if (stateChanged) {
            // Nach jeder Fortschrittsänderung prüfen
            // gameState Objekt enthält relevante Infos für die check Funktion
            checkAchievements({ score: score, speed: currentSpeed });
            // saveAchievements wird in checkAchievements aufgerufen, falls nötig
        }
    }

    // =========================================================================
    // Audio Handling
    // =========================================================================
    function playSound(soundId) {
        const audio = audioElements[soundId];
        if (audio && typeof audio.play === 'function') {
            audio.currentTime = 0;
            audio.play().catch(error => {
                // console.warn(`Audio play failed for ${soundId}:`, error.name, error.message);
            });
        } else if (!audio && soundId === 'achievement') {
             console.warn(`Audio element missing for achievement. Please add <audio id="audio-achievement" src="achievement.mp3">.`);
        } else if (!audio) {
             console.warn(`Audio element not found for id: ${soundId}`);
        }
    }

    let audioContextResumed = false;
    function resumeAudioContext() {
        if (audioContextResumed) return;
        try {
            let resumed = false;
            Object.values(audioElements).forEach(audio => {
                if (!resumed && audio && audio.paused) {
                    audio.play().then(() => {
                        audio.pause();
                        resumed = true;
                        audioContextResumed = true;
                    }).catch(()=>{});
                }
            });
            if (!resumed) audioContextResumed = true;
        } catch (e) {
            console.warn("Could not resume audio context:", e);
            audioContextResumed = true;
        }
    }


    // =========================================================================
    // Score & High Score Management
    // =========================================================================
    function updateScoreDisplay() {
        scoreDisplay.textContent = score;
        scoreDisplay.classList.add('updated');
        setTimeout(() => scoreDisplay.classList.remove('updated'), 400);

        if (score > highScore) {
            highScore = score;
            highscoreDisplay.textContent = highScore;
            try {
                localStorage.setItem(HIGHSCORE_STORAGE_KEY, highScore);
            } catch (e) { console.warn("Failed to save high score to localStorage:", e); }
            highscoreDisplay.classList.add('updated');
            setTimeout(() => highscoreDisplay.classList.remove('updated'), 400);
        }
    }
    function addScore(points) {
        score += points;
        updateScoreDisplay();
        // Prüfe auf Score-basierte Erfolge nach jeder Punktänderung
        checkAchievements({ score: score, speed: currentSpeed });
    }
    function loadHighScore() {
        try {
            const storedHighScore = localStorage.getItem(HIGHSCORE_STORAGE_KEY);
            highScore = storedHighScore ? parseInt(storedHighScore, 10) : 0;
        } catch (e) { highScore = 0; console.warn("Failed to load high score from localStorage:", e); }
        highscoreDisplay.textContent = highScore;
    }


    // =========================================================================
    // Settings Management (Theme, Font Size, Speed)
    // =========================================================================
    function applySetting(type, value) {
        try {
            localStorage.setItem(
                type === 'theme' ? THEME_STORAGE_KEY :
                type === 'fontSize' ? FONT_SIZE_STORAGE_KEY :
                SPEED_STORAGE_KEY,
                value
            );
        } catch (e) { console.warn(`Failed to save ${type} setting to localStorage:`, e); }

        if (type === 'theme') {
            currentTheme = value;
            bodyElement.classList.remove('theme-girl', 'theme-boy', 'theme-contrast');
            bodyElement.classList.add(`theme-${value}`);
            themeButtons.forEach(btn => btn.classList.toggle('active', btn.id === `theme-${value}`));
        }
        else if (type === 'fontSize') {
            currentFontSize = value;
            bodyElement.classList.remove('font-size-small', 'font-size-medium', 'font-size-large');
            bodyElement.classList.add(`font-size-${value}`);
            fontButtons.forEach(btn => btn.classList.toggle('active', btn.id === `font-${value}`));
        }
        else if (type === 'speed') {
            currentSpeed = value;
            speedButtons.forEach(btn => btn.classList.toggle('active', btn.id === `speed-${value}`));
            const durationSeconds = (SPEED_SETTINGS[currentSpeed] / 1000) * 0.8;
            document.documentElement.style.setProperty('--chameleon-move-duration', `${durationSeconds}s`);
        }
    }
    function loadSettings() {
        try {
            const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) || 'girl';
            const storedFontSize = localStorage.getItem(FONT_SIZE_STORAGE_KEY) || 'medium';
            const storedSpeed = localStorage.getItem(SPEED_STORAGE_KEY) || 'normal';
            applySetting('theme', storedTheme);
            applySetting('fontSize', storedFontSize);
            applySetting('speed', storedSpeed);
        } catch (e) {
            console.warn("Failed to load settings from localStorage, applying defaults:", e);
            applySetting('theme', 'girl');
            applySetting('fontSize', 'medium');
            applySetting('speed', 'normal');
        }
    }


    // =========================================================================
    // UI & Feedback Functions
    // =========================================================================
     function showFeedback(message, duration = 1500) {
        if (!feedbackDisplay) return;
        const isAchievement = message.includes("Erfolg freigeschaltet");

        // Verzögere normale Meldungen, wenn gerade eine Achievement-Meldung angezeigt wird
        if (!isAchievement && feedbackDisplay.textContent.includes("Erfolg freigeschaltet")) {
             // Prüfe, ob es einen laufenden Timeout gibt, und lösche ihn nicht
             if (!feedbackDisplay.timeoutId) { // Nur wenn kein Timeout läuft
                 setTimeout(() => showFeedback(message, duration), 500); // Verzögert anzeigen
                 return;
             }
        }
        // Lösche vorherigen Timeout, wenn neue Meldung kommt (Achievement überschreibt alles)
        if (feedbackDisplay.timeoutId) clearTimeout(feedbackDisplay.timeoutId);

        feedbackDisplay.textContent = message;
        feedbackDisplay.timeoutId = setTimeout(() => {
            // Setze Timeout ID zurück, wenn er abläuft
            feedbackDisplay.timeoutId = null;
            if (feedbackDisplay.textContent === message) { feedbackDisplay.textContent = ''; }
        }, duration);
    }
     function triggerCorrectEffect(element) {
        const rect = element.getBoundingClientRect();
        const gameAreaRect = gameArea.getBoundingClientRect();
        const top = rect.top - gameAreaRect.top + (rect.height / 2) - (correctEffectElement.offsetHeight / 2);
        const left = rect.left - gameAreaRect.left + (rect.width / 2) - (correctEffectElement.offsetWidth / 2);
        correctEffectElement.style.top = `${top}px`;
        correctEffectElement.style.left = `${left}px`;
        correctEffectElement.classList.remove('active', 'fade');
        void correctEffectElement.offsetWidth;
        correctEffectElement.classList.add('active');
        setTimeout(() => {
            correctEffectElement.classList.remove('active');
            correctEffectElement.classList.add('fade');
        }, 50);
     }


    // =========================================================================
    // Tutorial Logic
    // =========================================================================
     function showTutorial() {
        showingTutorial = true;
        storyTextElement.innerHTML = `
            <div class="tutorial">
                <h3>Willkommen bei CommaChameleon!</h3>
                <p>So spielst du:</p>
                <ol>
                    <li>Stelle oben Design, Schriftgröße und Tempo ein. Das Tempo bestimmt auch die Lesezeit!</li>
                    <li>Klicke auf 'Los geht's!'. Eine Geschichte erscheint.</li>
                    <li>Pass auf! Ein Chamäleon flitzt über den Text.</li>
                    <li>Klicke schnell auf das Chamäleon für <strong>+${BONUS_POINTS_CHAMELEON} Extra-Punkte</strong>!</li>
                    <li>Wenn es weg ist, hast du kurz Zeit zum Lesen. Dann wackelt ein Satzzeichen ( , . ? ! ) bunt.</li>
                    <li>Finde das wackelnde Zeichen und klicke es für <strong>+${POINTS_PER_TARGET} Punkte</strong>!</li>
                    <li>Sammle Punkte und schalte tolle Erfolge frei (unten sichtbar)!</li> <!-- Hinweis auf Erfolge -->
                    <li>Viel Spaß beim Lesen und Punkte sammeln!</li>
                </ol>
            </div>
        `;
        chameleonElement.style.display = 'none';
        removeHighlight();
        startButton.textContent = "Verstanden! Los geht's!";
        startButton.setAttribute('aria-label', "Starte das Spiel nach der Anleitung");
        startButton.disabled = false;
        gameArea.style.minHeight = '15em';
        // Verstecke Erfolge-Galerie während des Tutorials
        const gallery = document.getElementById('achievements-gallery');
        if(gallery) gallery.style.display = 'none';
    }

    // =========================================================================
    // Core Game Logic
    // =========================================================================
    function loadStory() {
        // Zeige Erfolge-Galerie wieder, falls sie versteckt war
        const gallery = document.getElementById('achievements-gallery');
        if(gallery && gallery.style.display === 'none') {
             gallery.style.display = 'block';
        }

        if (!allStories || allStories.length === 0) {
             console.error("Keine Geschichten verfügbar!");
             storyTextElement.innerHTML = `<p style="color: red; font-weight: bold;">Fehler: Keine Geschichten gefunden. Bitte lade die Seite neu.</p>`;
             startButton.textContent = "Fehler";
             startButton.disabled = true;
             return;
        }
        clearTimeout(animationTimeoutId);
        gameInProgress = false;
        targetIsHighlighted = false;
        chameleonClickedThisRound = false;
        showingTutorial = false;
        startButton.disabled = false;
        startButton.textContent = "Start das Spiel!";
        startButton.setAttribute('aria-label', "Starte das Spiel mit einer neuen Geschichte");
        gameArea.style.minHeight = '6em';
        removeHighlight();
        currentStoryPunctuation = [];
        chameleonElement.style.display = 'none';
        showFeedback('');

        const randomIndex = Math.floor(Math.random() * allStories.length);
        const story = allStories[randomIndex];
        let processedHtml = '';
        for (let i = 0; i < story.length; i++) {
            const char = story[i];
            if (TARGETABLE_PUNCTUATION.includes(char)) {
                processedHtml += `<span class="punctuation" data-char="${char}">${char}</span>`;
            } else {
                const escapedChar = char.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">");
                processedHtml += escapedChar;
            }
        }
        storyTextElement.innerHTML = processedHtml;
        currentStoryPunctuation = Array.from(storyTextElement.querySelectorAll('.punctuation'));

        if (currentStoryPunctuation.length === 0) {
            console.warn("Gewählte Geschichte hat keine Satzzeichen:", story);
            storyTextElement.innerHTML = `<p style="font-style: italic;">Hoppla! Diese Geschichte hatte keine Satzzeichen zum Finden. Nimm eine andere!</p>`;
            startButton.textContent = "Andere Geschichte?";
            startButton.disabled = false;
        }
    }
    function getChameleonSpeedInfo() {
        const speedValue = SPEED_SETTINGS[currentSpeed] || SPEED_SETTINGS.normal;
        let moves = 8;
        if (currentSpeed === 'fast') moves = 10;
        if (currentSpeed === 'slow') moves = 7;
        return { interval: speedValue, moves: moves };
    }
    function runChameleon() {
        if (gameInProgress || currentStoryPunctuation.length === 0 || showingTutorial) { return; }
        playSound('appear');
        gameInProgress = true;
        targetIsHighlighted = false;
        chameleonClickedThisRound = false;
        startButton.disabled = true;
        startButton.textContent = "Pass auf!";
        startButton.setAttribute('aria-label', "Chamäleon bewegt sich");
        removeHighlight();
        showFeedback('');
        chameleonElement.classList.remove('clicked-bonus');
        chameleonElement.style.display = 'block';
        const { interval: moveInterval, moves: maxMoves } = getChameleonSpeedInfo();
        const gameAreaRect = gameArea.getBoundingClientRect();
        const chamWidth = chameleonElement.offsetWidth;
        const chamHeight = chameleonElement.offsetHeight;
        const padding = 20;
        const minTop = padding;
        const maxTop = Math.max(minTop + 10, gameArea.clientHeight - chamHeight - padding);
        const minLeft = padding;
        const maxLeft = Math.max(minLeft + 10, gameArea.clientWidth - chamWidth - padding);
        chameleonElement.style.top = `${minTop + 5}px`;
        chameleonElement.style.left = `${minLeft + 5}px`;
        let moves = 0;
        function move() {
            if (!gameInProgress) {
                chameleonElement.style.display = 'none';
                clearTimeout(animationTimeoutId);
                return;
             }
            if (moves >= maxMoves) {
                chameleonElement.style.display = 'none';
                gameInProgress = false;
                const readingDelay = READING_DELAY_SETTINGS[currentSpeed] || READING_DELAY_SETTINGS.normal;
                animationTimeoutId = setTimeout(() => {
                    if (!targetIsHighlighted && !showingTutorial && currentStoryPunctuation.length > 0) {
                         highlightRandomTarget();
                    } else {
                         startButton.disabled = false;
                         startButton.textContent = "Nächste Runde?";
                         startButton.setAttribute('aria-label', startButton.textContent);
                    }
                }, readingDelay);
                return;
            }
            const randomTop = Math.random() * (maxTop - minTop) + minTop;
            const randomLeft = Math.random() * (maxLeft - minLeft) + minLeft;
            chameleonElement.style.top = `${Math.max(padding, randomTop)}px`;
            chameleonElement.style.left = `${Math.max(padding, randomLeft)}px`;
            moves++;
            animationTimeoutId = setTimeout(move, moveInterval);
        }
        animationTimeoutId = setTimeout(move, 100);
    }
    function highlightRandomTarget() {
        if (currentStoryPunctuation.length === 0 || targetIsHighlighted || showingTutorial || gameInProgress) {
            startButton.disabled = false;
            startButton.textContent = showingTutorial ? "Verstanden! Los geht's!" : "Nächste Runde?";
            startButton.setAttribute('aria-label', startButton.textContent);
            return;
        }
        const randomIndex = Math.floor(Math.random() * currentStoryPunctuation.length);
        const targetToHighlight = currentStoryPunctuation[randomIndex];
        if (targetToHighlight) {
            targetToHighlight.classList.add('highlighted-punctuation');
            targetIsHighlighted = true;
            startButton.disabled = true;
            startButton.textContent = "Finde das Zeichen!";
            startButton.setAttribute('aria-label', `Finde das Satzzeichen: ${targetToHighlight.textContent}`);
        } else {
            console.warn("Could not find target element to highlight.");
            startButton.disabled = false;
            startButton.textContent = "Fehler? Nächste?";
            startButton.setAttribute('aria-label', startButton.textContent);
        }
    }
    function removeHighlight() {
        const highlighted = storyTextElement.querySelector('.highlighted-punctuation');
        if (highlighted) {
            highlighted.classList.remove('highlighted-punctuation');
        }
        targetIsHighlighted = false;
    }

    // =========================================================================
    // Event Handlers (mit Achievement Fortschritt)
    // =========================================================================
    function handleChameleonClick(event) {
        event.stopPropagation();
        resumeAudioContext();
        if (gameInProgress && !chameleonClickedThisRound && !showingTutorial) {
            playSound('bonus');
            addScore(BONUS_POINTS_CHAMELEON); // addScore prüft Score-Erfolge
            showFeedback(`Chamäleon erwischt! +${BONUS_POINTS_CHAMELEON} Punkte!`);
            chameleonClickedThisRound = true;
            chameleonElement.classList.add('clicked-bonus');
            setTimeout(() => chameleonElement.classList.remove('clicked-bonus'), 300);
            // Fortschritt für Chamäleon-Fänger aktualisieren
            updateAchievementProgress('chameleonClick');
        }
    }

    function handleTextClick(event) {
        resumeAudioContext();
        if (targetIsHighlighted && event.target.classList.contains('highlighted-punctuation') && !showingTutorial) {
            const clickedElement = event.target;
            const clickedChar = clickedElement.getAttribute('data-char');
            playSound('correct');
            addScore(POINTS_PER_TARGET); // addScore prüft Score-Erfolge
            showFeedback(`Richtig! +${POINTS_PER_TARGET} Punkte!`);
            triggerCorrectEffect(clickedElement);
            removeHighlight();
            startButton.textContent = "Super! Nächste?";
            startButton.setAttribute('aria-label', "Starte die nächste Runde");
            startButton.disabled = false;
            // Fortschritt für Erfolge aktualisieren
            updateAchievementProgress('correctPunctuation', clickedChar);
        }
    }
     function handleStartButtonClick() {
         resumeAudioContext();
         playSound('click');
         if (showingTutorial) {
            try {
                sessionStorage.setItem(TUTORIAL_STORAGE_KEY, 'true');
            }
            catch(e) { console.warn("Failed to set sessionStorage item:", e); }
            showingTutorial = false;
             // Zeige Erfolge-Galerie wieder
             const gallery = document.getElementById('achievements-gallery');
             if(gallery) gallery.style.display = 'block';
            loadStory();
            if (currentStoryPunctuation.length > 0) {
                animationTimeoutId = setTimeout(runChameleon, 150);
            }
         } else if (targetIsHighlighted || !gameInProgress) {
            loadStory();
            if (currentStoryPunctuation.length > 0) {
                animationTimeoutId = setTimeout(runChameleon, 150);
            }
         }
    }

    // =========================================================================
    // Initialization
    // =========================================================================
    function initializeGame() {
        loadSettings();
        loadHighScore();
        loadAchievements(); // Lade Erfolge beim Start

        // Add Settings Listeners
        themeButtons.forEach(button => {
            const theme = button.id.split('-')[1];
            button.addEventListener('click', () => { resumeAudioContext(); playSound('click'); applySetting('theme', theme); });
        });
        fontButtons.forEach(button => {
            const size = button.id.split('-')[1];
            button.addEventListener('click', () => { resumeAudioContext(); playSound('click'); applySetting('fontSize', size); });
        });
         speedButtons.forEach(button => {
            const speed = button.id.split('-')[1];
            button.addEventListener('click', () => { resumeAudioContext(); playSound('click'); applySetting('speed', speed); });
        });

        // Add Core Game Listeners
        startButton.addEventListener('click', handleStartButtonClick);
        chameleonElement.addEventListener('click', handleChameleonClick);
        storyTextElement.addEventListener('click', handleTextClick);

        // Initial Load Logic
        let tutorialAlreadyShown = false;
        try {
            tutorialAlreadyShown = sessionStorage.getItem(TUTORIAL_STORAGE_KEY) === 'true';
        } catch(e) {
            console.warn("sessionStorage access failed, assuming tutorial not shown.", e);
        }

        if (tutorialAlreadyShown) {
            loadStory(); // Startet direkt mit einer Story
            const gallery = document.getElementById('achievements-gallery');
             if(gallery) gallery.style.display = 'block'; // Stelle sicher, dass Galerie sichtbar ist
        } else {
            showTutorial(); // Zeigt zuerst das Tutorial (Galerie wird in loadStory wieder sichtbar)
        }

        updateScoreDisplay();
    }

    // Start the game initialization when the DOM is ready
    document.addEventListener('DOMContentLoaded', initializeGame);

})(); // End of IIFE