import { Injectable } from '@angular/core';
import { Show } from '../../model/shows/show';

@Injectable({
  providedIn: 'root',
})
export class ShowService {
  public shows: Array<Show>;

  constructor() {
    this.shows = [
      new Show(
        'id1',
        'Dexter',
        8.7,
        'Dexter Morgan, a man with homicidal tendencies, lives a double life. He works as a forensic technician for the police department during the day and kills heinous perpetrators in his free time.',
        'https://m.media-amazon.com/images/M/MV5BZjkzMmU5MjMtODllZS00OTA5LTk2ZTEtNjdhYjZhMDA5ZTRhXkEyXkFqcGdeQXVyOTA3MTMyOTk@._V1_.jpg',
        false
      ),
      new Show(
        'id2',
        'Game of Thrones',
        9.2,
        'Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men.',
        'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/91iY86ZIuOL._AC_UF894,1000_QL80_.jpg',
        false
      ),
      new Show(
        'id3',
        'Breaking Bad',
        9.5,
        'Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse.',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEUOnXKnRL0jeo6y4_Nzt0RggJHYbxI_RjJUgCvmdG28BAwpAx',
        false
      ),
    ];
  }

  getShows(): Array<Show> {
    return this.shows;
  }

  toggleLiked(e: Show) {
    let foundShow = this.shows.find((item) => item.id === e.id);

    if (foundShow) {
      foundShow.liked = !foundShow.liked;
    }
  }
}
