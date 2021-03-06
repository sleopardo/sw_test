'use strict';
importScripts('./sw/serviceworker-cache-polyfill.js');

var CACHE_NAME = 'v3';
var urlsToCache = [
  "https://static.mlstatic.com/org-img/ch/ui/0.13.4/chico-jquery.min.js?cors",
  "https://resources.mlstatic.com/homes/js/main_js__ve088811fe60.gz.js",
  "https://static.mlstatic.com/org-img/chico/img/favicon.ico?new",
  "https://sleopardo.github.io/sw_test/sw/resources/chico-mesh.min.css",
  "https://sleopardo.github.io/sw_test/sw/resources/main_css__ve088811fe60.gz.css"
];

this.addEventListener('install', function(eve) {
  eve.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

// Remove all caches
// this.addEventListener('activate', function(event) {
//   event.waitUntil(
//     caches.keys().then(function(keys) {
//       // caches.delete('v1');
//       keys.forEach(function(key) {
//         caches.delete(key);
//       })
//     })
//   );
// });

this.addEventListener('fetch', function(eve) {
  eve.respondWith(
    caches.match(eve.request).then(function(response) {
      return response || fetch(eve.request);
    })
  );
});
