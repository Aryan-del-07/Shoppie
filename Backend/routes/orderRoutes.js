const express = require('express');
const { addOrderItems, getMyOrders, getOrders, updateOrderStatus } = require('../controller/orderController');
const { protect } = require('../middleware/authmiddleware');
const { admin } = require('../middleware/adminmiddleware');

const router = express.Router();

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders);
router.route('/myorders').get(protect, getMyOrders);
router.route('/:id/status').put(protect, admin, updateOrderStatus);

module.exports = router;