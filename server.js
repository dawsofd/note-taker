// requirements 
const fs = require('fs');
const path = require('path');
const express = require('express');

// helper method for generating unique ids 
const uuid = require('./helpers/uuid');
const db = require('./db/db.json');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// HTML routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
});

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);


// API routes
// GET
app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        let dbData = JSON.parse(data);
        res.json(dbData)
    });
});

// POST
app.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received to add a new note`);

    const newNote = req.body;
    
    newNote.id = uuid();

    db.push(newNote);

    fs.writeFileSync('./db/db.json', JSON.stringify(db));

    res.json(db);
});

// DELETE
app.delete('/api/notes/:id', (req, res) => {
    const dbDel = db.filter((note) => 
        note.id !== req.params.id)

    fs.writeFileSync('./db/db.json', JSON.stringify(dbDel))

    readFile.json(dbDel)
});



