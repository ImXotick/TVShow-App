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
  constructor(private http: HttpClient, private authService: AuthService) {}

  getShows(): Observable<Show[]> {
    return this.http.post<Show[]>('http://localhost:3000/shows', {
      username: this.authService.username,
    });
  }

  addComment(show: Show, comment: Comment): Observable<any> {
    return this.http.post('http://localhost:3000/shows/comment', {
      show,
      comment,
    });
  }

  toggleLiked(s: Show): Observable<any> {
    return this.http.patch<Show>('http://localhost:3000/shows/' + s.id, {
      liked: !s.liked,
      username: this.authService.username,
    });
  }
}
