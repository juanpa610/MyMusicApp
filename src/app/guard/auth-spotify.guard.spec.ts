import { TestBed } from '@angular/core/testing';

import { AuthSpotifyGuard } from './auth-spotify.guard';

describe('AuthSpotifyGuard', () => {
  let guard: AuthSpotifyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthSpotifyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
