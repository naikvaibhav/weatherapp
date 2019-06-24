import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { WeatherHttpService } from './weather-http.service';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { WeatherByCityNameComponent } from './weather-by-city-name/weather-by-city-name.component';
import { WeatherByPincodeComponent } from './weather-by-pincode/weather-by-pincode.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherByCityNameComponent,
    WeatherByPincodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'city', component: WeatherByCityNameComponent },
      { path: 'pincode', component: WeatherByPincodeComponent }
    ])
  ],
  providers: [WeatherHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
