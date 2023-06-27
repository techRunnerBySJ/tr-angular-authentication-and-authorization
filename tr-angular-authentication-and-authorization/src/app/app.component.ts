import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string;
  password: string ;

  constructor(public authService: AuthenticationService) {}

  login(): void {
    this.authService.login(this.username, this.password);
    this.username = '';
    this.password = '';
  }

  logout(): void {
    this.authService.logout();
  }
}
