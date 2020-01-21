import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsEnCoursComponent } from './reservations-en-cours.component';

describe('ReservationsEnCoursComponent', () => {
  let component: ReservationsEnCoursComponent;
  let fixture: ComponentFixture<ReservationsEnCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationsEnCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationsEnCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
