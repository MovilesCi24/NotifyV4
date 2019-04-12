(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-perfil-user-perfil-module"],{

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

/***/ "./src/app/user-perfil/user-perfil.module.ts":
/*!***************************************************!*\
  !*** ./src/app/user-perfil/user-perfil.module.ts ***!
  \***************************************************/
/*! exports provided: UserPerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPerfilPageModule", function() { return UserPerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-perfil.page */ "./src/app/user-perfil/user-perfil.page.ts");







var routes = [
    {
        path: '',
        component: _user_perfil_page__WEBPACK_IMPORTED_MODULE_6__["UserPerfilPage"]
    }
];
var UserPerfilPageModule = /** @class */ (function () {
    function UserPerfilPageModule() {
    }
    UserPerfilPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_user_perfil_page__WEBPACK_IMPORTED_MODULE_6__["UserPerfilPage"]]
        })
    ], UserPerfilPageModule);
    return UserPerfilPageModule;
}());



/***/ }),

/***/ "./src/app/user-perfil/user-perfil.page.html":
/*!***************************************************!*\
  !*** ./src/app/user-perfil/user-perfil.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-button slot=start color=\"danger\" fill=\"clear\" (click)=\"this.navCtrl.navigateRoot('/usuarios');\"> <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon></ion-button>    \n    <ion-title style=\"text-align: center\" text-uppercase>{{Data[1]}}</ion-title>\n    <ion-button *ngIf=\"Editar==true\" slot=end color=\"blue\" fill=\"clear\" (click)=\"EditarActive()\"> <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon></ion-button>\n    <ion-button *ngIf=\"Editar==false\" slot=end color=\"success\" fill=\"clear\" (click)=\"GuardarActive()\"> <ion-icon slot=\"icon-only\" name=\"checkmark-circle-outline\"></ion-icon></ion-button>\n  </ion-toolbar>\n  <ion-button *ngIf=\"Editar==false\" color=medium expand=block fill=outline>Editando...</ion-button>\n</ion-header>\n\n<ion-content class=\"Contenido\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"md-arrow-dropdown\"\n    pullingText=\"Desliza para Actualizar\"\n    refreshingSpinner=\"lines\"\n    refreshingText=\"Actualizando...\"></ion-refresher-content>\n  </ion-refresher>\n<ion-list>\n    <ion-item-sliding #item *ngFor=\"let Per of Perfiles;let i=index\">\n        <ion-item-options side=\"start\" *ngIf=\"Editar==true\">\n          <ion-item-option *ngIf=\"Per.IsActive==1\" color=\"danger\" (click)=\"Inactive(Per.Id_ProfileEvent)\">Desactivar</ion-item-option>\n          <ion-item-option *ngIf=\"Per.IsActive==0\" color=\"success\" (click)=\"Active(Per.Id_ProfileEvent)\">Activar</ion-item-option>\n        </ion-item-options>\n        <ion-item>\n            <ion-avatar slot=\"start\">\n                <img *ngIf=\"i%2==0\" src=\"./assets/imgs/Group3.png\">\n                <img *ngIf=\"i%2!=0\" src=\"./assets/imgs/Group4.png\">\n              </ion-avatar>\n            <ion-label>\n                <h2 text-uppercase>{{Per.Name}}</h2>\n              </ion-label>\n              <ion-badge *ngIf=\"Per.IsActive==1&&Editar==true\" color=\"success\" slot=end>Activo</ion-badge>\n              <ion-badge *ngIf=\"Per.IsActive==0&&Editar==true\" color=\"danger\" slot=end>Inactivo</ion-badge>\n              <ion-button *ngIf=\"Editar==false\" slot=end color=\"danger\" fill=\"clear\" (click)=\"Delete(Per.Id_ProfileEvent)\"> <ion-icon slot=\"icon-only\" size=\"large\" name=\"close-circle-outline\"></ion-icon></ion-button>\n        </ion-item>\n        <ion-item-options side=\"end\" *ngIf=\"Editar==true\">\n          <ion-item-option color=\"tertiary\" (click)=\"DataPerfil(Per.Id_ProfileEvent,Per.Name)\">Eventos</ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n</ion-list>\n</ion-content>\n<ion-footer  *ngIf=\"Editar==false\">\n  <ion-button expand=\"block\" fill=\"outline\" color=\"medium\" (click)=\"Asociar()\">\n      Asociar Perfiles\n  </ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/user-perfil/user-perfil.page.scss":
/*!***************************************************!*\
  !*** ./src/app/user-perfil/user-perfil.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcGVyZmlsL3VzZXItcGVyZmlsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/user-perfil/user-perfil.page.ts":
/*!*************************************************!*\
  !*** ./src/app/user-perfil/user-perfil.page.ts ***!
  \*************************************************/
