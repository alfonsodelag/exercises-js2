/*
E-commerce

You have to create an e-commerce shopping cart

First of all we need 2 arrays, 
the list of available products and the list of products introduced in the shopping cart.

1. Fill the products list with at least 4 products, what attributes de we have? 
at least should have:
var product = {
  id:
  name:
  price:
  stock:
}
id is a unique number that identifies each product

3. Create a function addToShoppingCart to add a product to the shopping cart list giving the product id,
the function will add the product to the selectedProduct list, and add the price to the totalPrice

4. Create the function removeFrom ShoppingCart to remove a product that a client does not like anymore

5. Create the function shop, the function will empty the list and set 0 in the totalPrice of the shopping cart
In addition will substract 1 in the product stock of bought products

6. If there is not enough stock, the product cannot be added to the shopping cart
*/

var products = [];

var product1 = {
  id: 1,
  name: "Toaster X56 Plus",
  price: 12.98,
  stock: 105
};
var product2 = {
  id: 2,
  name: "Watch Rocker",
  price: 9.99,
  stock: 2
};
var product3 = {
  id: 3,
  name: "Laptop",
  price: 100,
  stock: 5
}

var product4 = {
  id: 4,
  name: "Iphone",
  price: 400,
  stock: 5
}


products.push(product1);
products.push(product2);
products.push(product3);
products.push(product4);


var shoppingCart = {
  totalPrice: 0,
  selectedProducts: []
};

// 3. Create a function addToShoppingCart to add a product to the shopping cart list giving the product id,
// the function will add the product to the selectedProduct list, and add the price to the totalPrice
function addToShoppingCart(id) {
  let addedProduct = products.find(product => product.id === id);
  shoppingCart.selectedProducts.push(addedProduct);
  shoppingCart.totalPrice += addedProduct.price;
}

function removeFromShoppingCart(id) {
  let indexOfProduct = shoppingCart.selectedProducts.findIndex(product => product.id === id);
  if (indexOfProduct === -1) {
    console.log("This product is not in the shopping cart")
  } else {
    let [deletedProduct] = shoppingCart.selectedProducts.splice(indexOfProduct, 1); // ! Se utilizan los brackets para obtener el objeto "deletedProduct"
    shoppingCart.totalPrice -= deletedProduct.price;
  }
}
// 5. Create the function shop, the function will empty the list and set 0 in the totalPrice of the shopping cart
// In addition will substract 1 in the product stock of bought products
function shop() {
  shoppingCart.selectedProducts.forEach(selectedProduct => selectedProduct.stock--)
  shoppingCart.totalPrice = 0;
  shoppingCart.selectedProducts = []
}

// ! Deberia haber un IF que compare el ID de los productos con el ID de los productos del Shopping Cart.
// ! Shop debe SUBSTRAER: El stock de los products filtrado por ID MENOS los productos comprados por ID

addToShoppingCart(1);
console.log("Step 1");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p => p.name));

addToShoppingCart(2);
console.log("Step 2");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p => p.name));

addToShoppingCart(2);
console.log("Step 2");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p => p.name));

addToShoppingCart(1);
console.log("Step 2");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p => p.name));

removeFromShoppingCart(2);
console.log("Step 4");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p => p.name));

// let SelectedProductsFromShoppingCartById = shoppingCart.selectedProducts;
// SelectedProductsFromShoppingCartById.map(product => product.id);
// console.log("SelectedProductsFromShoppingCartById !!", SelectedProductsFromShoppingCartById);

shop();
console.log("Step 5");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p => p.name));
console.log("Products", products)

