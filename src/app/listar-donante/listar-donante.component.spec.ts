import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDonanteComponent } from './listar-donante.component';

describe('ListarDonanteComponent', () => {
  let component: ListarDonanteComponent;
  let fixture: ComponentFixture<ListarDonanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarDonanteComponent]
    });
    fixture = TestBed.createComponent(ListarDonanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
