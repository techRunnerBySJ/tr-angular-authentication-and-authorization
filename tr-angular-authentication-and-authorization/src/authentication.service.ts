import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isLoggedIn = false;

  login(username: string, password: string): void {
    // Perform authentication logic, e.g., API request, validation
    if (username === 'admin' && password === 'password') {
      this.isLoggedIn = true;
      console.log('User logged in successfully!');
    } else {
      this.isLoggedIn = false;
      console.log('Invalid username or password.');
    }
  }

  logout(): void {
    this.isLoggedIn = false;
    console.log('User logged out successfully!');
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
