// fetch("https://fakestoreapi.com/products")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((products) => {
//     const productsContainer = document.getElementById("products-container");
//     products.forEach((product) => {
//       const productCard = document.createElement("div");
//       productCard.classList.add("product");
//       const productTitle = document.createElement("h2");
//       productTitle.classList.add("product-title");
//       productTitle.textContent = product.title;
//       const productImage = document.createElement("img");
//       productImage.src = product.image;
//       productImage.alt = product.title;
//       const productPrice = document.createElement("p");
//       productPrice.textContent = `Price: $${product.price}`;
//       productCard.appendChild(productImage);
//       productCard.appendChild(productTitle);
//       productCard.appendChild(productPrice);
//       productsContainer.appendChild(productCard);
//     });
//   })
//   .catch((error) => console.error("Error fetching the products:", error));

fetch("https://fakestoreapi.com/users")
  .then((response) => console.log(response))
  .then((users) => {
    console.log(users);
  })
  .catch((error) => console.error("Error fetching the users:", error));
