const CACHE_NAME = 'memory-videos-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/videos.html',
  '/style.css',
  '/Team Logo.png',
  '/Team Logo.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
