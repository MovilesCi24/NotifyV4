(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ajustes-v-ajustes-v-module"],{

/***/ "./src/app/ajustes-v/ajustes-v.module.ts":
/*!***********************************************!*\
  !*** ./src/app/ajustes-v/ajustes-v.module.ts ***!
  \***********************************************/
/*! exports provided: AjustesVPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjustesVPageModule", function() { return AjustesVPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ajustes_v_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ajustes-v.page */ "./src/app/ajustes-v/ajustes-v.page.ts");







var routes = [
    {
        path: '',
        component: _ajustes_v_page__WEBPACK_IMPORTED_MODULE_6__["AjustesVPage"]
    }
];
var AjustesVPageModule = /** @class */ (function () {
    function AjustesVPageModule() {
    }
    AjustesVPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_ajustes_v_page__WEBPACK_IMPORTED_MODULE_6__["AjustesVPage"]]
        })
    ], AjustesVPageModule);
    return AjustesVPageModule;
}());



/***/ }),

/***/ "./src/app/ajustes-v/ajustes-v.page.html":
/*!***********************************************!*\
  !*** ./src/app/ajustes-v/ajustes-v.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-menu-toggle menu=\"first\" slot=\"start\">\n        <ion-menu-button color=\"medium\" menumenu=\"first\"></ion-menu-button>\n      </ion-menu-toggle>\n    <ion-title style=\"text-align: center\" text-uppercase>\n      Ajustes Visuales\n    </ion-title>\n    <ion-button slot=end color=\"white\" fill=\"clear\" ><ion-icon slot=\"icon-only\" name=\"filing\"></ion-icon></ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card color=\"medium\">\n    <ion-card-header>\n      <ion-card-title>Items por Página</ion-card-title>\n      <ion-card-subtitle>Seleccionados: {{Item}}</ion-card-subtitle>\n    </ion-card-header>\n  \n    <ion-card-content>\n      <ion-item>\n          <ion-range min=\"10\" max=\"100\" step=\"5\" snaps=\"true\" color=\"ligth\" pin=true [(ngModel)]=\"Item\" (ionChange)=ActItems()></ion-range>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/ajustes-v/ajustes-v.page.scss":
/*!***********************************************!*\
  !*** ./src/app/ajustes-v/ajustes-v.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FqdXN0ZXMtdi9hanVzdGVzLXYucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/ajustes-v/ajustes-v.page.ts":
/*!*********************************************!*\
  !*** ./src/app/ajustes-v/ajustes-v.page.ts ***!
  \*********************************************/
/*! exports provided: AjustesVPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjustesVPage", function() { return AjustesVPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global.service */ "./src/app/global.service.ts");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loading.service */ "./src/app/loading.service.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _notify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../notify.service */ "./src/app/notify.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");










var AjustesVPage = /** @class */ (function () {
    function AjustesVPage(global, Post, storage, navCtrl, Loading, Alert, splashScreen, Noty) {
        this.global = global;
        this.Post = Post;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.Loading = Loading;
        this.Alert = Alert;
        this.splashScreen = splashScreen;
        this.Noty = Noty;
        this.Item = this.global.Item;
    }
    AjustesVPage.prototype.ngOnInit = function () {
    };
    AjustesVPage.prototype.ActItems = function () {
        this.global.Item = this.Item;
        this.storage.set('ITEM', this.Item);
    };
    AjustesVPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ajustes-v',
            template: __webpack_require__(/*! ./ajustes-v.page.html */ "./src/app/ajustes-v/ajustes-v.page.html"),
            styles: [__webpack_require__(/*! ./ajustes-v.page.scss */ "./src/app/ajustes-v/ajustes-v.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
            _post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
            _alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"],
            _notify_service__WEBPACK_IMPORTED_MODULE_8__["NotifyService"]])
    ], AjustesVPage);
    return AjustesVPage;
}());



/***/ })

}]);
//# sourceMappingURL=ajustes-v-ajustes-v-module.js.map