import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

clientsClaim();

precacheAndRoute(self.__WB_MANIFEST); /* eslint-disable-line no-restricted-globals */

const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
registerRoute(
  
  ({ request, url }) => {
    
    if (request.mode !== 'navigate') {
      return false;
    } 

    if (url.pathname.startsWith('/_')) {
      return false;
    } 

    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    } 

    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
);


registerRoute(
  
    ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.png'), /* eslint-disable-line no-restricted-globals */
  new StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

self.addEventListener('message', (event) => { /* eslint-disable-line no-restricted-globals */
    if (event.data && event.data.type === 'SKIP_WAITING') { /* eslint-disable-line no-restricted-globals */
        self.skipWaiting();/* eslint-disable-line no-restricted-globals */
  }
});