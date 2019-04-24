(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _music_music_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./music/music.component */ "./src/app/music/music.component.ts");




var routes = [
    {
        path: '',
        component: _music_music_component__WEBPACK_IMPORTED_MODULE_3__["MusicComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Always shows a header, even in smaller screens. -->\n<div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header size\">\n  <header class=\"mdl-layout__header\">\n    <div class=\"mdl-layout__header-row\">\n      <!-- Title -->\n      <span class=\"mdl-layout-title\">CarEntertainment</span>\n      <!-- Add spacer, to align navigation to the right -->\n      <div class=\"mdl-layout-spacer\"></div>\n      <!-- Navigation. We hide it in small screens. -->\n      <nav class=\"mdl-navigation\">\n        <a class=\"mdl-navigation__link\" routerLink=\"\">Music</a>\n      </nav>\n    </div>\n  </header>\n\n  <main class=\"mdl-layout__content\">\n    <div class=\"page-content\"><router-outlet></router-outlet></div>\n  </main>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".size {\n  max-width: 800px;\n  max-height: 480px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pY2hhZWwvUGhwc3Rvcm1Qcm9qZWN0cy9DYXJFbnRlcnRhaW5tZW50L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpemV7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1heC1oZWlnaHQ6IDQ4MHB4O1xufVxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'CarEntertainment';
        // this.ipc.on('pong', (event) => {
        //   console.log('pong');
        // });
        //
        // this.ipc.send('ping');
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _music_music_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./music/music.component */ "./src/app/music/music.component.ts");
/* harmony import */ var _service_ipc_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/ipc.service */ "./src/app/service/ipc.service.ts");
/* harmony import */ var _music_explorer_explorer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./music/explorer/explorer.component */ "./src/app/music/explorer/explorer.component.ts");
/* harmony import */ var _music_player_player_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./music/player/player.component */ "./src/app/music/player/player.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pipe_floor_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipe/floor.pipe */ "./src/app/pipe/floor.pipe.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _music_music_component__WEBPACK_IMPORTED_MODULE_5__["MusicComponent"],
                _music_explorer_explorer_component__WEBPACK_IMPORTED_MODULE_7__["ExplorerComponent"],
                _music_player_player_component__WEBPACK_IMPORTED_MODULE_8__["PlayerComponent"],
                _pipe_floor_pipe__WEBPACK_IMPORTED_MODULE_10__["FloorPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ],
            providers: [
                _service_ipc_service__WEBPACK_IMPORTED_MODULE_6__["IpcService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/music/explorer/explorer.component.html":
/*!********************************************************!*\
  !*** ./src/app/music/explorer/explorer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"mdl-list \">\n  <li class=\"mdl-list__item mdl-button mdl-js-button mdl-js-ripple-effect\"\n      *ngFor=\"let dirname of dirnames\"\n      (click)=\"openDirectory(dirname)\">\n    {{dirname}}\n  </li>\n  <li class=\"mdl-list__item mdl-button mdl-js-button mdl-js-ripple-effect\"\n      [ngClass]=\"{'active': filename === currentlyPlaying}\"\n      *ngFor=\"let filename of filenames\"\n      (click)=\"play(filename)\">\n    {{filename}}\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/music/explorer/explorer.component.scss":
/*!********************************************************!*\
  !*** ./src/app/music/explorer/explorer.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mdl-list {\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  border: 1px solid red;\n  max-height: 395px;\n  min-height: 395px;\n  height: 395px;\n  -webkit-margin-before: 0;\n          margin-block-start: 0;\n  -webkit-margin-after: 0;\n          margin-block-end: 0;\n  overflow: scroll; }\n\n.mdl-list__item {\n  margin: 0;\n  padding: 10px;\n  border-bottom: 1px solid gray;\n  text-transform: none;\n  max-height: unset;\n  min-height: 48px;\n  height: auto; }\n\n.active {\n  background-color: #ff6e40;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pY2hhZWwvUGhwc3Rvcm1Qcm9qZWN0cy9DYXJFbnRlcnRhaW5tZW50L3NyYy9hcHAvbXVzaWMvZXhwbG9yZXIvZXhwbG9yZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFXO0VBRVgsU0FBUztFQUNULFVBQVU7RUFFVixxQkFBcUI7RUFFckIsaUJBVlk7RUFXWixpQkFYWTtFQVlaLGFBWlk7RUFjWix3QkFBcUI7VUFBckIscUJBQXFCO0VBQ3JCLHVCQUFtQjtVQUFuQixtQkFBbUI7RUFFbkIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFDYiw2QkFBNkI7RUFDN0Isb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUdkO0VBQ0UseUJBQWlDO0VBQ2pDLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL211c2ljL2V4cGxvcmVyL2V4cGxvcmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGhlaWdodDogMzk1cHg7XG5cbi5tZGwtbGlzdHtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcblxuICBtYXgtaGVpZ2h0OiAkaGVpZ2h0O1xuICBtaW4taGVpZ2h0OiAkaGVpZ2h0O1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG5cbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xuICBtYXJnaW4tYmxvY2stZW5kOiAwO1xuXG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5tZGwtbGlzdF9faXRlbXtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIG1heC1oZWlnaHQ6IHVuc2V0O1xuICBtaW4taGVpZ2h0OiA0OHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5hY3RpdmV7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsMTEwLDY0KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/music/explorer/explorer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/music/explorer/explorer.component.ts ***!
  \******************************************************/
/*! exports provided: ExplorerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorerComponent", function() { return ExplorerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_ipc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/ipc.service */ "./src/app/service/ipc.service.ts");



var ExplorerComponent = /** @class */ (function () {
    function ExplorerComponent(ipcService, changeDetectionRed) {
        this.ipcService = ipcService;
        this.changeDetectionRed = changeDetectionRed;
        this.filenames = [];
        this.dirnames = [];
        this.currentlyPlaying = null;
        this._dirLevel = 0;
    }
    ExplorerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ipcService.on("musicdir", function (event, data) {
            _this.dirnames.push(data);
            _this.changeDetectionRed.detectChanges();
        });
        this.ipcService.on("musicfile", function (event, data) {
            _this.filenames.push(data);
            _this.changeDetectionRed.detectChanges();
        });
        this.ipcService.on("music-current", function (event, args) {
            _this.currentlyPlaying = args;
        });
        this.ipcService.send("music");
    };
    ExplorerComponent.prototype.play = function (filename) {
        this.ipcService.send("music-play", filename);
        this.currentlyPlaying = filename;
        var filenameIndex = this.filenames.indexOf(filename);
        for (var i = filenameIndex + 1; i < this.filenames.length; i++) {
            this.ipcService.send("music-queue", this.filenames[i]);
        }
    };
    ExplorerComponent.prototype.openDirectory = function (dirname) {
        this.filenames = [];
        this.dirnames = [];
        if (dirname === "..") {
            this._dirLevel--;
        }
        else {
            this._dirLevel++;
        }
        if (this._dirLevel > 0) {
            this.dirnames.push("..");
        }
        console.log(dirname);
        if (dirname === "..") {
            this.ipcService.send("music-directory-pop");
        }
        else {
            this.ipcService.send("music-directory-push", dirname);
        }
    };
    ExplorerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-music-explorer',
            template: __webpack_require__(/*! ./explorer.component.html */ "./src/app/music/explorer/explorer.component.html"),
            styles: [__webpack_require__(/*! ./explorer.component.scss */ "./src/app/music/explorer/explorer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_ipc_service__WEBPACK_IMPORTED_MODULE_2__["IpcService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], ExplorerComponent);
    return ExplorerComponent;
}());



/***/ }),

