/* ═══════════════════════════════════════════════
   ValuationDesk Shared JS v1.0
   ═══════════════════════════════════════════════ */

// ── PWA SERVICE WORKER REGISTRATION ──
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/valuation-toolkit/sw.js')
      .then(reg => console.log('[VD] SW registered:', reg.scope))
      .catch(err => console.warn('[VD] SW failed:', err));
  });
}

// ── PWA INSTALL PROMPT ──
let deferredInstallPrompt = null;

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredInstallPrompt = e;
  const btn = document.getElementById('pwa-install-btn');
  if (btn) btn.classList.add('visible');
});

function triggerPWAInstall() {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  deferredInstallPrompt.userChoice.then(result => {
    if (result.outcome === 'accepted') {
      VD.toast('App installed! Find ValuationDesk on your home screen.', 'success');
    }
    deferredInstallPrompt = null;
    const btn = document.getElementById('pwa-install-btn');
    if (btn) btn.classList.remove('visible');
  });
}

window.addEventListener('appinstalled', () => {
  VD.toast('ValuationDesk installed successfully!', 'success');
});

// ── MOBILE NAV ──
function initMobileNav() {
  const hamburger = document.getElementById('vd-hamburger');
  const mobileMenu = document.getElementById('vd-mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    hamburger.querySelectorAll('span')[0].style.transform = isOpen ? 'rotate(45deg) translate(5px, 5px)' : '';
    hamburger.querySelectorAll('span')[1].style.opacity = isOpen ? '0' : '1';
    hamburger.querySelectorAll('span')[2].style.transform = isOpen ? 'rotate(-45deg) translate(5px, -5px)' : '';
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// ── ACTIVE NAV LINK ──
function setActiveNav() {
  const path = window.location.pathname;
  document.querySelectorAll('.vd-nav-links a, .vd-mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && path.includes(href) && href !== '/') {
      link.classList.add('active');
    } else if (href === '/' && (path === '/' || path === '/index.html')) {
      link.classList.add('active');
    }
  });
}

// ── TOAST NOTIFICATIONS ──
const VD = {
  toast(message, type = 'info', duration = 3500) {
    let container = document.getElementById('vd-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'vd-toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = `vd-toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = '0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  },

  // Format numbers Indian style
  formatINR(n, decimals = 0) {
    if (isNaN(n)) return '—';
    return '₹' + Number(n).toLocaleString('en-IN', { maximumFractionDigits: decimals });
  },

  formatCr(n, decimals = 1) {
    if (isNaN(n)) return '—';
    return '₹' + Number(n).toFixed(decimals) + ' Cr';
  },

  formatPct(n, decimals = 1) {
    if (isNaN(n)) return '—';
    return Number(n).toFixed(decimals) + '%';
  },

  formatMultiple(n, decimals = 1) {
    if (isNaN(n)) return '—';
    return Number(n).toFixed(decimals) + 'x';
  },

  // Animate a number counting up
  countUp(el, target, duration = 900, prefix = '', suffix = '', decimals = 0) {
    const start = 0;
    const startTime = performance.now();
    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = start + (target - start) * eased;
      el.textContent = prefix + current.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  },

  // Debounce
  debounce(fn, delay = 150) {
    let timer;
    return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay); };
  },

  // Generate Excel download via SheetJS (loaded per-page)
  downloadExcel(data, filename) {
    if (typeof XLSX === 'undefined') {
      VD.toast('Excel library not loaded on this page', 'error');
      return;
    }
    const wb = XLSX.utils.book_new();
    Object.entries(data).forEach(([sheetName, rows]) => {
      const ws = XLSX.utils.aoa_to_sheet(rows);
      XLSX.utils.book_append_sheet(wb, ws, sheetName);
    });
    XLSX.writeFile(wb, filename);
    VD.toast('Excel file downloaded!', 'success');
  },

  // Load JSON data file
  async loadData(path) {
    try {
      const res = await fetch(path);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      console.error('[VD] Data load failed:', path, err);
      return null;
    }
  },

  // Intersection observer for scroll animations
  observeAnimations() {
    const els = document.querySelectorAll('[data-animate]');
    if (!els.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('anim-fade-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    els.forEach(el => observer.observe(el));
  }
};

// ── INIT ON DOM READY ──
document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  setActiveNav();
  VD.observeAnimations();

  // PWA install button
  const installBtn = document.getElementById('pwa-install-btn');
  if (installBtn) installBtn.addEventListener('click', triggerPWAInstall);
});
