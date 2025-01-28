export class Login {
  static readonly type = '[Auth] Login';
  constructor(public payload: { email: string, password: string }) {
  }
}

export class LogOut {
  static readonly type = '[Auth] LogOut';
}

export class CheckIsLogged {
  static readonly type = '[Auth] Check isLogged';
}

