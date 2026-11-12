// Register the Ultraviolet worker from inside its own service scope.
// This works on GitHub Pages project sites without requiring custom headers.
(() => {
  if (!("serviceWorker" in navigator)) {
    console.error("Funny.py requires a browser with Service Worker support.");
    return;
  }

  const script = document.currentScript;
  const siteRoot = new URL("../", script.src);
  const workerUrl = new URL("service/uv-sw.js", siteRoot);
  const workerScope = new URL("service/", siteRoot).pathname;

  window.funnyPyServiceWorkerReady = navigator.serviceWorker
    .register(workerUrl.href, { scope: workerScope })
    .then((registration) => {
      console.log("Funny.py service worker registered:", registration.scope);
      return navigator.serviceWorker.ready;
    })
    .catch((error) => {
      console.error("Funny.py service worker registration failed:", error);
      throw error;
    });
})();