/***/ "./src/app/music/music.component.html":
/*!********************************************!*\
  !*** ./src/app/music/music.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid mdl-grid--no-spacing\">\n  <div class=\"mdl-cell mdl-cell--4-col mdl-cell--4-col-phone mdl-cell--3-col-tablet\">\n    <app-music-explorer></app-music-explorer>\n  </div>\n  <div class=\"mdl-cell mdl-cell--8-col mdl-cell--4-col-phone mdl-cell--5-col-tablet\">\n    <app-music-player></app-music-player>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/music/music.component.scss":
/*!********************************************!*\
  !*** ./src/app/music/music.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mdl-grid,\n.mdl-cell {\n  margin: 0;\n  padding: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pY2hhZWwvUGhwc3Rvcm1Qcm9qZWN0cy9DYXJFbnRlcnRhaW5tZW50L3NyYy9hcHAvbXVzaWMvbXVzaWMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsU0FBUztFQUNULFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL211c2ljL211c2ljLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1kbC1ncmlkLFxuLm1kbC1jZWxse1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/music/music.component.ts":
/*!******************************************!*\
  !*** ./src/app/music/music.component.ts ***!
  \******************************************/
/*! exports provided: MusicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicComponent", function() { return MusicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MusicComponent = /** @class */ (function () {
    function MusicComponent() {
    }
    MusicComponent.prototype.ngOnInit = function () {
    };
    MusicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-music',
            template: __webpack_require__(/*! ./music.component.html */ "./src/app/music/music.component.html"),
            styles: [__webpack_require__(/*! ./music.component.scss */ "./src/app/music/music.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MusicComponent);
    return MusicComponent;
}());



/***/ }),

