import { Injectable } from '@angular/core';
import { Show } from '../../model/shows/show';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../../model/comment/comment';

@Injectable({
  providedIn: 'root',
})
export class ShowService {
  constructor(private http: HttpClient) {}

  getShows(): Observable<Show[]> {
    console.log('ran');
    return this.http.get<Show[]>('http://localhost:3000/api/shows');
  }

  addComment(show: Show, comment: Comment): Observable<any> {
    return this.http.post('http://localhost:3000/api/shows/comment', {
      show,
      comment,
    });
  }

  toggleLiked(s: Show): Observable<any> {
    return this.http.patch<Show>('http://localhost:3000/api/shows/' + s.id, {
      liked: !s.liked,
    });
  }
}
