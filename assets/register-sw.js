// Register Ultraviolet at the Funny.py site root.
// The browser page must be controlled by the worker for /service/ proxy requests to work.
(() => {
  if (!("serviceWorker" in navigator)) {
    console.error("Funny.py requires Service Worker support.");
    window.funnyPyServiceWorkerReady = Promise.reject(new Error("Service Workers are unavailable."));
    return;
  }

  const scriptUrl = document.currentScript.src;
  const siteRoot = new URL("../", scriptUrl);
  const workerUrl = new URL("uv-sw.js", siteRoot);
  const workerScope = siteRoot.pathname;

  async function registerFunnyPyWorker() {
    const registration = await navigator.serviceWorker.register(workerUrl.href, {
      scope: workerScope
    });
    await navigator.serviceWorker.ready;

    if (!navigator.serviceWorker.controller) {
      await new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
          navigator.serviceWorker.removeEventListener("controllerchange", onChange);
          reject(new Error("The Funny.py service worker activated but did not take control. Reload the page."));
        }, 7000);
        function onChange() {
          if (navigator.serviceWorker.controller) {
            clearTimeout(timeout);
            navigator.serviceWorker.removeEventListener("controllerchange", onChange);
            resolve();
          }
        }
        navigator.serviceWorker.addEventListener("controllerchange", onChange);
        onChange();
      });
    }

    console.log("Funny.py root service worker active:", registration.scope);
    return registration;
  }

  window.funnyPyServiceWorkerReady = registerFunnyPyWorker().catch(error => {
    console.error("Funny.py service worker registration failed:", error);
    throw error;
  });
})();
