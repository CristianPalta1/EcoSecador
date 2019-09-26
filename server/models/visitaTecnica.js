const mongoose = require('mongoose');

const Schema = mongoose.Schema

const visitaSchema = new Schema({
    // id: {type :String},
    name: {type :String},
    lastname: {type :String},
    adress: {type :String},
    email: {type :String},
    comment: {type :String}
})

module.exports = mongoose.model('Visita_Tecnica',visitaSchema);