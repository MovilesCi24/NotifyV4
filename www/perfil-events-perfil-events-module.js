(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfil-events-perfil-events-module"],{

/***/ "./src/app/perfil-events/perfil-events.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/perfil-events/perfil-events.module.ts ***!
  \*******************************************************/
/*! exports provided: PerfilEventsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilEventsPageModule", function() { return PerfilEventsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _perfil_events_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil-events.page */ "./src/app/perfil-events/perfil-events.page.ts");







var routes = [
    {
        path: '',
        component: _perfil_events_page__WEBPACK_IMPORTED_MODULE_6__["PerfilEventsPage"]
    }
];
var PerfilEventsPageModule = /** @class */ (function () {
    function PerfilEventsPageModule() {
    }
    PerfilEventsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_perfil_events_page__WEBPACK_IMPORTED_MODULE_6__["PerfilEventsPage"]]
        })
    ], PerfilEventsPageModule);
    return PerfilEventsPageModule;
}());



/***/ }),

/***/ "./src/app/perfil-events/perfil-events.page.html":
/*!*******************************************************!*\
  !*** ./src/app/perfil-events/perfil-events.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-button slot=start color=\"white\" fill=\"clear\"> <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon></ion-button>\r\n      <ion-title style=\"text-align: center\" text-uppercase>{{Data[1]}}</ion-title>\r\n      <ion-button slot=end color=\"white\" fill=\"clear\"> <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon></ion-button>\r\n    </ion-toolbar>\r\n    <ion-item>\r\n      <ion-label>Seleccionar Todos</ion-label>\r\n      <ion-toggle slot=end color=\"primary\" [(ngModel)]=\"SelectAll\" (ionChange)=\"Seleccionar()\"></ion-toggle>\r\n    </ion-item>\r\n  </ion-header>\r\n  \r\n<ion-content class=\"Contenido\">\r\n  <ion-list>\r\n      <ion-item-group style=\"width: 100%\" *ngFor=\"let item of Dispositivo;let i=index;\">\r\n          <ion-item-divider (click)=ToggleD(i)>\r\n            <ion-label color=\"danger\" text-uppercase>{{item.NameDevices}}</ion-label>\r\n            <ion-icon *ngIf=\"TDisp[i]==false\" slot=end name=\"arrow-dropdown\"></ion-icon>\r\n            <ion-icon *ngIf=\"TDisp[i]==true\" slot=end name=\"remove\"></ion-icon>\r\n          </ion-item-divider>\r\n          <div *ngIf=\"TDisp[i]==true\">\r\n          <ion-item *ngFor=\"let comp of Componentes[i];let j=index;\">\r\n              <ion-item-group style=\"width: 100%\">\r\n                  <ion-item-divider (click)=ToggleC(i,j)>\r\n                    <ion-label text-uppercase>{{comp.NameComponent}}</ion-label>\r\n                    <ion-icon *ngIf=\"Tcomp[i][j]==false\" slot=end name=\"arrow-dropdown\"></ion-icon>\r\n                    <ion-icon *ngIf=\"Tcomp[i][j]==true\" slot=end name=\"remove\"></ion-icon>\r\n                  </ion-item-divider>\r\n                  <div *ngIf=\"Tcomp[i][j]==true\">\r\n                      <ion-item *ngFor=\"let event of Eventos[i][j];let k=index;\">\r\n                      {{event.NameEvent}}\r\n                      <ion-toggle slot=end color=\"danger\" [(ngModel)]=\"Vevent[i][j][k]\"></ion-toggle>\r\n                    </ion-item>\r\n                  </div>\r\n                </ion-item-group>\r\n          </ion-item>\r\n          </div>\r\n        </ion-item-group>\r\n  </ion-list>\r\n</ion-content>\r\n<ion-footer>\r\n    <ion-button expand=\"block\" fill=\"outline\" color=\"medium\" (click)=\"Asociar()\">\r\n        Asociar Eventos\r\n    </ion-button>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/perfil-events/perfil-events.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/perfil-events/perfil-events.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item.sc-ion-label-md-h, .item .sc-ion-label-md-h {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyZmlsLWV2ZW50cy9DOlxcSU9OSUNcXE5vdGlmeVY0L3NyY1xcYXBwXFxwZXJmaWwtZXZlbnRzXFxwZXJmaWwtZXZlbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQ0osRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BlcmZpbC1ldmVudHMvcGVyZmlsLWV2ZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS5zYy1pb24tbGFiZWwtbWQtaCwgLml0ZW0gLnNjLWlvbi1sYWJlbC1tZC1oIHtcclxuICAgIHdpZHRoOiAxMDAlXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/perfil-events/perfil-events.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/perfil-events/perfil-events.page.ts ***!
  \*****************************************************/
