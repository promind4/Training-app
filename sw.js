const CACHE_NAME = 'training-app-v3';
const ASSETS = [
  './',
  './index.html',
  './data.js',
  './icon.png',
  './manifest.json',
  './ios-frame.jsx',
  './tweaks-panel.jsx',
  'https://unpkg.com/react@18.3.1/umd/react.development.js',

  'https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js',
  'https://unpkg.com/@babel/standalone@7.29.0/babel.min.js',
  'https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
