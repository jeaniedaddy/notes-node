console.log('Starting app.js;');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var argv = yargs.argv;
var command = process.argv[2];

console.log('command : ', argv._[0]);
// console.log('Process', process.argv);
console.log('Yargs', argv);

if(command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log('Note created');
        notes.logNote(note);
    } else {
        console.log("Duplicated note. cannot add");
    }

} else if (command === 'list'){
    notes.getAll();
} else if (command === 'read'){
    var note = notes.getNote(argv.title);
    if(note){
        console.log('Note found');
        notes.logNote(note);
        
    } else {
        console.log("Note not found");
    }
    
    
    notes.getNote(argv.title);
} else if (command === 'remove'){
    var ret = notes.removeNote(argv.title); 
    var message = ret ? 'note was removed' : 'note found';
    console.log(message);
} else {
    console.log('Command not recognized');
}

