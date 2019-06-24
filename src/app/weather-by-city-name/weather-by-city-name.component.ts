import { Component, OnInit } from '@angular/core';

import { WeatherHttpService } from '../weather-http.service';


@Component({
  selector: 'app-weather-by-city-name',
  templateUrl: './weather-by-city-name.component.html',
  styleUrls: ['./weather-by-city-name.component.css']
})
export class WeatherByCityNameComponent implements OnInit {
  private authKey = 'd807e6940a2040bf8188afe194ee1463'
  public cityName: any;
  public cityWeather;

  constructor(public weatherHttpService: WeatherHttpService) {
    console.log('Check weather component constructor is called');

  }



  ngOnInit() {
    console.log('Check weather component onInit called');

  }
  //
  //getData = () =>{
  //return this.cityName;
  //console.log(this.cityName);
  //}

  public getWeather: any = () => {

    let data = {
      key: this.authKey,
      city: this.cityName
    }

    console.log(data.key);
    console.log(data.city);

    this.weatherHttpService.getWeather(data).subscribe(
      data => {
        console.log(data);
        this.cityWeather = data['data'];
        console.log(this.cityWeather)
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }

    )
  }




}







