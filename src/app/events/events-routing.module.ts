import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GalleryComponent} from "./gallery/gallery.component";
import {BookParticipationComponent} from "./book-participation/book-participation.component";
import {InviteFrndsComponent} from "./invite-frnds/invite-frnds.component";
import {CounterComponent} from "./counter/counter.component";

const routes: Routes = [
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'BookParticipation',
    component: BookParticipationComponent
  },
  {
    path: 'InviteFriends',
    component: InviteFrndsComponent
  },
  {
    path: 'ngrxCounter',
    component: CounterComponent
  }
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'gallery'
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
