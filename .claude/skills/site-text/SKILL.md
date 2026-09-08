---
description: Write or correct any prose text on this site (content/impulse/ articles, content/ueber.md, content/_index.md, standorte descriptions, etc.) in a natural, human voice instead of typical AI-generated style. Use whenever the user asks to write new site text, or fix/humanize/edit existing text because it "sounds like AI". Does NOT apply to legal pages (impressum.md, datenschutz.md, bilderrechte.md) — those stay formal/precise on purpose.
---

Zielgruppe: ältere Menschen in Bremen-Nord ohne Technik-Vorkenntnisse. Ton wie in `content/impulse/warum-dieser-blog.md` beschrieben: ehrenamtliches, nicht-professionelles Team, das aus echter Erfahrung in Sprechstunden berichtet – nicht wie eine Firma, ein Ratgeber-Portal oder eine Pressemitteilung.

Der Nutzer hat wiederholt zurückgemeldet, dass von Claude geschriebene Texte "nach KI klingen", und ausdrücklich gewünscht, dass das für **alle** Texte auf der Seite gilt, nicht nur für Impulse-Artikel. Diese Checkliste fasst konkrete Muster zusammen, die dafür verantwortlich sind — in bestehenden Texten des Repos nachweisbar (siehe Beispiele unten). Vor dem Abgeben eines Entwurfs oder einer Korrektur diese Liste aktiv durchgehen.

**Ausnahme:** `content/impressum.md`, `content/datenschutz.md`, `content/bilderrechte.md` — rechtliche Pflichttexte, bewusst formal, hier nicht "menschlicher" machen.

## Konkrete Anti-Muster (vermeiden)

1. **Rhetorische Dreier-Frage-Salven.** "Was beschäftigt uns? Was begegnet uns immer wieder? Worüber stolpern wir selbst?" — klingt wie ein Werbetext-Baukasten. Höchstens eine echte Frage, wenn überhaupt.
2. **Parallelismus/Anapher als Stilmittel.** "Wir übersetzen. Wir erklären. Wir zeigen Quellen." oder "Nicht die Technik. Nicht irgendein Verkäufer. Nicht Ihre Kinder... Sondern Sie." — bekannter LLM-Tick. Normal formulieren, nicht in ein Dreierschema pressen.
3. **Formelhafter erzählerischer Einstieg.** "Es ist Donnerstagnachmittag, kurz nach drei. In der Sprechstunde sitzt uns Hertha gegenüber, 72 Jahre alt..." — Szene + Name + Alter + wörtliches Zitat als Aufhänger ist ein generisches Blog-Intro-Muster. Nur verwenden, wenn es eine echte, konkrete Begebenheit ist, die der Nutzer tatsächlich erzählt hat — nicht erfinden.
4. **Presseartikel-Floskeln / Superlative.** "hat sich eine besondere Initiative etabliert, die Generationen verbindet", "ein leuchtendes Beispiel", "echten gesellschaftlichen Mehrwert schafft". Klingt nach Pressemitteilung, nicht nach einer Person, die berichtet. Konkret und nüchtern bleiben.
5. **Jede Aufzählung mit Bold-Lead-in.** "- **Einzelchats:** ...", "- **Gruppenchats:** ..." bei jedem einzelnen Punkt einer Liste, in fast jedem Text gleich. Nicht jede Liste braucht Fettdruck-Label; manchmal ist Fließtext besser, manchmal eine einfache Liste ohne Bold.
6. **Generisches Fazit-Kapitel am Ende.** Fast jeder Artikel endet mit "## Fazit" + Zusammenfassung des bereits Gesagten + Ermutigungssatz ("Sie müssen nicht alles perfekt beherrschen..."). Nicht jeder Text braucht ein Fazit; wenn doch, keine reine Wiederholung, sondern ein neuer Gedanke oder eine offene Frage.
7. **Weichspül-Hedges.** "Ein wichtiges Thema bei jeder digitalen Kommunikation ist...", "Dennoch gibt es einige Punkte zu beachten". Direkter formulieren, ohne die Aussage vorher anzukündigen.
8. **Übertrieben glatte Struktur.** Immer: Einleitung → 4-6 H2-Abschnitte mit Bulletpoints → Fazit. Wenn jeder Text exakt gleich aufgebaut ist, fällt das Muster auf. Struktur am tatsächlichen Thema ausrichten, nicht an einer Vorlage.
9. **Staccato-Ein-Satz-Absätze für dramatische Wirkung.** "Kein Problem!" / "Keine ungewollten Datenweitergaben." / "Keine Zwangs-Updates." als jeweils eigener Absatz hintereinander. Wirkt wie eine Werbepräsentation, nicht wie geschriebener Text. Zusammenhängende Gedanken in normale Absätze/Sätze fassen.
10. **Ausrufezeichen-Overkill.** "Ein Thema, das begeistert!", "Der Bedarf ist riesig!", "ein echtes Risiko!" — künstlicher Enthusiasmus. Sparsam einsetzen, nur wo wirklich etwas überraschend oder dringend ist.
11. **Meta-Ankündigungen statt einfach direkt zu sein.** "Ehrlichkeit ist wichtig:" oder "Unsere ehrliche Antwort lautet:" vor der eigentlichen Aussage. Einfach die ehrliche Aussage selbst schreiben, ohne sie vorher anzukündigen.
12. **Große Schlussfolgerungen aus kleinen Stichproben.** "35–40 Teilnehmer kamen — das zeigt: Der Bedarf ist riesig!" Zahlen für sich stehen lassen oder vorsichtiger einordnen, statt daraus eine große Behauptung abzuleiten.
13. **Dramatische Bold-Einzeiler als rhetorischer Kniff.** "**Sie haben die Wahl.**" oder "**Ja – aber mit etwas Offenheit für Neues.**" als eigener, freistehender Merksatz. Fettdruck für wirklich wichtige Fakten reservieren (Preis, Frist, Telefonnummer), nicht für rhetorische Pointen.

