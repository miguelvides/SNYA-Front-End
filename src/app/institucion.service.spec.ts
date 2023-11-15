import { TestBed } from '@angular/core/testing';

import { institucionService } from './institucion.service';

describe('InstitucionService', () => {
  let service: institucionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(institucionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
