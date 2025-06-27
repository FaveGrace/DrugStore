const {createUser, login, token} = require('../Service/authService');

exports.register = async (req, res) => {
    const user = await createUser(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            user
        }
    });
}

exports.loginUser = async (req, res) => {
    const {email, password} = req.body;
    const user = await login(email, password);
    const authToken = token(user._id);
    res.cookie('authToken', authToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        maxAge: 24 * 60 * 60 * 1000 // 1 day
    });

    res.status(200).json({
        status: 'success',
        data: {
            user,
            token: authToken
        }
    });
}

exports.logout = (req, res) => {
    res.clearCookie('authToken');
    res.status(200).json({
        status: 'success',
        message: 'Logged out successfully'
    });
}