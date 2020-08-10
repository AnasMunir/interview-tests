'use strict';
const products = require('./products.interface');
const cart = require('./cart.interface');

class Test {
	constructor() {
		// displayProducts();
		displayCart();
	}
}

const displayProducts = () => {
	console.log('products', products);
}

const displayCart = () => {
	console.log('cart', cart);
}












// Do not edit below this line
const test = new Test();
