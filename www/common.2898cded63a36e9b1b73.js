(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6bLf":function(n,t,e){"use strict";e.d(t,"a",function(){return y}),e.d(t,"b",function(){return g}),e.d(t,"c",function(){return u}),e.d(t,"d",function(){return w});var r=e("B5Ai"),i=e("awvO"),l=function(){return e.e(66).then(e.bind(null,"rSHd"))},o=function(){return e.e(67).then(e.bind(null,"NJz6"))};function u(n){return new Promise(function(t,e){n.queue.write(function(){(function(n){var t=n.enteringEl,e=n.leavingEl;(function(n,t,e){void 0!==n&&(n.style.zIndex="back"===e?"99":"101"),void 0!==t&&(t.style.zIndex="100")})(t,e,n.direction),n.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),w(t,!1),e&&w(e,!1)})(n),function(n){return r.a(this,void 0,void 0,function(){var t;return r.c(this,function(e){switch(e.label){case 0:return[4,c(n)];case 1:return[2,(t=e.sent())?s(t,n):d(n)]}})})}(n).then(function(e){e.animation&&e.animation.destroy(),a(n),t(e)},function(t){a(n),e(t)})})})}function a(n){var t=n.leavingEl;n.enteringEl.classList.remove("ion-page-invisible"),void 0!==t&&t.classList.remove("ion-page-invisible")}function c(n){return r.a(this,void 0,void 0,function(){var t;return r.c(this,function(e){switch(e.label){case 0:return n.leavingEl&&n.animated&&0!==n.duration?n.animationBuilder?[2,n.animationBuilder]:"ios"!==n.mode?[3,2]:[4,l()]:[2,void 0];case 1:return t=e.sent().iosTransitionAnimation,[3,4];case 2:return[4,o()];case 3:t=e.sent().mdTransitionAnimation,e.label=4;case 4:return[2,t]}})})}function s(n,t){return r.a(this,void 0,void 0,function(){var i;return r.c(this,function(r){switch(r.label){case 0:return[4,f(t,!0)];case 1:return r.sent(),[4,e.e(1).then(e.bind(null,"LWFY")).then(function(e){return e.create(n,t.baseEl,t)})];case 2:return i=r.sent(),v(t.enteringEl,t.leavingEl),[4,b(i,t)];case 3:return r.sent(),t.progressCallback&&t.progressCallback(void 0),i.hasCompleted&&h(t.enteringEl,t.leavingEl),[2,{hasCompleted:i.hasCompleted,animation:i}]}})})}function d(n){return r.a(this,void 0,void 0,function(){var t,e;return r.c(this,function(r){switch(r.label){case 0:return t=n.enteringEl,e=n.leavingEl,[4,f(n,!1)];case 1:return r.sent(),v(t,e),h(t,e),[2,{hasCompleted:!0}]}})})}function f(n,t){return r.a(this,void 0,void 0,function(){var e;return r.c(this,function(r){switch(r.label){case 0:return e=(void 0!==n.deepWait?n.deepWait:t)?[y(n.enteringEl),y(n.leavingEl)]:[m(n.enteringEl),m(n.leavingEl)],[4,Promise.all(e)];case 1:return r.sent(),[4,p(n.viewIsReady,n.enteringEl)];case 2:return r.sent(),[2]}})})}function p(n,t){return r.a(this,void 0,void 0,function(){return r.c(this,function(e){switch(e.label){case 0:return n?[4,n(t)]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}})})}function b(n,t){var e=t.progressCallback,r=new Promise(function(t){return n.onFinish(t)});return e?(n.progressStart(),e(n)):n.play(),r}function v(n,t){g(t,i.a),g(n,i.b)}function h(n,t){g(n,i.c),g(t,i.d)}function g(n,t){if(n){var e=new CustomEvent(t,{bubbles:!1,cancelable:!1});n.dispatchEvent(e)}}function m(n){return n&&n.componentOnReady?n.componentOnReady():Promise.resolve()}function y(n){return r.a(this,void 0,void 0,function(){var t;return r.c(this,function(e){switch(e.label){case 0:return(t=n)?null==t.componentOnReady?[3,2]:[4,t.componentOnReady()]:[3,4];case 1:if(null!=e.sent())return[2];e.label=2;case 2:return[4,Promise.all(Array.from(t.children).map(y))];case 3:e.sent(),e.label=4;case 4:return[2]}})})}function w(n,t){t?(n.setAttribute("aria-hidden","true"),n.classList.add("ion-page-hidden")):(n.hidden=!1,n.removeAttribute("aria-hidden"),n.classList.remove("ion-page-hidden"))}},B5Ai:function(n,t,e){"use strict";e.d(t,"b",function(){return i}),e.d(t,"a",function(){return l}),e.d(t,"c",function(){return o});var r=function(n,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(n,t)};function i(n,t){function e(){this.constructor=n}r(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}function l(n,t,e,r){return new(e||(e=Promise))(function(i,l){function o(n){try{a(r.next(n))}catch(t){l(t)}}function u(n){try{a(r.throw(n))}catch(t){l(t)}}function a(n){n.done?i(n.value):new e(function(t){t(n.value)}).then(o,u)}a((r=r.apply(n,t||[])).next())})}function o(n,t){var e,r,i,l,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return l={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function u(l){return function(u){return function(l){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,r&&(i=2&l[0]?r.return:l[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,l[1])).done)return i;switch(r=0,i&&(l=[2&l[0],i.value]),l[0]){case 0:case 1:i=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,r=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===l[0]||2===l[0])){o=0;continue}if(3===l[0]&&(!i||l[1]>i[0]&&l[1]<i[3])){o.label=l[1];break}if(6===l[0]&&o.label<i[1]){o.label=i[1],i=l;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(l);break}i[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(n,o)}catch(u){l=[6,u],r=0}finally{e=i=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,u])}}}},Bs4g:function(n,t,e){"use strict";e.d(t,"a",function(){return r});var r=function(n,t){return function(n){return i(n)}(n).includes(t)},i=function(n){n.Ionic=n.Ionic||{};var t=n.Ionic.platforms;return null==t&&(t=n.Ionic.platforms=l(n)).forEach(function(t){return n.document.documentElement.classList.add("plt-"+t)}),t},l=function(n){return Object.keys(b).filter(function(t){return b[t](n)})},o=function(n){return f(n,/iPad/i)},u=function(n){return f(n,/android|sink/i)},a=function(n){return p(n,"(any-pointer:coarse)")},c=function(n){return s(n)||d(n)},s=function(n){return!!(n.cordova||n.phonegap||n.PhoneGap)},d=function(n){var t=n.Capacitor;return!(!t||!t.isNative)},f=function(n,t){return!(!n.navigator||!n.navigator.userAgent)&&t.test(n.navigator.userAgent)},p=function(n,t){return!!n.matchMedia&&n.matchMedia(t).matches},b={ipad:o,iphone:function(n){return f(n,/iPhone/i)},ios:function(n){return f(n,/iPad|iPhone|iPod/i)},android:u,phablet:function(n){var t=n.innerWidth,e=n.innerHeight,r=Math.min(t,e),i=Math.max(t,e);return r>390&&r<520&&i>620&&i<800},tablet:function(n){var t=n.innerWidth,e=n.innerHeight,r=Math.min(t,e),i=Math.max(t,e);return o(n)||function(n){return u(n)&&!f(n,/mobile/i)}(n)||r>460&&r<820&&i>780&&i<1400},cordova:s,capacitor:d,electron:function(n){return f(n,/electron/)},pwa:function(n){return!!n.matchMedia&&(n.matchMedia("(display-mode: standalone)").matches||n.navigator.standalone)},mobile:a,mobileweb:function(n){return a(n)&&!c(n)},desktop:function(n){return!a(n)},hybrid:c}},JvIM:function(n,t,e){"use strict";function r(n){"requestIdleCallback"in window?window.requestIdleCallback(n):setTimeout(n,32)}function i(n){return!!n.shadowRoot&&!!n.attachShadow}function l(n){var t=n.closest("ion-item");return t?t.querySelector("ion-label"):null}function o(n,t,e,r,l){if(n||i(t)){var o=t.querySelector("input.aux-input");o||((o=t.ownerDocument.createElement("input")).type="hidden",o.classList.add("aux-input"),t.appendChild(o)),o.disabled=l,o.name=e,o.value=r||""}}function u(n,t,e){return Math.max(n,Math.min(t,e))}function a(n){return n.timeStamp||Date.now()}function c(n){if(n){var t=n.changedTouches;if(t&&t.length>0){var e=t[0];return{x:e.clientX,y:e.clientY}}if(void 0!==n.pageX)return{x:n.pageX,y:n.pageY}}return{x:0,y:0}}function s(n,t){var e="rtl"===n.document.dir;switch(t){case"start":return e;case"end":return!e;default:throw new Error('"'+t+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function d(n,t){var e=n._original||n;return{_original:n,emit:f(e.emit.bind(e),t)}}function f(n,t){var e;return void 0===t&&(t=0),function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];clearTimeout(e),e=setTimeout.apply(void 0,[n,t].concat(r))}}e.d(t,"a",function(){return r}),e.d(t,"b",function(){return a}),e.d(t,"c",function(){return i}),e.d(t,"d",function(){return l}),e.d(t,"e",function(){return o}),e.d(t,"f",function(){return d}),e.d(t,"g",function(){return s}),e.d(t,"h",function(){return u}),e.d(t,"i",function(){return f}),e.d(t,"j",function(){return c})},abRS:function(n,t,e){"use strict";e.d(t,"a",function(){return o}),e.d(t,"b",function(){return g});var r=e("CcnG"),i=e("xkgV"),l=e("Ip0R"),o=r.mb({encapsulation:2,styles:["\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\xab';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\xbb';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  "],data:{}});function u(n){return r.Gb(0,[(n()(),r.ob(0,0,null,null,3,"a",[["tabindex","0"]],[[1,"aria-label",0]],[[null,"keyup.enter"],[null,"click"]],function(n,t,e){var i=!0;return"keyup.enter"===t&&(i=!1!==r.yb(n.parent.parent.parent,1).previous()&&i),"click"===t&&(i=!1!==r.yb(n.parent.parent.parent,1).previous()&&i),i},null,null)),(n()(),r.Eb(1,null,[" "," "])),(n()(),r.ob(2,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(n()(),r.Eb(3,null,["",""]))],null,function(n,t){var e=t.component;n(t,0,0,e.previousLabel+" "+e.screenReaderPageLabel),n(t,1,0,e.previousLabel),n(t,3,0,e.screenReaderPageLabel)})}function a(n){return r.Gb(0,[(n()(),r.ob(0,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),r.Eb(1,null,[" "," "])),(n()(),r.ob(2,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(n()(),r.Eb(3,null,["",""]))],null,function(n,t){var e=t.component;n(t,1,0,e.previousLabel),n(t,3,0,e.screenReaderPageLabel)})}function c(n){return r.Gb(0,[(n()(),r.ob(0,0,null,null,4,"li",[["class","pagination-previous"]],[[2,"disabled",null]],null,null,null,null)),(n()(),r.fb(16777216,null,null,1,null,u)),r.nb(2,16384,null,0,l.i,[r.N,r.K],{ngIf:[0,"ngIf"]},null),(n()(),r.fb(16777216,null,null,1,null,a)),r.nb(4,16384,null,0,l.i,[r.N,r.K],{ngIf:[0,"ngIf"]},null)],function(n,t){n(t,2,0,1<r.yb(t.parent.parent,1).getCurrent()),n(t,4,0,r.yb(t.parent.parent,1).isFirstPage())},function(n,t){n(t,0,0,r.yb(t.parent.parent,1).isFirstPage())})}function s(n){return r.Gb(0,[(n()(),r.ob(0,0,null,null,4,"a",[["tabindex","0"]],null,[[null,"keyup.enter"],[null,"click"]],function(n,t,e){var i=!0;return"keyup.enter"===t&&(i=!1!==r.yb(n.parent.parent.parent,1).setCurrent(n.parent.context.$implicit.value)&&i),"click"===t&&(i=!1!==r.yb(n.parent.parent.parent,1).setCurrent(n.parent.context.$implicit.value)&&i),i},null,null)),(n()(),r.ob(1,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(n()(),r.Eb(2,null,[""," "])),(n()(),r.ob(3,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),r.Eb(4,null,["",""]))],null,function(n,t){n(t,2,0,t.component.screenReaderPageLabel),n(t,4,0,t.parent.context.$implicit.label)})}function d(n){return r.Gb(0,[(n()(),r.ob(0,0,null,null,4,null,null,null,null,null,null,null)),(n()(),r.ob(1,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(n()(),r.Eb(2,null,[""," "])),(n()(),r.ob(3,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),r.Eb(4,null,["",""]))],null,function(n,t){n(t,2,0,t.component.screenReaderCurrentLabel),n(t,4,0,t.parent.context.$implicit.label)})}function f(n){return r.Gb(0,[(n()(),r.ob(0,0,null,null,4,"li",[],[[2,"current",null],[2,"ellipsis",null]],null,null,null,null)),(n()(),r.fb(16777216,null,null,1,null,s)),r.nb(2,16384,null,0,l.i,[r.N,r.K],{ngIf:[0,"ngIf"]},null),(n()(),r.fb(16777216,null,null,1,null,d)),r.nb(4,16384,null,0,l.i,[r.N,r.K],{ngIf:[0,"ngIf"]},null)],function(n,t){n(t,2,0,r.yb(t.parent.parent,1).getCurrent()!==t.context.$implicit.value),n(t,4,0,r.yb(t.parent.parent,1).getCurrent()===t.context.$implicit.value)},function(n,t){n(t,0,0,r.yb(t.parent.parent,1).getCurrent()===t.context.$implicit.value,"..."===t.context.$implicit.label)})}function p(n){return r.Gb(0,[(n()(),r.ob(0,0,null,null,3,"a",[["tabindex","0"]],[[1,"aria-label",0]],[[null,"keyup.enter"],[null,"click"]],function(n,t,e){var i=!0;return"keyup.enter"===t&&(i=!1!==r.yb(n.parent.parent.parent,1).next()&&i),"click"===t&&(i=!1!==r.yb(n.parent.parent.parent,1).next()&&i),i},null,null)),(n()(),r.Eb(1,null,[" "," "])),(n()(),r.ob(2,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(n()(),r.Eb(3,null,["",""]))],null,function(n,t){var e=t.component;n(t,0,0,e.nextLabel+" "+e.screenReaderPageLabel),n(t,1,0,e.nextLabel),n(t,3,0,e.screenReaderPageLabel)})}function b(n){return r.Gb(0,[(n()(),r.ob(0,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),r.Eb(1,null,[" "," "])),(n()(),r.ob(2,0,null,null,1,"span",[["class","show-for-sr"]],null,null,null,null,null)),(n()(),r.Eb(3,null,["",""]))],null,function(n,t){var e=t.component;n(t,1,0,e.nextLabel),n(t,3,0,e.screenReaderPageLabel)})}function v(n){return r.Gb(0,[(n()(),r.ob(0,0,null,null,4,"li",[["class","pagination-next"]],[[2,"disabled",null]],null,null,null,null)),(n()(),r.fb(16777216,null,null,1,null,p)),r.nb(2,16384,null,0,l.i,[r.N,r.K],{ngIf:[0,"ngIf"]},null),(n()(),r.fb(16777216,null,null,1,null,b)),r.nb(4,16384,null,0,l.i,[r.N,r.K],{ngIf:[0,"ngIf"]},null)],function(n,t){n(t,2,0,!r.yb(t.parent.parent,1).isLastPage()),n(t,4,0,r.yb(t.parent.parent,1).isLastPage())},function(n,t){n(t,0,0,r.yb(t.parent.parent,1).isLastPage())})}function h(n){return r.Gb(0,[(n()(),r.ob(0,0,null,null,8,"ul",[["class","ngx-pagination"],["role","navigation"]],[[1,"aria-label",0],[2,"responsive",null]],null,null,null,null)),(n()(),r.fb(16777216,null,null,1,null,c)),r.nb(2,16384,null,0,l.i,[r.N,r.K],{ngIf:[0,"ngIf"]},null),(n()(),r.ob(3,0,null,null,1,"li",[["class","small-screen"]],null,null,null,null,null)),(n()(),r.Eb(4,null,[" "," / "," "])),(n()(),r.fb(16777216,null,null,1,null,f)),r.nb(6,278528,null,0,l.h,[r.N,r.K,r.s],{ngForOf:[0,"ngForOf"]},null),(n()(),r.fb(16777216,null,null,1,null,v)),r.nb(8,16384,null,0,l.i,[r.N,r.K],{ngIf:[0,"ngIf"]},null)],function(n,t){var e=t.component;n(t,2,0,e.directionLinks),n(t,6,0,r.yb(t.parent,1).pages),n(t,8,0,e.directionLinks)},function(n,t){var e=t.component;n(t,0,0,e.screenReaderPaginationLabel,e.responsive),n(t,4,0,r.yb(t.parent,1).getCurrent(),r.yb(t.parent,1).getLastPage())})}function g(n){return r.Gb(2,[(n()(),r.ob(0,0,null,null,3,"pagination-template",[],null,[[null,"pageChange"]],function(n,t,e){var r=!0;return"pageChange"===t&&(r=!1!==n.component.pageChange.emit(e)&&r),r},null,null)),r.nb(1,737280,[["p",4]],0,i.d,[i.e,r.h],{id:[0,"id"],maxSize:[1,"maxSize"]},{pageChange:"pageChange"}),(n()(),r.fb(16777216,null,null,1,null,h)),r.nb(3,16384,null,0,l.i,[r.N,r.K],{ngIf:[0,"ngIf"]},null)],function(n,t){var e=t.component;n(t,1,0,e.id,e.maxSize),n(t,3,0,!(e.autoHide&&r.yb(t,1).pages.length<=1))},null)}},awvO:function(n,t,e){"use strict";e.d(t,"a",function(){return l}),e.d(t,"b",function(){return r}),e.d(t,"c",function(){return i}),e.d(t,"d",function(){return o}),e.d(t,"e",function(){return u});var r="ionViewWillEnter",i="ionViewDidEnter",l="ionViewWillLeave",o="ionViewDidLeave",u="ionViewWillUnload"},dYSE:function(n,t,e){"use strict";e.d(t,"a",function(){return b}),e.d(t,"b",function(){return p}),e.d(t,"c",function(){return a}),e.d(t,"d",function(){return c}),e.d(t,"e",function(){return f}),e.d(t,"f",function(){return l}),e.d(t,"g",function(){return o}),e.d(t,"h",function(){return u});var r=e("B5Ai"),i=0;function l(n,t){var e=n.ownerDocument;(function(n){0===i&&(i=1,n.addEventListener("focusin",function(t){var e=u(n);if(e&&e.backdropDismiss&&!function(n,t){for(;t;){if(t===n)return!0;t=t.parentElement}return!1}(e,t.target)){var r=e.querySelector("input,button");r&&r.focus()}}),n.addEventListener("ionBackButton",function(t){var e=u(n);e&&e.backdropDismiss&&t.detail.register(100,function(){return e.dismiss(void 0,b)})}),n.addEventListener("keyup",function(t){if("Escape"===t.key){var e=u(n);e&&e.backdropDismiss&&e.dismiss(void 0,b)}}))})(e),Object.assign(n,t),n.classList.add("overlay-hidden");var r=i++;return n.overlayIndex=r,n.hasAttribute("id")||(n.id="ion-overlay-"+r),s(e).appendChild(n),n.componentOnReady()}function o(n,t,e,r,i){var l=u(n,r,i);return l?l.dismiss(t,e):Promise.reject("overlay does not exist")}function u(n,t,e){var r=function(n,t){var e=Array.from(s(n).children).filter(function(n){return n.overlayIndex>0});return void 0===t?e:(t=t.toUpperCase(),e.filter(function(n){return n.tagName===t}))}(n,t);return void 0===e?r[r.length-1]:r.find(function(n){return n.id===e})}function a(n,t,e,i,l){return r.a(this,void 0,void 0,function(){var o;return r.c(this,function(r){switch(r.label){case 0:return n.presented?[2]:(n.presented=!0,n.willPresent.emit(),o=n.enterAnimation?n.enterAnimation:n.config.get(t,"ios"===n.mode?e:i),[4,d(n,o,n.el,l)]);case 1:return r.sent()&&n.didPresent.emit(),[2]}})})}function c(n,t,e,i,l,o,u){return r.a(this,void 0,void 0,function(){var a,c;return r.c(this,function(r){switch(r.label){case 0:if(!n.presented)return[2,!1];n.presented=!1,r.label=1;case 1:return r.trys.push([1,3,,4]),n.willDismiss.emit({data:t,role:e}),a=n.leaveAnimation?n.leaveAnimation:n.config.get(i,"ios"===n.mode?l:o),[4,d(n,a,n.el,u)];case 2:return r.sent(),n.didDismiss.emit({data:t,role:e}),[3,4];case 3:return c=r.sent(),console.error(c),[3,4];case 4:return n.el.remove(),[2,!0]}})})}function s(n){return n.querySelector("ion-app")||n.body}function d(n,t,i,l){return r.a(this,void 0,void 0,function(){var o,u,a,c;return r.c(this,function(r){switch(r.label){case 0:return n.animation?(n.animation.destroy(),n.animation=void 0,[2,!1]):(i.classList.remove("overlay-hidden"),o=i.shadowRoot||n.el,a=n,[4,e.e(1).then(e.bind(null,"LWFY")).then(function(n){return n.create(t,o,l)})]);case 1:return u=a.animation=r.sent(),n.animation=u,n.animated&&n.config.getBoolean("animated",!0)||u.duration(0),n.keyboardClose&&u.beforeAddWrite(function(){var n=i.ownerDocument.activeElement;n&&n.matches("input, ion-input, ion-textarea")&&n.blur()}),[4,u.playAsync()];case 2:return r.sent(),c=u.hasCompleted,u.destroy(),n.animation=void 0,[2,c]}})})}function f(n,t){var e,r=new Promise(function(n){return e=n});return function(n,t,e){var r=function(i){n.removeEventListener(t,r),e(i)};n.addEventListener(t,r)}(n,t,function(n){e(n.detail)}),r}function p(n){return"cancel"===n||n===b}var b="backdrop"},jT1R:function(n,t,e){"use strict";e.d(t,"a",function(){return i}),e.d(t,"b",function(){return l});var r=e("B5Ai");function i(n,t,e,i,l){return r.a(this,void 0,void 0,function(){var o;return r.c(this,function(r){switch(r.label){case 0:if(n)return[2,n.attachViewToDom(t,e,l,i)];if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");return o="string"==typeof e?t.ownerDocument&&t.ownerDocument.createElement(e):e,i&&i.forEach(function(n){return o.classList.add(n)}),l&&Object.assign(o,l),t.appendChild(o),o.componentOnReady?[4,o.componentOnReady()]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2,o]}})})}function l(n,t){if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},k6lV:function(n,t,e){"use strict";e.r(t),e.d(t,"createGesture",function(){return f}),e.d(t,"GESTURE_CONTROLLER",function(){return a});var r,i=function(){function n(n){this.doc=n,this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return n.prototype.createGesture=function(n){return new l(this,this.newID(),n.name,n.priority||0,!!n.disableScroll)},n.prototype.createBlocker=function(n){return void 0===n&&(n={}),new o(this,this.newID(),n.disable,!!n.disableScroll)},n.prototype.start=function(n,t,e){return this.canStart(n)?(this.requestedStart.set(t,e),!0):(this.requestedStart.delete(t),!1)},n.prototype.capture=function(n,t,e){if(!this.start(n,t,e))return!1;var r=this.requestedStart,i=-1e4;if(r.forEach(function(n){i=Math.max(i,n)}),i===e){this.capturedId=t,r.clear();var l=new CustomEvent("ionGestureCaptured",{detail:{gestureName:n}});return this.doc.dispatchEvent(l),!0}return r.delete(t),!1},n.prototype.release=function(n){this.requestedStart.delete(n),this.capturedId===n&&(this.capturedId=void 0)},n.prototype.disableGesture=function(n,t){var e=this.disabledGestures.get(n);void 0===e&&(e=new Set,this.disabledGestures.set(n,e)),e.add(t)},n.prototype.enableGesture=function(n,t){var e=this.disabledGestures.get(n);void 0!==e&&e.delete(t)},n.prototype.disableScroll=function(n){this.disabledScroll.add(n),1===this.disabledScroll.size&&this.doc.body.classList.add(u)},n.prototype.enableScroll=function(n){this.disabledScroll.delete(n),0===this.disabledScroll.size&&this.doc.body.classList.remove(u)},n.prototype.canStart=function(n){return void 0===this.capturedId&&!this.isDisabled(n)},n.prototype.isCaptured=function(){return void 0!==this.capturedId},n.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},n.prototype.isDisabled=function(n){var t=this.disabledGestures.get(n);return!!(t&&t.size>0)},n.prototype.newID=function(){return this.gestureId++,this.gestureId},n}(),l=function(){function n(n,t,e,r,i){this.id=t,this.name=e,this.disableScroll=i,this.priority=1e6*r+t,this.ctrl=n}return n.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},n.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},n.prototype.capture=function(){if(!this.ctrl)return!1;var n=this.ctrl.capture(this.name,this.id,this.priority);return n&&this.disableScroll&&this.ctrl.disableScroll(this.id),n},n.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},n.prototype.destroy=function(){this.release(),this.ctrl=void 0},n}(),o=function(){function n(n,t,e,r){this.id=t,this.disable=e,this.disableScroll=r,this.ctrl=n}return n.prototype.block=function(){if(this.ctrl){if(this.disable)for(var n=0,t=this.disable;n<t.length;n++)this.ctrl.disableGesture(t[n],this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}},n.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var n=0,t=this.disable;n<t.length;n++)this.ctrl.enableGesture(t[n],this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}},n.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},n}(),u="backdrop-no-scroll",a=new i(document);function c(n,t,e,i){var l,o,u=function(n){if(void 0===r)try{var t=Object.defineProperty({},"passive",{get:function(){r=!0}});n.addEventListener("optsTest",function(){},t)}catch(n){r=!1}return!!r}(n)?{capture:!!i.capture,passive:!!i.passive}:!!i.capture;return n.__zone_symbol__addEventListener?(l="__zone_symbol__addEventListener",o="__zone_symbol__removeEventListener"):(l="addEventListener",o="removeEventListener"),n[l](t,e,u),function(){n[o](t,e,u)}}var s=2e3;function d(n){return n instanceof Document?n:n.ownerDocument}function f(n){var t=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},n),e=t.canStart,r=t.onWillStart,i=t.onStart,l=t.onEnd,o=t.notCaptured,u=t.onMove,f=t.threshold,h=t.queue,g={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},m=function(n,t,e,r,i){var l,o,u,a,f,p,b,v=0;function h(r){v=Date.now()+s,t(r)&&(!o&&e&&(o=c(n,"touchmove",e,i)),u||(u=c(n,"touchend",m,i)),a||(a=c(n,"touchcancel",m,i)))}function g(r){v>Date.now()||t(r)&&(!p&&e&&(p=c(d(n),"mousemove",e,i)),b||(b=c(d(n),"mouseup",y,i)))}function m(n){w(),r&&r(n)}function y(n){x(),r&&r(n)}function w(){o&&o(),u&&u(),a&&a(),o=u=a=void 0}function x(){p&&p(),b&&b(),p=b=void 0}function E(){w(),x()}function S(t){t?(l&&l(),f&&f(),l=f=void 0,E()):(l||(l=c(n,"touchstart",h,i)),f||(f=c(n,"mousedown",g,i)))}return{setDisabled:S,stop:E,destroy:function(){S(!0),r=e=t=void 0}}}(t.el,function(n){var t=v(n);return!(E||!S)&&(b(n,g),g.startX=g.currentX,g.startY=g.currentY,g.startTimeStamp=g.timeStamp=t,g.velocityX=g.velocityY=g.deltaX=g.deltaY=0,g.event=n,(!e||!1!==e(g))&&(w.release(),!!w.start()&&(E=!0,0===f?I():(y.start(g.startX,g.startY),!0))))},function(n){x?!k&&S&&(k=!0,p(g,n),h.write(L)):(p(g,n),y.detect(g.currentX,g.currentY)&&(y.isGesture()&&I()||(P(),m.stop(),o&&o(g))))},D,{capture:!1}),y=function(n,t,e){var r=e*(Math.PI/180),i="x"===n,l=Math.cos(r),o=t*t,u=0,a=0,c=!1,s=0;return{start:function(n,t){u=n,a=t,s=0,c=!0},detect:function(n,t){if(!c)return!1;var e=n-u,r=t-a,d=e*e+r*r;if(d<o)return!1;var f=Math.sqrt(d),p=(i?e:r)/f;return s=p>l?1:p<-l?-1:0,c=!1,!0},isGesture:function(){return 0!==s},getDirection:function(){return s}}}(t.direction,t.threshold,t.maxAngle),w=a.createGesture({name:n.gestureName,priority:n.gesturePriority,disableScroll:n.disableScroll}),x=!1,E=!1,S=!0,k=!1;function L(){x&&(k=!1,u&&u(g))}function I(){return!(w&&!w.capture()||(x=!0,S=!1,g.startX=g.currentX,g.startY=g.currentY,g.startTimeStamp=g.timeStamp,r?r(g).then(C):C(),0))}function C(){i&&i(g),S=!0}function P(){x=!1,E=!1,k=!1,S=!0,w.release()}function D(n){var t=x,e=S;P(),e&&(p(g,n),t?l&&l(g):o&&o(g))}return{setDisabled:function(n){n&&x&&D(void 0),m.setDisabled(n)},destroy:function(){w.destroy(),m.destroy()}}}function p(n,t){if(t){var e=n.currentX,r=n.currentY,i=n.timeStamp;b(t,n);var l=n.currentX,o=n.currentY,u=(n.timeStamp=v(t))-i;if(u>0&&u<100){var a=(o-r)/u;n.velocityX=(l-e)/u*.7+.3*n.velocityX,n.velocityY=.7*a+.3*n.velocityY}n.deltaX=l-n.startX,n.deltaY=o-n.startY,n.event=t}}function b(n,t){var e=0,r=0;if(n){var i=n.changedTouches;if(i&&i.length>0){var l=i[0];e=l.clientX,r=l.clientY}else void 0!==n.pageX&&(e=n.pageX,r=n.pageY)}t.currentX=e,t.currentY=r}function v(n){return n.timeStamp||Date.now()}},yIUm:function(n,t,e){"use strict";e.d(t,"a",function(){return u}),e.d(t,"b",function(){return c}),e.d(t,"c",function(){return l}),e.d(t,"d",function(){return i}),e.d(t,"e",function(){return o});var r=e("B5Ai");function i(n,t){return null!==t.closest(n)}function l(n){var t;return"string"==typeof n&&n.length>0?((t={"ion-color":!0})["ion-color-"+n]=!0,t):void 0}function o(n,t){var e;return(e={})[t]=!0,e[t+"-"+n]=void 0!==n,e}function u(n){var t={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(function(n){return null!=n}).map(function(n){return n.trim()}).filter(function(n){return""!==n}):[]}(n).forEach(function(n){return t[n]=!0}),t}var a=/^[a-z][a-z0-9+\-.]*:/;function c(n,t,e,i){return r.a(this,void 0,void 0,function(){var l;return r.c(this,function(r){switch(r.label){case 0:return null==t||"#"===t[0]||a.test(t)?[3,2]:(l=n.document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[4,l.componentOnReady()]):[3,2];case 1:return r.sent(),[2,l.push(t,i)];case 2:return[2,!1]}})})}},ySCp:function(n,t,e){"use strict";function r(){var n=window.TapticEngine;n&&n.selection()}function i(){var n=window.TapticEngine;n&&n.gestureSelectionStart()}function l(){var n=window.TapticEngine;n&&n.gestureSelectionChanged()}function o(){var n=window.TapticEngine;n&&n.gestureSelectionEnd()}e.d(t,"a",function(){return l}),e.d(t,"b",function(){return i}),e.d(t,"c",function(){return o}),e.d(t,"d",function(){return r})}}]);