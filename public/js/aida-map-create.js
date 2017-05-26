!function(t){function e(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var o={};e.m=t,e.c=o,e.i=function(t){return t},e.d=function(t,o,a){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:a})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=61)}([function(t,e){t.exports=function(t,e,o,a){var n,i=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(n=t,i=t.default);var s="function"==typeof i?i.options:i;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),o&&(s._scopeId=o),a){var l=Object.create(s.computed||null);Object.keys(a).forEach(function(t){var e=a[t];l[t]=function(){return e}}),s.computed=l}return{esModule:n,exports:i,options:s}}},function(t,e){window.axios.defaults.headers.common["X-CSRF-TOKEN"]=window.Laravel.csrfToken,window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",Vue.prototype.$http=window.axios,accounting.settings={currency:{symbol:"",format:"%s%v",decimal:".",thousand:",",precision:2},number:{precision:2,thousand:",",decimal:"."}},Vue.filter("diffForHumans",function(t){return moment(t).fromNow()}),Vue.filter("currency",function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e?accounting.formatMoney(t,{symbol:e,format:"%s %v"}):accounting.formatMoney(t,e)}),Vue.filter("number",function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return accounting.formatNumber(t,e)})},function(t,e,o){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var n=function(){function t(t,e){for(var o=0;o<e.length;o++){var a=e[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,o,a){return o&&t(e.prototype,o),a&&t(e,a),e}}(),i=function(){function t(){a(this,t),this.errors={}}return n(t,[{key:"get",value:function(t){if(this.errors[t])return this.errors[t][0]}},{key:"clear",value:function(t){if(!t)return void(this.errors={});delete this.errors[t]}},{key:"record",value:function(t){this.errors=t}},{key:"has",value:function(t){return!!this.errors[t]}},{key:"any",value:function(){return Object.keys(this.errors).length>0}}]),t}();e.a=i},function(t,e,o){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var n=o(2),i=function(){function t(t,e){for(var o=0;o<e.length;o++){var a=e[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,o,a){return o&&t(e.prototype,o),a&&t(e,a),e}}(),r=function(){function t(e){a(this,t),this.originalData=e;for(var o in e)this[o]=e[o];this.errors=new n.a}return i(t,[{key:"data",value:function(){var t={};for(var e in this.originalData)t[e]=this[e];return t}},{key:"reset",value:function(){for(var t in this.originalData)this[t]="";this.errors.clear()}},{key:"get",value:function(t){return this.submit("get",t)}},{key:"post",value:function(t){return this.submit("post",t)}},{key:"patch",value:function(t){return this.submit("patch",t)}},{key:"delete",value:function(t){return this.submit("delete",t)}},{key:"submit",value:function(t,e){var o=this;return new Promise(function(a,n){axios[t](e,o.data()).then(function(t){o.onSuccess(t.data),a(t.data)}).catch(function(t){o.onFail(t.response.data),n(t.response.data)})})}},{key:"onSuccess",value:function(t){this.errors.clear()}},{key:"onFail",value:function(t){this.errors.record(t)}}]),t}();e.a=r},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["id"]}},function(t,e,o){var a=o(0)(o(4),o(6),null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal fade",attrs:{id:t.id,role:"dialog"}},[o("div",{staticClass:"modal-dialog modal-lg"},[o("div",{staticClass:"modal-content"},[o("div",{staticClass:"modal-header"},[o("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"},slot:"header"},[t._v("×")]),t._v(" "),t._t("header")],2),t._v(" "),o("div",{staticClass:"modal-body"},[t._t("default")],2),t._v(" "),o("div",{staticClass:"modal-footer"},[t._t("footer")],2)])])])},staticRenderFns:[]}},,,,,,,,,,,,function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(3);e.default={data:function(){return{form:new a.a({developer:"",location_horizontal:"",project_name_horizontal:"",block_horizontal:"",lot_horizontal:"",price_minimum_horizontal:"",price_maximum_horizontal:"",lot_area_min_horizontal:"",lot_area_max_horizontal:"",floor_area_min_horizontal:"",floor_area_max_horizontal:"",lot_type_horizontal:"",house_model_horizontal:"",zone_horizontal:"",phase_horizontal:""}),projects:[],units:[],developers:[],locations:[]}},mounted:function(){this.getDevelopers()},methods:{getDevelopers:function(){var t=this;this.$http.get("/search/getDevelopers").then(function(e){t.developers=e.data})},getProjectsByLocation:function(t){var e=this;this.$http.get("/search/getProjectsByLocation?location="+t).then(function(t){e.projects=t.data})},getLocationByDeveloper:function(t){var e=this;this.$http.get("/search/locations?developer="+t).then(function(t){e.locations=t.data})},reset:function(){this.form.reset(),this.$emit("reset")},searchUnits:function(){var t=this;this.form.post("/search/unit").then(function(e){t.$emit("search",e)})}}}},,function(t,e,o){var a=o(0)(o(18),o(22),null,null);t.exports=a.exports},,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{attrs:{action:"/search/unit",method:"POST"}},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-12"},[o("div",{staticClass:"panel panel-default"},[o("div",{staticClass:"panel-heading"},[t._v("Unit Search")]),t._v(" "),o("div",{staticClass:"panel-body"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"developer"}},[t._v("Developer")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.form.developer,expression:"form.developer"}],staticClass:"form-control",attrs:{name:"developer",id:"developer"},on:{change:[function(e){var o=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.form.developer=e.target.multiple?o:o[0]},function(e){t.getLocationByDeveloper(t.form.developer)}]}},t._l(t.developers,function(e){return o("option",[t._v(t._s(e.developer))])}))])]),t._v(" "),o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"developer"}},[t._v("Location")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.form.location_horizontal,expression:"form.location_horizontal"}],staticClass:"form-control",attrs:{name:"location_horizontal",id:"location_horizontal"},on:{change:[function(e){var o=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.form.location_horizontal=e.target.multiple?o:o[0]},function(e){t.getProjectsByLocation(t.form.location_horizontal)}]}},[o("option",{attrs:{value:""}},[t._v("From where")]),t._v(" "),t._l(t.locations,function(e){return o("option",[t._v(t._s(e.location))])})],2)])])]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"project_name_horizontal"}},[t._v("Project Name")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.form.project_name_horizontal,expression:"form.project_name_horizontal"}],staticClass:"form-control",attrs:{name:"project_name_horizontal",id:"project_name_horizontal"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.form.project_name_horizontal=e.target.multiple?o:o[0]}}},[o("option",{attrs:{value:""}},[t._v("Project")]),t._v(" "),t._l(t.projects,function(e){return o("option",{domProps:{value:e.project}},[t._v("@"+t._s(e.project))])})],2)])]),t._v(" "),o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"block_horizontal"}},[t._v("Block and Lot")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.block_horizontal,expression:"form.block_horizontal"}],staticClass:"form-control",attrs:{type:"text",name:"block_horizontal",id:"block_horizontal"},domProps:{value:t.form.block_horizontal},on:{input:function(e){e.target.composing||(t.form.block_horizontal=e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"lot_horizontal"}},[t._v("Zone")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.zone_horizontal,expression:"form.zone_horizontal"}],staticClass:"form-control",attrs:{type:"text",name:"zone_horizontal",id:"zone_horizontal"},domProps:{value:t.form.zone_horizontal},on:{input:function(e){e.target.composing||(t.form.zone_horizontal=e.target.value)}}})])])])])]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"price_minimum"}},[t._v("Price")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.price_minimum_horizontal,expression:"form.price_minimum_horizontal"}],staticClass:"form-control",attrs:{name:"price_minimum_horizontal",id:"price_minimum_horizontal",placeholder:"Min",type:"number"},domProps:{value:t.form.price_minimum_horizontal},on:{input:function(e){e.target.composing||(t.form.price_minimum_horizontal=e.target.value)},blur:function(e){t.$forceUpdate()}}})])]),t._v(" "),o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"price_maximum"}},[t._v(" ")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.price_maximum_horizontal,expression:"form.price_maximum_horizontal"}],staticClass:"form-control",attrs:{name:"price_maximum_horizontal",id:"price_maximum_horizontal",placeholder:"Max",type:"number"},domProps:{value:t.form.price_maximum_horizontal},on:{input:function(e){e.target.composing||(t.form.price_maximum_horizontal=e.target.value)},blur:function(e){t.$forceUpdate()}}})])])])]),t._v(" "),o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"phase_horizontal"}},[t._v("Phase")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phase_horizontal,expression:"form.phase_horizontal"}],staticClass:"form-control",attrs:{type:"text",name:"phase_horizontal",id:"phase_horizontal",placeholder:"Phase"},domProps:{value:t.form.phase_horizontal},on:{input:function(e){e.target.composing||(t.form.phase_horizontal=e.target.value)}}})])])])])]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"lot_area_min"}},[t._v("Lot Area (sq. m)")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.lot_area_min_horizontal,expression:"form.lot_area_min_horizontal"}],staticClass:"form-control",attrs:{type:"number",name:"lot_area_min_horizontal",id:"lot_area_min_horizontal",placeholder:"Min"},domProps:{value:t.form.lot_area_min_horizontal},on:{input:function(e){e.target.composing||(t.form.lot_area_min_horizontal=e.target.value)},blur:function(e){t.$forceUpdate()}}})])]),t._v(" "),o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"lot_area_max"}},[t._v(" ")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.lot_area_max_horizontal,expression:"form.lot_area_max_horizontal"}],staticClass:"form-control",attrs:{type:"number",name:"lot_area_max_horizontal",id:"lot_area_max_horizontal",placeholder:"Max"},domProps:{value:t.form.lot_area_max_horizontal},on:{input:function(e){e.target.composing||(t.form.lot_area_max_horizontal=e.target.value)},blur:function(e){t.$forceUpdate()}}})])])])]),t._v(" "),o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"floor_area_min"}},[t._v("Floor Area (sq. m)")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.floor_area_min_horizontal,expression:"form.floor_area_min_horizontal"}],staticClass:"form-control",attrs:{type:"number",name:"floor_area_min_horizontal",id:"floor_area_min_horizontal",placeholder:"Min"},domProps:{value:t.form.floor_area_min_horizontal},on:{input:function(e){e.target.composing||(t.form.floor_area_min_horizontal=e.target.value)},blur:function(e){t.$forceUpdate()}}})])]),t._v(" "),o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"floor_area_max"}},[t._v(" ")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.floor_area_max_horizontal,expression:"form.floor_area_max_horizontal"}],staticClass:"form-control",attrs:{type:"number",name:"floor_area_max_horizontal",id:"floor_area_max_horizontal",placeholder:"Max"},domProps:{value:t.form.floor_area_max_horizontal},on:{input:function(e){e.target.composing||(t.form.floor_area_max_horizontal=e.target.value)},blur:function(e){t.$forceUpdate()}}})])])])])]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"lot_type_horizontal"}},[t._v("Lot Type")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.lot_type_horizontal,expression:"form.lot_type_horizontal"}],staticClass:"form-control",attrs:{type:"text",name:"lot_type_horizontal",id:"lot_type_horizontal"},domProps:{value:t.form.lot_type_horizontal},on:{input:function(e){e.target.composing||(t.form.lot_type_horizontal=e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"col-md-6"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"house_model_horizontal"}},[t._v("House Model")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.house_model_horizontal,expression:"form.house_model_horizontal"}],staticClass:"form-control",attrs:{type:"text",name:"house_model_horizontal",id:"house_model_horizontal"},domProps:{value:t.form.house_model_horizontal},on:{input:function(e){e.target.composing||(t.form.house_model_horizontal=e.target.value)}}})])])])])])])]),t._v(" "),o("div",{staticClass:"row mb-20"},[o("div",{staticClass:"col-md-12 text-center"},[o("button",{staticClass:"btn btn-primary",on:{click:function(e){e.preventDefault(),t.searchUnits(e)}}},[t._v("SEARCH UNITS")]),t._v(" "),o("button",{staticClass:"btn btn-default",on:{click:function(e){e.preventDefault(),t.reset()}}},[t._v("RESET SEARCH")])])])])])},staticRenderFns:[]}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(1),n=(o.n(a),o(20)),i=o.n(n),r=o(45),s=o.n(r);new Vue({components:{HorizontalFilters:i.a,AidaMapModal:s.a},data:{buyers:[],searchTerm:"",clientSearching:"",locations:[],units:[],result_count:0,unitId:""},el:"#app",methods:{getBuyers:function(){var t=this;this.$http.get("/buyers/all?search="+this.searchTerm).then(function(e){t.buyers=e.data})},displayResults:function(t){this.result_count=t.result_count,this.units=t.units,this.locations=t.locations},clearResults:function(){this.result_count=0,this.units="",this.locations=""}}})},,,,,,,,,,,function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["financingTypes"],data:function(){return{financingType:""}}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(48),n=o.n(a);e.default={components:{ProjectMap:n.a},computed:{photo:function(){var t=this;return this.unit.photos?this.unit.photos.find(function(e){return e.developer==t.unit.developer}):""},mapPhoto:function(){var t=this;return this.unit.map_photos?this.unit.map_photos.find(function(e){return e.developer==t.unit.developer}):""},unitPhoto:function(){var t=this;return this.unit.unit_photos?this.unit.unit_photos.find(function(e){return e.developer==t.unit.developer}):""},houseModelPath:function(){if(this.photo)return"/storage/"+this.photo.developer+"/models/"+this.photo.house_model_name+"/"+this.photo.filename},mapPath:function(){if(this.mapPhoto)return"/storage/"+this.mapPhoto.developer+"/maps/"+this.mapPhoto.phase+"/"+this.mapPhoto.filename},unitPath:function(){if(this.unitPhoto)return"/storage/"+this.unitPhoto.developer+"/units/"+this.unitPhoto.unit+"/"+this.unitPhoto.filename}},props:["unit","buyer","financingType"]}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(5),n=o.n(a),i=o(43),r=o.n(i),s=o(44),l=o.n(s);e.default={components:{Modal:n.a,FinancingSelection:r.a,AidaMapInfo:l.a},props:["unitId","buyerId"],data:function(){return{message:"",download:"",aidaMap:{},buyer:{},units:[],financingType:""}},computed:{financingTypes:function(){var t=[];return this.units.forEach(function(e){e.loans.forEach(function(e){t.push(e.finance_type)})}),Array.from(new Set(t))},unit:function(){var t=this;return this.units.find(function(e){return e.loans.find(function(e){return e.finance_type==t.financingType})})}},methods:{getFinancingType:function(t){this.financingType=t},save:function(){this.$http.post("/aida-maps",{unit_id:this.unit.id,buyer_id:this.buyerId,finance_type:this.financingType}).then(function(t){window.location="/aida-maps"})}},watch:{unitId:function(){var t=this;this.financingType="",this.$http.get("/search/unitById/"+this.unitId).then(function(e){t.units=e.data}).catch(function(t){})},buyerId:function(){var t=this;this.financingType="",this.$http.get("/buyers/"+this.buyerId).then(function(e){t.buyer=e.data.buyer}).catch(function(t){})}}}},,,function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{canvas:"",context:"",mouseX:0,mouseY:0}},props:["x","y"],mounted:function(){this.prepareCanvas(),this.x&&this.y&&this.plotMarker()},methods:{prepareCanvas:function(){this.canvas=document.querySelector("#project-map"),this.context=this.canvas.getContext("2d"),this.drawMap()},drawMap:function(){var t=this,e=new Image;e.onload=function(){t.context.drawImage(e,0,0,t.canvas.width,t.canvas.height)},e.src="/img/map.png"},getCoordinates:function(t){var e=this.canvas.getBoundingClientRect();this.mouseX=accounting.formatNumber((t.clientX-e.left)/e.width,4),this.mouseY=accounting.formatNumber((t.clientY-e.top)/e.height,4)},plotMarker:function(){var t=this.canvas.getBoundingClientRect();this.context.fillStyle="#FF0000",this.context.fillRect(t.width*this.mouseX,t.height*this.mouseY,10,10),this.$emit("plotted",{x:this.mouseX,y:this.mouseY})}},watch:{x:function(){this.plotMarker()},y:function(){this.plotMarker()}}}},,,,function(t,e,o){var a=o(0)(o(34),o(56),null,null);t.exports=a.exports},function(t,e,o){var a=o(0)(o(35),o(57),null,null);t.exports=a.exports},function(t,e,o){var a=o(0)(o(36),o(54),null,null);t.exports=a.exports},,,function(t,e,o){var a=o(0)(o(39),o(55),null,null);t.exports=a.exports},,,,,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("modal",{attrs:{id:"aida-map-modal"}},[o("h4",{staticClass:"modal-title",slot:"header"},[t._v("AIDA Map")]),t._v(" "),t.message?o("div",{staticClass:"alert alert-success"},[t._v("\n        "+t._s(t.message)+"\n    ")]):t._e(),t._v(" "),t.financingType?t._e():o("financing-selection",{attrs:{"financing-types":t.financingTypes},on:{selected:t.getFinancingType}}),t._v(" "),t.financingType?o("aida-map-info",{attrs:{unit:t.unit,buyer:t.buyer,"financing-type":t.financingType}}):t._e(),t._v(" "),o("p",{staticClass:"footer-note",slot:"footer"},[o("span",[t._v("\n            Date and time generated.\n            "),o("strong",[t._v("Price are subject to change without prior notice.")])]),t._v(" "),o("span",[o("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){t.message=""}}},[t._v("Close")]),t._v(" "),t.financingType?o("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(e){t.financingType=""}}},[t._v("Back")]):t._e(),t._v(" "),t.financingType?o("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.save}},[t._v("Save")]):t._e()])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("p",[t._v("Click on the map to place a marker")]),t._v(" "),o("canvas",{attrs:{id:"project-map",width:"500",height:"400"},on:{mousemove:t.getCoordinates,click:t.plotMarker}},[o("img",{attrs:{src:"/img/map.png",id:"map-image"}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",[o("p",[t._v("Please select a financing type to proceed.")]),t._v(" "),o("div",{staticClass:"form-group"},[o("select",{directives:[{name:"model",rawName:"v-model",value:t.financingType,expression:"financingType"}],staticClass:"form-control",on:{change:[function(e){var o=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.financingType=e.target.multiple?o:o[0]},function(e){t.$emit("selected",t.financingType)}]}},[o("option",{attrs:{value:""}},[t._v("Choose")]),t._v(" "),t._l(t.financingTypes,function(e){return o("option",{domProps:{value:e}},[t._v("\n                "+t._s(e)+"\n            ")])})],2)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",[t._m(0),t._v(" "),o("div",{staticClass:"row"},[o("p",{staticClass:"heading"},[t._v("Buyer's Computations For")]),t._v(" "),o("div",{staticClass:"col-md-6"},[o("table",{staticClass:"table"},[o("tbody",[o("tr",[o("td",[t._v(t._s(t.buyer.last_name)+", "+t._s(t.buyer.first_name))])]),t._v(" "),o("tr",[o("td",[t._v(t._s(t.buyer.mobile))])]),t._v(" "),o("tr",[o("td",[t._v(t._s(t.buyer.email))])]),t._v(" "),o("tr",[o("td",[t._v(t._s(t.buyer.marital_status))])]),t._v(" "),o("tr",[o("td",[t._v(t._s(t.buyer.financing_type))])]),t._v(" "),o("tr",[o("td",[t._v(t._s(t.buyer.work_type))])]),t._v(" "),o("tr",[o("td",[t._v(t._s(t.buyer.country))])]),t._v(" "),o("tr",[o("td",[t._v(t._s(t.buyer.equity_type))])])])])]),t._v(" "),o("div",{staticClass:"col-md-6"})]),t._v(" "),o("div",{staticClass:"row"},[o("p",{staticClass:"heading"},[t._v("Unit Details")]),t._v(" "),o("div",{staticClass:"col-md-6"},[o("img",{staticClass:"unit-full",attrs:{src:t.houseModelPath,alt:""}})]),t._v(" "),o("div",{staticClass:"col-md-6"},[o("table",{staticClass:"table"},[o("tbody",[o("tr",[o("td",[t._v("Block and Lot")]),t._v(" "),o("td",[t._v(t._s(t.unit.block_lot))])]),t._v(" "),o("tr",[o("td",[t._v("Lot Area")]),t._v(" "),o("td",[t._v(t._s(t.unit.lot_area))])]),t._v(" "),o("tr",[o("td",[t._v("Lot Type")]),t._v(" "),o("td",[t._v(t._s(t.unit.lot_type))])]),t._v(" "),o("tr",[o("td",[t._v("Floor Area")]),t._v(" "),o("td",[t._v(t._s(t.unit.floor_area))])]),t._v(" "),o("tr",[o("td",[t._v("House Model")]),t._v(" "),o("td",[t._v(t._s(t.unit.house_model))])]),t._v(" "),o("tr",[o("td",[t._v("Total Contract Price")]),t._v(" "),o("td",[t._v(t._s(t._f("currency")(t.unit.total_contract_price)))])]),t._v(" "),o("tr",[o("td",[t._v("Reservation Fee")]),t._v(" "),o("td",[t._v(t._s(t._f("currency")(t.unit.reservation_fee)))])])])])])]),t._v(" "),o("div",{staticClass:"row"},[o("p",{staticClass:"heading"},[t._v("DownPayment and Loanable Amount")]),t._v(" "),o("div",{staticClass:"col-md-12"},[o("table",{staticClass:"table"},[t.unit.downpayment?o("thead",[o("tr",[o("th",[t._v("Equity "+t._s(t.unit.downpayment.percentage)+"%")]),t._v(" "),o("th",[t._v("Terms (Years)")]),t._v(" "),o("th",[t._v("Amount/Month")])])]):t._e(),t._v(" "),t.unit.downpayment?o("tbody",[o("tr",[o("td",[t._v(t._s(t._f("currency")(t.unit.downpayment.equity)))]),t._v(" "),o("td",[t._v(t._s(t._f("currency")(t.unit.downpayment.term)))]),t._v(" "),o("td",[t._v(t._s(t._f("currency")(t.unit.downpayment.monthly)))])])]):t._e()]),t._v(" "),o("hr"),t._v(" "),o("table",{staticClass:"table"},[t._m(1),t._v(" "),o("tbody",[o("tr",[o("td",[t._v(t._s(t.unit.loans[0].finance_type))]),t._v(" "),o("td",[t._v(t._s(t._f("currency")(t.unit.total_contract_price)))]),t._v(" "),o("td",[t._v(t._s(t.unit.loans[0].percentage))]),t._v(" "),o("td",[t._v(t._s(t.unit.loans[0].monthly_percentage))])])])]),t._v(" "),o("table",{staticClass:"table"},[o("thead",[o("tr",[o("th",[t._v("Loanable Amount")]),t._v(" "),o("th",[t._v("MRI and FIRE")]),t._v(" "),t._l(t.unit.loans,function(e){return o("th",[t._v(t._s(e.years)+" years")])})],2)]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v(t._s(t._f("currency")(t.unit.loans[0].total)))]),t._v(" "),o("td",[t._v(t._s(t._f("currency")(t.unit.loans[0].mri)))]),t._v(" "),t._l(t.unit.loans,function(e){return e.finance_type==t.financingType?o("td",[t._v("\n                            "+t._s(t._f("currency")(e.monthly_amortization))+"\n                        ")]):t._e()})],2)])])])]),t._v(" "),o("div",{staticClass:"row"},[o("p",{staticClass:"heading"},[t._v("Map of the Subdivision")]),t._v(" "),o("div",{staticClass:"col-md-6 mb-20"},[o("img",{staticStyle:{width:"100%"},attrs:{src:t.mapPath,alt:""}})]),t._v(" "),o("div",{staticClass:"col-md-6 mb-20"},[o("img",{staticStyle:{width:"100%"},attrs:{src:t.unitPath,alt:""}})])]),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row"},[o("p",{staticClass:"heading"},[t._v("Developer's Information")]),t._v(" "),o("div",{staticClass:"col-md-12"},[o("table",{staticClass:"table"},[o("tbody",[o("tr",[o("td",[t._v("Developer Name")]),t._v(" "),o("td",[t._v("Propety Company of Friends Inc.")])]),t._v(" "),o("tr",[o("td",[t._v("Project Name")]),t._v(" "),o("td",[t._v("Lancaster New City")])]),t._v(" "),o("tr",[o("td",[t._v("Location")]),t._v(" "),o("td",[t._v("Cavite")])]),t._v(" "),o("tr",[o("td",[t._v("Prepared By")]),t._v(" "),o("td",[t._v("Hervie Fajardo")])]),t._v(" "),o("tr",[o("td",[t._v("Contact No.")]),t._v(" "),o("td",[t._v("+63 917 872 0176")])]),t._v(" "),o("tr",[o("td",[t._v("Email")]),t._v(" "),o("td",[t._v("hervie.fajardo@gmail.com")])])])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",[o("tr",[o("th",[t._v("Finance Type")]),t._v(" "),o("th",[t._v("Price")]),t._v(" "),o("th",[t._v("Loan Percentage")]),t._v(" "),o("th",[t._v("Monthly Percentage")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6"},[o("p",{staticClass:"heading"},[t._v("Document Requirements For")]),t._v(" "),o("ul",{staticClass:"requirements"},[o("li",[t._v("3pcs. 1x1 ID Picture (Buyer, Spouse & Atty-in-Fact) w/ name & Unit ID at the back")]),t._v(" "),o("li",[t._v("2 Valid ID's with 3 specimen signature (Photocopy only) (Buyer & Spouse)")]),t._v(" "),o("li",[t._v("SSS, GSIS, Driver's License, Voter's, PRC, Passport")]),t._v(" "),o("li",[t._v("Postal ID's are allowed for AIF only (or unemployed spouse)")]),t._v(" "),o("li",[t._v("Passport - validity should not be expired (Buyer)")]),t._v(" "),o("li",[t._v("Must have date of arrival & departure")]),t._v(" "),o("li",[t._v("Residence Certificate for the Current Year (Cedula) (Spouse & Atty-In-Fact)")])])]),t._v(" "),o("div",{staticClass:"col-md-6"},[o("p",{staticClass:"heading"},[t._v("For Reservations, Contact Us At")]),t._v(" "),o("address",[o("h3",{staticClass:"name"},[t._v("Mr. Hervie Fajardo")]),t._v(" "),o("span",{staticClass:"mobile"},[t._v("Globe: +63 917 872 0176")]),t._v(" "),o("span",{staticClass:"mobile"},[t._v("Smart: +63 917 565 8645")]),t._v(" "),o("h5",[t._v("LANDLINE HOTLINES")]),t._v(" "),o("span",{staticClass:"telephone"},[t._v("Manila Telephone: (02) 256 6574")]),t._v(" "),o("span",{staticClass:"telephone"},[t._v("Cavite Telephone: (046) 440 6474")])]),t._v(" "),o("address",[o("p",{staticClass:"office"},[t._v("Main Office")]),t._v(" "),o("span",{staticClass:"barangay"},[t._v("55 Tinio St. Brgy. Addition Hills")]),t._v(" "),o("span",{staticClass:"city"},[t._v("Mandaluyong City")]),t._v(" "),o("span",{staticClass:"country"},[t._v("Philippines 1552")])]),t._v(" "),o("address",[o("p",{staticClass:"office"},[t._v("Branch Office")]),t._v(" "),o("span",{staticClass:"barangay"},[t._v("55 Gen. Aguinaldo Hi-way Brgy. Tanzang Luma")]),t._v(" "),o("span",{staticClass:"city"},[t._v("Imus City, Cavite")]),t._v(" "),o("span",{staticClass:"country"},[t._v("Philippines 4103")])])])])}]}},,,,function(t,e,o){t.exports=o(23)}]);