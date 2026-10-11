const express = require('express');
const { registerUser, loginUser, getUsers } = require('../controller/authController');
const { protect } = require('../middleware/authmiddleware');
const { admin } = require('../middleware/adminmiddleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/users', protect, admin, getUsers);

module.exports = router;