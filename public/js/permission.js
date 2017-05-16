!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=54)}({0:function(t,e){t.exports=function(t,e,n,i){var r,o=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(r=t,o=t.default);var a="function"==typeof o?o.options:o;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),i){var c=Object.create(a.computed||null);Object.keys(i).forEach(function(t){var e=i[t];c[t]=function(){return e}}),a.computed=c}return{esModule:r,exports:o,options:a}}},1:function(t,e,n){(function(t){var e=n(2);window.axios.defaults.headers.common["X-CSRF-TOKEN"]=window.Laravel.csrfToken,window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",window.storagePath=function(){return e.dirname(t)+"../storage"},Vue.prototype.$http=window.axios,accounting.settings={currency:{symbol:"",format:"%s%v",decimal:".",thousand:",",precision:2},number:{precision:2,thousand:",",decimal:"."}},Vue.filter("diffForHumans",function(t){return moment(t).fromNow()}),Vue.filter("currency",function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e?accounting.formatMoney(t,{symbol:e,format:"%s %v"}):accounting.formatMoney(t,e)}),Vue.filter("number",function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return accounting.formatNumber(t,e)})}).call(e,"/")},16:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),r=(n.n(i),n(36)),o=n.n(r);new Vue({data:{roles:[],roleId:""},components:{PermissionModal:o.a},el:"#app",mounted:function(){this.getRoles()},methods:{getRoles:function(){var t=this;this.$http.get("/roles").then(function(e){t.roles=e.data.roles})}}})},2:function(t,e,n){(function(t){function n(t,e){for(var n=0,i=t.length-1;i>=0;i--){var r=t[i];"."===r?t.splice(i,1):".."===r?(t.splice(i,1),n++):n&&(t.splice(i,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function i(t,e){if(t.filter)return t.filter(e);for(var n=[],i=0;i<t.length;i++)e(t[i],i,t)&&n.push(t[i]);return n}var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,o=function(t){return r.exec(t).slice(1)};e.resolve=function(){for(var e="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var s=o>=0?arguments[o]:t.cwd();if("string"!=typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(e=s+"/"+e,r="/"===s.charAt(0))}return e=n(i(e.split("/"),function(t){return!!t}),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),o="/"===s(t,-1);return t=n(i(t.split("/"),function(t){return!!t}),!r).join("/"),t||r||(t="."),t&&o&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,n){function i(t){for(var e=0;e<t.length&&""===t[e];e++);for(var n=t.length-1;n>=0&&""===t[n];n--);return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var r=i(t.split("/")),o=i(n.split("/")),s=Math.min(r.length,o.length),a=s,c=0;c<s;c++)if(r[c]!==o[c]){a=c;break}for(var u=[],c=a;c<r.length;c++)u.push("..");return u=u.concat(o.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=o(t),n=e[0],i=e[1];return n||i?(i&&(i=i.substr(0,i.length-1)),n+i):"."},e.basename=function(t,e){var n=o(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){return o(t)[3]};var s="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(e,n(3))},27:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(7),r=n.n(i);e.default={components:{Modal:r.a},props:["roleId"],data:function(){return{role:"",message:"",functionalities:[],permissions:[]}},mounted:function(){this.getPermissions()},methods:{checkBoxValue:function(t,e){return{permission_id:t,access:e}},getPermissions:function(){var t=this;this.$http.get("/permissions").then(function(e){t.permissions=e.data.permissions})},removeExistingFunction:function(t,e){var n=this.functionalities.find(function(n){return n.permission_id==t&&n.access!=e});n&&this.functionalities.splice(this.functionalities.indexOf(n),1)},save:function(){var t=this;this.$http.post("/roles/"+this.roleId+"/permissions",{functionalities:this.functionalities}).then(function(e){t.message=e.data.message})}},watch:{roleId:function(){var t=this;this.$http.get("/roles/"+this.roleId).then(function(e){t.role=e.data.role,t.role.permissions.forEach(function(e){t.functionalities.push({permission_id:e.pivot.permission_id,access:e.pivot.access})})})}}}},3:function(t,e){function n(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function r(t){if(l===setTimeout)return setTimeout(t,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function o(t){if(f===clearTimeout)return clearTimeout(t);if((f===i||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function s(){v&&h&&(v=!1,h.length?m=h.concat(m):p=-1,m.length&&a())}function a(){if(!v){var t=r(s);v=!0;for(var e=m.length;e;){for(h=m,m=[];++p<e;)h&&h[p].run();p=-1,e=m.length}h=null,v=!1,o(t)}}function c(t,e){this.fun=t,this.array=e}function u(){}var l,f,d=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(t){l=n}try{f="function"==typeof clearTimeout?clearTimeout:i}catch(t){f=i}}();var h,m=[],v=!1,p=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];m.push(new c(t,e)),1!==m.length||v||r(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=u,d.addListener=u,d.once=u,d.off=u,d.removeListener=u,d.removeAllListeners=u,d.emit=u,d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},36:function(t,e,n){var i=n(0)(n(27),n(48),null,null);t.exports=i.exports},4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["id"]}},48:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("modal",{attrs:{id:"permission-modal"}},[n("h4",{staticClass:"modal-title",slot:"header"},[t._v("Functionalities")]),t._v(" "),t.message?n("div",{staticClass:"alert alert-success"},[t._v("\n        "+t._s(t.message)+"\n    ")]):t._e(),t._v(" "),n("div",[n("p",[t._v(t._s(t.role.name))]),t._v(" "),n("table",{staticClass:"table table-hover"},[n("thead",[n("tr",[n("th",[t._v("Functions")]),t._v(" "),n("th",[t._v("READ")]),t._v(" "),n("th",[t._v("READ/WRITE")])])]),t._v(" "),n("tbody",t._l(t.permissions,function(e){return n("tr",[n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.functionalities,expression:"functionalities"}],attrs:{type:"checkbox"},domProps:{value:t.checkBoxValue(e.id,"READ"),checked:Array.isArray(t.functionalities)?t._i(t.functionalities,t.checkBoxValue(e.id,"READ"))>-1:t.functionalities},on:{click:function(n){t.removeExistingFunction(e.id,"READ")},__c:function(n){var i=t.functionalities,r=n.target,o=!!r.checked;if(Array.isArray(i)){var s=t.checkBoxValue(e.id,"READ"),a=t._i(i,s);o?a<0&&(t.functionalities=i.concat(s)):a>-1&&(t.functionalities=i.slice(0,a).concat(i.slice(a+1)))}else t.functionalities=o}}})]),t._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.functionalities,expression:"functionalities"}],attrs:{type:"checkbox"},domProps:{value:t.checkBoxValue(e.id,"READ/WRITE"),checked:Array.isArray(t.functionalities)?t._i(t.functionalities,t.checkBoxValue(e.id,"READ/WRITE"))>-1:t.functionalities},on:{click:function(n){t.removeExistingFunction(e.id,"READ/WRITE")},__c:function(n){var i=t.functionalities,r=n.target,o=!!r.checked;if(Array.isArray(i)){var s=t.checkBoxValue(e.id,"READ/WRITE"),a=t._i(i,s);o?a<0&&(t.functionalities=i.concat(s)):a>-1&&(t.functionalities=i.slice(0,a).concat(i.slice(a+1)))}else t.functionalities=o}}})])])}))])]),t._v(" "),n("p",{staticClass:"footer-note",slot:"footer"},[n("span",[n("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){t.message=""}}},[t._v("Close")]),t._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.save}},[t._v("Save")])])])])},staticRenderFns:[]}},54:function(t,e,n){t.exports=n(16)},7:function(t,e,n){var i=n(0)(n(4),n(8),null,null);t.exports=i.exports},8:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal fade",attrs:{id:t.id,role:"dialog"}},[n("div",{staticClass:"modal-dialog modal-lg"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"},slot:"header"},[t._v("×")]),t._v(" "),t._t("header")],2),t._v(" "),n("div",{staticClass:"modal-body"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"modal-footer"},[t._t("footer")],2)])])])},staticRenderFns:[]}}});