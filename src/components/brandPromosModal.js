import { data } from '../js/data.js';
import { store } from '../js/state.js';

export function createBrandPromosModal() {
  const overlay = document.createElement('div');
  overlay.className = 'brand-promos-overlay';

  const modal = document.createElement('div');
  modal.className = 'brand-promos-modal';

  function open(brandId) {
    const brand = data.brands.find(b => b.id === brandId);
    if (!brand) return;

    const promo = data.promos.find(p => p.brandId === brandId);
    const deals = promo ? promo.deals : [];
    const brandLogo = brand.logo || (promo && promo.logo) || '';

    modal.innerHTML = `
      <div class="brand-promos-header">
        <div class="brand-promos-brand">
          ${brandLogo ? `<img src="${brandLogo}" alt="${brand.name}" class="brand-promos-logo" />` : ''}
          <div>
            <h2>${brand.name}</h2>
            <span class="brand-promos-sub">Current promos & specials</span>
          </div>
        </div>
        <button class="brand-promos-close" aria-label="Close">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      </div>

      <div class="brand-promos-body">
        ${deals.length === 0 ? `
          <div class="brand-promos-empty">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <h3>No active promos right now</h3>
            <p>${brand.name} doesn't have published deals at the moment. Reach out to your sales rep for current pricing.</p>
          </div>
        ` : `
          <div class="brand-promos-list">
            ${deals.map(deal => `
              <div class="brand-promo-card">
                <div class="brand-promo-card-left">
                  ${deal.badge ? `<span class="brand-promo-badge">${deal.badge}</span>` : ''}
                  <h4>${deal.title}</h4>
                  <p>${deal.description}</p>
                  <span class="brand-promo-dates">${deal.dates}</span>
                </div>
                <div class="brand-promo-card-right">
                  <div class="brand-promo-discount">${deal.discount}</div>
                  <div class="brand-promo-spend">on ${deal.spend}</div>
                  <button class="btn btn-primary brand-promo-cta" data-action="quote">Get This Deal</button>
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    `;

    modal.querySelector('.brand-promos-close').addEventListener('click', close);
    modal.querySelectorAll('[data-action="quote"]').forEach(btn => {
      btn.addEventListener('click', () => {
        close();
        store.publish('openQuoteModal');
      });
    });

    overlay.classList.add('active');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('active');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => { modal.innerHTML = ''; }, 300);
  }

  overlay.addEventListener('click', close);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) close();
  });

  store.subscribe('openBrandPromos', (brandId) => open(brandId));

  return { overlay, modal };
}
