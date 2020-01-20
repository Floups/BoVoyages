import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mail: string;
  password: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  login() {
    this.authService.authentify(this.mail, this.password);
    this.mail = '';
    this.password = '';
  }

  isLog() {
    return this.authService.isAuthentified();
  }
}
