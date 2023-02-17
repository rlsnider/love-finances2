const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({message: 'Get Payees'})
})
router.post('/', (req, res) => {
    res.status(200).json({message: 'Create Payee'})
})
router.put('/:id', (req, res) => {
    res.status(200).json({message: `Edit Payee ${req.params.id}`})
})
router.delete('/:id', (req, res) => {
    res.status(200).json({message: `Remove Payee ${req.params.id}`})
})

module.exports = router