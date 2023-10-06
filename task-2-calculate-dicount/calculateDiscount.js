// Function to calculate the final price after discount
function calculateDiscountedPrice(price, discountPercentage) {
  // Calculate values
  const discount = (discountPercentage / 100) * price;
  const discountedPrice = price - discount;
  return discountedPrice;
}

// Function to display the discounted price when the form is submitted
function showDiscountedPrice() {
  // Get value from input price for calculate after
  const price = parseFloat(document.getElementById("price").value);

  // Get value from input discountPercentage for calculate after
  const discountPercentage = parseFloat(
    document.getElementById("percentaje-discount").value
  );

  // Call function to calculate values
  const discountedPrice = calculateDiscountedPrice(price, discountPercentage);

  // Get the element where the discount result will be displayed
  const element = document.getElementById("result-discoint");
  element.innerText = `Precio después del descuento: $${discountedPrice.toFixed(2)}`;
  element.style.display = "block"; // Make the element visible

  // Hide the element after 3 seconds
  setTimeout(function () {
    element.style.display = "none";
  }, 3000);
}
