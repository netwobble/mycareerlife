import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/service/auth/auth.service';

@Component({
  selector: 'mcl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() {
  }

}
