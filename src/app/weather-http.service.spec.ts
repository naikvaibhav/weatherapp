import { TestBed } from '@angular/core/testing';

import { WeatherHttpService } from './weather-http.service';

describe('WeatherHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherHttpService = TestBed.get(WeatherHttpService);
    expect(service).toBeTruthy();
  });
});
