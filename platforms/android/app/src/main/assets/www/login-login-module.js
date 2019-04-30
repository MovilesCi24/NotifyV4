(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"Contenido\">\r\n<ion-img src=\"./assets/imgs/Controles.png\" style=\"width:90%;padding: 20% 10% 0% 10%;margin: auto\"></ion-img>\r\n<div style=\"padding:0px 5%\">\r\n  <ion-item class=\"itemm\" style=\"margin-top:20px\">\r\n    <ion-label position=\"fixed\">Usuario: </ion-label>\r\n    <ion-input type=\"text\" [(ngModel)]=\"User\"></ion-input>\r\n  </ion-item>\r\n  <ion-item class=\"itemm\">\r\n    <ion-label position=\"fixed\">Contraseña: </ion-label>\r\n    <ion-input type=\"password\" [(ngModel)]=\"Pass\"></ion-input>\r\n  </ion-item>\r\n  <ion-button expand=\"block\" color=\"medium\" style=\"font-size:large;margin-top: 5px\" (click)=\"Login()\">\r\n    LOGIN\r\n  </ion-button>\r\n</div>\r\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"Settings()\">\r\n  <ion-fab-button color=\"medium\">\r\n    <ion-icon name=\"settings\"></ion-icon>\r\n  </ion-fab-button>\r\n</ion-fab>\r\n</ion-content>\r\n<ion-footer>\r\n<ion-button expand=\"block\" fill=\"outline\" color=\"medium\">\r\n  Version 1.0.0\r\n</ion-button>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global.service */ "./src/app/global.service.ts");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../loading.service */ "./src/app/loading.service.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _notify_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../notify.service */ "./src/app/notify.service.ts");










var LoginPage = /** @class */ (function () {
    function LoginPage(global, Post, storage, navCtrl, Loading, Alert, splashScreen, Noty) {
        var _this = this;
        this.global = global;
        this.Post = Post;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.Loading = Loading;
        this.Alert = Alert;
        this.splashScreen = splashScreen;
        this.Noty = Noty;
        this.storage.get('ITEM').then(function (val) {
            if (val == '' || val == ' ' || val == null) {
                _this.global.Item = 10;
                _this.storage.set('ITEM', 10);
            }
            else {
                _this.global.Item = val;
            }
            console.log('ITEM', val);
        });
        this.storage.get('Usuario').then(function (val) {
            if (val == '' || val == ' ' || val == null) {
                _this.splashScreen.hide();
            }
            else {
                _this.User = val;
            }
            console.log('User', val);
        });
        this.storage.get('Contraseña').then(function (val) {
            if (val == '' || val == ' ' || val == null) {
                _this.splashScreen.hide();
            }
            else {
                _this.Pass = val;
            }
            console.log('Pass', val);
        });
    }
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('Ruta').then(function (val) {
            if (val == '' || val == ' ' || val == null) {
                _this.splashScreen.hide();
            }
            else {
                _this.global.Servidor = val;
                _this.storage.get('Logged').then(function (val1) {
                    if (val1 == '' || val1 == ' ' || val1 == null) {
                        _this.splashScreen.hide();
                    }
                    else {
                        _this.global.IsLoggin = val1;
                        if (_this.global.IsLoggin == true) {
                            console.log('Tengo que loggearme Solo');
                            _this.Login();
                        }
                        else {
                            console.log('No me loggeo');
                            _this.Loading.HideLoading();
                            _this.splashScreen.hide();
                        }
                    }
                    console.log('IsLoggin', val1);
                });
            }
        });
    };
    LoginPage.prototype.Login = function () {
        var _this = this;
        if (this.global.Servidor == '' || this.global.Servidor == ' ' || this.global.Servidor == null || this.global.Servidor == undefined) {
            this.Loading.LoadingNormal("Dirigase al Boton de Ajustes para configurar la Url del servidor", 4);
            this.splashScreen.hide();
        }
        else {
            if (this.Pass != "" && this.User != "") {
                this.Loading.LoadingNormal("Autenticando", 10);
                var data = {
                    idConnection: 1,
                    userName: this.User,
                    password: this.Pass
                };
                this.Post.Login(data, function (err, data) {
                    console.log(data);
                    if (err == null) {
                        if (data.status == 1) {
                            if (data.message == _this.global.RestDefinitions.Success) {
                                _this.global.User = _this.User;
                                _this.global.Pass = _this.Pass;
                                _this.storage.set('Usuario', _this.User);
                                _this.storage.set('Contraseña', _this.Pass);
                                _this.storage.set('Logged', true);
                                _this.Loading.LoadingNormal("Autenticacion Exitosa", 2);
                                _this.global.IsLoggin = true;
                                _this.global.UserData = JSON.parse(data.data)[0];
                                console.log(_this.global.UserData);
                                _this.Noty.InsertClave(_this.global.UserData.Id_User, _this.global.UserData.Id_Company, _this.global.UserData.Id_Role, _this.global.UserToken, 1, function (err, data1) {
                                    if (err == null) {
                                        console.log('Todo Bien');
                                    }
                                    else {
                                        console.log("ERR   =>   " + err);
                                    }
                                });
                                _this.navCtrl.navigateRoot('/home');
                            }
                            else {
                                _this.Loading.LoadingNormal("Error en la Autenticacion", 2);
                            }
                        }
                        else {
                            _this.splashScreen.hide();
                            if (data.message == 900) {
                                _this.Loading.LoadingNormal("Contraseña Incorrecta", 2);
                                console.error('Contraseña Incorrecta');
                            }
                            else if (data.message == 700) {
                                _this.Loading.LoadingNormal("Usuario No Existe", 2);
                                console.error('Usuario No Existe');
                            }
                            else {
                                _this.Loading.LoadingNormal("Error de Conexion", 2);
                            }
                        }
                    }
                    else {
                        _this.splashScreen.hide();
                        _this.Loading.HideLoading();
                        _this.Alert.AlertOnebutton('Error', JSON.stringify(err.message));
                    }
                });
            }
            else {
                this.splashScreen.hide();
                this.Loading.LoadingNormal("Error se encuentran campos vacios", 2);
            }
        }
    };
    LoginPage.prototype.Settings = function () {
        this.navCtrl.navigateRoot('/settings');
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
            _post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"],
            _alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__["SplashScreen"],
            _notify_service__WEBPACK_IMPORTED_MODULE_9__["NotifyService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map