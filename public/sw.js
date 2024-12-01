self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('madamaid-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/login',
        '/jobs',
        '/profile'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});