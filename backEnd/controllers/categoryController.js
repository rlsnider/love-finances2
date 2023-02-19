const asyncHandler = require('express-async-handler')
const Category = require('../models/categoryModel')
const User = require('../models/userModel')

//@desc Get Categories
//@route  GET /api/categories
//@access  private
const getCategories = asyncHandler(async(req, res) =>{
    const categories = await Category.find({user: req.user.id})
    res.status(200).json(categories)
})

//@desc Create Category
//@route  POST /api/categories
//@access  private
const addCategory = asyncHandler(async(req, res) =>{
    if(!req.body.name) {
        res.status(400)
        throw new Error('Please add a new category')
    }
    const category = await Category.create({
        name: req.body.name,
        user: req.user.id,
    })
    res.status(200).json(category)
})


//@desc Update Category
//@route  PUT /api/categories/:id
//@access  private
const updateCategory = asyncHandler(async(req, res) =>{
    const category = await Category.findById(req.params.id)
    res.status(200).json(category)
    if(!category) {
        res.status(400)
        throw new Error('Category not found')
    }
    //Check for user
    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }
    //Logged in user matches category user
    if(category.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }
    const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
   
    res.status(200).json(updatedCategory)

})

//@desc delete Category
//@route  DELETE /api/categories/:id
//@access  private
const deleteCategory = asyncHandler(async(req, res) =>{
    const category = await Category.findById(req.params.id)

    if(!category) {
        res.status(400)
        throw new Error('Category not found')
    }
    //Check for user 
    if(!req.user){
        res.status(401)
        throw new Error('User not Found')
    }
    //make sure the logged in user matches the category user
    if(category.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }
    await category.remove()
    res.status(200).json({id: req.params.id})
})


module.exports ={
    getCategories,
    addCategory,
    updateCategory,
    deleteCategory
}