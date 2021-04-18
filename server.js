const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

// Security Packages
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

// eslint-disable-next-line no-unused-vars
const colors = require('colors');

// Middleware import
const errorHandler = require('./middleware/error_middleware');

// db
const connectDB = require('./config/db_connection');
// router files
const registerUserRouter = require('./routes/register');
const userRouter = require('./routes/user');
const totalRouter = require('./routes/total');
const adminRouter = require('./routes/admin');
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

// Mongo Sanitize to prevent SQL injection
app.use(mongoSanitize());

// Helmet for security headers
app.use(helmet());

// Prevent XSS attacks
app.use(xss());

// Prevent http param pollution
app.use(hpp());

// Enable CORS
app.use(cors());

// Mount router
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use('/api/v1/register', registerUserRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/total', totalRouter);
app.use('/api/v1/admin', adminRouter);

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
