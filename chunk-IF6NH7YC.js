import{a as W,b as $}from"./chunk-BFUZBOOL.js";import{a as B,b as N,f as j,k as V}from"./chunk-CYYFM5BC.js";import{d as A}from"./chunk-FMSK7IBT.js";import"./chunk-FTDNBIAN.js";import{$ as M,$a as i,B as S,Ba as o,Ja as h,L as y,Pa as u,Va as w,W as l,Xa as _,Ya as O,Z as v,Za as P,_a as n,ab as I,cb as f,db as T,eb as r,fb as g,hb as D,ib as q,j as C,jb as F,lb as R,oa as b,pa as E,ra as k,y as x}from"./chunk-Q3FA5AYY.js";var z=(()=>{let e=class e{constructor(){this.elementRef=l(k)}ngAfterViewInit(){this.elementRef.nativeElement?.focus()}};e.\u0275fac=function(a){return new(a||e)},e.\u0275dir=M({type:e,selectors:[["","appAutofocus",""]],standalone:!0});let t=e;return t})();var L=(t,e)=>e.id;function U(t,e){if(t&1&&(n(0,"a")(1,"p"),r(2),i(),n(3,"p"),r(4),i()()),t&2){let p=e.$implicit;o(2),g(p.foretag),o(2),g(p.ticker)}}function G(t,e){if(t&1&&O(0,U,5,2,"a",null,L),t&2){let p=T();P(p)}}function J(t,e){t&1&&(n(0,"div",7)(1,"p"),r(2,"H\xE4r kan du s\xF6ka p\xE5:"),i(),n(3,"ul")(4,"li"),r(5,"Bolag, t ex Investor"),i(),n(6,"li"),r(7,"Symboler, t ex INVE_B"),i(),n(8,"li"),r(9,"ISIN"),i()()())}function K(t,e){t&1&&(n(0,"div",6),u(1,G,2,0)(2,J,10,0),i()),t&2&&(o(),_(1,e.length?1:2))}var le=(()=>{let e=class e{constructor(){this.closeSearch=E(),this.query=h(""),this.searchItems=h([]),this.loadSearch$=new C,this.searchEndpointsService=l(A),this.destroyRef=l(b),this.loadSearch=()=>{this.loadSearch$.pipe(S(100),x(()=>this.query()?!0:(this.searchItems.set([]),!1)),y(()=>this.searchEndpointsService.searchControllerSearch({requestBody:{query:this.query()}})),$(this.destroyRef)).subscribe(d=>{this.searchItems.set(d)})}}ngOnInit(){this.loadSearch()}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=v({type:e,selectors:[["app-search"]],outputs:{closeSearch:"closeSearch"},standalone:!0,features:[R],decls:7,vars:3,consts:[[1,"search-mode"],[1,"search-mode__bg-close",3,"click"],[1,"search-mode__content"],[1,"search-mode__input-wrapper"],[1,"icon--white","icon--lg",3,"icon"],["type","text","placeholder","S\xF6k","appAutofocus","",1,"search-mode__input",3,"ngModelChange","keyup","ngModel"],[1,"search-mode__result"],[1,"search-mode__tips"]],template:function(a,c){if(a&1&&(n(0,"div",0)(1,"div",1),f("click",function(){return c.closeSearch.emit()}),i(),n(2,"div",2)(3,"div",3),I(4,"app-icon",4),n(5,"input",5),F("ngModelChange",function(m){return q(c.query,m)||(c.query=m),m}),f("keyup",function(){return c.loadSearch$.next()}),i()(),u(6,K,3,1,"div",6),i()()),a&2){let s;o(4),w("icon","search"),o(),D("ngModel",c.query),o(),_(6,(s=c.searchItems())?6:-1,s)}},dependencies:[z,W,V,B,N,j],styles:["[_nghost-%COMP%]{background:#0000004d;display:flex;inset:0;padding:16px;position:fixed}.search-mode__bg-close[_ngcontent-%COMP%]{inset:0;position:absolute}.search-mode__content[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:min-content;max-height:calc(100dvh - 100px);overflow:hidden;position:relative;width:100%}.search-mode__input-wrapper[_ngcontent-%COMP%]{align-items:center;background:#000;border-radius:12px 12px 0 0;display:flex;padding:8px 16px}.search-mode__input-wrapper--right[_ngcontent-%COMP%]{margin-left:auto}.search-mode__input[_ngcontent-%COMP%]{appearance:none;background:none;color:#fff;font-size:26px;height:50px;margin-left:16px;width:100%}.search-mode__input[_ngcontent-%COMP%]::placeholder{color:#fffc}.search-mode__result[_ngcontent-%COMP%]{background:#000;border-bottom-left-radius:12px;border-bottom-right-radius:12px;border-top:1px solid grey;display:flex;flex-direction:column;gap:16px;overflow:auto;padding:16px}.search-mode__result[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;cursor:pointer}.search-mode__tips[_ngcontent-%COMP%]{color:#fff}.search-mode__tips[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:24px;padding-top:8px}.search-mode__tips[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-top:4px}"],changeDetection:0});let t=e;return t})();export{le as SearchComponent};
