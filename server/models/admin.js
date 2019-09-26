const mongoose = require('mongoose');

const Schema = mongoose.Schema

const adminSchema = new Schema({
    email : {type :String},
    pass : {type :String},
    name : {type :String},
    type : {type :String}
})

module.exports = mongoose.model('Admin',adminSchema);
