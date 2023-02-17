const express = require('express');
const router = express.Router();
const {getAccounts, addAccount, updateAccount, deleteAccount } = require('../controllers/accountController')

router.route('/').get(getAccounts).post(addAccount)
router.route('/:id').delete(deleteAccount).put(updateAccount)

module.exports = router