const CACHE_NAME = "medical-app-cache-v1";
const urlsToCache = ["/", "/index.html", "/icons/icon-192.png", "/icons/icon-512.png"];

// Install Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

// Fetch Resources
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
