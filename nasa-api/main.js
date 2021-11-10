(self["webpackChunknasa_api"] = self["webpackChunknasa_api"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);




class AppComponent {
    constructor() {
        this.title = 'nasa-api';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "container-fluid"], [1, "mt-5"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routing */ 6738);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main/main.component */ 2409);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/error/error.component */ 6359);
/* harmony import */ var _components_techtransfer_techtransfer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/techtransfer/techtransfer.component */ 5492);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 9895);











//Importacion para generar el PDF
// import { PdfMakeWrapper } from 'pdfmake-wrapper';
// import * as pdfFonts from "pdfmake/build/vfs_fonts"; // fonts provided for pdfmake
// PdfMakeWrapper.setFonts(pdfFonts);
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [_app_routing__WEBPACK_IMPORTED_MODULE_0__.appRoutingProviders], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _app_routing__WEBPACK_IMPORTED_MODULE_0__.routing
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
        _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__.MainComponent,
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent,
        _components_error_error_component__WEBPACK_IMPORTED_MODULE_5__.ErrorComponent,
        _components_techtransfer_techtransfer_component__WEBPACK_IMPORTED_MODULE_6__.TechtransferComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] }); })();


/***/ }),

/***/ 6738:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appRoutingProviders": () => (/* binding */ appRoutingProviders),
/* harmony export */   "routing": () => (/* binding */ routing)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/main/main.component */ 2409);
/* harmony import */ var _components_techtransfer_techtransfer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/techtransfer/techtransfer.component */ 5492);
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/error/error.component */ 6359);




const appRoutes = [
    { path: '', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent },
    { path: 'patents', component: _components_techtransfer_techtransfer_component__WEBPACK_IMPORTED_MODULE_1__.TechtransferComponent },
    { path: '**', component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_2__.ErrorComponent }
];
//Exportar el modulo de rutas
const appRoutingProviders = [];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(appRoutes);


/***/ }),

