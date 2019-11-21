import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasVehiculosPage } from './reservasVehiculos.page';

describe('SettingsPage', () => {
  let component: ReservasVehiculosPage;
  let fixture: ComponentFixture<ReservasVehiculosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReservasVehiculosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservasVehiculosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
