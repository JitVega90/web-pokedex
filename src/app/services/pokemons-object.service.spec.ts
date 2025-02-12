import { TestBed } from '@angular/core/testing';

import { PokemonsObjectService } from './pokemons-object.service';

describe('PokemonsObjectService', () => {
  let service: PokemonsObjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonsObjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
