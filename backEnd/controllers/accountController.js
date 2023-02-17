//@desc Get Accounts
//@route  GET /api/accounts
//@access  private
const getAccounts = (req, res) =>{
    res.status(200).json({message: 'Get Accounts'})
}

//@desc Create Account
//@route  POST /api/accounts
//@access  private
const addAccount = (req, res) =>{
    res.status(200).json({message: 'Add Account'})
}

//@desc Update Accounts
//@route  PUT /api/accounts/:id
//@access  private
const updateAccount = (req, res) =>{
    res.status(200).json({message: `Update Account ${req.params.id}`})
}

//@desc delete Accounts
//@route  DELETE /api/account/:id
//@access  private
const deleteAccount = (req, res) =>{
    res.status(200).json({message: `Delete Account ${req.params.id}`})
}


module.exports ={
    getAccounts,
    addAccount,
    updateAccount,
    deleteAccount
}