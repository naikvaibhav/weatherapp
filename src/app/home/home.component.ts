import { Component, OnInit } from '@angular/core';


import { WeatherHttpService } from '../weather-http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public nativeWeather;
 
  public now : any = new Date();
  public date = this.now.getDate();
  public month = this.now.getMonth();
  public year = this.now.getFullYear();
  
  public time = this.now.toLocaleTimeString()

  public currentDate = this.date+"/"+this.month+"/"+this.year;
  


  constructor(public weatherHttpService : WeatherHttpService) {
    console.log('Home component constructor is called');
    
   }

  

  ngOnInit() {
    console.log('Home component onInit called');
    
    this.weatherHttpService.getNativeWeather().subscribe(
      data=>{
        console.log("logging data");
        console.log(data);
        console.log(this.time)
        console.log(this.currentDate)
        this.nativeWeather = data["data"];
       
       
        
      },
      error=>{
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )
  }

}
