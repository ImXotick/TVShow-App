import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public username: string = '';
  public password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  //Calls login
  login() {
    if (!this.username) return alert('Username is empty!');
    else if (!this.password) return alert('Password is empty!');

    this.userService.login(this.username, this.password).subscribe({
      next: (res) => this.router.navigate(['home']),
      error: (error) => alert(error.error.msg),
    });
  }
}
