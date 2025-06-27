const {Cart} = require('../Models/cartSchema');

exports.addToCart = async (userId, productId, quantity) => {
    const cart = await Cart.findOne({ userId });
    if (cart) {
        const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId.toString());
        if (itemIndex > -1) {
            cart.items[itemIndex].quantity += quantity;
        } else {
            cart.items.push({ productId, quantity });
        }
        return await cart.save();
    } else {
        const newCart = await Cart.create({ userId, items: [{ productId, quantity }] });
        return newCart;
    }
}
