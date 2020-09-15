import { TestBed } from '@angular/core/testing';

import { SchoolyearsService } from './schoolyears.service';

describe('SchoolyearsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SchoolyearsService = TestBed.get(SchoolyearsService);
    expect(service).toBeTruthy();
  });
});
