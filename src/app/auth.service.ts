import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // SERVER = environment.apiurl;

  constructor(private http: HttpClient, private autService: AngularFireAuth) { }

  // // Servicio de Login
  // login(user: any) {
  //   return this.http.post<any>(this.SERVER + '/login', user);
  // }
  // signup(user: any) {
  //   return this.http.post<any>(this.SERVER + '/register', user);
  // }
  // loginFacebook() {
  //   const provedor = new firebase.auth.FacebookAuthProvider();
  //   return this.autService.auth.signInWithPopup(provedor);
  // }

  // loginGoogle() {
  //   const provedor = new firebase.auth.GoogleAuthProvider();
  //   return this.autService.auth.signInWithPopup(provedor);
  // }
  // signInWithTwitter() {
  //   const proveedor = new firebase.auth.TwitterAuthProvider();
  //   return this.autService.auth.signInWithPopup(proveedor);
  // }
  // signInWithGithub() {
  //   const proveedor = new firebase.auth.GithubAuthProvider();
  //   return this.autService.auth.signInWithPopup(proveedor);
  // }

  // getStatus() {
  //   return this.autService.authState;
  // }
  // logout() {
  //   return this.autService.auth.signOut();
  // }
  // getUsuario(id: any) {
  //   return this.http.get<any>(this.SERVER + '/usuario/' + id);
  // }
  // createUsuario(personaRegistro: any) {
  //   return this.http.post<any>(this.SERVER + '/usuario', { personaRegistro });
  // }
  // putAdmin(user: any) {
  //   return this.http.put<any>(this.SERVER + '/admins', { user });
  // }
  // deleteAdmin(id) {
  //   return this.http.delete<any>(this.SERVER + '/admins/' + id);
  // }
  // generarPass(user) {
  //   return this.http.post<any>(this.SERVER + '/pass/admins', user);
  // }

  // #region devices
  // getPersonal(id: any) {
  //   return this.http.get<any>(this.SERVER + '/personal' + id);
  // }
  // createPersonal(personalRegistro: any) {
  //   return this.http.post<any>(this.SERVER + '/personal', { personalRegistro});
  // }

  // getVisita(id: any) {
  //   return this.http.get<any>(this.SERVER + '/personal' + id);
  // }
  // createVisita(visita: any) {
  //   return this.http.post<any>(this.SERVER + '/personal', { visita});
  // }

  // getVisita(id: any) {
  //   return this.http.get<any>(this.SERVER + '/personal' + id);
  // }
  // createPersonal(personalRegistro: any) {
  //   return this.http.post<any>(this.SERVER + '/personal', { personalRegistro});
  // }
  // putDevice(device: any) {
  //   return this.http.put<any>(this.SERVER + '/dev', { device });
  // }
  // deleteDevice(id) {
  //   return this.http.delete<any>(this.SERVER + '/dev/' + id);
  // }
  // // #endregion devices
  //   // #region buses
  //   getBuses(id: any) {
  //     return this.http.get<any>(this.SERVER + '/bus/' + id);
  //   }
  //   postBuses(bus: any) {
  //     return this.http.post<any>(this.SERVER + '/bus', { bus });
  //   }
  //   putBuses(bus: any) {
  //     return this.http.put<any>(this.SERVER + '/bus', { bus });
  //   }
  //   deleteBus(id) {
  //     return this.http.delete<any>(this.SERVER + '/bus/' + id);
  //   }
  //   // #endregion buses
  //   getAllEmpresas() {
  //     return this.http.get<any>(this.SERVER + '/emp/');
  //   }
  //   setPassword(data: any) {
  //     return this.http.post<any>(this.SERVER + '/pass2/', data);
  //   }
  //   sendContact(data: any){
  //     return this.http.post<any>(this.SERVER + '/contact', data);
  //   }
}
