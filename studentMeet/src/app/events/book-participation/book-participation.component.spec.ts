import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookParticipationComponent } from './book-participation.component';

describe('BookParticipationComponent', () => {
  let component: BookParticipationComponent;
  let fixture: ComponentFixture<BookParticipationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookParticipationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookParticipationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
