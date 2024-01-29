import { Component } from '@angular/core';
import { Show } from '../../model/shows/show';
import { ShowService } from '../../services/shows/show.service';
import { Observable, map } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public shows$: Observable<Show[]>;

  constructor(
    private showService: ShowService,
    private authService: AuthService
  ) {
    if (!this.authService.isLoggedIn()) this.shows$ = showService.getShows();
    else {
      this.shows$ = showService.getShows().pipe(
        map((shows) =>
          shows.map((show) => {
            if (!this.authService.likedShows) return show;

            if (this.authService.likedShows.includes(show.id)) {
              show.liked = true;
              return show;
            } else return show;
          })
        )
      );
    }
  }

  //Re fetches shows
  refetchShows() {
    this.shows$ = this.showService.getShows();
  }

  onSearch(searchQuery: string) {}
}
