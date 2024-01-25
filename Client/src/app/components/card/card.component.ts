import { Component, Input } from '@angular/core';
import { Show } from '../../model/shows/show';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { ShowService } from 'src/app/services/shows/show.service';
import { MessagingService } from 'src/app/services/messaging/messaging.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() public showItem!: Show;

  public modalVisible: boolean = false;

  constructor(
    private showService: ShowService,
    private messageService: MessagingService,
    public dialog: MatDialog
  ) {}

  openDialog(show: Show) {
    const dialogRef = this.dialog.open(ModalComponent, { data: show });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  toggleLiked() {
    this.showService.toggleLiked(this.showItem).subscribe({
      next: (result) => {
        this.showItem.liked = !this.showItem.liked;
        this.messageService.setMessage(result.msg);
      },
      error: (error) => this.messageService.setMessage(error),
    });
  }
}
