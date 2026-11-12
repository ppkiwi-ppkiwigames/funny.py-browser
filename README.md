# Funny.py Browser

Funny.py is a browser-style frontend powered by Ultraviolet.

## Hosting

The browser includes internal pages such as `funny.py//settings`, `funny.py//apps`, `funny.py//games`, and `funny.py//extensions`. The Apps page includes an installable Interf$ce OS launcher. A built-in Lumin-compatible game SDK is exposed as `window.LuminSDK`.

This repository is configured for the GitHub Pages project site:

`https://ppkiwi-ppkiwigames.github.io/funny.py-browser/`

In GitHub, open **Settings → Pages** and select **Deploy from a branch**, branch **main**, folder **/(root)**.

The Ultraviolet service worker is `uv-sw.js` at the repository root and is registered with the `/funny.py-browser/` scope. This is required so it can control the browser page and intercept proxy requests under `/service/`. The older `service/uv-sw.js` file is retained for compatibility but is not the active worker.

## Bare server requirement

Ultraviolet requires a working Bare server. The current configuration uses `https://tomp.app` in `uv/uv.config.js`. GitHub Pages hosts the static frontend and does not host the Bare server itself. If that Bare endpoint is unavailable or does not support the required protocol, the proxy will not be able to load websites even when the frontend is deployed correctly.

To use another compatible Bare server, update the `bare` value in `uv/uv.config.js`.

## Credits and license

This project uses Ultraviolet by Titanium Network. The browser interface is an independently written Funny.py design inspired by the feature set and layout ideas of [GUST by Nautilus Labs](https://github.com/nautilus-os/GUST); no GUST source code is bundled here. This repository retains the AGPL-3.0 license; see [LICENSE](LICENSE). Changes made for Funny.py include the frontend branding, GitHub Pages path configuration, and service-worker registration layout.
