const express = require('express');
const {createUser, getAllUsers, getUserById, updateUser, deleteUser} = require('../Controllers/authController');
const {auth} = require('../Middlewares/authMiddleware'); // Assuming you have an auth middleware for protected routes

const router = express.Router();

router.post('/register', createUser);
router.get('/users', auth, getAllUsers);
router.get('/users/:id', auth, getUserById);
router.put('/users/:id', auth, updateUser);
router.delete('/users/:id', auth, deleteUser);

module.exports = router;