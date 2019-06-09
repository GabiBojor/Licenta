(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<wa-header></wa-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/current/current.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/current/current.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>{{myWeather.cityName}}</h1>\n  <h2>{{myWeather.temp}}&deg;</h2>\n  <div class=\"img\">\n    <img src=\"http://openweathermap.org/img/w/{{myWeather.icon}}.png\">\n  </div>\n  <h3>{{myWeather.weatherKind}}</h3>\n  <h4>Humidity: {{myWeather.humidity}}%</h4>\n  <h4>Max: {{myWeather.tempMax}}&deg;C</h4>\n  <h4>Min: {{myWeather.tempMin}}&deg;C</h4>\n\n  <form (ngSubmit)=\"onSubmit(form)\" #form=\"ngForm\">\n    <input type=\"text\" ngModel name=\"city\" placeholder=\"City Name\">\n    <br><br>\n    <button name=\"button\">See Current Weather</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/forecast/forecast.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forecast/forecast.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form [formGroup]=\"forecastForm\" (ngSubmit)=\"onSubmit()\">\n    <h4>Add City Name</h4>\n    <input type=\"text\" formControlName=\"forecastCity\">\n    <br><br>\n    <button>See 5 day Forecast</button>\n  </form>\n\n  <div class=\"day\" *ngFor=\"let day of cityForecast\">\n    <h2>{{day.day | date: 'd MMMM'}}</h2>\n    <div class=\"icon\">\n      <img src=\"http://openweathermap.org/img/w/{{day.icon}}.png\" alt=\"\">\n    </div>\n    <div class=\"temp\">\n      <h3>Max: {{day.tempMax}}&deg;</h3>\n      <h3>Min: {{day.tempMin}}&deg;</h3>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <a [routerLink]=\"['/']\">Current Weather</a>\n  <a [routerLink]=\"['forecast']\">5 Day Forecast</a>\n</nav>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'This is component';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'wa-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _current_current_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./current/current.component */ "./src/app/current/current.component.ts");
/* harmony import */ var _forecast_forecast_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forecast/forecast.component */ "./src/app/forecast/forecast.component.ts");
/* harmony import */ var _weather_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./weather.routing */ "./src/app/weather.routing.ts");
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./weather.service */ "./src/app/weather.service.ts");
/* harmony import */ var _resolve_location_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resolve-location.service */ "./src/app/resolve-location.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _current_current_component__WEBPACK_IMPORTED_MODULE_7__["CurrentComponent"],
            _forecast_forecast_component__WEBPACK_IMPORTED_MODULE_8__["ForecastComponent"]
        ],
        imports: [
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _weather_routing__WEBPACK_IMPORTED_MODULE_9__["weatherRouting"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"]
        ],
        providers: [_weather_service__WEBPACK_IMPORTED_MODULE_10__["WeatherService"], _resolve_location_service__WEBPACK_IMPORTED_MODULE_11__["ResolveLocationService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/current-weather.ts":
/*!************************************!*\
  !*** ./src/app/current-weather.ts ***!
  \************************************/
/*! exports provided: CurrentWeather */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentWeather", function() { return CurrentWeather; });
class CurrentWeather {
    constructor(cityName, temp, icon, weatherKind, humidity, tempMax, tempMin) {
        this.cityName = cityName;
        this.temp = temp;
        this.icon = icon;
        this.weatherKind = weatherKind;
        this.humidity = humidity;
        this.tempMax = tempMax;
        this.tempMin = tempMin;
    }
}


/***/ }),

/***/ "./src/app/current/current.component.css":
/*!***********************************************!*\
  !*** ./src/app/current/current.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXJyZW50L2N1cnJlbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/current/current.component.ts":
/*!**********************************************!*\
  !*** ./src/app/current/current.component.ts ***!
  \**********************************************/
/*! exports provided: CurrentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentComponent", function() { return CurrentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../weather.service */ "./src/app/weather.service.ts");
/* harmony import */ var _current_weather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../current-weather */ "./src/app/current-weather.ts");





let CurrentComponent = class CurrentComponent {
    constructor(ws, route) {
        this.ws = ws;
        this.route = route;
    }
    ngOnInit() {
        this.route.data.subscribe((data) => {
            this.myWeather = data.myWeather;
        });
    }
    onSubmit(weatherForm) {
        this.ws.anotherCityWeather(weatherForm.value.city).subscribe(data => {
            this.myWeather = new _current_weather__WEBPACK_IMPORTED_MODULE_4__["CurrentWeather"](data.name, data.main.temp, data.weather[0].icon, data.weather[0].description, data.main.humidity, data.main.temp_max, data.main.temp_min);
        });
    }
};
CurrentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'wa-current',
        template: __webpack_require__(/*! raw-loader!./current.component.html */ "./node_modules/raw-loader/index.js!./src/app/current/current.component.html"),
        styles: [__webpack_require__(/*! ./current.component.css */ "./src/app/current/current.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_weather_service__WEBPACK_IMPORTED_MODULE_3__["WeatherService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], CurrentComponent);



/***/ }),

/***/ "./src/app/forecast.ts":
/*!*****************************!*\
  !*** ./src/app/forecast.ts ***!
  \*****************************/
