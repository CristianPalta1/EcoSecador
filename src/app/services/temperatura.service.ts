import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { DatosTemp } from '../interfaces/Temp';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class TemperaturaServices {
    datosTemperatura: AngularFireList<DatosTemp[]>; // Lo que se guarda en esa variable es un observable.
    constructor(private http: HttpClient, private afDB: AngularFireDatabase) {
        this.datosTemperatura = this.afDB.list('EPS32/');
    }
    getTemperatura() {
        // return this.buses;
        // de esta manera recibo datos desde fire base
        return this.afDB.list('EPS32/').valueChanges();
        // // return this.http.get('http://13.82.135.133:3000/comentario');
    }
    // public buscarBus(id) {
    //     return this.buses.filter((bus) => bus.id === id) [0] || null;
    //   }
    // guardarTemperatura(contactoPersona: any) {
    //     // console.log(contactoPersona);
    //     // asi se suben dadtos a fire base aparte de crear un contructor constructor(private afDB: AngularFireDatabase) {}
    //     this.afDB.database.ref('comentario/' + contactoPersona.id).set(contactoPersona);
    //     //  return this.personas.push(contactoPersona);
    //     // // return this.http.post('http://13.82.135.133:3000/comentario', { contactoPersona });
    // }
}
