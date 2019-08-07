import { TestBed } from '@angular/core/testing';

import { CrudOperationService } from './crud-operation.service';

describe('CrudOperationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudOperationService = TestBed.get(CrudOperationService);
    expect(service).toBeTruthy();
  });
});
