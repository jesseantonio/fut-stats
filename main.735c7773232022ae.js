"use strict";
(self["webpackChunkfut_stats"] = self["webpackChunkfut_stats"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class AppComponent {
    constructor() {
        this.title = 'fut-stats';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["*[_ngcontent-%COMP%] {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQXlDO0FBQzNDIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _features_features_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/features.module */ 5790);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/core.module */ 294);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _shared_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/footer/footer.module */ 2735);
/* harmony import */ var _shared_components_header_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/header/header.module */ 3778);
/* harmony import */ var _shared_components_spinner_spinner_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/spinner/spinner.module */ 8721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot([]),
            _features_features_module__WEBPACK_IMPORTED_MODULE_1__.FeaturesModule,
            _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
            _shared_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
            _shared_components_header_header_module__WEBPACK_IMPORTED_MODULE_4__.HeaderModule,
            _shared_components_spinner_spinner_module__WEBPACK_IMPORTED_MODULE_5__.SpinnerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _features_features_module__WEBPACK_IMPORTED_MODULE_1__.FeaturesModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
        _shared_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
        _shared_components_header_header_module__WEBPACK_IMPORTED_MODULE_4__.HeaderModule,
        _shared_components_spinner_spinner_module__WEBPACK_IMPORTED_MODULE_5__.SpinnerModule] }); })();


/***/ }),

/***/ 294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule),
/* harmony export */   "LoaderService": () => (/* reexport safe */ _services_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/loader.service */ 4487);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _entities_loading_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entities/loading.interceptor */ 9840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [
        _services_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService,
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HTTP_INTERCEPTORS,
            useClass: _entities_loading_interceptor__WEBPACK_IMPORTED_MODULE_1__.LoaderInterceptor,
            multi: true
        }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule] }); })();



/***/ }),

/***/ 9840:
/*!******************************************************!*\
  !*** ./src/app/core/entities/loading.interceptor.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderInterceptor": () => (/* binding */ LoaderInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/loader.service */ 4487);




class LoaderInterceptor {
    constructor(loaderService) {
        this.loaderService = loaderService;
        this.requests = [];
    }
    removeRequest(req) {
        const i = this.requests.indexOf(req);
        if (i >= 0) {
            this.requests.splice(i, 1);
        }
        this.loaderService.isLoading.next(this.requests.length > 0);
    }
    intercept(req, next) {
        this.requests.push(req);
        this.loaderService.isLoading.next(true);
        return rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable.create(observer => {
            const subscription = next.handle(req)
                .subscribe(event => {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse) {
                    this.removeRequest(req);
                    observer.next(event);
                }
            }, err => { this.removeRequest(req); observer.error(err); }, () => { this.removeRequest(req); observer.complete(); });
            return () => {
                this.removeRequest(req);
                subscription.unsubscribe();
            };
        });
    }
}
LoaderInterceptor.ɵfac = function LoaderInterceptor_Factory(t) { return new (t || LoaderInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService)); };
LoaderInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: LoaderInterceptor, factory: LoaderInterceptor.ɵfac });


/***/ }),

/***/ 4518:
/*!******************************************!*\
  !*** ./src/app/core/enums/legendType.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LegendType": () => (/* binding */ LegendType)
/* harmony export */ });
var LegendType;
(function (LegendType) {
    LegendType[LegendType["ContinentalFirstDivision"] = 0] = "ContinentalFirstDivision";
    LegendType[LegendType["ContinentalSecondDivision"] = 1] = "ContinentalSecondDivision";
    LegendType[LegendType["ContinentalThirdDivision"] = 2] = "ContinentalThirdDivision";
    LegendType[LegendType["ContinentalQualifiers"] = 3] = "ContinentalQualifiers";
    LegendType[LegendType["Relegated"] = 4] = "Relegated";
    LegendType[LegendType["RelegatedQualifiers"] = 5] = "RelegatedQualifiers";
})(LegendType || (LegendType = {}));


/***/ }),

