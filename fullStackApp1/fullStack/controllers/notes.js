var Note = require('../models/note');

module.exports = {
    index,
    new: newNote,
    create
}



function create(req, res) {
    var note = new Note(req.body);
    console.log(req.body)
    note.save(function(err) {
        // if (err) {
        //     console.log(note);
        //     // console.log("you gotta figure out what broke bbgrl");
        //     return res.render('notes/new');
        // };
        console.log(note);
        res.redirect('./notes');
    })
}

function newNote(req, res) {
    res.render('./notes/new');
}

function index(req, res) {
    Note.find({}, function(err, notes) {
        res.render('./notes', { title: 'Dashboard',
            notes
        })
    });
}