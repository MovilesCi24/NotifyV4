(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["archived-archived-module"],{

/***/ "./src/app/archived/archived.module.ts":
/*!*********************************************!*\
  !*** ./src/app/archived/archived.module.ts ***!
  \*********************************************/
/*! exports provided: ArchivedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivedPageModule", function() { return ArchivedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _archived_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./archived.page */ "./src/app/archived/archived.page.ts");







var routes = [
    {
        path: '',
        component: _archived_page__WEBPACK_IMPORTED_MODULE_6__["ArchivedPage"]
    }
];
var ArchivedPageModule = /** @class */ (function () {
    function ArchivedPageModule() {
    }
    ArchivedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_archived_page__WEBPACK_IMPORTED_MODULE_6__["ArchivedPage"]]
        })
    ], ArchivedPageModule);
    return ArchivedPageModule;
}());



/***/ }),

/***/ "./src/app/archived/archived.page.html":
/*!*********************************************!*\
  !*** ./src/app/archived/archived.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-button slot=start color=\"danger\" fill=\"clear\" (click)=\"this.navCtrl.navigateRoot('/home')\"> <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon></ion-button>\n      <ion-title style=\"text-align: center\" text-uppercase>Archivados</ion-title>\n      <ion-button slot=end color=\"white\" fill=\"clear\"> <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon></ion-button>\n    </ion-toolbar>\n  </ion-header>\n<ion-content class=\"Contenido\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content pullingIcon=\"md-arrow-dropdown\"\n        pullingText=\"Desliza para Actualizar\"\n        refreshingSpinner=\"lines\"\n        refreshingText=\"Actualizando...\"></ion-refresher-content>\n      </ion-refresher>\n    <ion-list>\n        <ion-item-sliding #item *ngFor=\"let Noty of Notificaciones;let i=index\">\n            <ion-item-options side=\"start\">\n              <ion-item-option color=\"success\" (click)=Archivar(0,Noty.Id_Unique)><ion-icon slot=\"top\" size=\"large\" name=\"archive\"></ion-icon>Des-Archivar</ion-item-option>\n            </ion-item-options>\n            <ion-item>\n                <ion-icon slot=\"start\" name=\"mail\" color=\"tertiary\"></ion-icon>\n                <ion-label>\n                    <h2 text-wrap>{{Noty.Label}}</h2>\n                    <p text-wrap>{{Noty.Titulo}}</p>\n                    <h3 *ngIf=\"Noty.Id_Priority=='3'\" style=\"color:red\" text-uppercase>Error</h3>\n                    <h3 *ngIf=\"Noty.Id_Priority=='2'\" style=\"color:#ffce00\" text-uppercase>Warning</h3>\n                    <h3 *ngIf=\"Noty.Id_Priority=='1'\" style=\"color:royalblue\" text-uppercase>Information</h3>\n                  </ion-label>\n                  <ion-note slot=\"end\">\n                    {{Noty.EventDate}}\n                  </ion-note>\n            </ion-item>\n          </ion-item-sliding>\n      \n    </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/archived/archived.page.scss":
/*!*********************************************!*\
  !*** ./src/app/archived/archived.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FyY2hpdmVkL2FyY2hpdmVkLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/archived/archived.page.ts":
/*!*******************************************!*\
  !*** ./src/app/archived/archived.page.ts ***!
  \*******************************************/
/*! exports provided: ArchivedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivedPage", function() { return ArchivedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global.service */ "./src/app/global.service.ts");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loading.service */ "./src/app/loading.service.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);








var ArchivedPage = /** @class */ (function () {
    function ArchivedPage(global, Post, navCtrl, Loading, Alert) {
        this.global = global;
        this.Post = Post;
        this.navCtrl = navCtrl;
        this.Loading = Loading;
        this.Alert = Alert;
        this.Notificaciones = new Array();
    }
    ArchivedPage.prototype.ngOnInit = function () {
        var _this = this;
        this.Loading.HideLoading();
        var data = {
            Option: 'SelectArchive',
            Id_User: this.global.UserData.Id_User
        };
        this.Post.Event(data, function (err, data) {
            console.log(data);
            if (err == null) {
                _this.Notificaciones = JSON.parse(data.data);
                for (var i = 0; i < _this.Notificaciones.length; i++) {
                    _this.Notificaciones[i].EventDate = moment__WEBPACK_IMPORTED_MODULE_7__(_this.Notificaciones[i].EventDate).fromNow();
                }
            }
            else {
                _this.Alert.AlertOnebutton('Error', JSON.stringify(err.message));
            }
        });
    };
    ArchivedPage.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            var data = {
                Option: 'SelectArchive',
                Id_User: _this.global.UserData.Id_User
            };
            _this.Post.Event(data, function (err, data) {
                console.log(data);
                if (err == null) {
                    _this.Notificaciones = JSON.parse(data.data);
                    for (var i = 0; i < _this.Notificaciones.length; i++) {
                        _this.Notificaciones[i].EventDate = moment__WEBPACK_IMPORTED_MODULE_7__(_this.Notificaciones[i].EventDate).fromNow();
                    }
                    console.log('Async operation has ended');
                    event.target.complete();
                }
                else {
                    _this.Alert.AlertOnebutton('Error', JSON.stringify(err.message));
                    console.log('Async operation has ended');
                    event.target.complete();
                }
            });
        }, 1000);
    };
    ArchivedPage.prototype.Archivar = function (i, unique) {
        var _this = this;
        var data = {
            Option: 'EventDesArchivar',
            Id_User: this.global.UserData.Id_User,
            Id_Unique: unique,
            Leido: i
        };
        this.Post.Event(data, function (err, data) {
            console.log(data);
            if (err == null) {
                _this.Notificaciones = JSON.parse(data.data);
                for (var i_1 = 0; i_1 < _this.Notificaciones.length; i_1++) {
                    _this.Notificaciones[i_1].EventDate = moment__WEBPACK_IMPORTED_MODULE_7__(_this.Notificaciones[i_1].EventDate).fromNow();
                }
            }
            else {
                _this.Alert.AlertOnebutton('Error', JSON.stringify(err.message));
                console.log('Async operation has ended');
            }
        });
    };
    ArchivedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-archived',
            template: __webpack_require__(/*! ./archived.page.html */ "./src/app/archived/archived.page.html"),
            styles: [__webpack_require__(/*! ./archived.page.scss */ "./src/app/archived/archived.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
            _post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
            _alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]])
    ], ArchivedPage);
    return ArchivedPage;
}());



/***/ })

}]);
//# sourceMappingURL=archived-archived-module.js.map