(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["prueba-prueba-module"],{

/***/ "./src/app/prueba/prueba.module.ts":
/*!*****************************************!*\
  !*** ./src/app/prueba/prueba.module.ts ***!
  \*****************************************/
/*! exports provided: PruebaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PruebaPageModule", function() { return PruebaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _prueba_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prueba.page */ "./src/app/prueba/prueba.page.ts");







var routes = [
    {
        path: '',
        component: _prueba_page__WEBPACK_IMPORTED_MODULE_6__["PruebaPage"]
    }
];
var PruebaPageModule = /** @class */ (function () {
    function PruebaPageModule() {
    }
    PruebaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_prueba_page__WEBPACK_IMPORTED_MODULE_6__["PruebaPage"]]
        })
    ], PruebaPageModule);
    return PruebaPageModule;
}());



/***/ }),

/***/ "./src/app/prueba/prueba.page.html":
/*!*****************************************!*\
  !*** ./src/app/prueba/prueba.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-menu-toggle menu=\"first\" slot=\"start\">\n        <ion-menu-button color=\"medium\" menumenu=\"first\"></ion-menu-button>\n      </ion-menu-toggle>\n    <ion-title style=\"text-align: center\" text-uppercase>\n      Prueba \n    </ion-title>\n    <ion-button slot=end color=\"white\" fill=\"clear\"></ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"Contenido\">\n<ion-button color=\"medium\" expand=\"block\" (click)=\"Mostrar()\">\n  PopOver\n</ion-button>\n<ion-button color=\"medium\" expand=\"block\" (click)=\"MostrarPag()\">\n    Página\n  </ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/prueba/prueba.page.scss":
/*!*****************************************!*\
  !*** ./src/app/prueba/prueba.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BydWViYS9wcnVlYmEucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/prueba/prueba.page.ts":
/*!***************************************!*\
  !*** ./src/app/prueba/prueba.page.ts ***!
  \***************************************/
/*! exports provided: PruebaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PruebaPage", function() { return PruebaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global.service */ "./src/app/global.service.ts");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loading.service */ "./src/app/loading.service.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pop_pop_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pop/pop.component */ "./src/app/pop/pop.component.ts");
/* harmony import */ var _pop_over_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pop-over.service */ "./src/app/pop-over.service.ts");










var PruebaPage = /** @class */ (function () {
    function PruebaPage(global, Post, navCtrl, Loading, Alert, Aroute, POP) {
        this.global = global;
        this.Post = Post;
        this.navCtrl = navCtrl;
        this.Loading = Loading;
        this.Alert = Alert;
        this.Aroute = Aroute;
        this.POP = POP;
    }
    PruebaPage.prototype.ngOnInit = function () {
    };
    PruebaPage.prototype.MostrarPag = function () {
        this.navCtrl.navigateRoot('/alerta');
    };
    PruebaPage.prototype.Mostrar = function () {
        this.POP.presentPopover(_pop_pop_component__WEBPACK_IMPORTED_MODULE_8__["PopComponent"]);
    };
    PruebaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prueba',
            template: __webpack_require__(/*! ./prueba.page.html */ "./src/app/prueba/prueba.page.html"),
            styles: [__webpack_require__(/*! ./prueba.page.scss */ "./src/app/prueba/prueba.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
            _post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
            _alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _pop_over_service__WEBPACK_IMPORTED_MODULE_9__["PopOverService"]])
    ], PruebaPage);
    return PruebaPage;
}());



/***/ })

}]);
//# sourceMappingURL=prueba-prueba-module.js.map