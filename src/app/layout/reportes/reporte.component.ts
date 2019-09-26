import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Usuarios } from '../../interfaces/usuarios';
import { Tecnico } from '../../interfaces/servicioTecnico';
import { DatosTemp } from '../../interfaces/Temp';
import { Personas } from '../../interfaces/personas';
// import { TecnicosServices } from 'src/app/services/tecnico.service';
import { RegistroServices } from 'src/app/services/registro.service';
// import { PersonalServices } from 'src/app/services/personal.service';
import { TemperaturaServices } from 'src/app/services/temperatura.service';
// import { CotizacionServices } from 'src/app/services/cotizacion.service';
import { Cotizacion } from 'src/app/interfaces/cotizacion';

@Component ({
    selector: 'app-reportes',
    templateUrl: './reporte.component.html',
    styleUrls: ['./reporte.component.scss'],
    animations: [routerTransition()]
})
export class ReporteComponent implements OnInit {
    registro: Usuarios[];
    serviTecnico: Tecnico [];
    datosESP32: any;
    guardias: Personas[];
    cotizaciones: Cotizacion[];

    temperatura: any;
    stringTemp: any;

    // private guardiaService: PersonalServices, private singupService: RegistroServices, private cotizacionService: CotizacionServices
    // tslint:disable-next-line:max-line-length
    constructor(private temperaturasService: TemperaturaServices, private singupService: RegistroServices) {
        this.temperaturasService.getTemperatura().subscribe( (infoTemperatura: any[]) => {
            // console.log(infoTemperatura);
           this.datosESP32 = infoTemperatura;
           this.temperatura = this.datosESP32[0];
           this.stringTemp = this.temperatura.toString();
        //    this.datosJson = JSON.parse(this.datosESP32).[0];
          // console.log(this.stringTemp);
          }, ( error ) => {
            console.log('ING. OCURRIO ESTE ERROR', error);
        });
        /// De esta manera muestro los datos desde la bd
        /*this.guardiaService.getPersonal().subscribe( (infoPersonal: Personas[]) => {
        console.log(infoPersonal);
        this.guardias = infoPersonal;
        }, ( error ) => {
         console.log('hubo un error');
        });
        /////////////////////////////////////////////
        */
         this.singupService.getUsuarios().subscribe( (infoUsuario: Usuarios[]) => {
            // console.log(infoUsuario);
            this.registro = infoUsuario;
            console.log( this.registro);
           }, ( error ) => {
             console.log('hubo un error');
         });
         /*
        //  this.soporteService.getSolicitud().subscribe( (infoTecnicos: Tecnico[]) => {
        //     // console.log(infoUsuario);
        //     this.serviTecnico = infoTecnicos;
        //     console.log(this.serviTecnico);
        //    }, ( error ) => {
        //      console.log('hubo un error');
        //  });
         this.cotizacionService.getCotizacion().subscribe( (infoCotizacion: Cotizacion[]) => {
            // console.log(infoUsuario);
            this.cotizaciones = infoCotizacion;
            console.log(this.cotizaciones);
           }, ( error ) => {
             console.log('hubo un error');
         });
         */
    }
    ngOnInit() {}
}