/***/ 6430:
/*!*****************************************************************!*\
  !*** ./src/app/core/page-not-found/page-not-found.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundComponent": () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 10, vars: 0, consts: [[1, "container"], [1, "gif"], [1, "ag-block"], [1, "ag-player-green-black"], [1, "content"], [1, "main-heading"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "P\u00E1gina n\u00E3o encontrada =(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " desculpe n\u00E3o conseguimos encontrar sua p\u00E1gina... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Poppins\", \"Verdana\", sans-serif;\n}\n.container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.gif[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.content[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 3rem 0;\n}\n.content[_ngcontent-%COMP%]   .main-heading[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n}\np[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  padding: 0.7rem 0;\n}\nbutton[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: 15px;\n  outline: none;\n  border: none;\n  background: #0046d4;\n  color: #fff;\n  font-size: 1.3rem;\n  cursor: pointer;\n}\n\n.ag-player-red[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 319px;\n  width: 413px;\n  margin: 0 0 0 50px;\n  background: url(https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/animation-sprite/images/player-red.png) no-repeat scroll 0 0;\n  -webkit-animation: an-player-red 2s steps(50) infinite;\n  animation: an-player-red 2s steps(50) infinite;\n}\n@-webkit-keyframes an-player-red {\n  to {\n    background-position-x: 100%;\n  }\n}\n@keyframes an-player-red {\n  to {\n    background-position-x: 100%;\n  }\n}\n\n\n.ag-player-green[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 319px;\n  width: 413px;\n  margin: 0 0 0 50px;\n  background: url(https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/animation-sprite/images/player-green.png) no-repeat scroll 0 0;\n  -webkit-animation: an-player-green 2s steps(50) infinite;\n  animation: an-player-green 2s steps(50) infinite;\n}\n@-webkit-keyframes an-player-green {\n  to {\n    background-position-x: 100%;\n  }\n}\n@keyframes an-player-green {\n  to {\n    background-position-x: 100%;\n  }\n}\n\n\n.ag-player-red-blue[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 430px;\n  width: 400px;\n  margin: 0 0 0 50px;\n  background: url(https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/animation-sprite/images/player-red-blue.png) no-repeat scroll 0 0;\n  -webkit-animation: an-player-red-blue 3s steps(80) infinite;\n  animation: an-player-red-blue 3s steps(80) infinite;\n}\n.ag-player-green-black[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 430px;\n  width: 400px;\n  margin: 0 0 0 50px;\n  background: url(https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/animation-sprite/images/player-green-black.png) no-repeat scroll 0 0;\n  -webkit-animation: an-player-green-black 3s steps(80) infinite;\n  animation: an-player-green-black 3s steps(80) infinite;\n}\n@-webkit-keyframes an-player-green-black {\n  to {\n    background-position-x: 100%;\n  }\n}\n@keyframes an-player-green-black {\n  to {\n    background-position-x: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDZGQUFBO0FBRVI7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkNBQUE7QUFBRjtBQUdBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBQUY7QUFHQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUFGO0FBR0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUFBRjtBQUdBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQUFGO0FBR0E7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBQUY7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQUY7QUFHQSxlQUFBO0FBQ0E7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtSkFBQTtFQUVBLHNEQUFBO0VBR0EsOENBQUE7QUFERjtBQUlBO0VBQ0U7SUFDRSwyQkFBQTtFQURGO0FBQ0Y7QUFnQkE7RUFDRTtJQUNFLDJCQUFBO0VBSkY7QUFDRjtBQU9BLGdCQUFBO0FBRUEsaUJBQUE7QUFDQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFKQUFBO0VBRUEsd0RBQUE7RUFHQSxnREFBQTtBQVBGO0FBVUE7RUFDRTtJQUNFLDJCQUFBO0VBUEY7QUFDRjtBQXNCQTtFQUNFO0lBQ0UsMkJBQUE7RUFWRjtBQUNGO0FBYUEsa0JBQUE7QUFFQSxvQkFBQTtBQUNBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0pBQUE7RUFFQSwyREFBQTtFQUdBLG1EQUFBO0FBYkY7QUFnQkE7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwySkFBQTtFQUVBLDhEQUFBO0VBR0Esc0RBQUE7QUFkRjtBQWlCQTtFQUNFO0lBQ0UsMkJBQUE7RUFkRjtBQUNGO0FBNkJBO0VBQ0U7SUFDRSwyQkFBQTtFQWpCRjtBQUNGIiwiZmlsZSI6InBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDIwMDs0MDA7NjAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCAnVmVyZGFuYScsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5naWYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAzcmVtIDA7XHJcbn1cclxuXHJcbi5jb250ZW50IC5tYWluLWhlYWRpbmcge1xyXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIHBhZGRpbmc6IDAuN3JlbSAwO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjMDA0NmQ0O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogcGxheWVyLXJlZCAqL1xyXG4uYWctcGxheWVyLXJlZCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogMzE5cHg7XHJcbiAgd2lkdGg6IDQxM3B4O1xyXG4gIG1hcmdpbjogMCAwIDAgNTBweDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1NvY2hhdmFBRy9leGFtcGxlLW15Y29kZS9tYXN0ZXIvcGVucy9hbmltYXRpb24tc3ByaXRlL2ltYWdlcy9wbGF5ZXItcmVkLnBuZykgbm8tcmVwZWF0IHNjcm9sbCAwIDA7XHJcblxyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBhbi1wbGF5ZXItcmVkIDJzIHN0ZXBzKDUwKSBpbmZpbml0ZTtcclxuICAtbW96LWFuaW1hdGlvbjogYW4tcGxheWVyLXJlZCAycyBzdGVwcyg1MCkgaW5maW5pdGU7XHJcbiAgLW8tYW5pbWF0aW9uOiBhbi1wbGF5ZXItcmVkIDJzIHN0ZXBzKDUwKSBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IGFuLXBsYXllci1yZWQgMnMgc3RlcHMoNTApIGluZmluaXRlO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgYW4tcGxheWVyLXJlZCB7XHJcbiAgdG8ge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIGFuLXBsYXllci1yZWQge1xyXG4gIHRvIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbkAtby1rZXlmcmFtZXMgYW4tcGxheWVyLXJlZCB7XHJcbiAgdG8ge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBhbi1wbGF5ZXItcmVkIHtcclxuICB0byB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiAvcGxheWVyLXJlZCAqL1xyXG5cclxuLyogcGxheWVyLWdyZWVuICovXHJcbi5hZy1wbGF5ZXItZ3JlZW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDMxOXB4O1xyXG4gIHdpZHRoOiA0MTNweDtcclxuICBtYXJnaW46IDAgMCAwIDUwcHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Tb2NoYXZhQUcvZXhhbXBsZS1teWNvZGUvbWFzdGVyL3BlbnMvYW5pbWF0aW9uLXNwcml0ZS9pbWFnZXMvcGxheWVyLWdyZWVuLnBuZykgbm8tcmVwZWF0IHNjcm9sbCAwIDA7XHJcblxyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBhbi1wbGF5ZXItZ3JlZW4gMnMgc3RlcHMoNTApIGluZmluaXRlO1xyXG4gIC1tb3otYW5pbWF0aW9uOiBhbi1wbGF5ZXItZ3JlZW4gMnMgc3RlcHMoNTApIGluZmluaXRlO1xyXG4gIC1vLWFuaW1hdGlvbjogYW4tcGxheWVyLWdyZWVuIDJzIHN0ZXBzKDUwKSBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IGFuLXBsYXllci1ncmVlbiAycyBzdGVwcyg1MCkgaW5maW5pdGU7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBhbi1wbGF5ZXItZ3JlZW4ge1xyXG4gIHRvIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbkAtbW96LWtleWZyYW1lcyBhbi1wbGF5ZXItZ3JlZW4ge1xyXG4gIHRvIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbkAtby1rZXlmcmFtZXMgYW4tcGxheWVyLWdyZWVuIHtcclxuICB0byB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuLXBsYXllci1ncmVlbiB7XHJcbiAgdG8ge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLyogL3BsYXllci1ncmVlbiAqL1xyXG5cclxuLyogcGxheWVyLXJlZC1ibHVlICovXHJcbi5hZy1wbGF5ZXItcmVkLWJsdWUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDQzMHB4O1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBtYXJnaW46IDAgMCAwIDUwcHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Tb2NoYXZhQUcvZXhhbXBsZS1teWNvZGUvbWFzdGVyL3BlbnMvYW5pbWF0aW9uLXNwcml0ZS9pbWFnZXMvcGxheWVyLXJlZC1ibHVlLnBuZykgbm8tcmVwZWF0IHNjcm9sbCAwIDA7XHJcblxyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBhbi1wbGF5ZXItcmVkLWJsdWUgM3Mgc3RlcHMoODApIGluZmluaXRlO1xyXG4gIC1tb3otYW5pbWF0aW9uOiBhbi1wbGF5ZXItcmVkLWJsdWUgM3Mgc3RlcHMoODApIGluZmluaXRlO1xyXG4gIC1vLWFuaW1hdGlvbjogYW4tcGxheWVyLXJlZC1ibHVlIDNzIHN0ZXBzKDgwKSBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IGFuLXBsYXllci1yZWQtYmx1ZSAzcyBzdGVwcyg4MCkgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5hZy1wbGF5ZXItZ3JlZW4tYmxhY2sge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDQzMHB4O1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBtYXJnaW46IDAgMCAwIDUwcHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Tb2NoYXZhQUcvZXhhbXBsZS1teWNvZGUvbWFzdGVyL3BlbnMvYW5pbWF0aW9uLXNwcml0ZS9pbWFnZXMvcGxheWVyLWdyZWVuLWJsYWNrLnBuZykgbm8tcmVwZWF0IHNjcm9sbCAwIDA7XHJcblxyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBhbi1wbGF5ZXItZ3JlZW4tYmxhY2sgM3Mgc3RlcHMoODApIGluZmluaXRlO1xyXG4gIC1tb3otYW5pbWF0aW9uOiBhbi1wbGF5ZXItZ3JlZW4tYmxhY2sgM3Mgc3RlcHMoODApIGluZmluaXRlO1xyXG4gIC1vLWFuaW1hdGlvbjogYW4tcGxheWVyLWdyZWVuLWJsYWNrIDNzIHN0ZXBzKDgwKSBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IGFuLXBsYXllci1ncmVlbi1ibGFjayAzcyBzdGVwcyg4MCkgaW5maW5pdGU7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBhbi1wbGF5ZXItZ3JlZW4tYmxhY2sge1xyXG4gIHRvIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbkAtbW96LWtleWZyYW1lcyBhbi1wbGF5ZXItZ3JlZW4tYmxhY2sge1xyXG4gIHRvIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbkAtby1rZXlmcmFtZXMgYW4tcGxheWVyLWdyZWVuLWJsYWNrIHtcclxuICB0byB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuLXBsYXllci1ncmVlbi1ibGFjayB7XHJcbiAgdG8ge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 4487:
/*!*************************************************!*\
  !*** ./src/app/core/services/loader.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderService": () => (/* binding */ LoaderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class LoaderService {
    constructor() {
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    }
}
LoaderService.ɵfac = function LoaderService_Factory(t) { return new (t || LoaderService)(); };
LoaderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoaderService, factory: LoaderService.ɵfac });


/***/ }),

/***/ 4617:
/*!********************************************************!*\
  !*** ./src/app/core/services/local-storage.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStorageService": () => (/* binding */ LocalStorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class LocalStorageService {
    constructor() {
        this.storage = window.localStorage;
    }
    set(key, value) {
        if (this.storage) {
            this.storage.setItem(key, JSON.stringify(value));
            return true;
        }
        return false;
    }
    get(key) {
        if (this.storage) {
            return JSON.parse(this.storage.getItem(key));
        }
        return null;
    }
    remove(key) {
        if (this.storage) {
            this.storage.removeItem(key);
            return true;
        }
        return false;
    }
    clear() {
        if (this.storage) {
            this.storage.clear();
            return true;
        }
        return false;
    }
}
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); };
LocalStorageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3091:
/*!************************************************!*\
  !*** ./src/app/core/services/teams.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamsService": () => (/* binding */ TeamsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class TeamsService {
    constructor(http) {
        this.http = http;
        this._team = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.baseUrl = "https://api-football-standings.azharimm.dev";
    }
    all(league, season) {
        return this.http.get(`${this.baseUrl}/leagues/${league}.1/standings?season=${season}`);
    }
    getOne(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    logoTime() {
        return this.http.get(`${this.baseUrl}/leagues`);
    }
}
TeamsService.ɵfac = function TeamsService_Factory(t) { return new (t || TeamsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
TeamsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TeamsService, factory: TeamsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1656:
/*!*****************************************************!*\
  !*** ./src/app/features/features-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturesRoutingModule": () => (/* binding */ FeaturesRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _core_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/page-not-found/page-not-found.component */ 6430);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadChildren: () => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(void 0, void 0, void 0, function* () { return __webpack_require__.e(/*! import() */ "src_app_layout_layout_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../layout/layout.module */ 4805)).then((m) => m.LayoutModule); }),
    },
    {
        path: 'teams',
        loadChildren: () => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(void 0, void 0, void 0, function* () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./team/team.module */ 4671)).then((m) => m.TeamModule); }),
    },
    {
        path: '**',
        component: _core_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_0__.PageNotFoundComponent,
    },
];
class FeaturesRoutingModule {
}
FeaturesRoutingModule.ɵfac = function FeaturesRoutingModule_Factory(t) { return new (t || FeaturesRoutingModule)(); };
FeaturesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: FeaturesRoutingModule });
FeaturesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FeaturesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5790:
/*!*********************************************!*\
  !*** ./src/app/features/features.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturesModule": () => (/* binding */ FeaturesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/footer/footer.module */ 2735);
