import { Injectable } from '@angular/core';

//import http client to make the request
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable({
  providedIn: 'root'
})
export class WeatherHttpService {

  private authKey = 'd807e6940a2040bf8188afe194ee1463'
  public baseUrl = "http://api.weatherbit.io/v2.0/current";
  public myCity = 'Karwar';

  public cityName: any

  constructor(private _http: HttpClient) {
    console.log('weather http service was called');
  }

  private handleError(err: HttpErrorResponse) {
    console.log('Handle http error');
    console.log(err.message);
    return Observable.throw(err.message);

  }

  public getNativeWeather(): any {
    let myResponse = this._http.get(this.baseUrl + '?key=' + this.authKey + '&city=' + this.myCity);
    console.log(myResponse);
    return myResponse;
  }
  public getWeather(data): any {
    const params = new HttpParams()
      .set('key', data.key)
      .set('city', data.city)

    let myResponse = this._http.get(this.baseUrl + '/', { params });
    console.log(myResponse);
    return myResponse;
  }

  public getWeatherByPincode(data): any {
    const params = new HttpParams()
      .set('key', data.key)
      .set('postal_code', data.postal_code)

    let myResponse = this._http.get(this.baseUrl + '/', { params });
    console.log(myResponse);
    return myResponse;
  }

}
