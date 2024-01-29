import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user/user';
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  public user!: User;
  public confirmPassword: string = '';

  constructor(private router: Router, private userService: UserService) {
    this.initializeUser();
  }

  //Calls register
  register() {
    if (!this.user.username) return alert('Username is empty!');
    else if (!this.user.password) return alert('Password is empty!');
    else if (this.confirmPassword !== this.user.password)
      return alert('Passwords do not match!');

    this.userService.register(this.user).subscribe({
      next: (res) => {
        alert('Account created successfully!');
        this.initializeUser();
        this.router.navigate(['login']);
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
