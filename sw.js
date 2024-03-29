/*https://developers.google.com/web/fundamentals/codelabs/offline*/

const cacheName = "restaurant_cache_1";
// console.log('Service Worker: Registered');

/*Array of file path strings in which app uses*/

const cacheFiles = [
  '/',
  '/index.html',
  '/restaurant.html',
  '/data/restaurants.json',

  '/css/styles.css',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js',

  '/restaurant.html?id=1',
  '/restaurant.html?id=2',
  '/restaurant.html?id=3',
  '/restaurant.html?id=4',
  '/restaurant.html?id=5',
  '/restaurant.html?id=6',
  '/restaurant.html?id=7',
  '/restaurant.html?id=8',
  '/restaurant.html?id=9',
  '/restaurant.html?id=10',
  'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
  'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',

  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg'
]

/*Adding 3 event listeners for the different states of the sw:
install it, activate it and fetch*/

/*First, we add an event listener for the install, which checks if the sw
is installed successfully, and decides if installed okay then caches the files*/
self.addEventListener('install', function(event) {
  console.log("The Service Worker is Installed");
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log("The Service Worker is caching the necessary files");
      return cache.addAll(cacheFiles);
    })
  )
})

/*Activate the service worker and added listener for it*/
self.addEventListener('activate', function(event) {
  console.log("The Service Worker is Activated");

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(cacheNames.map(function(thisCacheName) {
        if(thisCacheName != cacheName) {
          console.log("The Service Worker is Removing Cachedfiles from", thisCacheName);
          return caches.delete(thisCacheName);
        }
      }))
    })
  )
})

/*Finally, we fetch the data from a requested URL*/
self.addEventListener('fetch', function(event){
  console.log("The Service Worker is Fetching", event.request.url);
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      /*This will check if the requested URL or files are found in the cache,
      if it is just return the response without fetching again*/
      if (response) {
        console.log("The Service Worker is Found in cache", event.request.url);
        return response;
      }
      /*Of the requested URL is not found in the cache yet, go and fetch it*/
      return fetch(event.request);

    })
    .catch(function() {
      console.log("You seem to be offline, I couldn't find any old cache for the requested URL");
    })
  )
})

self.addEventListener('message', function(event) {
  if(event.data) {
    console.log('Message received:' + event.data);
    self.skipWaiting();
  }
})
