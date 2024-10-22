// Dependencies
const router = require('express').Router();
const saveData = require('../db/fsUtils');

// GET 
app.get('/notes', function (req, res) {
    saveData
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err =>res.status(500).json(err));

});

// POST 
router.post('/notes', (req, res) => {
    saveData
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});

// DELETE
router.delete('/notes/:id', function (req, res) {
    saveData
        .deleteNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err));
});

module.exports = router;
