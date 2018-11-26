const products = require('./products.interface');
class Products {
	constructor() {
		displayProducts();
	}
}

function displayProducts() {
	console.log('products', products);
}

const product = new Products();
