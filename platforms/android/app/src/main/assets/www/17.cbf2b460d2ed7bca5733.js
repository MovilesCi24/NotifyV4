(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{vlik:function(l,n,o){"use strict";o.r(n);var u=o("CcnG"),e=o("dVwY"),t=o("fhD/"),i=o("ZZ/e"),r=o("ixqX"),a=o("YdJ5"),c=function(){function l(l,n,o,u,e,t){this.global=l,this.Post=n,this.navCtrl=o,this.Loading=u,this.Alert=e,this.Aroute=t,this.Posicion=new Array;var i=this.Aroute.snapshot.paramMap.get("Id");this.Data=i.split("."),console.log(this.Data),this.Id_User=this.Data[0],console.log(this.Id_User)}return l.prototype.ngOnInit=function(){var l=this;this.Post.Event({Option:"ProfileEmpty",Id_User:this.Id_User,Empty:this.Data[2]},function(n,o){if(console.log(o),null==n){l.Perfiles=JSON.parse(o.data),l.Posicion=new Array(l.Perfiles.length);for(var u=0;u<l.Perfiles.lentgh;u++)l.Posicion[u]=!1}else l.Alert.AlertOnebutton("Error",JSON.stringify(n.message))})},l.prototype.Asociar=function(){var l=this;console.log(this.Posicion);for(var n=0,o=0;o<this.Posicion.length;o++)1==this.Posicion[o]&&(n+=1);setTimeout(function(){if(0==n)l.Loading.LoadingNormal("Seleccione al menos un Perfil",2);else{l.Loading.LoadingNormal("Asociando Perfiles...",2);for(var o=0;o<l.Posicion.length;o++)1==l.Posicion[o]&&l.Post.Event({Option:"SaveProfile",Id_User:l.Id_User,Id_ProfileEvent:l.Perfiles[o].Id_ProfileEvent},function(n,o){console.log(o),null==n?console.log("Perfil Asociado correctamente"):l.Alert.AlertOnebutton("Error",JSON.stringify(n.message))});setTimeout(function(){l.navCtrl.navigateRoot("/user-perfil/"+l.Data[0]+"."+l.Data[1])},1e3)}},1e3)},l}(),s=function(){return function(){}}(),b=o("pMnS"),d=o("oBZk"),f=o("Ip0R"),g=o("gIcY"),h=o("ZYCi"),p=u.mb({encapsulation:0,styles:[[""]],data:{}});function v(l){return u.Cb(0,[(l()(),u.ob(0,0,null,null,0,"img",[["src","./assets/imgs/Group.png"]],null,null,null,null,null))],null,null)}function m(l){return u.Cb(0,[(l()(),u.ob(0,0,null,null,0,"img",[["src","./assets/imgs/Group2.png"]],null,null,null,null,null))],null,null)}function k(l){return u.Cb(0,[(l()(),u.ob(0,0,null,null,18,"ion-item",[],null,null,null,d.X,d.m)),u.nb(1,49152,null,0,i.G,[u.h,u.k],null,null),(l()(),u.ob(2,0,null,0,5,"ion-avatar",[["slot","start"]],null,null,null,d.H,d.b)),u.nb(3,49152,null,0,i.f,[u.h,u.k],null,null),(l()(),u.fb(16777216,null,0,1,null,v)),u.nb(5,16384,null,0,f.i,[u.N,u.K],{ngIf:[0,"ngIf"]},null),(l()(),u.fb(16777216,null,0,1,null,m)),u.nb(7,16384,null,0,f.i,[u.N,u.K],{ngIf:[0,"ngIf"]},null),(l()(),u.ob(8,0,null,0,3,"ion-label",[],null,null,null,d.Y,d.s)),u.nb(9,49152,null,0,i.M,[u.h,u.k],null,null),(l()(),u.ob(10,0,null,0,1,"h2",[["text-uppercase",""]],null,null,null,null,null)),(l()(),u.Bb(11,null,["",""])),(l()(),u.ob(12,0,null,0,6,"ion-toggle",[["color","secondary"],["slot","end"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,o){var e=!0,t=l.component;return"ionBlur"===n&&(e=!1!==u.xb(l,13)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==u.xb(l,13)._handleIonChange(o.target.checked)&&e),"ngModelChange"===n&&(e=!1!==(t.Posicion[l.context.index]=o)&&e),e},d.kb,d.E)),u.nb(13,16384,null,0,i.c,[u.k],null,null),u.yb(1024,null,g.b,function(l){return[l]},[i.c]),u.nb(15,671744,null,0,g.e,[[8,null],[8,null],[8,null],[6,g.b]],{model:[0,"model"]},{update:"ngModelChange"}),u.yb(2048,null,g.c,null,[g.e]),u.nb(17,16384,null,0,g.d,[[4,g.c]],null,null),u.nb(18,49152,null,0,i.zb,[u.h,u.k],{color:[0,"color"]},null)],function(l,n){var o=n.component;l(n,5,0,n.context.index%2==0),l(n,7,0,n.context.index%2!=0),l(n,15,0,o.Posicion[n.context.index]),l(n,18,0,"secondary")},function(l,n){l(n,11,0,n.context.$implicit.Name),l(n,12,0,u.xb(n,17).ngClassUntouched,u.xb(n,17).ngClassTouched,u.xb(n,17).ngClassPristine,u.xb(n,17).ngClassDirty,u.xb(n,17).ngClassValid,u.xb(n,17).ngClassInvalid,u.xb(n,17).ngClassPending)})}function P(l){return u.Cb(0,[(l()(),u.ob(0,0,null,null,17,"ion-header",[],null,null,null,d.O,d.i)),u.nb(1,49152,null,0,i.A,[u.h,u.k],null,null),(l()(),u.ob(2,0,null,0,12,"ion-toolbar",[],null,null,null,d.lb,d.F)),u.nb(3,49152,null,0,i.Ab,[u.h,u.k],null,null),(l()(),u.ob(4,0,null,0,3,"ion-button",[["color","danger"],["fill","clear"],["slot","start"]],null,[[null,"click"]],function(l,n,o){var u=!0,e=l.component;return"click"===n&&(u=!1!==e.navCtrl.navigateRoot("/user-perfil/"+e.Data[0]+"."+e.Data[1])&&u),u},d.J,d.d)),u.nb(5,49152,null,0,i.j,[u.h,u.k],{color:[0,"color"],fill:[1,"fill"]},null),(l()(),u.ob(6,0,null,0,1,"ion-icon",[["name","arrow-round-back"],["slot","icon-only"]],null,null,null,d.P,d.j)),u.nb(7,49152,null,0,i.B,[u.h,u.k],{name:[0,"name"]},null),(l()(),u.ob(8,0,null,0,2,"ion-title",[["style","text-align: center"],["text-uppercase",""]],null,null,null,d.jb,d.D)),u.nb(9,49152,null,0,i.yb,[u.h,u.k],null,null),(l()(),u.Bb(10,0,["",""])),(l()(),u.ob(11,0,null,0,3,"ion-button",[["color","white"],["fill","clear"],["slot","end"]],null,null,null,d.J,d.d)),u.nb(12,49152,null,0,i.j,[u.h,u.k],{color:[0,"color"],fill:[1,"fill"]},null),(l()(),u.ob(13,0,null,0,1,"ion-icon",[["name","arrow-round-back"],["slot","icon-only"]],null,null,null,d.P,d.j)),u.nb(14,49152,null,0,i.B,[u.h,u.k],{name:[0,"name"]},null),(l()(),u.ob(15,0,null,0,2,"ion-button",[["color","medium"],["expand","block"],["fill","outline"]],null,null,null,d.J,d.d)),u.nb(16,49152,null,0,i.j,[u.h,u.k],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"]},null),(l()(),u.Bb(-1,0,["Seleccione los perfiles"])),(l()(),u.ob(18,0,null,null,5,"ion-content",[["class","Contenido"]],null,null,null,d.K,d.e)),u.nb(19,49152,null,0,i.t,[u.h,u.k],null,null),(l()(),u.ob(20,0,null,0,3,"ion-list",[],null,null,null,d.Z,d.t)),u.nb(21,49152,null,0,i.N,[u.h,u.k],null,null),(l()(),u.fb(16777216,null,0,1,null,k)),u.nb(23,278528,null,0,f.h,[u.N,u.K,u.s],{ngForOf:[0,"ngForOf"]},null),(l()(),u.ob(24,0,null,null,4,"ion-footer",[],null,null,null,d.N,d.h)),u.nb(25,49152,null,0,i.y,[u.h,u.k],null,null),(l()(),u.ob(26,0,null,0,2,"ion-button",[["color","medium"],["expand","block"],["fill","outline"]],null,[[null,"click"]],function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.Asociar()&&u),u},d.J,d.d)),u.nb(27,49152,null,0,i.j,[u.h,u.k],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"]},null),(l()(),u.Bb(-1,0,[" Asociar Seleccionados "]))],function(l,n){var o=n.component;l(n,5,0,"danger","clear"),l(n,7,0,"arrow-round-back"),l(n,12,0,"white","clear"),l(n,14,0,"arrow-round-back"),l(n,16,0,"medium","block","outline"),l(n,23,0,o.Perfiles),l(n,27,0,"medium","block","outline")},function(l,n){l(n,10,0,n.component.Data[1])})}function x(l){return u.Cb(0,[(l()(),u.ob(0,0,null,null,1,"app-asociate-events",[],null,null,null,P,p)),u.nb(1,114688,null,0,c,[e.a,t.a,i.Gb,r.a,a.a,h.a],null,null)],function(l,n){l(n,1,0)},null)}var C=u.kb("app-asociate-events",c,x,{},{},[]);o.d(n,"AsociateEventsPageModuleNgFactory",function(){return y});var y=u.lb(s,[],function(l){return u.ub([u.vb(512,u.j,u.ab,[[8,[b.a,C]],[3,u.j],u.x]),u.vb(4608,f.k,f.j,[u.u,[2,f.q]]),u.vb(4608,g.g,g.g,[]),u.vb(4608,i.b,i.b,[u.z,u.g]),u.vb(4608,i.Fb,i.Fb,[i.b,u.j,u.q,f.c]),u.vb(4608,i.Ib,i.Ib,[i.b,u.j,u.q,f.c]),u.vb(1073742336,f.b,f.b,[]),u.vb(1073742336,g.f,g.f,[]),u.vb(1073742336,g.a,g.a,[]),u.vb(1073742336,i.Cb,i.Cb,[]),u.vb(1073742336,h.n,h.n,[[2,h.t],[2,h.m]]),u.vb(1073742336,s,s,[]),u.vb(1024,h.k,function(){return[[{path:"",component:c}]]},[])])})}}]);