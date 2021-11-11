const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.getNotes = async (req , res) => {
    const notes = await Note.find() // devuelve array de notas
    res.json(notes);
}

notesCtrl.createNote = async (req , res) =>{
    const { title, content, date, author } = req.body;
    const newNote = new Note({
        title: title,
        content: content,
        date: date,
        author: author,
    });
    await newNote.save();
    console.log(newNote);
    res.json({message: 'Note Saved'})
}

notesCtrl.getNote = async (req , res) => {
    const note = await Note.findById(req.params.id);
    console.log(note);
    res.json(note)
}

notesCtrl.updateNote = async (req , res) => {
    const { title, content, author, date } = req.body;
    await Note.findByIdAndUpdate(req.params.id, {
        title,
        author,
        content,
        date
    });
    res.json({message: 'Note Updated'})
}

notesCtrl.deleteNote = async (req , res) => {
    const note = await Note.findByIdAndDelete(req.params.id);
    res.json({message: 'Note Deleted'})
}

module.exports = notesCtrl;