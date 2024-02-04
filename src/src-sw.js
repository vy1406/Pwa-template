import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { clientsClaim } from "workbox-core";
import { ExpirationPlugin } from "workbox-expiration";
import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { CacheFirst, StaleWhileRevalidate } from "workbox-strategies";

clientsClaim();
self.skipWaiting();
precacheAndRoute(self.__WB_MANIFEST)

const imagesCacheName = 'images';
const sheetCacheName = 'google-fonts-stylesheets';
const fontCacheName = 'google-fonts-webfonts';
const staticCacheName = 'static-resources'
const maxAgeSeconds = 60 * 60 * 24 * 365;
const maxEntries = 30;
const thirtyDays = 30 * 24 * 60 * 60;

registerRoute(
  ({url}) => url.origin === 'https://fonts.googleapis.com',
  new StaleWhileRevalidate({
    cacheName: sheetCacheName,
  })
);

// Cache the underlying font files with a cache-first strategy for 1 year.
registerRoute(
  ({url}) => url.origin === 'https://fonts.gstatic.com',
  new CacheFirst({
    cacheName: fontCacheName,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds,
        maxEntries,
      }),
    ],
  })
);

registerRoute(
    ({request}) => request.destination === 'image',
    new CacheFirst({
      cacheName: imagesCacheName,
      plugins: [
        new CacheableResponsePlugin({
          statuses: [0, 200],
        }),
        new ExpirationPlugin({
          maxEntries: 60,
          maxAgeSeconds: thirtyDays,
        }),
      ],
    })
  );

registerRoute(
    ({request}) => request.destination === "script" || request.destination === "style",
    new StaleWhileRevalidate({
        cacheName: staticCacheName
    })
)