(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-18b6"],{"144x":function(e,t,r){"use strict";r.r(t);var n=r("QbLZ"),o=r.n(n),i=r("m1cH"),a=r.n(i),c=r("FyfS"),s=r.n(c),l=r("14Xm"),u=r.n(l),h=r("D3Ub"),f=r.n(h),d=r("P2sY"),p=r.n(d),v=r("33yf"),y=r.n(v),m=r("7Qib"),g=r("t3Un");function w(e){return Object(g.a)({url:"/roles/"+e,method:"delete"})}function b(e){return Object(g.a)({url:"/roles",method:"post",data:e})}function x(e,t){return Object(g.a)({url:"/roles/"+e,method:"put",data:t})}var _=r("mSNy"),k={key:"",name:"",description:"",routes:[]},L={data:function(){return{role:p()({},k),routes:[],rolesList:[],dialogVisible:!1,dialogType:"new",checkStrictly:!1,defaultProps:{children:"children",label:"title"}}},computed:{routesData:function(){return this.routes}},created:function(){this.getRoutes(),this.getRoles()},methods:{getRoutes:function(){var e=this;return f()(u.a.mark(function t(){var r,n;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(g.a)({url:"/routes",method:"get"});case 2:r=t.sent,e.serviceRoutes=r.data,n=e.generateRoutes(r.data),e.routes=e.i18n(n);case 6:case"end":return t.stop()}},t,e)}))()},getRoles:function(){var e=this;return f()(u.a.mark(function t(){var r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(g.a)({url:"/roles",method:"get"});case 2:r=t.sent,e.rolesList=r.data;case 4:case"end":return t.stop()}},t,e)}))()},i18n:function(e){var t=this;return e.map(function(e){return e.title=_.a.t("route."+e.title),e.children&&(e.children=t.i18n(e.children)),e})},generateRoutes:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",r=[],n=!0,o=!1,i=void 0;try{for(var a,c=s()(e);!(n=(a=c.next()).done);n=!0){var l=a.value;if(!l.hidden){var u=this.onlyOneShowingChild(l.children,l);l.children&&u&&!l.alwaysShow&&(l=u);var h={path:y.a.resolve(t,l.path),title:l.meta&&l.meta.title};l.children&&(h.children=this.generateRoutes(l.children,h.path)),r.push(h)}}}catch(e){o=!0,i=e}finally{try{!n&&c.return&&c.return()}finally{if(o)throw i}}return r},generateArr:function(e){var t=this,r=[];return e.forEach(function(e){if(r.push(e),e.children){var n=t.generateArr(e.children);n.length>0&&(r=[].concat(a()(r),a()(n)))}}),r},handleAddRole:function(){this.role=p()({},k),this.$refs.tree&&this.$refs.tree.setCheckedNodes([]),this.dialogType="new",this.dialogVisible=!0},handleEdit:function(e){var t=this;this.dialogType="edit",this.dialogVisible=!0,this.checkStrictly=!0,this.role=Object(m.b)(e.row),this.$nextTick(function(){var e=t.generateRoutes(t.role.routes);t.$refs.tree.setCheckedNodes(t.generateArr(e)),t.checkStrictly=!1})},handleDelete:function(e){var t=this,r=e.$index,n=e.row;this.$confirm("Confirm to remove the role?","Warning",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then(f()(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(n.id);case 2:t.rolesList.splice(r,1),t.$message({type:"success",message:"Delete succed!"});case 4:case"end":return e.stop()}},e,t)}))).catch(function(e){console.error(e)})},generateTree:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",r=arguments[2],n=[],o=!0,i=!1,a=void 0;try{for(var c,l=s()(e);!(o=(c=l.next()).done);o=!0){var u=c.value,h=y.a.resolve(t,u.path);u.children&&(u.children=this.generateTree(u.children,h,r)),(r.includes(h)||u.children&&u.children.length>=1)&&n.push(u)}}catch(e){i=!0,a=e}finally{try{!o&&l.return&&l.return()}finally{if(i)throw a}}return n},confirmRole:function(){var e=this;return f()(u.a.mark(function t(){var r,n,o,i,a,c,s,l,h;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r="edit"===e.dialogType,n=e.$refs.tree.getCheckedKeys(),e.role.routes=e.generateTree(Object(m.b)(e.serviceRoutes),"/",n),!r){t.next=16;break}return t.next=6,x(e.role.key,e.role);case 6:o=0;case 7:if(!(o<e.rolesList.length)){t.next=14;break}if(e.rolesList[o].key!==e.role.key){t.next=11;break}return e.rolesList.splice(o,1,p()({},e.role)),t.abrupt("break",14);case 11:o++,t.next=7;break;case 14:t.next=22;break;case 16:return t.next=18,b(e.role);case 18:i=t.sent,a=i.data,e.role.key=a,e.rolesList.push(e.role);case 22:c=e.role,s=c.description,l=c.key,h=c.name,e.dialogVisible=!1,e.$notify({title:"Success",dangerouslyUseHTMLString:!0,message:"\n            <div>Role Key: "+l+"</div>\n            <div>Role Nmae: "+h+"</div>\n            <div>Description: "+s+"</div>\n          ",type:"success"});case 25:case"end":return t.stop()}},t,e)}))()},onlyOneShowingChild:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1],r=null,n=e.filter(function(e){return!e.hidden});return 1===n.length?((r=n[0]).path=y.a.resolve(t.path,r.path),r):0===n.length&&(r=o()({},t,{path:"",noShowingChildren:!0}))}}},R=(r("Hzci"),r("KHd+")),E=Object(R.a)(L,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-button",{attrs:{type:"primary"},on:{click:e.handleAddRole}},[e._v(e._s(e.$t("permission.addRole")))]),e._v(" "),r("el-table",{staticStyle:{width:"100%","margin-top":"30px"},attrs:{data:e.rolesList,border:""}},[r("el-table-column",{attrs:{align:"center",label:"Role Key",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.key))]}}])}),e._v(" "),r("el-table-column",{attrs:{align:"center",label:"Role Name",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.name))]}}])}),e._v(" "),r("el-table-column",{attrs:{align:"header-center",label:"Description"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.description))]}}])}),e._v(" "),r("el-table-column",{attrs:{align:"center",label:"Operations"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){e.handleEdit(t)}}},[e._v(e._s(e.$t("permission.editPermission")))]),e._v(" "),r("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(r){e.handleDelete(t)}}},[e._v(e._s(e.$t("permission.delete")))])]}}])})],1),e._v(" "),r("el-dialog",{attrs:{visible:e.dialogVisible,title:"edit"===e.dialogType?"Edit Role":"New Role"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{attrs:{model:e.role,"label-width":"80px","label-position":"left"}},[r("el-form-item",{attrs:{label:"Name"}},[r("el-input",{attrs:{placeholder:"Role Name"},model:{value:e.role.name,callback:function(t){e.$set(e.role,"name",t)},expression:"role.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Desc"}},[r("el-input",{attrs:{autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"Role Description"},model:{value:e.role.description,callback:function(t){e.$set(e.role,"description",t)},expression:"role.description"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Menus"}},[r("el-tree",{ref:"tree",staticClass:"permission-tree",attrs:{"check-strictly":e.checkStrictly,data:e.routesData,props:e.defaultProps,"show-checkbox":"","node-key":"path"}})],1)],1),e._v(" "),r("div",{staticStyle:{"text-align":"right"}},[r("el-button",{attrs:{type:"danger"},on:{click:function(t){e.dialogVisible=!1}}},[e._v(e._s(e.$t("permission.cancel")))]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.confirmRole}},[e._v(e._s(e.$t("permission.confirm")))])],1)],1)],1)},[],!1,null,"83316b48",null);E.options.__file="role.vue";t.default=E.exports},"14Xm":function(e,t,r){e.exports=r("u938")},D3Ub:function(e,t,r){"use strict";t.__esModule=!0;var n=function(e){return e&&e.__esModule?e:{default:e}}(r("4d7F"));t.default=function(e){return function(){var t=e.apply(this,arguments);return new n.default(function(e,r){return function o(i,a){try{var c=t[i](a),s=c.value}catch(e){return void r(e)}if(!c.done)return n.default.resolve(s).then(function(e){o("next",e)},function(e){o("throw",e)});e(s)}("next")})}}},Hzci:function(e,t,r){"use strict";var n=r("sUh4");r.n(n).a},ls82:function(e,t){!function(t){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag",l="object"==typeof e,u=t.regeneratorRuntime;if(u)l&&(e.exports=u);else{(u=t.regeneratorRuntime=l?e.exports:{}).wrap=b;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",v={},y={};y[a]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(T([])));g&&g!==n&&o.call(g,a)&&(y=g);var w=L.prototype=_.prototype=Object.create(y);k.prototype=w.constructor=L,L.constructor=k,L[s]=k.displayName="GeneratorFunction",u.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===k||"GeneratorFunction"===(t.displayName||t.name))},u.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,L):(e.__proto__=L,s in e||(e[s]="GeneratorFunction")),e.prototype=Object.create(w),e},u.awrap=function(e){return{__await:e}},R(E.prototype),E.prototype[c]=function(){return this},u.AsyncIterator=E,u.async=function(e,t,r,n){var o=new E(b(e,t,r,n));return u.isGeneratorFunction(t)?o:o.next().then(function(e){return e.done?e.value:o.next()})},R(w),w[s]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},u.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},u.values=T,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,o){return c.type="throw",c.arg=e,t.next=n,o&&(t.method="next",t.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),l=o.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:T(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function b(e,t,r,n){var o=t&&t.prototype instanceof _?t:_,i=Object.create(o.prototype),a=new N(n||[]);return i._invoke=function(e,t,r){var n=h;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return $()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=O(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var s=x(e,t,r);if("normal"===s.type){if(n=r.done?p:f,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}(e,r,a),i}function x(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}function _(){}function k(){}function L(){}function R(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function E(e){var t;this._invoke=function(r,n){function i(){return new Promise(function(t,i){!function t(r,n,i,a){var c=x(e[r],e,n);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==typeof l&&o.call(l,"__await")?Promise.resolve(l.__await).then(function(e){t("next",e,i,a)},function(e){t("throw",e,i,a)}):Promise.resolve(l).then(function(e){s.value=e,i(s)},a)}a(c.arg)}(r,n,t,i)})}return t=t?t.then(i,i):i()}}function O(e,t){var n=e.iterator[t.method];if(n===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=r,O(e,t),"throw"===t.method))return v;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=x(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,v;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,v):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function T(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(o.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=r,t.done=!0,t};return i.next=i}}return{next:$}}function $(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},sUh4:function(e,t,r){},u938:function(e,t,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,e.exports=r("ls82"),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(e){n.regeneratorRuntime=void 0}}}]);