(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["asociate-events-asociate-events-module"],{

/***/ "./src/app/asociate-events/asociate-events.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/asociate-events/asociate-events.module.ts ***!
  \***********************************************************/
/*! exports provided: AsociateEventsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsociateEventsPageModule", function() { return AsociateEventsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _asociate_events_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./asociate-events.page */ "./src/app/asociate-events/asociate-events.page.ts");







var routes = [
    {
        path: '',
        component: _asociate_events_page__WEBPACK_IMPORTED_MODULE_6__["AsociateEventsPage"]
    }
];
var AsociateEventsPageModule = /** @class */ (function () {
    function AsociateEventsPageModule() {
    }
    AsociateEventsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_asociate_events_page__WEBPACK_IMPORTED_MODULE_6__["AsociateEventsPage"]]
        })
    ], AsociateEventsPageModule);
    return AsociateEventsPageModule;
}());



/***/ }),

/***/ "./src/app/asociate-events/asociate-events.page.html":
/*!***********************************************************!*\
  !*** ./src/app/asociate-events/asociate-events.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-button slot=start color=\"danger\" fill=\"clear\" (click)=\"this.navCtrl.navigateRoot('/user-perfil/'+this.Data[0]+'.'+this.Data[1]);\"> <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon></ion-button>\n    <ion-title style=\"text-align: center\" text-uppercase>{{Data[1]}}</ion-title>\n    <ion-button slot=end color=\"white\" fill=\"clear\"> <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon></ion-button>\n  </ion-toolbar>\n  <ion-button color=medium expand=block fill=outline>Seleccione los perfiles</ion-button>\n</ion-header>\n\n\n<ion-content class=\"Contenido\">\n<ion-list>\n  <ion-item *ngFor=\"let item of Perfiles;let i=index\">\n    <ion-avatar slot=\"start\" >\n      <img *ngIf=\"i%2==0\" src=\"./assets/imgs/Group.png\">\n      <img *ngIf=\"i%2!=0\" src=\"./assets/imgs/Group2.png\">\n    </ion-avatar>\n      <ion-label>\n        <h2 text-uppercase>{{item.Name}}</h2>\n      </ion-label>\n      <ion-toggle slot=end color=\"secondary\" [(ngModel)]=\"Posicion[i]\"></ion-toggle>\n  </ion-item>\n</ion-list>\n</ion-content>\n<ion-footer>\n  <ion-button expand=\"block\" fill=\"outline\" color=\"medium\" (click)=\"Asociar()\">\n      Asociar Seleccionados\n  </ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/asociate-events/asociate-events.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/asociate-events/asociate-events.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzb2NpYXRlLWV2ZW50cy9hc29jaWF0ZS1ldmVudHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/asociate-events/asociate-events.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/asociate-events/asociate-events.page.ts ***!
  \*********************************************************/
/*! exports provided: AsociateEventsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsociateEventsPage", function() { return AsociateEventsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global.service */ "./src/app/global.service.ts");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loading.service */ "./src/app/loading.service.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var AsociateEventsPage = /** @class */ (function () {
    function AsociateEventsPage(global, Post, navCtrl, Loading, Alert, Aroute) {
        this.global = global;
        this.Post = Post;
        this.navCtrl = navCtrl;
        this.Loading = Loading;
        this.Alert = Alert;
        this.Aroute = Aroute;
        this.Posicion = new Array();
        var Data1 = this.Aroute.snapshot.paramMap.get('Id');
        this.Data = Data1.split('.');
        console.log(this.Data);
        this.Id_User = this.Data[0];
        console.log(this.Id_User);
    }
    AsociateEventsPage.prototype.ngOnInit = function () {
        var _this = this;
        var data = {
            Option: "ProfileEmpty",
            Id_User: this.Id_User,
            Empty: this.Data[2]
        };
        this.Post.Event(data, function (err, data) {
            console.log(data);
            if (err == null) {
                _this.Perfiles = JSON.parse(data.data);
                _this.Posicion = new Array(_this.Perfiles.length);
                for (var i = 0; i < _this.Perfiles.lentgh; i++) {
                    _this.Posicion[i] = false;
                }
            }
            else {
                _this.Alert.AlertOnebutton('Error', JSON.stringify(err.message));
            }
        });
    };
    AsociateEventsPage.prototype.Asociar = function () {
        var _this = this;
        console.log(this.Posicion);
        var cuenta = 0;
        for (var i = 0; i < this.Posicion.length; i++) {
            if (this.Posicion[i] == true) {
                cuenta = cuenta + 1;
            }
        }
        setTimeout(function () {
            if (cuenta == 0) {
                _this.Loading.LoadingNormal('Seleccione al menos un Perfil', 2);
            }
            else {
                _this.Loading.LoadingNormal('Asociando Perfiles...', 2);
                for (var i = 0; i < _this.Posicion.length; i++) {
                    if (_this.Posicion[i] == true) {
                        var data = {
                            Option: "SaveProfile",
                            Id_User: _this.Id_User,
                            Id_ProfileEvent: _this.Perfiles[i].Id_ProfileEvent
                        };
                        _this.Post.Event(data, function (err, data) {
                            console.log(data);
                            if (err == null) {
                                console.log('Perfil Asociado correctamente');
                            }
                            else {
                                _this.Alert.AlertOnebutton('Error', JSON.stringify(err.message));
                            }
                        });
                    }
                }
                setTimeout(function () {
                    _this.navCtrl.navigateRoot('/user-perfil/' + _this.Data[0] + '.' + _this.Data[1]);
                }, 1000);
            }
        }, 1000);
    };
    AsociateEventsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-asociate-events',
            template: __webpack_require__(/*! ./asociate-events.page.html */ "./src/app/asociate-events/asociate-events.page.html"),
            styles: [__webpack_require__(/*! ./asociate-events.page.scss */ "./src/app/asociate-events/asociate-events.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
            _post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
            _alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], AsociateEventsPage);
    return AsociateEventsPage;
}());



/***/ })

}]);
//# sourceMappingURL=asociate-events-asociate-events-module.js.map