/***/ 6359:
/*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorComponent": () => (/* binding */ ErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 8, vars: 0, consts: [[1, "container", "mt-5"], [1, "row"], [1, "col-md-4"], [1, "text-center"], ["src", "../../../assets/img/alien.jpg", "alt", ""]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "The page you are looking for is not identified");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4662:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class FooterComponent {
    constructor() {
        this.fb = '';
        this.github = '';
    }
    ngOnInit() {
        this.fb = 'https://www.facebook.com/aleksei.martinez.3/';
        this.github = 'https://alkcode.github.io/';
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 12, vars: 2, consts: [[1, "container-fluid", "footer", "pb-3"], [1, "row"], [1, "col-md-4"], [1, "text-center", "pt-5", "footer_nombre"], [1, "text-center"], ["target", "_blank", 3, "href"], [1, "bi", "bi-facebook", "me-3"], [1, "bi", "bi-github"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Alkcode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.fb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.github, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["[_nghost-%COMP%]   .footer[_ngcontent-%COMP%] {\n  background-color: black;\n}\n[_nghost-%COMP%]   .footer_nombre[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHVCQUFBO0FBQVI7QUFFUTtFQUNJLFlBQUE7QUFBWiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICAgIC5mb290ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcblxyXG4gICAgICAgICZfbm9tYnJle1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ 3646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);


class HeaderComponent {
    constructor() {
        this.today = Date.now();
    }
    ngOnInit() {
        this.today;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 10, vars: 4, consts: [[1, "navbar", "sticky-top", "navbar-dark", "bg-dark", "menu"], [1, "container-fluid"], ["target", "_blank", "href", "https://api.nasa.gov/", 1, "navbar-brand"], ["src", "https://api.nasa.gov/assets/img/favicons/favicon-192.png", "alt", "", "width", "40", "height", "40", 1, "d-inline-block", "align-text-top"], [1, "px-4"], [1, "d-flex", "menu_fecha"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 1, ctx.today, "medium"));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe], styles: ["[_nghost-%COMP%]   .menu_fecha[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNJLFlBQUE7QUFEWiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICAgIC5tZW51e1xyXG4gICAgICAgICZfZmVjaGF7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 2409:
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api.service */ 5830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);




function MainComponent_div_11_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Image Credit & Copyright: anonymous");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MainComponent_div_11_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Image Credit & Copyright: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "https://www.google.com/search?q=", ctx_r3.datos.copyright, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.datos.copyright);
} }
function MainComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MainComponent_div_11_div_4_Template, 3, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MainComponent_div_11_div_5_Template, 5, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.datos.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.datos.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.datos.copyright);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.datos.copyright);
} }
function MainComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Visit page");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.datos.title);
} }
// import { Datos } from '../../models/datos';
// import {PdfMakeWrapper, Txt, Img } from 'pdfmake-wrapper';
class MainComponent {
    constructor(datosService) {
        this.datosService = datosService;
        // public datos: Datos[] = [];
        this.datos = [];
    }
    ngOnInit() {
        this.datosService.mostrarDatos().subscribe(response => {
            this.datos = response;
            console.log('============================');
            console.log(this.datos);
        }, error => {
            console.log(error);
        });
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.DatosService)); };
MainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_services_api_service__WEBPACK_IMPORTED_MODULE_0__.DatosService])], decls: 23, vars: 3, consts: [[1, "container-fluid", "mt-3", "main"], [1, "text-center", "main_titulo"], [1, "container", "mt-5"], [1, "text-justify", "main_explicacion"], [1, "espacio"], [1, "row", "mt-5"], [1, "col-md-4"], [1, "col-md-4", "align-items-center", "justify-items-center", "px-3"], [4, "ngIf"], [1, "col-md-4", "mt-3", "pb-3"], [1, "main_planeta"], ["src", "../../../assets/img/globe_PNG37.png", 1, "main_planeta_tierra", "img-fluid"], ["src", "https://luismasdev.com/content/images/2016/11/luna.png", 1, "main_planeta_luna", "img-fluid"], [1, "row"], [1, "col-md-2"], [1, "col-md-8", "text-center"], ["alt", "Image NASA API", 1, "img-fluid", 3, "src"], [1, "text-center", "mt-3"], [1, "text-center", "font-monospace", "mt-4"], ["target", "_blank", 3, "href"], [1, "ratio", "ratio-16x9"], ["src", "../../../assets/img/camera_digital_photo_photography_picture_record_video_icon_123229.png", "alt", "Image NASA API", 1, "img-fluid"], ["href", "datos.url"], [1, "text-center"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Astronomy Picture of the Day ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MainComponent_div_11_Template, 6, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, MainComponent_div_12_Template, 7, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.datos.explanation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.datos.media_type == "image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.datos.media_type == "video");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  @import url(\"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200&family=Noto+Sans&display=swap\");\n}\n[_nghost-%COMP%]   .main[_ngcontent-%COMP%] {\n  \n  \n  \n}\n[_nghost-%COMP%]   .main_explicacion[_ngcontent-%COMP%] {\n  text-align: justify;\n  font-size: 20px;\n  font-family: \"IBM Plex Mono\", monospace;\n  position: relative;\n}\n[_nghost-%COMP%]   .main_planeta[_ngcontent-%COMP%] {\n  animation-name: planeta;\n  animation-duration: 10s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n  -webkit-animation-name: planeta;\n  \n  -webkit-animation-duration: 10s;\n  \n  -webkit-animation-iteration-count: infinite;\n  \n  -webkit-animation-timing-function: linear;\n  \n  margin-top: 30px;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n}\n[_nghost-%COMP%]   .main_planeta[_ngcontent-%COMP%], [_nghost-%COMP%]   .main_planeta[_ngcontent-%COMP%]   -shadowcsshost   .main_planeta_tierra[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100px;\n}\n@keyframes planeta {\n  100% {\n    \n    \n    transform: rotate(360deg);\n  }\n}\n[_nghost-%COMP%]   .main_planeta_luna[_ngcontent-%COMP%] {\n  animation-name: luna;\n  animation-duration: 10s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n  -webkit-animation-name: luna;\n  \n  -webkit-animation-duration: 10s;\n  \n  -webkit-animation-iteration-count: infinite;\n  \n  -webkit-animation-timing-function: linear;\n  \n  height: 50px;\n  width: 50px;\n}\n@keyframes luna {\n  100% {\n    \n    \n    transform: rotate(-360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ1ksNEdBQUE7QUFFWjtBQURJO0VBZ0NJLG1CQUFBO0VBMEJBLDBCQUFBO0VBMkJBLDBCQUFBO0FBL0VSO0FBSlE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0FBTVo7QUFxQlE7RUFDSSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLCtCQUFBO0VBQWlDLDBCQUFBO0VBQ2pDLCtCQUFBO0VBQWlDLDBCQUFBO0VBQ2pDLDJDQUFBO0VBQTZDLDBCQUFBO0VBQzdDLHlDQUFBO0VBQTJDLDBCQUFBO0VBQzNDLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBZlo7QUFpQlE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQWZaO0FBaUJRO0VBQ0k7SUFDK0IsU0FBQTtJQUNJLDBCQUFBO0lBQ25DLHlCQUFBO0VBYlY7QUFDRjtBQXVCUTtFQUNJLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsNEJBQUE7RUFBOEIsMEJBQUE7RUFDOUIsK0JBQUE7RUFBaUMsMEJBQUE7RUFDakMsMkNBQUE7RUFBNkMsMEJBQUE7RUFDN0MseUNBQUE7RUFBMkMsMEJBQUE7RUFDM0MsWUFBQTtFQUNBLFdBQUE7QUFSWjtBQVVRO0VBQ0k7SUFDZ0MsU0FBQTtJQUNJLDBCQUFBO0lBQ3BDLDBCQUFBO0VBTlY7QUFDRiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuOmhvc3Qge1xuICBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SUJNK1BsZXgrTW9ubzp3Z2h0QDIwMCZmYW1pbHk9Tm90bytTYW5zJmRpc3BsYXk9c3dhcFwiKTtcbn1cbjpob3N0IC5tYWluIHtcbiAgLypBbmltYWNpw7NuIHRpZXJyYSovXG4gIC8qIENocm9tZSwgU2FmYXJpLCBPcGVyYSAqL1xuICAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cbn1cbjpob3N0IC5tYWluX2V4cGxpY2FjaW9uIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJJQk0gUGxleCBNb25vXCIsIG1vbm9zcGFjZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOmhvc3QgLm1haW5fcGxhbmV0YSB7XG4gIGFuaW1hdGlvbi1uYW1lOiBwbGFuZXRhO1xuICBhbmltYXRpb24tZHVyYXRpb246IDEwcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcGxhbmV0YTtcbiAgLyogQ2hyb21lLCBTYWZhcmksIE9wZXJhICovXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxMHM7XG4gIC8qIENocm9tZSwgU2FmYXJpLCBPcGVyYSAqL1xuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIC8qIENocm9tZSwgU2FmYXJpLCBPcGVyYSAqL1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG46aG9zdCAubWFpbl9wbGFuZXRhLCA6aG9zdCAubWFpbl9wbGFuZXRhIDpob3N0IC5tYWluX3BsYW5ldGFfdGllcnJhIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuQGtleWZyYW1lcyBwbGFuZXRhIHtcbiAgMTAwJSB7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgLyogSUUgOSAqL1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgcGxhbmV0YSB7XG4gIDEwMCUge1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIC8qIElFIDkgKi9cbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgLyogQ2hyb21lLCBTYWZhcmksIE9wZXJhICovXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuOmhvc3QgLm1haW5fcGxhbmV0YV9sdW5hIHtcbiAgYW5pbWF0aW9uLW5hbWU6IGx1bmE7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTBzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBsdW5hO1xuICAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEwcztcbiAgLyogQ2hyb21lLCBTYWZhcmksIE9wZXJhICovXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIC8qIENocm9tZSwgU2FmYXJpLCBPcGVyYSAqL1xuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgLyogQ2hyb21lLCBTYWZhcmksIE9wZXJhICovXG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG59XG5Aa2V5ZnJhbWVzIGx1bmEge1xuICAxMDAlIHtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XG4gICAgLyogSUUgOSAqL1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XG4gICAgLyogQ2hyb21lLCBTYWZhcmksIE9wZXJhICovXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBsdW5hIHtcbiAgMTAwJSB7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xuICAgIC8qIElFIDkgKi9cbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xuICAgIC8qIENocm9tZSwgU2FmYXJpLCBPcGVyYSAqL1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xuICB9XG59Il19 */"] });


