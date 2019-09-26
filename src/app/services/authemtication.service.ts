import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthemticationService {

  constructor(private authService: AngularFireAuth, private router: Router) { }

  registroUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.authService.auth.createUserWithEmailAndPassword(email, pass)
        .then( userData => resolve(userData),
      err => reject(err));
    });
  }

  loginEmailUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.authService.auth.signInWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData),
        err => reject(err));
    });
  }

  logoutUser( ) {
    return this.authService.auth.signOut();
  }

  loginFacebook( ) {
    return this.authService.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    // this.router.navigate(['/layout/dashboard']);
    // console.log('Entre');
  }

  loginGoogle( ) {
    return this.authService.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}
