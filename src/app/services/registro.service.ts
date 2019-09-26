import { environment } from 'src/environments/environment.prod';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Usuarios } from './../interfaces/usuarios';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class RegistroServices {

    // SERVER = environment.apiurl;

    personas: AngularFireList<Usuarios[]>; // Lo que se guarda en esa variable es un observable.
    constructor(private http: HttpClient, private afDB: AngularFireDatabase) {
        this.personas = this.afDB.list('/usuarios');
    }
    getUsuarios() {
        // return this.buses;
        // de esta manera recibo datos desde fire base
        return this.afDB.list('usuarios/').valueChanges();
        // // return this.http.get('http://13.82.135.133:3000/usuarios');
    }
    // public buscarBus(id) {
    //     return this.buses.filter((bus) => bus.id === id) [0] || null;
    //   }
    guardarUsuario(personaRegistro: any) {
        // console.log(personaRegistro);
        // asi se suben dadtos a fire base aparte de crear un contructor constructor(private afDB: AngularFireDatabase) {}
        this.afDB.database.ref('usuarios/' + personaRegistro.id).set(personaRegistro);
        // return this.personas.push(personaRegistro);
        // // return this.http.post<any>('http://13.82.135.133:3000/usuarios',  { personaRegistro });
    }
}
