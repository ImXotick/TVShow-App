import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Show } from '../../model/shows/show';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() public showItem!: Show;
  @Output() public showEmitter: EventEmitter<Show>;

  public modalVisible: boolean = false;

  constructor(public dialog: MatDialog) {
    this.showEmitter = new EventEmitter<Show>();
  }

  openDialog(show: Show) {
    const dialogRef = this.dialog.open(ModalComponent, { data: show });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  toggleLiked() {
    this.showEmitter.emit(this.showItem);
  }
}
