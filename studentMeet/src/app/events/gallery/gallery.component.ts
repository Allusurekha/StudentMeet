import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  bookParticipation() {
    this.router.navigate(['/Event/BookParticipation']);
  }

  inviteFriends() {
    this.router.navigate(['/Event/InviteFriends']);
  }
}
