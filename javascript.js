const DISCOUNT_PERCENTAGE = 10; // 10% discount
const TAX_PERCENTAGE = 5; // 5% tax

function purchaseBook(title, author, price) {
  // Calculate discount and price after discount
  const discountAmount = price * (DISCOUNT_PERCENTAGE / 100);
  const priceAfterDiscount = price - discountAmount;

  // Calculate tax and price after tax
  const taxAmount = priceAfterDiscount * (TAX_PERCENTAGE / 100);
  const priceAfterTax = priceAfterDiscount + taxAmount;

  // Print the purchase details
  console.log(`Title: ${title}`);
  console.log(`Author: ${author}`);
  console.log(`Price: Rp ${price}`);
  console.log(`Discount: ${DISCOUNT_PERCENTAGE}%`);
  console.log(`Discount amount: Rp ${discountAmount}`);
  console.log(`Price after discount: Rp ${priceAfterDiscount}`);
  console.log(`Tax: ${TAX_PERCENTAGE}%`);
  console.log(`Tax amount: Rp ${taxAmount}`);
  console.log(`Price after tax: Rp ${priceAfterTax}`);
}

// Example usage
purchaseBook("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", 50000);
