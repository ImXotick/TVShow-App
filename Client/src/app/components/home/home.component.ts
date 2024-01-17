import { Component } from '@angular/core';
import { Show } from '../../model/shows/show';
import { ShowService } from '../../services/shows/show.service';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

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

  onToggleLiked(e: Show) {
    this.showService.toggleLiked(e);
  }

  onSearch(searchQuery: string) {}
}
