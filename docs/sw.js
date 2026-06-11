/*
 * Service worker — Hospice Nurse Pocket Toolkit (offline support).
 * The page is fully self-contained (HTML+CSS+JS+content in index.html), so caching
 * index.html + icons + manifest makes the whole toolkit work with no signal.
 * Bump CACHE when the page content changes so phones pull the new version.
 */
var CACHE = "hospice-toolkit-v1";
var ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-180.png"
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) { if (k !== CACHE) return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;                  // never intercept the feedback mailto etc.
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;   // let cross-origin requests pass through

  // Network-first for the page itself (so updates show when online), cache fallback offline.
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req).then(function (resp) {
        var copy = resp.clone();
        caches.open(CACHE).then(function (c) { c.put("./index.html", copy); });
        return resp;
      }).catch(function () {
        return caches.match("./index.html").then(function (r) { return r || caches.match("./"); });
      })
    );
    return;
  }

  // Cache-first for the static assets (icons, manifest).
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then(function (cached) {
      return cached || fetch(req).then(function (resp) {
        var copy = resp.clone();
        caches.open(CACHE).then(function (c) { c.put(req, copy); });
        return resp;
      }).catch(function () { return cached; });
    })
  );
});
