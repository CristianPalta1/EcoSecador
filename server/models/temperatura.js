const mongoose = require('mongoose');

//Aqui creo el constructor donde van todos los atributos de mi BD
const Schema = mongoose.Schema;

//Aqui creo el modelo
const temperaturaSchema = new Schema({
    temperatura: {type: String},
});

//El model tiene 2 arguementos: 'NombreModelo' y Squema que se utiliza; EL nombre es cualquiera, 
// ese nombre es el que llamo en la exportacion. Ese nombre es el que se crea en la Coleccion de la BD 
module.exports = mongoose.model( 'datostemp',temperaturaSchema);