/***/ "./src/app/music/player/player.component.html":
/*!****************************************************!*\
  !*** ./src/app/music/player/player.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-grid size\" style=\"margin-left: 10px\">\n  <div class=\"mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet\">\n    Playing: {{currentlyPlaying}}\n  </div>\n  <div class=\"mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet\" align=\"center\">\n    {{(currentTime / 60) | floor | number:\"1.0-0\"}}:{{(currentTime % 60) | number:\"2.0-0\"}}\n  </div>\n\n  <div class=\"mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet\">\n    <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent\"\n      (click)=\"previous()\">\n      Prev\n    </button>\n  </div>\n\n  <div class=\"mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet\">\n    <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent\"\n            *ngIf=\"playStatus === 'playing'\"\n            (click)=\"togglePlayStatus()\"\n            id=\"buttonPlay\">\n      Pause\n    </button>\n    <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent\"\n            *ngIf=\"playStatus !== 'playing'\"\n            (click)=\"togglePlayStatus()\"\n            id=\"buttonPlay\">\n      Play\n    </button>\n  </div>\n  <div class=\"mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet\">\n    <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent\"\n      (click)=\"next()\">\n      Next\n    </button>\n  </div>\n\n\n  <div class=\"mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet\">\n    Volume\n  </div>\n  <div class=\"mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet\">\n    <input class=\"mdl-slider mdl-js-slider\"\n           type=\"range\"\n           id=\"volumeSlider\"\n           min=\"0\"\n           [max]=\"maxVolume\"\n           [(ngModel)]=\"currentVolume\"\n           step=\"1\"\n           style=\"width: 100%\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/music/player/player.component.scss":
/*!****************************************************!*\
  !*** ./src/app/music/player/player.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mdl-cell {\n  padding: 10px 0 10px 0; }\n\n.mdl-button--accent.mdl-button--accent.mdl-button--raised {\n  color: white;\n  width: 100%;\n  height: 75px; }\n\n.size {\n  max-height: 380px;\n  height: 380px;\n  min-height: 380px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pY2hhZWwvUGhwc3Rvcm1Qcm9qZWN0cy9DYXJFbnRlcnRhaW5tZW50L3NyYy9hcHAvbXVzaWMvcGxheWVyL3BsYXllci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUlkO0VBQ0UsaUJBZFk7RUFlWixhQWZZO0VBZ0JaLGlCQWhCWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbXVzaWMvcGxheWVyL3BsYXllci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRoZWlnaHQ6IDM4MHB4O1xuXG4ubWRsLWNlbGx7XG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XG59XG5cbi5tZGwtYnV0dG9uLS1hY2NlbnQubWRsLWJ1dHRvbi0tYWNjZW50Lm1kbC1idXR0b24tLXJhaXNlZHtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3NXB4O1xufVxuXG5cbi5zaXple1xuICBtYXgtaGVpZ2h0OiAkaGVpZ2h0O1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG4gIG1pbi1oZWlnaHQ6ICRoZWlnaHQ7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/music/player/player.component.ts":
/*!**************************************************!*\
  !*** ./src/app/music/player/player.component.ts ***!
  \**************************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_ipc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/ipc.service */ "./src/app/service/ipc.service.ts");



