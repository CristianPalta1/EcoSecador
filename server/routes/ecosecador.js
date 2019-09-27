const controllersEcosecador = require('../controllers/ecosecador');

module.exports = (app) => {
   
    //Aqui obtengo los datos de mi BD. El primer parametro es el nombre de la coleccion y el segundo es la funcion en del controler
    app.get('/datosTemp', controllersEcosecador.allDatosTemp);
    app.post('/datosTemp', controllersEcosecador.createData)
    /*
    app.post('/admin', controllersSegCauca.Ingeniero);
    app.post('/corporativos', controllersSegCauca.createAdmin);
    //// Aspirante de guardia //////
    app.post('/personal', controllersSegCauca.createPersonal);
    app.get('/personal', controllersSegCauca.getPersonal);
    // app.put('/personal', controllersSegCauca.updatePersonal);
    //// Usuarios que se registran ////////7
    app.post('/usuarios', controllersSegCauca.createUsuario);
    app.get('/usuarios', controllersSegCauca.getUsuario);
    //app.put('/usuarios', controllersSegCauca.updateUsuario);
    //// Comentarios de Usuarios ////////
    app.post('/comentario', controllersSegCauca.createComentario);
    app.get('/comentario', controllersSegCauca.getComentario);
    // app.put('/comentario', controllersSegCauca.updateComentario);
    //////// SERVICIO TECNICO ///////////
    app.post('/tecnico', controllersSegCauca.createSoporte);
    app.get('/tecnico', controllersSegCauca.getSoporte);
    ////////// COTIZACIONES //////////////
    app.post('/cotizacion', controllersSegCauca.createCotizacion);
    app.get('/cotizacion', controllersSegCauca.getCotizacion);
    ////////////  VISITAS TECNICAS ///////////////////
    app.post('/soporte', controllersSegCauca.createVisita);
    app.get('/soporte', controllersSegCauca.getVisita);
    */

//     app.post('/updatepet', controllerPets.updatePet);

}