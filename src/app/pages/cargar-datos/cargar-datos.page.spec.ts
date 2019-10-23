import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarDatosPage } from './cargar-datos.page';

describe('CargarDatosPage', () => {
  let component: CargarDatosPage;
  let fixture: ComponentFixture<CargarDatosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargarDatosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarDatosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
