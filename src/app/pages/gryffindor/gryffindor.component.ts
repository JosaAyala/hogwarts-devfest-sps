import { Component, OnInit } from '@angular/core';
import { BaseControllerComponent } from 'src/app/shared/base-controller/base-controller.component';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-gryffindor',
  templateUrl: './gryffindor.component.html',
  styleUrls: ['./gryffindor.component.css'],
})
export class GryffindorComponent extends BaseControllerComponent {
  puntos: number = 650;
  readOnly: boolean = true;

  constructor(loginService: LoginService) {
    super(loginService);
  }

  ngOnInit(): void {
    this.readOnly = this.CheckIsInRole('gryffindor');
  }
}
