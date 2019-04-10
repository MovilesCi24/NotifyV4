(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notify-detail-notify-detail-module"],{

/***/ "./src/app/notify-detail/notify-detail.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/notify-detail/notify-detail.module.ts ***!
  \*******************************************************/
/*! exports provided: NotifyDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyDetailPageModule", function() { return NotifyDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notify_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notify-detail.page */ "./src/app/notify-detail/notify-detail.page.ts");







var routes = [
    {
        path: '',
        component: _notify_detail_page__WEBPACK_IMPORTED_MODULE_6__["NotifyDetailPage"]
    }
];
var NotifyDetailPageModule = /** @class */ (function () {
    function NotifyDetailPageModule() {
    }
    NotifyDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_notify_detail_page__WEBPACK_IMPORTED_MODULE_6__["NotifyDetailPage"]]
        })
    ], NotifyDetailPageModule);
    return NotifyDetailPageModule;
}());



/***/ }),

/***/ "./src/app/notify-detail/notify-detail.page.html":
/*!*******************************************************!*\
  !*** ./src/app/notify-detail/notify-detail.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>NotifyDetail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/notify-detail/notify-detail.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/notify-detail/notify-detail.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmeS1kZXRhaWwvbm90aWZ5LWRldGFpbC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/notify-detail/notify-detail.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/notify-detail/notify-detail.page.ts ***!
  \*****************************************************/
/*! exports provided: NotifyDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyDetailPage", function() { return NotifyDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotifyDetailPage = /** @class */ (function () {
    function NotifyDetailPage() {
    }
    NotifyDetailPage.prototype.ngOnInit = function () {
    };
    NotifyDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notify-detail',
            template: __webpack_require__(/*! ./notify-detail.page.html */ "./src/app/notify-detail/notify-detail.page.html"),
            styles: [__webpack_require__(/*! ./notify-detail.page.scss */ "./src/app/notify-detail/notify-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotifyDetailPage);
    return NotifyDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=notify-detail-notify-detail-module.js.map