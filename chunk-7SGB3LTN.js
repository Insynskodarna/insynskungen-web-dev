import{a as w}from"./chunk-Y7RD5GJU.js";import{a as F}from"./chunk-4E4VAOSI.js";import{c as L,e as T}from"./chunk-ID2EQPHW.js";import"./chunk-3ZZPQN63.js";import{$a as I,Ma as c,Na as u,Oa as _,Ra as s,Sa as S,Ta as h,Ua as a,Va as r,W as D,Wa as i,Y as g,Z as d,Za as v,_a as b,ab as l,bb as M,db as f,na as C,ya as o}from"./chunk-QAU7Z64W.js";var A=()=>[import("./chunk-LVAREBNP.js").then(e=>e.IconDashboardComponent)],j=()=>[import("./chunk-PN6TSIG2.js").then(e=>e.IconListComponent)],B=()=>[import("./chunk-PR3SMDKL.js").then(e=>e.IconSearchComponent)],R=()=>[import("./chunk-U2FEAIWK.js").then(e=>e.IconUserComponent)];function W(e,t){e&1&&i(0,"app-icon-dashboard")}function U(e,t){e&1&&i(0,"app-icon-list")}function V(e,t){e&1&&i(0,"app-icon-search")}function q(e,t){e&1&&i(0,"app-icon-user")}var P=(()=>{let t=class t{constructor(){this.icon=C.required()}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=d({type:t,selectors:[["app-icon"]],inputs:{icon:[g.SignalBased,"icon"]},standalone:!0,features:[f],decls:12,vars:4,template:function(n,p){n&1&&(c(0,W,1,0),u(1,0,A),c(3,U,1,0),u(4,3,j),c(6,V,1,0),u(7,6,B),c(9,q,1,0),u(10,9,R)),n&2&&(o(),_(p.icon()==="dashboard"),o(3),_(p.icon()==="list"),o(3),_(p.icon()==="search"),o(3),_(p.icon()==="user"))},styles:[`app-icon{display:inline-flex}app-icon>*{height:min-content;display:flex;width:min-content}app-icon svg{fill:#000}app-icon.icon--white svg{fill:#fff}
`],encapsulation:2,changeDetection:0});let e=t;return e})();var z=["*"],E=(()=>{let t=class t{constructor(){this.truncate=C()}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=d({type:t,selectors:[["app-text"]],hostVars:2,hostBindings:function(n,p){n&2&&S("truncate",p.truncate())},inputs:{truncate:[g.SignalBased,"truncate"]},standalone:!0,features:[f],ngContentSelectors:z,decls:1,vars:0,template:function(n,p){n&1&&(b(),I(0))},styles:[".truncate[_nghost-%COMP%]{overflow:hidden;text-overflow:ellipsis}"],changeDetection:0});let e=t;return e})();function H(e,t){if(e&1&&(a(0,"app-text",5),l(1),r(),a(2,"button",6),i(3,"app-icon",7),r()),e&2){let x=v(2);s("truncate",!0),o(),M(" ",x.email," "),o(2),s("icon","user")}}function G(e,t){e&1&&(a(0,"a",8),l(1," Logga in "),r(),a(2,"a",8)(3,"button",9),l(4,"Registrera"),r()()),e&2&&(s("routerLink","/login"),o(2),s("routerLink","/register"))}function J(e,t){if(e&1&&(a(0,"div",4),c(1,H,4,3)(2,G,5,2),r()),e&2){let x=v();o(),h(1,x.isLoggedIn?1:2)}}function K(e,t){e&1&&c(0,J,3,1,"div",4),e&2&&h(0,t.isLoading?-1:0)}var k=(()=>{let t=class t{constructor(){this.userStoreService=D(F),this.userData=this.userStoreService.userData}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=d({type:t,selectors:[["app-in-app-layout"]],standalone:!0,features:[f],decls:14,vars:4,consts:[[1,"header"],[1,"bottom-bar"],[1,"bottom-bar__item"],[1,"icon--white",3,"icon"],[1,"menu"],[3,"truncate"],[1,"icon-button","ml-xs"],[3,"icon"],[3,"routerLink"],[1,"button"]],template:function(n,p){if(n&1&&(a(0,"div",0),i(1,"app-logo"),c(2,K,1,1),r(),i(3,"router-outlet"),a(4,"div",1)(5,"div",2),i(6,"app-icon",3),l(7," \xD6versikt "),r(),a(8,"div",2),i(9,"app-icon",3),l(10," Transaktioner "),r(),a(11,"div",2),i(12,"app-icon",3),l(13," S\xF6k "),r()()),n&2){let y;o(2),h(2,(y=p.userData())?2:-1,y),o(4),s("icon","dashboard"),o(3),s("icon","list"),o(3),s("icon","search")}},dependencies:[L,w,T,P,E],styles:["[_nghost-%COMP%]{padding:24px;display:flex;flex-direction:column}.header[_ngcontent-%COMP%]{display:flex;align-items:center}.menu[_ngcontent-%COMP%]{display:flex;margin-left:auto;align-items:center;overflow:hidden}.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-left:16px}.bottom-bar[_ngcontent-%COMP%]{background:#000;color:#fff;padding:16px;border-radius:12px;position:fixed;bottom:8px;left:8px;right:8px;display:flex;justify-content:space-around}.bottom-bar__item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:space-between;cursor:pointer;font-size:13px}.bottom-bar__item[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{margin-bottom:4px}"],changeDetection:0});let e=t;return e})();var fe=[{path:"",component:k,children:[{path:"",loadComponent:()=>import("./chunk-QGUTCP4E.js").then(e=>e.InAppDashboardComponent)}]}];export{fe as inAppLayoutRoutes};
