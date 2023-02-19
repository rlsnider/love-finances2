const mongoose = require('mongoose')

const accountSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        name:{
            type: String,
            required: [true, 'Please choose an account'],
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Account', accountSchema )