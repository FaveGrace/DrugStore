const {Product} = require('../Models/productSchema');

exports.createProduct = async (productData) => await Product.create(productData);
