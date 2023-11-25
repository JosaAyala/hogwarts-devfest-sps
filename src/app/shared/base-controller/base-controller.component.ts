import { Component } from '@angular/core';
import { LoginService } from 'src/app/pages/login/login.service';

@Component({
  selector: 'app-base-controller',
  templateUrl: './base-controller.component.html',
  styleUrls: ['./base-controller.component.css'],
})
export class BaseControllerComponent {

  constructor(private loginService: LoginService) {}

  CheckIsInRole(currentPage: string): boolean {
    const currentPermission = this.loginService.loggedUser.permissions.find(
      (x: { menuOption: string }) => x.menuOption === currentPage
    );

    const isReadOnly = currentPermission
      ? currentPermission.access.some((x: string) => x === 'write')
        ? false
        : true
      : true;
    debugger;
    return isReadOnly;
  }
}
