import { Component } from '@angular/core';
import { Show } from '../../model/shows/show';
import { ShowService } from '../../services/shows/show.service';
import { Observable } from 'rxjs';
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
    this.shows$ = showService.getShows();
    //console.log(this.shows$);
    this.shows$.subscribe((data) =>
      data.map((show) => {
        show.liked = true;
        return show;
      })
    );
    this.shows$.subscribe((val) => console.log(val));
  }

  //Re fetches shows
  refetchShows() {
    this.shows$ = this.showService.getShows();
  }

  onSearch(searchQuery: string) {}
}
