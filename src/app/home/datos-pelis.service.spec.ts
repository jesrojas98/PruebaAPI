import { TestBed } from '@angular/core/testing';

import { DatosPelisService } from './datos-pelis.service';

describe('DatosPelisService', () => {
  let service: DatosPelisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosPelisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
