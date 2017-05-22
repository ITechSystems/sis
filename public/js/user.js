!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=66)}([function(e,t){e.exports=function(e,t,n,r){var o,i=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(o=e,i=e.default);var a="function"==typeof i?i.options:i;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),r){var u=Object.create(a.computed||null);Object.keys(r).forEach(function(e){var t=r[e];u[e]=function(){return t}}),a.computed=u}return{esModule:o,exports:i,options:a}}},function(e,t){window.axios.defaults.headers.common["X-CSRF-TOKEN"]=window.Laravel.csrfToken,window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",Vue.prototype.$http=window.axios,accounting.settings={currency:{symbol:"",format:"%s%v",decimal:".",thousand:",",precision:2},number:{precision:2,thousand:",",decimal:"."}},Vue.filter("diffForHumans",function(e){return moment(e).fromNow()}),Vue.filter("currency",function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return t?accounting.formatMoney(e,{symbol:t,format:"%s %v"}):accounting.formatMoney(e,t)}),Vue.filter("number",function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return accounting.formatNumber(e,t)})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["id"]}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){r(this,e),this.errors={}}return o(e,[{key:"get",value:function(e){if(this.errors[e])return this.errors[e][0]}},{key:"clear",value:function(e){if(!e)return void(this.errors={});delete this.errors[e]}},{key:"record",value:function(e){this.errors=e}},{key:"has",value:function(e){return!!this.errors[e]}},{key:"any",value:function(){return Object.keys(this.errors).length>0}}]),e}();t.a=i},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=n(3),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(){function e(t){r(this,e),this.originalData=t;for(var n in t)this[n]=t[n];this.errors=new o.a}return i(e,[{key:"data",value:function(){var e={};for(var t in this.originalData)e[t]=this[t];return e}},{key:"reset",value:function(){for(var e in this.originalData)this[e]="";this.errors.clear()}},{key:"get",value:function(e){return this.submit("get",e)}},{key:"post",value:function(e){return this.submit("post",e)}},{key:"patch",value:function(e){return this.submit("patch",e)}},{key:"delete",value:function(e){return this.submit("delete",e)}},{key:"submit",value:function(e,t){var n=this;return new Promise(function(r,o){axios[e](t,n.data()).then(function(e){n.onSuccess(e.data),r(e.data)}).catch(function(e){n.onFail(e.response.data),o(e.response.data)})})}},{key:"onSuccess",value:function(e){this.errors.clear()}},{key:"onFail",value:function(e){this.errors.record(e)}}]),e}();t.a=s},function(e,t,n){var r=n(0)(n(2),n(6),null,null);e.exports=r.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal fade",attrs:{id:e.id,role:"dialog"}},[n("div",{staticClass:"modal-dialog modal-lg"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"},slot:"header"},[e._v("×")]),e._v(" "),e._t("header")],2),e._v(" "),n("div",{staticClass:"modal-body"},[e._t("default")],2),e._v(" "),n("div",{staticClass:"modal-footer"},[e._t("footer")],2)])])])},staticRenderFns:[]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{resource:{required:!0},primaryKey:{required:!0},text:{required:!1,default:'<i class="fa fa-fw fa-trash"></i>'}},data:function(){return{content:this.text,originalContent:this.text,loading:!1}},methods:{trash:function(){var e=this;confirm("Are you sure you want to DELETE?")&&(this.loading=!0,this.content='<i class="fa fa-spinner fa-pulse fa-fw"></i>',this.$http.delete("/"+this.resource+"/"+this.primaryKey).then(function(t){e.loading=!1,e.content=e.originalContent,e.$emit("deleted",t)}))}}}},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["searchables"],data:function(){return{searchColumn:this.searchables[0].column,searchTerm:""}},methods:{emitSearchValues:function(){this.$emit("searched",r({},this.searchColumn,this.searchTerm))}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["headers"],data:function(){return{currentColumn:"",previousColumn:"",direction:"desc"}},computed:{icon:function(){return"fa fa-sort-"+this.direction}},mounted:function(){this.currentColumn=this.headers[0].column,this.previousColumn=this.headers[0].column,this.emitCurrentSorting()},methods:{setOrder:function(e){this.previousColumn=this.currentColumn,this.currentColumn=e,this.previousColumn==this.currentColumn&&("desc"==this.direction?this.direction="asc":this.direction="desc"),this.emitCurrentSorting()},emitCurrentSorting:function(){this.$emit("sorted",{sort_by:this.currentColumn,direction:this.direction})}}}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(t){r(this,e),this.resource=t,this.sortBy="",this.direction="desc",this.filters=[]}return o(e,[{key:"add",value:function(e){if(!(arguments.length>1&&void 0!==arguments[1]&&arguments[1]))return this.filters=[],void this.filters.push(e)}},{key:"order",value:function(e){this.sortBy=e.sort_by,this.direction=e.direction}},{key:"clear",value:function(){}},{key:"has",value:function(e){var t=this;return!!this.filters.find(function(n){return e==t.key(n)})}},{key:"get",value:function(e){var t=this;return this.filters.find(function(n){return e==t.key(n)})}},{key:"apply",value:function(){var e=this;return new Promise(function(t,n){axios.get(e.url()).then(function(e){t(e)}).catch(function(e){n(e.response.data)})})}},{key:"url",value:function(){var e=this,t="";return this.filters.forEach(function(n){var r=e.key(n);n[r]&&(t+="&"+r+"="+n[r])}),"/"+this.resource+"?sort_by="+this.sortBy+"&direction="+this.direction+t}},{key:"key",value:function(e){return Object.keys(e)[0]}}]),e}();t.a=i},function(e,t,n){var r=n(0)(n(7),n(15),null,null);e.exports=r.exports},function(e,t,n){var r=n(0)(n(8),n(16),null,null);e.exports=r.exports},function(e,t,n){var r=n(0)(n(9),n(14),null,null);e.exports=r.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",e._l(e.headers,function(t){return n("th",[t.column?n("a",{attrs:{href:"#"},on:{click:function(n){e.setOrder(t.column)}}},[e._v(e._s(t.name))]):n("span",[e._v(e._s(t.name))]),e._v(" "),t.column==e.currentColumn?n("i",{class:e.icon}):e._e()])}))])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"btn btn-xs btn-danger",attrs:{type:"button",disabled:e.loading},on:{click:e.trash}},[e._t("text",[n("span",{domProps:{innerHTML:e._s(e.content)}})])],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"form-inline",on:{submit:function(t){t.preventDefault(),e.emitSearchValues(t)}}},[n("div",{staticClass:"form-group"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.searchColumn,expression:"searchColumn"}],staticClass:"form-control",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.searchColumn=t.target.multiple?n:n[0]}}},e._l(e.searchables,function(t){return t.column?n("option",{domProps:{value:t.column}},[e._v("\n                "+e._s(t.name)+"\n            ")]):e._e()}))]),e._v(" "),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchTerm,expression:"searchTerm"}],staticClass:"form-control",attrs:{type:"text",title:"Search Term"},domProps:{value:e.searchTerm},on:{input:function(t){t.target.composing||(e.searchTerm=t.target.value)}}})]),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"btn btn-md btn-default",attrs:{type:"submit"}},[n("i",{staticClass:"fa fa-search"}),e._v(" SEARCH\n    ")])}]}},,,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=(n.n(r),n(10)),i=n(49),s=n.n(i),a=n(13),u=n.n(a),c=n(12),l=n.n(c),f=n(11),d=n.n(f);new Vue({components:{UserModal:s.a,SortableHeader:u.a,Search:l.a,DeleteButton:d.a},data:{action:"",userId:"",users:[],headers:[{column:"id",name:"ID"},{column:"last_name",name:"Last Name"},{column:"first_name",name:"First Name"},{column:"middle_name",name:"Middle Name"},{column:"extension",name:"Extension"},{column:"mobile",name:"Mobile"},{column:"email",name:"Email"},{column:"",name:"Action"}],filter:new o.a("users")},el:"#app",methods:{editLink:function(e){return"/users/"+e+"/edit"},setForm:function(e,t){this.action=t,this.userId=e},addFilter:function(e){this.filter.add(e),this.applyFilter()},applyOrder:function(e){this.filter.order(e),this.applyFilter()},applyFilter:function(){var e=this;this.filter.apply().then(function(t){e.users=t.data.users})}}})},,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),o=n.n(r),i=n(4);t.default={components:{Modal:o.a},props:["userId","action"],data:function(){return{message:"",roles:[],form:new i.a({email:"",role_id:"1"})}},computed:{title:function(){return"create"==this.action?"ADD NEW USER":"edit"==this.action?"EDIT PROFILE OF USER # "+this.buyerId:"USER DETAILS"},requestType:function(){return"create"==this.action?"post":"patch"},url:function(){return"create"==this.action?"/users":"/users/"+this.userId}},mounted:function(){this.getRoles()},methods:{getRoles:function(){var e=this;this.$http.get("/roles").then(function(t){e.roles=t.data.roles})},save:function(){var e=this;this.form[this.requestType](this.url).then(function(t){e.$emit("saved"),e.message=t.message}).catch(function(e){})}},watch:{}}},,,,,,,,function(e,t,n){var r=n(0)(n(41),n(55),null,null);e.exports=r.exports},,,,,,function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("modal",{attrs:{id:"user-modal"}},[n("h4",{staticClass:"modal-title",slot:"header"},[e._v("\n        "+e._s(e.title)+"\n    ")]),e._v(" "),e.message?n("div",{staticClass:"alert alert-success"},[e._v("\n        "+e._s(e.message)+"\n    ")]):e._e(),e._v(" "),n("form",{staticClass:"container",attrs:{id:"userForm"},on:{submit:function(t){t.preventDefault(),e.save(t)},keydown:function(t){e.form.errors.clear(t.target.name)}}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"email"}},[e._v("Email Address")]),e._v(" "),e.form.errors.has("email")?n("span",{staticClass:"text-danger"},[e._v(e._s(e.form.errors.get("email")))]):e._e(),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{id:"email",type:"text",name:"email",required:"",autofocus:""},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||(e.form.email=t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"role_id"}},[e._v("Role")]),e._v(" "),e.form.errors.has("role_id")?n("span",{staticClass:"text-danger"},[e._v(e._s(e.form.errors.get("role_id")))]):e._e(),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.form.role_id,expression:"form.role_id"}],staticClass:"form-control",attrs:{id:"role_id",type:"role_id",name:"role_id",required:""},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.form.role_id=t.target.multiple?n:n[0]}}},e._l(e.roles,function(t){return n("option",{domProps:{value:t.id}},[e._v(e._s(t.name))])}))])])])]),e._v(" "),n("span",{slot:"footer"},[n("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(t){e.message=""}}},[e._v("Close")]),e._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:"show"!=e.action,expression:"action != 'show'"}],staticClass:"btn btn-primary",attrs:{type:"submit",form:"userForm",disabled:e.form.errors.any()}},[e._v("Save")])])])},staticRenderFns:[]}},,,,,,,,,,,function(e,t,n){e.exports=n(31)}]);