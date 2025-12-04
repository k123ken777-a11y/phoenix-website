const CACHE_NAME = 'memory-videos-cache-v1';
const urlsToCache = [
  '/phoenix-website/',
  '/phoenix-website/index.html',
  '/phoenix-website/videos.html',
  '/phoenix-website/style.css',
  '/phoenix-website/TeamLogo192.png',
  '/phoenix-website/TeamLogo512.png'
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

