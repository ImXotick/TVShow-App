import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @Output() public searchEmitter: EventEmitter<string>;

  public search: string = '';

  constructor() {
    this.searchEmitter = new EventEmitter<string>();
  }

  searchChange() {
    this.searchEmitter.emit(this.search);
  }
}
