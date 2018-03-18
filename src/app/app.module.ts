import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { weatherForecast } from './services/app.cpmponent.weatherapi';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  bootstrap: [AppComponent],
  providers: [weatherForecast]
})
export class AppModule { }
