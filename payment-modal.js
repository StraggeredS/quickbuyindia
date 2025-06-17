// Get modal and elements
const modal = document.getElementById("paymentModal");
const closeBtn = modal.querySelector(".close");
const waLink = modal.querySelector(".btn.whatsapp-link");
const productUPI = modal.querySelector(".upi-id span");
const productNameEl = modal.querySelector(".product-name");
const productPriceEl = modal.querySelector(".product-price");

// Show modal with dynamic content
function openPaymentModal(name, price) {
  productUPI.textContent = "msubhodeep20-1@okicici";
  productNameEl.textContent = name;
  productPriceEl.textContent = "₹" + price;

  const waText = encodeURIComponent(`Hi, I just paid INR ${price} for ${name}. Here is my payment screenshot.`);
  waLink.href = `https://wa.me/916291837049?text=${waText}`;

  modal.style.display = "block";
}

// Close modal when clicking (X)
closeBtn.onclick = () => {
  modal.style.display = "none";
};

// Close modal when clicking outside
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
