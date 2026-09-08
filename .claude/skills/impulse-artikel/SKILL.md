---
description: Write or correct articles for content/impulse/ (the "Digitale Impulse" blog) in a natural, human voice instead of typical AI-generated style. Use when the user asks to write a new Impulse-Artikel, or asks to fix/humanize/edit an existing one because it "sounds like AI".
---

Zielgruppe: ältere Menschen in Bremen-Nord ohne Technik-Vorkenntnisse. Ton wie in `content/impulse/warum-dieser-blog.md` beschrieben: ehrenamtliches, nicht-professionelles Team, das aus echter Erfahrung in Sprechstunden berichtet – nicht wie eine Firma, ein Ratgeber-Portal oder eine Pressemitteilung.

Der Nutzer hat wiederholt zurückgemeldet, dass von Claude geschriebene Texte "nach KI klingen". Diese Checkliste fasst konkrete Muster zusammen, die dafür verantwortlich sind — in bestehenden Artikeln des Repos nachweisbar (siehe Beispiele unten). Vor dem Abgeben eines Entwurfs oder einer Korrektur diese Liste aktiv durchgehen.

## Konkrete Anti-Muster (vermeiden)

1. **Rhetorische Dreier-Frage-Salven.** "Was beschäftigt uns? Was begegnet uns immer wieder? Worüber stolpern wir selbst?" — klingt wie ein Werbetext-Baukasten. Höchstens eine echte Frage, wenn überhaupt.
2. **Parallelismus/Anapher als Stilmittel.** "Wir übersetzen. Wir erklären. Wir zeigen Quellen." oder "Nicht die Technik. Nicht irgendein Verkäufer. Nicht Ihre Kinder... Sondern Sie." — das ist ein bekanntes LLM-Ticks. Normal formulieren, nicht in dieses Dreierschema pressen.
3. **Formelhafter erzählerischer Einstieg.** "Es ist Donnerstagnachmittag, kurz nach drei. In der Sprechstunde sitzt uns Hertha gegenüber, 72 Jahre alt..." — Szene + Name + Alter + wörtliches Zitat als Aufhänger ist ein generisches Blog-Intro-Muster. Nur verwenden, wenn es eine echte, konkrete Begebenheit ist, die der Nutzer tatsächlich erzählt hat — nicht erfinden.
4. **Presseartikel-Floskeln / Superlative.** "hat sich eine besondere Initiative etabliert, die Generationen verbindet", "ein leuchtendes Beispiel", "echten gesellschaftlichen Mehrwert schafft". Klingt nach Pressemitteilung, nicht nach einer Person, die berichtet. Konkret und nüchtern bleiben.
5. **Jede Aufzählung mit Bold-Lead-in.** "- **Einzelchats:** ...", "- **Gruppenchats:** ..." bei jedem einzelnen Punkt einer Liste, in fast jedem Artikel gleich. Nicht jede Liste braucht Fettdruck-Label; manchmal ist Fließtext besser, manchmal eine einfache Liste ohne Bold.
6. **Generisches Fazit-Kapitel am Ende.** Fast jeder Artikel endet mit "## Fazit" + Zusammenfassung des bereits Gesagten + Ermutigungssatz ("Sie müssen nicht alles perfekt beherrschen..."). Nicht jeder Artikel braucht ein Fazit; wenn doch, keine reine Wiederholung, sondern einen neuen Gedanken oder eine offene Frage.
7. **Weichspül-Hedges.** "Ein wichtiges Thema bei jeder digitalen Kommunikation ist...", "Dennoch gibt es einige Punkte zu beachten". Direkter formulieren, ohne die Aussage vorher anzukündigen.
8. **Übertrieben glatte Struktur.** Immer: Einleitung → 4-6 H2-Abschnitte mit Bulletpoints → Fazit. Wenn jeder Artikel exakt gleich aufgebaut ist, fällt das Muster auf. Struktur am tatsächlichen Thema ausrichten, nicht an einer Vorlage.

## Was stattdessen tun

- Sätze unterschiedlich lang lassen, auch mal einen Nebensatz-Klumpen oder eine Alltagsformulierung zulassen, die nicht perfekt rund ist.
- Konkrete, überprüfbare Fakten statt vager Behauptungen ("über 2 Milliarden Menschen nutzen..." ist ok, "ein leuchtendes Beispiel" ist es nicht).
- Wenn eine echte Anekdote aus den Sprechstunden erzählt werden soll: beim Nutzer nachfragen, was tatsächlich passiert ist, statt eine plausible Szene zu erfinden.
- Ruhig auch mal mit einem Fakt oder einer Frage direkt einsteigen, statt immer mit einer Erzählszene.
- Bulletpoints nur dort, wo wirklich eine Aufzählung von Optionen/Schritten gemeint ist — nicht als Standard-Textbaustein für jeden Abschnitt.

## Vorgehen

**Neuer Artikel:** Erst Inhalt/Fakten mit dem Nutzer klären (Thema, evtl. echte Anekdote, wichtigste Punkte). Entwurf schreiben. Danach die Anti-Muster-Liste oben aktiv gegen den eigenen Entwurf prüfen, bevor er gezeigt wird.

**Bestehenden Artikel korrigieren:** Datei in `content/impulse/` lesen, Anti-Muster oben markieren/ersetzen, restlichen Inhalt und Fakten unangetastet lassen. Nicht den ganzen Artikel neu erfinden, nur die KI-Tics raus.

## Referenzbeispiele im Repo

- `content/impulse/warum-dieser-blog.md` — enthält sowohl die Anekdote (Muster 3) als auch die Anapher-Stellen (Muster 2); guter Beleg für die Muster, nicht unbedingt Vorbild für den Ton selbst.
- `content/impulse/ntg.md` — kurzer Text, gutes Beispiel für Presseartikel-Floskeln (Muster 4).
- `content/impulse/whatsapp.md` — Beispiel für die durchgängige Bold-Lead-in-Liste (Muster 5) und generisches Fazit (Muster 6).
