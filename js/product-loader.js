// HELIDA Tools - Dynamic Product Loader (Optimized)
// Loads products from data/products.json with lazy rendering

async function loadProducts() {
    try {
        const resp = await fetch('data/products.json');
        const data = await resp.json();
        renderProductCategories(data.categories);
    } catch(e) {
        console.warn('Could not load products.json');
    }
}

function renderProductCategories(categories) {
    const section = document.getElementById('products');
    if (!section) return;
    const container = section.querySelector('.container');
    const header = container.querySelector('.section-header');
    if (!header) return;

    // Remove old content after header
    const old = container.querySelectorAll('.product-category, .products-loading');
    old.forEach(el => el.remove());

    categories.forEach((cat, catIdx) => {
        const catEl = document.createElement('div');
        catEl.className = 'product-category';
        catEl.style.marginBottom = '20px';

        // Category header - clickable to expand/collapse
        catEl.innerHTML = `
            <div class="product-cat-header" onclick="toggleCategory(this)" style="cursor:pointer;">
                <div class="product-cat-icon"><i class="fas ${cat.icon || 'fa-circle'}"></i></div>
                <div class="product-cat-info">
                    <h3>${cat.title_en}</h3>
                    <p>${cat.desc_en}</p>
                </div>
                <span class="cat-toggle" style="margin-left:auto;font-size:1.2rem;">▼</span>
            </div>
            <div class="product-sub-grid cat-body" style="display:${catIdx === 0 ? 'grid' : 'none'};">
                ${cat.products.map(p => `
                    <div class="product-card product-card-sub${!p.image ? ' product-card-add' : ''}">
                        <div class="product-img">
                            ${p.image ? `<img src="${p.image}" alt="${p.name_en}" loading="lazy" style="background:#e8e8e8;">` : '<i class="fas fa-plus-circle"></i>'}
                        </div>
                        <div class="product-info">
                            <h4>${p.name_en}</h4>
                            <span class="product-tag">${p.size}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        container.insertBefore(catEl, header.nextSibling ? header.nextSibling.nextSibling : null);
        // Insert after header
        container.appendChild(catEl);
    });
}

// Toggle category expand/collapse
function toggleCategory(header) {
    const body = header.nextElementSibling;
    const toggle = header.querySelector('.cat-toggle');
    if (!body) return;

    if (body.style.display === 'none') {
        // Collapse all others first
        document.querySelectorAll('.cat-body').forEach(b => b.style.display = 'none');
        document.querySelectorAll('.cat-toggle').forEach(t => t.textContent = '▼');
        // Expand this one
        body.style.display = 'grid';
        toggle.textContent = '▲';
    } else {
        body.style.display = 'none';
        toggle.textContent = '▼';
    }
}

// Auto-load
document.addEventListener('DOMContentLoaded', loadProducts);
