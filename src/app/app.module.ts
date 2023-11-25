import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { GryffindorComponent } from './pages/gryffindor/gryffindor.component';
import { HufflepuffComponent } from './pages/hufflepuff/hufflepuff.component';
import { RavenclawComponent } from './pages/ravenclaw/ravenclaw.component';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { MainViewComponent } from './pages/main-view/main-view.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SlytherinComponent } from './pages/slytherin/slytherin.component';
import { BaseControllerComponent } from './shared/base-controller/base-controller.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    GryffindorComponent,
    HufflepuffComponent,
    RavenclawComponent,
    MainViewComponent,
    NavBarComponent,
    SlytherinComponent,
    BaseControllerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgbNavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
