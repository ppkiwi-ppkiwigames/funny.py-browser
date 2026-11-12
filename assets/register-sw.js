
const BASE = "/funny.py-browser/";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register(BASE + "uv-sw.js", {
    scope: BASE + "service/"
  }).then(() => {
    console.log("Funny.py service worker registered!");
  }).catch(error => {
    console.error("Service worker registration failed:", error);
  });
}
