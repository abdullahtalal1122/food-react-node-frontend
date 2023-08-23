/*! For license information please see 81.30633d8a.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[81],{81:function(t,n,r){r.r(n),r.d(n,{default:function(){return v}});var e=r(837),o=r(184),i=function(){return(0,o.jsx)(e.y4,{children:(0,o.jsx)("p",{children:"All rights reserved to Tasleem Trading LLC 2023"})})},a=function(){return(0,o.jsxs)(e.RA,{children:[(0,o.jsx)(e.wC,{children:"EN"}),(0,o.jsx)(e.Ei,{src:"loginlogo.png",alt:"logo"})]})},c=r(165),u=r(861),s=r(439),l=function(t){return(0,o.jsx)(e.Rz,{children:t.name})},f=function(t){return(0,o.jsx)(e.GN,{type:t.type,value:t.value,onChange:function(n){return t.set(n.target.value)}})},h=function(t){return(0,o.jsx)(e.Sn,{type:"submit",onClick:t.handle,children:"Sign Up"})},p=r(791),d=function(){var t=(0,p.useState)(""),n=(0,s.Z)(t,2),r=n[0],i=n[1],a=(0,p.useState)(""),d=(0,s.Z)(a,2),v=d[0],g=d[1],y=function(){var t=(0,u.Z)((0,c.Z)().mark((function t(){var n,e,o;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={email:r,password:v},t.next=3,fetch("http://localhost:8000/api/v1/vendor/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 3:return e=t.sent,t.next=6,e.json();case 6:if(o=t.sent,e){t.next=9;break}return t.abrupt("return",alert("Unable to create : "+o.status));case 9:alert("Vender Saved ".concat(o.status));case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,o.jsxs)(e.oF,{children:[(0,o.jsx)(l,{name:"Marchent ID"}),(0,o.jsx)(f,{type:"email",value:r,set:i}),(0,o.jsx)(l,{name:"Password"}),(0,o.jsx)(f,{type:"password",value:v,set:g}),(0,o.jsx)(h,{handle:y})]})},v=function(){return(0,o.jsx)(e.ef,{children:(0,o.jsxs)(e.W2,{children:[(0,o.jsx)(a,{}),(0,o.jsx)(d,{}),(0,o.jsx)(i,{})]})})}},837:function(t,n,r){r.d(n,{Ei:function(){return m},GN:function(){return j},RA:function(){return y},Rz:function(){return b},Sn:function(){return L},W2:function(){return g},ef:function(){return v},oF:function(){return w},wC:function(){return x},y4:function(){return Z}});var e,o,i,a,c,u,s,l,f,h,p=r(168),d=r(867),v=d.ZP.div(e||(e=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #f0f0f0;\n  margin: 0;\n"]))),g=d.ZP.div(o||(o=(0,p.Z)(["\n  background-color: #fff;\n  width: 600px;\n  height: 600px;\n  display: grid;\n  grid-template-columns: 100px 300px 100px;\n  grid-template-rows: 200px 300px 100px;\n  justify-content: center;\n"]))),y=d.ZP.div(i||(i=(0,p.Z)(["\n  grid-column: 2/3;\n  display: grid;\n  grid-template-columns: 300px;\n  grid-template-rows: 70px 130px;\n  justify-content: center;\n"]))),x=d.ZP.button(a||(a=(0,p.Z)(["\n  margin-left: -90px;\n  margin-top: 30px;\n  width: 40px;\n  font-weight: 600;\n  border: none;\n  box-shadow: -5px 4px 8px rgba(0, 0, 0, 0.2);\n  background-color: rgb(209, 238, 255);\n  cursor: pointer;\n"]))),m=d.ZP.img(c||(c=(0,p.Z)(["\n  padding-left: 40px;\n  width: 60%;\n"]))),w=d.ZP.div(u||(u=(0,p.Z)(["\n  grid-column: 2/3;\n  grid-row: 2/3;\n"]))),b=d.ZP.label(s||(s=(0,p.Z)(["\n  font-size: 12px;\n  display: block;\n  color: #646464;\n  margin: 5px 2px;\n"]))),j=d.ZP.input(l||(l=(0,p.Z)(["\n  width: 100%;\n  padding: 10px 5px;\n  border-radius: 8px;\n  border: 1px solid rgb(80, 80, 80);\n  box-border: ;\n"]))),L=d.ZP.button(f||(f=(0,p.Z)(["\n  width: 80%;\n  padding: 20px 20px;\n  border-radius: 40px;\n  margin-left: 30px;\n  margin-top: 30px;\n  background-color: #00c2ff;\n  border: none;\n  color: #fff;\n  font-size: 17px;\n  font-weight: 900;\n  cursor: pointer;\n"]))),Z=d.ZP.div(h||(h=(0,p.Z)(["\n  grid-column: 2/3;\n  display: flex;\n  align-content: flex-end;\n  flex-wrap: wrap;\n\n  p {\n    font-size: 12px;\n    margin-bottom: 10px;\n  }\n"])))},861:function(t,n,r){function e(t,n,r,e,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?n(u):Promise.resolve(u).then(e,o)}function o(t){return function(){var n=this,r=arguments;return new Promise((function(o,i){var a=t.apply(n,r);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)}))}}r.d(n,{Z:function(){return o}})},165:function(t,n,r){r.d(n,{Z:function(){return o}});var e=r(2);function o(){o=function(){return t};var t={},n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(t,n,r){t[n]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,n,r){return Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{l({},"")}catch(S){l=function(t,n,r){return t[n]=r}}function f(t,n,r,e){var o=n&&n.prototype instanceof d?n:d,a=Object.create(o.prototype),c=new k(e||[]);return i(a,"_invoke",{value:L(t,r,c)}),a}function h(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=f;var p={};function d(){}function v(){}function g(){}var y={};l(y,c,(function(){return this}));var x=Object.getPrototypeOf,m=x&&x(x(O([])));m&&m!==n&&r.call(m,c)&&(y=m);var w=g.prototype=d.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(n){l(t,n,(function(t){return this._invoke(n,t)}))}))}function j(t,n){function o(i,a,c,u){var s=h(t[i],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==(0,e.Z)(f)&&r.call(f,"__await")?n.resolve(f.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):n.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,u)}))}u(s.arg)}var a;i(this,"_invoke",{value:function(t,r){function e(){return new n((function(n,e){o(t,r,n,e)}))}return a=a?a.then(e,e):e()}})}function L(t,n,r){var e="suspendedStart";return function(o,i){if("executing"===e)throw new Error("Generator is already running");if("completed"===e){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=Z(a,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===e)throw e="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);e="executing";var u=h(t,n,r);if("normal"===u.type){if(e=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(e="completed",r.method="throw",r.arg=u.arg)}}}function Z(t,n){var r=n.method,e=t.iterator[r];if(void 0===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=void 0,Z(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=h(e,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,p):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function E(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function P(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t||""===t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=void 0,n.done=!0,n};return i.next=i}}throw new TypeError((0,e.Z)(t)+" is not iterable")}return v.prototype=g,i(w,"constructor",{value:g,configurable:!0}),i(g,"constructor",{value:v,configurable:!0}),v.displayName=l(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===v||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(j.prototype),l(j.prototype,u,(function(){return this})),t.AsyncIterator=j,t.async=function(n,r,e,o,i){void 0===i&&(i=Promise);var a=new j(f(n,r,e,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),l(w,s,"Generator"),l(w,c,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=Object(t),r=[];for(var e in n)r.push(e);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},t.values=O,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function e(r,e){return a.type="throw",a.arg=t,n.next=r,e&&(n.method="next",n.arg=void 0),!!e}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),p},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),p}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var o=e.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:O(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}}}]);
//# sourceMappingURL=81.30633d8a.chunk.js.map