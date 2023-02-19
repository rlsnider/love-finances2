const express = require('express');
const colors = require('colors');
const dotenv = require ('dotenv').config();
const connectDB = require('./config/db');
const{ errorHandler} = require('./middleware/errorMiddleware');
const port = process.env.PORT
connectDB();
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/transactions', require('./routes/transactionRoutes'))
app.use('/api/payees', require('./routes/payeeRoutes'))
app.use('/api/accounts', require('./routes/accountRoutes'))
app.use('/api/categories', require('./routes/categoryRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`server started on ${port}`))