import{l as _,n as d}from"./chunk-LKIIH6AW.js";import{L as P,Q as u,V as l,a as m,b as v,d as g,n as O,o as C,r as T,w as A,z as E}from"./chunk-4ZDGGICM.js";var a={BASE:"",VERSION:"1.0",WITH_CREDENTIALS:!1,CREDENTIALS:"include",TOKEN:void 0,USERNAME:void 0,PASSWORD:void 0,HEADERS:void 0,ENCODE_PATH:void 0};var h=class extends Error{constructor(t,n,e){super(e),this.name="ApiError",this.url=n.url,this.status=n.status,this.statusText=n.statusText,this.body=n.body,this.request=t}};var I=r=>r!=null,y=r=>typeof r=="string",k=r=>y(r)&&r!=="",S=r=>typeof r=="object"&&typeof r.type=="string"&&typeof r.stream=="function"&&typeof r.arrayBuffer=="function"&&typeof r.constructor=="function"&&typeof r.constructor.name=="string"&&/^(Blob|File)$/.test(r.constructor.name)&&/^(Blob|File)$/.test(r[Symbol.toStringTag]),R=r=>r instanceof FormData,q=r=>{try{return btoa(r)}catch{return Buffer.from(r).toString("base64")}},D=r=>{let t=[],n=(o,s)=>{t.push(`${encodeURIComponent(o)}=${encodeURIComponent(String(s))}`)},e=(o,s)=>{I(s)&&(Array.isArray(s)?s.forEach(i=>{e(o,i)}):typeof s=="object"?Object.entries(s).forEach(([i,p])=>{e(`${o}[${i}]`,p)}):n(o,s))};return Object.entries(r).forEach(([o,s])=>{e(o,s)}),t.length>0?`?${t.join("&")}`:""},F=(r,t)=>{let n=r.ENCODE_PATH||encodeURI,e=t.url.replace("{api-version}",r.VERSION).replace(/{(.*?)}/g,(s,i)=>t.path?.hasOwnProperty(i)?n(String(t.path[i])):s),o=`${r.BASE}${e}`;return t.query?`${o}${D(t.query)}`:o},H=r=>{if(r.formData){let t=new FormData,n=(e,o)=>{y(o)||S(o)?t.append(e,o):t.append(e,JSON.stringify(o))};return Object.entries(r.formData).filter(([e,o])=>I(o)).forEach(([e,o])=>{Array.isArray(o)?o.forEach(s=>n(e,s)):n(e,o)}),t}},b=(r,t)=>g(void 0,null,function*(){return typeof t=="function"?t(r):t}),G=(r,t)=>A({token:b(t,r.TOKEN),username:b(t,r.USERNAME),password:b(t,r.PASSWORD),additionalHeaders:b(t,r.HEADERS)}).pipe(T(({token:n,username:e,password:o,additionalHeaders:s})=>{let i=Object.entries(m(m({Accept:"application/json"},s),t.headers)).filter(([p,f])=>I(f)).reduce((p,[f,w])=>v(m({},p),{[f]:String(w)}),{});if(k(n)&&(i.Authorization=`Bearer ${n}`),k(e)&&k(o)){let p=q(`${e}:${o}`);i.Authorization=`Basic ${p}`}return t.body!==void 0&&(t.mediaType?i["Content-Type"]=t.mediaType:S(t.body)?i["Content-Type"]=t.body.type||"application/octet-stream":y(t.body)?i["Content-Type"]="text/plain":R(t.body)||(i["Content-Type"]="application/json")),new _(i)})),L=r=>{if(r.body)return r.mediaType?.includes("/json")?JSON.stringify(r.body):y(r.body)||S(r.body)||R(r.body)?r.body:JSON.stringify(r.body)},U=(r,t,n,e,o,s,i)=>n.request(t.method,e,{headers:i,body:o??s,withCredentials:r.WITH_CREDENTIALS,observe:"response"}),B=(r,t)=>{if(t){let n=r.headers.get(t);if(y(n))return n}},$=r=>{if(r.status!==204&&r.body!==null)return r.body},N=(r,t)=>{let e=m({400:"Bad Request",401:"Unauthorized",403:"Forbidden",404:"Not Found",500:"Internal Server Error",502:"Bad Gateway",503:"Service Unavailable"},r.errors)[t.status];if(e)throw new h(r,t,e);if(!t.ok){let o=t.status??"unknown",s=t.statusText??"unknown",i=(()=>{try{return JSON.stringify(t.body,null,2)}catch{return}})();throw new h(r,t,`Generic Error: status: ${o}; status text: ${s}; body: ${i}`)}},c=(r,t,n)=>{let e=F(r,n),o=H(n),s=L(n);return G(r,n).pipe(P(i=>U(r,n,t,e,o,s,i)),T(i=>{let p=$(i),f=B(i,n.responseHeader);return{url:e,ok:i.ok,status:i.status,statusText:i.statusText,body:f??p}}),E(i=>i.status?O({url:e,ok:i.ok,status:i.status,statusText:i.statusText,body:i.error??i.statusText}):C(i)),T(i=>(N(n,i),i.body)),E(i=>C(i)))};var J=(()=>{let t=class t{constructor(e){this.http=e}authControllerRegister({requestBody:e}){return c(a,this.http,{method:"POST",url:"/api/v1/auth/register",body:e,mediaType:"application/json"})}authControllerLogin({requestBody:e}){return c(a,this.http,{method:"POST",url:"/api/v1/auth/login",body:e,mediaType:"application/json"})}authControllerVerifyEmail({token:e}){return c(a,this.http,{method:"GET",url:"/api/v1/auth/verify",query:{token:e}})}authControllerResetPassword({requestBody:e}){return c(a,this.http,{method:"POST",url:"/api/v1/auth/password/reset",body:e,mediaType:"application/json"})}authControllerSetNewPassword({token:e,requestBody:o}){return c(a,this.http,{method:"POST",url:"/api/v1/auth/password/new",query:{token:e},body:o,mediaType:"application/json"})}};t.\u0275fac=function(o){return new(o||t)(l(d))},t.\u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();var W=(()=>{let t=class t{constructor(e){this.http=e}landingControllerLatest(){return c(a,this.http,{method:"GET",url:"/api/v1/landing"})}};t.\u0275fac=function(o){return new(o||t)(l(d))},t.\u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();var V=(()=>{let t=class t{constructor(e){this.http=e}searchControllerSearch({requestBody:e}){return c(a,this.http,{method:"POST",url:"/api/v1/search",body:e,mediaType:"application/json"})}};t.\u0275fac=function(o){return new(o||t)(l(d))},t.\u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();var z=(()=>{let t=class t{constructor(e){this.http=e}userControllerGetUser(){return c(a,this.http,{method:"GET",url:"/api/v1/user_account"})}userControllerUpdate({requestBody:e}){return c(a,this.http,{method:"PUT",url:"/api/v1/user_account",body:e,mediaType:"application/json"})}userControllerRemove(){return c(a,this.http,{method:"DELETE",url:"/api/v1/user_account"})}};t.\u0275fac=function(o){return new(o||t)(l(d))},t.\u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();export{a,J as b,W as c,V as d,z as e};
