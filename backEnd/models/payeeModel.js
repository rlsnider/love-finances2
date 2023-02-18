const mongoose = require('mongoose')

const payeeSchema = mongoose.Schema({
    text:{
        type: String,
        required: [true, 'Please choose a payee']
    }
})

module.exports = mongoose.model('Payee', payeeSchema )