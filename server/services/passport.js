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
            User.findOne({ googleID: profile.id})
                .then((existingUser) => {
                    if(existingUser){
                        // account exists

                    } else {
                        new User({ googleID: profile.id,
                            email: profile.email}).save();
                    }

                })
        }
    )   
);