(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-perfil-new-perfil-module"],{

/***/ "./src/app/new-perfil/new-perfil.module.ts":
/*!*************************************************!*\
  !*** ./src/app/new-perfil/new-perfil.module.ts ***!
  \*************************************************/
/*! exports provided: NewPerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPerfilPageModule", function() { return NewPerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_perfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-perfil.page */ "./src/app/new-perfil/new-perfil.page.ts");







var routes = [
    {
        path: '',
        component: _new_perfil_page__WEBPACK_IMPORTED_MODULE_6__["NewPerfilPage"]
    }
];
var NewPerfilPageModule = /** @class */ (function () {
    function NewPerfilPageModule() {
    }
    NewPerfilPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_new_perfil_page__WEBPACK_IMPORTED_MODULE_6__["NewPerfilPage"]]
        })
    ], NewPerfilPageModule);
    return NewPerfilPageModule;
}());



/***/ }),

/***/ "./src/app/new-perfil/new-perfil.page.html":
/*!*************************************************!*\
  !*** ./src/app/new-perfil/new-perfil.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-button slot=start color=\"danger\" fill=\"clear\" (click)=\"this.navCtrl.navigateRoot('/perfiles');\"> <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon></ion-button>\n    <ion-title style=\"text-align: center\" text-uppercase>Nuevo Perfil</ion-title>\n    <ion-button slot=end color=\"white\" fill=\"clear\"> <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon></ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"Contenido\">\n    <ion-list>\n        <div style=\"padding:0% 10px\">\n            <ion-item >\n                <ion-label position=\"fixed\">Nombre: </ion-label>\n                <ion-input type=\"text\" [(ngModel)]=\"ProfileName\"></ion-input>\n              </ion-item>\n        </div>\n      </ion-list>\n</ion-content>\n<ion-footer>\n    <ion-button expand=\"block\" fill=\"outline\" color=\"medium\" (click)=\"Guardar()\">\n        Crear\n    </ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/new-perfil/new-perfil.page.scss":
/*!*************************************************!*\
  !*** ./src/app/new-perfil/new-perfil.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1wZXJmaWwvbmV3LXBlcmZpbC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/new-perfil/new-perfil.page.ts":
/*!***********************************************!*\
  !*** ./src/app/new-perfil/new-perfil.page.ts ***!
  \***********************************************/
/*! exports provided: NewPerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPerfilPage", function() { return NewPerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global.service */ "./src/app/global.service.ts");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loading.service */ "./src/app/loading.service.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../alert.service */ "./src/app/alert.service.ts");







var NewPerfilPage = /** @class */ (function () {
    function NewPerfilPage(global, Post, navCtrl, Loading, Alert) {
        this.global = global;
        this.Post = Post;
        this.navCtrl = navCtrl;
        this.Loading = Loading;
        this.Alert = Alert;
        this.ProfileName = '';
    }
    NewPerfilPage.prototype.ngOnInit = function () {
    };
    NewPerfilPage.prototype.Guardar = function () {
        var _this = this;
        console.log(this.ProfileName);
        if (this.ProfileName == '' || this.ProfileName == undefined || this.ProfileName == ' ') {
            this.Loading.LoadingNormal('Campos Vacios', 2);
        }
        else {
            var data = {
                Option: "NewProfile",
                ProfileName: this.ProfileName
            };
            this.Post.Event(data, function (err, data) {
                console.log(data);
                if (err == null) {
                    if (data.message == 1700) {
                        _this.Loading.LoadingNormal('Este Nombre ya se encuentra asociado a un Perfil', 2);
                    }
                    else {
                        var id = JSON.parse(data.data)[0].Id_ProfileEvent + '.' + JSON.parse(data.data)[0].Name;
                        _this.navCtrl.navigateRoot('/perfil-events/' + id);
                    }
                }
                else {
                    _this.Loading.HideLoading();
                    _this.Alert.AlertOnebutton('Error', JSON.stringify(err.message));
                }
            });
        }
    };
    NewPerfilPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-perfil',
            template: __webpack_require__(/*! ./new-perfil.page.html */ "./src/app/new-perfil/new-perfil.page.html"),
            styles: [__webpack_require__(/*! ./new-perfil.page.scss */ "./src/app/new-perfil/new-perfil.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
            _post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
            _alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]])
    ], NewPerfilPage);
    return NewPerfilPage;
}());



/***/ })

}]);
//# sourceMappingURL=new-perfil-new-perfil-module.js.map