/***/ }),

/***/ 5492:
/*!*******************************************************************!*\
  !*** ./src/app/components/techtransfer/techtransfer.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TechtransferComponent": () => (/* binding */ TechtransferComponent)
/* harmony export */ });
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api.service */ 5830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);



class TechtransferComponent {
    constructor(datosService) {
        this.datosService = datosService;
        this.datos = [];
    }
    ngOnInit() {
        this.datosService.datosTransfer().subscribe(response => {
            this.datos = response;
            console.log('============================');
            console.log(this.datos);
        }, error => {
            console.log(error);
        });
    }
}
TechtransferComponent.ɵfac = function TechtransferComponent_Factory(t) { return new (t || TechtransferComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.DatosService)); };
TechtransferComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TechtransferComponent, selectors: [["app-techtransfer"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_services_api_service__WEBPACK_IMPORTED_MODULE_0__.DatosService])], decls: 9, vars: 0, consts: [[1, "container-fluid"], [1, "container", "mt-5"], [1, "row"], [1, "col-md-4"], [1, "text-center"], ["src", "../../../assets/img/1807204.svg", "alt", "", 1, "img-fluid"]], template: function TechtransferComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Page under construction, wait a little longer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWNodHJhbnNmZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5830:
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatosService": () => (/* binding */ DatosService)
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ 3913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);



class DatosService {
    constructor(http) {
        this.http = http;
        this.url = _global__WEBPACK_IMPORTED_MODULE_0__.Global.url;
        this.transfer = _global__WEBPACK_IMPORTED_MODULE_0__.Global.transfer;
        this.key = _global__WEBPACK_IMPORTED_MODULE_0__.Global.key;
    }
    mostrarDatos() {
        return this.http.get(this.url + this.key);
    }
    datosTransfer() {
        return this.http.get(this.transfer + this.key);
    }
}
DatosService.ɵfac = function DatosService_Factory(t) { return new (t || DatosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
DatosService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DatosService, factory: DatosService.ɵfac });


/***/ }),

/***/ 3913:
/*!************************************!*\
  !*** ./src/app/services/global.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Global": () => (/* binding */ Global)
/* harmony export */ });
let Global = {
    url: 'https://api.nasa.gov/planetary/apod?api_key=',
    key: 'PHdcM3y4blkDkI2msWhzhaB4jKIBGu1vEzv6dvjT',
    transfer: 'https://api.nasa.gov/techtransfer/patent/?engine&api_key='
};


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    key: 'PHdcM3y4blkDkI2msWhzhaB4jKIBGu1vEzv6dvjT'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map