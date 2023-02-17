//@desc Get payeess
//@route  GET /api/payees
//@access  private
const getPayees = (req, res) =>{
    res.status(200).json({message: 'Get Payees'})
}

//@desc Create Payee
//@route  POST /api/payees
//@access  private
const addPayee = (req, res) =>{
    res.status(200).json({message: 'Add Payee'})
}

//@desc Update Payees
//@route  PUT /api/payees/:id
//@access  private
const updatePayee = (req, res) =>{
    res.status(200).json({message: `Update Payee ${req.params.id}`})
}

//@desc delete Payees
//@route  DELETE /api/payees/:id
//@access  private
const deletePayee = (req, res) =>{
    res.status(200).json({message: `Delete Payee ${req.params.id}`})
}


module.exports ={
    getPayees,
    addPayee,
    updatePayee,
    deletePayee
}