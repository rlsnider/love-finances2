const asyncHandler = require('express-async-handler')
const Payee = require('../models/payeeModel')

//@desc Get payeess
//@route  GET /api/payees
//@access  public
const getPayees = asyncHandler(async(req, res) =>{
    const payees = await Payee.find()
    res.status(200).json(payees)
})

//@desc Create Payee
//@route  POST /api/payees
//@access  public
const addPayee = asyncHandler(async(req, res) =>{
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a Payee')
    }
    const payee = await Payee.create({
        text: req.body.text
    })
    res.status(200).json(payee)
})

//@desc Update Payees
//@route  PUT /api/payees/:id
//@access  public
const updatePayee = asyncHandler(async(req, res) =>{
    const payee = await Payee.findById(req.params.id)
    res.status(200).json(payee)
    if(!payee) {
        res.status(400)
        throw new Error ('Payee not found')
    }
    const updatedPayee = await Payee.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedPayee)
})

//@desc delete Payees
//@route  DELETE /api/payees/:id
//@access  public
const deletePayee = asyncHandler(async(req, res) =>{
    const payee = await Payee.findById(req.params.id)
    res.status(200).json(payee)
    if(!payee){
        res.status(400)
        throw new Error('Payee not found')
    }
    await payee.remove()
    res.status(200).json({id: req.params.id})
})


module.exports ={
    getPayees,
    addPayee,
    updatePayee,
    deletePayee
}