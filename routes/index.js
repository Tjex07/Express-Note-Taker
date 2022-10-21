
const router = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// assigns a random ID to notes inputted to the system
const { v4: uuidv4 } = require('uuid');
// brings in the DB class object
const db = require("../db/db");

// route to notes

router.get('/api/notes', (req, res) =>
    readFromFile('db/db.json').then((data) => res.json(JSON.parse(data)))
);

// route for a new notes to append db.json
router.post('/api/notes', (req, res) => {
    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
            id: uuidv4(),
            title,
            text,
        };
        // appends the json file is successful
        readAndAppend(newNote, './db/db.json');

        const response = {
            status: 'success',
            body: newNote,
        };
        // returns an error response
        res.json(response);
    } else {
        res.json('Error in posting note');
    }
});


module.exports = router;