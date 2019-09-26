import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Cotizacion } from '../interfaces/cotizacion';
// import { environment } from 'src/environments/environment.prod';

@Injectable()

export class CotizacionServices {
    // SERVER = environment.apiurl;
    cotizaciones: AngularFireList<Cotizacion[]>; // Lo que se guarda en esa variable es un observable.
    constructor(private http: HttpClient, private afDB: AngularFireDatabase) {
        this.cotizaciones = this.afDB.list('/cotizacion');
    }
    public getCotizacion() {
        // return this.buses;
        // de esta manera recibo datos desde fire base
        return this.afDB.list('cotizacion/').valueChanges();
        // // return this.http.get('http://13.82.135.133:3000/cotizacion');
    }
    // public buscarBus(id) {
    //     return this.buses.filter((bus) => bus.id === id) [0] || null;
    //   }
    guardarCotizacion(cotizaciones: any) {
        // console.log(cotizaciones);
        // asi se suben dadtos a fire base aparte de crear un contructor constructor(private afDB: AngularFireDatabase) {}
         this.afDB.database.ref('cotizacion/' + cotizaciones.id).set(cotizaciones);
        // return this.cotizaciones.push(cotizaciones);
        // return this.http.post<any>(this.SERVER + '/register', {cotizaciones});
        // // return this.http.post('http://13.82.135.133:3000/cotizacion', { cotizaciones });
    }
}
