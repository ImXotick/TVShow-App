import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Show } from '../../model/shows/show';
import { Comment } from '../../model/comment/comment';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ShowService } from 'src/app/services/shows/show.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  public comment!: Comment;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Show,
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
      this.comment.author = 'test';
      this.comment.date = new Date().toLocaleDateString();
      this.showService.addComment(this.data, this.comment).subscribe({
        next: (result) => {
          this.refetchShows();
        },
        error: (error) => console.log(error),
      });
    }
  }

  //Re fetches shows after we add them
  refetchShows() {
    this.showService.getShows();
  }

  //Handles text check
  checkText() {
    if (!this.comment.text) return true;
    else return false;
  }

  //Initializes comment
  initializeComment() {
    this.comment = {
      author: '',
      text: '',
      date: '',
    };
  }
}
