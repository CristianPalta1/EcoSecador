import { Datostemp } from '../interfaces/temp';
import { Component, OnInit } from '@angular/core';

import { faCoffee, faSuitcase, faShoppingCart, faPhoneVolume, faHotel, faHandshake, faTools } from '@fortawesome/free-solid-svg-icons';
import { faShieldAlt, faUserLock, faCopyright, faVideo, faMale, faUserSecret, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { faComments, faUserEdit, faMicrochip, faAward } from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { faHome, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleRight, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { TemperaturaServices } from '../services/temperatura.service';
// import { DatosTemp} from '../interfaces/Temp';

@Component({
  selector: 'app-ecosecador',
  templateUrl: './ecosecador.component.html',
  styleUrls: ['./ecosecador.component.scss']
})
export class EcoSecadorComponent implements OnInit {
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

  faEnvelope = faEnvelope;
  faUserFriends = faUserFriends;
  faPhoneSquare = faPhoneSquare;
  faFacebook = faFacebook;
  faGoogle = faGoogle;
  faCoffee = faCoffee; faUserLock = faUserLock;
  faShieldAlt = faShieldAlt;
  faComments = faComments; faAward = faAward;
  faCommentAlt = faCommentAlt; faMicrochip = faMicrochip;
  faAngleDoubleRight = faAngleDoubleRight; faUserEdit = faUserEdit;
  faHome = faHome; faMale = faMale;
  faSuitcase = faSuitcase; faUserSecret = faUserSecret;
  faShoppingCart = faShoppingCart;
  faPhoneVolume = faPhoneVolume; faUserShield = faUserShield;
  faHotel = faHotel; faHandshake = faHandshake;
  faCopyright = faCopyright;
  faTools = faTools;
  faVideo = faVideo;
  submenu2 = 'oculto';
  submenu3 = 'oculto';
  public slider1: Array<any> = [];
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
    this.slider1.push(
      {
        imagePath: '../assets/images/segcauca40k2.jpg',
        label: '',
        text: ''
      },
      // {
      //   imagePath: '../../assets/images/app.jpg',
      //   label: '',
      //   text: ''
      // },
      // {
      //   imagePath: '../../assets/images/teclado.jpg',
      //   label: '',
      //   text: ''
      // },
      // {
      //   imagePath: '../../assets/images/equiposdsc.jpg',
      //   label: '',
      //   text: ''
      // }
    );
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
  mostrar2() {
    this.submenu2 = 'visible';
    this.submenu3 = 'oculto';
  }
  mostrar3() {
    this.submenu2 = 'oculto';
    this.submenu3 = 'visible';
  }
  ngOnInit() {
  }

}
