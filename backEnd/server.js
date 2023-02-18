const express = require('express');
const colors = require('colors')
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT

connectDB()
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/accounts', require('./routes/accountRoutes'))
app.use('/api/categories', require('./routes/categoryRoutes'))
app.use('/api/payees', require('./routes/payeeRoutes'))
app.use('/api/transactions', require('./routes/transactionRoutes'))

app.use(errorHandler)
app.listen(port, () => console.log(`Server started on port ${port}`))