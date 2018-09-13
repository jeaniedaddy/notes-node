console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('note-data.json'));
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('note-data.json',JSON.stringify(notes));
};

var logNote = (note) => {
    console.log('-------');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

var addNote = (title, body) => {
    var mynotes = fetchNotes();

    var note = {
        title,
        body
    };

    var duplicatedNotes = mynotes.filter( n => n.title === title);
    
    if(duplicatedNotes.length === 0){
        mynotes.push(note);
        saveNotes(mynotes);
        return note; 
    } else {
        // console.log('Found duplicated')
    }
};

var getAll = () => {
    console.log('getting all notes');
};

var getNote = (title)=> {
    var notes = fetchNotes();
    var filteredNotes= notes.filter(n => n.title === title);
    return filteredNotes[0];

};

var removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes= notes.filter(n => n.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};