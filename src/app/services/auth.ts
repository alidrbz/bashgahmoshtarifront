import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private username = 'admin';
  private password = '1234';

  private loggedIn =
    localStorage.getItem('isLoggedIn') === 'true';

  private currentUsername =
    localStorage.getItem('username') || '';

  login(username: string, password: string): boolean {

    if (
      username === this.username &&
      password === this.password
    ) {

      this.loggedIn = true;
      this.currentUsername = username;

      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', username);

      return true;
    }

    return false;
  }

  logout(): void {

    this.loggedIn = false;
    this.currentUsername = '';

    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
  }

  isLoggedIn(): boolean {

    return this.loggedIn;
  }

  getUsername(): string {

    return this.currentUsername;
  }

}