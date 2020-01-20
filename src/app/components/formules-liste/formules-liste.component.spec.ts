import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulesListeComponent } from './formules-liste.component';

describe('FormulesListeComponent', () => {
  let component: FormulesListeComponent;
  let fixture: ComponentFixture<FormulesListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulesListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulesListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
