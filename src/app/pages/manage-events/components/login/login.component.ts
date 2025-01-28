import { Component, OnInit } from '@angular/core';
import {User} from "../../../../models/User";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false
})
export class LoginComponent  implements OnInit {

  public user: User;


  constructor() {
    this.user = new User();
  }

  ngOnInit() {}

  login(){

  }
}
