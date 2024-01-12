import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Show } from '../../model/shows/show';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() public showItem!: Show;
  @Output() public showEmitter: EventEmitter<Show>;

  public modalVisible: boolean = false;

  constructor() {
    this.showEmitter = new EventEmitter<Show>();
  }

  toggleLiked() {
    this.showEmitter.emit(this.showItem);
  }
}
