import { TestBed } from '@angular/core/testing';

import { ButtonListService } from './button-list.service';

describe('ButtonListService', () => {
  let service: ButtonListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButtonListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
