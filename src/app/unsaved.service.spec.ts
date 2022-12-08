import { TestBed } from '@angular/core/testing';

import { UnsavedService } from './unsaved.service';

describe('UnsavedService', () => {
  let service: UnsavedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnsavedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
