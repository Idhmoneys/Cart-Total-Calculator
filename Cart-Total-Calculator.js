//A cart contains items with a price and quantity. Build a summary that calculates subtotal, discount, tax, and final total.

function calculateSubtotal(items){
    let subtotal = 0;
    for(item of items){
        subtotal += (item.price * item.quantity);
    }
    return subtotal;
}

//should add price * quantity for every item.

function calculateDiscount(subtotal, discountPercent){
    return subtotal * (discountPercent / 100);
}

//should return the discount amount.

function calculateTax(amountAfterDiscount, taxPercent){
    return amountAfterDiscount * (taxPercent / 100);
}

// should return the tax amount after the discount.

function createCartSummary(items, discountPercent, taxPercent) {
    // calculate subtotal
    const subtotal = calculateSubtotal(items);
    // calculate discount and amount after discount
    const discount = calculateDiscount(subtotal, discountPercent);
    const amountAfterDiscount = subtotal - discount;
    // calculate tax
    const tax = calculateTax(amountAfterDiscount, taxPercent);
    // adding tax to subtotal
    const total = subtotal + tax;
    // returning total value
    return {subtotal, discount, tax, total};
}

//should return an object with subtotal, discount, tax, and total.

// Sample checks:

const cartItems = [
  { name: 'Notebook', price: 10, quantity: 2 },
  { name: 'Pen', price: 2, quantity: 5 },
  { name: 'Bag', price: 30, quantity: 1 },
];
const singleItemCart = [{ name: 'Mouse', price: 25, quantity: 2 }];

// print

console.log(calculateSubtotal(cartItems));
console.log(createCartSummary(cartItems, 10, 5));
console.log(createCartSummary(singleItemCart, 0, 10));

// Expected Output

console.log(60, { subtotal: 60, discount: 6, tax: 2.7, total: 56.7 }, { subtotal: 50, discount: 0, tax: 5, total: 55 })