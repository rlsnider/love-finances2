const express = require('express');
const router = express.Router();
const {getPayees, addPayee, updatePayee, deletePayee} = require('../controllers/payeeController')

router.route('/').get(getPayees).post(addPayee)

router.route('/:id').put(updatePayee).delete(deletePayee)


module.exports = router