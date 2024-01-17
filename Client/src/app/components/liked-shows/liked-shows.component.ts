import { Component, OnInit } from '@angular/core';
import { Show } from '../../model/shows/show';
import { ShowService } from '../../services/shows/show.service';

@Component({
  selector: 'app-liked-shows',
  templateUrl: './liked-shows.component.html',
  styleUrls: ['./liked-shows.component.css'],
})
export class LikedShowsComponent implements OnInit {
  public shows: Array<Show>;
  public tempShows: Array<Show>;
  public dialogVisible: boolean = false;

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

  ngOnInit(): void {}
}
