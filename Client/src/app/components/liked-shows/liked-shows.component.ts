import { Component, OnInit } from '@angular/core';
import { Show } from '../../model/shows/show';
import { ShowService } from '../../services/shows/show.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-liked-shows',
  templateUrl: './liked-shows.component.html',
  styleUrls: ['./liked-shows.component.css'],
})
export class LikedShowsComponent implements OnInit {
  public shows$: Observable<Show[]>;
  public dialogVisible: boolean = false;

  constructor(private showService: ShowService) {
    this.shows$ = showService.getShows();
  }

  onSearch(searchVal: string) {}

  /*
  onSearch(searchVal: string) {
    const searchedShows = this.shows$.filter((item) => {
      if (item.title.toLowerCase().includes(searchVal.toLowerCase())) {
        return item;
      } else return;
    });

    this.tempShows$ = searchedShows;
  }
  */

  ngOnInit(): void {}
}
