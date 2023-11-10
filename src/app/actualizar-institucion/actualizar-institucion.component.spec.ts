import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarInstitucionComponent } from './actualizar-institucion.component';

describe('ActualizarInstitucionComponent', () => {
  let component: ActualizarInstitucionComponent;
  let fixture: ComponentFixture<ActualizarInstitucionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarInstitucionComponent]
    });
    fixture = TestBed.createComponent(ActualizarInstitucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
