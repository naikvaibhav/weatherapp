import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherByCityNameComponent } from './weather-by-city-name.component';

describe('WeatherByCityNameComponent', () => {
  let component: WeatherByCityNameComponent;
  let fixture: ComponentFixture<WeatherByCityNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherByCityNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherByCityNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
