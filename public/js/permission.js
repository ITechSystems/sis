!function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var i={};e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=59)}({0:function(t,e){t.exports=function(t,e,i,n){var o,s=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(o=t,s=t.default);var r="function"==typeof s?s.options:s;if(e&&(r.render=e.render,r.staticRenderFns=e.staticRenderFns),i&&(r._scopeId=i),n){var c=Object.create(r.computed||null);Object.keys(n).forEach(function(t){var e=n[t];c[t]=function(){return e}}),r.computed=c}return{esModule:o,exports:s,options:r}}},1:function(t,e){window.axios.defaults.headers.common["X-CSRF-TOKEN"]=window.Laravel.csrfToken,window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",Vue.prototype.$http=window.axios,accounting.settings={currency:{symbol:"",format:"%s%v",decimal:".",thousand:",",precision:2},number:{precision:2,thousand:",",decimal:"."}},Vue.filter("diffForHumans",function(t){return moment(t).fromNow()}),Vue.filter("currency",function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e?accounting.formatMoney(t,{symbol:e,format:"%s %v"}):accounting.formatMoney(t,e)}),Vue.filter("number",function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return accounting.formatNumber(t,e)})},14:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),o=(i.n(n),i(39)),s=i.n(o);new Vue({data:{roles:[],roleId:""},components:{PermissionModal:s.a},el:"#app",mounted:function(){this.getRoles()},methods:{getRoles:function(){var t=this;this.$http.get("/roles").then(function(e){t.roles=e.data.roles})}}})},2:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["id"]}},27:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(5),o=i.n(n);e.default={components:{Modal:o.a},props:["roleId"],data:function(){return{role:"",message:"",functionalities:[],permissions:[]}},mounted:function(){this.getPermissions()},methods:{checkBoxValue:function(t,e){return{permission_id:t,access:e}},getPermissions:function(){var t=this;this.$http.get("/permissions").then(function(e){t.permissions=e.data.permissions})},removeExistingFunction:function(t,e){var i=this.functionalities.find(function(i){return i.permission_id==t&&i.access!=e});i&&this.functionalities.splice(this.functionalities.indexOf(i),1)},save:function(){var t=this;this.$http.post("/roles/"+this.roleId+"/permissions",{functionalities:this.functionalities}).then(function(e){t.message=e.data.message})}},watch:{roleId:function(){var t=this;this.$http.get("/roles/"+this.roleId).then(function(e){t.role=e.data.role,t.role.permissions.forEach(function(e){t.functionalities.push({permission_id:e.pivot.permission_id,access:e.pivot.access})})})}}}},39:function(t,e,i){var n=i(0)(i(27),i(53),null,null);t.exports=n.exports},5:function(t,e,i){var n=i(0)(i(2),i(6),null,null);t.exports=n.exports},53:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("modal",{attrs:{id:"permission-modal"}},[i("h4",{staticClass:"modal-title",slot:"header"},[t._v("Functionalities")]),t._v(" "),t.message?i("div",{staticClass:"alert alert-success"},[t._v("\n        "+t._s(t.message)+"\n    ")]):t._e(),t._v(" "),i("div",[i("p",[t._v(t._s(t.role.name))]),t._v(" "),i("table",{staticClass:"table table-hover"},[i("thead",[i("tr",[i("th",[t._v("Functions")]),t._v(" "),i("th",[t._v("READ")]),t._v(" "),i("th",[t._v("READ/WRITE")])])]),t._v(" "),i("tbody",t._l(t.permissions,function(e){return i("tr",[i("td",[t._v(t._s(e.name))]),t._v(" "),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.functionalities,expression:"functionalities"}],attrs:{type:"checkbox"},domProps:{value:t.checkBoxValue(e.id,"READ"),checked:Array.isArray(t.functionalities)?t._i(t.functionalities,t.checkBoxValue(e.id,"READ"))>-1:t.functionalities},on:{click:function(i){t.removeExistingFunction(e.id,"READ")},__c:function(i){var n=t.functionalities,o=i.target,s=!!o.checked;if(Array.isArray(n)){var a=t.checkBoxValue(e.id,"READ"),r=t._i(n,a);s?r<0&&(t.functionalities=n.concat(a)):r>-1&&(t.functionalities=n.slice(0,r).concat(n.slice(r+1)))}else t.functionalities=s}}})]),t._v(" "),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.functionalities,expression:"functionalities"}],attrs:{type:"checkbox"},domProps:{value:t.checkBoxValue(e.id,"READ/WRITE"),checked:Array.isArray(t.functionalities)?t._i(t.functionalities,t.checkBoxValue(e.id,"READ/WRITE"))>-1:t.functionalities},on:{click:function(i){t.removeExistingFunction(e.id,"READ/WRITE")},__c:function(i){var n=t.functionalities,o=i.target,s=!!o.checked;if(Array.isArray(n)){var a=t.checkBoxValue(e.id,"READ/WRITE"),r=t._i(n,a);s?r<0&&(t.functionalities=n.concat(a)):r>-1&&(t.functionalities=n.slice(0,r).concat(n.slice(r+1)))}else t.functionalities=s}}})])])}))])]),t._v(" "),i("p",{staticClass:"footer-note",slot:"footer"},[i("span",[i("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){t.message=""}}},[t._v("Close")]),t._v(" "),i("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.save}},[t._v("Save")])])])])},staticRenderFns:[]}},59:function(t,e,i){t.exports=i(14)},6:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal fade",attrs:{id:t.id,role:"dialog"}},[i("div",{staticClass:"modal-dialog modal-lg"},[i("div",{staticClass:"modal-content"},[i("div",{staticClass:"modal-header"},[i("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"},slot:"header"},[t._v("×")]),t._v(" "),t._t("header")],2),t._v(" "),i("div",{staticClass:"modal-body"},[t._t("default")],2),t._v(" "),i("div",{staticClass:"modal-footer"},[t._t("footer")],2)])])])},staticRenderFns:[]}}});