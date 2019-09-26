const mongoose = require('mongoose');

const Schema = mongoose.Schema

const soporteSchema = new Schema({
    name: {type :String},
    lastname: {type :String},
    adress: {type :String},
    // phone: {type :String},
    // city: {type :String},
    // state: {type :String},
    // age: {type :String},
    email: {type: String},
    // pass : {type: String}
    comment: {type: String}
})

module.exports = mongoose.model('Soporte_Tecnico',soporteSchema);