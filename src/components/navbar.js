import { store } from '../js/state.js';
import { cart } from '../js/cart.js';
import { router } from '../js/router.js';
import { data } from '../js/data.js';

export function createNavbar() {
  const nav = document.createElement('nav');
  nav.className = 'navbar';

  nav.innerHTML = `
    <div class="nav-left">
      <button class="nav-hamburger" id="nav-hamburger" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
      <div class="nav-links">
        <a href="#" class="nav-link" data-route="/">Home</a>
        <a href="#" class="nav-link" data-route="#catalogs">Catalogs</a>
        <a href="#" class="nav-link" data-route="/products">Products</a>
        <a href="#" class="nav-link" data-route="#featured">Promos and Specials</a>
      </div>
    </div>
    <div class="nav-center">
      <div class="nav-brand" role="button" tabindex="0">
        <img src="/logos/toys_2000_logo.png" alt="Toys2000" class="nav-brand-logo" />
      </div>
    </div>
    <div class="nav-right">
      <a href="https://toys2000.markettime.com/signup" class="nav-quote-btn" id="nav-quote-btn">
        Sign up today
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
      <button class="nav-cart-btn" id="open-cart-btn" aria-label="Cart">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
        </svg>
        <span class="cart-badge" id="cart-badge">${cart.getItemsCount()}</span>
      </button>
    </div>

  `;

  // Create mobile menu as separate elements (outside the nav pill)
  const mobileOverlay = document.createElement('div');
  mobileOverlay.className = 'mobile-menu-overlay';
  mobileOverlay.id = 'mobile-menu-overlay';

  const mobileMenu = document.createElement('div');
  mobileMenu.className = 'mobile-menu';
  mobileMenu.id = 'mobile-menu';
  mobileMenu.innerHTML = `
    <div class="mobile-menu-header">
      <img src="/logos/toys_2000_logo.png" alt="Toys2000" class="mobile-menu-logo" />
      <button class="mobile-menu-close" id="mobile-menu-close" aria-label="Close menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
    </div>
    <div class="mobile-search-results" id="mobile-search-results"></div>
    <div class="mobile-menu-links">
      <a href="#" class="mobile-menu-link" data-route="/">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
        Home
      </a>
      <a href="#" class="mobile-menu-link" data-route="#catalogs">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
        Catalogs
      </a>
      <a href="#" class="mobile-menu-link" data-route="/products">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a4 4 0 00-8 0v2"/></svg>
        All Products
      </a>
      <a href="#" class="mobile-menu-link" data-route="#featured">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="22" height="18" rx="2"/><path d="M1 9h22"/></svg>
        Promos and Specials
      </a>
      <div class="mobile-menu-divider"></div>
      <span class="mobile-menu-label">Categories</span>
      ${data.categories.map(cat => `
        <a href="#" class="mobile-menu-link mobile-menu-link-sub" data-category="${cat.id}">
          ${cat.name}
        </a>
      `).join('')}
      <div class="mobile-menu-divider"></div>
      <a href="https://toys2000.markettime.com/signup" class="mobile-menu-link mobile-menu-link-cta">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>
        Sign up today
      </a>
    </div>
  `;

  // Append mobile menu to body (not inside nav pill)
  document.body.appendChild(mobileOverlay);
  document.body.appendChild(mobileMenu);

  // --- Navigation ---
  nav.querySelector('.nav-brand').addEventListener('click', () => {
    router.navigate('/');
    closeMobileMenu();
  });

  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const route = link.dataset.route;
      if (route && route.startsWith('#')) {
        // Scroll to section on current page
        router.navigate('/');
        setTimeout(() => {
          const el = document.querySelector(route);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 400);
      } else if (route) {
        router.navigate(route);
      }
    });
  });

  // Nav quote button removed since it's a direct external link now

  // --- Cart ---
  nav.querySelector('#open-cart-btn').addEventListener('click', () => {
    store.publish('toggleCart', true);
  });

  // --- Navigation links (Desktop) ---
  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const route = link.dataset.route;
      if (route && route.startsWith('#')) {
        router.navigate('/');
        setTimeout(() => {
          const el = document.querySelector(route);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 400);
      } else if (route) {
        router.navigate(route);
      }
    });
  });

  // --- Brand Logo (Go home) ---
  nav.querySelector('.nav-brand').addEventListener('click', () => {
    router.navigate('/');
  });

  // --- Mobile menu ---
  const hamburger = nav.querySelector('#nav-hamburger');
  const mobileClose = mobileMenu.querySelector('#mobile-menu-close');

  function openMobileMenu() {
    mobileOverlay.classList.add('active');
    mobileMenu.classList.add('active');
    hamburger.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileOverlay.classList.remove('active');
    mobileMenu.classList.remove('active');
    hamburger.classList.remove('active');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', openMobileMenu);
  mobileOverlay.addEventListener('click', closeMobileMenu);
  mobileClose.addEventListener('click', closeMobileMenu);

  mobileMenu.querySelectorAll('.mobile-menu-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const route = link.dataset.route;
      const action = link.dataset.action;
      const category = link.dataset.category;
      closeMobileMenu();
      if (action === 'quote') {
        store.publish('openQuoteModal');
      } else if (category) {
        router.navigate('/');
        setTimeout(() => {
          const el = document.querySelector(`[data-category="${category}"]`);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 400);
      } else if (route && route.startsWith('#')) {
        router.navigate('/');
        setTimeout(() => {
          const el = document.querySelector(route);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 400);
      } else if (route) {
        router.navigate(route);
      }
    });
  });

  // --- Search functionality removed as requested ---
  const mobileSearchInput = mobileMenu.querySelector('#mobile-search-input');
  const mobileSearchResults = mobileMenu.querySelector('#mobile-search-results');

  if (mobileSearchInput && mobileSearchResults) {
    let mobileSearchDebounce;
    mobileSearchInput.addEventListener('input', () => {
      clearTimeout(mobileSearchDebounce);
      // Search functionality can be restored here if needed
    });
  }

  // --- Scroll behavior: add shadow when scrolled ---
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        nav.classList.toggle('navbar-scrolled', window.scrollY > 10);
        ticking = false;
      });
      ticking = true;
    }
  });

  // --- Update badge ---
  store.subscribe('cartUpdated', () => {
    const badge = nav.querySelector('#cart-badge');
    if (badge) {
      const count = cart.getItemsCount();
      badge.textContent = count;
      badge.style.transform = 'scale(1.4)';
      badge.classList.toggle('hidden', count === 0);
      setTimeout(() => badge.style.transform = 'scale(1)', 200);
    }
  });

  return nav;
}
