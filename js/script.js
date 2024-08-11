"user strict";

// const sameAsBilling = document.getElementById("same-as-billing");
// const shippingInformation = document.getElementById("shipping-info");

// // sameAsBilling.addEventListener("click", function () {
// //   shippingInformation.style.display = "none"
// // })

//Displaying product on the product page

fetch("https://fakestoreapi.com/products/")
  .then((response) => response.json())
  .then((data) => {
    const container = document.querySelector(".categories");

    const mappedData = data.map((item) => {
      const div = document.createElement("div");
      div.className = "item";
      div.innerHTML = `
      <img src="${item.image}" alt=""/>
      <h4>${item.title}</h4>
      <p>${item.description}</p>

      <p>Price: $${item.price}</p>
      <div class="">
        <button id="add-to-cart">Add to Cart</button>
      </div>

    `;
      return div;
    });

    // Append the items to the container
    mappedData.forEach((element) => container.appendChild(element));
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