/* harmony import */ var _shared_components_header_header_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/components/header/header.module */ 3778);
/* harmony import */ var _shared_components_spinner_spinner_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/spinner/spinner.module */ 8721);
/* harmony import */ var _shared_components_toast_toast_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/toast/toast.module */ 4073);
/* harmony import */ var _features_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features-routing.module */ 1656);
/* harmony import */ var _team_team_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./team/team.module */ 4671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);








class FeaturesModule {
}
FeaturesModule.ɵfac = function FeaturesModule_Factory(t) { return new (t || FeaturesModule)(); };
FeaturesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: FeaturesModule });
FeaturesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _features_routing_module__WEBPACK_IMPORTED_MODULE_4__.FeaturesRoutingModule,
            _team_team_module__WEBPACK_IMPORTED_MODULE_5__.TeamModule,
            _shared_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_0__.FooterModule,
            _shared_components_header_header_module__WEBPACK_IMPORTED_MODULE_1__.HeaderModule,
            _shared_components_toast_toast_module__WEBPACK_IMPORTED_MODULE_3__.ToastModule,
            _shared_components_spinner_spinner_module__WEBPACK_IMPORTED_MODULE_2__.SpinnerModule
        ], _team_team_module__WEBPACK_IMPORTED_MODULE_5__.TeamModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](FeaturesModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _features_routing_module__WEBPACK_IMPORTED_MODULE_4__.FeaturesRoutingModule,
        _team_team_module__WEBPACK_IMPORTED_MODULE_5__.TeamModule,
        _shared_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_0__.FooterModule,
        _shared_components_header_header_module__WEBPACK_IMPORTED_MODULE_1__.HeaderModule,
        _shared_components_toast_toast_module__WEBPACK_IMPORTED_MODULE_3__.ToastModule,
        _shared_components_spinner_spinner_module__WEBPACK_IMPORTED_MODULE_2__.SpinnerModule], exports: [_team_team_module__WEBPACK_IMPORTED_MODULE_5__.TeamModule] }); })();


/***/ }),

/***/ 80:
/*!**************************************************************!*\
  !*** ./src/app/features/team/dropdown/dropdown.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownComponent": () => (/* binding */ DropdownComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



function DropdownComponent_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const season_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", season_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", season_r2, " ");
} }
class DropdownComponent {
    constructor() {
        this.seasons = ["2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013"];
        this.selectedSeason = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    ngOnInit() {
    }
    onSelected(e) {
        this.selectedSeason.next(e.target.value);
    }
}
DropdownComponent.ɵfac = function DropdownComponent_Factory(t) { return new (t || DropdownComponent)(); };
DropdownComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DropdownComponent, selectors: [["app-dropdown"]], outputs: { selectedSeason: "selectedSeason" }, decls: 5, vars: 1, consts: [[1, "dropdown"], [1, "select-dropdown"], [3, "change"], ["seasonsDropdown", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "text-dropdown"]], template: function DropdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "select", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DropdownComponent_Template_select_change_2_listener($event) { return ctx.onSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DropdownComponent_option_4_Template, 3, 2, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.seasons);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: [".dropdown[_ngcontent-%COMP%] {\n  width: 1200px;\n  border: none;\n  margin: 0 auto;\n  padding: 0.8%;\n}\n\n.select-dropdown[_ngcontent-%COMP%], .select-dropdown[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  box-sizing: border-box;\n}\n\n.select-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #0a3151;\n  border-radius: 4px;\n  width: 15%;\n}\n\n.select-dropdown[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  color: #ffff;\n  font-size: 1rem;\n  font-weight: normal;\n  padding: 8px 24px 8px 10px;\n  font-family: \"Poppins\", \"Verdana\", sans-serif;\n  border: none;\n  background-color: transparent;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  width: 100%;\n}\n\n.select-dropdown[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:active, .select-dropdown[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n.select-dropdown[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  right: 8px;\n  width: 0;\n  height: 0;\n  margin-top: -2px;\n  border-top: 5px solid #fff;\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n}\n\n.text-dropdown[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.select-dropdown[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", \"Verdana\", sans-serif;\n  font-size: 1rem;\n  font-weight: normal;\n  background: white;\n  color: #0a3151;\n  border: 15px solid black;\n  width: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyb3Bkb3duLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQUNEOztBQUVBOztFQUVDLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUNEOztBQUVBO0VBQ0Msa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUNEOztBQUVBO0VBQ0MsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkNBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0Q7O0FBRUE7O0VBRUMsYUFBQTtFQUNBLGdCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QUFDRDs7QUFFQTtFQUNDLFlBQUE7QUFDRDs7QUFFQTtFQUNDLDZDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0FBQ0QiLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24ge1xyXG5cdHdpZHRoOiAxMjAwcHg7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdHBhZGRpbmc6IDAuOCU7XHJcbiAgfVxyXG5cclxuLnNlbGVjdC1kcm9wZG93bixcclxuLnNlbGVjdC1kcm9wZG93biAqIHtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnNlbGVjdC1kcm9wZG93biB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwYTMxNTE7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdHdpZHRoOiAxNSU7XHJcbn1cclxuXHJcbi5zZWxlY3QtZHJvcGRvd24gc2VsZWN0IHtcclxuXHRjb2xvcjogI2ZmZmY7XHJcblx0Zm9udC1zaXplOiAxcmVtO1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0cGFkZGluZzogOHB4IDI0cHggOHB4IDEwcHg7XHJcblx0Zm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBcIlZlcmRhbmFcIiwgc2Fucy1zZXJpZjtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG5cdC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuXHRhcHBlYXJhbmNlOiBub25lO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2VsZWN0LWRyb3Bkb3duIHNlbGVjdDphY3RpdmUsXHJcbi5zZWxlY3QtZHJvcGRvd24gc2VsZWN0OmZvY3VzIHtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5zZWxlY3QtZHJvcGRvd246YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogNTAlO1xyXG5cdHJpZ2h0OiA4cHg7XHJcblx0d2lkdGg6IDA7XHJcblx0aGVpZ2h0OiAwO1xyXG5cdG1hcmdpbi10b3A6IC0ycHg7XHJcblx0Ym9yZGVyLXRvcDogNXB4IHNvbGlkICNmZmY7XHJcblx0Ym9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcblx0Ym9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnRleHQtZHJvcGRvd24ge1xyXG5cdGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnNlbGVjdC1kcm9wZG93biBvcHRpb24ge1xyXG5cdGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgXCJWZXJkYW5hXCIsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOiAxcmVtO1xyXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0YmFja2dyb3VuZDogd2hpdGU7XHJcblx0Y29sb3I6ICMwYTMxNTE7XHJcblx0Ym9yZGVyOiAxNXB4IHNvbGlkIGJsYWNrO1xyXG5cdHdpZHRoOiAxNSU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 9027:
/*!************************************************************************!*\
  !*** ./src/app/features/team/table-caption/table-caption.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableCaptionComponent": () => (/* binding */ TableCaptionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 4617);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);




function TableCaptionComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.league.continental.continentalFirstDivision.name, " ");
} }
function TableCaptionComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.league.continental.continentalQualifiers.name, " ");
} }
function TableCaptionComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.league.continental.continentalSecondDivision.name, " ");
} }
function TableCaptionComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.league.continental.continentalThirdDivision.name, " ");
} }
function TableCaptionComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Eliminat\u00F3rias do rebaixamento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableCaptionComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Rebaixamento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class TableCaptionComponent {
    constructor(router, localStorageService) {
        this.router = router;
        this.localStorageService = localStorageService;
        if (this.router.getCurrentNavigation().extras.state != undefined) {
            this.league = this.router.getCurrentNavigation().extras.state[0];
        }
        else {
            this.league = localStorageService.get("league");
        }
    }
    ngOnInit() {
    }
}
TableCaptionComponent.ɵfac = function TableCaptionComponent_Factory(t) { return new (t || TableCaptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService)); };
TableCaptionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TableCaptionComponent, selectors: [["app-table-caption"]], inputs: { season: "season" }, decls: 11, vars: 6, consts: [[1, "table-caption"], [1, "table-caption-content"], [1, "title"], [4, "ngIf"], ["id", "first_division", 1, "square"], ["id", "first_qualifiers", 1, "square"], ["id", "second_division", 1, "square"], ["id", "third_division", 1, "square"], ["id", "relegated_qualifiers", 1, "square"], ["id", "relegated", 1, "square"]], template: function TableCaptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Qualifica\u00E7\u00E3o/Rebaixamento");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TableCaptionComponent_div_5_Template, 4, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TableCaptionComponent_div_6_Template, 4, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, TableCaptionComponent_div_7_Template, 4, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TableCaptionComponent_div_8_Template, 4, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TableCaptionComponent_div_9_Template, 4, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, TableCaptionComponent_div_10_Template, 4, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.league.continental.continentalFirstDivision);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.league.continental.continentalQualifiers);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.league.continental.continentalSecondDivision);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.league.continental.continentalThirdDivision);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.league.relegated && ctx.league.relegated.qualifiersAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.league.relegated);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap\");\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  font-family: \"Poppins\", \"Verdana\", sans-serif;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", \"Verdana\", sans-serif;\n  display: flex;\n  align-items: center;\n  min-height: 100vh;\n  color: #444;\n  overflow: hidden;\n}\n.square[_ngcontent-%COMP%] {\n  border-radius: 1px;\n  display: inline-block;\n  height: 8px;\n  vertical-align: middle;\n  width: 8px;\n}\n#first_division[_ngcontent-%COMP%] {\n  background-color: #4285F4;\n}\n#first_qualifiers[_ngcontent-%COMP%] {\n  background-color: #fa7b17;\n}\n#second_division[_ngcontent-%COMP%] {\n  background-color: #34A853;\n}\n#third_division[_ngcontent-%COMP%] {\n  background-color: #24C1E0;\n}\n#relegated[_ngcontent-%COMP%] {\n  background-color: #EA4335;\n}\n#relegated_qualifiers[_ngcontent-%COMP%] {\n  background-color: #FBBC04;\n}\n.table-caption[_ngcontent-%COMP%] {\n  width: 1200px;\n  border: 1px solid #ddd;\n  margin: 0 auto;\n  padding: 0.8%;\n}\n.title[_ngcontent-%COMP%] {\n  margin-bottom: 0.4%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLWNhcHRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsNkZBQUE7QUFFUjtFQUNFLHNCQUFBO0VBQ0EsNkNBQUE7QUFBRjtBQUdBO0VBQ0UsNkNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUFGO0FBR0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQUFGO0FBR0E7RUFDRSx5QkFBQTtBQUFGO0FBR0E7RUFDRSx5QkFBQTtBQUFGO0FBR0E7RUFDRSx5QkFBQTtBQUFGO0FBR0E7RUFDRSx5QkFBQTtBQUFGO0FBR0E7RUFDRSx5QkFBQTtBQUFGO0FBRUE7RUFDRSx5QkFBQTtBQUNGO0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQUNGO0FBRUE7RUFDRSxtQkFBQTtBQUNGIiwiZmlsZSI6InRhYmxlLWNhcHRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzQwMDs2MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsICdWZXJkYW5hJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBcIlZlcmRhbmFcIiwgc2Fucy1zZXJpZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgY29sb3I6ICM0NDQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnNxdWFyZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDhweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHdpZHRoOiA4cHg7XHJcbn1cclxuXHJcbiNmaXJzdF9kaXZpc2lvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyODVGNDtcclxufVxyXG5cclxuI2ZpcnN0X3F1YWxpZmllcnMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYTdiMTc7XHJcbn1cclxuXHJcbiNzZWNvbmRfZGl2aXNpb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNEE4NTM7XHJcbn1cclxuXHJcbiN0aGlyZF9kaXZpc2lvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0QzFFMDtcclxufVxyXG5cclxuI3JlbGVnYXRlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VBNDMzNTtcclxufVxyXG4jcmVsZWdhdGVkX3F1YWxpZmllcnMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGQkJDMDQ7XHJcbn1cclxuXHJcbi50YWJsZS1jYXB0aW9uIHtcclxuICB3aWR0aDogMTIwMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMC44JTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAwLjQlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 2999:
/*!********************************************************!*\
  !*** ./src/app/features/team/table/table.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableComponent": () => (/* binding */ TableComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var src_app_core_enums_legendType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/enums/legendType */ 4518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_teams_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/teams.service */ 3091);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 4617);
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/core.module */ 294);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/spinner/spinner.component */ 2925);









