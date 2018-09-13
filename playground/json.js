// var obj = {
//     name: 'Steve'
// };

// var stringObj = JSON.stringify(obj);

// console.log(typeof obj);
// console.log(obj);

// var personString = '{"name":"Steve", "age": 45}';
// var person = JSON.parse(personString);

// console.log(typeof person);
// console.log(person);


const fs = require('fs');

var orginalNote = {
    title: 'Some title',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(orginalNote);
fs.writeFileSync('note.json', originalNoteString);

var noteString = fs.readFileSync('note.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note);


