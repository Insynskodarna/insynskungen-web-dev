import{a as S,b as P,c as b,d as G,e as k,g as M,h as N,i as D,j as V,l as O}from"./chunk-OT2SWYJW.js";import{a as F}from"./chunk-J6LJQGFB.js";import{b as y}from"./chunk-SKOWQUUI.js";import"./chunk-UOXJAR65.js";import"./chunk-ZBM5PX4A.js";import{$a as i,Ba as a,Ja as C,Qa as g,W as u,Wa as c,Ya as E,Z as p,ab as o,bb as d,db as h,gb as _,ha as f,hb as m,ia as x,kb as r,mb as v,rb as w}from"./chunk-2MKVM2AD.js";function j(t,e){if(t&1){let l=h();i(0,"div",0)(1,"h1",1),r(2,"Gl\xF6mt l\xF6senordet?"),o(),i(3,"form",2)(4,"label",3),r(5," E-post "),o(),d(6,"input",4),o(),i(7,"button",5),_("click",function(){f(l);let n=m();return x(n.resetPassword())}),r(8," \xC5terst\xE4ll l\xF6senordet "),o()()}if(t&2){let l=m();a(3),c("formGroup",l.formGroup),a(3),c("formControlName","email")}}function q(t,e){if(t&1&&(i(0,"div",6)(1,"h1",1),r(2,"\xC5terst\xE4llningsl\xE4nk skickad"),o(),i(3,"p"),r(4),o()()),t&2){let l=m();a(4),v("En \xE5terst\xE4llningsl\xE4nk har skickats till ",l.sentEmail(),"")}}var K=(()=>{let e=class e{constructor(){this.authEndpointsService=u(y),this.formGroup=new G({email:new k("")}),this.sentEmail=C(""),this.resetPassword=()=>{if(this.formGroup.invalid)return;let s=this.formGroup.value.email;this.authEndpointsService.authControllerResetPassword({requestBody:{email:s}}).subscribe(()=>{this.sentEmail.set(s)})}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["app-forgot-password"]],standalone:!0,features:[w],decls:3,vars:1,consts:[[1,"forgot-password"],[1,"mb-sm"],[3,"formGroup"],["for","email"],["id","email","type","email","required","",1,"input","mb-sm",3,"formControlName"],[1,"button",3,"click"],[1,"reset-sent"]],template:function(n,T){n&1&&(d(0,"app-logo"),g(1,j,9,2,"div",0)(2,q,5,1)),n&2&&(a(),E(1,T.sentEmail()?2:1))},dependencies:[F,O,M,S,P,b,V,N,D],styles:["[_nghost-%COMP%]{padding:24px;display:flex;flex-direction:column;flex:1}form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.forgot-password[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;flex:1}label[_ngcontent-%COMP%]{margin-bottom:4px}.reset-sent[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;flex:1}"],changeDetection:0});let t=e;return t})();export{K as ForgotPasswordComponent};
