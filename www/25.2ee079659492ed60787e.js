(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"3F3D":function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),t=u("dVwY"),i=u("fhD/"),e=u("ZZ/e"),a=u("ixqX"),b=u("YdJ5"),r=u("1VJT"),s=function(){function l(l,n,u,o,t,i,e){this.global=l,this.Post=n,this.storage=u,this.navCtrl=o,this.Loading=t,this.Alert=i,this.Notify=e}return l.prototype.ngOnInit=function(){var l=this;this.storage.get("Ruta").then(function(n){""==n||" "==n||null==n||(l.Servidor=l.global.Servidor=n)}),this.storage.get("Notificaciones").then(function(n){""==n||" "==n||null==n||(l.Noti=l.global.Noti=n)})},l.prototype.Guardar=function(){var l=this;""==this.Servidor||" "==this.Servidor||null==this.Servidor||null==this.Servidor||""==this.Noti||" "==this.Noti||null==this.Noti||null==this.Noti?this.Loading.LoadingNormal("Error, se encuentran campos vacios",2):(this.Loading.LoadingNormal("Guardando Cambios",3),this.storage.set("Ruta",this.Servidor),this.storage.set("Notificaciones",this.Noti),this.global.Noti=this.Noti,this.global.Servidor=this.Servidor,this.Post.Refresh(function(n){l.Notify.Refresh(function(n){l.navCtrl.navigateRoot("/login")})}))},l}(),c=function(){return function(){}}(),d=u("pMnS"),g=u("oBZk"),h=u("gIcY"),p=u("iw74"),f=o.mb({encapsulation:0,styles:[[""]],data:{}});function v(l){return o.Gb(0,[(l()(),o.ob(0,0,null,null,14,"ion-header",[],null,null,null,g.Z,g.n)),o.nb(1,49152,null,0,e.A,[o.h,o.k],null,null),(l()(),o.ob(2,0,null,0,12,"ion-toolbar",[],null,null,null,g.xb,g.L)),o.nb(3,49152,null,0,e.Ab,[o.h,o.k],null,null),(l()(),o.ob(4,0,null,0,3,"ion-button",[["color","danger"],["fill","clear"],["slot","start"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.navCtrl.navigateRoot("/login")&&o),o},g.P,g.d)),o.nb(5,49152,null,0,e.j,[o.h,o.k],{color:[0,"color"],fill:[1,"fill"]},null),(l()(),o.ob(6,0,null,0,1,"ion-icon",[["name","arrow-round-back"],["slot","icon-only"]],null,null,null,g.ab,g.o)),o.nb(7,49152,null,0,e.B,[o.h,o.k],{name:[0,"name"]},null),(l()(),o.ob(8,0,null,0,2,"ion-title",[["style","text-align: center"],["text-uppercase",""]],null,null,null,g.vb,g.J)),o.nb(9,49152,null,0,e.yb,[o.h,o.k],null,null),(l()(),o.Eb(-1,0,["Ajustes"])),(l()(),o.ob(11,0,null,0,3,"ion-button",[["color","white"],["fill","clear"],["slot","end"]],null,null,null,g.P,g.d)),o.nb(12,49152,null,0,e.j,[o.h,o.k],{color:[0,"color"],fill:[1,"fill"]},null),(l()(),o.ob(13,0,null,0,1,"ion-icon",[["name","arrow-round-back"],["slot","icon-only"]],null,null,null,g.ab,g.o)),o.nb(14,49152,null,0,e.B,[o.h,o.k],{name:[0,"name"]},null),(l()(),o.ob(15,0,null,null,29,"ion-content",[["class","Contenido"]],null,null,null,g.V,g.j)),o.nb(16,49152,null,0,e.t,[o.h,o.k],null,null),(l()(),o.ob(17,0,null,0,27,"ion-list",[],null,null,null,g.kb,g.y)),o.nb(18,49152,null,0,e.N,[o.h,o.k],null,null),(l()(),o.ob(19,0,null,0,12,"div",[["style","padding:0% 10px"]],null,null,null,null,null)),(l()(),o.ob(20,0,null,null,11,"ion-item",[],null,null,null,g.ib,g.r)),o.nb(21,49152,null,0,e.G,[o.h,o.k],null,null),(l()(),o.ob(22,0,null,0,2,"ion-label",[["position","fixed"]],null,null,null,g.jb,g.x)),o.nb(23,49152,null,0,e.M,[o.h,o.k],{position:[0,"position"]},null),(l()(),o.Eb(-1,0,["Url Servidor: "])),(l()(),o.ob(25,0,null,0,6,"ion-input",[["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==o.yb(l,26)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==o.yb(l,26)._handleInputEvent(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(i.Servidor=u)&&t),t},g.cb,g.q)),o.nb(26,16384,null,0,e.Kb,[o.k],null,null),o.Bb(1024,null,h.b,function(l){return[l]},[e.Kb]),o.nb(28,671744,null,0,h.e,[[8,null],[8,null],[8,null],[6,h.b]],{model:[0,"model"]},{update:"ngModelChange"}),o.Bb(2048,null,h.c,null,[h.e]),o.nb(30,16384,null,0,h.d,[[4,h.c]],null,null),o.nb(31,49152,null,0,e.F,[o.h,o.k],{type:[0,"type"]},null),(l()(),o.ob(32,0,null,0,12,"div",[["style","padding:0% 10px"]],null,null,null,null,null)),(l()(),o.ob(33,0,null,null,11,"ion-item",[],null,null,null,g.ib,g.r)),o.nb(34,49152,null,0,e.G,[o.h,o.k],null,null),(l()(),o.ob(35,0,null,0,2,"ion-label",[["position","fixed"]],null,null,null,g.jb,g.x)),o.nb(36,49152,null,0,e.M,[o.h,o.k],{position:[0,"position"]},null),(l()(),o.Eb(-1,0,["Url Notificaciones: "])),(l()(),o.ob(38,0,null,0,6,"ion-input",[["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==o.yb(l,39)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==o.yb(l,39)._handleInputEvent(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(i.Noti=u)&&t),t},g.cb,g.q)),o.nb(39,16384,null,0,e.Kb,[o.k],null,null),o.Bb(1024,null,h.b,function(l){return[l]},[e.Kb]),o.nb(41,671744,null,0,h.e,[[8,null],[8,null],[8,null],[6,h.b]],{model:[0,"model"]},{update:"ngModelChange"}),o.Bb(2048,null,h.c,null,[h.e]),o.nb(43,16384,null,0,h.d,[[4,h.c]],null,null),o.nb(44,49152,null,0,e.F,[o.h,o.k],{type:[0,"type"]},null),(l()(),o.ob(45,0,null,null,4,"ion-footer",[],null,null,null,g.Y,g.m)),o.nb(46,49152,null,0,e.y,[o.h,o.k],null,null),(l()(),o.ob(47,0,null,0,2,"ion-button",[["color","medium"],["expand","block"],["fill","outline"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.Guardar()&&o),o},g.P,g.d)),o.nb(48,49152,null,0,e.j,[o.h,o.k],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"]},null),(l()(),o.Eb(-1,0,[" Guardar\n"]))],function(l,n){var u=n.component;l(n,5,0,"danger","clear"),l(n,7,0,"arrow-round-back"),l(n,12,0,"white","clear"),l(n,14,0,"arrow-round-back"),l(n,23,0,"fixed"),l(n,28,0,u.Servidor),l(n,31,0,"text"),l(n,36,0,"fixed"),l(n,41,0,u.Noti),l(n,44,0,"text"),l(n,48,0,"medium","block","outline")},function(l,n){l(n,25,0,o.yb(n,30).ngClassUntouched,o.yb(n,30).ngClassTouched,o.yb(n,30).ngClassPristine,o.yb(n,30).ngClassDirty,o.yb(n,30).ngClassValid,o.yb(n,30).ngClassInvalid,o.yb(n,30).ngClassPending),l(n,38,0,o.yb(n,43).ngClassUntouched,o.yb(n,43).ngClassTouched,o.yb(n,43).ngClassPristine,o.yb(n,43).ngClassDirty,o.yb(n,43).ngClassValid,o.yb(n,43).ngClassInvalid,o.yb(n,43).ngClassPending)})}function y(l){return o.Gb(0,[(l()(),o.ob(0,0,null,null,1,"app-settings",[],null,null,null,v,f)),o.nb(1,114688,null,0,s,[t.a,i.a,p.b,e.Gb,a.a,b.a,r.a],null,null)],function(l,n){l(n,1,0)},null)}var k=o.kb("app-settings",s,y,{},{},[]),C=u("Ip0R"),m=u("ZYCi");u.d(n,"SettingsPageModuleNgFactory",function(){return w});var w=o.lb(c,[],function(l){return o.vb([o.wb(512,o.j,o.ab,[[8,[d.a,k]],[3,o.j],o.x]),o.wb(4608,C.k,C.j,[o.u,[2,C.q]]),o.wb(4608,h.g,h.g,[]),o.wb(4608,e.b,e.b,[o.z,o.g]),o.wb(4608,e.Fb,e.Fb,[e.b,o.j,o.q,C.c]),o.wb(4608,e.Ib,e.Ib,[e.b,o.j,o.q,C.c]),o.wb(1073742336,C.b,C.b,[]),o.wb(1073742336,h.f,h.f,[]),o.wb(1073742336,h.a,h.a,[]),o.wb(1073742336,e.Cb,e.Cb,[]),o.wb(1073742336,m.n,m.n,[[2,m.t],[2,m.m]]),o.wb(1073742336,c,c,[]),o.wb(1024,m.k,function(){return[[{path:"",component:s}]]},[])])})}}]);