const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT

const app = express()

app.use('/api/accounts', require('./routes/accountRoutes'))

app.use('/api/categories', require('./routes/categoryRoutes'))

app.use('/api/payees', require('./routes/payeeRoutes'))

app.use('/api/transactions', require('./routes/transactionRoutes'))


app.listen(port, () => console.log(`Server started on port ${port}`))