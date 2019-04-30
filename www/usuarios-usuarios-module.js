(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["usuarios-usuarios-module"],{

/***/ "./src/app/usuarios/usuarios.module.ts":
/*!*********************************************!*\
  !*** ./src/app/usuarios/usuarios.module.ts ***!
  \*********************************************/
/*! exports provided: UsuariosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosPageModule", function() { return UsuariosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _usuarios_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usuarios.page */ "./src/app/usuarios/usuarios.page.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");








var routes = [
    {
        path: '',
        component: _usuarios_page__WEBPACK_IMPORTED_MODULE_6__["UsuariosPage"]
    }
];
var UsuariosPageModule = /** @class */ (function () {
    function UsuariosPageModule() {
    }
    UsuariosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_usuarios_page__WEBPACK_IMPORTED_MODULE_6__["UsuariosPage"]]
        })
    ], UsuariosPageModule);
    return UsuariosPageModule;
}());



/***/ }),

/***/ "./src/app/usuarios/usuarios.page.html":
/*!*********************************************!*\
  !*** ./src/app/usuarios/usuarios.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-menu-toggle menu=\"first\" slot=\"start\">\r\n          <ion-menu-button color=\"medium\" menumenu=\"first\"></ion-menu-button>\r\n        </ion-menu-toggle>\r\n      <ion-title style=\"text-align: center\" text-uppercase>\r\n        Usuarios \r\n      </ion-title>\r\n      <ion-button slot=end color=\"white\" fill=\"clear\"></ion-button>\r\n    </ion-toolbar>\r\n    <ion-searchbar  [(ngModel)]=\"searchQuery\" placeholder=\"Buscar\" (ionInput)=\"getItems($event)\" animated=\"true\" color=\"medium\"></ion-searchbar>\r\n  </ion-header>\r\n\r\n  <ion-content class=\"Contenido\">\r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content pullingIcon=\"md-arrow-dropdown\"\r\n    pullingText=\"Desliza para Actualizar\"\r\n    refreshingSpinner=\"lines\"\r\n    refreshingText=\"Actualizando...\"></ion-refresher-content>\r\n  </ion-refresher>\r\n<ion-list>\r\n    <ion-item-sliding #item *ngFor=\"let User of Usuarios | paginate: { itemsPerPage: Items, currentPage: p };let i=index\">\r\n        <ion-item-options side=\"start\">\r\n          <ion-item-option *ngIf=\"User.IsActive==1\" color=\"danger\" (click)=\"Inactive(User.Id_User)\">Desactivar</ion-item-option>\r\n          <ion-item-option *ngIf=\"User.IsActive==0\" color=\"success\" (click)=\"Active(User.Id_User)\">Activar</ion-item-option>\r\n        </ion-item-options>\r\n        <ion-item>\r\n            <ion-avatar slot=\"start\">\r\n                <img *ngIf=\"i%2==0\" src=\"./assets/imgs/People1.png\">\r\n                <img *ngIf=\"i%2!=0\" src=\"./assets/imgs/People2.png\">\r\n              </ion-avatar>\r\n            <ion-label>\r\n                <h2 text-uppercase>{{User.UserName}}</h2>\r\n                <p>{{User.Company}}</p>\r\n              </ion-label>\r\n              <ion-badge *ngIf=\"User.IsActive==1\" color=\"success\" slot=end>Activo</ion-badge>\r\n              <ion-badge *ngIf=\"User.IsActive==0\" color=\"danger\" slot=end>Inactivo</ion-badge>\r\n        </ion-item>\r\n        <ion-item-options side=\"end\">\r\n          <ion-item-option color=\"tertiary\"(click)=\"VerData(User.Id_User,User.UserName)\">Perfiles</ion-item-option>\r\n        </ion-item-options>\r\n      </ion-item-sliding>\r\n</ion-list>\r\n</ion-content>\r\n<ion-footer>\r\n    <pagination-controls  (pageChange)=\"p = $event\"\r\n    maxSize=\"5\"\r\n    directionLinks=\"true\"\r\n    autoHide=\"true\"\r\n    responsive=\"true\"\r\n    previousLabel=\"Anterior\"\r\n    nextLabel=\"Siguiente\">\r\n</pagination-controls>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/usuarios/usuarios.page.scss":
/*!*********************************************!*\
  !*** ./src/app/usuarios/usuarios.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzdWFyaW9zL3VzdWFyaW9zLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/usuarios/usuarios.page.ts":
/*!*******************************************!*\
  !*** ./src/app/usuarios/usuarios.page.ts ***!
  \*******************************************/
/*! exports provided: UsuariosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosPage", function() { return UsuariosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global.service */ "./src/app/global.service.ts");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loading.service */ "./src/app/loading.service.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../alert.service */ "./src/app/alert.service.ts");







var UsuariosPage = /** @class */ (function () {
    function UsuariosPage(global, Post, navCtrl, Loading, Alert) {
        this.global = global;
        this.Post = Post;
        this.navCtrl = navCtrl;
        this.Loading = Loading;
        this.Alert = Alert;
        this.Usuarios = new Array();
        this.UsuariosOri = new Array();
        this.searchQuery = '';
        this.p = 1;
        this.Items = this.global.Item;
    }
    UsuariosPage.prototype.ngOnInit = function () {
        var _this = this;
        var data = {
            Option: "SelectUser"
        };
        this.Post.Event(data, function (err, data) {
            console.log(data);
            if (err == null) {
                _this.UsuariosOri = _this.Usuarios = JSON.parse(data.data);
            }
            else {
                _this.Loading.HideLoading();
                _this.Alert.AlertOnebutton('Error', JSON.stringify(err.message));
            }
        });
    };
    UsuariosPage.prototype.getItems = function (ev) {
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.Usuarios = this.Usuarios.filter(function (item) {
                console.log(item);
                return (item.Name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    UsuariosPage.prototype.initializeItems = function () {
        this.Usuarios = this.UsuariosOri;
    };
    UsuariosPage.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            var data = {
                Option: "SelectUser"
            };
            _this.Post.Event(data, function (err, data) {
                console.log(data);
                if (err == null) {
                    _this.Usuarios = _this.Usuarios = JSON.parse(data.data);
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
    UsuariosPage.prototype.VerData = function (Id_User, UserName) {
        var id = Id_User + '.' + UserName;
        this.navCtrl.navigateRoot('/user-perfil/' + id);
    };
    UsuariosPage.prototype.Inactive = function (id) {
        var _this = this;
        var data = {
            Option: "InactiveUser",
            Id_User: id
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
    UsuariosPage.prototype.Active = function (id) {
        var _this = this;
        var data = {
            Option: "ActiveUser",
            Id_User: id
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
    UsuariosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usuarios',
            template: __webpack_require__(/*! ./usuarios.page.html */ "./src/app/usuarios/usuarios.page.html"),
            styles: [__webpack_require__(/*! ./usuarios.page.scss */ "./src/app/usuarios/usuarios.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
            _post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
            _alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]])
    ], UsuariosPage);
    return UsuariosPage;
}());



/***/ })

}]);
//# sourceMappingURL=usuarios-usuarios-module.js.map