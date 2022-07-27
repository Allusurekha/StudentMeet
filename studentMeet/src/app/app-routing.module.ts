import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./events/layout/layout.component";
import {SignupComponent} from "./signup/signup.component";
import {AppLayoutComponent} from "./app-layout/app-layout.component";

const routes: Routes = [
  {
    path: '',
    component: SignupComponent,
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'Event',
        loadChildren: () => import('../app/events/events.module').then(m => m.EventsModule),
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
