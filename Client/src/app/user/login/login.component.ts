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
      this.messageService.setMessage('Username is empty!');
      return this.messageService.openSnackBar();
    } else if (!this.user.password) {
      this.messageService.setMessage('Password is empty!');
      return this.messageService.openSnackBar();
    }

    this.userService.login(this.user).subscribe({
      next: (res) => {
        this.initializeUser();
        this.router.navigate(['home']);
        this.messageService.setMessage(res.msg);
        this.messageService.openSnackBar();
      },
      error: (res) => {
        this.messageService.setMessage(res.error.error);
        this.messageService.openSnackBar();
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
