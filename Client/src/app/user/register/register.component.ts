import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  public username: string = '';
  public password: string = '';
  public confirmPassword: string = '';

  constructor(private router: Router, private userService: UserService) {}

  //Calls register
  register() {
    if (!this.username) return alert('Username is empty!');
    else if (!this.password) return alert('Password is empty!');
    else if (this.confirmPassword !== this.password)
      return alert('Passwords do not match!');

    this.userService.register(this.username, this.password).subscribe({
      next: (res) => {
        alert('Account created successfully!');
        this.router.navigate(['login']);
      },
      error: (error) => alert(error.error.msg),
    });
  }
}
