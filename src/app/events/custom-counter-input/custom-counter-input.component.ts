import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {counterState} from "../../counter/state/counter.state";
import {changeText, customIncrement} from "../../counter/state/couner.action";

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {
  value: number;
  name: string;
  constructor(private store: Store<{ counter: counterState}>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe(data => {
      console.log('Channel name Observable called');
      this.name = data.name;
    })
  }

  addValue() {
   console.log(this.value);
   this.store.dispatch((customIncrement({count: +this.value})))
  }

  changeText(){
    this.store.dispatch(changeText());
    console.log("testing");
  }

}
