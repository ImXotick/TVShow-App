import { Component } from '@angular/core';
import { Show } from '../../model/shows/show';
import { ShowService } from '../../services/shows/show.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public shows: Array<Show>;
  public tempShows: Array<Show>;

  constructor(private showService: ShowService) {
    this.shows = showService.getShows();
    this.tempShows = this.shows;
  }

  onToggleLiked(e: Show) {
    this.showService.toggleLiked(e);
  }

  onSearch(searchVal: string) {
    const searchedShows = this.shows.filter((item) => {
      if (item.title.toLowerCase().includes(searchVal.toLowerCase())) {
        return item;
      } else return;
    });

    this.tempShows = searchedShows;
  }
}
