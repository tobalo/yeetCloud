const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');


passport.use(
    new GoogleStrategy(
        {
            clientID: keys.clientID,
            clientSecret: keys.clientSecret,
            callbackURL: '/auth/google/callback'
        }, 
        (accessToken, refreshToken, profile, done) => {
            new User({ 
                googleID: profile.id,
                name: profile.name,
                email: profile.email
            }).save();
        }
    )   
);