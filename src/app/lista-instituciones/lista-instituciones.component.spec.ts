import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInstitucionesComponent } from './lista-instituciones.component';

describe('ListaInstitucionesComponent', () => {
  let component: ListaInstitucionesComponent;
  let fixture: ComponentFixture<ListaInstitucionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaInstitucionesComponent]
    });
    fixture = TestBed.createComponent(ListaInstitucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});