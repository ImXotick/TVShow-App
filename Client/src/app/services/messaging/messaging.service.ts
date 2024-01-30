import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/components/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class MessagingService {
  public message: string = '';

  constructor(private _snackBar: MatSnackBar) {}

  public getMessage(): string {
    return this.message;
  }

  public setMessage(m: string) {
    this.message = m;
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 3 * 1000,
    });
  }
}
