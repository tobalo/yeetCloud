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
        res.redirect('/');
    });
    
    app.get('/auth/user/logout', (req, res) => {
        console.log('User:', req.user, 'logged out');
        req.logout();
        res.redirect('/');
    });

    app.get('/auth/user', (req, res) => {
        res.send(req.user);
    });
};