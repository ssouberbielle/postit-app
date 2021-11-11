const express = require('express');
const cors = require('cors');
const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares (funciones que se ejecutan antes de llegar a la url)
app.use(cors());
app.use(express.json());

// routes (urls que el usuario va a poder visitar)
app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));


module.exports = app;