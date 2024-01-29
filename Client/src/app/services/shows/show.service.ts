import { Injectable } from '@angular/core';
import { Show } from '../../model/shows/show';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../../model/comment/comment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ShowService {
  constructor(private http: HttpClient) {}

  getShows(): Observable<Show[]> {
    console.log(this.http.get<Show[]>('http://localhost:3000/shows'));
    return this.http.get<Show[]>('http://localhost:3000/shows');
  }

  addComment(show: Show, comment: Comment): Observable<any> {
    return this.http.post('http://localhost:3000/api/shows/comment', {
      show,
      comment,
    });
  }

  //TODO: FIX
  toggleLiked(s: Show): Observable<any> {
    return this.http.patch<Show>('http://localhost:3000/api/shows/' + s.id, {
      liked: !s.liked,
    });
  }
}
