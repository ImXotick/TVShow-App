import { Component } from '@angular/core';
import { Show } from '../../model/shows/show';
import { ShowService } from '../../services/shows/show.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public shows$: Observable<Show[]>;

  constructor(private showService: ShowService) {
    this.shows$ = showService.getShows();
  }

  //Re fetches shows
  refetchShows() {
    this.shows$ = this.showService.getShows();
  }

  onSearch(searchQuery: string) {}
}
