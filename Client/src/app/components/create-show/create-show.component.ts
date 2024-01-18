import { Component, TrackByFunction, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Show } from 'src/app/model/shows/show';
import { ShowService } from 'src/app/services/shows/show.service';
import { MessagingService } from 'src/app/services/messaging/messaging.service';

@Component({
  selector: 'app-create-show',
  templateUrl: './create-show.component.html',
  styleUrls: ['./create-show.component.css'],
})
export class CreateShowComponent {
  public show!: Show;

  keywords = ['Drama'];
  myControl: FormControl;
  announcer = inject(LiveAnnouncer);

  constructor(
    private showService: ShowService,
    private messageService: MessagingService
  ) {
    this.myControl = new FormControl(['Drama']);
    this.initializeShow();
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
    if (this.show) {
      this.setShowValues();
      this.showService.createShow(this.show).subscribe({
        next: (result) => {
          this.messageService.setMessage(result.msg);
          this.initializeShow();
        },
        error: (error) => this.messageService.setMessage(error),
      });
    } else {
      this.messageService.setMessage('The form is in invalid state!');
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
      title: this.show.title,
      description: this.show.description,
      liked: false,
      rating: this.show.rating,
      img: this.show.img,
      genre: this.myControl.value,
    };
  }

  //Initializes show
  initializeShow() {
    this.show = {
      id: '',
      title: '',
      description: '',
      rating: 1,
      img: '',
      liked: false,
      genre: [],
    };

    this.myControl.reset('Drama');
    this.keywords = ['Drama'];
  }

  //Toggles disabled button
  toggleDisabled() {
    if (
      this.show.title !== '' &&
      this.show.description !== '' &&
      this.show.rating !== 1 &&
      this.myControl !== null
    )
      return false;
    else return true;
  }

  trackByShowId: TrackByFunction<Show> = (index, show) => show.id;
}
