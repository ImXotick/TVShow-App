import { Component } from '@angular/core';
import { MessagingService } from 'src/app/services/messaging/messaging.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
})
export class SnackbarComponent {
  constructor(private messageService: MessagingService) {}

  displayMessage(): string {
    return this.messageService.getMessage();
  }
}
