import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { faAngleDoubleRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Cotizacion } from '../../interfaces/cotizacion';
import { CotizacionServices } from '../../services/cotizacion.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.scss'],
  animations: [routerTransition()]
})
export class CotizacionesComponent implements OnInit {
  // registro: Usuarios[];
  // serviTecnico: Tecnico[];
  // contacto: Contactos[];
  // guardias: Personas[];
  faEnvelope = faEnvelope;

  cotizacionesservicios: Cotizacion[];
  cotizaciones: Cotizacion = {
    id: '',
    name: '',
    adress: '',
    email: '',
    city: '',
    state: '',
    phone: '',
    comment: '',
  };
  submenu2 = 'oculto';
  submenu3 = 'oculto';

  constructor(private cotizacionService: CotizacionServices, private toastr: ToastrService) {
    this.cotizacionService.getCotizacion().subscribe( (data: Cotizacion[]) => {
       console.log(data);
       this.cotizacionesservicios = data;
      }, ( error ) => {
        console.log('hubo un error', error);
    });
}
guardarCotizacion() {
    // como se realizo el servicio que crea un arreglo de cualquier cosa para el bus. entonces
    // this.busRegistro.id = Date.now(); sirve para generar un id de diamesañoshorasegundo
    this.cotizaciones.id = Date.now();
    // this.cotizacionService.guardarCotizacion(this.cotizaciones);
    // En buses.service. ts declare un servicio que tiene el mismo nombre de busRegistro. Entonces desde el service imprime en consola
    // alert('Tu solicitud a sido registrada');
    // this.cotizaciones = {};
    // enviar mensaje con toastr ////
    this.cotizacionService.guardarCotizacion(this.cotizaciones);
    // this.cotizacionService.guardarCotizacion(this.cotizaciones).subscribe( (data: Cotizacion) => {
    //   console.log(data);
    //   this.cotizacionesservicios.push(data);
    //   // this.toastr.success('Usuario Registrado Correctamente, Loguese por favor', 'Estado');
    //   },
    //   (error) => {
    //     this.toastr.error('Error Comunicandose con el Servidor', error);
    //   }
    // );
    alert('Tu solicitud a sido registrada');
    this.cotizaciones = {};
  }
  ngOnInit() {}
}
