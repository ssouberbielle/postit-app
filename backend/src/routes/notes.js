const { Router } = require('express');
const router = Router(); // Enrutador de express para navegar en la app

const { getNotes, getNote, createNote, deleteNote, updateNote } = require('../controllers/notes.controller');

router.route('/')
    .get(getNotes) // get, post, put, delete son los 4 metodos url mas utilizados
    .post(createNote);
    

router.route('/:id')
    .delete(deleteNote)
    .get(getNote)
    .put(updateNote);

module.exports = router;