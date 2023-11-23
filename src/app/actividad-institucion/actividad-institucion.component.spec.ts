import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadInstitucionComponent } from './actividad-institucion.component';

describe('ActividadInstitucionComponent', () => {
  let component: ActividadInstitucionComponent;
  let fixture: ComponentFixture<ActividadInstitucionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActividadInstitucionComponent]
    });
    fixture = TestBed.createComponent(ActividadInstitucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
