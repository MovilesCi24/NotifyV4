import { TestBed } from '@angular/core/testing';

import { PopOverService } from './pop-over.service';

describe('PopOverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PopOverService = TestBed.get(PopOverService);
    expect(service).toBeTruthy();
  });
});
