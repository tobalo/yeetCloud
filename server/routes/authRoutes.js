const passport = require('passport');

// API to google OAuth route handler
module.exports = app => {
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
        scope: ['profile', 'email']
        })
    );

    app.get('/auth/google/callback', 
    passport.authenticate('google'), 
    (req, res, next) => {
        res.redirect('/accounts');
    });
    
    app.get('/auth/logout', (req, res, next) => {
        req.logout();
        res.redirect('/');
        next();
    });

    app.get('/auth/user', (req, res) => {
        res.send(req.user);
    });
};