import { Component, OnInit } from '@angular/core';
import { Datostemp } from './interfaces/temp';

import { TemperaturaServices } from './services/temperatura.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    datasTemperatura: Datostemp[];
    dataTemperatura: Datostemp = {
      id: '',
      temperatura: '',
    };
    datosESP32: any;
    datosTempBD: any;
    temperatura: any = null;
    temperaturaEcosecador: any = null;
    datoMongo: any;
    stringTemp: any;
    stringTemp2: any;
    intMongoTemp: any;
    saveDBTemp: any[];
    // prueba2: 'hola';
    constructor(private temperaturasService: TemperaturaServices) {
        this.temperaturasService.getTemperatura().subscribe( (infoTemperatura: any[]) => {
         // console.log(infoTemperatura);
         this.datosESP32 = infoTemperatura;
         this.temperatura = this.datosESP32[0];
         this.stringTemp = this.temperatura.toString();
         this.agregarTemperatura();
      //    this.datosJson = JSON.parse(this.datosESP32).[0];
        // console.log(this.stringTemp);
        }, ( error ) => {
          console.log('ING. OCURRIO ESTE ERROR', error);
        });

        this.temperaturasService.getDBTemperatura().subscribe((data: any[]) => {
          // console.log(data);
          this.datosTempBD = data;
          this.datoMongo = this.datosTempBD[0].temperatura;
          this.intMongoTemp = parseFloat(this.datoMongo);
          // console.log(this.intMongoTemp);
        }, (error) => {
          console.log('Ing. Ocurrio un error', error);
        });
      }
      agregarTemperatura() {
        this.temperaturasService.getTemperatura().subscribe((data: any[]) => {
          // console.log(data);
          this.saveDBTemp = data;
          this.temperaturaEcosecador = this.saveDBTemp[0];
          this.stringTemp2 = this.temperaturaEcosecador.toString();
          console.log(this.stringTemp2);
          this.dataTemperatura.id = Date.now();
          this.dataTemperatura.temperatura = this.saveDBTemp[0].toString();
          console.log(this.dataTemperatura);
          this.temperaturasService.saveTemperatura(this.dataTemperatura).subscribe((temp: Datostemp) => {
            console.log(temp);
            // this.datasTemperatura.push(temp);
          }, (error) => {
            console.log('Error en guardar datos', error);
          });
          // console.log(this.saveDBTemp);
        }, (error) => {
          console.log('Error en obtener datos', error);
        });
      }
    ngOnInit() {
    }
}
