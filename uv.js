importScripts('/static/src/js/uv/uv.bundle.js');
importScripts('/static/src/js/uv/uv.config.js');
importScripts('/static/src/js/uv/uv.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
