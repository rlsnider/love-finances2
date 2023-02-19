const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

//@desc Register new User
//@route POST /api/users
//@access Public
const registerUser = asyncHandler(async(req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please enter all fields')
    }
    //check for user
    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }
    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Create User
    const user = await User.create({
        name, 
        email, 
        password: hashedPassword,
    })
    //Check to make sure user was created
    if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }else {
        res.status(400)
        throw new Error('Missing or invalid user data')
    }
})

//@desc Login User
//@route POST /api/users/login
//@access Public
const loginUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body
    //check for email 
    const user = await User.findOne({email})
    //compare pw with hashed pw
    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Opps something went wrong, check your password and email')
    }

})

//@desc Get current user's data
//@route GET /api/users/me
//@access Private
const getMe = asyncHandler(async(req, res) => {
res.status(200).json(req.user)
})   

//Generate Token
    const generateToken = (id) =>{
        return jwt.sign({ id }, process.env.JWT_SECRET, {
            expiresIn: '1000d'
        })
    }
    module.exports = {
        registerUser,
        loginUser,
        getMe
    }