import { Injectable } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public afAuth: AngularFireAuthModule){}
  
  authenticated: boolean;

  // login(email: string, password: string) {
  //   return firebase.auth().signInWithEmailAndPassword(email, password);
  // }
  login(email: string, password: string) {
    // set false on request
    this.authenticated = false;
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(res => {
        this.authenticated = true;
        resolve(res);
      }, err => reject(err))
    })
  }
}
