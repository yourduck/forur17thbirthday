self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('birthday-cache').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/raccoon.png',
                '/raccoon_flipped.png',
                '/background.png',
                '/happy_birthday.mp3'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});