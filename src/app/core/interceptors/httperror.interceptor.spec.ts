import { TestBed } from '@angular/core/testing';

import { HttperrorInterceptor } from './httperror.interceptor';

describe('HttperrorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttperrorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttperrorInterceptor = TestBed.inject(HttperrorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
