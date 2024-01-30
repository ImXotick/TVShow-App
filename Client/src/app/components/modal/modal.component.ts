import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Comment } from '../../model/comment/comment';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ShowService } from 'src/app/services/shows/show.service';
import { MessagingService } from 'src/app/services/messaging/messaging.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  public comment!: Comment;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private messageService: MessagingService,
    private authService: AuthService,
    private showService: ShowService
  ) {
    this.initializeComment();
  }

  //Checking if user is logged in
  isLoggedIn = () => {
    return this.authService.isLoggedIn();
  };

  //Handles add comment
  handleComment() {
    if (!this.checkText()) {
      this.comment.date = new Date().toLocaleDateString();
      this.showService.addComment(this.data.show, this.comment).subscribe({
        next: (res) => {
          this.data.show.comments.push(this.comment);
          this.initializeComment();
          this.messageService.setMessage(res.msg);
          this.messageService.openSnackBar();
        },
        error: (res) => {
          this.messageService.setMessage(res.error.error);
          this.messageService.openSnackBar();
        },
      });
    }
  }

  //Handles text check
  checkText() {
    if (!this.comment.text) return true;
    else return false;
  }

  //Initializes comment
  initializeComment() {
    this.comment = {
      author: this.authService.username,
      text: '',
      date: '',
    };
  }
}
