import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Show } from '../../model/shows/show';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../components/modal/modal.component';
import { ShowService } from 'src/app/services/shows/show.service';
import { MessagingService } from 'src/app/services/messaging/messaging.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() public showItem!: Show;
  @Output() refetchNewShows: EventEmitter<any> = new EventEmitter();

  public modalVisible: boolean = false;
  public addedComment: boolean = false;

  constructor(
    private authService: AuthService,
    private showService: ShowService,
    private messageService: MessagingService,
    public dialog: MatDialog
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: { show: this.showItem },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.addedComment = result;
    });
  }

  //Calls toggleLiked in service
  toggleLiked() {
    if (!this.authService.isLoggedIn())
      return alert('You need to login to like shows!');

    this.showService.toggleLiked(this.showItem).subscribe({
      next: (res) => {
        this.showItem.liked = !this.showItem.liked;
        this.messageService.setMessage(res.msg);
      },
      error: (error) => {
        this.messageService.setMessage(error);
      },
    });
  }
}
