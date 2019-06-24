import { Component, OnInit } from '@angular/core';
import { WeatherHttpService } from '../weather-http.service';
@Component({
  selector: 'app-weather-by-pincode',
  templateUrl: './weather-by-pincode.component.html',
  styleUrls: ['./weather-by-pincode.component.css']
})
export class WeatherByPincodeComponent implements OnInit {
  private authKey = 'd807e6940a2040bf8188afe194ee1463'
  public pinCode: any;
  public pincodeWeather;

  constructor(public weatherHttpService: WeatherHttpService) {
    console.log('Check weather component constructor is called');
  }

  ngOnInit() {
    console.log('Check weather component onInit called');
  }

  public getWeatherByPincode: any = () => {

    let data = {
      key: this.authKey,
      postal_code: this.pinCode
    }

    console.log(data.key);
    console.log(data.postal_code);

    this.weatherHttpService.getWeatherByPincode(data).subscribe(
      data => {
        console.log(data);
        this.pincodeWeather = data['data'];
        console.log(this.pincodeWeather)
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }

    )
  }
}
