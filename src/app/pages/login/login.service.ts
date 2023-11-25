import { Injectable } from '@angular/core';
import { IUserModel } from './models/user.model';
import data from '../../../helpers/db.json';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  usersCollection: IUserModel[] = [];
  loggedUser?: IUserModel | any | undefined | null;

  constructor() {
    this.usersCollection = data as IUserModel[];

    this.getCurrentUserLoggedIn();
  }

  getCurrentUserLoggedIn(): IUserModel | any | undefined | null {
    let currentUser = localStorage.getItem('loggedUser');

    this.loggedUser = currentUser
      ? (Object(JSON.parse(currentUser)) as IUserModel)
      : null;
  }

  isLoggedIn(): boolean {
    return this.loggedUser ? true : false;
  }

  login(userAuth: IUserModel): boolean {
    let userLogin = this.usersCollection.find(
      (x) => x.username === userAuth.username
    );

    if (userLogin) {
      if (userLogin.password === userAuth.password) {
        userAuth.id = userLogin.id;
        localStorage.setItem('showMenu', JSON.stringify(true));
        localStorage.setItem('loggedUser', JSON.stringify(userLogin));

        this.getCurrentUserLoggedIn();
        return true;
      } else {
        console.log('Wrong Password');
        return false;
      }
    } else {
      console.log("User doesn't exist");
      return false;
    }
  }

  logout(): void {
    this.loggedUser = undefined;
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('showMenu');
  }
}
