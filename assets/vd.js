/* ValuationDesk v2 — Shared JS */

// ── PWA ──
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/valuation-toolkit/sw.js').catch(() => {});
  });
}

// ── TOAST ──
const toast = (msg, type = 'info', dur = 3200) => {
  let c = document.getElementById('toast-container');
  if (!c) { c = document.createElement('div'); c.id = 'toast-container'; document.body.appendChild(c); }
  const t = document.createElement('div');
  t.className = `toast ${type}`; t.textContent = msg; c.appendChild(t);
  setTimeout(() => { t.style.cssText = 'opacity:0;transform:translateY(6px);transition:.25s'; setTimeout(() => t.remove(), 260); }, dur);
};

// ── NAV ACTIVE ──
const setActive = () => {
  const path = location.pathname;
  document.querySelectorAll('.nav-links a, .domain-link').forEach(a => {
    const href = a.getAttribute('href') || '';
    a.classList.toggle('active', path.includes(href) && href.length > 1);
  });
};

// ── MOBILE NAV ──
const initMobileNav = () => {
  const btn = document.getElementById('nav-menu-btn');
  const menu = document.getElementById('nav-mobile-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
};

// ── UTILS ──
const VD = {
  fmt: {
    inr: (n, d = 0) => isNaN(n) ? '—' : '₹' + Number(n).toLocaleString('en-IN', { maximumFractionDigits: d }),
    cr: (n, d = 1) => isNaN(n) ? '—' : '₹' + Number(n).toFixed(d) + ' Cr',
    pct: (n, d = 1) => isNaN(n) ? '—' : Number(n).toFixed(d) + '%',
    x: (n, d = 1) => isNaN(n) ? '—' : Number(n).toFixed(d) + 'x',
    usd: (n, d = 1) => isNaN(n) ? '—' : '$' + Number(n).toFixed(d) + 'M',
    num: (n, d = 0) => isNaN(n) ? '—' : Number(n).toLocaleString('en-IN', { maximumFractionDigits: d }),
  },

  countUp(el, target, dur = 900, prefix = '', suffix = '', dec = 0) {
    if (!el) return;
    const start = performance.now();
    const tick = now => {
      const p = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + (target * ease).toFixed(dec) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  },

  debounce(fn, ms = 120) {
    let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); };
  },

  // ── VALUATION VAULT (localStorage) ──
  vault: {
    key: 'vd_vault_v2',
    getAll() { try { return JSON.parse(localStorage.getItem(this.key) || '[]'); } catch { return []; } },
    save(entry) {
      const all = this.getAll();
      all.unshift({ ...entry, id: Date.now(), savedAt: new Date().toLocaleDateString('en-IN') });
      localStorage.setItem(this.key, JSON.stringify(all.slice(0, 50)));
      toast('Saved to your Valuation Vault!', 'success');
    },
    delete(id) {
      const all = this.getAll().filter(e => e.id !== id);
      localStorage.setItem(this.key, JSON.stringify(all));
    },
    count() { return this.getAll().length; }
  },

  // ── DAILY BRIEF rotation ──
  brief: {
    data: [
      { company: 'Reliance Industries', metric: 'EV/EBITDA', value: '11.8x', context: 'vs sector median of 12.0x — broadly in line', sector: 'Energy', insight: 'Despite massive capex in Jio and retail, Reliance trades at a modest premium to pure-play energy peers — reflecting the optionality in its consumer businesses.' },
      { company: 'HDFC Bank', metric: 'P/Book', value: '2.6x', context: 'vs sector median of 2.8x — slight discount', sector: 'Banking', insight: 'Post-merger integration concerns have compressed HDFC Bank\'s multiple. Historically it traded at 3.5x+. This gap is the analyst debate.' },
      { company: 'Infosys', metric: 'EV/Revenue', value: '4.2x', context: 'vs TCS at 5.1x — a 18% discount', sector: 'IT Services', insight: 'Infosys has consistently traded at a discount to TCS despite similar margins. The question is whether superior capital allocation at TCS justifies the gap.' },
      { company: 'Zomato', metric: 'EV/Revenue', value: '8.4x', context: 'vs global food delivery peers at 3-5x', sector: 'E-commerce', insight: 'Zomato commands a significant premium to global peers — reflecting India\'s hypergrowth runway. The bear case: margins never materialise at scale.' },
      { company: 'Asian Paints', metric: 'P/E', value: '52x', context: 'vs Nifty 50 at 22x — a 2.4x premium', sector: 'FMCG', insight: 'Asian Paints\' moat — distribution reach, brand equity, pricing power — has historically justified premium multiples. New competition is the key risk.' },
      { company: 'Tata Motors', metric: 'EV/EBITDA', value: '6.8x', context: 'vs global auto peers at 5-7x — fairly valued', sector: 'Automobiles', insight: 'Tata Motors is essentially a JLR story now. The India business is optionality. JLR\'s EV transition timeline is the key valuation lever.' },
      { company: 'Bajaj Finance', metric: 'P/Book', value: '6.1x', context: 'vs NBFC sector at 2.5x — massive premium', sector: 'NBFC', insight: 'Bajaj Finance\'s premium is a function of superior RoE (25%+), technology-led underwriting, and low NPAs. Any credit cycle turn is the key risk.' },
    ],
    get() {
      const day = Math.floor(Date.now() / 86400000);
      return this.data[day % this.data.length];
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  setActive();
  initMobileNav();

  // Update vault count in nav if element exists
  const vaultBtn = document.getElementById('vault-count');
  if (vaultBtn) vaultBtn.textContent = VD.vault.count();
});
