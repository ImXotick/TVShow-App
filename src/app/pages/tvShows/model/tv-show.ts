export class TvShow {
  public title: string;
  public rating: number;
  public description!: string;
  public img: string;
  public liked: boolean;

  constructor() {
    this.title = 'test';
    this.rating = 10;
    this.img = '';
    this.liked = false;
  }
}
