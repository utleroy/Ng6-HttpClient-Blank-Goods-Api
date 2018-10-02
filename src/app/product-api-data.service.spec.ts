import { TestBed, inject } from '@angular/core/testing';

import { ProductApiDataService } from './product-api-data.service';

describe('ProductApiDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductApiDataService]
    });
  });

  it('should be created', inject([ProductApiDataService], (service: ProductApiDataService) => {
    expect(service).toBeTruthy();
  }));
});
