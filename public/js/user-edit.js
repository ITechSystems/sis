!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=59)}({0:function(t,e){t.exports=function(t,e,n,r){var o,i=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(o=t,i=t.default);var a="function"==typeof i?i.options:i;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),r){var s=Object.create(a.computed||null);Object.keys(r).forEach(function(t){var e=r[t];s[t]=function(){return e}}),a.computed=s}return{esModule:o,exports:i,options:a}}},1:function(t,e){window.axios.defaults.headers.common["X-CSRF-TOKEN"]=window.Laravel.csrfToken,window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",Vue.prototype.$http=window.axios,accounting.settings={currency:{symbol:"",format:"%s%v",decimal:".",thousand:",",precision:2},number:{precision:2,thousand:",",decimal:"."}},Vue.filter("diffForHumans",function(t){return moment(t).fromNow()}),Vue.filter("currency",function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e?accounting.formatMoney(t,{symbol:e,format:"%s %v"}):accounting.formatMoney(t,e)}),Vue.filter("number",function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return accounting.formatNumber(t,e)})},17:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=(n.n(r),n(40)),i=n.n(o);new Vue({components:{UserEdit:i.a},el:"#app"})},29:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(4);e.default={props:["attributes"],data:function(){return{form:new r.a({last_name:this.attributes.last_name,first_name:this.attributes.first_name,middle_name:this.attributes.middle_name,extension:this.attributes.extension,contact_number:this.attributes.contact_number,email:this.attributes.email,password:""}),message:""}},methods:{save:function(){var t=this;this.message="",this.form.patch("/users/"+this.attributes.id).then(function(e){t.message=e.message}).catch(function(t){})}}}},3:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function(){function t(){r(this,t),this.errors={}}return o(t,[{key:"get",value:function(t){if(this.errors[t])return this.errors[t][0]}},{key:"clear",value:function(t){if(!t)return void(this.errors={});delete this.errors[t]}},{key:"record",value:function(t){this.errors=t}},{key:"has",value:function(t){return!!this.errors[t]}},{key:"any",value:function(){return Object.keys(this.errors).length>0}}]),t}();e.a=i},4:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=n(3),i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=function(){function t(e){r(this,t),this.originalData=e;for(var n in e)this[n]=e[n];this.errors=new o.a}return i(t,[{key:"data",value:function(){var t={};for(var e in this.originalData)t[e]=this[e];return t}},{key:"reset",value:function(){for(var t in this.originalData)this[t]="";this.errors.clear()}},{key:"get",value:function(t){return this.submit("get",t)}},{key:"post",value:function(t){return this.submit("post",t)}},{key:"patch",value:function(t){return this.submit("patch",t)}},{key:"delete",value:function(t){return this.submit("delete",t)}},{key:"submit",value:function(t,e){var n=this;return new Promise(function(r,o){axios[t](e,n.data()).then(function(t){n.onSuccess(t.data),r(t.data)}).catch(function(t){n.onFail(t.response.data),o(t.response.data)})})}},{key:"onSuccess",value:function(t){this.errors.clear()}},{key:"onFail",value:function(t){this.errors.record(t)}}]),t}();e.a=u},40:function(t,e,n){var r=n(0)(n(29),null,null,null);t.exports=r.exports},59:function(t,e,n){t.exports=n(17)}});