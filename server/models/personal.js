const mongoose = require('mongoose');

const Schema = mongoose.Schema

const personalSchema = new Schema({
    name: {type :String},
    lastname: {type :String},
    adress: {type :String},
    phone: {type :String},
    city: {type :String},
    state: {type :String},
    age: {type :String},
    email: {type: String},
    pass : {type: String}
})

module.exports = mongoose.model('Personal',personalSchema);