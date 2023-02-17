//@desc Get Accounts
//@route  GET /api/accounts
//@access  private
const getTransactions = (req, res) =>{
    res.status(200).json({message: 'Get Transactions'})
}

//@desc Create Transaction
//@route  POST /api/transactions
//@access  private
const addTransaction = (req, res) =>{
    res.status(200).json({message: 'Add Transaction'})
}



module.exports ={
    getTransactions,
    addTransaction,
   
}