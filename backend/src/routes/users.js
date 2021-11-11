const { Router } = require('express');
const router = Router();

const { createUser, deleteUser, updateUser, getUsers, getUser } = require('../controllers/users.controller');

router.route('/') // http://localhost:8080/api/users
    .get(getUsers)
    .post(createUser);

router.route('/:id') // http://localhost:8080/api/users/1234
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser);    

module.exports = router;