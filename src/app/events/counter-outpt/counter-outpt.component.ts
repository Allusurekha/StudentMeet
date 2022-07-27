import {Component, OnDestroy, OnInit} from '@angular/core';
import {decrement, increment, reset} from "../../counter/state/couner.action";
import {Store} from "@ngrx/store";
import {counterState} from "../../counter/state/counter.state";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-counter-outpt',
  templateUrl: './counter-outpt.component.html',
  styleUrls: ['./counter-outpt.component.scss']
})
export class CounterOutptComponent implements OnInit {
  counter: number;
  // counter$: Observable<{counter: number}>;
  // counterSubscription: Subscription
  constructor(private store: Store<{ counter: counterState}>) { }

  ngOnInit(): void {
    // this.counterSubscription =
      this.store.select('counter').subscribe((data) => {
        console.log('Counter Observable Called');
      this.counter = data.counter;
    });
    // this.counter$ = this.store.select('counter');
  }
  // ngOnDestroy(): void {
  //   if(this.counterSubscription) {
  //     this.counterSubscription.unsubscribe();
  //   }
  // }


}
