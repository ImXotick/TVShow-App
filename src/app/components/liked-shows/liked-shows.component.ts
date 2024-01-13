import { Component, OnInit } from '@angular/core';
import { Show } from '../../model/shows/show';
import { ShowService } from '../../services/shows/show.service';

@Component({
  selector: 'app-liked-shows',
  templateUrl: './liked-shows.component.html',
  styleUrls: ['./liked-shows.component.css'],
})
export class LikedShowsComponent implements OnInit {
  public likedShows: Array<Show>;

  constructor(private showService: ShowService) {
    this.likedShows = showService.getLikedShows();
  }

  //TODO: FIX NOT WORKING LIKE IT SHOULD! NEED TO REMOVE OR ADD IT FROM ARRAYS
  onToggleLiked(e: Show) {
    //TODO: likedShows.map... and remove item
    this.showService.toggleLiked(e);
  }

  ngOnInit(): void {
    console.log(this.likedShows);
  }
}
