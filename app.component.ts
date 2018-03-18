import { Component } from '@angular/core';
import { weatherForecast } from './services/app.cpmponent.weatherapi';
import { weatherDataType } from './Weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [weatherForecast]
})
export class AppComponent {
  title = 'Weather Forecast for Pune, India!';
  private weatherData: weatherDataType;
  private Tempvar: boolean;

   constructor(private weatherAPIService: weatherForecast) {
   // this.weatherData = this.weatherAPIService.getWeatherForecast();
   this.weatherAPIService.getWeatherForecast().then(result=> {this.weatherData = result;console.log('weatherData = ',this.weatherData);}).catch(ex=> {this.Tempvar=false;});
  // this.weatherData = this.weatherAPIService.getWeatherForecast();
     
     // console.log("weatherData = ",this.weatherData);
   }
  
  
  ShowData () {
    this.Tempvar = true;
  }

  HideData () {
    this.Tempvar = false;
  }

}
