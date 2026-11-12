// Root-scoped Ultraviolet service worker for Funny.py.
// It must control the app page as well as requests under /service/.
importScripts("./uv/uv.bundle.js");
importScripts("./uv/uv.config.js");
importScripts(__uv$config.sw || "./uv/uv.sw.js");

const uvWorker = new UVServiceWorker();

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
  event.respondWith(uvWorker.fetch(event));
});
