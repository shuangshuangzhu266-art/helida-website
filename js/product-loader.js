// HELIDA Tools - Dynamic Product Loader
// Loads products from data/products.json and renders them

async function loadProducts() {
    try {
        const resp = await fetch('data/products.json');
        const data = await resp.json();
        renderProductCategories(data.categories);
    } catch(e) {
        console.warn('Could not load products.json, using fallback');
    }
}

function renderProductCategories(categories) {
    const section = document.getElementById('products');
    if (!section) return;

    // Keep the section header
    const container = section.querySelector('.container');
    const header = container.querySelector('.section-header');
    if (!header) return;

    // Remove old hardcoded categories
    const oldCategories = container.querySelectorAll('.product-category');
    oldCategories.forEach(el => el.remove());

    // Render each category
    categories.forEach(cat => {
        const catEl = document.createElement('div');
        catEl.className = 'product-category';

        catEl.innerHTML = `
            <div class="product-cat-header">
                <div class="product-cat-icon"><i class="fas ${cat.icon || 'fa-circle'}"></i></div>
                <div class="product-cat-info">
                    <h3>${cat.title_en}</h3>
                    <p>${cat.desc_en}</p>
                </div>
            </div>
            <div class="product-sub-grid">
                ${cat.products.map(p => `
                    <div class="product-card product-card-sub${!p.image ? ' product-card-add' : ''}">
                        <div class="product-img">
                            ${p.image ? `<img src="${p.image}" alt="${p.name_en}" loading="lazy" onerror="this.parentElement.innerHTML='<i class=\\'fas fa-image\\'></i>'">` : '<i class="fas fa-plus-circle"></i>'}
                        </div>
                        <div class="product-info">
                            <h4>${p.name_en}</h4>
                            <span class="product-tag">${p.size}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        // Insert after header
        container.appendChild(catEl);
    });
}

// Auto-load
document.addEventListener('DOMContentLoaded', loadProducts);
