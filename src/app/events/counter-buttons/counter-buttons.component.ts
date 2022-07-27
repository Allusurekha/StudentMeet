import { Component, OnInit } from '@angular/core';
import {decrement, increment, reset} from "../../counter/state/couner.action";
import {Store} from "@ngrx/store";
import {counterState} from "../../counter/state/counter.state";

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent implements OnInit {

  constructor(private store: Store<{ counter: counterState}>) { }

  ngOnInit(): void {
  }

  onIncrement(){
    this.store.dispatch(increment());
  }
  onDecrement(){
    this.store.dispatch(decrement());
  }
  reset(){
    this.store.dispatch(reset());
  }


}
