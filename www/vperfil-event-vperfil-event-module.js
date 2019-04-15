(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vperfil-event-vperfil-event-module"],{

/***/ "./src/app/vperfil-event/vperfil-event.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/vperfil-event/vperfil-event.module.ts ***!
  \*******************************************************/
/*! exports provided: VperfilEventPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VperfilEventPageModule", function() { return VperfilEventPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vperfil_event_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vperfil-event.page */ "./src/app/vperfil-event/vperfil-event.page.ts");







var routes = [
    {
        path: '',
        component: _vperfil_event_page__WEBPACK_IMPORTED_MODULE_6__["VperfilEventPage"]
    }
];
var VperfilEventPageModule = /** @class */ (function () {
    function VperfilEventPageModule() {
    }
    VperfilEventPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_vperfil_event_page__WEBPACK_IMPORTED_MODULE_6__["VperfilEventPage"]]
        })
    ], VperfilEventPageModule);
    return VperfilEventPageModule;
}());



/***/ }),

/***/ "./src/app/vperfil-event/vperfil-event.page.html":
/*!*******************************************************!*\
  !*** ./src/app/vperfil-event/vperfil-event.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-button slot=start color=\"danger\" fill=\"clear\" (click)=\"Atras()\"> <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon></ion-button>\n      <ion-title style=\"text-align: center\" text-uppercase>{{Data[1]}}</ion-title>\n      <ion-button *ngIf=\"Editar==false\" slot=end color=\"white\" fill=\"clear\"> <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon></ion-button>\n      <ion-button *ngIf=\"Editar==true\" slot=end color=\"blue\" fill=\"clear\" (click)=\"EditarActive()\"> <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon></ion-button>\n    </ion-toolbar>\n    <ion-button *ngIf=\"Editar==false\" color=medium expand=block fill=outline>Editando...</ion-button>\n  </ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item-group style=\"width: 100%\" *ngFor=\"let item of Dispositivo;let i=index;\">\n            <ion-item-divider (click)=ToggleD(i)>\n              <ion-label color=\"danger\" text-uppercase>{{item.NameDevices}}</ion-label>\n              <ion-icon *ngIf=\"TDisp[i]==false\" slot=end name=\"arrow-dropdown\"></ion-icon>\n              <ion-icon *ngIf=\"TDisp[i]==true\" slot=end name=\"remove\"></ion-icon>\n            </ion-item-divider>\n            <div *ngIf=\"TDisp[i]==true\">\n            <ion-item *ngFor=\"let comp of Componentes[i];let j=index;\">\n                <ion-item-group style=\"width: 100%\">\n                    <ion-item-divider (click)=ToggleC(i,j)>\n                      <ion-label text-uppercase>{{comp.NameComponent}}</ion-label>\n                      <ion-icon *ngIf=\"Tcomp[i][j]==false\" slot=end name=\"arrow-dropdown\"></ion-icon>\n                      <ion-icon *ngIf=\"Tcomp[i][j]==true\" slot=end name=\"remove\"></ion-icon>\n                    </ion-item-divider>\n                    <div *ngIf=\"Tcomp[i][j]==true\">\n                        <ion-item *ngFor=\"let event of Eventos[i][j];let k=index;\">\n                        {{event.NameEvent}}\n                        <ion-toggle *ngIf=\"Editar==true\" slot=end color=\"danger\" [(ngModel)]=\"Vevent[i][j][k]\" disabled=\"true\"></ion-toggle>\n                        <ion-toggle *ngIf=\"Editar==false\" slot=end color=\"danger\" [(ngModel)]=\"Vevent[i][j][k]\" disabled=\"false\"></ion-toggle>\n                      </ion-item>\n                    </div>\n                  </ion-item-group>\n            </ion-item>\n            </div>\n          </ion-item-group>\n    </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-button *ngIf=\"Editar==false\" expand=\"block\" fill=\"outline\" color=\"medium\" (click)=\"Guardar()\">\n    Guardar Cambios\n</ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/vperfil-event/vperfil-event.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/vperfil-event/vperfil-event.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZwZXJmaWwtZXZlbnQvdnBlcmZpbC1ldmVudC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/vperfil-event/vperfil-event.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/vperfil-event/vperfil-event.page.ts ***!
  \*****************************************************/
