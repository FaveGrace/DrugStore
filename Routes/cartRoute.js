const express = require('express');
const {addToCart} = require('../Controllers/cartController');

const router = express.Router();

router.post('/cart', addToCart);

module.exports = router;