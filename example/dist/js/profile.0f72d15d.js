(function(t){function a(a){for(var e,r,l=a[0],c=a[1],o=a[2],d=0,u=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&u.push(s[r][0]),s[r]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);p&&p(a);while(u.length)u.shift()();return n.push.apply(n,o||[]),i()}function i(){for(var t,a=0;a<n.length;a++){for(var i=n[a],e=!0,l=1;l<i.length;l++){var c=i[l];0!==s[c]&&(e=!1)}e&&(n.splice(a--,1),t=r(r.s=i[0]))}return t}var e={},s={profile:0},n=[];function r(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,a,i){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)r.d(i,e,function(a){return t[a]}.bind(null,e));return i},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=a,l=l.slice();for(var o=0;o<l.length;o++)a(l[o]);var p=c;n.push([17,"chunk-vendors","chunk-common"]),i()})({"011d":function(t,a,i){"use strict";var e=i("a8c1"),s=i.n(e);s.a},17:function(t,a,i){t.exports=i("d104")},a8c1:function(t,a,i){},cf05:function(t,a,i){t.exports=i.p+"img/logo.f5d32ebc.png"},d104:function(t,a,i){"use strict";i.r(a);i("4045"),i("d9a3"),i("c9db"),i("de3e"),i("618d");var e=i("0261"),s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"container",class:{fadeIn:t.aniAct}},[t._m(0),i("div",{staticClass:"card-group"},[i("div",{staticClass:"card no-pad-img"},[t.imgLoadFinished?t._e():i("span",[i("loading",{attrs:{color:"#ffffff"}})],1),i("transition",{attrs:{name:"fade"}},[i("img",{directives:[{name:"show",rawName:"v-show",value:t.imgLoadFinished,expression:"imgLoadFinished"}],attrs:{src:"https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture",alt:""},on:{load:t.loadImg}})])],1),i("div",{staticClass:"spt"},[t._v("· 信息 ·")]),i("div",{staticClass:"card bg-grd-1"},[i("p",{staticClass:"title"},[t._v("GITHUB")]),i("i",{staticClass:"link",on:{click:function(a){return t.openWeb("https://github.com/yl1033669613/apicloud_vuecli_app","apicloud_vuecli_app")}}},[t._v("https://github.com/yl1033669613/apicloud_vuecli_app")])]),t._m(1),i("div",{staticClass:"card bg-grd-3"},[t._v(" 静以修身，简以养德 ")]),i("div",{staticClass:"spt"},[t._v("· 简介 ·")]),t._m(2),t._m(3),t._m(4),i("div",{staticClass:"card bg-grd-1"},[i("p",{staticClass:"title"},[t._v("app 最佳实例")]),i("i",{staticClass:"link",on:{click:function(a){return t.openWeb("https://github.com/yl1033669613/apicloud_vuecli_app","apicloud_vuecli_example")}}},[t._v("https://github.com/yl1033669613/apicloud_vuecli_example/tree/master/example")])])])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"profile-top c-linear-gradient"},[e("div",{staticClass:"base-info"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:i("cf05"),alt:""}})]),e("div",{staticClass:"info-txt"},[e("p",{staticClass:"nickname"},[t._v("痕迹~")])])])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"card bg-grd-2"},[i("p",{staticClass:"title"},[t._v("邮箱")]),i("i",[t._v("1033669613@qq.com")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"card bg-grd-1"},[i("p",{staticClass:"title"},[t._v("APICloud + VueCLI3 = APP")]),i("p",[t._v("APICloud+VueCLI3 完美结合的模块化开发框架，快速构建apicloud APP")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"card bg-grd-2"},[i("p",{staticClass:"title"},[t._v("技术栈")]),t._v(" apicloud、apicloud模块、vuejs 2.x、VueCLI 3.x、webPark 4、Babel、scss(css预编译)、nodejs、npm ")])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"card bg-grd-3"},[i("p",{staticClass:"title"},[t._v("如何使用")]),i("p",{staticClass:"padd-l"},[i("span",[t._v("1.")]),t._v("创建APICloud项目（获取appId）")]),i("p",{staticClass:"padd-l"},[i("span",[t._v("2.")]),t._v("从 https://github.com/yl1033669613/apicloud_vuecli_app 克隆或下载项目到本地")]),i("p",{staticClass:"padd-l"},[i("span",[t._v("3.")]),t._v("请将项目中publish文件夹下config.xml文件里的appId改为您项目的appId(重要)")]),i("p",{staticClass:"padd-l"},[i("span",[t._v("4.")]),t._v("npm install （安装依赖）")]),i("p",{staticClass:"padd-l"},[i("span",[t._v("5.")]),t._v("npm run serve （运行开发模式同样会输出编译代码到dist）")]),i("p",{staticClass:"padd-l"},[i("i",[t._v("可以在浏览器中调试（模块，app接口除外）")])]),i("p",{staticClass:"padd-l"},[i("i",[t._v("Local: http://localhost:8080/your_pages.html")])]),i("p",{staticClass:"padd-l"},[i("i",[t._v("Network: http://192.168.0.1:8080/your_pages.html")])]),i("p",{staticClass:"padd-l"},[i("span",[t._v("6.")]),t._v("同步手机")]),i("p",{staticClass:"padd-l"},[i("i",[t._v("首先 npm run wifi-start 初始wifi连接")])]),i("p",{staticClass:"padd-l"},[i("i",[t._v("npm run wifi-sync wifi同步手机")])]),i("p",{staticClass:"padd-l"},[i("i",[t._v("npm run wifi-log wifi同步输出log信息。")])]),i("p",{staticClass:"padd-l"},[i("i",[t._v("开发模式下仍然编译代码到dist，所以可以用APICloud Studio 连接手机")])]),i("p",{staticClass:"padd-l"},[i("span",[t._v("7.")]),t._v("npm run build 输出编译代码到dist将编译代码上传APICloud，即可打包编译APICloud APP")]),i("p",{staticClass:"padd-l"},[i("span",[t._v("8.")]),t._v("请为您的项目添加以下模块 UIPullRefreshFlash(必须)、UIActionSelector(非必须)、photoBrowser(非必须)")]),i("p",{staticClass:"padd-l"},[i("span",[t._v("9.")]),t._v("app 必须包含根页面（root）作为初始页，默认root页为index，请在编程时确保index页存在，页面名字不可修改")])])}],r=i("c428"),l={name:"profile",components:{Loading:r["a"]},data:function(){return{aniAct:!1,imgLoadFinished:!1}},mounted:function(){var t=this;t.aniAct=!0,t.$comm.pullDown((function(){t.showProgress("请稍候..."),setTimeout((function(){t.hideProgress(),api.refreshHeaderLoadDone()}),1e3)}))},methods:{refreshAni:function(){this.aniAct=!1,setTimeout((function(){api.execScript({name:"root",script:"$vm.switchTabAtAniInit()"})}),0)},loadImg:function(){this.imgLoadFinished=!0},openWeb:function(t,a){this.$comm.openWin({name:a,pageParam:{title:a,webUrl:t}})}}},c=l,o=(i("011d"),i("623f")),p=Object(o["a"])(c,s,n,!1,null,null,null),d=p.exports,u=i("e688");Object(u["a"])(),e["a"].config.productionTip=!1;var v=-1!==window.navigator.userAgent.toLowerCase().indexOf("apicloud"),f=null;v?window.apiready=function(){f=new e["a"]({render:function(t){return t(d)}}).$mount("#app"),f.$nextTick((function(){f.$appPageReady()})),window.$vm=f.$children[0]}:f=new e["a"]({render:function(t){return t(d)}}).$mount("#app")}});