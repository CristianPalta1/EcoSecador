const mongoose = require('mongoose');

const Schema = mongoose.Schema

const corpSchema = new Schema({
    email : {type :String},
    pass : {type :String},
    name : {type :String},
    adress :{type: String},
    type : {type :String}
})

module.exports = mongoose.model('Corporativo',corpSchema);