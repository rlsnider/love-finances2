const asyncHandler = require('express-async-Handler')
const Transaction = require('../models/transactionModel')

//@desc Get Accounts
//@route  GET /api/accounts
//@access  private
const getTransactions = asyncHandler(async(req, res) =>{
    const transactions = await Transaction.find()
    res.status(200).json(transactions)
})

//@desc Create Transaction
//@route  POST /api/transactions
//@access  private
const addTransaction = asyncHandler(async(req, res) =>{
    if(!req.body.text) {
        res.status(400)
        throw new Error('please add text field')
    }
    const transaction = await Transaction.create({
        text: req.body.text
    })
    res.status(200).json(transaction)
})

//@desc Delete Transaction
//@route DELETE /api/transactions
//@access private

const deleteTransaction = asyncHandler(async(req, res) => {
    const transaction = await Transaction.findById(req.params.id)
    res.status(200).json(transaction)
    if(!transaction){
        res.status(400)
        throw new Error('Transaction not founc')
    }
    await transaction.remove()
    res.status(200).json({id: req.params.id})
})



module.exports ={
    getTransactions,
    addTransaction,
    deleteTransaction
}