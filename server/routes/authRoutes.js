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
    (req, res) => {
        res.redirect('/accounts');
    });
    
    app.get('/auth/logout', (req, res) => {
        req.logout();
        res.redirect('/');
        res.send(req.user);
    });

    app.get('/auth/user', (req, res) => {
        res.send(req.user);
    });
};