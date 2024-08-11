"user strict";

const productsContainer = document.querySelector(".categories");

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      const productHTML = `
        <div class="item">
          <img src="${item.image}" alt="${item.title}">
          <h4>${item.title}</h4>
          <p>${item.description}</p>
          <p>$${item.price}</p>
          <button id="add-to-cart" onclick="addToCart(${item.id})">Add to Cart</button>
        </div>
      `;
      productsContainer.innerHTML += productHTML;
    });
  })
  .catch((error) => console.error("Error fetching products:", error));

const feature = document.querySelector(".feature");

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    // Slice the array to only include the first 3 products
    const limitedData = data.slice(0, 3);

    let productsHTML = ""; // Start with an empty string
    limitedData.forEach((item) => {
      productsHTML += `
        <div class="item">
          <img src="${item.image}" alt="${item.title}">
          <h4>${item.title}</h4>
          <p>$${item.price}</p>
          <button onclick="addToCart(${item.id})" id="add-to-cart">Add to Cart</button>
        </div>
      `;
    });
    feature.innerHTML = productsHTML; // Set the innerHTML once
  })
  .catch((error) => console.error("Error fetching products:", error));

// // Example addToCart function
// function addToCart(productId) {
//   console.log(`Product ${productId} added to cart.`);
//   // You can implement cart functionality here
// }

const homePage = document.querySelector(".crow-div");

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    const limitedData = data.slice(0, 12);

    let productsHTML = "";
    limitedData.forEach((item) => {
      productsHTML += `
      <div class="item">
        <img src="${item.image}" alt="${item.title}">
        <h4>${item.title}</h4>
        <p>${item.features}</p>
        <p>$${item.price}</p>
        <button onclick="addToCart(${item.id})" id="add-to-cart">Add to Cart</button>
      </div>
    `;
    });
    homePage.innerHTML = productsHTML; // Set the innerHTML once
  })
  .catch((error) => console.error("Error fetching products:", error));

// Example addToCart function
function addToCart(productId) {
  console.log(`Product ${productId} added to cart.`);
  // You can implement cart functionality here
}

function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const product = {
    id: productId,
    quantity: 1,
  };

  const existingProduct = cart.find((item) => item.id === productId);

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  document.getElementById("cart-count").textContent = cartCount;
}

// Update the cart count on page load
updateCartCount();

const cartItemsContainer = document.querySelector(".image-price-div");

function displayCartItems() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartItemsContainer.innerHTML = "";

  cart.forEach((item) => {
    fetch(`https://fakestoreapi.com/products/${item.id}`)
      .then((response) => response.json())
      .then((product) => {
        const cartItemHTML = `
          <div class="image-price-div">
            <div class="image-price">
              <div class="w-50 image">
              <img src="${product.image}" alt="${product.title}">
              </div>
              <!-- Name and Price -->
              <div class="w-50 name">
                <h4>${product.title}</h4>
                <p>$${product.price} x ${item.quantity}</p>
              </div>
            </div>
            <!-- Total -->
            <div class="">
              <!-- <p>$40.00</p> -->
            </div>
            <!-- Trash -->
            <div class="trash">
              <i class="fa-regular fa-trash-can" onclick="removeFromCart(${product.id})"></i>
            </div>
          </div>
        `;
        cartItemsContainer.innerHTML += cartItemHTML;
      })
      .catch((error) => console.error("Error fetching product:", error));
  });

  updateCartTotal();
}

function updateCartTotal() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const total = cart.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);
  document.getElementById("total").textContent = total.toFixed(2);
}

// Display cart items on page load
displayCartItems();

function updateCartTotal() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const total = cart.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);
  document.getElementById("total").textContent = total.toFixed(2);
}

// Display cart items on page load
displayCartItems();

function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart = cart.filter((item) => item.id !== productId);

  localStorage.setItem("cart", JSON.stringify(cart));
  displayCartItems();
  updateCartCount();
}

// document
//   .getElementById("checkout-form")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();

//     // Capture billing, shipping, and payment information
//     const billingInfo = {
//       name: document.querySelector('.billing-info input[name="name"]').value,
//       address: document.querySelector('.billing-info input[name="address"]')
//         .value,
//       email: document.querySelector('.billing-info input[name="email"]').value,
//       phone: document.querySelector('.billing-info input[name="phone"]').value,
//     };

//     const shippingInfo = document.getElementById("same-as-billing").checked
//       ? billingInfo
//       : {
//           name: document.querySelector('.shipping-info input[name="name"]')
//             .value,
//           address: document.querySelector(
//             '.shipping-info input[name="address"]'
//           ).value,
//           email: document.querySelector('.shipping-info input[name="email"]')
//             .value,
//           phone: document.querySelector('.shipping-info input[name="phone"]')
//             .value,
//         };

//     const paymentInfo = {
//       cardNumber: document.querySelector(
//         '.payment-info input[name="cardNumber"]'
//       ).value,
//       expiration: document.querySelector(
//         '.payment-info input[name="expiration"]'
//       ).value,
//       cvv: document.querySelector('.payment-info input[name="cvv"]').value,
//     };

//     // Simulate order placement
//     alert("Order placed successfully!");
//     localStorage.removeItem("cart");
//     window.location.href = "index.html"; // Redirect to home page after order
//   });

// const sameAsBilling = document.getElementById("same-as-billing");
// const shippingInformation = document.getElementById("shipping-info");

// // sameAsBilling.addEventListener("click", function () {
// //   shippingInformation.style.display = "none"
// // })

//Displaying product on the product page

// fetch("https://fakestoreapi.com/products/")
//   .then((response) => response.json())
//   .then((data) => {
//     const container = document.querySelector(".categories");

//     const mappedData = data.map((item) => {
//       const div = document.createElement("div");
//       div.className = "item";
//       div.innerHTML = `
//       <img src="${item.image}" alt=""/>
//       <h4>${item.title}</h4>
//       <p>${item.description}</p>

//       <p>Price: $${item.price}</p>
//       <div class="">
//         <button id="add-to-cart">Add to Cart</button>
//       </div>

//     `;
//       return div;
//     });

//     // Append the items to the container
//     mappedData.forEach((element) => container.appendChild(element));
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

// function addToCart(productId) {
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];

//   const product = {
//     id: productId,
//     quantity: 1,
//   };

//   const existingProduct = cart.find((item) => item.id === productId);

//   if (existingProduct) {
//     existingProduct.quantity++;
//   } else {
//     cart.push(product);
//   }

//   localStorage.setItem("cart", JSON.stringify(cart));
//   updateCartCount();
// }

// function updateCartCount() {
//   const cart = JSON.parse(localStorage.getItem("cart")) || [];
//   const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
//   document.getElementById("cart-count").textContent = cartCount;
// }

// // Update the cart count on page load
// updateCartCount();

// //Order button
// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");
// const btnClose = document.querySelector(".close-modal");
// const btnOpen = document.querySelectorAll(".show-modal");
// console.log(btnOpen);

// for (let i = 0; i < btnOpen.length; i++)
//   btnOpen[i].addEventListener("click", function () {
//     modal.classList.remove("hidden");
//     overlay.classList.remove("hidden");
//   });

// const closeModal = function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };
// btnClose.addEventListener("click", closeModal);

// overlay.addEventListener("click", closeModal);
