!function(t){function o(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}var a={};o.m=t,o.c=a,o.i=function(t){return t},o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:e})},o.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},o.p="",o(o.s=22)}([function(t,o){t.exports=function(t,o,a,e){var r,i=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(r=t,i=t.default);var n="function"==typeof i?i.options:i;if(o&&(n.render=o.render,n.staticRenderFns=o.staticRenderFns),a&&(n._scopeId=a),e){var l=Object.create(n.computed||null);Object.keys(e).forEach(function(t){var o=e[t];l[t]=function(){return o}}),n.computed=l}return{esModule:r,exports:i,options:n}}},function(t,o,a){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={props:["id"]}},function(t,o){window.axios.defaults.headers.common["X-CSRF-TOKEN"]=window.Laravel.csrfToken,window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",Vue.prototype.$http=window.axios,Vue.filter("diffForHumans",function(t){return moment(t).fromNow()}),accounting.settings={currency:{symbol:"",format:"%s%v",decimal:".",thousand:",",precision:2},number:{precision:2,thousand:",",decimal:"."}}},function(t,o,a){var e=a(0)(a(1),a(4),null,null);t.exports=e.exports},function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",{staticClass:"modal fade",attrs:{id:t.id,role:"dialog"}},[a("div",{staticClass:"modal-dialog modal-lg"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"},slot:"header"},[t._v("×")]),t._v(" "),t._t("header")],2),t._v(" "),a("div",{staticClass:"modal-body"},[t._t("default")],2),t._v(" "),a("div",{staticClass:"modal-footer"},[t._t("footer")],2)])])])},staticRenderFns:[]}},function(t,o,a){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=a(3),r=a.n(e);o.default={components:{Modal:r.a}}},function(t,o,a){"use strict";function e(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}var r=function(){function t(t,o){for(var a=0;a<o.length;a++){var e=o[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(o,a,e){return a&&t(o.prototype,a),e&&t(o,e),o}}(),i=function(){function t(){e(this,t),this.errors={}}return r(t,[{key:"get",value:function(t){if(this.errors[t])return this.errors[t][0]}},{key:"clear",value:function(t){if(!t)return void(this.errors={});delete this.errors[t]}},{key:"record",value:function(t){this.errors=t}},{key:"has",value:function(t){return!!this.errors[t]}},{key:"any",value:function(){return Object.keys(this.errors).length>0}}]),t}();o.a=i},function(t,o,a){"use strict";function e(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}var r=a(6),i=function(){function t(t,o){for(var a=0;a<o.length;a++){var e=o[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(o,a,e){return a&&t(o.prototype,a),e&&t(o,e),o}}(),s=function(){function t(o){e(this,t),this.originalData=o;for(var a in o)this[a]=o[a];this.errors=new r.a}return i(t,[{key:"data",value:function(){var t={};for(var o in this.originalData)t[o]=this[o];return t}},{key:"reset",value:function(){for(var t in this.originalData)this[t]="";this.errors.clear()}},{key:"get",value:function(t){return this.submit("get",t)}},{key:"post",value:function(t){return this.submit("post",t)}},{key:"patch",value:function(t){return this.submit("patch",t)}},{key:"delete",value:function(t){return this.submit("delete",t)}},{key:"submit",value:function(t,o){var a=this;return new Promise(function(e,r){axios[t](o,a.data()).then(function(t){a.onSuccess(t.data),e(t.data)}).catch(function(t){a.onFail(t.response.data),r(t.response.data)})})}},{key:"onSuccess",value:function(t){this.errors.clear()}},{key:"onFail",value:function(t){this.errors.record(t)}}]),t}();o.a=s},function(t,o,a){var e=a(0)(a(5),a(9),null,null);t.exports=e.exports},function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("modal",{attrs:{id:"aida-map-modal"}},[a("h4",{staticClass:"modal-title",slot:"header"},[t._v("AIDA Map")]),t._v(" "),a("div",{staticClass:"row"},[a("p",{staticClass:"heading"},[t._v("Developer's Information")]),t._v(" "),a("div",{staticClass:"col-md-12"},[a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("td",[t._v("Developer Name")]),t._v(" "),a("td",[t._v("Propery Company of Friends Inc.")])]),t._v(" "),a("tr",[a("td",[t._v("Project Name")]),t._v(" "),a("td",[t._v("Lancaster New City")])]),t._v(" "),a("tr",[a("td",[t._v("Location")]),t._v(" "),a("td",[t._v("Cavite")])]),t._v(" "),a("tr",[a("td",[t._v("Prepared By")]),t._v(" "),a("td",[t._v("Hervie Fajardo")])]),t._v(" "),a("tr",[a("td",[t._v("Contact No.")]),t._v(" "),a("td",[t._v("+63 917 872 0176")])]),t._v(" "),a("tr",[a("td",[t._v("Email")]),t._v(" "),a("td",[t._v("hervie.fajardo@gmail.com")])])])])])]),t._v(" "),a("div",{staticClass:"row"},[a("p",{staticClass:"heading"},[t._v("Buyer's Computations For")]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("td",[t._v("Ms. Annie Biglang Biliagad")])]),t._v(" "),a("tr",[a("td",[t._v("0917-4567890")])]),t._v(" "),a("tr",[a("td",[t._v("anniebiglabili@gmail.com")])]),t._v(" "),a("tr",[a("td",[t._v("Married")])]),t._v(" "),a("tr",[a("td",[t._v("Bank Financing")])]),t._v(" "),a("tr",[a("td",[t._v("OFW (Land-Based)")])]),t._v(" "),a("tr",[a("td",[t._v("Singapore")])]),t._v(" "),a("tr",[a("td",[t._v("Downpayment (Installment)")])])])])]),t._v(" "),a("div",{staticClass:"col-md-6"})]),t._v(" "),a("div",{staticClass:"row"},[a("p",{staticClass:"heading"},[t._v("Unit Details")]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("img",{staticClass:"unit-full",attrs:{src:"/img/user7-128x128.jpg",alt:""}})]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("td",[t._v("Block and Lot")]),t._v(" "),a("td",[t._v("SS11-1215")])]),t._v(" "),a("tr",[a("td",[t._v("Lot Area")]),t._v(" "),a("td",[t._v("98")])]),t._v(" "),a("tr",[a("td",[t._v("Lot Type")]),t._v(" "),a("td",[t._v("PC-8")])]),t._v(" "),a("tr",[a("td",[t._v("Floor Area")]),t._v(" "),a("td",[t._v("52")])]),t._v(" "),a("tr",[a("td",[t._v("House Model")]),t._v(" "),a("td",[t._v("Sophie")])]),t._v(" "),a("tr",[a("td",[t._v("Total Contract Price")]),t._v(" "),a("td",[t._v("3,060,320.00")])]),t._v(" "),a("tr",[a("td",[t._v("Reservation Fee")]),t._v(" "),a("td",[t._v("20, 000")])])])])])]),t._v(" "),a("div",{staticClass:"row"},[a("p",{staticClass:"heading"},[t._v("Map of the Subdivision")]),t._v(" "),a("div",{staticClass:"col-md-6 mb-20"},[a("img",{staticClass:"subdivision-full",attrs:{src:"/img/user7-128x128.jpg",alt:""}})]),t._v(" "),a("div",{staticClass:"col-md-6 mb-20"},[a("img",{staticClass:"subdivision-magnified",attrs:{src:"/img/user7-128x128.jpg",alt:""}})])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("p",{staticClass:"heading"},[t._v("Document Requirements For")]),t._v(" "),a("ul",{staticClass:"requirements"},[a("li",[t._v("3pcs. 1x1 ID Picture (Buyer, Spouse & Atty-in-Fact) w/ name & Unit ID at the back")]),t._v(" "),a("li",[t._v("2 Valid ID's with 3 specimen signature (Photocopy only) (Buyer & Spouse)")]),t._v(" "),a("li",[t._v("SSS, GSIS, Driver's License, Voter's, PRC, Passport")]),t._v(" "),a("li",[t._v("Postal ID's are allowed for AIF only (or unemployed spouse)")]),t._v(" "),a("li",[t._v("Passport - validity should not be expired (Buyer)")]),t._v(" "),a("li",[t._v("Must have date of arrival & departure")]),t._v(" "),a("li",[t._v("Residence Certificate for the Current Year (Cedula) (Spouse & Atty-In-Fact)")])])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("p",{staticClass:"heading"},[t._v("For Reservations, Contact Us At")]),t._v(" "),a("address",[a("h3",{staticClass:"name"},[t._v("Mr. Hervie Fajardo")]),t._v(" "),a("span",{staticClass:"mobile"},[t._v("Globe: +63 917 872 0176")]),t._v(" "),a("span",{staticClass:"mobile"},[t._v("Smart: +63 917 565 8645")]),t._v(" "),a("h5",[t._v("LANDLINE HOTLINES")]),t._v(" "),a("span",{staticClass:"telephone"},[t._v("Manila Telephone: (02) 256 6574")]),t._v(" "),a("span",{staticClass:"telephone"},[t._v("Cavite Telephone: (046) 440 6474")])]),t._v(" "),a("address",[a("p",{staticClass:"office"},[t._v("Main Office")]),t._v(" "),a("span",{staticClass:"barangay"},[t._v("55 Tinio St. Brgy. Addition Hills")]),t._v(" "),a("span",{staticClass:"city"},[t._v("Mandaluyong City")]),t._v(" "),a("span",{staticClass:"country"},[t._v("Philippines 1552")])]),t._v(" "),a("address",[a("p",{staticClass:"office"},[t._v("Branch Office")]),t._v(" "),a("span",{staticClass:"barangay"},[t._v("55 Gen. Aguinaldo Hi-way Brgy. Tanzang Luma")]),t._v(" "),a("span",{staticClass:"city"},[t._v("Imus City, Cavite")]),t._v(" "),a("span",{staticClass:"country"},[t._v("Philippines 4103")])])])]),t._v(" "),a("p",{staticClass:"footer-note",slot:"footer"},[t._v("\n        Date and time generated.\n        "),a("strong",[t._v("Price are subject to change without prior notice.")])])])},staticRenderFns:[]}},function(t,o,a){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=a(2),r=(a.n(e),a(18)),i=a.n(r),s=a(8),n=a.n(s);new Vue({components:{HorizontalFilters:i.a,AidaMapModal:n.a},data:{buyers:[],searchTerm:"",clientSearching:"",locations:[],units:[],result_count:0},el:"#app",mounted:function(){},methods:{getBuyers:function(){var t=this;this.$http.get("/buyers/all?search="+this.searchTerm).then(function(o){t.buyers=o.data})},displayResults:function(t){this.result_count=t.result_count,this.units=t.units,this.locations=t.locations},clearResults:function(){this.result_count=0,this.units="",this.locations=""}}})},,,,,,function(t,o,a){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=a(7);o.default={data:function(){return{form:new e.a({developer:"",location_horizontal:"",project_name_horizontal:"",block_horizontal:"",lot_horizontal:"",price_minimum_horizontal:"",price_maximum_horizontal:"",lot_area_min_horizontal:"",lot_area_max_horizontal:"",floor_area_min_horizontal:"",floor_area_max_horizontal:"",lot_type_horizontal:"",house_model_horizontal:""}),projects:[],units:[]}},mounted:function(){this.getLocations()},methods:{getLocations:function(){var t=this;this.$http.get("/units/locations").then(function(o){t.units=o.data.units})},getProjectsByLocation:function(t){var o=this;this.$http.get("/search/getProjectsByLocation?location="+t).then(function(t){o.projects=t.data})},reset:function(){this.form.reset(),this.$emit("reset")},searchUnits:function(){var t=this;this.form.post("/search/unit").then(function(o){t.$emit("search",o)})}}}},,function(t,o,a){var e=a(0)(a(16),a(20),null,null);t.exports=e.exports},,function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("form",{attrs:{action:"/search/unit",method:"POST"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-heading"},[t._v("Unit Search")]),t._v(" "),a("div",{staticClass:"panel-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"developer"}},[t._v("Developer")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.developer,expression:"form.developer"}],staticClass:"form-control",attrs:{type:"text",name:"developer",id:"developer"},domProps:{value:t.form.developer},on:{input:function(o){o.target.composing||(t.form.developer=o.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"developer"}},[t._v("Location")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.location_horizontal,expression:"form.location_horizontal"}],staticClass:"form-control",attrs:{name:"location_horizontal",id:"location_horizontal"},on:{change:[function(o){var a=Array.prototype.filter.call(o.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.form.location_horizontal=o.target.multiple?a:a[0]},function(o){t.getProjectsByLocation(t.form.location_horizontal)}]}},[a("option",{attrs:{value:""}},[t._v("From where")]),t._v(" "),t._l(t.units,function(o){return a("option",[t._v(t._s(o.location))])})],2)])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"project_name_horizontal"}},[t._v("Project Name")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.project_name_horizontal,expression:"form.project_name_horizontal"}],staticClass:"form-control",attrs:{name:"project_name_horizontal",id:"project_name_horizontal"},on:{change:function(o){var a=Array.prototype.filter.call(o.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.form.project_name_horizontal=o.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[t._v("Project")]),t._v(" "),t._l(t.projects,function(o){return a("option",{domProps:{value:o.project}},[t._v("@"+t._s(o.project))])})],2)])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"block_horizontal"}},[t._v("Block")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.block_horizontal,expression:"form.block_horizontal"}],staticClass:"form-control",attrs:{type:"text",name:"block_horizontal",id:"block_horizontal"},domProps:{value:t.form.block_horizontal},on:{input:function(o){o.target.composing||(t.form.block_horizontal=o.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"lot_horizontal"}},[t._v("Lot")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.lot_horizontal,expression:"form.lot_horizontal"}],staticClass:"form-control",attrs:{type:"text",name:"lot_horizontal",id:"lot_horizontal"},domProps:{value:t.form.lot_horizontal},on:{input:function(o){o.target.composing||(t.form.lot_horizontal=o.target.value)}}})])])])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"price_minimum"}},[t._v("Price")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.price_minimum_horizontal,expression:"form.price_minimum_horizontal"}],staticClass:"form-control",attrs:{name:"price_minimum_horizontal",id:"price_minimum_horizontal",placeholder:"Min"},domProps:{value:t.form.price_minimum_horizontal},on:{input:function(o){o.target.composing||(t.form.price_minimum_horizontal=o.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"price_maximum"}},[t._v(" ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.price_maximum_horizontal,expression:"form.price_maximum_horizontal"}],staticClass:"form-control",attrs:{name:"price_maximum_horizontal",id:"price_maximum_horizontal",placeholder:"Max"},domProps:{value:t.form.price_maximum_horizontal},on:{input:function(o){o.target.composing||(t.form.price_maximum_horizontal=o.target.value)}}})])])])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"lot_area_min"}},[t._v("Lot Area (sq. m)")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.lot_area_min_horizontal,expression:"form.lot_area_min_horizontal"}],staticClass:"form-control",attrs:{type:"text",name:"lot_area_min_horizontal",id:"lot_area_min_horizontal",placeholder:"Min"},domProps:{value:t.form.lot_area_min_horizontal},on:{input:function(o){o.target.composing||(t.form.lot_area_min_horizontal=o.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"lot_area_max"}},[t._v(" ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.lot_area_max_horizontal,expression:"form.lot_area_max_horizontal"}],staticClass:"form-control",attrs:{type:"text",name:"lot_area_max_horizontal",id:"lot_area_max_horizontal",placeholder:"Max"},domProps:{value:t.form.lot_area_max_horizontal},on:{input:function(o){o.target.composing||(t.form.lot_area_max_horizontal=o.target.value)}}})])])])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"floor_area_min"}},[t._v("Floor Area (sq. m)")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.floor_area_min_horizontal,expression:"form.floor_area_min_horizontal"}],staticClass:"form-control",attrs:{type:"text",name:"floor_area_min_horizontal",id:"floor_area_min_horizontal",placeholder:"Min"},domProps:{value:t.form.floor_area_min_horizontal},on:{input:function(o){o.target.composing||(t.form.floor_area_min_horizontal=o.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"floor_area_max"}},[t._v(" ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.floor_area_max_horizontal,expression:"form.floor_area_max_horizontal"}],staticClass:"form-control",attrs:{type:"text",name:"floor_area_max_horizontal",id:"floor_area_max_horizontal",placeholder:"Max"},domProps:{value:t.form.floor_area_max_horizontal},on:{input:function(o){o.target.composing||(t.form.floor_area_max_horizontal=o.target.value)}}})])])])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"lot_type_horizontal"}},[t._v("Lot Type")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.lot_type_horizontal,expression:"form.lot_type_horizontal"}],staticClass:"form-control",attrs:{type:"text",name:"lot_type_horizontal",id:"lot_type_horizontal"},domProps:{value:t.form.lot_type_horizontal},on:{input:function(o){o.target.composing||(t.form.lot_type_horizontal=o.target.value)}}})])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"house_model_horizontal"}},[t._v("House Model")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.house_model_horizontal,expression:"form.house_model_horizontal"}],staticClass:"form-control",attrs:{type:"text",name:"house_model_horizontal",id:"house_model_horizontal"},domProps:{value:t.form.house_model_horizontal},on:{input:function(o){o.target.composing||(t.form.house_model_horizontal=o.target.value)}}})])])])])])])]),t._v(" "),a("div",{staticClass:"row mb-20"},[a("div",{staticClass:"col-md-12 text-center"},[a("button",{staticClass:"btn btn-primary",on:{click:function(o){o.preventDefault(),t.searchUnits(o)}}},[t._v("SEARCH UNITS")]),t._v(" "),a("button",{staticClass:"btn btn-default",on:{click:function(o){o.preventDefault(),t.reset()}}},[t._v("RESET SEARCH")])])])])])},staticRenderFns:[]}},,function(t,o,a){t.exports=a(10)}]);