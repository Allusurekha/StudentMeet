import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { EventsRoutingModule } from './events-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { LayoutComponent } from './layout/layout.component';
import {NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule, NbToastrModule} from "@nebular/theme";
import { BookParticipationComponent } from './book-participation/book-participation.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { InviteFrndsComponent } from './invite-frnds/invite-frnds.component';
//push
import {environment} from "../../environments/environment";
import {initializeApp} from "firebase/app";
import { CounterComponent } from './counter/counter.component';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { CounterOutptComponent } from './counter-outpt/counter-outpt.component';
import {StoreModule} from "@ngrx/store";
import { CustomCounterInputComponent } from './custom-counter-input/custom-counter-input.component';
initializeApp(environment.firebase);

@NgModule({
  declarations: [
    GalleryComponent,
    LayoutComponent,
    BookParticipationComponent,
    InviteFrndsComponent,
    CounterComponent,
    CounterButtonsComponent,
    CounterOutptComponent,
    CustomCounterInputComponent
  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    EventsRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    ReactiveFormsModule,
    FormsModule,
    NbToastrModule,
    StoreModule,
    ButtonModule,
    InputTextModule
  ]
})
export class EventsModule { }
