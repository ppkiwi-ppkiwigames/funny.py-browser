// Ultraviolet service worker for Funny.py.
// This file lives inside /service/ so GitHub Pages permits the requested scope.
importScripts("../uv/uv.bundle.js");
importScripts("../uv/uv.config.js");
importScripts(__uv$config.sw || "../uv/uv.sw.js");

const uvWorker = new UVServiceWorker();

self.addEventListener("fetch", (event) => {
  event.respondWith(uvWorker.fetch(event));
});
