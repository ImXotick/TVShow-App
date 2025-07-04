import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CardComponent } from './shows/card/card.component';
import { HomeComponent } from './shows/home/home.component';
import { LikedShowsComponent } from './shows/liked-shows/liked-shows.component';

import { ShowService } from './services/shows/show.service';
import { MessagingService } from './services/messaging/messaging.service';

import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { TVShowAppInterceptor } from './services/TVShow-App-interceptor';
import { AuthGGuard } from './guards/auth-g.guard';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    ModalComponent,
    NavbarComponent,
    LikedShowsComponent,
    SearchComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [
    ShowService,
    MessagingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TVShowAppInterceptor,
      multi: true,
    },
    AuthGGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
