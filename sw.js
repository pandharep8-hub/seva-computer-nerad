const CACHE_NAME = "seva-computer-v1";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./register.html",
  "./admin.html",
  "./payment.html",
  "./manifest.json",
  "./icon.svg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  const request = event.request;
  const url = new URL(request.url);

  // Firebase आणि इतर बाहेरील सेवा नेटवर्कवरच चालतील.
  if (url.origin !== self.location.origin) return;

  if (request.method !== "GET") return;

  event.respondWith(
    fetch(request)
      .then(response => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(request, copy);
          });
        }
        return response;
      })
      .catch(() => caches.match(request).then(cached => {
        return cached || caches.match("./index.html");
      }))
  );
});