/*! exports provided: Forecast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Forecast", function() { return Forecast; });
class Forecast {
    constructor(day, icon, tempMax, tempMin) {
        this.day = day;
        this.icon = icon;
        this.tempMax = tempMax;
        this.tempMin = tempMin;
    }
}


/***/ }),

/***/ "./src/app/forecast/forecast.component.css":
/*!*************************************************!*\
  !*** ./src/app/forecast/forecast.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".day {\n  display: inline-block;\n  padding: 30px;\n}\n\nform {\n  margin-top: 50px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmVjYXN0L2ZvcmVjYXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6ImZvcmVjYXN0L2ZvcmVjYXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF5IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG5mb3JtIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/forecast/forecast.component.ts":
/*!************************************************!*\
  !*** ./src/app/forecast/forecast.component.ts ***!
  \************************************************/
/*! exports provided: ForecastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForecastComponent", function() { return ForecastComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _forecast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../forecast */ "./src/app/forecast.ts");
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../weather.service */ "./src/app/weather.service.ts");





let ForecastComponent = class ForecastComponent {
    constructor(weatherService) {
        this.weatherService = weatherService;
        this.cityForecast = [];
    }
    ngOnInit() {
        this.forecastForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            forecastCity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    onSubmit() {
        this.cityForecast.splice(0, this.cityForecast.length);
        this.weatherService
            .fiveDayForecast(this.forecastForm.value.forecastCity)
            .subscribe(data => {
            console.log(data);
            for (let i = 0; i < data.list.length; i += 8) {
                const temporary = new _forecast__WEBPACK_IMPORTED_MODULE_3__["Forecast"](data.list[i].dt_txt, data.list[i].weather[0].icon, data.list[i].main.temp_max, data.list[i].main.temp_min);
                this.cityForecast.push(temporary);
            }
        });
    }
};
ForecastComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'wa-forecast',
        template: __webpack_require__(/*! raw-loader!./forecast.component.html */ "./node_modules/raw-loader/index.js!./src/app/forecast/forecast.component.html"),
        styles: [__webpack_require__(/*! ./forecast.component.css */ "./src/app/forecast/forecast.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_weather_service__WEBPACK_IMPORTED_MODULE_4__["WeatherService"]])
], ForecastComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'wa-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HeaderComponent);



/***/ }),

/***/ "./src/app/resolve-location.service.ts":
/*!*********************************************!*\
  !*** ./src/app/resolve-location.service.ts ***!
  \*********************************************/
/*! exports provided: ResolveLocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolveLocationService", function() { return ResolveLocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather.service */ "./src/app/weather.service.ts");



let ResolveLocationService = class ResolveLocationService {
    constructor(ws) {
        this.ws = ws;
    }
    resolve() {
        return this.ws.localWeather();
    }
};
ResolveLocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"]])
], ResolveLocationService);



/***/ }),

/***/ "./src/app/weather.routing.ts":
/*!************************************!*\
  !*** ./src/app/weather.routing.ts ***!
  \************************************/
/*! exports provided: weatherRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weatherRouting", function() { return weatherRouting; });
/* harmony import */ var _current_current_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current/current.component */ "./src/app/current/current.component.ts");
/* harmony import */ var _forecast_forecast_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecast/forecast.component */ "./src/app/forecast/forecast.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _resolve_location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolve-location.service */ "./src/app/resolve-location.service.ts");




const WEATHER_ROUTER = [
    {
        path: '',
        component: _current_current_component__WEBPACK_IMPORTED_MODULE_0__["CurrentComponent"],
        resolve: { myWeather: _resolve_location_service__WEBPACK_IMPORTED_MODULE_3__["ResolveLocationService"] }
    },
    { path: 'forecast', component: _forecast_forecast_component__WEBPACK_IMPORTED_MODULE_1__["ForecastComponent"] }
];
const weatherRouting = _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(WEATHER_ROUTER);


/***/ }),

/***/ "./src/app/weather.service.ts":
/*!************************************!*\
  !*** ./src/app/weather.service.ts ***!
  \************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _current_weather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./current-weather */ "./src/app/current-weather.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let WeatherService = class WeatherService {
    constructor(http) {
        this.http = http;
    }
    localWeather() {
        return new Promise((res, rej) => {
            navigator.geolocation.getCurrentPosition(pos => {
                this.location = pos.coords;
                const lat = this.location.latitude;
                const lon = this.location.longitude;
                return this.http
                    .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=94269e1a4906f79f68bbedda61f249e4&units=metric`)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => response.json()))
                    .toPromise()
                    .then(data => {
                    console.log(data);
                    this.myWeather = new _current_weather__WEBPACK_IMPORTED_MODULE_2__["CurrentWeather"](data.name, data.main.temp, data.weather[0].icon, data.weather[0].description, data.main.humidity, data.main.temp_max, data.main.temp_min);
                    res(this.myWeather);
                });
            });
        });
    }
    anotherCityWeather(city) {
        return this.http
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=94269e1a4906f79f68bbedda61f249e4&units=metric`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => response.json()));
    }
    fiveDayForecast(city) {
        return this.http
            .get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=94269e1a4906f79f68bbedda61f249e4&units=metric`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => response.json()));
    }
};
WeatherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
], WeatherService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/appie/Desktop/licentaAngular/weather/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map