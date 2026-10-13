// ValuationDesk Service Worker v12.0
// Configured for GitHub Pages subfolder: /valuation-toolkit/

const BASE = '/valuation-toolkit';
const CACHE_NAME = 'valuationdesk-v12';

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
  BASE + '/domains/corporate-finance/index.html',
  BASE + '/domains/corporate-finance/calculators/index.html',
  BASE + '/domains/corporate-finance/calculators/irr-npv.html',
  BASE + '/domains/corporate-finance/calculators/capital-structure.html',
  BASE + '/domains/corporate-finance/calculators/dividend-policy.html',
  BASE + '/domains/corporate-finance/calculators/working-capital.html',
  BASE + '/domains/corporate-finance/calculators/dupont.html',
  BASE + '/domains/corporate-finance/calculators/operating-leverage.html',
  BASE + '/domains/corporate-finance/calculators/breakeven-cvp.html',
  BASE + '/domains/corporate-finance/calculators/roic-eva.html',
  BASE + '/domains/corporate-finance/learn/index.html',
  BASE + '/domains/ma/index.html',
  BASE + '/domains/ma/calculators/index.html',
  BASE + '/domains/ma/calculators/accretion-dilution.html',
  BASE + '/domains/ma/calculators/deal-premium.html',
  BASE + '/domains/ma/calculators/synergy.html',
  BASE + '/domains/ma/calculators/merger-model.html',
  BASE + '/domains/ma/calculators/deal-financing.html',
  BASE + '/domains/ma/learn/index.html',
  BASE + '/domains/pe/index.html',
  BASE + '/domains/pe/calculators/index.html',
  BASE + '/domains/pe/calculators/lbo-model.html',
  BASE + '/domains/pe/calculators/returns-waterfall.html',
  BASE + '/domains/pe/calculators/debt-schedule.html',
  BASE + '/domains/pe/calculators/fund-economics.html',
  BASE + '/domains/pe/calculators/carry-calculator.html',
  BASE + '/domains/pe/calculators/portfolio-irr.html',
  BASE + '/domains/pe/learn/index.html',
  BASE + '/domains/vc/index.html',
  BASE + '/domains/vc/calculators/index.html',
  BASE + '/domains/vc/calculators/cap-table.html',
  BASE + '/domains/vc/calculators/pre-post-money.html',
  BASE + '/domains/vc/calculators/vc-method.html',
  BASE + '/domains/vc/calculators/dilution-tracker.html',
  BASE + '/domains/vc/calculators/runway-calculator.html',
  BASE + '/domains/vc/calculators/safe-notes.html',
  BASE + '/domains/vc/calculators/option-pool.html',
  BASE + '/domains/vc/learn/index.html',
  BASE + '/domains/equity-research/index.html',
  BASE + '/domains/equity-research/calculators/index.html',
  BASE + '/domains/equity-research/calculators/stock-screener.html',
  BASE + '/domains/equity-research/calculators/earnings-model.html',
  BASE + '/domains/equity-research/calculators/price-target.html',
  BASE + '/domains/equity-research/calculators/comps-spreads.html',
  BASE + '/domains/equity-research/calculators/rating-framework.html',
  BASE + '/domains/equity-research/calculators/sector-rotation.html',
  BASE + '/domains/equity-research/learn/index.html',
  BASE + '/domains/credit-analysis/index.html',
  BASE + '/domains/credit-analysis/calculators/index.html',
  BASE + '/domains/credit-analysis/calculators/credit-ratios.html',
  BASE + '/domains/credit-analysis/calculators/debt-capacity.html',
  BASE + '/domains/credit-analysis/calculators/interest-coverage.html',
  BASE + '/domains/credit-analysis/calculators/leverage-analysis.html',
  BASE + '/domains/credit-analysis/calculators/credit-scoring.html',
  BASE + '/domains/credit-analysis/calculators/default-risk.html',
  BASE + '/domains/credit-analysis/calculators/bond-pricing.html',
  BASE + '/domains/credit-analysis/learn/index.html',
  BASE + '/domains/transaction-advisory/index.html',
  BASE + '/domains/transaction-advisory/calculators/index.html',
  BASE + '/domains/transaction-advisory/calculators/ebitda-bridge.html',
  BASE + '/domains/transaction-advisory/calculators/normalisation.html',
  BASE + '/domains/transaction-advisory/calculators/working-capital-peg.html',
  BASE + '/domains/transaction-advisory/calculators/quality-of-earnings.html',
  BASE + '/domains/transaction-advisory/calculators/deal-checklist.html',
  BASE + '/domains/transaction-advisory/learn/index.html',
  BASE + '/domains/financial-due-diligence/index.html',
  BASE + '/domains/financial-due-diligence/calculators/index.html',
  BASE + '/domains/financial-due-diligence/calculators/pl-restatement.html',
  BASE + '/domains/financial-due-diligence/calculators/revenue-quality.html',
  BASE + '/domains/financial-due-diligence/calculators/working-capital-deepdive.html',
  BASE + '/domains/financial-due-diligence/calculators/cash-flow-verification.html',
  BASE + '/domains/financial-due-diligence/calculators/red-flag-scanner.html',
  BASE + '/domains/financial-due-diligence/learn/index.html',
  BASE + '/domains/asset-management/index.html',
  BASE + '/domains/asset-management/calculators/index.html',
  BASE + '/domains/asset-management/calculators/portfolio-performance.html',
  BASE + '/domains/asset-management/calculators/risk-adjusted-returns.html',
  BASE + '/domains/asset-management/calculators/alpha-attribution.html',
  BASE + '/domains/asset-management/calculators/asset-allocation.html',
  BASE + '/domains/asset-management/calculators/fund-screener.html',
  BASE + '/domains/asset-management/learn/index.html',
  BASE + '/domains/investment-management/index.html',
  BASE + '/domains/investment-management/calculators/index.html',
  BASE + '/domains/investment-management/calculators/portfolio-rebalancing.html',
  BASE + '/domains/investment-management/calculators/risk-return-matrix.html',
  BASE + '/domains/investment-management/calculators/benchmark-attribution.html',
  BASE + '/domains/investment-management/calculators/goal-based-allocation.html',
  BASE + '/domains/investment-management/calculators/portfolio-optimizer.html',
  BASE + '/domains/investment-management/learn/index.html',
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
