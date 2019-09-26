import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Personas } from '../interfaces/personas';
import { HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/environment.prod';

@Injectable()

export class PersonalServices {
    // SERVER = environment.apiurl;
    // esto no sirve para reemplazar el localstorage ?
    // pense que si la funcion no se usaba no habia problema
    // deberia funccionar pero como primera medida no lo est a haciendo
    personal: AngularFireList<Personas[]>; // Lo que se guarda en esa variable es un observable.
    constructor(private http: HttpClient, private afDB: AngularFireDatabase) {
        this.personal = this.afDB.list('/personal');
    }
    getPersonal() {
        // return this.buses;
        // de esta manera recibo datos desde fire base
        return this.afDB.list('personal/').valueChanges();
        // // return this.http.get('http://13.82.135.133:3000/personal');
    }
    // public buscarBus(id) {
    //     return this.buses.filter((bus) => bus.id === id) [0] || null;
    //   }
    guardarPersonal(personalRegistro: any) {
        // console.log(personalRegistro);
        // asi se suben dadtos a fire base aparte de crear un contructor constructor(private afDB: AngularFireDatabase) {}
        this.afDB.database.ref('personal/' + personalRegistro.id).set(personalRegistro);
        // return this.personal.push(personalRegistro);
        // // return this.http.post('http://13.82.135.133:3000/personal', { personalRegistro }); // aqui si lo hace
    }

    // public updatePersonal(personalRegistro: any) {
    //     return this.http.put('http://13.82.135.133:3000/personal', personalRegistro); // aca no lo hace
    //     // segun vi, el primer problema esque est apuntando a localhsot no al servidor
    // }
}
