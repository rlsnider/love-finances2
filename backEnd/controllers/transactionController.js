const asyncHandler = require('express-async-Handler')
//@desc Get Accounts
//@route  GET /api/accounts
//@access  private
const getTransactions = asyncHandler(async(req, res) =>{
    res.status(200).json({message: 'Get Transactions'})
})

//@desc Create Transaction
//@route  POST /api/transactions
//@access  private
const addTransaction = asyncHandler(async(req, res) =>{
    if(!req.body.text) {
        res.status(400)
        throw new Error('please add text field')
    }
    res.status(200).json({message: 'Add Transaction'})
})



module.exports ={
    getTransactions,
    addTransaction,
   
}