import { store } from '../js/state.js';

export function createQuoteModal() {
  const overlay = document.createElement('div');
  overlay.className = 'quote-overlay';

  const modal = document.createElement('div');
  modal.className = 'quote-modal';

  function open(prefill = {}) {
    modal.innerHTML = `
      <button class="quote-close" aria-label="Close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
      <div class="quote-header">
        <div class="quote-header-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/></svg>
        </div>
        <h2>Request a Quote</h2>
        <p>Get custom wholesale pricing for your business. We typically respond within 24 hours.</p>
      </div>
      <form class="quote-form" id="quote-form">
        <div class="quote-form-row">
          <div class="quote-field">
            <label>Full Name <span class="required">*</span></label>
            <input type="text" name="name" required placeholder="John Smith" />
          </div>
          <div class="quote-field">
            <label>Company Name <span class="required">*</span></label>
            <input type="text" name="company" required placeholder="Your Business LLC" />
          </div>
        </div>
        <div class="quote-form-row">
          <div class="quote-field">
            <label>Email <span class="required">*</span></label>
            <input type="email" name="email" required placeholder="john@company.com" />
          </div>
          <div class="quote-field">
            <label>Phone</label>
            <input type="tel" name="phone" placeholder="(555) 123-4567" />
          </div>
        </div>
        <div class="quote-form-row">
          <div class="quote-field">
            <label>Business Type</label>
            <select name="businessType">
              <option value="">Select...</option>
              <option value="resort">Resort / Hotel</option>
              <option value="retail">Retail Store</option>
              <option value="gift-shop">Gift Shop</option>
              <option value="distributor">Distributor</option>
              <option value="rental">Rental Business</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div class="quote-field">
            <label>Estimated Order Size</label>
            <select name="orderSize">
              <option value="">Select...</option>
              <option value="10-49">10-49 units</option>
              <option value="50-99">50-99 units</option>
              <option value="100-249">100-249 units</option>
              <option value="250-499">250-499 units</option>
              <option value="500+">500+ units</option>
            </select>
          </div>
        </div>
        <div class="quote-field">
          <label>Products of Interest</label>
          <input type="text" name="products" placeholder="e.g. Giant Flamingo Float, Towable Tubes..." value="${prefill.product ? `${prefill.product} (${prefill.brand}) - Qty: ${prefill.qty || 1}` : ''}" />
        </div>
        <div class="quote-field">
          <label>Message</label>
          <textarea name="message" rows="4" placeholder="Tell us about your needs, timeline, or any specific requirements..."></textarea>
        </div>
        <div class="quote-actions">
          <button type="submit" class="btn btn-primary quote-submit-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            Submit Quote Request
          </button>
          <button type="button" class="btn btn-outline quote-cancel-btn">Cancel</button>
        </div>
      </form>
    `;

    modal.querySelector('.quote-close').addEventListener('click', close);
    modal.querySelector('.quote-cancel-btn').addEventListener('click', close);

    modal.querySelector('#quote-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = modal.querySelector('.quote-submit-btn');
      btn.innerHTML = `
        <div class="spinner-sm"></div>
        Sending...
      `;
      btn.disabled = true;

      // Simulate send
      setTimeout(() => {
        close();
        store.publish('toast', { message: 'Quote request sent! We\'ll get back to you within 24 hours.', type: 'success', duration: 5000 });
      }, 1500);
    });

    overlay.classList.add('active');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('active');
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  overlay.addEventListener('click', close);

  store.subscribe('openQuoteModal', (prefill) => {
    open(prefill || {});
  });

  return { overlay, modal };
}
