var r=function(e){return e[e.State=0]="State",e[e.Transition=1]="Transition",e[e.Sequence=2]="Sequence",e[e.Group=3]="Group",e[e.Animate=4]="Animate",e[e.Keyframes=5]="Keyframes",e[e.Style=6]="Style",e[e.Trigger=7]="Trigger",e[e.Reference=8]="Reference",e[e.AnimateChild=9]="AnimateChild",e[e.AnimateRef=10]="AnimateRef",e[e.Query=11]="Query",e[e.Stagger=12]="Stagger",e}(r||{}),p="*";function c(e,t){return{type:r.Trigger,name:e,definitions:t,options:{}}}function o(e,t=null){return{type:r.Animate,styles:t,timings:e}}function m(e,t=null){return{type:r.Sequence,steps:e,options:t}}function i(e){return{type:r.Style,styles:e,offset:null}}function f(e,t,s){return{type:r.State,name:e,styles:t,options:s}}function h(e,t,s=null){return{type:r.Transition,expr:e,animation:t,options:s}}var _=class{constructor(t=0,s=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._originalOnDoneFns=[],this._originalOnStartFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this._position=0,this.parentPlayer=null,this.totalTime=t+s}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}onStart(t){this._originalOnStartFns.push(t),this._onStartFns.push(t)}onDone(t){this._originalOnDoneFns.push(t),this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(t=>t()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(t){this._position=this.totalTime?t*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(t){let s=t=="start"?this._onStartFns:this._onDoneFns;s.forEach(n=>n()),s.length=0}},d=class{constructor(t){this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=t;let s=0,n=0,l=0,u=this.players.length;u==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(a=>{a.onDone(()=>{++s==u&&this._onFinish()}),a.onDestroy(()=>{++n==u&&this._onDestroy()}),a.onStart(()=>{++l==u&&this._onStart()})}),this.totalTime=this.players.reduce((a,y)=>Math.max(a,y.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}init(){this.players.forEach(t=>t.init())}onStart(t){this._onStartFns.push(t)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(t=>t()),this._onStartFns=[])}onDone(t){this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(t=>t.play())}pause(){this.players.forEach(t=>t.pause())}restart(){this.players.forEach(t=>t.restart())}finish(){this._onFinish(),this.players.forEach(t=>t.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(t=>t.destroy()),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this.players.forEach(t=>t.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(t){let s=t*this.totalTime;this.players.forEach(n=>{let l=n.totalTime?Math.min(1,s/n.totalTime):1;n.setPosition(l)})}getPosition(){let t=this.players.reduce((s,n)=>s===null||n.totalTime>s.totalTime?n:s,null);return t!=null?t.getPosition():0}beforeDestroy(){this.players.forEach(t=>{t.beforeDestroy&&t.beforeDestroy()})}triggerCallback(t){let s=t=="start"?this._onStartFns:this._onDoneFns;s.forEach(n=>n()),s.length=0}},g="!";var F=c("fadeInOut",[h(":enter",[i({opacity:0}),o(".2s ease",i({opacity:1}))]),h(":leave",[o(".2s ease",i({opacity:0}))])]),E=c("searchSlide",[h(":enter",[i({opacity:0,top:"-100px"}),o("200ms ease",i({opacity:1,top:0}))]),h(":leave",[i({opacity:1,top:0}),o("200ms ease",i({opacity:0,top:"-100px"}))])]),P=c("slideUpDown",[f("up",i({marginTop:"20dvh"})),f("down",i({marginTop:"100dvh"})),h("* => *",[o("0.4s ease")])]);export{r as a,p as b,m as c,i as d,_ as e,d as f,g,F as h,E as i,P as j};
