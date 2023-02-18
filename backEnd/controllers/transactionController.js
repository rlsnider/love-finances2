const asyncHandler = require('express-async-Handler')
const Transaction = require('../models/transactionModel')
const User = require('../models/userModel')

//@desc Get Accounts
//@route  GET /api/accounts
//@access  private
const getTransactions = asyncHandler(async(req, res) =>{
    const transactions = await Transaction.find({user: req.user.id})
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
        text: req.body.text,
        user: req.user.id,
    })
    res.status(200).json(transaction)
})

//@desc Delete Transaction
//@route DELETE /api/transactions
//@access private

const deleteTransaction = asyncHandler(async(req, res) => {
    const transaction = await Transaction.findById(req.params.id)
    
    if(!transaction){
        res.status(400)
        throw new Error('Transaction not found')
    }
    //Check for user
    if(!req.user) {
        res.status(401)
        throw new Error ('User not Found')
    }
    //make sure the logged in user matches the account user
    if(transaction.user.toString() !== req.user.id){
        res.status(401)
        throw new Error ('User not authorized')
    }
    
    await transaction.remove()
    res.status(200).json({id: req.params.id})
})



module.exports ={
    getTransactions,
    addTransaction,
    deleteTransaction
}