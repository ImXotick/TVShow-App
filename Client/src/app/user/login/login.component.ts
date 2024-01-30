import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user/user';
import { MessagingService } from 'src/app/services/messaging/messaging.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public user!: User;

  constructor(
    private userService: UserService,
    private messageService: MessagingService,
    private router: Router
  ) {
    this.initializeUser();
  }

  //Calls login
  login() {
    if (!this.user.username) {
      return this.messageService.setMessage('Username is empty!');
    } else if (!this.user.password) {
      return this.messageService.setMessage('Password is empty!');
    }

    this.userService.login(this.user).subscribe({
      next: (res) => {
        this.initializeUser();
        this.router.navigate(['home']);
        this.messageService.setMessage(res.msg);
      },
      error: (res) => {
        this.messageService.setMessage(res.error.error);
      },
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
