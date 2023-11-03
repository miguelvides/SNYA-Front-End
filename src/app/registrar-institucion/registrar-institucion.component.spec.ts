import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarInstitucionComponent } from './registrar-institucion.component';

describe('RgistrarInstitucionComponent', () => {
  let component: RegistrarInstitucionComponent;
  let fixture: ComponentFixture<RegistrarInstitucionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarInstitucionComponent]
    });
    fixture = TestBed.createComponent(RegistrarInstitucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
