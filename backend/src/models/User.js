const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true, // Limpiar el string y los espacios en blanco
        unique: true // Username unico no pueden haber dos iguales
    }
}, {
    timestamps: true
}); 

module.exports = model('User', userSchema);