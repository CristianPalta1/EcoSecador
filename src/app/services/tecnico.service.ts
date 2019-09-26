import { Tecnico } from '../interfaces/servicioTecnico';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Usuarios } from './../interfaces/usuarios';
// import { Tecnico } from '../interfaces/contacto';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class TecnicosServices {
    solicitudes: AngularFireList<Tecnico[]>; // Lo que se guarda en esa variable es un observable.
    constructor(private http: HttpClient, private afDB: AngularFireDatabase) {
        this.solicitudes = this.afDB.list('/tecnico');
    }
    getSolicitud() {
        // return this.buses;
        // de esta manera recibo datos desde fire base
        return this.afDB.list('tecnico/').valueChanges();
        // // return this.http.get('http://13.82.135.133:3000/tecnico');
    }
    // public buscarBus(id) {
    //     return this.buses.filter((bus) => bus.id === id) [0] || null;
    //   }
    guardarSolicitud(solicitud: any) {
        // console.log(solicitud);
        // asi se suben dadtos a fire base aparte de crear un contructor constructor(private afDB: AngularFireDatabase) {}
        this.afDB.database.ref('tecnico/' + solicitud.id).set(solicitud);
       // return this.solicitudes.push(solicitud);
    // //    return this.http.post('http://13.82.135.133:3000/tecnico', { solicitud });
    }
}
