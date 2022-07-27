import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteFrndsComponent } from './invite-frnds.component';

describe('InviteFrndsComponent', () => {
  let component: InviteFrndsComponent;
  let fixture: ComponentFixture<InviteFrndsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteFrndsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteFrndsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
