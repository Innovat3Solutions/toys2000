import { data } from '../js/data.js';
import { router } from '../js/router.js';
import { cart } from '../js/cart.js';
import { store } from '../js/state.js';

export function homeView() {
  const container = document.createElement('div');
  container.className = 'home-page';

  container.innerHTML = `
    <!-- ============ HERO ============ -->
    <section class="hero" id="hero">
      <!-- Fullscreen background images -->
      ${data.heroSlides.map((slide, i) => `
        <div class="hero-slide ${i === 0 ? 'active' : ''}" data-index="${i}">
          <div class="hero-slide-bg" style="background-image: url('${slide.image}')"></div>
        </div>
      `).join('')}
      <div class="hero-overlay"></div>

      <!-- Centered content — one block per slide -->
      <div class="hero-center">
        ${data.heroSlides.map((slide, i) => `
          <div class="hero-content ${i === 0 ? 'active' : ''}" data-index="${i}">
            <div class="hero-tag animate-item">${slide.tag}</div>
            <h1 class="hero-headline animate-item">${slide.headline.replace(slide.accentWord, `<span class="hero-accent hero-accent--${slide.textEffect} ${slide.accentClass || ''}">${slide.accentWord}</span>`)}</h1>
            <p class="hero-sub animate-item">${slide.subheadline}</p>
            <div class="hero-ctas">
              <a href="${slide.ctaPrimary.link}" class="btn-hero-primary" data-route="${slide.ctaPrimary.link}" ${slide.ctaPrimary.category ? `data-category="${slide.ctaPrimary.category}"` : ''}>${slide.ctaPrimary.text}</a>
              <a href="${slide.ctaSecondary.link}" class="btn-hero-secondary" data-route="${slide.ctaSecondary.link}">${slide.ctaSecondary.text}</a>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Dots + progress -->
      <div class="hero-bottom">
        <div class="hero-dots">
          ${data.heroSlides.map((slide, i) => `
            <button class="hero-dot ${i === 0 ? 'active' : ''}" data-slide="${i}" aria-label="${slide.tag}">
              <span class="hero-dot-fill"></span>
            </button>
          `).join('')}
        </div>
        <div class="hero-progress">
          <div class="hero-progress-bar" id="hero-progress-bar"></div>
        </div>
      </div>
    </section>

    <div class="main-content-gradient">

    <!-- ============ DIGITAL CATALOGS GALLERY ============ -->
    <section class="section catalog-gallery" id="catalogs">
      <div class="section-container">
        <div class="catalog-gallery-header">
          <div class="catalog-gallery-text">
            <span class="catalog-eyebrow">Digital Catalogs</span>
            <h2 class="catalog-headline">Browse the Latest Product <span class="title-cursive title-orange">Catalogs</span></h2>
            <p class="catalog-subtext">Flip through full product lines, specs, and pricing from our manufacturers. Plan your next order without leaving the page.</p>
          </div>
          <div class="catalog-gallery-arrows">
            <button class="catalog-arrow catalog-arrow-prev" id="catalog-prev" aria-label="Previous catalog">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button class="catalog-arrow catalog-arrow-next" id="catalog-next" aria-label="Next catalog">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      <div class="section-container section-container--wide">
        <div class="catalog-gallery-track-wrap">
          <div class="catalog-gallery-track" id="catalog-gallery-track">
            ${data.catalogs.filter(c => c.catalogUrl || c.pdfUrl).map(catalog => {
              const brand = data.brands.find(b => b.id === catalog.id);
              const bgImage = catalog.image || (brand ? brand.heroImage : '');
              const brandLogo = catalog.logo || (brand ? brand.logo : '');
              return `
              <div class="catalog-gallery-card" data-catalog-id="${catalog.id}">
                <div class="catalog-gallery-card-img">
                  <img src="${bgImage}" alt="${catalog.name}" loading="lazy" />
                  <div class="catalog-gallery-card-overlay"></div>
                  ${brandLogo ? `
                  <div class="catalog-gallery-card-logo">
                    <img src="${brandLogo}" alt="${catalog.name} logo" />
                  </div>` : ''}
                </div>
                <div class="catalog-gallery-card-body">
                  <span class="catalog-gallery-card-year">${catalog.year} Catalog</span>
                  <h3 class="catalog-gallery-card-title">${catalog.name}</h3>
                  <p class="catalog-gallery-card-desc">${catalog.description}</p>
                  <span class="catalog-gallery-card-cta">
                    ${catalog.pdfUrl
                      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                         View PDF`
                      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
                         Open Catalog`
                    }
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </div>
              </div>`;
            }).join('')}
          </div>
        </div>
      </div>
    </section>

    <!-- ============ INTERACTIVE BENTO CATEGORY GALLERY ============ -->
    <section class="section interactive-gallery-section" id="categories">
      <div class="section-container">
        <div class="section-header section-header-center">
          <div>
            <h2 class="section-title">Shop by <span class="title-cursive title-green">Category</span></h2>
            <p class="section-subtitle">A collection of stunning categories. Drag to explore, click to shop.</p>
          </div>
        </div>
      </div>

      <div class="category-gallery-viewport" id="category-gallery">
        <div class="category-gallery-grid">
          ${data.categories.map((cat, i) => {
            const spans = ['span-large', 'span-tall', 'span-small', 'span-small', 'span-tall', 'span-large', 'span-small', 'span-small'];
            const spanClass = spans[i % spans.length];

            return `
              <div class="category-gallery-item ${spanClass}" data-category-id="${cat.id}" tabindex="0" role="button" aria-label="View ${cat.name}">
                <img src="${cat.image}" alt="${cat.name}" loading="lazy" class="cg-img" draggable="false" />
                <div class="cg-gradient"></div>
                <div class="cg-content">
                  <h3 class="cg-title">${cat.name}</h3>
                  <p class="cg-desc">${cat.description}</p>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </section>

    <!-- ============ PROMO BANNER ============ -->
    <section class="promo-banner-section">
      <div class="promo-banner" style="background: ${data.promoBanners[0].bgColor}">
        <div class="promo-banner-content">
          <h2>${data.promoBanners[0].title}</h2>
          <p>${data.promoBanners[0].subtitle}</p>
          <a href="${data.promoBanners[0].link}" class="btn btn-promo">${data.promoBanners[0].cta}</a>
        </div>
        ${data.promoBanners[0].image ? `<div class="promo-banner-image" style="background-image: url('${data.promoBanners[0].image}')"></div>` : ''}
      </div>
    </section>

    <!-- ============ PROMOS & SPECIALS ============ -->
    <section class="section promos-section" id="featured">
      <div class="section-container">
        <div class="section-header section-header-center">
          <div>
            <h2 class="section-title">Promos <span class="promo-and-sign">&</span> Specials</h2>
            <p class="section-subtitle">Current deals and wholesale pricing from our manufacturers</p>
          </div>
        </div>
        ${(() => {
          // Flatten all deals with brand info attached
          const allDeals = data.promos.flatMap(promo => {
            const brand = data.brands.find(b => b.id === promo.brandId);
            const brandLogo = promo.logo || (brand ? brand.logo : '');
            return promo.deals.map(deal => ({ ...deal, brand: promo.brand, brandLogo, image: promo.image }));
          });

          // Group by category
          const groups = [
            {
              id: 'spring',
              label: 'Spring Specials',
              icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>',
              deals: allDeals.filter(d => /april|may|spring|season/i.test(d.title + d.dates))
            },
            {
              id: 'new-customer',
              label: 'New Customers',
              icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>',
              deals: allDeals.filter(d => /new customer|first order/i.test(d.title + d.description + d.badge))
            },
            {
              id: 'shipping',
              label: 'Free Freight',
              icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
              deals: allDeals.filter(d => /free freight|FFA|free shipping/i.test(d.title + d.discount + d.description) && !/new customer|first order/i.test(d.title + d.badge))
            },
            {
              id: 'volume',
              label: 'Volume Discounts',
              icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',
              deals: allDeals.filter(d => /special at|volume|tier|% off/i.test(d.title + d.description) && !/april|new customer|first order/i.test(d.title + d.badge))
            }
          ];

          // Remove empty groups and deduplicate (a deal may match multiple)
          const seen = new Set();
          const cleanGroups = groups.map(g => ({
            ...g,
            deals: g.deals.filter(d => {
              const key = d.title + d.brand;
              if (seen.has(key)) return false;
              seen.add(key);
              return true;
            })
          })).filter(g => g.deals.length > 0);

          // Any remaining unmatched deals
          const allKeys = new Set(cleanGroups.flatMap(g => g.deals.map(d => d.title + d.brand)));
          const uncategorized = allDeals.filter(d => !allKeys.has(d.title + d.brand));
          if (uncategorized.length) {
            cleanGroups.push({ id: 'other', label: 'Other Offers', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>', deals: uncategorized });
          }

          return `
            <div class="promo-tabs">
              ${cleanGroups.map((g, i) => `
                <button class="promo-tab ${i === 0 ? 'active' : ''}" data-group="${g.id}">
                  ${g.icon}
                  ${g.label}
                  <span class="promo-tab-count">${g.deals.length}</span>
                </button>
              `).join('')}
            </div>
            ${cleanGroups.map((g, i) => `
              <div class="promo-group ${i === 0 ? 'active' : ''}" data-group="${g.id}">
                <div class="promo-cards">
                  ${g.deals.map(deal => `
                    <div class="promo-card">
                      <div class="promo-card-left">
                        <div class="promo-card-brand-row">
                          ${deal.brandLogo ? `<img src="${deal.brandLogo}" alt="${deal.brand}" class="promo-card-logo" />` : ''}
                          <span class="promo-card-brand">${deal.brand}</span>
                          ${deal.badge ? `<span class="promo-card-badge">${deal.badge}</span>` : ''}
                        </div>
                        <h4 class="promo-card-title">${deal.title}</h4>
                        <p class="promo-card-desc">${deal.description}</p>
                        <span class="promo-card-dates">${deal.dates}</span>
                      </div>
                      <div class="promo-card-right">
                        <div class="promo-card-discount">${deal.discount}</div>
                        <div class="promo-card-spend">on ${deal.spend}</div>
                        <button class="btn btn-primary promo-card-cta" data-action="quote">Get This Deal</button>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          `;
        })()}
      </div>
    </section>

    <!-- ============ MANUFACTURERS TICKER ============ -->
    <section class="section brands-section" id="brands">
      <div class="section-container">
        <div class="section-header section-header-center">
          <div>
            <h2 class="section-title">Our <span class="title-cursive">Manufacturers</span></h2>
            <p class="section-subtitle">${data.brands.length} trusted brands delivering quality toys worldwide</p>
          </div>
        </div>
      </div>
      <div class="mfr-ticker">
        <div class="mfr-ticker-track">
          ${data.brands.map(brand => `
            <div class="mfr-ticker-item" data-brand="${brand.id}">
              <img src="${brand.logo || brand.heroImage}" alt="${brand.name}" class="mfr-ticker-logo" />
              <span class="mfr-ticker-name">${brand.name}</span>
            </div>
          `).concat(data.brands.map(brand => `
            <div class="mfr-ticker-item" aria-hidden="true" data-brand="${brand.id}">
              <img src="${brand.logo || brand.heroImage}" alt="${brand.name}" class="mfr-ticker-logo" />
              <span class="mfr-ticker-name">${brand.name}</span>
            </div>
          `)).join('')}
        </div>
      </div>
    </section>

    <!-- ============ ABOUT ============ -->
    <section class="section about-section" id="about">
      <div class="section-container">
        <div class="about-layout">
          <div class="about-intro">
            <span class="about-eyebrow">About Toys 2000</span>
            <h2 class="about-headline">The place for <span class="title-cursive title-orange">all things kids.</span></h2>
            <p class="about-lead">We are your trusted sales representative, connecting retailers with top vendors across the toy, outdoor recreation, and sporting goods industries.</p>
            <p class="about-lead">Serving the entire Eastern US and Puerto Rico, plus the Caribbean as far east as St. Lucia, we bring the best products directly to you.</p>
            <div class="about-cta-row">
              <a href="mailto:Jim@toys2000.fun" class="btn btn-hero-primary">Get in Touch</a>
              <a href="tel:+17863670891" class="btn btn-hero-secondary">(786) 367 0891</a>
            </div>
          </div>
          <div class="about-story-card">
            <h3>Spreading Joy Through Every Partnership</h3>
            <p>Toys 2000 has built lasting relationships with top vendors to bring the best selection of toys and recreational products to retailers across the entire Eastern US, Puerto Rico, and the Caribbean as far east as St. Lucia.</p>
            <p>Our dedicated team works closely with each retailer to ensure the right products reach the right shelves, helping businesses thrive while bringing smiles to children everywhere.</p>
          </div>
        </div>
      </div>
    </section>

    </div><!-- /.main-content-gradient -->

    <!-- ============ FOOTER ============ -->
    <footer class="site-footer">
      <div class="footer-values">
        <div class="section-container">
          <div class="footer-values-grid">
            <div class="footer-value-item">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
              <div>
                <h4>Dedicated Sales Reps</h4>
                <p>A team that knows your business and helps you stock the right products.</p>
              </div>
            </div>
            <div class="footer-value-item">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <div>
                <h4>Eastern US, PR &amp; Caribbean</h4>
                <p>Serving retailers from the East Coast through Puerto Rico to St. Lucia.</p>
              </div>
            </div>
            <div class="footer-value-item">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <div>
                <h4>Top Vendor Partnerships</h4>
                <p>Connecting you with leading manufacturers in toys, outdoor rec, and sporting goods.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-main">
        <div class="section-container">
          <div class="footer-grid">
            <div class="footer-brand">
              <div class="footer-logo">
                <img src="/logos/toys_2000_logo.png" alt="Toys2000" class="footer-logo-img" />
              </div>
              <p class="footer-tagline">Your trusted sales representative connecting retailers with top vendors across the toy, outdoor recreation, and sporting goods industries.</p>
            </div>
            <div class="footer-links-col">
              <h4>Explore</h4>
              <a href="#catalogs">Catalogs</a>
              <a href="#categories">Categories</a>
              <a href="#featured">Promos and Specials</a>
              <a href="#" class="nav-link" data-route="/products">Products</a>
            </div>
            <div class="footer-links-col">
              <h4>Company</h4>
              <a href="#about">About Us</a>
              <a href="mailto:Jim@toys2000.fun">Contact Us</a>
            </div>
            <div class="footer-links-col">
              <h4>Get in Touch</h4>
              <a href="mailto:Jim@toys2000.fun">Jim@toys2000.fun</a>
              <a href="tel:+17863670891">(786) 367 0891</a>
              <span class="footer-region">Eastern US, PR &amp; Caribbean</span>
            </div>
            <div class="footer-newsletter">
              <h4>Stay in the Loop</h4>
              <p>Get the latest products and deals delivered to your inbox.</p>
              <form class="newsletter-form" id="newsletter-form">
                <input type="email" placeholder="Your email address" class="newsletter-input" required>
                <button type="submit" class="btn btn-primary newsletter-btn">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="section-container">
          <div class="footer-bottom-inner">
            <span>&copy; 2026 Toys2000. All rights reserved.</span>
            <div class="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;

  // Wire up interactivity after DOM is built
  requestAnimationFrame(() => {
    initHeroCarousel(container);
    initCatalogCarousel(container);
    initCategoryGallery(container);
    initPromosTabs(container);
    initBrandCards(container);
    initAddToCartButtons(container);
    initQuickViewButtons(container);
    initScrollAnimations(container);
    initSmoothAnchors(container);
    initHeroButtons(container);
    initQuoteButtons(container);
    initNewsletterForm(container);
  });

  return container;
}

// ── Hero ──
function initHeroCarousel(container) {
  const slides = container.querySelectorAll('.hero-slide');
  const contents = container.querySelectorAll('.hero-content');
  const dots = container.querySelectorAll('.hero-dot');
  const progressBar = container.querySelector('#hero-progress-bar');

  const total = slides.length;
  let current = 0;
  let autoplayTimer;
  const SLIDE_DURATION = 6000;

  function goToSlide(index) {
    if (index === current) return;
    slides[current].classList.remove('active');
    contents[current].classList.remove('active');
    dots[current].classList.remove('active');

    current = ((index % total) + total) % total;

    slides[current].classList.add('active');
    contents[current].classList.add('active');
    dots[current].classList.add('active');

    startProgress();
  }

  function nextSlide() { goToSlide(current + 1); }

  function startProgress() {
    if (progressBar) {
      progressBar.style.transition = 'none';
      progressBar.style.width = '0%';
      progressBar.offsetWidth;
      progressBar.style.transition = `width ${SLIDE_DURATION}ms linear`;
      progressBar.style.width = '100%';
    }
  }

  function startAutoplay() {
    clearInterval(autoplayTimer);
    autoplayTimer = setInterval(nextSlide, SLIDE_DURATION);
    startProgress();
  }

  function resetAutoplay() {
    clearInterval(autoplayTimer);
    startAutoplay();
  }

  // Dot clicks
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      goToSlide(parseInt(dot.dataset.slide));
      resetAutoplay();
    });
  });

  // Touch/swipe
  let touchStartX = 0;
  const hero = container.querySelector('.hero');
  if (hero) {
    hero.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
    hero.addEventListener('touchend', (e) => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) goToSlide(current + 1); else goToSlide(current - 1);
        resetAutoplay();
      }
    }, { passive: true });
  }

  startAutoplay();
}

// ── Hero Buttons (Filtering & Routing) ──
function initHeroButtons(container) {
  container.querySelectorAll('.btn-hero-primary, .btn-hero-secondary').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const route = btn.dataset.route;
      const category = btn.dataset.category;

      if (route && route.startsWith('#')) {
        // Smooth scroll handled by initSmoothAnchors via href
        return;
      }

      if (route) {
        e.preventDefault();
        if (route === '/products' && category) {
          router.navigate('/products', { category: category });
        } else {
          router.navigate(route);
        }
      }
    });
  });
}

// ── Category Interactive Gallery ──
function initCategoryGallery(container) {
  const grid = container.querySelector('.category-gallery-grid');
  let isDown = false;
  let startX;
  let scrollLeft;

  if (grid) {
    grid.addEventListener('mousedown', (e) => {
      isDown = true;
      grid.style.scrollSnapType = 'none'; // disable snap during drag
      startX = e.pageX - grid.offsetLeft;
      scrollLeft = grid.scrollLeft;
    });
    grid.addEventListener('mouseleave', () => {
      isDown = false;
      grid.style.scrollSnapType = ''; 
    });
    grid.addEventListener('mouseup', () => {
      isDown = false;
      grid.style.scrollSnapType = ''; 
    });
    grid.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - grid.offsetLeft;
      const walk = (x - startX) * 2; 
      grid.scrollLeft = scrollLeft - walk;
    });
    
    // Touch support for grabbing
    grid.addEventListener('touchstart', () => grid.style.scrollSnapType = 'none', {passive: true});
    grid.addEventListener('touchend', () => grid.style.scrollSnapType = '', {passive: true});
  }

  container.querySelectorAll('.category-gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const categoryId = item.dataset.categoryId;
      // Map channel category to product categories if needed, or just filter by channel
      router.navigate('/products', { category: categoryId });
    });
    
    // Keyboard support
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const categoryId = item.dataset.categoryId;
        router.navigate('/products', { category: categoryId });
      }
    });
  });
}

// ── Promos Tabs ──
function initPromosTabs(container) {
  const tabs = container.querySelectorAll('.promo-tab');
  const groups = container.querySelectorAll('.promo-group');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.group;
      tabs.forEach(t => t.classList.remove('active'));
      groups.forEach(g => g.classList.remove('active'));
      tab.classList.add('active');
      const group = container.querySelector(`.promo-group[data-group="${target}"]`);
      if (group) group.classList.add('active');
      // Scroll tab into view on mobile
      tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    });
  });

  // Quote buttons inside promo cards
  container.querySelectorAll('.promo-card-cta').forEach(btn => {
    btn.addEventListener('click', () => {
      store.publish('openQuoteModal');
    });
  });
}

// ── Catalog Gallery ──
function initCatalogCarousel(container) {
  const track = container.querySelector('#catalog-gallery-track');
  const prevBtn = container.querySelector('#catalog-prev');
  const nextBtn = container.querySelector('#catalog-next');
  const cards = container.querySelectorAll('.catalog-gallery-card');

  if (!track || !cards.length) return;

  // Arrow scroll — scroll by one full card width + gap
  function getScrollStep() {
    const gap = parseInt(window.getComputedStyle(track).gap) || 20;
    return cards[0].offsetWidth + gap;
  }

  if (prevBtn) prevBtn.addEventListener('click', () => { track.scrollBy({ left: -getScrollStep(), behavior: 'smooth' }); });
  if (nextBtn) nextBtn.addEventListener('click', () => { track.scrollBy({ left: getScrollStep(), behavior: 'smooth' }); });

  // Drag to scroll
  let isDragging = false;
  let startX = 0;
  let scrollStart = 0;

  track.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX;
    scrollStart = track.scrollLeft;
    track.style.cursor = 'grabbing';
    track.style.userSelect = 'none';
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const dx = e.pageX - startX;
    track.scrollLeft = scrollStart - dx;
  });

  window.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      track.style.cursor = '';
      track.style.userSelect = '';
    }
  });

  // Card click to open catalog
  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      if (Math.abs(track.scrollLeft - scrollStart) > 5) return; // ignore drags
      const catalogId = card.dataset.catalogId;
      const catalog = data.catalogs.find(c => c.id === catalogId);
      if (catalog && (catalog.catalogUrl || catalog.pdfUrl)) {
        store.publish('openCatalog', catalog);
      }
    });
  });
}

// ── Brand Card Clicks ──
function initBrandCards(container) {
  container.querySelectorAll('.mfr-ticker-item').forEach(card => {
    card.addEventListener('click', () => {
      router.navigate('/brand', card.dataset.brand);
    });
  });
}

// ── Add to Cart from Featured Products ──
function initAddToCartButtons(container) {
  container.querySelectorAll('.fp-add-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const productId = btn.dataset.productId;
      const brandId = btn.dataset.brandId;
      const brand = data.brands.find(b => b.id === brandId);
      const products = data.products[brandId] || [];
      const product = products.find(p => p.id === productId);
      if (product && brand) {
        cart.add(product, brand);
        store.publish('toast', { message: `${product.name} added to cart`, type: 'success' });
      }
    });
  });
}

// ── Quick View ──
function initQuickViewButtons(container) {
  container.querySelectorAll('.fp-quick-view').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      store.publish('openQuickView', {
        productId: btn.dataset.productId,
        brandId: btn.dataset.brandId
      });
    });
  });
}

// ── Scroll-triggered Animations ──
function initScrollAnimations(container) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  container.querySelectorAll('.section, .trust-item, .bento-card, .promo-card, .catalog-gallery-card, .vendor-logos-section, .about-grid').forEach(el => {
    observer.observe(el);
  });
}

// ── Smooth Anchor Links ──
function initSmoothAnchors(container) {
  container.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = container.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}



// ── Quote buttons ──
function initQuoteButtons(container) {
  container.querySelectorAll('[data-action="quote"]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      store.publish('openQuoteModal');
    });
  });
}

// ── Newsletter form ──
function initNewsletterForm(container) {
  const form = container.querySelector('#newsletter-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('.newsletter-btn');
      btn.textContent = 'Subscribed!';
      btn.style.background = 'var(--accent-color)';
      store.publish('toast', { message: 'Successfully subscribed to our newsletter!', type: 'success' });
      setTimeout(() => {
        btn.textContent = 'Subscribe';
        btn.style.background = '';
        form.reset();
      }, 3000);
    });
  }
}
