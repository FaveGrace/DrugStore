const jwt = require('jsonwebtoken');
const User = require('../Models/userSchema');

const auth = async (req, res, next) => {
    
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        req.user = user;
        next();

        console.log(user);
}

module.exports = auth;