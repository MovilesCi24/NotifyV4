(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ver-noty-ver-noty-module"],{

/***/ "./src/app/ver-noty/ver-noty.module.ts":
/*!*********************************************!*\
  !*** ./src/app/ver-noty/ver-noty.module.ts ***!
  \*********************************************/
/*! exports provided: VerNotyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerNotyPageModule", function() { return VerNotyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ver_noty_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ver-noty.page */ "./src/app/ver-noty/ver-noty.page.ts");







var routes = [
    {
        path: '',
        component: _ver_noty_page__WEBPACK_IMPORTED_MODULE_6__["VerNotyPage"]
    }
];
var VerNotyPageModule = /** @class */ (function () {
    function VerNotyPageModule() {
    }
    VerNotyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_ver_noty_page__WEBPACK_IMPORTED_MODULE_6__["VerNotyPage"]]
        })
    ], VerNotyPageModule);
    return VerNotyPageModule;
}());



/***/ }),

/***/ "./src/app/ver-noty/ver-noty.page.html":
/*!*********************************************!*\
  !*** ./src/app/ver-noty/ver-noty.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-button slot=start color=\"danger\" fill=\"clear\" (click)=\"this.navCtrl.navigateRoot('/home')\"> <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon></ion-button>\r\n      <ion-title style=\"text-align: center\" text-uppercase>Notificación</ion-title>\r\n      <ion-button slot=end color=\"white\" fill=\"clear\"> <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon></ion-button>\r\n    </ion-toolbar>\r\n    <ion-item>\r\n      <ion-label text-wrap>\r\n          {{Data[1]}}\r\n      </ion-label>\r\n      <ion-note slot=\"end\" color=danger>{{this.Fecha}}</ion-note>\r\n    </ion-item>\r\n  </ion-header>\r\n\r\n<ion-content class=\"Contenido\">\r\n  <ion-list>\r\n      <ion-item>\r\n          <ion-label color=\"danger\">Dispositivo:</ion-label>\r\n          <ion-note slot=\"end\">{{this.Dispositivo}}</ion-note>\r\n      </ion-item>\r\n      <ion-item>\r\n          <ion-label color=\"danger\">Usuario:</ion-label>\r\n          <ion-note slot=\"end\">{{this.Usuario}}</ion-note>\r\n      </ion-item>\r\n    <ion-slides pager=\"true\" [options]=\"slideOpts\" *ngIf=\"Bimagen==true\">\r\n        <ion-slide *ngFor=\"let item of Imagenes\">\r\n          <ion-list>\r\n            <ion-item>\r\n                <ion-img src=\"{{item}}\" style=\"width:90%;margin: auto\"></ion-img>\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-slide>\r\n       </ion-slides>\r\n      <div style=\"padding:0px 5%\">\r\n          <ion-item *ngIf=\"Blabel==true\">\r\n            <ion-label style=\"text-align:center\" text-uppercase text-wrap>{{Texto}}</ion-label>\r\n          </ion-item>\r\n              <ion-item *ngIf=\"Binput==true\">\r\n                  <ion-label color=\"danger\">Respuesta:</ion-label>\r\n                  <ion-note slot=\"end\">{{this.Response}}</ion-note>\r\n              </ion-item>\r\n         <ion-button *ngFor=\"let button of Botones\" expand=\"block\" color=\"medium\" disabled=\"true\">{{button.Text}}</ion-button>\r\n      </div>\r\n</ion-list>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/ver-noty/ver-noty.page.scss":
/*!*********************************************!*\
  !*** ./src/app/ver-noty/ver-noty.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Zlci1ub3R5L3Zlci1ub3R5LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/ver-noty/ver-noty.page.ts":
/*!*******************************************!*\
  !*** ./src/app/ver-noty/ver-noty.page.ts ***!
  \*******************************************/
/*! exports provided: VerNotyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerNotyPage", function() { return VerNotyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global.service */ "./src/app/global.service.ts");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loading.service */ "./src/app/loading.service.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);









var VerNotyPage = /** @class */ (function () {
    function VerNotyPage(global, Post, navCtrl, Loading, Alert, Aroute) {
        this.global = global;
        this.Post = Post;
        this.navCtrl = navCtrl;
        this.Loading = Loading;
        this.Alert = Alert;
        this.Aroute = Aroute;
        this.Data = new Array();
        this.Imagenes = new Array();
        this.Bimagen = false;
        this.Binput = false;
        this.Blabel = false;
        this.Botones = new Array();
        this.Dispositivo = "N/A";
        this.Usuario = "N/A";
        var Data1 = this.Aroute.snapshot.paramMap.get('Id');
        this.Data = Data1.split('*');
        console.log(this.Data);
        this.Id_unique = this.Data[0];
        console.log(this.Id_unique);
    }
    ;
    VerNotyPage.prototype.ngOnInit = function () {
        var _this = this;
        var data = {
            Option: 'EventDetail',
            Id_User: this.global.UserData.Id_User,
            Id_Unique: this.Id_unique,
            ReadDate: moment__WEBPACK_IMPORTED_MODULE_8__().format("YYYY-MM-DD HH:mm:ss")
        };
        this.Post.Event(data, function (err, data) {
            console.log(data);
            if (err == null) {
                _this.Notificacion = JSON.parse(data.data)[0];
                console.log(_this.Notificacion);
                _this.Response = _this.Notificacion.Answer;
                _this.Dispositivo = _this.Notificacion.UID;
                _this.Usuario = _this.Notificacion.Usuario;
                _this.Fecha = moment__WEBPACK_IMPORTED_MODULE_8__(_this.Notificacion.EventDate).format("HH:mm:ss YYYY-MM-DD");
                console.log('Respuesta:', _this.Response);
                if (_this.Notificacion.Url == "null" || _this.Notificacion.Url == null) {
                    _this.Bimagen = false;
                }
                else {
                    _this.Bimagen = true;
                }
                console.log(_this.Notificacion.Url);
                _this.Imagenes = JSON.parse(_this.Notificacion.Url.replace(/'/g, '"'));
                console.log(_this.Imagenes);
                //this.Botones=.split(';');
                console.log(_this.Bimagen);
                console.log('Input', _this.Notificacion.Input);
                if (_this.Notificacion.Input == "true" || _this.Notificacion.Input == true || _this.Notificacion.Input == "True") {
                    _this.Binput = true;
                }
                else {
                    _this.Binput = false;
                }
                console.log(_this.Binput);
                if (_this.Notificacion.Label == "null" || _this.Notificacion.Label == null) {
                    _this.Blabel = false;
                }
                else {
                    _this.Blabel = true;
                    _this.Texto = _this.Notificacion.Label;
                }
                console.log(_this.Blabel, _this.Texto);
                var predata = _this.Notificacion.Button.replace(/'/g, '"');
                console.log(predata);
                _this.Botones = JSON.parse(predata);
                console.log(_this.Botones);
            }
            else {
                _this.Alert.AlertOnebutton('Error', JSON.stringify(err.message));
            }
        });
    };
    VerNotyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ver-noty',
            template: __webpack_require__(/*! ./ver-noty.page.html */ "./src/app/ver-noty/ver-noty.page.html"),
            styles: [__webpack_require__(/*! ./ver-noty.page.scss */ "./src/app/ver-noty/ver-noty.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
            _post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
            _alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], VerNotyPage);
    return VerNotyPage;
}());



/***/ })

}]);
//# sourceMappingURL=ver-noty-ver-noty-module.js.map