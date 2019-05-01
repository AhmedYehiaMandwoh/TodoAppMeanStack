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
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");







var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] }
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <app-navbar></app-navbar>\n  <router-outlet></router-outlet>\n"

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
        this.title = 'angular-src';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                ng_flash_messages__WEBPACK_IMPORTED_MODULE_15__["NgFlashMessagesModule"]
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_14__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Footer */\r\n#footer{\r\n    background-color: rgb(57, 34, 34);\r\n    color: #a59c9c;\r\n    margin-top: 50px;\r\n}\r\n.footer{\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n    margin-top: 10px;\r\n    font-family: 'Quicksand', sans-serif;\r\n    opacity: 0.8;\r\n    text-align: center\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVztBQUNYO0lBQ0ksaUNBQWlDO0lBQ2pDLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1o7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEZvb3RlciAqL1xyXG4jZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU3LCAzNCwgMzQpO1xyXG4gICAgY29sb3I6ICNhNTljOWM7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcbi5mb290ZXJ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gICAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <p class=\"footer\">&copy;Copyright By Ahmed Yehia In 2019 All Right Reserved</p>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Header */\r\n#header{\r\n    background-image: url('header.jpg');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    height: 600px;\r\n}\r\n.header{\r\n    margin-top: 100px;\r\n}\r\n.heading{\r\n    font-size: 6rem;\r\n    font-weight: bold;\r\n    font-family: 'Quicksand', sans-serif;\r\n    color: #ffffff;\r\n}\r\n.header-text{\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n    font-family: 'Quicksand', sans-serif;\r\n    color: #ffffff;\r\n    width: 400px;\r\n}\r\n.txt-type{\r\n    color: #ff8282;\r\n}\r\n.btn-primary {\r\n    color: #fff;\r\n    background-color: transparent;\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    padding: 5px 74px;\r\n    border-color: #fff;\r\n    transition: all 0.3s ease-in-out;\r\n    font-family: 'Quicksand', sans-serif;\r\n    border-radius: 2px;\r\n    margin-top: 30px;  \r\n    text-transform: uppercase;\r\n}\r\n.overlay{\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(15, 15, 15, 0.8)\r\n}\r\n.btn-primary:hover{\r\n    background-color: #ff8282;\r\n    color: #fff;\r\n    border-color: #ff8282;\r\n}\r\n.btn-primary:focus\r\n {\r\n    box-shadow: none;\r\n}\r\n.btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus, .show>.btn-primary.dropdown-toggle:focus {\r\n    box-shadow: none;\r\n}\r\n.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show>.btn-primary.dropdown-toggle {\r\n    color: #676363;\r\n    background-color: #f8f9fa;\r\n    border-color: rgb(199, 196, 196);\r\n}\r\n/* Media */\r\n@media (max-width: 575.98px) { \r\n    .header{\r\n        margin-top: 200px;\r\n    } \r\n    \r\n    header{\r\n        margin-top: 50px;\r\n    } \r\n    \r\n    .heading{\r\n        font-size: 2rem;\r\n    }\r\n    \r\n    .header-text{\r\n        font-size: 1rem;\r\n    }\r\n    .txt-type{\r\n        color: #ff8282;\r\n    }\r\n    .btn-primary{\r\n        padding: 5px 50px;\r\n    }\r\n }\r\n@media (min-width: 576px) and (max-width: 767.98px) { \r\n    .header{\r\n        margin-top: 200px;\r\n    }  \r\n    header{\r\n        margin-top: 80px;\r\n    } \r\n    \r\n    .heading{\r\n        font-size: 2rem;\r\n    }\r\n    \r\n    .header-text{\r\n        font-size: 1rem;\r\n    }\r\n    .txt-type{\r\n        color: #ff8282;\r\n    }\r\n    .btn-primary{\r\n        padding: 5px 60px;\r\n    }\r\n  }\r\n@media (min-width: 768px) and (max-width: 991.98px) { \r\n    .header{\r\n        margin-top: 200px;\r\n    }   \r\n    header{\r\n        margin-top: 80px;\r\n    } \r\n    \r\n    .heading{\r\n        font-size: 3rem;\r\n    }\r\n    \r\n    .header-text{\r\n        font-size: 1rem;\r\n    }\r\n    .txt-type{\r\n        color: #ff8282;\r\n    }\r\n    .btn-primary{\r\n        padding: 5px 70px;\r\n    }\r\n   }\r\n/* subscribe */\r\n.subscribe{\r\n    margin: 20px 20px;\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n    font-family: 'Quicksand', sans-serif;\r\n    color: #5a5454;\r\n}\r\nlabel{\r\n    margin-bottom: 15px;\r\n}\r\n.subscribe-us::-webkit-input-placeholder {\r\n    color: rgb(156, 153, 153);\r\n    opacity: 0.7;\r\n}\r\n.subscribe-us:focus {\r\n    color: #695b5b;\r\n    background-color: transparent;\r\n    border-color: none; \r\n    outline: none;\r\n    box-shadow: none;\r\n    border-bottom: 1px solid #d34949;\r\n    \r\n}\r\n.subscribe-us{\r\n    background-color: rgba(42, 18, 17, 0);\r\n    color: #857a7a;\r\n    opacity: 0.8;\r\n    border: none;\r\n    border-bottom: 1px solid #5e5757;\r\n    border-radius: 0;\r\n    \r\n}\r\n/* Main */\r\n#main {\r\n    margin-top: 100px;\r\n\r\n}\r\n/* How We Work */\r\n.how-we-work,\r\n.work-images{\r\n    margin-bottom: 100px;\r\n}\r\n.work-header {\r\n    font-size: 27px;\r\n    font-weight: 400;\r\n    margin-top: 30px;\r\n    font-family: 'Quicksand', sans-serif;\r\n    color: #ff8282;\r\n}\r\n.work-text{\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n    margin-top: 30px;\r\n    font-family: 'Quicksand', sans-serif;\r\n    color: rgb(117, 117, 117);\r\n    opacity: 0.8\r\n}\r\n.btn-secondary {\r\n    color: #fc6060;\r\n    background-color: #ffffff;\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    padding: 5px 14px;\r\n    border-color: #ff8282;\r\n    transition: all 0.3s ease-in-out;\r\n    font-family: 'Quicksand', sans-serif;\r\n    border-radius: 2px;\r\n    margin-top: 30px;\r\n}\r\n.btn-secondary:hover{\r\n    background-color: #ff8282;\r\n    color: #ffffff;\r\n    border-color: #ff8282;\r\n}\r\n.btn-secondary:focus\r\n {\r\n    box-shadow: none;\r\n}\r\n.btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus, .show>.btn-primary.dropdown-toggle:focus {\r\n    box-shadow: none;\r\n}\r\n.btn-secondary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show>.btn-primary.dropdown-toggle {\r\n    color: #676363;\r\n    background-color: #f8f9fa;\r\n    border-color: rgb(199, 196, 196);\r\n}\r\n/* Carousel Slider */\r\n.carousel{\r\n    transition: all 0.3s ease-in-out;\r\n    cursor: pointer;\r\n    \r\n}\r\n.carousel:hover{\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1)\r\n    \r\n\r\n}\r\n.carousel-img{\r\n    width: 400px;\r\n\r\n}\r\n.carousel-caption{\r\n    top: 200px;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(238, 93, 93, 0.8) ;\r\n    transition: all 0.3s ease-in-out;\r\n    border-radius: 2px\r\n}\r\n.carousel-caption:hover{\r\n    background-color: rgba(48, 48, 48, 0.6);;\r\n    top: 0;\r\n\r\n}\r\n.caption-header{\r\n    font-size: 19px;\r\n    font-weight: bold;\r\n    margin: 5px;\r\n    font-family: 'Quicksand', sans-serif;\r\n    color: #ffffff;\r\n    font-weight: 400;\r\n\r\n}\r\n/* Workers */\r\n.workers-one,\r\n.workers-two{\r\n    margin-top: 50px;\r\n    margin-bottom: 50px;\r\n    margin-right: 15px;\r\n    height: 200px;\r\n}\r\n.img-workers-one,\r\n.img-workers-two{\r\n    width: 400px;\r\n}\r\n.workers-one{\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 40%;\r\n    background-color: rgba(48, 48, 48, 0.6);\r\n    transition: all 0.3s ease-in-out;\r\n    border-radius: 2px\r\n}\r\n.workers-one:hover{\r\n    background-color: rgba(238, 93, 93, 0.8) ;\r\n    height: 80%;\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1)\r\n\r\n}\r\n.workers-two{\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    width: 20%;\r\n    height: 80%;\r\n    background-color: rgba(238, 93, 93, 0.8);\r\n    transition: all 0.3s ease-in-out;\r\n    border-radius: 2px;\r\n    margin-left: 10px;\r\n}\r\n.workers-two:hover{\r\n    background-color: rgba(48, 48, 48, 0.6);\r\n    width: 90%;\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1)\r\n\r\n}\r\n/* Media */\r\n@media (max-width: 575.98px) {\r\n    .how-we-work{\r\n        margin-bottom: 10px;\r\n        margin-left: 15px;\r\n        margin-right: 15px;\r\n    }\r\n    .carousel-inner{\r\n        margin-top: 50px;\r\n    }\r\n    .carousel{\r\n        margin-top: 50px;\r\n        margin-left: 15px;\r\n        margin-right: 15px;\r\n\r\n    }\r\n}\r\n/* Our-Services */\r\n.our-services {\r\n    margin-top: 100px;\r\n}\r\n.our-services-header{\r\n    font-size: 27px;\r\n    font-weight: 400;\r\n    margin-top: 30px;\r\n    font-family: 'Quicksand', sans-serif;\r\n    color: #ff8282;\r\n    position: relative;\r\n    \r\n}\r\n.our-services-header:after{\r\n    content: \"\";\r\n    top: 36px;\r\n    left: 46%;\r\n    width: 8%;\r\n    height: 1px;\r\n    border-radius: 10px;\r\n    background-color: #dde0e9;\r\n    position: absolute;\r\n}\r\n/* Comments */\r\n.comments {\r\n    border-left: 2px solid #CCC;\r\n    padding: 0 20px 0 28px;\r\n    margin-top: 30px;\r\n\r\n}\r\n.our-services-text {\r\n    background-color: #FFF;\r\n    color: rgb(117, 117, 117);\r\n    padding: 30px;\r\n    font-size: 16px;\r\n    font-family: 'Quicksand', sans-serif;\r\n    border: 1px solid #CCC;\r\n    line-height: 1.7;\r\n    position: relative;\r\n    font-weight: 400;\r\n    margin-top: 30px;\r\n    opacity: 0.8;\r\n    cursor: pointer;\r\n    border-radius: 17px;\r\n \r\n}\r\n.our-services-text:hover{\r\n    background-color: rgba(238, 93, 93, 0.8);\r\n    color: rgb(250, 246, 246);\r\n    opacity: 1\r\n\r\n}\r\n.our-services-text:before {\r\n    content: \"\";\r\n    display: block;\r\n    width: 20px;\r\n    height: 20px;\r\n    border-radius: 50%;\r\n    background-color: rgba(187, 179, 176, 0.4);\r\n    border: 4px solid rgba(240, 101, 101, 0.8);\r\n    position: absolute;\r\n    top: 10px;\r\n    left: -40px;\r\n    box-shadow: 1px 1px 3px 1px rgb(180, 117, 117),\r\n    -1px -1px 3px 1px rgb(180, 117, 117)\r\n}\r\n.our-services-text:after {\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    border-style: solid;\r\n    border-color: transparent #ff8282 transparent transparent;\r\n    border-width: 8px;\r\n    position: absolute;\r\n    left: -17px;\r\n    top: 13px\r\n}\r\n/* media */\r\n@media (max-width: 575.98px) {\r\n    .comments {\r\n        margin-left: 10px;\r\n    }\r\n}\r\n/* Our Projects */\r\n#our-projects{\r\n    margin-top: 80px;\r\n    text-align: center;\r\n}\r\n.our-projects-header {\r\n    font-size: 27px;\r\n    font-weight: 400;\r\n    margin-bottom: 30px;\r\n    font-family: 'Quicksand', sans-serif;\r\n    color: #ff8282;\r\n    position: relative\r\n}\r\n.our-projects-header:after{\r\n    content: \"\";\r\n    top: 36px;\r\n    left: 46%;\r\n    width: 8%;\r\n    height: 1px;\r\n    border-radius: 10px;\r\n    background-color: #dde0e9;\r\n    position: absolute;\r\n}\r\n.our-projects-text{\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n    margin-top: 30px;\r\n    font-family: 'Quicksand', sans-serif;\r\n    color: rgb(117, 117, 117);\r\n    opacity: 0.8\r\n}\r\n.projects-img{\r\n    transition: all 0.5s ease-in-out;\r\n   -webkit-animation: movetranslate 6s infinite;\r\n           animation: movetranslate 6s infinite\r\n}\r\n.projects-img:hover{\r\n    -webkit-transform: translate(0,10px);\r\n            transform: translate(0,10px)\r\n}\r\n@-webkit-keyframes movetranslate {\r\n    0%{\r\n        -webkit-transform: translate(0,0);\r\n                transform: translate(0,0)\r\n    }\r\n    50%{\r\n        \r\n        -webkit-transform: translate(0,20px);\r\n        \r\n                transform: translate(0,20px) \r\n    }\r\n    100%{\r\n        -webkit-transform: translate(0,0);\r\n                transform: translate(0,0)\r\n    }\r\n}\r\n@keyframes movetranslate {\r\n    0%{\r\n        -webkit-transform: translate(0,0);\r\n                transform: translate(0,0)\r\n    }\r\n    50%{\r\n        \r\n        -webkit-transform: translate(0,20px);\r\n        \r\n                transform: translate(0,20px) \r\n    }\r\n    100%{\r\n        -webkit-transform: translate(0,0);\r\n                transform: translate(0,0)\r\n    }\r\n}\r\n.projects-img img{\r\n    width: 100%;\r\n}\r\n/* Book */\r\n.book-design {\r\n    background-image: url('book.jpg');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n    margin-top: 120px;\r\n}\r\n.over-lay{\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(35, 5, 5, 0.8);\r\n    \r\n}\r\n.book-heading{\r\n    font-size: 27px;\r\n    font-weight: 400;\r\n    margin-bottom: 30px;\r\n    font-family: 'Quicksand', sans-serif;\r\n    color: #ff8282;\r\n    position: relative\r\n}\r\n.book-heading:after{\r\n    content: \"\";\r\n    top: 36px;\r\n    left: 46%;\r\n    width: 8%;\r\n    height: 1px;\r\n    border-radius: 10px;\r\n    background-color: #887977;\r\n    position: absolute;\r\n}\r\n.book-header{\r\n    margin: 80px 30px 20px 50px ;\r\n    font-size: 27px;\r\n    font-weight: bolder;\r\n    font-family: 'Quicksand', sans-serif;\r\n    color: #cacaca;\r\n}\r\n.span-book{\r\n    font-weight: normal;\r\n    font-family: 'Quicksand', sans-serif;\r\n    color: #ff8282;\r\n}\r\n.form-group{\r\n    margin: 20px 20px;\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n    font-family: 'Quicksand', sans-serif;\r\n    color: #cacaca;\r\n}\r\nlabel{\r\n    margin-bottom: 15px;\r\n}\r\ninput::-webkit-input-placeholder {\r\n    color: rgb(177, 175, 175);\r\n    opacity: 0.7;\r\n}\r\n.form-control:focus {\r\n    color: #fbfbfb;\r\n    background-color: transparent;\r\n    border-color: none; \r\n    outline: none;\r\n    box-shadow: none;\r\n    border-bottom: 1px solid #d34949;\r\n    \r\n}\r\ninput{\r\n    background-color: rgba(42, 18, 17, 0);\r\n    color: #fbfbfb;\r\n    opacity: 0.8;\r\n    border: none;\r\n    border-bottom: 1px solid rgb(255, 255, 255);\r\n    border-radius: 0;\r\n    \r\n}\r\n/* Media */\r\n@media (max-width: 575.98px) {\r\n    .book-heading{\r\n        margin-bottom: 20px;\r\n    }\r\n    .book-header{\r\n        margin-top: 20px;\r\n\r\n    }\r\n}\r\n@media (min-width: 576px) and (max-width: 767.98px) { \r\n    .book-heading{\r\n        margin-bottom: 20px;\r\n    }\r\n    .book-header{\r\n        margin-top: 20px;\r\n\r\n    }\r\n }\r\n@media (min-width: 768px) and (max-width: 991.98px) { \r\n    .book-heading{\r\n        margin-bottom: 30px;\r\n    }\r\n    .book-header{\r\n        margin-top: 20px;\r\n\r\n    }\r\n }\r\n/* Our-Team */\r\n.our-team{\r\n    padding-top: 80px;\r\n    padding-bottom: 80px;\r\n    background-color: rgba(36, 10, 10, 0.9);\r\n}\r\n.our-team-header{\r\n    font-size: 27px;\r\n    font-weight: 400;\r\n    margin-bottom: 30px;\r\n    font-family: 'Quicksand', sans-serif;\r\n    color: #ff8282;\r\n    position: relative\r\n}\r\n.our-team-header:before{\r\n    content: \"\";\r\n    top: 36px;\r\n    left: 46%;\r\n    width: 8%;\r\n    height: 1px;\r\n    border-radius: 10px;\r\n    background-color: #887977;\r\n    position: absolute;\r\n\r\n}\r\n.our-team-header:after{\r\n    content: \"\";\r\n    top: 70px;\r\n    left: 50%;\r\n    width: 1px;\r\n    height: 150px;\r\n    border-radius: 10px;\r\n    background-color: #c35a5a;\r\n    position: absolute;\r\n}\r\n.img-team{\r\n    border: 3px solid rgba(187, 105, 109, 0.7);\r\n    border-radius: 50%;\r\n    padding: 15px;\r\n    margin-top: 10px;\r\n    transition: all 0.4s ease-in-out;\r\n    cursor: pointer;\r\n    -webkit-animation: moving 2s infinite;\r\n            animation: moving 2s infinite\r\n}\r\n@-webkit-keyframes moving {\r\n    0%{\r\n        border: 3px solid rgba(187, 105, 109, 0.7);\r\n \r\n    }\r\n    25%{\r\n        border: 3px solid rgba(150, 136, 136, 0.7);\r\n        box-shadow: 1px 1px 3px 1px rgb(180, 117, 117),\r\n        -1px -1px 3px 1px rgb(180, 117, 117)\r\n    }\r\n  \r\n    \r\n}\r\n@keyframes moving {\r\n    0%{\r\n        border: 3px solid rgba(187, 105, 109, 0.7);\r\n \r\n    }\r\n    25%{\r\n        border: 3px solid rgba(150, 136, 136, 0.7);\r\n        box-shadow: 1px 1px 3px 1px rgb(180, 117, 117),\r\n        -1px -1px 3px 1px rgb(180, 117, 117)\r\n    }\r\n  \r\n    \r\n}\r\n.img-team:hover{\r\n    padding: 5px;\r\n}\r\n.media{\r\n    text-decoration: none;\r\n    padding: 10px;\r\n    margin-top: 5px;\r\n    display: contents\r\n}\r\n.media .fab  {\r\n    margin: 5px;\r\n    border: 1px solid #716b6b;\r\n    border-radius: 50%;\r\n    padding: 10px;\r\n    color: rgb(85, 81, 81)\r\n}\r\n.media .fab:hover{\r\n    background-color: #ff8282;\r\n    color: #ffffff;\r\n    border-color: #ff8282;\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n.team-name{\r\n    font-size: 20px;\r\n    margin-top: 20px;\r\n    font-family: 'Quicksand', sans-serif;\r\n    color: #a56868;\r\n}\r\n.team-text{\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n    margin-top: 30px;\r\n    font-family: 'Quicksand', sans-serif;\r\n    color: rgb(117, 117, 117);\r\n    opacity: 0.8\r\n}\r\n/* Contact US */\r\n#contact-us{\r\n    margin-top: 100px;\r\n}\r\n.contact{\r\n    margin: 20px 20px;\r\n    font-size: 20px;\r\n    font-weight: 400;\r\n    font-family: 'Quicksand', sans-serif;\r\n    color: #5a5454;\r\n}\r\nlabel{\r\n    margin-bottom: 15px;\r\n}\r\n.contact-input::-webkit-input-placeholder {\r\n    color: rgb(156, 153, 153);\r\n    opacity: 0.7;\r\n}\r\n.contact-input:focus {\r\n    color: #695b5b;\r\n    background-color: transparent;\r\n    border-color: none; \r\n    outline: none;\r\n    box-shadow: none;\r\n    border-bottom: 1px solid #d34949;\r\n    \r\n}\r\n.contact-input{\r\n    background-color: rgba(42, 18, 17, 0);\r\n    color: #857a7a;\r\n    opacity: 0.8;\r\n    border: none;\r\n    border-bottom: 1px solid #e2c0c0;\r\n    border-radius: 0;\r\n    \r\n}\r\n.btn-dark {\r\n    color: #ff8282;\r\n    background-color: transparent;\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    padding: 5px 74px;\r\n    border-color: #ff8282;\r\n    transition: all 0.3s ease-in-out;\r\n    font-family: 'Quicksand', sans-serif;\r\n    border-radius: 2px;\r\n    margin-top: 30px;  \r\n    text-transform: uppercase;\r\n    float: right;\r\n}\r\n.btn-dark:hover{\r\n    background-color: #ff8282;\r\n    color: rgb(251, 251, 251)\r\n\r\n}\r\n.btn-dark:focus\r\n {\r\n    box-shadow: none;\r\n}\r\n.btn-dark:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus, .show>.btn-primary.dropdown-toggle:focus {\r\n    box-shadow: none;\r\n}\r\n.btn-dark:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show>.btn-primary.dropdown-toggle {\r\n    color: #676363;\r\n    background-color: #f8f9fa;\r\n    border-color: rgb(199, 196, 196);\r\n}\r\n/* Flash Message */\r\nng-flash-message{\r\n    font-size: 16px;\r\n    padding: 5px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFXO0FBQ1g7SUFDSSxtQ0FBcUQ7SUFDckQsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQ0FBb0M7SUFDcEMsY0FBYztBQUNsQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMsY0FBYztJQUNkLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBSWxCLGdDQUFnQztJQUNoQyxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaO0FBQ0o7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCO0FBQ0E7O0lBRUksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsZ0NBQWdDO0FBQ3BDO0FBRUEsVUFBVTtBQUNWO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0NBQ0g7QUFDQTtJQUNHO1FBQ0ksaUJBQWlCO0lBQ3JC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O0lBQ1osZ0NBQWdDO0lBQ2hDLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIscUJBQXFCO0lBSXJCLGdDQUFnQztJQUNoQyxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCOztBQUVKO0FBQ0E7O0lBRUksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsZ0NBQWdDO0FBQ3BDO0FBQ0Esa0JBQWtCO0FBQ2xCO0lBQ0ksZUFBZTtJQUNmLFlBQVk7O0FBRWhCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEhlYWRlciAqL1xyXG4jaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvaGVhZGVyLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxufSBcclxuXHJcbi5oZWFkaW5ne1xyXG4gICAgZm9udC1zaXplOiA2cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmhlYWRlci10ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG59XHJcbi50eHQtdHlwZXtcclxuICAgIGNvbG9yOiAjZmY4MjgyO1xyXG59XHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHBhZGRpbmc6IDVweCA3NHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDsgIFxyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLm92ZXJsYXl7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUsIDE1LCAxNSwgMC44KVxyXG59ICAgIFxyXG5cclxuLmJ0bi1wcmltYXJ5OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODI4MjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmY4MjgyO1xyXG59XHJcbi5idG4tcHJpbWFyeTpmb2N1c1xyXG4ge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzLCAuYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlOmZvY3VzLCAuc2hvdz4uYnRuLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5idG4tcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsIC5zaG93Pi5idG4tcHJpbWFyeS5kcm9wZG93bi10b2dnbGUge1xyXG4gICAgY29sb3I6ICM2NzYzNjM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMTk5LCAxOTYsIDE5Nik7XHJcbn1cclxuXHJcbi8qIE1lZGlhICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkgeyBcclxuICAgIC5oZWFkZXJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbiAgICB9IFxyXG4gICAgXHJcbiAgICBoZWFkZXJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIH0gXHJcbiAgICBcclxuICAgIC5oZWFkaW5ne1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmhlYWRlci10ZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuICAgIC50eHQtdHlwZXtcclxuICAgICAgICBjb2xvcjogI2ZmODI4MjtcclxuICAgIH1cclxuICAgIC5idG4tcHJpbWFyeXtcclxuICAgICAgICBwYWRkaW5nOiA1cHggNTBweDtcclxuICAgIH1cclxuIH1cclxuIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7IFxyXG4gICAgLmhlYWRlcntcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICAgIH0gIFxyXG4gICAgaGVhZGVye1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICB9IFxyXG4gICAgXHJcbiAgICAuaGVhZGluZ3tcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5oZWFkZXItdGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICAudHh0LXR5cGV7XHJcbiAgICAgICAgY29sb3I6ICNmZjgyODI7XHJcbiAgICB9XHJcbiAgICAuYnRuLXByaW1hcnl7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDYwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7IFxyXG4gICAgLmhlYWRlcntcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICAgIH0gICBcclxuICAgIGhlYWRlcntcclxuICAgICAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gICAgfSBcclxuICAgIFxyXG4gICAgLmhlYWRpbmd7XHJcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaGVhZGVyLXRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgLnR4dC10eXBle1xyXG4gICAgICAgIGNvbG9yOiAjZmY4MjgyO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1wcmltYXJ5e1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCA3MHB4O1xyXG4gICAgfVxyXG4gICB9XHJcbiAgIC8qIHN1YnNjcmliZSAqL1xyXG4uc3Vic2NyaWJle1xyXG4gICAgbWFyZ2luOiAyMHB4IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICM1YTU0NTQ7XHJcbn1cclxubGFiZWx7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5zdWJzY3JpYmUtdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHJnYigxNTYsIDE1MywgMTUzKTtcclxuICAgIG9wYWNpdHk6IDAuNztcclxufVxyXG4uc3Vic2NyaWJlLXVzOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjNjk1YjViO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItY29sb3I6IG5vbmU7IFxyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QzNDk0OTtcclxuICAgIFxyXG59XHJcbi5zdWJzY3JpYmUtdXN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCAxOCwgMTcsIDApO1xyXG4gICAgY29sb3I6ICM4NTdhN2E7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzVlNTc1NztcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBcclxufVxyXG4vKiBNYWluICovXHJcbiNtYWluIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG5cclxufVxyXG4vKiBIb3cgV2UgV29yayAqL1xyXG4uaG93LXdlLXdvcmssXHJcbi53b3JrLWltYWdlc3tcclxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG59XHJcblxyXG4ud29yay1oZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogI2ZmODI4MjtcclxufVxyXG4ud29yay10ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogcmdiKDExNywgMTE3LCAxMTcpO1xyXG4gICAgb3BhY2l0eTogMC44XHJcbn1cclxuLmJ0bi1zZWNvbmRhcnkge1xyXG4gICAgY29sb3I6ICNmYzYwNjA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHBhZGRpbmc6IDVweCAxNHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmY4MjgyO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4uYnRuLXNlY29uZGFyeTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjgyODI7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmODI4MjtcclxufVxyXG4uYnRuLXNlY29uZGFyeTpmb2N1c1xyXG4ge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uYnRuLXNlY29uZGFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMsIC5idG4tcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmU6Zm9jdXMsIC5zaG93Pi5idG4tcHJpbWFyeS5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmJ0bi1zZWNvbmRhcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLCAuc2hvdz4uYnRuLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlIHtcclxuICAgIGNvbG9yOiAjNjc2MzYzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDE5OSwgMTk2LCAxOTYpO1xyXG59XHJcblxyXG4vKiBDYXJvdXNlbCBTbGlkZXIgKi9cclxuLmNhcm91c2Vse1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgXHJcbn1cclxuLmNhcm91c2VsOmhvdmVye1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpXHJcbiAgICBcclxuXHJcbn1cclxuLmNhcm91c2VsLWltZ3tcclxuICAgIHdpZHRoOiA0MDBweDtcclxuXHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jYXB0aW9ue1xyXG4gICAgdG9wOiAyMDBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzgsIDkzLCA5MywgMC44KSA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHhcclxufVxyXG4uY2Fyb3VzZWwtY2FwdGlvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDgsIDQ4LCA0OCwgMC42KTs7XHJcbiAgICB0b3A6IDA7XHJcblxyXG59XHJcbi5jYXB0aW9uLWhlYWRlcntcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG59XHJcbi8qIFdvcmtlcnMgKi9cclxuLndvcmtlcnMtb25lLFxyXG4ud29ya2Vycy10d297XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuLmltZy13b3JrZXJzLW9uZSxcclxuLmltZy13b3JrZXJzLXR3b3tcclxuICAgIHdpZHRoOiA0MDBweDtcclxufVxyXG4ud29ya2Vycy1vbmV7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0OCwgNDgsIDQ4LCAwLjYpOztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweFxyXG59XHJcbi53b3JrZXJzLW9uZTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM4LCA5MywgOTMsIDAuOCkgO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSlcclxuXHJcbn1cclxuXHJcbi53b3JrZXJzLXR3b3tcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM4LCA5MywgOTMsIDAuOCk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4ud29ya2Vycy10d286aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ4LCA0OCwgNDgsIDAuNik7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpXHJcblxyXG59XHJcbi8qIE1lZGlhICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcclxuICAgIC5ob3ctd2Utd29ya3tcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIH1cclxuICAgIC5jYXJvdXNlbC1pbm5lcntcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLmNhcm91c2Vse1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuLyogT3VyLVNlcnZpY2VzICovXHJcbi5vdXItc2VydmljZXMge1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuLm91ci1zZXJ2aWNlcy1oZWFkZXJ7XHJcbiAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjZmY4MjgyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgXHJcbn1cclxuLm91ci1zZXJ2aWNlcy1oZWFkZXI6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgdG9wOiAzNnB4O1xyXG4gICAgbGVmdDogNDYlO1xyXG4gICAgd2lkdGg6IDglO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZTBlOTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuXHJcbi8qIENvbW1lbnRzICovXHJcbi5jb21tZW50cyB7XHJcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNDQ0M7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHggMCAyOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuXHJcbn1cclxuXHJcbi5vdXItc2VydmljZXMtdGV4dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgY29sb3I6IHJnYigxMTcsIDExNywgMTE3KTtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTdweDtcclxuIFxyXG59XHJcbi5vdXItc2VydmljZXMtdGV4dDpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM4LCA5MywgOTMsIDAuOCk7XHJcbiAgICBjb2xvcjogcmdiKDI1MCwgMjQ2LCAyNDYpO1xyXG4gICAgb3BhY2l0eTogMVxyXG5cclxufVxyXG4ub3VyLXNlcnZpY2VzLXRleHQ6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODcsIDE3OSwgMTc2LCAwLjQpO1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgyNDAsIDEwMSwgMTAxLCAwLjgpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogLTQwcHg7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAxcHggcmdiKDE4MCwgMTE3LCAxMTcpLFxyXG4gICAgLTFweCAtMXB4IDNweCAxcHggcmdiKDE4MCwgMTE3LCAxMTcpXHJcbn1cclxuXHJcbi5vdXItc2VydmljZXMtdGV4dDphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZmY4MjgyIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXdpZHRoOiA4cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtMTdweDtcclxuICAgIHRvcDogMTNweFxyXG59XHJcblxyXG4vKiBtZWRpYSAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcclxuICAgIC5jb21tZW50cyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuLyogT3VyIFByb2plY3RzICovXHJcbiNvdXItcHJvamVjdHN7XHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5vdXItcHJvamVjdHMtaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICNmZjgyODI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxufVxyXG4ub3VyLXByb2plY3RzLWhlYWRlcjphZnRlcntcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB0b3A6IDM2cHg7XHJcbiAgICBsZWZ0OiA0NiU7XHJcbiAgICB3aWR0aDogOCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRlMGU5O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5vdXItcHJvamVjdHMtdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHJnYigxMTcsIDExNywgMTE3KTtcclxuICAgIG9wYWNpdHk6IDAuOFxyXG59XHJcbi5wcm9qZWN0cy1pbWd7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgIGFuaW1hdGlvbjogbW92ZXRyYW5zbGF0ZSA2cyBpbmZpbml0ZVxyXG59XHJcbi5wcm9qZWN0cy1pbWc6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDEwcHgpXHJcbn1cclxuQGtleWZyYW1lcyBtb3ZldHJhbnNsYXRlIHtcclxuICAgIDAle1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMClcclxuICAgIH1cclxuICAgIDUwJXtcclxuICAgICAgICBcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDIwcHgpIFxyXG4gICAgfVxyXG4gICAgMTAwJXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApXHJcbiAgICB9XHJcbn1cclxuLnByb2plY3RzLWltZyBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi8qIEJvb2sgKi9cclxuLmJvb2stZGVzaWduIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL2Jvb2suanBnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIG1hcmdpbi10b3A6IDEyMHB4O1xyXG59XHJcbi5vdmVyLWxheXtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNSwgNSwgNSwgMC44KTtcclxuICAgIFxyXG59XHJcbi5ib29rLWhlYWRpbmd7XHJcbiAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjZmY4MjgyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbn1cclxuLmJvb2staGVhZGluZzphZnRlcntcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB0b3A6IDM2cHg7XHJcbiAgICBsZWZ0OiA0NiU7XHJcbiAgICB3aWR0aDogOCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg3OTc3O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uYm9vay1oZWFkZXJ7XHJcbiAgICBtYXJnaW46IDgwcHggMzBweCAyMHB4IDUwcHggO1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjY2FjYWNhO1xyXG59XHJcbi5zcGFuLWJvb2t7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICNmZjgyODI7XHJcbn1cclxuLmZvcm0tZ3JvdXB7XHJcbiAgICBtYXJnaW46IDIwcHggMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogI2NhY2FjYTtcclxufVxyXG5sYWJlbHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHJnYigxNzcsIDE3NSwgMTc1KTtcclxuICAgIG9wYWNpdHk6IDAuNztcclxufVxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjZmJmYmZiO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItY29sb3I6IG5vbmU7IFxyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QzNDk0OTtcclxuICAgIFxyXG59XHJcbmlucHV0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MiwgMTgsIDE3LCAwKTtcclxuICAgIGNvbG9yOiAjZmJmYmZiO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBcclxufVxyXG4vKiBNZWRpYSAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcclxuICAgIC5ib29rLWhlYWRpbmd7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICAgIC5ib29rLWhlYWRlcntcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjcuOThweCkgeyBcclxuICAgIC5ib29rLWhlYWRpbmd7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICAgIC5ib29rLWhlYWRlcntcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAgIH1cclxuIH1cclxuIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7IFxyXG4gICAgLmJvb2staGVhZGluZ3tcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLmJvb2staGVhZGVye1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gICAgfVxyXG4gfVxyXG5cclxuLyogT3VyLVRlYW0gKi9cclxuLm91ci10ZWFte1xyXG4gICAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzYsIDEwLCAxMCwgMC45KTtcclxufVxyXG4ub3VyLXRlYW0taGVhZGVye1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogI2ZmODI4MjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG59XHJcbi5vdXItdGVhbS1oZWFkZXI6YmVmb3Jle1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHRvcDogMzZweDtcclxuICAgIGxlZnQ6IDQ2JTtcclxuICAgIHdpZHRoOiA4JTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ODc5Nzc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG59XHJcblxyXG4ub3VyLXRlYW0taGVhZGVyOmFmdGVye1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHRvcDogNzBweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMzVhNWE7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5pbWctdGVhbXtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMTg3LCAxMDUsIDEwOSwgMC43KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYW5pbWF0aW9uOiBtb3ZpbmcgMnMgaW5maW5pdGVcclxufVxyXG5Aa2V5ZnJhbWVzIG1vdmluZyB7XHJcbiAgICAwJXtcclxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDE4NywgMTA1LCAxMDksIDAuNyk7XHJcbiBcclxuICAgIH1cclxuICAgIDI1JXtcclxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDE1MCwgMTM2LCAxMzYsIDAuNyk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggMXB4IHJnYigxODAsIDExNywgMTE3KSxcclxuICAgICAgICAtMXB4IC0xcHggM3B4IDFweCByZ2IoMTgwLCAxMTcsIDExNylcclxuICAgIH1cclxuICBcclxuICAgIFxyXG59XHJcbi5pbWctdGVhbTpob3ZlcntcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG4ubWVkaWF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgZGlzcGxheTogY29udGVudHNcclxufVxyXG4ubWVkaWEgLmZhYiAge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzE2YjZiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiByZ2IoODUsIDgxLCA4MSlcclxufVxyXG4ubWVkaWEgLmZhYjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjgyODI7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmODI4MjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG4udGVhbS1uYW1le1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjYTU2ODY4O1xyXG59XHJcbi50ZWFtLXRleHR7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiByZ2IoMTE3LCAxMTcsIDExNyk7XHJcbiAgICBvcGFjaXR5OiAwLjhcclxufVxyXG5cclxuXHJcbi8qIENvbnRhY3QgVVMgKi9cclxuI2NvbnRhY3QtdXN7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG5cclxuLmNvbnRhY3R7XHJcbiAgICBtYXJnaW46IDIwcHggMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzVhNTQ1NDtcclxufVxyXG5sYWJlbHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLmNvbnRhY3QtaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHJnYigxNTYsIDE1MywgMTUzKTtcclxuICAgIG9wYWNpdHk6IDAuNztcclxufVxyXG4uY29udGFjdC1pbnB1dDpmb2N1cyB7XHJcbiAgICBjb2xvcjogIzY5NWI1YjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBub25lOyBcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMzQ5NDk7XHJcbiAgICBcclxufVxyXG4uY29udGFjdC1pbnB1dHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDE4LCAxNywgMCk7XHJcbiAgICBjb2xvcjogIzg1N2E3YTtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJjMGMwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIFxyXG59XHJcbi5idG4tZGFyayB7XHJcbiAgICBjb2xvcjogI2ZmODI4MjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHBhZGRpbmc6IDVweCA3NHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmY4MjgyO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDsgIFxyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4uYnRuLWRhcms6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4MjgyO1xyXG4gICAgY29sb3I6IHJnYigyNTEsIDI1MSwgMjUxKVxyXG5cclxufVxyXG4uYnRuLWRhcms6Zm9jdXNcclxuIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmJ0bi1kYXJrOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cywgLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cywgLnNob3c+LmJ0bi1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uYnRuLWRhcms6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLCAuc2hvdz4uYnRuLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlIHtcclxuICAgIGNvbG9yOiAjNjc2MzYzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDE5OSwgMTk2LCAxOTYpO1xyXG59IFxyXG4vKiBGbGFzaCBNZXNzYWdlICovXHJcbm5nLWZsYXNoLW1lc3NhZ2V7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Home -->\n<!-- Header -->\n<section id=\"header\" class=\"\">\n  <div class=\"overlay\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <div class=\"header\">\n            <h1 class=\"heading wow bounceIn\">DAMENDOR\n              <span class=\"txt-type\">Ui/UX DESIGNER</span>\n            </h1>\n            <p id=\"myElement\"></p>\n            <p class=\"header-text wow bounceInLeft\">We’re Demondar Surgeons, a Digital We’re Demondar Surgeons, a\n              digital We’re Demondar Surgeons, a Digital</p>\n                    <!-- Button trigger modal -->\n        <button type=\"button\" class=\"btn btn-primary mb-5 wow bounceIn\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n            Subscribe\n          </button>\n  \n          <!-- Modal -->\n          <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n            aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n              <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                  <h5 class=\"modal-title\" id=\"exampleModalLabel\">Subscribe Us</h5>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n                </div>\n                <div class=\"modal-body\">\n                  <form class=\"form-group subscribe mb-5\" (submit)=\"onSubscribe()\">\n                      <ng-flash-message></ng-flash-message>\n                      <label for=\"name\"></label>\n                    <input type=\"text\" name=\"name\" placeholder=\"Full Name\" onfocus=\"this.placeholder= ''\"\n                    onblur=\"this.placeholder ='Full Name'\" class=\"form-control subscribe-us\" [(ngModel)]=\"name\">\n                    <label for=\"email\"></label>\n                    <input class=\"form-control subscribe-us\" name=\"email\" placeholder=\"Email Address\" onfocus=\"this.placeholder= ''\"\n                    onblur=\"this.placeholder ='Email Address'\"\n                      [(ngModel)]=\"email\">\n                    <button class=\"btn btn-dark float-right mt-5 mb-5\">Submit</button>\n  \n                  </form>\n                </div>\n  \n              </div>\n            </div>\n          </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--Main-->\n<main id=\"main\">\n  <!-- How-We -->\n  <section class=\"how-we\">\n    <div class=\"container\">\n      <!-- how we work -->\n      <div class=\"row\">\n        <div class=\"col\">\n          <div class=\"how-we-work wow bounceInLeft\">\n            <h2 class=\"work-header\">We take Several Minutes To Design UI/UX Project</h2>\n            <p class=\"work-text\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cum assumenda voluptates,\n              et, nostrum est facere accusantium dolores, mollitia labore suscipit accusamus odio. Totam sapiente\n              eligendi veritatis at animi fuga!</p>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div id=\"demo\" class=\"carousel slide wow bounceInRight\" data-ride=\"carousel\">\n            <!-- The slideshow -->\n            <div class=\"carousel-inner\">\n              <div class=\"carousel-item active\">\n                <img src=\"../../../assets/img/slider/img-2.png\" alt=\"Los Angeles\" class=\"carousel-img\">\n                <div class=\"carousel-caption\">\n                  <span class=\"caption-header\">ADOBE ILLUSTRATOR</span>\n                </div>\n              </div>\n              <div class=\"carousel-item\">\n                <img src=\"../../../assets/img/slider/img-6.png\" alt=\"Los Angeles\" class=\"carousel-img\">\n                <div class=\"carousel-caption\">\n                  <span class=\"caption-header\">ADOBE PHOTOSHOP</span>\n                </div>\n              </div>\n              <div class=\"carousel-item\">\n                <img src=\"../../../assets/img/slider/img-8.png\" alt=\"Los Angeles\" class=\"carousel-img\">\n                <div class=\"carousel-caption\">\n                  <span class=\"caption-header\">ADOBE INDESIGN</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- workers -->\n      <div class=\"row\">\n        <div class=\"col\">\n          <div class=\"workers-one wow bounceIn\">\n            <!-- <span class=\"works-heading\">\n                      Hello Froim Here\n                    </span> -->\n            <div class=\"workers-header\">\n              <img src=\"../../../assets/img/workers/img-11.png\" alt=\"\" class=\"img-workers-one\">\n\n            </div>\n          </div>\n        </div>\n        <div class=\"col\">\n\n          <div class=\"workers-two wow bounceIn\">\n            <!-- <span class=\"works-heading\">\n                      Hello Froim Here\n                    </span> -->\n            <div class=\"workers-header\">\n              <img src=\"../../../assets/img/workers/img-2.png\" alt=\"\" class=\"img-workers-two\">\n\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </section>\n  <!-- Comments -->\n  <section id=\"comments\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <div class=\"our-services text-center wow bounceIn\">\n            <h2 class=\"our-services-header\">OUR SERVICES</h2>\n\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <div class=\"comments wow bounceIn\">\n            <p class=\"our-services-text\">This Is Paragraph Comment This Is Paragraph Comment This Is Paragraph Comment\n              This Is Paragraph Comment\n              This Is Paragraph Comment This Is Paragraph Comment </p>\n            <p class=\"our-services-text\">This Is Paragraph Comment This Is Paragraph Comment This Is Paragraph Comment\n              This Is Paragraph Comment\n              This Is Paragraph Comment This Is Paragraph Comment </p>\n            <p class=\"our-services-text\">This Is Paragraph Comment This Is Paragraph Comment This Is Paragraph Comment\n              This Is Paragraph Comment\n              This Is Paragraph Comment This Is Paragraph Comment </p>\n            <p class=\"our-services-text\">This Is Paragraph Comment This Is Paragraph Comment This Is Paragraph Comment\n              This Is Paragraph Comment\n              This Is Paragraph Comment This Is Paragraph Comment </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section id=\"our-projects\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col wow bounceIn\">\n          <h2 class=\"our-projects-header\">OUR PROJECTS</h2>\n          <p class=\"our-projects-text mb-5\">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo soluta ipsa\n            numquam earum neque atque esse velit in eos fugiat. Voluptas tenetur quod impedit. Vero recusandae itaque\n            libero deserunt quasi.</p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col wow bounceInLeft\">\n          <div class=\"projects-img\">\n            <img src=\"../../../assets/img/our-projects/img.png\" alt=\"\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <!-- Book -->\n  <section id=\"book\">\n    <div class=\"book-design\">\n      <div class=\"over-lay\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <h2 class=\"book-heading text-center mt-5 wow bounceInDown\">BOOK DESIGN</h2>\n\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-12 col-md-6 wow bounceInLeft\">\n              <h3 class=\"book-header\">Interested in designing demand for your business?\n                <span class=\"span-book\">Speak with a growth advisor</span> </h3>\n            </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-6 wow bounceInRight\">\n\n              <form class=\"form-group\" (submit)=\"onSend()\">\n                <ng-flash-message></ng-flash-message>\n                <label for=\"Name\">Name</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Full Name\" onfocus=\"this.placeholder= ''\"\n                  onblur=\"this.placeholder ='Full Name'\" [(ngModel)]=\"name\" name=\"name\">\n                <label for=\"Need\">I Am Looking For</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"UI/UX Designes, Business\"\n                  onfocus=\"this.placeholder= ''\" onblur=\"this.placeholder ='UI/UX Designes, Business'\"\n                  [(ngModel)]=\"needs\" name=\"needs\">\n                <label for=\"Email\">Email</label>\n                <input type=\"Email\" class=\"form-control\" placeholder=\"Email Address\" onfocus=\"this.placeholder= ''\"\n                  onblur=\"this.placeholder ='Email Address'\" [(ngModel)]=\"email\" name=\"email\">\n                <button class=\"btn btn-primary mb-5\">Send</button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <!-- Our-Team -->\n  <section class=\"our-team text-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <h2 class=\"our-team-header wow bounceInUp\">OUR TEAM</h2>\n\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col wow bounceInLeft\">\n          <div class=\"team\">\n            <img src=\"../../../assets/img/team/img-1.jpg\" class=\"img-team\" alt=\"\">\n            <h4 class=\"team-name\">Mr.Donail</h4>\n            <p class=\"team-text\">UX Designer</p>\n            <div class=\"icons-team\">\n              <a href=\"http://www.facebook.com\" class=\"media \" target=\"_blank\"><i class=\"fab fa-facebook\"></i></a>\n              <a href=\"http://www.twitter.com\" class=\"media\" target=\"_blank\"><i class=\"fab fa-twitter\"></i></a>\n              <a href=\"http://www.github.com\" class=\"media\" target=\"_blank\"><i class=\"fab fa-github\"></i></a>\n              <a href=\"http://www.linkedin.com\" class=\"media\" target=\"_blank\"><i class=\"fab fa-linkedin\"></i></a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col wow bounceInLeft\">\n          <div class=\"team\">\n            <img src=\"../../../assets/img/team/img-2.jpeg\" class=\"img-team\" alt=\"\">\n            <h4 class=\"team-name\">Mr.Donail</h4>\n            <p class=\"team-text\">UI Designer</p>\n            <div class=\"icons-team\">\n              <a href=\"http://www.facebook.com\" class=\"media\" target=\"_blank\"><i class=\"fab fa-facebook\"></i></a>\n              <a href=\"http://www.twitter.com\" class=\"media\" target=\"_blank\"><i class=\"fab fa-twitter\"></i></a>\n              <a href=\"http://www.github.com\" class=\"media\" target=\"_blank\"><i class=\"fab fa-github\"></i></a>\n              <a href=\"http://www.linkedin.com\" class=\"media\" target=\"_blank\"><i class=\"fab fa-linkedin\"></i></a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col wow bounceInRight\">\n          <div class=\"team\">\n            <img src=\"../../../assets/img/team/img-3.jpg\" class=\"img-team\" alt=\"\">\n            <h4 class=\"team-name\">Mr.Donail</h4>\n            <p class=\"team-text\">Android Designer</p>\n            <div class=\"icons-team\">\n              <a href=\"http://www.facebook.com\" class=\"media\" target=\"_blank\"><i class=\"fab fa-facebook\"></i></a>\n              <a href=\"http://www.twitter.com\" class=\"media\" target=\"_blank\"><i class=\"fab fa-twitter\"></i></a>\n              <a href=\"http://www.github.com\" class=\"media\" target=\"_blank\"><i class=\"fab fa-github\"></i></a>\n              <a href=\"http://www.linkedin.com\" class=\"media\" target=\"_blank\"><i class=\"fab fa-linkedin\"></i></a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col wow bounceInRight\">\n          <div class=\"team\">\n            <img src=\"../../../assets/img/team/img-4.jpg\" class=\"img-team\" alt=\"\">\n            <h4 class=\"team-name\">Mr.Donail</h4>\n            <p class=\"team-text\">Wep Designer</p>\n            <div class=\"icons-team\">\n              <a href=\"http://www.facebook.com\" class=\"media\" target=\"_blank\"><i class=\"fab fa-facebook\"></i></a>\n              <a href=\"http://www.twitter.com\" class=\"media\" target=\"_blank\"><i class=\"fab fa-twitter\"></i></a>\n              <a href=\"http://www.github.com\" class=\"media\" target=\"_blank\"><i class=\"fab fa-github\"></i></a>\n              <a href=\"http://www.linkedin.com\" class=\"media\" target=\"_blank\"><i class=\"fab fa-linkedin\"></i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <!-- Contact-Us -->\n  <section id=\"contact-us\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col wow bounceIn text-center \">\n          <h2 class=\"our-projects-header\">CONTACT US</h2>\n          <p class=\"our-projects-text mb-5\">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo soluta ipsa\n            numquam earum neque atque esse velit in eos fugiat. Voluptas tenetur quod impedit. Vero recusandae itaque\n            libero deserunt quasi.</p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col wow bounceInUp\">\n          <form class=\"form-group contact\" (submit)=\"onSubmit()\">\n            <ng-flash-message></ng-flash-message>\n            <label for=\"Username\">Username</label>\n            <input type=\"text\" class=\"form-control contact-input\" placeholder=\"Username\" onfocus=\"this.placeholder= ''\"\n              onblur=\"this.placeholder ='Username'\" [(ngModel)]=\"username\" name=\"username\">\n            <label for=\"Description\">Description</label>\n            <textarea type=\"Email\" class=\"form-control contact-input\" placeholder=\"Description\"\n              onfocus=\"this.placeholder= ''\" onblur=\"this.placeholder ='Description'\" [(ngModel)]=\"description\"\n              name=\"description\" cols=\"6\" rows=\"6\"></textarea>\n            <button class=\"btn btn-dark mb-5\">Submit</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </section>\n</main>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(validateService, FlashMessage, router) {
        this.validateService = validateService;
        this.FlashMessage = FlashMessage;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onSubscribe = function () {
        if (!this.name || !this.email) {
            this.FlashMessage.showFlashMessage({ messages: ['Complete All Fields'], dismissible: true, timeout: 1000, type: 'danger' });
        }
        else {
            this.FlashMessage.showFlashMessage({ messages: ['Thanks For Subscribe US'], dismissible: true, timeout: 1000, type: 'success' });
            this.name = '';
            this.email = '';
        }
    };
    HomeComponent.prototype.onSend = function () {
        if (!this.name || !this.email || !this.needs) {
            this.FlashMessage.showFlashMessage({ messages: ['Complete All Fields'], dismissible: true, timeout: 2000, type: 'danger' });
        }
        else {
            this.FlashMessage.showFlashMessage({ messages: ['Give US Time To Design Your Project'], dismissible: true, timeout: 2000, type: 'success' });
            this.name = '';
            this.needs = '';
            this.email = '';
        }
    };
    HomeComponent.prototype.onSubmit = function () {
        if (!this.username || !this.description) {
            this.FlashMessage.showFlashMessage({ messages: ['Please Fill All Fields'], dismissible: true, timeout: 2000, type: 'danger' });
        }
        else {
            this.FlashMessage.showFlashMessage({ messages: ['Thanks We Will Call You Soon'], dismissible: true, timeout: 2000, type: 'success' });
            this.username = '';
            this.description = '';
        }
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"], ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.page-header{\r\n    font-size: 27px;\r\n    font-weight: 400;\r\n    margin-bottom: 30px;\r\n    font-family: 'Quicksand', sans-serif;\r\n    color: #ff8282;\r\n    position: relative\r\n}\r\nlabel{\r\n    margin: 15px;\r\n    opacity: 0.6;\r\n}\r\n.form-control::-webkit-input-placeholder {\r\n    color: rgb(156, 153, 153);\r\n    opacity: 0.7;\r\n}\r\n.form-control:focus {\r\n    color: #2e2c2c;\r\n    background-color: transparent;\r\n    border-color: none; \r\n    outline: none;\r\n    box-shadow: none;\r\n    border-bottom: 1px solid #d34949;\r\n    \r\n}\r\n.form-control{\r\n    background-color: rgba(42, 18, 17, 0);\r\n    color: #555353;\r\n    opacity: 0.8;\r\n    border: none;\r\n    border-bottom: 1px solid #e2c0c0;\r\n    border-radius: 0;\r\n    font-family: 'Quicksand', sans-serif;\r\n\r\n    \r\n}\r\n.btn-dark {\r\n    color: #ff8282;\r\n    background-color: transparent;\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    padding: 5px 34px;\r\n    border-color: #ff8282;\r\n    transition: all 0.3s ease-in-out;\r\n    font-family: 'Quicksand', sans-serif;\r\n    border-radius: 2px;\r\n    margin-top: 30px;  \r\n    text-transform: uppercase;\r\n}\r\n.btn-dark:hover{\r\n    background-color: #ff8282;\r\n    color: rgb(240, 235, 235)\r\n\r\n}\r\n.btn-dark:focus\r\n {\r\n    box-shadow: none;\r\n}\r\n.btn-dark:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus, .show>.btn-primary.dropdown-toggle:focus {\r\n    box-shadow: none;\r\n}\r\n.btn-dark:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show>.btn-primary.dropdown-toggle {\r\n    color: #676363;\r\n    background-color: #f8f9fa;\r\n    border-color: rgb(199, 196, 196);\r\n} \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxjQUFjO0lBQ2Q7QUFDSjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdDQUFnQzs7QUFFcEM7QUFDQTtJQUNJLHFDQUFxQztJQUNyQyxjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLG9DQUFvQzs7O0FBR3hDO0FBRUE7SUFDSSxjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUlyQixnQ0FBZ0M7SUFDaEMsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekI7O0FBRUo7QUFDQTs7SUFFSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnBhZ2UtaGVhZGVye1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogI2ZmODI4MjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG59XHJcbmxhYmVse1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG59XHJcbi5mb3JtLWNvbnRyb2w6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHJnYigxNTYsIDE1MywgMTUzKTtcclxuICAgIG9wYWNpdHk6IDAuNztcclxufVxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjMmUyYzJjO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItY29sb3I6IG5vbmU7IFxyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QzNDk0OTtcclxuICAgIFxyXG59XHJcbi5mb3JtLWNvbnRyb2x7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCAxOCwgMTcsIDApO1xyXG4gICAgY29sb3I6ICM1NTUzNTM7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyYzBjMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcblxyXG4gICAgXHJcbn1cclxuXHJcbi5idG4tZGFyayB7XHJcbiAgICBjb2xvcjogI2ZmODI4MjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHBhZGRpbmc6IDVweCAzNHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmY4MjgyO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDsgIFxyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4uYnRuLWRhcms6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4MjgyO1xyXG4gICAgY29sb3I6IHJnYigyNDAsIDIzNSwgMjM1KVxyXG5cclxufVxyXG4uYnRuLWRhcms6Zm9jdXNcclxuIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmJ0bi1kYXJrOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cywgLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cywgLnNob3c+LmJ0bi1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uYnRuLWRhcms6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLCAuc2hvdz4uYnRuLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlIHtcclxuICAgIGNvbG9yOiAjNjc2MzYzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDE5OSwgMTk2LCAxOTYpO1xyXG59ICJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Login -->\n<section class=\"login\">\n  <div class=\"container\">\n    <h2 class=\"page-header mt-5 mb-2 text-center\">Login</h2>\n    <div class=\"row\">\n      <div class=\"col-6 offset-3\">\n        <ng-flash-message></ng-flash-message>\n        <form (submit)=\"onLoginSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"username\" placeholder=\"Username\" \n             onfocus=\"this.placeholder=''\" onblur=\"this.placeholder='Username'\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\"\n            placeholder=\"Password\" \n             onfocus=\"this.placeholder=''\" onblur=\"this.placeholder='Password'\">\n          </div>\n          <button class=\"btn btn-dark \">Login</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, FlashMessage, router) {
        this.authService = authService;
        this.FlashMessage = FlashMessage;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.FlashMessage.showFlashMessage({ messages: ['Login Successfully'], dismissible: true, timeout: 2000, type: 'success' });
                setTimeout(function () {
                    _this.router.navigate(['/']);
                }, 1000);
            }
            else {
                _this.FlashMessage.showFlashMessage({ messages: ['Failed To Login'], dismissible: true, timeout: 2000, type: 'danger' });
                setTimeout(function () {
                    _this.router.navigate(['/login']);
                }, 1000);
                _this.username = '';
                _this.password = '';
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n    font-size: 16px;\r\n    font-weight: 400 !important;\r\n    background-color: rgb(255, 255, 255) !important;\r\n}\r\n.navbar-light .navbar-brand {\r\n    color: rgb(8, 8, 8);\r\n}\r\n.navbar-light .navbar-nav .show>.nav-link, \r\n.navbar-light .navbar-nav .active>.nav-link, \r\n.navbar-light .navbar-nav .nav-link.show, \r\n.navbar-light .navbar-nav .nav-link.active {\r\n    color: #eb5050;\r\n\r\n}\r\n.navbar-light .navbar-nav .nav-link {\r\n    color: rgb(0, 0, 0);\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLCtDQUErQztBQUNuRDtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBR0E7Ozs7SUFJSSxjQUFjOztBQUVsQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xyXG59XHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci1icmFuZCB7XHJcbiAgICBjb2xvcjogcmdiKDgsIDgsIDgpO1xyXG59XHJcblxyXG5cclxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAuc2hvdz4ubmF2LWxpbmssIFxyXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5hY3RpdmU+Lm5hdi1saW5rLCBcclxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsuc2hvdywgXHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2ViNTA1MDtcclxuXHJcbn0gIFxyXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light wow fadeIn\">\n  <a class=\"navbar-brand\" routerLink=\"/\">DAMENDOR</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\"\n    aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n        <a class=\"nav-link\" routerLink=\"/\">Home</a>\n      </li>\n\n\n    </ul>\n    <ul class=\"navbar-nav navbar-right \">\n\n      <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\"\n        [routerLinkActiveOptions]=\"{exact: true}\">\n        <a class=\"nav-link\" routerLink=\"/profile\">Profile</a>\n      </li>\n      <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\"\n        [routerLinkActiveOptions]=\"{exact: true}\">\n        <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n      </li>\n      <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\"\n        [routerLinkActiveOptions]=\"{exact: true}\">\n        <a class=\"nav-link\" routerLink=\"/register\">Register</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\">\n        <a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\n      </li>\n    </ul>\n\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, FlashMessage, router) {
        this.authService = authService;
        this.FlashMessage = FlashMessage;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#profile{\r\n    border-radius: 10px;\r\n    margin-top: 40px;\r\n    position: relative;\r\n    font-family: 'Quicksand', sans-serif;\r\n\r\n}\r\n\r\n\r\n.card {\r\n    box-shadow: 3px 3px 5px 1px rgba(226, 226, 226),\r\n     -2px -2px 5px 1px rgba(226, 226, 226)\r\n}\r\n\r\n\r\n.avatar-upload {\r\n    position: relative;\r\n    max-width: 205px;\r\n    margin: 20px auto;\r\n}\r\n\r\n\r\n#imagePreview{\r\n    background-image: url(http://i.pravatar.cc/500?img=7)\r\n}\r\n\r\n\r\n.avatar-edit {\r\n    position: absolute;\r\n    right: 12px;\r\n    z-index: 1;\r\n    top: 10px;\r\n}\r\n\r\n\r\n.file {\r\n    display: none;\r\n}\r\n\r\n\r\n.label-image {\r\n    display: inline-block;\r\n    width: 34px;\r\n    height: 34px;\r\n    margin-bottom: 0;\r\n    border-radius: 100%;\r\n    background: #FFFFFF;\r\n    border: 1px solid transparent;\r\n    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);\r\n    -webkit-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);\r\n    -moz-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);\r\n    -o-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);\r\n    cursor: pointer;\r\n    font-weight: normal;\r\n    transition: all .2s ease-in-out;\r\n}\r\n\r\n\r\n.label-image:hover{\r\n    background: #f1f1f1;\r\n    border-color: #d6d6d6;\r\n}\r\n\r\n\r\n.label-image:after{\r\n    content: \"\\f040\";\r\n    font-family: 'FontAwesome';\r\n    color: #757575;\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 0;\r\n    right: 0;\r\n    text-align: center;\r\n    margin: auto;\r\n}\r\n\r\n\r\n.avatar-preview {\r\n    width: 192px;\r\n    height: 192px;\r\n    position: relative;\r\n    border-radius: 100%;\r\n    border: 6px solid #F8F8F8;\r\n    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);\r\n    -webkit-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);\r\n    -moz-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);\r\n    -o-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);\r\n\r\n}\r\n\r\n\r\n.avatar-preview div {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 100%;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n}\r\n\r\n\r\n.star-image{\r\n    text-align: center;\r\n    padding: 20px\r\n}\r\n\r\n\r\n.fa-star{\r\n    padding: 3px;\r\n    color: #a2a2a2;\r\n}\r\n\r\n\r\n.fa-star:first-child{\r\n    color: rgb(255, 208, 0);\r\n\r\n}\r\n\r\n\r\n.badge-info{\r\n    margin-left: 3px;\r\n    margin-bottom: 3px;\r\n    color: #fff;\r\n    background-color: #919598;\r\n    text-shadow: 1px 1px 1px #584f4f;\r\n    \r\n}\r\n\r\n\r\n.card-title {\r\n    margin-bottom: 5px;\r\n    \r\n}\r\n\r\n\r\n.card h5 {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-size: 15px;\r\n    font-weight: normal\r\n    \r\n}\r\n\r\n\r\n.card h5 span{\r\n    padding: 4px;\r\n    font-size: 13px;\r\n    font-weight: bolder;\r\n    color: rgb(49, 47, 47);\r\n    border-radius: 15px;\r\n    font-family: 'Quicksand', sans-serif;\r\n    text-shadow: 1px 1px #cacaca;\r\n\r\n}\r\n\r\n\r\n.card-header{\r\n    text-align: center;\r\n    background-color: rgb(86, 82, 82);\r\n    font-size: 18px;\r\n    margin-bottom: 30px;\r\n    color: #fff;\r\n    border-radius: 2px\r\n\r\n}\r\n\r\n\r\n.item-child{\r\n    border: none;\r\n    font-family: 'Quicksand', sans-serif;\r\n}\r\n\r\n\r\n.media{\r\n    text-decoration: none;\r\n    padding: 10px;\r\n    margin-top: 5px;\r\n    display: contents\r\n}\r\n\r\n\r\n.media .fab  {\r\n    margin: 5px;\r\n    border: 1px solid #d1cfcf;\r\n    border-radius: 50%;\r\n    padding: 10px;\r\n    color: rgb(100, 91, 91)\r\n}\r\n\r\n\r\n.media .fab:hover{\r\n    background-color: #ff8282;\r\n    color: #ffffff;\r\n    border-color: #ff8282;\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n\r\n.contact-header{\r\n    background-color: rgb(103, 100, 100);\r\n    color: #fff;\r\n    font-size: 18px;\r\n    font-weight: normal;\r\n    font-family: 'Quicksand', sans-serif;\r\n    border-radius: 5px;\r\n    padding: 10px\r\n}\r\n\r\n\r\n/* Post */\r\n\r\n\r\n.modal-title,\r\n.list-group-item {\r\n    font-family: 'Quicksand', sans-serif;\r\n}\r\n\r\n\r\n.btn-primary {\r\n    color: #fc6060;\r\n    background-color: #ffffff;\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    padding: 5px 14px;\r\n    border-color: #ff8282;\r\n    transition: all 0.3s ease-in-out;\r\n    font-family: 'Quicksand', sans-serif;\r\n    border-radius: 2px;\r\n    margin-top: 30px;\r\n}\r\n\r\n\r\n.btn-primary:hover{\r\n    background-color: #ff8282;\r\n    color: #ffffff;\r\n    border-color: #ff8282;\r\n}\r\n\r\n\r\n.btn-primary:focus\r\n {\r\n    box-shadow: none;\r\n}\r\n\r\n\r\n.btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus, .show>.btn-primary.dropdown-toggle:focus {\r\n    box-shadow: none;\r\n}\r\n\r\n\r\n.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show>.btn-primary.dropdown-toggle {\r\n    color: #676363;\r\n    background-color: #f8f9fa;\r\n    border-color: rgb(199, 196, 196);\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixvQ0FBb0M7O0FBRXhDOzs7QUFHQTtJQUNJOztBQUVKOzs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOzs7QUFDQTtJQUNJO0FBQ0o7OztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsU0FBUztBQUNiOzs7QUFDQTtJQUNJLGFBQWE7QUFDakI7OztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLCtDQUErQztJQUMvQyxzREFBc0Q7SUFDdEQsbURBQW1EO0lBQ25ELGlEQUFpRDtJQUNqRCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLCtCQUErQjtBQUNuQzs7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOzs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDhDQUE4QztJQUM5QyxzREFBc0Q7SUFDdEQsbURBQW1EO0lBQ25ELGlEQUFpRDs7QUFFckQ7OztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QiwyQkFBMkI7QUFDL0I7OztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCO0FBQ0o7OztBQUNBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEI7OztBQUNBO0lBQ0ksdUJBQXVCOztBQUUzQjs7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsZ0NBQWdDOztBQUVwQzs7O0FBRUE7SUFDSSxrQkFBa0I7O0FBRXRCOzs7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2Y7O0FBRUo7OztBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsNEJBQTRCOztBQUVoQzs7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsV0FBVztJQUNYOztBQUVKOzs7QUFFQTtJQUNJLFlBQVk7SUFDWixvQ0FBb0M7QUFDeEM7OztBQUdBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixlQUFlO0lBQ2Y7QUFDSjs7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2I7QUFDSjs7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLHFCQUFxQjtJQUlyQixnQ0FBZ0M7QUFDcEM7OztBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEI7QUFDSjs7O0FBQ0EsU0FBUzs7O0FBRVQ7O0lBRUksb0NBQW9DO0FBQ3hDOzs7QUFDQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIscUJBQXFCO0lBSXJCLGdDQUFnQztJQUNoQyxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7O0FBSUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7O0FBQ0E7O0lBRUksZ0JBQWdCO0FBQ3BCOzs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGdDQUFnQztBQUNwQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI3Byb2ZpbGV7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuXHJcbn1cclxuXHJcblxyXG4uY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDVweCAxcHggcmdiYSgyMjYsIDIyNiwgMjI2KSxcclxuICAgICAtMnB4IC0ycHggNXB4IDFweCByZ2JhKDIyNiwgMjI2LCAyMjYpXHJcbn1cclxuLmF2YXRhci11cGxvYWQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWF4LXdpZHRoOiAyMDVweDtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG59XHJcbiNpbWFnZVByZXZpZXd7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cDovL2kucHJhdmF0YXIuY2MvNTAwP2ltZz03KVxyXG59XHJcbi5hdmF0YXItZWRpdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTJweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0b3A6IDEwcHg7XHJcbn1cclxuLmZpbGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ubGFiZWwtaW1hZ2Uge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDM0cHg7XHJcbiAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgLW8tYm94LXNoYWRvdzogMHB4IDJweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5sYWJlbC1pbWFnZTpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgICBib3JkZXItY29sb3I6ICNkNmQ2ZDY7XHJcbn1cclxuLmxhYmVsLWltYWdlOmFmdGVye1xyXG4gICAgY29udGVudDogXCJcXGYwNDBcIjtcclxuICAgIGZvbnQtZmFtaWx5OiAnRm9udEF3ZXNvbWUnO1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmF2YXRhci1wcmV2aWV3IHtcclxuICAgIHdpZHRoOiAxOTJweDtcclxuICAgIGhlaWdodDogMTkycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYm9yZGVyOiA2cHggc29saWQgI0Y4RjhGODtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAtby1ib3gtc2hhZG93OiAwcHggMnB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cclxufVxyXG4uYXZhdGFyLXByZXZpZXcgZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcbi5zdGFyLWltYWdle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjBweFxyXG59XHJcbi5mYS1zdGFye1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgY29sb3I6ICNhMmEyYTI7XHJcbn1cclxuLmZhLXN0YXI6Zmlyc3QtY2hpbGR7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjA4LCAwKTtcclxuXHJcbn1cclxuLmJhZGdlLWluZm97XHJcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTE5NTk4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICM1ODRmNGY7XHJcbiAgICBcclxufVxyXG5cclxuLmNhcmQtdGl0bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgXHJcbn1cclxuLmNhcmQgaDUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbFxyXG4gICAgXHJcbn1cclxuLmNhcmQgaDUgc3BhbntcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBjb2xvcjogcmdiKDQ5LCA0NywgNDcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4ICNjYWNhY2E7XHJcblxyXG59XHJcblxyXG5cclxuLmNhcmQtaGVhZGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg2LCA4MiwgODIpO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4XHJcblxyXG59XHJcblxyXG4uaXRlbS1jaGlsZHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuXHJcbi5tZWRpYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBjb250ZW50c1xyXG59XHJcbi5tZWRpYSAuZmFiICB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMWNmY2Y7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6IHJnYigxMDAsIDkxLCA5MSlcclxufVxyXG4ubWVkaWEgLmZhYjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjgyODI7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmODI4MjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG4uY29udGFjdC1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAzLCAxMDAsIDEwMCk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4XHJcbn1cclxuLyogUG9zdCAqL1xyXG5cclxuLm1vZGFsLXRpdGxlLFxyXG4ubGlzdC1ncm91cC1pdGVtIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxufVxyXG4uYnRuLXByaW1hcnkge1xyXG4gICAgY29sb3I6ICNmYzYwNjA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHBhZGRpbmc6IDVweCAxNHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmY4MjgyO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuICAgIFxyXG5cclxuLmJ0bi1wcmltYXJ5OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODI4MjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmY4MjgyO1xyXG59XHJcbi5idG4tcHJpbWFyeTpmb2N1c1xyXG4ge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlOmZvY3VzLCAuYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlOmZvY3VzLCAuc2hvdz4uYnRuLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlOmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUsIC5idG4tcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsIC5zaG93Pi5idG4tcHJpbWFyeS5kcm9wZG93bi10b2dnbGUge1xyXG4gICAgY29sb3I6ICM2NzYzNjM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMTk5LCAxOTYsIDE5Nik7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Profile-->\n<section id=\"profile\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-4\">\n        <div class=\"card wow bounceIn\" *ngIf=\"user\">\n          <div class=\"avatar-upload\">\n            <div class=\"avatar-edit\">\n              <input type='file' id=\"imageUpload\" accept=\".png, .jpg, .jpeg\" class=\"file\" />\n              <label for=\"imageUpload\" class=\"label-image\"></label>\n            </div>\n            <div class=\"avatar-preview\">\n              <div id=\"imagePreview\"></div>\n            </div>\n          </div>\n          <div class=\"star-image\">\n            <i class=\"fas fa-star\"></i>\n            <i class=\"fas fa-star\"></i>\n            <i class=\"fas fa-star\"></i>\n            <i class=\"fas fa-star\"></i>\n            <i class=\"fas fa-star\"></i>\n\n          </div>\n\n          <div class=\"card-header\">Hello {{user.name}} </div>\n\n          <div class=\"card-body\">\n            <span class=\"badge badge-info\">DETAILS</span>\n            <h5 class=\"card-title\"><span>Username:</span>{{user.username}}</h5>\n            <h5 class=\"card-title\"><span>Email:</span>{{user.email}} </h5>\n          </div>\n          <div class=\"list-group item-parent\">\n            <div class=\"list-group-item item-child flex-column align-items-start\">\n              <div class=\"d-flex w-100 justify-content-between\">\n                <h5 class=\"contact-header mb-1\">Technical Support </h5>\n              </div>\n              <p class=\"mb-1\">we are happy that you are with us if you want to know any details</p>\n              <small class=\"text-muted\">Contact Us</small>\n              <div class=\"social-media\">\n                <a href=\"http://www.facebook.com\" class=\"media\" target=\"_blank\"><i class=\"fab fa-facebook\"></i></a>\n                <a href=\"http://www.twitter.com\" class=\"media\" target=\"_blank\"><i class=\"fab fa-twitter\"></i></a>\n                <a href=\"http://www.github.com\" class=\"media\" target=\"_blank\"><i class=\"fab fa-github\"></i></a>\n                <a href=\"http://www.linkedin.com\" class=\"media\" target=\"_blank\"><i class=\"fab fa-linkedin\"></i></a>\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-8\">\n        <!-- Button trigger modal -->\n        <button type=\"button\" class=\"btn btn-primary mb-2 wow bounceInDown\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n          Add New Post\n        </button>\n\n        <!-- Modal -->\n        <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n          aria-hidden=\"true\">\n          <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add New Post</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                <form class=\"form-group mb-5\" (ngSubmit)=\"addNewPost(title, description)\">\n                  <input type=\"text\" name=\"title\" placeholder=\"Title\" class=\"form-control\" [(ngModel)]=\"title\">\n                  <label for=\"\"></label>\n                  <textarea class=\"form-control\" name=\"description\" placeholder=\"Description\"\n                    [(ngModel)]=\"description\"></textarea>\n                  <button class=\"btn btn-primary float-right mt-2 mb-5\">Submit</button>\n\n                </form>\n              </div>\n\n            </div>\n          </div>\n        </div>\n        <!-- (click)=\"updatePost()\" -->\n        <div class=\"post wow bounceInUp\">\n          <div class=\"list-group\">\n            <div class=\"list-group-item list-group-item-action flex-column align-items-start  mt-3\"\n              *ngFor=\"let post of posts\">\n              <div class=\"d-flex w-100 justify-content-between\">\n                <h5>{{post.title}}</h5>\n                <small class=\"text-muted\">\n                  <button class=\"btn btn-primary float-right mb-1\" (click)=\"deletePost(post._id)\">Delete</button>\n\n                </small>\n\n              </div>\n              <p class=\"mb-1\">{{post.description}}</p>\n              <small class=\"text-muted float-right\">\n                <i class=\"fas fa-star\"></i>\n                <i class=\"fas fa-star\"></i>\n                <i class=\"fas fa-star\"></i>\n\n              </small>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-xs-4\">\n\n      </div>\n    </div>\n\n  </div>\n</section>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, route) {
        this.authService = authService;
        this.route = route;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (data) {
            _this.user = data.user;
        }, function (err) {
            console.log(err);
            return false;
        });
        // Fetch All Posts
        this.fetchAll();
    };
    // Fetch All Posts
    ProfileComponent.prototype.fetchAll = function () {
        var _this = this;
        this.authService.allPosts().subscribe(function (data) {
            _this.posts = data;
            console.log(_this.posts);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    // Add New Post
    ProfileComponent.prototype.addNewPost = function (title, description) {
        this.authService.addPost(title, description).subscribe(function (post) {
            window.location.reload();
        });
    };
    ProfileComponent.prototype.updatePost = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
            _this.authService.allPostsById(_this.id).subscribe(function (res) {
                _this.posts = res;
                console.log(_this.posts);
            });
        });
    };
    // Delete Post
    ProfileComponent.prototype.deletePost = function (id) {
        var _this = this;
        this.authService.deletePost(id).subscribe(function () {
            _this.fetchAll();
            console.log(id);
        });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.page-header{\r\n    font-size: 27px;\r\n    font-weight: 400;\r\n    margin-bottom: 30px;\r\n    font-family: 'Quicksand', sans-serif;\r\n    color: #ff8282;\r\n    position: relative\r\n}\r\nlabel{\r\n    margin: 15px;\r\n    opacity: 0.6;\r\n}\r\n.form-control::-webkit-input-placeholder {\r\n    color: rgb(156, 153, 153);\r\n    opacity: 0.7;\r\n}\r\n.form-control:focus {\r\n    color: #2e2c2c;\r\n    background-color: transparent;\r\n    border-color: none; \r\n    outline: none;\r\n    box-shadow: none;\r\n    border-bottom: 1px solid #d34949;\r\n    \r\n}\r\n.form-control{\r\n    background-color: rgba(42, 18, 17, 0);\r\n    color: #555353;\r\n    opacity: 0.8;\r\n    border: none;\r\n    border-bottom: 1px solid #e2c0c0;\r\n    border-radius: 0;\r\n    font-family: 'Quicksand', sans-serif;\r\n\r\n    \r\n}\r\n.btn-dark {\r\n    color: #ff8282;\r\n    background-color: transparent;\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    padding: 5px 34px;\r\n    border-color: #ff8282;\r\n    transition: all 0.3s ease-in-out;\r\n    font-family: 'Quicksand', sans-serif;\r\n    border-radius: 2px;\r\n    margin-top: 30px;  \r\n    text-transform: uppercase;\r\n}\r\n.btn-dark:hover{\r\n    background-color: #ff8282;\r\n    color: rgb(240, 235, 235)\r\n\r\n}\r\n.btn-dark:focus\r\n {\r\n    box-shadow: none;\r\n}\r\n.btn-dark:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus, .show>.btn-primary.dropdown-toggle:focus {\r\n    box-shadow: none;\r\n}\r\n.btn-dark:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show>.btn-primary.dropdown-toggle {\r\n    color: #676363;\r\n    background-color: #f8f9fa;\r\n    border-color: rgb(199, 196, 196);\r\n} \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxjQUFjO0lBQ2Q7QUFDSjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdDQUFnQzs7QUFFcEM7QUFDQTtJQUNJLHFDQUFxQztJQUNyQyxjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLG9DQUFvQzs7O0FBR3hDO0FBRUE7SUFDSSxjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUlyQixnQ0FBZ0M7SUFDaEMsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekI7O0FBRUo7QUFDQTs7SUFFSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnBhZ2UtaGVhZGVye1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogI2ZmODI4MjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG59XHJcbmxhYmVse1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG59XHJcbi5mb3JtLWNvbnRyb2w6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHJnYigxNTYsIDE1MywgMTUzKTtcclxuICAgIG9wYWNpdHk6IDAuNztcclxufVxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjMmUyYzJjO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItY29sb3I6IG5vbmU7IFxyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QzNDk0OTtcclxuICAgIFxyXG59XHJcbi5mb3JtLWNvbnRyb2x7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCAxOCwgMTcsIDApO1xyXG4gICAgY29sb3I6ICM1NTUzNTM7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyYzBjMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XHJcblxyXG4gICAgXHJcbn1cclxuXHJcbi5idG4tZGFyayB7XHJcbiAgICBjb2xvcjogI2ZmODI4MjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHBhZGRpbmc6IDVweCAzNHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmY4MjgyO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDsgIFxyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4uYnRuLWRhcms6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4MjgyO1xyXG4gICAgY29sb3I6IHJnYigyNDAsIDIzNSwgMjM1KVxyXG5cclxufVxyXG4uYnRuLWRhcms6Zm9jdXNcclxuIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmJ0bi1kYXJrOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cywgLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZTpmb2N1cywgLnNob3c+LmJ0bi1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZTpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uYnRuLWRhcms6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLCAuYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLCAuc2hvdz4uYnRuLXByaW1hcnkuZHJvcGRvd24tdG9nZ2xlIHtcclxuICAgIGNvbG9yOiAjNjc2MzYzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDE5OSwgMTk2LCAxOTYpO1xyXG59ICJdfQ== */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Register -->\n<section class=\"register\">\n  <div class=\"container\">\n    <h2 class=\"page-header mt-5 mb-2 text-center\">Register</h2>\n    <div class=\"row\">\n      <div class=\"col-6 offset-3\">\n        <ng-flash-message></ng-flash-message>\n        <form (submit)=\"onRegister()\">\n          <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"name\"\n            placeholder=\"Full Name\" \n             onfocus=\"this.placeholder=''\" onblur=\"this.placeholder='Full Name'\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"username\"\n            placeholder=\"Username\" \n             onfocus=\"this.placeholder=''\" onblur=\"this.placeholder='Username'\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"email\"\n            placeholder=\"Email\" \n            onfocus=\"this.placeholder=''\" onblur=\"this.placeholder='Email'\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\"\n            placeholder=\"Password\" \n            onfocus=\"this.placeholder=''\" onblur=\"this.placeholder='Password'\">\n          </div>\n          <button class=\"btn btn-dark \">Sign Up</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, FlashMessage, authService, router) {
        this.validateService = validateService;
        this.FlashMessage = FlashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegister = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.FlashMessage.showFlashMessage({ messages: ['Please Fill All Fields'], dismissible: true, timeout: 2000, type: 'danger' });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.FlashMessage.showFlashMessage({ messages: ['Please Use A Valid Email'], dismissible: true, timeout: 2000, type: 'danger' });
            return false;
        }
        // Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.FlashMessage.showFlashMessage({ messages: ['Registered Successfully'], dismissible: true, timeout: 2000, type: 'success' });
                setTimeout(function () {
                    _this.router.navigate(['/login']);
                }, 1000);
            }
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers });
    };
    AuthService.prototype.getProfile = function () {
        this.loadToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Authorization', this.authToken).append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        if (localStorage.id_token == undefined) {
            return true;
        }
        else {
            var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
            return helper.isTokenExpired(localStorage.id_token);
        }
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    // Posts
    AuthService.prototype.allPosts = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json');
        return this.http.get('posts/post', { headers: headers });
    };
    AuthService.prototype.allPostsById = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json');
        return this.http.get("posts/post/" + id, { headers: headers });
    };
    AuthService.prototype.addPost = function (title, description) {
        var post = {
            title: title,
            description: description
        };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json');
        return this.http.post('posts/add', post, { headers: headers });
    };
    AuthService.prototype.updatePost = function (id, title, description) {
        var post = {
            title: title,
            description: description
        };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json');
        return this.http.post("posts/update/" + id, post, { headers: headers });
    };
    AuthService.prototype.deletePost = function (id) {
        console.log(id);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json');
        return this.http.get("posts/delete/" + id, { headers: headers });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    // Regular Expression
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());

;


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

module.exports = __webpack_require__(/*! f:\meanauthapp\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map