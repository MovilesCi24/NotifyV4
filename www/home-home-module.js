(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-menu-toggle menu=\"first\" slot=\"start\">\n        <ion-menu-button color=\"medium\" menumenu=\"first\"></ion-menu-button>\n      </ion-menu-toggle>\n    <ion-title style=\"text-align: center\" text-uppercase>\n      Bandeja de Entrada\n    </ion-title>\n    <ion-button slot=end color=\"tertiary\" fill=\"clear\" (click)=\"this.navCtrl.navigateRoot('/archived')\" ><ion-icon slot=\"icon-only\" name=\"filing\"></ion-icon></ion-button>\n  </ion-toolbar>\n  <ion-searchbar style=\"padding-top: 0px\" [(ngModel)]=\"searchQuery\" placeholder=\"Buscar\" (ionInput)=\"getItems($event)\" animated=\"true\" color=\"medium\"></ion-searchbar>\n</ion-header>\n\n<ion-content class=\"Contenido\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content pullingIcon=\"md-arrow-dropdown\"\n        pullingText=\"Desliza para Actualizar\"\n        refreshingSpinner=\"lines\"\n        refreshingText=\"Actualizando...\"></ion-refresher-content>\n      </ion-refresher>\n    <ion-list>\n        <ion-item-sliding #item *ngFor=\"let Noty of Notificaciones;let i=index\">\n            <ion-item-options side=\"start\">\n              <ion-item-option color=\"danger\" (click)=Archivar(1,Noty.Id_Unique)><ion-icon slot=\"top\" size=\"large\" name=\"archive\"></ion-icon>Archivar</ion-item-option>\n            </ion-item-options>\n            <ion-item (click)=\"VerNotificacion(Noty.Id_Unique,Noty.Label)\">\n                <ion-icon *ngIf=\"Noty.IsRead==false\" slot=\"start\" name=\"mail-unread\" color=\"success\"></ion-icon>\n                <ion-icon *ngIf=\"Noty.IsRead==true\" slot=\"start\" name=\"mail-open\" color=\"primary\"></ion-icon>\n                <ion-label>\n                    <h2 *ngIf=\"Noty.IsRead==false\" style=\"font-weight: bold\" text-wrap>{{Noty.Label}}</h2>\n                    <h2 *ngIf=\"Noty.IsRead==true\" text-wrap>{{Noty.Label}}</h2>\n                    <p>{{Noty.Titulo}}</p>\n                    <ion-badge *ngIf=\"Noty.Id_Priority=='3'\" slot=end color='danger' >Error</ion-badge>\n                    <ion-badge *ngIf=\"Noty.Id_Priority=='2'\" slot=end color='warning' >Warning</ion-badge>\n                    <ion-badge *ngIf=\"Noty.Id_Priority=='1'\" slot=end color='primary' >Information</ion-badge> \n                  </ion-label>\n                      <ion-note slot=end>\n                          {{Noty.EventDate}}\n                      </ion-note>   \n              </ion-item>\n            <ion-item-options side=\"end\">\n              <ion-item-option color=\"primary\" *ngIf=\"Noty.IsRead==false\" (click)=Mleido(1,Noty.Id_Unique)><ion-icon slot=\"top\" size=\"large\" name=\"mail-open\"></ion-icon>Leido</ion-item-option>\n              <ion-item-option color=\"success\" *ngIf=\"Noty.IsRead==true\" (click)=Mleido(0,Noty.Id_Unique)><ion-icon slot=\"top\" size=\"large\" name=\"mail-unread\"></ion-icon>No Leido</ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n      \n    </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global.service */ "./src/app/global.service.ts");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loading.service */ "./src/app/loading.service.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");









var HomePage = /** @class */ (function () {
    function HomePage(global, Post, navCtrl, Loading, Alert, splashScreen) {
        this.global = global;
        this.Post = Post;
        this.navCtrl = navCtrl;
        this.Loading = Loading;
        this.Alert = Alert;
        this.splashScreen = splashScreen;
        this.Notificaciones = new Array();
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        var data = {
            Option: 'SelectNoty',
            Id_User: this.global.UserData.Id_User
        };
        this.Post.Event(data, function (err, data) {
            console.log(data);
            if (err == null) {
                _this.splashScreen.hide();
                _this.Notificaciones = JSON.parse(data.data);
                for (var i = 0; i < _this.Notificaciones.length; i++) {
                    _this.Notificaciones[i].EventDate = moment__WEBPACK_IMPORTED_MODULE_7__(_this.Notificaciones[i].EventDate).fromNow();
                }
            }
            else {
                _this.splashScreen.hide();
                _this.Alert.AlertOnebutton('Error', JSON.stringify(err.message));
            }
        });
    };
    HomePage.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            var data = {
                Option: 'SelectNoty',
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
    HomePage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            console.log('Done');
            event.target.complete();
            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            if (_this.Notificaciones.length == 1000) {
                event.target.disabled = true;
            }
        }, 500);
    };
    HomePage.prototype.VerNotificacion = function (id, titulo) {
        console.log(titulo);
        var lid = id + '*' + titulo;
        this.navCtrl.navigateRoot('/ver-noty/' + lid);
    };
    HomePage.prototype.Mleido = function (i, unique) {
        var _this = this;
        var data = {
            Option: 'EventLeido',
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
    HomePage.prototype.Archivar = function (i, unique) {
        var _this = this;
        var data = {
            Option: 'EventArchivar',
            Id_User: this.global.UserData.Id_User,
            Id_Unique: unique,
            Leido: i
        };
        this.Post.Event(data, function (err, data) {
            console.log(data);
            if (err == null) {
                _this.Notificaciones = JSON.parse(data.data);
                for (var i_2 = 0; i_2 < _this.Notificaciones.length; i_2++) {
                    _this.Notificaciones[i_2].EventDate = moment__WEBPACK_IMPORTED_MODULE_7__(_this.Notificaciones[i_2].EventDate).fromNow();
                }
            }
            else {
                _this.Alert.AlertOnebutton('Error', JSON.stringify(err.message));
                console.log('Async operation has ended');
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"])
    ], HomePage.prototype, "infiniteScroll", void 0);
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
            _post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
            _alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__["SplashScreen"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map