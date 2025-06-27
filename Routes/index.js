const authRoute = require('./authRoute');
const productRoute = require('./productRoute');
const cartRoute = require('./cartRoute');
const userRoute = require('./userRoute');

const router = [
    authRoute,
    productRoute,
    cartRoute,
    userRoute
]

module.exports = router;