const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    text:{
        type: String,
        required: [true, 'Please choose a category']
    }
})

module.exports = mongoose.model('Category', categorySchema )