const _c0 = ["table"];
function TableComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div");
} }
function TableComponent_div_2_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const header_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", header_r7, " ");
} }
function TableComponent_div_2_tr_6_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stat_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", stat_r11.value, " ");
} }
function TableComponent_div_2_tr_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, TableComponent_div_2_tr_6_td_8_Template, 3, 1, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const team_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", i_r9 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", team_r8.logos[0].href, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", team_r8.displayName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r6.formatTeamStats(team_r8.stats));
} }
function TableComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "table", null, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, TableComponent_div_2_th_5_Template, 3, 1, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, TableComponent_div_2_tr_6_Template, 9, 4, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.headers);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.teams);
} }
function TableComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-spinner");
} }
class TableComponent {
    constructor(teamsService, router, localStorageService, loaderService) {
        this.teamsService = teamsService;
        this.router = router;
        this.loaderService = loaderService;
        this.logos = [];
        this.teams = [];
        this.headers = ['Clube', 'Pontos', 'Partidas Jogadas', 'Vitórias', 'Empates', 'Derrotas', 'Gols Marcados', 'Gols Sofridos', 'Saldo de Gols'];
        this.ACTUAL_SEASON = 2022;
        this.alert = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        if (this.router.getCurrentNavigation().extras.state != undefined) {
            this.selectedLeague = this.router.getCurrentNavigation().extras.state[0];
            3;
            localStorageService.set("league", this.selectedLeague);
        }
        else {
            this.selectedLeague = localStorageService.get("league");
        }
    }
    ngOnInit() {
        this.buildTable();
        this.getTeamLogo();
        this.alert.next(this.selectedLeague.alert);
    }
    ngAfterViewChecked() {
        if (this.season != null) {
            this.getTeamStats(this.selectedLeague.name, this.season);
        }
        if (this.table != null) {
            this.setColorPositionInRow();
        }
    }
    buildTable() {
        this.getTeamStats(this.selectedLeague.name, this.ACTUAL_SEASON);
    }
    getTeamStats(league, season) {
        this.teamsService.all(league, season).subscribe((value) => {
            this.teams = value.data.standings.map((standing) => (Object.assign(Object.assign({}, standing.team), { stats: standing.stats.filter(stat => !['All Splits', 'deductions', 'ppg', 'rankChange', 'rank'].includes(stat.name)).sort() })));
            this.season = null;
        });
    }
    getTeamLogo() {
        this.teamsService.logoTime().subscribe((value) => {
            let logosTimes = value.data.map((standing) => standing.logos["light"]);
            this.logos = logosTimes;
        });
    }
    formatTeamStats(obj) {
        const [jogosJogados, derrotas, pontos, GC, GM, empates, vitorias, saldoDeGols] = obj;
        const newObjStats = { pontos, jogosJogados, vitorias, empates, derrotas, GM, GC, saldoDeGols };
        return this.stats = Object.keys(newObjStats).map(function (key) { return newObjStats[key]; });
    }
    setRelegatedPositions() {
        if (this.selectedLeague.relegated != null) {
            this.selectedLeague.relegated.amount.forEach((position) => {
                this.styleRowTable(this.table.nativeElement.children[position], this.table.nativeElement.lastElementChild, src_app_core_enums_legendType__WEBPACK_IMPORTED_MODULE_0__.LegendType.Relegated);
            });
        }
    }
    setRelegatedQualifierPositions() {
        if (this.selectedLeague.relegated != null && this.selectedLeague.relegated.qualifiersAmount != null) {
            this.selectedLeague.relegated.qualifiersAmount.forEach((position) => {
                this.styleRowTable(this.table.nativeElement.children[position], this.table.nativeElement.lastElementChild, src_app_core_enums_legendType__WEBPACK_IMPORTED_MODULE_0__.LegendType.RelegatedQualifiers);
            });
        }
    }
    setContinentalFirstDivisionPositions() {
        if (this.selectedLeague.continental.continentalFirstDivision != null) {
            this.selectedLeague.continental.continentalFirstDivision.amount.forEach((position) => {
                this.styleRowTable(this.table.nativeElement.children[position], this.table.nativeElement.lastElementChild, src_app_core_enums_legendType__WEBPACK_IMPORTED_MODULE_0__.LegendType.ContinentalFirstDivision);
            });
        }
    }
    setContinentalQualifiersPositions() {
        if (this.selectedLeague.continental.continentalQualifiers != null) {
            this.selectedLeague.continental.continentalQualifiers.amount.forEach((position) => {
                this.styleRowTable(this.table.nativeElement.children[position], this.table.nativeElement.lastElementChild, src_app_core_enums_legendType__WEBPACK_IMPORTED_MODULE_0__.LegendType.ContinentalQualifiers);
            });
        }
    }
    setContinentalSecondDivisionPositions() {
        if (this.selectedLeague.continental.continentalSecondDivision != null) {
            this.selectedLeague.continental.continentalSecondDivision.amount.forEach((position) => {
                this.styleRowTable(this.table.nativeElement.children[position], this.table.nativeElement.lastElementChild, src_app_core_enums_legendType__WEBPACK_IMPORTED_MODULE_0__.LegendType.ContinentalSecondDivision);
            });
        }
    }
    setContinentalThirdDivisionPositions() {
        if (this.selectedLeague.continental.continentalThirdDivision != null) {
            this.selectedLeague.continental.continentalThirdDivision.amount.forEach((position) => {
                this.styleRowTable(this.table.nativeElement.children[position], this.table.nativeElement.lastElementChild, src_app_core_enums_legendType__WEBPACK_IMPORTED_MODULE_0__.LegendType.ContinentalThirdDivision);
            });
        }
    }
    styleRowTable(row, lastRow, type) {
        if (row != null && lastRow != null) {
            if (type === src_app_core_enums_legendType__WEBPACK_IMPORTED_MODULE_0__.LegendType.Relegated) {
                row.style.backgroundImage = "url('https://www.colorhexa.com/EA4335.png')";
            }
            else if (type === src_app_core_enums_legendType__WEBPACK_IMPORTED_MODULE_0__.LegendType.ContinentalFirstDivision) {
                row.style.backgroundImage = "url('https://www.colorhexa.com/4285f4.png')";
            }
            else if (type === src_app_core_enums_legendType__WEBPACK_IMPORTED_MODULE_0__.LegendType.ContinentalQualifiers) {
                row.style.backgroundImage = "url('https://www.colorhexa.com/fa7b17.png')";
            }
            else if (type === src_app_core_enums_legendType__WEBPACK_IMPORTED_MODULE_0__.LegendType.ContinentalSecondDivision) {
                row.style.backgroundImage = "url('https://www.colorhexa.com/34A853.png')";
            }
            else if (type === src_app_core_enums_legendType__WEBPACK_IMPORTED_MODULE_0__.LegendType.ContinentalThirdDivision) {
                row.style.backgroundImage = "url('https://www.colorhexa.com/24C1E0.png')";
            }
            else {
                row.style.backgroundImage = "url('https://www.colorhexa.com/FBBC04.png')";
            }
            row.style.backgroundRepeat = "no-repeat";
            row.style.backgroundSize = "2.5px 98%";
            lastRow.style.backgroundSize = "2.5px 100%";
        }
    }
    setColorPositionInRow() {
        this.setRelegatedPositions();
        this.setRelegatedQualifierPositions();
        this.setContinentalFirstDivisionPositions();
        this.setContinentalSecondDivisionPositions();
        this.setContinentalQualifiersPositions();
        this.setContinentalThirdDivisionPositions();
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_teams_service__WEBPACK_IMPORTED_MODULE_1__.TeamsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_core_module__WEBPACK_IMPORTED_MODULE_3__.LoaderService)); };
TableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["app-table"]], viewQuery: function TableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, inputs: { season: "season" }, outputs: { alert: "alert" }, decls: 6, vars: 8, consts: [[4, "ngIf", "ngIfElse"], ["loadingState", ""], [1, "container-inner"], ["table", ""], [4, "ngFor", "ngForOf"], [1, "info"], [1, "position"], [1, "logo"], ["alt", "", 1, "logo_time", 3, "src"], [1, "name"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, TableComponent_div_0_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, TableComponent_div_2_Template, 7, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, TableComponent_ng_template_4_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 4, ctx.loaderService.isLoading))("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 6, ctx.loaderService.isLoading))("ngIfElse", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__.SpinnerComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap\");\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  font-family: \"Poppins\", \"Verdana\", sans-serif;\n}\n.logo_time[_ngcontent-%COMP%] {\n  width: 23px;\n  height: 23px;\n}\n.container-inner[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 5px;\n  margin-bottom: 30px;\n  overflow: hidden;\n  padding: 24px;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", \"Verdana\", sans-serif;\n  display: flex;\n  align-items: center;\n  min-height: 100vh;\n  color: #444;\n  overflow: hidden;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-spacing: 0;\n  border: none;\n  overflow: hidden;\n}\nthead[_ngcontent-%COMP%] {\n  visibility: hidden;\n  position: absolute;\n  width: 0;\n  height: 0;\n}\nth[_ngcontent-%COMP%] {\n  background: #ffff;\n  color: black;\n}\n._ngcontent-sgs-c5[_ngcontent-%COMP%] {\n  color: red;\n}\ntd[_ngcontent-%COMP%]::before {\n  content: attr(data-label);\n  position: absolute;\n  left: 0;\n  padding-left: 1em;\n  font-weight: 600;\n  font-size: 12px;\n}\n.tess[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\ntr[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 1em;\n  text-align: right;\n}\ntr[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 0;\n}\nth[_ngcontent-%COMP%]:nth-child(9n+1) {\n  padding-left: 20px;\n  margin-right: 450px;\n}\n.info[_ngcontent-%COMP%] {\n  display: flex;\n}\n.logo[_ngcontent-%COMP%] {\n  margin-right: 12px;\n  margin-left: 12px;\n}\n@media only screen and (min-width: 768px) {\n  table[_ngcontent-%COMP%] {\n    max-width: 1200px;\n    margin: 0 auto;\n    border: 1px solid #ddd;\n  }\n\n  thead[_ngcontent-%COMP%] {\n    visibility: visible;\n    position: relative;\n  }\n\n  th[_ngcontent-%COMP%] {\n    text-align: left;\n    margin-bottom: 20px;\n    font-size: 14px;\n  }\n\n  tr[_ngcontent-%COMP%] {\n    display: table-row;\n    border: none;\n    border-radius: 0;\n    text-align: left;\n  }\n\n  tr[_ngcontent-%COMP%]:nth-child(even) {\n    background-color: #ececec;\n  }\n\n  td[_ngcontent-%COMP%] {\n    display: table-cell;\n    vertical-align: middle;\n  }\n\n  td[_ngcontent-%COMP%]::before {\n    content: none;\n  }\n\n  td[_ngcontent-%COMP%]:nth-child(1) {\n    background: transparent;\n    color: #444;\n    border-radius: 0;\n  }\n\n  td[_ngcontent-%COMP%]:nth-child(n+2):nth-child(odd) {\n    background-color: transparent;\n  }\n}\ntd[_ngcontent-%COMP%] {\n  padding-left: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDZGQUFBO0FBRVI7RUFDRSxzQkFBQTtFQUNBLDZDQUFBO0FBQUY7QUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQUY7QUFHQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUFGO0FBR0E7RUFDRSw2Q0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQUY7QUFHQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUFGO0FBR0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFBRjtBQUdBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FBQUY7QUFFQTtFQUNFLFVBQUE7QUFDRjtBQUVBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNGO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFFRjtBQUFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFHRjtBQUFBO0VBQ0UsZ0JBQUE7QUFHRjtBQUFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUdGO0FBQUE7RUFDRSxhQUFBO0FBR0Y7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFHRjtBQUFBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLGNBQUE7SUFDQSxzQkFBQTtFQUdGOztFQUFBO0lBQ0UsbUJBQUE7SUFDQSxrQkFBQTtFQUdGOztFQUFBO0lBQ0UsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7RUFHRjs7RUFBQTtJQUNFLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUFHRjs7RUFBQTtJQUNFLHlCQUFBO0VBR0Y7O0VBQUE7SUFDRSxtQkFBQTtJQUNBLHNCQUFBO0VBR0Y7O0VBQUE7SUFDRSxhQUFBO0VBR0Y7O0VBQUE7SUFDRSx1QkFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtFQUdGOztFQUFBO0lBQ0UsNkJBQUE7RUFHRjtBQUNGO0FBQUE7RUFDRSxrQkFBQTtBQUVGIiwiZmlsZSI6InRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7NDAwOzYwMCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgXCJWZXJkYW5hXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5sb2dvX3RpbWUge1xyXG4gIHdpZHRoOiAyM3B4O1xyXG4gIGhlaWdodDogMjNweDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1pbm5lciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmc6IDI0cHg7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgXCJWZXJkYW5hXCIsIHNhbnMtc2VyaWY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGNvbG9yOiAjNDQ0O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItc3BhY2luZzogMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxudGhlYWQge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG50aCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmY7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5fbmdjb250ZW50LXNncy1jNSB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxudGQ6OmJlZm9yZSB7XHJcbiAgY29udGVudDogYXR0cihkYXRhLWxhYmVsKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBwYWRkaW5nLWxlZnQ6IDFlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4udGVzcyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG50ciB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxudHI6bGFzdC1vZi10eXBlIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG50aDpudGgtY2hpbGQoOW4gKyAxKSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNDUwcHg7XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgdGFibGUge1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgfVxyXG5cclxuICB0aGVhZCB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgdGgge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5cclxuICB0ciB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcblxyXG4gIHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xyXG4gIH1cclxuXHJcbiAgdGQge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG5cclxuICB0ZDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IG5vbmU7XHJcbiAgfVxyXG5cclxuICB0ZDpudGgtY2hpbGQoMSkge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogIzQ0NDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG5cclxuICB0ZDpudGgtY2hpbGQobiArIDIpOm50aC1jaGlsZChvZGQpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxufVxyXG5cclxudGQge1xyXG4gIHBhZGRpbmctbGVmdDogMjVweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 2807:
/*!******************************************************!*\
  !*** ./src/app/features/team/team-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamRoutingModule": () => (/* binding */ TeamRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/view.component */ 1273);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _view_view_component__WEBPACK_IMPORTED_MODULE_0__.ViewComponent,
    },
];
class TeamRoutingModule {
}
TeamRoutingModule.ɵfac = function TeamRoutingModule_Factory(t) { return new (t || TeamRoutingModule)(); };
TeamRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TeamRoutingModule });
TeamRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TeamRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 4671:
/*!**********************************************!*\
  !*** ./src/app/features/team/team.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamModule": () => (/* binding */ TeamModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 7217);
