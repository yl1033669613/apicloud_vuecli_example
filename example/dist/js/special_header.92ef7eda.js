(function(e){function t(t){for(var r,i,c=t[0],u=t[1],l=t[2],p=0,f=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={special_header:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var s=u;o.push([19,"chunk-vendors","chunk-common"]),n()})({19:function(e,t,n){e.exports=n("8148")},"5a84":function(e,t,n){},8148:function(e,t,n){"use strict";n.r(t);n("4045"),n("d9a3"),n("c9db"),n("de3e"),n("618d");var r=n("0261"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("navbar",{attrs:{title:e.title,back:e.back}},[n("div",{staticClass:"right-btn"},[e._v("按钮")]),n("div",{staticClass:"tabbar"},e._l(e.tabbar,(function(t,r){return n("div",{key:r,staticClass:"tabbar-item",class:{active:r===e.tabbarIdx},on:{click:function(t){return e.switchTabbar(r)}}},[n("span",[e._v(e._s(t))])])})),0)])],1)},o=[],i=n("9d8d"),c={name:"special_header",components:{Navbar:i["a"]},data:function(){return{pageName:"",title:"",back:!0,tabbar:["全部","推荐","视频信息","文字信息","音频信息"],tabbarIdx:0}},mounted:function(){var e=this,t=api.pageParam;e.title=t.title||"",e.back=t.back||!0,e.pageName=t.pageName,setTimeout((function(){e.$comm.openFrame(t.pageName,t),e.$comm.resizeFrame(t.pageName+"_frame",2)}),0)},methods:{switchTabbar:function(e){e!==this.tabbarIdx&&(this.tabbarIdx=e)}}},u=c,l=(n("9dfe"),n("623f")),s=Object(l["a"])(u,a,o,!1,null,null,null),p=s.exports,f=n("e688");Object(f["a"])(),r["a"].config.productionTip=!1;var d=-1!==window.navigator.userAgent.toLowerCase().indexOf("apicloud")||-1!==window.navigator.userAgent.toLowerCase().indexOf("mobile"),b=null;d?window.apiready=function(){b=new r["a"]({render:function(e){return e(p)}}).$mount("#app"),b.$nextTick((function(){b.$appPageReady()})),window.$vm=b.$children[0]}:b=new r["a"]({render:function(e){return e(p)}}).$mount("#app")},"9dfe":function(e,t,n){"use strict";var r=n("5a84"),a=n.n(r);a.a}});