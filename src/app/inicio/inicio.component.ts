import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { faCoffee, faSuitcase, faShoppingCart, faPhoneVolume, faHandshake, faTools, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faShieldAlt, faUserLock, faCopyright, faVideo, faMale, faUserSecret, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { faComments, faUserEdit, faMicrochip, faAward, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt, faRobot, faRocket, faWifi, faHouseDamage, faHotel } from '@fortawesome/free-solid-svg-icons';
import { faHome, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleRight, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { ChatsInfo } from '../interfaces/chatbox';

import { AuthemticationService } from '../services/authemtication.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  animations: [routerTransition()]
})
export class InicioComponent implements OnInit {
  title = 'EcoSecador';
  action: any = 'oculto';
  chat = 'visible';
  empezar = 'visible';
  iniciochat = 'oculto';
  submenu2 = 'oculto';
  submenu3 = 'oculto';
  conversa: ChatsInfo = {
    id: '',
    // nombre: '',
    idcomentario: '',
    // cedula: '',
    comentario: '',
    comentarioMon: '',
    // usuarioMon: ''
  };
  public pushRightClass: string;
  faCoffee = faCoffee; faUserLock = faUserLock;
  faShieldAlt = faShieldAlt;
  faComments = faComments; faAward = faAward;
  faCommentAlt = faCommentAlt; faMicrochip = faMicrochip;
  faAngleDoubleRight = faAngleDoubleRight; faUserEdit = faUserEdit;
  faHome = faHome; faMale = faMale;
  faSuitcase = faSuitcase; faUserSecret = faUserSecret;
  faShoppingCart = faShoppingCart;
  faPhoneVolume = faPhoneVolume; faUserShield = faUserShield;
  faHotel = faHotel; faHandshake = faHandshake; faWifi = faWifi;
  faCopyright = faCopyright;
  faTools = faTools; faClipboardList = faClipboardList;
  faVideo = faVideo; faRocket = faRocket; faHouseDamage = faHouseDamage;
  faRobot = faRobot;
  faPhoneSquare = faPhoneSquare;
  faUserFriends = faUserFriends;
  faEnvelope = faEnvelope;
  faFacebook = faFacebook;
  faGoogle = faGoogle;
  public sliders: Array<any> = [];
  ChatServices: any;
  constructor() {
    // this.chatsService.getChat().subscribe(
    //   (infoChat: ChatsInfo[]) => {
    //     const chatid = infoChat;
    //     const l = chatid.length;
        // for (let i = 0; i < l; i++) {
        //   console.log('hola');
        // }
    //     console.log(l);
    //     console.log(infoChat);
    //     console.log(chatid);
    //   },
    //   error => {
    //     console.log(error, 'hubo un error');
    //   }
    // );
    this.sliders.push(
      {
        imagePath: '../../assets/images/carousel1.jpg',
        label: '',
        text: ''
      },
      {
        imagePath: '../../assets/images/carousel2.jpg',
        label: '',
        text: ''
      },
      // {
      //   imagePath: '../../assets/images/carrousel5.jpeg',
      //   label: '',
      //   text: ''
      // },
      // {
      //   imagePath: '../../assets/images/carrousel2.jpeg',
      //   label: '',
      //   text: ''
      // }
    );
  }
  ngOnInit() {}
  /*guardarChat2() {
    // como se realizo el servicio que crea un arreglo de cualquier cosa para el bus. entonces
    // this.busRegistro.id = Date.now(); sirve para generar un id de diamesañoshorasegundo
    this.empezar = 'visible';
    this.chat = 'oculto';
    this.iniciochat = 'visible';
    // this.conversa.id = conversa.cedula;
    this.conversa.id = Date.now();
    this.chatsService.guardarChat2(this.conversa);
    // En buses.service. ts declare un servicio que tiene el mismo nombre de busRegistro. Entonces desde el service imprime en consola
    // alert('Tu solicitud a sido registrada');
    // this.conversa = {};
  }
  */
  goToChat() {

  }
  mostrar2() {
    this.submenu2 = 'visible';
    this.submenu3 = 'oculto';
  }
  mostrar3() {
    this.submenu2 = 'oculto';
    this.submenu3 = 'visible';
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
  }
}
