import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user/user';
import { MessagingService } from 'src/app/services/messaging/messaging.service';
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  public user!: User;
  public confirmPassword: string = '';

  constructor(
    private router: Router,
    private messageService: MessagingService,
    private userService: UserService
  ) {
    this.initializeUser();
  }

  //Calls register
  register() {
    if (!this.user.username) {
      return this.messageService.setMessage('Username is empty!');
    } else if (!this.user.password) {
      return this.messageService.setMessage('Password is empty!');
    } else if (this.confirmPassword !== this.user.password) {
      return this.messageService.setMessage('Passwords do not match!');
    }

    this.userService.register(this.user).subscribe({
      next: (res) => {
        this.initializeUser();
        this.router.navigate(['login']);
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