/* harmony import */ var src_app_shared_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/footer/footer.module */ 2735);
/* harmony import */ var src_app_shared_components_header_header_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/header/header.module */ 3778);
/* harmony import */ var _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown/dropdown.component */ 80);
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table/table.component */ 2999);
/* harmony import */ var _team_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./team-routing.module */ 2807);
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/view.component */ 1273);
/* harmony import */ var _table_caption_table_caption_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table-caption/table-caption.component */ 9027);
/* harmony import */ var src_app_shared_components_toast_toast_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/toast/toast.module */ 4073);
/* harmony import */ var src_app_shared_components_spinner_spinner_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/components/spinner/spinner.module */ 8721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);













class TeamModule {
}
TeamModule.ɵfac = function TeamModule_Factory(t) { return new (t || TeamModule)(); };
TeamModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: TeamModule });
TeamModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _team_routing_module__WEBPACK_IMPORTED_MODULE_4__.TeamRoutingModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableModule,
            src_app_shared_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_0__.FooterModule,
            src_app_shared_components_header_header_module__WEBPACK_IMPORTED_MODULE_1__.HeaderModule,
            src_app_shared_components_toast_toast_module__WEBPACK_IMPORTED_MODULE_7__.ToastModule,
            src_app_shared_components_spinner_spinner_module__WEBPACK_IMPORTED_MODULE_8__.SpinnerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](TeamModule, { declarations: [_table_table_component__WEBPACK_IMPORTED_MODULE_3__.TableComponent, _view_view_component__WEBPACK_IMPORTED_MODULE_5__.ViewComponent, _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_2__.DropdownComponent, _table_caption_table_caption_component__WEBPACK_IMPORTED_MODULE_6__.TableCaptionComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _team_routing_module__WEBPACK_IMPORTED_MODULE_4__.TeamRoutingModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableModule,
        src_app_shared_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_0__.FooterModule,
        src_app_shared_components_header_header_module__WEBPACK_IMPORTED_MODULE_1__.HeaderModule,
        src_app_shared_components_toast_toast_module__WEBPACK_IMPORTED_MODULE_7__.ToastModule,
        src_app_shared_components_spinner_spinner_module__WEBPACK_IMPORTED_MODULE_8__.SpinnerModule] }); })();


/***/ }),

/***/ 1273:
/*!******************************************************!*\
  !*** ./src/app/features/team/view/view.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewComponent": () => (/* binding */ ViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_teams_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/teams.service */ 3091);
/* harmony import */ var src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/loader.service */ 4487);
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/header/header.component */ 6290);
/* harmony import */ var _shared_components_toast_toast_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/toast/toast.component */ 257);
/* harmony import */ var _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dropdown/dropdown.component */ 80);
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../table/table.component */ 2999);
/* harmony import */ var _table_caption_table_caption_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../table-caption/table-caption.component */ 9027);
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/footer/footer.component */ 6526);









class ViewComponent {
    constructor(teamsService, loaderService) {
        this.teamsService = teamsService;
        this.loaderService = loaderService;
    }
    ngOnInit() { }
    captureSeason(event) {
        this.season = event;
    }
    captureAlert(event) {
        this.alert = event;
    }
}
ViewComponent.ɵfac = function ViewComponent_Factory(t) { return new (t || ViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_teams_service__WEBPACK_IMPORTED_MODULE_0__.TeamsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_1__.LoaderService)); };
ViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ViewComponent, selectors: [["app-view"]], decls: 6, vars: 2, consts: [[3, "selectedSeason"], [3, "season", "alert"], [3, "season"]], template: function ViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "app-dropdown", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectedSeason", function ViewComponent_Template_app_dropdown_selectedSeason_2_listener($event) { return ctx.captureSeason($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "app-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("alert", function ViewComponent_Template_app_table_alert_3_listener($event) { return ctx.captureAlert($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "app-table-caption", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("season", ctx.season);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("season", ctx.season);
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _shared_components_toast_toast_component__WEBPACK_IMPORTED_MODULE_3__.ToastComponent, _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_4__.DropdownComponent, _table_table_component__WEBPACK_IMPORTED_MODULE_5__.TableComponent, _table_caption_table_caption_component__WEBPACK_IMPORTED_MODULE_6__.TableCaptionComponent, _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 6526:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 15, vars: 0, consts: [["href", "#"], [1, "down-phrase"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Fun\u00E7\u00F5es");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Benef\u00EDcios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Sobre n\u00F3s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u00A9 2022 FutStats \u2014 Direitos reservados ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap\");\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  font-family: \"Poppins\", \"Verdana\", sans-serif;\n}\nfooter[_ngcontent-%COMP%] {\n  background-color: #0a3151;\n  margin-top: 50px;\n}\nfooter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 20px;\n  margin-bottom: 10px;\n  list-style: none;\n}\nfooter[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n}\nfooter[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 15px;\n}\n.down-phrase[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.down-phrase[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw2RkFBQTtBQUVSO0VBQ0Usc0JBQUE7RUFDQSw2Q0FBQTtBQUFGO0FBR0E7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0FBQUY7QUFHQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUFGO0FBR0E7RUFDRSxXQUFBO0VBQ0EscUJBQUE7QUFBRjtBQUdBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtBQUFKO0FBR0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBQUY7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQURGIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7NDAwOzYwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgJ1ZlcmRhbmEnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTMxNTE7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuZm9vdGVyIGxpIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG5mb290ZXIgbGkgIGF7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5mb290ZXIgZGl2e1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmRvd24tcGhyYXNle1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG59XHJcblxyXG5cclxuLmRvd24tcGhyYXNlIHAge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 2735:
/*!***********************************************************!*\
  !*** ./src/app/shared/components/footer/footer.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterModule": () => (/* binding */ FooterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component */ 6526);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class FooterModule {
}
FooterModule.ɵfac = function FooterModule_Factory(t) { return new (t || FooterModule)(); };
FooterModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FooterModule });
FooterModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FooterModule, { declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent] }); })();


