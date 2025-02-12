const cacheName = "pwa-counter-v1";
const filesToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/app.js",
  "/manifest.json",
  "/images/android-chrome-192x192.png",
  "/images/android-chrome-512x512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then(async (cache) => {
      try {
        await cache.addAll(filesToCache);
        console.log("Files cached successfully ✅");
      } catch (error) {
        console.error("Caching failed", error);
      }
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
