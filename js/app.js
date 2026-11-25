function renderProducts(list, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = list.map(p => `
    <div class="card">
      <div class="card-body">
        <h3>${p.title}</h3>
        <div>
          <span class="price">$${p.price}</span>
          ${p.listPrice ? `<span class="list-price">$${p.listPrice}</span>` : ''}
        </div>
        <p style="color:#64748b;font-size:0.875rem;margin:0.5rem 0;">Code: ${p.code}</p>
        <a href="products/${p.slug}.html" style="color:#0f766e;font-weight:600;text-decoration:none;">View Details →</a>
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('featured')) {
    renderProducts(products.slice(0, 6), 'featured');
  }
});