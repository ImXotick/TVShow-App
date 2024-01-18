import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagingService {
  public message: string = '';

  constructor() {}

  public getMessage(): string {
    return this.message;
  }

  public setMessage(m: string) {
    this.message = m;
  }
}
