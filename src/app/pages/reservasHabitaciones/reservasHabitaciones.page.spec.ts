import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasHabitacionesPage } from './reservasHabitaciones.page';

describe('SettingsPage', () => {
  let component: ReservasHabitacionesPage;
  let fixture: ComponentFixture<ReservasHabitacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservasHabitacionesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservasHabitacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
