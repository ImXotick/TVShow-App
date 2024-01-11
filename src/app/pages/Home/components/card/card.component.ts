import { Component, Input } from '@angular/core';
import { Show } from '../../model/shows/show';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() public showItem!: Show;
}
