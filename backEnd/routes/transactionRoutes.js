const express = require('express');
const router = express.Router();
const {protect} = require('../middleware/authMiddleware')
const {getTransactions, addTransaction, deleteTransaction } = require('../controllers/transactionController')



router.route('/').get(protect, getTransactions).post(protect, addTransaction)
router.route('/:id').delete(deleteTransaction)

module.exports = router