var PlayerComponent = /** @class */ (function () {
    function PlayerComponent(ipcService) {
        this.ipcService = ipcService;
        this._currentlyPlaying = "";
        this._currentTime = 0;
        this._fullTime = 300;
        this._playStatus = "paused";
        this._currentVolume = 50;
        this._maxVolume = 100;
    }
    PlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ipcService.send("music-volume", this.currentVolume);
        this.ipcService.on("music-time-pos", function (event, args) {
            _this.currentTime = args;
        });
        this.ipcService.on("music-length", function (event, args) {
            _this.fullTime = args;
        });
        this.ipcService.on("music-current", function (event, args) {
            _this.currentlyPlaying = args;
        });
        this.ipcService.on("music-status", function (event, args) {
            _this.playStatus = args ? "paused" : "playing";
        });
        setInterval(function () {
            if (_this.playStatus === "playing") {
                _this.ipcService.send("music-time-pos");
                _this.ipcService.send("music-volume", _this.currentVolume);
                _this.ipcService.send("music-current");
            }
            _this.ipcService.send("music-status");
        }, 200);
        this.ipcService.send("music-length");
    };
    PlayerComponent.prototype.ngOnChanges = function (changes) {
        var buttonPlay = document.getElementById("buttonPlay");
        // @ts-ignore
        componentHandler.upgradeElement(buttonPlay);
    };
    Object.defineProperty(PlayerComponent.prototype, "currentlyPlaying", {
        get: function () {
            return this._currentlyPlaying;
        },
        set: function (value) {
            this._currentlyPlaying = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerComponent.prototype, "currentTime", {
        get: function () {
            return this._currentTime;
        },
        set: function (value) {
            this._currentTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerComponent.prototype, "fullTime", {
        get: function () {
            return this._fullTime;
        },
        set: function (value) {
            this._fullTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerComponent.prototype, "playStatus", {
        get: function () {
            return this._playStatus;
        },
        set: function (value) {
            this._playStatus = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerComponent.prototype, "currentVolume", {
        get: function () {
            return this._currentVolume;
        },
        set: function (value) {
            this._currentVolume = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerComponent.prototype, "maxVolume", {
        get: function () {
            return this._maxVolume;
        },
        set: function (value) {
            this._maxVolume = value;
        },
        enumerable: true,
        configurable: true
    });
    PlayerComponent.prototype.togglePlayStatus = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.playStatus === 'playing') {
                _this.playStatus = 'paused';
                _this.ipcService.send("music-play-pause");
            }
            else {
                _this.playStatus = 'playing';
                _this.ipcService.send("music-play-pause");
            }
            setTimeout(function () {
                var buttonPlay = document.getElementById("buttonPlay");
                // @ts-ignore
                componentHandler.upgradeElement(buttonPlay);
            }, 100);
        }, 300);
    };
    PlayerComponent.prototype.previous = function () {
        this.ipcService.send("music-previous");
    };
    PlayerComponent.prototype.next = function () {
        this.ipcService.send("music-next");
    };
    PlayerComponent.prototype.seek = function () {
        this.ipcService.send("music-seek", this.currentTime);
    };
    PlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-music-player',
            template: __webpack_require__(/*! ./player.component.html */ "./src/app/music/player/player.component.html"),
            styles: [__webpack_require__(/*! ./player.component.scss */ "./src/app/music/player/player.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_ipc_service__WEBPACK_IMPORTED_MODULE_2__["IpcService"]])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "./src/app/pipe/floor.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipe/floor.pipe.ts ***!
  \************************************/
/*! exports provided: FloorPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloorPipe", function() { return FloorPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FloorPipe = /** @class */ (function () {
    function FloorPipe() {
    }
    FloorPipe.prototype.transform = function (value) {
        return Math.floor(value);
    };
    FloorPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'floor'
        })
    ], FloorPipe);
    return FloorPipe;
}());



/***/ }),

/***/ "./src/app/service/ipc.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/ipc.service.ts ***!
  \****************************************/
/*! exports provided: IpcService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpcService", function() { return IpcService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IpcService = /** @class */ (function () {
    function IpcService() {
        this.ipc = void 0;
        // @ts-ignore
        if (window.require) {
            try {
                // @ts-ignore
                this.ipc = window.require('electron').ipcRenderer;
            }
            catch (e) {
                console.warn('Electron\'s IPC was not loaded');
            }
        }
    }
    IpcService.prototype.on = function (channel, listener) {
        if (this.ipc) {
            this.ipc.on(channel, listener);
        }
    };
    IpcService.prototype.send = function (channel) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _a;
        if (this.ipc) {
            (_a = this.ipc).send.apply(_a, [channel].concat(args));
        }
    };
    IpcService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IpcService);
    return IpcService;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/michael/PhpstormProjects/CarEntertainment/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map