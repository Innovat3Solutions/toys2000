import { data } from '../js/data.js';
import { cart } from '../js/cart.js';
import { router } from '../js/router.js';
import { store } from '../js/state.js';

export function productsView(initialFilters = {}) {
  const container = document.createElement('div');
  container.className = 'products-page animate-fade-in';

  // State management for filters
  const filters = initialFilters || {};
  let activeFilters = {
    search: '',
    brands: filters.brand ? [filters.brand] : [],
    categories: filters.category ? [filters.category] : [],
    catalogs: filters.catalog ? [filters.catalog] : [],
    priceRange: null, 
    promotions: (filters.promo ? [filters.promo] : []),
    ...filters
  };

  const allProducts = data.getAllProducts();
  const allBrands = data.brands;
  
  // Extract unique categories from products
  const uniqueCategories = [...new Set(allProducts.map(p => p.category))].sort();

  function render() {
    container.innerHTML = `
      <div class="products-layout-container">
        <!-- Sidebar Filters -->
        <aside class="products-sidebar">
          <div class="sidebar-header">
            <h3>Filters</h3>
            <button class="clear-filters-btn" id="clear-filters">Clear All</button>
          </div>

          <!-- Search Filter -->
          <div class="filter-group">
            <h4 class="filter-title">Search</h4>
            <div class="sidebar-search">
              <input type="text" id="sidebar-search-input" placeholder="Search products..." value="${activeFilters.search}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
              </svg>
            </div>
          </div>

          <!-- Category Filter -->
          <div class="filter-group">
            <h4 class="filter-title">Categories</h4>
            <div class="filter-options">
              ${uniqueCategories.map(cat => `
                <label class="filter-option">
                  <input type="checkbox" class="category-filter" value="${cat}" ${activeFilters.categories.includes(cat) ? 'checked' : ''}>
                  <span class="option-label">${cat.split('-').join(' ')}</span>
                  <span class="option-count">${allProducts.filter(p => p.category === cat).length}</span>
                </label>
              `).join('')}
            </div>
          </div>

          <!-- Brand Filter -->
          <div class="filter-group">
            <h4 class="filter-title">Brands</h4>
            <div class="filter-options">
              ${allBrands.map(brand => `
                <label class="filter-option">
                  <input type="checkbox" class="brand-filter" value="${brand.id}" ${activeFilters.brands.includes(brand.id) ? 'checked' : ''}>
                  <span class="option-label">${brand.name}</span>
                  <span class="option-count">${allProducts.filter(p => p.brandId === brand.id).length}</span>
                </label>
              `).join('')}
            </div>
          </div>

          <!-- Catalog Filter -->
          <div class="filter-group">
            <h4 class="filter-title">Catalogs</h4>
            <div class="filter-options">
              ${data.catalogs.map(catalog => `
                <label class="filter-option">
                  <input type="checkbox" class="catalog-filter" value="${catalog.id}" ${activeFilters.catalogs?.includes(catalog.id) ? 'checked' : ''}>
                  <span class="option-label">${catalog.name} ${catalog.year || ''}</span>
                </label>
              `).join('')}
            </div>
          </div>

          <!-- Price Filter -->
          <div class="filter-group">
            <h4 class="filter-title">Price Range</h4>
            <div class="filter-options">
              ${[
                { label: 'Under $50', min: 0, max: 50 },
                { label: '$50 - $100', min: 50, max: 100 },
                { label: '$100 - $250', min: 100, max: 250 },
                { label: '$250+', min: 250, max: 9999 }
              ].map((range, i) => `
                <label class="filter-option">
                  <input type="radio" name="price-filter" class="price-filter" data-min="${range.min}" data-max="${range.max}" ${activeFilters.priceRange && activeFilters.priceRange.min === range.min ? 'checked' : ''}>
                  <span class="option-label">${range.label}</span>
                </label>
              `).join('')}
            </div>
          </div>

          <!-- Promotions Filter -->
          <div class="filter-group">
            <h4 class="filter-title">Promotions</h4>
            <div class="filter-options">
              ${data.promos.map(promo => `
                <label class="filter-option">
                  <input type="checkbox" class="promo-filter" value="${promo.id}" ${activeFilters.promotions?.includes(promo.id) ? 'checked' : ''}>
                  <span class="option-label">${promo.brand} Promo</span>
                </label>
              `).join('')}
            </div>
          </div>
        </aside>

        <!-- Main Content -->
        <main class="products-main">
          <div class="products-header">
            <div class="products-breadcrumb">
              <a href="#" data-route="/">Home</a> / <span>All Products</span>
            </div>
            <h1 class="products-title">All Products</h1>
            <div class="products-meta" id="products-count-label">
              Showing ${getFilteredProducts().length} products
            </div>
          </div>

          <div class="products-grid" id="products-grid">
            <!-- Products will be injected here -->
          </div>
        </main>
      </div>
    `;

    setupEventListeners();
    updateGrid();
  }

  function getFilteredProducts() {
    return allProducts.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(activeFilters.search.toLowerCase()) || 
                          p.desc.toLowerCase().includes(activeFilters.search.toLowerCase());
      const matchesCategory = activeFilters.categories.length === 0 || activeFilters.categories.includes(p.category);
      const matchesBrand = activeFilters.brands.length === 0 || activeFilters.brands.includes(p.brandId);
      const matchesCatalog = activeFilters.catalogs.length === 0 || activeFilters.catalogs.includes(p.brandId);
      const matchesPrice = !activeFilters.priceRange || (p.price >= activeFilters.priceRange.min && p.price <= activeFilters.priceRange.max);
      
      // Promo filter logic: a product matches if its brand has ANY of the selected promotions
      const matchesPromo = activeFilters.promotions.length === 0 || 
                          activeFilters.promotions.some(promoId => {
                            const promo = data.promos.find(pr => pr.id === promoId);
                            return promo && promo.brandId === p.brandId;
                          });
      
      return matchesSearch && matchesCategory && matchesBrand && matchesCatalog && matchesPrice && matchesPromo;
    });
  }

  function updateGrid() {
    const grid = container.querySelector('#products-grid');
    const filtered = getFilteredProducts();
    const countLabel = container.querySelector('#products-count-label');

    countLabel.textContent = `Showing ${filtered.length} products`;

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="products-empty">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
          <h3>No products found</h3>
          <p>Try adjusting your filters or search terms.</p>
          <button class="btn btn-primary" id="reset-filters-empty">Reset All Filters</button>
        </div>
      `;
      container.querySelector('#reset-filters-empty')?.addEventListener('click', clearAll);
      return;
    }

    grid.innerHTML = filtered.map((product, i) => `
      <div class="product-card glass-panel animate-fade-in" style="animation-delay: ${i * 0.05}s">
        <div class="product-image-container">
          ${(() => {
            const hasPromo = data.promos.some(pr => pr.brandId === product.brandId);
            const badge = product.badge || (hasPromo ? 'Special Promo' : '');
            return badge ? `<span class="fp-badge ${hasPromo && !product.badge ? 'fp-badge-promo' : ''}">${badge}</span>` : '';
          })()}
          <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
          <button class="product-quickview-btn" data-product-id="${product.id}" data-brand-id="${product.brandId}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            Quick View
          </button>
        </div>
        <div class="product-info">
          <div class="product-brand-tag">${product.brandName}</div>
          <div class="product-title">${product.name}</div>
          <div class="product-price-row">
            <span class="product-price">$${product.price.toFixed(2)}</span>
          </div>
          <div class="product-actions">
            <button class="btn btn-primary add-to-cart-btn" data-product-id="${product.id}" data-brand-id="${product.brandId}">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    `).join('');

    // Attach card listeners
    grid.querySelectorAll('.add-to-cart-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const product = allProducts.find(p => p.id === btn.dataset.productId);
        const brand = allBrands.find(b => b.id === btn.dataset.brandId);
        if (product && brand) {
          cart.add(product, brand);
          store.publish('toast', { message: `${product.name} added to cart`, type: 'success' });
        }
      });
    });

    grid.querySelectorAll('.product-quickview-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        store.publish('openQuickView', { productId: btn.dataset.productId, brandId: btn.dataset.brandId });
      });
    });
  }

  function setupEventListeners() {
    // Search
    const searchInput = container.querySelector('#sidebar-search-input');
    searchInput?.addEventListener('input', (e) => {
      activeFilters.search = e.target.value;
      updateGrid();
    });

    // Categories
    container.querySelectorAll('.category-filter').forEach(cb => {
      cb.addEventListener('change', () => {
        if (cb.checked) {
          activeFilters.categories.push(cb.value);
        } else {
          activeFilters.categories = activeFilters.categories.filter(c => c !== cb.value);
        }
        updateGrid();
      });
    });

    // Brands
    container.querySelectorAll('.brand-filter').forEach(cb => {
      cb.addEventListener('change', () => {
        if (cb.checked) {
          activeFilters.brands.push(cb.value);
        } else {
          activeFilters.brands = activeFilters.brands.filter(b => b !== cb.value);
        }
        updateGrid();
      });
    });

    // Catalogs
    container.querySelectorAll('.catalog-filter').forEach(cb => {
      cb.addEventListener('change', () => {
        if (cb.checked) {
          activeFilters.catalogs.push(cb.value);
        } else {
          activeFilters.catalogs = activeFilters.catalogs.filter(c => c !== cb.value);
        }
        updateGrid();
      });
    });

    // Price
    container.querySelectorAll('.price-filter').forEach(radio => {
      radio.addEventListener('change', () => {
        activeFilters.priceRange = {
          min: parseFloat(radio.dataset.min),
          max: parseFloat(radio.dataset.max)
        };
        updateGrid();
      });
    });

    // Promotions
    container.querySelectorAll('.promo-filter').forEach(cb => {
      cb.addEventListener('change', () => {
        if (cb.checked) {
          activeFilters.promotions.push(cb.value);
        } else {
          activeFilters.promotions = activeFilters.promotions.filter(p => p !== cb.value);
        }
        updateGrid();
      });
    });

    // Clear Filters
    container.querySelector('#clear-filters')?.addEventListener('click', clearAll);

    // Breadcrumb navigation
    container.querySelector('.products-breadcrumb a')?.addEventListener('click', (e) => {
      e.preventDefault();
      router.navigate('/');
    });
  }

  function clearAll() {
    activeFilters = {
      search: '',
      brands: [],
      categories: [],
      catalogs: [],
      priceRange: null,
      promotions: []
    };
    render();
  }

  render();
  return container;
}
