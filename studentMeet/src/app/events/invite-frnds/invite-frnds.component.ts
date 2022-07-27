import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-invite-frnds',
  templateUrl: './invite-frnds.component.html',
  styleUrls: ['./invite-frnds.component.scss']
})
export class InviteFrndsComponent implements OnInit {
  message:any = null;
  value1: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.requestPermission();
    this.listen();
  }

  loginData(signInForm: NgForm) {
    console.log(signInForm);
  }

  requestPermission() {
    const messaging = getMessaging();
    getToken(messaging,
      { vapidKey: environment.firebase.vapidKey}).then(
      (currentToken) => {
        if (currentToken) {
          console.log("Hurraaa!!! we got the token.....");
          console.log(currentToken);
        } else {
          console.log('No registration token available. Request permission to generate one.');
        }
      }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
  }
  listen() {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {

      //--------------------------------------------------------
      //for receiving notification forground/background also
      navigator.serviceWorker.getRegistration('/firebase-cloud-messaging-push-scope').then(registration => {
        registration.showNotification(
          payload.notification.title,
          payload.notification
        );
      });
      //--------------------------------------------------------


      console.log('Message received. ', payload);
      this.message=payload;
      // this.showCustomeMSG(payload)
    });

  }

  counter() {
    this.router.navigate(['/Event/ngrxCounter']);
  }

}
