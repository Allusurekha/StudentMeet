import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {NbToastrService} from "@nebular/theme";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  SignInForm: FormGroup;
  CreateAcc: FormGroup;
  signUp: boolean = false;
  submitted = false;
  formSubmitted = false;
  email: string;
  password: string;
  constructor(private fb: FormBuilder, private toastService: NbToastrService, private router: Router) { }

  get s() {
    return this.SignInForm.controls;
  }
  get c() {
    return this.CreateAcc.controls;
  }

  ngOnInit(): void {
    this.SignInFormAccInit();
    this.CreateAccInit();
  }

  SignInFormAccInit() {
    this.SignInForm = this.fb.group({
      email: ['', Validators.required],
      password: ['',Validators.required]
    })
  }
  CreateAccInit() {
    this.CreateAcc = this.fb.group({
      selectUniversity: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }

  signInAccount() {
    this.submitted = true;
    if(this.SignInForm.invalid) {
      console.log("please enter details");
      // this.toastService.danger('Login Failed', 'Failed Message', {
      //   duration: 2000
      // });
      return;
    }
    else {
      console.log("entered");
      // if(this.email === this.SignInForm.get('email').value && this.password === this.SignInForm.get('password').value ){
      //   console.log("matched");
      //   this.router.navigate(['/Event/gallery']);
      // }
      this.router.navigate(['/Event/gallery']);

      // this.toastService.success('Login Successfully', 'Success Message', {
      //   duration: 2000
      // });
    }
  }

  createAccount() {
    this.signUp = true;
  }

  CrtAcc() {
    this.formSubmitted = true;
    if(this.CreateAcc.invalid) {
       console.log("please enter details");
    }
    else {
      this.email = this.CreateAcc.get('email').value;
      this.password = this.CreateAcc.get('password').value;
      console.log(this.password);
      console.log(this.CreateAcc.get('confirmPassword').value);
      // if(this.password !== this.CreateAcc.get('confirmPassword').value) {
      //   console.log("password doesnt match");
      //   this.toastService.success('Profile Created Successfully', 'Success Message', {
      //     duration: 2000
      //   });
      // }
      // this.toastService.success('Profile Created Successfully', 'Success Message', {
      //   duration: 2000
      // });
      this.signUp = false;
    }
  }

}