/*! exports provided: PerfilEventsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilEventsPage", function() { return PerfilEventsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global.service */ "./src/app/global.service.ts");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../loading.service */ "./src/app/loading.service.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../alert.service */ "./src/app/alert.service.ts");








var PerfilEventsPage = /** @class */ (function () {
    function PerfilEventsPage(global, Post, navCtrl, Loading, Alert, Aroute) {
        this.global = global;
        this.Post = Post;
        this.navCtrl = navCtrl;
        this.Loading = Loading;
        this.Alert = Alert;
        this.Aroute = Aroute;
        this.SelectAll = false;
        this.Dispositivo = new Array();
        this.Componentes = new Array();
        this.Eventos = new Array();
        this.TDisp = new Array();
        this.Tcomp = new Array();
        this.Vevent = new Array();
        this.Enviado = new Array();
        var Data1 = this.Aroute.snapshot.paramMap.get('Id');
        this.Data = Data1.split('.');
        console.log(this.Data);
        this.Id_Perfil = this.Data[0];
        console.log(this.Id_Perfil);
    }
    PerfilEventsPage.prototype.ngOnInit = function () {
        var _this = this;
        var data = {
            Option: "GetDevices"
        };
        this.Post.Event(data, function (err, data) {
            console.log(data);
            if (err == null) {
                _this.Devices = JSON.parse(data.data);
                _this.OrganizarData(_this.Devices);
            }
            else {
                _this.Alert.AlertOnebutton('Error', JSON.stringify(err.message));
            }
        });
    };
    PerfilEventsPage.prototype.OrganizarData = function (Disp) {
        var map = new Map();
        for (var _i = 0, Disp_1 = Disp; _i < Disp_1.length; _i++) {
            var item = Disp_1[_i];
            if (!map.has(item.Id_DeviceType)) {
                map.set(item.Id_DeviceType, true);
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
                    map2.set(item.Id_Component, true);
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
                        map3.set(item.Id_EventComponent, true);
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
    };
    PerfilEventsPage.prototype.ToggleD = function (i) {
        if (this.TDisp[i] == false) {
            this.TDisp[i] = true;
        }
        else if (this.TDisp[i] == true) {
            this.TDisp[i] = false;
        }
    };
    PerfilEventsPage.prototype.ToggleC = function (i, j) {
        if (this.Tcomp[i][j] == false) {
            this.Tcomp[i][j] = true;
        }
        else if (this.Tcomp[i][j] == true) {
            this.Tcomp[i][j] = false;
        }
    };
    PerfilEventsPage.prototype.Asociar = function () {
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
                _this.navCtrl.navigateRoot('/perfiles');
            }, 2000);
        }
    };
    PerfilEventsPage.prototype.Seleccionar = function () {
        for (var i = 0; i < this.Dispositivo.length; i++) {
            for (var j = 0; j < this.Componentes[i].length; j++) {
                for (var k = 0; k < this.Eventos[i][j].length; k++) {
                    this.Vevent[i][j][k] = this.SelectAll;
                }
            }
        }
    };
    PerfilEventsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-perfil-events',
            template: __webpack_require__(/*! ./perfil-events.page.html */ "./src/app/perfil-events/perfil-events.page.html"),
            styles: [__webpack_require__(/*! ./perfil-events.page.scss */ "./src/app/perfil-events/perfil-events.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
            _post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"],
            _alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PerfilEventsPage);
    return PerfilEventsPage;
}());



/***/ })

}]);
//# sourceMappingURL=perfil-events-perfil-events-module.js.map