const CACHE_NAME = "my-cache"
const {precacheAndRoute} = require('workbox-precaching/precacheAndRoute');

precacheAndRoute(self.__WB_MANIFEST);
// self.addEventListener('install', e => {
//     console.log('[ServiceWorker] installing');
//     e.waitUntil(
//         caches.open(CACHE_NAME).then(cache => {
//             return cache.addAll([
//                 '/',
//                 '/index.html',
//             ]).then(() => self.skipWaiting())
//         })
//     )
// })

// self.addEventListener('activate', e => {
//     console.log('[ServiceWorker] activating');
//     e.waitUntil(self.clients.claim())
// })