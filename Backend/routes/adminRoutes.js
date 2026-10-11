const express = require('express');
const { getUsers } = require('../controller/authController');
const { protect } = require('../middleware/authmiddleware');
const { admin } = require('../middleware/adminmiddleware');

const router = express.Router();

router.get('/users', protect, admin, getUsers);

module.exports = router;
