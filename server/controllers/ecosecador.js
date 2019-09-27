// Las funciones que se crean aqui son asyncronas.
const temperaturaSchema = require('../models/temperatura');
const adminSchema = require('../models/admin');
const corpSchema = require('../models/corporativo');
const personalSchema = require('../models/personal');
const usuarioSchema = require('../models/usuarios');
const comentarioSchema = require('../models/comentarios');
const soporteSchema = require('../models/soportetecnico');
const cotizacionSchema = require('../models/cotizacion');
const visitaSchema = require('../models/visitaTecnica');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const generator = require('generate-password');
const mail = require('./mail');

//esto es lo que se usa en toda la app web

module.exports = {

    allDatosTemp: async (req, res)=> {
        try{
            
            const dataTemp = await temperaturaSchema.find();
            res.send(dataTemp);
        }catch(error){
            res.status(500).json({mensaje: 'Ocurrio un problema'});
        }       
    },
    createData: async (req, res)=> {
        try{

            const temperatura = req.body.dataTemperatura.temperatura;
            const saveData = await temperaturaSchema.create({temperatura: temperatura});
            res.status(201).json(saveData);

        }catch(error){
            res.status(500).send(error)
        }
    },
    allUsuarios: async (req, res) => {
        //se hace un try cacth para caputrar el error. Manejador de errores
        try {
            const users = await adminSchema.find();
            res.json(users);
        } catch (error) {
            res.status(500).json({mensaje: "Ocurrio un error 500", error});
        }
    },
    Ingeniero: async (req, res) => {
        try {
            //const entrada = req.body;
            const email = req.body.email;
            //const pass = req.body.pass;
             const pass = generator.generate({
                 length: 10,
                 numbers: true
             });
            const type = req.body.type;
            const name = req.body.name;
            var salt = bcrypt.genSaltSync(saltRounds);
            var hash = bcrypt.hashSync(pass, salt);
            const adminSaved = await adminSchema.create({ email: email, pass: hash, type: type, name: name });
            mail.send(email, `Bienvenido a Seguridad del Cauca Ltda: su correo: ${email} y su contraseña es: ${pass}`, res,
                     (response) => {
                        console.log("Correeeeeeo");
                     });
            //const adminSaved = await Segcauca.create({ entrada })
            res.status(201).json(adminSaved);

        } catch (error) {
            res.status(500).json({ mensaje: "Algo estas haciendo mal pendejo ._." })
        }
    },
    Read: async (req, res) => {
        try {
            const users = await Segcauca.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ mensaje: "Ocurrio un error ☹" })
        }
    },
    createAdmin: async (req, res) => {
        try {
            //const entrada = req.body;
            const email = req.body.email;
            const pass = generator.generate({
                length: 10,
                numbers: true
            });
            const type = req.body.type;
            const name = req.body.name;
            const adress = req.body.adress;
            const salt = bcrypt.genSaltSync(saltRounds);
            const hash = bcrypt.hashSync(pass, salt);
            const corpSaved = await corpSchema.create({ email: email, pass: hash, type: type, name: name, adress:adress});
            mail.send(email, `Bienvenido a Seguridad del Cauca Ltda: su correo: ${email} y su contraseña es: ${pass}`, res,
                     (response) => {
                        console.log("Correeeeeeo");
                     });
            //const adminSaved = await Segcauca.create({ entrada })
            res.status(201).json(corpSaved);
            //res.status(200).json(corpSaved);
            //  if (type === "2") {
            //      //const adminSaved = await Segcauca.create({ entrada })
            //      const corpSaved = await corpSchema.create({ email: email, pass: hash, type: type, name: name, adress:adress});
            //      mail.send(email, `Bienvenido a Seguridad del Cauca Ltda: su correo: ${email} y su contraseña es: ${pass}`, res,
            //          (response) => {
            //             console.log("email send!");
            //              res.status(200).json(corpSaved);
            //          });
            //  } else {
            //      //const adminSaved = await Segcauca.create({ entrada })
            //      const corpSaved = await corpSchema.create({ email: email, pass: hash, type: type, name: name, adress:adress });
            //      mail.send(email, `Bienvenido a Seguridad del Cauca Ltda:: su correo: ${email} y su contraseña es: ${pass}`, res,
            //          (response) => {
            //              res.status(200).json(corpSaved);
            //          });
            //  }
        } catch (error) {
            res.status(500).json({ mensaje: "Ocurrio un error :cc" })
        }
    },
    //////// FIN FUNCIONES PARA CREAR, CONSULTAR, ACTUALIZAR Y BORRAR ADMINISTRADOR APP WEB Y PERSONAL CORPORATIVO ///////////

    //////// FUNCIONES PARA CREAR, CONSULTAR, ACTUALIZAR Y BORRAR ASPIRANTES A GUARDIA ///////////
    createPersonal: async (req, res) => {
        try {
            const name = req.body.personalRegistro.name;
            const lastname = req.body.personalRegistro.lastname;
            const adress = req.body.personalRegistro.adress;
            const phone=req.body.personalRegistro.phone;
            const city = req.body.personalRegistro.city;
            const state = req.body.personalRegistro.state;
            const age = req.body.personalRegistro.age;
            const email = req.body.personalRegistro.email;
            //const pass = req.body.pass;
            const pass = generator.generate({
                 length: 10,
                 numbers: true
            });
            
            var salt = bcrypt.genSaltSync(saltRounds);
            var hash = bcrypt.hashSync(pass, salt);
            console.log(this.hash);
            const personalSaved = await personalSchema.create({ name: name, lastname: lastname, adress: adress, phone:phone, city:city, state:state, age:age, email: email, pass: hash });
            mail.send(email, `Bienvenido a Seguridad del Cauca Ltda: su correo: ${email} y su contraseña es: ${pass}`, res,
                     (response) => {
                        console.log("Correeeeeeo");
                     });
            //const adminSaved = await Segcauca.create({ entrada })
            res.status(201).json(personalSaved);

        } catch (error) {
            res.status(500).json({ mensaje: "Algo estas haciendo mal pendejo ._." },error)
        }
    },
    getPersonal: async (req, res) => {
        //se hace un try cacth para caputrar el error. Manejador de errores
        try {
            const personal = await personalSchema.find();
            res.json(personal);
        } catch (error) {
            res.status(500).json({mensaje: "Ocurrio un error 500", error});
        }
    },
    // updatePersonal: async (req, res) => {
    //     try {
    //         console.log('hemos llegado');
    //         const id = req.body.id;
    //         const name = req.body.name;
    //         const lastname = req.body.lastname;
    //         const adress = req.body.adress;
    //         const phone=req.body.phone;
    //         const city = req.body.city;
    //         const state = req.body.state;
    //         const age = req.body.age;
    //         const email = req.body.email;
    //         console.log('hemos llegado');
    //         const devUpd = { name: name, lastname: lastname, adress: adress, phone: phone, city: city, state: state, age: age, email:email }
            
    //         console.log('hemos llegado');
    //         console.log(devUpd);
    //         const resp = await personalSchema.findOneAndUpdate({ id: id }, devUpd);
    //         res.json({ id: resp });



    //     } catch (error) {
    //         res.status(500).json({ mensaje: "Ocurrio un error :cc" })
    //     }
    // },
    //////// FIN FUNCIONES PARA CREAR, CONSULTAR, ACTUALIZAR Y BORRAR ASPIRANTE DE GUARDIA /////////
    //////// FUNCIONES PARA CREAR, CONSULTAR, ACTUALIZAR Y BORRAR CLIENTES///////////
    createUsuario: async (req, res) => {
        try {
            const name = req.body.personaRegistro.name // esto lo hice para probar si era por eso pero nou :()
            const lastname = req.body.personaRegistro.lastname;
            const adress = req.body.personaRegistro.adress;
            const phone=req.body.personaRegistro.phone;
            const city = req.body.personaRegistro.city;
            const state = req.body.personaRegistro.state;
            // const age = req.body.age;
            const email = req.body.personaRegistro.email;
            const pass = req.body.personaRegistro.pass;
            const passC = req.body.personaRegistro.passC
            //  const pass = generator.generate({
            //      length: 10,
            //     numbers: true
            //  });
            
            // var salt = bcrypt.genSaltSync(saltRounds);
            // var hash = bcrypt.hashSync(pass, salt);
            const usuarioSaved = await usuarioSchema.create({ name: name, lastname:lastname, adress: adress, phone:phone, city:city, state:state, email: email, pass: pass, passC:passC });
            mail.send(email, `Bienvenido a Seguridad del Cauca Ltda: su correo: ${email} y su contraseña es: ${pass}`, res,
                     (response) => {
                        console.log("Correeeeeeo",response);
                     });
            //const adminSaved = await Segcauca.create({ entrada })
            res.status(201).json(usuarioSaved);

        } catch (error) {
            res.status(500).json({ mensaje: "Algo estas haciendo mal pendejo ._." })
        }
    },
    getUsuario: async (req, res) => {
        //se hace un try cacth para caputrar el error. Manejador de errores
        try {
            const usuario = await usuarioSchema.find();
            res.json(usuario);
        } catch (error) {
            res.status(500).json({mensaje: "Ocurrio un error 500", error});
        }
    },
    // updateUsuario: async (req, res) => {
    //     try {
    //         console.log('hemos llegado');
    //         const id = req.body.registroPersona.id;
    //         const name = req.body.registroPersona.name;
    //         const lastname = req.body.registroPersona.lastname;
    //         const adress = req.body.registroPersona.adress;
    //         const phone=req.body.registroPersona.phone;
    //         const city = req.body.registroPersona.city;
    //         const state = req.body.registroPersona.state;
    //         // const age = req.body.age;
    //         const email = req.body.registroPersona.email;
    //         console.log('hemos llegado');
    //         const userUpd = { name: name, lastname: lastname, adress: adress, phone: phone, city: city, state: state, email:email }
            
    //         console.log('hemos llegado');
    //         console.log(userUpd);
    //         const resp = await personalSchema.findOneAndUpdate({ id: id }, devUpd);
    //         res.json({ id: resp });



    //     } catch (error) {
    //         res.status(500).json({ mensaje: "Ocurrio un error :cc" })
    //     }
    // },
    //////// FIN FUNCIONES PARA CREAR, CONSULTAR, ACTUALIZAR Y BORRAR CLIENTES ///////////

    //////// FUNCIONES PARA CREAR, CONSULTAR Y BORRAR COMENTARIOS DE PERSONA ///////////
    createComentario: async (req, res) => {
        try {
            const name = req.body.contactoPersona.name;
            const lastname = req.body.contactoPersona.lastname;
            const adress = req.body.contactoPersona.adress;
            const email = req.body.contactoPersona.email;
            // const phone=req.body.phone;
            const city = req.body.contactoPersona.city;
            const state = req.body.contactoPersona.state;
            // const age = req.body.age;
            const phone = req.body.contactoPersona.phone;
            const comment = req.body.contactoPersona.comment;
            // const pass = req.body.pass;
            //  const pass = generator.generate({
            //      length: 10,
            //     numbers: true
            //  });
            
            // var salt = bcrypt.genSaltSync(saltRounds);
            // var hash = bcrypt.hashSync(pass, salt);
            const comentarioSaved = await comentarioSchema.create({ name: name, lastname:lastname, adress: adress, email: email, city:city, state:state,  phone:phone, comment:comment });
            // mail.send(email, `Bienvenido a Seguridad del Cauca Ltda: su correo: ${email} y su contraseña es: ${pass}`, res,
            //          (response) => {
            //             console.log("Correeeeeeo");
            //          });
            //const adminSaved = await Segcauca.create({ entrada })
            res.status(201).json(comentarioSaved);

        } catch (error) {
            res.status(500).json({ mensaje: "Algo estas haciendo mal pendejo ._." })
        }
    },
    getComentario: async (req, res) => {
        //se hace un try cacth para caputrar el error. Manejador de errores
        try {
            const comentarios = await comentarioSchema.find();
            res.json(comentarios);
        } catch (error) {
            res.status(500).json({mensaje: "Ocurrio un error 500", error})
        }
    },
    // FIN FUNCIONES DE CREAR, CONSULTAR Y BORRAR COMENTARIOS DE PERSONAS /////
    //// INICIO FUNCIOES DE CREAR, CONSULTAR  BORRAR SERVICIOS TECNICOS //////
    createSoporte: async (req, res) => {
        try {
            const name = req.body.solicitud.name;
            const lastname = req.body.solicitud.lastname;
            const adress = req.body.solicitud.adress;
            const email = req.body.solicitud.email;
            // const phone=req.body.phone;
            // const city = req.body.city;
            // const state = req.body.state;
            // const age = req.body.age;
            // const phone = req.body.phone;
            const comment = req.body.solicitud.comment;
            // const pass = req.body.pass;
            //  const pass = generator.generate({
            //      length: 10,
            //     numbers: true
            //  });
            
            // var salt = bcrypt.genSaltSync(saltRounds);
            // var hash = bcrypt.hashSync(pass, salt);
            const soporteSaved = await soporteSchema.create({ name: name, lastname:lastname, adress: adress, email: email, comment:comment });
            // mail.send(email, `Bienvenido a Seguridad del Cauca Ltda: su correo: ${email} y su contraseña es: ${pass}`, res,
            //          (response) => {
            //             console.log("Correeeeeeo");
            //          });
            //const adminSaved = await Segcauca.create({ entrada })
            res.status(201).json(soporteSaved);

        } catch (error) {
            res.status(500).json({ mensaje: "Algo estas haciendo mal pendejo ._." })
        }
    },
    getSoporte: async (req, res) => {
        //se hace un try cacth para caputrar el error. Manejador de errores
        try {
            const soporte = await soporteSchema.find();
            res.json(soporte);
        } catch (error) {
            res.status(500).json({mensaje: "Ocurrio un error 500", error})
        }
    },
    ///// FIN FUNCIONES CREAR Y BORRAR SERVICIO TECNICO /////////////

   
    
    //// INICIO FUNCIOES DE CREAR, CONSULTAR  BORRAR COTIZACIONES //////
    createCotizacion: async (req, res) => {
        try {
            const name = req.body.cotizaciones.name;
            const lastname = req.body.cotizaciones.lastname;
            const adress = req.body.cotizaciones.adress;
            const email = req.body.cotizaciones.email;
            // const phone=req.body.phone;
            const city = req.body.cotizaciones.city;
            const state = req.body.cotizaciones.state;
            // const age = req.body.age;
            const phone = req.body.cotizaciones.phone;
            const comment = req.body.cotizaciones.comment;
            // const pass = req.body.pass;
            //  const pass = generator.generate({
            //      length: 10,
            //     numbers: true
            //  });
            
            // var salt = bcrypt.genSaltSync(saltRounds);
            // var hash = bcrypt.hashSync(pass, salt);
            const cotizacionSaved = await cotizacionSchema.create({ name: name, lastname:lastname, adress: adress, email: email, city:city, state:state, phone:phone, comment:comment });
            // mail.send(email, `Bienvenido a Seguridad del Cauca Ltda: su correo: ${email} y su contraseña es: ${pass}`, res,
            //          (response) => {
            //             console.log("Correeeeeeo");
            //          });
            //const adminSaved = await Segcauca.create({ entrada })
            res.status(201).json(cotizacionSaved);

        } catch (error) {
            res.status(500).json({ mensaje: "Algo estas haciendo mal pendejo ._." },error)
        }
    },
    getCotizacion: async (req, res) => {
        //se hace un try cacth para caputrar el error. Manejador de errores
        try {
            const cotizaciones = await cotizacionSchema.find();
            res.json(cotizaciones);
        } catch (error) {
            res.status(500).json({mensaje: "Ocurrio un error 500", error})
        }
    },
    ///// FIN FUNCIONES CREAR Y BORRAR COTIZACIONES /////////////
    //////////////// INICIO FUNCIONES CREAR, BORRAR Y CONSULTAR VISITAS TECNICAS ///////////////
    createVisita: async (req, res) => {
        try {
            const name = req.body.visita.name;
            const lastname = req.body.visita.lastname;
            const adress = req.body.visita.adress;
            const email = req.body.visita.email;
            // const phone=req.body.phone;
            // const city = req.body.cotizaciones.city;
            // const state = req.body.cotizaciones.state;
            // // const age = req.body.age;
            // const phone = req.body.cotizaciones.phone;
            const comment = req.body.visita.comment;
            // const pass = req.body.pass;
            //  const pass = generator.generate({
            //      length: 10,
            //     numbers: true
            //  });
            
            // var salt = bcrypt.genSaltSync(saltRounds);
            // var hash = bcrypt.hashSync(pass, salt);
            const visitaSaved = await visitaSchema.create({ name: name, lastname: lastname, adress: adress, email: email, comment: comment });
            // mail.send(email, `Bienvenido a Seguridad del Cauca Ltda: su correo: ${email} y su contraseña es: ${pass}`, res,
            //          (response) => {
            //             console.log("Correeeeeeo");
            //          });
            //const adminSaved = await Segcauca.create({ entrada })
            res.status(201).json(visitaSaved);

        } catch (error) {
            res.status(500).json({ mensaje: "Algo estas haciendo mal pendejo ._." })
        }
    },
    getVisita: async (req, res) => {
        //se hace un try cacth para caputrar el error. Manejador de errores
        try {
            const visitas = await visitaSchema.find();
            res.json(visitas);
        } catch (error) {
            res.status(500).json({mensaje: "Ocurrio un error 500"}, error)
        }
    },
    //////////////// FIN FUNCIONES CREAR, BORRAR Y CONSULTAR VISITAS TECNICAS ///////////////


}