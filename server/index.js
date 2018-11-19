// Initialize libraries
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const cors = require('cors');
require('./models/user');
require('./services/passport');

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

const app = express();

app.use(cors());

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());


// pass app value to authroute handler
authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);