"user strict";

// document.addEventListener('DOMContentLoaded', () => {
//     // Fetch product data from API
//     fetch('https://api.example.com/products')
//         .then(response => response.json())
//         .then(data => {
//             populateFeaturedProducts(data);
//             populateCategories(data);
//         });

//     // Add to Cart functionality
//     const cart = [];

//     document.getElementById('add-to-cart-btn').addEventListener('click', () => {
//         const product = {
//             title: document.getElementById('product-title').innerText,
//             price: parseFloat(document.getElementById('product-price').innerText.replace('$', '')),
//             quantity: 1
//         };
//         cart.push(product);
//         updateCartCount();
//     });

//     function populateFeaturedProducts(products) {
//         const featuredProductsContainer = document.getElementById('featured-products');
//         products.forEach(product => {
//             const productElement = document.createElement('div');
//             productElement.classList.add('product');
//             productElement.innerHTML = `
//                 <img src="${product.image}" alt="${product.title}">
//                 <h3>${product.title}</h3>
//                 <p>$${product.price}</p>
//                 <a href="product.html?id=${product.id}">View Product</a>
//             `;
//             featuredProductsContainer.appendChild(productElement);
//         });
//     }

//     function populateCategories(products) {
//         const categoriesContainer = document.querySelector('.category-list');
//         const categories = [...new Set(products.map(product => product.category))];
//         categories.forEach(category => {
//             const categoryElement = document.createElement('div');
//             categoryElement.classList.add('category');
//             categoryElement.innerHTML = `
//                 <h4>${category}</h4>
//             `;
//             categories)
