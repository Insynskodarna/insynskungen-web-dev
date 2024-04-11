import{a as z}from"./chunk-AIMS34M5.js";import{a as H}from"./chunk-7UOKYF4Y.js";import{i as $}from"./chunk-6Q3ALDSO.js";import{l as Q}from"./chunk-77JBAVBO.js";import{a as N}from"./chunk-YU26QPDV.js";import{a as B}from"./chunk-BBFWB4M5.js";import{c as V,d as U,e as b,f as q}from"./chunk-SKHFEV3S.js";import"./chunk-M63GBMWQ.js";import"./chunk-LJMOF55N.js";import{$a as r,Ba as a,D as P,Ia as F,Ja as T,M as A,Q as L,Qa as l,Ra as j,Ta as E,W as s,Wa as i,Ya as h,Z as u,ab as c,bb as p,d as g,db as S,gb as x,ha as v,hb as _,ia as y,j as I,kb as d,oa as R,rb as f,sb as M,y as O}from"./chunk-RMOKAAJ7.js";var w=(()=>{let e=class e{constructor(){this.router=s(b),this.destroy$=new I,this.openModal=o=>g(this,null,function*(){let n=yield this.createModal();return n.instance.close.subscribe(()=>{this.destroy(n),this.router.navigate([],{replaceUrl:!0})}),this.router.events.pipe(P(1),A(this.destroy$)).subscribe(()=>{this.destroy(n),window.history.pushState({},"")}),n.instance.contentViewContainerRef()?.createComponent(o)}),this.createModal=()=>g(this,null,function*(){this.router.navigate([],{queryParams:{modal:"true"}});let o=yield import("./chunk-P42UIQHF.js").then(m=>m.ModalComponent),n=this.viewContainerRef.createComponent(o);return n.changeDetectorRef.markForCheck(),n}),this.destroy=o=>{this.destroy$.next(),o.instance.runCloseAnimation(),setTimeout(()=>{o.destroy()},400)}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=L({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var G=(()=>{let e=class e{constructor(){this.modalService=s(w),this.viewContainerRef=s(F)}ngOnInit(){this.modalService.viewContainerRef=this.viewContainerRef}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["app-modal-anchor"]],standalone:!0,features:[f],decls:0,vars:0,template:function(n,m){},changeDetection:0});let t=e;return t})();var W=()=>[import("./chunk-AUCQTRPM.js").then(t=>t.SearchComponent)];function X(t,e){if(t&1){let C=S();r(0,"app-search",0),x("closeSearch",function(){v(C);let n=_(2);return y(n.closeSearch())}),c()}t&2&&i("@searchSlide",void 0)}function Y(t,e){t&1&&(l(0,X,1,1),j(1,0,W),E())}var J=(()=>{let e=class e{constructor(){this.showSearch=T(!1),this.destroyRef=s(R),this.router=s(b),this.closeSearch=()=>{this.router.navigate([])},this.listenForShowQueryParam=()=>{this.router.events.pipe(O(o=>o.type===V.NavigationStart),H(this.destroyRef)).subscribe(()=>{let o=this.router.getCurrentNavigation();this.determineIfSearchShouldShow(o)})},this.checkIfSearchShouldOpenOnInit=()=>{let o=this.router.lastSuccessfulNavigation;this.determineIfSearchShouldShow(o)},this.determineIfSearchShouldShow=o=>{let n=o?.initialUrl?.queryParamMap.get("show");this.showSearch.set(n==="search")}}ngOnInit(){this.checkIfSearchShouldOpenOnInit(),this.listenForShowQueryParam()}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["app-search-anchor"]],standalone:!0,features:[f],decls:1,vars:1,consts:[[3,"closeSearch"]],template:function(n,m){n&1&&l(0,Y,3,0),n&2&&h(0,m.showSearch()?0:-1)},data:{animation:[$]},changeDetection:0});let t=e;return t})();var Z=()=>[],tt=()=>({show:"search"});function et(t,e){if(t&1){let C=S();r(0,"a",6),p(1,"app-icon",7),r(2,"div",8),d(3,"4"),c()(),r(4,"button",9),x("click",function(){v(C);let n=_(3);return y(n.showAccountModal())}),p(5,"app-icon",7),c()}t&2&&(i("routerLink","favorites"),a(),i("icon","favorite"),a(4),i("icon","user"))}function nt(t,e){t&1&&(r(0,"a",10),d(1," Logga in "),c(),r(2,"a",10)(3,"button",11),d(4,"Registrera"),c()()),t&2&&(i("routerLink","/login"),a(2),i("routerLink","/register"))}function ot(t,e){if(t&1&&(r(0,"div",5),l(1,et,6,3)(2,nt,5,2),c()),t&2){let C=_();a(),h(1,C.isLoggedIn?1:2)}}function it(t,e){t&1&&l(0,ot,3,1,"div",5),t&2&&h(0,e.isLoading?-1:0)}var K=(()=>{let e=class e{constructor(){this.modalService=s(w),this.userStoreService=s(B),this.userData=this.userStoreService.userData,this.showAccountModal=()=>g(this,null,function*(){let o=yield import("./chunk-UPL72RQQ.js").then(n=>n.AccountModalComponent);yield this.modalService.openModal(o)})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["app-in-app-layout"]],standalone:!0,features:[f],decls:16,vars:10,consts:[[1,"header"],[1,"bottom-bar"],[1,"bottom-bar__item",3,"routerLink"],[1,"icon--ui",3,"icon"],[1,"bottom-bar__item",3,"routerLink","queryParams"],[1,"menu"],[1,"favorite-indicator",3,"routerLink"],[3,"icon"],[1,"favorite-indicator__counter"],[1,"icon-button","ml-xs",3,"click"],[3,"routerLink"],[1,"button"]],template:function(n,m){if(n&1&&(r(0,"div",0),p(1,"app-logo"),l(2,it,1,1),c(),p(3,"router-outlet")(4,"app-search-anchor"),r(5,"div",1)(6,"a",2),p(7,"app-icon",3),d(8," \xD6versikt "),c(),r(9,"a",2),p(10,"app-icon",3),d(11," Transaktioner "),c(),r(12,"button",4),p(13,"app-icon",3),d(14," S\xF6k "),c()(),p(15,"app-modal-anchor")),n&2){let D;a(2),h(2,(D=m.userData())?2:-1,D),a(4),i("routerLink","/app"),a(),i("icon","dashboard"),a(2),i("routerLink","/app/transactions"),a(),i("icon","list"),a(2),i("routerLink",M(8,Z))("queryParams",M(9,tt)),a(),i("icon","search")}},dependencies:[z,N,G,Q,q,U,J],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;padding:24px 24px 80px}.header[_ngcontent-%COMP%]{align-items:center;display:flex;margin-bottom:24px}.menu[_ngcontent-%COMP%]{align-items:center;display:flex;margin-left:auto;overflow:hidden}.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-left:16px}.favorite-indicator[_ngcontent-%COMP%]{align-items:center;border-radius:20px;cursor:pointer;display:flex;height:40px;justify-content:center;padding:0 8px;position:relative}.favorite-indicator[_ngcontent-%COMP%]:hover{background:var(--button-bg)}.favorite-indicator[_ngcontent-%COMP%]:active{background:var(--button-bg-active)}.favorite-indicator__counter[_ngcontent-%COMP%]{display:flex;font-weight:500;justify-content:center;margin-left:4px}.bottom-bar[_ngcontent-%COMP%]{background:var(--sys-ui-bg);border-radius:12px;bottom:8px;color:var(--sys-ui-text);display:flex;height:56px;justify-content:space-around;left:8px;padding:8px;position:fixed;right:8px}.bottom-bar__item[_ngcontent-%COMP%]{align-items:center;cursor:pointer;display:flex;flex-direction:column;font-size:13px;justify-content:space-between}.bottom-bar__item[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{margin-bottom:4px}.bottom-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .bottom-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:var(--sys-ui-text)}"],changeDetection:0});let t=e;return t})();var Bt=[{path:"",component:K,children:[{path:"",loadComponent:()=>import("./chunk-FQF6FLAC.js").then(t=>t.InAppOverviewComponent)},{path:"favorites",loadComponent:()=>import("./chunk-5IPFKPLE.js").then(t=>t.InAppFavoritesComponent)},{path:"transactions",loadComponent:()=>import("./chunk-CI4AICYZ.js").then(t=>t.InAppTransactionsComponent)},{path:"transactions/:stockId",loadComponent:()=>import("./chunk-4NYCEDVD.js").then(t=>t.InAppTransactionComponent)}]}];export{Bt as inAppLayoutRoutes};
