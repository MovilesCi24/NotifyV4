(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["alerta-alerta-module"],{

/***/ "./src/app/alerta/alerta.module.ts":
/*!*****************************************!*\
  !*** ./src/app/alerta/alerta.module.ts ***!
  \*****************************************/
/*! exports provided: AlertaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertaPageModule", function() { return AlertaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _alerta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alerta.page */ "./src/app/alerta/alerta.page.ts");







var routes = [
    {
        path: '',
        component: _alerta_page__WEBPACK_IMPORTED_MODULE_6__["AlertaPage"]
    }
];
var AlertaPageModule = /** @class */ (function () {
    function AlertaPageModule() {
    }
    AlertaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_alerta_page__WEBPACK_IMPORTED_MODULE_6__["AlertaPage"]]
        })
    ], AlertaPageModule);
    return AlertaPageModule;
}());



/***/ }),

/***/ "./src/app/alerta/alerta.page.html":
/*!*****************************************!*\
  !*** ./src/app/alerta/alerta.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-button slot=start color=\"white\" fill=\"clear\"></ion-button>\r\n      <ion-title style=\"text-align: center\" color=danger text-uppercase>\r\n        Alerta \r\n      </ion-title>\r\n    <ion-button slot=end color=\"white\" fill=\"clear\"></ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"Contenido\">\r\n  <ion-list>\r\n      <ion-slides pager=\"true\" [options]=\"slideOpts\" *ngIf=\"Bimagen==true\">\r\n          <ion-slide *ngFor=\"let item of Imagenes\">\r\n            <ion-list>\r\n              <ion-item>\r\n                  <ion-img src=\"{{item}}\" style=\"width:90%;margin: auto\"></ion-img>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-slide>\r\n         </ion-slides>\r\n        <div style=\"padding:0px 5%\">\r\n            <ion-item *ngIf=\"Blabel==true\">\r\n              <ion-label style=\"text-align:center\" text-uppercase text-wrap>{{Texto}}</ion-label>\r\n            </ion-item>\r\n            <ion-item *ngIf=\"Binput==true\">\r\n                <ion-input placeholder=\"Respuesta\" [(ngModel)]=\"Response\"></ion-input>\r\n              </ion-item>\r\n            <ion-button *ngIf=\"Binput==true\" expand=\"block\" color=\"medium\" (click)=Responder()>Enviar Respuesta</ion-button>\r\n            <ion-button *ngFor=\"let button of Botones\" expand=\"block\" color=\"medium\" (click)=Responder(button.Text)>{{button.Text}}</ion-button>\r\n            <ion-button expand=\"block\" color=\"danger\" fill=\"outline\" (click)=\"Cancel()\">Cancelar</ion-button>\r\n        </div>\r\n  </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/alerta/alerta.page.scss":
/*!*****************************************!*\
  !*** ./src/app/alerta/alerta.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZXJ0YS9hbGVydGEucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/alerta/alerta.page.ts":
/*!***************************************!*\
  !*** ./src/app/alerta/alerta.page.ts ***!
  \***************************************/
/*! exports provided: AlertaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertaPage", function() { return AlertaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global.service */ "./src/app/global.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../loading.service */ "./src/app/loading.service.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../alert.service */ "./src/app/alert.service.ts");








var AlertaPage = /** @class */ (function () {
    function AlertaPage(global, splashScreen, viewCtrl, navCtrl, Post, Loading, Alert) {
        this.global = global;
        this.splashScreen = splashScreen;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.Post = Post;
        this.Loading = Loading;
        this.Alert = Alert;
        this.slideOpts = {
            effect: 'flip'
        };
        this.Imagenes = new Array();
        this.Bimagen = false;
        this.Binput = false;
        this.Blabel = false;
        this.Botones = new Array();
        this.splashScreen.hide();
    }
    ;
    AlertaPage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.navCtrl.pop();
        }, this.global.AlertaData.Validity);
        if (this.global.AlertaData.url == "null" || this.global.AlertaData.url == null) {
            this.Bimagen = false;
        }
        else {
            this.Bimagen = true;
        }
        console.log(this.global.AlertaData.url);
        this.Imagenes = JSON.parse(this.global.AlertaData.url.replace(/'/g, '"'));
        console.log(this.Imagenes);
        //this.Botones=.split(';');
        console.log(this.Bimagen);
        if (this.global.AlertaData.input == "true" || this.global.AlertaData.input == true) {
            this.Binput = true;
        }
        else {
            this.Binput = false;
        }
        console.log(this.Binput);
        if (this.global.AlertaData.label == "null" || this.global.AlertaData.label == null) {
            this.Blabel = false;
        }
        else {
            this.Blabel = true;
            this.Texto = this.global.AlertaData.label;
        }
        console.log(this.Blabel, this.Texto);
        var predata = this.global.AlertaData.button.replace(/'/g, '"');
        console.log(predata);
        this.Botones = JSON.parse(predata);
        console.log(this.Botones);
    };
    AlertaPage.prototype.Cancel = function () {
        this.navCtrl.pop();
    };
    AlertaPage.prototype.Responder = function (Mensaje) {
        var _this = this;
        if (Mensaje == undefined || Mensaje == null) {
            if (this.Response == '' || this.Response == ' ' || this.Response == null || this.Response == undefined) {
                this.Loading.LoadingNormal('La respuesta no puede estar vacia');
            }
            else {
                var data1 = {
                    Option: "AlertResponse",
                    Id_User: this.global.UserData.Id_User,
                    Id_Unique: this.global.AlertaData.Id_Unique,
                    Answer: this.Response
                };
                this.Post.Event(data1, function (err, data) {
                    console.log(data);
                    if (err == null) {
                        console.log('Respuesta enviada');
                        _this.navCtrl.pop();
                    }
                    else {
                        _this.Alert.AlertOnebutton('Error', JSON.stringify(err.message));
                    }
                });
            }
        }
        else {
            var data1 = {
                Option: "AlertResponse",
                Id_User: this.global.UserData.Id_User,
                Id_Unique: this.global.AlertaData.Id_Unique,
                Answer: Mensaje
            };
            this.Post.Event(data1, function (err, data) {
                console.log(data);
                if (err == null) {
                    console.log('Respuesta enviada');
                    _this.navCtrl.pop();
                }
                else {
                    _this.Alert.AlertOnebutton('Error', JSON.stringify(err.message));
                }
            });
        }
    };
    AlertaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alerta',
            template: __webpack_require__(/*! ./alerta.page.html */ "./src/app/alerta/alerta.page.html"),
            styles: [__webpack_require__(/*! ./alerta.page.scss */ "./src/app/alerta/alerta.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"],
            _loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"],
            _alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]])
    ], AlertaPage);
    return AlertaPage;
}());



/***/ })

}]);
//# sourceMappingURL=alerta-alerta-module.js.map