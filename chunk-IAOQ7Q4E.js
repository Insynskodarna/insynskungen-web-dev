import{a as h}from"./chunk-ZPBGN3NF.js";import{a as c}from"./chunk-4E4VAOSI.js";import{d as p}from"./chunk-ID2EQPHW.js";import{b as n}from"./chunk-JF5TECV5.js";import{N as o,Q as a,W as i}from"./chunk-QAU7Z64W.js";var I=(()=>{let e=class e{constructor(){this.authEndpointsService=i(n),this.storageService=i(h),this.userStoreService=i(c),this.router=i(p),this.login=t=>this.authEndpointsService.authControllerLogin({requestBody:t}).pipe(o(r=>{this.storageService.persistIsLoggedIn(!0),this.userStoreService.setUserData({isLoading:!1,isLoggedIn:!0,email:r.email}),this.router.navigate(["/app"])})),this.register=t=>this.authEndpointsService.authControllerRegister({requestBody:t}).pipe(o(r=>{this.storageService.persistIsLoggedIn(!0),this.userStoreService.setUserData({isLoading:!1,isLoggedIn:!0,email:r.email}),this.router.navigate(["/app"])})),this.verify=t=>this.authEndpointsService.authControllerVerifyEmail({token:t}).pipe(o(()=>{this.router.navigate(["/app"])}))}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=a({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();export{I as a};
