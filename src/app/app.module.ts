import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxBootstrapIconsModule, ColorTheme } from 'ngx-bootstrap-icons';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './components/list/list.component';
import { LikedShowsComponent } from './components/liked-shows/liked-shows.component';

import { ShowService } from './services/shows/show.service';

import { heart, heartFill } from 'ngx-bootstrap-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CreateShowComponent } from './components/create-show/create-show.component';

const icons = {
  heart,
  heartFill,
};

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ListComponent,
    ModalComponent,
    NavbarComponent,
    LikedShowsComponent,
    CreateShowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBootstrapIconsModule.pick(icons, {
      width: '2.5em',
      height: '2.5em',
      theme: ColorTheme.Danger,
    }),
    NgbModule,
    FormsModule,
  ],
  providers: [ShowService],
  bootstrap: [AppComponent],
})
export class AppModule {}
