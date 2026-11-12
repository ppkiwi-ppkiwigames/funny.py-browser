# Funny.py Browser

Funny.py keeps its original browser interface and uses the GUST WISP/libcurl.js engine for proxied page requests.

## Run it

Keep **both** `index.html` and `gust-engine.html` in the same folder. Open `index.html` or host the repository on a static host such as GitHub Pages. The Funny.py interface loads the GUST runtime from `gust-engine.html` and hides the engine's own browser chrome, so the visible browser remains Funny.py.

The GUST runtime is self-contained, including its libcurl.js/WASM implementation. It does not require Ultraviolet or a Service Worker. WISP endpoints and the LuminSDK game catalog require an internet connection.

## Funny.py internal pages

- `funny.py//apps` — install and launch Interf$ce OS.
- `funny.py//apps/interface-os` — Interf$ce OS app page.
- `funny.py//extensions` — Funny.py extension hub.
- `funny.py//games` — LuminSDK game catalog.
- `funny.py//games/<game-id>` — launch a LuminSDK game.
- `funny.py//settings` — Funny.py settings, including WISP selection.

## WISP servers

Settings include:

- Default: `wss://wisp.mercurywork.shop/`
- Truffled: `wss://truffled.lol`
- Anura: `wss://anura.pro`
- Any custom `wss://` endpoint

The selected Funny.py WISP preference is passed into the GUST runtime. A WISP server must be online and support the WISP protocol; public endpoints can change or become unavailable.

## Upstream source and license

The proxy engine is modified from **GUST by Nautilus Labs**: https://github.com/nautilus-os/GUST

GUST's original single-file browser engine and its vendored libcurl.js/WISP implementation are retained in `gust-engine.html`. The visible Funny.py interface and internal app/game hubs are in `index.html`. GUST is licensed under **GNU AGPL v3.0**; the vendored libcurl.js code includes its LGPL v3 notice. See [LICENSE](LICENSE) and [GUST-NOTICE.md](GUST-NOTICE.md). If you run a modified version as a network service, comply with the AGPL source-sharing requirements.
