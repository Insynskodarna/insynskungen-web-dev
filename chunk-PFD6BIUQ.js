import{A as Pe,Bb as me,Ca as V,F as Ne,L as Be,O as Z,Oa as je,Q as v,T as S,V as C,W as R,aa as ge,ba as ke,cb as T,da as xe,db as m,ea as Ue,g as Oe,m as _e,n as fe,r as z,sa as $e,sb as ze,tb as Ve,wa as De,xb as Ge,y as Le,yb as pe}from"./chunk-GNPDLM67.js";var Xe=null;function ye(){return Xe}function ir(e){Xe??=e}var We=class{};var ie=new S(""),Je=(()=>{let t=class t{historyGo(n){throw new Error("")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=v({token:t,factory:()=>R(At),providedIn:"platform"});let e=t;return e})();var At=(()=>{let t=class t extends Je{constructor(){super(),this._doc=R(ie),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return ye().getBaseHref(this._doc)}onPopState(n){let i=ye().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",n,!1),()=>i.removeEventListener("popstate",n)}onHashChange(n){let i=ye().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",n,!1),()=>i.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,i,s){this._history.pushState(n,i,s)}replaceState(n,i,s){this._history.replaceState(n,i,s)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=v({token:t,factory:()=>new t,providedIn:"platform"});let e=t;return e})();function qe(e,t){if(e.length==0)return t;if(t.length==0)return e;let r=0;return e.endsWith("/")&&r++,t.startsWith("/")&&r++,r==2?e+t.substring(1):r==1?e+t:e+"/"+t}function Ye(e){let t=e.match(/#|\?|$/),r=t&&t.index||e.length,n=r-(e[r-1]==="/"?1:0);return e.slice(0,n)+e.slice(r)}function B(e){return e&&e[0]!=="?"?"?"+e:e}var be=(()=>{let t=class t{historyGo(n){throw new Error("")}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=v({token:t,factory:()=>R(bt),providedIn:"root"});let e=t;return e})(),Ct=new S(""),bt=(()=>{let t=class t extends be{constructor(n,i){super(),this._platformLocation=n,this._removeListenerFns=[],this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??R(ie).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return qe(this._baseHref,n)}path(n=!1){let i=this._platformLocation.pathname+B(this._platformLocation.search),s=this._platformLocation.hash;return s&&n?`${i}${s}`:i}pushState(n,i,s,a){let o=this.prepareExternalUrl(s+B(a));this._platformLocation.pushState(n,i,o)}replaceState(n,i,s,a){let o=this.prepareExternalUrl(s+B(a));this._platformLocation.replaceState(n,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}};t.\u0275fac=function(i){return new(i||t)(C(Je),C(Ct,8))},t.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var vt=(()=>{let t=class t{constructor(n){this._subject=new $e,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=n;let i=this._locationStrategy.getBaseHref();this._basePath=It(Ye(Ze(i))),this._locationStrategy.onPopState(s=>{this._subject.emit({url:this.path(!0),pop:!0,state:s.state,type:s.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,i=""){return this.path()==this.normalize(n+B(i))}normalize(n){return t.stripTrailingSlash(Tt(this._basePath,Ze(n)))}prepareExternalUrl(n){return n&&n[0]!=="/"&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,i="",s=null){this._locationStrategy.pushState(s,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+B(i)),s)}replaceState(n,i="",s=null){this._locationStrategy.replaceState(s,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+B(i)),s)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",i){this._urlChangeListeners.forEach(s=>s(n,i))}subscribe(n,i,s){return this._subject.subscribe({next:n,error:i,complete:s})}};t.normalizeQueryParams=B,t.joinWithSlash=qe,t.stripTrailingSlash=Ye,t.\u0275fac=function(i){return new(i||t)(C(be))},t.\u0275prov=v({token:t,factory:()=>St(),providedIn:"root"});let e=t;return e})();function St(){return new vt(C(be))}function Tt(e,t){if(!e||!t.startsWith(e))return t;let r=t.substring(e.length);return r===""||["/",";","?","#"].includes(r[0])?r:t}function Ze(e){return e.replace(/\/index.html$/,"")}function It(e){if(new RegExp("^(https?:)?//").test(e)){let[,r]=e.split(/\/\/[^\/]+/);return r}return e}var w=function(e){return e[e.Format=0]="Format",e[e.Standalone=1]="Standalone",e}(w||{}),h=function(e){return e[e.Narrow=0]="Narrow",e[e.Abbreviated=1]="Abbreviated",e[e.Wide=2]="Wide",e[e.Short=3]="Short",e}(h||{}),b=function(e){return e[e.Short=0]="Short",e[e.Medium=1]="Medium",e[e.Long=2]="Long",e[e.Full=3]="Full",e}(b||{}),L={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function Rt(e){return T(e)[m.LocaleId]}function Mt(e,t,r){let n=T(e),i=[n[m.DayPeriodsFormat],n[m.DayPeriodsStandalone]],s=I(i,t);return I(s,r)}function Ot(e,t,r){let n=T(e),i=[n[m.DaysFormat],n[m.DaysStandalone]],s=I(i,t);return I(s,r)}function _t(e,t,r){let n=T(e),i=[n[m.MonthsFormat],n[m.MonthsStandalone]],s=I(i,t);return I(s,r)}function Lt(e,t){let n=T(e)[m.Eras];return I(n,t)}function K(e,t){let r=T(e);return I(r[m.DateFormat],t)}function X(e,t){let r=T(e);return I(r[m.TimeFormat],t)}function J(e,t){let n=T(e)[m.DateTimeFormat];return I(n,t)}function se(e,t){let r=T(e),n=r[m.NumberSymbols][t];if(typeof n>"u"){if(t===L.CurrencyDecimal)return r[m.NumberSymbols][L.Decimal];if(t===L.CurrencyGroup)return r[m.NumberSymbols][L.Group]}return n}function He(e){if(!e[m.ExtraData])throw new Error(`Missing extra locale data for the locale "${e[m.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function Pt(e){let t=T(e);return He(t),(t[m.ExtraData][2]||[]).map(n=>typeof n=="string"?Ee(n):[Ee(n[0]),Ee(n[1])])}function Nt(e,t,r){let n=T(e);He(n);let i=[n[m.ExtraData][0],n[m.ExtraData][1]],s=I(i,t)||[];return I(s,r)||[]}function I(e,t){for(let r=t;r>-1;r--)if(typeof e[r]<"u")return e[r];throw new Error("Locale data API: locale data undefined")}function Ee(e){let[t,r]=e.split(":");return{hours:+t,minutes:+r}}var Bt=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,q={},kt=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,_=function(e){return e[e.Short=0]="Short",e[e.ShortGMT=1]="ShortGMT",e[e.Long=2]="Long",e[e.Extended=3]="Extended",e}(_||{}),l=function(e){return e[e.FullYear=0]="FullYear",e[e.Month=1]="Month",e[e.Date=2]="Date",e[e.Hours=3]="Hours",e[e.Minutes=4]="Minutes",e[e.Seconds=5]="Seconds",e[e.FractionalSeconds=6]="FractionalSeconds",e[e.Day=7]="Day",e}(l||{}),d=function(e){return e[e.DayPeriods=0]="DayPeriods",e[e.Days=1]="Days",e[e.Months=2]="Months",e[e.Eras=3]="Eras",e}(d||{});function xt(e,t,r,n){let i=Zt(e);t=O(r,t)||t;let a=[],o;for(;t;)if(o=kt.exec(t),o){a=a.concat(o.slice(1));let D=a.pop();if(!D)break;t=D}else{a.push(t);break}let c=i.getTimezoneOffset();n&&(c=et(n,c),i=Yt(i,n,!0));let u="";return a.forEach(D=>{let F=Gt(D);u+=F?F(i,r,c):D==="''"?"'":D.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),u}function ne(e,t,r){let n=new Date(0);return n.setFullYear(e,t,r),n.setHours(0,0,0),n}function O(e,t){let r=Rt(e);if(q[r]??={},q[r][t])return q[r][t];let n="";switch(t){case"shortDate":n=K(e,b.Short);break;case"mediumDate":n=K(e,b.Medium);break;case"longDate":n=K(e,b.Long);break;case"fullDate":n=K(e,b.Full);break;case"shortTime":n=X(e,b.Short);break;case"mediumTime":n=X(e,b.Medium);break;case"longTime":n=X(e,b.Long);break;case"fullTime":n=X(e,b.Full);break;case"short":let i=O(e,"shortTime"),s=O(e,"shortDate");n=H(J(e,b.Short),[i,s]);break;case"medium":let a=O(e,"mediumTime"),o=O(e,"mediumDate");n=H(J(e,b.Medium),[a,o]);break;case"long":let c=O(e,"longTime"),u=O(e,"longDate");n=H(J(e,b.Long),[c,u]);break;case"full":let D=O(e,"fullTime"),F=O(e,"fullDate");n=H(J(e,b.Full),[D,F]);break}return n&&(q[r][t]=n),n}function H(e,t){return t&&(e=e.replace(/\{([^}]+)}/g,function(r,n){return t!=null&&n in t?t[n]:r})),e}function M(e,t,r="-",n,i){let s="";(e<0||i&&e<=0)&&(i?e=-e+1:(e=-e,s=r));let a=String(e);for(;a.length<t;)a="0"+a;return n&&(a=a.slice(a.length-t)),s+a}function Ut(e,t){return M(e,3).substring(0,t)}function y(e,t,r=0,n=!1,i=!1){return function(s,a){let o=$t(e,s);if((r>0||o>-r)&&(o+=r),e===l.Hours)o===0&&r===-12&&(o=12);else if(e===l.FractionalSeconds)return Ut(o,t);let c=se(a,L.MinusSign);return M(o,t,c,n,i)}}function $t(e,t){switch(e){case l.FullYear:return t.getFullYear();case l.Month:return t.getMonth();case l.Date:return t.getDate();case l.Hours:return t.getHours();case l.Minutes:return t.getMinutes();case l.Seconds:return t.getSeconds();case l.FractionalSeconds:return t.getMilliseconds();case l.Day:return t.getDay();default:throw new Error(`Unknown DateType value "${e}".`)}}function f(e,t,r=w.Format,n=!1){return function(i,s){return jt(i,s,e,t,r,n)}}function jt(e,t,r,n,i,s){switch(r){case d.Months:return _t(t,i,n)[e.getMonth()];case d.Days:return Ot(t,i,n)[e.getDay()];case d.DayPeriods:let a=e.getHours(),o=e.getMinutes();if(s){let u=Pt(t),D=Nt(t,i,n),F=u.findIndex(E=>{if(Array.isArray(E)){let[x,N]=E,j=a>=x.hours&&o>=x.minutes,g=a<N.hours||a===N.hours&&o<N.minutes;if(x.hours<N.hours){if(j&&g)return!0}else if(j||g)return!0}else if(E.hours===a&&E.minutes===o)return!0;return!1});if(F!==-1)return D[F]}return Mt(t,i,n)[a<12?0:1];case d.Eras:return Lt(t,n)[e.getFullYear()<=0?0:1];default:let c=r;throw new Error(`unexpected translation type ${c}`)}}function Q(e){return function(t,r,n){let i=-1*n,s=se(r,L.MinusSign),a=i>0?Math.floor(i/60):Math.ceil(i/60);switch(e){case _.Short:return(i>=0?"+":"")+M(a,2,s)+M(Math.abs(i%60),2,s);case _.ShortGMT:return"GMT"+(i>=0?"+":"")+M(a,1,s);case _.Long:return"GMT"+(i>=0?"+":"")+M(a,2,s)+":"+M(Math.abs(i%60),2,s);case _.Extended:return n===0?"Z":(i>=0?"+":"")+M(a,2,s)+":"+M(Math.abs(i%60),2,s);default:throw new Error(`Unknown zone width "${e}"`)}}}var zt=0,te=4;function Vt(e){let t=ne(e,zt,1).getDay();return ne(e,0,1+(t<=te?te:te+7)-t)}function Qe(e){let t=e.getDay(),r=t===0?-3:te-t;return ne(e.getFullYear(),e.getMonth(),e.getDate()+r)}function we(e,t=!1){return function(r,n){let i;if(t){let s=new Date(r.getFullYear(),r.getMonth(),1).getDay()-1,a=r.getDate();i=1+Math.floor((a+s)/7)}else{let s=Qe(r),a=Vt(s.getFullYear()),o=s.getTime()-a.getTime();i=1+Math.round(o/6048e5)}return M(i,e,se(n,L.MinusSign))}}function ee(e,t=!1){return function(r,n){let s=Qe(r).getFullYear();return M(s,e,se(n,L.MinusSign),t)}}var Fe={};function Gt(e){if(Fe[e])return Fe[e];let t;switch(e){case"G":case"GG":case"GGG":t=f(d.Eras,h.Abbreviated);break;case"GGGG":t=f(d.Eras,h.Wide);break;case"GGGGG":t=f(d.Eras,h.Narrow);break;case"y":t=y(l.FullYear,1,0,!1,!0);break;case"yy":t=y(l.FullYear,2,0,!0,!0);break;case"yyy":t=y(l.FullYear,3,0,!1,!0);break;case"yyyy":t=y(l.FullYear,4,0,!1,!0);break;case"Y":t=ee(1);break;case"YY":t=ee(2,!0);break;case"YYY":t=ee(3);break;case"YYYY":t=ee(4);break;case"M":case"L":t=y(l.Month,1,1);break;case"MM":case"LL":t=y(l.Month,2,1);break;case"MMM":t=f(d.Months,h.Abbreviated);break;case"MMMM":t=f(d.Months,h.Wide);break;case"MMMMM":t=f(d.Months,h.Narrow);break;case"LLL":t=f(d.Months,h.Abbreviated,w.Standalone);break;case"LLLL":t=f(d.Months,h.Wide,w.Standalone);break;case"LLLLL":t=f(d.Months,h.Narrow,w.Standalone);break;case"w":t=we(1);break;case"ww":t=we(2);break;case"W":t=we(1,!0);break;case"d":t=y(l.Date,1);break;case"dd":t=y(l.Date,2);break;case"c":case"cc":t=y(l.Day,1);break;case"ccc":t=f(d.Days,h.Abbreviated,w.Standalone);break;case"cccc":t=f(d.Days,h.Wide,w.Standalone);break;case"ccccc":t=f(d.Days,h.Narrow,w.Standalone);break;case"cccccc":t=f(d.Days,h.Short,w.Standalone);break;case"E":case"EE":case"EEE":t=f(d.Days,h.Abbreviated);break;case"EEEE":t=f(d.Days,h.Wide);break;case"EEEEE":t=f(d.Days,h.Narrow);break;case"EEEEEE":t=f(d.Days,h.Short);break;case"a":case"aa":case"aaa":t=f(d.DayPeriods,h.Abbreviated);break;case"aaaa":t=f(d.DayPeriods,h.Wide);break;case"aaaaa":t=f(d.DayPeriods,h.Narrow);break;case"b":case"bb":case"bbb":t=f(d.DayPeriods,h.Abbreviated,w.Standalone,!0);break;case"bbbb":t=f(d.DayPeriods,h.Wide,w.Standalone,!0);break;case"bbbbb":t=f(d.DayPeriods,h.Narrow,w.Standalone,!0);break;case"B":case"BB":case"BBB":t=f(d.DayPeriods,h.Abbreviated,w.Format,!0);break;case"BBBB":t=f(d.DayPeriods,h.Wide,w.Format,!0);break;case"BBBBB":t=f(d.DayPeriods,h.Narrow,w.Format,!0);break;case"h":t=y(l.Hours,1,-12);break;case"hh":t=y(l.Hours,2,-12);break;case"H":t=y(l.Hours,1);break;case"HH":t=y(l.Hours,2);break;case"m":t=y(l.Minutes,1);break;case"mm":t=y(l.Minutes,2);break;case"s":t=y(l.Seconds,1);break;case"ss":t=y(l.Seconds,2);break;case"S":t=y(l.FractionalSeconds,1);break;case"SS":t=y(l.FractionalSeconds,2);break;case"SSS":t=y(l.FractionalSeconds,3);break;case"Z":case"ZZ":case"ZZZ":t=Q(_.Short);break;case"ZZZZZ":t=Q(_.Extended);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":t=Q(_.ShortGMT);break;case"OOOO":case"ZZZZ":case"zzzz":t=Q(_.Long);break;default:return null}return Fe[e]=t,t}function et(e,t){e=e.replace(/:/g,"");let r=Date.parse("Jan 01, 1970 00:00:00 "+e)/6e4;return isNaN(r)?t:r}function Wt(e,t){return e=new Date(e.getTime()),e.setMinutes(e.getMinutes()+t),e}function Yt(e,t,r){let n=r?-1:1,i=e.getTimezoneOffset(),s=et(t,i);return Wt(e,n*(s-i))}function Zt(e){if(Ke(e))return e;if(typeof e=="number"&&!isNaN(e))return new Date(e);if(typeof e=="string"){if(e=e.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(e)){let[i,s=1,a=1]=e.split("-").map(o=>+o);return ne(i,s-1,a)}let r=parseFloat(e);if(!isNaN(e-r))return new Date(r);let n;if(n=e.match(Bt))return Kt(n)}let t=new Date(e);if(!Ke(t))throw new Error(`Unable to convert "${e}" into a date`);return t}function Kt(e){let t=new Date(0),r=0,n=0,i=e[8]?t.setUTCFullYear:t.setFullYear,s=e[8]?t.setUTCHours:t.setHours;e[9]&&(r=Number(e[9]+e[10]),n=Number(e[9]+e[11])),i.call(t,Number(e[1]),Number(e[2])-1,Number(e[3]));let a=Number(e[4]||0)-r,o=Number(e[5]||0)-n,c=Number(e[6]||0),u=Math.floor(parseFloat("0."+(e[7]||0))*1e3);return s.call(t,a,o,c,u),t}function Ke(e){return e instanceof Date&&!isNaN(e.valueOf())}function tt(e,t){t=encodeURIComponent(t);for(let r of e.split(";")){let n=r.indexOf("="),[i,s]=n==-1?[r,""]:[r.slice(0,n),r.slice(n+1)];if(i.trim()===t)return decodeURIComponent(s)}return null}function nt(e,t){return new Z(2100,!1)}var Ae=class{createSubscription(t,r){return me(()=>t.subscribe({next:r,error:n=>{throw n}}))}dispose(t){me(()=>t.unsubscribe())}},Ce=class{createSubscription(t,r){return t.then(r,n=>{throw n})}dispose(t){}},Xt=new Ce,Jt=new Ae,sr=(()=>{let t=class t{constructor(n){this._latestValue=null,this.markForCheckOnValueUpdate=!0,this._subscription=null,this._obj=null,this._strategy=null,this._ref=n}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(n){if(!this._obj){if(n)try{this.markForCheckOnValueUpdate=!1,this._subscribe(n)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return n!==this._obj?(this._dispose(),this.transform(n)):this._latestValue}_subscribe(n){this._obj=n,this._strategy=this._selectStrategy(n),this._subscription=this._strategy.createSubscription(n,i=>this._updateLatestValue(n,i))}_selectStrategy(n){if(ze(n))return Xt;if(Ve(n))return Jt;throw nt(t,n)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(n,i){n===this._obj&&(this._latestValue=i,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}};t.\u0275fac=function(i){return new(i||t)(V(pe,16))},t.\u0275pipe=ge({name:"async",type:t,pure:!1,standalone:!0});let e=t;return e})();var qt="mediumDate",Ht=new S(""),Qt=new S(""),or=(()=>{let t=class t{constructor(n,i,s){this.locale=n,this.defaultTimezone=i,this.defaultOptions=s}transform(n,i,s,a){if(n==null||n===""||n!==n)return null;try{let o=i??this.defaultOptions?.dateFormat??qt,c=s??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return xt(n,o,a||this.locale,c)}catch(o){throw nt(t,o.message)}}};t.\u0275fac=function(i){return new(i||t)(V(Ge,16),V(Ht,24),V(Qt,24))},t.\u0275pipe=ge({name:"date",type:t,pure:!0,standalone:!0});let e=t;return e})();var ar="browser",en="server";function ur(e){return e===en}var re=class{};var W=class{},ae=class{},k=class e{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?typeof t=="string"?this.lazyInit=()=>{this.headers=new Map,t.split(`
`).forEach(r=>{let n=r.indexOf(":");if(n>0){let i=r.slice(0,n),s=i.toLowerCase(),a=r.slice(n+1).trim();this.maybeSetNormalizedName(i,s),this.headers.has(s)?this.headers.get(s).push(a):this.headers.set(s,[a])}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((r,n)=>{this.setHeaderEntries(n,r)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([r,n])=>{this.setHeaderEntries(r,n)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();let r=this.headers.get(t.toLowerCase());return r&&r.length>0?r[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,r){return this.clone({name:t,value:r,op:"a"})}set(t,r){return this.clone({name:t,value:r,op:"s"})}delete(t,r){return this.clone({name:t,value:r,op:"d"})}maybeSetNormalizedName(t,r){this.normalizedNames.has(r)||this.normalizedNames.set(r,t)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(r=>{this.headers.set(r,t.headers.get(r)),this.normalizedNames.set(r,t.normalizedNames.get(r))})}clone(t){let r=new e;return r.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,r.lazyUpdate=(this.lazyUpdate||[]).concat([t]),r}applyUpdate(t){let r=t.name.toLowerCase();switch(t.op){case"a":case"s":let n=t.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(t.name,r);let i=(t.op==="a"?this.headers.get(r):void 0)||[];i.push(...n),this.headers.set(r,i);break;case"d":let s=t.value;if(!s)this.headers.delete(r),this.normalizedNames.delete(r);else{let a=this.headers.get(r);if(!a)return;a=a.filter(o=>s.indexOf(o)===-1),a.length===0?(this.headers.delete(r),this.normalizedNames.delete(r)):this.headers.set(r,a)}break}}setHeaderEntries(t,r){let n=(Array.isArray(r)?r:[r]).map(s=>s.toString()),i=t.toLowerCase();this.headers.set(i,n),this.maybeSetNormalizedName(t,i)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(r=>t(this.normalizedNames.get(r),this.headers.get(r)))}};var Se=class{encodeKey(t){return rt(t)}encodeValue(t){return rt(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}};function nn(e,t){let r=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(i=>{let s=i.indexOf("="),[a,o]=s==-1?[t.decodeKey(i),""]:[t.decodeKey(i.slice(0,s)),t.decodeValue(i.slice(s+1))],c=r.get(a)||[];c.push(o),r.set(a,c)}),r}var rn=/%(\d[a-f0-9])/gi,sn={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function rt(e){return encodeURIComponent(e).replace(rn,(t,r)=>sn[r]??t)}function oe(e){return`${e}`}var P=class e{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new Se,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=nn(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(r=>{let n=t.fromObject[r],i=Array.isArray(n)?n.map(oe):[oe(n)];this.map.set(r,i)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();let r=this.map.get(t);return r?r[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,r){return this.clone({param:t,value:r,op:"a"})}appendAll(t){let r=[];return Object.keys(t).forEach(n=>{let i=t[n];Array.isArray(i)?i.forEach(s=>{r.push({param:n,value:s,op:"a"})}):r.push({param:n,value:i,op:"a"})}),this.clone(r)}set(t,r){return this.clone({param:t,value:r,op:"s"})}delete(t,r){return this.clone({param:t,value:r,op:"d"})}toString(){return this.init(),this.keys().map(t=>{let r=this.encoder.encodeKey(t);return this.map.get(t).map(n=>r+"="+this.encoder.encodeValue(n)).join("&")}).filter(t=>t!=="").join("&")}clone(t){let r=new e({encoder:this.encoder});return r.cloneFrom=this.cloneFrom||this,r.updates=(this.updates||[]).concat(t),r}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":let r=(t.op==="a"?this.map.get(t.param):void 0)||[];r.push(oe(t.value)),this.map.set(t.param,r);break;case"d":if(t.value!==void 0){let n=this.map.get(t.param)||[],i=n.indexOf(oe(t.value));i!==-1&&n.splice(i,1),n.length>0?this.map.set(t.param,n):this.map.delete(t.param)}else{this.map.delete(t.param);break}}}),this.cloneFrom=this.updates=null)}};var Te=class{constructor(){this.map=new Map}set(t,r){return this.map.set(t,r),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}};function on(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function it(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function st(e){return typeof Blob<"u"&&e instanceof Blob}function ot(e){return typeof FormData<"u"&&e instanceof FormData}function an(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var G=class e{constructor(t,r,n,i){this.url=r,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase();let s;if(on(this.method)||i?(this.body=n!==void 0?n:null,s=i):s=n,s&&(this.reportProgress=!!s.reportProgress,this.withCredentials=!!s.withCredentials,s.responseType&&(this.responseType=s.responseType),s.headers&&(this.headers=s.headers),s.context&&(this.context=s.context),s.params&&(this.params=s.params),this.transferCache=s.transferCache),this.headers??=new k,this.context??=new Te,!this.params)this.params=new P,this.urlWithParams=r;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=r;else{let o=r.indexOf("?"),c=o===-1?"?":o<r.length-1?"&":"";this.urlWithParams=r+c+a}}}serializeBody(){return this.body===null?null:it(this.body)||st(this.body)||ot(this.body)||an(this.body)||typeof this.body=="string"?this.body:this.body instanceof P?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||ot(this.body)?null:st(this.body)?this.body.type||null:it(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof P?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(t={}){let r=t.method||this.method,n=t.url||this.url,i=t.responseType||this.responseType,s=t.body!==void 0?t.body:this.body,a=t.withCredentials!==void 0?t.withCredentials:this.withCredentials,o=t.reportProgress!==void 0?t.reportProgress:this.reportProgress,c=t.headers||this.headers,u=t.params||this.params,D=t.context??this.context;return t.setHeaders!==void 0&&(c=Object.keys(t.setHeaders).reduce((F,E)=>F.set(E,t.setHeaders[E]),c)),t.setParams&&(u=Object.keys(t.setParams).reduce((F,E)=>F.set(E,t.setParams[E]),u)),new e(r,n,s,{params:u,headers:c,context:D,reportProgress:o,responseType:i,withCredentials:a})}},$=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}($||{}),Y=class{constructor(t,r=de.Ok,n="OK"){this.headers=t.headers||new k,this.status=t.status!==void 0?t.status:r,this.statusText=t.statusText||n,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}},Ie=class e extends Y{constructor(t={}){super(t),this.type=$.ResponseHeader}clone(t={}){return new e({headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},ue=class e extends Y{constructor(t={}){super(t),this.type=$.Response,this.body=t.body!==void 0?t.body:null}clone(t={}){return new e({body:t.body!==void 0?t.body:this.body,headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},ce=class extends Y{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${t.url||"(unknown url)"}`:this.message=`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}},de=function(e){return e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableEntity=422]="UnprocessableEntity",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",e}(de||{});function ve(e,t){return{body:t,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,transferCache:e.transferCache}}var un=(()=>{let t=class t{constructor(n){this.handler=n}request(n,i,s={}){let a;if(n instanceof G)a=n;else{let u;s.headers instanceof k?u=s.headers:u=new k(s.headers);let D;s.params&&(s.params instanceof P?D=s.params:D=new P({fromObject:s.params})),a=new G(n,i,s.body!==void 0?s.body:null,{headers:u,context:s.context,params:D,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials,transferCache:s.transferCache})}let o=fe(a).pipe(Pe(u=>this.handler.handle(u)));if(n instanceof G||s.observe==="events")return o;let c=o.pipe(Le(u=>u instanceof ue));switch(s.observe||"body"){case"body":switch(a.responseType){case"arraybuffer":return c.pipe(z(u=>{if(u.body!==null&&!(u.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return u.body}));case"blob":return c.pipe(z(u=>{if(u.body!==null&&!(u.body instanceof Blob))throw new Error("Response is not a Blob.");return u.body}));case"text":return c.pipe(z(u=>{if(u.body!==null&&typeof u.body!="string")throw new Error("Response is not a string.");return u.body}));case"json":default:return c.pipe(z(u=>u.body))}case"response":return c;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(n,i={}){return this.request("DELETE",n,i)}get(n,i={}){return this.request("GET",n,i)}head(n,i={}){return this.request("HEAD",n,i)}jsonp(n,i){return this.request("JSONP",n,{params:new P().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,i={}){return this.request("OPTIONS",n,i)}patch(n,i,s={}){return this.request("PATCH",n,ve(s,i))}post(n,i,s={}){return this.request("POST",n,ve(s,i))}put(n,i,s={}){return this.request("PUT",n,ve(s,i))}};t.\u0275fac=function(i){return new(i||t)(C(W))},t.\u0275prov=v({token:t,factory:t.\u0275fac});let e=t;return e})();function cn(e,t){return t(e)}function dn(e,t,r){return(n,i)=>Ue(r,()=>t(n,s=>e(s,i)))}var Re=new S(""),ln=new S(""),hn=new S("");var at=(()=>{let t=class t extends W{constructor(n,i){super(),this.backend=n,this.injector=i,this.chain=null,this.pendingTasks=R(je);let s=R(hn,{optional:!0});this.backend=s??n}handle(n){if(this.chain===null){let s=Array.from(new Set([...this.injector.get(Re),...this.injector.get(ln,[])]));this.chain=s.reduceRight((a,o)=>dn(a,o,this.injector),cn)}let i=this.pendingTasks.add();return this.chain(n,s=>this.backend.handle(s)).pipe(Ne(()=>this.pendingTasks.remove(i)))}};t.\u0275fac=function(i){return new(i||t)(C(ae),C(xe))},t.\u0275prov=v({token:t,factory:t.\u0275fac});let e=t;return e})();var fn=/^\)\]\}',?\n/;function gn(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}var ut=(()=>{let t=class t{constructor(n){this.xhrFactory=n}handle(n){if(n.method==="JSONP")throw new Z(-2800,!1);let i=this.xhrFactory;return(i.\u0275loadImpl?_e(i.\u0275loadImpl()):fe(null)).pipe(Be(()=>new Oe(a=>{let o=i.build();if(o.open(n.method,n.urlWithParams),n.withCredentials&&(o.withCredentials=!0),n.headers.forEach((g,p)=>o.setRequestHeader(g,p.join(","))),n.headers.has("Accept")||o.setRequestHeader("Accept","application/json, text/plain, */*"),!n.headers.has("Content-Type")){let g=n.detectContentTypeHeader();g!==null&&o.setRequestHeader("Content-Type",g)}if(n.responseType){let g=n.responseType.toLowerCase();o.responseType=g!=="json"?g:"text"}let c=n.serializeBody(),u=null,D=()=>{if(u!==null)return u;let g=o.statusText||"OK",p=new k(o.getAllResponseHeaders()),U=gn(o)||n.url;return u=new Ie({headers:p,status:o.status,statusText:g,url:U}),u},F=()=>{let{headers:g,status:p,statusText:U,url:Me}=D(),A=null;p!==de.NoContent&&(A=typeof o.response>"u"?o.responseText:o.response),p===0&&(p=A?de.Ok:0);let he=p>=200&&p<300;if(n.responseType==="json"&&typeof A=="string"){let lt=A;A=A.replace(fn,"");try{A=A!==""?JSON.parse(A):null}catch(ht){A=lt,he&&(he=!1,A={error:ht,text:A})}}he?(a.next(new ue({body:A,headers:g,status:p,statusText:U,url:Me||void 0})),a.complete()):a.error(new ce({error:A,headers:g,status:p,statusText:U,url:Me||void 0}))},E=g=>{let{url:p}=D(),U=new ce({error:g,status:o.status||0,statusText:o.statusText||"Unknown Error",url:p||void 0});a.error(U)},x=!1,N=g=>{x||(a.next(D()),x=!0);let p={type:$.DownloadProgress,loaded:g.loaded};g.lengthComputable&&(p.total=g.total),n.responseType==="text"&&o.responseText&&(p.partialText=o.responseText),a.next(p)},j=g=>{let p={type:$.UploadProgress,loaded:g.loaded};g.lengthComputable&&(p.total=g.total),a.next(p)};return o.addEventListener("load",F),o.addEventListener("error",E),o.addEventListener("timeout",E),o.addEventListener("abort",E),n.reportProgress&&(o.addEventListener("progress",N),c!==null&&o.upload&&o.upload.addEventListener("progress",j)),o.send(c),a.next({type:$.Sent}),()=>{o.removeEventListener("error",E),o.removeEventListener("abort",E),o.removeEventListener("load",F),o.removeEventListener("timeout",E),n.reportProgress&&(o.removeEventListener("progress",N),c!==null&&o.upload&&o.upload.removeEventListener("progress",j)),o.readyState!==o.DONE&&o.abort()}})))}};t.\u0275fac=function(i){return new(i||t)(C(re))},t.\u0275prov=v({token:t,factory:t.\u0275fac});let e=t;return e})(),ct=new S(""),Dn="XSRF-TOKEN",pn=new S("",{providedIn:"root",factory:()=>Dn}),mn="X-XSRF-TOKEN",yn=new S("",{providedIn:"root",factory:()=>mn}),le=class{},En=(()=>{let t=class t{constructor(n,i,s){this.doc=n,this.platform=i,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=tt(n,this.cookieName),this.lastCookieString=n),this.lastToken}};t.\u0275fac=function(i){return new(i||t)(C(ie),C(De),C(pn))},t.\u0275prov=v({token:t,factory:t.\u0275fac});let e=t;return e})();function wn(e,t){let r=e.url.toLowerCase();if(!R(ct)||e.method==="GET"||e.method==="HEAD"||r.startsWith("http://")||r.startsWith("https://"))return t(e);let n=R(le).getToken(),i=R(yn);return n!=null&&!e.headers.has(i)&&(e=e.clone({headers:e.headers.set(i,n)})),t(e)}var dt=function(e){return e[e.Interceptors=0]="Interceptors",e[e.LegacyInterceptors=1]="LegacyInterceptors",e[e.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",e[e.NoXsrfProtection=3]="NoXsrfProtection",e[e.JsonpSupport=4]="JsonpSupport",e[e.RequestsMadeViaParent=5]="RequestsMadeViaParent",e[e.Fetch=6]="Fetch",e}(dt||{});function Fn(e,t){return{\u0275kind:e,\u0275providers:t}}function Ir(...e){let t=[un,ut,at,{provide:W,useExisting:at},{provide:ae,useExisting:ut},{provide:Re,useValue:wn,multi:!0},{provide:ct,useValue:!0},{provide:le,useClass:En}];for(let r of e)t.push(...r.\u0275providers);return ke(t)}function Rr(e){return Fn(dt.Interceptors,e.map(t=>({provide:Re,useValue:t,multi:!0})))}export{ye as a,ir as b,We as c,ie as d,be as e,vt as f,tt as g,sr as h,or as i,ar as j,ur as k,re as l,k as m,ce as n,un as o,Ir as p,Rr as q};
