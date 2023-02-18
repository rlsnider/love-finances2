const asyncHandler = require('express-async-handler')
const Payee = require('../models/payeeModel')
const User = require('../models/userModel')

//@desc Get payeess
//@route  GET /api/payees
//@access  public
const getPayees = asyncHandler(async(req, res) =>{
    const payees = await Payee.find({user: req.user.id})
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
        text: req.body.text,
        user: req.user.id,
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
    //check for user
    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }
    //Logged in user matches the Payee user
    if(payee.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
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
   
    if(!payee){
        res.status(400)
        throw new Error('Payee not found')
    }
    //check for user 
    if(!req.user) {
        res.status(401)
        throw new Error('User not Found')
    }
    //make sure the logged in user matches the payee user
    if(payee.user.toString() !== req.user.id) {
        res.status (401)
        throw new Error('User not authorized')
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