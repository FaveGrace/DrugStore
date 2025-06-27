const express = require('express');
const {createUser, login, logout} = require('../Controllers/authController');
const {auth} = require('../Middlewares/authMiddleware'); // Assuming you have an auth middleware for protected routes

const router = express.Router();

router.post ('/register', createUser);
router.post('/login', auth, login);
router.post('/logout', logout);

module.exports = router;
