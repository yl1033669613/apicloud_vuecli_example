(function(e){function t(t){for(var a,o,c=t[0],s=t[1],l=t[2],p=0,f=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},i={index:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;r.push([1,"chunk-vendors","chunk-common"]),n()})({1:function(e,t,n){e.exports=n("44eb")},"44eb":function(e,t,n){"use strict";n.r(t);n("c975"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex-wrap flex-vertical",attrs:{id:"wrap"},on:{touchmove:function(t){return e.handleRootPageScoll(t)}}},[n("header",{ref:"header"},[n("div",{staticClass:"inner"},e._l(e.tabs,(function(t,a){return n("span",{directives:[{name:"show",rawName:"v-show",value:e.active===a,expression:"active === idx"}],key:a,staticClass:"title"},[e._v(e._s(t.name))])})),0)]),n("div",{staticClass:"flex-con",attrs:{id:"main"}}),n("div",{ref:"footer",style:{paddingBottom:e.safeAreaBott+"px"},attrs:{id:"footer"}},[n("ul",{staticClass:"flex-wrap"},e._l(e.tabs,(function(t,a){return n("li",{key:a,staticClass:"flex-con",class:{active:a===e.active},on:{click:function(t){return e.switchTab(a)}}},[n("span",{style:{visibility:a!==e.active?"visible":"hidden",backgroundImage:"url("+t.normal+")"}}),n("span",{style:{visibility:a===e.active?"visible":"hidden",backgroundImage:"url("+t.active+")"}}),e._v(" "+e._s(t.name)+" ")])})),0)])])},r=[],o=(n("b0c0"),n("53ca")),c={name:"root",data:function(){return{active:0,title:"首页",tabs:[{page:"home",name:"首页",normal:"./image/tabbar/1.png",active:"./image/tabbar/1_ac.png"},{page:"profile",name:"我的",normal:"./image/tabbar/5.png",active:"./image/tabbar/5_ac.png"}],tokenInvalid:!1}},computed:{safeAreaBott:function(){var e=0;return"object"===("undefined"===typeof api?"undefined":Object(o["a"])(api))&&(e=api.safeArea.bottom),e}},mounted:function(){var e=this;e.ExitApp(),e.checkLoginState((function(t){t?(e.tokenInvalid=!1,api.setStatusBarStyle({style:"light"}),setTimeout((function(){e.initGroup()}),0)):e.openLoginRegFrame("login")}))},methods:{handleRootPageScoll:function(e){e.preventDefault()},ExitApp:function(){var e,t,n=this,a=0,i=null;api.addEventListener({name:"keyback"},(function(r,o){n.$comm.keyBackToClosePop()&&(0==a?(e=(new Date).getTime(),a=1,i=setTimeout((function(){a=0,clearTimeout(i)}),2e3),n.toast("再次操作退出")):1==a&&(t=(new Date).getTime(),t-e<2e3&&(clearTimeout(i),api.closeWidget({id:api.appId,retData:{name:"closeWidget"},silent:!0}))))}))},loginDone:function(){var e=this;e.tokenInvalid=!1,api.closeFrame({name:"login"}),api.setStatusBarStyle({style:"light"}),e.initGroup()},initGroup:function(){var e=this;api.closeFrameGroup({name:"group"});for(var t=[],n=e.tabs,a=0,i=n.length;a<i;a++)t.push({name:n[a].page,url:"widget://".concat(n[a].page,".html"),bgColor:"#ffffff",bounces:!0,vScrollBarEnabled:!1,hScrollBarEnabled:!1,scaleEnabled:!1,overScrollMode:"scrolls"});var r={x:0,y:e.$refs.header.offsetHeight,w:api.winWidth,h:api.winHeight-e.$refs.header.offsetHeight-e.$refs.footer.offsetHeight};e.$comm.resizeFrame("group",0),api.openFrameGroup({name:"group",scrollEnabled:!1,preload:0,rect:r,index:e.active,frames:t})},switchTab:function(e){var t=parseInt(e);this.active!=t&&(this.active=t,this.title=this.tabs[t].name,api.setFrameGroupIndex({name:"group",index:t}),this.resetFrameRect())},resetFrameRect:function(){var e=this;e.$nextTick((function(){api.setFrameGroupAttr({name:"group",rect:{x:0,y:e.$refs.header.offsetHeight,w:api.winWidth,h:api.winHeight-e.$refs.header.offsetHeight-e.$refs.footer.offsetHeight}})}))},checkLoginState:function(e){var t=this.getStorage("token");t?e&&e(!0):e&&e(!1)},openLoginRegFrame:function(e){api.setStatusBarStyle({style:"dark"}),this.$comm.openFrame(e,null,{rect:{x:0,y:0,w:api.winWidth,h:api.winHeight},animation:{type:"movein",subType:"from_right",duration:300}})},openLoginWhenTokenInvalid:function(){var e=this;e.tokenInvalid||(e.tokenInvalid=!0,setTimeout((function(){e.active=0,e.title=e.tabs[e.active].name,api.closeFrameGroup({name:"group"}),e.openLoginRegFrame("login")}),0))}}},s=c,l=(n("b297"),n("2877")),u=Object(l["a"])(s,i,r,!1,null,null,null),p=u.exports,f=n("e688");Object(f["a"])(),a["a"].config.productionTip=!1;var d=-1!==window.navigator.userAgent.toLowerCase().indexOf("apicloud"),m=null;d?window.apiready=function(){m=new a["a"]({render:function(e){return e(p)}}).$mount("#app"),m.$nextTick((function(){m.$appPageReady()})),window.$vm=m.$children[0]}:m=new a["a"]({render:function(e){return e(p)}}).$mount("#app")},"8e98":function(e,t,n){},b297:function(e,t,n){"use strict";var a=n("8e98"),i=n.n(a);i.a}});