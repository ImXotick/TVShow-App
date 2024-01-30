import { Component } from '@angular/core';
import { Show } from '../../model/shows/show';
import { ShowService } from '../../services/shows/show.service';
import { Observable, map } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-liked-shows',
  templateUrl: './liked-shows.component.html',
  styleUrls: ['./liked-shows.component.css'],
})
export class LikedShowsComponent {
  public shows$: Observable<Show[]>;
  public searchedQuery: string = '';
  public dialogVisible: boolean = false;

  constructor(private showService: ShowService) {
    this.shows$ = this.showService.getShows();
  }

  onSearch(searchQuery: string) {
    this.searchedQuery = searchQuery.toLowerCase();
  }
}
