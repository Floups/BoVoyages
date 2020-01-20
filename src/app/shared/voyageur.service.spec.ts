import { TestBed } from '@angular/core/testing';

import { VoyageurService } from './voyageur.service';

describe('VoyageurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VoyageurService = TestBed.get(VoyageurService);
    expect(service).toBeTruthy();
  });
});
