import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private router: Router, private authService: AuthService) {}

  onRouterLinkActive(sting: string) {
    console.log(sting);
  }

  logIn() {
    this.router.navigate(['login']);
  }

  logout() {
    this.authService.token = '';
    this.authService.username = '';
    this.router.navigate(['login']);
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}
