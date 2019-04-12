(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfiles-perfiles-module"],{

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

/***/ "./src/app/perfiles/perfiles.module.ts":
/*!*********************************************!*\
  !*** ./src/app/perfiles/perfiles.module.ts ***!
  \*********************************************/
/*! exports provided: PerfilesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilesPageModule", function() { return PerfilesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _perfiles_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfiles.page */ "./src/app/perfiles/perfiles.page.ts");







var routes = [
    {
        path: '',
        component: _perfiles_page__WEBPACK_IMPORTED_MODULE_6__["PerfilesPage"]
    }
];
var PerfilesPageModule = /** @class */ (function () {
    function PerfilesPageModule() {
    }
    PerfilesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_perfiles_page__WEBPACK_IMPORTED_MODULE_6__["PerfilesPage"]]
        })
    ], PerfilesPageModule);
    return PerfilesPageModule;
}());



/***/ }),

/***/ "./src/app/perfiles/perfiles.page.html":
/*!*********************************************!*\
  !*** ./src/app/perfiles/perfiles.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-menu-toggle menu=\"first\" slot=\"start\">\n          <ion-menu-button color=\"medium\" menumenu=\"first\"></ion-menu-button>\n        </ion-menu-toggle>\n      <ion-title style=\"text-align: center\" text-uppercase>\n        Perfiles \n      </ion-title>\n      <ion-button slot=end color=\"white\" fill=\"clear\"></ion-button>\n    </ion-toolbar>\n    <ion-searchbar  [(ngModel)]=\"searchQuery\" placeholder=\"Buscar\" (ionInput)=\"getItems($event)\" animated=\"true\" color=\"medium\"></ion-searchbar>\n  </ion-header>\n\n<ion-content class=\"Contenido\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"md-arrow-dropdown\"\n    pullingText=\"Desliza para Actualizar\"\n    refreshingSpinner=\"lines\"\n    refreshingText=\"Actualizando...\"></ion-refresher-content>\n  </ion-refresher>\n<ion-list>\n    <ion-item-sliding #item *ngFor=\"let Per of Perfiles;let i=index\">\n        <ion-item-options side=\"start\">\n          <ion-item-option color=\"danger\" (click)=\"DeleteProfile(Per.Id_ProfileEvent)\">Eliminar</ion-item-option>\n        </ion-item-options>\n        <ion-item (click)=\"DataPerfil(Per.Id_ProfileEvent,Per.Name)\">\n            <ion-avatar slot=\"start\">\n                <img *ngIf=\"i%2==0\" src=\"./assets/imgs/Group.png\">\n                <img *ngIf=\"i%2!=0\" src=\"./assets/imgs/Group2.png\">\n              </ion-avatar>\n            <ion-label>\n                <h2>{{Per.Name}}</h2>\n              </ion-label>\n        </ion-item>\n      </ion-item-sliding>\n</ion-list>\n</ion-content>\n<ion-footer>\n    <ion-button expand=\"block\" fill=\"outline\" color=\"medium\" (click)=\"NewPerfil()\">\n       Crear perfil\n      </ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/perfiles/perfiles.page.scss":
/*!*********************************************!*\
  !*** ./src/app/perfiles/perfiles.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcmZpbGVzL3BlcmZpbGVzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/perfiles/perfiles.page.ts":
/*!*******************************************!*\
  !*** ./src/app/perfiles/perfiles.page.ts ***!
  \*******************************************/
/*! exports provided: PerfilesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilesPage", function() { return PerfilesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global.service */ "./src/app/global.service.ts");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loading.service */ "./src/app/loading.service.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../alert.service */ "./src/app/alert.service.ts");







var PerfilesPage = /** @class */ (function () {
    function PerfilesPage(global, Post, navCtrl, Loading, Alert) {
        this.global = global;
        this.Post = Post;
        this.navCtrl = navCtrl;
        this.Loading = Loading;
        this.Alert = Alert;
        this.Perfiles = new Array();
        this.PerfilesOri = new Array();
        this.searchQuery = '';
        this.p = 1;
    }
    PerfilesPage.prototype.ngOnInit = function () {
        var _this = this;
        var data = {
            Option: "SelectProfile"
        };
        this.Post.Event(data, function (err, data) {
            console.log(data);
            if (err == null) {
                _this.PerfilesOri = _this.Perfiles = JSON.parse(data.data);
            }
            else {
                _this.Loading.HideLoading();
                _this.Alert.AlertOnebutton('Error', JSON.stringify(err.message));
            }
        });
    };
    PerfilesPage.prototype.getItems = function (ev) {
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.Perfiles = this.Perfiles.filter(function (item) {
                console.log(item);
                return (item.Name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    PerfilesPage.prototype.initializeItems = function () {
        this.Perfiles = this.PerfilesOri;
    };
    PerfilesPage.prototype.DeleteProfile = function (Id) {
        var _this = this;
        var data = {
            Option: "DeleteProfile",
            Id_ProfileEvent: Id
        };
        this.Post.Event(data, function (err, data) {
            console.log(data);
            if (err == null) {
                _this.ngOnInit();
            }
            else {
                _this.Loading.HideLoading();
                _this.Alert.AlertOnebutton('Error', JSON.stringify(err.message));
            }
        });
    };
    PerfilesPage.prototype.NewPerfil = function () {
        this.navCtrl.navigateRoot('/new-perfil');
    };
    PerfilesPage.prototype.DataPerfil = function (i, name) {
        var id = i + '.' + name + '.perfiles';
        this.navCtrl.navigateRoot('/vperfil-event/' + id);
    };
    PerfilesPage.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            var data = {
                Option: "SelectProfile"
            };
            _this.Post.Event(data, function (err, data) {
                console.log(data);
                if (err == null) {
                    _this.PerfilesOri = _this.Perfiles = JSON.parse(data.data);
                    console.log('Async operation has ended');
                    event.target.complete();
                    event;
                }
                else {
                    _this.Alert.AlertOnebutton('Error', JSON.stringify(err.message));
                    console.log('Async operation has ended');
                    event.target.complete();
                }
            });
        }, 1000);
    };
    PerfilesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-perfiles',
            template: __webpack_require__(/*! ./perfiles.page.html */ "./src/app/perfiles/perfiles.page.html"),
            styles: [__webpack_require__(/*! ./perfiles.page.scss */ "./src/app/perfiles/perfiles.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
            _post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
            _alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]])
    ], PerfilesPage);
    return PerfilesPage;
}());



/***/ })

}]);
//# sourceMappingURL=perfiles-perfiles-module.js.map