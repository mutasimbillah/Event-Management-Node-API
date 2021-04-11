const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

// eslint-disable-next-line no-unused-vars
const colors = require('colors');

// Middleware import
const errorHandler = require('./middleware/error_middleware');

// db
const connectDB = require('./config/db_connection');
// router files
const registerUserRouter = require('./routes/register');
const userRouter = require('./routes/user');
// load env file
dotenv.config({ path: './config/config.env' });

// call db cnnection
connectDB();

// env variables
const PORT = process.env.PORT || 5000;
// start
const app = express();

// add json body perser (req.body)
app.use(express.json());

// Mount router
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use('/api/v1/register', registerUserRouter);
app.use('/api/v1/user', userRouter);

// call error middleware
app.use(errorHandler);

const server = app.listen(
    PORT,
    // eslint-disable-next-line comma-dangle
    console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`.green.bold)
);

// Handle unhandled promise rejections
// eslint-disable-next-line no-unused-vars
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red.bold);
    // Close server & exit process
    server.close(() => process.exit(1));
});
