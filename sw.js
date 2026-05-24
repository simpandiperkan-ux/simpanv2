// ================================
// SIMPAN SUPER APP V3 FINAL SW
// NO OLD CACHE VERSION
// ================================

const CACHE_NAME = "simpan-v3-final-" + Date.now();

const urlsToCache = [
  "./",
  "./index.html",
  "./qr.html",
  "./kapal.html",
  "./verifikasi-kapal.html",
  "./background_simpan.png",
  "./logo-app.png",
  "./logo-bateng.png",
  "./logo-simpan.png"
];

// ================================
// INSTALL
// ================================

self.addEventListener("install", (event) => {
  console.log("SW Installed");

  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// ================================
// ACTIVATE
// ================================

self.addEventListener("activate", (event) => {
  console.log("SW Activated");

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Deleting old cache:", cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );

  return self.clients.claim();
});

// ================================
// FETCH
// ================================

self.addEventListener("fetch", (event) => {

  // Skip non-GET requests
  if (event.request.method !== "GET") return;

  event.respondWith(

    fetch(event.request, {
      cache: "no-store"
    })

    .then((response) => {

      // Clone response
      const responseClone = response.clone();

      // Save latest cache
      caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, responseClone);
      });

      return response;

    })

    .catch(() => {

      return caches.match(event.request);

    })

  );

});