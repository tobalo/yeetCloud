// Initialize libraries
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.clientID,
            clientSecret: keys.ClientSecret,
            callbackURL: '/auth/google/callback'
        }, 
        (accessToken) => {
            console.log(accessToken);
        }
    )   
);

app.get(
    '/auth/google', 
    passport.authenticate('google',{
    scope: ['profile', 'email']
    })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT);