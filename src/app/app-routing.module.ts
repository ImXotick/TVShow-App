import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './components/list/list.component';
import { LikedShowsComponent } from './components/liked-shows/liked-shows.component';

const routes: Routes = [
  { path: 'shows/list', component: ListComponent },
  { path: 'liked-shows', component: LikedShowsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
