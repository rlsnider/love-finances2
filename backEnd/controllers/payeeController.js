const asyncHandler = require('express-async-handler')

//@desc Get payeess
//@route  GET /api/payees
//@access  public
const getPayees = asyncHandler(async(req, res) =>{
    res.status(200).json({message: 'Get Payees'})
})

//@desc Create Payee
//@route  POST /api/payees
//@access  public
const addPayee = asyncHandler(async(req, res) =>{
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a Payee')
    }
    res.status(200).json({message: 'Add payee'})
})

//@desc Update Payees
//@route  PUT /api/payees/:id
//@access  public
const updatePayee = asyncHandler(async(req, res) =>{
    res.status(200).json({message: `Update Payee ${req.params.id}`})
})

//@desc delete Payees
//@route  DELETE /api/payees/:id
//@access  public
const deletePayee = asyncHandler(async(req, res) =>{
    res.status(200).json({message: `Delete Payee ${req.params.id}`})
})


module.exports ={
    getPayees,
    addPayee,
    updatePayee,
    deletePayee
}