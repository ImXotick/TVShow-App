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
  public dialogVisible: boolean = false;

  constructor(private showService: ShowService) {
    this.shows = showService.getShows();
  }

  onToggleLiked(e: Show) {
    this.showService.toggleLiked(e);
  }

  handleSearch(search: string): Array<Show> {
    if (!search) return this.shows;

    const shows = this.shows.filter((item) => {
      if (item.title.toLowerCase().includes(search.toLowerCase())) return item;
      else return;
    });

    return shows;
  }

  ngOnInit(): void {}
}
