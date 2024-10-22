// Dependencies
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Express server
const app = express();

// Set Port
const PORT = process.env.PORT || 3001;

// Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routing
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Listener
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);


