import{h as O,j as D}from"./chunk-6Q3ALDSO.js";import"./chunk-LJMOF55N.js";import{$a as r,Ba as u,Ia as d,Ja as _,Ka as f,Qa as g,Wa as l,Ya as x,Z as s,ab as o,bb as C,cb as h,db as y,gb as v,ha as c,hb as w,ia as p,ib as M,jb as b,pa as m,rb as S}from"./chunk-RMOKAAJ7.js";var k=["content"];function A(n,t){if(n&1){let V=y();r(0,"div",5),v("click",function(){c(V);let e=w();return p(e.closeModal())}),o()}n&2&&l("@fadeInOut",void 0)}var T=(()=>{let t=class t{constructor(){this.close=m(),this.contentViewContainerRef=f("content",{read:d}),this.animationState=_("down"),this.closeModal=()=>{this.close.emit()},this.runCloseAnimation=()=>{this.animationState.set("down")}}ngAfterViewInit(){this.animationState.set("up")}ngOnDestroy(){console.log("destroy ModalComponent")}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s({type:t,selectors:[["app-modal"]],viewQuery:function(e,i){e&1&&M(i.contentViewContainerRef,k,5,d),e&2&&b()},outputs:{close:"close"},standalone:!0,features:[S],decls:6,vars:2,consts:[["content",""],[1,"modal__bg-close"],[1,"modal__content"],[1,"modal__drag"],[1,"modal__drag--handle"],[1,"modal__bg-close",3,"click"]],template:function(e,i){e&1&&(g(0,A,1,1,"div",1),r(1,"div",2)(2,"div",3),C(3,"div",4),o(),h(4,null,0),o()),e&2&&(x(0,i.animationState()==="up"?0:-1),u(),l("@slideUpDown",i.animationState()))},styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;inset:0;position:fixed}.modal__bg-close[_ngcontent-%COMP%]{background:#0000004d;inset:0;position:absolute}.modal__content[_ngcontent-%COMP%]{background:var(--sys-modal-bg);border-top-left-radius:20px;border-top-right-radius:20px;display:flex;flex:1;flex-direction:column;margin:0 8px;padding:0 16px 16px;z-index:1}.modal__drag[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:8px 16px 16px}.modal__drag--handle[_ngcontent-%COMP%]{background:var(--sys-border);border-radius:100px;height:3px;width:60px}"],data:{animation:[D,O]},changeDetection:0});let n=t;return n})();export{T as ModalComponent};
