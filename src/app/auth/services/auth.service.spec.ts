import { async, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });
  }));

  beforeEach(() => {
    service = TestBed.get(AuthService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });
});
