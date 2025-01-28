import {Injectable} from '@angular/core';
import {Auth, getAuth, signInWithEmailAndPassword, signOut} from "@angular/fire/auth";
import {FirebaseApp} from "@angular/fire/app";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth: Auth;

  constructor(private afApp: FirebaseApp) {
    this.auth = getAuth(afApp)
  }
  getAuth(){
    return this.auth;
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
  }

  logOut(){
    return signOut(this.auth);
  }


}
