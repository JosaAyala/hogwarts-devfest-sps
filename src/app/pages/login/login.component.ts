import { Component } from '@angular/core';
import { IUserModel } from './models/user.model';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userData: IUserModel = {
    id: 0,
    username: '',
    password: '',
    name: '',
    permissions: [],
  };

  hide: boolean = false;
  viewSettings: any;

  constructor(private loginService: LoginService, private router: Router) {
  }
  
  onLogin(): void {
    let response = this.loginService.login(this.userData);

    if (response) {
      this.goHome();
    }
  }

  goHome(): void {
    this.router.navigate(['/home']);
    window.location.reload;
  }
}
