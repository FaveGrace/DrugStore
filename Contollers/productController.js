const {createProduct} = require('../Service/productService');

exports.create = async (req, res) => res.json(await createProduct(req.body));
