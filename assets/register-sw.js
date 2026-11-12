// Register Ultraviolet from inside the /service/ directory.
// GitHub Pages does not allow a worker outside that directory to claim its scope.
(() => {
  if (!("serviceWorker" in navigator)) {
    console.error("Funny.py requires Service Worker support.");
    return;
  }

  const scriptUrl = document.currentScript.src;
  const siteRoot = new URL("../", scriptUrl);
  const workerUrl = new URL("service/uv-sw.js", siteRoot);
  const workerScope = new URL("service/", siteRoot).pathname;

  async function registerFunnyPyWorker() {
    const registration = await navigator.serviceWorker.register(workerUrl.href, {
      scope: workerScope
    });

    // An existing active worker can serve immediately.
    if (registration.active && registration.active.state === "activated") {
      return registration;
    }

    // On first install, wait for this scoped worker to activate.
    const worker = registration.installing || registration.waiting;
    if (!worker) {
      throw new Error("The Ultraviolet service worker did not start installing.");
    }

    await new Promise((resolve, reject) => {
      const checkState = () => {
        if (worker.state === "activated") {
          worker.removeEventListener("statechange", checkState);
          resolve();
        } else if (worker.state === "redundant") {
          worker.removeEventListener("statechange", checkState);
          reject(new Error("The Ultraviolet service worker became redundant."));
        }
      };
      worker.addEventListener("statechange", checkState);
      checkState();
    });

    return registration;
  }

  window.funnyPyServiceWorkerReady = registerFunnyPyWorker()
    .then((registration) => {
      console.log("Funny.py service worker active for:", registration.scope);
      return registration;
    })
    .catch((error) => {
      console.error("Funny.py service worker registration failed:", error);
      throw error;
    });
})();
