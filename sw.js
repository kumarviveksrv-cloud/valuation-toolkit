// ValuationDesk Service Worker v2.0
// Configured for GitHub Pages subfolder: /valuation-toolkit/

const BASE = '/valuation-toolkit';
const CACHE_NAME = 'valuationdesk-v2';

const STATIC_ASSETS = [
  BASE + '/',
  BASE + '/index.html',
  BASE + '/manifest.json',
  BASE + '/icons/icon-192.png',
  BASE + '/icons/icon-512.png',
  BASE + '/simulate/index.html',
  BASE + '/domains/valuation-advisory/index.html',
  BASE + '/domains/valuation-advisory/calculators/index.html',
  BASE + '/domains/valuation-advisory/calculators/dcf.html',
  BASE + '/domains/valuation-advisory/calculators/wacc.html',
  BASE + '/domains/valuation-advisory/calculators/comps.html',
  BASE + '/domains/valuation-advisory/calculators/ev-bridge.html',
  BASE + '/domains/valuation-advisory/calculators/sotp.html',
  BASE + '/domains/valuation-advisory/calculators/football-field.html',
  BASE + '/domains/valuation-advisory/calculators/nav.html',
  BASE + '/domains/valuation-advisory/learn/index.html',
  BASE + '/vault/index.html',
  BASE + '/daily-brief/index.html',
  BASE + '/deal-room/index.html',
  BASE + '/domains/investment-banking/index.html',
  BASE + '/domains/investment-banking/calculators/index.html',
  BASE + '/domains/investment-banking/calculators/ib-fees.html',
  BASE + '/domains/investment-banking/calculators/precedent-transactions.html',
  BASE + '/domains/investment-banking/calculators/ipo-pricing.html',
  BASE + '/domains/investment-banking/calculators/debt-capacity.html',
  BASE + '/domains/investment-banking/calculators/capital-raise.html',
  BASE + '/domains/investment-banking/calculators/fairness-opinion.html',
  BASE + '/domains/investment-banking/learn/index.html',
];

// Install — cache all static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
      .catch(err => console.warn('[VD SW] Cache install error:', err))
  );
});

// Activate — clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// Fetch — cache-first for all static assets
self.addEventListener('fetch', event => {
  if (!event.request.url.includes(self.location.origin)) return;

  event.respondWith(
    caches.match(event.request)
      .then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(res => {
          if (res && res.ok) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return res;
        });
      })
      .catch(() => caches.match(BASE + '/index.html'))
  );
});

// Push notifications (future use)
self.addEventListener('push', event => {
  const data = event.data?.json() || {};
  event.waitUntil(
    self.registration.showNotification(data.title || 'ValuationDesk', {
      body: data.body || 'New content available',
      icon: BASE + '/icons/icon-192.png',
      data: { url: data.url || BASE + '/' }
    })
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data.url));
});
