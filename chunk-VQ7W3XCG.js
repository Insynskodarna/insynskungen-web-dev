import{a as W}from"./chunk-377UHWRP.js";import{a as $}from"./chunk-7UOKYF4Y.js";import{a as B,b as N,f as j,k as V}from"./chunk-77JBAVBO.js";import{d as A}from"./chunk-OJLFCCTT.js";import"./chunk-M63GBMWQ.js";import"./chunk-LJMOF55N.js";import{$ as E,$a as n,B as y,Ba as o,Ja as h,L as M,Qa as u,W as d,Wa as _,Ya as f,Z as b,Za as w,_a as I,ab as i,bb as g,gb as x,hb as T,j as S,kb as r,lb as C,nb as D,oa as O,ob as q,pa as P,pb as F,ra as k,rb as R,y as v}from"./chunk-RMOKAAJ7.js";var K=(()=>{let e=class e{constructor(){this.elementRef=d(k)}ngAfterViewInit(){this.elementRef.nativeElement?.focus()}};e.\u0275fac=function(c){return new(c||e)},e.\u0275dir=E({type:e,selectors:[["","appAutofocus",""]],standalone:!0});let t=e;return t})();var H=(t,e)=>e.id;function L(t,e){if(t&1&&(n(0,"div",7)(1,"a")(2,"p"),r(3),i(),n(4,"p"),r(5),i()(),n(6,"button",8),g(7,"app-icon",9),i()()),t&2){let m=e.$implicit;o(3),C(m.foretag),o(2),C(m.ticker),o(2),_("icon","favorite-plus")}}function U(t,e){if(t&1&&w(0,L,8,3,"div",7,H),t&2){let m=T();I(m)}}function G(t,e){t&1&&(n(0,"div",10)(1,"p"),r(2,"H\xE4r kan du s\xF6ka p\xE5:"),i(),n(3,"ul")(4,"li"),r(5,"Bolag, t ex Investor"),i(),n(6,"li"),r(7,"Symboler, t ex INVE_B"),i(),n(8,"li"),r(9,"ISIN"),i()()())}function J(t,e){t&1&&(n(0,"div",6),u(1,U,2,0)(2,G,10,0),i()),t&2&&(o(),f(1,e.length?1:2))}var le=(()=>{let e=class e{constructor(){this.closeSearch=P(),this.query=h(""),this.searchItems=h([]),this.loadSearch$=new S,this.searchEndpointsService=d(A),this.destroyRef=d(O),this.handleKeyup=a=>{if(a.key==="Escape"){this.closeSearch.emit();return}this.loadSearch$.next()},this.loadSearch=()=>{this.loadSearch$.pipe(y(100),v(()=>this.query()?!0:(this.searchItems.set([]),!1)),M(()=>this.searchEndpointsService.searchControllerSearch({requestBody:{query:this.query()}})),$(this.destroyRef)).subscribe(a=>{this.searchItems.set(a)})}}ngOnInit(){this.loadSearch()}};e.\u0275fac=function(c){return new(c||e)},e.\u0275cmp=b({type:e,selectors:[["app-search"]],outputs:{closeSearch:"closeSearch"},standalone:!0,features:[R],decls:7,vars:3,consts:[[1,"search-mode"],[1,"search-mode__bg-close",3,"click"],[1,"search-mode__content"],[1,"search-mode__input-wrapper"],[1,"icon--search","icon--lg",3,"icon"],["type","text","placeholder","S\xF6k","appAutofocus","",1,"search-mode__input",3,"ngModelChange","keyup","ngModel"],[1,"search-mode__result"],[1,"search-mode__result__item"],[1,"icon-button","icon-button--ui"],[1,"icon--ui",3,"icon"],[1,"search-mode__tips"]],template:function(c,s){if(c&1&&(n(0,"div",0)(1,"div",1),x("click",function(){return s.closeSearch.emit()}),i(),n(2,"div",2)(3,"div",3),g(4,"app-icon",4),n(5,"input",5),F("ngModelChange",function(p){return q(s.query,p)||(s.query=p),p}),x("keyup",function(p){return s.handleKeyup(p)}),i()(),u(6,J,3,1,"div",6),i()()),c&2){let l;o(4),_("icon","search"),o(),D("ngModel",s.query),o(),f(6,(l=s.searchItems())?6:-1,l)}},dependencies:[K,W,V,B,N,j],styles:["[_nghost-%COMP%]{background:#0000004d;display:flex;inset:0;padding:16px;position:fixed}.search-mode__bg-close[_ngcontent-%COMP%]{inset:0;position:absolute}.search-mode__content[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:min-content;max-height:calc(100dvh - 100px);overflow:hidden;position:relative;width:100%}.search-mode__input-wrapper[_ngcontent-%COMP%]{align-items:center;background:var(--search-bg);border-radius:12px 12px 0 0;display:flex;padding:8px 16px}.search-mode__input-wrapper--right[_ngcontent-%COMP%]{margin-left:auto}.search-mode__input[_ngcontent-%COMP%]{appearance:none;background:none;color:var(--search-text);font-size:26px;height:50px;margin-left:16px;width:100%}.search-mode__input[_ngcontent-%COMP%]::placeholder{color:var(--search-text-placeholder)}.search-mode__result[_ngcontent-%COMP%]{background:var(--search-bg);border-bottom-left-radius:12px;border-bottom-right-radius:12px;border-top:1px solid var(--search-border);display:flex;flex-direction:column;gap:16px;overflow:auto;padding:16px}.search-mode__result__item[_ngcontent-%COMP%]{align-items:center;display:flex;gap:16px}.search-mode__result[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:auto}.search-mode__result[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--search-text);cursor:pointer;flex:1}.search-mode__tips[_ngcontent-%COMP%]{color:var(--search-text)}.search-mode__tips[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:24px;padding-top:8px}.search-mode__tips[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-top:4px}"],changeDetection:0});let t=e;return t})();export{le as SearchComponent};
