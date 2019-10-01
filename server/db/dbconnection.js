const mongo = require('mongoose');
mongo.Promise = global.Promise; //Tipo de herencia esperar a que se resuelva

module.exports = {
    //como es una promesa debe esperar hasta que se cumpla
    conectar : async (app) => {
        //asi se puede verificar si se hizo el proceso o no
        await mongo.connect('mongodb://localhost:27017/DBecosecador',{ useNewUrlParser: true });
        app.listen(3000, () => {
            console.log(`Ing. Cp i'm initialized on port 3000 `);
        });
    }
}