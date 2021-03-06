const express = require('express');
const config = require('config');
const routes = require('./routes/index');
/**
 * Express configuration
 */
const app = express();
app.use(express.json());


/**
 * Mongoose configuration
*/
require('./utils/mongo')();

/**
 * Routes
*/
app.use('/api', routes);

/**
 * Start server
*/
const port = process.env.PORT || config.PORT;
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});

module.exports = app;
