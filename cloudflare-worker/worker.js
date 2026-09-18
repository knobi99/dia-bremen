/**
 * Abstimmungs-Backend für "Digital Dabei".
 * Speichert Stimmen in Cloudflare KV (Binding: ABSTIMMUNG_KV, Schlüssel: "ergebnisse").
 * Erlaubt nur ein serverseitig validiertes +1 pro Thema, kein beliebiges Überschreiben.
 */

const ERLAUBTE_THEMEN = [
    'sicher-bestellen',
    'fahrplaner-oepnv',
    'abfallkalender-behoerden',
    'zeitung-online',
    'messenger-alternativen',
    'email-sicher',
    'browser-google-alternativen',
    'fotos-verwalten',
    'libreoffice-word'
];

const ERLAUBTE_ORIGINS = [
    'https://dia-bremen.de',
    'http://localhost:1313'
];

const KV_KEY = 'ergebnisse';

function corsHeaders(origin) {
    var headers = {
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Vary': 'Origin'
    };
    if (ERLAUBTE_ORIGINS.indexOf(origin) !== -1) {
        headers['Access-Control-Allow-Origin'] = origin;
    }
    return headers;
}

function leereErgebnisse() {
    var ergebnisse = {};
    ERLAUBTE_THEMEN.forEach(function (id) { ergebnisse[id] = 0; });
    return ergebnisse;
}

async function ladeErgebnisse(env) {
    var gespeichert = await env.ABSTIMMUNG_KV.get(KV_KEY, { type: 'json' });
    return gespeichert || leereErgebnisse();
}

export default {
    async fetch(request, env) {
        var origin = request.headers.get('Origin') || '';
        var headers = corsHeaders(origin);
        var url = new URL(request.url);

        if (request.method === 'OPTIONS') {
            return new Response(null, { status: 204, headers: headers });
        }

        if (url.pathname === '/results' && request.method === 'GET') {
            var ergebnisse = await ladeErgebnisse(env);
            headers['Content-Type'] = 'application/json';
            return new Response(JSON.stringify(ergebnisse), { headers: headers });
        }

        if (url.pathname === '/vote' && request.method === 'POST') {
            var body;
            try {
                body = await request.json();
            } catch (e) {
                return new Response(JSON.stringify({ fehler: 'Ungültige Anfrage' }), { status: 400, headers: headers });
            }

            var thema = body && body.topic;
            if (ERLAUBTE_THEMEN.indexOf(thema) === -1) {
                return new Response(JSON.stringify({ fehler: 'Unbekanntes Thema' }), { status: 400, headers: headers });
            }

            var aktuell = await ladeErgebnisse(env);
            aktuell[thema] = (aktuell[thema] || 0) + 1;
            await env.ABSTIMMUNG_KV.put(KV_KEY, JSON.stringify(aktuell));

            headers['Content-Type'] = 'application/json';
            return new Response(JSON.stringify(aktuell), { headers: headers });
        }

        return new Response('Not found', { status: 404, headers: headers });
    }
};
