import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedShowsComponent } from './liked-shows.component';

describe('LikedShowsComponent', () => {
  let component: LikedShowsComponent;
  let fixture: ComponentFixture<LikedShowsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LikedShowsComponent]
    });
    fixture = TestBed.createComponent(LikedShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
