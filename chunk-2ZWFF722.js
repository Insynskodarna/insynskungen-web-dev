import{a as g}from"./chunk-GQO2ZI3V.js";import{h as y}from"./chunk-I3D5CETK.js";import"./chunk-PFD6BIUQ.js";import{$a as l,Ba as a,Ja as c,W as o,Ya as p,Z as r,Za as d,_a as f,gb as m,ib as v,nb as u,oa as s}from"./chunk-GNPDLM67.js";var k=(e,t)=>t.id;function C(e,t){if(e&1&&(f(0,"div",0),m(1),l()),e&2){let h=t.$implicit;a(),v(" ",h.list_name," ")}}var E=(()=>{let t=class t{constructor(){this.favorites=c([]),this.userStockListEndpointsService=o(y),this.destroyRef=o(s)}ngOnInit(){this.userStockListEndpointsService.userStockListControllerGetAllListAndItemsById().pipe(g(this.destroyRef)).subscribe(n=>{this.favorites.set(n)})}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=r({type:t,selectors:[["app-in-app-favorites"]],standalone:!0,features:[u],decls:2,vars:0,consts:[[1,"favorite"]],template:function(i,S){i&1&&p(0,C,2,1,"div",0,k),i&2&&d(S.favorites())},styles:[".favorite[_ngcontent-%COMP%]{background:var(--sys-container-bg);border-radius:30px}"],changeDetection:0});let e=t;return e})();export{E as InAppFavoritesComponent};
