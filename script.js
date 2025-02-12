async function fetchProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    const container = document.getElementById('product-container');
    const modal = document.getElementById('product-modal');
    const closeModal = document.querySelector('.close');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalStars = document.getElementById('modal-stars');
    const modalCount = document.getElementById('modal-count');
    const modalPrice = document.getElementById('modal-price');
    const modalDescription = document.getElementById('modal-description');
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    products.slice(0, 10).forEach(product => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}" />
            <h3>${product.title}</h3>
            <div class="rating">
                <span class="stars">
                    ${'★'.repeat(Math.round(product.rating.rate))}
                    ${'☆'.repeat(5 - Math.round(product.rating.rate))}
                </span>
                <span class="count">(${product.rating.count})</span>
            </div>
            <p class="price">${product.price}$</p>
            <button class="btn">Sepete Ekle</button>`;
        card.addEventListener('click', (event) => {
            if (!event.target.classList.contains('btn')) {
                modalImage.src = product.image;
                modalTitle.textContent = product.title;
                modalStars.innerHTML = '★'.repeat(Math.round(product.rating.rate)) +'☆'.repeat(5 - Math.round(product.rating.rate));
                modalCount.textContent = product.rating.count;
                modalPrice.textContent = product.price;
                modalDescription.textContent = product.description;
                modal.style.display = 'block';
            }
        });
        container.appendChild(card);
    });
}
fetchProducts();
