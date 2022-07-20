import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { CacheFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { registerRoute } from 'workbox-routing';

const sw = "service-worker.js"; // it is needed because parcel will not recognize this as a file and not precess in its manner
navigator.serviceWorker
  .register(sw)
  .then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;
      if (installingWorker == null) {
        return;
      }
      installingWorker.onstatechange = () => {
        if (installingWorker.state === "installed") {
          if (navigator.serviceWorker.controller) {
            console.log(
              "New content is available and will be used when all " +
                "tabs for this page are closed. See https://bit.ly/CRA-PWA."
            );
          } else {
            console.log("Content is cached for offline use.");
          }
        }
      };
    };
  })
  .catch(error => {
    console.error("Error during service worker registration:", error);
  });

registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200]
      }),
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 дней
      })
    ]
  })
);

registerRoute(
  ({url}) => url.pathname.startsWith('/img/'),
  new CacheFirst({
    cacheName: 'image-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      })
    ]
  })
);

// @ts-ignore
declare let self: ServiceWorkerGlobalScope;

// self.__WB_DISABLE_DEV_LOGS = true

// listen to message event from window
self.addEventListener('message', event => {
  // HOW TO TEST THIS?
  // Run this in your browser console:
  //     window.navigator.serviceWorker.controller.postMessage({command: 'log', message: 'hello world'})
  // OR use next-pwa injected workbox object
  // window.workbox.messageSW({command: 'log', message: 'hello world'})
  // console.log(event?.data);
});

self.addEventListener('push', (event) => {
  console.log('event', event);

  try {
    console.log('event?.data.text()', event?.data.text()); 
    event?.waitUntil(
      self.registration.showNotification(event?.data.text(), {
        body: event?.data.text(),
      })
    )
  } catch (error) {
  
  }

})