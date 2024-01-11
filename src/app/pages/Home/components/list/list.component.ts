import { Component } from '@angular/core';
import { Show } from '../../model/shows/show';
import { ShowService } from '../../services/shows/show.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public shows: Array<Show>;

  constructor(private showService: ShowService) {
    this.shows = showService.getShows();
  }
}
