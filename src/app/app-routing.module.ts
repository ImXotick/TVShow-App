import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LikedShowsComponent } from './components/liked-shows/liked-shows.component';
import { CreateShowComponent } from './components/create-show/create-show.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'liked-shows', component: LikedShowsComponent },
  { path: 'create-show', component: CreateShowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
