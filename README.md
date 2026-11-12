# Funny.py Browser

Funny.py is a browser-style frontend powered by Ultraviolet.

## Hosting

This repository is configured for the GitHub Pages project site:

`https://ppkiwi-ppkiwigames.github.io/funny.py-browser/`

In GitHub, open **Settings → Pages** and select **Deploy from a branch**, branch **main**, folder **/(root)**.

The Ultraviolet service worker is located at `service/uv-sw.js`. It must remain inside the `service/` directory because its scope is `/funny.py-browser/service/`. Moving it to the repository root can cause the browser to reject registration on GitHub Pages.

## Bare server requirement

Ultraviolet requires a working Bare server. The current configuration uses `https://tomp.app` in `uv/uv.config.js`. GitHub Pages hosts the static frontend and does not host the Bare server itself. If that Bare endpoint is unavailable or does not support the required protocol, the proxy will not be able to load websites even when the frontend is deployed correctly.

To use another compatible Bare server, update the `bare` value in `uv/uv.config.js`.

## Credits and license

This project uses Ultraviolet by Titanium Network. The original template and frontend inspiration are credited in the upstream project. This repository retains the AGPL-3.0 license; see [LICENSE](LICENSE). Changes made for Funny.py include the frontend branding, GitHub Pages path configuration, and service-worker registration layout.
