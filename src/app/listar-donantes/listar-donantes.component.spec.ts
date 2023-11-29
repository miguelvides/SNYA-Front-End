import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDonantesComponent } from './listar-donantes.component';

describe('ListarDonantesComponent', () => {
  let component: ListarDonantesComponent;
  let fixture: ComponentFixture<ListarDonantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarDonantesComponent]
    });
    fixture = TestBed.createComponent(ListarDonantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
