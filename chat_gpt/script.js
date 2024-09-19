document.addEventListener('DOMContentLoaded', function () {
    const products = [
        { id: 1, name: "Product 1", stock: 10 },
        { id: 2, name: "Product 2", stock: 5 },
        { id: 3, name: "Product 3", stock: 20 },
    ];

    const productContainer = document.querySelector('.product-list');
    const stockControl = document.getElementById('stock-control');
    const adminPanel = document.getElementById('admin-panel');

    function displayProducts() {
        productContainer.innerHTML = '';
        products.forEach(product => {
            productContainer.innerHTML += `<div>
                <h3>${product.name}</h3>
                <p>Stock: ${product.stock}</p>
                <button class="btn" onclick="buyProduct(${product.id})">Buy</button>
            </div>`;
        });
    }

    function displayStockControl() {
        stockControl.innerHTML = '';
        products.forEach(product => {
            stockControl.innerHTML += `<div>
                <h3>${product.name}</h3>
                <p>Stock: ${product.stock}</p>
                <button class="btn" onclick="restockProduct(${product.id})">Restock</button>
            </div>`;
        });
    }

    window.buyProduct = function (id) {
        const product = products.find(p => p.id === id);
        if (product.stock > 0) {
            product.stock--;
            displayProducts();
        } else {
            alert('Out of stock!');
        }
    };

    window.restockProduct = function (id) {
        const product = products.find(p => p.id === id);
        product.stock += 10;
        displayStockControl();
    };

    document.getElementById('user-login-form').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('User logged in');
    });

    document.getElementById('admin-login-form').addEventListener('submit', function (e) {
        e.preventDefault();
        adminPanel.style.display = 'block';
        displayStockControl();
    });

    document.getElementById('add-product').addEventListener('click', function () {
        const productName = prompt('Enter product name:');
        const productStock = parseInt(prompt('Enter product stock:'), 10);
        const newProduct = {
            id: products.length + 1,
            name: productName,
            stock: productStock,
        };
        products.push(newProduct);
        displayStockControl();
        displayProducts();
    });

    displayProducts();
});