import{a as x,b as _,c as y,d as h,e as p,f as w,g as S,h as b,i as G,j as M}from"./chunk-M4IGJGC3.js";import{a as F}from"./chunk-5FDYFNZZ.js";import{e as C}from"./chunk-B5HIPC3W.js";import{a as v}from"./chunk-G3PGFCMN.js";import"./chunk-DMRIGJE4.js";import{Na as a,Qa as e,Ra as o,Sa as l,Ua as f,V as u,Wa as t,Y as c,_a as g,va as r}from"./chunk-D2QBYPE3.js";var A=(()=>{let i=class i{constructor(){this.authService=u(F),this.formGroup=new h({email:new p(""),password:new p("")}),this.login=()=>{if(this.formGroup.invalid)return;let s=this.formGroup.value.email,n=this.formGroup.value.password;this.authService.login({email:s,password:n}).subscribe()}}};i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=c({type:i,selectors:[["app-login"]],standalone:!0,features:[g],decls:20,vars:5,consts:[[1,"login"],[1,"mb-md"],[3,"formGroup"],["for","email"],["id","email","type","email","required","",1,"input","mb-md",3,"formControlName"],[1,"flex"],["for","password"],[1,"login__forgot-password",3,"routerLink"],["id","password","type","password","required","",1,"input","mb-md",3,"formControlName"],[1,"button",3,"click"],[1,"login__register"],[3,"routerLink"]],template:function(n,d){n&1&&(l(0,"app-logo"),e(1,"div",0)(2,"h1",1),t(3,"Logga in"),o(),e(4,"form",2)(5,"label",3),t(6," E-post "),o(),l(7,"input",4),e(8,"div",5)(9,"label",6),t(10," L\xF6senord "),o(),e(11,"a",7),t(12," Gl\xF6mt l\xF6senordet? "),o()(),l(13,"input",8),e(14,"button",9),f("click",function(){return d.login()}),t(15," Logga in "),o()(),e(16,"div",10),t(17,"Har du inget konto? \xA0"),e(18,"a",11),t(19,"Registrera"),o()()()),n&2&&(r(4),a("formGroup",d.formGroup),r(3),a("formControlName","email"),r(4),a("routerLink","/forgot-password"),r(2),a("formControlName","password"),r(5),a("routerLink","/register"))},dependencies:[v,M,w,x,_,y,G,S,b,C],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;padding:24px;flex:1}form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.login[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;justify-content:center;flex:1}.login[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:4px}.login__forgot-password[_ngcontent-%COMP%]{margin-left:auto}.login__register[_ngcontent-%COMP%]{margin-top:24px;display:flex;justify-content:center}a[_ngcontent-%COMP%]{color:#00f}"],changeDetection:0});let m=i;return m})();export{A as LoginComponent};