/***/ }),

/***/ 6290:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 19, vars: 0, consts: [[1, "l-header"], ["src", "https://uploaddeimagens.com.br/images/003/703/770/original/novalogo.png?1643849352", "alt", "", 1, "img-header"], [1, "hamburger", "hamburger--slider"], [1, "hamburger-box"], [1, "hamburger-inner"], [1, "l-header__nav"], [1, "l-header__gnavi"], [1, "l-header__gnavi__item"], ["href", "#"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Fun\u00E7\u00F5es");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Benef\u00EDcios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Sobre n\u00F3s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap\");\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  font-family: \"Poppins\", \"Verdana\", sans-serif;\n}\n.l-header[_ngcontent-%COMP%] {\n  height: 75px;\n  display: flex;\n  list-style: none;\n  text-decoration: none;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 20px;\n  background-color: #fff;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 9998;\n}\n.l-header__gnavi[_ngcontent-%COMP%] {\n  display: flex;\n}\n.l-header__gnavi__item[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  text-decoration: none;\n}\n.l-header__gnavi__item[_ngcontent-%COMP%]    + .l-header__gnavi__item[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  padding-left: 20px;\n  list-style: none;\n  border-left: 1px solid #eee;\n}\n.l-header__gnavi__item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #0A3151;\n}\n@media (any-hover: hover) {\n  .l-header__gnavi__item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    transition: color 0.2s ease;\n  }\n  .l-header__gnavi__item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #0A3151;\n  }\n}\n.l-header__mega[_ngcontent-%COMP%] {\n  display: none;\n  list-style: none;\n  list-style: none;\n}\n.l-header[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-width: 768px) {\n  .l-header__nav[_ngcontent-%COMP%] {\n    z-index: -1;\n    opacity: 0;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: calc(100vh - 75px);\n    transform: translateY(-100%);\n    transition: opacity 0.3s ease;\n    background-color: rgba(0, 0, 0, 0.8);\n  }\n  .l-header__nav.menu_open[_ngcontent-%COMP%] {\n    z-index: 1;\n    opacity: 1;\n    transform: translateY(100%);\n  }\n  .l-header__gnavi[_ngcontent-%COMP%] {\n    display: block;\n    list-style: none;\n  }\n  .l-header__gnavi__item[_ngcontent-%COMP%]    + .l-header__gnavi__item[_ngcontent-%COMP%] {\n    border-left: 1px solid #000;\n    padding-left: 0;\n    margin-left: 0;\n    list-style: none;\n  }\n  .l-header__gnavi__item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    text-align: center;\n    color: #fff;\n    display: block;\n    padding: 15px 0;\n  }\n  .l-header[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n.l-header__logo[_ngcontent-%COMP%] {\n  color: #0A3151;\n}\n.img-header[_ngcontent-%COMP%] {\n  width: 40px;\n  height: auto;\n  position: relative;\n  bottom: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw2RkFBQTtBQUVSO0VBQ0Usc0JBQUE7RUFDQSw2Q0FBQTtBQUFGO0FBR0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtBQUFGO0FBQ0U7RUFDSSxhQUFBO0FBQ047QUFBTTtFQUNJLGlCQUFBO0VBQ0EscUJBQUE7QUFFVjtBQURVO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUFHZDtBQURVO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBR1o7QUFGYztFQUhKO0lBSVEsMkJBQUE7RUFLaEI7RUFKZ0I7SUFDSSxjQUFBO0VBTXBCO0FBQ0Y7QUFERTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBR047QUFBRTtFQUNJLGFBQUE7QUFFTjtBQUFFO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLE9BQUE7SUFDQSxXQUFBO0lBQ0EsMEJBQUE7SUFDQSw0QkFBQTtJQUNBLDZCQUFBO0lBQ0Esb0NBQUE7RUFFUjtFQURRO0lBQ0ksVUFBQTtJQUNBLFVBQUE7SUFDQSwyQkFBQTtFQUdaO0VBQUk7SUFDSSxjQUFBO0lBQ0EsZ0JBQUE7RUFFUjtFQUFZO0lBQ0ksMkJBQUE7SUFDQSxlQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0VBRWhCO0VBQVk7SUFDSSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFQUVoQjtFQUdJO0lBQ0ksY0FBQTtFQURSO0FBQ0Y7QUFJQTtFQUNFLHFCQUFBO0FBREY7QUFHQTtFQUNFLGNBQUE7QUFBRjtBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFDRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzQwMDs2MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsICdWZXJkYW5hJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmwtaGVhZGVyIHtcclxuICBoZWlnaHQ6NzVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOjA7XHJcbiAgei1pbmRleDogOTk5ODtcclxuICAmX19nbmF2aSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICZfX2l0ZW0ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAmICsgJiB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6ICMwQTMxNTE7XHJcbiAgICAgICAgICAgICAgQG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzBBMzE1MTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuICAmX19tZWdhIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5oYW1idXJnZXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KSB7XHJcbiAgICAgICZfX25hdiB7XHJcbiAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6Y2FsYygxMDB2aCAtIDc1cHgpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKCMwMDAsMC44KTtcclxuICAgICAgICAgICYubWVudV9vcGVuIHtcclxuICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICZfX2duYXZpIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICZfX2l0ZW0ge1xyXG4gICAgICAgICAgICAgICYgKyAmIHtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOjE1cHggMDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICAgIC5oYW1idXJnZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICB9XHJcbn1cclxudWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG4ubC1oZWFkZXJfX2xvZ297XHJcbiAgY29sb3I6ICMwQTMxNTE7XHJcbn1cclxuLmltZy1oZWFkZXJ7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3R0b206IDZweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 3778:
/*!***********************************************************!*\
  !*** ./src/app/shared/components/header/header.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderModule": () => (/* binding */ HeaderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component */ 6290);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class HeaderModule {
}
HeaderModule.ɵfac = function HeaderModule_Factory(t) { return new (t || HeaderModule)(); };
HeaderModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HeaderModule });
HeaderModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HeaderModule, { declarations: [_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent] }); })();


/***/ }),

