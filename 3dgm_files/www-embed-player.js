(function(){'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ca(this);function u(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ia(aa(this))}})}return a});
function ia(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ja(a){return a.raw=a}
function la(a,b){a.raw=b;return a}
function v(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ma(a){if(!(a instanceof Array)){a=v(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function na(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var pa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)na(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||pa});
var qa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ra=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=qa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),sa;
if("function"==typeof Object.setPrototypeOf)sa=Object.setPrototypeOf;else{var ta;a:{var ua={a:!0},va={};try{va.__proto__=ua;ta=va.a;break a}catch(a){}ta=!1}sa=ta?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var wa=sa;
function w(a,b){a.prototype=qa(b.prototype);a.prototype.constructor=a;if(wa)wa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Ba=b.prototype}
function xa(){this.v=!1;this.m=null;this.i=void 0;this.h=1;this.A=this.l=0;this.K=this.j=null}
function ya(a){if(a.v)throw new TypeError("Generator is already running");a.v=!0}
xa.prototype.F=function(a){this.i=a};
function za(a,b){a.j={exception:b,nd:!0};a.h=a.l||a.A}
xa.prototype.return=function(a){this.j={return:a};this.h=this.A};
xa.prototype.yield=function(a,b){this.h=b;return{value:a}};
xa.prototype.B=function(a){this.h=a};
function Aa(a,b,c){a.l=b;void 0!=c&&(a.A=c)}
function Ba(a){a.l=0;var b=a.j.exception;a.j=null;return b}
function Ca(a){var b=a.K.splice(0)[0];(b=a.j=a.j||b)?b.nd?a.h=a.l||a.A:void 0!=b.B&&a.A<b.B?(a.h=b.B,a.j=null):a.h=a.A:a.h=0}
function Da(a){this.h=new xa;this.i=a}
function Fa(a,b){ya(a.h);var c=a.h.m;if(c)return Ga(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ha(a)}
function Ga(a,b,c,d){try{var e=b.call(a.h.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.v=!1,e;var f=e.value}catch(g){return a.h.m=null,za(a.h,g),Ha(a)}a.h.m=null;d.call(a.h,f);return Ha(a)}
function Ha(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.v=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,za(a.h,c)}a.h.v=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.nd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ia(a){this.next=function(b){ya(a.h);a.h.m?b=Ga(a,a.h.m.next,b,a.h.F):(a.h.F(b),b=Ha(a));return b};
this.throw=function(b){ya(a.h);a.h.m?b=Ga(a,a.h.m["throw"],b,a.h.F):(za(a.h,b),b=Ha(a));return b};
this.return=function(b){return Fa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ka(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Ka(new Ia(new Da(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return ra});
u("Reflect.setPrototypeOf",function(a){return a?a:wa?function(b,c){try{return wa(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.v=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.A()})}this.h.push(g)};
var e=fa.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.A=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.da),reject:g(this.A)}};
b.prototype.da=function(g){if(g===this)this.A(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ha(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.Z(g):this.m(g)}};
b.prototype.Z=function(g){var h=void 0;try{h=g.then}catch(k){this.A(k);return}"function"==typeof h?this.xa(h,g):this.m(g)};
b.prototype.A=function(g){this.F(2,g)};
b.prototype.m=function(g){this.F(1,g)};
b.prototype.F=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.fa();this.K()};
b.prototype.fa=function(){var g=this;e(function(){if(g.U()){var h=fa.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.U=function(){if(this.v)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.K=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.ha=function(g){var h=this.l();g.Xb(h.resolve,h.reject)};
b.prototype.xa=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,t){return"function"==typeof r?function(x){try{l(r(x))}catch(z){n(z)}}:t}
var l,n,p=new b(function(r,t){l=r;n=t});
this.Xb(k(g,l),k(h,n));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Xb=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.v=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=v(g),n=l.next();!n.done;n=l.next())d(n.value).Xb(h,k)})};
b.all=function(g){var h=v(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(x){return function(z){r[x]=z;t--;0==t&&l(r)}}
var r=[],t=0;do r.push(void 0),t++,d(k.value).Xb(p(r.length-1),n),k=h.next();while(!k.done)})};
return b});
u("Object.setPrototypeOf",function(a){return a||wa});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=v(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!na(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!na(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&na(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&na(k,g)&&na(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&na(k,g)&&na(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ia(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h[0][l];if(n&&na(h[0],l))for(h=0;h<n.length;h++){var p=n[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:n,index:h,entry:p}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=v(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(v([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function La(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=La(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
function Ma(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.entries",function(a){return a?a:function(){return Ma(this,function(b,c){return[b,c]})}});
u("Array.prototype.keys",function(a){return a?a:function(){return Ma(this,function(b){return b})}});
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=La(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=v(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(v([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
u("Array.prototype.values",function(a){return a?a:function(){return Ma(this,function(b,c){return c})}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)na(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==La(this,b,"includes").indexOf(b,c||0)}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||Infinity===b||-Infinity===b||0===b)return b;var c=Math.floor(Math.abs(b));return 0>b?-c:c}});
u("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)na(b,d)&&c.push([d,b[d]]);return c}});
u("globalThis",function(a){return a||fa});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Na=Na||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Oa(a){var b=E("CLOSURE_FLAGS");a=b&&b[a];return null!=a?a:!1}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Pa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Qa(a){var b=Pa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ra(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Sa(a){return Object.prototype.hasOwnProperty.call(a,Ta)&&a[Ta]||(a[Ta]=++Ua)}
var Ta="closure_uid_"+(1E9*Math.random()>>>0),Ua=0;function Va(a,b,c){return a.call.apply(a.bind,arguments)}
function Wa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Xa(a,b,c){Xa=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Va:Wa;return Xa.apply(null,arguments)}
function Ya(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Za(){return Date.now()}
function $a(a,b){function c(){}
c.prototype=b.prototype;a.Ba=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function ab(a){return a}
;function bb(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,bb);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
$a(bb,Error);bb.prototype.name="CustomError";function cb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;var db=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};var eb;function fb(){if(void 0===eb){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:ab,createScript:ab,createScriptURL:ab})}catch(c){C.console&&C.console.error(c.message)}eb=a}else eb=a}return eb}
;function gb(a,b){this.h=a===hb&&b||""}
gb.prototype.toString=function(){return this.h};
function ib(a){return new gb(hb,a)}
var hb={};ib("");function jb(a){this.h=a}
jb.prototype.toString=function(){return this.h+""};
function kb(a){if(a instanceof jb&&a.constructor===jb)return a.h;Pa(a);return"type_error:TrustedResourceUrl"}
var lb={};function mb(a){var b=fb();a=b?b.createScriptURL(a):a;return new jb(a,lb)}
;/*

 SPDX-License-Identifier: Apache-2.0
*/
var nb=ja([""]),ob=la(["\x00"],["\\0"]),pb=la(["\n"],["\\n"]),qb=la(["\x00"],["\\u0000"]);function rb(a){return-1===a.toString().indexOf("`")}
rb(function(a){return a(nb)})||rb(function(a){return a(ob)})||rb(function(a){return a(pb)})||rb(function(a){return a(qb)});function sb(a){this.h=a}
sb.prototype.toString=function(){return this.h};
var tb=new sb("about:invalid#zClosurez");function ub(a){this.we=a}
function vb(a){return new ub(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var wb=[vb("data"),vb("http"),vb("https"),vb("mailto"),vb("ftp"),new ub(function(a){return/^[^:]*([/?#]|$)/.test(a)})],xb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
function yb(a){if(a instanceof sb)if(a instanceof sb)a=a.h;else throw Error("");else a=xb.test(a)?a:void 0;return a}
;function zb(a,b){b=yb(b);void 0!==b&&(a.href=b)}
;function Ab(){this.h=Bb[0].toLowerCase()}
Ab.prototype.toString=function(){return this.h};var Cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Db=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Eb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Fb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Gb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Db(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Hb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function Ib(a,b){b=Cb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function Jb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Qa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Kb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Lb(a){var b=Mb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Nb(a){for(var b in a)return!1;return!0}
function Ob(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Pb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function Qb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Rb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Sb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=Sb(a[c]);return b}
var Tb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ub(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Tb.length;f++)c=Tb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Vb(a){this.h=a}
Vb.prototype.toString=function(){return this.h.toString()};function Wb(a){var b="true".toString(),c=[new Ab];if(0===c.length)throw Error("");if(c.map(function(d){if(d instanceof Ab)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function Xb(a,b){throw Error(void 0===b?"unexpected value "+a+"!":b);}
;var Yb="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Zb(a,b){if(b instanceof jb)a.href=kb(b).toString();else{if(-1===Yb.indexOf("stylesheet"))throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=yb(b);if(void 0===b)return;a.href=b}a.rel="stylesheet"}
;function $b(a){var b,c;return(a=null==(c=(b=a.document).querySelector)?void 0:c.call(b,"script[nonce]"))?a.nonce||a.getAttribute("nonce")||"":""}
;function ac(a){this.h=a}
ac.prototype.toString=function(){return this.h.toString()};function bc(a){var b=$b(a.ownerDocument&&a.ownerDocument.defaultView||window);b&&a.setAttribute("nonce",b)}
function cc(a,b){if(b instanceof ac)b=b.h;else throw Error("");a.textContent=b;bc(a)}
function dc(a,b){a.src=kb(b);bc(a)}
;function ec(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function fc(a){var b=E("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=hc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,ic[c])c=ic[c];else{c=String(c);if(!ic[c]){var f=/function\s+([^\(]+)/m.exec(c);ic[c]=f?f[1]:"[Anonymous]"}c=ic[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function hc(a,b){b||(b={});b[jc(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[jc(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=hc(a,b));return c}
function jc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var ic={};function kc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var lc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mc(a){return a?decodeURI(a):a}
function nc(a,b){return b.match(lc)[a]||null}
function oc(a){return mc(nc(3,a))}
function pc(a){var b=a.match(lc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function qc(a){var b=a.indexOf("#");return 0>b?a:a.slice(0,b)}
function rc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)rc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function sc(a){var b=[],c;for(c in a)rc(c,a[c],b);return b.join("&")}
function tc(a,b){b=sc(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function uc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var vc=/#|$/,wc=/[?&]($|#)/;function xc(a,b){for(var c=a.search(vc),d=0,e,f=[];0<=(e=uc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(wc,"$1")}
;function yc(a){this.h=a}
;function zc(a,b,c){this.l=a;this.j=b;this.fields=c||[];this.h=new Map}
m=zc.prototype;m.Qd=function(a){var b=B.apply(1,arguments),c=this.yc(b);c?c.push(new yc(a)):this.Cd(a,b)};
m.Cd=function(a){var b=this.Vc(B.apply(1,arguments));this.h.set(b,[new yc(a)])};
m.yc=function(){var a=this.Vc(B.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
m.ke=function(){var a=this.yc(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
m.clear=function(){this.h.clear()};
m.Vc=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function Ac(a,b){zc.call(this,a,3,b)}
w(Ac,zc);Ac.prototype.i=function(a){var b=B.apply(1,arguments),c=0,d=this.ke(b);d&&(c=d.h);this.Cd(c+a,b)};function Bc(a,b){zc.call(this,a,2,b)}
w(Bc,zc);Bc.prototype.record=function(a){this.Qd(a,B.apply(1,arguments))};function Cc(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Dc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Qa(d)?Dc.apply(null,d):Cc(d)}}
;function F(){this.T=this.T;this.A=this.A}
F.prototype.T=!1;F.prototype.dispose=function(){this.T||(this.T=!0,this.R())};
function Ec(a,b){a.addOnDisposeCallback(Ya(Cc,b))}
F.prototype.addOnDisposeCallback=function(a,b){this.T?void 0!==b?a.call(b):a():(this.A||(this.A=[]),this.A.push(void 0!==b?Xa(a,b):a))};
F.prototype.R=function(){if(this.A)for(;this.A.length;)this.A.shift()()};function Fc(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Fc.prototype.stopPropagation=function(){this.j=!0};
Fc.prototype.preventDefault=function(){this.defaultPrevented=!0};var Gc=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();var Hc=Oa(610401301),Ic=Oa(188588736);function Jc(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Kc,Lc=C.navigator;Kc=Lc?Lc.userAgentData||null:null;function Mc(a){return Hc?Kc?Kc.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function H(a){return-1!=Jc().indexOf(a)}
;function Nc(){return Hc?!!Kc&&0<Kc.brands.length:!1}
function Oc(){return Nc()?!1:H("Opera")}
function Pc(){return H("Firefox")||H("FxiOS")}
function Qc(){return Nc()?Mc("Chromium"):(H("Chrome")||H("CriOS"))&&!(Nc()?0:H("Edge"))||H("Silk")}
;function Rc(){return Hc?!!Kc&&!!Kc.platform:!1}
function Sc(){return H("iPhone")&&!H("iPod")&&!H("iPad")}
;function Tc(a){Tc[" "](a);return a}
Tc[" "]=function(){};var Uc=Oc(),Vc=Nc()?!1:H("Trident")||H("MSIE"),Wc=H("Edge"),Xc=H("Gecko")&&!(-1!=Jc().toLowerCase().indexOf("webkit")&&!H("Edge"))&&!(H("Trident")||H("MSIE"))&&!H("Edge"),Yc=-1!=Jc().toLowerCase().indexOf("webkit")&&!H("Edge");Yc&&H("Mobile");Rc()||H("Macintosh");Rc()||H("Windows");(Rc()?"Linux"===Kc.platform:H("Linux"))||Rc()||H("CrOS");var Zc=Rc()?"Android"===Kc.platform:H("Android");Sc();H("iPad");H("iPod");Sc()||H("iPad")||H("iPod");Jc().toLowerCase().indexOf("kaios");function $c(a,b){Fc.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
$a($c,Fc);var ad={2:"touch",3:"pen",4:"mouse"};
$c.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Xc){a:{try{Tc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:ad[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&$c.Ba.preventDefault.call(this)};
$c.prototype.stopPropagation=function(){$c.Ba.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
$c.prototype.preventDefault=function(){$c.Ba.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var bd="closure_listenable_"+(1E6*Math.random()|0);var cd=0;function dd(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.dc=e;this.key=++cd;this.Lb=this.Wb=!1}
function ed(a){a.Lb=!0;a.listener=null;a.proxy=null;a.src=null;a.dc=null}
;function fd(a){this.src=a;this.listeners={};this.h=0}
fd.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=gd(a,b,d,e);-1<g?(b=a[g],c||(b.Wb=!1)):(b=new dd(b,this.src,f,!!d,e),b.Wb=c,a.push(b));return b};
fd.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=gd(e,b,c,d);return-1<b?(ed(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function hd(a,b){var c=b.type;c in a.listeners&&Ib(a.listeners[c],b)&&(ed(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function gd(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Lb&&f.listener==b&&f.capture==!!c&&f.dc==d)return e}return-1}
;var id="closure_lm_"+(1E6*Math.random()|0),jd={},kd=0;function ld(a,b,c,d,e){if(d&&d.once)md(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)ld(a,b[f],c,d,e);else c=nd(c),a&&a[bd]?a.listen(b,c,Ra(d)?!!d.capture:!!d,e):od(a,b,c,!1,d,e)}
function od(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ra(e)?!!e.capture:!!e,h=pd(a);h||(a[id]=h=new fd(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=qd();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Gc||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(rd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");kd++}}
function qd(){function a(c){return b.call(a.src,a.listener,c)}
var b=sd;return a}
function md(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)md(a,b[f],c,d,e);else c=nd(c),a&&a[bd]?a.h.add(String(b),c,!0,Ra(d)?!!d.capture:!!d,e):od(a,b,c,!0,d,e)}
function td(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)td(a,b[f],c,d,e);else(d=Ra(d)?!!d.capture:!!d,c=nd(c),a&&a[bd])?a.h.remove(String(b),c,d,e):a&&(a=pd(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=gd(b,c,d,e)),(c=-1<a?b[a]:null)&&ud(c))}
function ud(a){if("number"!==typeof a&&a&&!a.Lb){var b=a.src;if(b&&b[bd])hd(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(rd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);kd--;(c=pd(b))?(hd(c,a),0==c.h&&(c.src=null,b[id]=null)):ed(a)}}}
function rd(a){return a in jd?jd[a]:jd[a]="on"+a}
function sd(a,b){if(a.Lb)a=!0;else{b=new $c(b,this);var c=a.listener,d=a.dc||a.src;a.Wb&&ud(a);a=c.call(d,b)}return a}
function pd(a){a=a[id];return a instanceof fd?a:null}
var vd="__closure_events_fn_"+(1E9*Math.random()>>>0);function nd(a){if("function"===typeof a)return a;a[vd]||(a[vd]=function(b){return a.handleEvent(b)});
return a[vd]}
;function wd(){F.call(this);this.h=new fd(this);this.Wa=this;this.fa=null}
$a(wd,F);wd.prototype[bd]=!0;m=wd.prototype;m.addEventListener=function(a,b,c,d){ld(this,a,b,c,d)};
m.removeEventListener=function(a,b,c,d){td(this,a,b,c,d)};
function xd(a,b){var c=a.fa;if(c){var d=[];for(var e=1;c;c=c.fa)d.push(c),++e}a=a.Wa;c=b.type||b;"string"===typeof b?b=new Fc(b,a):b instanceof Fc?b.target=b.target||a:(e=b,b=new Fc(c,a),Ub(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=yd(g,c,!0,b)&&e}b.j||(g=b.h=a,e=yd(g,c,!0,b)&&e,b.j||(e=yd(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=yd(g,c,!1,b)&&e}
m.R=function(){wd.Ba.R.call(this);this.removeAllListeners();this.fa=null};
m.listen=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
m.removeAllListeners=function(a){if(this.h){var b=this.h;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,ed(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function yd(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Lb&&g.capture==c){var h=g.listener,k=g.dc||g.src;g.Wb&&hd(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function zd(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
zd.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Ad(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function Bd(){}
function Cd(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function Dd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=Dd.prototype;m.clone=function(){return new Dd(this.x,this.y)};
m.equals=function(a){return a instanceof Dd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
m.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function Ed(a,b){this.width=a;this.height=b}
m=Ed.prototype;m.clone=function(){return new Ed(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function Fd(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Gd(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function Hd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Id;function Jd(){var a=C.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!H("Presto")&&(a=function(){var e=Gd("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Xa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.bd;c.bd=null;e()}};
return function(e){d.next={bd:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function Kd(a){C.setTimeout(function(){throw a;},0)}
;function Ld(){this.i=this.h=null}
Ld.prototype.add=function(a,b){var c=Md.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Ld.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Md=new zd(function(){return new Nd},function(a){return a.reset()});
function Nd(){this.next=this.scope=this.h=null}
Nd.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Nd.prototype.reset=function(){this.next=this.scope=this.h=null};var Od,Pd=!1,Qd=new Ld;function Rd(a,b){Od||Sd();Pd||(Od(),Pd=!0);Qd.add(a,b)}
function Sd(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);Od=function(){a.then(Td)}}else Od=function(){var b=Td;
"function"!==typeof C.setImmediate||C.Window&&C.Window.prototype&&C.Window.prototype.setImmediate==C.setImmediate?(Id||(Id=Jd()),Id(b)):C.setImmediate(b)}}
function Td(){for(var a;a=Qd.remove();){try{a.h.call(a.scope)}catch(b){Kd(b)}Ad(Md,a)}Pd=!1}
;function Ud(a){this.h=0;this.v=void 0;this.l=this.i=this.j=null;this.A=this.m=!1;if(a!=Bd)try{var b=this;a.call(void 0,function(c){Vd(b,2,c)},function(c){Vd(b,3,c)})}catch(c){Vd(this,3,c)}}
function Wd(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
Wd.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var Xd=new zd(function(){return new Wd},function(a){a.reset()});
function Yd(a,b,c){var d=Xd.get();d.i=a;d.h=b;d.context=c;return d}
function Zd(a){return new Ud(function(b,c){c(a)})}
Ud.prototype.then=function(a,b,c){return $d(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Ud.prototype.$goog_Thenable=!0;m=Ud.prototype;m.oc=function(a,b){return $d(this,null,a,b)};
m.catch=Ud.prototype.oc;m.cancel=function(a){if(0==this.h){var b=new ae(a);Rd(function(){be(this,b)},this)}};
function be(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?be(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):ce(c),de(c,e,3,b)))}a.j=null}else Vd(a,3,b)}
function ee(a,b){a.i||2!=a.h&&3!=a.h||fe(a);a.l?a.l.next=b:a.i=b;a.l=b}
function $d(a,b,c,d){var e=Yd(null,null,null);e.child=new Ud(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof ae?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;ee(a,e);return e.child}
m.nf=function(a){this.h=0;Vd(this,2,a)};
m.pf=function(a){this.h=0;Vd(this,3,a)};
function Vd(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.nf,f=a.pf;if(d instanceof Ud){ee(d,Yd(e||Bd,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ra(d))try{var k=d.then;if("function"===typeof k){ge(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.v=c,a.h=b,a.j=null,fe(a),3!=b||c instanceof ae||he(a,c))}}
function ge(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function fe(a){a.m||(a.m=!0,Rd(a.ce,a))}
function ce(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
m.ce=function(){for(var a;a=ce(this);)de(this,a,this.h,this.v);this.m=!1};
function de(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.A;a=a.j)a.A=!1;if(b.child)b.child.j=null,ie(b,c,d);else try{b.j?b.i.call(b.context):ie(b,c,d)}catch(e){je.call(null,e)}Ad(Xd,b)}
function ie(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function he(a,b){a.A=!0;Rd(function(){a.A&&je.call(null,b)})}
var je=Kd;function ae(a){bb.call(this,a)}
$a(ae,bb);ae.prototype.name="cancel";function ke(a,b){wd.call(this);this.j=a||1;this.i=b||C;this.l=Xa(this.kf,this);this.m=Za()}
$a(ke,wd);m=ke.prototype;m.enabled=!1;m.Ea=null;m.setInterval=function(a){this.j=a;this.Ea&&this.enabled?(this.stop(),this.start()):this.Ea&&this.stop()};
m.kf=function(){if(this.enabled){var a=Za()-this.m;0<a&&a<.8*this.j?this.Ea=this.i.setTimeout(this.l,this.j-a):(this.Ea&&(this.i.clearTimeout(this.Ea),this.Ea=null),xd(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
m.start=function(){this.enabled=!0;this.Ea||(this.Ea=this.i.setTimeout(this.l,this.j),this.m=Za())};
m.stop=function(){this.enabled=!1;this.Ea&&(this.i.clearTimeout(this.Ea),this.Ea=null)};
m.R=function(){ke.Ba.R.call(this);this.stop();delete this.i};
function le(a,b,c){if("function"===typeof a)c&&(a=Xa(a,c));else if(a&&"function"==typeof a.handleEvent)a=Xa(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:C.setTimeout(a,b||0)}
;function me(a){F.call(this);this.F=a;this.j=0;this.l=100;this.m=!1;this.i=new Map;this.v=new Set;this.flushInterval=3E4;this.h=new ke(this.flushInterval);this.h.listen("tick",this.Aa,!1,this);Ec(this,this.h)}
w(me,F);m=me.prototype;m.sendIsolatedPayload=function(a){this.m=a;this.l=1};
function ne(a){a.h.enabled||a.h.start();a.j++;a.j>=a.l&&a.Aa()}
m.Aa=function(){var a=this.i.values();a=[].concat(ma(a)).filter(function(b){return b.h.size});
a.length&&this.F.flush(a,this.m);oe(a);this.j=0;this.h.enabled&&this.h.stop()};
m.Rb=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Ac(a,b))};
m.uc=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Bc(a,b))};
function pe(a,b){return a.v.has(b)?void 0:a.i.get(b)}
m.Pb=function(a){this.Od(a,1,B.apply(1,arguments))};
m.Od=function(a,b){var c=B.apply(2,arguments),d=pe(this,a);d&&d instanceof Ac&&(d.i(b,c),ne(this))};
m.record=function(a,b){var c=B.apply(2,arguments),d=pe(this,a);d&&d instanceof Bc&&(d.record(b,c),ne(this))};
function oe(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function qe(a){this.h=a;this.h.Rb("/client_streamz/bg/fic",{oa:3,na:"ke"})}
function re(a){this.h=a;this.h.Rb("/client_streamz/bg/fiec",{oa:3,na:"rk"},{oa:3,na:"ke"},{oa:2,na:"ec"},{oa:3,na:"em"})}
function se(a){this.h=a;this.h.uc("/client_streamz/bg/fil",{oa:3,na:"rk"},{oa:3,na:"ke"})}
se.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fil",a,b,c)};
function te(a){this.h=a;this.h.Rb("/client_streamz/bg/fcc",{oa:2,na:"ph"},{oa:3,na:"ke"})}
function ue(a){this.h=a;this.h.uc("/client_streamz/bg/fcd",{oa:2,na:"ph"},{oa:3,na:"ke"})}
ue.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fcd",a,b,c)};
function ve(a){this.h=a;this.h.Rb("/client_streamz/bg/fsc",{oa:3,na:"rk"},{oa:3,na:"ke"})}
function we(a){this.h=a;this.h.uc("/client_streamz/bg/fsl",{oa:3,na:"rk"},{oa:3,na:"ke"})}
we.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fsl",a,b,c)};var xe={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);0<a;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function ye(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=ze(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;12<=g;g-=12,h+=12)c+=Ae(a,h),d+=Ae(a,h+4),e+=Ae(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return xe.toString(e)}
function ze(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function Ae(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;Pc();var Be=Sc()||H("iPod"),Ce=H("iPad");!H("Android")||Qc()||Pc()||Oc()||H("Silk");Qc();var De=H("Safari")&&!(Qc()||(Nc()?0:H("Coast"))||Oc()||(Nc()?0:H("Edge"))||(Nc()?Mc("Microsoft Edge"):H("Edg/"))||(Nc()?Mc("Opera"):H("OPR"))||Pc()||H("Silk")||H("Android"))&&!(Sc()||H("iPad")||H("iPod"));var Ee={},Fe=null;function Ge(a,b){Qa(a);void 0===b&&(b=0);He();b=Ee[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Ie(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;Je(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Je(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),n=Fe[l];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
He();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function He(){if(!Fe){Fe={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Ee[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===Fe[f]&&(Fe[f]=e)}}}}
;var Ke="undefined"!==typeof Uint8Array,Le=!Vc&&"function"===typeof btoa;function Me(a){if(!Le)return Ge(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var Ne=/[-_.]/g,Oe={"-":"+",_:"/",".":"="};function Pe(a){return Oe[a]||""}
function Qe(a){return Ke&&null!=a&&a instanceof Uint8Array}
var Re={};var Se;function Te(a){if(a!==Re)throw Error("illegal external caller");}
function Ue(a,b){Te(b);this.h=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
Ue.prototype.sizeBytes=function(){Te(Re);var a=this.h;if(null!=a&&!Qe(a))if("string"===typeof a)if(Le){Ne.test(a)&&(a=a.replace(Ne,Pe));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=Ie(a);else Pa(a),a=null;return(a=null==a?a:this.h=a)?a.length:0};function Ve(){return"function"===typeof BigInt}
;function We(a){return Array.prototype.slice.call(a)}
;function Xe(a){return"function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():a}
var Ye=Xe(),Ze=Xe("0di"),$e=Xe("2ex");Math.max.apply(Math,ma(Object.values({Qf:1,Of:2,Nf:4,Tf:8,Sf:16,Rf:32,Ef:64,Vf:128,Mf:256,Lf:512,Pf:1024,Jf:2048,Uf:4096,Kf:8192})));var af=Ye?function(a,b){a[Ye]|=b}:function(a,b){void 0!==a.Qa?a.Qa|=b:Object.defineProperties(a,{Qa:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function bf(a,b,c){return c?a|b:a&~b}
var cf=Ye?function(a){return a[Ye]|0}:function(a){return a.Qa|0},df=Ye?function(a){return a[Ye]}:function(a){return a.Qa},ef=Ye?function(a,b){a[Ye]=b;
return a}:function(a,b){void 0!==a.Qa?a.Qa=b:Object.defineProperties(a,{Qa:{value:b,
configurable:!0,writable:!0,enumerable:!1}});return a};
function ff(a){af(a,34);return a}
function gf(a,b){ef(b,(a|0)&-14591)}
function hf(a,b){ef(b,(a|34)&-14557)}
function jf(a){a=a>>14&1023;return 0===a?536870912:a}
;var kf={},lf={};function mf(a){return!(!a||"object"!==typeof a||a.ye!==lf)}
function nf(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var of;function pf(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=cf(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;ef(a,d|1);return!0}
var qf,rf=[];ef(rf,55);qf=Object.freeze(rf);function sf(a){if(a&2)throw Error();}
function tf(a,b,c){this.j=0;this.h=a;this.i=b;this.thisArg=c}
tf.prototype.next=function(){if(this.j<this.h.length){var a=this.h[this.j++];return{done:!1,value:this.i?this.i.call(this.thisArg,a):a}}return{done:!0,value:void 0}};
tf.prototype[Symbol.iterator]=function(){return new tf(this.h,this.i,this.thisArg)};
Object.freeze(new function(){});
Object.freeze(new function(){});var uf=0,vf=0;function wf(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);b&&(c=v(xf(c,a)),b=c.next().value,a=c.next().value,c=b);uf=c>>>0;vf=a>>>0}
function yf(a,b){b>>>=0;a>>>=0;if(2097151>=b)var c=""+(4294967296*b+a);else Ve()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+6777216*c+6710656*b,c+=8147497*b,b*=2,1E7<=a&&(c+=Math.floor(a/1E7),a%=1E7),1E7<=c&&(b+=Math.floor(c/1E7),c%=1E7),c=b+zf(c)+zf(a));return c}
function zf(a){a=String(a);return"0000000".slice(a.length)+a}
function Af(){var a=uf,b=vf;b&2147483648?Ve()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=v(xf(a,b)),a=b.next().value,b=b.next().value,a="-"+yf(a,b)):a=yf(a,b);return a}
function xf(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;var Bf;function Cf(a){a=Error(a);ec(a,"warning");return a}
;function Df(a){return a.displayName||a.name||"unknown type name"}
function Ef(a){if(null!=a&&"boolean"!==typeof a)throw Error("Expected boolean but got "+Pa(a)+": "+a);return a}
var Ff=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Gf(a){var b=typeof a;return"number"===b?Number.isFinite(a):"string"!==b?!1:Ff.test(a)}
function Hf(a){if(null!=a){if("number"!==typeof a)throw Cf("int32");if(!Number.isFinite(a))throw Cf("int32");a|=0}return a}
function If(a){if(null==a)return a;if("string"===typeof a){if(!a)return;a=+a}if("number"===typeof a)return Number.isFinite(a)?a|0:void 0}
function Jf(a){if(null!=a){var b=!!b;if(!Gf(a))throw Cf("int64");a="string"===typeof a?Kf(a):b?Lf(a):Mf(a)}return a}
function Nf(a){return"-"===a[0]?20>a.length?!0:20===a.length&&-922337<Number(a.substring(0,7)):19>a.length?!0:19===a.length&&922337>Number(a.substring(0,6))}
function Mf(a){Gf(a);a=Math.trunc(a);if(!Number.isSafeInteger(a)){wf(a);var b=uf,c=vf;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,0==b&&(c=c+1>>>0);b=4294967296*c+(b>>>0);a=a?-b:b}return a}
function Lf(a){Gf(a);a=Math.trunc(a);if(Number.isSafeInteger(a))a=String(a);else{var b=String(a);Nf(b)?a=b:(wf(a),a=Af())}return a}
function Kf(a){Gf(a);var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");-1!==b&&(a=a.substring(0,b));a.indexOf(".");if(!Nf(a)){if(16>a.length)wf(Number(a));else if(Ve())a=BigInt(a),uf=Number(a&BigInt(4294967295))>>>0,vf=Number(a>>BigInt(32)&BigInt(4294967295));else{b=+("-"===a[0]);vf=uf=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),vf*=1E6,uf=1E6*uf+d,4294967296<=uf&&(vf+=Math.trunc(uf/4294967296),vf>>>=0,uf>>>=0);b&&(b=v(xf(uf,vf)),
a=b.next().value,b=b.next().value,uf=a,vf=b)}a=Af()}return a}
function Of(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function Pf(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Df(b)+" but got "+(a&&Df(a.constructor)));}
function Qf(a,b,c,d){if(null!=a&&"object"===typeof a&&a.Ic===kf)return a;if(!Array.isArray(a))return c?d&2?(a=b[Ze])?b=a:(a=new b,ff(a.D),b=b[Ze]=a):b=new b:b=void 0,b;var e=c=cf(a);0===e&&(e|=d&32);e|=d&2;e!==c&&ef(a,e);return new b(a)}
;var Rf=function(){try{var a=function(){return ra(Map,[],this.constructor)};
w(a,Map);new a;return!1}catch(b){return!0}}();
function Sf(){this.h=new Map}
m=Sf.prototype;m.get=function(a){return this.h.get(a)};
m.set=function(a,b){this.h.set(a,b);this.size=this.h.size;return this};
m.delete=function(a){a=this.h.delete(a);this.size=this.h.size;return a};
m.clear=function(){this.h.clear();this.size=this.h.size};
m.has=function(a){return this.h.has(a)};
m.entries=function(){return this.h.entries()};
m.keys=function(){return this.h.keys()};
m.values=function(){return this.h.values()};
m.forEach=function(a,b){return this.h.forEach(a,b)};
Sf.prototype[Symbol.iterator]=function(){return this.entries()};
var Tf=function(){function a(){return ra(Map,[],this.constructor)}
if(Rf)return Object.setPrototypeOf(Sf.prototype,Map.prototype),Object.defineProperties(Sf.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Sf;w(a,Map);return a}();
function Uf(a){return a}
function Vf(a,b,c,d){c=void 0===c?Uf:c;d=void 0===d?Uf:d;var e=Tf.call(this)||this;var f=cf(a);f|=64;ef(a,f);e.Sb=f;e.pc=b;e.Fb=c;e.Sc=e.pc?Wf:d;for(var g=0;g<a.length;g++){var h=a[g],k=c(h[0],!1,!0),l=h[1];b?void 0===l&&(l=null):l=d(h[1],!1,!0,void 0,void 0,f);Tf.prototype.set.call(e,k,l)}return e}
w(Vf,Tf);function Xf(a){if(a.Sb&2)throw Error("Cannot mutate an immutable Map");}
function Yf(a,b){b=void 0===b?Zf:b;if(0!==a.size)return $f(a,b)}
function $f(a,b){b=void 0===b?Zf:b;var c=[];a=Tf.prototype.entries.call(a);for(var d;!(d=a.next()).done;)d=d.value,d[0]=b(d[0]),d[1]=b(d[1]),c.push(d);return c}
m=Vf.prototype;m.getLength=function(){return this.size};
m.clear=function(){Xf(this);Tf.prototype.clear.call(this)};
m.delete=function(a){Xf(this);return Tf.prototype.delete.call(this,this.Fb(a,!0,!1))};
m.del=function(a){return this.delete(a)};
m.entries=function(){var a=Array.from(Tf.prototype.keys.call(this));return new tf(a,ag,this)};
m.keys=function(){return Tf.prototype.keys.call(this)};
m.values=function(){var a=Array.from(Tf.prototype.keys.call(this));return new tf(a,Vf.prototype.get,this)};
m.forEach=function(a,b){var c=this;Tf.prototype.forEach.call(this,function(d,e){a.call(b,c.get(e),e,c)})};
m.set=function(a,b){Xf(this);a=this.Fb(a,!0,!1);return null==a?this:null==b?(Tf.prototype.delete.call(this,a),this):Tf.prototype.set.call(this,a,this.Sc(b,!0,!0,this.pc,!1,this.Sb))};
m.has=function(a){return Tf.prototype.has.call(this,this.Fb(a,!1,!1))};
m.get=function(a){a=this.Fb(a,!1,!1);var b=Tf.prototype.get.call(this,a);if(void 0!==b){var c=this.pc;return c?(c=this.Sc(b,!1,!0,c,this.ag,this.Sb),c!==b&&Tf.prototype.set.call(this,a,c),c):b}};
Vf.prototype[Symbol.iterator]=function(){return this.entries()};
Vf.prototype.toJSON=void 0;Vf.prototype.ye=lf;function Wf(a,b,c,d,e,f){b&&Pf(a,d);a=Qf(a,d,c,f);e&&(a=bg(a));f&2&&cf(a.D);return a}
function Zf(a){return a}
function ag(a){return[a,this.get(a)]}
;var cg;function dg(a,b){cf(b);cg=b;a=new a(b);cg=void 0;return a}
function I(a,b,c){null==a&&(a=cg);cg=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error("narr");d=cf(a);if(d&2048)throw Error("farr");if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error("mid");a:{c=a;var e=c.length;if(e){var f=e-1;if(nf(c[f])){d|=256;b=f-(+!!(d&512)-1);if(1024<=b)throw Error("pvtlmt");d=d&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,e-(+!!(d&512)-1));if(1024<b)throw Error("spvt");d=d&-16760833|(b&1023)<<
14}}}ef(a,d);return a}
;function eg(a,b){return fg(b)}
function fg(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(pf(a,void 0,0))return}else{if(Qe(a))return Me(a);if(a instanceof Ue){var b=a.h;return null==b?"":"string"===typeof b?b:a.h=Me(b)}if(a instanceof Vf)return Yf(a)}}return a}
;function gg(a,b,c){a=We(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function hg(a,b,c,d,e){if(null!=a){if(Array.isArray(a))a=pf(a,void 0,0)?void 0:e&&cf(a)&2?a:ig(a,b,c,void 0!==d,e);else if(nf(a)){var f={},g;for(g in a)f[g]=hg(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function ig(a,b,c,d,e){var f=d||c?cf(a):0;d=d?!!(f&32):void 0;a=We(a);for(var g=0;g<a.length;g++)a[g]=hg(a[g],b,c,d,e);c&&c(f,a);return a}
function jg(a){return hg(a,kg,void 0,void 0,!1)}
function kg(a){return a.Ic===kf?a.toJSON():a instanceof Vf?Yf(a,jg):fg(a)}
;function lg(a,b,c){c=void 0===c?hf:c;if(null!=a){if(Ke&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=cf(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?ef(a,(d|34)&-12293):ig(a,lg,d&4?hf:c,!0,!0)}a.Ic===kf?(c=a.D,d=df(c),a=d&2?a:dg(a.constructor,mg(c,d,!0))):a instanceof Vf&&!(a.Sb&2)&&(c=ff($f(a,lg)),a=new Vf(c,a.pc,a.Fb,a.Sc));return a}}
function mg(a,b,c){var d=c||b&2?hf:gf,e=!!(b&32);a=gg(a,b,function(f){return lg(f,e,d)});
af(a,32|(c?2:0));return a}
function bg(a){var b=a.D,c=df(b);return c&2?dg(a.constructor,mg(b,c,!1)):a}
;function ng(a,b){a=a.D;return og(a,df(a),b)}
function pg(a,b,c,d){b=d+(+!!(b&512)-1);if(!(0>b||b>=a.length||b>=c))return a[b]}
function og(a,b,c,d){if(-1===c)return null;var e=jf(b);if(c>=e){if(b&256)return a[a.length-1][c]}else{var f=a.length;if(d&&b&256&&(d=a[f-1][c],null!=d)){if(pg(a,b,e,c)&&null!=$e){var g;a=null!=(g=Bf)?g:Bf={};g=a[$e]||0;4<=g||(a[$e]=g+1,g=Error(),ec(g,"incident"),Kd(g))}return d}return pg(a,b,e,c)}}
function qg(a,b,c){var d=a.D,e=df(d);sf(e);rg(d,e,b,c);return a}
function rg(a,b,c,d,e){nf(d);var f=jf(b);if(c>=f||e){var g=b;if(b&256)e=a[a.length-1];else{if(null==d)return g;e=a[f+(+!!(b&512)-1)]={};g|=256}e[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);g!==b&&ef(a,g);return g}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function sg(a){return void 0!==tg(a,ug,11,!1)}
function vg(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function wg(a,b,c,d){a=a.D;var e=df(a);sf(e);for(var f=e,g=0,h=0;h<c.length;h++){var k=c[h];null!=og(a,f,k)&&(0!==g&&(f=rg(a,f,g)),g=k)}(c=g)&&c!==b&&null!=d&&(e=rg(a,e,c));rg(a,e,b,d)}
function tg(a,b,c,d){a=a.D;var e=df(a),f=og(a,e,c,d);b=Qf(f,b,!1,e);b!==f&&null!=b&&rg(a,e,c,b,d);return b}
function xg(a,b,c,d){d=void 0===d?!1:d;b=tg(a,b,c,d);if(null==b)return b;a=a.D;var e=df(a);if(!(e&2)){var f=bg(b);f!==b&&(b=f,rg(a,e,c,b,d))}return b}
function yg(a,b,c,d){null!=d?Pf(d,b):d=void 0;return qg(a,c,d)}
function zg(a,b,c,d){var e=a.D,f=df(e);sf(f);if(null==d)return rg(e,f,c),a;if(!Array.isArray(d))throw Cf();for(var g=cf(d),h=g,k=!!(2&g)||!!(2048&g),l=k||Object.isFrozen(d),n=!l&&!1,p=!0,r=!0,t=0;t<d.length;t++){var x=d[t];Pf(x,b);k||(x=!!(cf(x.D)&2),p&&(p=!x),r&&(r=x))}k||(g=bf(g,5,!0),g=bf(g,8,p),g=bf(g,16,r));if(n||l&&g!==h)d=We(d),h=0,g=Ag(g,f),g=Bg(g,f,!0);g!==h&&ef(d,g);rg(e,f,c,d);return a}
function Ag(a,b){a=bf(a,2,!!(2&b));a=bf(a,32,!0);return a=bf(a,2048,!1)}
function Bg(a,b,c){32&b&&c||(a=bf(a,32,!1));return a}
function Cg(a,b){a=ng(a,b);var c;null==a?c=a:Gf(a)?"number"===typeof a?c=Mf(a):c=Kf(a):c=void 0;return c}
function Dg(a){a=ng(a,1);var b=void 0===b?!1:b;b=null==a?a:Gf(a)?"string"===typeof a?Kf(a):b?Lf(a):Mf(a):void 0;return b}
function Eg(a){a=ng(a,1);return null==a?a:Number.isFinite(a)?a|0:void 0}
function Fg(a,b,c){return qg(a,b,Of(c))}
function Gg(a,b,c){if(null!=c){if(!Number.isFinite(c))throw Cf("enum");c|=0}return qg(a,b,c)}
;function K(a,b,c){this.D=I(a,b,c)}
m=K.prototype;m.toJSON=function(){if(of)var a=Hg(this,this.D,!1);else a=ig(this.D,kg,void 0,void 0,!1),a=Hg(this,a,!0);return a};
m.serialize=function(){of=!0;try{return JSON.stringify(this.toJSON(),eg)}finally{of=!1}};
function Ig(a,b){if(null==b||""==b)return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");af(b,32);return dg(a,b)}
m.clone=function(){var a=this.D,b=df(a);return dg(this.constructor,mg(a,b,!1))};
m.Ic=kf;m.toString=function(){return Hg(this,this.D,!1).toString()};
function Hg(a,b,c){var d=Ic?void 0:a.constructor.Sa;var e=df(c?a.D:b);a=b.length;if(!a)return b;var f;if(nf(c=b[a-1])){a:{var g=c;var h={},k=!1,l;for(l in g){var n=g[l];if(Array.isArray(n)){var p=n;if(pf(n,d,+l)||mf(n)&&0===n.size)n=null;n!=p&&(k=!0)}null!=n?h[l]=n:k=!0}if(k){for(var r in h){g=h;break a}g=null}}g!=c&&(f=!0);a--}for(l=+!!(e&512)-1;0<a;a--){r=a-1;c=b[r];r-=l;if(!(null==c||pf(c,d,r)||mf(c)&&0===c.size))break;var t=!0}if(!f&&!t)return b;b=Array.prototype.slice.call(b,0,a);g&&b.push(g);
return b}
;function Jg(a){this.D=I(a)}
w(Jg,K);var Kg=[1,2,3];function Lg(a){this.D=I(a)}
w(Lg,K);var Mg=[1,2,3];function Pg(a){this.D=I(a)}
w(Pg,K);Pg.Sa=[1];function Qg(a){this.D=I(a)}
w(Qg,K);Qg.Sa=[3,6,4];function Rg(a){this.D=I(a)}
w(Rg,K);Rg.Sa=[1];function Sg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";0===a.indexOf("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Tg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var r=g,t=0;64>t;t+=4)r[t/4]=p[t]<<24|p[t+1]<<16|p[t+2]<<8|p[t+3];for(t=16;80>t;t++)p=r[t-3]^r[t-8]^r[t-14]^r[t-16],r[t]=(p<<1|p>>>31)&4294967295;p=e[0];var x=e[1],z=e[2],y=e[3],J=e[4];for(t=0;80>t;t++){if(40>t)if(20>t){var G=y^x&(z^y);var R=1518500249}else G=x^z^y,R=1859775393;else 60>t?(G=x&z|y&(x|z),R=2400959708):(G=x^z^y,R=3395469782);G=((p<<5|p>>>27)&4294967295)+G+J+R+r[t]&4294967295;J=y;y=z;z=(x<<30|x>>>2)&4294967295;x=p;p=G}e[0]=e[0]+p&4294967295;e[1]=e[1]+x&4294967295;e[2]=
e[2]+z&4294967295;e[3]=e[3]+y&4294967295;e[4]=e[4]+J&4294967295}
function c(p,r){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var t=[],x=0,z=p.length;x<z;++x)t.push(p.charCodeAt(x));p=t}r||(r=p.length);t=0;if(0==l)for(;t+64<r;)b(p.slice(t,t+64)),t+=64,n+=64;for(;t<r;)if(f[l++]=p[t++],n++,64==l)for(l=0,b(f);t+64<r;)b(p.slice(t,t+64)),t+=64,n+=64}
function d(){var p=[],r=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var t=63;56<=t;t--)f[t]=r&255,r>>>=8;b(f);for(t=r=0;5>t;t++)for(var x=24;0<=x;x-=8)p[r++]=e[t]>>x&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Yd:function(){for(var p=d(),r="",t=0;t<p.length;t++)r+="0123456789ABCDEF".charAt(Math.floor(p[t]/16))+"0123456789ABCDEF".charAt(p[t]%16);return r}}}
;function Ug(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,Vg(Sg(d),a,c||null)].join(" "):null}
function Vg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],Db(d,function(h){e.push(h)}),Wg(e.join(" "));
var f=[],g=[];Db(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];Db(d,function(h){e.push(h)});
a=Wg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Wg(a){var b=Tg();b.update(a);return b.Yd().toLowerCase()}
;var Xg={};function Yg(a){this.h=a||{cookie:""}}
m=Yg.prototype;m.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Jb:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Se;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Jb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=db(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Jb:0,path:b,domain:c});return d};
m.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=db(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Zg=new Yg("undefined"==typeof document?null:document);function $g(a){return!!Xg.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function ah(a){a=void 0===a?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;$g(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if("undefined"!==typeof document){var c=new Yg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID")||c.get("OSID");$g(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function bh(a,b,c,d){(a=C[a])||"undefined"===typeof document||(a=(new Yg(document)).get(b));return a?Ug(a,c,d):null}
function ch(a,b){b=void 0===b?!1:b;var c=Sg(String(C.location.href)),d=[];if(ah(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?C.__SAPISID:C.__APISID;e||"undefined"===typeof document||(e=new Yg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Ug(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&$g(b)&&((b=bh("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=bh("__3PSAPISID","__Secure-3PAPISID",
"SAPISID3PHASH",a))&&d.push(a))}return 0==d.length?null:d.join(" ")}
;function dh(a){this.D=I(a)}
w(dh,K);dh.Sa=[2];function eh(a,b){this.intervalMs=a;this.callback=b;this.enabled=!1;this.h=function(){return Za()};
this.i=this.h()}
eh.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
eh.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.i=this.h())};
eh.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
eh.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.h()-this.i,0);b<.8*this.intervalMs?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.callback(),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function fh(a){this.D=I(a)}
w(fh,K);function gh(a){this.D=I(a)}
w(gh,K);function hh(a){this.h=this.i=this.j=a}
hh.prototype.reset=function(){this.h=this.i=this.j};
hh.prototype.getValue=function(){return this.i};function ih(a){this.D=I(a)}
w(ih,K);ih.prototype.cc=function(){return Eg(this)};function jh(a){this.D=I(a)}
w(jh,K);function kh(a){this.D=I(a)}
w(kh,K);function lh(a,b){zg(a,jh,1,b)}
kh.Sa=[1];function ug(a){this.D=I(a)}
w(ug,K);var mh=["platform","platformVersion","architecture","model","uaFullVersion"],nh=new kh,oh=null;function ph(a,b){b=void 0===b?mh:b;if(!oh){var c;a=null==(c=a.navigator)?void 0:c.userAgentData;if(!a||"function"!==typeof a.getHighEntropyValues||a.brands&&"function"!==typeof a.brands.map)return Promise.reject(Error("UACH unavailable"));c=(a.brands||[]).map(function(e){var f=new jh;f=Fg(f,1,e.brand);return Fg(f,2,e.version)});
lh(qg(nh,2,Ef(a.mobile)),c);oh=a.getHighEntropyValues(b)}var d=new Set(b);return oh.then(function(e){var f=nh.clone();d.has("platform")&&Fg(f,3,e.platform);d.has("platformVersion")&&Fg(f,4,e.platformVersion);d.has("architecture")&&Fg(f,5,e.architecture);d.has("model")&&Fg(f,6,e.model);d.has("uaFullVersion")&&Fg(f,7,e.uaFullVersion);return f}).catch(function(){return nh.clone()})}
;function qh(a){this.D=I(a)}
w(qh,K);function rh(a){this.D=I(a,4)}
w(rh,K);function sh(a){this.D=I(a,35)}
w(sh,K);sh.Sa=[3,20,27];function th(a){this.D=I(a,19)}
w(th,K);th.prototype.Mb=function(a){return Gg(this,2,a)};
th.Sa=[3,5];function uh(a){this.D=I(a,8)}
w(uh,K);var vh=function(a){return function(b){return Ig(a,b)}}(uh);
uh.Sa=[5,6,7];function wh(a){this.D=I(a)}
w(wh,K);var xh;xh=new function(a,b){this.h=a;this.ctor=b;this.isRepeated=0;this.i=xg;this.defaultValue=void 0}(175237375,wh);function yh(a){F.call(this);var b=this;this.componentId="";this.j=[];this.da="";this.pageId=null;this.fa=this.U=-1;this.experimentIds=null;this.K=this.m=0;this.ha=1;this.timeoutMillis=0;this.logSource=a.logSource;this.Eb=a.Eb||function(){};
this.i=new zh(a.logSource,a.ab);this.network=a.network;this.vb=a.vb||null;this.bufferSize=1E3;this.v=a.qf||null;this.sessionIndex=a.sessionIndex||null;this.Cb=a.Cb||!1;this.logger=null;this.withCredentials=!a.ed;this.ab=a.ab||!1;this.F="undefined"!==typeof URLSearchParams&&!!(new URL(Ah())).searchParams&&!!(new URL(Ah())).searchParams.set;var c=Gg(new qh,1,1);Bh(this.i,c);this.l=new hh(1E4);a=Ch(this,a.Xc);this.h=new eh(this.l.getValue(),a);this.Z=new eh(6E5,a);this.Cb||this.Z.start();this.ab||(document.addEventListener("visibilitychange",
function(){"hidden"===document.visibilityState&&b.wc()}),document.addEventListener("pagehide",this.wc.bind(this)))}
w(yh,F);function Ch(a,b){return a.F?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
m=yh.prototype;m.R=function(){this.wc();this.h.stop();this.Z.stop();F.prototype.R.call(this)};
m.log=function(a){if(this.F){a=a.clone();var b=this.ha++;a=qg(a,21,Jf(b));this.componentId&&Fg(a,26,this.componentId);if(!Dg(a)){var c=Date.now();b=a;c=Number.isFinite(c)?c.toString():"0";qg(b,1,Jf(c))}null==Cg(a,15)&&qg(a,15,Jf(60*(new Date).getTimezoneOffset()));this.experimentIds&&(b=a,c=this.experimentIds.clone(),yg(b,dh,16,c));b=this.j.length-this.bufferSize+1;0<b&&(this.j.splice(0,b),this.m+=b);this.j.push(a);this.Cb||this.h.enabled||this.h.start()}};
m.flush=function(a,b){var c=this;if(0===this.j.length)a&&a();else{var d=Date.now();if(this.fa>d&&this.U<d)b&&b("throttled");else{this.network&&("function"===typeof this.network.cc?Dh(this.i,this.network.cc()):Dh(this.i,0));var e=Eh(this.i,this.j,this.m,this.K,this.vb);d={};var f=this.Eb();f&&(d.Authorization=f);this.v||(this.v=Ah());try{var g=(new URL(this.v)).toString()}catch(k){g=(new URL(this.v,window.location.origin)).toString()}g=new URL(g);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,
g.searchParams.set("authuser",this.sessionIndex));this.pageId&&(Object.defineProperty(d,"X-Goog-PageId",{value:this.pageId}),g.searchParams.set("pageId",this.pageId));if(f&&this.da===f)b&&b("stale-auth-token");else{this.j=[];this.h.enabled&&this.h.stop();this.m=0;var h=e.serialize();d={url:g.toString(),body:h,Yf:1,yd:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis};g=function(k){c.l.reset();c.h.setInterval(c.l.getValue());if(k){var l=null;try{var n=JSON.stringify(JSON.parse(k.replace(")]}'\n",
"")));l=vh(n)}catch(r){}if(l){k=Number;n="-1";n=void 0===n?"0":n;var p=Dg(l);k=k(null!=p?p:n);0<k&&(c.U=Date.now(),c.fa=c.U+k);l=xh.ctor?xh.i(l,xh.ctor,xh.h,!0):xh.i(l,xh.h,null,!0);if(k=null===l?void 0:l)l=-1,l=void 0===l?0:l,k=If(ng(k,1)),l=null!=k?k:l,-1!==l&&(c.l=new hh(1>l?1:l),c.h.setInterval(c.l.getValue()))}}a&&a();c.K=0};
h=function(k,l){var n=e.D;var p=df(n),r=p,t=!(2&p),x=!!(2&r),z=x?1:2;p=1===z;z=2===z;t&&(t=!x);x=og(n,r,3);x=Array.isArray(x)?x:qf;var y=cf(x),J=!!(4&y);if(!J){var G=y;0===G&&(G=Ag(G,r));G=bf(G,1,!0);y=x;var R=r,N=!!(2&G);N&&(R=bf(R,2,!0));for(var da=!N,Ea=!0,O=0,ea=0;O<y.length;O++){var ka=Qf(y[O],sh,!1,R);if(ka instanceof sh){if(!N){var oa=!!(cf(ka.D)&2);da&&(da=!oa);Ea&&(Ea=oa)}y[ea++]=ka}}ea<O&&(y.length=ea);G=bf(G,4,!0);G=bf(G,16,Ea);G=bf(G,8,da);ef(y,G);N&&Object.freeze(y);y=G}G=!!(8&y)||p&&
!x.length;if(t&&!G){vg(y)&&(x=We(x),y=Ag(y,r),r=rg(n,r,3,x));t=x;for(G=0;G<t.length;G++)R=t[G],N=bg(R),R!==N&&(t[G]=N);y=bf(y,8,!0);y=bf(y,16,!t.length);ef(t,y)}vg(y)||(t=y,p?(G=!!(32&y),G||(x=We(x),t=0,r=rg(n,r,3,x)),y=bf(y,!x.length||16&y&&(!J||G)?2:2048,!0)):y=Bg(y,r,!1),y!==t&&ef(x,y),p&&Object.freeze(x));z&&vg(y)&&(x=We(x),y=Ag(y,r),y=Bg(y,r,!1),ef(x,y),rg(n,r,3,x));n=x;r=Cg(e,14);p=c.l;p.h=Math.min(3E5,2*p.h);p.i=Math.min(3E5,p.h+Math.round(.2*(Math.random()-.5)*p.h));c.h.setInterval(c.l.getValue());
401===k&&f&&(c.da=f);r&&(c.m+=r);void 0===l&&(l=c.isRetryable(k));l&&(c.j=n.concat(c.j),c.Cb||c.h.enabled||c.h.start());b&&b("net-send-failed",k);++c.K};
c.network&&c.network.send(d,g,h)}}}};
m.wc=function(){Fh(this.i,!0);this.flush();Fh(this.i,!1)};
m.isRetryable=function(a){return 500<=a&&600>a||401===a||0===a};
function Ah(){return"https://play.google.com/log?format=json&hasfast=true"}
function zh(a,b){this.ab=b=void 0===b?!1:b;this.uach=this.locale=null;this.h=new th;Number.isInteger(a)&&this.h.Mb(a);b||(this.locale=document.documentElement.getAttribute("lang"));Bh(this,new qh)}
zh.prototype.Mb=function(a){this.h.Mb(a);return this};
function Bh(a,b){yg(a.h,qh,1,b);Eg(b)||Gg(b,1,1);if(!a.ab){b=Gh(a);var c=ng(b,5);(null==c||"string"===typeof c)&&c||Fg(b,5,a.locale)}a.uach&&(b=Gh(a),xg(b,kh,9)||yg(b,kh,9,a.uach))}
function Dh(a,b){sg(Hh(a))&&(a=Ih(a),Gg(a,1,b))}
function Fh(a,b){sg(Hh(a))&&(a=Ih(a),qg(a,2,Ef(b)))}
function Hh(a){return xg(a.h,qh,1)}
function Jh(a){var b=void 0===b?mh:b;var c=a.ab?void 0:window;c?ph(c,b).then(function(d){a.uach=d;d=Gh(a);yg(d,kh,9,a.uach);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function Gh(a){a=Hh(a);var b=xg(a,ug,11);b||(b=new ug,yg(a,ug,11,b));return b}
function Ih(a){a=Gh(a);var b=xg(a,ih,10);b||(b=new ih,qg(b,2,Ef(!1)),yg(a,ih,10,b));return b}
function Eh(a,b,c,d,e){var f=0,g=0;c=void 0===c?0:c;f=void 0===f?0:f;g=void 0===g?0:g;d=void 0===d?0:d;if(sg(Hh(a))){var h=Ih(a);qg(h,3,Hf(d))}sg(Hh(a))&&(d=Ih(a),qg(d,4,Hf(f)));sg(Hh(a))&&(f=Ih(a),qg(f,5,Hf(g)));a=a.h.clone();g=Date.now().toString();a=qg(a,4,Jf(g));b=zg(a,sh,3,b);e&&(a=new fh,e=qg(a,13,Hf(e)),a=new gh,e=yg(a,fh,2,e),a=new rh,e=yg(a,gh,1,e),e=Gg(e,2,9),yg(b,rh,18,e));c&&qg(b,14,Jf(c));return b}
;function Kh(){this.Pd="undefined"!==typeof AbortController}
Kh.prototype.send=function(a,b,c){var d=this,e,f,g,h,k,l,n,p,r,t,x,z;return A(function(y){switch(y.h){case 1:return f=(e=d.Pd?new AbortController:void 0)?setTimeout(function(){e.abort()},a.timeoutMillis):void 0,Aa(y,2,3),g=Object.assign({},{method:a.requestType,
headers:Object.assign({},a.yd)},a.body&&{body:a.body},a.withCredentials&&{credentials:"include"},{signal:a.timeoutMillis&&e?e.signal:null}),y.yield(fetch(a.url,g),5);case 5:h=y.i;if(200!==h.status){null==(k=c)||k(h.status);y.B(3);break}if(null==(l=b)){y.B(7);break}p=n=l;return y.yield(h.text(),8);case 8:p(y.i);case 7:case 3:y.K=[y.j];y.l=0;y.A=0;clearTimeout(f);Ca(y);break;case 2:r=Ba(y);switch(null==(t=r)?void 0:t.name){case "AbortError":null==(x=c)||x(408);break;default:null==(z=c)||z(400)}y.B(3)}})};
Kh.prototype.cc=function(){return 4};function Lh(a,b){F.call(this);this.logSource=a;this.sessionIndex=b;this.i="https://play.google.com/log?format=json&hasfast=true";this.h=null;this.j=!1;this.network=null;this.componentId="";this.pageId=this.vb=null}
w(Lh,F);Lh.prototype.ed=function(){this.l=!0;return this};function Mh(a,b,c,d,e,f,g){a=void 0===a?-1:a;b=void 0===b?"":b;c=void 0===c?"":c;d=void 0===d?!1:d;e=void 0===e?"":e;F.call(this);this.logSource=a;this.componentId=b;f?a=f:(a=new Lh(a,"0"),a.componentId=b,Ec(this,a),""!==c&&(a.i=c),d&&(a.j=!0),e&&(a.h=e),g&&(a.network=g),a.network||(a.network=new Kh),b=new yh({logSource:a.logSource,Eb:a.Eb?a.Eb:ch,sessionIndex:a.sessionIndex,qf:a.i,ab:a.j,Cb:!1,ed:a.l,Xc:a.Xc,network:a.network}),Ec(a,b),a.h&&(c=a.h,d=Gh(b.i),Fg(d,7,c)),a.componentId&&(b.componentId=
a.componentId),a.vb&&(b.vb=a.vb),a.pageId&&(b.pageId=a.pageId),Jh(b.i),a.network.Mb&&a.network.Mb(a.logSource),a.network.bf&&a.network.bf(b),a=b);this.h=a}
w(Mh,F);
Mh.prototype.flush=function(a){var b=a||[];if(b.length){a=new Rg;for(var c=[],d=0;d<b.length;d++){var e=b[d];var f=new Qg;f=Fg(f,1,e.l);for(var g=[],h=0;h<e.fields.length;h++)g.push(e.fields[h].na);h=f.D;var k=df(h);sf(k);if(null==g)rg(h,k,3);else{if(!Array.isArray(g))throw Cf();var l=cf(g),n=l,p=!!(2&l)||Object.isFrozen(g),r=!p&&!1;var t=4&l?!1:!0;if(t)for(l=21,p&&(g=We(g),n=0,l=Ag(l,k),l=Bg(l,k,!0)),t=0;t<g.length;t++){p=g;var x=t,z=g[t];if("string"!==typeof z)throw Error();p[x]=z}r&&(g=We(g),n=
0,l=Ag(l,k),l=Bg(l,k,!0));l!==n&&ef(g,l);rg(h,k,3,g)}g=[];h=[];k=v(e.h.keys());for(l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];n=e.j;r=e.yc(l)||[];t=[];for(p=0;p<r.length;p++){z=(x=r[p])&&x.h;x=new Lg;switch(n){case 3:z=Number(z);Number.isFinite(z)&&wg(x,1,Mg,Jf(z));break;case 2:z=Number(z);if(null!=z&&"number"!==typeof z)throw Error("Value of float/double field must be a number, found "+typeof z+": "+z);wg(x,2,Mg,z)}t.push(x)}n=t;for(r=0;r<n.length;r++){t=
n[r];p=new Pg;t=yg(p,Lg,2,t);p=l;x=[];z=[];for(var y=0;y<e.fields.length;y++)z.push(e.fields[y].oa);for(y=0;y<z.length;y++){var J=z[y],G=p[y],R=new Jg;switch(J){case 3:wg(R,1,Kg,Of(String(G)));break;case 2:J=Number(G);Number.isFinite(J)&&wg(R,2,Kg,Hf(J));break;case 1:wg(R,3,Kg,Ef("true"===G))}x.push(R)}zg(t,Jg,1,x);g.push(t)}}zg(f,Pg,4,g);c.push(f);e.clear()}zg(a,Qg,1,c);b=this.h;b.F&&(a instanceof sh?b.log(a):(c=new sh,a=a.serialize(),a=Fg(c,8,a),b.log(a)));this.h.flush()}};function Nh(){}
Nh.prototype.serialize=function(a){var b=[];Oh(this,a,b);return b.join("")};
function Oh(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Oh(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Ph(d,c),c.push(":"),Oh(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Ph(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Qh={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Rh=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Ph(a,b){b.push('"',a.replace(Rh,function(c){var d=Qh[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Qh[c]=d);return d}),'"')}
;function Sh(){}
Sh.prototype.h=null;Sh.prototype.getOptions=function(){var a;(a=this.h)||(a=this.h={});return a};var Th;function Uh(){}
$a(Uh,Sh);Th=new Uh;function Vh(a){wd.call(this);this.headers=new Map;this.Fa=a||null;this.i=!1;this.K=this.S=null;this.l=this.da="";this.j=this.Z=this.m=this.U=!1;this.F=0;this.v=null;this.xa="";this.ha=!1}
$a(Vh,wd);var Wh=/^https?$/i,Xh=["POST","PUT"],Yh=[];function Zh(a,b,c,d,e,f,g){var h=new Vh;Yh.push(h);b&&h.listen("complete",b);h.h.add("ready",h.Wd,!0,void 0,void 0);f&&(h.F=Math.max(0,f));g&&(h.ha=g);h.send(a,c,d,e)}
m=Vh.prototype;m.Wd=function(){this.dispose();Ib(Yh,this)};
m.send=function(a,b,c,d){if(this.S)throw Error("[goog.net.XhrIo] Object is active with another request="+this.da+"; newUri="+a);b=b?b.toUpperCase():"GET";this.da=a;this.l="";this.U=!1;this.i=!0;this.S=new XMLHttpRequest;this.K=this.Fa?this.Fa.getOptions():Th.getOptions();this.S.onreadystatechange=Xa(this.sd,this);try{this.getStatus(),this.Z=!0,this.S.open(b,String(a),!0),this.Z=!1}catch(g){this.getStatus();$h(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,
d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=v(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(0<=Cb(Xh,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=v(c);for(d=b.next();!d.done;d=b.next())c=v(d.value),d=c.next().value,c=c.next().value,this.S.setRequestHeader(d,c);this.xa&&(this.S.responseType=this.xa);"withCredentials"in this.S&&this.S.withCredentials!==this.ha&&(this.S.withCredentials=this.ha);try{ai(this),0<this.F&&(this.getStatus(),this.v=le(this.mf,this.F,this)),this.getStatus(),this.m=!0,this.S.send(a),this.m=
!1}catch(g){this.getStatus(),$h(this,g)}};
m.mf=function(){"undefined"!=typeof Na&&this.S&&(this.l="Timed out after "+this.F+"ms, aborting",this.getStatus(),xd(this,"timeout"),this.abort(8))};
function $h(a,b){a.i=!1;a.S&&(a.j=!0,a.S.abort(),a.j=!1);a.l=b;bi(a);ci(a)}
function bi(a){a.U||(a.U=!0,xd(a,"complete"),xd(a,"error"))}
m.abort=function(){this.S&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.S.abort(),this.j=!1,xd(this,"complete"),xd(this,"abort"),ci(this))};
m.R=function(){this.S&&(this.i&&(this.i=!1,this.j=!0,this.S.abort(),this.j=!1),ci(this,!0));Vh.Ba.R.call(this)};
m.sd=function(){this.T||(this.Z||this.m||this.j?di(this):this.Ge())};
m.Ge=function(){di(this)};
function di(a){if(a.i&&"undefined"!=typeof Na)if(a.K[1]&&4==ei(a)&&2==a.getStatus())a.getStatus();else if(a.m&&4==ei(a))le(a.sd,0,a);else if(xd(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(fi(a))xd(a,"complete"),xd(a,"success");else{try{var b=2<ei(a)?a.S.statusText:""}catch(c){b=""}a.l=b+" ["+a.getStatus()+"]";bi(a)}}finally{ci(a)}}}
function ci(a,b){if(a.S){ai(a);var c=a.S,d=a.K[0]?function(){}:null;
a.S=null;a.K=null;b||xd(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function ai(a){a.v&&(C.clearTimeout(a.v),a.v=null)}
m.isActive=function(){return!!this.S};
m.isComplete=function(){return 4==ei(this)};
function fi(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=nc(1,String(a.da)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!Wh.test(a?a.toLowerCase():"");c=b}return c}
function ei(a){return a.S?a.S.readyState:0}
m.getStatus=function(){try{return 2<ei(this)?this.S.status:-1}catch(a){return-1}};
m.getLastError=function(){return"string"===typeof this.l?this.l:String(this.l)};function gi(){}
gi.prototype.send=function(a,b,c){b=void 0===b?function(){}:b;
c=void 0===c?function(){}:c;
Zh(a.url,function(d){d=d.target;if(fi(d)){try{var e=d.S?d.S.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.yd,a.timeoutMillis,a.withCredentials)};
gi.prototype.cc=function(){return 1};function hi(a,b,c){this.logger=a;this.event=b;if(void 0===c||c)this.h=ii()}
hi.prototype.start=function(){this.h=ii()};
hi.prototype.done=function(){null!=this.h&&this.logger.pd(this.event,ii()-this.h)};
function ji(){}
m=ji.prototype;m.Fc=function(){};
m.pd=function(){};
m.hc=function(){};
m.od=function(){};
m.Aa=function(){};
function ki(a,b,c){F.call(this);this.i=b;this.l=new Mh(1828,"","",!1,"",void 0,new gi);this.h=new me(this.l);c&&(this.h.l=1E5,b=this.h,b.flushInterval=3E4,b.h.setInterval(3E4));this.K=new se(this.h);this.U=new ve(this.h);this.Z=new we(this.h);this.F=new re(this.h);this.m=new te(this.h);this.v=new ue(this.h);this.j=ye(a);(new qe(this.h)).h.Pb("/client_streamz/bg/fic",this.i);Ec(this,this.l);Ec(this,this.h)}
w(ki,F);m=ki.prototype;m.Fc=function(){this.U.h.Pb("/client_streamz/bg/fsc",this.j,this.i)};
m.pd=function(a,b){0===a?this.K.record(b,this.j,this.i):1===a&&this.Z.record(b,this.j,this.i)};
m.hc=function(a,b){this.F.h.Pb("/client_streamz/bg/fiec",this.j,this.i,a,b)};
function li(a,b,c){a.m.h.Pb("/client_streamz/bg/fcc",c,a.i);a.v.record(b,c,a.i)}
m.od=function(a,b,c,d,e){d?li(this,a,4):e?li(this,a,5):b?li(this,a,1):c?li(this,a,2):li(this,a,3)};
m.Aa=function(){this.h.Aa()};
function ii(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function mi(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function ni(a){function b(t,x,z){Promise.resolve().then(function(){p.done();d.h&&d.aa.Aa();n.resolve({Sd:t,ef:x,mg:z})})}
function c(t,x,z,y,J){h&&d.aa.od(t,x,z,null!=y?y:!1,null!=J?J:!1)}
F.call(this);var d=this;this.h=!1;var e=a.program;var f=a.me;var g=Math.random(),h=.1>g;null!=a.Ud&&(h=g<a.Ud);h&&(this.h=!0);var k=new F;this.addOnDisposeCallback(function(){d.i.then(function(t){t=t.ef;d.aa.Aa();null==t||t();k.dispose()})});
if(!1!==a.Me)if(a.aa)this.aa=a.aa;else{var l;Ec(k,this.aa=new ki(f,null!=(l=a.De)?l:"_",this.h))}else this.aa=new ji;var n=new mi;this.i=n.promise;var p=new hi(this.aa,0,!1);C[f]?C[f].a||(this.aa.hc(2,""),this.aa.Aa()):(this.aa.hc(1,""),this.aa.Aa());try{var r=C[f].a;p.start();this.j=v(r(e,b,!0,a.wg,c)).next().value;this.df=n.promise.then(function(){})}catch(t){throw this.aa.hc(4,t.message),this.aa.Aa(),t;
}}
w(ni,F);ni.prototype.snapshot=function(a){var b=this;if(this.T)throw Error("Already disposed");this.aa.Fc();return this.i.then(function(c){var d=c.Sd;return new Promise(function(e){var f=new hi(b.aa,1);d(function(g){f.done();b.h&&b.aa.Aa();e(g)},[a.dd,
a.ff,a.sf,a.gf])})})};
ni.prototype.Ed=function(a){if(this.T)throw Error("Already disposed");this.aa.Fc();var b=new hi(this.aa,1);a=this.j([a.dd,a.ff,a.sf,a.gf]);b.done();this.h&&this.aa.Aa();return a};var oi=window;ib("csi.gstatic.com");ib("googleads.g.doubleclick.net");ib("partner.googleadservices.com");ib("pubads.g.doubleclick.net");ib("securepubads.g.doubleclick.net");ib("tpc.googlesyndication.com");function pi(a){var b=qi;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function ri(){var a=[];pi(function(b){a.push(b)});
return a}
var qi={tf:"allow-forms",uf:"allow-modals",vf:"allow-orientation-lock",wf:"allow-pointer-lock",xf:"allow-popups",yf:"allow-popups-to-escape-sandbox",zf:"allow-presentation",Af:"allow-same-origin",Bf:"allow-scripts",Cf:"allow-top-navigation",Df:"allow-top-navigation-by-user-activation"},si=Cd(function(){return ri()});
function ti(){var a=ui(),b={};Db(si(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function ui(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function vi(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var wi=(new Date).getTime();function xi(a){wd.call(this);var b=this;this.v=this.j=0;this.Da=null!=a?a:{pa:function(e,f){return setTimeout(e,f)},
qa:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.l=function(){return A(function(e){return e.yield(yi(b),0)})};
window.addEventListener("offline",this.l);window.addEventListener("online",this.l);this.v||zi(this)}
w(xi,wd);function Ai(){var a=Bi;xi.h||(xi.h=new xi(a));return xi.h}
xi.prototype.dispose=function(){window.removeEventListener("offline",this.l);window.removeEventListener("online",this.l);this.Da.qa(this.v);delete xi.h};
xi.prototype.va=function(){return this.i};
function zi(a){a.v=a.Da.pa(function(){var b;return A(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.B(3):c.yield(yi(a),3):c.yield(yi(a),3);zi(a);c.h=0})},3E4)}
function yi(a,b){return a.m?a.m:a.m=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,Aa(h,2,3),d&&(a.j=a.Da.pa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.K=[h.j];h.l=0;h.A=0;a.m=void 0;a.j&&(a.Da.qa(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?xd(a,"networkstatus-online"):xd(a,"networkstatus-offline"));c(g);Ca(h);break;case 2:Ba(h),g=!1,h.B(3)}})})}
;function Ci(){this.data=[];this.h=-1}
Ci.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
Ci.prototype.get=function(a){return!!this.data[a]};
function Di(a){-1===a.h&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function Ei(){this.blockSize=-1}
;function Fi(){this.blockSize=-1;this.blockSize=64;this.h=[];this.A=[];this.m=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
$a(Fi,Ei);Fi.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Gi(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Fi.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.A,f=this.i;d<b;){if(0==f)for(;d<=c;)Gi(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Gi(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Gi(this,e);f=0;break}}this.i=f;this.l+=b}};
Fi.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.A[c]=b&255,b/=256;Gi(this,this.A);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Hi(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Ii(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Ji(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Hi(a).match(/\S+/g)||[],b=0<=Cb(a,b));return b}
function Ki(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Ji(a,"inverted-hdpi")&&Ii(a,Array.prototype.filter.call(a.classList?a.classList:Hi(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function Li(){}
Li.prototype.next=function(){return Mi};
var Mi={done:!0,value:void 0};Li.prototype.jb=function(){return this};function Ni(a){if(a instanceof Oi||a instanceof Pi||a instanceof Qi)return a;if("function"==typeof a.next)return new Oi(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Oi(function(){return a[Symbol.iterator]()});
if("function"==typeof a.jb)return new Oi(function(){return a.jb()});
throw Error("Not an iterator or iterable.");}
function Oi(a){this.h=a}
Oi.prototype.jb=function(){return new Pi(this.h())};
Oi.prototype[Symbol.iterator]=function(){return new Qi(this.h())};
Oi.prototype.i=function(){return new Qi(this.h())};
function Pi(a){this.h=a}
w(Pi,Li);Pi.prototype.next=function(){return this.h.next()};
Pi.prototype[Symbol.iterator]=function(){return new Qi(this.h)};
Pi.prototype.i=function(){return new Qi(this.h)};
function Qi(a){Oi.call(this,function(){return a});
this.j=a}
w(Qi,Oi);Qi.prototype.next=function(){return this.j.next()};function L(a){F.call(this);this.m=1;this.j=[];this.l=0;this.h=[];this.i={};this.v=!!a}
$a(L,F);m=L.prototype;m.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.m;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.m=e+3;d.push(e);return e};
m.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.xb(a)}return!1};
m.xb=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.l?(this.j.push(a),this.h[a+1]=function(){}):(c&&Ib(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
m.Va=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.v)for(e=0;e<c.length;e++){var g=c[e];Ri(this.h[g+1],this.h[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f&&!this.T;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.xb(c)}}return 0!=e}return!1};
function Ri(a,b,c){Rd(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.xb,this),delete this.i[a])}else this.h.length=0,this.i={}};
m.R=function(){L.Ba.R.call(this);this.clear();this.j.length=0};function Si(a){this.h=a}
Si.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,(new Nh).serialize(b))};
Si.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Si.prototype.remove=function(a){this.h.remove(a)};function Ti(a){this.h=a}
$a(Ti,Si);function Ui(a){this.data=a}
function Vi(a){return void 0===a||a instanceof Ui?a:new Ui(a)}
Ti.prototype.set=function(a,b){Ti.Ba.set.call(this,a,Vi(b))};
Ti.prototype.i=function(a){a=Ti.Ba.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ti.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Wi(a){this.h=a}
$a(Wi,Ti);Wi.prototype.set=function(a,b,c){if(b=Vi(b)){if(c){if(c<Za()){Wi.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Za()}Wi.Ba.set.call(this,a,b)};
Wi.prototype.i=function(a){var b=Wi.Ba.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Za()||c&&c>Za())Wi.prototype.remove.call(this,a);else return b}};function Xi(){}
;function Yi(){}
$a(Yi,Xi);Yi.prototype[Symbol.iterator]=function(){return Ni(this.jb(!0)).i()};
Yi.prototype.clear=function(){var a=Array.from(this);a=v(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Zi(a){this.h=a;this.i=null}
$a(Zi,Yi);m=Zi.prototype;m.isAvailable=function(){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&("QuotaExceededError"===c.name||22===c.code||1014===c.code||"NS_ERROR_DOM_QUOTA_REACHED"===c.name)&&a&&0!==a.length}else b=!1;return this.i=b};
m.set=function(a,b){$i(this);try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){$i(this);a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){$i(this);this.h.removeItem(a)};
m.jb=function(a){$i(this);var b=0,c=this.h,d=new Li;d.next=function(){if(b>=c.length)return Mi;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
m.clear=function(){$i(this);this.h.clear()};
m.key=function(a){$i(this);return this.h.key(a)};
function $i(a){if(null==a.h)throw Error("Storage mechanism: Storage unavailable");var b;(null!=(b=a.i)?b:a.isAvailable())||Kd(Error("Storage mechanism: Storage unavailable"))}
;function aj(){var a=null;try{a=C.localStorage||null}catch(b){}Zi.call(this,a)}
$a(aj,Zi);function bj(a,b){this.i=a;this.h=b+"::"}
$a(bj,Yi);bj.prototype.set=function(a,b){this.i.set(this.h+a,b)};
bj.prototype.get=function(a){return this.i.get(this.h+a)};
bj.prototype.remove=function(a){this.i.remove(this.h+a)};
bj.prototype.jb=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Li;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.h.length):c.i.get(e),done:!1}};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var M={},cj="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;M.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
M.Qc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var dj={kb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
hd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},ej={kb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
hd:function(a){return[].concat.apply([],a)}};
M.cf=function(){cj?(M.ib=Uint8Array,M.Ha=Uint16Array,M.Nd=Int32Array,M.assign(M,dj)):(M.ib=Array,M.Ha=Array,M.Nd=Array,M.assign(M,ej))};
M.cf();var fj=!0;try{new Uint8Array(1)}catch(a){fj=!1}
function gj(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new M.ib(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var hj={};hj=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var ij={},jj,kj=[],lj=0;256>lj;lj++){jj=lj;for(var mj=0;8>mj;mj++)jj=jj&1?3988292384^jj>>>1:jj>>>1;kj[lj]=jj}ij=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^kj[(a^b[d])&255];return a^-1};var nj={};nj={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function oj(a){for(var b=a.length;0<=--b;)a[b]=0}
var pj=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],qj=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],rj=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],sj=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],tj=Array(576);oj(tj);var uj=Array(60);oj(uj);var vj=Array(512);oj(vj);var wj=Array(256);oj(wj);var xj=Array(29);oj(xj);var yj=Array(30);oj(yj);function zj(a,b,c,d,e){this.Fd=a;this.ge=b;this.ee=c;this.Zd=d;this.Ce=e;this.ld=a&&a.length}
var Aj,Bj,Cj;function Dj(a,b){this.gd=a;this.sb=0;this.Ta=b}
function Ej(a,b){a.X[a.pending++]=b&255;a.X[a.pending++]=b>>>8&255}
function Fj(a,b,c){a.ga>16-c?(a.ma|=b<<a.ga&65535,Ej(a,a.ma),a.ma=b>>16-a.ga,a.ga+=c-16):(a.ma|=b<<a.ga&65535,a.ga+=c)}
function Gj(a,b,c){Fj(a,c[2*b],c[2*b+1])}
function Hj(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Ij(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Hj(d[e]++,e))}
function Jj(a){var b;for(b=0;286>b;b++)a.ra[2*b]=0;for(b=0;30>b;b++)a.Ya[2*b]=0;for(b=0;19>b;b++)a.ia[2*b]=0;a.ra[512]=1;a.Na=a.wb=0;a.ya=a.matches=0}
function Kj(a){8<a.ga?Ej(a,a.ma):0<a.ga&&(a.X[a.pending++]=a.ma);a.ma=0;a.ga=0}
function Lj(a,b,c){Kj(a);Ej(a,c);Ej(a,~c);M.kb(a.X,a.window,b,c,a.pending);a.pending+=c}
function Mj(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Nj(a,b,c){for(var d=a.Y[c],e=c<<1;e<=a.La;){e<a.La&&Mj(b,a.Y[e+1],a.Y[e],a.depth)&&e++;if(Mj(b,d,a.Y[e],a.depth))break;a.Y[c]=a.Y[e];c=e;e<<=1}a.Y[c]=d}
function Oj(a,b,c){var d=0;if(0!==a.ya){do{var e=a.X[a.Bb+2*d]<<8|a.X[a.Bb+2*d+1];var f=a.X[a.Ec+d];d++;if(0===e)Gj(a,f,b);else{var g=wj[f];Gj(a,g+256+1,b);var h=pj[g];0!==h&&(f-=xj[g],Fj(a,f,h));e--;g=256>e?vj[e]:vj[256+(e>>>7)];Gj(a,g,c);h=qj[g];0!==h&&(e-=yj[g],Fj(a,e,h))}}while(d<a.ya)}Gj(a,256,b)}
function Pj(a,b){var c=b.gd,d=b.Ta.Fd,e=b.Ta.ld,f=b.Ta.Zd,g,h=-1;a.La=0;a.nb=573;for(g=0;g<f;g++)0!==c[2*g]?(a.Y[++a.La]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.La;){var k=a.Y[++a.La]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.Na--;e&&(a.wb-=d[2*k+1])}b.sb=h;for(g=a.La>>1;1<=g;g--)Nj(a,c,g);k=f;do g=a.Y[1],a.Y[1]=a.Y[a.La--],Nj(a,c,1),d=a.Y[1],a.Y[--a.nb]=g,a.Y[--a.nb]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.Y[1]=k++,Nj(a,c,1);while(2<=a.La);a.Y[--a.nb]=
a.Y[1];g=b.gd;k=b.sb;d=b.Ta.Fd;e=b.Ta.ld;f=b.Ta.ge;var l=b.Ta.ee,n=b.Ta.Ce,p,r=0;for(p=0;15>=p;p++)a.Ia[p]=0;g[2*a.Y[a.nb]+1]=0;for(b=a.nb+1;573>b;b++){var t=a.Y[b];p=g[2*g[2*t+1]+1]+1;p>n&&(p=n,r++);g[2*t+1]=p;if(!(t>k)){a.Ia[p]++;var x=0;t>=l&&(x=f[t-l]);var z=g[2*t];a.Na+=z*(p+x);e&&(a.wb+=z*(d[2*t+1]+x))}}if(0!==r){do{for(p=n-1;0===a.Ia[p];)p--;a.Ia[p]--;a.Ia[p+1]+=2;a.Ia[n]--;r-=2}while(0<r);for(p=n;0!==p;p--)for(t=a.Ia[p];0!==t;)d=a.Y[--b],d>k||(g[2*d+1]!==p&&(a.Na+=(p-g[2*d+1])*g[2*d],g[2*
d+1]=p),t--)}Ij(c,h,a.Ia)}
function Qj(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.ia[2*l]+=g:0!==l?(l!==e&&a.ia[2*l]++,a.ia[32]++):10>=g?a.ia[34]++:a.ia[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Rj(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do Gj(a,l,a.ia);while(0!==--g)}else 0!==l?(l!==e&&(Gj(a,l,a.ia),g--),Gj(a,16,a.ia),Fj(a,g-3,2)):10>=g?(Gj(a,17,a.ia),Fj(a,g-3,3)):(Gj(a,18,a.ia),Fj(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Sj(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.ra[2*c])return 0;if(0!==a.ra[18]||0!==a.ra[20]||0!==a.ra[26])return 1;for(c=32;256>c;c++)if(0!==a.ra[2*c])return 1;return 0}
var Tj=!1;function Uj(a,b,c){a.X[a.Bb+2*a.ya]=b>>>8&255;a.X[a.Bb+2*a.ya+1]=b&255;a.X[a.Ec+a.ya]=c&255;a.ya++;0===b?a.ra[2*c]++:(a.matches++,b--,a.ra[2*(wj[c]+256+1)]++,a.Ya[2*(256>b?vj[b]:vj[256+(b>>>7)])]++);return a.ya===a.Hb-1}
;function Vj(a,b){a.msg=nj[b];return b}
function Wj(a){for(var b=a.length;0<=--b;)a[b]=0}
function Xj(a){var b=a.state,c=b.pending;c>a.M&&(c=a.M);0!==c&&(M.kb(a.output,b.X,b.Kb,c,a.tb),a.tb+=c,b.Kb+=c,a.Rc+=c,a.M-=c,b.pending-=c,0===b.pending&&(b.Kb=0))}
function Yj(a,b){var c=0<=a.ta?a.ta:-1,d=a.o-a.ta,e=0;if(0<a.level){2===a.I.vc&&(a.I.vc=Sj(a));Pj(a,a.fc);Pj(a,a.Zb);Qj(a,a.ra,a.fc.sb);Qj(a,a.Ya,a.Zb.sb);Pj(a,a.Yc);for(e=18;3<=e&&0===a.ia[2*sj[e]+1];e--);a.Na+=3*(e+1)+14;var f=a.Na+3+7>>>3;var g=a.wb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)Fj(a,b?1:0,3),Lj(a,c,d);else if(4===a.strategy||g===f)Fj(a,2+(b?1:0),3),Oj(a,tj,uj);else{Fj(a,4+(b?1:0),3);c=a.fc.sb+1;d=a.Zb.sb+1;e+=1;Fj(a,c-257,5);Fj(a,d-1,5);Fj(a,e-4,4);for(f=0;f<e;f++)Fj(a,a.ia[2*
sj[f]+1],3);Rj(a,a.ra,c-1);Rj(a,a.Ya,d-1);Oj(a,a.ra,a.Ya)}Jj(a);b&&Kj(a);a.ta=a.o;Xj(a.I)}
function P(a,b){a.X[a.pending++]=b}
function Zj(a,b){a.X[a.pending++]=b>>>8&255;a.X[a.pending++]=b&255}
function ak(a,b){var c=a.qd,d=a.o,e=a.wa,f=a.rd,g=a.o>a.ka-262?a.o-(a.ka-262):0,h=a.window,k=a.Ua,l=a.Ga,n=a.o+258,p=h[d+e-1],r=h[d+e];a.wa>=a.kd&&(c>>=2);f>a.u&&(f=a.u);do{var t=b;if(h[t+e]===r&&h[t+e-1]===p&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<n;);t=258-(n-d);d=n-258;if(t>e){a.rb=b;e=t;if(t>=f)break;p=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.u?e:a.u}
function bk(a){var b=a.ka,c;do{var d=a.Ld-a.u-a.o;if(a.o>=b+(b-262)){M.kb(a.window,a.window,b,b,0);a.rb-=b;a.o-=b;a.ta-=b;var e=c=a.ec;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ga[--e],a.Ga[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.I.la)break;e=a.I;c=a.window;f=a.o+a.u;var g=e.la;g>d&&(g=d);0===g?c=0:(e.la-=g,M.kb(c,e.input,e.eb,g,f),1===e.state.wrap?e.H=hj(e.H,c,g,f):2===e.state.wrap&&(e.H=ij(e.H,c,g,f)),e.eb+=g,e.hb+=g,c=g);a.u+=c;if(3<=a.u+a.sa)for(d=a.o-a.sa,a.J=a.window[d],
a.J=(a.J<<a.Ka^a.window[d+1])&a.Ja;a.sa&&!(a.J=(a.J<<a.Ka^a.window[d+3-1])&a.Ja,a.Ga[d&a.Ua]=a.head[a.J],a.head[a.J]=d,d++,a.sa--,3>a.u+a.sa););}while(262>a.u&&0!==a.I.la)}
function ck(a,b){for(var c;;){if(262>a.u){bk(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.J=(a.J<<a.Ka^a.window[a.o+3-1])&a.Ja,c=a.Ga[a.o&a.Ua]=a.head[a.J],a.head[a.J]=a.o);0!==c&&a.o-c<=a.ka-262&&(a.P=ak(a,c));if(3<=a.P)if(c=Uj(a,a.o-a.rb,a.P-3),a.u-=a.P,a.P<=a.Gc&&3<=a.u){a.P--;do a.o++,a.J=(a.J<<a.Ka^a.window[a.o+3-1])&a.Ja,a.Ga[a.o&a.Ua]=a.head[a.J],a.head[a.J]=a.o;while(0!==--a.P);a.o++}else a.o+=a.P,a.P=0,a.J=a.window[a.o],a.J=(a.J<<a.Ka^a.window[a.o+1])&a.Ja;else c=Uj(a,0,
a.window[a.o]),a.u--,a.o++;if(c&&(Yj(a,!1),0===a.I.M))return 1}a.sa=2>a.o?a.o:2;return 4===b?(Yj(a,!0),0===a.I.M?3:4):a.ya&&(Yj(a,!1),0===a.I.M)?1:2}
function dk(a,b){for(var c,d;;){if(262>a.u){bk(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.J=(a.J<<a.Ka^a.window[a.o+3-1])&a.Ja,c=a.Ga[a.o&a.Ua]=a.head[a.J],a.head[a.J]=a.o);a.wa=a.P;a.ud=a.rb;a.P=2;0!==c&&a.wa<a.Gc&&a.o-c<=a.ka-262&&(a.P=ak(a,c),5>=a.P&&(1===a.strategy||3===a.P&&4096<a.o-a.rb)&&(a.P=2));if(3<=a.wa&&a.P<=a.wa){d=a.o+a.u-3;c=Uj(a,a.o-1-a.ud,a.wa-3);a.u-=a.wa-1;a.wa-=2;do++a.o<=d&&(a.J=(a.J<<a.Ka^a.window[a.o+3-1])&a.Ja,a.Ga[a.o&a.Ua]=a.head[a.J],a.head[a.J]=a.o);
while(0!==--a.wa);a.bb=0;a.P=2;a.o++;if(c&&(Yj(a,!1),0===a.I.M))return 1}else if(a.bb){if((c=Uj(a,0,a.window[a.o-1]))&&Yj(a,!1),a.o++,a.u--,0===a.I.M)return 1}else a.bb=1,a.o++,a.u--}a.bb&&(Uj(a,0,a.window[a.o-1]),a.bb=0);a.sa=2>a.o?a.o:2;return 4===b?(Yj(a,!0),0===a.I.M?3:4):a.ya&&(Yj(a,!1),0===a.I.M)?1:2}
function ek(a,b){for(var c,d,e,f=a.window;;){if(258>=a.u){bk(a);if(258>=a.u&&0===b)return 1;if(0===a.u)break}a.P=0;if(3<=a.u&&0<a.o&&(d=a.o-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.o+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.P=258-(e-d);a.P>a.u&&(a.P=a.u)}3<=a.P?(c=Uj(a,1,a.P-3),a.u-=a.P,a.o+=a.P,a.P=0):(c=Uj(a,0,a.window[a.o]),a.u--,a.o++);if(c&&(Yj(a,!1),0===a.I.M))return 1}a.sa=0;return 4===b?(Yj(a,!0),0===a.I.M?3:4):
a.ya&&(Yj(a,!1),0===a.I.M)?1:2}
function fk(a,b){for(var c;;){if(0===a.u&&(bk(a),0===a.u)){if(0===b)return 1;break}a.P=0;c=Uj(a,0,a.window[a.o]);a.u--;a.o++;if(c&&(Yj(a,!1),0===a.I.M))return 1}a.sa=0;return 4===b?(Yj(a,!0),0===a.I.M?3:4):a.ya&&(Yj(a,!1),0===a.I.M)?1:2}
function gk(a,b,c,d,e){this.ne=a;this.Be=b;this.Fe=c;this.Ae=d;this.je=e}
var hk;hk=[new gk(0,0,0,0,function(a,b){var c=65535;for(c>a.za-5&&(c=a.za-5);;){if(1>=a.u){bk(a);if(0===a.u&&0===b)return 1;if(0===a.u)break}a.o+=a.u;a.u=0;var d=a.ta+c;if(0===a.o||a.o>=d)if(a.u=a.o-d,a.o=d,Yj(a,!1),0===a.I.M)return 1;if(a.o-a.ta>=a.ka-262&&(Yj(a,!1),0===a.I.M))return 1}a.sa=0;if(4===b)return Yj(a,!0),0===a.I.M?3:4;a.o>a.ta&&Yj(a,!1);return 1}),
new gk(4,4,8,4,ck),new gk(4,5,16,8,ck),new gk(4,6,32,32,ck),new gk(4,4,16,16,dk),new gk(8,16,32,32,dk),new gk(8,16,128,128,dk),new gk(8,32,128,256,dk),new gk(32,128,258,1024,dk),new gk(32,258,258,4096,dk)];
function ik(){this.I=null;this.status=0;this.X=null;this.wrap=this.pending=this.Kb=this.za=0;this.G=null;this.Ca=0;this.method=8;this.pb=-1;this.Ua=this.Uc=this.ka=0;this.window=null;this.Ld=0;this.head=this.Ga=null;this.rd=this.kd=this.strategy=this.level=this.Gc=this.qd=this.wa=this.u=this.rb=this.o=this.bb=this.ud=this.P=this.ta=this.Ka=this.Ja=this.Bc=this.ec=this.J=0;this.ra=new M.Ha(1146);this.Ya=new M.Ha(122);this.ia=new M.Ha(78);Wj(this.ra);Wj(this.Ya);Wj(this.ia);this.Yc=this.Zb=this.fc=
null;this.Ia=new M.Ha(16);this.Y=new M.Ha(573);Wj(this.Y);this.nb=this.La=0;this.depth=new M.Ha(573);Wj(this.depth);this.ga=this.ma=this.sa=this.matches=this.wb=this.Na=this.Bb=this.ya=this.Hb=this.Ec=0}
function jk(a,b){if(!a||!a.state||5<b||0>b)return a?Vj(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.la||666===c.status&&4!==b)return Vj(a,0===a.M?-5:-2);c.I=a;var d=c.pb;c.pb=b;if(42===c.status)if(2===c.wrap)a.H=0,P(c,31),P(c,139),P(c,8),c.G?(P(c,(c.G.text?1:0)+(c.G.Pa?2:0)+(c.G.extra?4:0)+(c.G.name?8:0)+(c.G.comment?16:0)),P(c,c.G.time&255),P(c,c.G.time>>8&255),P(c,c.G.time>>16&255),P(c,c.G.time>>24&255),P(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),P(c,c.G.os&255),c.G.extra&&c.G.extra.length&&
(P(c,c.G.extra.length&255),P(c,c.G.extra.length>>8&255)),c.G.Pa&&(a.H=ij(a.H,c.X,c.pending,0)),c.Ca=0,c.status=69):(P(c,0),P(c,0),P(c,0),P(c,0),P(c,0),P(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),P(c,3),c.status=113);else{var e=8+(c.Uc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.o&&(e|=32);c.status=113;Zj(c,e+(31-e%31));0!==c.o&&(Zj(c,a.H>>>16),Zj(c,a.H&65535));a.H=1}if(69===c.status)if(c.G.extra){for(e=c.pending;c.Ca<(c.G.extra.length&65535)&&(c.pending!==c.za||
(c.G.Pa&&c.pending>e&&(a.H=ij(a.H,c.X,c.pending-e,e)),Xj(a),e=c.pending,c.pending!==c.za));)P(c,c.G.extra[c.Ca]&255),c.Ca++;c.G.Pa&&c.pending>e&&(a.H=ij(a.H,c.X,c.pending-e,e));c.Ca===c.G.extra.length&&(c.Ca=0,c.status=73)}else c.status=73;if(73===c.status)if(c.G.name){e=c.pending;do{if(c.pending===c.za&&(c.G.Pa&&c.pending>e&&(a.H=ij(a.H,c.X,c.pending-e,e)),Xj(a),e=c.pending,c.pending===c.za)){var f=1;break}f=c.Ca<c.G.name.length?c.G.name.charCodeAt(c.Ca++)&255:0;P(c,f)}while(0!==f);c.G.Pa&&c.pending>
e&&(a.H=ij(a.H,c.X,c.pending-e,e));0===f&&(c.Ca=0,c.status=91)}else c.status=91;if(91===c.status)if(c.G.comment){e=c.pending;do{if(c.pending===c.za&&(c.G.Pa&&c.pending>e&&(a.H=ij(a.H,c.X,c.pending-e,e)),Xj(a),e=c.pending,c.pending===c.za)){f=1;break}f=c.Ca<c.G.comment.length?c.G.comment.charCodeAt(c.Ca++)&255:0;P(c,f)}while(0!==f);c.G.Pa&&c.pending>e&&(a.H=ij(a.H,c.X,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.G.Pa?(c.pending+2>c.za&&Xj(a),c.pending+2<=c.za&&(P(c,a.H&
255),P(c,a.H>>8&255),a.H=0,c.status=113)):c.status=113);if(0!==c.pending){if(Xj(a),0===a.M)return c.pb=-1,0}else if(0===a.la&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return Vj(a,-5);if(666===c.status&&0!==a.la)return Vj(a,-5);if(0!==a.la||0!==c.u||0!==b&&666!==c.status){d=2===c.strategy?fk(c,b):3===c.strategy?ek(c,b):hk[c.level].je(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.M&&(c.pb=-1),0;if(2===d&&(1===b?(Fj(c,2,3),Gj(c,256,tj),16===c.ga?(Ej(c,c.ma),c.ma=0,c.ga=0):8<=c.ga&&
(c.X[c.pending++]=c.ma&255,c.ma>>=8,c.ga-=8)):5!==b&&(Fj(c,0,3),Lj(c,0,0),3===b&&(Wj(c.head),0===c.u&&(c.o=0,c.ta=0,c.sa=0))),Xj(a),0===a.M))return c.pb=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(P(c,a.H&255),P(c,a.H>>8&255),P(c,a.H>>16&255),P(c,a.H>>24&255),P(c,a.hb&255),P(c,a.hb>>8&255),P(c,a.hb>>16&255),P(c,a.hb>>24&255)):(Zj(c,a.H>>>16),Zj(c,a.H&65535));Xj(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var kk={};kk=function(){this.input=null;this.hb=this.la=this.eb=0;this.output=null;this.Rc=this.M=this.tb=0;this.msg="";this.state=null;this.vc=2;this.H=0};var lk=Object.prototype.toString;
function mk(a){if(!(this instanceof mk))return new mk(a);a=this.options=M.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&0<a.windowBits?a.windowBits=-a.windowBits:a.gzip&&0<a.windowBits&&16>a.windowBits&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.I=new kk;this.I.M=0;var b=this.I;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<
f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=Vj(b,-2);else{8===e&&(e=9);var k=new ik;b.state=k;k.I=b;k.wrap=h;k.G=null;k.Uc=e;k.ka=1<<k.Uc;k.Ua=k.ka-1;k.Bc=f+7;k.ec=1<<k.Bc;k.Ja=k.ec-1;k.Ka=~~((k.Bc+3-1)/3);k.window=new M.ib(2*k.ka);k.head=new M.Ha(k.ec);k.Ga=new M.Ha(k.ka);k.Hb=1<<f+6;k.za=4*k.Hb;k.X=new M.ib(k.za);k.Bb=1*k.Hb;k.Ec=3*k.Hb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.hb=b.Rc=0;b.vc=2;c=b.state;c.pending=0;c.Kb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.H=2===c.wrap?
0:1;c.pb=0;if(!Tj){d=Array(16);for(f=g=0;28>f;f++)for(xj[f]=g,e=0;e<1<<pj[f];e++)wj[g++]=f;wj[g-1]=f;for(f=g=0;16>f;f++)for(yj[f]=g,e=0;e<1<<qj[f];e++)vj[g++]=f;for(g>>=7;30>f;f++)for(yj[f]=g<<7,e=0;e<1<<qj[f]-7;e++)vj[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)tj[2*e+1]=8,e++,d[8]++;for(;255>=e;)tj[2*e+1]=9,e++,d[9]++;for(;279>=e;)tj[2*e+1]=7,e++,d[7]++;for(;287>=e;)tj[2*e+1]=8,e++,d[8]++;Ij(tj,287,d);for(e=0;30>e;e++)uj[2*e+1]=5,uj[2*e]=Hj(e,5);Aj=new zj(tj,pj,257,286,15);Bj=new zj(uj,
qj,0,30,15);Cj=new zj([],rj,0,19,7);Tj=!0}c.fc=new Dj(c.ra,Aj);c.Zb=new Dj(c.Ya,Bj);c.Yc=new Dj(c.ia,Cj);c.ma=0;c.ga=0;Jj(c);c=0}else c=Vj(b,-2);0===c&&(b=b.state,b.Ld=2*b.ka,Wj(b.head),b.Gc=hk[b.level].Be,b.kd=hk[b.level].ne,b.rd=hk[b.level].Fe,b.qd=hk[b.level].Ae,b.o=0,b.ta=0,b.u=0,b.sa=0,b.P=b.wa=2,b.bb=0,b.J=0);b=c}}else b=-2;if(0!==b)throw Error(nj[b]);a.header&&(b=this.I)&&b.state&&2===b.state.wrap&&(b.state.G=a.header);if(a.dictionary){var l;"string"===typeof a.dictionary?l=gj(a.dictionary):
"[object ArrayBuffer]"===lk.call(a.dictionary)?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.I;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,2===b||1===b&&42!==l.status||l.u)b=-2;else{1===b&&(a.H=hj(a.H,f,g,0));l.wrap=0;g>=l.ka&&(0===b&&(Wj(l.head),l.o=0,l.ta=0,l.sa=0),c=new M.ib(l.ka),M.kb(c,f,g-l.ka,l.ka,0),f=c,g=l.ka);c=a.la;d=a.eb;e=a.input;a.la=g;a.eb=0;a.input=f;for(bk(l);3<=l.u;){f=l.o;g=l.u-2;do l.J=(l.J<<l.Ka^l.window[f+3-1])&l.Ja,l.Ga[f&l.Ua]=l.head[l.J],l.head[l.J]=f,f++;while(--g);
l.o=f;l.u=2;bk(l)}l.o+=l.u;l.ta=l.o;l.sa=l.u;l.u=0;l.P=l.wa=2;l.bb=0;a.eb=d;a.input=e;a.la=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(nj[b]);this.Wf=!0}}
mk.prototype.push=function(a,b){var c=this.I,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=gj(a):"[object ArrayBuffer]"===lk.call(a)?c.input=new Uint8Array(a):c.input=a;c.eb=0;c.la=c.input.length;do{0===c.M&&(c.output=new M.ib(d),c.tb=0,c.M=d);a=jk(c,e);if(1!==a&&0!==a)return nk(this,a),this.ended=!0,!1;if(0===c.M||0===c.la&&(4===e||2===e))if("string"===this.options.to){var f=M.Qc(c.output,c.tb);b=f;f=f.length;if(65537>f&&(b.subarray&&fj||!b.subarray))b=
String.fromCharCode.apply(null,M.Qc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=M.Qc(c.output,c.tb),this.chunks.push(b)}while((0<c.la||0===c.M)&&1!==a);if(4===e)return(c=this.I)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=Vj(c,-2):(c.state=null,a=113===d?Vj(c,-3):0)):a=-2,nk(this,a),this.ended=!0,0===a;2===e&&(nk(this,0),c.M=0);return!0};
function nk(a,b){0===b&&(a.result="string"===a.options.to?a.chunks.join(""):M.hd(a.chunks));a.chunks=[];a.err=b;a.msg=a.I.msg}
function ok(a,b){b=b||{};b.gzip=!0;b=new mk(b);b.push(a,!0);if(b.err)throw b.msg||nj[b.err];return b.result}
;function pk(a){if(!a)return null;a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue;var b;a?b=mb(a):b=null;return b}
;function qk(a){return mb(null===a?"null":void 0===a?"undefined":a)}
;function rk(a){this.name=a}
;var sk=new rk("rawColdConfigGroup");var tk=new rk("rawHotConfigGroup");function uk(a){this.D=I(a)}
w(uk,K);var vk=new rk("continuationCommand");var wk=new rk("webCommandMetadata");var xk=new rk("signalServiceEndpoint");var yk={If:"EMBEDDED_PLAYER_MODE_UNKNOWN",Ff:"EMBEDDED_PLAYER_MODE_DEFAULT",Hf:"EMBEDDED_PLAYER_MODE_PFP",Gf:"EMBEDDED_PLAYER_MODE_PFL"};var zk=new rk("feedbackEndpoint");function Ak(a){this.D=I(a)}
w(Ak,K);Ak.prototype.setTrackingParams=function(a){if(null!=a)if("string"===typeof a)a=a?new Ue(a,Re):Se||(Se=new Ue(null,Re));else if(a.constructor!==Ue)if(Qe(a))a=a.length?new Ue(new Uint8Array(a),Re):Se||(Se=new Ue(null,Re));else throw Error();return qg(this,1,a)};var Bk=new rk("webPlayerShareEntityServiceEndpoint");var Ck=new rk("playlistEditEndpoint");var Dk=new rk("modifyChannelNotificationPreferenceEndpoint");var Ek=new rk("unsubscribeEndpoint");var Fk=new rk("subscribeEndpoint");function Gk(){var a=Hk;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function Ik(a){D("yt.ads.biscotti.lastId_",a)}
;function Jk(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Kk=C.window,Lk,Mk,Nk=(null==Kk?void 0:null==(Lk=Kk.yt)?void 0:Lk.config_)||(null==Kk?void 0:null==(Mk=Kk.ytcfg)?void 0:Mk.data_)||{};D("yt.config_",Nk);function Ok(){Jk(Nk,arguments)}
function S(a,b){return a in Nk?Nk[a]:b}
function Pk(a){var b=Nk.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var Qk=[];function Rk(a){Qk.forEach(function(b){return b(a)})}
function Sk(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Tk(b)}}:a}
function Tk(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=S("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Ok("ERRORS",b));Rk(a)}
function Uk(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=S("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Ok("ERRORS",f))}
;var Vk=/^[\w.]*$/,Wk={q:!0,search_query:!0};function Xk(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1===f.length&&f[0]||2===f.length)try{var g=Yk(f[0]||""),h=Yk(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?Jb(k,h):c[g]=[k,h]}else c[g]=h}catch(r){var l=r,n=f[0],p=String(Xk);l.args=[{key:n,value:f[1],query:a,method:Zk===p?"unchanged":p}];Wk.hasOwnProperty(n)||Uk(l)}}return c}
var Zk=String(Xk);function $k(a){var b=[];Kb(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Db(c,function(f){""==f?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function al(a){"?"===a.charAt(0)&&(a=a.substring(1));return Xk(a,"&")}
function bl(a){return-1!==a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),al(1<a.length?a[1]:a[0])):{}}
function cl(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=al(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return tc(a,e)+d}
function dl(a){if(!b)var b=window.location.href;var c=nc(1,a),d=oc(a);c&&d?(a=a.match(lc),b=b.match(lc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?oc(b)===d&&(Number(nc(4,b))||null)===(Number(nc(4,a))||null):!0;return a}
function Yk(a){return a&&a.match(Vk)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function el(a){var b=fl;a=void 0===a?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=wi;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ja){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?oi:g;try{var h=g.history.length}catch(Ja){h=0}e.u_his=h;var k;e.u_h=null==(k=oi.screen)?void 0:k.height;var l;e.u_w=null==(l=oi.screen)?void 0:l.width;var n;e.u_ah=null==(n=oi.screen)?void 0:n.availHeight;var p;e.u_aw=
null==(p=oi.screen)?void 0:p.availWidth;var r;e.u_cd=null==(r=oi.screen)?void 0:r.colorDepth}catch(Ja){}h=b.h;try{var t=h.screenX;var x=h.screenY}catch(Ja){}try{var z=h.outerWidth;var y=h.outerHeight}catch(Ja){}try{var J=h.innerWidth;var G=h.innerHeight}catch(Ja){}try{var R=h.screenLeft;var N=h.screenTop}catch(Ja){}try{J=h.innerWidth,G=h.innerHeight}catch(Ja){}try{var da=h.screen.availWidth;var Ea=h.screen.availTop}catch(Ja){}t=[R,N,t,x,da,Ea,z,y,J,G];try{var O=(b.h.top||window).document,ea="CSS1Compat"==
O.compatMode?O.documentElement:O.body;var ka=(new Ed(ea.clientWidth,ea.clientHeight)).round()}catch(Ja){ka=new Ed(-12245933,-12245933)}O=ka;ka={};var oa=void 0===oa?C:oa;ea=new Ci;"SVGElement"in oa&&"createElementNS"in oa.document&&ea.set(0);x=ti();x["allow-top-navigation-by-user-activation"]&&ea.set(1);x["allow-popups-to-escape-sandbox"]&&ea.set(2);oa.crypto&&oa.crypto.subtle&&ea.set(3);"TextDecoder"in oa&&"TextEncoder"in oa&&ea.set(4);oa=Di(ea);ka.bc=oa;ka.bih=O.height;ka.biw=O.width;ka.brdim=t.join();
b=b.i;b=(ka.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ka.wgl=!!oi.WebGLRenderingContext,ka);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var fl=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return $k(el(a))});Za();navigator.userAgent.indexOf(" (CrKey ");var gl="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function hl(){if(!gl)return null;var a=gl();return"open"in a?a:null}
function il(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function jl(a,b){"function"===typeof a&&(a=Sk(a));return window.setTimeout(a,b)}
;var kl="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ma(kl),["client_dev_set_cookie"]);function T(a){a=ll(a);return"string"===typeof a&&"false"===a?!1:!!a}
function U(a,b){a=ll(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function ll(a){return S("EXPERIMENT_FLAGS",{})[a]}
function ml(){for(var a=[],b=S("EXPERIMENTS_FORCED_FLAGS",{}),c=v(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=S("EXPERIMENT_FLAGS",{});d=v(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&void 0===b[e]&&a.push({key:e,value:String(c[e])});return a}
;var nl={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},ol="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ma(kl)),pl=!1;
function ql(a,b,c,d,e,f,g,h){function k(){4===(l&&"readyState"in l?l.readyState:0)&&b&&Sk(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var l=hl();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;T("debug_forward_web_query_parameters")&&(a=rl(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"===c&&(void 0===window.FormData||!(d instanceof FormData));if(e=sl(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"===n.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(p){Uk(p)}}l.send(d);return l}
function sl(a,b){b=void 0===b?{}:b;var c=dl(a),d=T("web_ajax_ignore_global_headers_if_set"),e;for(e in nl){var f=S(nl[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=S("VISITOR_DATA"));!f||!c&&oc(a)||d&&void 0!==b[e]||"TVHTML5_UNPLUGGED"===S("INNERTUBE_CLIENT_NAME")&&g||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!oc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!oc(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&
(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&oc(a)||(b["X-YouTube-Ad-Signals"]=$k(el()));return b}
function tl(a,b){b.method="POST";b.postParams||(b.postParams={});return ul(a,b)}
function ul(a,b){var c=b.format||"JSON";a=vl(a,b);var d=wl(a,b),e=!1,f=xl(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=il(k),n=null,p=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||p||r)n=yl(a,c,k,b.convertToSafeHtml);l&&(l=zl(c,k,n));n=n||{};p=b.context||C;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=jl(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function vl(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=S("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=cl(a,b||{},!0);return a}
function wl(a,b){var c=S("XSRF_FIELD_NAME"),d=S("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=S("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||oc(a)&&!b.withCredentials&&oc(a)!==document.location.hostname||"POST"!==b.method||h&&"application/x-www-form-urlencoded"!==h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(T("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=al(e),Ub(e,f),e=b.postBodyFormat&&"JSON"===b.postBodyFormat?
JSON.stringify(e):sc(e));f=e||f&&!Nb(f);!pl&&f&&"POST"!==b.method&&(pl=!0,Tk(Error("AJAX request with postData should use POST")));return e}
function yl(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Uk(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Al(a):null)e={},Db(a.getElementsByTagName("*"),function(g){e[g.tagName]=Bl(g)})}d&&Cl(e);
return e}
function Cl(a){if(Ra(a))for(var b in a){var c;(c="html_content"===b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=fb();d=e?e.createHTML(d):d;a[c]=new Vb(d)}else Cl(a[b])}}
function zl(a,b,c){if(b&&204===b.status)return!0;switch(a){case "JSON":return!!c;case "XML":return 0===Number(c&&c.return_code);case "RAW":return!0;default:return!!c}}
function Al(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Bl(a){var b="";Db(a.childNodes,function(c){b+=c.nodeValue});
return b}
function rl(a){var b=window.location.search,c=oc(a);T("debug_handle_relative_url_for_query_forward_killswitch")||!c&&dl(a)&&(c=document.location.hostname);var d=mc(nc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=al(b),f={};Db(ol,function(g){e[g]&&(f[g]=e[g])});
return cl(a,f||{},!1)}
var xl=ql;var Dl=[{Hc:function(a){return"Cannot read property '"+a.key+"'"},
ic:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Hc:function(a){return"Cannot call '"+a.key+"'"},
ic:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Hc:function(a){return a.key+" is not defined"},
ic:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Fl={Ra:[],Oa:[{callback:El,weight:500}]};function El(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Gl(){this.Oa=[];this.Ra=[]}
var Hl;function Il(){if(!Hl){var a=Hl=new Gl;a.Ra.length=0;a.Oa.length=0;Fl.Ra&&a.Ra.push.apply(a.Ra,Fl.Ra);Fl.Oa&&a.Oa.push.apply(a.Oa,Fl.Oa)}return Hl}
;var Jl=new L;function Kl(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Ll(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Ll(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Ll(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Ll(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Ml(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Nl(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=Kl(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?Nl(f+".ve",g,h,k):0;d+=f;d+=Nl(e,a[e],b,c);if(500<d)break}}else c[b]=Ol(a),d+=c[b].length;else c[b]=Ol(a),d+=c[b].length;return d}
function Nl(a,b,c,d){c+="."+a;a=Ol(b);d[c]=a;return c.length+a.length}
function Ol(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function Pl(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function Ql(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Rl(){this.hf=!0}
function Sl(){Rl.h||(Rl.h=new Rl);return Rl.h}
function Tl(a,b){a={};var c=ch([]);c&&(a.Authorization=c,c=b=null==b?void 0:b.sessionIndex,void 0===c&&(c=Number(S("SESSION_INDEX",0)),c=isNaN(c)?0:c),T("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Nk||(a["X-Origin"]=window.location.origin),void 0===b&&"DELEGATED_SESSION_ID"in Nk&&(a["X-Goog-PageId"]=S("DELEGATED_SESSION_ID")));return a}
;var Ul={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function Vl(a,b,c,d,e){Zg.set(""+a,b,{Jb:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function Wl(a){return Zg.get(""+a,void 0)}
function Xl(a,b,c){Zg.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function Yl(){if(T("embeds_web_enable_cookie_detection_fix")){if(!C.navigator.cookieEnabled)return!1}else if(!Zg.isEnabled())return!1;if(Zg.h.cookie)return!0;T("embeds_web_enable_cookie_detection_fix")?Zg.set("TESTCOOKIESENABLED","1",{Jb:60,Se:"none",secure:!0}):Zg.set("TESTCOOKIESENABLED","1",{Jb:60});if("1"!==Zg.get("TESTCOOKIESENABLED"))return!1;Zg.remove("TESTCOOKIESENABLED");return!0}
;var Zl=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",Zl);function $l(){this.h=S("ALT_PREF_COOKIE_NAME","PREF");this.i=S("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Wl(this.h);a&&this.parse(a)}
var am;function bm(){am||(am=new $l);return am}
m=$l.prototype;m.get=function(a,b){cm(a);dm(a);a=void 0!==Zl[a]?Zl[a].toString():null;return null!=a?a:b?b:""};
m.set=function(a,b){cm(a);dm(a);if(null==b)throw Error("ExpectedNotNull");Zl[a]=b.toString()};
function em(a){return!!((fm("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
m.remove=function(a){cm(a);dm(a);delete Zl[a]};
m.clear=function(){for(var a in Zl)delete Zl[a]};
function dm(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function cm(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function fm(a){a=void 0!==Zl[a]?Zl[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
m.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Zl[d]=c.toString())}};var gm={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},hm={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function im(){var a=C.navigator;return a?a.connection:void 0}
function jm(){var a=im();if(a){var b=gm[a.type||"unknown"]||"CONN_UNKNOWN";a=gm[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function km(){var a=im();if(null!=a&&a.effectiveType)return hm.hasOwnProperty(a.effectiveType)?hm[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function V(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ma(b))}
w(V,Error);function lm(){try{return mm(),!0}catch(a){return!1}}
function mm(a){if(void 0!==S("DATASYNC_ID"))return S("DATASYNC_ID");throw new V("Datasync ID not set",void 0===a?"unknown":a);}
;function nm(){}
function om(a,b){return Bi.Xa(a,0,b)}
nm.prototype.pa=function(a,b){return this.Xa(a,1,b)};
nm.prototype.zb=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var pm=U("web_emulated_idle_callback_delay",300),qm=1E3/60-3,rm=[8,5,4,3,2,1,0];
function sm(a){a=void 0===a?{}:a;F.call(this);this.i=[];this.j={};this.da=this.h=0;this.Z=this.m=!1;this.K=[];this.U=this.fa=!1;for(var b=v(rm),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.l=0;this.sc=a.timeout||1;this.F=qm;this.v=0;this.xa=this.He.bind(this);this.qc=this.lf.bind(this);this.Wa=this.Rd.bind(this);this.yb=this.oe.bind(this);this.Qb=this.Ke.bind(this);this.Fa=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!T("disable_scheduler_requestIdleCallback");(this.ha=!1!==
a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.xa)}
w(sm,F);m=sm.prototype;m.zb=function(a){var b=Za();tm(this,a);a=Za()-b;this.m||(this.F-=a)};
m.Xa=function(a,b,c){++this.da;if(10===b)return this.zb(a),this.da;var d=this.da;this.j[d]=a;this.m&&!c?this.K.push({id:d,priority:b}):(this.i[b].push(d),this.Z||this.m||(0!==this.h&&um(this)!==this.v&&this.stop(),this.start()));return d};
m.qa=function(a){delete this.j[a]};
function wm(a){a.K.length=0;for(var b=5;0<=b;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
m.isHidden=function(){return!!document.hidden||!1};
function xm(a){return!a.isHidden()&&a.ha}
function um(a){if(a.i[8].length){if(a.U)return 4;if(xm(a))return 3}for(var b=5;b>=a.l;b--)if(0<a.i[b].length)return 0<b?xm(a)?3:2:1;return 0}
m.Ib=function(a){var b=E("yt.logging.errors.log");b&&b(a)};
function tm(a,b){try{b()}catch(c){a.Ib(c)}}
function ym(a){for(var b=v(rm),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
m.oe=function(a){var b=void 0;a&&(b=a.timeRemaining());this.fa=!0;zm(this,b);this.fa=!1};
m.lf=function(){zm(this)};
m.Rd=function(){Am(this)};
m.Ke=function(a){this.U=!0;var b=um(this);4===b&&b!==this.v&&(this.stop(),this.start());zm(this,void 0,a);this.U=!1};
m.He=function(){this.isHidden()||Am(this);this.h&&(this.stop(),this.start())};
function Am(a){a.stop();a.m=!0;for(var b=Za(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&tm(a,e)}Bm(a);a.m=!1;ym(a)&&a.start();b=Za()-b;a.F-=b}
function Bm(a){for(var b=0,c=a.K.length;b<c;b++){var d=a.K[b];a.i[d.priority].push(d.id)}a.K.length=0}
function zm(a,b,c){a.U&&4===a.v&&a.h||a.stop();a.m=!0;b=Za()+(b||a.F);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Ib(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&tm(a,f);d=a.fa?0:1;d=a.l>d?a.l:d;if(!(Za()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&tm(a,c)}while(c&&Za()<b)}a.m=!1;Bm(a);a.F=qm;ym(a)&&a.start()}
m.start=function(){this.Z=!1;if(0===this.h)switch(this.v=um(this),this.v){case 1:var a=this.yb;this.h=this.Fa?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,pm);break;case 2:this.h=window.setTimeout(this.qc,this.sc);break;case 3:this.h=window.requestAnimationFrame(this.Qb);break;case 4:this.h=window.setTimeout(this.Wa,0)}};
m.pause=function(){this.stop();this.Z=!0};
m.stop=function(){if(this.h){switch(this.v){case 1:var a=this.h;this.Fa?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
m.R=function(){wm(this);this.stop();this.ha&&document.removeEventListener("visibilitychange",this.xa);F.prototype.R.call(this)};var Cm=E("yt.scheduler.instance.timerIdMap_")||{},Dm=U("kevlar_tuner_scheduler_soft_state_timer_ms",800),Em=0,Fm=0;function Gm(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.T)a=new sm(S("scheduler")||{}),D("ytglobal.schedulerInstanceInstance_",a);return a}
function Hm(){Im();var a=E("ytglobal.schedulerInstanceInstance_");a&&(Cc(a),D("ytglobal.schedulerInstanceInstance_",null))}
function Im(){wm(Gm());for(var a in Cm)Cm.hasOwnProperty(a)&&delete Cm[Number(a)]}
function Jm(a,b,c){if(!c)return c=void 0===c,-Gm().Xa(a,b,c);var d=window.setTimeout(function(){var e=Gm().Xa(a,b);Cm[d]=e},c);
return d}
function Km(a){Gm().zb(a)}
function Lm(a){var b=Gm();if(0>a)b.qa(-a);else{var c=Cm[a];c?(b.qa(c),delete Cm[a]):window.clearTimeout(a)}}
function Mm(){Nm()}
function Nm(){window.clearTimeout(Em);Gm().start()}
function Om(){Gm().pause();window.clearTimeout(Em);Em=window.setTimeout(Mm,Dm)}
function Pm(){window.clearTimeout(Fm);Fm=window.setTimeout(function(){Qm(0)},Dm)}
function Qm(a){Pm();var b=Gm();b.l=a;b.start()}
function Rm(a){Pm();var b=Gm();b.l>a&&(b.l=a,b.start())}
function Sm(){window.clearTimeout(Fm);var a=Gm();a.l=0;a.start()}
;function Tm(){nm.apply(this,arguments)}
w(Tm,nm);function Um(){Tm.h||(Tm.h=new Tm);return Tm.h}
Tm.prototype.Xa=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):jl(a,c||0)};
Tm.prototype.qa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Tm.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
Tm.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var Bi=Um();
T("web_scheduler_auto_init")&&!E("yt.scheduler.initialized")&&(D("yt.scheduler.instance.dispose",Hm),D("yt.scheduler.instance.addJob",Jm),D("yt.scheduler.instance.addImmediateJob",Km),D("yt.scheduler.instance.cancelJob",Lm),D("yt.scheduler.instance.cancelAllJobs",Im),D("yt.scheduler.instance.start",Nm),D("yt.scheduler.instance.pause",Om),D("yt.scheduler.instance.setPriorityThreshold",Qm),D("yt.scheduler.instance.enablePriorityThreshold",Rm),D("yt.scheduler.instance.clearPriorityThreshold",Sm),D("yt.scheduler.initialized",
!0));function Vm(a){var b=new aj;this.h=(a=b.isAvailable()?a?new bj(b,a):b:null)?new Wi(a):null;this.i=document.domain||window.location.hostname}
Vm.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape((new Nh).serialize(b))}catch(f){return}else e=escape(b);Vl(a,e,c,this.i)};
Vm.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Wl(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Vm.prototype.remove=function(a){this.h&&this.h.remove(a);Xl(a,"/",this.i)};var Wm=function(){var a;return function(){a||(a=new Vm("ytidb"));return a}}();
function Xm(){var a;return null==(a=Wm())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Ym=[],Zm,$m=!1;function an(){var a={};for(Zm=new bn(void 0===a.handleError?cn:a.handleError,void 0===a.logEvent?dn:a.logEvent);0<Ym.length;)switch(a=Ym.shift(),a.type){case "ERROR":Zm.Ib(a.payload);break;case "EVENT":Zm.logEvent(a.eventType,a.payload)}}
function en(a){$m||(Zm?Zm.Ib(a):(Ym.push({type:"ERROR",payload:a}),10<Ym.length&&Ym.shift()))}
function fn(a,b){$m||(Zm?Zm.logEvent(a,b):(Ym.push({type:"EVENT",eventType:a,payload:b}),10<Ym.length&&Ym.shift()))}
;function gn(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function hn(a){return a.substr(0,a.indexOf(":"))||a}
;var jn=Be||Ce;function kn(a){var b=Jc();return b?0<=b.toLowerCase().indexOf(a):!1}
;var ln={},mn=(ln.AUTH_INVALID="No user identifier specified.",ln.EXPLICIT_ABORT="Transaction was explicitly aborted.",ln.IDB_NOT_SUPPORTED="IndexedDB is not supported.",ln.MISSING_INDEX="Index not created.",ln.MISSING_OBJECT_STORES="Object stores not created.",ln.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",ln.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",ln.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
ln.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",ln.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",ln.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",ln.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",ln),nn={},on=(nn.AUTH_INVALID="ERROR",nn.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",nn.EXPLICIT_ABORT="IGNORED",nn.IDB_NOT_SUPPORTED="ERROR",nn.MISSING_INDEX=
"WARNING",nn.MISSING_OBJECT_STORES="ERROR",nn.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",nn.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",nn.QUOTA_EXCEEDED="WARNING",nn.QUOTA_MAYBE_EXCEEDED="WARNING",nn.UNKNOWN_ABORT="WARNING",nn.INCOMPATIBLE_DB_VERSION="WARNING",nn),pn={},qn=(pn.AUTH_INVALID=!1,pn.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,pn.EXPLICIT_ABORT=!1,pn.IDB_NOT_SUPPORTED=!1,pn.MISSING_INDEX=!1,pn.MISSING_OBJECT_STORES=!1,pn.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,pn.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,pn.QUOTA_EXCEEDED=!1,pn.QUOTA_MAYBE_EXCEEDED=!0,pn.UNKNOWN_ABORT=!0,pn.INCOMPATIBLE_DB_VERSION=!1,pn);function rn(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?mn[a]:c;d=void 0===d?on[a]:d;e=void 0===e?qn[a]:e;V.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,rn.prototype)}
w(rn,V);function sn(a,b){rn.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},mn.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,sn.prototype)}
w(sn,rn);function tn(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,tn.prototype)}
w(tn,Error);var un=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function vn(a,b,c,d){b=hn(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof rn)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new rn("QUOTA_EXCEEDED",a);if(De&&"UnknownError"===e.name)return new rn("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof tn)return new rn("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&un.some(function(f){return e.message.includes(f)}))return new rn("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new rn("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",td:e.name})];e.level="WARNING";return e}
function wn(a,b,c){var d=Xm();return new rn("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function xn(a){if(!a)throw Error();throw a;}
function yn(a){return a}
function zn(a){this.h=a}
function An(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=v(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=v(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
An.all=function(a){return new An(new zn(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={ob:0};f.ob<a.length;f={ob:f.ob},++f.ob)An.resolve(a[f.ob]).then(function(g){return function(h){d[g.ob]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
An.resolve=function(a){return new An(new zn(function(b,c){a instanceof An?a.then(b,c):b(a)}))};
An.reject=function(a){return new An(new zn(function(b,c){c(a)}))};
An.prototype.then=function(a,b){var c=this,d=null!=a?a:yn,e=null!=b?b:xn;return new An(new zn(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Bn(c,c,d,f,g)}),c.i.push(function(){Cn(c,c,e,f,g)})):"FULFILLED"===c.state.status?Bn(c,c,d,f,g):"REJECTED"===c.state.status&&Cn(c,c,e,f,g)}))};
An.prototype.catch=function(a){return this.then(void 0,a)};
function Bn(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof An?Dn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Cn(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof An?Dn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Dn(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof An?Dn(a,b,f,d,e):d(f)},function(f){e(f)})}
;function En(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Fn(a){return new Promise(function(b,c){En(a,b,c)})}
function Gn(a){return new An(new zn(function(b,c){En(a,b,c)}))}
;function Hn(a,b){return new An(new zn(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var In=window,W=In.ytcsi&&In.ytcsi.now?In.ytcsi.now:In.performance&&In.performance.timing&&In.performance.now&&In.performance.timing.navigationStart?function(){return In.performance.timing.navigationStart+In.performance.now()}:function(){return(new Date).getTime()};function Jn(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(W());this.i=!1}
m=Jn.prototype;m.add=function(a,b,c){return Kn(this,[a],{mode:"readwrite",ja:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return Kn(this,[a],{mode:"readwrite",ja:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return Kn(this,[a],{mode:"readonly",ja:!0},function(c){return c.objectStore(a).count(b)})};
function Ln(a,b,c){a=a.h.createObjectStore(b,c);return new Mn(a)}
m.delete=function(a,b){return Kn(this,[a],{mode:"readwrite",ja:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return Kn(this,[a],{mode:"readonly",ja:!0},function(c){return c.objectStore(a).get(b)})};
function Nn(a,b,c){return Kn(a,[b],{mode:"readwrite",ja:!0},function(d){d=d.objectStore(b);return Gn(d.h.put(c,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Kn(a,b,c,d){var e,f,g,h,k,l,n,p,r,t,x,z;return A(function(y){switch(y.h){case 1:var J={mode:"readonly",ja:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?J.mode=c:Object.assign(J,c);e=J;a.transactionCount++;f=e.ja?3:1;g=0;case 2:if(h){y.B(4);break}g++;k=Math.round(W());Aa(y,5);l=a.h.transaction(b,e.mode);J=y.yield;var G=new On(l);G=Pn(G,d);return J.call(y,G,7);case 7:return n=y.i,p=Math.round(W()),Qn(a,k,p,g,void 0,b.join(),e),y.return(n);case 5:r=Ba(y);t=Math.round(W());x=vn(r,
a.h.name,b.join(),a.h.version);if((z=x instanceof rn&&!x.h)||g>=f)Qn(a,k,t,g,x,b.join(),e),h=x;y.B(2);break;case 4:return y.return(Promise.reject(h))}})}
function Qn(a,b,c,d,e,f,g){b=c-b;e?(e instanceof rn&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&fn("QUOTA_EXCEEDED",{dbName:hn(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof rn&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),fn("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Rn(a,!1,d,f,b,g.tag),en(e)):Rn(a,!0,d,f,b,g.tag)}
function Rn(a,b,c,d,e,f){fn("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function Mn(a){this.h=a}
m=Mn.prototype;m.add=function(a,b){return Gn(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return Gn(this.h.clear()).then(function(){})};
function Sn(a,b,c){a.h.createIndex(b,c,{unique:!1})}
m.count=function(a){return Gn(this.h.count(a))};
function Tn(a,b){return Un(a,{query:b},function(c){return c.delete().then(function(){return Vn(c)})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?Tn(this,a):Gn(this.h.delete(a))};
m.get=function(a){return Gn(this.h.get(a))};
m.index=function(a){try{return new Wn(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new tn(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function Un(a,b,c){a=a.h.openCursor(b.query,b.direction);return Xn(a).then(function(d){return Hn(d,c)})}
function On(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=rn;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Pn(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return v(d).next().value})}
On.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new rn("EXPLICIT_ABORT");};
On.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new Mn(a),this.i.set(a,b));return b};
function Wn(a){this.h=a}
m=Wn.prototype;m.count=function(a){return Gn(this.h.count(a))};
m.delete=function(a){return Yn(this,{query:a},function(b){return b.delete().then(function(){return Vn(b)})})};
m.get=function(a){return Gn(this.h.get(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function Yn(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Xn(a).then(function(d){return Hn(d,c)})}
function Zn(a,b){this.request=a;this.cursor=b}
function Xn(a){return Gn(a).then(function(b){return b?new Zn(a,b):null})}
function Vn(a){a.cursor.continue(void 0);return Xn(a.request)}
Zn.prototype.delete=function(){return Gn(this.cursor.delete()).then(function(){})};
Zn.prototype.getValue=function(){return this.cursor.value};
Zn.prototype.update=function(a){return Gn(this.cursor.update(a))};function $n(a,b,c){return new Promise(function(d,e){function f(){r||(r=new Jn(g.result,{closed:p}));return r}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Td,k=c.blocking,l=c.jf,n=c.upgrade,p=c.closed,r;g.addEventListener("upgradeneeded",function(t){try{if(null===t.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&"none"!==t.dataLoss&&fn("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:hn(a)});var x=f(),z=new On(g.transaction);
n&&n(x,function(y){return t.oldVersion<y&&t.newVersion>=y},z);
z.done.catch(function(y){e(y)})}catch(y){e(y)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){fn("IDB_UNEXPECTEDLY_CLOSED",{dbName:hn(a),dbVersion:t.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function ao(a,b,c){c=void 0===c?{}:c;return $n(a,b,c)}
function bo(a,b){b=void 0===b?{}:b;var c,d,e,f;return A(function(g){if(1==g.h)return Aa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Td)&&c.addEventListener("blocked",function(){e()}),g.yield(Fn(c),4);
if(2!=g.h)g.h=0,g.l=0;else throw f=Ba(g),vn(f,a,"",-1);})}
;function co(a,b){this.name=a;this.options=b;this.j=!0;this.A=this.l=0}
co.prototype.i=function(a,b,c){c=void 0===c?{}:c;return ao(a,b,c)};
co.prototype.delete=function(a){a=void 0===a?{}:a;return bo(this.name,a)};
function eo(a,b){return new rn("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function fo(a,b){if(!b)throw wn("openWithToken",hn(a.name));return a.open()}
co.prototype.open=function(){function a(){var f,g,h,k,l,n,p,r,t,x;return A(function(z){switch(z.h){case 1:return g=null!=(f=Error().stack)?f:"",Aa(z,2),z.yield(c.i(c.name,c.options.version,e),4);case 4:for(var y=h=z.i,J=c.options,G=[],R=v(Object.keys(J.ub)),N=R.next();!N.done;N=R.next()){N=N.value;var da=J.ub[N],Ea=void 0===da.Ne?Number.MAX_VALUE:da.Ne;!(y.h.version>=da.Ab)||y.h.version>=Ea||y.h.objectStoreNames.contains(N)||G.push(N)}k=G;if(0===k.length){z.B(5);break}l=Object.keys(c.options.ub);
n=h.objectStoreNames();if(c.A<U("ytidb_reopen_db_retries",0))return c.A++,h.close(),en(new rn("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),z.return(a());if(!(c.l<U("ytidb_remake_db_retries",1))){z.B(6);break}c.l++;return z.yield(c.delete(),7);case 7:return en(new rn("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),z.return(a());case 6:throw new sn(n,l);case 5:return z.return(h);case 2:p=Ba(z);
if(p instanceof DOMException?"VersionError"!==p.name:"DOMError"in self&&p instanceof DOMError?"VersionError"!==p.name:!(p instanceof Object&&"message"in p)||"An attempt was made to open a database using a lower version than the existing version."!==p.message){z.B(8);break}return z.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:r=z.i;t=r.h.version;if(void 0!==c.options.version&&t>c.options.version+1)throw r.close(),c.j=!1,eo(c,t);return z.return(r);case 8:throw b(),p instanceof
Error&&!T("ytidb_async_stack_killswitch")&&(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),vn(p,c.name,"",null!=(x=c.options.version)?x:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw eo(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,jf:b,upgrade:this.options.upgrade};return this.h=d=a()};var go=new co("YtIdbMeta",{ub:{databases:{Ab:1}},upgrade:function(a,b){b(1)&&Ln(a,"databases",{keyPath:"actualName"})}});
function ho(a,b){var c;return A(function(d){if(1==d.h)return d.yield(fo(go,b),2);c=d.i;return d.return(Kn(c,["databases"],{ja:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Gn(f.h.put(a,void 0)).then(function(){})})}))})}
function io(a,b){var c;return A(function(d){if(1==d.h)return a?d.yield(fo(go,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function jo(a,b){var c,d;return A(function(e){return 1==e.h?(c=[],e.yield(fo(go,b),2)):3!=e.h?(d=e.i,e.yield(Kn(d,["databases"],{ja:!0,mode:"readonly"},function(f){c.length=0;return Un(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return Vn(g)})}),3)):e.return(c)})}
function ko(a){return jo(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function lo(a,b,c){return jo(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function mo(a){var b,c;return A(function(d){if(1==d.h)return b=mm("YtIdbMeta hasAnyMeta other"),d.yield(jo(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var no,oo=new function(){}(new function(){});
function po(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=Xm();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=jn)f=/WebKit\/([0-9]+)/.exec(Jc()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Jc()),f=!(f&&602<=parseInt(f[1],10)));if(f||Wc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
Aa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(ho(d,oo),4);case 4:return e.yield(io("yt-idb-test-do-not-use",oo),5);case 5:return e.return(!0);case 2:return Ba(e),e.return(!1)}})}
function qo(){if(void 0!==no)return no;$m=!0;return no=po().then(function(a){$m=!1;var b;if(null!=(b=Wm())&&b.h){var c;b={hasSucceededOnce:(null==(c=Xm())?void 0:c.hasSucceededOnce)||a};var d;null==(d=Wm())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function ro(){return E("ytglobal.idbToken_")||void 0}
function so(){var a=ro();return a?Promise.resolve(a):qo().then(function(b){(b=b?oo:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var to=0;function uo(a,b){to||(to=Bi.pa(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(so(),2);case 2:c=h.i;if(!c)return h.return();d=!0;Aa(h,3);return h.yield(lo(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.B(6);break}f=e[0];return h.yield(bo(f.actualName),7);case 7:return h.yield(io(f.actualName,c),6);case 6:h.h=4;h.l=0;break;case 3:g=Ba(h),en(g),d=!1;case 4:Bi.qa(to),to=0,d&&uo(a,b),h.h=0}})}))}
function vo(){var a;return A(function(b){return 1==b.h?b.yield(so(),2):(a=b.i)?b.return(mo(a)):b.return(!1)})}
new mi;function wo(a){if(!lm())throw a=new rn("AUTH_INVALID",{dbName:a}),en(a),a;var b=mm();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function xo(a,b,c,d){var e,f,g,h,k,l;return A(function(n){switch(n.h){case 1:return f=null!=(e=Error().stack)?e:"",n.yield(so(),2);case 2:g=n.i;if(!g)throw h=wn("openDbImpl",a,b),T("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),en(h),h;gn(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:wo(a);Aa(n,3);return n.yield(ho(k,g),5);case 5:return n.yield(ao(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=Ba(n),Aa(n,7),n.yield(io(k.actualName,
g),9);case 9:n.h=8;n.l=0;break;case 7:Ba(n);case 8:throw l;}})}
function yo(a,b,c){c=void 0===c?{}:c;return xo(a,b,!1,c)}
function zo(a,b,c){c=void 0===c?{}:c;return xo(a,b,!0,c)}
function Ao(a,b){b=void 0===b?{}:b;var c,d;return A(function(e){if(1==e.h)return e.yield(so(),2);if(3!=e.h){c=e.i;if(!c)return e.return();gn(a);d=wo(a);return e.yield(bo(d.actualName,b),3)}return e.yield(io(d.actualName,c),0)})}
function Bo(a,b,c){a=a.map(function(d){return A(function(e){return 1==e.h?e.yield(bo(d.actualName,b),2):e.yield(io(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Co(){var a=void 0===a?{}:a;var b,c;return A(function(d){if(1==d.h)return d.yield(so(),2);if(3!=d.h){b=d.i;if(!b)return d.return();gn("LogsDatabaseV2");return d.yield(ko(b),3)}c=d.i;return d.yield(Bo(c,a,b),0)})}
function Do(a,b){b=void 0===b?{}:b;var c;return A(function(d){if(1==d.h)return d.yield(so(),2);if(3!=d.h){c=d.i;if(!c)return d.return();gn(a);return d.yield(bo(a,b),3)}return d.yield(io(a,c),0)})}
;function Eo(a,b){co.call(this,a,b);this.options=b;gn(a)}
w(Eo,co);function Fo(a,b){var c;return function(){c||(c=new Eo(a,b));return c}}
Eo.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.shared?zo:yo)(a,b,Object.assign({},c))};
Eo.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.shared?Do:Ao)(this.name,a)};
function Go(a,b){return Fo(a,b)}
;var Ho={},Io=Go("ytGcfConfig",{ub:(Ho.coldConfigStore={Ab:1},Ho.hotConfigStore={Ab:1},Ho),shared:!1,upgrade:function(a,b){b(1)&&(Sn(Ln(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),Sn(Ln(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Jo(a){return fo(Io(),a)}
function Ko(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:W()},g.yield(Jo(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(Nn(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Lo(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:W()},h.yield(Jo(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(Nn(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Mo(a){var b,c;return A(function(d){return 1==d.h?d.yield(Jo(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(Kn(b,["coldConfigStore"],{mode:"readwrite",ja:!0},function(e){return Yn(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function No(a){var b,c;return A(function(d){return 1==d.h?d.yield(Jo(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(Kn(b,["hotConfigStore"],{mode:"readwrite",ja:!0},function(e){return Yn(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function Oo(){F.call(this);this.i=[];this.h=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(ma(a)),this.h=a):(this.h=[],D("yt.gcf.config.hotUpdateCallbacks",this.h))}
w(Oo,F);Oo.prototype.R=function(){for(var a=v(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);0<=b&&c.splice(b,1)}this.i.length=0;F.prototype.R.call(this)};function Po(){this.h=0;this.i=new Oo}
function Qo(){var a;return null!=(a=E("yt.gcf.config.hotConfigGroup"))?a:S("RAW_HOT_CONFIG_GROUP")}
function Ro(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!T("start_client_gcf")){g.B(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.l(b);d=ro();if(!d){g.B(3);break}if(c){g.B(4);break}return g.yield(No(d),5);case 5:e=g.i,c=null==(f=e)?void 0:f.config;case 4:return g.yield(Ko(c,b,d),3);case 3:if(c)for(var h=c,k=v(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function So(a,b,c){var d,e,f,g;return A(function(h){if(1==h.h){if(!T("start_client_gcf"))return h.B(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=ro())?c?h.B(4):h.yield(Mo(d),5):h.B(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.B(0);g=c.configData;return h.yield(Lo(c,b,g,d),0)})}
function To(){if(!Po.h){var a=new Po;Po.h=a}a=Po.h;var b=W()-a.h;if(!(0!==a.h&&b<U("send_config_hash_timer"))){b=E("yt.gcf.config.coldConfigData");var c=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=W());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
Po.prototype.l=function(a){this.hotHashData=a;D("yt.gcf.config.hotHashData",this.hotHashData||null)};function Uo(){return"INNERTUBE_API_KEY"in Nk&&"INNERTUBE_API_VERSION"in Nk}
function Vo(){return{innertubeApiKey:S("INNERTUBE_API_KEY"),innertubeApiVersion:S("INNERTUBE_API_VERSION"),pe:S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),md:S("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),gg:S("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:S("INNERTUBE_CONTEXT_CLIENT_VERSION"),re:S("INNERTUBE_CONTEXT_HL"),qe:S("INNERTUBE_CONTEXT_GL"),se:S("INNERTUBE_HOST_OVERRIDE")||"",ue:!!S("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),te:!!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:S("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Wo(a){var b={client:{hl:a.re,gl:a.qe,clientName:a.md,clientVersion:a.innertubeContextClientVersion,configInfo:a.pe}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=S("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=ml();0<c.length&&(b.request={internalExperimentFlags:c});c=a.md;if(("WEB"===c||"MWEB"===c||1===c||2===c)&&b){var d;b.client.mainAppWebInfo=null!=(d=b.client.mainAppWebInfo)?
d:{};b.client.mainAppWebInfo.webDisplayMode=Ql()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(T("web_log_memory_total_kbytes")&&(null==(e=C.navigator)?0:e.deviceMemory)){var f;e=null==(f=C.navigator)?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+1E6*e)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=jm())&&b&&(b.client.connectionType=a);T("web_log_effective_connection_type")&&(a=km())&&
b&&(b.client.effectiveConnectionType=a);T("start_client_gcf")&&(e=To())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,b&&(b.client.configInfo=b.client.configInfo||{},a&&(b.client.configInfo.coldConfigData=a),f&&(b.client.configInfo.coldHashData=f),e&&(b.client.configInfo.hotHashData=e)));S("DELEGATED_SESSION_ID")&&!T("pageid_as_header_web")&&(b.user={onBehalfOfUser:S("DELEGATED_SESSION_ID")});!T("fill_delegate_context_in_gel_killswitch")&&(a=S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;f=a.assign;e=b.client;d={};c=v(Object.entries(al(S("DEVICE",""))));for(var g=c.next();!g.done;g=c.next()){var h=v(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?d.deviceMake=h:"cmodel"===g?d.deviceModel=h:"cbr"===g?d.browserName=h:"cbrver"===g?d.browserVersion=h:"cos"===g?d.osName=h:"cosver"===g?d.osVersion=h:"cplatform"===g&&(d.platform=h)}b.client=f.call(a,e,d);return b}
function Xo(a,b,c){c=void 0===c?{}:c;var d={};S("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":S("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||S("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||S("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().Xf:(a=Tl(Sl()),T("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var Yo="undefined"!==typeof TextEncoder?new TextEncoder:null,Zo=Yo?function(a){return Yo.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function $o(a,b){this.version=a;this.args=b}
$o.prototype.serialize=function(){return{version:this.version,args:this.args}};function ap(a,b){this.topic=a;this.h=b}
ap.prototype.toString=function(){return this.topic};var bp=E("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.xb;L.prototype.publish=L.prototype.Va;L.prototype.clear=L.prototype.clear;D("ytPubsub2Pubsub2Instance",bp);var cp=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",cp);var dp=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",dp);var ep=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",ep);
D("ytPubsub2Pubsub2SkipSubKey",null);function fp(a,b){var c=gp();c&&c.publish.call(c,a.toString(),a,b)}
function hp(a){var b=ip,c=gp();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(cp[d])try{if(f&&b instanceof ap&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Jd){var l=new h;h.Jd=l.version}var n=h.Jd}catch(y){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{n=Reflect;var p=n.construct;
var r=k.args,t=r.length;if(0<t){var x=Array(t);for(k=0;k<t;k++)x[k]=r[k];var z=x}else z=[];f=p.call(n,h,z)}catch(y){throw y.message="yt.pubsub2.Data.deserialize(): "+y.message,y;}}catch(y){throw y.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+y.message,y;}a.call(window,f)}catch(y){Tk(y)}},ep[b.toString()]?E("yt.scheduler.instance")?Bi.pa(g):jl(g,0):g())});
cp[d]=!0;dp[b.toString()]||(dp[b.toString()]=[]);dp[b.toString()].push(d);return d}
function jp(){var a=kp,b=hp(function(c){a.apply(void 0,arguments);lp(b)});
return b}
function lp(a){var b=gp();b&&("number"===typeof a&&(a=[a]),Db(a,function(c){b.unsubscribeByKey(c);delete cp[c]}))}
function gp(){return E("ytPubsub2Pubsub2Instance")}
;function mp(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&fp("meta_logging_csi_event",{timerName:a,vg:b})}
;var np=void 0,op=void 0;function pp(){op||(op=pk(S("WORKER_SERIALIZATION_URL")));return op||void 0}
function qp(){var a=pp();np||void 0===a||(np=new Worker(kb(a),void 0));return np}
;var rp=U("max_body_size_to_compress",5E5),sp=U("min_body_size_to_compress",500),tp=!0,up=0,vp=0,wp=U("compression_performance_threshold_lr",250),xp=U("slow_compressions_before_abandon_count",4),yp=!1,zp=new Map,Ap=1,Bp=!0;function Cp(){if("function"===typeof Worker&&pp()&&!yp){var a=function(c){c=c.data;if("gzippedGelBatch"===c.op){var d=zp.get(c.key);d&&(Dp(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),zp.delete(c.key))}},b=qp();
b&&(b.addEventListener("message",a),b.onerror=function(){zp.clear()},yp=!0)}}
function Ep(a,b,c,d,e){e=void 0===e?!1:e;var f={startTime:W(),ticks:{},infos:{}};if(tp)try{var g=Fp(b);if(null!=g&&(g>rp||g<sp))d(a,c);else{if(T("gzip_gel_with_worker")&&(T("initial_gzip_use_main_thread")&&!Bp||!T("initial_gzip_use_main_thread"))){yp||Cp();var h=qp();if(h&&!e){zp.set(Ap,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Ap});Ap++;return}}var k=ok(Zo(b));Dp(k,f,a,c,d)}}catch(l){Uk(l),d(a,c)}else d(a,c)}
function Dp(a,b,c,d,e){Bp=!1;var f=W();b.ticks.gelc=f;vp++;T("disable_compression_due_to_performance_degredation")&&f-b.startTime>=wp&&(up++,T("abandon_compression_after_N_slow_zips")?vp===U("compression_disable_point")&&up>xp&&(tp=!1):tp=!1);Gp(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function Hp(a){var b=void 0===b?!1:b;var c=void 0===c?!1:c;var d=W(),e={startTime:d,ticks:{},infos:{}},f=b?E("yt.logging.gzipForFetch",!1):!0;if(tp&&f){if(!a.body)return a;try{var g=c?a.body:"string"===typeof a.body?a.body:JSON.stringify(a.body);f=g;if(!c&&"string"===typeof g){var h=Fp(g);if(null!=h&&(h>rp||h<sp))return a;c=b?{level:1}:void 0;f=ok(Zo(g),c);var k=W();e.ticks.gelc=k;if(b){vp++;if((T("disable_compression_due_to_performance_degredation")||T("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=wp)if(up++,T("abandon_compression_after_N_slow_zips")||T("abandon_compression_after_N_slow_zips_lr")){b=up/vp;var l=xp/U("compression_disable_point");0<vp&&0===vp%U("compression_disable_point")&&b>=l&&(tp=!1)}else tp=!1;Gp(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(n){return Uk(n),a}}else return a}
function Fp(a){try{return(new Blob(a.split(""))).size}catch(b){return Uk(b),null}}
function Gp(a){T("gel_compression_csi_killswitch")||!T("log_gel_compression_latency")&&!T("log_gel_compression_latency_lr")||mp("gel_compression",a,{sampleRate:.1})}
;function Ip(a){a=Object.assign({},a);delete a.Authorization;var b=ch();if(b){var c=new Fi;c.update(S("INNERTUBE_API_KEY"));c.update(b);a.hash=Ge(c.digest(),3)}return a}
;var Jp;function Kp(){Jp||(Jp=new Vm("yt.innertube"));return Jp}
function Lp(a,b,c,d){if(d)return null;d=Kp().get("nextId",!0)||1;var e=Kp().get("requests",!0)||{};e[d]={method:a,request:b,authState:Ip(c),requestTime:Math.round(W())};Kp().set("nextId",d+1,86400,!0);Kp().set("requests",e,86400,!0);return d}
function Mp(a){var b=Kp().get("requests",!0)||{};delete b[a];Kp().set("requests",b,86400,!0)}
function Np(a){var b=Kp().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(W())-d.requestTime)){var e=d.authState,f=Ip(Xo(!1));Qb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(W())),Op(a,d.method,e,{}));delete b[c]}}Kp().set("requests",b,86400,!0)}}
;function Pp(a){this.Vb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.mb=function(){};
this.now=Date.now;this.Db=!1;var b;this.Gd=null!=(b=a.Gd)?b:100;var c;this.Ad=null!=(c=a.Ad)?c:1;var d;this.xd=null!=(d=a.xd)?d:2592E6;var e;this.vd=null!=(e=a.vd)?e:12E4;var f;this.zd=null!=(f=a.zd)?f:5E3;var g;this.V=null!=(g=a.V)?g:void 0;this.ac=!!a.ac;var h;this.Yb=null!=(h=a.Yb)?h:.1;var k;this.kc=null!=(k=a.kc)?k:10;a.handleError&&(this.handleError=a.handleError);a.mb&&(this.mb=a.mb);a.Db&&(this.Db=a.Db);a.Vb&&(this.Vb=a.Vb);this.W=a.W;this.Da=a.Da;this.ea=a.ea;this.ba=a.ba;this.sendFn=a.sendFn;
this.Nc=a.Nc;this.Kc=a.Kc;Qp(this)&&(!this.W||this.W("networkless_logging"))&&Rp(this)}
function Rp(a){Qp(a)&&!a.Db&&(a.h=!0,a.ac&&Math.random()<=a.Yb&&a.ea.Vd(a.V),Sp(a),a.ba.va()&&a.Ob(),a.ba.listen(a.Nc,a.Ob.bind(a)),a.ba.listen(a.Kc,a.Zc.bind(a)))}
m=Pp.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(Qp(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ea.set(d,this.V).then(function(e){d.id=e;c.ba.va()&&Tp(c,d)}).catch(function(e){Tp(c,d);
Up(c,e)})}else this.sendFn(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(Qp(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.W&&this.W("nwl_skip_retry")&&(e.skipRetry=c);if(this.ba.va()||this.W&&this.W("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(1==k.h)return k.yield(d.ea.set(e,d.V).catch(function(l){Up(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.ea.set(e,this.V).catch(function(g){d.sendFn(a,b,e.skipRetry);
Up(d,g)})}else this.sendFn(a,b,this.W&&this.W("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(Qp(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.ea.lb(d.id,c.V):e=!0;c.ba.cb&&c.W&&c.W("vss_network_hint")&&c.ba.cb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.ea.set(d,this.V).then(function(g){d.id=g;e&&c.ea.lb(d.id,c.V)}).catch(function(g){Up(c,g)})}else this.sendFn(a,b,void 0,!0)};
m.Ob=function(){var a=this;if(!Qp(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Da.pa(function(){var b;return A(function(c){if(1==c.h)return c.yield(a.ea.jd("NEW",a.V),2);if(3!=c.h)return b=c.i,b?c.yield(Tp(a,b),3):(a.Zc(),c.return());a.i&&(a.i=0,a.Ob());c.h=0})},this.Gd))};
m.Zc=function(){this.Da.qa(this.i);this.i=0};
function Tp(a,b){var c;return A(function(d){switch(d.h){case 1:if(!Qp(a))throw Error("IndexedDB is not supported: immediateSend");if(void 0===b.id){d.B(2);break}return d.yield(a.ea.ze(b.id,a.V),3);case 3:(c=d.i)||a.mb(Error("The request cannot be found in the database."));case 2:if(Vp(a,b,a.xd)){d.B(4);break}a.mb(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){d.B(5);break}return d.yield(a.ea.lb(b.id,a.V),5);case 5:return d.return();case 4:b.skipRetry||(b=Wp(a,
b));if(!b){d.B(0);break}if(!b.skipRetry||void 0===b.id){d.B(8);break}return d.yield(a.ea.lb(b.id,a.V),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function Wp(a,b){if(!Qp(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(n){switch(n.h){case 1:g=Xp(f);(h=Yp(f))&&a.W&&a.W("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.W&&a.W("nwl_consider_error_code")&&g||a.W&&!a.W("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.kc)){n.B(2);break}if(!a.ba.nc){n.B(3);break}return n.yield(a.ba.nc(),3);case 3:if(a.ba.va()){n.B(2);break}c(e,f);if(!a.W||!a.W("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){n.B(6);
break}return n.yield(a.ea.Oc(b.id,a.V,!1),6);case 6:return n.return();case 2:if(a.W&&a.W("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.kc)return n.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){n.B(8);break}return b.sendCount<a.Ad?n.yield(a.ea.Oc(b.id,a.V,!0,h?!1:void 0),12):n.yield(a.ea.lb(b.id,a.V),8);case 12:a.Da.pa(function(){a.ba.va()&&a.Ob()},a.zd);
case 8:c(e,f),n.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.B(2):h.yield(a.ea.lb(b.id,a.V),2);a.ba.cb&&a.W&&a.W("vss_network_hint")&&a.ba.cb(!0);d(e,f);h.h=0})};
return b}
function Vp(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Sp(a){if(!Qp(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.ea.jd("QUEUED",a.V).then(function(b){b&&!Vp(a,b,a.vd)?a.Da.pa(function(){return A(function(c){if(1==c.h)return void 0===b.id?c.B(2):c.yield(a.ea.Oc(b.id,a.V),2);Sp(a);c.h=0})}):a.ba.va()&&a.Ob()})}
function Up(a,b){a.Md&&!a.ba.va()?a.Md(b):a.handleError(b)}
function Qp(a){return!!a.V||a.Vb}
function Xp(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function Yp(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var Zp;
function $p(){if(Zp)return Zp();var a={};Zp=Go("LogsDatabaseV2",{ub:(a.LogsRequestsStore={Ab:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&Ln(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),Sn(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Zp()}
;function aq(a){return fo($p(),a)}
function bq(a,b){var c,d,e,f;return A(function(g){if(1==g.h)return c={startTime:W(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(aq(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:S("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(Nn(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=W();cq(c);return g.return(f)})}
function dq(a,b){var c,d,e,f,g,h,k,l;return A(function(n){if(1==n.h)return c={startTime:W(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},n.yield(aq(b),2);if(3!=n.h)return d=n.i,e=S("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,W()],h=IDBKeyRange.bound(f,g),k="prev",T("use_fifo_for_networkless")&&(k="next"),l=void 0,n.yield(Kn(d,["LogsRequestsStore"],{mode:"readwrite",ja:!0},function(p){return Yn(p.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},
function(r){r.getValue()&&(l=r.getValue(),"NEW"===a&&(l.status="QUEUED",r.update(l)))})}),3);
c.ticks.tc=W();cq(c);return n.return(l)})}
function eq(a,b){var c;return A(function(d){if(1==d.h)return d.yield(aq(b),2);c=d.i;return d.return(Kn(c,["LogsRequestsStore"],{mode:"readwrite",ja:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Gn(f.h.put(g,void 0)).then(function(){return g})})}))})}
function fq(a,b,c,d){c=void 0===c?!0:c;var e;return A(function(f){if(1==f.h)return f.yield(aq(b),2);e=f.i;return f.return(Kn(e,["LogsRequestsStore"],{mode:"readwrite",ja:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),Gn(h.h.put(k,void 0)).then(function(){return k})):An.resolve(void 0)})}))})}
function gq(a,b){var c;return A(function(d){if(1==d.h)return d.yield(aq(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function hq(a){var b,c;return A(function(d){if(1==d.h)return d.yield(aq(a),2);b=d.i;c=W()-2592E6;return d.yield(Kn(b,["LogsRequestsStore"],{mode:"readwrite",ja:!0},function(e){return Un(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return Vn(f)})})}),0)})}
function iq(){A(function(a){return a.yield(Co(),0)})}
function cq(a){T("nwl_csi_killswitch")||mp("networkless_performance",a,{sampleRate:1})}
;var jq={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,
mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,
kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,
dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,
tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,
tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496};var kq={},lq=Go("ServiceWorkerLogsDatabase",{ub:(kq.SWHealthLog={Ab:1},kq),shared:!0,upgrade:function(a,b){b(1)&&Sn(Ln(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function mq(a){return fo(lq(),a)}
function nq(a){var b,c;A(function(d){if(1==d.h)return d.yield(mq(a),2);b=d.i;c=W()-2592E6;return d.yield(Kn(b,["SWHealthLog"],{mode:"readwrite",ja:!0},function(e){return Un(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return Vn(f)})})}),0)})}
function oq(a){var b;return A(function(c){if(1==c.h)return c.yield(mq(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var pq={},qq=0;function rq(a){var b=new Image,c=""+qq++;pq[c]=b;b.onload=b.onerror=function(){delete pq[c]};
b.src=a}
;var sq;function tq(){sq||(sq=new Vm("yt.offline"));return sq}
function uq(a){if(T("offline_error_handling")){var b=tq().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);tq().set("errors",b,2592E3,!0)}}
;function vq(){this.h=new Map;this.i=!1}
function wq(){if(!vq.h){var a=E("yt.networkRequestMonitor.instance")||new vq;D("yt.networkRequestMonitor.instance",a);vq.h=a}return vq.h}
vq.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
vq.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
vq.prototype.removeParams=function(a){return a.split("?")[0]};
vq.prototype.removeParams=vq.prototype.removeParams;vq.prototype.isEndpointCFR=vq.prototype.isEndpointCFR;vq.prototype.requestComplete=vq.prototype.requestComplete;vq.getInstance=wq;function xq(){wd.call(this);var a=this;this.j=!1;this.i=Ai();this.i.listen("networkstatus-online",function(){if(a.j&&T("offline_error_handling")){var b=tq().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new V(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Tk(d)}tq().set("errors",{},2592E3,!0)}}})}
w(xq,wd);function yq(){if(!xq.h){var a=E("yt.networkStatusManager.instance")||new xq;D("yt.networkStatusManager.instance",a);xq.h=a}return xq.h}
m=xq.prototype;m.va=function(){return this.i.va()};
m.cb=function(a){this.i.i=a};
m.le=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.ae=function(){this.j=!0};
m.listen=function(a,b){return this.i.listen(a,b)};
m.nc=function(a){a=yi(this.i,a);a.then(function(b){T("use_cfr_monitor")&&wq().requestComplete("generate_204",b)});
return a};
xq.prototype.sendNetworkCheckRequest=xq.prototype.nc;xq.prototype.listen=xq.prototype.listen;xq.prototype.enableErrorFlushing=xq.prototype.ae;xq.prototype.getWindowStatus=xq.prototype.le;xq.prototype.networkStatusHint=xq.prototype.cb;xq.prototype.isNetworkAvailable=xq.prototype.va;xq.getInstance=yq;function zq(a){a=void 0===a?{}:a;wd.call(this);var b=this;this.i=this.m=0;this.j=yq();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){Aq(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Aq(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){xd(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){xd(b,"publicytnetworkstatus-offline")})))}
w(zq,wd);zq.prototype.va=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
zq.prototype.cb=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
zq.prototype.nc=function(a){var b=this,c;return A(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return T("skip_network_check_if_cfr")&&wq().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.cb((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.va())})):c?d.return(c(a)):d.return(!0)})};
function Aq(a,b){a.rateLimit?a.i?(Bi.qa(a.m),a.m=Bi.pa(function(){a.l!==b&&(xd(a,b),a.l=b,a.i=W())},a.rateLimit-(W()-a.i))):(xd(a,b),a.l=b,a.i=W()):xd(a,b)}
;var Bq;function Cq(){var a=Pp.call;Bq||(Bq=new zq({kg:!0,eg:!0}));a.call(Pp,this,{ea:{Vd:hq,lb:gq,jd:dq,ze:eq,Oc:fq,set:bq},ba:Bq,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;Uk(new V(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else Tk(b)},
mb:Uk,sendFn:Dq,now:W,Md:uq,Da:Um(),Nc:"publicytnetworkstatus-online",Kc:"publicytnetworkstatus-offline",ac:!0,Yb:.1,kc:U("potential_esf_error_limit",10),W:T,Db:!(lm()&&Eq())});this.j=new mi;T("networkless_immediately_drop_all_requests")&&iq();Do("LogsDatabaseV2")}
w(Cq,Pp);function Fq(){var a=E("yt.networklessRequestController.instance");a||(a=new Cq,D("yt.networklessRequestController.instance",a),T("networkless_logging")&&so().then(function(b){a.V=b;Rp(a);a.j.resolve();a.ac&&Math.random()<=a.Yb&&a.V&&nq(a.V);T("networkless_immediately_drop_sw_health_store")&&Gq(a)}));
return a}
Cq.prototype.writeThenSend=function(a,b){b||(b={});b=Hq(a,b);lm()||(this.h=!1);Pp.prototype.writeThenSend.call(this,a,b)};
Cq.prototype.sendThenWrite=function(a,b,c){b||(b={});b=Hq(a,b);lm()||(this.h=!1);Pp.prototype.sendThenWrite.call(this,a,b,c)};
Cq.prototype.sendAndWrite=function(a,b){b||(b={});b=Hq(a,b);lm()||(this.h=!1);Pp.prototype.sendAndWrite.call(this,a,b)};
Cq.prototype.awaitInitialization=function(){return this.j.promise};
function Gq(a){var b;A(function(c){if(!a.V)throw b=wn("clearSWHealthLogsDb"),b;return c.return(oq(a.V).catch(function(d){a.handleError(d)}))})}
function Dq(a,b,c,d){d=void 0===d?!1:d;b=T("web_fp_via_jspb")?Object.assign({},b):b;T("use_cfr_monitor")&&Iq(a,b);if(T("use_request_time_ms_header"))b.headers&&dl(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));else{var e;if(null==(e=b.postParams)?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(W())}if(c&&0===Object.keys(b).length){var f=void 0===f?"":f;var g=void 0===g?!1:g;var h=void 0===h?!1:h;if(a)if(f)ql(a,void 0,"POST",f,void 0);else if(S("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)ql(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new cb({url:a});if(k.j&&k.i||k.l){var l=mc(nc(5,a)),n;if(!(n=!l||!l.endsWith("/aclk"))){var p=a.search(vc),r=uc(a,0,"ri",p);if(0>r)var t=null;else{var x=a.indexOf("&",r);if(0>x||x>p)x=p;t=decodeURIComponent(a.slice(r+3,-1!==x?x:0).replace(/\+/g," "))}n="1"!==t}var z=!n;break b}}catch(J){}z=!1}if(z){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var y=!0;break b}}catch(J){}y=!1}c=y?!0:!1}else c=
!1;c||rq(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),Ep(a,b.postBody,b,ul,d)):Ep(a,JSON.stringify(b.postParams),b,tl,d):ul(a,b)}
function Hq(a,b){T("use_event_time_ms_header")&&dl(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(W())));return b}
function Iq(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){wq().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){wq().requestComplete(a,!0);d(e,f)}}
function Eq(){return"www.youtube-nocookie.com"!==oc(document.location.toString())}
;var Jq=!1,Kq=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Jq};D("ytNetworklessLoggingInitializationOptions",Kq);function Lq(){var a;A(function(b){if(1==b.h)return b.yield(so(),2);a=b.i;if(!a||!lm()&&!T("nwl_init_require_datasync_id_killswitch")||!Eq())return b.B(0);Jq=!0;Kq.isNwlInitialized=Jq;return b.yield(Fq().awaitInitialization(),0)})}
;function Mq(a){var b=this;this.config_=null;a?this.config_=a:Uo()&&(this.config_=Vo());om(function(){Np(b)},5E3)}
Mq.prototype.isReady=function(){!this.config_&&Uo()&&(this.config_=Vo());return!!this.config_};
function Op(a,b,c,d){function e(x){x=void 0===x?!1:x;var z;if(d.retry&&"www.youtube-nocookie.com"!=h&&(x||T("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(z=Lp(b,c,l,k)),z)){var y=g.onSuccess,J=g.onFetchSuccess;g.onSuccess=function(N,da){Mp(z);y(N,da)};
c.onFetchSuccess=function(N,da){Mp(z);J(N,da)}}try{if(x&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Fq().writeThenSend(t,g):Fq().sendAndWrite(t,g);
else if(d.compress){var G=!d.networklessOptions.writeThenSend;if(g.postBody){var R=g.postBody;"string"!==typeof R&&(R=JSON.stringify(g.postBody));Ep(t,R,g,ul,G)}else Ep(t,JSON.stringify(g.postParams),g,tl,G)}else T("web_all_payloads_via_jspb")?ul(t,g):tl(t,g)}catch(N){if("InvalidAccessError"===N.name)z&&(Mp(z),z=0),Uk(Error("An extension is blocking network request."));else throw N;}z&&om(function(){Np(a)},5E3)}
!S("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Uk(new V("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new V("innertube xhrclient not ready",b,c,d);Tk(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(x,z){if(d.onSuccess)d.onSuccess(z)},
onFetchSuccess:function(x){if(d.onSuccess)d.onSuccess(x)},
onError:function(x,z){if(d.onError)d.onError(z)},
onFetchError:function(x){if(d.onError)d.onError(x)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.se)&&(h=f);var k=a.config_.ue||!1,l=Xo(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,p={alt:"json"},r=a.config_.te&&f;r=r&&f.startsWith("Bearer");r||(p.key=a.config_.innertubeApiKey);var t=cl(""+h+n,p||{},!0);(E("ytNetworklessLoggingInitializationOptions")?
Kq.isNwlInitialized:Jq)?qo().then(function(x){e(x)}):e(!1)}
;var Nq=0,Oq=Yc?"webkit":Xc?"moz":Vc?"ms":Uc?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++Nq});var Pq={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Qq(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Pq||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Rq(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Qq.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Qq.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Qq.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Mb=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",Mb);var Sq=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",Sq);
function Tq(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Lb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ra(e[4])&&Ra(d)&&Qb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Uq(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Tq(a,b,c,d);if(e)return e;e=++Sq.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Qq(h);if(!Hd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Qq(h);
h.currentTarget=a;return c.call(a,h)};
g=Sk(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Vq()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Mb[e]=[a,b,c,g,d];return e}
function Wq(a){a&&("string"==typeof a&&(a=[a]),Db(a,function(b){if(b in Mb){var c=Mb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Vq()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Mb[b]}}))}
var Vq=Cd(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function Xq(a){this.F=a;this.h=null;this.l=0;this.v=null;this.m=0;this.i=[];for(a=0;4>a;a++)this.i.push(0);this.j=0;this.U=Uq(window,"mousemove",Xa(this.Z,this));a=Xa(this.K,this);"function"===typeof a&&(a=Sk(a));this.da=window.setInterval(a,25)}
$a(Xq,F);Xq.prototype.Z=function(a){void 0===a.h&&Rq(a);var b=a.h;void 0===a.i&&Rq(a);this.h=new Dd(b,a.i)};
Xq.prototype.K=function(){if(this.h){var a=W();if(0!=this.l){var b=this.v,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.l);this.i[this.j]=.5<Math.abs((d-this.m)/this.m)?1:0;for(c=b=0;4>c;c++)b+=this.i[c]||0;3<=b&&this.F();this.m=d}this.l=a;this.v=this.h;this.j=(this.j+1)%4}};
Xq.prototype.R=function(){window.clearInterval(this.da);Wq(this.U)};var Yq={};
function Zq(a){var b=void 0===a?{}:a;a=void 0===b.Je?!1:b.Je;b=void 0===b.be?!0:b.be;if(null==E("_lact",window)){var c=parseInt(S("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);-1==c&&$q();Uq(document,"keydown",$q);Uq(document,"keyup",$q);Uq(document,"mousedown",$q);Uq(document,"mouseup",$q);a?Uq(window,"touchmove",function(){ar("touchmove",200)},{passive:!0}):(Uq(window,"resize",function(){ar("resize",200)}),b&&Uq(window,"scroll",function(){ar("scroll",200)}));
new Xq(function(){ar("mouse",100)});
Uq(document,"touchstart",$q,{passive:!0});Uq(document,"touchend",$q,{passive:!0})}}
function ar(a,b){Yq[a]||(Yq[a]=!0,Bi.pa(function(){$q();Yq[a]=!1},b))}
function $q(){null==E("_lact",window)&&Zq();var a=Date.now();D("_lact",a,window);-1==E("_fact",window)&&D("_fact",a,window);(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function br(){var a=E("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var cr=C.ytPubsubPubsubInstance||new L,dr=C.ytPubsubPubsubSubscribedKeys||{},er=C.ytPubsubPubsubTopicToKeys||{},fr=C.ytPubsubPubsubIsSynchronous||{};function gr(a,b){var c=hr();if(c&&b){var d=c.subscribe(a,function(){function e(){dr[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,f)}
var f=arguments;try{fr[a]?e():jl(e,0)}catch(g){Tk(g)}},void 0);
dr[d]=!0;er[a]||(er[a]=[]);er[a].push(d);return d}return 0}
function ir(a){var b=hr();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),Db(a,function(c){b.unsubscribeByKey(c);delete dr[c]}))}
function jr(a,b){var c=hr();c&&c.publish.apply(c,arguments)}
function kr(a){var b=hr();if(b)if(b.clear(a),a)lr(a);else for(var c in er)lr(c)}
function hr(){return C.ytPubsubPubsubInstance}
function lr(a){er[a]&&(a=er[a],Db(a,function(b){dr[b]&&delete dr[b]}),a.length=0)}
L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.xb;L.prototype.publish=L.prototype.Va;L.prototype.clear=L.prototype.clear;D("ytPubsubPubsubInstance",cr);D("ytPubsubPubsubTopicToKeys",er);D("ytPubsubPubsubIsSynchronous",fr);D("ytPubsubPubsubSubscribedKeys",dr);var mr=Symbol("injectionDeps");function qr(a){this.name=a}
qr.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function rr(a){this.key=a}
function sr(){this.i=new Map;this.j=new Map;this.h=new Map}
function tr(a,b){a.i.set(b.mc,b);var c=a.j.get(b.mc);if(c)try{c.rg(a.resolve(b.mc))}catch(d){c.pg(d)}}
sr.prototype.resolve=function(a){return a instanceof rr?ur(this,a.key,[],!0):ur(this,a,[])};
function ur(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(void 0!==d.Id)var e=d.Id;else if(d.rf)e=d[mr]?vr(a,d[mr],c):[],e=d.rf.apply(d,ma(e));else if(d.Hd){e=d.Hd;var f=e[mr]?vr(a,e[mr],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ma(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.ug||a.h.set(b,e);return e}
function vr(a,b,c){return b?b.map(function(d){return d instanceof rr?ur(a,d.key,c,!0):ur(a,d,c)}):[]}
;var wr;function xr(){wr||(wr=new sr);return wr}
;var yr=window;function zr(){var a,b;return"h5vcc"in yr&&(null==(a=yr.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=yr.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in yr&&yr.performance.mark&&yr.performance.measure?2:0}
function Ar(a){var b=zr();switch(b){case 1:yr.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:yr.performance.mark(a+"-start");break;case 0:break;default:Xb(b,"unknown trace type")}}
function Br(a){var b=zr();switch(b){case 1:yr.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";yr.performance.mark(c);yr.performance.measure(a,b,c);break;case 0:break;default:Xb(b,"unknown trace type")}}
;var Cr=T("web_enable_lifecycle_monitoring")&&0!==zr(),Dr=T("web_enable_lifecycle_monitoring");function Er(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?Um():d;this.j=c;this.scheduler=d;this.i=new mi;this.h=a;for(a={Za:0};a.Za<this.h.length;a={jc:void 0,Za:a.Za},a.Za++)a.jc=this.h[a.Za],c=function(e){return function(){e.jc.Dc();b.h[e.Za].lc=!0;b.h.every(function(f){return!0===f.lc})&&b.i.resolve()}}(a),d=this.getPriority(a.jc),d=this.scheduler.Xa(c,d),this.h[a.Za]=Object.assign({},a.jc,{Dc:c,
jobId:d})}
function Fr(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=v(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.lc||(a.scheduler.qa(c.jobId),a.scheduler.Xa(c.Dc,10))}
Er.prototype.cancel=function(){for(var a=v(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.lc||this.scheduler.qa(b.jobId),b.lc=!0;this.i.resolve()};
Er.prototype.getPriority=function(a){var b;return null!=(b=a.priority)?b:this.j};function Gr(a){this.state=a;this.plugins=[];this.l=void 0;this.v={};Cr&&Ar(this.state)}
m=Gr.prototype;m.install=function(a){this.plugins.push(a);return this};
m.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
m.transition=function(a,b){var c=this;Cr&&Br(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(Fr(this.j),this.j=void 0);Hr(this,a,b);this.state=a;Cr&&Ar(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Ir(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Ir(a,b){var c=b.filter(function(e){return 10===Jr(a,e)}),d=b.filter(function(e){return 10!==Jr(a,e)});
return a.v.tg?function(){var e=B.apply(0,arguments);return A(function(f){if(1==f.h)return f.yield(a.Qe.apply(a,[c].concat(ma(e))),2);a.Dd.apply(a,[d].concat(ma(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.Re.apply(a,[c].concat(ma(e)));a.Dd.apply(a,[d].concat(ma(e)))}}
m.Re=function(a){for(var b=B.apply(1,arguments),c=Um(),d=v(a),e=d.next(),f={};!e.done;f={Gb:void 0},e=d.next())f.Gb=e.value,c.zb(function(g){return function(){Kr(g.Gb.name);g.Gb.callback.apply(g.Gb,ma(b));Lr(g.Gb.name)}}(f))};
m.Qe=function(a){var b=B.apply(1,arguments),c,d,e,f,g;return A(function(h){1==h.h&&(c=Um(),d=v(a),e=d.next(),f={});if(3!=h.h){if(e.done)return h.B(0);f.qb=e.value;f.Tb=void 0;g=function(k){return function(){Kr(k.qb.name);var l=k.qb.callback.apply(k.qb,ma(b));"function"===typeof(null==l?void 0:l.then)?k.Tb=l.then(function(){Lr(k.qb.name)}):Lr(k.qb.name)}}(f);
c.zb(g);return f.Tb?h.yield(f.Tb,3):h.B(3)}f={qb:void 0,Tb:void 0};e=d.next();return h.B(2)})};
m.Dd=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{Dc:function(){Kr(e.name);e.callback.apply(e,ma(b));Lr(e.name)},
priority:Jr(c,e)}});
d.length&&(this.j=new Er(d))};
function Jr(a,b){var c,d;return null!=(d=null!=(c=a.l)?c:b.priority)?d:0}
function Kr(a){Cr&&a&&Ar(a)}
function Lr(a){Cr&&a&&Br(a)}
function Hr(a,b,c){Dr&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
fa.Object.defineProperties(Gr.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Mr(a){Gr.call(this,void 0===a?"none":a);this.h=null;this.l=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.A},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var Nr;w(Mr,Gr);Mr.prototype.i=function(a,b){var c=this;this.h=om(function(){"application_navigating"===c.currentState&&c.transition("none")},5E3);
a(null==b?void 0:b.event)};
Mr.prototype.A=function(a,b){this.h&&(Bi.qa(this.h),this.h=null);a(null==b?void 0:b.event)};
function Or(){Nr||(Nr=new Mr);return Nr}
;var Pr=[];D("yt.logging.transport.getScrapedGelPayloads",function(){return Pr});function Qr(){this.store={};this.h={}}
Qr.prototype.storePayload=function(a,b){a=Rr(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
Qr.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=Sr(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ma(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ma(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ma(this.smartExtractMatchingEntries(a))));return c};
Qr.prototype.extractMatchingEntries=function(a){a=Sr(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ma(this.store[a[c]])),delete this.store[a[c]]);return b};
Qr.prototype.getSequenceCount=function(a){a=Sr(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function Sr(a,b){var c=Rr(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&Rr(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(Tr(b.auth,g[0])){var h=b.isJspb;Tr(void 0===h?"undefined":h?"true":"false",g[1])&&Tr(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),Tr(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function Tr(a,b){return void 0===a||"undefined"===a?!0:a===b}
Qr.prototype.getSequenceCount=Qr.prototype.getSequenceCount;Qr.prototype.extractMatchingEntries=Qr.prototype.extractMatchingEntries;Qr.prototype.smartExtractMatchingEntries=Qr.prototype.smartExtractMatchingEntries;Qr.prototype.storePayload=Qr.prototype.storePayload;function Rr(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;function Ur(a,b){if(a)return a[b.name]}
;var Vr=U("initial_gel_batch_timeout",2E3),Wr=U("gel_queue_timeout_max_ms",6E4),Xr=Math.pow(2,16)-1,Yr=U("gel_min_batch_size",5),Zr=void 0;function $r(){this.l=this.h=this.i=0;this.j=!1}
var as=new $r,bs=new $r,cs=new $r,ds=new $r,es,gs=!0,hs=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",hs);var is={};function js(){var a=E("yt.logging.ims");a||(a=new Qr,D("yt.logging.ims",a));return a}
function ks(a,b){if("log_event"===a.endpoint){ls();var c=ms(a),d=ns(a.payload)||"";a:{if(T("enable_web_tiered_gel")){var e=jq[d||""];var f,g,h,k=null==xr().resolve(new rr(Po))?void 0:null==(f=Qo())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.eventLoggingConfig)?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(!1===e.enabled&&!T("web_payload_policy_disabled_killswitch"))return;k=ps(e.tier);if(400===k){qs(a,b);return}}is[c]=
!0;e={cttAuthInfo:c,isJspb:!1,tier:k};js().storePayload(e,a.payload);rs(b,c,e,"gelDebuggingEvent"===d)}}
function rs(a,b,c,d){function e(){ss({writeThenSend:!0},T("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=void 0===f?!1:f;d=void 0===d?!1:d;a&&(Zr=new a);a=U("tvhtml5_logging_max_batch_ads_fork")||U("web_logging_max_batch")||100;var g=W(),h=ts(f,c.tier),k=h.l;d&&(h.j=!0);d=0;c&&(d=js().getSequenceCount(c));1E3<=d?e():d>=a?es||(es=us(function(){e();es=void 0},0)):10<=g-k&&(vs(f,c.tier),h.l=g)}
function qs(a,b){if("log_event"===a.endpoint){ls();var c=ms(a),d=new Map;d.set(c,[a.payload]);var e=ns(a.payload)||"";b&&(Zr=new b);return new Ud(function(f,g){Zr&&Zr.isReady()?ws(d,Zr,f,g,{bypassNetworkless:!0},!0,"gelDebuggingEvent"===e):f()})}}
function ms(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);hs[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function ss(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new Ud(function(e,f){var g=ts(c,d),h=g.j;g.j=!1;xs(g.i);xs(g.h);g.h=0;Zr&&Zr.isReady()?void 0===d&&T("enable_web_tiered_gel")?ys(e,f,a,b,c,300,h):ys(e,f,a,b,c,d,h):(vs(c,d),e())})}
function ys(a,b,c,d,e,f,g){var h=Zr;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;g=void 0===g?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(void 0!==d)f=T("enable_web_tiered_gel")?js().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):js().extractMatchingEntries(e),k.set(d,f);else for(d=v(Object.keys(is)),l=d.next();!l.done;l=d.next())l=l.value,e=T("enable_web_tiered_gel")?js().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):js().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),0<e.length&&k.set(l,e),(T("web_fp_via_jspb_and_json")&&c.writeThenSend||!T("web_fp_via_jspb_and_json"))&&delete is[l];ws(k,h,a,b,c,!1,g)}
function vs(a,b){function c(){ss({writeThenSend:!0},void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=ts(a,b),e=d===ds||d===cs?5E3:Wr;T("web_gel_timeout_cap")&&!d.h&&(e=us(function(){c()},e),d.h=e);
xs(d.i);e=S("LOGGING_BATCH_TIMEOUT",U("web_gel_debounce_ms",1E4));T("shorten_initial_gel_batch_timeout")&&gs&&(e=Vr);e=us(function(){0<U("gel_min_batch_size")?js().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=Yr&&c():c()},e);
d.i=e}
function ws(a,b,c,d,e,f,g){e=void 0===e?{}:e;var h=Math.round(W()),k=a.size,l=(void 0===g?0:g)&&T("vss_through_gel_video_stats")?"video_stats":"log_event";a=v(a);var n=a.next();for(g={};!n.done;g={Jc:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Mc:void 0,Lc:void 0},n=a.next()){var p=v(n.value);n=p.next().value;p=p.next().value;g.batchRequest=Sb({context:Wo(b.config_||Vo())});if(!Qa(p)&&!T("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=p;(p=hs[n])&&
zs(g.batchRequest,n,p);delete hs[n];g.dangerousLogToVisitorSession="visitorOnlyApprovedKey"===n;As(g.batchRequest,h,g.dangerousLogToVisitorSession);T("always_send_and_write")&&(e.writeThenSend=!1);g.Mc=function(r){T("start_client_gcf")&&Bi.pa(function(){return A(function(t){return t.yield(Bs(r),0)})});
k--;k||c()};
g.Jc=0;g.Lc=function(r){return function(){r.Jc++;if(e.bypassNetworkless&&1===r.Jc)try{Op(b,l,r.batchRequest,Cs({writeThenSend:!0},r.dangerousLogToVisitorSession,r.Mc,r.Lc,f)),gs=!1}catch(t){Tk(t),d()}k--;k||c()}}(g);
try{Op(b,l,g.batchRequest,Cs(e,g.dangerousLogToVisitorSession,g.Mc,g.Lc,f)),gs=!1}catch(r){Tk(r),d()}}}
function Cs(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Zf:!!e,headers:{},postBodyFormat:"",postBody:"",compress:T("compress_gel")||T("compress_gel_lr")};Ds()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));return a}
function As(a,b,c){Ds()||(a.requestTimeMs=String(b));T("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=S("EVENT_ID"))&&((c=S("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*Xr/2)),c++,c>Xr&&(c=1),Ok("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function zs(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function ls(){var a;(a=E("yt.logging.transport.enableScrapingForTest"))||(a=ll("il_payload_scraping"),a="enable_il_payload_scraping"!==(void 0!==a?String(a):""));a||(Pr=[],D("yt.logging.transport.enableScrapingForTest",!0),D("yt.logging.transport.scrapedPayloadsForTesting",Pr),D("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
D("yt.logging.transport.scrapeClientEvent",!0))}
function Ds(){return T("use_request_time_ms_header")||T("lr_use_request_time_ms_header")}
function us(a,b){return!1===T("embeds_transport_use_scheduler")?jl(a,b):T("logging_avoid_blocking_during_navigation")||T("lr_logging_avoid_blocking_during_navigation")?om(function(){if("none"===Or().currentState)a();else{var c={};Or().install((c.none={callback:a},c))}},b):om(a,b)}
function xs(a){T("transport_use_scheduler")?Bi.qa(a):window.clearTimeout(a)}
function Bs(a){var b,c,d,e,f,g,h,k,l,n;return A(function(p){return 1==p.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=Ur(d,tk),g=null==(f=d)?void 0:f.hotHashData,h=Ur(d,sk),l=null==(k=d)?void 0:k.coldHashData,(n=xr().resolve(new rr(Po)))?g?e?p.yield(Ro(n,g,e),2):p.yield(Ro(n,g),2):p.B(2):p.return()):l?h?p.yield(So(n,l,h),0):p.yield(So(n,l),0):p.B(0)})}
function ts(a,b){b=void 0===b?200:b;return a?300===b?ds:bs:300===b?cs:as}
function ns(a){a=Object.keys(a);a=v(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,jq[b])return b}
function ps(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var Es=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",Es);
function Fs(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||W());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=br();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!T("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,Es[b]=b in Es?Es[b]+1:0,a.sequence={index:Es[b],groupKey:b},d.endOfSequence&&delete Es[d.sequenceGroup]);(d.sendIsolatedPayload?qs:ks)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function dn(a,b,c){c=void 0===c?{}:c;var d=Mq;S("ytLoggingEventsDefaultDisabled",!1)&&Mq===Mq&&(d=null);T("web_all_payloads_via_jspb")&&!c.timestamp&&(c.lact=br(),c.timestamp=W());Fs(a,b,d,c)}
;D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var Gs=new Set,Hs=0,Is=0,Js=0,Ks=[],Ls=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function cn(a){Ms(a)}
function Ns(a){Ms(a,"WARNING")}
function Os(a){a instanceof Error?Ms(a):(a=Ra(a)?JSON.stringify(a):String(a),a=new V(a),a.name="RejectedPromiseError",Ns(a))}
function Ms(a,b,c,d,e,f,g,h){f=void 0===f?{}:f;f.name=c||S("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||S("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),T("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(5<=Hs))){d=Ks;var k=fc(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var n=l.split("\n");n.shift();l=n.join("\n")}n=k.lineNumber||"Not available";k=k.fileName||"Not available";var p=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var r=0;r<a.args.length&&!(p=Ml(a.args[r],"params."+r,c,p),
500<=p);r++);else if(a.hasOwnProperty("params")&&a.params){var t=a.params;if("object"===typeof a.params)for(r in t){if(t[r]){var x="params."+r,z=Ol(t[r]);c[x]=z;p+=x.length+z.length;if(500<p)break}}else c.params=Ol(t)}if(d.length)for(r=0;r<d.length&&!(p=Ml(d[r],"params.context."+r,c,p),500<=p);r++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);r={message:e,name:f,lineNumber:n,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(r.lineNumber=
r.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=Il();c=v(a.Ra);for(d=c.next();!d.done;d=c.next())if(d=d.value,r.message&&r.message.match(d.lg)){a=d.weight;break a}a=v(a.Oa);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(r)){a=c.weight;break a}a=1}r.sampleWeight=a;a=v(Dl);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.ic[r.name])for(e=v(c.ic[r.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=r.message.match(f.regexp)){r.params["params.error.original"]=d[0];e=f.groups;f={};
for(n=0;n<e.length;n++)f[e[n]]=d[n+1],r.params["params.error."+e[n]]=d[n+1];r.message=c.Hc(f);break}r.params||(r.params={});a=Il();r.params["params.errorServiceSignature"]="msg="+a.Ra.length+"&cb="+a.Oa.length;r.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(r.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));ib("sample").constructor!==gb&&(r.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(r);
if(0!==r.sampleWeight&&!Gs.has(r.message)){if(g&&T("web_enable_error_204"))Ps(void 0===b?"ERROR":b,r);else{b=void 0===b?"ERROR":b;"ERROR"===b?(Jl.Va("handleError",r),T("record_app_crashed_web")&&0===Js&&1===r.sampleWeight&&(Js++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},T("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:r.message}}}}),dn("appCrashed",g)),Is++):"WARNING"===b&&Jl.Va("handleWarning",r);if(T("kevlar_gel_error_routing")){g=b;h=void 0===
h?{}:h;b:{a=v(Ls);for(c=a.next();!c.done;c=a.next())if(kn(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:r.stack};r.fileName&&(c.filename=r.fileName);a=r.lineNumber&&r.lineNumber.split?r.lineNumber.split(":"):[];0!==a.length&&(1!==a.length||isNaN(Number(a[0]))?2!==a.length||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:r.message,errorClassName:r.name,sampleWeight:r.sampleWeight};
"ERROR"===g?a.level="ERROR_LEVEL_ERROR":"WARNING"===g&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];S("FEXP_EXPERIMENTS")&&(h.experimentIds=S("FEXP_EXPERIMENTS"));d=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Pk("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=v(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=r.params)for(e=v(Object.keys(d)),f=e.next();!f.done;f=e.next())f=
f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=S("SERVER_NAME");e=S("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(dn("clientError",h),("ERROR"===g||T("errors_flush_gel_always_killswitch"))&&ss(void 0,void 0,!1))}T("suppress_error_204_logging")||Ps(b,r)}try{Gs.add(r.message)}catch(y){}Hs++}}}
function Ps(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:S("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=v(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=v(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=S("SERVER_NAME");b=S("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}ul(S("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function Qs(){this.register=new Map}
function Rs(a){a=v(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.og("ABORTED")}
Qs.prototype.clear=function(){Rs(this);this.register.clear()};
var Ss=new Qs;var Ts=Date.now().toString();
function Us(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Ts)for(a=1,b=0;b<Ts.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Ts.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Vs,Ws=C.ytLoggingDocDocumentNonce_;Ws||(Ws=Us(),D("ytLoggingDocDocumentNonce_",Ws));Vs=Ws;function Xs(a){this.h=a}
m=Xs.prototype;m.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
m.getAsJspb=function(){var a=new Ak;void 0!==this.h.trackingParams?a.setTrackingParams(this.h.trackingParams):(void 0!==this.h.veType&&qg(a,2,Hf(this.h.veType)),void 0!==this.h.veCounter&&qg(a,6,Hf(this.h.veCounter)),void 0!==this.h.elementIndex&&qg(a,3,Hf(this.h.elementIndex)),this.h.isCounterfactual&&qg(a,5,Ef(!0)));if(void 0!==this.h.dataElement){var b=this.h.dataElement.getAsJspb();yg(a,Ak,7,b)}void 0!==this.h.youtubeData&&yg(a,uk,8,this.h.jspbYoutubeData);return a};
m.toString=function(){return JSON.stringify(this.getAsJson())};
m.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
m.getLoggingDirectives=function(){return this.h.loggingDirectives};function Ys(a){return S("client-screen-nonce-store",{})[void 0===a?0:a]}
function Zs(a,b){b=void 0===b?0:b;var c=S("client-screen-nonce-store");c||(c={},Ok("client-screen-nonce-store",c));c[b]=a}
function $s(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function at(a){return S($s(void 0===a?0:a))}
D("yt_logging_screen.getRootVeType",at);function bt(){var a=S("csn-to-ctt-auth-info");a||(a={},Ok("csn-to-ctt-auth-info",a));return a}
function ct(){return Object.values(S("client-screen-nonce-store",{})).filter(function(a){return void 0!==a})}
function dt(a){a=Ys(void 0===a?0:a);if(!a&&!S("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",dt);function et(a,b,c){var d=bt();(c=dt(c))&&delete d[c];b&&(d[a]=b)}
function ft(a){return bt()[a]}
D("yt_logging_screen.getCttAuthInfo",ft);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==Ys(c)||b!==S($s(c)))if(et(a,d,c),Zs(a,c),Ok($s(c),b),b=function(){setTimeout(function(){a&&dn("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Vs,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function gt(){var a=Rb(ht),b;return(new Ud(function(c,d){a.onSuccess=function(e){il(e)?c(new jt(e)):d(new kt("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new kt("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new kt("Request timed out","net.timeout",e))};
b=ul("//googleads.g.doubleclick.net/pagead/id",a)})).oc(function(c){if(c instanceof ae){var d;
null==(d=b)||d.abort()}return Zd(c)})}
function kt(a,b,c){bb.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
w(kt,bb);function jt(a){this.xhr=a}
;function lt(){this.h=0;this.i=null}
lt.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.i))&&"function"===typeof a.then?a:mt(a):2===this.h&&b?(a=b.call(c,this.i))&&"function"===typeof a.then?a:nt(a):this};
lt.prototype.getValue=function(){return this.i};
lt.prototype.isRejected=function(){return 2==this.h};
lt.prototype.$goog_Thenable=!0;function nt(a){var b=new lt;a=void 0===a?null:a;b.h=2;b.i=void 0===a?null:a;return b}
function mt(a){var b=new lt;a=void 0===a?null:a;b.h=1;b.i=void 0===a?null:a;return b}
;function ot(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:dl(a)?"same-origin":"cors",credentials:dl(a)?"same-origin":"include"};b={};for(var d=v(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function pt(){return ah()||(Be||Ce)&&kn("applewebkit")&&!kn("version")&&(!kn("safari")||kn("gsa/"))||Zc&&kn("version/")?!0:S("EOM_VISITOR_DATA")?!1:!0}
;function qt(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in yk)if(yk[d]==c.embeddedPlayerMode){b=yk[d];break b}}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function rt(a){bb.call(this,a.message||a.description||a.name);this.isMissing=a instanceof st;this.isTimeout=a instanceof kt&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof ae}
w(rt,bb);rt.prototype.name="BiscottiError";function st(){bb.call(this,"Biscotti ID is missing from server")}
w(st,bb);st.prototype.name="BiscottiMissingError";var ht={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},tt=null;function ut(){if(T("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!pt())return Error("User has not consented - not fetching biscotti id.");var a=S("PLAYER_VARS",{});if("1"==Pb(a))return Error("Biscotti ID is not available in private embed mode");if(qt(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Hk(){var a=ut();if(void 0!==a)return Zd(a);tt||(tt=gt().then(vt).oc(function(b){return wt(2,b)}));
return tt}
function vt(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new st;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new st;a=a.id;Ik(a);tt=mt(a);xt(18E5,2);return a}
function wt(a,b){b=new rt(b);Ik("");tt=nt(b);0<a&&xt(12E4,a-1);throw b;}
function xt(a,b){jl(function(){gt().then(vt,function(c){return wt(b,c)}).oc(Bd)},a)}
function zt(){try{var a=E("yt.ads.biscotti.getId_");return a?a():Hk()}catch(b){return Zd(b)}}
;var Bb=ja(["data-"]);function At(a){a&&(a.dataset?a.dataset[Bt()]="true":Wb(a))}
function Ct(a){return a?a.dataset?a.dataset[Bt()]:a.getAttribute("data-loaded"):null}
var Dt={};function Bt(){return Dt.loaded||(Dt.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function Et(a,b,c){F.call(this);var d=this;c=c||S("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.i=b||null;this.targetOrigin="*";this.j=c;this.sessionId=null;this.channel="widget";this.F=!!a;this.v=function(e){a:if(!("*"!=d.j&&e.origin!=d.j||d.i&&e.source!=d.i||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.F&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.j=d.targetOrigin=e.origin);d.i=e.source;d.sessionId=f.id;d.h&&(d.h(),d.h=null);break;case "command":d.l&&(!d.m||0<=Cb(d.m,f.func))&&d.l(f.func,f.args,e.origin)}}};
this.m=this.h=this.l=null;window.addEventListener("message",this.v)}
w(Et,F);Et.prototype.sendMessage=function(a,b){if(b=b||this.i){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){Uk(d)}}};
Et.prototype.R=function(){window.removeEventListener("message",this.v);F.prototype.R.call(this)};function Ft(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||Rb(b);this.assets=a.assets||{};this.attrs=a.attrs||Rb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Ft.prototype.clone=function(){var a=new Ft,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Pa(c)?a[b]=Rb(c):a[b]=c}return a};var Gt=["share/get_web_player_share_panel"],Ht=["feedback"],It=["notification/modify_channel_preference"],Jt=["browse/edit_playlist"],Kt=["subscription/subscribe"],Lt=["subscription/unsubscribe"];var Mt=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",Mt);function Nt(a){Jk(Mt,arguments)}
;function Ot(a,b,c){Pt(a,b,void 0===c?null:c)}
function Qt(a){a=Rt(a);var b=document.getElementById(a);b&&(kr(a),b.parentNode.removeChild(b))}
function St(a,b){a&&b&&(a=""+Sa(b),(a=Tt[a])&&ir(a))}
function Pt(a,b,c){c=void 0===c?null:c;var d=Rt(a),e=document.getElementById(d),f=e&&Ct(e),g=e&&!f;f?b&&b():(b&&(f=gr(d,b),b=""+Sa(b),Tt[b]=f),g||(e=Ut(a,d,function(){Ct(e)||(At(e),jr(d),jl(function(){kr(d)},0))},c)))}
function Ut(a,b,c,d){d=void 0===d?null:d;var e=Gd("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);dc(e,qk(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Rt(a){var b=document.createElement("a");zb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+kc(a)}
var Tt={};function Vt(a){var b=Wt(a),c=document.getElementById(b),d=c&&Ct(c);d||c&&!d||(c=Xt(a,b,function(){if(!Ct(c)){At(c);jr(b);var e=Ya(kr,b);jl(e,0)}}))}
function Xt(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=qk(a);Zb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Wt(a){var b=Gd("A");zb(b,new sb(a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+kc(a)}
;function Yt(a){var b=B.apply(1,arguments);if(!Zt(a)||b.some(function(d){return!Zt(d)}))throw Error("Only objects may be merged.");
b=v(b);for(var c=b.next();!c.done;c=b.next())$t(a,c.value)}
function $t(a,b){for(var c in b)if(Zt(b[c])){if(c in a&&!Zt(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});$t(a[c],b[c])}else if(au(b[c])){if(c in a&&!au(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);bu(a[c],b[c])}else a[c]=b[c];return a}
function bu(a,b){b=v(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Zt(c)?a.push($t({},c)):au(c)?a.push(bu([],c)):a.push(c);return a}
function Zt(a){return"object"===typeof a&&!Array.isArray(a)}
function au(a){return"object"===typeof a&&Array.isArray(a)}
;function cu(a){a=void 0===a?!1:a;F.call(this);this.h=new L(a);Ec(this,this.h)}
$a(cu,F);cu.prototype.subscribe=function(a,b,c){return this.T?0:this.h.subscribe(a,b,c)};
cu.prototype.unsubscribe=function(a,b,c){return this.T?!1:this.h.unsubscribe(a,b,c)};
cu.prototype.l=function(a,b){this.T||this.h.Va.apply(this.h,arguments)};var du="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function eu(a,b){var c=void 0===c?!0:c;var d=S("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=oc(window.location.href);e&&d.push(e);e=oc(a);if(0<=Cb(d,e)||!e&&0==a.lastIndexOf("/",0))if(d=document.createElement("a"),zb(d,a),a=d.href)if(a=pc(a),a=qc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:dt()},b)),f){var f=parseInt(f,10);isFinite(f)&&0<f&&fu(a,b,f)}else fu(a,b)}
function fu(a,b,c){a=gu(a);b=b?sc(b):"";c=c||5;pt()&&Vl(a,b,c)}
function gu(a){for(var b=v(du),c=b.next();!c.done;c=b.next())a=xc(a,c.value);return"ST-"+kc(a).toString(36)}
;function hu(a){$o.call(this,1,arguments);this.csn=a}
w(hu,$o);var ip=new ap("screen-created",hu),iu=[],ju=0,ku=new Map,lu=new Map,mu=new Map;
function nu(a,b,c,d,e){e=void 0===e?!1:e;for(var f=ou({cttAuthInfo:ft(b)||void 0},b),g=v(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(Nb(k)||!k.trackingParams&&!k.veType)&&Ns(Error("Child VE logged with no data"));if(T("no_client_ve_attach_unless_shown")){var l=pu(h,b);if(k.veType&&!lu.has(l)&&!mu.has(l)&&!e){if(!T("il_attach_cache_limit")||1E3>ku.size){ku.set(l,[a,b,c,h]);return}T("il_attach_cache_limit")&&1E3<ku.size&&Ns(new V("IL Attach cache exceeded limit"))}h=pu(c,b);ku.has(h)?
qu(c,b):mu.set(h,!0)}}d=d.filter(function(n){n.csn!==b?(n.csn=b,n=!0):n=!1;return n});
c={csn:b,parentVe:c.getAsJson(),childVes:Fb(d,function(n){return n.getAsJson()})};
"UNDEFINED_CSN"===b?ru("visualElementAttached",f,c):a?Fs("visualElementAttached",c,a,f):dn("visualElementAttached",c,f)}
function ru(a,b,c){iu.push({Ie:a,payload:c,hg:void 0,options:b});ju||(ju=jp())}
function kp(a){if(iu){for(var b=v(iu),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,dn(c.Ie,c.payload,c.options));iu.length=0}ju=0}
function pu(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function qu(a,b){a=pu(a,b);ku.has(a)&&(b=ku.get(a)||[],nu(b[0],b[1],b[2],[b[3]],!0),ku.delete(a))}
function ou(a,b){T("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function su(){try{return!!self.localStorage}catch(a){return!1}}
;function tu(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function uu(a){if(su()){var b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=tu(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function vu(){if(!su())return!1;var a=mm(),b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next())if(c=tu(c.value),void 0!==c&&c!==a)return!0;return!1}
;function wu(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return("WEB"===S("INNERTUBE_CLIENT_NAME")||"WEB_CREATOR"===S("INNERTUBE_CLIENT_NAME"))&&a}
function xu(a){if(S("LOGGED_IN",!0)&&wu()){var b=S("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=oc(window.location.href);c&&b.push(c);c=oc(a);0<=Cb(b,c)||!c&&0==a.lastIndexOf("/",0)?(b=pc(a),(b=qc(b))?(b=gu(b),b=(b=Wl(b)||null)?al(b):{}):b=null):b=null;null==b&&(b={});c=b;var d=void 0;wu()?(d||(d=S("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&eu(a,b)}}
;function yu(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=S("EVENT_ID");d&&(b.ei||(b.ei=d));b&&eu(a,b);if(c)return!1;xu(a);var e=void 0===e?{}:e;var f=void 0===f?"":f;var g=void 0===g?window:g;a=tc(a,e);xu(a);f=a+f;var h=void 0===h?wb:h;a:if(h=void 0===h?wb:h,f instanceof sb)h=f;else{for(a=0;a<h.length;++a)if(b=h[a],b instanceof ub&&b.we(f)){h=new sb(f);break a}h=void 0}g=g.location;h=yb(h||tb);void 0!==h&&(g.href=h);return!0}
;function zu(a){if("1"!=Pb(S("PLAYER_VARS",{}))){a&&Gk();try{zt().then(function(){},function(){}),jl(zu,18E5)}catch(b){Tk(b)}}}
;var Au=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Bu(){var a=void 0===a?window.location.href:a;if(T("kevlar_disable_theme_param"))return null;mc(nc(5,a));try{var b=bl(a).theme;return Au.get(b)||null}catch(c){}return null}
;function Cu(){this.h={};if(this.i=Yl()){var a=Wl("CONSISTENCY");a&&Du(this,{encryptedTokenJarContents:a})}}
Cu.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.Ma.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=v(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];Du(this,a)}};
function Du(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&Vl("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Eu=window.location.hostname.split(".").slice(-2).join(".");function Fu(){var a=S("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===S("INNERTUBE_CLIENT_NAME")&&(this.h=Gu(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Hu;function Iu(){Hu=E("yt.clientLocationService.instance");Hu||(Hu=new Fu,D("yt.clientLocationService.instance",Hu));return Hu}
m=Fu.prototype;m.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
m.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===S("INNERTUBE_CLIENT_NAME")?(this.h=Gu(this))&&this.h.set("yt-location-playability-token",a,15552E3):Vl("YT_CL",JSON.stringify({loctok:a}),15552E3,Eu,!0))};
function Gu(a){return void 0===a.h?new Vm("yt-client-location"):a.h}
m.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=Gu(this))&&this.h.remove("yt-location-playability-token"):Xl("YT_CL")};
m.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===S("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
m.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
m.createLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);return b};function Ju(a){var b={"Content-Type":"application/json"};S("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=S("EOM_VISITOR_DATA"):S("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=S("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=S("LOGGED_IN",!1);S("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=S("DEBUG_SETTINGS_METADATA"));"cors"!==a&&((a=S("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=S("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=S("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=S("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;function Ku(){this.h={}}
Ku.prototype.contains=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)};
Ku.prototype.get=function(a){if(this.contains(a))return this.h[a]};
Ku.prototype.set=function(a,b){this.h[a]=b};
Ku.prototype.remove=function(a){delete this.h[a]};function Lu(){this.mappings=new Ku}
Lu.prototype.getModuleId=function(a){return a.serviceId.getModuleId()};
Lu.prototype.get=function(a){a:{var b=this.mappings.get(a.toString());switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=Xb(b)}}return a};
new Lu;function Mu(a){return function(){return new a}}
;var Nu={},Ou=(Nu.WEB_UNPLUGGED="^unplugged/",Nu.WEB_UNPLUGGED_ONBOARDING="^unplugged/",Nu.WEB_UNPLUGGED_OPS="^unplugged/",Nu.WEB_UNPLUGGED_PUBLIC="^unplugged/",Nu.WEB_CREATOR="^creator/",Nu.WEB_KIDS="^kids/",Nu.WEB_EXPERIMENTS="^experiments/",Nu.WEB_MUSIC="^music/",Nu.WEB_REMIX="^music/",Nu.WEB_MUSIC_EMBEDDED_PLAYER="^music/",Nu.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",Nu);
function Pu(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=Ou[b];if(c){c=new RegExp(c);for(var d=v(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(Ou).forEach(function(g){var h=v(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=v(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function Qu(){}
Qu.prototype.A=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?Ul:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=S("INNERTUBE_CONTEXT");if(g){g=Sb(g);T("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&"AUTOMOTIVE_FORM_FACTOR"!==h.clientFormFactor&&(h.clientFormFactor=S("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=
window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;bm();var l="USER_INTERFACE_THEME_LIGHT";em(165)?l="USER_INTERFACE_THEME_DARK":em(174)?l="USER_INTERFACE_THEME_LIGHT":!T("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");
k=k?l:Bu()||l;h.userInterfaceTheme=k;if(!f){if(k=jm())h.connectionType=k;T("web_log_effective_connection_type")&&(k=km())&&(g.client.effectiveConnectionType=k)}var n;if(T("web_log_memory_total_kbytes")&&(null==(n=C.navigator)?0:n.deviceMemory)){var p;n=null==(p=C.navigator)?void 0:p.deviceMemory;g.client.memoryTotalKbytes=""+1E6*n}T("web_gcf_hashes_innertube")&&(k=To())&&(p=k.coldConfigData,n=k.coldHashData,k=k.hotHashData,g.client.configInfo=g.client.configInfo||{},p&&(g.client.configInfo.coldConfigData=
p),n&&(g.client.configInfo.coldHashData=n),k&&(g.client.configInfo.hotHashData=k));p=bl(C.location.href);!T("web_populate_internal_geo_killswitch")&&p.internalcountrycode&&(h.internalGeo=p.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:C.location.href},T("kevlar_woffle")&&Pl.h&&(p=Pl.h,h.mainAppWebInfo.pwaInstallabilityStatus=!p.h&&p.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=Ql(),
h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!T("web_lr_app_quality_killswitch")&&(p=S("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:p})),p=S("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:p}));if(!T("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var r=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(ea){}r=
void 0}r&&(h.timeZone=r)}(r=S("EXPERIMENTS_TOKEN",""))?h.experimentsToken=r:delete h.experimentsToken;r=ml();Cu.h||(Cu.h=new Cu);h=Cu.h.h;p=[];n=0;for(var t in h)p[n++]=h[t];g.request=Object.assign({},g.request,{internalExperimentFlags:r,consistencyTokenJars:p});!T("web_prequest_context_killswitch")&&(t=S("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=t);r=bm();t=em(58);r=r.get("gsml","");g.user=Object.assign({},g.user);t&&(g.user.enableSafetyMode=t);r&&(g.user.lockedSafetyMode=
!0);T("warm_op_csn_cleanup")?e&&(f=dt())&&(g.clientScreenNonce=f):!f&&(f=dt())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=E("yt.mdx.remote.remoteClient_"))g.remoteClient=d;Iu().setLocationOnInnerTubeContext(g);try{var x=el(),z=x.bid;delete x.bid;g.adSignalsInfo={params:[],bid:z};var y=v(Object.entries(x));for(var J=y.next();!J.done;J=y.next()){var G=v(J.value),R=G.next().value,N=G.next().value;x=R;z=N;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:x,value:""+
z})}var da;if(T("add_ifa_to_tvh5_requests")&&"TVHTML5"===(null==(da=g.client)?void 0:da.clientName)){var Ea=S("INNERTUBE_CONTEXT");Ea.adSignalsInfo&&(g.adSignalsInfo.advertisingId=Ea.adSignalsInfo.advertisingId,g.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",g.adSignalsInfo.limitAdTracking=Ea.adSignalsInfo.limitAdTracking)}}catch(ea){Ms(ea)}y=g}else Ms(Error("Error: No InnerTubeContext shell provided in ytconfig.")),y={};y={context:y};if(J=this.i(a)){this.h(y,J,b);var O;
b="/youtubei/v1/"+Pu(this.j());(J=null==(O=Ur(a.commandMetadata,wk))?void 0:O.apiUrl)&&(b=J);O=b;(b=S("INNERTUBE_HOST_OVERRIDE"))&&(O=String(b)+String(pc(O)));b={};T("web_api_key_killswitch")&&(b.key=S("INNERTUBE_API_KEY"));T("json_condensed_response")&&(b.prettyPrint="false");O=cl(O,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:O,fb:ot(O),Ma:y,config:a};a.config.Ub?a.config.Ub.identity=c:a.config.Ub={identity:c};return a}Ms(new V("Error: Failed to create Request from Command.",a))};
fa.Object.defineProperties(Qu.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function Ru(){}
w(Ru,Qu);function Su(){}
w(Su,Ru);Su.prototype.A=function(){return{input:"/getDatasyncIdsEndpoint",fb:ot("/getDatasyncIdsEndpoint","GET"),Ma:{}}};
Su.prototype.j=function(){return[]};
Su.prototype.i=function(){};
Su.prototype.h=function(){};var Tu={},Uu=(Tu.GET_DATASYNC_IDS=Mu(Su),Tu);function Vu(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function Wu(){var a=Vu();a.info||(a.info={});return a.info}
function Xu(a){a=Vu(a);a.metadata||(a.metadata={});return a.metadata}
function Yu(a){a=Vu(a);a.tick||(a.tick={});return a.tick}
function Zu(a){a=Vu(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function $u(a){a=Zu(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function av(a){var b=Vu(a).nonce;b||(b=Us(),Vu(a).nonce=b);return b}
;function bv(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function cv(a){a=a||"";var b=E("ytcsi.reference");b||(bv(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=bv(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var X={},dv=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",X.app_startup="LATENCY_ACTION_APP_STARTUP",X["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",X["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",X["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",X["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
X["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",X["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",X["asset.composition_policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",X["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",X["asset.history"]="LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY",X["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",X["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",X["asset.metadata"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",X["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",X["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",X["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",X["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",X["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",X["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",X["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",
X["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",X["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",X["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",X.browse="LATENCY_ACTION_BROWSE",X.cast_splash="LATENCY_ACTION_CAST_SPLASH",X.channels="LATENCY_ACTION_CHANNELS",X.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",X["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",X["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",
X["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",X["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",X["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",X["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",X["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",X["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",X["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",X["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",
X["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",X["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",X["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",X.chips="LATENCY_ACTION_CHIPS",X.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",X["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",X["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",X["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",
X.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",X.embed="LATENCY_ACTION_EMBED",X.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.explore="LATENCY_ACTION_EXPLORE",X.favorites="LATENCY_ACTION_FAVORITES",X.home="LATENCY_ACTION_HOME",X.inboarding="LATENCY_ACTION_INBOARDING",X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",
X.mini_app="LATENCY_ACTION_MINI_APP_PLAY",X.onboarding="LATENCY_ACTION_ONBOARDING",X.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",X["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",X["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",X["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",X["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",X["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",X["owner.bulk"]="LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",X["owner.campaigns"]=
"LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",X["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",X["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",X["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",X["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",X["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",X["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",X["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",
X["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",X["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",X["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",X["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",X["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",X["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",X["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",X.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",X.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",
X.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",X["playlist.videos"]="LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",X["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",X["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",X.profile_switcher="LATENCY_ACTION_LOGIN",X.reel_watch="LATENCY_ACTION_REEL_WATCH",
X.results="LATENCY_ACTION_RESULTS",X["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",X.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.premium="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.search_overview_answer="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",X.search_ui="LATENCY_ACTION_SEARCH_UI",X.search_suggest="LATENCY_ACTION_SUGGEST",X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",
X.store="LATENCY_ACTION_STORE",X.tenx="LATENCY_ACTION_TENX",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",X["watch,watch7"]="LATENCY_ACTION_WATCH",X["watch,watch7_html5"]="LATENCY_ACTION_WATCH",X["watch,watch7ad"]="LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",
X["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",X["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",X["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",X["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",X["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",X["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",X["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",X["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",
X["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",X["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",X["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",X["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",X.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",X.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",
X.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",X);function ev(a,b){$o.call(this,1,arguments);this.timer=b}
w(ev,$o);var fv=new ap("aft-recorded",ev);var gv=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",gv);function hv(){this.h=0}
function iv(){hv.h||(hv.h=new hv);return hv.h}
hv.prototype.tick=function(a,b,c,d){jv(this,"tick_"+a+"_"+b)||dn("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
hv.prototype.info=function(a,b,c){var d=Object.keys(a).join("");jv(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,dn("latencyActionInfo",a,{cttAuthInfo:c}))};
hv.prototype.jspbInfo=function(){};
hv.prototype.span=function(a,b,c){var d=Object.keys(a).join("");jv(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,dn("latencyActionSpan",a,{cttAuthInfo:c}))};
function jv(a,b){gv[b]=gv[b]||{count:0};var c=gv[b];c.count++;c.time=W();a.h||(a.h=om(function(){var d=W(),e;for(e in gv)gv[e]&&6E4<d-gv[e].time&&delete gv[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new V("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Ns(c)),!0):!1}
;var kv=window;function lv(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function mv(){var a;if(T("csi_use_performance_navigation_timing")||T("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==Y?void 0:null==(a=Y.getEntriesByType)?void 0:null==(b=a.call(Y,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=nv(e.requestStart),e.responseEnd=nv(e.responseEnd),e.redirectStart=nv(e.redirectStart),e.redirectEnd=nv(e.redirectEnd),e.domainLookupEnd=nv(e.domainLookupEnd),e.connectStart=nv(e.connectStart),e.connectEnd=
nv(e.connectEnd),e.responseStart=nv(e.responseStart),e.secureConnectionStart=nv(e.secureConnectionStart),e.domainLookupStart=nv(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Y.timing}else a=T("csi_performance_timing_to_object")?JSON.parse(JSON.stringify(Y.timing)):Y.timing;return a}
function nv(a){return Math.round(ov()+a)}
function ov(){return(T("csi_use_time_origin")||T("csi_use_time_origin_tvhtml5"))&&Y.timeOrigin?Math.floor(Y.timeOrigin):Y.timing.navigationStart}
var Y=kv.performance||kv.mozPerformance||kv.msPerformance||kv.webkitPerformance||new lv;var pv=!1,qv=!1,rv={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Xa(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||Bd,Y);function sv(a,b){if(!T("web_csi_action_sampling_enabled")||!Vu(b).actionDisabled){var c=cv(b||"");Yt(c.info,a);a.loadType&&(c=a.loadType,Xu(b).loadType=c);Yt($u(b),a);c=av(b);b=Vu(b).cttAuthInfo;iv().info(a,c,b)}}
function tv(){var a,b,c,d;return(null!=(d=null==xr().resolve(new rr(Po))?void 0:null==(a=Qo())?void 0:null==(b=a.loggingHotConfig)?void 0:null==(c=b.csiConfig)?void 0:c.debugTicks)?d:[]).map(function(e){return Object.values(e)[0]})}
function Z(a,b,c){if(!T("web_csi_action_sampling_enabled")||!Vu(c).actionDisabled){var d=av(c),e;if(e=T("web_csi_debug_sample_enabled")&&d){(null==xr().resolve(new rr(Po))?0:Qo())&&!qv&&(qv=!0,Z("gcfl",W(),c));var f,g,h;e=(null==xr().resolve(new rr(Po))?void 0:null==(f=Qo())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.csiConfig)?void 0:h.debugSampleWeight)||0;if(f=0!==e)b:{f=tv();if(0<f.length)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=31*f+d.charCodeAt(g),
g<d.length-1&&(f%=Math.pow(2,47));e=0!==f%1E5%e;Vu(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,sv(f,c));Vu(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){b||"_"===a[0]||(e=a,Y.mark&&(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),Y.mark(e)));e=cv(c||"");e.tick[a]=b||W();if(e.callback&&e.callback[a])for(e=v(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=Zu(c);e.gelTicks&&(e.gelTicks[a]=!0);f=Yu(c);e=b||W();T("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;
f=Vu(c).cttAuthInfo;"_start"===a?(a=iv(),jv(a,"baseline_"+d)||dn("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):iv().tick(a,d,b,f);uv(c);return e}}}
function vv(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Oq+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function wv(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;"number"===typeof h&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=v(Object.entries(S("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=v(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function xv(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);$b(window)&&a.setAttribute("nonce",$b(window));return c?(a=Y.getEntriesByName(c))&&a[0]&&(a=a[0],c=ov(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function yv(){var a=window.location.protocol,b=Y.getEntriesByType("resource");b=Eb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=Gb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",nv(b.startTime)),Z("wffe",nv(b.responseEnd)))}
function zv(a){var b=Av("aft",a);if(b)return b;b=S((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=Av(b[d],a);if(e)return e}return NaN}
function Av(a,b){if(a=Yu(b)[a])return"number"===typeof a?a:a[a.length-1]}
function uv(a){var b=Av("_start",a),c=zv(a);b&&c&&!pv&&(fp(fv,new ev(Math.round(c-b),a)),pv=!0)}
function Bv(){if(Y.getEntriesByType){var a=Y.getEntriesByType("paint");if(a=Hb(a,function(b){return"first-paint"===b.name}))return nv(a.startTime)}a=Y.timing;
return a.Ee?Math.max(0,a.Ee):0}
;function Cv(a,b){Sk(function(){cv("").info.actionType=a;b&&Ok("TIMING_AFT_KEYS",b);Ok("TIMING_ACTION",a);var c=wv();0<Object.keys(c).length&&sv(c);c={isNavigation:!0,actionType:dv[S("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};var d=S("PREVIOUS_ACTION");d&&(c.previousAction=dv[d]||"LATENCY_ACTION_UNKNOWN");if(d=S("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=S("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=dt())&&"UNDEFINED_CSN"!==d&&(c.clientScreenNonce=d);d=vv();if(1===d||-1===d)c.isVisible=!0;Xu();Wu();
c.loadType="cold";d=Wu();var e=mv(),f=ov(),g=S("CSI_START_TIMESTAMP_MILLIS",0);0<g&&!T("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Z("srt",e.responseStart),1!==d.prerender&&Z("_start",f,void 0));d=Bv();0<d&&Z("fpt",d);d=mv();d.isPerformanceNavigationTiming&&sv({performanceNavigationTiming:!0},void 0);Z("nreqs",d.requestStart,void 0);Z("nress",d.responseStart,void 0);Z("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(Z("nrs",d.redirectStart,void 0),Z("nre",d.redirectEnd,
void 0));0<d.domainLookupEnd-d.domainLookupStart&&(Z("ndnss",d.domainLookupStart,void 0),Z("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-d.connectStart&&(Z("ntcps",d.connectStart,void 0),Z("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=ov()&&0<d.connectEnd-d.secureConnectionStart&&(Z("nstcps",d.secureConnectionStart,void 0),Z("ntcpe",d.connectEnd,void 0));Y&&"getEntriesByType"in Y&&yv();d=[];if(document.querySelector&&Y&&Y.getEntriesByName)for(var h in rv)rv.hasOwnProperty(h)&&(e=rv[h],
xv(h,e)&&d.push(e));if(0<d.length)for(c.resourceInfo=[],h=v(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});sv(c);c=Zu();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=$u();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if("cold"===Xu().loadType&&("cold"===c.loadType||"cold"===d)){d=Yu();e=Zu();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if("number"===typeof d[k])Z(k,Av(k));else if(T("log_repeated_ytcsi_ticks"))for(f=
v(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Z(k.slice(1),g);k={};d=!1;h=v(h);for(e=h.next();!e.done;e=h.next())d=e.value,Yt(c,d),Yt(k,d),d=!0;d&&sv(k)}D("ytglobal.timingready_",!0);k=S("TIMING_ACTION");E("ytglobal.timingready_")&&k&&Dv()&&zv()&&uv()})()}
function Ev(a,b,c){Sk(sv)(a,b,void 0===c?!1:c)}
function Fv(a,b,c){return Sk(Z)(a,b,c)}
function Dv(){return Sk(function(){return"_start"in Yu()})()}
function Gv(){Sk(function(){var a=av();requestAnimationFrame(function(){setTimeout(function(){a===av()&&Fv("ol",void 0,void 0)},0)})})()}
var Hv=window;Hv.ytcsi&&(Hv.ytcsi.infoGel=Ev,Hv.ytcsi.tick=Fv);var Iv="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD".split(" "),Jv=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function Kv(a,b,c,d){this.A=a;this.ba=b;this.l=c;this.j=d;this.i=void 0;this.h=new Map;a.Nb||(a.Nb={});a.Nb=Object.assign({},Uu,a.Nb)}
function Lv(a,b,c,d){if(void 0!==Kv.h){if(d=Kv.h,a=[a!==d.A,b!==d.ba,c!==d.l,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new V("InnerTubeTransportService is already initialized",a);
}else Kv.h=new Kv(a,b,c,d)}
function Mv(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?Ul:c;var d=Nv(a,b);return d?new Ud(function(e,f){var g,h,k,l,n;return A(function(p){switch(p.h){case 1:return p.yield(d,2);case 2:g=p.i;h=g.A(b,void 0,c);if(!h){f(new V("Error: Failed to build request for command.",b));p.B(0);break}xu(h.input);l="cors"===(null==(k=h.fb)?void 0:k.mode)?"cors":void 0;if(a.l.hf){var r=h.config,t;r=null==r?void 0:null==(t=r.Ub)?void 0:t.sessionIndex;t=Tl(0,{sessionIndex:r});n=Object.assign({},
Ju(l),t);p.B(4);break}return p.yield(Ov(h.config,l),5);case 5:n=p.i;case 4:e(Pv(a,h,n)),p.h=0}})}):Zd(new V("Error: No request builder found for command.",b))}
function Qv(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.sequenceMetaData)?0:d.skipProcessing)&&a.j){d=v(Iv);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function Pv(a,b,c){var d=void 0===d?function(){}:d;
var e,f,g,h,k,l,n,p,r,t,x,z,y,J,G,R,N,da,Ea,O,ea,ka,oa,Ja,Ng,Og,nr,or,pr;return A(function(ha){switch(ha.h){case 1:ha.B(2);break;case 3:if((e=ha.i)&&!e.isExpired())return ha.return(Promise.resolve(e.h()));case 2:if(!(null==(f=b)?0:null==(g=f.Ma)?0:g.context)){ha.B(4);break}h=b.Ma.context;ha.B(5);break;case 5:k=v([]),l=k.next();case 7:if(l.done){ha.B(4);break}n=l.value;return ha.yield(n.ng(h),8);case 8:l=k.next();ha.B(7);break;case 4:if(null==(p=a.i)||!p.sg(b.input,b.Ma)){ha.B(11);break}return ha.yield(a.i.jg(b.input,
b.Ma),12);case 12:return r=ha.i,T("kevlar_process_local_innertube_responses_killswitch")||Qv(a,r,b),ha.return(r);case 11:return(z=null==(x=b.config)?void 0:x.qg)&&a.h.has(z)?t=a.h.get(z):(y=JSON.stringify(b.Ma),R=null!=(G=null==(J=b.fb)?void 0:J.headers)?G:{},b.fb=Object.assign({},b.fb,{headers:Object.assign({},R,c)}),N=Object.assign({},b.fb),"POST"===b.fb.method&&(N=Object.assign({},N,{body:y})),(null==(da=b.config)?0:da.Oe)&&Fv(b.config.Oe),Ea=function(){return a.ba.fetch(b.input,N,b.config)},t=
Ea(),z&&a.h.set(z,t)),ha.yield(t,13);
case 13:if((O=ha.i)&&"error"in O&&(null==(ea=O)?0:null==(ka=ea.error)?0:ka.details))for(oa=O.error.details,Ja=v(oa),Ng=Ja.next();!Ng.done;Ng=Ja.next())Og=Ng.value,(nr=Og["@type"])&&-1<Jv.indexOf(nr)&&(delete Og["@type"],O=Og);z&&a.h.has(z)&&a.h.delete(z);(null==(or=b.config)?0:or.Pe)&&Fv(b.config.Pe);if(O||null==(pr=a.i)||!pr.cg(b.input,b.Ma)){ha.B(14);break}return ha.yield(a.i.ig(b.input,b.Ma),15);case 15:O=ha.i;case 14:return Qv(a,O,b),d(),ha.return(O||void 0)}})}
function Nv(a,b){a:{a=a.A;var c,d=null==(c=Ur(b,xk))?void 0:c.signal;if(d&&a.Nb&&(c=a.Nb[d])){var e=c();break a}var f;if((c=null==(f=Ur(b,vk))?void 0:f.request)&&a.Xd&&(f=a.Xd[c])){e=f();break a}for(e in b)if(a.cd[e]&&(b=a.cd[e])){e=b();break a}e=void 0}if(void 0!==e)return Promise.resolve(e)}
function Ov(a,b){var c,d,e,f;return A(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Ub)?void 0:d.sessionIndex;var h=g.yield;var k=Tl(0,{sessionIndex:e});if(!(k instanceof Ud)){var l=new Ud(Bd);Vd(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},Ju(b),f)))})}
;var Rv=new qr("INNERTUBE_TRANSPORT_TOKEN");function Sv(){}
w(Sv,Ru);Sv.prototype.j=function(){return Kt};
Sv.prototype.i=function(a){return Ur(a,Fk)||void 0};
Sv.prototype.h=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
fa.Object.defineProperties(Sv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Tv(){}
w(Tv,Ru);Tv.prototype.j=function(){return Lt};
Tv.prototype.i=function(a){return Ur(a,Ek)||void 0};
Tv.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
fa.Object.defineProperties(Tv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Uv(){}
w(Uv,Ru);Uv.prototype.j=function(){return Ht};
Uv.prototype.i=function(a){return Ur(a,zk)||void 0};
Uv.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
fa.Object.defineProperties(Uv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Vv(){}
w(Vv,Ru);Vv.prototype.j=function(){return It};
Vv.prototype.i=function(a){return Ur(a,Dk)||void 0};
Vv.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Wv(){}
w(Wv,Ru);Wv.prototype.j=function(){return Jt};
Wv.prototype.i=function(a){return Ur(a,Ck)||void 0};
Wv.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Xv(){}
w(Xv,Ru);Xv.prototype.j=function(){return Gt};
Xv.prototype.i=function(a){return Ur(a,Bk)};
Xv.prototype.h=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};function Yv(a,b){var c=B.apply(2,arguments);a=void 0===a?0:a;V.call(this,b,c);this.errorType=a;Object.setPrototypeOf(this,this.constructor.prototype)}
w(Yv,V);var Zv=new qr("NETWORK_SLI_TOKEN");function $v(a){this.h=a}
$v.prototype.fetch=function(a,b,c){var d=this,e;return A(function(f){e=aw(d,a,b);return f.return(fetch(e).then(function(g){return d.handleResponse(g,c)}).catch(function(g){Ns(g);
if((null==c?0:c.de)&&g instanceof Yv&&1===g.errorType)return Promise.reject(g)}))})};
function aw(a,b,c){if(a.h){var d=mc(nc(5,xc(b,"key")))||"/UNKNOWN_PATH";a.h.start(d)}a=c;T("wug_networking_gzip_request")&&(a=Hp(c));return new window.Request(b,a)}
$v.prototype.handleResponse=function(a,b){var c=a.text().then(function(d){if((null==b?0:b.xe)&&a.ok)return Ig(b.xe,d);d=d.replace(")]}'","");if((null==b?0:b.de)&&d)try{var e=JSON.parse(d)}catch(g){throw new Yv(1,"JSON parsing failed after fetch");}var f;return null!=(f=e)?f:JSON.parse(d)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.fg(),c=c.then(function(d){Ns(new V("Error: API fetch failed",a.status,a.url,d));return Object.assign({},d,{errorMetadata:{status:a.status}})}));
return c};
$v[mr]=[new rr(Zv)];var bw=new qr("NETWORK_MANAGER_TOKEN");var cw;function dw(){var a,b,c;return A(function(d){if(1==d.h)return a=xr().resolve(Rv),a?d.yield(Mv(a),2):(Ns(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return Ns(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.dg;return d.return(c)}Ns(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;var ew=C.caches,fw;function gw(a){var b=a.indexOf(":");return-1===b?{td:a}:{td:a.substring(0,b),datasyncId:a.substring(b+1)}}
function hw(){return A(function(a){if(void 0!==fw)return a.return(fw);fw=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return Aa(d,2),d.yield(ew.open("test-only"),4);case 4:return d.yield(ew.delete("test-only"),5);case 5:d.h=3;d.l=0;break;case 2:if(c=Ba(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(fw)})}
function iw(a){var b,c,d,e,f,g,h;A(function(k){if(1==k.h)return k.yield(hw(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return k.yield(ew.keys(),3)}c=k.i;d=v(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=gw(f),h=g.datasyncId,!h||a.includes(h)||b.push(ew.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(n){return n})}))})}
function jw(){var a,b,c,d,e,f,g;return A(function(h){if(1==h.h)return h.yield(hw(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=mm("cache contains other");return h.yield(ew.keys(),3)}b=h.i;c=v(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=gw(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function kw(){dw().then(function(a){a&&(uo(a),iw(a),uu(a))})}
function lw(){var a=new zq;Bi.pa(function(){var b,c,d,e;return A(function(f){switch(f.h){case 1:if(T("ytidb_clear_optimizations_killswitch")){f.B(2);break}b=mm("clear");if(b.startsWith("V")&&b.endsWith("||")){var g=[b];uo(g);iw(g);uu(g);return f.return()}c=vu();return f.yield(jw(),3);case 3:return d=f.i,f.yield(vo(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.va()?kw():a.h.add("publicytnetworkstatus-online",kw,!0,void 0,void 0),f.h=0}})})}
;function mw(){this.state=1;this.h=null}
m=mw.prototype;m.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterUrl)?d:null;if(a.interpreterSafeScript){var f=a.interpreterSafeScript;f?((f=f.privateDoNotAccessOrElseSafeScriptWrappedValue)?(d=fb(),f=new ac(d?d.createScript(f):f)):f=null,d=f):d=null}else d=null!=(f=a.interpreterScript)?f:null;a.interpreterSafeUrl&&(e=pk(a.interpreterSafeUrl).toString());nw(this,d,e,a.program,b,c)}else Ns(Error("Cannot initialize botguard without program"))};
function nw(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,Ot(c,function(){window[g]?ow(a,d,g,e):(a.state=3,Qt(c),Ns(new V("Unable to load Botguard","from "+c)))},f)):b?(f=Gd("SCRIPT"),b instanceof ac?cc(f,b):f.textContent=b,f.nonce=$b(window),document.head.appendChild(f),document.head.removeChild(f),window[g]?ow(a,d,g,e):(a.state=4,Ns(new V("Unable to load Botguard from JS")))):Ns(new V("Unable to load VM; no url or JS provided"))}
m.isLoading=function(){return 2===this.state};
function ow(a,b,c,d){a.state=5;try{var e=new ni({program:b,me:c,Me:T("att_web_record_metrics"),De:"aGIf"});e.df.then(function(){a.state=6;d&&d(b)});
a.Pc(e)}catch(f){a.state=7,f instanceof Error&&Ns(f)}}
m.invoke=function(a){a=void 0===a?{}:a;return this.Tc()?this.Kd({dd:a}):null};
m.dispose=function(){this.Pc(null);this.state=8};
m.Tc=function(){return!!this.h};
m.Kd=function(a){return this.h.Ed(a)};
m.Pc=function(a){Cc(this.h);this.h=a};var pw=[],qw=!1;function rw(){if(!T("disable_biscotti_fetch_for_ad_blocker_detection")&&!T("disable_biscotti_fetch_entirely_for_all_web_clients")&&pt()){var a=S("PLAYER_VARS",{});if("1"!=Pb(a)&&!qt(a)){var b=function(){qw=!0;"google_ad_status"in window?Ok("DCLKSTAT",1):Ok("DCLKSTAT",2)};
try{Ot("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}pw.push(Bi.pa(function(){if(!(qw||"google_ad_status"in window)){try{St("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}qw=!0;Ok("DCLKSTAT",3)}},5E3))}}}
function sw(){var a=Number(S("DCLKSTAT",0));return isNaN(a)?0:a}
;function tw(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function uw(){mw.apply(this,arguments)}
w(uw,mw);uw.prototype.Pc=function(a){var b;null==(b=tw())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.Ed.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
uw.prototype.Tc=function(){return!!tw()};
uw.prototype.Kd=function(a){return tw().bgvmc(a)};function vw(a){Gr.call(this,void 0===a?"document_active":a);var b=this;this.l=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.F},{from:"document_active",to:"document_disposed",action:this.A},{from:"document_disposed_preventable",to:"document_disposed",action:this.A},{from:"document_disposed_preventable",to:"flush_logs",action:this.m},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.m},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
w(vw,Gr);vw.prototype.F=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
vw.prototype.A=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
vw.prototype.m=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
vw.prototype.i=function(){this.h=new Map};function ww(a){Gr.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.m},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.A},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.m},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.m},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.A},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.A},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
T("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
w(ww,Gr);ww.prototype.i=function(a,b){a(null==b?void 0:b.event);T("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
ww.prototype.h=function(a,b){a(null==b?void 0:b.event);T("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
ww.prototype.A=function(a,b){a(null==b?void 0:b.event)};
ww.prototype.m=function(a,b){a(null==b?void 0:b.event)};function xw(){this.l=new vw;this.A=new ww}
xw.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.l.install(c)});
a.forEach(function(c){b.A.install(c)})};function yw(){this.l=[];this.i=new Map;this.h=new Map;this.j=new Set}
yw.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=dt(void 0===c?0:c)){a=this.client;d=new Xs({trackingParams:d});var e=void 0;if(T("no_client_ve_attach_unless_shown")){var f=pu(d,c);lu.set(f,!0);qu(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=ou({cttAuthInfo:ft(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);"UNDEFINED_CSN"===c?ru("visualElementGestured",f,d):a?Fs("visualElementGestured",d,a,f):dn("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
yw.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new Xs({trackingParams:a}),b,void 0===c?0:c)};
yw.prototype.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;if(0===c&&this.j.has(c))this.l.push([a,b]);else{var d=c;d=void 0===d?0:d;c=dt(d);a||(a=(a=at(void 0===d?0:d))?new Xs({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=ou({cttAuthInfo:ft(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},"UNDEFINED_CSN"===c?ru("visualElementStateChanged",d,b):a?Fs("visualElementStateChanged",b,a,d):dn("visualElementStateChanged",b,d))}};
function zw(a,b){if(void 0===b)for(var c=ct(),d=0;d<c.length;d++)void 0!==c[d]&&zw(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&nu(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function Aw(){xw.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));T("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a))}
w(Aw,xw);Aw.prototype.j=function(){dn("finalPayload",{csn:dt()})};
Aw.prototype.h=function(){Rs(Ss)};
Aw.prototype.i=function(){var a=zw;yw.h||(yw.h=new yw);a(yw.h)};function Bw(){}
function Cw(){var a=E("ytglobal.storage_");a||(a=new Bw,D("ytglobal.storage_",a));return a}
Bw.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(Dw()):d.return()})};
function Dw(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",Bw);function bn(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=U("ytidb_transaction_ended_event_rate_limit_session",.2)}
bn.prototype.Ib=function(a){this.handleError(a)};
bn.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":T("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":T("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Ew(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=U("ytidb_transaction_ended_event_rate_limit_transaction",.1)&&this.h("idbTransactionEnded",
b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Ew(a,b){Cw().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:Fw(null==c?void 0:c.usage),deviceStorageQuotaMbytes:Fw(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Fw(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function Gw(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new Et(!!S("WIDGET_ID_ENFORCE")),b=this.Le.bind(this);a.l=b;a.m=null;this.h.channel="widget";if(a=S("WIDGET_ID"))this.h.sessionId=a}
m=Gw.prototype;m.Le=function(a,b,c){"addEventListener"===a&&b?this.Cc(b[0],c):this.Wc(a,b,c)};
m.Wc=function(){};
m.xc=function(a){var b=this;return function(c){return b.sendMessage(a,c)}};
m.Cc=function(a,b){this.j[a]||"onReady"===a||(this.addEventListener(a,this.xc(a,b)),this.j[a]=!0)};
m.addEventListener=function(){};
m.he=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Ac());this.sendMessage("onReady");Db(this.i,this.Bd,this);this.i=[]};
m.Ac=function(){return null};
function Hw(a,b){a.sendMessage("infoDelivery",b)}
m.Bd=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.Bd({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};var Iw={},Jw=(Iw["api.invalidparam"]=2,Iw.auth=150,Iw["drm.auth"]=150,Iw["heartbeat.net"]=150,Iw["heartbeat.servererror"]=150,Iw["heartbeat.stop"]=150,Iw["html5.unsupportedads"]=5,Iw["fmt.noneavailable"]=5,Iw["fmt.decode"]=5,Iw["fmt.unplayable"]=5,Iw["html5.missingapi"]=5,Iw["html5.unsupportedlive"]=5,Iw["drm.unavailable"]=5,Iw["mrm.blocked"]=151,Iw);var Kw=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function Lw(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Mw(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=v(Kw);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Nw(a,b,c,d){if(Ra(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Ow(a){Gw.call(this);this.listeners=[];this.l=!1;this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.Ye.bind(this));this.addEventListener("onVolumeChange",this.Ze.bind(this));this.addEventListener("onApiChange",this.Te.bind(this));this.addEventListener("onPlaybackQualityChange",this.Ve.bind(this));this.addEventListener("onPlaybackRateChange",this.We.bind(this));this.addEventListener("onStateChange",this.Xe.bind(this));this.addEventListener("onWebglSettingsChanged",
this.af.bind(this))}
w(Ow,Gw);m=Ow.prototype;
m.Wc=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Lw(a)){var d=b;if(Ra(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Mw(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Mw(e);break;case "loadPlaylist":case "cuePlaylist":e=Nw(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Lw(a)&&Hw(this,this.Ac())}};
m.Cc=function(a,b){"onReady"===a?this.api.logApiCall(a+" invocation",b):"onError"===a&&this.l&&(this.api.logApiCall(a+" invocation",b,this.errorCode),this.errorCode=void 0);this.api.logApiCall(a+" registration",b);Gw.prototype.Cc.call(this,a,b)};
m.xc=function(a,b){var c=this,d=Gw.prototype.xc.call(this,a,b);return function(e){"onError"===a?c.api.logApiCall(a+" invocation",b,e):c.api.logApiCall(a+" invocation",b);d(e)}};
m.onReady=function(){var a=this.h,b=this.he.bind(this);a.h=b;a=this.api.getVideoData();if(!a.isPlayable){this.l=!0;a=a.errorCode;var c=void 0===c?5:c;this.errorCode=a?Jw[a]||c:c;this.sendMessage("onError",this.errorCode.toString())}};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.Ac=function(){if(!this.api)return null;var a=this.api.getApiInterface();Ib(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.Xe=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Hw(this,a)};
m.Ve=function(a){Hw(this,{playbackQuality:a})};
m.We=function(a){Hw(this,{playbackRate:a})};
m.Te=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Ze=function(){Hw(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.Ye=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Hw(this,a)};
m.af=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Hw(this,a)};
m.dispose=function(){Gw.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Pw(a){F.call(this);this.h={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.wd,this)}
w(Pw,F);m=Pw.prototype;m.start=function(){this.started||this.T||(this.started=!0,this.connection.gb("RECEIVING"))};
m.gb=function(a,b){this.started&&!this.T&&this.connection.gb(a,b)};
m.wd=function(a,b,c){if(this.started&&!this.T){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Qw(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Rw(a,c))&&this.gb(a,c))}}};
m.addListener=function(a){if(!(a in this.h)){var b=this.Ue.bind(this,a);this.h[a]=b;this.addEventListener(a,b)}};
m.Ue=function(a,b){this.started&&!this.T&&this.connection.gb(a,this.zc(a,b))};
m.zc=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.h&&(this.removeEventListener(a,this.h[a]),delete this.h[a])};
m.R=function(){this.connection.unsubscribe("command",this.wd,this);this.connection=null;for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);F.prototype.R.call(this)};function Sw(a,b){Pw.call(this,b);this.api=a;this.start()}
w(Sw,Pw);Sw.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Sw.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Qw(a,b){switch(a){case "loadVideoById":return a=Mw(b),[a];case "cueVideoById":return a=Mw(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Nw(b),[a];case "cuePlaylist":return a=Nw(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Rw(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Sw.prototype.zc=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Pw.prototype.zc.call(this,a,b)};
Sw.prototype.R=function(){Pw.prototype.R.call(this);delete this.api};function Tw(a,b,c){cu.call(this);this.j=a;this.i=b;this.id=c}
w(Tw,cu);Tw.prototype.gb=function(a,b){this.T||this.j.gb(this.i,this.id,a,b)};
Tw.prototype.R=function(){this.i=this.j=null;cu.prototype.R.call(this)};function Uw(a,b,c){F.call(this);this.h=a;this.origin=c;this.i=Uq(window,"message",this.j.bind(this));this.connection=new Tw(this,a,b);Ec(this,this.connection)}
w(Uw,F);Uw.prototype.gb=function(a,b,c,d){this.T||a!==this.h||(a={id:b,command:c},d&&(a.data=d),this.h.postMessage(JSON.stringify(a),this.origin))};
Uw.prototype.j=function(a){if(!this.T&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.T||c.l("command",b.command,b.data,a.origin)}}}};
Uw.prototype.R=function(){Wq(this.i);this.h=null;F.prototype.R.call(this)};var Vw=new uw;function Ww(){return Vw.Tc()}
function Xw(a){a=void 0===a?{}:a;return Vw.invoke(a)}
;function Yw(a,b,c,d,e){F.call(this);var f=this;this.v=b;this.webPlayerContextConfig=d;this.qc=e;this.Wa=!1;this.api={};this.ha=this.m=null;this.U=new L;this.h={};this.da=this.xa=this.elementId=this.yb=this.config=null;this.Z=!1;this.j=this.F=null;this.Fa={};this.sc=["onReady"];this.lastError=null;this.Qb=NaN;this.K={};this.fa=0;this.i=this.l=a;Ec(this,this.U);Zw(this);c?this.fa=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&($w(this),ax(this))}
w(Yw,F);m=Yw.prototype;m.getId=function(){return this.v};
m.loadNewVideoConfig=function(a){if(!this.T){this.fa&&(clearTimeout(this.fa),this.fa=0);var b=a||{};b instanceof Ft||(b=new Ft(b));this.config=b;this.setConfig(a);ax(this);this.isReady()&&bx(this)}};
function $w(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.v,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.v:a.config.attrs.id=a.v);var c;(null==(c=a.i)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){this.yb=a;this.config=cx(a);$w(this);if(!this.xa){var b;this.xa=dx(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=vi(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=vi(Number(a)||a))};
function bx(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function ex(a){var b=!0,c=fx(a);c&&a.config&&(b=c.dataset.version===gx(a));return b&&!!E("yt.player.Application.create")}
function ax(a){if(!a.T&&!a.Z){var b=ex(a);if(b&&"html5"===(fx(a)?"html5":null))a.da="html5",a.isReady()||hx(a);else if(ix(a),a.da="html5",b&&a.j&&a.l)a.l.appendChild(a.j),hx(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.F=function(){c=!0;var d=jx(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?cx(a.config):void 0;d&&d(a.l,e,a.webPlayerContextConfig,a.qc);hx(a)};
a.Z=!0;b?a.F():(Ot(gx(a),a.F),(b=kx(a))&&Vt(b||""),lx(a)&&!c&&D("yt.player.Application.create",null))}}}
function fx(a){var b=Fd(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function hx(a){if(!a.T){var b=fx(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.Z=!1;if(!jx(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}mx(a)}else a.Qb=setTimeout(function(){hx(a)},50)}}
function mx(a){Zw(a);a.Wa=!0;var b=fx(a);if(b){a.m=nx(a,b,"addEventListener");a.ha=nx(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=nx(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.m&&a.m(g,a.h[g]);bx(a);a.xa&&a.xa(a.api);a.U.Va("onReady",a.api)}
function nx(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if("sendAbandonmentPing"!==c)throw f.params=c,a.lastError=f,e=new V("PlayerProxy error in method call",{error:f,method:c,playerId:a.v}),e.level="WARNING",e;}}}
function Zw(a){a.Wa=!1;if(a.ha)for(var b in a.h)a.h.hasOwnProperty(b)&&a.ha(b,a.h[b]);for(var c in a.K)a.K.hasOwnProperty(c)&&clearTimeout(Number(c));a.K={};a.m=null;a.ha=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.yb};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.Wa};
m.addEventListener=function(a,b){var c=this,d=dx(this,b);d&&(0<=Cb(this.sc,a)||this.h[a]||(b=ox(this,a),this.m&&this.m(a,b)),this.U.subscribe(a,d),"onReady"===a&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.T||(b=dx(this,b))&&this.U.unsubscribe(a,b)};
function dx(a,b){var c=b;if("string"===typeof b){if(a.Fa[b])return a.Fa[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){throw d=new V("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.Fa[b]=c}return c?c:null}
function ox(a,b){function c(d){var e=setTimeout(function(){if(!a.T){try{a.U.Va(b,null!=d?d:void 0)}catch(h){var f=new V("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.v,data:d,originalStack:h.stack});f.level="WARNING";throw f;}f=a.K;var g=String(e);g in f&&delete f[g]}},0);
Ob(a.K,String(e))}
return a.h[b]=c}
m.getPlayerType=function(){return this.da||(fx(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function ix(a){a.cancel();Zw(a);a.da=null;a.config&&(a.config.loaded=!1);var b=fx(a);b&&(ex(a)||!lx(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.l)for(a=a.l;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.F&&St(gx(this),this.F);clearTimeout(this.Qb);this.Z=!1};
m.R=function(){ix(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new V("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.Fa=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.yb=this.config=this.api=null;delete this.l;delete this.i;F.prototype.R.call(this)};
function lx(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function gx(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function kx(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function jx(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function cx(a){for(var b={},c=v(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?Rb(e):e}return b}
;var px={},qx="player_uid_"+(1E9*Math.random()>>>0);function rx(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?Fd(c):c;var e=qx+"_"+Sa(c),f=px[e];if(f&&d)return sx(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Yw(c,e,a,b,void 0);px[e]=f;f.addOnDisposeCallback(function(){delete px[f.getId()]});
return f.api}
function sx(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var tx=null,ux=null,vx=null;
function wx(){Gv();var a=bm(),b=em(119),c=1<window.devicePixelRatio;if(document.body&&Ji(document.body,"exp-invert-logo"))if(c&&!Ji(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Ji(d,"inverted-hdpi")){var e=Hi(d);Ii(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Ji(document.body,"inverted-hdpi")&&Ki();if(b!=c){b="f"+(Math.floor(119/31)+1);d=fm(b)||0;d=c?d|67108864:d&-67108865;0===d?delete Zl[b]:(c=d.toString(16),Zl[b]=c.toString());
c=!0;T("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in Zl)Zl.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(Zl[f])));var f=d.join("&");Vl(b,f,63072E3,a.i,c)}}
function xx(){yx()}
function zx(){Fv("ep_init_pr");yx()}
function yx(){var a=tx.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Ax(){tx&&tx.sendAbandonmentPing&&tx.sendAbandonmentPing();S("PL_ATT")&&Vw.dispose();for(var a=Bi,b=0,c=pw.length;b<c;b++)a.qa(pw[b]);pw.length=0;Qt("//static.doubleclick.net/instream/ad_status.js");qw=!1;Ok("DCLKSTAT",0);Dc(vx,ux);tx&&(tx.removeEventListener("onVideoDataChange",xx),tx.destroy())}
;D("yt.setConfig",Ok);D("yt.config.set",Ok);D("yt.setMsg",Nt);D("yt.msgs.set",Nt);D("yt.logging.errors.log",Ms);
D("writeEmbed",function(){var a=S("PLAYER_CONFIG");if(!a){var b=S("PLAYER_VARS");b&&(a={args:b})}zu(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=S("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);Cv("embed",["ol"]);c=S("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=bl(window.location.href);
d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}var e;(null==(e=a.args)?0:e.autoplay)&&Cv("watch",["pbs","pbu","pbp"]);tx=rx(a,c);tx.addEventListener("onVideoDataChange",xx);tx.addEventListener("onReady",zx);a=S("POST_MESSAGE_ID","player");S("ENABLE_JS_API")?vx=new Ow(tx):S("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(ux=new Uw(window.parent,a,b),vx=new Sw(tx,ux.connection));rw();T("ytidb_create_logger_embed_killswitch")||an();a={};Aw.h||(Aw.h=new Aw);
Aw.h.install((a.flush_logs={callback:function(){ss()}},a));
Lq();T("ytidb_clear_embedded_player")&&Bi.pa(function(){var f,g;if(!cw){var h=xr();tr(h,{mc:bw,Hd:$v});var k={cd:{feedbackEndpoint:Mu(Uv),modifyChannelNotificationPreferenceEndpoint:Mu(Vv),playlistEditEndpoint:Mu(Wv),subscribeEndpoint:Mu(Sv),unsubscribeEndpoint:Mu(Tv),webPlayerShareEntityServiceEndpoint:Mu(Xv)}},l=Iu(),n={};l&&(n.client_location=l);void 0===f&&(f=Sl());void 0===g&&(g=h.resolve(bw));Lv(k,g,f,n);tr(h,{mc:Rv,Id:Kv.h});cw=h.resolve(Rv)}lw()})});
D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||Ww);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||Xw);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||sw);D("yt.player.exports.navigate",E("yt.player.exports.navigate")||yu);D("yt.util.activity.init",E("yt.util.activity.init")||Zq);D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||br);
D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||$q);window.addEventListener("load",Sk(function(){wx()}));
window.addEventListener("pageshow",Sk(function(a){a.persisted||wx()}));
window.addEventListener("pagehide",Sk(function(a){T("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Ax():a.persisted||Ax()}));
window.onerror=function(a,b,c,d,e){b=void 0===b?"Unknown file":b;c=void 0===c?0:c;var f=!1,g=Pk("log_window_onerror_fraction");if(g&&Math.random()<g)f=!0;else{g=document.getElementsByTagName("script");for(var h=0,k=g.length;h<k;h++)if(0<g[h].src.indexOf("/debug-")){f=!0;break}}f&&(f=!1,e?f=!0:("string"===typeof a?g=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,g=a.message,b=a.filename,c=a.lineno,d=a.colno):(g="Unknown error",b="Unknown file",c=0),e=new V(g),e.name="UnhandledWindowError",e.message=g,
e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?Ms(e):Ns(e))};
je=Os;window.addEventListener("unhandledrejection",function(a){Os(a.reason)});
Db(S("ERRORS")||[],function(a){Ms.apply(null,a)});
Ok("ERRORS",[]);}).call(this);
