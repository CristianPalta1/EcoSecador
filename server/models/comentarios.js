const mongoose = require('mongoose');

const Schema = mongoose.Schema

const comentarioSchema = new Schema({
    // id: {type :String},
    name: {type :String},
    lastname: {type :String},
    adress: {type :String},
    email: {type :String},
    city: {type :String},
    state: {type :String},
    phone: {type :String},
    comment: {type :String}
})

module.exports = mongoose.model('Comentarios',comentarioSchema);