import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterOutptComponent } from './counter-outpt.component';

describe('CounterOutptComponent', () => {
  let component: CounterOutptComponent;
  let fixture: ComponentFixture<CounterOutptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterOutptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterOutptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
