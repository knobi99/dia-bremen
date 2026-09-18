# Abstimmung-Backend (Cloudflare Worker)

Kleines, kostenloses Server-Backend für die Abstimmungsseite `/abstimmung/`.
Wird gebraucht, weil GitHub Pages nur statische Dateien ausliefert und keine
Stimmen entgegennehmen oder speichern kann. Läuft komplett getrennt von der
Hugo-Seite, im kostenlosen Cloudflare-Workers-Tarif (100.000 Anfragen/Tag).

## Einmalige Einrichtung

1. Kostenlosen Account auf https://dash.cloudflare.com anlegen (falls noch nicht vorhanden).
2. In diesem Ordner:
   ```
   npx wrangler login
   npx wrangler kv namespace create ABSTIMMUNG_KV
   ```
3. Die Ausgabe enthält eine `id = "..."`. Diese in `wrangler.toml` bei
   `HIER_DEINE_KV_NAMESPACE_ID_EINTRAGEN` eintragen.
4. Deployen:
   ```
   npx wrangler deploy
   ```
   Die Ausgabe zeigt die fertige URL, z. B.
   `https://dia-bremen-abstimmung.<dein-account>.workers.dev`.
5. Diese URL in `content/abstimmung/index.md` bei `abstimmung_api:` eintragen
   und die Hugo-Seite neu pushen.

## Danach testen

- `GET  https://.../results` → aktuelle Stimmen als JSON
- `POST https://.../vote` mit Body `{"topic":"sicher-bestellen"}` → zählt eine Stimme

## Updates

Nach Änderungen an `worker.js` einfach erneut `npx wrangler deploy` ausführen.
Die KV-Daten (bisherige Stimmen) bleiben dabei erhalten.

## Grenzen

- Verhindert Mehrfachabstimmen nur per Browser-Speicher (localStorage) auf der
  Website – kein Personenbezug, keine IP-Speicherung (bewusst, aus
  Datenschutzgründen), aber dadurch auch kein Schutz vor absichtlichem
  Missbrauch durch technisch versierte Besucher. Für eine informelle
  Themen-Abstimmung ausreichend.