## Was stattdessen tun

- Sätze unterschiedlich lang lassen, auch mal einen Nebensatz-Klumpen oder eine Alltagsformulierung zulassen, die nicht perfekt rund ist.
- Konkrete, überprüfbare Fakten statt vager Behauptungen ("über 2 Milliarden Menschen nutzen..." ist ok, "ein leuchtendes Beispiel" ist es nicht).
- Wenn eine echte Anekdote erzählt werden soll: beim Nutzer nachfragen, was tatsächlich passiert ist, statt eine plausible Szene zu erfinden.
- Ruhig auch mal mit einem Fakt oder einer Frage direkt einsteigen, statt immer mit einer Erzählszene.
- Bulletpoints nur dort, wo wirklich eine Aufzählung von Optionen/Schritten gemeint ist — nicht als Standard-Textbaustein für jeden Abschnitt.
- Zusammengehörige kurze Sätze zu normalen Absätzen zusammenfassen statt sie einzeln abzusetzen.

## Vorgehen

**Neuer Text:** Erst Inhalt/Fakten mit dem Nutzer klären (Thema, evtl. echte Anekdote, wichtigste Punkte). Entwurf schreiben. Danach die Anti-Muster-Liste oben aktiv gegen den eigenen Entwurf prüfen, bevor er gezeigt wird.

**Bestehenden Text korrigieren:** Datei lesen, Anti-Muster oben markieren/ersetzen, restlichen Inhalt und Fakten unangetastet lassen. Nicht den ganzen Text neu erfinden, nur die KI-Tics raus. Rechtstexte (siehe Ausnahme oben) nicht anfassen.

## Referenzbeispiele im Repo

- `content/impulse/warum-dieser-blog.md` — Anekdote (Muster 3), Anapher-Stellen (Muster 2).
- `content/impulse/ntg.md` — Presseartikel-Floskeln (Muster 4).
- `content/impulse/whatsapp.md` — durchgängige Bold-Lead-in-Liste (Muster 5), generisches Fazit (Muster 6).
- `content/impulse/warum-linux.md`, `content/impulse/linux-kostenlos.md` — Staccato-Absätze, Ausrufezeichen-Overkill, dramatische Bold-Einzeiler (Muster 9, 10, 13).
