import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './components/home/home.component';
import { LikedShowsComponent } from './components/liked-shows/liked-shows.component';

import { ShowService } from './services/shows/show.service';
import { MessagingService } from './services/messaging/messaging.service';

import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CreateShowComponent } from './components/create-show/create-show.component';
import { SearchComponent } from './components/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    ModalComponent,
    NavbarComponent,
    LikedShowsComponent,
    CreateShowComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [ShowService, MessagingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
