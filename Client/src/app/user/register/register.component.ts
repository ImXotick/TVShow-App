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
      this.messageService.setMessage('Username is empty!');
      return this.messageService.openSnackBar();
    } else if (!this.user.password) {
      this.messageService.setMessage('Password is empty!');
      return this.messageService.openSnackBar();
    } else if (this.confirmPassword !== this.user.password) {
      this.messageService.setMessage('Passwords do not match!');
      return this.messageService.openSnackBar();
    }

    this.userService.register(this.user).subscribe({
      next: (res) => {
        alert('Account created successfully!');
        this.initializeUser();
        this.router.navigate(['login']);
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
