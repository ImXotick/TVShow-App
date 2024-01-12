import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LikedShowsComponent } from './pages/liked-shows/liked-shows.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'liked-shows', component: LikedShowsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
