// Initialize libraries
const express = require('express');
const authRoutes = require('./routes/authRoutes');
require('./services/passport');


const app = express();

// pass app value to route handler
authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);