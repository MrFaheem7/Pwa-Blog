const cacheName = 'AppV1';


self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll([
                '/static/js/bundle.js',
                '/favicon.ico',
                '/logo192.png',
                '/manifest.json',
                '/',
                '/users',
                '/about',
                '/index.html',
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});
