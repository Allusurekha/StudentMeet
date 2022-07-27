import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NbToastrService} from "@nebular/theme";

@Component({
  selector: 'app-book-participation',
  templateUrl: './book-participation.component.html',
  styleUrls: ['./book-participation.component.scss']
})
export class BookParticipationComponent implements OnInit {
  participationForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private toastService: NbToastrService) { }
  get s() {
    return this.participationForm.controls;
  }

  ngOnInit(): void {
    this.participationFormAccInit();
  }

  participationFormAccInit() {
    this.participationForm = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['',Validators.required],
      email: ['', Validators.required]
    })
  }

  reserveSeat() {
    this.submitted = true;
    if(this.participationForm.invalid) {
      this.toastService.danger(status, 'Please fill the form', { duration: 2000});
      return;
    }
    else {
      console.log(this.participationForm.value);
      this.toastService.success(status, 'Form Submitted Successfully', { duration: 2000});
    }
    console.log("entered");
    console.log(this.participationForm.value);
  }

}
