// import { Weather } from '../Weather';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
 import { Observable } from 'rxjs/Rx';
import { weatherDataType } from '../Weather';

 

@Injectable()
export class weatherForecast {
  private _url = 'http://api.openweathermap.org/data/2.5/forecast?APPID=bc3c5f24199d01cd097c63810d089420&q=Pune,IN';
   constructor(private http: Http) {}
 // constructor() {
  
  // this._url = 'http://api.openweathermap.org/data/2.5/forecast?APPID=bc3c5f24199d01cd097c63810d089420&q=Pune,IN';
// }

  handleError(err: any) {
        console.log('error?', err);
        return Promise.reject(err.message || err);
    }
  
  
   getWeatherForecast(): Promise<weatherDataType> {
        return this.http.get(this._url)
     .toPromise()
     .then(res=>res.json())
     .catch(this.handleError);
          
 //  getWeatherForecast(): Observable<weatherDataType> {
   //     return this.http.get(this._url)
    // .map(res=>res.json())
     
    // .catch(this.handleError);      // return this._url;
    }

}
