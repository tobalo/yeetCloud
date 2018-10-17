// Initialize libraries
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const mongoose = require('mongoose');
require('./services/passport');
const keys = require('./config/keys');


const app = express();

// connect to DB
mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true
});

// pass app value to authroute handler
authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);