const express = require('express');
const router = express.Router();
const {getPayees, addPayee, updatePayee, deletePayee} = require('../controllers/payeeController')
const{protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getPayees).post(protect, addPayee)

router.route('/:id').put(protect, updatePayee).delete(protect, deletePayee)


module.exports = router