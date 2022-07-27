import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {decrement, increment, reset} from "../../counter/state/couner.action";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  counter: number = 0;
  constructor(private store: Store<{ counter: {counter: number}}>) { }

  ngOnInit(): void {
  }

  onIncrement() {
    this.counter++;
  }
  onDecrement() {
    this.counter--;
  }
  onReset() {
    this.counter = 0;
  }
}
