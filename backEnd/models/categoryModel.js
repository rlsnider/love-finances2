const mongoose = require('mongoose')

const categorySchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        text:{
            type: String,
            required: [true, 'Please choose a category']
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Category', categorySchema )