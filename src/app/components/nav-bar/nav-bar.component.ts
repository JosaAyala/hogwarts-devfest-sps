import { Component, EventEmitter, Output, inject } from '@angular/core';
import { LoginService } from 'src/app/pages/login/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  @Output() logout = new EventEmitter<any>();

  onLogout() {
    this.logout.emit();
  }
}
