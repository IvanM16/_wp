const products = [
    { id: 1, name: 'Rainbow Mug', price: 12},
    { id: 2, name: 'Colorful Notebook', price: 8},
    { id: 3, name: 'Bright Backpack', price: 25},
];

let cart = [];

function renderProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const div = document.createElement('div');
        div.className = 'product';
        div.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(div);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const totalEl = document.getElementById('total');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    totalEl.textContent = total;
}

renderProducts();
