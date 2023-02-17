const asyncHandler = require('express-async-handler')
//@desc Get Accounts
//@route  GET /api/accounts
//@access  private
const getAccounts = asyncHandler(async(req, res) =>{
    res.status(200).json({message: 'Get Accounts'})
})

//@desc Create Account
//@route  POST /api/accounts
//@access  private
const addAccount = asyncHandler(async(req, res) =>{
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add an account name')
    }
    res.status(200).json({message: 'Add Account'})
})

//@desc Update Accounts
//@route  PUT /api/accounts/:id
//@access  private
const updateAccount = asyncHandler(async(req, res) =>{
    res.status(200).json({message: `Update Account ${req.params.id}`})
})

//@desc delete Accounts
//@route  DELETE /api/account/:id
//@access  private
const deleteAccount = asyncHandler(async(req, res) =>{
    res.status(200).json({message: `Delete Account ${req.params.id}`})
})


module.exports ={
    getAccounts,
    addAccount,
    updateAccount,
    deleteAccount
}