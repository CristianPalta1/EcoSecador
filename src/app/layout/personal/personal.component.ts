
import { routerTransition } from '../../router.animations';
import { Component, OnInit } from '@angular/core';
import { PersonalServices } from '../../services/personal.service';
import { Personas } from '../../interfaces/personas';
// import { AuthService } from './../../auth.service';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  animations: [routerTransition()]
})

export class PersonalComponent implements OnInit {
  title: 'Seguridad del Cauca';
  action = 'list';
  personal: Personas[];
  personalRegistro: Personas = {
    id: '',
    name: '',
    lastname: '',
    adress: '',
    phone: '',
    city: '',
    state: '',
    age: '',
    email: '',
    pass: ''
  };
  constructor(private personasService: PersonalServices) {
    this.personasService.getPersonal().subscribe( (infoPersonal: Personas[]) => {
    console.log(infoPersonal);
    this.personal = infoPersonal;
    }, ( error ) => {
       console.log('hubo un error');
     });
  // mando a hacer una peticiona  personal donde me traen los usuarios, resuelvo el obersador del get y cuando cargue ese componente
  // devuelva la conexion a mongo
    // // this.personasService.getPersonal().subscribe((data: Personas[]) => {
    // //   console.log(data);
    // //   this.personal = data;
    // // }, (error) => {
    // //   console.log('Hubo error');
    // //   console.log(error);
    // // });
  }
  guardarPersonal() {
    // como se realizo el servicio que crea un arreglo de cualquier cosa para el bus. entonces
    // this.busRegistro.id = Date.now(); sirve para generar un id de diamesañoshorasegundo
    this.personalRegistro.id = Date.now();
    this.personasService.guardarPersonal(this.personalRegistro);
    // // this.personasService.guardarPersonal(this.personalRegistro).subscribe((data: Personas) => {
    // // console.log(data);
    // // this.personal.push(data);
    // // }, (error) => {
    // //  console.log(error);
    // // });
  //   this._service.createPersonal(this.personalRegistro).subscribe(
  //     (res) => {
  //         this.personalRegistro = res;
  //         this.personal.push(this.personalRegistro);
  //         this.toastr.success('Se creo exitosamente el Administrador', 'Estado');
  //         this.action = 'list';
  //     },
  //     (error) => {
  //         this.toastr.error('Error Creando Administrador', 'Estado');
  //         this.action = 'list';
  //     }
  // );
    this.action = 'list';
  //   this.personasService.guardarPersonal(this.personalRegistro);
  //   // En buses.service. ts declare un servicio que tiene el mismo nombre de busRegistro. Entonces desde el service imprime en consola
   alert('Te has registrado con exito');
   this.personalRegistro = {};
  }

  ngOnInit() {
  }

}
