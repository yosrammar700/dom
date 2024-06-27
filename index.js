document.addEventListener("DOMContentLoaded", () => {
  const cartItems = document.querySelectorAll(".cart-item");
  const totalPriceElement = document.getElementById("total");

  cartItems.forEach((item) => {
    const minusBtn = item.querySelector(".minus-btn");
    const plusBtn = item.querySelector(".plus-btn");
    const deleteBtn = item.querySelector(".delete-btn");
    const likeBtn = item.querySelector(".like-btn");
    const quantityElement = item.querySelector(".quantity");
    const itemPriceElement = item.querySelector(".item-price");

    let quantity = parseInt(quantityElement.textContent);
    const itemPrice = parseFloat(item.dataset.price);

    const updateTotalPrice = () => {
      let total = 0;
      cartItems.forEach((item) => {
        const quantity = parseInt(item.querySelector(".quantity").textContent);
        const price = parseFloat(item.dataset.price);
        total += quantity * price;
      });
      totalPriceElement.textContent = total.toFixed(2);
    };

    minusBtn.addEventListener("click", () => {
      if (quantity > 1) {
        quantity--;
        quantityElement.textContent = quantity;
        itemPriceElement.textContent = `$${(quantity * itemPrice).toFixed(2)}`;
        updateTotalPrice();
      }
    });

    plusBtn.addEventListener("click", () => {
      quantity++;
      quantityElement.textContent = quantity;
      itemPriceElement.textContent = `$${(quantity * itemPrice).toFixed(2)}`;
      updateTotalPrice();
    });

    deleteBtn.addEventListener("click", () => {
      item.remove();
      updateTotalPrice();
    });

    likeBtn.addEventListener("click", () => {
      likeBtn.classList.toggle("liked");
    });
  });

  updateTotalPrice();
});