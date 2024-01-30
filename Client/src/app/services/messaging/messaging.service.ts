import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    this.openSnackBar();
  }

  openSnackBar() {
    this._snackBar.open(this.message, '', {
      duration: 3000,
      panelClass: ['grey-snackbar'],
    });
  }
}
