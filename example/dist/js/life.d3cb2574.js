(function(t){function a(a){for(var n,r,c=a[0],o=a[1],A=a[2],d=0,u=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);l&&l(a);while(u.length)u.shift()();return s.push.apply(s,A||[]),e()}function e(){for(var t,a=0;a<s.length;a++){for(var e=s[a],n=!0,c=1;c<e.length;c++){var o=e[c];0!==i[o]&&(n=!1)}n&&(s.splice(a--,1),t=r(r.s=e[0]))}return t}var n={},i={life:0},s=[];function r(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=n,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)r.d(e,n,function(a){return t[a]}.bind(null,n));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=a,c=c.slice();for(var A=0;A<c.length;A++)a(c[A]);var l=o;s.push([8,"chunk-vendors","chunk-common"]),e()})({"15db":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAA5klEQVR4Xu3Y0Q2DMAyEYVizW1TqGJW6BWsWMQD47WTFH69EcvL7nNi3b8O/ffj5NwAoYDgBJTBcAC5BJaAEhhNQAmkBfH6v/1PM7/uIJiUa7Do4ABSgBNwBLsEHAl6B1Z/BdN9RxYv3AdWG0v8BSBPvFo8CumUkvR8KSBPvFi+uAOOwcdg4bBw2DhuH7wnwA/gB2VYp3ghlj1dHA6BmtPYKClg7v/XpKKBmtPaKuAL4AfwAfgA/gB/AD+AH3BJY3hDp1lbFGyEAmhGggGYJiW+HAuLImwWkgGYJiW+HAuLImwUcr4ATcZtgQbLJ1O8AAAAASUVORK5CYII="},"69f5":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACBklEQVR4Xu2YP0iWURjFf2fOPYJ0MWgoatBokNqiqTFosKnJrcFJBHVyaAi3oKaaClpqaw0i2goSwkUUAp0NgoYjV77kszTvvX3Tvc+7fs95/pznnHvf9xOdP+p8foKAUEDnDIQFOhdAHIJhgbBA5wyEBToXQNwCYYGwQOcMhAU6F0DcAmGBsEDnDIQFOhfA37eA7UngCnAV+AB8lrQzSqJsjw1qpDq/gC/AuqQfI65zDpgCpoFPgxqbwzWOWMD2I2D+mCbWJD0cRXO2bwBPgYt/5NsCFiW9GFGd1O/jY3K9BmYl/Uy/HRJgOzUw/o/iu5LO/k9ztpeBpVNyrEhKcdWP7Q3gwikJLklaPyDA9kfgekbF6uZs3weeZ9RIITclvc+MPRJm+w1wJwP7VdJlZW5lON9tSe8yChyG2D6T/AdMZOK+Jd9K2suMPwizfQso6W0lEfAKuFtQaEHSakF8auza4BAqgc1ISodw9mP7JN+flONtImAbOJ9dBV5KulcQnwh4ADwrwQBzkp6UYGynA3S2APM9CAgL5F1N7R6C3V+Dv1fb9YvQEAn9vgoPkdDvx1DB/dlMaPwh0swqKwcJBVQS1wwsFNDMKisHCQVUEtcMLBTQzCorBwkFVBLXDCwU0MwqKwcJBVQS1wwsFNDMKisHCQVUEtcMLBTQzCorBwkFVBLXDGwf3rLeXQ42qmcAAAAASUVORK5CYII="},8:function(t,a,e){t.exports=e("bb41")},bb41:function(t,a,e){"use strict";e.r(a);e("4045"),e("d9a3"),e("c9db"),e("de3e"),e("618d");var n=e("0261"),i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"container",class:{fadeIn:t.aniAct}},[n("div",{staticClass:"bk-sec date-area"},[n("div",{staticClass:"hour-txt"},[n("span",[t._v(t._s(t.dateObj.hour)+":"+t._s(t.dateObj.min))])]),n("div",{staticClass:"second"},[n("div",{staticClass:"inner"},[n("span",[t._v(t._s(t.dateObj.second))])])]),n("div",{staticClass:"date-info"},[n("div",{staticClass:"world-date"},[n("div",{staticClass:"gc-day"},[t._v(t._s(t.dateObj.day))]),n("div",{staticClass:"ctn-right"},[n("div",{staticClass:"gc-year-month"},[n("img",{attrs:{src:e("15db"),alt:""}}),n("span",{staticClass:"dark-bg"},[t._v(t._s(t.dateObj.year)+"-"+t._s(t.dateObj.month)+"-"+t._s(t.dateObj.day))])]),n("div",{staticClass:"lc-date"},[n("img",{staticClass:"lc-ico",attrs:{src:e("15db"),alt:""}}),n("div",{staticClass:"dark-bg"},[n("span",{staticClass:"lc-day"},[t._v(t._s(t.dateObj.lunarMonth)+"月 "+t._s(t.dateObj.lunarDay))]),n("span",{staticClass:"lc-year"},[t._v(t._s(t.dateObj.lunarYear)+"年【"+t._s(t.dateObj.sx)+"年】")])])])])])]),n("div",{staticClass:"date-weather",on:{click:function(a){return t.$comm.openWin({name:"weather_det",pageParam:{title:"和风天气",webUrl:"https://widget-page.heweather.net/h5/index.html?bg=1&md=0123456&lc=accu&key=83237b03ce4040c68f7f59a857fb9867"}})}}},[n("img",{staticClass:"more",attrs:{src:e("69f5"),alt:""}}),n("div",{staticClass:"loc-txt"},[n("img",{attrs:{src:e("568b"),alt:""}}),t._v(" "+t._s(t.areaData.province||"--")+" "+t._s(t.areaData.city)+" "+t._s(t.areaData.district)+" ")]),n("div",{staticClass:"weather-ctn"},[n("img",{staticClass:"cond-icon",attrs:{src:"./image/cond-icon-heweather/"+t.weatherData.cond_code+".png",alt:""}}),n("div",{staticClass:"right"},[n("div",{staticClass:"now-whr-desc"},[t._v(" "+t._s(t.weatherData.cond_txt||"--")+" ")]),n("div",{staticClass:"now-tmp"},[t._v(" "+t._s(t.weatherData.tmp||"0")+" "),n("span",{staticClass:"ut-txt"},[t._v("℃")])]),n("div",{staticClass:"now-tmp"},[t._v(" 体感温度 "+t._s(t.weatherData.fl||"0")+" "),n("span",{staticClass:"ut-txt"},[t._v("℃")])])])])]),n("div",{staticClass:"view-img"},[t.imgLoadFinished?t._e():n("span",[n("loading",{attrs:{color:"#ffffff"}})],1),n("img",{style:{opacity:t.imgLoadFinished?1:0},attrs:{src:"https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture",alt:""},on:{load:function(a){return t.loadImg(!1)}}})]),n("div",{staticClass:"links-sec",on:{click:function(a){return t.$comm.openWin({name:"switching_news",headerName:"switching_news_header",pageParam:{title:"网易新闻·卡片"}})}}},[n("div",{staticClass:"more",on:{click:function(a){return a.stopPropagation(),t.toNewsPage(a)}}},[n("img",{attrs:{src:e("69f5"),alt:""}})]),n("div",{staticClass:"btn-news"},[t._v("NEWS")])]),n("div",{staticClass:"links-sec game",on:{click:function(a){return t.$comm.openWin({name:"game_det",headerName:"game_det_header",pageParam:{title:"COCOS CREATOR GAMES"}})}}},[n("div",{staticClass:"btn-news"},[t._v("GAME")])]),n("div",{staticClass:"right-camera",on:{click:t.openCamera}},[n("img",{attrs:{src:e("c0b1"),alt:""}})]),n("div",{staticClass:"view-img bgc-unpl"},[t.imgLoadFinished1?t._e():n("span",[n("loading",{attrs:{color:"#ffffff"}})],1),n("img",{style:{opacity:t.imgLoadFinished1?1:0},attrs:{src:"https://unsplash.it/960/540/?random",alt:""},on:{load:function(a){return t.loadImg(!0)}}})])])])},s=[],r=(e("1a8c"),e("b3f9"),e("3e5e"),e("54d0")),c=(e("7ae7"),e("c1b0"),[46423,27808,46416,86869,19872,42416,83315,21168,43432,59728,27296,44710,43856,19296,43748,42352,21088,62051,55632,23383,22176,38608,19925,19152,42192,54484,53840,54616,46400,46752,103846,38320,18864,43380,42160,45690,27216,27968,44870,43872,38256,19189,18800,25776,29859,59984,27480,21952,43872,38613,37600,51552,55636,54432,55888,30034,22176,43959,9680,37584,51893,43344,46240,47780,44368,21977,19360,42416,86390,21168,43312,31060,27296,44368,23378,19296,42726,42208,53856,60005,54576,23200,30371,38608,19195,19152,42192,118966,53840,54560,56645,46496,22224,21938,18864,42359,42160,43600,111189,27936,44448,84835,37744,18936,18800,25776,92326,59984,27424,108228,43744,41696,53987,51552,54615,54432,55888,23893,22176,42704,21972,21200,43448,43344,46240,46758,44368,21920,43940,42416,21168,45683,26928,29495,27296,44368,84821,19296,42352,21732,53600,59752,54560,55968,92838,22224,19168,43476,41680,53584,62034,54560]),o=["正","二","三","四","五","六","七","八","九","十","冬","腊"],A=["一","二","三","四","五","六","七","八","九","十","初","廿"],l=["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"],d=["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"],u=["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"];function g(t,a,e){t=parseInt(t),a=parseInt(a),e=parseInt(e),a-=1;for(var n,i,s,r=(Date.UTC(t,a,e)-Date.UTC(1949,0,29))/864e5+1,l=0;l<c.length;l++)if(r-=h(c[l]),r<=0){n=1949+l,r+=h(c[l]);break}for(var d=0;d<v(c[n-1949]).length;d++)if(r-=v(c[n-1949])[d],r<=0){i=f(c[n-1949])&&f(c[n-1949])<=d?f(c[n-1949])<d?d:f(c[n-1949])===d?"闰"+d:d+1:d+1,r+=v(c[n-1949])[d];break}s=r,i=f(c[n-1949])&&"string"===typeof i&&i.indexOf("闰")>-1?"闰".concat(o[/\d/.exec(i)-1]):o[i-1];var u=b(n);return n=m(n)+w(n),s<11?s="".concat(A[10]).concat(A[s-1]):s>10&&s<20?s="".concat(A[9]).concat(A[s-11]):20===s?s="".concat(A[1]).concat(A[9]):s>20&&s<30?s="".concat(A[11]).concat(A[s-21]):30===s&&(s="".concat(A[2]).concat(A[9])),{lunarYear:n,lunarMonth:i,lunarDay:s,sx:u}}function f(t){return!!(15&t)&&15&t}function p(t){return f(t)?983040&t?30:29:0}function h(t){for(var a=0,e=32768;e>8;e>>=1){var n=t&e?30:29;a+=n}return f(t)&&(a+=p(t)),a}function v(t){for(var a=[],e=32768;e>8;e>>=1)a.push(t&e?30:29);return f(t)&&a.splice(f(t),0,p(t)),a}function m(t){var a=(t-3)%10;return 0===a&&(a=10),l[a-1]}function w(t){var a=(t-3)%12;return 0===a&&(a=12),d[a-1]}function b(t){var a=(t-3)%12;return 0===a&&(a=12),u[a-1]}var C=g,k=e("c428"),y={name:"life",components:{Loading:k["a"]},data:function(){return{aniAct:!1,map:null,lon:0,lat:0,dateObj:{year:"",mounth:"",day:"",lunarMonth:"",lunarYear:"",lunarDay:"",sx:"",hour:"00",min:"00",second:"00"},timer:null,areaData:{},weatherData:{},imgLoadFinished:!1,imgLoadFinished1:!1}},created:function(){var t=this;t.aniAct=!0,t.initMap(),t.$comm.pullDown((function(){t.showProgress("请稍后..."),t.initMap()})),t.initDate(),t.initTime()},methods:{initDate:function(){var t=(new Date).format("yyyy-MM-dd").split("-");this.dateObj.year=t[0],this.dateObj.month=t[1],this.dateObj.day=t[2],this.dateObj=Object.assign(this.dateObj,C.apply(void 0,Object(r["a"])(t)))},initTime:function(){var t=this,a=function(){var a=new Date;t.dateObj.second=t.$comm.superZero(a.getSeconds());var e=a.getHours(),n=a.getMinutes(),i=a.getFullYear(),s=a.getMonth()+1,r=a.getDate();parseInt(t.dateObj.min)!==n&&(t.dateObj.min=t.$comm.superZero(n)),parseInt(t.dateObj.hour)!==e&&(t.dateObj.hour=t.$comm.superZero(e)),parseInt(t.dateObj.day)===r&&parseInt(t.dateObj.month)===s&&parseInt(t.dateObj.year)===i||t.initDate()};a(),t.timer=setInterval(a,1e3)},initMap:function(){var t=this;t.$comm.testAndReqPermission("location").then((function(a){t.map=api.require("bMap"),"ios"===api.systemType?t.map.initMapSDK((function(a){a.status&&t.getLoac()})):t.getLoac()})).catch((function(a){api.refreshHeaderLoadDone(),t.hideProgress()}))},refreshAni:function(){this.aniAct=!1,setTimeout((function(){api.execScript({name:"root",script:"$vm.switchTabAtAniInit()"})}),0)},getLoac:function(){var t=this;t.map.getLocation({accuracy:"10m"},(function(a,e){a&&a.status?(t.lon=a.lon,t.lat=a.lat,t.getlocaArea()):(api.refreshHeaderLoadDone(),t.hideProgress(),console.log(JSON.stringify(e)),t.toast("获取位置失败，请检查是否开启定位。"))}))},getlocaArea:function(){var t=this;t.map.getNameFromCoords({lon:t.lon,lat:t.lat},(function(a,e){t.hideProgress(),api.refreshHeaderLoadDone(),a&&a.status?(t.areaData=a,t.getWeather(a.city)):console.log(JSON.stringify(e))}))},getWeather:function(t){var a=this;api.ajax({url:"https://free-api.heweather.net/s6/weather/now?location=".concat(t,"&key=8fab1a9d7f6a4bc4b7e7f9b589bcd493"),method:"get"},(function(t,e){t?a.weatherData=t.HeWeather6[0].now:console.log(JSON.stringify(t))}))},loadImg:function(t){t?this.imgLoadFinished1=!0:this.imgLoadFinished=!0},openCamera:function(){this.$comm.testAndReqPermission("camera").then((function(t){api.getPicture({sourceType:"camera",encodingType:"jpg",mediaValue:"pic",destinationType:"url",quality:100,saveToPhotoAlbum:!1})}))},toNewsPage:function(){api.execScript({name:"root",script:"$vm.switchTab(1); $vm.menuVis = true"})}}},D=y,B=(e("bb60"),e("623f")),O=Object(B["a"])(D,i,s,!1,null,null,null),S=O.exports,Q=e("e688");Object(Q["a"])(),n["a"].config.productionTip=!1;var j=-1!==window.navigator.userAgent.toLowerCase().indexOf("apicloud"),P=null;j?window.apiready=function(){P=new n["a"]({render:function(t){return t(S)}}).$mount("#app"),P.$nextTick((function(){P.$appPageReady()})),window.$vm=P.$children[0]}:P=new n["a"]({render:function(t){return t(S)}}).$mount("#app")},bb60:function(t,a,e){"use strict";var n=e("cb28"),i=e.n(n);i.a},c0b1:function(t,a){t.exports="data:image/png;base64,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"},cb28:function(t,a,e){}});