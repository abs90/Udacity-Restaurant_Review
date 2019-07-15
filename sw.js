const cacheName = 'cache_v1';
// console.log('Service Worker: Registered');
/*Array of file path strings in which app uses*/
const cacheFiles = [
  './'
  './index.html'
  './restaurant.html',
  './css/styles.css',
  './js/dbhelper.js',
  './js/main.js',
  './js/restaurant_info.js',
  './data/restaurant.json',
  './img/1.jpg',
  './img/2.jpg',
  './img/3.jpg',
  './img/4.jpg',
  './img/5.jpg',
  './img/6.jpg',
  './img/7.jpg',
  './img/8.jpg',
  './img/9.jpg',
  './img/10.jpg',
]);

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('cache_v1').then(function(cache) {
      return cache.addAll(cacheFiles);
    })
  );
});

self.addEventListener("fetch", function(e) {
  const url = new URL(e.request.url);
  e.respondWith (
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })

  )}
);
