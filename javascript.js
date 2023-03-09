const DISCOUNT_PERCENTAGE = 10; // 10% discount
const TAX_PERCENTAGE = 5; // 5% tax

function purchaseBook(title, author, price, discountPercentage, taxPercentage, stock, purchased) {
  // Check if book is in stock
  if (purchased > stock) {
    console.log(`Sorry, only ${stock} copies of "${title}" by ${author} are available.`);
    return;
  }

  // Calculate discount and price after discount
  const discountAmount = price * (discountPercentage / 100);
  const priceAfterDiscount = price - discountAmount;

  // Calculate tax and price after tax
  const taxAmount = priceAfterDiscount * (taxPercentage / 100);
  const priceAfterTax = priceAfterDiscount + taxAmount;

  // Calculate total price
  const totalPrice = purchased * priceAfterTax;

  // Update stock
  stock -= purchased;

  // Print the purchase details
  console.log(`Title: ${title}`);
  console.log(`Author: ${author}`);
  console.log(`Price: Rp ${price}`);
  console.log(`Discount: ${discountPercentage}%`);
  console.log(`Discount amount: Rp ${discountAmount}`);
  console.log(`Price after discount: Rp ${priceAfterDiscount}`);
  console.log(`Tax: ${taxPercentage}%`);
  console.log(`Tax amount: Rp ${taxAmount}`);
  console.log(`Price after tax: Rp ${priceAfterTax}`);
  console.log(`Purchased: ${purchased}`);
  console.log(`Total price: Rp ${totalPrice}`);

  // Check if book is still in stock
  if (stock > 0) {
    console.log(`There are ${stock} copies of "${title}" by ${author} left in stock.`);
  } else {
    console.log(`"${title}" by ${author} is out of stock.`);
  }
}

// Example usage
purchaseBook("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", 40_000, DISCOUNT_PERCENTAGE, TAX_PERCENTAGE, 10, 2);
