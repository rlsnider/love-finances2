const asyncHandler = require('express-async-handler')
const Account = require('../models/accountModel')

//@desc Get Accounts
//@route  GET /api/accounts
//@access  private
const getAccounts = asyncHandler(async(req, res) =>{
    const accounts = await Account.find()
    res.status(200).json(accounts)
})

//@desc Create Account
//@route  POST /api/accounts
//@access  private
const addAccount = asyncHandler(async(req, res) =>{
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add an account name')
    }
    const account = await Account.create({
        text: req.body.text
    })
    res.status(200).json(account)
})

//@desc Update Accounts
//@route  PUT /api/accounts/:id
//@access  private
const updateAccount = asyncHandler(async(req, res) =>{
    const account = await Account.findById(req.params.id)
    res.status(200).json(account)
    if(!account){
        res.status(400)
        throw new Error('Account not found')
    }
    const updatedAccount = await Account.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedAccount)
})

//@desc delete Accounts
//@route  DELETE /api/account/:id
//@access  private
const deleteAccount = asyncHandler(async(req, res) =>{
    const account = await Account.findById(req.params.id)
    res.status(200).json(account)
    if(!account){
        res.status(400)
        throw new Error('Account not found')
    }
    await account.remove()
    res.status(200).json({id: req.params.id})
})


module.exports ={
    getAccounts,
    addAccount,
    updateAccount,
    deleteAccount
}