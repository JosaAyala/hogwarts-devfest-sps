import { Component, OnInit, inject } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  loginService: LoginService = inject(LoginService);
  greeting: string = '';

  ngOnInit(): void {
    if (this.loginService.isLoggedIn()) {
      this.greeting = `Welcome ${this.loginService.loggedUser?.name}`;
    }
  }
}
