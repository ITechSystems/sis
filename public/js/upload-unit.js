!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=64)}({1:function(t,e){window.axios.defaults.headers.common["X-CSRF-TOKEN"]=window.Laravel.csrfToken,window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",Vue.prototype.$http=window.axios,accounting.settings={currency:{symbol:"",format:"%s%v",decimal:".",thousand:",",precision:2},number:{precision:2,thousand:",",decimal:"."}},Vue.filter("diffForHumans",function(t){return moment(t).fromNow()}),Vue.filter("currency",function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e?accounting.formatMoney(t,{symbol:e,format:"%s %v"}):accounting.formatMoney(t,e)}),Vue.filter("number",function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return accounting.formatNumber(t,e)})},29:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1);n.n(o);new Vue({data:{developer:"",units:[],phases:[]},el:"#app",ready:function(){this.photo_id&&alert(this.photo_id)},methods:{getUnits:function(t){var e=this;this.$http.get("/units/getBlockLots?developer="+t).then(function(t){e.units=t.data})},getZones:function(t){var e=this;this.$http.get("/units/getPhases?developer="+t).then(function(t){e.phases=t.data})}}})},64:function(t,e,n){t.exports=n(29)}});