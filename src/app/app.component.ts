import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './pages/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hogwarts-devfest-sps';
}