/*! exports provided: UserPerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPerfilPage", function() { return UserPerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global.service */ "./src/app/global.service.ts");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loading.service */ "./src/app/loading.service.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var UserPerfilPage = /** @class */ (function () {
    function UserPerfilPage(global, Post, navCtrl, Loading, Alert, Aroute) {
        this.global = global;
        this.Post = Post;
        this.navCtrl = navCtrl;
        this.Loading = Loading;
        this.Alert = Alert;
        this.Aroute = Aroute;
        this.Editar = true;
        var Data1 = this.Aroute.snapshot.paramMap.get('Id');
        this.Data = Data1.split('.');
        console.log(this.Data);
        this.Id_User = this.Data[0];
        console.log(this.Id_User);
    }
    UserPerfilPage.prototype.EditarActive = function () {
        this.Editar = false;
        this.ngOnInit();
    };
    UserPerfilPage.prototype.GuardarActive = function () {
        this.Editar = true;
        this.ngOnInit();
    };
    UserPerfilPage.prototype.ngOnInit = function () {
        var _this = this;
        var data = {
            Option: "UserProfile",
            Id_User: this.Id_User
        };
        this.Post.Event(data, function (err, data) {
            console.log(data);
            if (err == null) {
                _this.Perfiles = JSON.parse(data.data);
            }
            else {
                _this.Alert.AlertOnebutton('Error', JSON.stringify(err.message));
            }
        });
    };
    UserPerfilPage.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            var data = {
                Option: "UserProfile",
                Id_User: _this.Id_User
            };
            _this.Post.Event(data, function (err, data) {
                console.log(data);
                if (err == null) {
                    _this.Perfiles = JSON.parse(data.data);
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
    UserPerfilPage.prototype.DataPerfil = function (i, name) {
        var id = i + '.' + name + '.user-perfil.' + this.Id_User + '.' + this.Data[1];
        this.navCtrl.navigateRoot('/vperfil-event/' + id);
    };
    UserPerfilPage.prototype.Inactive = function (id) {
        var _this = this;
        var data = {
            Option: "InactiveProfile",
            Id_User: this.Id_User,
            Id_ProfileEvent: id
        };
        this.Post.Event(data, function (err, data) {
            console.log(data);
            if (err == null) {
                _this.ngOnInit();
                event;
            }
            else {
                _this.Alert.AlertOnebutton('Error', JSON.stringify(err.message));
            }
        });
    };
    UserPerfilPage.prototype.Active = function (id) {
        var _this = this;
        var data = {
            Option: "ActiveProfile",
            Id_User: this.Id_User,
            Id_ProfileEvent: id
        };
        this.Post.Event(data, function (err, data) {
            console.log(data);
            if (err == null) {
                _this.ngOnInit();
                event;
            }
            else {
                _this.Alert.AlertOnebutton('Error', JSON.stringify(err.message));
            }
        });
    };
    UserPerfilPage.prototype.Delete = function (id) {
        var _this = this;
        var data = {
            Option: "DesasociateProfile",
            Id_User: this.Id_User,
            Id_ProfileEvent: id
        };
        this.Post.Event(data, function (err, data) {
            console.log(data);
            if (err == null) {
                _this.ngOnInit();
                event;
            }
            else {
                _this.Alert.AlertOnebutton('Error', JSON.stringify(err.message));
            }
        });
    };
    UserPerfilPage.prototype.Asociar = function () {
        var _this = this;
        var per = '0';
        for (var i = 0; i < this.Perfiles.length; i++) {
            per = per + ',' + this.Perfiles[i].Id_ProfileEvent;
        }
        console.log(per);
        setTimeout(function () {
            var id = _this.Id_User + '.' + _this.Data[1] + '.' + per;
            _this.navCtrl.navigateRoot('/asociate-events/' + id);
        }, 1000);
    };
    UserPerfilPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-perfil',
            template: __webpack_require__(/*! ./user-perfil.page.html */ "./src/app/user-perfil/user-perfil.page.html"),
            styles: [__webpack_require__(/*! ./user-perfil.page.scss */ "./src/app/user-perfil/user-perfil.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
            _post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
            _alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], UserPerfilPage);
    return UserPerfilPage;
}());



/***/ })

}]);
//# sourceMappingURL=user-perfil-user-perfil-module.js.map