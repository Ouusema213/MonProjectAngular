import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { ProduitGuard } from './produit.guard';

describe('ProduitGuard', () => {
  let guard: ProduitGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProduitGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
