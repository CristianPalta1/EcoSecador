const mongoose = require('mongoose');

const Schema = mongoose.Schema

const usuarioSchema = new Schema({
    // id: {type :String},
    name: {type :String},
    lastname: {type :String},
    adress: {type :String},
    phone: {type :String},
    city: {type :String},
    state: {type :String},
    email: {type :String},
    pass: {type :String},
    passC: {type :String},
})

module.exports = mongoose.model('Usuarios',usuarioSchema);