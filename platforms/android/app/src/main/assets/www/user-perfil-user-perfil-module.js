(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-perfil-user-perfil-module"],{

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

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-button slot=start color=\"danger\" fill=\"clear\" (click)=\"this.navCtrl.navigateRoot('/usuarios');\"> <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon></ion-button>    \r\n    <ion-title style=\"text-align: center\" text-uppercase>{{Data[1]}}</ion-title>\r\n    <ion-button *ngIf=\"Editar==true\" slot=end color=\"blue\" fill=\"clear\" (click)=\"EditarActive()\"> <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon></ion-button>\r\n    <ion-button *ngIf=\"Editar==false\" slot=end color=\"success\" fill=\"clear\" (click)=\"GuardarActive()\"> <ion-icon slot=\"icon-only\" name=\"checkmark-circle-outline\"></ion-icon></ion-button>\r\n  </ion-toolbar>\r\n  <ion-button *ngIf=\"Editar==false\" color=medium expand=block fill=outline>Editando...</ion-button>\r\n</ion-header>\r\n\r\n<ion-content class=\"Contenido\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content pullingIcon=\"md-arrow-dropdown\"\r\n    pullingText=\"Desliza para Actualizar\"\r\n    refreshingSpinner=\"lines\"\r\n    refreshingText=\"Actualizando...\"></ion-refresher-content>\r\n  </ion-refresher>\r\n<ion-list>\r\n    <ion-item-sliding #item *ngFor=\"let Per of Perfiles;let i=index\">\r\n        <ion-item-options side=\"start\" *ngIf=\"Editar==true\">\r\n          <ion-item-option *ngIf=\"Per.IsActive==1\" color=\"danger\" (click)=\"Inactive(Per.Id_ProfileEvent)\">Desactivar</ion-item-option>\r\n          <ion-item-option *ngIf=\"Per.IsActive==0\" color=\"success\" (click)=\"Active(Per.Id_ProfileEvent)\">Activar</ion-item-option>\r\n        </ion-item-options>\r\n        <ion-item>\r\n            <ion-avatar slot=\"start\">\r\n                <img *ngIf=\"i%2==0\" src=\"./assets/imgs/Group3.png\">\r\n                <img *ngIf=\"i%2!=0\" src=\"./assets/imgs/Group4.png\">\r\n              </ion-avatar>\r\n            <ion-label>\r\n                <h2 text-uppercase>{{Per.Name}}</h2>\r\n              </ion-label>\r\n              <ion-badge *ngIf=\"Per.IsActive==1&&Editar==true\" color=\"success\" slot=end>Activo</ion-badge>\r\n              <ion-badge *ngIf=\"Per.IsActive==0&&Editar==true\" color=\"danger\" slot=end>Inactivo</ion-badge>\r\n              <ion-button *ngIf=\"Editar==false\" slot=end color=\"danger\" fill=\"clear\" (click)=\"Delete(Per.Id_ProfileEvent)\"> <ion-icon slot=\"icon-only\" size=\"large\" name=\"close-circle-outline\"></ion-icon></ion-button>\r\n        </ion-item>\r\n        <ion-item-options side=\"end\" *ngIf=\"Editar==true\">\r\n          <ion-item-option color=\"tertiary\" (click)=\"DataPerfil(Per.Id_ProfileEvent,Per.Name)\">Eventos</ion-item-option>\r\n        </ion-item-options>\r\n      </ion-item-sliding>\r\n</ion-list>\r\n</ion-content>\r\n<ion-footer  *ngIf=\"Editar==false\">\r\n  <ion-button expand=\"block\" fill=\"outline\" color=\"medium\" (click)=\"Asociar()\">\r\n      Asociar Perfiles\r\n  </ion-button>\r\n</ion-footer>\r\n"

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