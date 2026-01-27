(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var ky={exports:{}},ju={},Ry={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fa=Symbol.for("react.element"),f1=Symbol.for("react.portal"),p1=Symbol.for("react.fragment"),m1=Symbol.for("react.strict_mode"),g1=Symbol.for("react.profiler"),y1=Symbol.for("react.provider"),_1=Symbol.for("react.context"),v1=Symbol.for("react.forward_ref"),w1=Symbol.for("react.suspense"),E1=Symbol.for("react.memo"),T1=Symbol.for("react.lazy"),Up=Symbol.iterator;function I1(t){return t===null||typeof t!="object"?null:(t=Up&&t[Up]||t["@@iterator"],typeof t=="function"?t:null)}var Py={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ny=Object.assign,by={};function bi(t,e,n){this.props=t,this.context=e,this.refs=by,this.updater=n||Py}bi.prototype.isReactComponent={};bi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};bi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Dy(){}Dy.prototype=bi.prototype;function Dd(t,e,n){this.props=t,this.context=e,this.refs=by,this.updater=n||Py}var Vd=Dd.prototype=new Dy;Vd.constructor=Dd;Ny(Vd,bi.prototype);Vd.isPureReactComponent=!0;var zp=Array.isArray,Vy=Object.prototype.hasOwnProperty,Md={current:null},My={key:!0,ref:!0,__self:!0,__source:!0};function Oy(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Vy.call(e,r)&&!My.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:fa,type:t,key:i,ref:o,props:s,_owner:Md.current}}function S1(t,e){return{$$typeof:fa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Od(t){return typeof t=="object"&&t!==null&&t.$$typeof===fa}function x1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Bp=/\/+/g;function kc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?x1(""+t.key):e.toString(36)}function Al(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case fa:case f1:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+kc(o,0):r,zp(s)?(n="",t!=null&&(n=t.replace(Bp,"$&/")+"/"),Al(s,e,n,"",function(h){return h})):s!=null&&(Od(s)&&(s=S1(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Bp,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",zp(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+kc(i,l);o+=Al(i,e,n,u,s)}else if(u=I1(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+kc(i,l++),o+=Al(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function nl(t,e,n){if(t==null)return t;var r=[],s=0;return Al(t,r,"","",function(i){return e.call(n,i,s++)}),r}function A1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var At={current:null},Cl={transition:null},C1={ReactCurrentDispatcher:At,ReactCurrentBatchConfig:Cl,ReactCurrentOwner:Md};function Ly(){throw Error("act(...) is not supported in production builds of React.")}oe.Children={map:nl,forEach:function(t,e,n){nl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return nl(t,function(){e++}),e},toArray:function(t){return nl(t,function(e){return e})||[]},only:function(t){if(!Od(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};oe.Component=bi;oe.Fragment=p1;oe.Profiler=g1;oe.PureComponent=Dd;oe.StrictMode=m1;oe.Suspense=w1;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C1;oe.act=Ly;oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ny({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Md.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Vy.call(e,u)&&!My.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:fa,type:t.type,key:s,ref:i,props:r,_owner:o}};oe.createContext=function(t){return t={$$typeof:_1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:y1,_context:t},t.Consumer=t};oe.createElement=Oy;oe.createFactory=function(t){var e=Oy.bind(null,t);return e.type=t,e};oe.createRef=function(){return{current:null}};oe.forwardRef=function(t){return{$$typeof:v1,render:t}};oe.isValidElement=Od;oe.lazy=function(t){return{$$typeof:T1,_payload:{_status:-1,_result:t},_init:A1}};oe.memo=function(t,e){return{$$typeof:E1,type:t,compare:e===void 0?null:e}};oe.startTransition=function(t){var e=Cl.transition;Cl.transition={};try{t()}finally{Cl.transition=e}};oe.unstable_act=Ly;oe.useCallback=function(t,e){return At.current.useCallback(t,e)};oe.useContext=function(t){return At.current.useContext(t)};oe.useDebugValue=function(){};oe.useDeferredValue=function(t){return At.current.useDeferredValue(t)};oe.useEffect=function(t,e){return At.current.useEffect(t,e)};oe.useId=function(){return At.current.useId()};oe.useImperativeHandle=function(t,e,n){return At.current.useImperativeHandle(t,e,n)};oe.useInsertionEffect=function(t,e){return At.current.useInsertionEffect(t,e)};oe.useLayoutEffect=function(t,e){return At.current.useLayoutEffect(t,e)};oe.useMemo=function(t,e){return At.current.useMemo(t,e)};oe.useReducer=function(t,e,n){return At.current.useReducer(t,e,n)};oe.useRef=function(t){return At.current.useRef(t)};oe.useState=function(t){return At.current.useState(t)};oe.useSyncExternalStore=function(t,e,n){return At.current.useSyncExternalStore(t,e,n)};oe.useTransition=function(){return At.current.useTransition()};oe.version="18.3.1";Ry.exports=oe;var Z=Ry.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k1=Z,R1=Symbol.for("react.element"),P1=Symbol.for("react.fragment"),N1=Object.prototype.hasOwnProperty,b1=k1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,D1={key:!0,ref:!0,__self:!0,__source:!0};function jy(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)N1.call(e,r)&&!D1.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:R1,type:t,key:i,ref:o,props:s,_owner:b1.current}}ju.Fragment=P1;ju.jsx=jy;ju.jsxs=jy;ky.exports=ju;var p=ky.exports,Fy={exports:{}},qt={},Uy={exports:{}},zy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,X){var se=$.length;$.push(X);e:for(;0<se;){var me=se-1>>>1,xe=$[me];if(0<s(xe,X))$[me]=X,$[se]=xe,se=me;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var X=$[0],se=$.pop();if(se!==X){$[0]=se;e:for(var me=0,xe=$.length,Gt=xe>>>1;me<Gt;){var tt=2*(me+1)-1,wt=$[tt],Et=tt+1,Kt=$[Et];if(0>s(wt,se))Et<xe&&0>s(Kt,wt)?($[me]=Kt,$[Et]=se,me=Et):($[me]=wt,$[tt]=se,me=tt);else if(Et<xe&&0>s(Kt,se))$[me]=Kt,$[Et]=se,me=Et;else break e}}return X}function s($,X){var se=$.sortIndex-X.sortIndex;return se!==0?se:$.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,m=null,y=3,k=!1,b=!1,D=!1,L=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x($){for(var X=n(h);X!==null;){if(X.callback===null)r(h);else if(X.startTime<=$)r(h),X.sortIndex=X.expirationTime,e(u,X);else break;X=n(h)}}function M($){if(D=!1,x($),!b)if(n(u)!==null)b=!0,sr(U);else{var X=n(h);X!==null&&Se(M,X.startTime-$)}}function U($,X){b=!1,D&&(D=!1,S(_),_=-1),k=!0;var se=y;try{for(x(X),m=n(u);m!==null&&(!(m.expirationTime>X)||$&&!C());){var me=m.callback;if(typeof me=="function"){m.callback=null,y=m.priorityLevel;var xe=me(m.expirationTime<=X);X=t.unstable_now(),typeof xe=="function"?m.callback=xe:m===n(u)&&r(u),x(X)}else r(u);m=n(u)}if(m!==null)var Gt=!0;else{var tt=n(h);tt!==null&&Se(M,tt.startTime-X),Gt=!1}return Gt}finally{m=null,y=se,k=!1}}var z=!1,v=null,_=-1,E=5,I=-1;function C(){return!(t.unstable_now()-I<E)}function R(){if(v!==null){var $=t.unstable_now();I=$;var X=!0;try{X=v(!0,$)}finally{X?T():(z=!1,v=null)}}else z=!1}var T;if(typeof w=="function")T=function(){w(R)};else if(typeof MessageChannel<"u"){var Oe=new MessageChannel,Lt=Oe.port2;Oe.port1.onmessage=R,T=function(){Lt.postMessage(null)}}else T=function(){L(R,0)};function sr($){v=$,z||(z=!0,T())}function Se($,X){_=L(function(){$(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){b||k||(b=!0,sr(U))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(y){case 1:case 2:case 3:var X=3;break;default:X=y}var se=y;y=X;try{return $()}finally{y=se}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,X){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var se=y;y=$;try{return X()}finally{y=se}},t.unstable_scheduleCallback=function($,X,se){var me=t.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?me+se:me):se=me,$){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=se+xe,$={id:f++,callback:X,priorityLevel:$,startTime:se,expirationTime:xe,sortIndex:-1},se>me?($.sortIndex=se,e(h,$),n(u)===null&&$===n(h)&&(D?(S(_),_=-1):D=!0,Se(M,se-me))):($.sortIndex=xe,e(u,$),b||k||(b=!0,sr(U))),$},t.unstable_shouldYield=C,t.unstable_wrapCallback=function($){var X=y;return function(){var se=y;y=X;try{return $.apply(this,arguments)}finally{y=se}}}})(zy);Uy.exports=zy;var V1=Uy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M1=Z,Ht=V1;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var By=new Set,Uo={};function bs(t,e){yi(t,e),yi(t+"Capture",e)}function yi(t,e){for(Uo[t]=e,t=0;t<e.length;t++)By.add(e[t])}var Kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yh=Object.prototype.hasOwnProperty,O1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$p={},Hp={};function L1(t){return yh.call(Hp,t)?!0:yh.call($p,t)?!1:O1.test(t)?Hp[t]=!0:($p[t]=!0,!1)}function j1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function F1(t,e,n,r){if(e===null||typeof e>"u"||j1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ct(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ut[t]=new Ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ut[e]=new Ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ut[t]=new Ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ut[t]=new Ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ut[t]=new Ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ut[t]=new Ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ut[t]=new Ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ut[t]=new Ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ut[t]=new Ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ld=/[\-:]([a-z])/g;function jd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ld,jd);ut[e]=new Ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ld,jd);ut[e]=new Ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ld,jd);ut[e]=new Ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ut[t]=new Ct(t,1,!1,t.toLowerCase(),null,!1,!1)});ut.xlinkHref=new Ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ut[t]=new Ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function Fd(t,e,n,r){var s=ut.hasOwnProperty(e)?ut[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(F1(e,n,s,r)&&(n=null),r||s===null?L1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var nr=M1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rl=Symbol.for("react.element"),Qs=Symbol.for("react.portal"),Ys=Symbol.for("react.fragment"),Ud=Symbol.for("react.strict_mode"),_h=Symbol.for("react.profiler"),$y=Symbol.for("react.provider"),Hy=Symbol.for("react.context"),zd=Symbol.for("react.forward_ref"),vh=Symbol.for("react.suspense"),wh=Symbol.for("react.suspense_list"),Bd=Symbol.for("react.memo"),gr=Symbol.for("react.lazy"),qy=Symbol.for("react.offscreen"),qp=Symbol.iterator;function ao(t){return t===null||typeof t!="object"?null:(t=qp&&t[qp]||t["@@iterator"],typeof t=="function"?t:null)}var Re=Object.assign,Rc;function go(t){if(Rc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Rc=e&&e[1]||""}return`
`+Rc+t}var Pc=!1;function Nc(t,e){if(!t||Pc)return"";Pc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Pc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?go(t):""}function U1(t){switch(t.tag){case 5:return go(t.type);case 16:return go("Lazy");case 13:return go("Suspense");case 19:return go("SuspenseList");case 0:case 2:case 15:return t=Nc(t.type,!1),t;case 11:return t=Nc(t.type.render,!1),t;case 1:return t=Nc(t.type,!0),t;default:return""}}function Eh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ys:return"Fragment";case Qs:return"Portal";case _h:return"Profiler";case Ud:return"StrictMode";case vh:return"Suspense";case wh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Hy:return(t.displayName||"Context")+".Consumer";case $y:return(t._context.displayName||"Context")+".Provider";case zd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Bd:return e=t.displayName||null,e!==null?e:Eh(t.type)||"Memo";case gr:e=t._payload,t=t._init;try{return Eh(t(e))}catch{}}return null}function z1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Eh(e);case 8:return e===Ud?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Fr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Wy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function B1(t){var e=Wy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function sl(t){t._valueTracker||(t._valueTracker=B1(t))}function Gy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Wy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Kl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Th(t,e){var n=e.checked;return Re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Wp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Fr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ky(t,e){e=e.checked,e!=null&&Fd(t,"checked",e,!1)}function Ih(t,e){Ky(t,e);var n=Fr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Sh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Sh(t,e.type,Fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Gp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Sh(t,e,n){(e!=="number"||Kl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var yo=Array.isArray;function ai(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Fr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function xh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Kp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(yo(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Fr(n)}}function Qy(t,e){var n=Fr(e.value),r=Fr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Qp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Yy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ah(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Yy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var il,Xy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(il=il||document.createElement("div"),il.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=il.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function zo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var So={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$1=["Webkit","ms","Moz","O"];Object.keys(So).forEach(function(t){$1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),So[e]=So[t]})});function Jy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||So.hasOwnProperty(t)&&So[t]?(""+e).trim():e+"px"}function Zy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Jy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var H1=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ch(t,e){if(e){if(H1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function kh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rh=null;function $d(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ph=null,li=null,ui=null;function Yp(t){if(t=ga(t)){if(typeof Ph!="function")throw Error(F(280));var e=t.stateNode;e&&(e=$u(e),Ph(t.stateNode,t.type,e))}}function e_(t){li?ui?ui.push(t):ui=[t]:li=t}function t_(){if(li){var t=li,e=ui;if(ui=li=null,Yp(t),e)for(t=0;t<e.length;t++)Yp(e[t])}}function n_(t,e){return t(e)}function r_(){}var bc=!1;function s_(t,e,n){if(bc)return t(e,n);bc=!0;try{return n_(t,e,n)}finally{bc=!1,(li!==null||ui!==null)&&(r_(),t_())}}function Bo(t,e){var n=t.stateNode;if(n===null)return null;var r=$u(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Nh=!1;if(Kn)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){Nh=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{Nh=!1}function q1(t,e,n,r,s,i,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var xo=!1,Ql=null,Yl=!1,bh=null,W1={onError:function(t){xo=!0,Ql=t}};function G1(t,e,n,r,s,i,o,l,u){xo=!1,Ql=null,q1.apply(W1,arguments)}function K1(t,e,n,r,s,i,o,l,u){if(G1.apply(this,arguments),xo){if(xo){var h=Ql;xo=!1,Ql=null}else throw Error(F(198));Yl||(Yl=!0,bh=h)}}function Ds(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function i_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Xp(t){if(Ds(t)!==t)throw Error(F(188))}function Q1(t){var e=t.alternate;if(!e){if(e=Ds(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Xp(s),t;if(i===r)return Xp(s),e;i=i.sibling}throw Error(F(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function o_(t){return t=Q1(t),t!==null?a_(t):null}function a_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=a_(t);if(e!==null)return e;t=t.sibling}return null}var l_=Ht.unstable_scheduleCallback,Jp=Ht.unstable_cancelCallback,Y1=Ht.unstable_shouldYield,X1=Ht.unstable_requestPaint,Me=Ht.unstable_now,J1=Ht.unstable_getCurrentPriorityLevel,Hd=Ht.unstable_ImmediatePriority,u_=Ht.unstable_UserBlockingPriority,Xl=Ht.unstable_NormalPriority,Z1=Ht.unstable_LowPriority,c_=Ht.unstable_IdlePriority,Fu=null,Cn=null;function eE(t){if(Cn&&typeof Cn.onCommitFiberRoot=="function")try{Cn.onCommitFiberRoot(Fu,t,void 0,(t.current.flags&128)===128)}catch{}}var mn=Math.clz32?Math.clz32:rE,tE=Math.log,nE=Math.LN2;function rE(t){return t>>>=0,t===0?32:31-(tE(t)/nE|0)|0}var ol=64,al=4194304;function _o(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Jl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=_o(l):(i&=o,i!==0&&(r=_o(i)))}else o=n&~s,o!==0?r=_o(o):i!==0&&(r=_o(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-mn(e),s=1<<n,r|=t[n],e&=~s;return r}function sE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-mn(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=sE(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Dh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function h_(){var t=ol;return ol<<=1,!(ol&4194240)&&(ol=64),t}function Dc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function pa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-mn(e),t[e]=n}function oE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-mn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function qd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-mn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var pe=0;function d_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var f_,Wd,p_,m_,g_,Vh=!1,ll=[],Ar=null,Cr=null,kr=null,$o=new Map,Ho=new Map,_r=[],aE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zp(t,e){switch(t){case"focusin":case"focusout":Ar=null;break;case"dragenter":case"dragleave":Cr=null;break;case"mouseover":case"mouseout":kr=null;break;case"pointerover":case"pointerout":$o.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(e.pointerId)}}function uo(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=ga(e),e!==null&&Wd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function lE(t,e,n,r,s){switch(e){case"focusin":return Ar=uo(Ar,t,e,n,r,s),!0;case"dragenter":return Cr=uo(Cr,t,e,n,r,s),!0;case"mouseover":return kr=uo(kr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return $o.set(i,uo($o.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Ho.set(i,uo(Ho.get(i)||null,t,e,n,r,s)),!0}return!1}function y_(t){var e=fs(t.target);if(e!==null){var n=Ds(e);if(n!==null){if(e=n.tag,e===13){if(e=i_(n),e!==null){t.blockedOn=e,g_(t.priority,function(){p_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Mh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Rh=r,n.target.dispatchEvent(r),Rh=null}else return e=ga(n),e!==null&&Wd(e),t.blockedOn=n,!1;e.shift()}return!0}function em(t,e,n){kl(t)&&n.delete(e)}function uE(){Vh=!1,Ar!==null&&kl(Ar)&&(Ar=null),Cr!==null&&kl(Cr)&&(Cr=null),kr!==null&&kl(kr)&&(kr=null),$o.forEach(em),Ho.forEach(em)}function co(t,e){t.blockedOn===e&&(t.blockedOn=null,Vh||(Vh=!0,Ht.unstable_scheduleCallback(Ht.unstable_NormalPriority,uE)))}function qo(t){function e(s){return co(s,t)}if(0<ll.length){co(ll[0],t);for(var n=1;n<ll.length;n++){var r=ll[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ar!==null&&co(Ar,t),Cr!==null&&co(Cr,t),kr!==null&&co(kr,t),$o.forEach(e),Ho.forEach(e),n=0;n<_r.length;n++)r=_r[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<_r.length&&(n=_r[0],n.blockedOn===null);)y_(n),n.blockedOn===null&&_r.shift()}var ci=nr.ReactCurrentBatchConfig,Zl=!0;function cE(t,e,n,r){var s=pe,i=ci.transition;ci.transition=null;try{pe=1,Gd(t,e,n,r)}finally{pe=s,ci.transition=i}}function hE(t,e,n,r){var s=pe,i=ci.transition;ci.transition=null;try{pe=4,Gd(t,e,n,r)}finally{pe=s,ci.transition=i}}function Gd(t,e,n,r){if(Zl){var s=Mh(t,e,n,r);if(s===null)$c(t,e,r,eu,n),Zp(t,r);else if(lE(s,t,e,n,r))r.stopPropagation();else if(Zp(t,r),e&4&&-1<aE.indexOf(t)){for(;s!==null;){var i=ga(s);if(i!==null&&f_(i),i=Mh(t,e,n,r),i===null&&$c(t,e,r,eu,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else $c(t,e,r,null,n)}}var eu=null;function Mh(t,e,n,r){if(eu=null,t=$d(r),t=fs(t),t!==null)if(e=Ds(t),e===null)t=null;else if(n=e.tag,n===13){if(t=i_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return eu=t,null}function __(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(J1()){case Hd:return 1;case u_:return 4;case Xl:case Z1:return 16;case c_:return 536870912;default:return 16}default:return 16}}var Ir=null,Kd=null,Rl=null;function v_(){if(Rl)return Rl;var t,e=Kd,n=e.length,r,s="value"in Ir?Ir.value:Ir.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Rl=s.slice(t,1<r?1-r:void 0)}function Pl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ul(){return!0}function tm(){return!1}function Wt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ul:tm,this.isPropagationStopped=tm,this}return Re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),e}var Di={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qd=Wt(Di),ma=Re({},Di,{view:0,detail:0}),dE=Wt(ma),Vc,Mc,ho,Uu=Re({},ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ho&&(ho&&t.type==="mousemove"?(Vc=t.screenX-ho.screenX,Mc=t.screenY-ho.screenY):Mc=Vc=0,ho=t),Vc)},movementY:function(t){return"movementY"in t?t.movementY:Mc}}),nm=Wt(Uu),fE=Re({},Uu,{dataTransfer:0}),pE=Wt(fE),mE=Re({},ma,{relatedTarget:0}),Oc=Wt(mE),gE=Re({},Di,{animationName:0,elapsedTime:0,pseudoElement:0}),yE=Wt(gE),_E=Re({},Di,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vE=Wt(_E),wE=Re({},Di,{data:0}),rm=Wt(wE),EE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},TE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},IE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function SE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=IE[t])?!!e[t]:!1}function Yd(){return SE}var xE=Re({},ma,{key:function(t){if(t.key){var e=EE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?TE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yd,charCode:function(t){return t.type==="keypress"?Pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),AE=Wt(xE),CE=Re({},Uu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sm=Wt(CE),kE=Re({},ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yd}),RE=Wt(kE),PE=Re({},Di,{propertyName:0,elapsedTime:0,pseudoElement:0}),NE=Wt(PE),bE=Re({},Uu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),DE=Wt(bE),VE=[9,13,27,32],Xd=Kn&&"CompositionEvent"in window,Ao=null;Kn&&"documentMode"in document&&(Ao=document.documentMode);var ME=Kn&&"TextEvent"in window&&!Ao,w_=Kn&&(!Xd||Ao&&8<Ao&&11>=Ao),im=" ",om=!1;function E_(t,e){switch(t){case"keyup":return VE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function T_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xs=!1;function OE(t,e){switch(t){case"compositionend":return T_(e);case"keypress":return e.which!==32?null:(om=!0,im);case"textInput":return t=e.data,t===im&&om?null:t;default:return null}}function LE(t,e){if(Xs)return t==="compositionend"||!Xd&&E_(t,e)?(t=v_(),Rl=Kd=Ir=null,Xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return w_&&e.locale!=="ko"?null:e.data;default:return null}}var jE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function am(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jE[t.type]:e==="textarea"}function I_(t,e,n,r){e_(r),e=tu(e,"onChange"),0<e.length&&(n=new Qd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Co=null,Wo=null;function FE(t){V_(t,0)}function zu(t){var e=ei(t);if(Gy(e))return t}function UE(t,e){if(t==="change")return e}var S_=!1;if(Kn){var Lc;if(Kn){var jc="oninput"in document;if(!jc){var lm=document.createElement("div");lm.setAttribute("oninput","return;"),jc=typeof lm.oninput=="function"}Lc=jc}else Lc=!1;S_=Lc&&(!document.documentMode||9<document.documentMode)}function um(){Co&&(Co.detachEvent("onpropertychange",x_),Wo=Co=null)}function x_(t){if(t.propertyName==="value"&&zu(Wo)){var e=[];I_(e,Wo,t,$d(t)),s_(FE,e)}}function zE(t,e,n){t==="focusin"?(um(),Co=e,Wo=n,Co.attachEvent("onpropertychange",x_)):t==="focusout"&&um()}function BE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zu(Wo)}function $E(t,e){if(t==="click")return zu(e)}function HE(t,e){if(t==="input"||t==="change")return zu(e)}function qE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var _n=typeof Object.is=="function"?Object.is:qE;function Go(t,e){if(_n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!yh.call(e,s)||!_n(t[s],e[s]))return!1}return!0}function cm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hm(t,e){var n=cm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cm(n)}}function A_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?A_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function C_(){for(var t=window,e=Kl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Kl(t.document)}return e}function Jd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function WE(t){var e=C_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&A_(n.ownerDocument.documentElement,n)){if(r!==null&&Jd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=hm(n,i);var o=hm(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var GE=Kn&&"documentMode"in document&&11>=document.documentMode,Js=null,Oh=null,ko=null,Lh=!1;function dm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lh||Js==null||Js!==Kl(r)||(r=Js,"selectionStart"in r&&Jd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ko&&Go(ko,r)||(ko=r,r=tu(Oh,"onSelect"),0<r.length&&(e=new Qd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Js)))}function cl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zs={animationend:cl("Animation","AnimationEnd"),animationiteration:cl("Animation","AnimationIteration"),animationstart:cl("Animation","AnimationStart"),transitionend:cl("Transition","TransitionEnd")},Fc={},k_={};Kn&&(k_=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function Bu(t){if(Fc[t])return Fc[t];if(!Zs[t])return t;var e=Zs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in k_)return Fc[t]=e[n];return t}var R_=Bu("animationend"),P_=Bu("animationiteration"),N_=Bu("animationstart"),b_=Bu("transitionend"),D_=new Map,fm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(t,e){D_.set(t,e),bs(e,[t])}for(var Uc=0;Uc<fm.length;Uc++){var zc=fm[Uc],KE=zc.toLowerCase(),QE=zc[0].toUpperCase()+zc.slice(1);Gr(KE,"on"+QE)}Gr(R_,"onAnimationEnd");Gr(P_,"onAnimationIteration");Gr(N_,"onAnimationStart");Gr("dblclick","onDoubleClick");Gr("focusin","onFocus");Gr("focusout","onBlur");Gr(b_,"onTransitionEnd");yi("onMouseEnter",["mouseout","mouseover"]);yi("onMouseLeave",["mouseout","mouseover"]);yi("onPointerEnter",["pointerout","pointerover"]);yi("onPointerLeave",["pointerout","pointerover"]);bs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bs("onBeforeInput",["compositionend","keypress","textInput","paste"]);bs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YE=new Set("cancel close invalid load scroll toggle".split(" ").concat(vo));function pm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,K1(r,e,void 0,t),t.currentTarget=null}function V_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;pm(s,l,h),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;pm(s,l,h),i=u}}}if(Yl)throw t=bh,Yl=!1,bh=null,t}function we(t,e){var n=e[Bh];n===void 0&&(n=e[Bh]=new Set);var r=t+"__bubble";n.has(r)||(M_(e,t,2,!1),n.add(r))}function Bc(t,e,n){var r=0;e&&(r|=4),M_(n,t,r,e)}var hl="_reactListening"+Math.random().toString(36).slice(2);function Ko(t){if(!t[hl]){t[hl]=!0,By.forEach(function(n){n!=="selectionchange"&&(YE.has(n)||Bc(n,!1,t),Bc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[hl]||(e[hl]=!0,Bc("selectionchange",!1,e))}}function M_(t,e,n,r){switch(__(e)){case 1:var s=cE;break;case 4:s=hE;break;default:s=Gd}n=s.bind(null,e,n,t),s=void 0,!Nh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function $c(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=fs(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}s_(function(){var h=i,f=$d(n),m=[];e:{var y=D_.get(t);if(y!==void 0){var k=Qd,b=t;switch(t){case"keypress":if(Pl(n)===0)break e;case"keydown":case"keyup":k=AE;break;case"focusin":b="focus",k=Oc;break;case"focusout":b="blur",k=Oc;break;case"beforeblur":case"afterblur":k=Oc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=nm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=pE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=RE;break;case R_:case P_:case N_:k=yE;break;case b_:k=NE;break;case"scroll":k=dE;break;case"wheel":k=DE;break;case"copy":case"cut":case"paste":k=vE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=sm}var D=(e&4)!==0,L=!D&&t==="scroll",S=D?y!==null?y+"Capture":null:y;D=[];for(var w=h,x;w!==null;){x=w;var M=x.stateNode;if(x.tag===5&&M!==null&&(x=M,S!==null&&(M=Bo(w,S),M!=null&&D.push(Qo(w,M,x)))),L)break;w=w.return}0<D.length&&(y=new k(y,b,null,n,f),m.push({event:y,listeners:D}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",y&&n!==Rh&&(b=n.relatedTarget||n.fromElement)&&(fs(b)||b[Qn]))break e;if((k||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,k?(b=n.relatedTarget||n.toElement,k=h,b=b?fs(b):null,b!==null&&(L=Ds(b),b!==L||b.tag!==5&&b.tag!==6)&&(b=null)):(k=null,b=h),k!==b)){if(D=nm,M="onMouseLeave",S="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(D=sm,M="onPointerLeave",S="onPointerEnter",w="pointer"),L=k==null?y:ei(k),x=b==null?y:ei(b),y=new D(M,w+"leave",k,n,f),y.target=L,y.relatedTarget=x,M=null,fs(f)===h&&(D=new D(S,w+"enter",b,n,f),D.target=x,D.relatedTarget=L,M=D),L=M,k&&b)t:{for(D=k,S=b,w=0,x=D;x;x=Hs(x))w++;for(x=0,M=S;M;M=Hs(M))x++;for(;0<w-x;)D=Hs(D),w--;for(;0<x-w;)S=Hs(S),x--;for(;w--;){if(D===S||S!==null&&D===S.alternate)break t;D=Hs(D),S=Hs(S)}D=null}else D=null;k!==null&&mm(m,y,k,D,!1),b!==null&&L!==null&&mm(m,L,b,D,!0)}}e:{if(y=h?ei(h):window,k=y.nodeName&&y.nodeName.toLowerCase(),k==="select"||k==="input"&&y.type==="file")var U=UE;else if(am(y))if(S_)U=HE;else{U=BE;var z=zE}else(k=y.nodeName)&&k.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(U=$E);if(U&&(U=U(t,h))){I_(m,U,n,f);break e}z&&z(t,y,h),t==="focusout"&&(z=y._wrapperState)&&z.controlled&&y.type==="number"&&Sh(y,"number",y.value)}switch(z=h?ei(h):window,t){case"focusin":(am(z)||z.contentEditable==="true")&&(Js=z,Oh=h,ko=null);break;case"focusout":ko=Oh=Js=null;break;case"mousedown":Lh=!0;break;case"contextmenu":case"mouseup":case"dragend":Lh=!1,dm(m,n,f);break;case"selectionchange":if(GE)break;case"keydown":case"keyup":dm(m,n,f)}var v;if(Xd)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Xs?E_(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(w_&&n.locale!=="ko"&&(Xs||_!=="onCompositionStart"?_==="onCompositionEnd"&&Xs&&(v=v_()):(Ir=f,Kd="value"in Ir?Ir.value:Ir.textContent,Xs=!0)),z=tu(h,_),0<z.length&&(_=new rm(_,t,null,n,f),m.push({event:_,listeners:z}),v?_.data=v:(v=T_(n),v!==null&&(_.data=v)))),(v=ME?OE(t,n):LE(t,n))&&(h=tu(h,"onBeforeInput"),0<h.length&&(f=new rm("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:h}),f.data=v))}V_(m,e)})}function Qo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function tu(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Bo(t,n),i!=null&&r.unshift(Qo(t,i,s)),i=Bo(t,e),i!=null&&r.push(Qo(t,i,s))),t=t.return}return r}function Hs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function mm(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,s?(u=Bo(n,i),u!=null&&o.unshift(Qo(n,u,l))):s||(u=Bo(n,i),u!=null&&o.push(Qo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var XE=/\r\n?/g,JE=/\u0000|\uFFFD/g;function gm(t){return(typeof t=="string"?t:""+t).replace(XE,`
`).replace(JE,"")}function dl(t,e,n){if(e=gm(e),gm(t)!==e&&n)throw Error(F(425))}function nu(){}var jh=null,Fh=null;function Uh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zh=typeof setTimeout=="function"?setTimeout:void 0,ZE=typeof clearTimeout=="function"?clearTimeout:void 0,ym=typeof Promise=="function"?Promise:void 0,eT=typeof queueMicrotask=="function"?queueMicrotask:typeof ym<"u"?function(t){return ym.resolve(null).then(t).catch(tT)}:zh;function tT(t){setTimeout(function(){throw t})}function Hc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),qo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);qo(e)}function Rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function _m(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Vi=Math.random().toString(36).slice(2),An="__reactFiber$"+Vi,Yo="__reactProps$"+Vi,Qn="__reactContainer$"+Vi,Bh="__reactEvents$"+Vi,nT="__reactListeners$"+Vi,rT="__reactHandles$"+Vi;function fs(t){var e=t[An];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Qn]||n[An]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=_m(t);t!==null;){if(n=t[An])return n;t=_m(t)}return e}t=n,n=t.parentNode}return null}function ga(t){return t=t[An]||t[Qn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ei(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function $u(t){return t[Yo]||null}var $h=[],ti=-1;function Kr(t){return{current:t}}function Te(t){0>ti||(t.current=$h[ti],$h[ti]=null,ti--)}function ve(t,e){ti++,$h[ti]=t.current,t.current=e}var Ur={},_t=Kr(Ur),Vt=Kr(!1),Ts=Ur;function _i(t,e){var n=t.type.contextTypes;if(!n)return Ur;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Mt(t){return t=t.childContextTypes,t!=null}function ru(){Te(Vt),Te(_t)}function vm(t,e,n){if(_t.current!==Ur)throw Error(F(168));ve(_t,e),ve(Vt,n)}function O_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(F(108,z1(t)||"Unknown",s));return Re({},n,r)}function su(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ur,Ts=_t.current,ve(_t,t),ve(Vt,Vt.current),!0}function wm(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=O_(t,e,Ts),r.__reactInternalMemoizedMergedChildContext=t,Te(Vt),Te(_t),ve(_t,t)):Te(Vt),ve(Vt,n)}var Un=null,Hu=!1,qc=!1;function L_(t){Un===null?Un=[t]:Un.push(t)}function sT(t){Hu=!0,L_(t)}function Qr(){if(!qc&&Un!==null){qc=!0;var t=0,e=pe;try{var n=Un;for(pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Un=null,Hu=!1}catch(s){throw Un!==null&&(Un=Un.slice(t+1)),l_(Hd,Qr),s}finally{pe=e,qc=!1}}return null}var ni=[],ri=0,iu=null,ou=0,Jt=[],Zt=0,Is=null,Bn=1,$n="";function cs(t,e){ni[ri++]=ou,ni[ri++]=iu,iu=t,ou=e}function j_(t,e,n){Jt[Zt++]=Bn,Jt[Zt++]=$n,Jt[Zt++]=Is,Is=t;var r=Bn;t=$n;var s=32-mn(r)-1;r&=~(1<<s),n+=1;var i=32-mn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Bn=1<<32-mn(e)+s|n<<s|r,$n=i+t}else Bn=1<<i|n<<s|r,$n=t}function Zd(t){t.return!==null&&(cs(t,1),j_(t,1,0))}function ef(t){for(;t===iu;)iu=ni[--ri],ni[ri]=null,ou=ni[--ri],ni[ri]=null;for(;t===Is;)Is=Jt[--Zt],Jt[Zt]=null,$n=Jt[--Zt],Jt[Zt]=null,Bn=Jt[--Zt],Jt[Zt]=null}var $t=null,Bt=null,Ie=!1,hn=null;function F_(t,e){var n=nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Em(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,$t=t,Bt=Rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,$t=t,Bt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Is!==null?{id:Bn,overflow:$n}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,$t=t,Bt=null,!0):!1;default:return!1}}function Hh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qh(t){if(Ie){var e=Bt;if(e){var n=e;if(!Em(t,e)){if(Hh(t))throw Error(F(418));e=Rr(n.nextSibling);var r=$t;e&&Em(t,e)?F_(r,n):(t.flags=t.flags&-4097|2,Ie=!1,$t=t)}}else{if(Hh(t))throw Error(F(418));t.flags=t.flags&-4097|2,Ie=!1,$t=t}}}function Tm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;$t=t}function fl(t){if(t!==$t)return!1;if(!Ie)return Tm(t),Ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Uh(t.type,t.memoizedProps)),e&&(e=Bt)){if(Hh(t))throw U_(),Error(F(418));for(;e;)F_(t,e),e=Rr(e.nextSibling)}if(Tm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Bt=Rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Bt=null}}else Bt=$t?Rr(t.stateNode.nextSibling):null;return!0}function U_(){for(var t=Bt;t;)t=Rr(t.nextSibling)}function vi(){Bt=$t=null,Ie=!1}function tf(t){hn===null?hn=[t]:hn.push(t)}var iT=nr.ReactCurrentBatchConfig;function fo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function pl(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Im(t){var e=t._init;return e(t._payload)}function z_(t){function e(S,w){if(t){var x=S.deletions;x===null?(S.deletions=[w],S.flags|=16):x.push(w)}}function n(S,w){if(!t)return null;for(;w!==null;)e(S,w),w=w.sibling;return null}function r(S,w){for(S=new Map;w!==null;)w.key!==null?S.set(w.key,w):S.set(w.index,w),w=w.sibling;return S}function s(S,w){return S=Dr(S,w),S.index=0,S.sibling=null,S}function i(S,w,x){return S.index=x,t?(x=S.alternate,x!==null?(x=x.index,x<w?(S.flags|=2,w):x):(S.flags|=2,w)):(S.flags|=1048576,w)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,w,x,M){return w===null||w.tag!==6?(w=Jc(x,S.mode,M),w.return=S,w):(w=s(w,x),w.return=S,w)}function u(S,w,x,M){var U=x.type;return U===Ys?f(S,w,x.props.children,M,x.key):w!==null&&(w.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===gr&&Im(U)===w.type)?(M=s(w,x.props),M.ref=fo(S,w,x),M.return=S,M):(M=Ll(x.type,x.key,x.props,null,S.mode,M),M.ref=fo(S,w,x),M.return=S,M)}function h(S,w,x,M){return w===null||w.tag!==4||w.stateNode.containerInfo!==x.containerInfo||w.stateNode.implementation!==x.implementation?(w=Zc(x,S.mode,M),w.return=S,w):(w=s(w,x.children||[]),w.return=S,w)}function f(S,w,x,M,U){return w===null||w.tag!==7?(w=vs(x,S.mode,M,U),w.return=S,w):(w=s(w,x),w.return=S,w)}function m(S,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Jc(""+w,S.mode,x),w.return=S,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case rl:return x=Ll(w.type,w.key,w.props,null,S.mode,x),x.ref=fo(S,null,w),x.return=S,x;case Qs:return w=Zc(w,S.mode,x),w.return=S,w;case gr:var M=w._init;return m(S,M(w._payload),x)}if(yo(w)||ao(w))return w=vs(w,S.mode,x,null),w.return=S,w;pl(S,w)}return null}function y(S,w,x,M){var U=w!==null?w.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return U!==null?null:l(S,w,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case rl:return x.key===U?u(S,w,x,M):null;case Qs:return x.key===U?h(S,w,x,M):null;case gr:return U=x._init,y(S,w,U(x._payload),M)}if(yo(x)||ao(x))return U!==null?null:f(S,w,x,M,null);pl(S,x)}return null}function k(S,w,x,M,U){if(typeof M=="string"&&M!==""||typeof M=="number")return S=S.get(x)||null,l(w,S,""+M,U);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case rl:return S=S.get(M.key===null?x:M.key)||null,u(w,S,M,U);case Qs:return S=S.get(M.key===null?x:M.key)||null,h(w,S,M,U);case gr:var z=M._init;return k(S,w,x,z(M._payload),U)}if(yo(M)||ao(M))return S=S.get(x)||null,f(w,S,M,U,null);pl(w,M)}return null}function b(S,w,x,M){for(var U=null,z=null,v=w,_=w=0,E=null;v!==null&&_<x.length;_++){v.index>_?(E=v,v=null):E=v.sibling;var I=y(S,v,x[_],M);if(I===null){v===null&&(v=E);break}t&&v&&I.alternate===null&&e(S,v),w=i(I,w,_),z===null?U=I:z.sibling=I,z=I,v=E}if(_===x.length)return n(S,v),Ie&&cs(S,_),U;if(v===null){for(;_<x.length;_++)v=m(S,x[_],M),v!==null&&(w=i(v,w,_),z===null?U=v:z.sibling=v,z=v);return Ie&&cs(S,_),U}for(v=r(S,v);_<x.length;_++)E=k(v,S,_,x[_],M),E!==null&&(t&&E.alternate!==null&&v.delete(E.key===null?_:E.key),w=i(E,w,_),z===null?U=E:z.sibling=E,z=E);return t&&v.forEach(function(C){return e(S,C)}),Ie&&cs(S,_),U}function D(S,w,x,M){var U=ao(x);if(typeof U!="function")throw Error(F(150));if(x=U.call(x),x==null)throw Error(F(151));for(var z=U=null,v=w,_=w=0,E=null,I=x.next();v!==null&&!I.done;_++,I=x.next()){v.index>_?(E=v,v=null):E=v.sibling;var C=y(S,v,I.value,M);if(C===null){v===null&&(v=E);break}t&&v&&C.alternate===null&&e(S,v),w=i(C,w,_),z===null?U=C:z.sibling=C,z=C,v=E}if(I.done)return n(S,v),Ie&&cs(S,_),U;if(v===null){for(;!I.done;_++,I=x.next())I=m(S,I.value,M),I!==null&&(w=i(I,w,_),z===null?U=I:z.sibling=I,z=I);return Ie&&cs(S,_),U}for(v=r(S,v);!I.done;_++,I=x.next())I=k(v,S,_,I.value,M),I!==null&&(t&&I.alternate!==null&&v.delete(I.key===null?_:I.key),w=i(I,w,_),z===null?U=I:z.sibling=I,z=I);return t&&v.forEach(function(R){return e(S,R)}),Ie&&cs(S,_),U}function L(S,w,x,M){if(typeof x=="object"&&x!==null&&x.type===Ys&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case rl:e:{for(var U=x.key,z=w;z!==null;){if(z.key===U){if(U=x.type,U===Ys){if(z.tag===7){n(S,z.sibling),w=s(z,x.props.children),w.return=S,S=w;break e}}else if(z.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===gr&&Im(U)===z.type){n(S,z.sibling),w=s(z,x.props),w.ref=fo(S,z,x),w.return=S,S=w;break e}n(S,z);break}else e(S,z);z=z.sibling}x.type===Ys?(w=vs(x.props.children,S.mode,M,x.key),w.return=S,S=w):(M=Ll(x.type,x.key,x.props,null,S.mode,M),M.ref=fo(S,w,x),M.return=S,S=M)}return o(S);case Qs:e:{for(z=x.key;w!==null;){if(w.key===z)if(w.tag===4&&w.stateNode.containerInfo===x.containerInfo&&w.stateNode.implementation===x.implementation){n(S,w.sibling),w=s(w,x.children||[]),w.return=S,S=w;break e}else{n(S,w);break}else e(S,w);w=w.sibling}w=Zc(x,S.mode,M),w.return=S,S=w}return o(S);case gr:return z=x._init,L(S,w,z(x._payload),M)}if(yo(x))return b(S,w,x,M);if(ao(x))return D(S,w,x,M);pl(S,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,w!==null&&w.tag===6?(n(S,w.sibling),w=s(w,x),w.return=S,S=w):(n(S,w),w=Jc(x,S.mode,M),w.return=S,S=w),o(S)):n(S,w)}return L}var wi=z_(!0),B_=z_(!1),au=Kr(null),lu=null,si=null,nf=null;function rf(){nf=si=lu=null}function sf(t){var e=au.current;Te(au),t._currentValue=e}function Wh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function hi(t,e){lu=t,nf=si=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Dt=!0),t.firstContext=null)}function sn(t){var e=t._currentValue;if(nf!==t)if(t={context:t,memoizedValue:e,next:null},si===null){if(lu===null)throw Error(F(308));si=t,lu.dependencies={lanes:0,firstContext:t}}else si=si.next=t;return e}var ps=null;function of(t){ps===null?ps=[t]:ps.push(t)}function $_(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,of(e)):(n.next=s.next,s.next=n),e.interleaved=n,Yn(t,r)}function Yn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var yr=!1;function af(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function H_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Wn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Pr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,de&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Yn(t,n)}return s=r.interleaved,s===null?(e.next=e,of(r)):(e.next=s.next,s.next=e),r.interleaved=e,Yn(t,n)}function Nl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qd(t,n)}}function Sm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function uu(t,e,n,r){var s=t.updateQueue;yr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?i=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,f=h=u=null,l=i;do{var y=l.lane,k=l.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var b=t,D=l;switch(y=e,k=n,D.tag){case 1:if(b=D.payload,typeof b=="function"){m=b.call(k,m,y);break e}m=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=D.payload,y=typeof b=="function"?b.call(k,m,y):b,y==null)break e;m=Re({},m,y);break e;case 2:yr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=s.effects,y===null?s.effects=[l]:y.push(l))}else k={eventTime:k,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=k,u=m):f=f.next=k,o|=y;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;y=l,l=y.next,y.next=null,s.lastBaseUpdate=y,s.shared.pending=null}}while(!0);if(f===null&&(u=m),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);xs|=o,t.lanes=o,t.memoizedState=m}}function xm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(F(191,s));s.call(r)}}}var ya={},kn=Kr(ya),Xo=Kr(ya),Jo=Kr(ya);function ms(t){if(t===ya)throw Error(F(174));return t}function lf(t,e){switch(ve(Jo,e),ve(Xo,t),ve(kn,ya),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ah(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ah(e,t)}Te(kn),ve(kn,e)}function Ei(){Te(kn),Te(Xo),Te(Jo)}function q_(t){ms(Jo.current);var e=ms(kn.current),n=Ah(e,t.type);e!==n&&(ve(Xo,t),ve(kn,n))}function uf(t){Xo.current===t&&(Te(kn),Te(Xo))}var Ae=Kr(0);function cu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wc=[];function cf(){for(var t=0;t<Wc.length;t++)Wc[t]._workInProgressVersionPrimary=null;Wc.length=0}var bl=nr.ReactCurrentDispatcher,Gc=nr.ReactCurrentBatchConfig,Ss=0,ke=null,ze=null,Je=null,hu=!1,Ro=!1,Zo=0,oT=0;function dt(){throw Error(F(321))}function hf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!_n(t[n],e[n]))return!1;return!0}function df(t,e,n,r,s,i){if(Ss=i,ke=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,bl.current=t===null||t.memoizedState===null?cT:hT,t=n(r,s),Ro){i=0;do{if(Ro=!1,Zo=0,25<=i)throw Error(F(301));i+=1,Je=ze=null,e.updateQueue=null,bl.current=dT,t=n(r,s)}while(Ro)}if(bl.current=du,e=ze!==null&&ze.next!==null,Ss=0,Je=ze=ke=null,hu=!1,e)throw Error(F(300));return t}function ff(){var t=Zo!==0;return Zo=0,t}function Sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?ke.memoizedState=Je=t:Je=Je.next=t,Je}function on(){if(ze===null){var t=ke.alternate;t=t!==null?t.memoizedState:null}else t=ze.next;var e=Je===null?ke.memoizedState:Je.next;if(e!==null)Je=e,ze=t;else{if(t===null)throw Error(F(310));ze=t,t={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Je===null?ke.memoizedState=Je=t:Je=Je.next=t}return Je}function ea(t,e){return typeof e=="function"?e(t):e}function Kc(t){var e=on(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=ze,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,h=i;do{var f=h.lane;if((Ss&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,ke.lanes|=f,xs|=f}h=h.next}while(h!==null&&h!==i);u===null?o=r:u.next=l,_n(r,e.memoizedState)||(Dt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,ke.lanes|=i,xs|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Qc(t){var e=on(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);_n(i,e.memoizedState)||(Dt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function W_(){}function G_(t,e){var n=ke,r=on(),s=e(),i=!_n(r.memoizedState,s);if(i&&(r.memoizedState=s,Dt=!0),r=r.queue,pf(Y_.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Je!==null&&Je.memoizedState.tag&1){if(n.flags|=2048,ta(9,Q_.bind(null,n,r,s,e),void 0,null),et===null)throw Error(F(349));Ss&30||K_(n,e,s)}return s}function K_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Q_(t,e,n,r){e.value=n,e.getSnapshot=r,X_(e)&&J_(t)}function Y_(t,e,n){return n(function(){X_(e)&&J_(t)})}function X_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!_n(t,n)}catch{return!0}}function J_(t){var e=Yn(t,1);e!==null&&gn(e,t,1,-1)}function Am(t){var e=Sn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},e.queue=t,t=t.dispatch=uT.bind(null,ke,t),[e.memoizedState,t]}function ta(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Z_(){return on().memoizedState}function Dl(t,e,n,r){var s=Sn();ke.flags|=t,s.memoizedState=ta(1|e,n,void 0,r===void 0?null:r)}function qu(t,e,n,r){var s=on();r=r===void 0?null:r;var i=void 0;if(ze!==null){var o=ze.memoizedState;if(i=o.destroy,r!==null&&hf(r,o.deps)){s.memoizedState=ta(e,n,i,r);return}}ke.flags|=t,s.memoizedState=ta(1|e,n,i,r)}function Cm(t,e){return Dl(8390656,8,t,e)}function pf(t,e){return qu(2048,8,t,e)}function ev(t,e){return qu(4,2,t,e)}function tv(t,e){return qu(4,4,t,e)}function nv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function rv(t,e,n){return n=n!=null?n.concat([t]):null,qu(4,4,nv.bind(null,e,t),n)}function mf(){}function sv(t,e){var n=on();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&hf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function iv(t,e){var n=on();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&hf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ov(t,e,n){return Ss&21?(_n(n,e)||(n=h_(),ke.lanes|=n,xs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Dt=!0),t.memoizedState=n)}function aT(t,e){var n=pe;pe=n!==0&&4>n?n:4,t(!0);var r=Gc.transition;Gc.transition={};try{t(!1),e()}finally{pe=n,Gc.transition=r}}function av(){return on().memoizedState}function lT(t,e,n){var r=br(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},lv(t))uv(e,n);else if(n=$_(t,e,n,r),n!==null){var s=xt();gn(n,t,r,s),cv(n,e,r)}}function uT(t,e,n){var r=br(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(lv(t))uv(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,_n(l,o)){var u=e.interleaved;u===null?(s.next=s,of(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=$_(t,e,s,r),n!==null&&(s=xt(),gn(n,t,r,s),cv(n,e,r))}}function lv(t){var e=t.alternate;return t===ke||e!==null&&e===ke}function uv(t,e){Ro=hu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function cv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qd(t,n)}}var du={readContext:sn,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},cT={readContext:sn,useCallback:function(t,e){return Sn().memoizedState=[t,e===void 0?null:e],t},useContext:sn,useEffect:Cm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Dl(4194308,4,nv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Dl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Dl(4,2,t,e)},useMemo:function(t,e){var n=Sn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Sn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=lT.bind(null,ke,t),[r.memoizedState,t]},useRef:function(t){var e=Sn();return t={current:t},e.memoizedState=t},useState:Am,useDebugValue:mf,useDeferredValue:function(t){return Sn().memoizedState=t},useTransition:function(){var t=Am(!1),e=t[0];return t=aT.bind(null,t[1]),Sn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ke,s=Sn();if(Ie){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),et===null)throw Error(F(349));Ss&30||K_(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Cm(Y_.bind(null,r,i,t),[t]),r.flags|=2048,ta(9,Q_.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Sn(),e=et.identifierPrefix;if(Ie){var n=$n,r=Bn;n=(r&~(1<<32-mn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Zo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=oT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},hT={readContext:sn,useCallback:sv,useContext:sn,useEffect:pf,useImperativeHandle:rv,useInsertionEffect:ev,useLayoutEffect:tv,useMemo:iv,useReducer:Kc,useRef:Z_,useState:function(){return Kc(ea)},useDebugValue:mf,useDeferredValue:function(t){var e=on();return ov(e,ze.memoizedState,t)},useTransition:function(){var t=Kc(ea)[0],e=on().memoizedState;return[t,e]},useMutableSource:W_,useSyncExternalStore:G_,useId:av,unstable_isNewReconciler:!1},dT={readContext:sn,useCallback:sv,useContext:sn,useEffect:pf,useImperativeHandle:rv,useInsertionEffect:ev,useLayoutEffect:tv,useMemo:iv,useReducer:Qc,useRef:Z_,useState:function(){return Qc(ea)},useDebugValue:mf,useDeferredValue:function(t){var e=on();return ze===null?e.memoizedState=t:ov(e,ze.memoizedState,t)},useTransition:function(){var t=Qc(ea)[0],e=on().memoizedState;return[t,e]},useMutableSource:W_,useSyncExternalStore:G_,useId:av,unstable_isNewReconciler:!1};function un(t,e){if(t&&t.defaultProps){e=Re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Gh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Wu={isMounted:function(t){return(t=t._reactInternals)?Ds(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=xt(),s=br(t),i=Wn(r,s);i.payload=e,n!=null&&(i.callback=n),e=Pr(t,i,s),e!==null&&(gn(e,t,s,r),Nl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=xt(),s=br(t),i=Wn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Pr(t,i,s),e!==null&&(gn(e,t,s,r),Nl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=xt(),r=br(t),s=Wn(n,r);s.tag=2,e!=null&&(s.callback=e),e=Pr(t,s,r),e!==null&&(gn(e,t,r,n),Nl(e,t,r))}};function km(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Go(n,r)||!Go(s,i):!0}function hv(t,e,n){var r=!1,s=Ur,i=e.contextType;return typeof i=="object"&&i!==null?i=sn(i):(s=Mt(e)?Ts:_t.current,r=e.contextTypes,i=(r=r!=null)?_i(t,s):Ur),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Rm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Wu.enqueueReplaceState(e,e.state,null)}function Kh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},af(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=sn(i):(i=Mt(e)?Ts:_t.current,s.context=_i(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Gh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Wu.enqueueReplaceState(s,s.state,null),uu(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Ti(t,e){try{var n="",r=e;do n+=U1(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Yc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Qh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var fT=typeof WeakMap=="function"?WeakMap:Map;function dv(t,e,n){n=Wn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){pu||(pu=!0,id=r),Qh(t,e)},n}function fv(t,e,n){n=Wn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Qh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Qh(t,e),typeof r!="function"&&(Nr===null?Nr=new Set([this]):Nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Pm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new fT;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=CT.bind(null,t,e,n),e.then(t,t))}function Nm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function bm(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Wn(-1,1),e.tag=2,Pr(n,e,1))),n.lanes|=1),t)}var pT=nr.ReactCurrentOwner,Dt=!1;function St(t,e,n,r){e.child=t===null?B_(e,null,n,r):wi(e,t.child,n,r)}function Dm(t,e,n,r,s){n=n.render;var i=e.ref;return hi(e,s),r=df(t,e,n,r,i,s),n=ff(),t!==null&&!Dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Xn(t,e,s)):(Ie&&n&&Zd(e),e.flags|=1,St(t,e,r,s),e.child)}function Vm(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!If(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,pv(t,e,i,r,s)):(t=Ll(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Go,n(o,r)&&t.ref===e.ref)return Xn(t,e,s)}return e.flags|=1,t=Dr(i,r),t.ref=e.ref,t.return=e,e.child=t}function pv(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Go(i,r)&&t.ref===e.ref)if(Dt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Dt=!0);else return e.lanes=t.lanes,Xn(t,e,s)}return Yh(t,e,n,r,s)}function mv(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(oi,zt),zt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ve(oi,zt),zt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ve(oi,zt),zt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,ve(oi,zt),zt|=r;return St(t,e,s,n),e.child}function gv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Yh(t,e,n,r,s){var i=Mt(n)?Ts:_t.current;return i=_i(e,i),hi(e,s),n=df(t,e,n,r,i,s),r=ff(),t!==null&&!Dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Xn(t,e,s)):(Ie&&r&&Zd(e),e.flags|=1,St(t,e,n,s),e.child)}function Mm(t,e,n,r,s){if(Mt(n)){var i=!0;su(e)}else i=!1;if(hi(e,s),e.stateNode===null)Vl(t,e),hv(e,n,r),Kh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=sn(h):(h=Mt(n)?Ts:_t.current,h=_i(e,h));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Rm(e,o,r,h),yr=!1;var y=e.memoizedState;o.state=y,uu(e,r,o,s),u=e.memoizedState,l!==r||y!==u||Vt.current||yr?(typeof f=="function"&&(Gh(e,n,f,r),u=e.memoizedState),(l=yr||km(e,n,l,r,y,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,H_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:un(e.type,l),o.props=h,m=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=sn(u):(u=Mt(n)?Ts:_t.current,u=_i(e,u));var k=n.getDerivedStateFromProps;(f=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||y!==u)&&Rm(e,o,r,u),yr=!1,y=e.memoizedState,o.state=y,uu(e,r,o,s);var b=e.memoizedState;l!==m||y!==b||Vt.current||yr?(typeof k=="function"&&(Gh(e,n,k,r),b=e.memoizedState),(h=yr||km(e,n,h,r,y,b,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,b,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,b,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=b),o.props=r,o.state=b,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return Xh(t,e,n,r,i,s)}function Xh(t,e,n,r,s,i){gv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&wm(e,n,!1),Xn(t,e,i);r=e.stateNode,pT.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=wi(e,t.child,null,i),e.child=wi(e,null,l,i)):St(t,e,l,i),e.memoizedState=r.state,s&&wm(e,n,!0),e.child}function yv(t){var e=t.stateNode;e.pendingContext?vm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&vm(t,e.context,!1),lf(t,e.containerInfo)}function Om(t,e,n,r,s){return vi(),tf(s),e.flags|=256,St(t,e,n,r),e.child}var Jh={dehydrated:null,treeContext:null,retryLane:0};function Zh(t){return{baseLanes:t,cachePool:null,transitions:null}}function _v(t,e,n){var r=e.pendingProps,s=Ae.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ve(Ae,s&1),t===null)return qh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Qu(o,r,0,null),t=vs(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Zh(n),e.memoizedState=Jh,t):gf(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return mT(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Dr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=Dr(l,i):(i=vs(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Zh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Jh,r}return i=t.child,t=i.sibling,r=Dr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function gf(t,e){return e=Qu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ml(t,e,n,r){return r!==null&&tf(r),wi(e,t.child,null,n),t=gf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function mT(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Yc(Error(F(422))),ml(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Qu({mode:"visible",children:r.children},s,0,null),i=vs(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&wi(e,t.child,null,o),e.child.memoizedState=Zh(o),e.memoizedState=Jh,i);if(!(e.mode&1))return ml(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(F(419)),r=Yc(i,r,void 0),ml(t,e,o,r)}if(l=(o&t.childLanes)!==0,Dt||l){if(r=et,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Yn(t,s),gn(r,t,s,-1))}return Tf(),r=Yc(Error(F(421))),ml(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=kT.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Bt=Rr(s.nextSibling),$t=e,Ie=!0,hn=null,t!==null&&(Jt[Zt++]=Bn,Jt[Zt++]=$n,Jt[Zt++]=Is,Bn=t.id,$n=t.overflow,Is=e),e=gf(e,r.children),e.flags|=4096,e)}function Lm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Wh(t.return,e,n)}function Xc(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function vv(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(St(t,e,r.children,n),r=Ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lm(t,n,e);else if(t.tag===19)Lm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ve(Ae,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&cu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Xc(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&cu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Xc(e,!0,n,null,i);break;case"together":Xc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Vl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Xn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),xs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function gT(t,e,n){switch(e.tag){case 3:yv(e),vi();break;case 5:q_(e);break;case 1:Mt(e.type)&&su(e);break;case 4:lf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;ve(au,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ve(Ae,Ae.current&1),e.flags|=128,null):n&e.child.childLanes?_v(t,e,n):(ve(Ae,Ae.current&1),t=Xn(t,e,n),t!==null?t.sibling:null);ve(Ae,Ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return vv(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ve(Ae,Ae.current),r)break;return null;case 22:case 23:return e.lanes=0,mv(t,e,n)}return Xn(t,e,n)}var wv,ed,Ev,Tv;wv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ed=function(){};Ev=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,ms(kn.current);var i=null;switch(n){case"input":s=Th(t,s),r=Th(t,r),i=[];break;case"select":s=Re({},s,{value:void 0}),r=Re({},r,{value:void 0}),i=[];break;case"textarea":s=xh(t,s),r=xh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=nu)}Ch(n,r);var o;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var l=s[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Uo.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var u=r[h];if(l=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Uo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&we("scroll",t),i||l===u||(i=[])):(i=i||[]).push(h,u))}n&&(i=i||[]).push("style",n);var h=i;(e.updateQueue=h)&&(e.flags|=4)}};Tv=function(t,e,n,r){n!==r&&(e.flags|=4)};function po(t,e){if(!Ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function yT(t,e,n){var r=e.pendingProps;switch(ef(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(e),null;case 1:return Mt(e.type)&&ru(),ft(e),null;case 3:return r=e.stateNode,Ei(),Te(Vt),Te(_t),cf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(fl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,hn!==null&&(ld(hn),hn=null))),ed(t,e),ft(e),null;case 5:uf(e);var s=ms(Jo.current);if(n=e.type,t!==null&&e.stateNode!=null)Ev(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return ft(e),null}if(t=ms(kn.current),fl(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[An]=e,r[Yo]=i,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(s=0;s<vo.length;s++)we(vo[s],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":Wp(r,i),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},we("invalid",r);break;case"textarea":Kp(r,i),we("invalid",r)}Ch(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&dl(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&dl(r.textContent,l,t),s=["children",""+l]):Uo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":sl(r),Gp(r,i,!0);break;case"textarea":sl(r),Qp(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=nu)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Yy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[An]=e,t[Yo]=r,wv(t,e,!1,!1),e.stateNode=t;e:{switch(o=kh(n,r),n){case"dialog":we("cancel",t),we("close",t),s=r;break;case"iframe":case"object":case"embed":we("load",t),s=r;break;case"video":case"audio":for(s=0;s<vo.length;s++)we(vo[s],t);s=r;break;case"source":we("error",t),s=r;break;case"img":case"image":case"link":we("error",t),we("load",t),s=r;break;case"details":we("toggle",t),s=r;break;case"input":Wp(t,r),s=Th(t,r),we("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Re({},r,{value:void 0}),we("invalid",t);break;case"textarea":Kp(t,r),s=xh(t,r),we("invalid",t);break;default:s=r}Ch(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?Zy(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Xy(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&zo(t,u):typeof u=="number"&&zo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Uo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&we("scroll",t):u!=null&&Fd(t,i,u,o))}switch(n){case"input":sl(t),Gp(t,r,!1);break;case"textarea":sl(t),Qp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Fr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?ai(t,!!r.multiple,i,!1):r.defaultValue!=null&&ai(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=nu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ft(e),null;case 6:if(t&&e.stateNode!=null)Tv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=ms(Jo.current),ms(kn.current),fl(e)){if(r=e.stateNode,n=e.memoizedProps,r[An]=e,(i=r.nodeValue!==n)&&(t=$t,t!==null))switch(t.tag){case 3:dl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&dl(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[An]=e,e.stateNode=r}return ft(e),null;case 13:if(Te(Ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&Bt!==null&&e.mode&1&&!(e.flags&128))U_(),vi(),e.flags|=98560,i=!1;else if(i=fl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(F(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[An]=e}else vi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ft(e),i=!1}else hn!==null&&(ld(hn),hn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ae.current&1?$e===0&&($e=3):Tf())),e.updateQueue!==null&&(e.flags|=4),ft(e),null);case 4:return Ei(),ed(t,e),t===null&&Ko(e.stateNode.containerInfo),ft(e),null;case 10:return sf(e.type._context),ft(e),null;case 17:return Mt(e.type)&&ru(),ft(e),null;case 19:if(Te(Ae),i=e.memoizedState,i===null)return ft(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)po(i,!1);else{if($e!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=cu(t),o!==null){for(e.flags|=128,po(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ve(Ae,Ae.current&1|2),e.child}t=t.sibling}i.tail!==null&&Me()>Ii&&(e.flags|=128,r=!0,po(i,!1),e.lanes=4194304)}else{if(!r)if(t=cu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),po(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ie)return ft(e),null}else 2*Me()-i.renderingStartTime>Ii&&n!==1073741824&&(e.flags|=128,r=!0,po(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Me(),e.sibling=null,n=Ae.current,ve(Ae,r?n&1|2:n&1),e):(ft(e),null);case 22:case 23:return Ef(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?zt&1073741824&&(ft(e),e.subtreeFlags&6&&(e.flags|=8192)):ft(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function _T(t,e){switch(ef(e),e.tag){case 1:return Mt(e.type)&&ru(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ei(),Te(Vt),Te(_t),cf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return uf(e),null;case 13:if(Te(Ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));vi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Te(Ae),null;case 4:return Ei(),null;case 10:return sf(e.type._context),null;case 22:case 23:return Ef(),null;case 24:return null;default:return null}}var gl=!1,gt=!1,vT=typeof WeakSet=="function"?WeakSet:Set,G=null;function ii(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){be(t,e,r)}else n.current=null}function td(t,e,n){try{n()}catch(r){be(t,e,r)}}var jm=!1;function wT(t,e){if(jh=Zl,t=C_(),Jd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,m=t,y=null;t:for(;;){for(var k;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(k=m.firstChild)!==null;)y=m,m=k;for(;;){if(m===t)break t;if(y===n&&++h===s&&(l=o),y===i&&++f===r&&(u=o),(k=m.nextSibling)!==null)break;m=y,y=m.parentNode}m=k}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fh={focusedElem:t,selectionRange:n},Zl=!1,G=e;G!==null;)if(e=G,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,G=t;else for(;G!==null;){e=G;try{var b=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var D=b.memoizedProps,L=b.memoizedState,S=e.stateNode,w=S.getSnapshotBeforeUpdate(e.elementType===e.type?D:un(e.type,D),L);S.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(M){be(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,G=t;break}G=e.return}return b=jm,jm=!1,b}function Po(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&td(e,n,i)}s=s.next}while(s!==r)}}function Gu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function nd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Iv(t){var e=t.alternate;e!==null&&(t.alternate=null,Iv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[An],delete e[Yo],delete e[Bh],delete e[nT],delete e[rT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Sv(t){return t.tag===5||t.tag===3||t.tag===4}function Fm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Sv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nu));else if(r!==4&&(t=t.child,t!==null))for(rd(t,e,n),t=t.sibling;t!==null;)rd(t,e,n),t=t.sibling}function sd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(sd(t,e,n),t=t.sibling;t!==null;)sd(t,e,n),t=t.sibling}var it=null,cn=!1;function pr(t,e,n){for(n=n.child;n!==null;)xv(t,e,n),n=n.sibling}function xv(t,e,n){if(Cn&&typeof Cn.onCommitFiberUnmount=="function")try{Cn.onCommitFiberUnmount(Fu,n)}catch{}switch(n.tag){case 5:gt||ii(n,e);case 6:var r=it,s=cn;it=null,pr(t,e,n),it=r,cn=s,it!==null&&(cn?(t=it,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):it.removeChild(n.stateNode));break;case 18:it!==null&&(cn?(t=it,n=n.stateNode,t.nodeType===8?Hc(t.parentNode,n):t.nodeType===1&&Hc(t,n),qo(t)):Hc(it,n.stateNode));break;case 4:r=it,s=cn,it=n.stateNode.containerInfo,cn=!0,pr(t,e,n),it=r,cn=s;break;case 0:case 11:case 14:case 15:if(!gt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&td(n,e,o),s=s.next}while(s!==r)}pr(t,e,n);break;case 1:if(!gt&&(ii(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){be(n,e,l)}pr(t,e,n);break;case 21:pr(t,e,n);break;case 22:n.mode&1?(gt=(r=gt)||n.memoizedState!==null,pr(t,e,n),gt=r):pr(t,e,n);break;default:pr(t,e,n)}}function Um(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new vT),e.forEach(function(r){var s=RT.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function ln(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:it=l.stateNode,cn=!1;break e;case 3:it=l.stateNode.containerInfo,cn=!0;break e;case 4:it=l.stateNode.containerInfo,cn=!0;break e}l=l.return}if(it===null)throw Error(F(160));xv(i,o,s),it=null,cn=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(h){be(s,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Av(e,t),e=e.sibling}function Av(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ln(e,t),In(t),r&4){try{Po(3,t,t.return),Gu(3,t)}catch(D){be(t,t.return,D)}try{Po(5,t,t.return)}catch(D){be(t,t.return,D)}}break;case 1:ln(e,t),In(t),r&512&&n!==null&&ii(n,n.return);break;case 5:if(ln(e,t),In(t),r&512&&n!==null&&ii(n,n.return),t.flags&32){var s=t.stateNode;try{zo(s,"")}catch(D){be(t,t.return,D)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Ky(s,i),kh(l,o);var h=kh(l,i);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?Zy(s,m):f==="dangerouslySetInnerHTML"?Xy(s,m):f==="children"?zo(s,m):Fd(s,f,m,h)}switch(l){case"input":Ih(s,i);break;case"textarea":Qy(s,i);break;case"select":var y=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?ai(s,!!i.multiple,k,!1):y!==!!i.multiple&&(i.defaultValue!=null?ai(s,!!i.multiple,i.defaultValue,!0):ai(s,!!i.multiple,i.multiple?[]:"",!1))}s[Yo]=i}catch(D){be(t,t.return,D)}}break;case 6:if(ln(e,t),In(t),r&4){if(t.stateNode===null)throw Error(F(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(D){be(t,t.return,D)}}break;case 3:if(ln(e,t),In(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qo(e.containerInfo)}catch(D){be(t,t.return,D)}break;case 4:ln(e,t),In(t);break;case 13:ln(e,t),In(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(vf=Me())),r&4&&Um(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(gt=(h=gt)||f,ln(e,t),gt=h):ln(e,t),In(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(G=t,f=t.child;f!==null;){for(m=G=f;G!==null;){switch(y=G,k=y.child,y.tag){case 0:case 11:case 14:case 15:Po(4,y,y.return);break;case 1:ii(y,y.return);var b=y.stateNode;if(typeof b.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,b.props=e.memoizedProps,b.state=e.memoizedState,b.componentWillUnmount()}catch(D){be(r,n,D)}}break;case 5:ii(y,y.return);break;case 22:if(y.memoizedState!==null){Bm(m);continue}}k!==null?(k.return=y,G=k):Bm(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{s=m.stateNode,h?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Jy("display",o))}catch(D){be(t,t.return,D)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(D){be(t,t.return,D)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:ln(e,t),In(t),r&4&&Um(t);break;case 21:break;default:ln(e,t),In(t)}}function In(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Sv(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(zo(s,""),r.flags&=-33);var i=Fm(t);sd(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Fm(t);rd(t,l,o);break;default:throw Error(F(161))}}catch(u){be(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ET(t,e,n){G=t,Cv(t)}function Cv(t,e,n){for(var r=(t.mode&1)!==0;G!==null;){var s=G,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||gl;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||gt;l=gl;var h=gt;if(gl=o,(gt=u)&&!h)for(G=s;G!==null;)o=G,u=o.child,o.tag===22&&o.memoizedState!==null?$m(s):u!==null?(u.return=o,G=u):$m(s);for(;i!==null;)G=i,Cv(i),i=i.sibling;G=s,gl=l,gt=h}zm(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,G=i):zm(t)}}function zm(t){for(;G!==null;){var e=G;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:gt||Gu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!gt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:un(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&xm(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}xm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&qo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}gt||e.flags&512&&nd(e)}catch(y){be(e,e.return,y)}}if(e===t){G=null;break}if(n=e.sibling,n!==null){n.return=e.return,G=n;break}G=e.return}}function Bm(t){for(;G!==null;){var e=G;if(e===t){G=null;break}var n=e.sibling;if(n!==null){n.return=e.return,G=n;break}G=e.return}}function $m(t){for(;G!==null;){var e=G;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Gu(4,e)}catch(u){be(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){be(e,s,u)}}var i=e.return;try{nd(e)}catch(u){be(e,i,u)}break;case 5:var o=e.return;try{nd(e)}catch(u){be(e,o,u)}}}catch(u){be(e,e.return,u)}if(e===t){G=null;break}var l=e.sibling;if(l!==null){l.return=e.return,G=l;break}G=e.return}}var TT=Math.ceil,fu=nr.ReactCurrentDispatcher,yf=nr.ReactCurrentOwner,rn=nr.ReactCurrentBatchConfig,de=0,et=null,je=null,lt=0,zt=0,oi=Kr(0),$e=0,na=null,xs=0,Ku=0,_f=0,No=null,bt=null,vf=0,Ii=1/0,Fn=null,pu=!1,id=null,Nr=null,yl=!1,Sr=null,mu=0,bo=0,od=null,Ml=-1,Ol=0;function xt(){return de&6?Me():Ml!==-1?Ml:Ml=Me()}function br(t){return t.mode&1?de&2&&lt!==0?lt&-lt:iT.transition!==null?(Ol===0&&(Ol=h_()),Ol):(t=pe,t!==0||(t=window.event,t=t===void 0?16:__(t.type)),t):1}function gn(t,e,n,r){if(50<bo)throw bo=0,od=null,Error(F(185));pa(t,n,r),(!(de&2)||t!==et)&&(t===et&&(!(de&2)&&(Ku|=n),$e===4&&vr(t,lt)),Ot(t,r),n===1&&de===0&&!(e.mode&1)&&(Ii=Me()+500,Hu&&Qr()))}function Ot(t,e){var n=t.callbackNode;iE(t,e);var r=Jl(t,t===et?lt:0);if(r===0)n!==null&&Jp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Jp(n),e===1)t.tag===0?sT(Hm.bind(null,t)):L_(Hm.bind(null,t)),eT(function(){!(de&6)&&Qr()}),n=null;else{switch(d_(r)){case 1:n=Hd;break;case 4:n=u_;break;case 16:n=Xl;break;case 536870912:n=c_;break;default:n=Xl}n=Mv(n,kv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function kv(t,e){if(Ml=-1,Ol=0,de&6)throw Error(F(327));var n=t.callbackNode;if(di()&&t.callbackNode!==n)return null;var r=Jl(t,t===et?lt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=gu(t,r);else{e=r;var s=de;de|=2;var i=Pv();(et!==t||lt!==e)&&(Fn=null,Ii=Me()+500,_s(t,e));do try{xT();break}catch(l){Rv(t,l)}while(!0);rf(),fu.current=i,de=s,je!==null?e=0:(et=null,lt=0,e=$e)}if(e!==0){if(e===2&&(s=Dh(t),s!==0&&(r=s,e=ad(t,s))),e===1)throw n=na,_s(t,0),vr(t,r),Ot(t,Me()),n;if(e===6)vr(t,r);else{if(s=t.current.alternate,!(r&30)&&!IT(s)&&(e=gu(t,r),e===2&&(i=Dh(t),i!==0&&(r=i,e=ad(t,i))),e===1))throw n=na,_s(t,0),vr(t,r),Ot(t,Me()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:hs(t,bt,Fn);break;case 3:if(vr(t,r),(r&130023424)===r&&(e=vf+500-Me(),10<e)){if(Jl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){xt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=zh(hs.bind(null,t,bt,Fn),e);break}hs(t,bt,Fn);break;case 4:if(vr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-mn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*TT(r/1960))-r,10<r){t.timeoutHandle=zh(hs.bind(null,t,bt,Fn),r);break}hs(t,bt,Fn);break;case 5:hs(t,bt,Fn);break;default:throw Error(F(329))}}}return Ot(t,Me()),t.callbackNode===n?kv.bind(null,t):null}function ad(t,e){var n=No;return t.current.memoizedState.isDehydrated&&(_s(t,e).flags|=256),t=gu(t,e),t!==2&&(e=bt,bt=n,e!==null&&ld(e)),t}function ld(t){bt===null?bt=t:bt.push.apply(bt,t)}function IT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!_n(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function vr(t,e){for(e&=~_f,e&=~Ku,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-mn(e),r=1<<n;t[n]=-1,e&=~r}}function Hm(t){if(de&6)throw Error(F(327));di();var e=Jl(t,0);if(!(e&1))return Ot(t,Me()),null;var n=gu(t,e);if(t.tag!==0&&n===2){var r=Dh(t);r!==0&&(e=r,n=ad(t,r))}if(n===1)throw n=na,_s(t,0),vr(t,e),Ot(t,Me()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,hs(t,bt,Fn),Ot(t,Me()),null}function wf(t,e){var n=de;de|=1;try{return t(e)}finally{de=n,de===0&&(Ii=Me()+500,Hu&&Qr())}}function As(t){Sr!==null&&Sr.tag===0&&!(de&6)&&di();var e=de;de|=1;var n=rn.transition,r=pe;try{if(rn.transition=null,pe=1,t)return t()}finally{pe=r,rn.transition=n,de=e,!(de&6)&&Qr()}}function Ef(){zt=oi.current,Te(oi)}function _s(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ZE(n)),je!==null)for(n=je.return;n!==null;){var r=n;switch(ef(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ru();break;case 3:Ei(),Te(Vt),Te(_t),cf();break;case 5:uf(r);break;case 4:Ei();break;case 13:Te(Ae);break;case 19:Te(Ae);break;case 10:sf(r.type._context);break;case 22:case 23:Ef()}n=n.return}if(et=t,je=t=Dr(t.current,null),lt=zt=e,$e=0,na=null,_f=Ku=xs=0,bt=No=null,ps!==null){for(e=0;e<ps.length;e++)if(n=ps[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}ps=null}return t}function Rv(t,e){do{var n=je;try{if(rf(),bl.current=du,hu){for(var r=ke.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}hu=!1}if(Ss=0,Je=ze=ke=null,Ro=!1,Zo=0,yf.current=null,n===null||n.return===null){$e=1,na=e,je=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=lt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var k=Nm(o);if(k!==null){k.flags&=-257,bm(k,o,l,i,e),k.mode&1&&Pm(i,h,e),e=k,u=h;var b=e.updateQueue;if(b===null){var D=new Set;D.add(u),e.updateQueue=D}else b.add(u);break e}else{if(!(e&1)){Pm(i,h,e),Tf();break e}u=Error(F(426))}}else if(Ie&&l.mode&1){var L=Nm(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),bm(L,o,l,i,e),tf(Ti(u,l));break e}}i=u=Ti(u,l),$e!==4&&($e=2),No===null?No=[i]:No.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var S=dv(i,u,e);Sm(i,S);break e;case 1:l=u;var w=i.type,x=i.stateNode;if(!(i.flags&128)&&(typeof w.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Nr===null||!Nr.has(x)))){i.flags|=65536,e&=-e,i.lanes|=e;var M=fv(i,l,e);Sm(i,M);break e}}i=i.return}while(i!==null)}bv(n)}catch(U){e=U,je===n&&n!==null&&(je=n=n.return);continue}break}while(!0)}function Pv(){var t=fu.current;return fu.current=du,t===null?du:t}function Tf(){($e===0||$e===3||$e===2)&&($e=4),et===null||!(xs&268435455)&&!(Ku&268435455)||vr(et,lt)}function gu(t,e){var n=de;de|=2;var r=Pv();(et!==t||lt!==e)&&(Fn=null,_s(t,e));do try{ST();break}catch(s){Rv(t,s)}while(!0);if(rf(),de=n,fu.current=r,je!==null)throw Error(F(261));return et=null,lt=0,$e}function ST(){for(;je!==null;)Nv(je)}function xT(){for(;je!==null&&!Y1();)Nv(je)}function Nv(t){var e=Vv(t.alternate,t,zt);t.memoizedProps=t.pendingProps,e===null?bv(t):je=e,yf.current=null}function bv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=_T(n,e),n!==null){n.flags&=32767,je=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$e=6,je=null;return}}else if(n=yT(n,e,zt),n!==null){je=n;return}if(e=e.sibling,e!==null){je=e;return}je=e=t}while(e!==null);$e===0&&($e=5)}function hs(t,e,n){var r=pe,s=rn.transition;try{rn.transition=null,pe=1,AT(t,e,n,r)}finally{rn.transition=s,pe=r}return null}function AT(t,e,n,r){do di();while(Sr!==null);if(de&6)throw Error(F(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(oE(t,i),t===et&&(je=et=null,lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yl||(yl=!0,Mv(Xl,function(){return di(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=rn.transition,rn.transition=null;var o=pe;pe=1;var l=de;de|=4,yf.current=null,wT(t,n),Av(n,t),WE(Fh),Zl=!!jh,Fh=jh=null,t.current=n,ET(n),X1(),de=l,pe=o,rn.transition=i}else t.current=n;if(yl&&(yl=!1,Sr=t,mu=s),i=t.pendingLanes,i===0&&(Nr=null),eE(n.stateNode),Ot(t,Me()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(pu)throw pu=!1,t=id,id=null,t;return mu&1&&t.tag!==0&&di(),i=t.pendingLanes,i&1?t===od?bo++:(bo=0,od=t):bo=0,Qr(),null}function di(){if(Sr!==null){var t=d_(mu),e=rn.transition,n=pe;try{if(rn.transition=null,pe=16>t?16:t,Sr===null)var r=!1;else{if(t=Sr,Sr=null,mu=0,de&6)throw Error(F(331));var s=de;for(de|=4,G=t.current;G!==null;){var i=G,o=i.child;if(G.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(G=h;G!==null;){var f=G;switch(f.tag){case 0:case 11:case 15:Po(8,f,i)}var m=f.child;if(m!==null)m.return=f,G=m;else for(;G!==null;){f=G;var y=f.sibling,k=f.return;if(Iv(f),f===h){G=null;break}if(y!==null){y.return=k,G=y;break}G=k}}}var b=i.alternate;if(b!==null){var D=b.child;if(D!==null){b.child=null;do{var L=D.sibling;D.sibling=null,D=L}while(D!==null)}}G=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,G=o;else e:for(;G!==null;){if(i=G,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Po(9,i,i.return)}var S=i.sibling;if(S!==null){S.return=i.return,G=S;break e}G=i.return}}var w=t.current;for(G=w;G!==null;){o=G;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,G=x;else e:for(o=w;G!==null;){if(l=G,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Gu(9,l)}}catch(U){be(l,l.return,U)}if(l===o){G=null;break e}var M=l.sibling;if(M!==null){M.return=l.return,G=M;break e}G=l.return}}if(de=s,Qr(),Cn&&typeof Cn.onPostCommitFiberRoot=="function")try{Cn.onPostCommitFiberRoot(Fu,t)}catch{}r=!0}return r}finally{pe=n,rn.transition=e}}return!1}function qm(t,e,n){e=Ti(n,e),e=dv(t,e,1),t=Pr(t,e,1),e=xt(),t!==null&&(pa(t,1,e),Ot(t,e))}function be(t,e,n){if(t.tag===3)qm(t,t,n);else for(;e!==null;){if(e.tag===3){qm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nr===null||!Nr.has(r))){t=Ti(n,t),t=fv(e,t,1),e=Pr(e,t,1),t=xt(),e!==null&&(pa(e,1,t),Ot(e,t));break}}e=e.return}}function CT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=xt(),t.pingedLanes|=t.suspendedLanes&n,et===t&&(lt&n)===n&&($e===4||$e===3&&(lt&130023424)===lt&&500>Me()-vf?_s(t,0):_f|=n),Ot(t,e)}function Dv(t,e){e===0&&(t.mode&1?(e=al,al<<=1,!(al&130023424)&&(al=4194304)):e=1);var n=xt();t=Yn(t,e),t!==null&&(pa(t,e,n),Ot(t,n))}function kT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Dv(t,n)}function RT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),Dv(t,n)}var Vv;Vv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Vt.current)Dt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Dt=!1,gT(t,e,n);Dt=!!(t.flags&131072)}else Dt=!1,Ie&&e.flags&1048576&&j_(e,ou,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Vl(t,e),t=e.pendingProps;var s=_i(e,_t.current);hi(e,n),s=df(null,e,r,t,s,n);var i=ff();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Mt(r)?(i=!0,su(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,af(e),s.updater=Wu,e.stateNode=s,s._reactInternals=e,Kh(e,r,t,n),e=Xh(null,e,r,!0,i,n)):(e.tag=0,Ie&&i&&Zd(e),St(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Vl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=NT(r),t=un(r,t),s){case 0:e=Yh(null,e,r,t,n);break e;case 1:e=Mm(null,e,r,t,n);break e;case 11:e=Dm(null,e,r,t,n);break e;case 14:e=Vm(null,e,r,un(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:un(r,s),Yh(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:un(r,s),Mm(t,e,r,s,n);case 3:e:{if(yv(e),t===null)throw Error(F(387));r=e.pendingProps,i=e.memoizedState,s=i.element,H_(t,e),uu(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Ti(Error(F(423)),e),e=Om(t,e,r,n,s);break e}else if(r!==s){s=Ti(Error(F(424)),e),e=Om(t,e,r,n,s);break e}else for(Bt=Rr(e.stateNode.containerInfo.firstChild),$t=e,Ie=!0,hn=null,n=B_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vi(),r===s){e=Xn(t,e,n);break e}St(t,e,r,n)}e=e.child}return e;case 5:return q_(e),t===null&&qh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Uh(r,s)?o=null:i!==null&&Uh(r,i)&&(e.flags|=32),gv(t,e),St(t,e,o,n),e.child;case 6:return t===null&&qh(e),null;case 13:return _v(t,e,n);case 4:return lf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=wi(e,null,r,n):St(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:un(r,s),Dm(t,e,r,s,n);case 7:return St(t,e,e.pendingProps,n),e.child;case 8:return St(t,e,e.pendingProps.children,n),e.child;case 12:return St(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,ve(au,r._currentValue),r._currentValue=o,i!==null)if(_n(i.value,o)){if(i.children===s.children&&!Vt.current){e=Xn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Wn(-1,n&-n),u.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Wh(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Wh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}St(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,hi(e,n),s=sn(s),r=r(s),e.flags|=1,St(t,e,r,n),e.child;case 14:return r=e.type,s=un(r,e.pendingProps),s=un(r.type,s),Vm(t,e,r,s,n);case 15:return pv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:un(r,s),Vl(t,e),e.tag=1,Mt(r)?(t=!0,su(e)):t=!1,hi(e,n),hv(e,r,s),Kh(e,r,s,n),Xh(null,e,r,!0,t,n);case 19:return vv(t,e,n);case 22:return mv(t,e,n)}throw Error(F(156,e.tag))};function Mv(t,e){return l_(t,e)}function PT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nn(t,e,n,r){return new PT(t,e,n,r)}function If(t){return t=t.prototype,!(!t||!t.isReactComponent)}function NT(t){if(typeof t=="function")return If(t)?1:0;if(t!=null){if(t=t.$$typeof,t===zd)return 11;if(t===Bd)return 14}return 2}function Dr(t,e){var n=t.alternate;return n===null?(n=nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ll(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")If(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ys:return vs(n.children,s,i,e);case Ud:o=8,s|=8;break;case _h:return t=nn(12,n,e,s|2),t.elementType=_h,t.lanes=i,t;case vh:return t=nn(13,n,e,s),t.elementType=vh,t.lanes=i,t;case wh:return t=nn(19,n,e,s),t.elementType=wh,t.lanes=i,t;case qy:return Qu(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $y:o=10;break e;case Hy:o=9;break e;case zd:o=11;break e;case Bd:o=14;break e;case gr:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=nn(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function vs(t,e,n,r){return t=nn(7,t,r,e),t.lanes=n,t}function Qu(t,e,n,r){return t=nn(22,t,r,e),t.elementType=qy,t.lanes=n,t.stateNode={isHidden:!1},t}function Jc(t,e,n){return t=nn(6,t,null,e),t.lanes=n,t}function Zc(t,e,n){return e=nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function bT(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dc(0),this.expirationTimes=Dc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Sf(t,e,n,r,s,i,o,l,u){return t=new bT(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=nn(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},af(i),t}function DT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Ov(t){if(!t)return Ur;t=t._reactInternals;e:{if(Ds(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Mt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(Mt(n))return O_(t,n,e)}return e}function Lv(t,e,n,r,s,i,o,l,u){return t=Sf(n,r,!0,t,s,i,o,l,u),t.context=Ov(null),n=t.current,r=xt(),s=br(n),i=Wn(r,s),i.callback=e??null,Pr(n,i,s),t.current.lanes=s,pa(t,s,r),Ot(t,r),t}function Yu(t,e,n,r){var s=e.current,i=xt(),o=br(s);return n=Ov(n),e.context===null?e.context=n:e.pendingContext=n,e=Wn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Pr(s,e,o),t!==null&&(gn(t,s,o,i),Nl(t,s,o)),o}function yu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Wm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function xf(t,e){Wm(t,e),(t=t.alternate)&&Wm(t,e)}function VT(){return null}var jv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Af(t){this._internalRoot=t}Xu.prototype.render=Af.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Yu(t,e,null,null)};Xu.prototype.unmount=Af.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;As(function(){Yu(null,t,null,null)}),e[Qn]=null}};function Xu(t){this._internalRoot=t}Xu.prototype.unstable_scheduleHydration=function(t){if(t){var e=m_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<_r.length&&e!==0&&e<_r[n].priority;n++);_r.splice(n,0,t),n===0&&y_(t)}};function Cf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ju(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Gm(){}function MT(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var h=yu(o);i.call(h)}}var o=Lv(e,r,t,0,null,!1,!1,"",Gm);return t._reactRootContainer=o,t[Qn]=o.current,Ko(t.nodeType===8?t.parentNode:t),As(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var h=yu(u);l.call(h)}}var u=Sf(t,0,!1,null,null,!1,!1,"",Gm);return t._reactRootContainer=u,t[Qn]=u.current,Ko(t.nodeType===8?t.parentNode:t),As(function(){Yu(e,u,n,r)}),u}function Zu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=yu(o);l.call(u)}}Yu(e,o,t,s)}else o=MT(n,e,t,s,r);return yu(o)}f_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=_o(e.pendingLanes);n!==0&&(qd(e,n|1),Ot(e,Me()),!(de&6)&&(Ii=Me()+500,Qr()))}break;case 13:As(function(){var r=Yn(t,1);if(r!==null){var s=xt();gn(r,t,1,s)}}),xf(t,1)}};Wd=function(t){if(t.tag===13){var e=Yn(t,134217728);if(e!==null){var n=xt();gn(e,t,134217728,n)}xf(t,134217728)}};p_=function(t){if(t.tag===13){var e=br(t),n=Yn(t,e);if(n!==null){var r=xt();gn(n,t,e,r)}xf(t,e)}};m_=function(){return pe};g_=function(t,e){var n=pe;try{return pe=t,e()}finally{pe=n}};Ph=function(t,e,n){switch(e){case"input":if(Ih(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=$u(r);if(!s)throw Error(F(90));Gy(r),Ih(r,s)}}}break;case"textarea":Qy(t,n);break;case"select":e=n.value,e!=null&&ai(t,!!n.multiple,e,!1)}};n_=wf;r_=As;var OT={usingClientEntryPoint:!1,Events:[ga,ei,$u,e_,t_,wf]},mo={findFiberByHostInstance:fs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},LT={bundleType:mo.bundleType,version:mo.version,rendererPackageName:mo.rendererPackageName,rendererConfig:mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=o_(t),t===null?null:t.stateNode},findFiberByHostInstance:mo.findFiberByHostInstance||VT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_l.isDisabled&&_l.supportsFiber)try{Fu=_l.inject(LT),Cn=_l}catch{}}qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OT;qt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cf(e))throw Error(F(200));return DT(t,e,null,n)};qt.createRoot=function(t,e){if(!Cf(t))throw Error(F(299));var n=!1,r="",s=jv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Sf(t,1,!1,null,null,n,!1,r,s),t[Qn]=e.current,Ko(t.nodeType===8?t.parentNode:t),new Af(e)};qt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=o_(e),t=t===null?null:t.stateNode,t};qt.flushSync=function(t){return As(t)};qt.hydrate=function(t,e,n){if(!Ju(e))throw Error(F(200));return Zu(null,t,e,!0,n)};qt.hydrateRoot=function(t,e,n){if(!Cf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=jv;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Lv(e,null,t,1,n??null,s,!1,i,o),t[Qn]=e.current,Ko(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Xu(e)};qt.render=function(t,e,n){if(!Ju(e))throw Error(F(200));return Zu(null,t,e,!1,n)};qt.unmountComponentAtNode=function(t){if(!Ju(t))throw Error(F(40));return t._reactRootContainer?(As(function(){Zu(null,null,t,!1,function(){t._reactRootContainer=null,t[Qn]=null})}),!0):!1};qt.unstable_batchedUpdates=wf;qt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ju(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Zu(t,e,n,!1,r)};qt.version="18.3.1-next-f1338f8080-20240426";function Fv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fv)}catch(t){console.error(t)}}Fv(),Fy.exports=qt;var jT=Fy.exports,Uv,Km=jT;Uv=Km.createRoot,Km.hydrateRoot;/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),zv=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var UT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zT=Z.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...l},u)=>Z.createElement("svg",{ref:u,...UT,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:zv("lucide",s),...l},[...o.map(([h,f])=>Z.createElement(h,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=(t,e)=>{const n=Z.forwardRef(({className:r,...s},i)=>Z.createElement(zT,{ref:i,iconNode:e,className:zv(`lucide-${FT(t)}`,r),...s}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BT=ce("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=ce("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=ce("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=ce("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=ce("Bell",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=ce("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WT=ce("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=ce("ChartPie",[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GT=ce("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=ce("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QT=ce("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=ce("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=ce("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XT=ce("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=ce("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JT=ce("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=ce("FileSpreadsheet",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eI=ce("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tI=ce("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nI=ce("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rI=ce("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sI=ce("PiggyBank",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z",key:"1ivx2i"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h.01",key:"xkw8gn"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iI=ce("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oI=ce("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aI=ce("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=ce("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=ce("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lI=ce("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=ce("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=ce("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uI=ce("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=ce("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cI=ce("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hI=ce("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=ce("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]),dI=()=>{};var rg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},fI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},$v={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let y=(l&15)<<2|h>>6,k=h&63;u||(k=64,o||(y=64)),r.push(n[f],n[m],n[y],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Bv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||m==null)throw new pI;const y=i<<2|l>>4;if(r.push(y),h!==64){const k=l<<4&240|h>>2;if(r.push(k),m!==64){const b=h<<6&192|m;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class pI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mI=function(t){const e=Bv(t);return $v.encodeByteArray(e,!0)},_u=function(t){return mI(t).replace(/\./g,"")},Hv=function(t){try{return $v.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI=()=>gI().__FIREBASE_DEFAULTS__,_I=()=>{if(typeof process>"u"||typeof rg>"u")return;const t=rg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Hv(t[1]);return e&&JSON.parse(e)},ec=()=>{try{return dI()||yI()||_I()||vI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},qv=t=>{var e,n;return(n=(e=ec())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},wI=t=>{const e=qv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Wv=()=>{var t;return(t=ec())==null?void 0:t.config},Gv=t=>{var e;return(e=ec())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Kv(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[_u(JSON.stringify(n)),_u(JSON.stringify(o)),""].join(".")}const Do={};function II(){const t={prod:[],emulator:[]};for(const e of Object.keys(Do))Do[e]?t.emulator.push(e):t.prod.push(e);return t}function SI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let sg=!1;function Qv(t,e){if(typeof window>"u"||typeof document>"u"||!Mi(window.location.host)||Do[t]===e||Do[t]||sg)return;Do[t]=e;function n(y){return`__firebase__banner__${y}`}const r="__firebase__banner",i=II().prod.length>0;function o(){const y=document.getElementById(r);y&&y.remove()}function l(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function u(y,k){y.setAttribute("width","24"),y.setAttribute("id",k),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function h(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{sg=!0,o()},y}function f(y,k){y.setAttribute("id",k),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function m(){const y=SI(r),k=n("text"),b=document.getElementById(k)||document.createElement("span"),D=n("learnmore"),L=document.getElementById(D)||document.createElement("a"),S=n("preprendIcon"),w=document.getElementById(S)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const x=y.element;l(x),f(L,D);const M=h();u(w,S),x.append(w,b,L,M),document.body.appendChild(x)}i?(b.innerText="Preview backend disconnected.",w.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(w.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,b.innerText="Preview backend running in this workspace."),b.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function AI(){var e;const t=(e=ec())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function CI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function kI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function RI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function PI(){const t=vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function NI(){return!AI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bI(){try{return typeof indexedDB=="object"}catch{return!1}}function DI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI="FirebaseError";class rr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=VI,Object.setPrototypeOf(this,rr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_a.prototype.create)}}class _a{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?MI(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new rr(s,l,r)}}function MI(t,e){return t.replace(OI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const OI=/\{\$([^}]+)}/g;function LI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Cs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ig(i)&&ig(o)){if(!Cs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ig(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function jI(t,e){const n=new FI(t,e);return n.subscribe.bind(n)}class FI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");UI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=nh),s.error===void 0&&(s.error=nh),s.complete===void 0&&(s.complete=nh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function UI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function nh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(t){return t&&t._delegate?t._delegate:t}class ks{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new EI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($I(e))try{this.getOrInitializeService({instanceIdentifier:ds})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ds){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ds){return this.instances.has(e)}getOptions(e=ds){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:BI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ds){return this.component?this.component.multipleInstances?e:ds:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function BI(t){return t===ds?void 0:t}function $I(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new zI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const qI={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},WI=ae.INFO,GI={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},KI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=GI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kf{constructor(e){this.name=e,this._logLevel=WI,this._logHandler=KI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const QI=(t,e)=>e.some(n=>t instanceof n);let og,ag;function YI(){return og||(og=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XI(){return ag||(ag=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yv=new WeakMap,ud=new WeakMap,Xv=new WeakMap,rh=new WeakMap,Rf=new WeakMap;function JI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Vr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Yv.set(n,t)}).catch(()=>{}),Rf.set(e,t),e}function ZI(t){if(ud.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ud.set(t,e)}let cd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ud.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Xv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function eS(t){cd=t(cd)}function tS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(sh(this),e,...n);return Xv.set(r,e.sort?e.sort():[e]),Vr(r)}:XI().includes(t)?function(...e){return t.apply(sh(this),e),Vr(Yv.get(this))}:function(...e){return Vr(t.apply(sh(this),e))}}function nS(t){return typeof t=="function"?tS(t):(t instanceof IDBTransaction&&ZI(t),QI(t,YI())?new Proxy(t,cd):t)}function Vr(t){if(t instanceof IDBRequest)return JI(t);if(rh.has(t))return rh.get(t);const e=nS(t);return e!==t&&(rh.set(t,e),Rf.set(e,t)),e}const sh=t=>Rf.get(t);function rS(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Vr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Vr(o.result),u.oldVersion,u.newVersion,Vr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const sS=["get","getKey","getAll","getAllKeys","count"],iS=["put","add","delete","clear"],ih=new Map;function lg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ih.get(e))return ih.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=iS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||sS.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return ih.set(e,i),i}eS(t=>({...t,get:(e,n,r)=>lg(e,n)||t.get(e,n,r),has:(e,n)=>!!lg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(aS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function aS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hd="@firebase/app",ug="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=new kf("@firebase/app"),lS="@firebase/app-compat",uS="@firebase/analytics-compat",cS="@firebase/analytics",hS="@firebase/app-check-compat",dS="@firebase/app-check",fS="@firebase/auth",pS="@firebase/auth-compat",mS="@firebase/database",gS="@firebase/data-connect",yS="@firebase/database-compat",_S="@firebase/functions",vS="@firebase/functions-compat",wS="@firebase/installations",ES="@firebase/installations-compat",TS="@firebase/messaging",IS="@firebase/messaging-compat",SS="@firebase/performance",xS="@firebase/performance-compat",AS="@firebase/remote-config",CS="@firebase/remote-config-compat",kS="@firebase/storage",RS="@firebase/storage-compat",PS="@firebase/firestore",NS="@firebase/ai",bS="@firebase/firestore-compat",DS="firebase",VS="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="[DEFAULT]",MS={[hd]:"fire-core",[lS]:"fire-core-compat",[cS]:"fire-analytics",[uS]:"fire-analytics-compat",[dS]:"fire-app-check",[hS]:"fire-app-check-compat",[fS]:"fire-auth",[pS]:"fire-auth-compat",[mS]:"fire-rtdb",[gS]:"fire-data-connect",[yS]:"fire-rtdb-compat",[_S]:"fire-fn",[vS]:"fire-fn-compat",[wS]:"fire-iid",[ES]:"fire-iid-compat",[TS]:"fire-fcm",[IS]:"fire-fcm-compat",[SS]:"fire-perf",[xS]:"fire-perf-compat",[AS]:"fire-rc",[CS]:"fire-rc-compat",[kS]:"fire-gcs",[RS]:"fire-gcs-compat",[PS]:"fire-fst",[bS]:"fire-fst-compat",[NS]:"fire-vertex","fire-js":"fire-js",[DS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu=new Map,OS=new Map,fd=new Map;function cg(t,e){try{t.container.addComponent(e)}catch(n){Jn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Si(t){const e=t.name;if(fd.has(e))return Jn.debug(`There were multiple attempts to register component ${e}.`),!1;fd.set(e,t);for(const n of vu.values())cg(n,t);for(const n of OS.values())cg(n,t);return!0}function Pf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function dn(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mr=new _a("app","Firebase",LS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ks("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=VS;function Jv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:dd,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Mr.create("bad-app-name",{appName:String(s)});if(n||(n=Wv()),!n)throw Mr.create("no-options");const i=vu.get(s);if(i){if(Cs(n,i.options)&&Cs(r,i.config))return i;throw Mr.create("duplicate-app",{appName:s})}const o=new HI(s);for(const u of fd.values())o.addComponent(u);const l=new jS(n,r,o);return vu.set(s,l),l}function Zv(t=dd){const e=vu.get(t);if(!e&&t===dd&&Wv())return Jv();if(!e)throw Mr.create("no-app",{appName:t});return e}function Or(t,e,n){let r=MS[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jn.warn(o.join(" "));return}Si(new ks(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS="firebase-heartbeat-database",US=1,ra="firebase-heartbeat-store";let oh=null;function e0(){return oh||(oh=rS(FS,US,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ra)}catch(n){console.warn(n)}}}}).catch(t=>{throw Mr.create("idb-open",{originalErrorMessage:t.message})})),oh}async function zS(t){try{const n=(await e0()).transaction(ra),r=await n.objectStore(ra).get(t0(t));return await n.done,r}catch(e){if(e instanceof rr)Jn.warn(e.message);else{const n=Mr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Jn.warn(n.message)}}}async function hg(t,e){try{const r=(await e0()).transaction(ra,"readwrite");await r.objectStore(ra).put(e,t0(t)),await r.done}catch(n){if(n instanceof rr)Jn.warn(n.message);else{const r=Mr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Jn.warn(r.message)}}}function t0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS=1024,$S=30;class HS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new WS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=dg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>$S){const o=GS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Jn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=dg(),{heartbeatsToSend:r,unsentEntries:s}=qS(this._heartbeatsCache.heartbeats),i=_u(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Jn.warn(n),""}}}function dg(){return new Date().toISOString().substring(0,10)}function qS(t,e=BS){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),fg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),fg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class WS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bI()?DI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await zS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return hg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return hg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function fg(t){return _u(JSON.stringify({version:2,heartbeats:t})).length}function GS(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KS(t){Si(new ks("platform-logger",e=>new oS(e),"PRIVATE")),Si(new ks("heartbeat",e=>new HS(e),"PRIVATE")),Or(hd,ug,t),Or(hd,ug,"esm2020"),Or("fire-js","")}KS("");var QS="firebase",YS="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Or(QS,YS,"app");function n0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const XS=n0,r0=new _a("auth","Firebase",n0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu=new kf("@firebase/auth");function JS(t,...e){wu.logLevel<=ae.WARN&&wu.warn(`Auth (${Oi}): ${t}`,...e)}function jl(t,...e){wu.logLevel<=ae.ERROR&&wu.error(`Auth (${Oi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(t,...e){throw bf(t,...e)}function yn(t,...e){return bf(t,...e)}function Nf(t,e,n){const r={...XS(),[e]:n};return new _a("auth","Firebase",r).create(e,{appName:t.name})}function ws(t){return Nf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ZS(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Vn(t,"argument-error"),Nf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function bf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return r0.create(t,...e)}function te(t,e,...n){if(!t)throw bf(e,...n)}function Hn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw jl(e),new Error(e)}function Zn(t,e){t||Hn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function ex(){return pg()==="http:"||pg()==="https:"}function pg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ex()||kI()||"connection"in navigator)?navigator.onLine:!0}function nx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Zn(n>e,"Short delay should be less than long delay!"),this.isMobile=xI()||RI()}get(){return tx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(t,e){Zn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ix=new wa(3e4,6e4);function Vf(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Li(t,e,n,r,s={}){return i0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=va({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...i};return CI()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Mi(t.emulatorConfig.host)&&(h.credentials="include"),s0.fetch()(await o0(t,t.config.apiHost,n,l),h)})}async function i0(t,e,n){t._canInitEmulator=!1;const r={...rx,...e};try{const s=new ax(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw wl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw wl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw wl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw wl(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Nf(t,f,h);Vn(t,f)}}catch(s){if(s instanceof rr)throw s;Vn(t,"network-request-failed",{message:String(s)})}}async function ox(t,e,n,r,s={}){const i=await Li(t,e,n,r,s);return"mfaPendingCredential"in i&&Vn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function o0(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Df(t.config,s):`${t.config.apiScheme}://${s}`;return sx.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class ax{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(yn(this.auth,"network-request-failed")),ix.get())})}}function wl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=yn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lx(t,e){return Li(t,"POST","/v1/accounts:delete",e)}async function Eu(t,e){return Li(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ux(t,e=!1){const n=an(t),r=await n.getIdToken(e),s=Mf(r);te(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Vo(ah(s.auth_time)),issuedAtTime:Vo(ah(s.iat)),expirationTime:Vo(ah(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ah(t){return Number(t)*1e3}function Mf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return jl("JWT malformed, contained fewer than 3 sections"),null;try{const s=Hv(n);return s?JSON.parse(s):(jl("Failed to decode base64 JWT payload"),null)}catch(s){return jl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function mg(t){const e=Mf(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof rr&&cx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function cx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vo(this.lastLoginAt),this.creationTime=Vo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tu(t){var m;const e=t.auth,n=await t.getIdToken(),r=await sa(t,Eu(e,{idToken:n}));te(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?a0(s.providerUserInfo):[],o=fx(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new md(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function dx(t){const e=an(t);await Tu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fx(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function a0(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function px(t,e){const n=await i0(t,{},async()=>{const r=va({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await o0(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Mi(t.emulatorConfig.host)&&(u.credentials="include"),s0.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function mx(t,e){return Li(t,"POST","/v2/accounts:revokeToken",Vf(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){te(e.length!==0,"internal-error");const n=mg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await px(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new fi;return r&&(te(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(te(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(te(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fi,this.toJSON())}_performRefresh(){return Hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class fn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new hx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new md(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await sa(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ux(this,e)}reload(){return dx(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new fn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Tu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(dn(this.auth.app))return Promise.reject(ws(this.auth));const e=await this.getIdToken();return await sa(this,lx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:m,emailVerified:y,isAnonymous:k,providerData:b,stsTokenManager:D}=n;te(m&&D,e,"internal-error");const L=fi.fromJSON(this.name,D);te(typeof m=="string",e,"internal-error"),mr(r,e.name),mr(s,e.name),te(typeof y=="boolean",e,"internal-error"),te(typeof k=="boolean",e,"internal-error"),mr(i,e.name),mr(o,e.name),mr(l,e.name),mr(u,e.name),mr(h,e.name),mr(f,e.name);const S=new fn({uid:m,auth:e,email:s,emailVerified:y,displayName:r,isAnonymous:k,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:L,createdAt:h,lastLoginAt:f});return b&&Array.isArray(b)&&(S.providerData=b.map(w=>({...w}))),u&&(S._redirectEventId=u),S}static async _fromIdTokenResponse(e,n,r=!1){const s=new fi;s.updateFromServerResponse(n);const i=new fn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Tu(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];te(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?a0(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new fi;l.updateFromIdToken(r);const u=new fn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new md(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg=new Map;function qn(t){Zn(t instanceof Function,"Expected a class definition");let e=gg.get(t);return e?(Zn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}l0.type="NONE";const yg=l0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(t,e,n){return`firebase:${t}:${e}:${n}`}class pi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Fl(this.userKey,s.apiKey,i),this.fullPersistenceKey=Fl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Eu(this.auth,{idToken:e}).catch(()=>{});return n?fn._fromGetAccountInfoResponse(this.auth,n,e):null}return fn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new pi(qn(yg),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||qn(yg);const o=Fl(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let m;if(typeof f=="string"){const y=await Eu(e,{idToken:f}).catch(()=>{});if(!y)break;m=await fn._fromGetAccountInfoResponse(e,y,f)}else m=fn._fromJSON(e,f);h!==i&&(l=m),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new pi(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new pi(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(d0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(u0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(p0(e))return"Blackberry";if(m0(e))return"Webos";if(c0(e))return"Safari";if((e.includes("chrome/")||h0(e))&&!e.includes("edge/"))return"Chrome";if(f0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function u0(t=vt()){return/firefox\//i.test(t)}function c0(t=vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function h0(t=vt()){return/crios\//i.test(t)}function d0(t=vt()){return/iemobile/i.test(t)}function f0(t=vt()){return/android/i.test(t)}function p0(t=vt()){return/blackberry/i.test(t)}function m0(t=vt()){return/webos/i.test(t)}function Of(t=vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function gx(t=vt()){var e;return Of(t)&&!!((e=window.navigator)!=null&&e.standalone)}function yx(){return PI()&&document.documentMode===10}function g0(t=vt()){return Of(t)||f0(t)||m0(t)||p0(t)||/windows phone/i.test(t)||d0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(t,e=[]){let n;switch(t){case"Browser":n=_g(vt());break;case"Worker":n=`${_g(vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Oi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vx(t,e={}){return Li(t,"GET","/v2/passwordPolicy",Vf(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wx=6;class Ex{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??wx,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vg(this),this.idTokenSubscription=new vg(this),this.beforeStateQueue=new _x(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=r0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await pi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Eu(this,{idToken:e}),r=await fn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(dn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Tu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(dn(this.app))return Promise.reject(ws(this));const n=e?an(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return dn(this.app)?Promise.reject(ws(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return dn(this.app)?Promise.reject(ws(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(qn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vx(this),n=new Ex(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new _a("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await mx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qn(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await pi.create(this,[qn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=y0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(dn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&JS(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function tc(t){return an(t)}class vg{constructor(e){this.auth=e,this.observer=null,this.addObserver=jI(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ix(t){Lf=t}function Sx(t){return Lf.loadJS(t)}function xx(){return Lf.gapiScript}function Ax(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cx(t,e){const n=Pf(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Cs(i,e??{}))return s;Vn(s,"already-initialized")}return n.initialize({options:e})}function kx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(qn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Rx(t,e,n){const r=tc(t);te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=_0(e),{host:o,port:l}=Px(e),u=l===null?"":`:${l}`,h={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){te(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),te(Cs(h,r.config.emulator)&&Cs(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Mi(o)?(Kv(`${i}//${o}${u}`),Qv("Auth",!0)):Nx()}function _0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Px(t){const e=_0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:wg(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:wg(o)}}}function wg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Nx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Hn("not implemented")}_getIdTokenResponse(e){return Hn("not implemented")}_linkToIdToken(e,n){return Hn("not implemented")}_getReauthenticationResolver(e){return Hn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mi(t,e){return ox(t,"POST","/v1/accounts:signInWithIdp",Vf(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bx="http://localhost";class Rs extends v0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Rs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Vn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Rs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return mi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,mi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,mi(e,n)}buildRequest(){const e={requestUri:bx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=va(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea extends jf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends Ea{constructor(){super("facebook.com")}static credential(e){return Rs._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wr.credential(e.oauthAccessToken)}catch{return null}}}wr.FACEBOOK_SIGN_IN_METHOD="facebook.com";wr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Ea{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Rs._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return zn.credential(n,r)}catch{return null}}}zn.GOOGLE_SIGN_IN_METHOD="google.com";zn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends Ea{constructor(){super("github.com")}static credential(e){return Rs._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Er.credential(e.oauthAccessToken)}catch{return null}}}Er.GITHUB_SIGN_IN_METHOD="github.com";Er.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends Ea{constructor(){super("twitter.com")}static credential(e,n){return Rs._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Tr.credential(n,r)}catch{return null}}}Tr.TWITTER_SIGN_IN_METHOD="twitter.com";Tr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await fn._fromIdTokenResponse(e,r,s),o=Eg(r);return new xi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Eg(r);return new xi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Eg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu extends rr{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Iu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Iu(e,n,r,s)}}function w0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Iu._fromErrorAndOperation(t,i,e,r):i})}async function Dx(t,e,n=!1){const r=await sa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vx(t,e,n=!1){const{auth:r}=t;if(dn(r.app))return Promise.reject(ws(r));const s="reauthenticate";try{const i=await sa(t,w0(r,s,e,t),n);te(i.idToken,r,"internal-error");const o=Mf(i.idToken);te(o,r,"internal-error");const{sub:l}=o;return te(t.uid===l,r,"user-mismatch"),xi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Vn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mx(t,e,n=!1){if(dn(t.app))return Promise.reject(ws(t));const r="signIn",s=await w0(t,r,e),i=await xi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function Ox(t,e,n,r){return an(t).onIdTokenChanged(e,n,r)}function Lx(t,e,n){return an(t).beforeAuthStateChanged(e,n)}function jx(t,e,n,r){return an(t).onAuthStateChanged(e,n,r)}function Fx(t){return an(t).signOut()}const Su="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Su,"1"),this.storage.removeItem(Su),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux=1e3,zx=10;class T0 extends E0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=g0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);yx()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,zx):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ux)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}T0.type="LOCAL";const Bx=T0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0 extends E0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}I0.type="SESSION";const S0=I0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $x(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new nc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),u=await $x(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const h=Ff("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const y=m;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(y.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(){return window}function qx(t){Rn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(){return typeof Rn().WorkerGlobalScope<"u"&&typeof Rn().importScripts=="function"}async function Wx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Gx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Kx(){return x0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0="firebaseLocalStorageDb",Qx=1,xu="firebaseLocalStorage",C0="fbase_key";class Ta{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rc(t,e){return t.transaction([xu],e?"readwrite":"readonly").objectStore(xu)}function Yx(){const t=indexedDB.deleteDatabase(A0);return new Ta(t).toPromise()}function gd(){const t=indexedDB.open(A0,Qx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(xu,{keyPath:C0})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(xu)?e(r):(r.close(),await Yx(),e(await gd()))})})}async function Tg(t,e,n){const r=rc(t,!0).put({[C0]:e,value:n});return new Ta(r).toPromise()}async function Xx(t,e){const n=rc(t,!1).get(e),r=await new Ta(n).toPromise();return r===void 0?null:r.value}function Ig(t,e){const n=rc(t,!0).delete(e);return new Ta(n).toPromise()}const Jx=800,Zx=3;class k0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Zx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return x0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nc._getInstance(Kx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await Wx(),!this.activeServiceWorker)return;this.sender=new Hx(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Gx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gd();return await Tg(e,Su,"1"),await Ig(e,Su),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Tg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Xx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ig(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=rc(s,!1).getAll();return new Ta(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Jx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}k0.type="LOCAL";const e2=k0;new wa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0(t,e){return e?qn(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf extends v0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return mi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return mi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function t2(t){return Mx(t.auth,new Uf(t),t.bypassAuthState)}function n2(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),Vx(n,new Uf(t),t.bypassAuthState)}async function r2(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),Dx(n,new Uf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return t2;case"linkViaPopup":case"linkViaRedirect":return r2;case"reauthViaPopup":case"reauthViaRedirect":return n2;default:Vn(this.auth,"internal-error")}}resolve(e){Zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s2=new wa(2e3,1e4);async function i2(t,e,n){if(dn(t.app))return Promise.reject(yn(t,"operation-not-supported-in-this-environment"));const r=tc(t);ZS(t,e,jf);const s=R0(r,n);return new gs(r,"signInViaPopup",e,s).executeNotNull()}class gs extends P0{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,gs.currentPopupAction&&gs.currentPopupAction.cancel(),gs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){Zn(this.filter.length===1,"Popup operations only handle one event");const e=Ff();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,s2.get())};e()}}gs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o2="pendingRedirect",Ul=new Map;class a2 extends P0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ul.get(this.auth._key());if(!e){try{const r=await l2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ul.set(this.auth._key(),e)}return this.bypassAuthState||Ul.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function l2(t,e){const n=h2(e),r=c2(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function u2(t,e){Ul.set(t._key(),e)}function c2(t){return qn(t._redirectPersistence)}function h2(t){return Fl(o2,t.config.apiKey,t.name)}async function d2(t,e,n=!1){if(dn(t.app))return Promise.reject(ws(t));const r=tc(t),s=R0(r,e),o=await new a2(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f2=10*60*1e3;class p2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!m2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!N0(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(yn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=f2&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sg(e))}saveEventToCache(e){this.cachedEventUids.add(Sg(e)),this.lastProcessedEventTime=Date.now()}}function Sg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function N0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function m2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return N0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g2(t,e={}){return Li(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_2=/^https?/;async function v2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await g2(t);for(const n of e)try{if(w2(n))return}catch{}Vn(t,"unauthorized-domain")}function w2(t){const e=pd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!_2.test(n))return!1;if(y2.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E2=new wa(3e4,6e4);function xg(){const t=Rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function T2(t){return new Promise((e,n)=>{var s,i,o;function r(){xg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xg(),n(yn(t,"network-request-failed"))},timeout:E2.get()})}if((i=(s=Rn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Rn().gapi)!=null&&o.load)r();else{const l=Ax("iframefcb");return Rn()[l]=()=>{gapi.load?r():n(yn(t,"network-request-failed"))},Sx(`${xx()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw zl=null,e})}let zl=null;function I2(t){return zl=zl||T2(t),zl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S2=new wa(5e3,15e3),x2="__/auth/iframe",A2="emulator/auth/iframe",C2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},k2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function R2(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Df(e,A2):`https://${t.config.authDomain}/${x2}`,r={apiKey:e.apiKey,appName:t.name,v:Oi},s=k2.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${va(r).slice(1)}`}async function P2(t){const e=await I2(t),n=Rn().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:R2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:C2,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=yn(t,"network-request-failed"),l=Rn().setTimeout(()=>{i(o)},S2.get());function u(){Rn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},b2=500,D2=600,V2="_blank",M2="http://localhost";class Ag{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function O2(t,e,n,r=b2,s=D2){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...N2,width:r.toString(),height:s.toString(),top:i,left:o},h=vt().toLowerCase();n&&(l=h0(h)?V2:n),u0(h)&&(e=e||M2,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[k,b])=>`${y}${k}=${b},`,"");if(gx(h)&&l!=="_self")return L2(e||"",l),new Ag(null);const m=window.open(e||"",l,f);te(m,t,"popup-blocked");try{m.focus()}catch{}return new Ag(m)}function L2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j2="__/auth/handler",F2="emulator/auth/handler",U2=encodeURIComponent("fac");async function Cg(t,e,n,r,s,i){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Oi,eventId:s};if(e instanceof jf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",LI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Ea){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${U2}=${encodeURIComponent(u)}`:"";return`${z2(t)}?${va(l).slice(1)}${h}`}function z2({config:t}){return t.emulator?Df(t,F2):`https://${t.authDomain}/${j2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh="webStorageSupport";class B2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=S0,this._completeRedirectFn=d2,this._overrideRedirectResult=u2}async _openPopup(e,n,r,s){var o;Zn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Cg(e,n,r,pd(),s);return O2(e,i,Ff())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Cg(e,n,r,pd(),s);return qx(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Zn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await P2(e),r=new p2(e);return n.register("authEvent",s=>(te(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(lh,{type:lh},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[lh];i!==void 0&&n(!!i),Vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=v2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return g0()||c0()||Of()}}const $2=B2;var kg="@firebase/auth",Rg="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function W2(t){Si(new ks("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;te(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:y0(t)},h=new Tx(r,s,i,u);return kx(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Si(new ks("auth-internal",e=>{const n=tc(e.getProvider("auth").getImmediate());return(r=>new H2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Or(kg,Rg,q2(t)),Or(kg,Rg,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G2=5*60,K2=Gv("authIdTokenMaxAge")||G2;let Pg=null;const Q2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>K2)return;const s=n==null?void 0:n.token;Pg!==s&&(Pg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Y2(t=Zv()){const e=Pf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Cx(t,{popupRedirectResolver:$2,persistence:[e2,Bx,S0]}),r=Gv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Q2(i.toString());Lx(n,o,()=>o(n.currentUser)),Ox(n,l=>o(l))}}const s=qv("auth");return s&&Rx(n,`http://${s}`),n}function X2(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Ix({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=yn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",X2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});W2("Browser");var Ng=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lr,b0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,_){function E(){}E.prototype=_.prototype,v.F=_.prototype,v.prototype=new E,v.prototype.constructor=v,v.D=function(I,C,R){for(var T=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)T[Oe-2]=arguments[Oe];return _.prototype[C].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,_,E){E||(E=0);const I=Array(16);if(typeof _=="string")for(var C=0;C<16;++C)I[C]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(C=0;C<16;++C)I[C]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=v.g[0],E=v.g[1],C=v.g[2];let R=v.g[3],T;T=_+(R^E&(C^R))+I[0]+3614090360&4294967295,_=E+(T<<7&4294967295|T>>>25),T=R+(C^_&(E^C))+I[1]+3905402710&4294967295,R=_+(T<<12&4294967295|T>>>20),T=C+(E^R&(_^E))+I[2]+606105819&4294967295,C=R+(T<<17&4294967295|T>>>15),T=E+(_^C&(R^_))+I[3]+3250441966&4294967295,E=C+(T<<22&4294967295|T>>>10),T=_+(R^E&(C^R))+I[4]+4118548399&4294967295,_=E+(T<<7&4294967295|T>>>25),T=R+(C^_&(E^C))+I[5]+1200080426&4294967295,R=_+(T<<12&4294967295|T>>>20),T=C+(E^R&(_^E))+I[6]+2821735955&4294967295,C=R+(T<<17&4294967295|T>>>15),T=E+(_^C&(R^_))+I[7]+4249261313&4294967295,E=C+(T<<22&4294967295|T>>>10),T=_+(R^E&(C^R))+I[8]+1770035416&4294967295,_=E+(T<<7&4294967295|T>>>25),T=R+(C^_&(E^C))+I[9]+2336552879&4294967295,R=_+(T<<12&4294967295|T>>>20),T=C+(E^R&(_^E))+I[10]+4294925233&4294967295,C=R+(T<<17&4294967295|T>>>15),T=E+(_^C&(R^_))+I[11]+2304563134&4294967295,E=C+(T<<22&4294967295|T>>>10),T=_+(R^E&(C^R))+I[12]+1804603682&4294967295,_=E+(T<<7&4294967295|T>>>25),T=R+(C^_&(E^C))+I[13]+4254626195&4294967295,R=_+(T<<12&4294967295|T>>>20),T=C+(E^R&(_^E))+I[14]+2792965006&4294967295,C=R+(T<<17&4294967295|T>>>15),T=E+(_^C&(R^_))+I[15]+1236535329&4294967295,E=C+(T<<22&4294967295|T>>>10),T=_+(C^R&(E^C))+I[1]+4129170786&4294967295,_=E+(T<<5&4294967295|T>>>27),T=R+(E^C&(_^E))+I[6]+3225465664&4294967295,R=_+(T<<9&4294967295|T>>>23),T=C+(_^E&(R^_))+I[11]+643717713&4294967295,C=R+(T<<14&4294967295|T>>>18),T=E+(R^_&(C^R))+I[0]+3921069994&4294967295,E=C+(T<<20&4294967295|T>>>12),T=_+(C^R&(E^C))+I[5]+3593408605&4294967295,_=E+(T<<5&4294967295|T>>>27),T=R+(E^C&(_^E))+I[10]+38016083&4294967295,R=_+(T<<9&4294967295|T>>>23),T=C+(_^E&(R^_))+I[15]+3634488961&4294967295,C=R+(T<<14&4294967295|T>>>18),T=E+(R^_&(C^R))+I[4]+3889429448&4294967295,E=C+(T<<20&4294967295|T>>>12),T=_+(C^R&(E^C))+I[9]+568446438&4294967295,_=E+(T<<5&4294967295|T>>>27),T=R+(E^C&(_^E))+I[14]+3275163606&4294967295,R=_+(T<<9&4294967295|T>>>23),T=C+(_^E&(R^_))+I[3]+4107603335&4294967295,C=R+(T<<14&4294967295|T>>>18),T=E+(R^_&(C^R))+I[8]+1163531501&4294967295,E=C+(T<<20&4294967295|T>>>12),T=_+(C^R&(E^C))+I[13]+2850285829&4294967295,_=E+(T<<5&4294967295|T>>>27),T=R+(E^C&(_^E))+I[2]+4243563512&4294967295,R=_+(T<<9&4294967295|T>>>23),T=C+(_^E&(R^_))+I[7]+1735328473&4294967295,C=R+(T<<14&4294967295|T>>>18),T=E+(R^_&(C^R))+I[12]+2368359562&4294967295,E=C+(T<<20&4294967295|T>>>12),T=_+(E^C^R)+I[5]+4294588738&4294967295,_=E+(T<<4&4294967295|T>>>28),T=R+(_^E^C)+I[8]+2272392833&4294967295,R=_+(T<<11&4294967295|T>>>21),T=C+(R^_^E)+I[11]+1839030562&4294967295,C=R+(T<<16&4294967295|T>>>16),T=E+(C^R^_)+I[14]+4259657740&4294967295,E=C+(T<<23&4294967295|T>>>9),T=_+(E^C^R)+I[1]+2763975236&4294967295,_=E+(T<<4&4294967295|T>>>28),T=R+(_^E^C)+I[4]+1272893353&4294967295,R=_+(T<<11&4294967295|T>>>21),T=C+(R^_^E)+I[7]+4139469664&4294967295,C=R+(T<<16&4294967295|T>>>16),T=E+(C^R^_)+I[10]+3200236656&4294967295,E=C+(T<<23&4294967295|T>>>9),T=_+(E^C^R)+I[13]+681279174&4294967295,_=E+(T<<4&4294967295|T>>>28),T=R+(_^E^C)+I[0]+3936430074&4294967295,R=_+(T<<11&4294967295|T>>>21),T=C+(R^_^E)+I[3]+3572445317&4294967295,C=R+(T<<16&4294967295|T>>>16),T=E+(C^R^_)+I[6]+76029189&4294967295,E=C+(T<<23&4294967295|T>>>9),T=_+(E^C^R)+I[9]+3654602809&4294967295,_=E+(T<<4&4294967295|T>>>28),T=R+(_^E^C)+I[12]+3873151461&4294967295,R=_+(T<<11&4294967295|T>>>21),T=C+(R^_^E)+I[15]+530742520&4294967295,C=R+(T<<16&4294967295|T>>>16),T=E+(C^R^_)+I[2]+3299628645&4294967295,E=C+(T<<23&4294967295|T>>>9),T=_+(C^(E|~R))+I[0]+4096336452&4294967295,_=E+(T<<6&4294967295|T>>>26),T=R+(E^(_|~C))+I[7]+1126891415&4294967295,R=_+(T<<10&4294967295|T>>>22),T=C+(_^(R|~E))+I[14]+2878612391&4294967295,C=R+(T<<15&4294967295|T>>>17),T=E+(R^(C|~_))+I[5]+4237533241&4294967295,E=C+(T<<21&4294967295|T>>>11),T=_+(C^(E|~R))+I[12]+1700485571&4294967295,_=E+(T<<6&4294967295|T>>>26),T=R+(E^(_|~C))+I[3]+2399980690&4294967295,R=_+(T<<10&4294967295|T>>>22),T=C+(_^(R|~E))+I[10]+4293915773&4294967295,C=R+(T<<15&4294967295|T>>>17),T=E+(R^(C|~_))+I[1]+2240044497&4294967295,E=C+(T<<21&4294967295|T>>>11),T=_+(C^(E|~R))+I[8]+1873313359&4294967295,_=E+(T<<6&4294967295|T>>>26),T=R+(E^(_|~C))+I[15]+4264355552&4294967295,R=_+(T<<10&4294967295|T>>>22),T=C+(_^(R|~E))+I[6]+2734768916&4294967295,C=R+(T<<15&4294967295|T>>>17),T=E+(R^(C|~_))+I[13]+1309151649&4294967295,E=C+(T<<21&4294967295|T>>>11),T=_+(C^(E|~R))+I[4]+4149444226&4294967295,_=E+(T<<6&4294967295|T>>>26),T=R+(E^(_|~C))+I[11]+3174756917&4294967295,R=_+(T<<10&4294967295|T>>>22),T=C+(_^(R|~E))+I[2]+718787259&4294967295,C=R+(T<<15&4294967295|T>>>17),T=E+(R^(C|~_))+I[9]+3951481745&4294967295,v.g[0]=v.g[0]+_&4294967295,v.g[1]=v.g[1]+(C+(T<<21&4294967295|T>>>11))&4294967295,v.g[2]=v.g[2]+C&4294967295,v.g[3]=v.g[3]+R&4294967295}r.prototype.v=function(v,_){_===void 0&&(_=v.length);const E=_-this.blockSize,I=this.C;let C=this.h,R=0;for(;R<_;){if(C==0)for(;R<=E;)s(this,v,R),R+=this.blockSize;if(typeof v=="string"){for(;R<_;)if(I[C++]=v.charCodeAt(R++),C==this.blockSize){s(this,I),C=0;break}}else for(;R<_;)if(I[C++]=v[R++],C==this.blockSize){s(this,I),C=0;break}}this.h=C,this.o+=_},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var _=1;_<v.length-8;++_)v[_]=0;_=this.o*8;for(var E=v.length-8;E<v.length;++E)v[E]=_&255,_/=256;for(this.v(v),v=Array(16),_=0,E=0;E<4;++E)for(let I=0;I<32;I+=8)v[_++]=this.g[E]>>>I&255;return v};function i(v,_){var E=l;return Object.prototype.hasOwnProperty.call(E,v)?E[v]:E[v]=_(v)}function o(v,_){this.h=_;const E=[];let I=!0;for(let C=v.length-1;C>=0;C--){const R=v[C]|0;I&&R==_||(E[C]=R,I=!1)}this.g=E}var l={};function u(v){return-128<=v&&v<128?i(v,function(_){return new o([_|0],_<0?-1:0)}):new o([v|0],v<0?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return m;if(v<0)return L(h(-v));const _=[];let E=1;for(let I=0;v>=E;I++)_[I]=v/E|0,E*=4294967296;return new o(_,0)}function f(v,_){if(v.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(v.charAt(0)=="-")return L(f(v.substring(1),_));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=h(Math.pow(_,8));let I=m;for(let R=0;R<v.length;R+=8){var C=Math.min(8,v.length-R);const T=parseInt(v.substring(R,R+C),_);C<8?(C=h(Math.pow(_,C)),I=I.j(C).add(h(T))):(I=I.j(E),I=I.add(h(T)))}return I}var m=u(0),y=u(1),k=u(16777216);t=o.prototype,t.m=function(){if(D(this))return-L(this).m();let v=0,_=1;for(let E=0;E<this.g.length;E++){const I=this.i(E);v+=(I>=0?I:4294967296+I)*_,_*=4294967296}return v},t.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(b(this))return"0";if(D(this))return"-"+L(this).toString(v);const _=h(Math.pow(v,6));var E=this;let I="";for(;;){const C=M(E,_).g;E=S(E,C.j(_));let R=((E.g.length>0?E.g[0]:E.h)>>>0).toString(v);if(E=C,b(E))return R+I;for(;R.length<6;)R="0"+R;I=R+I}},t.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function b(v){if(v.h!=0)return!1;for(let _=0;_<v.g.length;_++)if(v.g[_]!=0)return!1;return!0}function D(v){return v.h==-1}t.l=function(v){return v=S(this,v),D(v)?-1:b(v)?0:1};function L(v){const _=v.g.length,E=[];for(let I=0;I<_;I++)E[I]=~v.g[I];return new o(E,~v.h).add(y)}t.abs=function(){return D(this)?L(this):this},t.add=function(v){const _=Math.max(this.g.length,v.g.length),E=[];let I=0;for(let C=0;C<=_;C++){let R=I+(this.i(C)&65535)+(v.i(C)&65535),T=(R>>>16)+(this.i(C)>>>16)+(v.i(C)>>>16);I=T>>>16,R&=65535,T&=65535,E[C]=T<<16|R}return new o(E,E[E.length-1]&-2147483648?-1:0)};function S(v,_){return v.add(L(_))}t.j=function(v){if(b(this)||b(v))return m;if(D(this))return D(v)?L(this).j(L(v)):L(L(this).j(v));if(D(v))return L(this.j(L(v)));if(this.l(k)<0&&v.l(k)<0)return h(this.m()*v.m());const _=this.g.length+v.g.length,E=[];for(var I=0;I<2*_;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(let C=0;C<v.g.length;C++){const R=this.i(I)>>>16,T=this.i(I)&65535,Oe=v.i(C)>>>16,Lt=v.i(C)&65535;E[2*I+2*C]+=T*Lt,w(E,2*I+2*C),E[2*I+2*C+1]+=R*Lt,w(E,2*I+2*C+1),E[2*I+2*C+1]+=T*Oe,w(E,2*I+2*C+1),E[2*I+2*C+2]+=R*Oe,w(E,2*I+2*C+2)}for(v=0;v<_;v++)E[v]=E[2*v+1]<<16|E[2*v];for(v=_;v<2*_;v++)E[v]=0;return new o(E,0)};function w(v,_){for(;(v[_]&65535)!=v[_];)v[_+1]+=v[_]>>>16,v[_]&=65535,_++}function x(v,_){this.g=v,this.h=_}function M(v,_){if(b(_))throw Error("division by zero");if(b(v))return new x(m,m);if(D(v))return _=M(L(v),_),new x(L(_.g),L(_.h));if(D(_))return _=M(v,L(_)),new x(L(_.g),_.h);if(v.g.length>30){if(D(v)||D(_))throw Error("slowDivide_ only works with positive integers.");for(var E=y,I=_;I.l(v)<=0;)E=U(E),I=U(I);var C=z(E,1),R=z(I,1);for(I=z(I,2),E=z(E,2);!b(I);){var T=R.add(I);T.l(v)<=0&&(C=C.add(E),R=T),I=z(I,1),E=z(E,1)}return _=S(v,C.j(_)),new x(C,_)}for(C=m;v.l(_)>=0;){for(E=Math.max(1,Math.floor(v.m()/_.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),R=h(E),T=R.j(_);D(T)||T.l(v)>0;)E-=I,R=h(E),T=R.j(_);b(R)&&(R=y),C=C.add(R),v=S(v,T)}return new x(C,v)}t.B=function(v){return M(this,v).h},t.and=function(v){const _=Math.max(this.g.length,v.g.length),E=[];for(let I=0;I<_;I++)E[I]=this.i(I)&v.i(I);return new o(E,this.h&v.h)},t.or=function(v){const _=Math.max(this.g.length,v.g.length),E=[];for(let I=0;I<_;I++)E[I]=this.i(I)|v.i(I);return new o(E,this.h|v.h)},t.xor=function(v){const _=Math.max(this.g.length,v.g.length),E=[];for(let I=0;I<_;I++)E[I]=this.i(I)^v.i(I);return new o(E,this.h^v.h)};function U(v){const _=v.g.length+1,E=[];for(let I=0;I<_;I++)E[I]=v.i(I)<<1|v.i(I-1)>>>31;return new o(E,v.h)}function z(v,_){const E=_>>5;_%=32;const I=v.g.length-E,C=[];for(let R=0;R<I;R++)C[R]=_>0?v.i(R+E)>>>_|v.i(R+E+1)<<32-_:v.i(R+E);return new o(C,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,b0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Lr=o}).apply(typeof Ng<"u"?Ng:typeof self<"u"?self:typeof window<"u"?window:{});var El=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var D0,wo,V0,Bl,yd,M0,O0,L0;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof El=="object"&&El];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,c){if(c)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var P=a[g];if(!(P in d))break e;d=d[P]}a=a[a.length-1],g=d[a],c=c(g),c!=g&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(c){var d=[],g;for(g in c)Object.prototype.hasOwnProperty.call(c,g)&&d.push([g,c[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function u(a,c,d){return a.call.apply(a.bind,arguments)}function h(a,c,d){return h=u,h.apply(null,arguments)}function f(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function m(a,c){function d(){}d.prototype=c.prototype,a.Z=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,P,N){for(var B=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)B[ie-2]=arguments[ie];return c.prototype[P].apply(g,B)}}var y=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function k(a){const c=a.length;if(c>0){const d=Array(c);for(let g=0;g<c;g++)d[g]=a[g];return d}return[]}function b(a,c){for(let g=1;g<arguments.length;g++){const P=arguments[g];var d=typeof P;if(d=d!="object"?d:P?Array.isArray(P)?"array":d:"null",d=="array"||d=="object"&&typeof P.length=="number"){d=a.length||0;const N=P.length||0;a.length=d+N;for(let B=0;B<N;B++)a[d+B]=P[B]}else a.push(P)}}class D{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function L(a){o.setTimeout(()=>{throw a},0)}function S(){var a=v;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class w{constructor(){this.h=this.g=null}add(c,d){const g=x.get();g.set(c,d),this.h?this.h.next=g:this.g=g,this.h=g}}var x=new D(()=>new M,a=>a.reset());class M{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let U,z=!1,v=new w,_=()=>{const a=Promise.resolve(void 0);U=()=>{a.then(E)}};function E(){for(var a;a=S();){try{a.h.call(a.g)}catch(d){L(d)}var c=x;c.j(a),c.h<100&&(c.h++,a.next=c.g,c.g=a)}z=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function C(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,c),o.removeEventListener("test",d,c)}catch{}return a}();function T(a){return/^[\s\xa0]*$/.test(a)}function Oe(a,c){C.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,c)}m(Oe,C),Oe.prototype.init=function(a,c){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget,c||(d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement)),this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Oe.Z.h.call(this)},Oe.prototype.h=function(){Oe.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Lt="closure_listenable_"+(Math.random()*1e6|0),sr=0;function Se(a,c,d,g,P){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!g,this.ha=P,this.key=++sr,this.da=this.fa=!1}function $(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function X(a,c,d){for(const g in a)c.call(d,a[g],g,a)}function se(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function me(a){const c={};for(const d in a)c[d]=a[d];return c}const xe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Gt(a,c){let d,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(d in g)a[d]=g[d];for(let N=0;N<xe.length;N++)d=xe[N],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function tt(a){this.src=a,this.g={},this.h=0}tt.prototype.add=function(a,c,d,g,P){const N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);const B=Et(a,c,g,P);return B>-1?(c=a[B],d||(c.fa=!1)):(c=new Se(c,this.src,N,!!g,P),c.fa=d,a.push(c)),c};function wt(a,c){const d=c.type;if(d in a.g){var g=a.g[d],P=Array.prototype.indexOf.call(g,c,void 0),N;(N=P>=0)&&Array.prototype.splice.call(g,P,1),N&&($(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Et(a,c,d,g){for(let P=0;P<a.length;++P){const N=a[P];if(!N.da&&N.listener==c&&N.capture==!!d&&N.ha==g)return P}return-1}var Kt="closure_lm_"+(Math.random()*1e6|0),Bi={};function js(a,c,d,g,P){if(Array.isArray(c)){for(let N=0;N<c.length;N++)js(a,c[N],d,g,P);return null}return d=Gi(d),a&&a[Lt]?a.J(c,d,l(g)?!!g.capture:!1,P):ka(a,c,d,!1,g,P)}function ka(a,c,d,g,P,N){if(!c)throw Error("Invalid event type");const B=l(P)?!!P.capture:!!P;let ie=Fs(a);if(ie||(a[Kt]=ie=new tt(a)),d=ie.add(c,d,g,B,N),d.proxy)return d;if(g=$i(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)R||(P=B),P===void 0&&(P=!1),a.addEventListener(c.toString(),g,P);else if(a.attachEvent)a.attachEvent(qi(c.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function $i(){function a(d){return c.call(a.src,a.listener,d)}const c=Wi;return a}function Hi(a,c,d,g,P){if(Array.isArray(c))for(var N=0;N<c.length;N++)Hi(a,c[N],d,g,P);else g=l(g)?!!g.capture:!!g,d=Gi(d),a&&a[Lt]?(a=a.i,N=String(c).toString(),N in a.g&&(c=a.g[N],d=Et(c,d,g,P),d>-1&&($(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete a.g[N],a.h--)))):a&&(a=Fs(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Et(c,d,g,P)),(d=a>-1?c[a]:null)&&ir(d))}function ir(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[Lt])wt(c.i,a);else{var d=a.type,g=a.proxy;c.removeEventListener?c.removeEventListener(d,g,a.capture):c.detachEvent?c.detachEvent(qi(d),g):c.addListener&&c.removeListener&&c.removeListener(g),(d=Fs(c))?(wt(d,a),d.h==0&&(d.src=null,c[Kt]=null)):$(a)}}}function qi(a){return a in Bi?Bi[a]:Bi[a]="on"+a}function Wi(a,c){if(a.da)a=!0;else{c=new Oe(c,this);const d=a.listener,g=a.ha||a.src;a.fa&&ir(a),a=d.call(g,c)}return a}function Fs(a){return a=a[Kt],a instanceof tt?a:null}var Us="__closure_events_fn_"+(Math.random()*1e9>>>0);function Gi(a){return typeof a=="function"?a:(a[Us]||(a[Us]=function(c){return a.handleEvent(c)}),a[Us])}function qe(){I.call(this),this.i=new tt(this),this.M=this,this.G=null}m(qe,I),qe.prototype[Lt]=!0,qe.prototype.removeEventListener=function(a,c,d,g){Hi(this,a,c,d,g)};function We(a,c){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=c.type||c,typeof c=="string")c=new C(c,a);else if(c instanceof C)c.target=c.target||a;else{var P=c;c=new C(g,a),Gt(c,P)}P=!0;let N,B;if(d)for(B=d.length-1;B>=0;B--)N=c.g=d[B],P=Yr(N,g,!0,c)&&P;if(N=c.g=a,P=Yr(N,g,!0,c)&&P,P=Yr(N,g,!1,c)&&P,d)for(B=0;B<d.length;B++)N=c.g=d[B],P=Yr(N,g,!1,c)&&P}qe.prototype.N=function(){if(qe.Z.N.call(this),this.i){var a=this.i;for(const c in a.g){const d=a.g[c];for(let g=0;g<d.length;g++)$(d[g]);delete a.g[c],a.h--}}this.G=null},qe.prototype.J=function(a,c,d,g){return this.i.add(String(a),c,!1,d,g)},qe.prototype.K=function(a,c,d,g){return this.i.add(String(a),c,!0,d,g)};function Yr(a,c,d,g){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();let P=!0;for(let N=0;N<c.length;++N){const B=c[N];if(B&&!B.da&&B.capture==d){const ie=B.listener,Ue=B.ha||B.src;B.fa&&wt(a.i,B),P=ie.call(Ue,g)!==!1&&P}}return P&&!g.defaultPrevented}function Ra(a,c){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:o.setTimeout(a,c||0)}function Xr(a){a.g=Ra(()=>{a.g=null,a.i&&(a.i=!1,Xr(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class Pa extends I{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Xr(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vn(a){I.call(this),this.h=a,this.g={}}m(vn,I);var Na=[];function gc(a){X(a.g,function(c,d){this.g.hasOwnProperty(d)&&ir(c)},a),a.g={}}vn.prototype.N=function(){vn.Z.N.call(this),gc(this)},vn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ba=o.JSON.stringify,_p=o.JSON.parse,vp=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function yc(){}function _c(){}var zs={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Da(){C.call(this,"d")}m(Da,C);function Va(){C.call(this,"c")}m(Va,C);var or={},Ki=null;function Jr(){return Ki=Ki||new qe}or.Ia="serverreachability";function vc(a){C.call(this,or.Ia,a)}m(vc,C);function jt(a){const c=Jr();We(c,new vc(c))}or.STAT_EVENT="statevent";function Ma(a,c){C.call(this,or.STAT_EVENT,a),this.stat=c}m(Ma,C);function nt(a){const c=Jr();We(c,new Ma(c,a))}or.Ja="timingevent";function Oa(a,c){C.call(this,or.Ja,a),this.size=c}m(Oa,C);function Zr(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},c)}function es(){this.g=!0}es.prototype.ua=function(){this.g=!1};function La(a,c,d,g,P,N){a.info(function(){if(a.g)if(N){var B="",ie=N.split("&");for(let ge=0;ge<ie.length;ge++){var Ue=ie[ge].split("=");if(Ue.length>1){const Ye=Ue[0];Ue=Ue[1];const Tn=Ye.split("_");B=Tn.length>=2&&Tn[1]=="type"?B+(Ye+"="+Ue+"&"):B+(Ye+"=redacted&")}}}else B=null;else B=N;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+c+`
`+d+`
`+B})}function ts(a,c,d,g,P,N,B){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+c+`
`+d+`
`+N+" "+B})}function Qt(a,c,d,g){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+ja(a,d)+(g?" "+g:"")})}function wc(a,c){a.info(function(){return"TIMEOUT: "+c})}es.prototype.info=function(){};function ja(a,c){if(!a.g)return c;if(!c)return null;try{const N=JSON.parse(c);if(N){for(a=0;a<N.length;a++)if(Array.isArray(N[a])){var d=N[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var P=g[0];if(P!="noop"&&P!="stop"&&P!="close")for(let B=1;B<g.length;B++)g[B]=""}}}}return ba(N)}catch{return c}}var ar={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Qi={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Fa;function Yi(){}m(Yi,yc),Yi.prototype.g=function(){return new XMLHttpRequest},Fa=new Yi;function ns(a){return encodeURIComponent(String(a))}function Ec(a){var c=1;a=a.split(":");const d=[];for(;c>0&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function wn(a,c,d,g){this.j=a,this.i=c,this.l=d,this.S=g||1,this.V=new vn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ua}function Ua(){this.i=null,this.g="",this.h=!1}var za={},Xi={};function Bs(a,c,d){a.M=1,a.A=H(kt(c)),a.u=d,a.R=!0,rt(a,null)}function rt(a,c){a.F=Date.now(),rs(a),a.B=kt(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),Qe(d.i,"t",g),a.C=0,d=a.j.L,a.h=new Ua,a.g=Op(a.j,d?c:null,!a.u),a.P>0&&(a.O=new Pa(h(a.Y,a,a.g),a.P)),c=a.V,d=a.g,g=a.ba;var P="readystatechange";Array.isArray(P)||(P&&(Na[0]=P.toString()),P=Na);for(let N=0;N<P.length;N++){const B=js(d,P[N],g||c.handleEvent,!1,c.h||c);if(!B)break;c.g[B.key]=B}c=a.J?me(a.J):{},a.u?(a.v||(a.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,c)):(a.v="GET",a.g.ea(a.B,a.v,null,c)),jt(),La(a.i,a.v,a.B,a.l,a.S,a.u)}wn.prototype.ba=function(a){a=a.target;const c=this.O;c&&hr(a)==3?c.j():this.Y(a)},wn.prototype.Y=function(a){try{if(a==this.g)e:{const ie=hr(this.g),Ue=this.g.ya(),ge=this.g.ca();if(!(ie<3)&&(ie!=3||this.g&&(this.h.h||this.g.la()||xp(this.g)))){this.K||ie!=4||Ue==7||(Ue==8||ge<=0?jt(3):jt(2)),eo(this);var c=this.g.ca();this.X=c;var d=Ji(this);if(this.o=c==200,ts(this.i,this.v,this.B,this.l,this.S,ie,c),this.o){if(this.U&&!this.L){t:{if(this.g){var g,P=this.g;if((g=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(g)){var N=g;break t}}N=null}if(a=N)Qt(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ur(this,a);else{this.o=!1,this.m=3,nt(12),En(this),lr(this);break e}}if(this.R){a=!0;let Ye;for(;!this.K&&this.C<d.length;)if(Ye=Ba(this,d),Ye==Xi){ie==4&&(this.m=4,nt(14),a=!1),Qt(this.i,this.l,null,"[Incomplete Response]");break}else if(Ye==za){this.m=4,nt(15),Qt(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Qt(this.i,this.l,Ye,null),ur(this,Ye);if(Ln(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ie!=4||d.length!=0||this.h.h||(this.m=1,nt(16),a=!1),this.o=this.o&&a,!a)Qt(this.i,this.l,d,"[Invalid Chunked Response]"),En(this),lr(this);else if(d.length>0&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.aa&&!B.P&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Ac(B),B.P=!0,nt(11))}}else Qt(this.i,this.l,d,null),ur(this,d);ie==4&&En(this),this.o&&!this.K&&(ie==4?bp(this.j,this):(this.o=!1,rs(this)))}else h1(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,nt(12)):(this.m=0,nt(13)),En(this),lr(this)}}}catch{}finally{}};function Ji(a){if(!Ln(a))return a.g.la();const c=xp(a.g);if(c==="")return"";let d="";const g=c.length,P=hr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return En(a),lr(a),"";a.h.i=new o.TextDecoder}for(let N=0;N<g;N++)a.h.h=!0,d+=a.h.i.decode(c[N],{stream:!(P&&N==g-1)});return c.length=0,a.h.g+=d,a.C=0,a.h.g}function Ln(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Ba(a,c){var d=a.C,g=c.indexOf(`
`,d);return g==-1?Xi:(d=Number(c.substring(d,g)),isNaN(d)?za:(g+=1,g+d>c.length?Xi:(c=c.slice(g,g+d),a.C=g+d,c)))}wn.prototype.cancel=function(){this.K=!0,En(this)};function rs(a){a.T=Date.now()+a.H,Zi(a,a.H)}function Zi(a,c){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Zr(h(a.aa,a),c)}function eo(a){a.D&&(o.clearTimeout(a.D),a.D=null)}wn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(wc(this.i,this.B),this.M!=2&&(jt(),nt(17)),En(this),this.m=2,lr(this)):Zi(this,this.T-a)};function lr(a){a.j.I==0||a.K||bp(a.j,a)}function En(a){eo(a);var c=a.O;c&&typeof c.dispose=="function"&&c.dispose(),a.O=null,gc(a.V),a.g&&(c=a.g,a.g=null,c.abort(),c.dispose())}function ur(a,c){try{var d=a.j;if(d.I!=0&&(d.g==a||is(d.h,a))){if(!a.L&&is(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Za(d),Xa(d);else break e;xc(d),nt(18)}}else d.xa=P[1],0<d.xa-d.K&&P[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Zr(h(d.Va,d),6e3));ss(d.h)<=1&&d.ta&&(d.ta=void 0)}else ls(d,11)}else if((a.L||d.g==a)&&Za(d),!T(c))for(P=d.Ba.g.parse(c),c=0;c<P.length;c++){let ge=P[c];const Ye=ge[0];if(!(Ye<=d.K))if(d.K=Ye,ge=ge[1],d.I==2)if(ge[0]=="c"){d.M=ge[1],d.ba=ge[2];const Tn=ge[3];Tn!=null&&(d.ka=Tn,d.j.info("VER="+d.ka));const us=ge[4];us!=null&&(d.za=us,d.j.info("SVER="+d.za));const dr=ge[5];dr!=null&&typeof dr=="number"&&dr>0&&(g=1.5*dr,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const fr=a.g;if(fr){const tl=fr.g?fr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(tl){var N=g.h;N.g||tl.indexOf("spdy")==-1&&tl.indexOf("quic")==-1&&tl.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(no(N,N.h),N.h=null))}if(g.G){const Cc=fr.g?fr.g.getResponseHeader("X-HTTP-Session-Id"):null;Cc&&(g.wa=Cc,V(g.J,g.G,Cc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var B=a;if(g.na=Mp(g,g.L?g.ba:null,g.W),B.L){qa(g.h,B);var ie=B,Ue=g.O;Ue&&(ie.H=Ue),ie.D&&(eo(ie),rs(ie)),g.g=B}else Pp(g);d.i.length>0&&Ja(d)}else ge[0]!="stop"&&ge[0]!="close"||ls(d,7);else d.I==3&&(ge[0]=="stop"||ge[0]=="close"?ge[0]=="stop"?ls(d,7):Sc(d):ge[0]!="noop"&&d.l&&d.l.qa(ge),d.A=0)}}jt(4)}catch{}}var $a=class{constructor(a,c){this.g=a,this.map=c}};function Ha(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function to(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ss(a){return a.h?1:a.g?a.g.size:0}function is(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function no(a,c){a.g?a.g.add(c):a.h=c}function qa(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Ha.prototype.cancel=function(){if(this.i=Wa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Wa(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.G);return c}return k(a.i)}var Ga=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ka(a,c){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let P,N=null;g>=0?(P=a[d].substring(0,g),N=a[d].substring(g+1)):P=a[d],c(P,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Ft(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;a instanceof Ft?(this.l=a.l,os(this,a.j),this.o=a.o,this.g=a.g,as(this,a.u),this.h=a.h,A(this,Tt(a.i)),this.m=a.m):a&&(c=String(a).match(Ga))?(this.l=!1,os(this,c[1]||"",!0),this.o=Q(c[2]||""),this.g=Q(c[3]||"",!0),as(this,c[4]),this.h=Q(c[5]||"",!0),A(this,c[6]||"",!0),this.m=Q(c[7]||"")):(this.l=!1,this.i=new ht(null,this.l))}Ft.prototype.toString=function(){const a=[];var c=this.j;c&&a.push(K(c,De,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(K(c,De,!0),"@"),a.push(ns(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(K(d,d.charAt(0)=="/"?Ke:Ge,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",K(d,Yt)),a.join("")},Ft.prototype.resolve=function(a){const c=kt(this);let d=!!a.j;d?os(c,a.j):d=!!a.o,d?c.o=a.o:d=!!a.g,d?c.g=a.g:d=a.u!=null;var g=a.h;if(d)as(c,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var P=c.h.lastIndexOf("/");P!=-1&&(g=c.h.slice(0,P+1)+g)}if(P=g,P==".."||P==".")g="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){g=P.lastIndexOf("/",0)==0,P=P.split("/");const N=[];for(let B=0;B<P.length;){const ie=P[B++];ie=="."?g&&B==P.length&&N.push(""):ie==".."?((N.length>1||N.length==1&&N[0]!="")&&N.pop(),g&&B==P.length&&N.push("")):(N.push(ie),g=!0)}g=N.join("/")}else g=P}return d?c.h=g:d=a.i.toString()!=="",d?A(c,Tt(a.i)):d=!!a.m,d&&(c.m=a.m),c};function kt(a){return new Ft(a)}function os(a,c,d){a.j=d?Q(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function as(a,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);a.u=c}else a.u=null}function A(a,c,d){c instanceof ht?(a.i=c,jn(a.i,a.l)):(d||(c=K(c,Rt)),a.i=new ht(c,a.l))}function V(a,c,d){a.i.set(c,d)}function H(a){return V(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Q(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function K(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,ye),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ye(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var De=/[#\/\?@]/g,Ge=/[#\?:]/g,Ke=/[#\?]/g,Rt=/[#\?@]/g,Yt=/#/g;function ht(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Xt(a){a.g||(a.g=new Map,a.h=0,a.i&&Ka(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=ht.prototype,t.add=function(a,c){Xt(this),this.i=null,a=Pt(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function st(a,c){Xt(a),c=Pt(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function q(a,c){return Xt(a),c=Pt(a,c),a.g.has(c)}t.forEach=function(a,c){Xt(this),this.g.forEach(function(d,g){d.forEach(function(P){a.call(c,P,g,this)},this)},this)};function _e(a,c){Xt(a);let d=[];if(typeof c=="string")q(a,c)&&(d=d.concat(a.g.get(Pt(a,c))));else for(a=Array.from(a.g.values()),c=0;c<a.length;c++)d=d.concat(a[c]);return d}t.set=function(a,c){return Xt(this),this.i=null,a=Pt(this,a),q(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=_e(this,a),a.length>0?String(a[0]):c):c};function Qe(a,c,d){st(a,c),d.length>0&&(a.i=null,a.g.set(Pt(a,c),k(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(let g=0;g<c.length;g++){var d=c[g];const P=ns(d);d=_e(this,d);for(let N=0;N<d.length;N++){let B=P;d[N]!==""&&(B+="="+ns(d[N])),a.push(B)}}return this.i=a.join("&")};function Tt(a){const c=new ht;return c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),c}function Pt(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function jn(a,c){c&&!a.j&&(Xt(a),a.i=null,a.g.forEach(function(d,g){const P=g.toLowerCase();g!=P&&(st(this,g),Qe(this,P,d))},a)),a.j=c}function o1(a,c){const d=new es;if(o.Image){const g=new Image;g.onload=f(cr,d,"TestLoadImage: loaded",!0,c,g),g.onerror=f(cr,d,"TestLoadImage: error",!1,c,g),g.onabort=f(cr,d,"TestLoadImage: abort",!1,c,g),g.ontimeout=f(cr,d,"TestLoadImage: timeout",!1,c,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else c(!1)}function a1(a,c){const d=new es,g=new AbortController,P=setTimeout(()=>{g.abort(),cr(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:g.signal}).then(N=>{clearTimeout(P),N.ok?cr(d,"TestPingServer: ok",!0,c):cr(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),cr(d,"TestPingServer: error",!1,c)})}function cr(a,c,d,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(d)}catch{}}function l1(){this.g=new vp}function Tc(a){this.i=a.Sb||null,this.h=a.ab||!1}m(Tc,yc),Tc.prototype.g=function(){return new Qa(this.i,this.h)};function Qa(a,c){qe.call(this),this.H=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(Qa,qe),t=Qa.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=c,this.readyState=1,so(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(c.body=a),(this.H||o).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ro(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,so(this)),this.g&&(this.readyState=3,so(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;wp(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function wp(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?ro(this):so(this),this.readyState==3&&wp(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,ro(this))},t.Na=function(a){this.g&&(this.response=a,ro(this))},t.ga=function(){this.g&&ro(this)};function ro(a){a.readyState=4,a.l=null,a.j=null,a.B=null,so(a)}t.setRequestHeader=function(a,c){this.A.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function so(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Qa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ep(a){let c="";return X(a,function(d,g){c+=g,c+=":",c+=d,c+=`\r
`}),c}function Ic(a,c,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Ep(d),typeof a=="string"?d!=null&&ns(d):V(a,c,d))}function Ne(a){qe.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Ne,qe);var u1=/^https?$/i,c1=["POST","PUT"];t=Ne.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,c,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Fa.g(),this.g.onreadystatechange=y(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(N){Tp(this,N);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)d.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const N of g.keys())d.set(N,g.get(N));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),P=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(c1,c,void 0)>=0)||g||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,B]of d)this.g.setRequestHeader(N,B);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(N){Tp(this,N)}};function Tp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.o=5,Ip(a),Ya(a)}function Ip(a){a.A||(a.A=!0,We(a,"complete"),We(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,We(this,"complete"),We(this,"abort"),Ya(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ya(this,!0)),Ne.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Sp(this):this.Xa())},t.Xa=function(){Sp(this)};function Sp(a){if(a.h&&typeof i<"u"){if(a.v&&hr(a)==4)setTimeout(a.Ca.bind(a),0);else if(We(a,"readystatechange"),hr(a)==4){a.h=!1;try{const N=a.ca();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var g;if(g=N===0){let B=String(a.D).match(Ga)[1]||null;!B&&o.self&&o.self.location&&(B=o.self.location.protocol.slice(0,-1)),g=!u1.test(B?B.toLowerCase():"")}d=g}if(d)We(a,"complete"),We(a,"success");else{a.o=6;try{var P=hr(a)>2?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.ca()+"]",Ip(a)}}finally{Ya(a)}}}}function Ya(a,c){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,c||We(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function hr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return hr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),_p(c)}};function xp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function h1(a){const c={};a=(a.g&&hr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(T(a[g]))continue;var d=Ec(a[g]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=c[P]||[];c[P]=N,N.push(d)}se(c,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function io(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Ap(a){this.za=0,this.i=[],this.j=new es,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=io("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=io("baseRetryDelayMs",5e3,a),this.Za=io("retryDelaySeedMs",1e4,a),this.Ta=io("forwardChannelMaxRetries",2,a),this.va=io("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Ha(a&&a.concurrentRequestLimit),this.Ba=new l1,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Ap.prototype,t.ka=8,t.I=1,t.connect=function(a,c,d,g){nt(0),this.W=a,this.H=c||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=Mp(this,null,this.W),Ja(this)};function Sc(a){if(Cp(a),a.I==3){var c=a.V++,d=kt(a.J);if(V(d,"SID",a.M),V(d,"RID",c),V(d,"TYPE","terminate"),oo(a,d),c=new wn(a,a.j,c),c.M=2,c.A=H(kt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=c.A,d=!0),d||(c.g=Op(c.j,null),c.g.ea(c.A)),c.F=Date.now(),rs(c)}Vp(a)}function Xa(a){a.g&&(Ac(a),a.g.cancel(),a.g=null)}function Cp(a){Xa(a),a.v&&(o.clearTimeout(a.v),a.v=null),Za(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ja(a){if(!to(a.h)&&!a.m){a.m=!0;var c=a.Ea;U||_(),z||(U(),z=!0),v.add(c,a),a.D=0}}function d1(a,c){return ss(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=c.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Zr(h(a.Ea,a,c),Dp(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const P=new wn(this,this.j,a);let N=this.o;if(this.U&&(N?(N=me(N),Gt(N,this.U)):N=this.U),this.u!==null||this.R||(P.J=N,N=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Rp(this,P,c),d=kt(this.J),V(d,"RID",a),V(d,"CVER",22),this.G&&V(d,"X-HTTP-Session-Id",this.G),oo(this,d),N&&(this.R?c="headers="+ns(Ep(N))+"&"+c:this.u&&Ic(d,this.u,N)),no(this.h,P),this.Ra&&V(d,"TYPE","init"),this.S?(V(d,"$req",c),V(d,"SID","null"),P.U=!0,Bs(P,d,null)):Bs(P,d,c),this.I=2}}else this.I==3&&(a?kp(this,a):this.i.length==0||to(this.h)||kp(this))};function kp(a,c){var d;c?d=c.l:d=a.V++;const g=kt(a.J);V(g,"SID",a.M),V(g,"RID",d),V(g,"AID",a.K),oo(a,g),a.u&&a.o&&Ic(g,a.u,a.o),d=new wn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),c&&(a.i=c.G.concat(a.i)),c=Rp(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),no(a.h,d),Bs(d,g,c)}function oo(a,c){a.H&&X(a.H,function(d,g){V(c,g,d)}),a.l&&X({},function(d,g){V(c,g,d)})}function Rp(a,c,d){d=Math.min(a.i.length,d);const g=a.l?h(a.l.Ka,a.l,a):null;e:{var P=a.i;let ie=-1;for(;;){const Ue=["count="+d];ie==-1?d>0?(ie=P[0].g,Ue.push("ofs="+ie)):ie=0:Ue.push("ofs="+ie);let ge=!0;for(let Ye=0;Ye<d;Ye++){var N=P[Ye].g;const Tn=P[Ye].map;if(N-=ie,N<0)ie=Math.max(0,P[Ye].g-100),ge=!1;else try{N="req"+N+"_"||"";try{var B=Tn instanceof Map?Tn:Object.entries(Tn);for(const[us,dr]of B){let fr=dr;l(dr)&&(fr=ba(dr)),Ue.push(N+us+"="+encodeURIComponent(fr))}}catch(us){throw Ue.push(N+"type="+encodeURIComponent("_badmap")),us}}catch{g&&g(Tn)}}if(ge){B=Ue.join("&");break e}}B=void 0}return a=a.i.splice(0,d),c.G=a,B}function Pp(a){if(!a.g&&!a.v){a.Y=1;var c=a.Da;U||_(),z||(U(),z=!0),v.add(c,a),a.A=0}}function xc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Zr(h(a.Da,a),Dp(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Np(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Zr(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,nt(10),Xa(this),Np(this))};function Ac(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Np(a){a.g=new wn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var c=kt(a.na);V(c,"RID","rpc"),V(c,"SID",a.M),V(c,"AID",a.K),V(c,"CI",a.F?"0":"1"),!a.F&&a.ia&&V(c,"TO",a.ia),V(c,"TYPE","xmlhttp"),oo(a,c),a.u&&a.o&&Ic(c,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=H(kt(c)),d.u=null,d.R=!0,rt(d,a)}t.Va=function(){this.C!=null&&(this.C=null,Xa(this),xc(this),nt(19))};function Za(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function bp(a,c){var d=null;if(a.g==c){Za(a),Ac(a),a.g=null;var g=2}else if(is(a.h,c))d=c.G,qa(a.h,c),g=1;else return;if(a.I!=0){if(c.o)if(g==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var P=a.D;g=Jr(),We(g,new Oa(g,d)),Ja(a)}else Pp(a);else if(P=c.m,P==3||P==0&&c.X>0||!(g==1&&d1(a,c)||g==2&&xc(a)))switch(d&&d.length>0&&(c=a.h,c.i=c.i.concat(d)),P){case 1:ls(a,5);break;case 4:ls(a,10);break;case 3:ls(a,6);break;default:ls(a,2)}}}function Dp(a,c){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*c}function ls(a,c){if(a.j.info("Error code "+c),c==2){var d=h(a.bb,a),g=a.Ua;const P=!g;g=new Ft(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||os(g,"https"),H(g),P?o1(g.toString(),d):a1(g.toString(),d)}else nt(2);a.I=0,a.l&&a.l.pa(c),Vp(a),Cp(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function Vp(a){if(a.I=0,a.ja=[],a.l){const c=Wa(a.h);(c.length!=0||a.i.length!=0)&&(b(a.ja,c),b(a.ja,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.oa()}}function Mp(a,c,d){var g=d instanceof Ft?kt(d):new Ft(d);if(g.g!="")c&&(g.g=c+"."+g.g),as(g,g.u);else{var P=o.location;g=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;const N=new Ft(null);g&&os(N,g),c&&(N.g=c),P&&as(N,P),d&&(N.h=d),g=N}return d=a.G,c=a.wa,d&&c&&V(g,d,c),V(g,"VER",a.ka),oo(a,g),g}function Op(a,c,d){if(c&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Aa&&!a.ma?new Ne(new Tc({ab:d})):new Ne(a.ma),c.Fa(a.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Lp(){}t=Lp.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function el(){}el.prototype.g=function(a,c){return new Ut(a,c)};function Ut(a,c){qe.call(this),this.g=new Ap(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(a?a["X-WebChannel-Client-Profile"]=c.sa:a={"X-WebChannel-Client-Profile":c.sa}),this.g.U=a,(a=c&&c.Qb)&&!T(a)&&(this.g.u=a),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!T(c)&&(this.g.G=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new $s(this)}m(Ut,qe),Ut.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ut.prototype.close=function(){Sc(this.g)},Ut.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=ba(a),a=d);c.i.push(new $a(c.Ya++,a)),c.I==3&&Ja(c)},Ut.prototype.N=function(){this.g.l=null,delete this.j,Sc(this.g),delete this.g,Ut.Z.N.call(this)};function jp(a){Da.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}m(jp,Da);function Fp(){Va.call(this),this.status=1}m(Fp,Va);function $s(a){this.g=a}m($s,Lp),$s.prototype.ra=function(){We(this.g,"a")},$s.prototype.qa=function(a){We(this.g,new jp(a))},$s.prototype.pa=function(a){We(this.g,new Fp)},$s.prototype.oa=function(){We(this.g,"b")},el.prototype.createWebChannel=el.prototype.g,Ut.prototype.send=Ut.prototype.o,Ut.prototype.open=Ut.prototype.m,Ut.prototype.close=Ut.prototype.close,L0=function(){return new el},O0=function(){return Jr()},M0=or,yd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ar.NO_ERROR=0,ar.TIMEOUT=8,ar.HTTP_ERROR=6,Bl=ar,Qi.COMPLETE="complete",V0=Qi,_c.EventType=zs,zs.OPEN="a",zs.CLOSE="b",zs.ERROR="c",zs.MESSAGE="d",qe.prototype.listen=qe.prototype.J,wo=_c,Ne.prototype.listenOnce=Ne.prototype.K,Ne.prototype.getLastError=Ne.prototype.Ha,Ne.prototype.getLastErrorCode=Ne.prototype.ya,Ne.prototype.getStatus=Ne.prototype.ca,Ne.prototype.getResponseJson=Ne.prototype.La,Ne.prototype.getResponseText=Ne.prototype.la,Ne.prototype.send=Ne.prototype.ea,Ne.prototype.setWithCredentials=Ne.prototype.Fa,D0=Ne}).apply(typeof El<"u"?El:typeof self<"u"?self:typeof window<"u"?window:{});const bg="@firebase/firestore",Dg="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ji="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=new kf("@firebase/firestore");function qs(){return Ps.logLevel}function W(t,...e){if(Ps.logLevel<=ae.DEBUG){const n=e.map(zf);Ps.debug(`Firestore (${ji}): ${t}`,...n)}}function er(t,...e){if(Ps.logLevel<=ae.ERROR){const n=e.map(zf);Ps.error(`Firestore (${ji}): ${t}`,...n)}}function Ai(t,...e){if(Ps.logLevel<=ae.WARN){const n=e.map(zf);Ps.warn(`Firestore (${ji}): ${t}`,...n)}}function zf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,j0(t,r,n)}function j0(t,e,n){let r=`FIRESTORE (${ji}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw er(r),new Error(r)}function fe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||j0(e,s,r)}function re(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends rr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class J2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}class Z2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class eA{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){fe(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new jr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new jr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new jr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(fe(typeof r.accessToken=="string",31837,{l:r}),new F0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string",2055,{h:e}),new mt(e)}}class tA{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class nA{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new tA(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Vg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rA{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,dn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){fe(this.o===void 0,3512);const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Vg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(fe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Vg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=sA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function _d(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return uh(s)===uh(i)?le(s,i):uh(s)?1:-1}return le(t.length,e.length)}const iA=55296,oA=57343;function uh(t){const e=t.charCodeAt(0);return e>=iA&&e<=oA}function Ci(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg="__name__";class xn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ee(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return xn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof xn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=xn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return le(e.length,n.length)}static compareSegments(e,n){const r=xn.isNumericId(e),s=xn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?xn.extractNumericId(e).compare(xn.extractNumericId(n)):_d(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Lr.fromString(e.substring(4,e.length-2))}}class Ce extends xn{construct(e,n,r){return new Ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ce(n)}static emptyPath(){return new Ce([])}}const aA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends xn{construct(e,n,r){return new at(e,n,r)}static isValidIdentifier(e){return aA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Mg}static keyField(){return new at([Mg])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Y(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Y(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new Y(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(Ce.fromString(e))}static fromName(e){return new J(Ce.fromString(e).popFirst(5))}static empty(){return new J(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new Ce(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(t,e,n){if(!n)throw new Y(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function uA(t,e,n,r){if(e===!0&&r===!0)throw new Y(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Og(t){if(!J.isDocumentKey(t))throw new Y(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function U0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function $f(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee(12329,{type:typeof t})}function ia(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$f(t);throw new Y(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ia(t,e){if(!U0(t))throw new Y(j.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new Y(j.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg=-62135596800,jg=1e6;class Ee{static now(){return Ee.fromMillis(Date.now())}static fromDate(e){return Ee.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*jg);return new Ee(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Lg)throw new Y(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/jg}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ee._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ia(e,Ee._jsonSchema))return new Ee(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Lg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ee._jsonSchemaVersion="firestore/timestamp/1.0",Ee._jsonSchema={type:Fe("string",Ee._jsonSchemaVersion),seconds:Fe("number"),nanoseconds:Fe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{static fromTimestamp(e){return new ne(e)}static min(){return new ne(new Ee(0,0))}static max(){return new ne(new Ee(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa=-1;function cA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ne.fromTimestamp(r===1e9?new Ee(n+1,0):new Ee(n,r));return new zr(s,J.empty(),e)}function hA(t){return new zr(t.readTime,t.key,oa)}class zr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new zr(ne.min(),J.empty(),oa)}static max(){return new zr(ne.max(),J.empty(),oa)}}function dA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fi(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==fA)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(s=>s?O.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new O((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new O((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function mA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ui(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}sc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf=-1;function ic(t){return t==null}function Au(t){return t===0&&1/t==-1/0}function gA(t){return typeof t=="number"&&Number.isInteger(t)&&!Au(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0="";function yA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Fg(e)),e=_A(t.get(n),e);return Fg(e)}function _A(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case z0:n+="";break;default:n+=i}}return n}function Fg(t){return t+z0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Vs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function B0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,n){this.comparator=e,this.root=n||ot.EMPTY}insert(e,n){return new Pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Tl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Tl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Tl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Tl(this.root,e,this.comparator,!0)}}class Tl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ot.RED,this.left=s??ot.EMPTY,this.right=i??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ot(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ot.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ee(27949);return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw ee(57766)}get value(){throw ee(16141)}get color(){throw ee(16727)}get left(){throw ee(29726)}get right(){throw ee(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new ot(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new zg(this.data.getIterator())}getIteratorFrom(e){return new zg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new He(this.comparator);return n.data=e,n}}class zg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new pn([])}unionWith(e){let n=new He(at.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new pn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ci(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new $0("Invalid base64 string: "+i):i}}(e);return new ct(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const vA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Br(t){if(fe(!!t,39018),typeof t=="string"){let e=0;const n=vA.exec(t);if(fe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function $r(t){return typeof t=="string"?ct.fromBase64String(t):ct.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0="server_timestamp",q0="__type__",W0="__previous_value__",G0="__local_write_time__";function qf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[q0])==null?void 0:r.stringValue)===H0}function oc(t){const e=t.mapValue.fields[W0];return qf(e)?oc(e):e}function aa(t){const e=Br(t.mapValue.fields[G0].timestampValue);return new Ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e,n,r,s,i,o,l,u,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const Cu="(default)";class la{constructor(e,n){this.projectId=e,this.database=n||Cu}static empty(){return new la("","")}get isDefaultDatabase(){return this.database===Cu}isEqual(e){return e instanceof la&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0="__type__",EA="__max__",Il={mapValue:{}},Q0="__vector__",ku="value";function Hr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qf(t)?4:IA(t)?9007199254740991:TA(t)?10:11:ee(28295,{value:t})}function Mn(t,e){if(t===e)return!0;const n=Hr(t);if(n!==Hr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return aa(t).isEqual(aa(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Br(s.timestampValue),l=Br(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return $r(s.bytesValue).isEqual($r(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ve(s.geoPointValue.latitude)===Ve(i.geoPointValue.latitude)&&Ve(s.geoPointValue.longitude)===Ve(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ve(s.integerValue)===Ve(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ve(s.doubleValue),l=Ve(i.doubleValue);return o===l?Au(o)===Au(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ci(t.arrayValue.values||[],e.arrayValue.values||[],Mn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Ug(o)!==Ug(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Mn(o[u],l[u])))return!1;return!0}(t,e);default:return ee(52216,{left:t})}}function ua(t,e){return(t.values||[]).find(n=>Mn(n,e))!==void 0}function ki(t,e){if(t===e)return 0;const n=Hr(t),r=Hr(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ve(i.integerValue||i.doubleValue),u=Ve(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Bg(t.timestampValue,e.timestampValue);case 4:return Bg(aa(t),aa(e));case 5:return _d(t.stringValue,e.stringValue);case 6:return function(i,o){const l=$r(i),u=$r(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=le(l[h],u[h]);if(f!==0)return f}return le(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=le(Ve(i.latitude),Ve(o.latitude));return l!==0?l:le(Ve(i.longitude),Ve(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return $g(t.arrayValue,e.arrayValue);case 10:return function(i,o){var y,k,b,D;const l=i.fields||{},u=o.fields||{},h=(y=l[ku])==null?void 0:y.arrayValue,f=(k=u[ku])==null?void 0:k.arrayValue,m=le(((b=h==null?void 0:h.values)==null?void 0:b.length)||0,((D=f==null?void 0:f.values)==null?void 0:D.length)||0);return m!==0?m:$g(h,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Il.mapValue&&o===Il.mapValue)return 0;if(i===Il.mapValue)return 1;if(o===Il.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const y=_d(u[m],f[m]);if(y!==0)return y;const k=ki(l[u[m]],h[f[m]]);if(k!==0)return k}return le(u.length,f.length)}(t.mapValue,e.mapValue);default:throw ee(23264,{he:n})}}function Bg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=Br(t),r=Br(e),s=le(n.seconds,r.seconds);return s!==0?s:le(n.nanos,r.nanos)}function $g(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ki(n[s],r[s]);if(i)return i}return le(n.length,r.length)}function Ri(t){return vd(t)}function vd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Br(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return $r(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return J.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=vd(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${vd(n.fields[o])}`;return s+"}"}(t.mapValue):ee(61005,{value:t})}function $l(t){switch(Hr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=oc(t);return e?16+$l(e):16;case 5:return 2*t.stringValue.length;case 6:return $r(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+$l(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Vs(r.fields,(i,o)=>{s+=i.length+$l(o)}),s}(t.mapValue);default:throw ee(13486,{value:t})}}function wd(t){return!!t&&"integerValue"in t}function Wf(t){return!!t&&"arrayValue"in t}function Hg(t){return!!t&&"nullValue"in t}function qg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Hl(t){return!!t&&"mapValue"in t}function TA(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[K0])==null?void 0:r.stringValue)===Q0}function Mo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Vs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Mo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Mo(t.arrayValue.values[n]);return e}return{...t}}function IA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===EA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.value=e}static empty(){return new en({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Hl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Mo(n)}setAll(e){let n=at.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Mo(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Hl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Hl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Vs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new en(Mo(this.value))}}function Y0(t){const e=[];return Vs(t.fields,(n,r)=>{const s=new at([n]);if(Hl(r)){const i=Y0(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new pn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new yt(e,0,ne.min(),ne.min(),ne.min(),en.empty(),0)}static newFoundDocument(e,n,r,s){return new yt(e,1,n,ne.min(),r,s,0)}static newNoDocument(e,n){return new yt(e,2,n,ne.min(),ne.min(),en.empty(),0)}static newUnknownDocument(e,n){return new yt(e,3,n,ne.min(),ne.min(),en.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=en.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=en.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n){this.position=e,this.inclusive=n}}function Wg(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=J.comparator(J.fromName(o.referenceValue),n.key):r=ki(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Gg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Mn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n="asc"){this.field=e,this.dir=n}}function SA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{}class Be extends X0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new AA(e,n,r):n==="array-contains"?new RA(e,r):n==="in"?new PA(e,r):n==="not-in"?new NA(e,r):n==="array-contains-any"?new bA(e,r):new Be(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new CA(e,r):new kA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ki(n,this.value)):n!==null&&Hr(this.value)===Hr(n)&&this.matchesComparison(ki(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class On extends X0{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new On(e,n)}matches(e){return J0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function J0(t){return t.op==="and"}function Z0(t){return xA(t)&&J0(t)}function xA(t){for(const e of t.filters)if(e instanceof On)return!1;return!0}function Ed(t){if(t instanceof Be)return t.field.canonicalString()+t.op.toString()+Ri(t.value);if(Z0(t))return t.filters.map(e=>Ed(e)).join(",");{const e=t.filters.map(n=>Ed(n)).join(",");return`${t.op}(${e})`}}function ew(t,e){return t instanceof Be?function(r,s){return s instanceof Be&&r.op===s.op&&r.field.isEqual(s.field)&&Mn(r.value,s.value)}(t,e):t instanceof On?function(r,s){return s instanceof On&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&ew(o,s.filters[l]),!0):!1}(t,e):void ee(19439)}function tw(t){return t instanceof Be?function(n){return`${n.field.canonicalString()} ${n.op} ${Ri(n.value)}`}(t):t instanceof On?function(n){return n.op.toString()+" {"+n.getFilters().map(tw).join(" ,")+"}"}(t):"Filter"}class AA extends Be{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class CA extends Be{constructor(e,n){super(e,"in",n),this.keys=nw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class kA extends Be{constructor(e,n){super(e,"not-in",n),this.keys=nw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function nw(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>J.fromName(r.referenceValue))}class RA extends Be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Wf(n)&&ua(n.arrayValue,this.value)}}class PA extends Be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ua(this.value.arrayValue,n)}}class NA extends Be{constructor(e,n){super(e,"not-in",n)}matches(e){if(ua(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ua(this.value.arrayValue,n)}}class bA extends Be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Wf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ua(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Kg(t,e=null,n=[],r=[],s=null,i=null,o=null){return new DA(t,e,n,r,s,i,o)}function Gf(t){const e=re(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ed(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ic(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ri(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ri(r)).join(",")),e.Te=n}return e.Te}function Kf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!SA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ew(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Gg(t.startAt,e.startAt)&&Gg(t.endAt,e.endAt)}function Td(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function VA(t,e,n,r,s,i,o,l){return new ac(t,e,n,r,s,i,o,l)}function Qf(t){return new ac(t)}function Qg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function MA(t){return t.collectionGroup!==null}function Oo(t){const e=re(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new He(at.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Pu(i,r))}),n.has(at.keyField().canonicalString())||e.Ie.push(new Pu(at.keyField(),r))}return e.Ie}function Pn(t){const e=re(t);return e.Ee||(e.Ee=OA(e,Oo(t))),e.Ee}function OA(t,e){if(t.limitType==="F")return Kg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Pu(s.field,i)});const n=t.endAt?new Ru(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ru(t.startAt.position,t.startAt.inclusive):null;return Kg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Id(t,e,n){return new ac(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function lc(t,e){return Kf(Pn(t),Pn(e))&&t.limitType===e.limitType}function rw(t){return`${Gf(Pn(t))}|lt:${t.limitType}`}function Ws(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>tw(s)).join(", ")}]`),ic(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ri(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ri(s)).join(",")),`Target(${r})`}(Pn(t))}; limitType=${t.limitType})`}function uc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):J.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Oo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const h=Wg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Oo(r),s)||r.endAt&&!function(o,l,u){const h=Wg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Oo(r),s))}(t,e)}function LA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function sw(t){return(e,n)=>{let r=!1;for(const s of Oo(t)){const i=jA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function jA(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),h=l.data.field(i);return u!==null&&h!==null?ki(u,h):ee(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Vs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return B0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA=new Pe(J.comparator);function tr(){return FA}const iw=new Pe(J.comparator);function Eo(...t){let e=iw;for(const n of t)e=e.insert(n.key,n);return e}function ow(t){let e=iw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ys(){return Lo()}function aw(){return Lo()}function Lo(){return new Ms(t=>t.toString(),(t,e)=>t.isEqual(e))}const UA=new Pe(J.comparator),zA=new He(J.comparator);function ue(...t){let e=zA;for(const n of t)e=e.add(n);return e}const BA=new He(le);function $A(){return BA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Au(e)?"-0":e}}function lw(t){return{integerValue:""+t}}function HA(t,e){return gA(e)?lw(e):Yf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(){this._=void 0}}function qA(t,e,n){return t instanceof Nu?function(s,i){const o={fields:{[q0]:{stringValue:H0},[G0]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&qf(i)&&(i=oc(i)),i&&(o.fields[W0]=i),{mapValue:o}}(n,e):t instanceof ca?cw(t,e):t instanceof ha?hw(t,e):function(s,i){const o=uw(s,i),l=Yg(o)+Yg(s.Ae);return wd(o)&&wd(s.Ae)?lw(l):Yf(s.serializer,l)}(t,e)}function WA(t,e,n){return t instanceof ca?cw(t,e):t instanceof ha?hw(t,e):n}function uw(t,e){return t instanceof bu?function(r){return wd(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Nu extends cc{}class ca extends cc{constructor(e){super(),this.elements=e}}function cw(t,e){const n=dw(e);for(const r of t.elements)n.some(s=>Mn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ha extends cc{constructor(e){super(),this.elements=e}}function hw(t,e){let n=dw(e);for(const r of t.elements)n=n.filter(s=>!Mn(s,r));return{arrayValue:{values:n}}}class bu extends cc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Yg(t){return Ve(t.integerValue||t.doubleValue)}function dw(t){return Wf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function GA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ca&&s instanceof ca||r instanceof ha&&s instanceof ha?Ci(r.elements,s.elements,Mn):r instanceof bu&&s instanceof bu?Mn(r.Ae,s.Ae):r instanceof Nu&&s instanceof Nu}(t.transform,e.transform)}class KA{constructor(e,n){this.version=e,this.transformResults=n}}class Gn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Gn}static exists(e){return new Gn(void 0,e)}static updateTime(e){return new Gn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ql(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class hc{}function fw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new mw(t.key,Gn.none()):new Sa(t.key,t.data,Gn.none());{const n=t.data,r=en.empty();let s=new He(at.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Os(t.key,r,new pn(s.toArray()),Gn.none())}}function QA(t,e,n){t instanceof Sa?function(s,i,o){const l=s.value.clone(),u=Jg(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Os?function(s,i,o){if(!ql(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Jg(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(pw(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function jo(t,e,n,r){return t instanceof Sa?function(i,o,l,u){if(!ql(i.precondition,o))return l;const h=i.value.clone(),f=Zg(i.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Os?function(i,o,l,u){if(!ql(i.precondition,o))return l;const h=Zg(i.fieldTransforms,u,o),f=o.data;return f.setAll(pw(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return ql(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function YA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=uw(r.transform,s||null);i!=null&&(n===null&&(n=en.empty()),n.set(r.field,i))}return n||null}function Xg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ci(r,s,(i,o)=>GA(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Sa extends hc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Os extends hc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function pw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Jg(t,e,n){const r=new Map;fe(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,WA(o,l,n[s]))}return r}function Zg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,qA(i,o,e))}return r}class mw extends hc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class XA extends hc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&QA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=jo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=jo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=aw();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=fw(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(ne.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&Ci(this.mutations,e.mutations,(n,r)=>Xg(n,r))&&Ci(this.baseMutations,e.baseMutations,(n,r)=>Xg(n,r))}}class Xf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){fe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return UA}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Xf(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le,he;function tC(t){switch(t){case j.OK:return ee(64938);case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0;default:return ee(15467,{code:t})}}function gw(t){if(t===void 0)return er("GRPC error has no .code"),j.UNKNOWN;switch(t){case Le.OK:return j.OK;case Le.CANCELLED:return j.CANCELLED;case Le.UNKNOWN:return j.UNKNOWN;case Le.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case Le.INTERNAL:return j.INTERNAL;case Le.UNAVAILABLE:return j.UNAVAILABLE;case Le.UNAUTHENTICATED:return j.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case Le.NOT_FOUND:return j.NOT_FOUND;case Le.ALREADY_EXISTS:return j.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return j.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case Le.ABORTED:return j.ABORTED;case Le.OUT_OF_RANGE:return j.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return j.UNIMPLEMENTED;case Le.DATA_LOSS:return j.DATA_LOSS;default:return ee(39323,{code:t})}}(he=Le||(Le={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC=new Lr([4294967295,4294967295],0);function ey(t){const e=nC().encode(t),n=new b0;return n.update(e),new Uint8Array(n.digest())}function ty(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Lr([n,r],0),new Lr([s,i],0)]}class Jf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new To(`Invalid padding: ${n}`);if(r<0)throw new To(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new To(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new To(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Lr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Lr.fromNumber(r)));return s.compare(rC)===1&&(s=new Lr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=ey(e),[r,s]=ty(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Jf(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=ey(e),[r,s]=ty(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class To extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,xa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new dc(ne.min(),s,new Pe(le),tr(),ue())}}class xa{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new xa(r,n,ue(),ue(),ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class yw{constructor(e,n){this.targetId=e,this.Ce=n}}class _w{constructor(e,n,r=ct.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class ny{constructor(){this.ve=0,this.Fe=ry(),this.Me=ct.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ue(),n=ue(),r=ue();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ee(38017,{changeType:i})}}),new xa(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=ry()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,fe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class sC{constructor(e){this.Ge=e,this.ze=new Map,this.je=tr(),this.Je=Sl(),this.He=Sl(),this.Ye=new Pe(le)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ee(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Td(i))if(r===0){const o=new J(i.path);this.et(n,o,yt.newNoDocument(o,ne.min()))}else fe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=$r(r).toUint8Array()}catch(u){if(u instanceof $0)return Ai("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Jf(o,s,i)}catch(u){return Ai(u instanceof To?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Td(l.target)){const u=new J(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,yt.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=ue();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new dc(e,n,this.Ye,this.je,r);return this.je=tr(),this.Je=Sl(),this.He=Sl(),this.Ye=new Pe(le),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new ny,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new He(le),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new He(le),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new ny),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Sl(){return new Pe(J.comparator)}function ry(){return new Pe(J.comparator)}const iC={asc:"ASCENDING",desc:"DESCENDING"},oC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},aC={and:"AND",or:"OR"};class lC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Sd(t,e){return t.useProto3Json||ic(e)?e:{value:e}}function Du(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function uC(t,e){return Du(t,e.toTimestamp())}function Nn(t){return fe(!!t,49232),ne.fromTimestamp(function(n){const r=Br(n);return new Ee(r.seconds,r.nanos)}(t))}function Zf(t,e){return xd(t,e).canonicalString()}function xd(t,e){const n=function(s){return new Ce(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function ww(t){const e=Ce.fromString(t);return fe(xw(e),10190,{key:e.toString()}),e}function Ad(t,e){return Zf(t.databaseId,e.path)}function ch(t,e){const n=ww(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(Tw(n))}function Ew(t,e){return Zf(t.databaseId,e)}function cC(t){const e=ww(t);return e.length===4?Ce.emptyPath():Tw(e)}function Cd(t){return new Ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Tw(t){return fe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function sy(t,e,n){return{name:Ad(t,e),fields:n.value.mapValue.fields}}function hC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ee(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(fe(f===void 0||typeof f=="string",58123),ct.fromBase64String(f||"")):(fe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ct.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?j.UNKNOWN:gw(h.code);return new Y(f,h.message||"")}(o);n=new _w(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ch(t,r.document.name),i=Nn(r.document.updateTime),o=r.document.createTime?Nn(r.document.createTime):ne.min(),l=new en({mapValue:{fields:r.document.fields}}),u=yt.newFoundDocument(s,i,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Wl(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ch(t,r.document),i=r.readTime?Nn(r.readTime):ne.min(),o=yt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Wl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ch(t,r.document),i=r.removedTargetIds||[];n=new Wl([],i,s,null)}else{if(!("filter"in e))return ee(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new eC(s,i),l=r.targetId;n=new yw(l,o)}}return n}function dC(t,e){let n;if(e instanceof Sa)n={update:sy(t,e.key,e.value)};else if(e instanceof mw)n={delete:Ad(t,e.key)};else if(e instanceof Os)n={update:sy(t,e.key,e.data),updateMask:EC(e.fieldMask)};else{if(!(e instanceof XA))return ee(16599,{Vt:e.type});n={verify:Ad(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Nu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ca)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ha)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof bu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw ee(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:uC(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee(27497)}(t,e.precondition)),n}function fC(t,e){return t&&t.length>0?(fe(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Nn(s.updateTime):Nn(i);return o.isEqual(ne.min())&&(o=Nn(i)),new KA(o,s.transformResults||[])}(n,e))):[]}function pC(t,e){return{documents:[Ew(t,e.path)]}}function mC(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Ew(t,s);const i=function(h){if(h.length!==0)return Sw(On.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:Gs(y.field),direction:_C(y.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Sd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:s}}function gC(t){let e=cC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){fe(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(m){const y=Iw(m);return y instanceof On&&Z0(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(y=>function(b){return new Pu(Ks(b.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(m){let y;return y=typeof m=="object"?m.value:m,ic(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(m){const y=!!m.before,k=m.values||[];return new Ru(k,y)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const y=!m.before,k=m.values||[];return new Ru(k,y)}(n.endAt)),VA(e,s,o,i,l,"F",u,h)}function yC(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Iw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ks(n.unaryFilter.field);return Be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ks(n.unaryFilter.field);return Be.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ks(n.unaryFilter.field);return Be.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ks(n.unaryFilter.field);return Be.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ee(61313);default:return ee(60726)}}(t):t.fieldFilter!==void 0?function(n){return Be.create(Ks(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ee(58110);default:return ee(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return On.create(n.compositeFilter.filters.map(r=>Iw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ee(1026)}}(n.compositeFilter.op))}(t):ee(30097,{filter:t})}function _C(t){return iC[t]}function vC(t){return oC[t]}function wC(t){return aC[t]}function Gs(t){return{fieldPath:t.canonicalString()}}function Ks(t){return at.fromServerFormat(t.fieldPath)}function Sw(t){return t instanceof Be?function(n){if(n.op==="=="){if(qg(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NAN"}};if(Hg(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(qg(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NOT_NAN"}};if(Hg(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gs(n.field),op:vC(n.op),value:n.value}}}(t):t instanceof On?function(n){const r=n.getFilters().map(s=>Sw(s));return r.length===1?r[0]:{compositeFilter:{op:wC(n.op),filters:r}}}(t):ee(54877,{filter:t})}function EC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function xw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n,r,s,i=ne.min(),o=ne.min(),l=ct.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new xr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e){this.yt=e}}function IC(t){const e=gC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Id(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(){this.Cn=new xC}addToCollectionParentIndex(e,n){return this.Cn.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(zr.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(zr.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class xC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new He(Ce.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new He(Ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Aw=41943040;class Nt{static withCacheSize(e){return new Nt(e,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt.DEFAULT_COLLECTION_PERCENTILE=10,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Nt.DEFAULT=new Nt(Aw,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Nt.DISABLED=new Nt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Pi(0)}static cr(){return new Pi(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy="LruGarbageCollector",AC=1048576;function ay([t,e],[n,r]){const s=le(t,n);return s===0?le(e,r):s}class CC{constructor(e){this.Ir=e,this.buffer=new He(ay),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();ay(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class kC{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){W(oy,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ui(n)?W(oy,"Ignoring IndexedDB error during garbage collection: ",n):await Fi(n)}await this.Vr(3e5)})}}class RC{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return O.resolve(sc.ce);const r=new CC(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(iy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),iy):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),qs()<=ae.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function PC(t,e){return new RC(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(){this.changes=new Ms(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,yt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&jo(r.mutation,s,pn.empty(),Ee.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ue()){const s=ys();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Eo();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ys();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ue()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=tr();const o=Lo(),l=function(){return Lo()}();return n.forEach((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Os)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),jo(f.mutation,h,f.mutation.getFieldMask(),Ee.now())):o.set(h.key,pn.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>l.set(h,new bC(f,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Lo();let s=new Pe((o,l)=>o-l),i=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||pn.empty();f=l.applyToLocalView(h,f),r.set(u,f);const m=(s.get(l.batchId)||ue()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,m=aw();f.forEach(y=>{if(!i.has(y)){const k=fw(n.get(y),r.get(y));k!==null&&m.set(y,k),i=i.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return J.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):MA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):O.resolve(ys());let l=oa,u=i;return o.next(h=>O.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(f)?O.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,ue())).next(f=>({batchId:l,changes:ow(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(r=>{let s=Eo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Eo();return this.indexManager.getCollectionParents(e,i).next(l=>O.forEach(l,u=>{const h=function(m,y){return new ac(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((m,y)=>{o=o.insert(m,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,yt.newInvalidDocument(f)))});let l=Eo();return o.forEach((u,h)=>{const f=i.get(u);f!==void 0&&jo(f.mutation,h,pn.empty(),Ee.now()),uc(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return O.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Nn(s.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:IC(s.bundledQuery),readTime:Nn(s.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(){this.overlays=new Pe(J.comparator),this.qr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ys();return O.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const s=ys(),i=n.length+1,o=new J(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return O.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Pe((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=ys(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=ys(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return O.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ZA(n,r));let i=this.qr.get(n);i===void 0&&(i=ue(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(){this.sessionToken=ct.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(){this.Qr=new He(Xe.$r),this.Ur=new He(Xe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Xe(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new Xe(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new J(new Ce([])),r=new Xe(n,e),s=new Xe(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new J(new Ce([])),r=new Xe(n,e),s=new Xe(n,e+1);let i=ue();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Xe(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return J.comparator(e.key,n.key)||le(e.Yr,n.Yr)}static Kr(e,n){return le(e.Yr,n.Yr)||J.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new He(Xe.$r)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new JA(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Zr=this.Zr.add(new Xe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return O.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?Hf:this.tr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Xe(n,0),s=new Xe(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const l=this.Xr(o.Yr);i.push(l)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new He(le);return n.forEach(s=>{const i=new Xe(s,0),o=new Xe(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],l=>{r=r.add(l.Yr)})}),O.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;J.isDocumentKey(i)||(i=i.child(""));const o=new Xe(new J(i),0);let l=new He(le);return this.Zr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.Yr)),!0)},o),O.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){fe(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return O.forEach(n.mutations,s=>{const i=new Xe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new Xe(n,0),s=this.Zr.firstAfterOrEqual(r);return O.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e){this.ri=e,this.docs=function(){return new Pe(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():yt.newInvalidDocument(n))}getEntries(e,n){let r=tr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():yt.newInvalidDocument(s))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=tr();const o=n.path,l=new J(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||dA(hA(f),r)<=0||(s.has(f.key)||uc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return O.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ee(9500)}ii(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new FC(this)}getSize(e){return O.resolve(this.size)}}class FC extends NC{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e){this.persistence=e,this.si=new Ms(n=>Gf(n),Kf),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.oi=0,this._i=new ep,this.targetCount=0,this.ai=Pi.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),O.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Pi(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Pr(n),O.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),O.waitFor(i).next(()=>s)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e,n){this.ui={},this.overlays={},this.ci=new sc(0),this.li=!1,this.li=!0,this.hi=new OC,this.referenceDelegate=e(this),this.Pi=new UC(this),this.indexManager=new SC,this.remoteDocumentCache=function(s){return new jC(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new TC(n),this.Ii=new VC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new MC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new LC(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const s=new zC(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return O.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class zC extends pA{constructor(e){super(),this.currentSequenceNumber=e}}class tp{constructor(e){this.persistence=e,this.Ri=new ep,this.Vi=null}static mi(e){return new tp(e)}get fi(){if(this.Vi)return this.Vi;throw ee(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),O.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.fi,r=>{const s=J.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,ne.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return O.or([()=>O.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Vu{constructor(e,n){this.persistence=e,this.pi=new Ms(r=>yA(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=PC(this,n)}static mi(e,n){return new Vu(e,n)}Ei(){}di(e){return O.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return O.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?O.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,i.removeEntry(o,ne.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),O.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),O.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=$l(e.data.value)),n}br(e,n,r){return O.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return O.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=ue(),s=ue();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new np(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return NI()?8:mA(vt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new BC;return this.Ss(e,n,o).next(l=>{if(i.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(qs()<=ae.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Ws(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),O.resolve()):(qs()<=ae.DEBUG&&W("QueryEngine","Query:",Ws(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(qs()<=ae.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Ws(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Pn(n))):O.resolve())}ys(e,n){if(Qg(n))return O.resolve(null);let r=Pn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Id(n,null,"F"),r=Pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ue(...i);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ds(n,l);return this.Cs(n,h,o,u.readTime)?this.ys(e,Id(n,null,"F")):this.vs(e,h,n,u)}))})))}ws(e,n,r,s){return Qg(n)||s.isEqual(ne.min())?O.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?O.resolve(null):(qs()<=ae.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ws(n)),this.vs(e,o,n,cA(s,oa)).next(l=>l))})}Ds(e,n){let r=new He(sw(e));return n.forEach((s,i)=>{uc(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return qs()<=ae.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Ws(n)),this.ps.getDocumentsMatchingQuery(e,n,zr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp="LocalStore",HC=3e8;class qC{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Pe(le),this.xs=new Ms(i=>Gf(i),Kf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new DC(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function WC(t,e,n,r){return new qC(t,e,n,r)}async function kw(t,e){const n=re(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=ue();for(const h of s){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ls:h,removedBatchIds:o,addedBatchIds:l}))})})}function GC(t,e){const n=re(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const m=h.batch,y=m.keys();let k=O.resolve();return y.forEach(b=>{k=k.next(()=>f.getEntry(u,b)).next(D=>{const L=h.docVersions.get(b);fe(L!==null,48541),D.version.compareTo(L)<0&&(m.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),k.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ue();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Rw(t){const e=re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function KC(t,e){const n=re(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const l=[];e.targetChanges.forEach((f,m)=>{const y=s.get(m);if(!y)return;l.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,m).next(()=>n.Pi.addMatchingKeys(i,f.addedDocuments,m)));let k=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?k=k.withResumeToken(ct.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):f.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(f.resumeToken,r)),s=s.insert(m,k),function(D,L,S){return D.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=HC?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(y,k,f)&&l.push(n.Pi.updateTargetData(i,k))});let u=tr(),h=ue();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(QC(i,o,e.documentUpdates).next(f=>{u=f.ks,h=f.qs})),!r.isEqual(ne.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next(m=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return O.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.Ms=s,i))}function QC(t,e,n){let r=ue(),s=ue();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=tr();return n.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(ne.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W(rp,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{ks:o,qs:s}})}function YC(t,e){const n=re(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Hf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function XC(t,e){const n=re(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,O.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new xr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function kd(t,e,n){const r=re(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ui(o))throw o;W(rp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function ly(t,e,n){const r=re(t);let s=ne.min(),i=ue();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const m=re(u),y=m.xs.get(f);return y!==void 0?O.resolve(m.Ms.get(y)):m.Pi.getTargetData(h,f)}(r,o,Pn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:ne.min(),n?i:ue())).next(l=>(JC(r,LA(e),l),{documents:l,Qs:i})))}function JC(t,e,n){let r=t.Os.get(e)||ne.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class uy{constructor(){this.activeTargetIds=$A()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ZC{constructor(){this.Mo=new uy,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new uy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy="ConnectivityMonitor";class hy{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){W(cy,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){W(cy,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xl=null;function Rd(){return xl===null?xl=function(){return 268435456+Math.round(2147483648*Math.random())}():xl++,"0x"+xl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh="RestConnection",tk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class nk{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Cu?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=Rd(),l=this.zo(e,n.toUriEncodedString());W(hh,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:h}=new URL(l),f=Mi(h);return this.Jo(e,l,u,r,f).then(m=>(W(hh,`Received RPC '${e}' ${o}: `,m),m),m=>{throw Ai(hh,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ji}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=tk[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class sk extends nk{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Rd();return new Promise((l,u)=>{const h=new D0;h.setWithCredentials(!0),h.listenOnce(V0.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Bl.NO_ERROR:const m=h.getResponseJson();W(pt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case Bl.TIMEOUT:W(pt,`RPC '${e}' ${o} timed out`),u(new Y(j.DEADLINE_EXCEEDED,"Request time out"));break;case Bl.HTTP_ERROR:const y=h.getStatus();if(W(pt,`RPC '${e}' ${o} failed with status:`,y,"response text:",h.getResponseText()),y>0){let k=h.getResponseJson();Array.isArray(k)&&(k=k[0]);const b=k==null?void 0:k.error;if(b&&b.status&&b.message){const D=function(S){const w=S.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(w)>=0?w:j.UNKNOWN}(b.status);u(new Y(D,b.message))}else u(new Y(j.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new Y(j.UNAVAILABLE,"Connection failed."));break;default:ee(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{W(pt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);W(pt,`RPC '${e}' ${o} sending request:`,s),h.send(n,"POST",f,r,15)})}T_(e,n,r){const s=Rd(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=L0(),l=O0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=i.join("");W(pt,`Creating RPC '${e}' stream ${s}: ${f}`,u);const m=o.createWebChannel(f,u);this.I_(m);let y=!1,k=!1;const b=new rk({Yo:L=>{k?W(pt,`Not sending because RPC '${e}' stream ${s} is closed:`,L):(y||(W(pt,`Opening RPC '${e}' stream ${s} transport.`),m.open(),y=!0),W(pt,`RPC '${e}' stream ${s} sending:`,L),m.send(L))},Zo:()=>m.close()}),D=(L,S,w)=>{L.listen(S,x=>{try{w(x)}catch(M){setTimeout(()=>{throw M},0)}})};return D(m,wo.EventType.OPEN,()=>{k||(W(pt,`RPC '${e}' stream ${s} transport opened.`),b.o_())}),D(m,wo.EventType.CLOSE,()=>{k||(k=!0,W(pt,`RPC '${e}' stream ${s} transport closed`),b.a_(),this.E_(m))}),D(m,wo.EventType.ERROR,L=>{k||(k=!0,Ai(pt,`RPC '${e}' stream ${s} transport errored. Name:`,L.name,"Message:",L.message),b.a_(new Y(j.UNAVAILABLE,"The operation could not be completed")))}),D(m,wo.EventType.MESSAGE,L=>{var S;if(!k){const w=L.data[0];fe(!!w,16349);const x=w,M=(x==null?void 0:x.error)||((S=x[0])==null?void 0:S.error);if(M){W(pt,`RPC '${e}' stream ${s} received error:`,M);const U=M.status;let z=function(E){const I=Le[E];if(I!==void 0)return gw(I)}(U),v=M.message;z===void 0&&(z=j.INTERNAL,v="Unknown error status: "+U+" with message "+M.message),k=!0,b.a_(new Y(z,v)),m.close()}else W(pt,`RPC '${e}' stream ${s} received:`,w),b.u_(w)}}),D(l,M0.STAT_EVENT,L=>{L.stat===yd.PROXY?W(pt,`RPC '${e}' stream ${s} detected buffering proxy`):L.stat===yd.NOPROXY&&W(pt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{b.__()},0),b}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function dh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(t){return new lC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy="PersistentStream";class Nw{constructor(e,n,r,s,i,o,l,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Pw(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(er(n.toString()),er("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new Y(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return W(dy,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(W(dy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ik extends Nw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=hC(this.serializer,e),r=function(i){if(!("targetChange"in i))return ne.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ne.min():o.readTime?Nn(o.readTime):ne.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Cd(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=Td(u)?{documents:pC(i,u)}:{query:mC(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=vw(i,o.resumeToken);const h=Sd(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(ne.min())>0){l.readTime=Du(i,o.snapshotVersion.toTimestamp());const h=Sd(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=yC(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Cd(this.serializer),n.removeTarget=e,this.q_(n)}}class ok extends Nw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=fC(e.writeResults,e.commitTime),r=Nn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Cd(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>dC(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{}class lk extends ak{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new Y(j.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,xd(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(j.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,xd(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(j.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class uk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(er(n),this.aa=!1):W("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns="RemoteStore";class ck{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Ls(this)&&(W(Ns,"Restarting streams for network reachability change."),await async function(u){const h=re(u);h.Ea.add(4),await Aa(h),h.Ra.set("Unknown"),h.Ea.delete(4),await pc(h)}(this))})}),this.Ra=new uk(r,s)}}async function pc(t){if(Ls(t))for(const e of t.da)await e(!0)}async function Aa(t){for(const e of t.da)await e(!1)}function bw(t,e){const n=re(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),ap(n)?op(n):zi(n).O_()&&ip(n,e))}function sp(t,e){const n=re(t),r=zi(n);n.Ia.delete(e),r.O_()&&Dw(n,e),n.Ia.size===0&&(r.O_()?r.L_():Ls(n)&&n.Ra.set("Unknown"))}function ip(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}zi(t).Y_(e)}function Dw(t,e){t.Va.Ue(e),zi(t).Z_(e)}function op(t){t.Va=new sC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),zi(t).start(),t.Ra.ua()}function ap(t){return Ls(t)&&!zi(t).x_()&&t.Ia.size>0}function Ls(t){return re(t).Ea.size===0}function Vw(t){t.Va=void 0}async function hk(t){t.Ra.set("Online")}async function dk(t){t.Ia.forEach((e,n)=>{ip(t,e)})}async function fk(t,e){Vw(t),ap(t)?(t.Ra.ha(e),op(t)):t.Ra.set("Unknown")}async function pk(t,e,n){if(t.Ra.set("Online"),e instanceof _w&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.Va.removeTarget(l))}(t,e)}catch(r){W(Ns,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Mu(t,r)}else if(e instanceof Wl?t.Va.Ze(e):e instanceof yw?t.Va.st(e):t.Va.tt(e),!n.isEqual(ne.min()))try{const r=await Rw(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Va.Tt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(ct.EMPTY_BYTE_STRING,f.snapshotVersion)),Dw(i,u);const m=new xr(f.target,u,h,f.sequenceNumber);ip(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W(Ns,"Failed to raise snapshot:",r),await Mu(t,r)}}async function Mu(t,e,n){if(!Ui(e))throw e;t.Ea.add(1),await Aa(t),t.Ra.set("Offline"),n||(n=()=>Rw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W(Ns,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await pc(t)})}function Mw(t,e){return e().catch(n=>Mu(t,n,e))}async function mc(t){const e=re(t),n=qr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Hf;for(;mk(e);)try{const s=await YC(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,gk(e,s)}catch(s){await Mu(e,s)}Ow(e)&&Lw(e)}function mk(t){return Ls(t)&&t.Ta.length<10}function gk(t,e){t.Ta.push(e);const n=qr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function Ow(t){return Ls(t)&&!qr(t).x_()&&t.Ta.length>0}function Lw(t){qr(t).start()}async function yk(t){qr(t).ra()}async function _k(t){const e=qr(t);for(const n of t.Ta)e.ea(n.mutations)}async function vk(t,e,n){const r=t.Ta.shift(),s=Xf.from(r,e,n);await Mw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await mc(t)}async function wk(t,e){e&&qr(t).X_&&await async function(r,s){if(function(o){return tC(o)&&o!==j.ABORTED}(s.code)){const i=r.Ta.shift();qr(r).B_(),await Mw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await mc(r)}}(t,e),Ow(t)&&Lw(t)}async function fy(t,e){const n=re(t);n.asyncQueue.verifyOperationInProgress(),W(Ns,"RemoteStore received new credentials");const r=Ls(n);n.Ea.add(3),await Aa(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await pc(n)}async function Ek(t,e){const n=re(t);e?(n.Ea.delete(2),await pc(n)):e||(n.Ea.add(2),await Aa(n),n.Ra.set("Unknown"))}function zi(t){return t.ma||(t.ma=function(n,r,s){const i=re(n);return i.sa(),new ik(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:hk.bind(null,t),t_:dk.bind(null,t),r_:fk.bind(null,t),H_:pk.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),ap(t)?op(t):t.Ra.set("Unknown")):(await t.ma.stop(),Vw(t))})),t.ma}function qr(t){return t.fa||(t.fa=function(n,r,s){const i=re(n);return i.sa(),new ok(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:yk.bind(null,t),r_:wk.bind(null,t),ta:_k.bind(null,t),na:vk.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await mc(t)):(await t.fa.stop(),t.Ta.length>0&&(W(Ns,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new jr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new lp(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function up(t,e){if(er("AsyncQueue",`${e}: ${t}`),Ui(t))return new Y(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{static emptySet(e){return new gi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||J.comparator(n.key,r.key):(n,r)=>J.comparator(n.key,r.key),this.keyedMap=Eo(),this.sortedSet=new Pe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof gi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new gi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(){this.ga=new Pe(J.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ee(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ni{constructor(e,n,r,s,i,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ni(e,n,gi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&lc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class Ik{constructor(){this.queries=my(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=re(n),i=s.queries;s.queries=my(),i.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new Y(j.ABORTED,"Firestore shutting down"))}}function my(){return new Ms(t=>rw(t),lc)}async function Sk(t,e){const n=re(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new Tk,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=up(o,`Initialization of query '${Ws(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&cp(n)}async function xk(t,e){const n=re(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Ak(t,e){const n=re(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Fa(s)&&(r=!0);o.wa=s}}r&&cp(n)}function Ck(t,e,n){const r=re(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function cp(t){t.Ca.forEach(e=>{e.next()})}var Pd,gy;(gy=Pd||(Pd={})).Ma="default",gy.Cache="cache";class kk{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ni(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ni.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Pd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e){this.key=e}}class Fw{constructor(e){this.key=e}}class Rk{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ue(),this.mutatedKeys=ue(),this.eu=sw(e),this.tu=new gi(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new py,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const y=s.get(f),k=uc(this.query,m)?m:null,b=!!y&&this.mutatedKeys.has(y.key),D=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let L=!1;y&&k?y.data.isEqual(k.data)?b!==D&&(r.track({type:3,doc:k}),L=!0):this.su(y,k)||(r.track({type:2,doc:k}),L=!0,(u&&this.eu(k,u)>0||h&&this.eu(k,h)<0)&&(l=!0)):!y&&k?(r.track({type:0,doc:k}),L=!0):y&&!k&&(r.track({type:1,doc:y}),L=!0,(u||h)&&(l=!0)),L&&(k?(o=o.add(k),i=D?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,m)=>function(k,b){const D=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee(20277,{Rt:L})}};return D(k)-D(b)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,h=u!==this.Za;return this.Za=u,o.length!==0||h?{snapshot:new Ni(this.query,e.tu,i,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new py,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ue(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new Fw(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new jw(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=ue();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ni.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const hp="SyncEngine";class Pk{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Nk{constructor(e){this.key=e,this.hu=!1}}class bk{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Ms(l=>rw(l),lc),this.Iu=new Map,this.Eu=new Set,this.du=new Pe(J.comparator),this.Au=new Map,this.Ru=new ep,this.Vu={},this.mu=new Map,this.fu=Pi.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Dk(t,e,n=!0){const r=qw(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Uw(r,e,n,!0),s}async function Vk(t,e){const n=qw(t);await Uw(n,e,!0,!1)}async function Uw(t,e,n,r){const s=await XC(t.localStore,Pn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await Mk(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&bw(t.remoteStore,s),l}async function Mk(t,e,n,r,s){t.pu=(m,y,k)=>async function(D,L,S,w){let x=L.view.ru(S);x.Cs&&(x=await ly(D.localStore,L.query,!1).then(({documents:v})=>L.view.ru(v,x)));const M=w&&w.targetChanges.get(L.targetId),U=w&&w.targetMismatches.get(L.targetId)!=null,z=L.view.applyChanges(x,D.isPrimaryClient,M,U);return _y(D,L.targetId,z.au),z.snapshot}(t,m,y,k);const i=await ly(t.localStore,e,!0),o=new Rk(e,i.Qs),l=o.ru(i.documents),u=xa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,u);_y(t,n,h.au);const f=new Pk(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function Ok(t,e,n){const r=re(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!lc(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await kd(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&sp(r.remoteStore,s.targetId),Nd(r,s.targetId)}).catch(Fi)):(Nd(r,s.targetId),await kd(r.localStore,s.targetId,!0))}async function Lk(t,e){const n=re(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),sp(n.remoteStore,r.targetId))}async function jk(t,e,n){const r=qk(t);try{const s=await function(o,l){const u=re(o),h=Ee.now(),f=l.reduce((k,b)=>k.add(b.key),ue());let m,y;return u.persistence.runTransaction("Locally write mutations","readwrite",k=>{let b=tr(),D=ue();return u.Ns.getEntries(k,f).next(L=>{b=L,b.forEach((S,w)=>{w.isValidDocument()||(D=D.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(k,b)).next(L=>{m=L;const S=[];for(const w of l){const x=YA(w,m.get(w.key).overlayedDocument);x!=null&&S.push(new Os(w.key,x,Y0(x.value.mapValue),Gn.exists(!0)))}return u.mutationQueue.addMutationBatch(k,h,S,l)}).next(L=>{y=L;const S=L.applyToLocalDocumentSet(m,D);return u.documentOverlayCache.saveOverlays(k,L.batchId,S)})}).then(()=>({batchId:y.batchId,changes:ow(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let h=o.Vu[o.currentUser.toKey()];h||(h=new Pe(le)),h=h.insert(l,u),o.Vu[o.currentUser.toKey()]=h}(r,s.batchId,n),await Ca(r,s.changes),await mc(r.remoteStore)}catch(s){const i=up(s,"Failed to persist write");n.reject(i)}}async function zw(t,e){const n=re(t);try{const r=await KC(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(fe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?fe(o.hu,14607):s.removedDocuments.size>0&&(fe(o.hu,42227),o.hu=!1))}),await Ca(n,r,e)}catch(r){await Fi(r)}}function yy(t,e,n){const r=re(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=re(o);u.onlineState=l;let h=!1;u.queries.forEach((f,m)=>{for(const y of m.Sa)y.va(l)&&(h=!0)}),h&&cp(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Fk(t,e,n){const r=re(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Pe(J.comparator);o=o.insert(i,yt.newNoDocument(i,ne.min()));const l=ue().add(i),u=new dc(ne.min(),new Map,new Pe(le),o,l);await zw(r,u),r.du=r.du.remove(i),r.Au.delete(e),dp(r)}else await kd(r.localStore,e,!1).then(()=>Nd(r,e,n)).catch(Fi)}async function Uk(t,e){const n=re(t),r=e.batch.batchId;try{const s=await GC(n.localStore,e);$w(n,r,null),Bw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ca(n,s)}catch(s){await Fi(s)}}async function zk(t,e,n){const r=re(t);try{const s=await function(o,l){const u=re(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(fe(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);$w(r,e,n),Bw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ca(r,s)}catch(s){await Fi(s)}}function Bw(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function $w(t,e,n){const r=re(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Nd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||Hw(t,r)})}function Hw(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(sp(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),dp(t))}function _y(t,e,n){for(const r of n)r instanceof jw?(t.Ru.addReference(r.key,e),Bk(t,r)):r instanceof Fw?(W(hp,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||Hw(t,r.key)):ee(19791,{wu:r})}function Bk(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(W(hp,"New document in limbo: "+n),t.Eu.add(r),dp(t))}function dp(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new J(Ce.fromString(e)),r=t.fu.next();t.Au.set(r,new Nk(n)),t.du=t.du.insert(n,r),bw(t.remoteStore,new xr(Pn(Qf(n.path)),r,"TargetPurposeLimboResolution",sc.ce))}}async function Ca(t,e,n){const r=re(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){s.push(h);const m=np.As(u.targetId,h);i.push(m)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(u,h){const f=re(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>O.forEach(h,y=>O.forEach(y.Es,k=>f.persistence.referenceDelegate.addReference(m,y.targetId,k)).next(()=>O.forEach(y.ds,k=>f.persistence.referenceDelegate.removeReference(m,y.targetId,k)))))}catch(m){if(!Ui(m))throw m;W(rp,"Failed to update sequence numbers: "+m)}for(const m of h){const y=m.targetId;if(!m.fromCache){const k=f.Ms.get(y),b=k.snapshotVersion,D=k.withLastLimboFreeSnapshotVersion(b);f.Ms=f.Ms.insert(y,D)}}}(r.localStore,i))}async function $k(t,e){const n=re(t);if(!n.currentUser.isEqual(e)){W(hp,"User change. New user:",e.toKey());const r=await kw(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new Y(j.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ca(n,r.Ls)}}function Hk(t,e){const n=re(t),r=n.Au.get(e);if(r&&r.hu)return ue().add(r.key);{let s=ue();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function qw(t){const e=re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=zw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Hk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Fk.bind(null,e),e.Pu.H_=Ak.bind(null,e.eventManager),e.Pu.yu=Ck.bind(null,e.eventManager),e}function qk(t){const e=re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Uk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zk.bind(null,e),e}class Ou{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=fc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return WC(this.persistence,new $C,e.initialUser,this.serializer)}Cu(e){return new Cw(tp.mi,this.serializer)}Du(e){return new ZC}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ou.provider={build:()=>new Ou};class Wk extends Ou{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){fe(this.persistence.referenceDelegate instanceof Vu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new kC(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Nt.withCacheSize(this.cacheSizeBytes):Nt.DEFAULT;return new Cw(r=>Vu.mi(r,n),this.serializer)}}class bd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$k.bind(null,this.syncEngine),await Ek(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ik}()}createDatastore(e){const n=fc(e.databaseInfo.databaseId),r=function(i){return new sk(i)}(e.databaseInfo);return function(i,o,l,u){return new lk(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new ck(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>yy(this.syncEngine,n,0),function(){return hy.v()?new hy:new ek}())}createSyncEngine(e,n){return function(s,i,o,l,u,h,f){const m=new bk(s,i,o,l,u,h);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=re(s);W(Ns,"RemoteStore shutting down."),i.Ea.add(5),await Aa(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}bd.provider={build:()=>new bd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):er("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="FirestoreClient";class Kk{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=mt.UNAUTHENTICATED,this.clientId=Bf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{W(Wr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W(Wr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new jr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=up(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function fh(t,e){t.asyncQueue.verifyOperationInProgress(),W(Wr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await kw(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function vy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Qk(t);W(Wr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>fy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>fy(e.remoteStore,s)),t._onlineComponents=e}async function Qk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W(Wr,"Using user provided OfflineComponentProvider");try{await fh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===j.FAILED_PRECONDITION||s.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ai("Error using user provided cache. Falling back to memory cache: "+n),await fh(t,new Ou)}}else W(Wr,"Using default OfflineComponentProvider"),await fh(t,new Wk(void 0));return t._offlineComponents}async function Ww(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W(Wr,"Using user provided OnlineComponentProvider"),await vy(t,t._uninitializedComponentsProvider._online)):(W(Wr,"Using default OnlineComponentProvider"),await vy(t,new bd))),t._onlineComponents}function Yk(t){return Ww(t).then(e=>e.syncEngine)}async function Xk(t){const e=await Ww(t),n=e.eventManager;return n.onListen=Dk.bind(null,e.syncEngine),n.onUnlisten=Ok.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Vk.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Lk.bind(null,e.syncEngine),n}function Jk(t,e,n={}){const r=new jr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const f=new Gk({next:y=>{f.Nu(),o.enqueueAndForget(()=>xk(i,m));const k=y.docs.has(l);!k&&y.fromCache?h.reject(new Y(j.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&y.fromCache&&u&&u.source==="server"?h.reject(new Y(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),m=new kk(Qf(l.path),f,{includeMetadataChanges:!0,qa:!0});return Sk(i,m)}(await Xk(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw="firestore.googleapis.com",Ey=!0;class Ty{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Y(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Kw,this.ssl=Ey}else this.host=e.host,this.ssl=e.ssl??Ey;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Aw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<AC)throw new Y(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}uA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gw(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Y(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Y(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Y(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class fp{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ty({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ty(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new J2;switch(r.type){case"firstParty":return new nA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=wy.get(n);r&&(W("ComponentProvider","Removing Datastore"),wy.delete(n),r.terminate())}(this),Promise.resolve()}}function Zk(t,e,n,r={}){var h;t=ia(t,fp);const s=Mi(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(Kv(`https://${l}`),Qv("Firestore",!0)),i.host!==Kw&&i.host!==l&&Ai("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!Cs(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=mt.MOCK_USER;else{f=TI(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new Y(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new mt(y)}t._authCredentials=new Z2(new F0(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new pp(this.firestore,e,this._query)}}class Ze{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new da(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ze(this.firestore,e,this._key)}toJSON(){return{type:Ze._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ia(n,Ze._jsonSchema))return new Ze(e,r||null,new J(Ce.fromString(n.referencePath)))}}Ze._jsonSchemaVersion="firestore/documentReference/1.0",Ze._jsonSchema={type:Fe("string",Ze._jsonSchemaVersion),referencePath:Fe("string")};class da extends pp{constructor(e,n,r){super(e,n,Qf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ze(this.firestore,null,new J(e))}withConverter(e){return new da(this.firestore,e,this._path)}}function Iy(t,e,...n){if(t=an(t),arguments.length===1&&(e=Bf.newId()),lA("doc","path",e),t instanceof fp){const r=Ce.fromString(e,...n);return Og(r),new Ze(t,null,new J(r))}{if(!(t instanceof Ze||t instanceof da))throw new Y(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return Og(r),new Ze(t.firestore,t instanceof da?t.converter:null,new J(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy="AsyncQueue";class xy{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Pw(this,"async_queue_retry"),this._c=()=>{const r=dh();r&&W(Sy,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=dh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=dh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new jr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ui(e))throw e;W(Sy,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,er("INTERNAL UNHANDLED ERROR: ",Ay(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=lp.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&ee(47125,{Pc:Ay(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Ay(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class mp extends fp{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new xy,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new xy(e),this._firestoreClient=void 0,await e}}}function eR(t,e){const n=typeof t=="object"?t:Zv(),r=typeof t=="string"?t:Cu,s=Pf(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=wI("firestore");i&&Zk(s,...i)}return s}function Qw(t){if(t._terminated)throw new Y(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||tR(t),t._firestoreClient}function tR(t){var r,s,i;const e=t._freezeSettings(),n=function(l,u,h,f){return new wA(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Gw(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new Kk(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new tn(ct.fromBase64String(e))}catch(n){throw new Y(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new tn(ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:tn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ia(e,tn._jsonSchema))return tn.fromBase64String(e.bytes)}}tn._jsonSchemaVersion="firestore/bytes/1.0",tn._jsonSchema={type:Fe("string",tn._jsonSchemaVersion),bytes:Fe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:bn._jsonSchemaVersion}}static fromJSON(e){if(Ia(e,bn._jsonSchema))return new bn(e.latitude,e.longitude)}}bn._jsonSchemaVersion="firestore/geoPoint/1.0",bn._jsonSchema={type:Fe("string",bn._jsonSchemaVersion),latitude:Fe("number"),longitude:Fe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Dn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ia(e,Dn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Dn(e.vectorValues);throw new Y(j.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Dn._jsonSchemaVersion="firestore/vectorValue/1.0",Dn._jsonSchema={type:Fe("string",Dn._jsonSchemaVersion),vectorValues:Fe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR=/^__.*__$/;class rR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Os(e,this.data,this.fieldMask,n,this.fieldTransforms):new Sa(e,this.data,n,this.fieldTransforms)}}function Xw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee(40011,{Ac:t})}}class yp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new yp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Lu(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Xw(this.Ac)&&nR.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class sR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||fc(e)}Cc(e,n,r,s=!1){return new yp({Ac:e,methodName:n,Dc:r,path:at.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function iR(t){const e=t._freezeSettings(),n=fc(t._databaseId);return new sR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function oR(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);t1("Data must be an object, but it was:",o,r);const l=Zw(r,o);let u,h;if(i.merge)u=new pn(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const y=aR(e,m,n);if(!o.contains(y))throw new Y(j.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);uR(f,y)||f.push(y)}u=new pn(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new rR(new en(l),u,h)}function Jw(t,e){if(e1(t=an(t)))return t1("Unsupported field value:",e,t),Zw(t,e);if(t instanceof Yw)return function(r,s){if(!Xw(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=Jw(l,s.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=an(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return HA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ee.fromDate(r);return{timestampValue:Du(s.serializer,i)}}if(r instanceof Ee){const i=new Ee(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Du(s.serializer,i)}}if(r instanceof bn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof tn)return{bytesValue:vw(s.serializer,r._byteString)};if(r instanceof Ze){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Zf(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Dn)return function(o,l){return{mapValue:{fields:{[K0]:{stringValue:Q0},[ku]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw l.Sc("VectorValues must only contain numeric values.");return Yf(l.serializer,h)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${$f(r)}`)}(t,e)}function Zw(t,e){const n={};return B0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vs(t,(r,s)=>{const i=Jw(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function e1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ee||t instanceof bn||t instanceof tn||t instanceof Ze||t instanceof Yw||t instanceof Dn)}function t1(t,e,n){if(!e1(n)||!U0(n)){const r=$f(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function aR(t,e,n){if((e=an(e))instanceof gp)return e._internalPath;if(typeof e=="string")return n1(t,e);throw Lu("Field path arguments must be of type string or ",t,!1,void 0,n)}const lR=new RegExp("[~\\*/\\[\\]]");function n1(t,e,n){if(e.search(lR)>=0)throw Lu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gp(...e.split("."))._internalPath}catch{throw Lu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Lu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new Y(j.INVALID_ARGUMENT,l+t+u)}function uR(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(s1("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class cR extends r1{data(){return super.data()}}function s1(t,e){return typeof e=="string"?n1(t,e):e instanceof gp?e._internalPath:e._delegate._internalPath}class hR{convertValue(e,n="none"){switch(Hr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes($r(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ee(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Vs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[ku].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Ve(o.doubleValue));return new Dn(n)}convertGeoPoint(e){return new bn(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=oc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(aa(e));default:return null}}convertTimestamp(e){const n=Br(e);return new Ee(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ce.fromString(e);fe(xw(r),9688,{name:e});const s=new la(r.get(1),r.get(3)),i=new J(r.popFirst(5));return s.isEqual(n)||er(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Io{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Es extends r1{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Gl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(s1("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Y(j.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Es._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Es._jsonSchemaVersion="firestore/documentSnapshot/1.0",Es._jsonSchema={type:Fe("string",Es._jsonSchemaVersion),bundleSource:Fe("string","DocumentSnapshot"),bundleName:Fe("string"),bundle:Fe("string")};class Gl extends Es{data(e={}){return super.data(e)}}class Fo{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Io(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Gl(this._firestore,this._userDataWriter,r.key,r,new Io(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new Gl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Io(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Gl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Io(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:fR(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Y(j.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Fo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Bf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function fR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pR(t){t=ia(t,Ze);const e=ia(t.firestore,mp);return Jk(Qw(e),t._key).then(n=>_R(e,t,n))}Fo._jsonSchemaVersion="firestore/querySnapshot/1.0",Fo._jsonSchema={type:Fe("string",Fo._jsonSchemaVersion),bundleSource:Fe("string","QuerySnapshot"),bundleName:Fe("string"),bundle:Fe("string")};class mR extends hR{constructor(e){super(),this.firestore=e}convertBytes(e){return new tn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ze(this.firestore,null,n)}}function gR(t,e,n){t=ia(t,Ze);const r=ia(t.firestore,mp),s=dR(t.converter,e,n);return yR(r,[oR(iR(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Gn.none())])}function yR(t,e){return function(r,s){const i=new jr;return r.asyncQueue.enqueueAndForget(async()=>jk(await Yk(r),s,i)),i.promise}(Qw(t),e)}function _R(t,e,n){const r=n.docs.get(e._key),s=new mR(t);return new Es(t,s,e._key,r,new Io(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){ji=s})(Oi),Si(new ks("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new mp(new eA(r.getProvider("auth-internal")),new rA(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Y(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new la(h.options.projectId,f)}(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Or(bg,Dg,e),Or(bg,Dg,"esm2020")})();const vR=typeof __firebase_config<"u"?JSON.parse(__firebase_config):{apiKey:"AIzaSyCLPIPwhSkUzoaISxFZlG9F97zRp1u0o9o",authDomain:"financeiro-app-df224.firebaseapp.com",projectId:"financeiro-app-df224",storageBucket:"financeiro-app-df224.firebasestorage.app",messagingSenderId:"1061825731478",appId:"1:1061825731478:web:70c2e8c4c5eb13c56b5bb7"},i1=Jv(vR),ph=Y2(i1),Cy=eR(i1),It=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],mh={receita:["Salário","Vale/Adiantamento","Freelance","Investimentos","Reembolso","Outros"],despesa:["Moradia","Alimentação","Transporte","Saúde","Lazer","Educação","Contas Fixas","Outros","Combustível","Cartão de Crédito "]};function wR(){const t=new Date().getMonth(),[e,n]=Z.useState(It[t]),[r,s]=Z.useState(new Date().getFullYear()),[i,o]=Z.useState(null),[l,u]=Z.useState(!0),[h,f]=Z.useState(""),[m,y]=Z.useState([]),[k,b]=Z.useState({}),[D,L]=Z.useState(mh),[S,w]=Z.useState({day:5,amount:""}),[x,M]=Z.useState({enabled:!1,day:20,amount:""}),[U,z]=Z.useState([]),[v,_]=Z.useState([]),[E,I]=Z.useState(!1),[C,R]=Z.useState([]),[T,Oe]=Z.useState(""),[Lt,sr]=Z.useState(""),[Se,$]=Z.useState("despesa"),[X,se]=Z.useState(""),[me,xe]=Z.useState(new Date().toISOString().split("T")[0]),[Gt,tt]=Z.useState(!1),[wt,Et]=Z.useState(2),[Kt,Bi]=Z.useState("Pix"),[js,ka]=Z.useState(!1),[$i,Hi]=Z.useState(""),[ir,qi]=Z.useState(""),[Wi,Fs]=Z.useState(""),[Us,Gi]=Z.useState(""),[qe,We]=Z.useState(null),[Yr,Ra]=Z.useState(""),[Xr,Pa]=Z.useState(""),[vn,Na]=Z.useState("despesa"),[gc,ba]=Z.useState(""),[_p,vp]=Z.useState(""),[yc,_c]=Z.useState(13.25),[zs,Da]=Z.useState(12),[Va,or]=Z.useState(null),Ki=Z.useRef(null),Jr=Z.useRef(null);Z.useEffect(()=>{const A=jx(ph,V=>{o(V),V||u(!1)});return()=>A()},[]),Z.useEffect(()=>{i&&(u(!0),(async()=>{try{const V=Iy(Cy,"users",i.uid),H=await pR(V);if(H.exists()){const Q=H.data();y(Q.transactions||[]),b(Q.budgets||{}),L(Q.categories||mh),z(Q.savingsGoals||[]),Q.salaryConfig?w(Q.salaryConfig):Q.baseSalary&&w({day:5,amount:Q.baseSalary}),Q.valeConfig&&M(Q.valeConfig)}else y([]),b({}),L(mh),z([])}catch(V){console.error("Erro ao buscar:",V)}finally{u(!1)}})())},[i]),Z.useEffect(()=>{if(i&&!l){const A=async()=>{try{await gR(Iy(Cy,"users",i.uid),{transactions:m,budgets:k,categories:D,salaryConfig:S,valeConfig:x,savingsGoals:U,lastUpdated:new Date().toISOString(),email:i.email},{merge:!0})}catch(H){console.error("Erro ao salvar:",H)}},V=setTimeout(()=>{A()},1e3);return()=>clearTimeout(V)}},[m,k,D,S,x,U,i,l]);const jt=(()=>{const A=new Date,V=A.getDate();let H=[];if(S.amount&&H.push({day:S.day,label:"Salário",amount:S.amount}),x.enabled&&x.amount&&H.push({day:x.day,label:"Vale",amount:x.amount}),H.length===0)return null;H.sort((Ge,Ke)=>Ge.day-Ke.day);let Q=H.find(Ge=>Ge.day>=V),K=!1;Q||(Q=H[0],K=!0);const ye=new Date(A.getFullYear(),A.getMonth()+1,0).getDate(),De=K?ye-V+Q.day:Q.day-V;return{...Q,daysLeft:De,isToday:De===0}})();Z.useEffect(()=>{if(!m.length)return;const A=[],V=[],H=new Date,Q=It[H.getMonth()],K=H.getFullYear(),ye={};m.forEach(q=>{q.type==="despesa"&&(ye[q.category]||(ye[q.category]={total:0,count:0,max:0}),ye[q.category].total+=q.amount,ye[q.category].count+=1,q.amount>ye[q.category].max&&(ye[q.category].max=q.amount))});const De=m.filter(q=>q.month===Q&&q.year===K&&q.type==="despesa");De.forEach(q=>{const _e=ye[q.category];if(_e&&_e.count>5){const Qe=_e.total/_e.count;q.amount>Qe*2.5&&q.amount>100&&V.push({type:"alert",icon:cI,title:"Gasto Incomum Detectado",msg:`A despesa "${q.description}" (${rt(q.amount)}) em ${q.category} é muito maior que sua média habitual.`})}});const Ge={};m.forEach(q=>{if(q.type==="despesa"&&q.amount>0){const _e=`${q.description.toLowerCase()}-${q.amount}`;Ge[_e]=(Ge[_e]||0)+1}}),Object.entries(Ge).forEach(([q,_e])=>{if(_e>=3){const[Qe]=q.split("-");m.some(Tt=>Tt.description.toLowerCase().includes(Qe)&&Tt.isFixed)}});const Ke=t===0?It[11]:It[t-1],Rt=t===0?K-1:K,Yt={},ht={};m.filter(q=>q.year===K&&q.month===Q&&q.type==="despesa").forEach(q=>Yt[q.category]=(Yt[q.category]||0)+q.amount),m.filter(q=>q.year===Rt&&q.month===Ke&&q.type==="despesa").forEach(q=>ht[q.category]=(ht[q.category]||0)+q.amount),Object.keys(Yt).forEach(q=>{const _e=Yt[q],Qe=ht[q]||0;Qe>0&&_e>Qe*1.2&&_e>200&&V.push({type:"trend",icon:th,title:`Atenção com ${q}`,msg:`Seus gastos com ${q} subiram ${((_e/Qe-1)*100).toFixed(0)}% em relação ao mês passado.`})}),R(V);const Xt=m.filter(q=>{const Qe=ts(q.date)-H,Tt=Math.ceil(Qe/(1e3*60*60*24));return q.type==="despesa"&&Tt>=0&&Tt<=3&&q.year===K&&!q.paid});Xt.length>0&&A.push({type:"warning",title:"Contas a Vencer",msg:`${Xt.length} conta(s) vencem em breve.`,icon:Ym});const st=De.reduce((q,_e)=>(q[_e.category]=(q[_e.category]||0)+_e.amount,q),{});Object.keys(st).forEach(q=>{const _e=k[`${K}_${q}`];_e&&st[q]>_e&&A.push({type:"danger",title:"Limite Excedido",msg:`Você estourou o orçamento de ${q}.`,icon:YT})}),_(A)},[m,k]);const Ma=async()=>{f("");const A=new zn;try{await i2(ph,A)}catch{f("Erro ao fazer login. Tente novamente.")}},nt=async()=>{await Fx(ph),y([])},Oa=()=>{if(!S.amount){alert("Configure o valor do salário primeiro na aba Configurações.");return}if(!window.confirm(`Gerar lançamentos automáticos para o ano de ${r} baseados na sua configuração?`))return;const A=m.filter(H=>!(H.isAutoSalary&&H.year===r)),V=[];for(let H=0;H<12;H++)V.push({id:`auto_salary_${r}_${H}`,month:It[H],year:r,description:"Salário Mensal",amount:parseFloat(S.amount),type:"receita",category:"Salário",date:`${S.day.toString().padStart(2,"0")}/${(H+1).toString().padStart(2,"0")}/${r}`,paymentMethod:"Conta Salário",isAutoSalary:!0}),x.enabled&&x.amount&&V.push({id:`auto_vale_${r}_${H}`,month:It[H],year:r,description:"Vale/Adiantamento",amount:parseFloat(x.amount),type:"receita",category:"Vale/Adiantamento",date:`${x.day.toString().padStart(2,"0")}/${(H+1).toString().padStart(2,"0")}/${r}`,paymentMethod:"Conta Salário",isAutoSalary:!0});y([...A,...V]),alert("Lançamentos gerados!")},Zr=A=>{if(A.preventDefault(),!ir||!Wi)return;const V={id:Date.now(),name:ir,target:parseFloat(Wi),saved:parseFloat(Us)||0},H=`Meta: ${ir}`,Q={...D};Q.despesa.includes(H)||(Q.despesa=[...Q.despesa,H],L(Q)),z([...U,V]),qi(""),Fs(""),Gi(""),alert(`Meta criada! Use a categoria "${H}" nos lançamentos.`)},es=A=>{confirm("Excluir esta meta?")&&z(U.filter(V=>V.id!==A))},La=(A,V)=>{const H=parseFloat(V);isNaN(H)||z(U.map(Q=>Q.id===A?{...Q,saved:H}:Q))};Z.useEffect(()=>{var A;((A=D[Se])==null?void 0:A.length)>0&&!D[Se].includes(X)&&se(D[Se][0])},[Se,D]);const ts=A=>{if(!A)return new Date;const[V,H,Q]=A.split("/").map(Number);return new Date(Q,H-1,V)},Qt=new Date;Qt.setHours(0,0,0,0);const wc=new Date(Qt.getFullYear(),Qt.getMonth()+1,0),ja=m.reduce((A,V)=>ts(V.date)<=Qt?V.type==="receita"?A+V.amount:A-V.amount:A,0),ar=m.filter(A=>{const V=ts(A.date);return V>Qt&&V<=wc}),Qi=ja+ar.reduce((A,V)=>V.type==="receita"?A+V.amount:A-V.amount,0),Fa=A=>{if(A.preventDefault(),!T||!Lt||!me)return;const[V,H,Q]=me.split("-").map(Number),K=parseFloat(Lt),ye=[];if(Se==="despesa"&&X.startsWith("Meta: ")){const De=X.replace("Meta: ",""),Ge=U.findIndex(Ke=>Ke.name===De);if(Ge>=0){const Ke=Gt&&wt>1?K*wt:K,Rt=[...U];Rt[Ge].saved+=Ke,z(Rt)}}if(Gt&&wt>1){for(let De=0;De<wt;De++){const Ge=H-1+De,Ke=V+Math.floor(Ge/12),Rt=Ge%12;ye.push({id:Date.now()+De,month:It[Rt],year:Ke,description:Se==="despesa"?`${T} (${De+1}/${wt})`:T,amount:K,type:Se,category:X,subCategory:$i.trim(),paymentMethod:Kt,isFixed:Se==="despesa"?js:!1,date:`${Q.toString().padStart(2,"0")}/${(Rt+1).toString().padStart(2,"0")}/${Ke}`})}alert(`${wt} lançamentos criados!`)}else ye.push({id:Date.now(),month:It[H-1],year:V,description:T,amount:K,type:Se,category:X,subCategory:$i.trim(),paymentMethod:Kt,isFixed:Se==="despesa"?js:!1,date:`${Q.toString().padStart(2,"0")}/${H.toString().padStart(2,"0")}/${V}`});y([...m,...ye]),Oe(""),sr(""),Hi(""),tt(!1),Et(2),ka(!1)},Yi=()=>{const V=[["ID","Data","Mês","Ano","Descrição","Categoria","Valor","Tipo","Meio Pagamento"].join(","),...m.map(K=>[K.id,K.date,K.month,K.year,`"${K.description}"`,K.category,K.amount.toFixed(2),K.type,K.paymentMethod].join(","))].join(`
`),H=new Blob([V],{type:"text/csv;charset=utf-8;"}),Q=document.createElement("a");Q.href=URL.createObjectURL(H),Q.download=`relatorio_financeiro_${new Date().toISOString().slice(0,10)}.csv`,Q.click()},ns=()=>{const A={transactions:m,budgets:k,categories:D,salaryConfig:S,valeConfig:x,savingsGoals:U,exportedAt:new Date().toISOString()},V=document.createElement("a");V.href=`data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(A,null,2))}`,V.download=`backup_completo_${new Date().toISOString().slice(0,10)}.json`,V.click()},Ec=()=>{window.print()},wn=A=>{const V=A.target.files[0];if(!V)return;const H=new FileReader;H.onload=Q=>{const ye=Q.target.result.split(`
`),De=[];let Ge=0;for(let Ke=1;Ke<ye.length;Ke++){const Rt=ye[Ke].trim();if(!Rt)continue;const Yt=Rt.includes(";")?Rt.split(";"):Rt.split(",");if(Yt.length>=3){let ht=Yt[0],Xt=Yt[1],st=Yt[Yt.length-1];st=st.replace("R$","").replace(" ",""),st.includes(",")&&!st.includes(".")?st=st.replace(",","."):st.includes(",")&&st.includes(".")&&(st=st.replace(".","").replace(",","."));const q=parseFloat(st);if(!isNaN(q)){const _e=q<0?"despesa":"receita";let Qe,Tt,Pt;if(ht.includes("/")){if([Qe,Tt,Pt]=ht.split("/").map(Number),!Pt&&new Date(ht).getFullYear()){const jn=new Date(ht);Qe=jn.getDate(),Tt=jn.getMonth()+1,Pt=jn.getFullYear()}}else if(ht.includes("-")){const jn=new Date(ht);Qe=jn.getDate(),Tt=jn.getMonth()+1,Pt=jn.getFullYear()}Qe&&Tt&&Pt&&(De.push({id:Date.now()+Ge,date:`${Qe.toString().padStart(2,"0")}/${Tt.toString().padStart(2,"0")}/${Pt}`,month:It[Tt-1],year:Pt,description:Xt.replace(/"/g,""),amount:Math.abs(q),type:_e,category:"Outros",subCategory:"Importado",paymentMethod:"Débito",isFixed:!1}),Ge++)}}}De.length>0?confirm(`Encontramos ${De.length} transações. Deseja importar?`)&&(y(Ke=>[...Ke,...De]),alert("Importação concluída! Verifique a categoria dos novos itens.")):alert("Não conseguimos ler o formato deste CSV. Tente usar colunas: Data, Descrição, Valor.")},H.readAsText(V),A.target.value=null},Ua=A=>{const V=A.target.files[0];if(!V)return;const H=new FileReader;H.onload=async Q=>{try{const K=JSON.parse(Q.target.result);K.transactions&&confirm("Importar backup completo? Isso mesclará com os dados atuais.")&&(y(K.transactions),K.budgets&&b(K.budgets),K.categories&&L(K.categories),K.salaryConfig&&w(K.salaryConfig),K.valeConfig&&M(K.valeConfig),K.savingsGoals&&z(K.savingsGoals),alert("Dados carregados!"))}catch{alert("Erro no arquivo.")}},H.readAsText(V),A.target.value=null},za=A=>{A.preventDefault(),!(!Xr.trim()||D[vn].includes(Xr))&&(L(V=>({...V,[vn]:[...V[vn],Xr]})),Pa(""))},Xi=A=>y(m.filter(V=>V.id!==A)),Bs=A=>{const V=parseFloat(Yr);isNaN(V)||b({...k,[`${r}_${A}`]:V}),We(null)},rt=A=>new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(A),Ji=m.filter(A=>A.year===r),Ln=Ji.filter(A=>A.month===e).sort((A,V)=>ts(A.date)-ts(V.date)),Ba=Ln.filter(A=>A.type==="receita").reduce((A,V)=>A+V.amount,0),rs=Ln.filter(A=>A.type==="despesa").reduce((A,V)=>A+V.amount,0),Zi=Ba-rs,eo=A=>{const V=Ln.filter(Q=>Q.type==="despesa"&&Q.category===A).reduce((Q,K)=>Q+K.amount,0),H=k[`${r}_${A}`]||0;return{spent:V,limit:H,percentage:H>0?V/H*100:0}},lr=It.map(A=>{const V=Ji.filter(K=>K.month===A),H=V.filter(K=>K.type==="receita").reduce((K,ye)=>K+ye.amount,0),Q=V.filter(K=>K.type==="despesa").reduce((K,ye)=>K+ye.amount,0);return{month:A,inc:H,exp:Q,bal:H-Q}}),En=lr.reduce((A,V)=>A+V.inc,0),ur=lr.reduce((A,V)=>A+V.exp,0),$a=En-ur,Ha=Ji.filter(A=>A.type==="despesa").reduce((A,V)=>(A[V.category]=(A[V.category]||0)+V.amount,A),{});Object.entries(Ha).sort(([,A],[,V])=>V-A).map(([A,V])=>({cat:A,val:V,percent:ur>0?V/ur*100:0}));const to=new Date,ss=to.getMonth(),is=to.getFullYear(),no=ss===0?11:ss-1,qa=ss===0?is-1:is,Wa=m.filter(A=>A.month===It[ss]&&A.year===is&&A.type==="despesa"),Ga=m.filter(A=>A.month===It[no]&&A.year===qa&&A.type==="despesa"),Ka=Wa.reduce((A,V)=>A+V.amount,0),Ft=Ga.reduce((A,V)=>A+V.amount,0),kt=Ka-Ft,os=Ft>0?(Ka-Ft)/Ft*100:0,as=A=>{switch(A){case"Pix":return p.jsx(lI,{size:14,className:"text-emerald-500"});case"Cartão de Crédito":return p.jsx(Zm,{size:14,className:"text-blue-500"});case"Cartão de Débito":return p.jsx(Zm,{size:14,className:"text-slate-500"});case"Dinheiro":return p.jsx(Qm,{size:14,className:"text-green-600"});default:return p.jsx(XT,{size:14,className:"text-slate-400"})}};return!i&&!l?p.jsx("div",{className:"min-h-screen flex items-center justify-center bg-slate-100 p-4",children:p.jsxs("div",{className:"bg-white p-8 rounded-2xl shadow-lg w-full max-w-md border border-slate-200 text-center",children:[p.jsx("div",{className:"inline-flex p-4 bg-blue-50 rounded-full mb-4",children:p.jsx(vl,{className:"w-10 h-10 text-blue-600"})}),p.jsx("h1",{className:"text-2xl font-bold text-slate-800",children:"Controle Financeiro"}),p.jsx("p",{className:"text-slate-500 text-sm mt-2",children:"Inteligência para o seu dinheiro."}),h&&p.jsx("div",{className:"p-3 mb-4 bg-red-50 text-red-600 text-sm rounded-lg mt-4",children:h}),p.jsxs("button",{onClick:Ma,className:"w-full mt-6 py-4 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold rounded-xl flex items-center justify-center gap-3",children:[p.jsx("img",{src:"https://www.google.com/favicon.ico",alt:"Google",className:"w-5 h-5"})," Entrar com Google"]})]})}):l?p.jsxs("div",{className:"min-h-screen flex items-center justify-center bg-slate-100 text-slate-500",children:[p.jsx(oI,{className:"w-6 h-6 animate-spin mr-2"})," Carregando..."]}):p.jsxs("div",{className:"min-h-screen bg-slate-50 text-slate-800 font-sans p-4 md:p-8 print:p-0 print:bg-white",children:[p.jsx("style",{children:`
        @media print {
          .no-print { display: none !important; }
          .print-only { display: block !important; }
          body { background: white; color: black; }
          .shadow-sm, .shadow-lg { box-shadow: none !important; }
          .border { border-color: #ddd !important; }
        }
      `}),p.jsxs("div",{className:"max-w-7xl mx-auto space-y-6",children:[p.jsxs("header",{className:"flex flex-col xl:flex-row justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-200 gap-4 no-print",children:[p.jsxs("div",{className:"w-full xl:w-auto",children:[p.jsxs("h1",{className:"text-2xl font-bold text-slate-900 flex items-center gap-2",children:[p.jsx(vl,{className:"text-blue-600"})," Controle Financeiro"]}),p.jsxs("p",{className:"text-slate-500 text-sm mt-1 flex items-center gap-1",children:[p.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 inline-block"})," ",i.displayName||i.email]})]}),p.jsxs("div",{className:"flex flex-wrap justify-center items-center gap-3 w-full xl:w-auto",children:[jt?p.jsxs("div",{className:`flex items-center gap-2 px-3 py-1.5 rounded-lg mr-2 border ${jt.isToday?"bg-emerald-100 border-emerald-200 text-emerald-800 animate-pulse":"bg-slate-50 border-slate-200 text-slate-600"}`,children:[p.jsx(qT,{size:16,className:jt.isToday?"text-emerald-600":"text-slate-400"}),p.jsxs("div",{className:"flex flex-col leading-none",children:[p.jsx("span",{className:"text-[10px] uppercase font-bold tracking-wide mb-0.5",children:jt.label}),jt.isToday?p.jsx("span",{className:"text-xs font-bold",children:"Cai Hoje!"}):p.jsxs("span",{className:"text-xs",children:["Dia ",jt.day," (",jt.daysLeft,"d)"]})]})]}):p.jsx("div",{className:"flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg mr-2 border border-slate-200 text-slate-400 text-xs",children:"Configure seu Salário"}),p.jsxs("div",{className:"flex items-center bg-slate-100 rounded-lg p-1",children:[p.jsx("button",{onClick:()=>s(A=>A-1),className:"p-2 hover:bg-white rounded-md text-slate-600",children:p.jsx(KT,{size:18})}),p.jsx("span",{className:"px-4 font-bold text-slate-700 min-w-[60px] text-center",children:r}),p.jsx("button",{onClick:()=>s(A=>A+1),className:"p-2 hover:bg-white rounded-md text-slate-600",children:p.jsx(QT,{size:18})})]}),p.jsx("div",{className:"h-8 w-px bg-slate-200 hidden sm:block"}),p.jsxs("button",{onClick:()=>n("Metas"),className:`px-3 py-2 rounded-lg font-medium flex gap-2 ${e==="Metas"?"bg-orange-500 text-white":"bg-white border text-slate-700"}`,children:[p.jsx(eh,{size:18})," ",p.jsx("span",{className:"hidden xl:inline",children:"Metas"})]}),p.jsxs("button",{onClick:()=>n("Resumo"),className:`px-3 py-2 rounded-lg font-medium flex gap-2 ${e==="Resumo"?"bg-blue-600 text-white":"bg-white border text-slate-700"}`,children:[p.jsx(Xm,{size:18})," ",p.jsx("span",{className:"hidden xl:inline",children:"Resumo"})]}),p.jsxs("button",{onClick:()=>n("Configuracoes"),className:`px-3 py-2 rounded-lg font-medium flex gap-2 ${e==="Configuracoes"?"bg-slate-700 text-white":"bg-white border text-slate-700"}`,children:[p.jsx(tg,{size:18})," ",p.jsx("span",{className:"hidden xl:inline",children:"Config"})]}),p.jsx("div",{className:"h-8 w-px bg-slate-200 hidden sm:block"}),p.jsxs("div",{className:"relative",children:[p.jsxs("button",{onClick:()=>I(!E),className:"p-2 text-slate-600 border rounded-lg hover:text-blue-600 relative",children:[p.jsx(Ym,{size:20}),v.length>0&&p.jsx("span",{className:"absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"})]}),E&&p.jsxs("div",{className:"absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-slate-200 z-50 overflow-hidden",children:[p.jsx("div",{className:"p-3 bg-slate-50 border-b border-slate-100 font-bold text-slate-700 text-sm",children:"Notificações"}),p.jsx("div",{className:"max-h-60 overflow-y-auto",children:v.length===0?p.jsx("div",{className:"p-4 text-center text-slate-400 text-sm",children:"Tudo tranquilo!"}):v.map((A,V)=>p.jsxs("div",{className:"p-3 border-b border-slate-100 hover:bg-slate-50 flex items-start gap-3",children:[p.jsx("div",{className:`p-2 rounded-full ${A.type==="danger"?"bg-red-100 text-red-600":"bg-amber-100 text-amber-600"}`,children:p.jsx(A.icon,{size:16})}),p.jsxs("div",{children:[p.jsx("p",{className:"text-sm font-bold text-slate-700",children:A.title}),p.jsx("p",{className:"text-xs text-slate-500",children:A.msg})]})]},V))})]})]}),p.jsxs("div",{className:"flex gap-1",children:[p.jsx("button",{onClick:()=>Jr.current.click(),className:"p-2 text-slate-600 border rounded-lg hover:text-indigo-600 hover:bg-indigo-50",title:"Importar Extrato Bancário (CSV)",children:p.jsx(eI,{size:20})}),p.jsx("input",{type:"file",ref:Jr,className:"hidden",onChange:wn,accept:".csv,.txt"}),p.jsx("button",{onClick:Yi,className:"p-2 text-slate-600 border rounded-lg hover:text-emerald-600 hover:bg-emerald-50",title:"Exportar para Excel",children:p.jsx(ZT,{size:20})}),p.jsx("button",{onClick:Ec,className:"p-2 text-slate-600 border rounded-lg hover:text-slate-900 hover:bg-slate-100",title:"Imprimir Relatório / PDF",children:p.jsx(iI,{size:20})})]}),p.jsx("button",{onClick:nt,className:"p-2 text-red-500 border border-red-100 bg-red-50 rounded-lg hover:bg-red-100",children:p.jsx(rI,{size:20})})]})]}),p.jsxs("div",{className:"hidden print:block mb-8",children:[p.jsx("h1",{className:"text-3xl font-bold text-black",children:"Relatório Financeiro"}),p.jsxs("p",{className:"text-gray-600",children:["Gerado em: ",new Date().toLocaleDateString()]}),p.jsxs("p",{className:"text-gray-600",children:["Período: ",e," / ",r]})]}),!["Resumo","Investimentos","Configuracoes","Metas"].includes(e)&&p.jsx("div",{className:"overflow-x-auto pb-2 scrollbar-hide no-print",children:p.jsx("div",{className:"flex gap-2 min-w-max",children:It.map(A=>p.jsx("button",{onClick:()=>n(A),className:`px-4 py-2 rounded-full text-sm font-medium transition-all ${e===A?"bg-blue-600 text-white shadow-md scale-105":"bg-white text-slate-600 border"}`,children:A},A))})}),["Resumo","Investimentos","Configuracoes","Metas"].includes(e)?p.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden animate-fade-in relative",children:[p.jsxs("div",{className:"p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50 no-print",children:[p.jsxs("h2",{className:"text-xl font-bold text-slate-800 flex items-center gap-2",children:[e==="Resumo"&&p.jsxs(p.Fragment,{children:[p.jsx(Xm,{className:"text-blue-600"})," Análise Financeira"]}),e==="Metas"&&p.jsxs(p.Fragment,{children:[p.jsx(eh,{className:"text-orange-500"})," Metas & Objetivos"]}),e==="Configuracoes"&&p.jsxs(p.Fragment,{children:[p.jsx(tg,{className:"text-slate-600"})," Configurações"]})]}),p.jsxs("button",{onClick:()=>n(It[new Date().getMonth()]),className:"flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-100",children:[p.jsx($T,{size:16})," Voltar"]})]}),p.jsxs("div",{className:"p-6",children:[e==="Resumo"&&p.jsxs("div",{className:"space-y-8",children:[C.length>0&&p.jsxs("div",{className:"bg-gradient-to-r from-violet-50 to-fuchsia-50 p-6 rounded-xl border border-violet-100 no-print",children:[p.jsxs("h3",{className:"font-bold text-violet-800 flex items-center gap-2 mb-4",children:[p.jsx(nI,{className:"w-5 h-5"})," Assistente Inteligente"]}),p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:C.map((A,V)=>p.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-sm border border-violet-100 flex items-start gap-3",children:[p.jsx("div",{className:"p-2 rounded-full bg-violet-100 text-violet-600 flex-shrink-0",children:p.jsx(A.icon,{size:18})}),p.jsxs("div",{children:[p.jsx("h4",{className:"font-bold text-slate-700 text-sm",children:A.title}),p.jsx("p",{className:"text-xs text-slate-500 mt-1",children:A.msg})]})]},V))})]}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[p.jsx(gh,{title:"Receita",value:En,icon:th,color:"text-emerald-600"}),p.jsx(gh,{title:"Despesa",value:ur,icon:uI,color:"text-red-600"}),p.jsx(gh,{title:"Saldo",value:$a,icon:vl,color:$a>=0?"text-blue-600":"text-red-600"}),p.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between",children:[p.jsxs("div",{children:[p.jsx("p",{className:"text-slate-500 text-xs font-medium mb-1 uppercase",children:"Comparativo Mês"}),p.jsx("h3",{className:"text-lg font-bold text-slate-700",children:It[new Date().getMonth()]}),p.jsxs("div",{className:`flex items-center gap-1 text-sm font-semibold mt-1 ${kt<=0?"text-emerald-600":"text-red-600"}`,children:[kt<=0?p.jsx(BT,{size:16}):p.jsx(HT,{size:16}),Math.abs(os).toFixed(1),"% ",kt<=0?"Melhor":"Pior"]})]}),p.jsx("div",{className:"mt-2 pt-2 border-t border-slate-100 text-xs text-slate-500",children:"vs Mês Anterior"})]})]})]}),e==="Metas"&&p.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[p.jsx("div",{className:"space-y-6",children:p.jsxs("div",{className:"bg-indigo-50 p-6 rounded-xl border border-indigo-100",children:[p.jsxs("h3",{className:"font-bold text-indigo-800 mb-4 flex items-center gap-2",children:[p.jsx(sI,{size:20})," Metas de Economia"]}),p.jsxs("form",{onSubmit:Zr,className:"flex gap-2 mb-6",children:[p.jsx("input",{type:"text",placeholder:"Ex: Viagem",value:ir,onChange:A=>qi(A.target.value),className:"flex-1 p-2 rounded border text-sm",required:!0}),p.jsx("input",{type:"number",placeholder:"Alvo (R$)",value:Wi,onChange:A=>Fs(A.target.value),className:"w-24 p-2 rounded border text-sm",required:!0}),p.jsx("input",{type:"number",placeholder:"Já tenho",value:Us,onChange:A=>Gi(A.target.value),className:"w-24 p-2 rounded border text-sm"}),p.jsx("button",{type:"submit",className:"bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700",children:p.jsx(Jm,{size:20})})]}),p.jsxs("div",{className:"space-y-4",children:[U.map(A=>{const V=Math.min(A.saved/A.target*100,100);return p.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-sm border border-indigo-100",children:[p.jsxs("div",{className:"flex justify-between items-center mb-2",children:[p.jsx("span",{className:"font-bold text-slate-700",children:A.name}),p.jsx("button",{onClick:()=>es(A.id),className:"text-slate-300 hover:text-red-500",children:p.jsx(ng,{size:14})})]}),p.jsxs("div",{className:"flex justify-between text-xs text-slate-500 mb-1",children:[p.jsx("span",{children:rt(A.saved)}),p.jsxs("span",{children:["Meta: ",rt(A.target)]})]}),p.jsx("div",{className:"h-2 w-full bg-slate-100 rounded-full overflow-hidden mb-2",children:p.jsx("div",{className:"h-full bg-indigo-500 rounded-full transition-all duration-1000",style:{width:`${V}%`}})}),p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsxs("span",{className:"text-xs text-indigo-600 font-bold",children:[V.toFixed(0),"%"]}),p.jsx("input",{type:"number",className:"w-full bg-slate-50 border-b border-slate-200 text-xs px-2 py-1 outline-none focus:border-indigo-500",placeholder:"Atualizar valor guardado...",onBlur:H=>La(A.id,H.target.value),onKeyDown:H=>H.key==="Enter"&&La(A.id,H.target.value)})]})]},A.id)}),U.length===0&&p.jsx("p",{className:"text-center text-indigo-300 text-sm",children:"Nenhuma meta definida."})]})]})}),p.jsx("div",{className:"space-y-6",children:p.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200",children:[p.jsxs("h3",{className:"font-bold text-slate-700 mb-4 flex items-center gap-2",children:[p.jsx(eh,{size:20,className:"text-red-500"})," Limites de Gastos"]}),p.jsx("div",{className:"space-y-4 max-h-[500px] overflow-y-auto pr-2",children:D.despesa.map(A=>{const{spent:V,limit:H,percentage:Q}=eo(A),K=Q>100;return p.jsxs("div",{className:"space-y-1",children:[p.jsxs("div",{className:"flex justify-between items-end",children:[p.jsx("span",{className:"text-sm font-medium text-slate-600",children:A}),p.jsx("div",{className:"flex items-center gap-2",children:qe===A?p.jsx("input",{autoFocus:!0,type:"number",className:"w-24 px-2 py-1 text-xs border rounded",placeholder:"Limite",value:Yr,onChange:ye=>Ra(ye.target.value),onBlur:()=>Bs(A),onKeyDown:ye=>ye.key==="Enter"&&Bs(A)}):p.jsx("button",{onClick:()=>{We(A),Ra(k[`${r}_${A}`]||"")},className:"text-xs text-indigo-600 hover:text-indigo-800 cursor-pointer border-b border-dashed border-indigo-300",children:H>0?rt(H):"Definir"})})]}),H>0&&p.jsxs("div",{className:"relative pt-1",children:[p.jsxs("div",{className:"flex mb-1 items-center justify-between",children:[p.jsxs("span",{className:`text-[10px] font-semibold ${K?"text-red-600":"text-slate-500"}`,children:[rt(V)," de ",rt(H)]}),p.jsxs("span",{className:`text-[10px] ${K?"text-red-600 font-bold":"text-slate-400"}`,children:[Q.toFixed(0),"%"]})]}),p.jsx("div",{className:"overflow-hidden h-2 mb-2 text-xs flex rounded bg-slate-100",children:p.jsx("div",{style:{width:`${Math.min(Q,100)}%`},className:`transition-all duration-500 ${K?"bg-red-500":Q>80?"bg-yellow-400":"bg-emerald-400"}`})})]})]},A)})})]})})]}),e==="Configuracoes"&&p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[p.jsxs("div",{className:"col-span-1 md:col-span-2 bg-white rounded-xl border border-slate-200 overflow-hidden no-print",children:[p.jsx("div",{className:"p-4 bg-slate-50 border-b border-slate-100",children:p.jsxs("h3",{className:"font-bold text-slate-700 flex items-center gap-2",children:[p.jsx(eg,{size:18,className:"text-blue-600"})," Backup & Dados"]})}),p.jsxs("div",{className:"p-6 flex gap-4",children:[p.jsxs("button",{onClick:ns,className:"flex-1 py-3 border border-slate-200 rounded-lg hover:bg-slate-50 flex flex-col items-center gap-2 text-sm text-slate-600",children:[p.jsx(JT,{className:"text-blue-600"})," Exportar Backup (JSON)"]}),p.jsxs("button",{onClick:()=>Ki.current.click(),className:"flex-1 py-3 border border-slate-200 rounded-lg hover:bg-slate-50 flex flex-col items-center gap-2 text-sm text-slate-600",children:[p.jsx(hI,{className:"text-emerald-600"})," Restaurar Backup"]}),p.jsx("input",{type:"file",ref:Ki,className:"hidden",onChange:Ua,accept:".json"})]})]}),p.jsxs("div",{className:"col-span-1 md:col-span-2 bg-white rounded-xl border border-slate-200 overflow-hidden no-print",children:[p.jsxs("div",{className:"p-4 bg-slate-50 border-b border-slate-100 flex justify-between items-center",children:[p.jsxs("h3",{className:"font-bold text-slate-700 flex items-center gap-2",children:[p.jsx(Qm,{size:18,className:"text-emerald-600"})," Renda Automática"]}),p.jsxs("button",{onClick:Oa,className:"px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-2",children:[p.jsx(GT,{size:14})," Gerar no Extrato"]})]}),p.jsxs("div",{className:"p-6 grid grid-cols-1 md:grid-cols-2 gap-8",children:[p.jsxs("div",{children:[p.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[p.jsx("span",{className:"w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold",children:"1"}),p.jsx("h4",{className:"font-bold text-slate-600",children:"Pagamento Principal"})]}),p.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Dia"}),p.jsx("input",{type:"number",min:"1",max:"31",value:S.day,onChange:A=>w({...S,day:parseInt(A.target.value)}),className:"w-full px-3 py-2 border rounded-lg"})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Valor (R$)"}),p.jsx("input",{type:"number",value:S.amount,onChange:A=>w({...S,amount:A.target.value}),className:"w-full px-3 py-2 border rounded-lg",placeholder:"0.00"})]})]})]}),p.jsxs("div",{className:`transition-opacity duration-300 ${x.enabled?"opacity-100":"opacity-60"}`,children:[p.jsxs("div",{className:"flex justify-between items-center mb-4",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("span",{className:"w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold",children:"2"}),p.jsx("h4",{className:"font-bold text-slate-600",children:"Vale"})]}),p.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[p.jsx("input",{type:"checkbox",checked:x.enabled,onChange:()=>M({...x,enabled:!x.enabled}),className:"sr-only peer"}),p.jsx("div",{className:"w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"})]})]}),p.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Dia"}),p.jsx("input",{disabled:!x.enabled,type:"number",min:"1",max:"31",value:x.day,onChange:A=>M({...x,day:parseInt(A.target.value)}),className:"w-full px-3 py-2 border rounded-lg disabled:bg-slate-50"})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Valor (R$)"}),p.jsx("input",{disabled:!x.enabled,type:"number",value:x.amount,onChange:A=>M({...x,amount:A.target.value}),className:"w-full px-3 py-2 border rounded-lg disabled:bg-slate-50",placeholder:"0.00"})]})]})]})]})]}),p.jsxs("div",{className:"col-span-1 md:col-span-2 bg-slate-50 p-6 rounded-xl border border-slate-200 no-print",children:[p.jsx("div",{className:"flex justify-between items-center mb-3",children:p.jsx("h2",{className:"text-sm font-bold text-slate-600 uppercase",children:"Nova Categoria"})}),p.jsxs("form",{onSubmit:za,className:"flex gap-4 items-end",children:[p.jsxs("div",{className:"flex-1",children:[p.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Nome"}),p.jsx("input",{type:"text",value:Xr,onChange:A=>Pa(A.target.value),className:"w-full px-3 py-2 border rounded-lg"})]}),p.jsxs("div",{className:"w-40",children:[p.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Tipo"}),p.jsxs("select",{value:vn,onChange:A=>Na(A.target.value),className:"w-full px-3 py-2 border rounded-lg",children:[p.jsx("option",{value:"despesa",children:"Despesa"}),p.jsx("option",{value:"receita",children:"Receita"})]})]}),p.jsx("button",{type:"submit",className:"px-6 py-2 bg-slate-800 text-white rounded-lg",children:"Criar"})]})]})]})]})]}):p.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6 print:block",children:[p.jsxs("div",{className:"lg:col-span-4 space-y-6 no-print",children:[p.jsxs("div",{className:"bg-gradient-to-br from-indigo-900 to-slate-800 p-6 rounded-xl shadow-lg text-white",children:[p.jsxs("h2",{className:"font-bold flex items-center gap-2 mb-4 text-indigo-100",children:[p.jsx(th,{className:"w-5 h-5"})," Previsão Mensal"]}),p.jsx("div",{className:"flex justify-between items-end mb-4",children:p.jsxs("div",{children:[p.jsx("p",{className:"text-xs text-indigo-300 uppercase",children:"Saldo Projetado"}),p.jsx("p",{className:`text-3xl font-bold mt-1 ${Qi>=0?"text-emerald-400":"text-red-400"}`,children:rt(Qi)})]})}),p.jsxs("div",{className:"bg-white/10 p-3 rounded-lg border border-white/10 text-sm space-y-2",children:[p.jsxs("div",{className:"flex justify-between",children:[p.jsx("span",{children:"Saldo Hoje:"})," ",p.jsx("span",{className:"font-semibold",children:rt(ja)})]}),p.jsxs("div",{className:"flex justify-between text-indigo-200",children:[p.jsx("span",{children:"Entradas Futuras:"})," ",p.jsxs("span",{children:["+ ",rt(ar.filter(A=>A.type==="receita").reduce((A,V)=>A+V.amount,0))]})]}),p.jsxs("div",{className:"flex justify-between text-red-300",children:[p.jsx("span",{children:"Saídas Futuras:"})," ",p.jsxs("span",{children:["- ",rt(ar.filter(A=>A.type==="despesa").reduce((A,V)=>A+V.amount,0))]})]})]})]}),p.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-4",children:[p.jsxs("h2",{className:"font-semibold text-slate-700 flex justify-between",children:[e," ",r," ",p.jsx(WT,{className:"w-4 h-4 text-slate-400"})]}),p.jsxs("div",{className:"space-y-3",children:[p.jsxs("div",{className:"flex justify-between p-3 bg-emerald-50 rounded-lg",children:[p.jsx("span",{className:"text-emerald-700 text-sm",children:"Entradas"}),p.jsx("span",{className:"text-emerald-700 font-bold",children:rt(Ba)})]}),p.jsxs("div",{className:"flex justify-between p-3 bg-red-50 rounded-lg",children:[p.jsx("span",{className:"text-red-700 text-sm",children:"Saídas"}),p.jsx("span",{className:"text-red-700 font-bold",children:rt(rs)})]}),p.jsxs("div",{className:"pt-2 border-t border-slate-100 flex justify-between",children:[p.jsx("span",{className:"text-slate-600 font-medium",children:"Saldo"}),p.jsx("span",{className:`text-lg font-bold ${Zi>=0?"text-blue-600":"text-red-600"}`,children:rt(Zi)})]})]})]}),p.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200",children:[p.jsxs("h3",{className:"font-semibold text-slate-700 mb-4 flex items-center gap-2",children:[p.jsx(Jm,{className:"w-5 h-5 text-blue-600"})," Novo Lançamento"]}),p.jsxs("form",{onSubmit:Fa,className:"space-y-4",children:[p.jsxs("div",{className:"grid grid-cols-2 gap-2 mb-2",children:[p.jsx("button",{type:"button",onClick:()=>{$("receita"),tt(!1)},className:`py-2 text-sm rounded-lg border ${Se==="receita"?"bg-emerald-100 border-emerald-200 text-emerald-700 font-bold":"bg-white text-slate-500"}`,children:"Receita"}),p.jsx("button",{type:"button",onClick:()=>{$("despesa"),tt(!1)},className:`py-2 text-sm rounded-lg border ${Se==="despesa"?"bg-red-100 border-red-200 text-red-700 font-bold":"bg-white text-slate-500"}`,children:"Despesa"})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Descrição"}),p.jsx("input",{type:"text",value:T,onChange:A=>Oe(A.target.value),className:"w-full px-3 py-2 border rounded-lg",placeholder:"Ex: Mercado"})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Subcategoria (Opcional)"}),p.jsx("input",{type:"text",value:$i,onChange:A=>Hi(A.target.value),className:"w-full px-3 py-2 border rounded-lg",placeholder:"Ex: Frios..."})]}),p.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Data"}),p.jsx("input",{type:"date",value:me,onChange:A=>xe(A.target.value),className:"w-full px-3 py-2 border rounded-lg"})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Valor"}),p.jsx("input",{type:"number",step:"0.01",value:Lt,onChange:A=>sr(A.target.value),className:"w-full px-3 py-2 border rounded-lg"})]})]}),Se==="despesa"&&p.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Pagamento"}),p.jsxs("select",{value:Kt,onChange:A=>Bi(A.target.value),className:"w-full px-3 py-2 border rounded-lg text-sm bg-white",children:[p.jsx("option",{value:"Pix",children:"Pix"}),p.jsx("option",{value:"Cartão de Crédito",children:"Crédito"}),p.jsx("option",{value:"Cartão de Débito",children:"Débito"}),p.jsx("option",{value:"Dinheiro",children:"Dinheiro"})]})]}),p.jsx("div",{className:"flex items-end pb-2",children:p.jsxs("label",{className:"flex items-center gap-2 text-sm text-slate-600 cursor-pointer",children:[p.jsx("input",{type:"checkbox",checked:js,onChange:A=>ka(A.target.checked),className:"rounded text-blue-600"})," Despesa Fixa?"]})})]}),p.jsxs("div",{className:"bg-slate-50 p-3 rounded-lg border border-slate-100",children:[p.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[p.jsx("input",{type:"checkbox",checked:Gt,onChange:A=>{tt(A.target.checked),Et(Se==="receita"?12:2)},className:"rounded text-blue-600"}),p.jsx("label",{className:"text-sm font-medium text-slate-600 flex items-center gap-1",children:Se==="despesa"?p.jsxs(p.Fragment,{children:[p.jsx(tI,{size:14})," Parcelado?"]}):p.jsxs(p.Fragment,{children:[p.jsx(aI,{size:14})," Repetir?"]})})]}),Gt&&p.jsxs("div",{className:"animate-fade-in",children:[p.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:Se==="despesa"?"Nº Parcelas":"Quantos Meses?"}),p.jsx("input",{type:"number",min:"2",max:"60",value:wt,onChange:A=>Et(A.target.value),className:"w-full px-3 py-2 border rounded-lg text-sm"})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Categoria"}),p.jsx("select",{value:X,onChange:A=>se(A.target.value),className:"w-full px-3 py-2 border rounded-lg",children:D[Se].map(A=>p.jsx("option",{value:A,children:A},A))})]}),p.jsxs("button",{type:"submit",className:"w-full py-2 bg-blue-600 text-white rounded-lg font-medium flex justify-center gap-2",children:[p.jsx(eg,{className:"w-4 h-4"})," Adicionar"]})]})]})]}),p.jsxs("div",{className:"lg:col-span-8 bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col h-full min-h-[500px]",children:[p.jsxs("div",{className:"p-4 border-b border-slate-100 flex justify-between items-center",children:[p.jsxs("h3",{className:"font-semibold text-slate-700",children:["Extrato ",e]}),p.jsxs("span",{className:"text-xs text-slate-400",children:[Ln.length," itens"]})]}),p.jsx("div",{className:"flex-1 overflow-auto",children:Ln.length===0?p.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-slate-400 py-10 no-print",children:[p.jsx(vl,{className:"w-12 h-12 mb-2 opacity-20"}),p.jsx("p",{children:"Nenhum lançamento."})]}):p.jsxs("table",{className:"w-full text-left text-sm",children:[p.jsx("thead",{className:"bg-slate-50 text-slate-500 sticky top-0 z-10",children:p.jsxs("tr",{children:[p.jsx("th",{className:"p-4 w-28",children:"Data"}),p.jsx("th",{className:"p-4",children:"Descrição"}),p.jsx("th",{className:"p-4 hidden sm:table-cell",children:"Categoria"}),p.jsx("th",{className:"p-4 text-right",children:"Valor"}),p.jsx("th",{className:"p-4 w-10 no-print"})]})}),p.jsx("tbody",{className:"divide-y divide-slate-100",children:Ln.map(A=>p.jsxs("tr",{className:"hover:bg-slate-50 group",children:[p.jsxs("td",{className:"p-4 text-slate-500",children:[p.jsx("div",{className:"font-medium",children:A.date}),A.type==="despesa"&&p.jsxs("div",{className:"flex items-center gap-1 mt-1",title:A.paymentMethod,children:[as(A.paymentMethod),p.jsx("span",{className:"text-[10px] uppercase text-slate-400 hidden sm:inline",children:A.paymentMethod})]})]}),p.jsxs("td",{className:"p-4 font-medium text-slate-700",children:[A.description,p.jsxs("div",{className:"flex gap-2 mt-1",children:[A.subCategory&&p.jsx("span",{className:"text-[10px] bg-indigo-50 text-indigo-600 px-1.5 py-0.5 rounded border border-indigo-100",children:A.subCategory}),A.isFixed&&p.jsx("span",{className:"text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded border border-slate-200",children:"Fixa"}),p.jsx("div",{className:"text-xs text-slate-400 sm:hidden",children:A.category})]})]}),p.jsx("td",{className:"p-4 text-slate-500 hidden sm:table-cell",children:p.jsx("span",{className:"px-2 py-1 rounded-full bg-slate-100 text-xs",children:A.category})}),p.jsxs("td",{className:`p-4 text-right font-bold ${A.type==="receita"?"text-emerald-600":"text-red-600"}`,children:[A.type==="despesa"?"-":"+"," ",rt(A.amount)]}),p.jsx("td",{className:"p-4 text-right no-print",children:p.jsx("button",{onClick:()=>Xi(A.id),className:"p-1 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-colors",children:p.jsx(ng,{className:"w-4 h-4"})})})]},A.id))})]})})]})]})]})]})}function gh({title:t,value:e,icon:n,color:r}){const s=i=>new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(i);return p.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-start justify-between",children:[p.jsxs("div",{children:[p.jsx("p",{className:"text-slate-500 text-sm font-medium mb-1",children:t}),p.jsx("h3",{className:`text-2xl font-bold ${r}`,children:s(e)})]}),p.jsx("div",{className:`p-3 rounded-lg bg-slate-50 ${r}`,children:p.jsx(n,{className:"w-6 h-6"})})]})}Uv(document.getElementById("root")).render(p.jsx(Z.StrictMode,{children:p.jsx(wR,{})}));
