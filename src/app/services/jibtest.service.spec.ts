import { TestBed } from '@angular/core/testing';

import { JibtestService } from './jibtest.service';

describe('JibtestService', () => {
  let service: JibtestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JibtestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
