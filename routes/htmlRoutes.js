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

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;