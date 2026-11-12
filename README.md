# Funny.py Browser

Funny.py is a single-file browser built on the GUST WISP proxy engine.

## Run it

Open `index.html` in a modern browser or host that one file on a static host such as GitHub Pages. The browser proxy engine does not use a Service Worker. The page itself contains the GUST/libcurl.js runtime; WISP endpoints and a few presentation/game-catalog libraries are loaded over the network.

## Funny.py internal pages

- `funny.py//apps` — install and launch Interf$ce OS.
- `funny.py//apps/interface-os` — Interf$ce OS app page.
- `funny.py//extensions` — Funny.py extension hub; opens the built-in extension store.
- `funny.py//games` — LuminSDK game catalog.
- `funny.py//games/<game-id>` — launch a LuminSDK game.
- `funny.py//settings` — Funny.py settings shortcut.

The toolbar includes direct Apps, Games, and Extensions shortcuts. App installation is stored in the browser's local storage.

## WISP servers

Open **Settings → Connection → WISP Server**. Presets include:

- Default: `wss://wisp.mercurywork.shop/`
- Truffled: `wss://truffled.lol`
- Anura: `wss://anura.pro`
- Any custom `wss://` endpoint

A WISP server must be online and support the WISP protocol. Public endpoints can change or become unavailable.

## LuminSDK

The Games hub uses the documented LuminSDK headless API to load the game catalog and launch games. It loads the SDK from the LuminSDK jsDelivr distribution, so the catalog requires an internet connection.

## Upstream source and license

The proxy engine in this repository is modified from **GUST by Nautilus Labs**: https://github.com/nautilus-os/GUST

GUST's original single-file browser engine and its vendored libcurl.js/WISP implementation are included and modified for Funny.py. Original upstream copyright and license notices are retained in the source where present. The upstream project is licensed under **GNU AGPL v3.0**. This modified distribution is also provided under AGPL-3.0; see [LICENSE](LICENSE) and [GUST-NOTICE.md](GUST-NOTICE.md).

Modifications include Funny.py branding, Funny.py internal app/extension/game routes, the Interf$ce OS launcher, LuminSDK game catalog integration, and WISP server presets. If you run a modified version as a network service, comply with the AGPL source-sharing requirements.
