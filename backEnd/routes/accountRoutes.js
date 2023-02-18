const express = require('express');
const router = express.Router();
const {getAccounts, addAccount, updateAccount, deleteAccount } = require('../controllers/accountController')
const {protect} = require('../middleware/authMiddleware')


router.route('/').get(protect, getAccounts).post(protect, addAccount)
router.route('/:id').delete(protect, deleteAccount).put(protect, updateAccount)

module.exports = router