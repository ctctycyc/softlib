// Service Worker
// 简单但完整的 Service Worker，用于满足 PWA 打包要求
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// 最基本的 fetch 拦截，确保页面能正常加载
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
