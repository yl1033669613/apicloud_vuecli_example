(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{"23ab":function(e,t,n){},"568b":function(e,t,n){e.exports=n.p+"img/pos_ico.15c381ee.png"},6533:function(e,t,n){},7913:function(e,t,n){"use strict";var r=n("23ab"),a=n.n(r);a.a},"7ecb":function(e,t,n){"use strict";var r=n("6533"),a=n.n(r);a.a},"9d8d":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"c-linear-gradient"},[n("div",{staticClass:"inner"},[n("a",{staticClass:"back",class:{webback:e.isWeb},attrs:{back:e.back},on:{click:e.closeWin}}),n("span",{staticClass:"title text-ellipsis"},[e._v(e._s(e.title))])]),e._t("default")],2)},a=[],i={name:"page_header",props:{title:{type:String},back:{type:Boolean,default:!0},isWeb:{type:Boolean,default:!1}},methods:{closeWin:function(){this.$emit("tapback"),api.closeWin()}}},o=i,s=(n("7913"),n("623f")),c=Object(s["a"])(o,r,a,!1,null,"924c12c8",null);t["a"]=c.exports},bb3f:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"listloading"},[e.nodata&&e.loadend?n("div",{staticClass:"nodata"},[e._v(e._s(e.nodataText))]):n("div",{staticClass:"loading"},[e.loadend?e._e():n("div",{staticClass:"loading-ani"},[e._m(0)]),e._v(" "+e._s(e.loadend?e.loadendText:e.loadingText)+" ")])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sk-wave"},[n("div",{staticClass:"sk-wave-rect"}),n("div",{staticClass:"sk-wave-rect"}),n("div",{staticClass:"sk-wave-rect"}),n("div",{staticClass:"sk-wave-rect"}),n("div",{staticClass:"sk-wave-rect"})])}],i={name:"listloading",props:{loadingText:{type:String,default:"加载中..."},nodata:{type:Boolean,default:!1},nodataText:{type:String,default:"暂无数据"},loadendText:{type:String,default:"没有更多了"},loadend:{type:Boolean,default:!1}}},o=i,s=(n("7ecb"),n("623f")),c=Object(s["a"])(o,r,a,!1,null,"6f5e380d",null);t["a"]=c.exports},c428:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loading",style:{color:e.color}},[n("div",{staticClass:"loading-ani"},[n("div",{staticClass:"sk-wave"},[n("div",{staticClass:"sk-wave-rect",style:{background:e.color}}),n("div",{staticClass:"sk-wave-rect",style:{background:e.color}}),n("div",{staticClass:"sk-wave-rect",style:{background:e.color}}),n("div",{staticClass:"sk-wave-rect",style:{background:e.color}}),n("div",{staticClass:"sk-wave-rect",style:{background:e.color}})])]),e._v(" "+e._s(e.loadingText)+" ")])},a=[],i={name:"loading",props:{loadingText:{type:String,default:""},color:{type:String,default:"#b7c1b6"}}},o=i,s=(n("fbf0"),n("623f")),c=Object(s["a"])(o,r,a,!1,null,"3786c38c",null);t["a"]=c.exports},ced3:function(e,t,n){},d91f:function(e,t,n){var r;n("4045"),n("b3f9"),n("ec4a");var a=n("5185");(function(){"use strict";
/**
   * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
   *
   * @codingstandard ftlabs-jsv2
   * @copyright The Financial Times Limited [All Rights Reserved]
   * @license MIT License (see LICENSE.txt)
   */function i(e,t){var n;if(t=t||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=t.touchBoundary||10,this.layer=e,this.tapDelay=t.tapDelay||200,this.tapTimeout=t.tapTimeout||700,!i.notNeeded(e)){for(var r=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],a=this,o=0,c=r.length;o<c;o++)a[r[o]]=l(a[r[o]],a);s&&(e.addEventListener("mouseover",this.onMouse,!0),e.addEventListener("mousedown",this.onMouse,!0),e.addEventListener("mouseup",this.onMouse,!0)),e.addEventListener("click",this.onClick,!0),e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1),e.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,n,r){var a=Node.prototype.removeEventListener;"click"===t?a.call(e,t,n.hijacked||n,r):a.call(e,t,n,r)},e.addEventListener=function(t,n,r){var a=Node.prototype.addEventListener;"click"===t?a.call(e,t,n.hijacked||(n.hijacked=function(e){e.propagationStopped||n(e)}),r):a.call(e,t,n,r)}),"function"===typeof e.onclick&&(n=e.onclick,e.addEventListener("click",(function(e){n(e)}),!1),e.onclick=null)}function l(e,t){return function(){return e.apply(t,arguments)}}}var o=navigator.userAgent.indexOf("Windows Phone")>=0,s=navigator.userAgent.indexOf("Android")>0&&!o,c=/iP(ad|hone|od)/.test(navigator.userAgent)&&!o,l=c&&/OS 4_\d(_\d)?/.test(navigator.userAgent),u=c&&/OS [6-7]_\d/.test(navigator.userAgent),d=navigator.userAgent.indexOf("BB10")>0;i.prototype.needsClick=function(e){switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled)return!0;break;case"input":if(c&&"file"===e.type||e.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(e.className)},i.prototype.needsFocus=function(e){switch(e.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!s;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}},i.prototype.sendClick=function(e,t){var n,r;s&&document.activeElement&&document.activeElement!==e&&document.activeElement.blur(),r=t.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(e),!0,!0,window,1,r.screenX,r.screenY,r.clientX,r.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,e.dispatchEvent(n)},i.prototype.determineEventType=function(e){return s&&"select"===e.tagName.toLowerCase()?"mousedown":"click"},i.prototype.focus=function(e){var t;c&&e.setSelectionRange&&0!==e.type.indexOf("date")&&"time"!==e.type&&"month"!==e.type?(t=e.value.length,e.setSelectionRange(t,t),e.focus()):e.focus()},i.prototype.updateScrollParent=function(e){var t,n;if(t=e.fastClickScrollParent,!t||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n,e.fastClickScrollParent=n;break}n=n.parentElement}while(n)}t&&(t.fastClickLastScrollTop=t.scrollTop)},i.prototype.getTargetElementFromEventTarget=function(e){return e.nodeType===Node.TEXT_NODE?e.parentNode:e},i.prototype.onTouchStart=function(e){var t,n,r;if(e.targetTouches.length>1)return!0;if(t=this.getTargetElementFromEventTarget(e.target),n=e.targetTouches[0],c){var a=t.nodeName.toLowerCase();if("select"===a)return!1;if(r=window.getSelection(),r.rangeCount&&!r.isCollapsed)return!0;if(!l){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return e.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(t)}}return this.trackingClick=!0,this.trackingClickStart=e.timeStamp,this.targetElement=t,this.touchStartX=n.pageX,this.touchStartY=n.pageY,e.timeStamp-this.lastClickTime<this.tapDelay&&e.preventDefault(),!0},i.prototype.touchHasMoved=function(e){var t=e.changedTouches[0],n=this.touchBoundary;return Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n},i.prototype.onTouchMove=function(e){return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(e.target)||this.touchHasMoved(e))&&(this.trackingClick=!1,this.targetElement=null),!0)},i.prototype.findControl=function(e){return void 0!==e.control?e.control:e.htmlFor?document.getElementById(e.htmlFor):e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},i.prototype.onTouchEnd=function(e){var t,n,r,a,i,o=this.targetElement;if(!this.trackingClick)return!0;if(e.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(e.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=e.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,u&&(i=e.changedTouches[0],o=document.elementFromPoint(i.pageX-window.pageXOffset,i.pageY-window.pageYOffset)||o,o.fastClickScrollParent=this.targetElement.fastClickScrollParent),r=o.tagName.toLowerCase(),"label"===r){if(t=this.findControl(o),t){if(this.focus(o),s)return!1;o=t}}else if(this.needsFocus(o))return e.timeStamp-n>100||c&&window.top!==window&&"input"===r?(this.targetElement=null,!1):(this.focus(o),this.sendClick(o,e),c&&"select"===r||(this.targetElement=null,e.preventDefault()),c&&"input"===r||(this.targetElement=null,e.preventDefault()),c&&"textarea"===r||(this.targetElement=null,e.preventDefault()),!1);return!(!c||l||(a=o.fastClickScrollParent,!a||a.fastClickLastScrollTop===a.scrollTop))||(this.needsClick(o)||("input"!==r&&"textarea"!==r&&"label"!==r&&"select"!==r||("label"!==r&&"select"!==r||document.activeElement.blur(),e.preventDefault()),this.sendClick(o,e)),!1)},i.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},i.prototype.onMouse=function(e){return!this.targetElement||(!!e.forwardedTouchEvent||(!e.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(e.stopImmediatePropagation?e.stopImmediatePropagation():e.propagationStopped=!0,e.stopPropagation(),e.preventDefault(),!1))))},i.prototype.onClick=function(e){var t;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===e.target.type&&0===e.detail||(t=this.onMouse(e),t||(this.targetElement=null),t)},i.prototype.destroy=function(){var e=this.layer;s&&(e.removeEventListener("mouseover",this.onMouse,!0),e.removeEventListener("mousedown",this.onMouse,!0),e.removeEventListener("mouseup",this.onMouse,!0)),e.removeEventListener("click",this.onClick,!0),e.removeEventListener("touchstart",this.onTouchStart,!1),e.removeEventListener("touchmove",this.onTouchMove,!1),e.removeEventListener("touchend",this.onTouchEnd,!1),e.removeEventListener("touchcancel",this.onTouchCancel,!1)},i.notNeeded=function(e){var t,n,r,a;if("undefined"===typeof window.ontouchstart)return!0;if(n=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],n){if(!s)return!0;if(t=document.querySelector("meta[name=viewport]"),t){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(n>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(d&&(r=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),r[1]>=10&&r[2]>=3&&(t=document.querySelector("meta[name=viewport]"),t))){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===e.style.msTouchAction||"manipulation"===e.style.touchAction||(a=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],!!(a>=27&&(t=document.querySelector("meta[name=viewport]"),t&&(-1!==t.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth)))||("none"===e.style.touchAction||"manipulation"===e.style.touchAction))},i.attach=function(e,t){return new i(e,t)},"object"===a(n("621e"))&&n("621e")?(r=function(){return i}.call(t,n,t,e),void 0===r||(e.exports=r)):e.exports?(e.exports=i.attach,e.exports.FastClick=i):window.FastClick=i})()},e688:function(e,t,n){"use strict";n("d119"),n("86dd"),n("af82"),n("4045"),n("4423"),n("c354"),n("3a20"),n("b128"),n("b3f9"),n("7267"),n("ec4a"),n("d780"),n("9a14");var r=n("d9ba"),a=n("0261"),i=(n("d91f"),n("e90c"),n("f4a0"),n("3c4a"),n("3e5e"),{set:function(e,t){var n=t;t&&"object"===Object(r["a"])(t)&&(n=JSON.stringify(t)),api.setPrefs({key:e,val:n})},get:function(e){return api.getPrefs({sync:!0,key:e})},del:function(e){api.removePrefs({key:e})}});function o(e){return e&&e.length>10?e.substring(0,10):e}function s(e){return e<10?"0"+e:e}function c(e){"string"===typeof e?api.toast({msg:e,duration:3e3,location:"bottom"}):"object"===Object(r["a"])(e)&&api.toast({msg:e.msg||"",duration:e.duration||3e3,location:e.location||"bottom"})}function l(e,t,n){api.showProgress({title:e,text:t||"",modal:!!n})}function u(){api.hideProgress()}n("bebe");var d="http://localhost:8080",p="http://localhost:8080/resource",h={url:"",method:"post",dataType:"",timeout:30,headers:{Accept:"application/json"}},g={baseApiUrl:d,resourceUrl:p,ajax:function(e){var t=this,n={};if(n=Object.assign(n,h,e),!n.url)return api.alert({msg:"数据地址不正确"}),!1;n.url.lastIndexOf(".json")>-1&&(n.type="get"),n.url.match(/^(?:http|ftp|https):\/\//)||(n.url=t.baseApiUrl+n.url),n.data||(n.data={}),n.data.files||n.data.body||(n.headers=Object.assign(n.headers,{"Content-Type":"application/x-www-form-urlencoded; charset=utf-8"}));var r=i.get("token");return r&&!n.disableToken&&(n.headers=Object.assign(n.headers,{token:r})),new Promise((function(e,t){api.ajax({url:n.url,data:n.data,method:n.method,dataType:n.dataType,headers:n.headers,timeout:n.timeout},(function(n,r){if(n)if(200==n.code)e(n);else{if(u(),api.refreshHeaderLoadDone(),401==n.code)return c("登录已过期，请重新登录"),setTimeout((function(){api.closeToWin({name:"root",animation:{type:"none",duration:0}}),api.execScript({name:"root",script:"$vm.openLoginWhenTokenInvalid()"})}),700),t({errMsg:"登录已过期，请重新登录"});t(n)}else u(),api.refreshHeaderLoadDone(),c("请求失败"),t(r)}))}))}},f=g,m=window.document;t["a"]=function(){!function(e){function t(){e.document.documentElement.style.fontSize=e.document.documentElement.clientWidth/7.5+"px"}var n=null;e.addEventListener("resize",(function(){clearTimeout(n),n=setTimeout(t,10)}),!1),t()}(window),Date.prototype.format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var n in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),t)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[n]:("00"+t[n]).substr((""+t[n]).length)));return e};var e={baseApiUrl:f.baseApiUrl,resourceUrl:f.resourceUrl,setBaseUrl:function(e){return e?e.match(/^(?:http|ftp|https):\/\//)||e.indexOf("../")>-1?e:this.resourceUrl+e:""},testAndReqPermission:function(e){var t=["camera","contacts","contacts-r","contacts-w","microphone","photos","location","locationAlways","notification","calendar","calendar-r","calendar-w","phone","phone-call","phone-r","phone-r-log","phone-w-log","sensor","sms","sms-s","sms-r","storage","storage-r","storage-w"];return new Promise((function(n,r){var a=[],i=!0;if("string"===typeof e)i=-1!==t.indexOf(e),a.push(e);else{if(!Array.isArray(e)||!e.length)return r({errMsg:"权限参数异常"});for(var o=0;o<e.length;o++)a.push(e[o]),-1===t.indexOf(e[o])&&(i=!1)}if(i){var s=api.hasPermission({list:a}),c=[],l=[];s.forEach((function(e){e.granted?l.push(e):c.push(e.name)})),c.length?api.requestPermission({list:c,code:100001},(function(e,t){e?e.list.every((function(e){return e.granted}))&&n(e):r(t)})):n({list:l})}else r({errMsg:"存在无效授权项"})}))},resizeFrame:function(e,t){var n={x:0,y:0,w:api.winWidth,h:0};window.addEventListener("resize",(function(){var r=0,a=0,i=m.querySelector("header"),o=m.querySelector("#footer");switch(i&&(r=i.offsetHeight),o&&(a=o.offsetHeight),t){case 0:n.y=r,n.h=api.winHeight-r-a;break;case 1:n.h=api.winHeight;break;case 2:n.y=r,n.h=api.winHeight-r;break}0==t?api.setFrameGroupAttr({name:e,rect:n}):api.setFrameAttr({name:e,rect:n})}))},openWin:function(e,t){var n=t||{},r=e.pageParam||{pageName:e.name},a=e.headerName?e.headerName:"page_header";r.pageName=e.name;var i=api.windows();i.some((function(t){return t.name===e.name}))&&api.closeWin({name:e.name}),api.openTabLayout({name:e.name,url:"widget://".concat(a,".html"),reload:!0,slidBackEnabled:n.slidBackEnabled||!1,slidBackType:n.slidBackType||"edge",vScrollBarEnabled:n.vScrollBarEnabled||!1,hScrollBarEnabled:n.hScrollBarEnabled||!1,pageParam:r,bounces:n.bounces||!1,singleInstance:n.singleInstance||!1,bgColor:n.bgColor||"",delay:n.delay||0,animation:n.animation||{type:"movein",subType:"from_right",duration:400},scrollEnabled:n.scrollEnabled||!1})},openFrame:function(e,t,n){var r=n||{},a=0,i=m.querySelector("header");i&&(a=i.offsetHeight),api.openFrame({name:"".concat(e,"_frame"),url:"widget://".concat(e,".html"),pageParam:t,rect:r.rect||{x:0,y:a,w:api.winWidth,h:"auto"},bgColor:r.bgColor||"#ffffff",animation:r.animation||{type:"none"},bounces:r.bounces||!1,vScrollBarEnabled:r.vScrollBarEnabled||!1,hScrollBarEnabled:r.hScrollBarEnabled||!1,allowEdit:r.allowEdit||!1,reload:r.reload||!0,overScrollMode:r.overScrollMode||"scrolls"})},openPopFrame:function(e,t){var n={x:0,y:0,w:api.winWidth,h:api.winHeight};api.openFrame({name:"".concat(e,"_POPWIN"),url:"widget://".concat(e,".html"),pageParam:t,rect:n,animation:{type:"fade",duration:300},reload:!0}),this.resizeFrame(e,1)},keyBackToClosePop:function(){var e=api.frames(),t=e.filter((function(e){return/_POPWIN/.test(e.name)}));if(t.length){var n=t.reverse();return api.closeFrame({name:n[0].name}),!1}return!0},fnImageCache:function(e){var t=this;return new Promise((function(n,a){var i=e.datas,o=e.imgKey,s=0,c=e.timeout||3e4,l=function(){s===i.length&&n(i)};i&&i.length?i.forEach((function(e,n){var a="",u=Object(r["a"])(e);if("string"===u?a=t.setBaseUrl(e):o&&(a=t.setBaseUrl(e[o])),a){var d=setTimeout((function(){clearTimeout(d),d=null,s++,l()}),c);api.imageCache({url:a,thumbnail:!1},(function(t,r){d&&(clearTimeout(d),d=null,t.url&&("string"===u?i[n]=t.url:e[o]=t.url),s++,l())}))}else s++,l()})):a({errMsg:"缓存图片为空",opt:e})}))},pullUp:function(e){api.addEventListener({name:"scrolltobottom"},(function(t,n){e()}))},pullDown:function(e,t){api.setCustomRefreshHeaderInfo({bgColor:t||"#2b2c30",loadAnimInterval:45,image:{pull:["widget://res/refresh/1.png"],load:["widget://res/refresh/1.png","widget://res/refresh/2.png","widget://res/refresh/3.png","widget://res/refresh/4.png","widget://res/refresh/5.png","widget://res/refresh/6.png","widget://res/refresh/7.png","widget://res/refresh/8.png","widget://res/refresh/9.png","widget://res/refresh/10.png","widget://res/refresh/11.png","widget://res/refresh/12.png","widget://res/refresh/13.png","widget://res/refresh/14.png","widget://res/refresh/15.png","widget://res/refresh/16.png","widget://res/refresh/17.png","widget://res/refresh/18.png","widget://res/refresh/19.png","widget://res/refresh/20.png","widget://res/refresh/21.png","widget://res/refresh/22.png","widget://res/refresh/23.png","widget://res/refresh/24.png","widget://res/refresh/25.png","widget://res/refresh/26.png","widget://res/refresh/27.png","widget://res/refresh/28.png","widget://res/refresh/29.png","widget://res/refresh/30.png","widget://res/refresh/31.png","widget://res/refresh/32.png","widget://res/refresh/33.png","widget://res/refresh/34.png","widget://res/refresh/35.png","widget://res/refresh/36.png","widget://res/refresh/37.png","widget://res/refresh/38.png","widget://res/refresh/39.png","widget://res/refresh/40.png","widget://res/refresh/41.png","widget://res/refresh/42.png","widget://res/refresh/43.png","widget://res/refresh/44.png"]},isScale:!1},(function(){e()}))},openActionSelect:function(e,t){var n=api.require("UIActionSelector");return n.open({datas:e.datas,actives:e.actives,layout:{row:e.row||5,col:e.col||3,height:50,size:14,sizeActive:18,rowSpacing:0,colSpacing:0,maskBg:"rgba(0,0,0,0.65)",bg:"#f5f5f5",color:"#333",colorActive:"#97a38d",colorSelected:"#97a38d",leftMargin:20,rightMargin:20},animation:!0,cancel:{text:"取消",size:15,w:80,h:36,bg:"#e5e4e6",bgActive:"#e5e4e6",color:"#aaa6a7",colorActive:"#aaa6a7"},ok:{text:"确定",size:15,w:80,h:36,bg:"#97a38d",bgActive:"#7c8870",color:"#fff",colorActive:"#fff"},title:{text:"",size:12,h:50,bg:"#eee",color:"#222"},lineColor:"#ccc"},(function(e,r){e&&t&&t(e,n)})),n},openPhotoBrowser:function(e,t){var n=api.require("photoBrowser");return n.open({images:e.images||[],placeholderImg:"widget://res/placeH_pic.png",bgColor:e.bgColor||"#000",activeIndex:e.activeIndex||0,atime:.3},(function(e,r){t&&t(e,n)})),n},validForm:function(e,t){if(e&&t){for(var n in t){if(t[n].required&&!e[n])return c(t[n].message),!1;if(t[n].validFunc){var r=t[n].validFunc(e[n],(function(e){c(e)}));if(!r)return!1}}return!0}return!1}};function t(){api.parseTapmode();var e=m.querySelector("header");e&&(e.style.paddingTop=api.safeArea.top+"px")}a["a"].prototype.$appPageReady=function(e){api&&(t(),e&&e())},a["a"].prototype.$comm=e,a["a"].prototype.toast=c,a["a"].prototype.showProgress=l,a["a"].prototype.hideProgress=u,a["a"].prototype.setStorage=i.set,a["a"].prototype.getStorage=i.get,a["a"].prototype.rmStorage=i.del,a["a"].prototype.ajax=f.ajax,a["a"].prototype.superZero=s,a["a"].prototype.dateRemoveTime=o,a["a"].filter("setBaseUrl",e.setBaseUrl.bind(e)),a["a"].filter("superZero",s),a["a"].filter("dateRemoveTime",o)}},fbf0:function(e,t,n){"use strict";var r=n("ced3"),a=n.n(r);a.a}}]);