
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('harpagrau-store').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/chuvas.html',
        '/saudosa.html',
        '/manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
