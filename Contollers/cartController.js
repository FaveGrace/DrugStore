const {addToCart} = require('../Service/cartService');

exports.addCart = async (req, res) => {

    const {userId, productId, quantity} = req.body;
    try {
        const cart = await addToCart(userId, productId, quantity);
        res.status(200).json({
            status: 'success',
            data: {
                cart
            }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};