// Initialize libraries
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/user');
require('./services/passport');

const app = express();

// connect to DB
mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true}, 
    function(err){
        if (!err){
            console.log("Database connected...")
        } else {
            console.log("Unable to connect...")
        }
    }
);

// pass app value to authroute handler
authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);