/***/ 2925:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/spinner/spinner.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerComponent": () => (/* binding */ SpinnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class SpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
SpinnerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], decls: 2, vars: 0, consts: [[1, "cssload-container"], [1, "cssload-speeding-wheel"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".cssload-container[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    width: 100%;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    background-color: rgba(255, 255, 255, 0.7);\r\n    z-index: 9999;\r\n  }\r\n  \r\n  .cssload-speeding-wheel[_ngcontent-%COMP%] {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    left: 48%;\r\n    top: 40%;\r\n    width: 63px;\r\n    height: 63px;\r\n    margin: 0 auto;\r\n    border: 4px solid rgb(0, 0, 0);\r\n    border-radius: 50%;\r\n    border-left-color: transparent;\r\n    border-right-color: transparent;\r\n    animation: cssload-spin 500ms infinite linear;\r\n    -o-animation: cssload-spin 500ms infinite linear;\r\n    -ms-animation: cssload-spin 500ms infinite linear;\r\n    -webkit-animation: cssload-spin 500ms infinite linear;\r\n    -moz-animation: cssload-spin 500ms infinite linear;\r\n  }\r\n  \r\n  @keyframes cssload-spin {\r\n    100% {\r\n      transform: rotate(360deg);\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n  \r\n  @-webkit-keyframes cssload-spin {\r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsT0FBTztJQUNQLFFBQVE7SUFDUixNQUFNO0lBQ04sU0FBUztJQUNULDBDQUEwQztJQUMxQyxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQiw2Q0FBNkM7SUFDN0MsZ0RBQWdEO0lBQ2hELGlEQUFpRDtJQUNqRCxxREFBcUQ7SUFDckQsa0RBQWtEO0VBQ3BEOztFQUVBO0lBQ0U7TUFDRSx5QkFBeUI7TUFDekIseUJBQXlCO0lBQzNCO0VBQ0Y7O0VBZ0JBO0lBQ0U7TUFFRSx5QkFBeUI7SUFDM0I7RUFDRiIsImZpbGUiOiJzcGlubmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3NzbG9hZC1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG4gIH1cclxuICBcclxuICAuY3NzbG9hZC1zcGVlZGluZy13aGVlbCB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA0OCU7XHJcbiAgICB0b3A6IDQwJTtcclxuICAgIHdpZHRoOiA2M3B4O1xyXG4gICAgaGVpZ2h0OiA2M3B4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCByZ2IoMCwgMCwgMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYW5pbWF0aW9uOiBjc3Nsb2FkLXNwaW4gNTAwbXMgaW5maW5pdGUgbGluZWFyO1xyXG4gICAgLW8tYW5pbWF0aW9uOiBjc3Nsb2FkLXNwaW4gNTAwbXMgaW5maW5pdGUgbGluZWFyO1xyXG4gICAgLW1zLWFuaW1hdGlvbjogY3NzbG9hZC1zcGluIDUwMG1zIGluZmluaXRlIGxpbmVhcjtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBjc3Nsb2FkLXNwaW4gNTAwbXMgaW5maW5pdGUgbGluZWFyO1xyXG4gICAgLW1vei1hbmltYXRpb246IGNzc2xvYWQtc3BpbiA1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgY3NzbG9hZC1zcGluIHtcclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBALW8ta2V5ZnJhbWVzIGNzc2xvYWQtc3BpbiB7XHJcbiAgICAxMDAlIHtcclxuICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQC1tcy1rZXlmcmFtZXMgY3NzbG9hZC1zcGluIHtcclxuICAgIDEwMCUge1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGNzc2xvYWQtc3BpbiB7XHJcbiAgICAxMDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBALW1vei1rZXlmcmFtZXMgY3NzbG9hZC1zcGluIHtcclxuICAgIDEwMCUge1xyXG4gICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ 8721:
/*!*************************************************************!*\
  !*** ./src/app/shared/components/spinner/spinner.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerModule": () => (/* binding */ SpinnerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _spinner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spinner.component */ 2925);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class SpinnerModule {
}
SpinnerModule.ɵfac = function SpinnerModule_Factory(t) { return new (t || SpinnerModule)(); };
SpinnerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SpinnerModule });
SpinnerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SpinnerModule, { declarations: [_spinner_component__WEBPACK_IMPORTED_MODULE_0__.SpinnerComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_spinner_component__WEBPACK_IMPORTED_MODULE_0__.SpinnerComponent] }); })();


/***/ }),

/***/ 257:
/*!************************************************************!*\
  !*** ./src/app/shared/components/toast/toast.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastComponent": () => (/* binding */ ToastComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 4617);



class ToastComponent {
    constructor(router, localStorageService) {
        this.router = router;
        if (this.router.getCurrentNavigation().extras.state != undefined) {
            this.selectedLeague = this.router.getCurrentNavigation().extras.state[0];
            3;
        }
        else {
            this.selectedLeague = localStorageService.get("league");
        }
        this.selectedLeague.alert != undefined ? this.alert = this.selectedLeague.alert : null;
    }
    ngOnInit() {
        if (this.alert) {
            this.activate();
        }
    }
    activate() {
        setTimeout(() => this.createToast(), 1200);
    }
    createToast() {
        const toast = document.getElementById("toast");
        const closeBtn = document.getElementById("close");
        toast.classList.add("active");
        setTimeout(() => {
            toast.classList.remove("active");
        }, 7500);
        closeBtn.addEventListener("click", () => {
            toast.classList.remove("active");
        });
    }
}
ToastComponent.ɵfac = function ToastComponent_Factory(t) { return new (t || ToastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService)); };
ToastComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ToastComponent, selectors: [["app-toast"]], decls: 4, vars: 0, consts: [[1, "container"], ["id", "toast", 1, "toast"], [1, "toast-text"]], template: function ToastComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Aten\u00E7\u00E3o! Essa liga possui dados defasados, pode conter erros.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap\");\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  font-family: \"Poppins\", \"Verdana\", sans-serif;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  z-index: 9999;\n}\n.toast[_ngcontent-%COMP%] {\n  position: fixed;\n  opacity: 0.7;\n  top: 25px;\n  right: 25px;\n  width: 375px;\n  background: #fff;\n  padding: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-radius: 12px;\n  border-left: 3px solid #0a3151;\n  overflow: hidden;\n  transform: translateX(calc(100% + 25px));\n  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.35);\n}\n.toast.active[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.toast-check[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 35px;\n  width: 35px;\n  background-color: #40f467;\n  border-radius: 50%;\n  color: #fff;\n  font-size: 20px;\n}\n.toast[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:first-child {\n  color: #0a3151;\n  font-size: 20px;\n}\n.toast-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8125rem;\n}\n.toast[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:last-child {\n  color: #ccc;\n  cursor: pointer;\n  transition: 350ms;\n}\n.toast[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:last-child:hover {\n  color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvYXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDZGQUFBO0FBRVI7RUFDRSxzQkFBQTtFQUNBLDZDQUFBO0FBQUY7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBQUY7QUFHQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtFQUNBLDJEQUFBO0FBQUY7QUFHQTtFQUNFLHdCQUFBO0FBQUY7QUFHQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFBRjtBQUlBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFERjtBQUlBO0VBQ0UsU0FBQTtFQUNBLG9CQUFBO0FBREY7QUFJQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFERjtBQUlBO0VBQ0UsV0FBQTtBQURGIiwiZmlsZSI6InRvYXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDIwMDs0MDA7NjAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCAnVmVyZGFuYScsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogOTk5OTtcclxufVxyXG5cclxuLnRvYXN0IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIHRvcDogMjVweDtcclxuICByaWdodDogMjVweDtcclxuICB3aWR0aDogMzc1cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMwYTMxNTE7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygxMDAlICsgMjVweCkpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuMzUpXHJcbn1cclxuXHJcbi50b2FzdC5hY3RpdmUge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxufVxyXG5cclxuLnRvYXN0LWNoZWNre1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQwZjQ2NztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5cclxuLnRvYXN0IGk6Zmlyc3QtY2hpbGQge1xyXG4gIGNvbG9yOiAjMGEzMTUxO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLnRvYXN0LXRleHQge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IC44MTI1cmVtO1xyXG59XHJcblxyXG4udG9hc3QgaTpsYXN0LWNoaWxkIHtcclxuICBjb2xvcjogI2NjYztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMzUwbXM7XHJcbn1cclxuXHJcbi50b2FzdCBpOmxhc3QtY2hpbGQ6aG92ZXIge1xyXG4gIGNvbG9yOiAjMzMzO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 4073:
/*!*********************************************************!*\
  !*** ./src/app/shared/components/toast/toast.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastModule": () => (/* binding */ ToastModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _toast_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toast.component */ 257);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class ToastModule {
}
ToastModule.ɵfac = function ToastModule_Factory(t) { return new (t || ToastModule)(); };
ToastModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ToastModule });
ToastModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ToastModule, { declarations: [_toast_component__WEBPACK_IMPORTED_MODULE_0__.ToastComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_toast_component__WEBPACK_IMPORTED_MODULE_0__.ToastComponent] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: true
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
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
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.735c7773232022ae.js.map