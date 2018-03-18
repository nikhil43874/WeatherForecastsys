# WeatherForecastsys
WeatherForecast System for Pune, India

# WeatherForcastSys

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5. Please make sure that the npm and the angular-cli has been installed before running this application

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

In development server(localhost), you typically start the server in the folder that holds index.html. That's the root folder and you'd add <base href="/"> near the top of index.html because / is the root of the app.

But on the shared or production server, you might serve the app from a subfolder. For example, when the URL to load the app is something like http://www.mysite.com/my/app/, the subfolder is my/app/ and you should add <base href="/my/app/"> to the server version of the index.html.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## APPID

APPID (bc3c5f24199d01cd097c63810d089420) is provided in the URL to make http call easier and avoid re-registration

## 'Show Data' Button

'Show Data' button displays the data on the UI. Once clicked, the 'Hide Data' button is visible and 'Show Data' button hides

## 'Hide Data' Button

'Hide Data' button hides the data on the UI. Once clicked, the 'Show Data' button is visible and 'Hide Data' button hides

## Application Enhancement

1. Right now, I have just retrived the data from the given API and shown few parameters over the UI in grid format. We can show all the data using the API response object
2. The data can be presented in more graphical content(Charts, Diagrams, Bars, etc.) using highcharts and other UI or data representational frameworks.
3. City and Country level parameters can be accepted from the UI (from user) and corresponding data can be shown in representation.
4. Intelligence queries can be written to frame this application as decision support system with utmost granularity and modularity. 
5. Unit Tests can be written. (I was not able to write due to some technical issues on my system)
6. This application has been made using 5 day weather forecasting. As per the http://openweathermap.org/ website, we can get different weather forecasting data in different formats. Thus, we can further improve the application with more intelligence functionalities and different datasets.
