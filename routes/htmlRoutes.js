// dependencies 
const path = require('path');
const fb = require('express').Router();

fb.get('/', (req, res) => {
    console.info(`${req.method} request received for notes`);
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

fb.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

fb.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = fb;