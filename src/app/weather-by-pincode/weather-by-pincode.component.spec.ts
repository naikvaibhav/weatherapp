import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherByPincodeComponent } from './weather-by-pincode.component';

describe('WeatherByPincodeComponent', () => {
  let component: WeatherByPincodeComponent;
  let fixture: ComponentFixture<WeatherByPincodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherByPincodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherByPincodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
