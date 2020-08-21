import { TestBed } from '@angular/core/testing';

import { CreatingPersonGuard } from './creating-person.guard';

describe('CreatingPersonGuard', () => {
  let guard: CreatingPersonGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CreatingPersonGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
