import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { authenticationGuard } from './shared/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { HufflepuffComponent } from './pages/hufflepuff/hufflepuff.component';
import { RavenclawComponent } from './pages/ravenclaw/ravenclaw.component';
import { SlytherinComponent } from './pages/slytherin/slytherin.component';
import { GryffindorComponent } from './pages/gryffindor/gryffindor.component';
import { accessGuard } from './shared/access.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'LOGIN' },
    canActivate: [authenticationGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'HOME' },
    canActivate: [authenticationGuard],
  },
  {
    path: 'gryffindor',
    component: GryffindorComponent,
    data: { title: 'Gryffindor' },
    canActivate: [accessGuard],
    pathMatch: 'full'
  },
  {
    path: 'slytherin',
    component: SlytherinComponent,
    data: { title: 'slytherin' },
    canActivate: [accessGuard],
    pathMatch: 'full'
  },
  {
    path: 'ravenclaw',
    component: RavenclawComponent,
    data: { title: 'Ravenclaw' },
    canActivate: [accessGuard],
    pathMatch: 'full'
  },
  {
    path: 'hufflepuff',
    component: HufflepuffComponent,
    data: { title: 'Hufflepuff' },
    canActivate: [accessGuard],
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
