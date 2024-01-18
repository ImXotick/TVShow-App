import { Component, TrackByFunction, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Show } from 'src/app/model/shows/show';
import { ShowService } from 'src/app/services/shows/show.service';

@Component({
  selector: 'app-create-show',
  templateUrl: './create-show.component.html',
  styleUrls: ['./create-show.component.css'],
})
export class CreateShowComponent {
  public show!: Show;

  title: string = '';
  description: string = '';
  rating: number = 1;
  img: string = '';

  keywords = ['Drama'];
  myControl: FormControl;
  announcer = inject(LiveAnnouncer);

  constructor(private showService: ShowService) {
    this.myControl = new FormControl([]);
  }

  //Removes keyword
  removeKeyword(keyword: string) {
    const index = this.keywords.indexOf(keyword);
    if (index >= 0) {
      this.keywords.splice(index, 1);

      this.announcer.announce(`removed ${keyword}`);
    }
  }

  //Adds new keyword
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our keyword
    if (value) {
      const changedValue = value[0].toUpperCase() + value.slice(1);
      this.keywords.push(changedValue);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  //Function that calls post on submit
  submit() {
    this.setShowValues();
    if (this.show) {
      this.showService.createShow(this.show).subscribe({
        next: (result) => {
          //this.messageService.setMessage(result.msg);
          console.log(result.setMessage);
          this.resetValues();
        },
        error: (error) => console.log(error), //this.messageService.setMessage(error),
      });
    } else {
      console.log('The form is in invalid state!'); //this.messageService.setMessage('The form is in invalid state!');
    }
  }

  //Generates id
  generateId() {
    let id = Math.floor(Math.random() * 1000);
    return 'id' + id;
  }

  //Sets values
  setShowValues() {
    this.show = {
      id: this.generateId(),
      title: this.title,
      description: this.description,
      liked: false,
      rating: this.rating,
      img: this.img,
      genre: this.myControl.value,
    };
  }

  //Resets values
  resetValues() {
    (this.title = ''),
      (this.rating = 1),
      (this.description = ''),
      (this.img = '');
  }

  trackByShowId: TrackByFunction<Show> = (index, show) => show.id;
}
