const mongoose = require('mongoose')

const accountSchema = mongoose.Schema({
    text:{
        type: String,
        required: [true, 'Please choose an account']
    }
})

module.exports = mongoose.model('Account', accountSchema )