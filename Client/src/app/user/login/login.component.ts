import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public user!: User;

  constructor(private userService: UserService, private router: Router) {
    this.initializeUser();
  }

  //Calls login
  login() {
    if (!this.user.username) return alert('Username is empty!');
    else if (!this.user.password) return alert('Password is empty!');

    this.userService.login(this.user).subscribe({
      next: (res) => {
        this.initializeUser();
        this.router.navigate(['home']);
      },
      error: (error) => alert(error.error.msg),
    });
  }

  //Initializes user
  initializeUser() {
    this.user = {
      username: '',
      password: '',
    };
  }
}
