function calculateTotal(index) {
  const prices = [400, 19000, 50, 100, 150, 2000];
  const quantities = document.querySelectorAll('input[type="number"]');
  const totalCells = [document.getElementById('totalBrownie'), document.getElementById('totalBrownieTray'), document.getElementById('totalSmallChips'), document.getElementById('totalLargeChips'), document.getElementById('totalForeignChips'), document.getElementById('totalBurger')];
  let finalTotal = 0;

  for (let i = 0; i < prices.length; i++) {
    const quantity = parseInt(quantities[i].value, 10);
    const total = prices[i] * quantity;
    totalCells[i].textContent = total;
    finalTotal += total;
  }

  document.getElementById('finalTotal').textContent = finalTotal;
}



function submitOrder() {
  // Get values from the form
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const location = document.getElementById('location').value;
  const items = document.getElementById('items').value;

  // Display order summary
  const orderSummary = document.getElementById('orderSummary');
  orderSummary.innerHTML = `
    <h3>Order Summary</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Phone Number:</strong> ${phone}</p>
    <p><strong>Email Address:</strong> ${email}</p>
    <p><strong>Location:</strong> ${location}</p>
    <p><strong>Items & Quantities:</strong></p>
    <p>${items}</p>
    <p>Thank you for placing your order and visiting our site. Enjoy!</p>
  `;

  // Email functionality (Note: This is a client-side approach for educational purposes, server-side is recommended)
  const mailtoLink = `mailto:Boom835@proton.me?subject=New Order&body=${encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nLocation: ${location}\nItems & Quantities:\n${items}`)}`;
  window.location.href = mailtoLink;
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
