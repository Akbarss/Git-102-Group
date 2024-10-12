const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
const cartItemsDiv = document.getElementById("cart-items");
const cartTotalDiv = document.getElementById("cart-total");

function renderCart() {
  cartItemsDiv.innerHTML = "";
  if (cartItems.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty</p>";
    cartTotalDiv.innerHTML = "";
    return;
  }

  cartItems.forEach((item, index) => {
    const cartItemEl = document.createElement("div");
    cartItemEl.classList.add("cart-item");
    cartItemEl.innerHTML = `
      <h4>${item.title}</h4>
      <p>Quantity: ${item.quantity}</p>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItemsDiv.appendChild(cartItemEl);
  });

  const total = cartItems.reduce((sum, item) => sum + item.quantity * 10, 0); // Assuming each movie is $10
  cartTotalDiv.innerHTML = `<h3>Total: $${total}</h3>`;
}

function removeFromCart(index) {
  cartItems.splice(index, 1);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  renderCart();
}

renderCart();
