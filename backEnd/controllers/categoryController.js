const asyncHandler = require('express-async-handler')
//@desc Get Categories
//@route  GET /api/categories
//@access  private
const getCategories = asyncHandler(async(req, res) =>{
    res.status(200).json({message: 'Get Categories'})
})

//@desc Create Category
//@route  POST /api/categories
//@access  private
const addCategory = asyncHandler(async(req, res) =>{
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a new category')
    }
    res.status(200).json({message: 'Add Category'})
})


//@desc Update Category
//@route  PUT /api/categories/:id
//@access  private
const updateCategory = asyncHandler(async(req, res) =>{
    res.status(200).json({message: `Update Category ${req.params.id}`})
})

//@desc delete Category
//@route  DELETE /api/categories/:id
//@access  private
const deleteCategory = asyncHandler(async(req, res) =>{
    res.status(200).json({message: `Delete Category ${req.params.id}`})
})


module.exports ={
    getCategories,
    addCategory,
    updateCategory,
    deleteCategory
}