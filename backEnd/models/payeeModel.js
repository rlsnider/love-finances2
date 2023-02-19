const mongoose = require('mongoose')

const payeeSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        name:{
            type: String,
            required: [true, 'Please choose a payee'],
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Payee', payeeSchema )