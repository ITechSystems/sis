!function(t){function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={};n.m=t,n.c=r,n.i=function(t){return t},n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:e})},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=56)}({1:function(t,n,r){(function(t){var n=r(2);window.axios.defaults.headers.common["X-CSRF-TOKEN"]=window.Laravel.csrfToken,window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",window.storagePath=function(){return n.dirname(t)+"../storage"},Vue.prototype.$http=window.axios,accounting.settings={currency:{symbol:"",format:"%s%v",decimal:".",thousand:",",precision:2},number:{precision:2,thousand:",",decimal:"."}},Vue.filter("diffForHumans",function(t){return moment(t).fromNow()}),Vue.filter("currency",function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n?accounting.formatMoney(t,{symbol:n,format:"%s %v"}):accounting.formatMoney(t,n)}),Vue.filter("number",function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return accounting.formatNumber(t,n)})}).call(n,"/")},18:function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=r(1);r.n(e);new Vue({data:{developer:"",units:[]},el:"#app",ready:function(){this.photo_id&&alert(this.photo_id)},methods:{getUnits:function(t){var n=this;this.$http.get("/units/getBlockLots?developer="+t).then(function(t){n.units=t.data})}}})},2:function(t,n,r){(function(t){function r(t,n){for(var r=0,e=t.length-1;e>=0;e--){var o=t[e];"."===o?t.splice(e,1):".."===o?(t.splice(e,1),r++):r&&(t.splice(e,1),r--)}if(n)for(;r--;r)t.unshift("..");return t}function e(t,n){if(t.filter)return t.filter(n);for(var r=[],e=0;e<t.length;e++)n(t[e],e,t)&&r.push(t[e]);return r}var o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,i=function(t){return o.exec(t).slice(1)};n.resolve=function(){for(var n="",o=!1,i=arguments.length-1;i>=-1&&!o;i--){var u=i>=0?arguments[i]:t.cwd();if("string"!=typeof u)throw new TypeError("Arguments to path.resolve must be strings");u&&(n=u+"/"+n,o="/"===u.charAt(0))}return n=r(e(n.split("/"),function(t){return!!t}),!o).join("/"),(o?"/":"")+n||"."},n.normalize=function(t){var o=n.isAbsolute(t),i="/"===u(t,-1);return t=r(e(t.split("/"),function(t){return!!t}),!o).join("/"),t||o||(t="."),t&&i&&(t+="/"),(o?"/":"")+t},n.isAbsolute=function(t){return"/"===t.charAt(0)},n.join=function(){var t=Array.prototype.slice.call(arguments,0);return n.normalize(e(t,function(t,n){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},n.relative=function(t,r){function e(t){for(var n=0;n<t.length&&""===t[n];n++);for(var r=t.length-1;r>=0&&""===t[r];r--);return n>r?[]:t.slice(n,r-n+1)}t=n.resolve(t).substr(1),r=n.resolve(r).substr(1);for(var o=e(t.split("/")),i=e(r.split("/")),u=Math.min(o.length,i.length),c=u,s=0;s<u;s++)if(o[s]!==i[s]){c=s;break}for(var a=[],s=c;s<o.length;s++)a.push("..");return a=a.concat(i.slice(c)),a.join("/")},n.sep="/",n.delimiter=":",n.dirname=function(t){var n=i(t),r=n[0],e=n[1];return r||e?(e&&(e=e.substr(0,e.length-1)),r+e):"."},n.basename=function(t,n){var r=i(t)[2];return n&&r.substr(-1*n.length)===n&&(r=r.substr(0,r.length-n.length)),r},n.extname=function(t){return i(t)[3]};var u="b"==="ab".substr(-1)?function(t,n,r){return t.substr(n,r)}:function(t,n,r){return n<0&&(n=t.length+n),t.substr(n,r)}}).call(n,r(3))},3:function(t,n){function r(){throw new Error("setTimeout has not been defined")}function e(){throw new Error("clearTimeout has not been defined")}function o(t){if(f===setTimeout)return setTimeout(t,0);if((f===r||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{return f(t,0)}catch(n){try{return f.call(null,t,0)}catch(n){return f.call(this,t,0)}}}function i(t){if(l===clearTimeout)return clearTimeout(t);if((l===e||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(n){try{return l.call(null,t)}catch(n){return l.call(this,t)}}}function u(){d&&p&&(d=!1,p.length?m=p.concat(m):v=-1,m.length&&c())}function c(){if(!d){var t=o(u);d=!0;for(var n=m.length;n;){for(p=m,m=[];++v<n;)p&&p[v].run();v=-1,n=m.length}p=null,d=!1,i(t)}}function s(t,n){this.fun=t,this.array=n}function a(){}var f,l,h=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:r}catch(t){f=r}try{l="function"==typeof clearTimeout?clearTimeout:e}catch(t){l=e}}();var p,m=[],d=!1,v=-1;h.nextTick=function(t){var n=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)n[r-1]=arguments[r];m.push(new s(t,n)),1!==m.length||d||o(c)},s.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=a,h.addListener=a,h.once=a,h.off=a,h.removeListener=a,h.removeAllListeners=a,h.emit=a,h.binding=function(t){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(t){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},56:function(t,n,r){t.exports=r(18)}});