const asyncHandler = require('express-async-handler')
const Account = require('../models/accountModel')
const User = require('../models/userModel')

// GET account list
//route GET /api/accounts
const getAccounts = asyncHandler(async(req, res) => {
    const accounts = await Account.find({ user: req.user.id })
    res.status(200).json(accounts)
})


// POST new Account
//route POST /api/accounts
const newAccount = asyncHandler(async(req, res) => {
    if (!req.body.name) {
        res.status(400)
        throw new Error('Could not create account')
    }
    const account = await Account.create({
        name: req.body.name,
        user: req.user.id
    })
    res.status(200).json(account)
   
})

// PUT edit Account
//route PUT /api/accounts/:id
const updateAccount = asyncHandler(async(req, res) => {
    const account = await Account.findById(req.params.id)

    if (!account) {
        res.status(400)
        throw new error('Account not found')
    }

    //check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    //Make sure the logged in user matches the user account
    if(account.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized')        
    }
    const updatedAccount = await Account.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedAccount)
})

//DELETE delete Account
//route DELETE /api/accounts/:id
const deleteAccount = asyncHandler(async(req, res) => {
    const account = await Account.findById(req.params.id)

    if(!account){
        res.status(400)
        throw new error('Account not found')
    }
    //Check for user
   
    
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    //logged in user matches user account
    if (account.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }
    await account.remove()
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getAccounts,
    newAccount,
    updateAccount,
    deleteAccount
}