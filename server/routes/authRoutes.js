const passport = require('passport');

// API to google OAuth route handler
module.exports = app => {
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
        scope: ['profile']
        })
    );

    app.get('/auth/google/callback', passport.authenticate('google'));
};