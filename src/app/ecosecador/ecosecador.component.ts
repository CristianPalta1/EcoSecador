import { Component, OnInit } from '@angular/core';

import { faCoffee, faSuitcase, faShoppingCart, faPhoneVolume, faHotel, faHandshake, faTools } from '@fortawesome/free-solid-svg-icons';
import { faShieldAlt, faUserLock, faCopyright, faVideo, faMale, faUserSecret, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { faComments, faUserEdit, faMicrochip, faAward } from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { faHome, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faAngleDoubleRight, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-ecosecador',
  templateUrl: './ecosecador.component.html',
  styleUrls: ['./ecosecador.component.scss']
})
export class EcoSecadorComponent implements OnInit {
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
  constructor() {
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
