import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './pages/Home/components/card/card.component';
import { ListComponent } from './pages/Home/components/list/list.component';
import { ShowService } from './pages/Home/services/shows/show.service';

@NgModule({
  declarations: [AppComponent, CardComponent, ListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ShowService],
  bootstrap: [AppComponent],
})
export class AppModule {}
