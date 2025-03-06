const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const bodyParser = require("body-parser");
const crypto = require('crypto');
const connection = require('./db');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const dataRoutes = require('./routes/data');
const ussdRoutes = require('./routes/ussd');

// Connect to the database
connection();


app.use(bodyParser.urlencoded({ extended: false }));
// Enable CORS for all origins
app.use(cors());

// Middleware to parse JSON
app.use(express.json());




// Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/data', dataRoutes);
app.use('/api/ussd', ussdRoutes);







app.listen(process.env.PORT, () => {
    console.log('Server is running on port ' + process.env.PORT);
});