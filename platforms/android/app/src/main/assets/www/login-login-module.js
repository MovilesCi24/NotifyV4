(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/alert.service.ts":
/*!**********************************!*\
  !*** ./src/app/alert.service.ts ***!
  \**********************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var AlertService = /** @class */ (function () {
    function AlertService(Alert) {
        this.Alert = Alert;
    }
    AlertService.prototype.AlertOnebutton = function (tittle, message, textbutton) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var Popup;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (textbutton == undefined) {
                            textbutton = "Aceptar";
                        }
                        return [4 /*yield*/, this.Alert.create({
                                header: tittle,
                                message: message,
                                buttons: [{
                                        text: textbutton,
                                        handler: function () {
                                            Popup.dismiss();
                                        }
                                    }]
                            })];
                    case 1:
                        Popup = _a.sent();
                        Popup.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AlertService.prototype.AlertTwobutton = function (tittle, message, textbutton, textbutton1) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var Popup;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (textbutton == undefined) {
                            textbutton = "Cancelar";
                        }
                        if (textbutton1 == undefined) {
                            textbutton1 = "Aceptar";
                        }
                        return [4 /*yield*/, this.Alert.create({ header: tittle,
                                message: message,
                                buttons: [{
                                        text: textbutton,
                                        handler: function () {
                                            Popup.dismiss();
                                        }
                                    }, {
                                        text: textbutton1,
                                        role: 'cancel',
                                        handler: function () {
                                            Popup.dismiss();
                                        }
                                    }]
                            })];
                    case 1:
                        Popup = _a.sent();
                        Popup.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AlertService.prototype.AlertOneButton = function (title, template, buttonText, callback) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var textButton, alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        textButton = "OK";
                        if (buttonText != undefined) {
                            textButton = buttonText;
                        }
                        return [4 /*yield*/, this.Alert.create({
                                header: title,
                                message: template,
                                buttons: [{
                                        text: textButton,
                                        role: 'cancel',
                                        handler: function () {
                                            if (callback !== undefined) {
                                                callback();
                                            }
                                        }
                                    }]
                            })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AlertService.prototype.AlertTowButtons = function (title, template, buttonText, callback, fail) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.Alert.create({
                            header: title,
                            message: template,
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    handler: function () {
                                        if (fail !== undefined) {
                                            fail();
                                        }
                                    }
                                },
                                {
                                    text: buttonText,
                                    handler: function () {
                                        callback();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/global.service.ts":
/*!***********************************!*\
  !*** ./src/app/global.service.ts ***!
  \***********************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GlobalService = /** @class */ (function () {
    function GlobalService() {
        this.IsLoggin = false;
        this.RestDefinitions = {
            Success: 100
        };
    }
    GlobalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GlobalService);
    return GlobalService;
}());



/***/ }),

/***/ "./src/app/loading.service.ts":
/*!************************************!*\
  !*** ./src/app/loading.service.ts ***!
  \************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var LoadingService = /** @class */ (function () {
    function LoadingService(loading) {
        this.loading = loading;
    }
    LoadingService.prototype.LoadingNormal = function (Message, SecondsToDismiss, callback) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var template, _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.HideLoading();
                        template = Message;
                        if (Message === undefined) {
                            template = "";
                        }
                        clearTimeout(this.timeOutInstance);
                        _a = this;
                        return [4 /*yield*/, this.loading.create({
                                spinner: 'lines',
                                cssClass: "background: transparent",
                                message: template,
                            })];
                    case 1:
                        _a.loader = _b.sent();
                        this.loader.present().then(function () {
                            if (SecondsToDismiss === undefined) {
                            }
                            else {
                                setTimeout(function () {
                                    _this.HideLoading();
                                    if (callback !== undefined) {
                                        callback();
                                    }
                                }, SecondsToDismiss * 1000);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    LoadingService.prototype.HideLoading = function (SecondsToDismiss, callback) {
        var _this = this;
        if (SecondsToDismiss === undefined) {
            if (this.loader !== undefined) {
                try {
                    this.loader.dismiss();
                    this.loader = undefined;
                }
                catch (e) {
                    console.log('err ', e);
                }
            }
        }
        else {
            this.timeOutInstance = setTimeout(function () {
                if (callback !== undefined) {
                    callback();
                }
                if (_this.loader !== undefined) {
                    try {
                        _this.loader.dismiss();
                        _this.loader = undefined;
                    }
                    catch (e) {
                        console.log('err 1', e);
                    }
                }
            }, SecondsToDismiss * 1000);
        }
    };
    LoadingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], LoadingService);
    return LoadingService;
}());



/***/ }),

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

module.exports = "<ion-content class=\"Contenido\">\n<ion-img src=\"./assets/imgs/Logo_CI24.png\" style=\"width:90%;padding: 20% 10% 0% 10%;margin: auto\"></ion-img>\n<div style=\"padding:0px 5%\">\n  <ion-item class=\"itemm\" style=\"margin-top:20px\">\n    <ion-label position=\"fixed\">Usuario: </ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"User\"></ion-input>\n  </ion-item>\n  <ion-item class=\"itemm\">\n    <ion-label position=\"fixed\">Contraseña: </ion-label>\n    <ion-input type=\"password\" [(ngModel)]=\"Pass\"></ion-input>\n  </ion-item>\n  <ion-button expand=\"block\" color=\"medium\" style=\"font-size:large;margin-top: 5px\" (click)=\"Login()\">\n    LOGIN\n  </ion-button>\n</div>\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"Settings()\">\n  <ion-fab-button color=\"medium\">\n    <ion-icon name=\"settings\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n</ion-content>\n<ion-footer>\n<ion-button expand=\"block\" fill=\"outline\" color=\"medium\">\n  Version 1.0.0\n</ion-button>\n</ion-footer>\n"

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








var LoginPage = /** @class */ (function () {
    function LoginPage(global, Post, storage, navCtrl, Loading, Alert) {
        this.global = global;
        this.Post = Post;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.Loading = Loading;
        this.Alert = Alert;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.Login = function () {
        var _this = this;
        if (this.global.Url == '' || this.global.Url == ' ' || this.global.Url == null || this.global.Url == undefined) {
            this.Loading.LoadingNormal("Dirigase al Boton de Ajustes para configurar la Url del servidor", 4);
        }
        else {
            if (this.Pass != "" && this.User != "") {
                this.Loading.LoadingNormal("Autenticando");
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
                                _this.Loading.LoadingNormal("Autenticacion Exitosa", 2);
                                _this.global.IsLoggin = true;
                                _this.navCtrl.navigateRoot('/home');
                            }
                            else {
                                _this.Loading.LoadingNormal("Error en la Autenticacion", 2);
                            }
                        }
                        else {
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
                        _this.Loading.HideLoading();
                        _this.Alert.AlertOnebutton('Error', JSON.stringify(err.message));
                    }
                });
            }
            else {
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
            _alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ }),

/***/ "./src/app/post.service.ts":
/*!*********************************!*\
  !*** ./src/app/post.service.ts ***!
  \*********************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");




var PostService = /** @class */ (function () {
    function PostService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.Refresh(function (datos) {
            console.log('Datos Actualizados');
        });
    }
    PostService.prototype.Login = function (data, callback) {
        var _this = this;
        this.Refresh(function (datos) {
            _this.http.post(_this.ControllersAPI.Login, data).subscribe(function (res) {
                callback(null, res);
            }, function (err) {
                callback(err);
            });
        });
    };
    PostService.prototype.Refresh = function (cb) {
        var _this = this;
        this.storage.get('Ruta').then(function (val) {
            if (val == '' || val == ' ' || val == null) {
            }
            else {
                _this.ControllersAPI = {
                    Login: val + "/LoginController",
                };
                cb(_this.ControllersAPI);
            }
        });
    };
    PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], PostService);
    return PostService;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map