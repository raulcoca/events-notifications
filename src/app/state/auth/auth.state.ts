import {Injectable} from '@angular/core';
import {State, Action, StateContext, Selector} from '@ngxs/store';
import {CheckIsLogged, Login, LogOut} from './auth.actions';
import {AuthService} from "./auth.service";
import {onAuthStateChanged} from "@angular/fire/auth";

export class AuthStateModel {
  isLogged: boolean;
}

const defaults = {
  isLogged: false
};

@State<AuthStateModel>({
  name: 'auth',
  defaults
})
@Injectable()
export class AuthState {

  @Selector()
  static isLogged(state: AuthStateModel) {
    return state.isLogged;
  }

  constructor(private authService: AuthService) {

  }

  @Action(Login)
  login({setState}: StateContext<AuthStateModel>, {payload}: Login) {
    return this.authService.login(payload.email, payload.password).then(result => {
      if (result) {
        setState({
          isLogged: true
        })
      } else {
        setState({
          isLogged: false
        })
      }
    })
  }

  @Action(LogOut)
  logOut({setState}: StateContext<AuthStateModel>) {
    return this.authService.logOut().then(() => {

      setState({
        isLogged: false
      })

    })
  }


  @Action(CheckIsLogged)
  checkIsLogged({setState}: StateContext<AuthStateModel>) {
    onAuthStateChanged(this.authService.getAuth(), (user) => {
      setState({
        isLogged: !!user
      })

    })
  }
}