/*! exports provided: VperfilEventPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VperfilEventPage", function() { return VperfilEventPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global.service */ "./src/app/global.service.ts");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loading.service */ "./src/app/loading.service.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var VperfilEventPage = /** @class */ (function () {
    function VperfilEventPage(global, Post, navCtrl, Loading, Alert, Aroute) {
        this.global = global;
        this.Post = Post;
        this.navCtrl = navCtrl;
        this.Loading = Loading;
        this.Alert = Alert;
        this.Aroute = Aroute;
        this.Datos = new Array();
        this.Devices = new Array();
        this.Dispositivo = new Array();
        this.Componentes = new Array();
        this.Eventos = new Array();
        this.TDisp = new Array();
        this.Tcomp = new Array();
        this.Vevent = new Array();
        this.Enviado = new Array();
        this.Editar = true;
        var Data1 = this.Aroute.snapshot.paramMap.get('Id');
        this.Data = Data1.split('.');
        console.log(this.Data);
        this.Id_Perfil = this.Data[0];
        console.log(this.Id_Perfil);
    }
    VperfilEventPage.prototype.ngOnInit = function () {
        var _this = this;
        var data1 = {
            Option: "GetDevices"
        };
        this.Post.Event(data1, function (err, data) {
            console.log(data);
            if (err == null) {
                _this.Devices = JSON.parse(data.data);
                _this.OrganizarData(_this.Devices);
            }
            else {
                _this.Alert.AlertOnebutton('Error', JSON.stringify(err.message));
            }
        });
        var data = {
            Option: "EventProfile",
            Id_ProfileEvent: this.Id_Perfil
        };
        this.Post.Event(data, function (err, data) {
            console.log(data);
            if (err == null) {
                _this.Datos = JSON.parse(data.data);
            }
            else {
                _this.Alert.AlertOnebutton('Error', JSON.stringify(err.message));
            }
        });
    };
    VperfilEventPage.prototype.OrganizarData = function (Disp) {
        var _this = this;
        this.Dispositivo = new Array();
        var map = new Map();
        for (var _i = 0, Disp_1 = Disp; _i < Disp_1.length; _i++) {
            var item = Disp_1[_i];
            if (!map.has(item.Id_DeviceType)) {
                map.set(item.Id_DeviceType, true); // set any value to Map
                this.Dispositivo.push({
                    Id_DeviceType: item.Id_DeviceType,
                    NameDevices: item.NameDevices
                });
                this.TDisp.push(true);
            }
        }
        this.Componentes = new Array(this.Dispositivo.length);
        this.Tcomp = new Array(this.Dispositivo.length);
        for (var i = 0; i < this.Dispositivo.length; i++) {
            this.Componentes[i] = new Array();
            this.Tcomp[i] = new Array();
            var map2 = new Map();
            for (var _a = 0, Disp_2 = Disp; _a < Disp_2.length; _a++) {
                var item = Disp_2[_a];
                if ((!map2.has(item.Id_Component)) && (item.Id_DeviceType == this.Dispositivo[i].Id_DeviceType)) {
                    map2.set(item.Id_Component, true); // set any value to Map
                    this.Componentes[i].push({
                        Id_Component: item.Id_Component,
                        NameComponent: item.NameComponent
                    });
                    this.Tcomp[i].push(false);
                }
            }
        }
        this.Eventos = new Array(this.Dispositivo.length);
        this.Vevent = new Array(this.Dispositivo.length);
        for (var i = 0; i < this.Dispositivo.length; i++) {
            this.Eventos[i] = new Array(this.Componentes[i].length);
            this.Vevent[i] = new Array(this.Componentes[i].length);
            for (var j = 0; j < this.Componentes[i].length; j++) {
                this.Eventos[i][j] = new Array();
                this.Vevent[i][j] = new Array();
                var map3 = new Map();
                for (var _b = 0, Disp_3 = Disp; _b < Disp_3.length; _b++) {
                    var item = Disp_3[_b];
                    if ((!map3.has(item.Id_EventComponent)) && (item.Id_DeviceType == this.Dispositivo[i].Id_DeviceType) && (item.Id_Component == this.Componentes[i][j].Id_Component)) {
                        map3.set(item.Id_EventComponent, true); // set any value to Map
                        this.Eventos[i][j].push({
                            Id_DeviceType: item.Id_DeviceType,
                            NameDevices: item.NameDevices,
                            Id_Component: item.Id_Component,
                            NameComponent: item.NameComponent,
                            Id_EventComponent: item.Id_EventComponent,
                            NameEvent: item.NameEvent,
                            Id_DeviceComponent: item.Id_DeviceComponent
                        });
                        this.Vevent[i][j].push(false);
                    }
                }
            }
        }
        console.log(this.Eventos);
        setTimeout(function () {
            _this.VerificarExis();
        }, 1000);
    };
    VperfilEventPage.prototype.VerificarExis = function () {
        for (var o = 0; o < this.Datos.length; o++) {
            for (var i = 0; i < this.Dispositivo.length; i++) {
                for (var j = 0; j < this.Componentes[i].length; j++) {
                    for (var k = 0; k < this.Eventos[i][j].length; k++) {
                        if (this.Datos[o].Id_EventComponent == this.Eventos[i][j][k].Id_EventComponent) {
                            this.Vevent[i][j][k] = true;
                        }
                    }
                }
            }
        }
    };
    VperfilEventPage.prototype.Atras = function () {
        var ruta;
        if (this.Data[2] == 'user-perfil') {
            ruta = '/' + this.Data[2] + '/' + this.Data[3] + '.' + this.Data[4];
        }
        else {
            ruta = '/' + this.Data[2];
        }
        this.navCtrl.navigateRoot(ruta);
    };
    VperfilEventPage.prototype.EditarActive = function () {
        this.Editar = false;
    };
    VperfilEventPage.prototype.ToggleD = function (i) {
        if (this.TDisp[i] == false) {
            this.TDisp[i] = true;
        }
        else if (this.TDisp[i] == true) {
            this.TDisp[i] = false;
        }
    };
    VperfilEventPage.prototype.ToggleC = function (i, j) {
        if (this.Tcomp[i][j] == false) {
            this.Tcomp[i][j] = true;
        }
        else if (this.Tcomp[i][j] == true) {
            this.Tcomp[i][j] = false;
        }
    };
    VperfilEventPage.prototype.Guardar = function () {
        var _this = this;
        var data1 = {
            Option: "BlankProfile",
            Id_ProfileEvent: this.Id_Perfil
        };
        this.Post.Event(data1, function (err, data) {
            console.log(data);
            if (err == null) {
                _this.Asociar();
            }
            else {
                _this.Alert.AlertOnebutton('Error', JSON.stringify(err.message));
            }
        });
    };
    VperfilEventPage.prototype.Asociar = function () {
        var _this = this;
        this.Loading.LoadingNormal('Asociando Eventos...');
        console.log(this.Vevent);
        var v = 0;
        for (var i = 0; i < this.Dispositivo.length; i++) {
            for (var j = 0; j < this.Componentes[i].length; j++) {
                for (var k = 0; k < this.Eventos[i][j].length; k++) {
                    if (this.Vevent[i][j][k] == true) {
                        v = v + 1;
                        this.Enviado.push(false);
                    }
                }
            }
        }
        if (v == 0) {
            this.Loading.HideLoading();
            this.Loading.LoadingNormal('Seleccione al menos un evento', 2);
        }
        else {
            var p_1 = 0;
            for (var i = 0; i < this.Dispositivo.length; i++) {
                for (var j = 0; j < this.Componentes[i].length; j++) {
                    for (var k = 0; k < this.Eventos[i][j].length; k++) {
                        if (this.Vevent[i][j][k] == true) {
                            var data = {
                                Option: "AsociateEvent",
                                Id_ProfileEvent: this.Id_Perfil,
                                Id_DeviceComponent: this.Eventos[i][j][k].Id_DeviceComponent,
                                Id_DeviceType: this.Eventos[i][j][k].Id_DeviceType,
                                Id_EventComponent: this.Eventos[i][j][k].Id_EventComponent,
                            };
                            this.Post.Event(data, function (err, data) {
                                console.log(data);
                                if (err == null) {
                                    _this.Enviado[p_1] = true;
                                }
                                else {
                                    _this.Alert.AlertOnebutton('Error', JSON.stringify(err.message));
                                    // hi perry How R U ------ very good re todo nice---------------------
                                }
                            });
                            p_1 = p_1 + 1;
                        }
                    }
                }
            }
            setTimeout(function () {
                _this.Loading.HideLoading();
                _this.Editar = true;
                _this.ngOnInit();
            }, 2000);
        }
    };
    VperfilEventPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vperfil-event',
            template: __webpack_require__(/*! ./vperfil-event.page.html */ "./src/app/vperfil-event/vperfil-event.page.html"),
            styles: [__webpack_require__(/*! ./vperfil-event.page.scss */ "./src/app/vperfil-event/vperfil-event.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
            _post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"],
            _alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], VperfilEventPage);
    return VperfilEventPage;
}());



/***/ })

}]);
//# sourceMappingURL=vperfil-event-vperfil-event-module.js.map