(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var yy={exports:{}},au={},_y={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Go=Symbol.for("react.element"),fE=Symbol.for("react.portal"),pE=Symbol.for("react.fragment"),mE=Symbol.for("react.strict_mode"),gE=Symbol.for("react.profiler"),yE=Symbol.for("react.provider"),_E=Symbol.for("react.context"),vE=Symbol.for("react.forward_ref"),wE=Symbol.for("react.suspense"),EE=Symbol.for("react.memo"),TE=Symbol.for("react.lazy"),Pp=Symbol.iterator;function IE(t){return t===null||typeof t!="object"?null:(t=Pp&&t[Pp]||t["@@iterator"],typeof t=="function"?t:null)}var vy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wy=Object.assign,Ey={};function fi(t,e,n){this.props=t,this.context=e,this.refs=Ey,this.updater=n||vy}fi.prototype.isReactComponent={};fi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};fi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ty(){}Ty.prototype=fi.prototype;function ad(t,e,n){this.props=t,this.context=e,this.refs=Ey,this.updater=n||vy}var ld=ad.prototype=new Ty;ld.constructor=ad;wy(ld,fi.prototype);ld.isPureReactComponent=!0;var Np=Array.isArray,Iy=Object.prototype.hasOwnProperty,ud={current:null},Sy={key:!0,ref:!0,__self:!0,__source:!0};function Ay(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Iy.call(e,r)&&!Sy.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Go,type:t,key:i,ref:o,props:s,_owner:ud.current}}function SE(t,e){return{$$typeof:Go,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function cd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Go}function AE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Dp=/\/+/g;function nc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?AE(""+t.key):e.toString(36)}function Qa(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Go:case fE:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+nc(o,0):r,Np(s)?(n="",t!=null&&(n=t.replace(Dp,"$&/")+"/"),Qa(s,e,n,"",function(h){return h})):s!=null&&(cd(s)&&(s=SE(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Dp,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Np(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+nc(i,l);o+=Qa(i,e,n,u,s)}else if(u=IE(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+nc(i,l++),o+=Qa(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Sa(t,e,n){if(t==null)return t;var r=[],s=0;return Qa(t,r,"","",function(i){return e.call(n,i,s++)}),r}function CE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ft={current:null},Xa={transition:null},RE={ReactCurrentDispatcher:ft,ReactCurrentBatchConfig:Xa,ReactCurrentOwner:ud};function Cy(){throw Error("act(...) is not supported in production builds of React.")}se.Children={map:Sa,forEach:function(t,e,n){Sa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Sa(t,function(){e++}),e},toArray:function(t){return Sa(t,function(e){return e})||[]},only:function(t){if(!cd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};se.Component=fi;se.Fragment=pE;se.Profiler=gE;se.PureComponent=ad;se.StrictMode=mE;se.Suspense=wE;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=RE;se.act=Cy;se.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=wy({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=ud.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Iy.call(e,u)&&!Sy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Go,type:t.type,key:s,ref:i,props:r,_owner:o}};se.createContext=function(t){return t={$$typeof:_E,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:yE,_context:t},t.Consumer=t};se.createElement=Ay;se.createFactory=function(t){var e=Ay.bind(null,t);return e.type=t,e};se.createRef=function(){return{current:null}};se.forwardRef=function(t){return{$$typeof:vE,render:t}};se.isValidElement=cd;se.lazy=function(t){return{$$typeof:TE,_payload:{_status:-1,_result:t},_init:CE}};se.memo=function(t,e){return{$$typeof:EE,type:t,compare:e===void 0?null:e}};se.startTransition=function(t){var e=Xa.transition;Xa.transition={};try{t()}finally{Xa.transition=e}};se.unstable_act=Cy;se.useCallback=function(t,e){return ft.current.useCallback(t,e)};se.useContext=function(t){return ft.current.useContext(t)};se.useDebugValue=function(){};se.useDeferredValue=function(t){return ft.current.useDeferredValue(t)};se.useEffect=function(t,e){return ft.current.useEffect(t,e)};se.useId=function(){return ft.current.useId()};se.useImperativeHandle=function(t,e,n){return ft.current.useImperativeHandle(t,e,n)};se.useInsertionEffect=function(t,e){return ft.current.useInsertionEffect(t,e)};se.useLayoutEffect=function(t,e){return ft.current.useLayoutEffect(t,e)};se.useMemo=function(t,e){return ft.current.useMemo(t,e)};se.useReducer=function(t,e,n){return ft.current.useReducer(t,e,n)};se.useRef=function(t){return ft.current.useRef(t)};se.useState=function(t){return ft.current.useState(t)};se.useSyncExternalStore=function(t,e,n){return ft.current.useSyncExternalStore(t,e,n)};se.useTransition=function(){return ft.current.useTransition()};se.version="18.3.1";_y.exports=se;var re=_y.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kE=re,xE=Symbol.for("react.element"),PE=Symbol.for("react.fragment"),NE=Object.prototype.hasOwnProperty,DE=kE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,VE={key:!0,ref:!0,__self:!0,__source:!0};function Ry(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)NE.call(e,r)&&!VE.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:xE,type:t,key:i,ref:o,props:s,_owner:DE.current}}au.Fragment=PE;au.jsx=Ry;au.jsxs=Ry;yy.exports=au;var _=yy.exports,ky={exports:{}},Pt={},xy={exports:{}},Py={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,K){var Z=$.length;$.push(K);e:for(;0<Z;){var fe=Z-1>>>1,Ee=$[fe];if(0<s(Ee,K))$[fe]=K,$[Z]=Ee,Z=fe;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var K=$[0],Z=$.pop();if(Z!==K){$[0]=Z;e:for(var fe=0,Ee=$.length,Zt=Ee>>>1;fe<Zt;){var mt=2*(fe+1)-1,en=$[mt],Tt=mt+1,It=$[Tt];if(0>s(en,Z))Tt<Ee&&0>s(It,en)?($[fe]=It,$[Tt]=Z,fe=Tt):($[fe]=en,$[mt]=Z,fe=mt);else if(Tt<Ee&&0>s(It,Z))$[fe]=It,$[Tt]=Z,fe=Tt;else break e}}return K}function s($,K){var Z=$.sortIndex-K.sortIndex;return Z!==0?Z:$.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,p=null,y=3,R=!1,N=!1,V=!1,M=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C($){for(var K=n(h);K!==null;){if(K.callback===null)r(h);else if(K.startTime<=$)r(h),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(h)}}function b($){if(V=!1,C($),!N)if(n(u)!==null)N=!0,zn(F);else{var K=n(h);K!==null&&Bn(b,K.startTime-$)}}function F($,K){N=!1,V&&(V=!1,S(g),g=-1),R=!0;var Z=y;try{for(C(K),p=n(u);p!==null&&(!(p.expirationTime>K)||$&&!A());){var fe=p.callback;if(typeof fe=="function"){p.callback=null,y=p.priorityLevel;var Ee=fe(p.expirationTime<=K);K=t.unstable_now(),typeof Ee=="function"?p.callback=Ee:p===n(u)&&r(u),C(K)}else r(u);p=n(u)}if(p!==null)var Zt=!0;else{var mt=n(h);mt!==null&&Bn(b,mt.startTime-K),Zt=!1}return Zt}finally{p=null,y=Z,R=!1}}var z=!1,v=null,g=-1,w=5,I=-1;function A(){return!(t.unstable_now()-I<w)}function k(){if(v!==null){var $=t.unstable_now();I=$;var K=!0;try{K=v(!0,$)}finally{K?T():(z=!1,v=null)}}else z=!1}var T;if(typeof E=="function")T=function(){E(k)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,zt=Ve.port2;Ve.port1.onmessage=k,T=function(){zt.postMessage(null)}}else T=function(){M(k,0)};function zn($){v=$,z||(z=!0,T())}function Bn($,K){g=M(function(){$(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){N||R||(N=!0,zn(F))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(y){case 1:case 2:case 3:var K=3;break;default:K=y}var Z=y;y=K;try{return $()}finally{y=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,K){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Z=y;y=$;try{return K()}finally{y=Z}},t.unstable_scheduleCallback=function($,K,Z){var fe=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?fe+Z:fe):Z=fe,$){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=Z+Ee,$={id:f++,callback:K,priorityLevel:$,startTime:Z,expirationTime:Ee,sortIndex:-1},Z>fe?($.sortIndex=Z,e(h,$),n(u)===null&&$===n(h)&&(V?(S(g),g=-1):V=!0,Bn(b,Z-fe))):($.sortIndex=Ee,e(u,$),N||R||(N=!0,zn(F))),$},t.unstable_shouldYield=A,t.unstable_wrapCallback=function($){var K=y;return function(){var Z=y;y=K;try{return $.apply(this,arguments)}finally{y=Z}}}})(Py);xy.exports=Py;var bE=xy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var OE=re,xt=bE;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ny=new Set,wo={};function ds(t,e){Js(t,e),Js(t+"Capture",e)}function Js(t,e){for(wo[t]=e,t=0;t<e.length;t++)Ny.add(e[t])}var Nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wc=Object.prototype.hasOwnProperty,ME=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vp={},bp={};function LE(t){return Wc.call(bp,t)?!0:Wc.call(Vp,t)?!1:ME.test(t)?bp[t]=!0:(Vp[t]=!0,!1)}function jE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function FE(t,e,n,r){if(e===null||typeof e>"u"||jE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){tt[t]=new pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];tt[e]=new pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){tt[t]=new pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){tt[t]=new pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){tt[t]=new pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){tt[t]=new pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){tt[t]=new pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){tt[t]=new pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){tt[t]=new pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var hd=/[\-:]([a-z])/g;function dd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(hd,dd);tt[e]=new pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(hd,dd);tt[e]=new pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(hd,dd);tt[e]=new pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){tt[t]=new pt(t,1,!1,t.toLowerCase(),null,!1,!1)});tt.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){tt[t]=new pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function fd(t,e,n,r){var s=tt.hasOwnProperty(e)?tt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(FE(e,n,s,r)&&(n=null),r||s===null?LE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Fn=OE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Aa=Symbol.for("react.element"),Ps=Symbol.for("react.portal"),Ns=Symbol.for("react.fragment"),pd=Symbol.for("react.strict_mode"),qc=Symbol.for("react.profiler"),Dy=Symbol.for("react.provider"),Vy=Symbol.for("react.context"),md=Symbol.for("react.forward_ref"),Gc=Symbol.for("react.suspense"),Kc=Symbol.for("react.suspense_list"),gd=Symbol.for("react.memo"),nr=Symbol.for("react.lazy"),by=Symbol.for("react.offscreen"),Op=Symbol.iterator;function zi(t){return t===null||typeof t!="object"?null:(t=Op&&t[Op]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Object.assign,rc;function Qi(t){if(rc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);rc=e&&e[1]||""}return`
`+rc+t}var sc=!1;function ic(t,e){if(!t||sc)return"";sc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{sc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qi(t):""}function UE(t){switch(t.tag){case 5:return Qi(t.type);case 16:return Qi("Lazy");case 13:return Qi("Suspense");case 19:return Qi("SuspenseList");case 0:case 2:case 15:return t=ic(t.type,!1),t;case 11:return t=ic(t.type.render,!1),t;case 1:return t=ic(t.type,!0),t;default:return""}}function Qc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ns:return"Fragment";case Ps:return"Portal";case qc:return"Profiler";case pd:return"StrictMode";case Gc:return"Suspense";case Kc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Vy:return(t.displayName||"Context")+".Consumer";case Dy:return(t._context.displayName||"Context")+".Provider";case md:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case gd:return e=t.displayName||null,e!==null?e:Qc(t.type)||"Memo";case nr:e=t._payload,t=t._init;try{return Qc(t(e))}catch{}}return null}function zE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qc(e);case 8:return e===pd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Oy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function BE(t){var e=Oy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ca(t){t._valueTracker||(t._valueTracker=BE(t))}function My(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Oy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function yl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xc(t,e){var n=e.checked;return Ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Mp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ly(t,e){e=e.checked,e!=null&&fd(t,"checked",e,!1)}function Yc(t,e){Ly(t,e);var n=Ar(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Jc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Jc(t,e.type,Ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Lp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Jc(t,e,n){(e!=="number"||yl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Xi=Array.isArray;function Bs(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ar(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Zc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return Ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function jp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(Xi(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ar(n)}}function jy(t,e){var n=Ar(e.value),r=Ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Fp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Fy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function eh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Fy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ra,Uy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ra=Ra||document.createElement("div"),Ra.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ra.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Eo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$E=["Webkit","ms","Moz","O"];Object.keys(ro).forEach(function(t){$E.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ro[e]=ro[t]})});function zy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ro.hasOwnProperty(t)&&ro[t]?(""+e).trim():e+"px"}function By(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=zy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var HE=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function th(t,e){if(e){if(HE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function nh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rh=null;function yd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var sh=null,$s=null,Hs=null;function Up(t){if(t=Xo(t)){if(typeof sh!="function")throw Error(j(280));var e=t.stateNode;e&&(e=du(e),sh(t.stateNode,t.type,e))}}function $y(t){$s?Hs?Hs.push(t):Hs=[t]:$s=t}function Hy(){if($s){var t=$s,e=Hs;if(Hs=$s=null,Up(t),e)for(t=0;t<e.length;t++)Up(e[t])}}function Wy(t,e){return t(e)}function qy(){}var oc=!1;function Gy(t,e,n){if(oc)return t(e,n);oc=!0;try{return Wy(t,e,n)}finally{oc=!1,($s!==null||Hs!==null)&&(qy(),Hy())}}function To(t,e){var n=t.stateNode;if(n===null)return null;var r=du(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var ih=!1;if(Nn)try{var Bi={};Object.defineProperty(Bi,"passive",{get:function(){ih=!0}}),window.addEventListener("test",Bi,Bi),window.removeEventListener("test",Bi,Bi)}catch{ih=!1}function WE(t,e,n,r,s,i,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var so=!1,_l=null,vl=!1,oh=null,qE={onError:function(t){so=!0,_l=t}};function GE(t,e,n,r,s,i,o,l,u){so=!1,_l=null,WE.apply(qE,arguments)}function KE(t,e,n,r,s,i,o,l,u){if(GE.apply(this,arguments),so){if(so){var h=_l;so=!1,_l=null}else throw Error(j(198));vl||(vl=!0,oh=h)}}function fs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ky(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zp(t){if(fs(t)!==t)throw Error(j(188))}function QE(t){var e=t.alternate;if(!e){if(e=fs(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return zp(s),t;if(i===r)return zp(s),e;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function Qy(t){return t=QE(t),t!==null?Xy(t):null}function Xy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Xy(t);if(e!==null)return e;t=t.sibling}return null}var Yy=xt.unstable_scheduleCallback,Bp=xt.unstable_cancelCallback,XE=xt.unstable_shouldYield,YE=xt.unstable_requestPaint,De=xt.unstable_now,JE=xt.unstable_getCurrentPriorityLevel,_d=xt.unstable_ImmediatePriority,Jy=xt.unstable_UserBlockingPriority,wl=xt.unstable_NormalPriority,ZE=xt.unstable_LowPriority,Zy=xt.unstable_IdlePriority,lu=null,dn=null;function e1(t){if(dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot(lu,t,void 0,(t.current.flags&128)===128)}catch{}}var Qt=Math.clz32?Math.clz32:r1,t1=Math.log,n1=Math.LN2;function r1(t){return t>>>=0,t===0?32:31-(t1(t)/n1|0)|0}var ka=64,xa=4194304;function Yi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function El(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Yi(l):(i&=o,i!==0&&(r=Yi(i)))}else o=n&~s,o!==0?r=Yi(o):i!==0&&(r=Yi(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Qt(e),s=1<<n,r|=t[n],e&=~s;return r}function s1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function i1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Qt(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=s1(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function ah(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function e_(){var t=ka;return ka<<=1,!(ka&4194240)&&(ka=64),t}function ac(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ko(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qt(e),t[e]=n}function o1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Qt(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function vd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Qt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var de=0;function t_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var n_,wd,r_,s_,i_,lh=!1,Pa=[],dr=null,fr=null,pr=null,Io=new Map,So=new Map,sr=[],a1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $p(t,e){switch(t){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":pr=null;break;case"pointerover":case"pointerout":Io.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(e.pointerId)}}function $i(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Xo(e),e!==null&&wd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function l1(t,e,n,r,s){switch(e){case"focusin":return dr=$i(dr,t,e,n,r,s),!0;case"dragenter":return fr=$i(fr,t,e,n,r,s),!0;case"mouseover":return pr=$i(pr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Io.set(i,$i(Io.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,So.set(i,$i(So.get(i)||null,t,e,n,r,s)),!0}return!1}function o_(t){var e=Gr(t.target);if(e!==null){var n=fs(e);if(n!==null){if(e=n.tag,e===13){if(e=Ky(n),e!==null){t.blockedOn=e,i_(t.priority,function(){r_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ya(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=uh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);rh=r,n.target.dispatchEvent(r),rh=null}else return e=Xo(n),e!==null&&wd(e),t.blockedOn=n,!1;e.shift()}return!0}function Hp(t,e,n){Ya(t)&&n.delete(e)}function u1(){lh=!1,dr!==null&&Ya(dr)&&(dr=null),fr!==null&&Ya(fr)&&(fr=null),pr!==null&&Ya(pr)&&(pr=null),Io.forEach(Hp),So.forEach(Hp)}function Hi(t,e){t.blockedOn===e&&(t.blockedOn=null,lh||(lh=!0,xt.unstable_scheduleCallback(xt.unstable_NormalPriority,u1)))}function Ao(t){function e(s){return Hi(s,t)}if(0<Pa.length){Hi(Pa[0],t);for(var n=1;n<Pa.length;n++){var r=Pa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(dr!==null&&Hi(dr,t),fr!==null&&Hi(fr,t),pr!==null&&Hi(pr,t),Io.forEach(e),So.forEach(e),n=0;n<sr.length;n++)r=sr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<sr.length&&(n=sr[0],n.blockedOn===null);)o_(n),n.blockedOn===null&&sr.shift()}var Ws=Fn.ReactCurrentBatchConfig,Tl=!0;function c1(t,e,n,r){var s=de,i=Ws.transition;Ws.transition=null;try{de=1,Ed(t,e,n,r)}finally{de=s,Ws.transition=i}}function h1(t,e,n,r){var s=de,i=Ws.transition;Ws.transition=null;try{de=4,Ed(t,e,n,r)}finally{de=s,Ws.transition=i}}function Ed(t,e,n,r){if(Tl){var s=uh(t,e,n,r);if(s===null)yc(t,e,r,Il,n),$p(t,r);else if(l1(s,t,e,n,r))r.stopPropagation();else if($p(t,r),e&4&&-1<a1.indexOf(t)){for(;s!==null;){var i=Xo(s);if(i!==null&&n_(i),i=uh(t,e,n,r),i===null&&yc(t,e,r,Il,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else yc(t,e,r,null,n)}}var Il=null;function uh(t,e,n,r){if(Il=null,t=yd(r),t=Gr(t),t!==null)if(e=fs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ky(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Il=t,null}function a_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(JE()){case _d:return 1;case Jy:return 4;case wl:case ZE:return 16;case Zy:return 536870912;default:return 16}default:return 16}}var ur=null,Td=null,Ja=null;function l_(){if(Ja)return Ja;var t,e=Td,n=e.length,r,s="value"in ur?ur.value:ur.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Ja=s.slice(t,1<r?1-r:void 0)}function Za(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Na(){return!0}function Wp(){return!1}function Nt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Na:Wp,this.isPropagationStopped=Wp,this}return Ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Na)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Na)},persist:function(){},isPersistent:Na}),e}var pi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Id=Nt(pi),Qo=Ae({},pi,{view:0,detail:0}),d1=Nt(Qo),lc,uc,Wi,uu=Ae({},Qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Wi&&(Wi&&t.type==="mousemove"?(lc=t.screenX-Wi.screenX,uc=t.screenY-Wi.screenY):uc=lc=0,Wi=t),lc)},movementY:function(t){return"movementY"in t?t.movementY:uc}}),qp=Nt(uu),f1=Ae({},uu,{dataTransfer:0}),p1=Nt(f1),m1=Ae({},Qo,{relatedTarget:0}),cc=Nt(m1),g1=Ae({},pi,{animationName:0,elapsedTime:0,pseudoElement:0}),y1=Nt(g1),_1=Ae({},pi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),v1=Nt(_1),w1=Ae({},pi,{data:0}),Gp=Nt(w1),E1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},T1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},I1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function S1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=I1[t])?!!e[t]:!1}function Sd(){return S1}var A1=Ae({},Qo,{key:function(t){if(t.key){var e=E1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Za(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?T1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sd,charCode:function(t){return t.type==="keypress"?Za(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Za(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),C1=Nt(A1),R1=Ae({},uu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kp=Nt(R1),k1=Ae({},Qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sd}),x1=Nt(k1),P1=Ae({},pi,{propertyName:0,elapsedTime:0,pseudoElement:0}),N1=Nt(P1),D1=Ae({},uu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),V1=Nt(D1),b1=[9,13,27,32],Ad=Nn&&"CompositionEvent"in window,io=null;Nn&&"documentMode"in document&&(io=document.documentMode);var O1=Nn&&"TextEvent"in window&&!io,u_=Nn&&(!Ad||io&&8<io&&11>=io),Qp=" ",Xp=!1;function c_(t,e){switch(t){case"keyup":return b1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function h_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ds=!1;function M1(t,e){switch(t){case"compositionend":return h_(e);case"keypress":return e.which!==32?null:(Xp=!0,Qp);case"textInput":return t=e.data,t===Qp&&Xp?null:t;default:return null}}function L1(t,e){if(Ds)return t==="compositionend"||!Ad&&c_(t,e)?(t=l_(),Ja=Td=ur=null,Ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return u_&&e.locale!=="ko"?null:e.data;default:return null}}var j1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!j1[t.type]:e==="textarea"}function d_(t,e,n,r){$y(r),e=Sl(e,"onChange"),0<e.length&&(n=new Id("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var oo=null,Co=null;function F1(t){I_(t,0)}function cu(t){var e=Os(t);if(My(e))return t}function U1(t,e){if(t==="change")return e}var f_=!1;if(Nn){var hc;if(Nn){var dc="oninput"in document;if(!dc){var Jp=document.createElement("div");Jp.setAttribute("oninput","return;"),dc=typeof Jp.oninput=="function"}hc=dc}else hc=!1;f_=hc&&(!document.documentMode||9<document.documentMode)}function Zp(){oo&&(oo.detachEvent("onpropertychange",p_),Co=oo=null)}function p_(t){if(t.propertyName==="value"&&cu(Co)){var e=[];d_(e,Co,t,yd(t)),Gy(F1,e)}}function z1(t,e,n){t==="focusin"?(Zp(),oo=e,Co=n,oo.attachEvent("onpropertychange",p_)):t==="focusout"&&Zp()}function B1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cu(Co)}function $1(t,e){if(t==="click")return cu(e)}function H1(t,e){if(t==="input"||t==="change")return cu(e)}function W1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jt=typeof Object.is=="function"?Object.is:W1;function Ro(t,e){if(Jt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Wc.call(e,s)||!Jt(t[s],e[s]))return!1}return!0}function em(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tm(t,e){var n=em(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=em(n)}}function m_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?m_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function g_(){for(var t=window,e=yl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yl(t.document)}return e}function Cd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function q1(t){var e=g_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&m_(n.ownerDocument.documentElement,n)){if(r!==null&&Cd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=tm(n,i);var o=tm(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var G1=Nn&&"documentMode"in document&&11>=document.documentMode,Vs=null,ch=null,ao=null,hh=!1;function nm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hh||Vs==null||Vs!==yl(r)||(r=Vs,"selectionStart"in r&&Cd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ao&&Ro(ao,r)||(ao=r,r=Sl(ch,"onSelect"),0<r.length&&(e=new Id("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Vs)))}function Da(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var bs={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionend:Da("Transition","TransitionEnd")},fc={},y_={};Nn&&(y_=document.createElement("div").style,"AnimationEvent"in window||(delete bs.animationend.animation,delete bs.animationiteration.animation,delete bs.animationstart.animation),"TransitionEvent"in window||delete bs.transitionend.transition);function hu(t){if(fc[t])return fc[t];if(!bs[t])return t;var e=bs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in y_)return fc[t]=e[n];return t}var __=hu("animationend"),v_=hu("animationiteration"),w_=hu("animationstart"),E_=hu("transitionend"),T_=new Map,rm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vr(t,e){T_.set(t,e),ds(e,[t])}for(var pc=0;pc<rm.length;pc++){var mc=rm[pc],K1=mc.toLowerCase(),Q1=mc[0].toUpperCase()+mc.slice(1);Vr(K1,"on"+Q1)}Vr(__,"onAnimationEnd");Vr(v_,"onAnimationIteration");Vr(w_,"onAnimationStart");Vr("dblclick","onDoubleClick");Vr("focusin","onFocus");Vr("focusout","onBlur");Vr(E_,"onTransitionEnd");Js("onMouseEnter",["mouseout","mouseover"]);Js("onMouseLeave",["mouseout","mouseover"]);Js("onPointerEnter",["pointerout","pointerover"]);Js("onPointerLeave",["pointerout","pointerover"]);ds("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ds("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ds("onBeforeInput",["compositionend","keypress","textInput","paste"]);ds("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ds("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ds("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ji="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),X1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ji));function sm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,KE(r,e,void 0,t),t.currentTarget=null}function I_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;sm(s,l,h),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;sm(s,l,h),i=u}}}if(vl)throw t=oh,vl=!1,oh=null,t}function ye(t,e){var n=e[gh];n===void 0&&(n=e[gh]=new Set);var r=t+"__bubble";n.has(r)||(S_(e,t,2,!1),n.add(r))}function gc(t,e,n){var r=0;e&&(r|=4),S_(n,t,r,e)}var Va="_reactListening"+Math.random().toString(36).slice(2);function ko(t){if(!t[Va]){t[Va]=!0,Ny.forEach(function(n){n!=="selectionchange"&&(X1.has(n)||gc(n,!1,t),gc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Va]||(e[Va]=!0,gc("selectionchange",!1,e))}}function S_(t,e,n,r){switch(a_(e)){case 1:var s=c1;break;case 4:s=h1;break;default:s=Ed}n=s.bind(null,e,n,t),s=void 0,!ih||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function yc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Gr(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}Gy(function(){var h=i,f=yd(n),p=[];e:{var y=T_.get(t);if(y!==void 0){var R=Id,N=t;switch(t){case"keypress":if(Za(n)===0)break e;case"keydown":case"keyup":R=C1;break;case"focusin":N="focus",R=cc;break;case"focusout":N="blur",R=cc;break;case"beforeblur":case"afterblur":R=cc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=qp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=p1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=x1;break;case __:case v_:case w_:R=y1;break;case E_:R=N1;break;case"scroll":R=d1;break;case"wheel":R=V1;break;case"copy":case"cut":case"paste":R=v1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Kp}var V=(e&4)!==0,M=!V&&t==="scroll",S=V?y!==null?y+"Capture":null:y;V=[];for(var E=h,C;E!==null;){C=E;var b=C.stateNode;if(C.tag===5&&b!==null&&(C=b,S!==null&&(b=To(E,S),b!=null&&V.push(xo(E,b,C)))),M)break;E=E.return}0<V.length&&(y=new R(y,N,null,n,f),p.push({event:y,listeners:V}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",R=t==="mouseout"||t==="pointerout",y&&n!==rh&&(N=n.relatedTarget||n.fromElement)&&(Gr(N)||N[Dn]))break e;if((R||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,R?(N=n.relatedTarget||n.toElement,R=h,N=N?Gr(N):null,N!==null&&(M=fs(N),N!==M||N.tag!==5&&N.tag!==6)&&(N=null)):(R=null,N=h),R!==N)){if(V=qp,b="onMouseLeave",S="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(V=Kp,b="onPointerLeave",S="onPointerEnter",E="pointer"),M=R==null?y:Os(R),C=N==null?y:Os(N),y=new V(b,E+"leave",R,n,f),y.target=M,y.relatedTarget=C,b=null,Gr(f)===h&&(V=new V(S,E+"enter",N,n,f),V.target=C,V.relatedTarget=M,b=V),M=b,R&&N)t:{for(V=R,S=N,E=0,C=V;C;C=As(C))E++;for(C=0,b=S;b;b=As(b))C++;for(;0<E-C;)V=As(V),E--;for(;0<C-E;)S=As(S),C--;for(;E--;){if(V===S||S!==null&&V===S.alternate)break t;V=As(V),S=As(S)}V=null}else V=null;R!==null&&im(p,y,R,V,!1),N!==null&&M!==null&&im(p,M,N,V,!0)}}e:{if(y=h?Os(h):window,R=y.nodeName&&y.nodeName.toLowerCase(),R==="select"||R==="input"&&y.type==="file")var F=U1;else if(Yp(y))if(f_)F=H1;else{F=B1;var z=z1}else(R=y.nodeName)&&R.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(F=$1);if(F&&(F=F(t,h))){d_(p,F,n,f);break e}z&&z(t,y,h),t==="focusout"&&(z=y._wrapperState)&&z.controlled&&y.type==="number"&&Jc(y,"number",y.value)}switch(z=h?Os(h):window,t){case"focusin":(Yp(z)||z.contentEditable==="true")&&(Vs=z,ch=h,ao=null);break;case"focusout":ao=ch=Vs=null;break;case"mousedown":hh=!0;break;case"contextmenu":case"mouseup":case"dragend":hh=!1,nm(p,n,f);break;case"selectionchange":if(G1)break;case"keydown":case"keyup":nm(p,n,f)}var v;if(Ad)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else Ds?c_(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(u_&&n.locale!=="ko"&&(Ds||g!=="onCompositionStart"?g==="onCompositionEnd"&&Ds&&(v=l_()):(ur=f,Td="value"in ur?ur.value:ur.textContent,Ds=!0)),z=Sl(h,g),0<z.length&&(g=new Gp(g,t,null,n,f),p.push({event:g,listeners:z}),v?g.data=v:(v=h_(n),v!==null&&(g.data=v)))),(v=O1?M1(t,n):L1(t,n))&&(h=Sl(h,"onBeforeInput"),0<h.length&&(f=new Gp("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:h}),f.data=v))}I_(p,e)})}function xo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Sl(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=To(t,n),i!=null&&r.unshift(xo(t,i,s)),i=To(t,e),i!=null&&r.push(xo(t,i,s))),t=t.return}return r}function As(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function im(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,s?(u=To(n,i),u!=null&&o.unshift(xo(n,u,l))):s||(u=To(n,i),u!=null&&o.push(xo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Y1=/\r\n?/g,J1=/\u0000|\uFFFD/g;function om(t){return(typeof t=="string"?t:""+t).replace(Y1,`
`).replace(J1,"")}function ba(t,e,n){if(e=om(e),om(t)!==e&&n)throw Error(j(425))}function Al(){}var dh=null,fh=null;function ph(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var mh=typeof setTimeout=="function"?setTimeout:void 0,Z1=typeof clearTimeout=="function"?clearTimeout:void 0,am=typeof Promise=="function"?Promise:void 0,eT=typeof queueMicrotask=="function"?queueMicrotask:typeof am<"u"?function(t){return am.resolve(null).then(t).catch(tT)}:mh;function tT(t){setTimeout(function(){throw t})}function _c(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Ao(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Ao(e)}function mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function lm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var mi=Math.random().toString(36).slice(2),hn="__reactFiber$"+mi,Po="__reactProps$"+mi,Dn="__reactContainer$"+mi,gh="__reactEvents$"+mi,nT="__reactListeners$"+mi,rT="__reactHandles$"+mi;function Gr(t){var e=t[hn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Dn]||n[hn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=lm(t);t!==null;){if(n=t[hn])return n;t=lm(t)}return e}t=n,n=t.parentNode}return null}function Xo(t){return t=t[hn]||t[Dn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Os(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function du(t){return t[Po]||null}var yh=[],Ms=-1;function br(t){return{current:t}}function ve(t){0>Ms||(t.current=yh[Ms],yh[Ms]=null,Ms--)}function me(t,e){Ms++,yh[Ms]=t.current,t.current=e}var Cr={},ut=br(Cr),vt=br(!1),ns=Cr;function Zs(t,e){var n=t.type.contextTypes;if(!n)return Cr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function wt(t){return t=t.childContextTypes,t!=null}function Cl(){ve(vt),ve(ut)}function um(t,e,n){if(ut.current!==Cr)throw Error(j(168));me(ut,e),me(vt,n)}function A_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(j(108,zE(t)||"Unknown",s));return Ae({},n,r)}function Rl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Cr,ns=ut.current,me(ut,t),me(vt,vt.current),!0}function cm(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=A_(t,e,ns),r.__reactInternalMemoizedMergedChildContext=t,ve(vt),ve(ut),me(ut,t)):ve(vt),me(vt,n)}var In=null,fu=!1,vc=!1;function C_(t){In===null?In=[t]:In.push(t)}function sT(t){fu=!0,C_(t)}function Or(){if(!vc&&In!==null){vc=!0;var t=0,e=de;try{var n=In;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}In=null,fu=!1}catch(s){throw In!==null&&(In=In.slice(t+1)),Yy(_d,Or),s}finally{de=e,vc=!1}}return null}var Ls=[],js=0,kl=null,xl=0,Dt=[],Vt=0,rs=null,An=1,Cn="";function Hr(t,e){Ls[js++]=xl,Ls[js++]=kl,kl=t,xl=e}function R_(t,e,n){Dt[Vt++]=An,Dt[Vt++]=Cn,Dt[Vt++]=rs,rs=t;var r=An;t=Cn;var s=32-Qt(r)-1;r&=~(1<<s),n+=1;var i=32-Qt(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,An=1<<32-Qt(e)+s|n<<s|r,Cn=i+t}else An=1<<i|n<<s|r,Cn=t}function Rd(t){t.return!==null&&(Hr(t,1),R_(t,1,0))}function kd(t){for(;t===kl;)kl=Ls[--js],Ls[js]=null,xl=Ls[--js],Ls[js]=null;for(;t===rs;)rs=Dt[--Vt],Dt[Vt]=null,Cn=Dt[--Vt],Dt[Vt]=null,An=Dt[--Vt],Dt[Vt]=null}var kt=null,Rt=null,we=!1,Wt=null;function k_(t,e){var n=Mt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function hm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,kt=t,Rt=mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,kt=t,Rt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=rs!==null?{id:An,overflow:Cn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Mt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,kt=t,Rt=null,!0):!1;default:return!1}}function _h(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vh(t){if(we){var e=Rt;if(e){var n=e;if(!hm(t,e)){if(_h(t))throw Error(j(418));e=mr(n.nextSibling);var r=kt;e&&hm(t,e)?k_(r,n):(t.flags=t.flags&-4097|2,we=!1,kt=t)}}else{if(_h(t))throw Error(j(418));t.flags=t.flags&-4097|2,we=!1,kt=t}}}function dm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kt=t}function Oa(t){if(t!==kt)return!1;if(!we)return dm(t),we=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ph(t.type,t.memoizedProps)),e&&(e=Rt)){if(_h(t))throw x_(),Error(j(418));for(;e;)k_(t,e),e=mr(e.nextSibling)}if(dm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rt=mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rt=null}}else Rt=kt?mr(t.stateNode.nextSibling):null;return!0}function x_(){for(var t=Rt;t;)t=mr(t.nextSibling)}function ei(){Rt=kt=null,we=!1}function xd(t){Wt===null?Wt=[t]:Wt.push(t)}var iT=Fn.ReactCurrentBatchConfig;function qi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function Ma(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function fm(t){var e=t._init;return e(t._payload)}function P_(t){function e(S,E){if(t){var C=S.deletions;C===null?(S.deletions=[E],S.flags|=16):C.push(E)}}function n(S,E){if(!t)return null;for(;E!==null;)e(S,E),E=E.sibling;return null}function r(S,E){for(S=new Map;E!==null;)E.key!==null?S.set(E.key,E):S.set(E.index,E),E=E.sibling;return S}function s(S,E){return S=vr(S,E),S.index=0,S.sibling=null,S}function i(S,E,C){return S.index=C,t?(C=S.alternate,C!==null?(C=C.index,C<E?(S.flags|=2,E):C):(S.flags|=2,E)):(S.flags|=1048576,E)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,E,C,b){return E===null||E.tag!==6?(E=Cc(C,S.mode,b),E.return=S,E):(E=s(E,C),E.return=S,E)}function u(S,E,C,b){var F=C.type;return F===Ns?f(S,E,C.props.children,b,C.key):E!==null&&(E.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===nr&&fm(F)===E.type)?(b=s(E,C.props),b.ref=qi(S,E,C),b.return=S,b):(b=ol(C.type,C.key,C.props,null,S.mode,b),b.ref=qi(S,E,C),b.return=S,b)}function h(S,E,C,b){return E===null||E.tag!==4||E.stateNode.containerInfo!==C.containerInfo||E.stateNode.implementation!==C.implementation?(E=Rc(C,S.mode,b),E.return=S,E):(E=s(E,C.children||[]),E.return=S,E)}function f(S,E,C,b,F){return E===null||E.tag!==7?(E=Zr(C,S.mode,b,F),E.return=S,E):(E=s(E,C),E.return=S,E)}function p(S,E,C){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Cc(""+E,S.mode,C),E.return=S,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Aa:return C=ol(E.type,E.key,E.props,null,S.mode,C),C.ref=qi(S,null,E),C.return=S,C;case Ps:return E=Rc(E,S.mode,C),E.return=S,E;case nr:var b=E._init;return p(S,b(E._payload),C)}if(Xi(E)||zi(E))return E=Zr(E,S.mode,C,null),E.return=S,E;Ma(S,E)}return null}function y(S,E,C,b){var F=E!==null?E.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return F!==null?null:l(S,E,""+C,b);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Aa:return C.key===F?u(S,E,C,b):null;case Ps:return C.key===F?h(S,E,C,b):null;case nr:return F=C._init,y(S,E,F(C._payload),b)}if(Xi(C)||zi(C))return F!==null?null:f(S,E,C,b,null);Ma(S,C)}return null}function R(S,E,C,b,F){if(typeof b=="string"&&b!==""||typeof b=="number")return S=S.get(C)||null,l(E,S,""+b,F);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Aa:return S=S.get(b.key===null?C:b.key)||null,u(E,S,b,F);case Ps:return S=S.get(b.key===null?C:b.key)||null,h(E,S,b,F);case nr:var z=b._init;return R(S,E,C,z(b._payload),F)}if(Xi(b)||zi(b))return S=S.get(C)||null,f(E,S,b,F,null);Ma(E,b)}return null}function N(S,E,C,b){for(var F=null,z=null,v=E,g=E=0,w=null;v!==null&&g<C.length;g++){v.index>g?(w=v,v=null):w=v.sibling;var I=y(S,v,C[g],b);if(I===null){v===null&&(v=w);break}t&&v&&I.alternate===null&&e(S,v),E=i(I,E,g),z===null?F=I:z.sibling=I,z=I,v=w}if(g===C.length)return n(S,v),we&&Hr(S,g),F;if(v===null){for(;g<C.length;g++)v=p(S,C[g],b),v!==null&&(E=i(v,E,g),z===null?F=v:z.sibling=v,z=v);return we&&Hr(S,g),F}for(v=r(S,v);g<C.length;g++)w=R(v,S,g,C[g],b),w!==null&&(t&&w.alternate!==null&&v.delete(w.key===null?g:w.key),E=i(w,E,g),z===null?F=w:z.sibling=w,z=w);return t&&v.forEach(function(A){return e(S,A)}),we&&Hr(S,g),F}function V(S,E,C,b){var F=zi(C);if(typeof F!="function")throw Error(j(150));if(C=F.call(C),C==null)throw Error(j(151));for(var z=F=null,v=E,g=E=0,w=null,I=C.next();v!==null&&!I.done;g++,I=C.next()){v.index>g?(w=v,v=null):w=v.sibling;var A=y(S,v,I.value,b);if(A===null){v===null&&(v=w);break}t&&v&&A.alternate===null&&e(S,v),E=i(A,E,g),z===null?F=A:z.sibling=A,z=A,v=w}if(I.done)return n(S,v),we&&Hr(S,g),F;if(v===null){for(;!I.done;g++,I=C.next())I=p(S,I.value,b),I!==null&&(E=i(I,E,g),z===null?F=I:z.sibling=I,z=I);return we&&Hr(S,g),F}for(v=r(S,v);!I.done;g++,I=C.next())I=R(v,S,g,I.value,b),I!==null&&(t&&I.alternate!==null&&v.delete(I.key===null?g:I.key),E=i(I,E,g),z===null?F=I:z.sibling=I,z=I);return t&&v.forEach(function(k){return e(S,k)}),we&&Hr(S,g),F}function M(S,E,C,b){if(typeof C=="object"&&C!==null&&C.type===Ns&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case Aa:e:{for(var F=C.key,z=E;z!==null;){if(z.key===F){if(F=C.type,F===Ns){if(z.tag===7){n(S,z.sibling),E=s(z,C.props.children),E.return=S,S=E;break e}}else if(z.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===nr&&fm(F)===z.type){n(S,z.sibling),E=s(z,C.props),E.ref=qi(S,z,C),E.return=S,S=E;break e}n(S,z);break}else e(S,z);z=z.sibling}C.type===Ns?(E=Zr(C.props.children,S.mode,b,C.key),E.return=S,S=E):(b=ol(C.type,C.key,C.props,null,S.mode,b),b.ref=qi(S,E,C),b.return=S,S=b)}return o(S);case Ps:e:{for(z=C.key;E!==null;){if(E.key===z)if(E.tag===4&&E.stateNode.containerInfo===C.containerInfo&&E.stateNode.implementation===C.implementation){n(S,E.sibling),E=s(E,C.children||[]),E.return=S,S=E;break e}else{n(S,E);break}else e(S,E);E=E.sibling}E=Rc(C,S.mode,b),E.return=S,S=E}return o(S);case nr:return z=C._init,M(S,E,z(C._payload),b)}if(Xi(C))return N(S,E,C,b);if(zi(C))return V(S,E,C,b);Ma(S,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,E!==null&&E.tag===6?(n(S,E.sibling),E=s(E,C),E.return=S,S=E):(n(S,E),E=Cc(C,S.mode,b),E.return=S,S=E),o(S)):n(S,E)}return M}var ti=P_(!0),N_=P_(!1),Pl=br(null),Nl=null,Fs=null,Pd=null;function Nd(){Pd=Fs=Nl=null}function Dd(t){var e=Pl.current;ve(Pl),t._currentValue=e}function wh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function qs(t,e){Nl=t,Pd=Fs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(_t=!0),t.firstContext=null)}function jt(t){var e=t._currentValue;if(Pd!==t)if(t={context:t,memoizedValue:e,next:null},Fs===null){if(Nl===null)throw Error(j(308));Fs=t,Nl.dependencies={lanes:0,firstContext:t}}else Fs=Fs.next=t;return e}var Kr=null;function Vd(t){Kr===null?Kr=[t]:Kr.push(t)}function D_(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Vd(e)):(n.next=s.next,s.next=n),e.interleaved=n,Vn(t,r)}function Vn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var rr=!1;function bd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function V_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function gr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Vn(t,n)}return s=r.interleaved,s===null?(e.next=e,Vd(r)):(e.next=s.next,s.next=e),r.interleaved=e,Vn(t,n)}function el(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,vd(t,n)}}function pm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Dl(t,e,n,r){var s=t.updateQueue;rr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?i=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(i!==null){var p=s.baseState;o=0,f=h=u=null,l=i;do{var y=l.lane,R=l.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:R,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var N=t,V=l;switch(y=e,R=n,V.tag){case 1:if(N=V.payload,typeof N=="function"){p=N.call(R,p,y);break e}p=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=V.payload,y=typeof N=="function"?N.call(R,p,y):N,y==null)break e;p=Ae({},p,y);break e;case 2:rr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=s.effects,y===null?s.effects=[l]:y.push(l))}else R={eventTime:R,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=R,u=p):f=f.next=R,o|=y;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;y=l,l=y.next,y.next=null,s.lastBaseUpdate=y,s.shared.pending=null}}while(!0);if(f===null&&(u=p),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);is|=o,t.lanes=o,t.memoizedState=p}}function mm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(j(191,s));s.call(r)}}}var Yo={},fn=br(Yo),No=br(Yo),Do=br(Yo);function Qr(t){if(t===Yo)throw Error(j(174));return t}function Od(t,e){switch(me(Do,e),me(No,t),me(fn,Yo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:eh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=eh(e,t)}ve(fn),me(fn,e)}function ni(){ve(fn),ve(No),ve(Do)}function b_(t){Qr(Do.current);var e=Qr(fn.current),n=eh(e,t.type);e!==n&&(me(No,t),me(fn,n))}function Md(t){No.current===t&&(ve(fn),ve(No))}var Te=br(0);function Vl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var wc=[];function Ld(){for(var t=0;t<wc.length;t++)wc[t]._workInProgressVersionPrimary=null;wc.length=0}var tl=Fn.ReactCurrentDispatcher,Ec=Fn.ReactCurrentBatchConfig,ss=0,Se=null,ze=null,Ke=null,bl=!1,lo=!1,Vo=0,oT=0;function rt(){throw Error(j(321))}function jd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jt(t[n],e[n]))return!1;return!0}function Fd(t,e,n,r,s,i){if(ss=i,Se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tl.current=t===null||t.memoizedState===null?cT:hT,t=n(r,s),lo){i=0;do{if(lo=!1,Vo=0,25<=i)throw Error(j(301));i+=1,Ke=ze=null,e.updateQueue=null,tl.current=dT,t=n(r,s)}while(lo)}if(tl.current=Ol,e=ze!==null&&ze.next!==null,ss=0,Ke=ze=Se=null,bl=!1,e)throw Error(j(300));return t}function Ud(){var t=Vo!==0;return Vo=0,t}function un(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?Se.memoizedState=Ke=t:Ke=Ke.next=t,Ke}function Ft(){if(ze===null){var t=Se.alternate;t=t!==null?t.memoizedState:null}else t=ze.next;var e=Ke===null?Se.memoizedState:Ke.next;if(e!==null)Ke=e,ze=t;else{if(t===null)throw Error(j(310));ze=t,t={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Ke===null?Se.memoizedState=Ke=t:Ke=Ke.next=t}return Ke}function bo(t,e){return typeof e=="function"?e(t):e}function Tc(t){var e=Ft(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=ze,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,h=i;do{var f=h.lane;if((ss&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Se.lanes|=f,is|=f}h=h.next}while(h!==null&&h!==i);u===null?o=r:u.next=l,Jt(r,e.memoizedState)||(_t=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Se.lanes|=i,is|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ic(t){var e=Ft(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Jt(i,e.memoizedState)||(_t=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function O_(){}function M_(t,e){var n=Se,r=Ft(),s=e(),i=!Jt(r.memoizedState,s);if(i&&(r.memoizedState=s,_t=!0),r=r.queue,zd(F_.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Ke!==null&&Ke.memoizedState.tag&1){if(n.flags|=2048,Oo(9,j_.bind(null,n,r,s,e),void 0,null),Xe===null)throw Error(j(349));ss&30||L_(n,e,s)}return s}function L_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function j_(t,e,n,r){e.value=n,e.getSnapshot=r,U_(e)&&z_(t)}function F_(t,e,n){return n(function(){U_(e)&&z_(t)})}function U_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jt(t,n)}catch{return!0}}function z_(t){var e=Vn(t,1);e!==null&&Xt(e,t,1,-1)}function gm(t){var e=un();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bo,lastRenderedState:t},e.queue=t,t=t.dispatch=uT.bind(null,Se,t),[e.memoizedState,t]}function Oo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function B_(){return Ft().memoizedState}function nl(t,e,n,r){var s=un();Se.flags|=t,s.memoizedState=Oo(1|e,n,void 0,r===void 0?null:r)}function pu(t,e,n,r){var s=Ft();r=r===void 0?null:r;var i=void 0;if(ze!==null){var o=ze.memoizedState;if(i=o.destroy,r!==null&&jd(r,o.deps)){s.memoizedState=Oo(e,n,i,r);return}}Se.flags|=t,s.memoizedState=Oo(1|e,n,i,r)}function ym(t,e){return nl(8390656,8,t,e)}function zd(t,e){return pu(2048,8,t,e)}function $_(t,e){return pu(4,2,t,e)}function H_(t,e){return pu(4,4,t,e)}function W_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function q_(t,e,n){return n=n!=null?n.concat([t]):null,pu(4,4,W_.bind(null,e,t),n)}function Bd(){}function G_(t,e){var n=Ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&jd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function K_(t,e){var n=Ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&jd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Q_(t,e,n){return ss&21?(Jt(n,e)||(n=e_(),Se.lanes|=n,is|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,_t=!0),t.memoizedState=n)}function aT(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=Ec.transition;Ec.transition={};try{t(!1),e()}finally{de=n,Ec.transition=r}}function X_(){return Ft().memoizedState}function lT(t,e,n){var r=_r(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Y_(t))J_(e,n);else if(n=D_(t,e,n,r),n!==null){var s=dt();Xt(n,t,r,s),Z_(n,e,r)}}function uT(t,e,n){var r=_r(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Y_(t))J_(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,Jt(l,o)){var u=e.interleaved;u===null?(s.next=s,Vd(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=D_(t,e,s,r),n!==null&&(s=dt(),Xt(n,t,r,s),Z_(n,e,r))}}function Y_(t){var e=t.alternate;return t===Se||e!==null&&e===Se}function J_(t,e){lo=bl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Z_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,vd(t,n)}}var Ol={readContext:jt,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},cT={readContext:jt,useCallback:function(t,e){return un().memoizedState=[t,e===void 0?null:e],t},useContext:jt,useEffect:ym,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,nl(4194308,4,W_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return nl(4,2,t,e)},useMemo:function(t,e){var n=un();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=un();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=lT.bind(null,Se,t),[r.memoizedState,t]},useRef:function(t){var e=un();return t={current:t},e.memoizedState=t},useState:gm,useDebugValue:Bd,useDeferredValue:function(t){return un().memoizedState=t},useTransition:function(){var t=gm(!1),e=t[0];return t=aT.bind(null,t[1]),un().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Se,s=un();if(we){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),Xe===null)throw Error(j(349));ss&30||L_(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,ym(F_.bind(null,r,i,t),[t]),r.flags|=2048,Oo(9,j_.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=un(),e=Xe.identifierPrefix;if(we){var n=Cn,r=An;n=(r&~(1<<32-Qt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Vo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=oT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},hT={readContext:jt,useCallback:G_,useContext:jt,useEffect:zd,useImperativeHandle:q_,useInsertionEffect:$_,useLayoutEffect:H_,useMemo:K_,useReducer:Tc,useRef:B_,useState:function(){return Tc(bo)},useDebugValue:Bd,useDeferredValue:function(t){var e=Ft();return Q_(e,ze.memoizedState,t)},useTransition:function(){var t=Tc(bo)[0],e=Ft().memoizedState;return[t,e]},useMutableSource:O_,useSyncExternalStore:M_,useId:X_,unstable_isNewReconciler:!1},dT={readContext:jt,useCallback:G_,useContext:jt,useEffect:zd,useImperativeHandle:q_,useInsertionEffect:$_,useLayoutEffect:H_,useMemo:K_,useReducer:Ic,useRef:B_,useState:function(){return Ic(bo)},useDebugValue:Bd,useDeferredValue:function(t){var e=Ft();return ze===null?e.memoizedState=t:Q_(e,ze.memoizedState,t)},useTransition:function(){var t=Ic(bo)[0],e=Ft().memoizedState;return[t,e]},useMutableSource:O_,useSyncExternalStore:M_,useId:X_,unstable_isNewReconciler:!1};function $t(t,e){if(t&&t.defaultProps){e=Ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Eh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var mu={isMounted:function(t){return(t=t._reactInternals)?fs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=dt(),s=_r(t),i=xn(r,s);i.payload=e,n!=null&&(i.callback=n),e=gr(t,i,s),e!==null&&(Xt(e,t,s,r),el(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=dt(),s=_r(t),i=xn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=gr(t,i,s),e!==null&&(Xt(e,t,s,r),el(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dt(),r=_r(t),s=xn(n,r);s.tag=2,e!=null&&(s.callback=e),e=gr(t,s,r),e!==null&&(Xt(e,t,r,n),el(e,t,r))}};function _m(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Ro(n,r)||!Ro(s,i):!0}function ev(t,e,n){var r=!1,s=Cr,i=e.contextType;return typeof i=="object"&&i!==null?i=jt(i):(s=wt(e)?ns:ut.current,r=e.contextTypes,i=(r=r!=null)?Zs(t,s):Cr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=mu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function vm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&mu.enqueueReplaceState(e,e.state,null)}function Th(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},bd(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=jt(i):(i=wt(e)?ns:ut.current,s.context=Zs(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Eh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&mu.enqueueReplaceState(s,s.state,null),Dl(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function ri(t,e){try{var n="",r=e;do n+=UE(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Sc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ih(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var fT=typeof WeakMap=="function"?WeakMap:Map;function tv(t,e,n){n=xn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ll||(Ll=!0,Vh=r),Ih(t,e)},n}function nv(t,e,n){n=xn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Ih(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ih(t,e),typeof r!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function wm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new fT;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=RT.bind(null,t,e,n),e.then(t,t))}function Em(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Tm(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=xn(-1,1),e.tag=2,gr(n,e,1))),n.lanes|=1),t)}var pT=Fn.ReactCurrentOwner,_t=!1;function ht(t,e,n,r){e.child=t===null?N_(e,null,n,r):ti(e,t.child,n,r)}function Im(t,e,n,r,s){n=n.render;var i=e.ref;return qs(e,s),r=Fd(t,e,n,r,i,s),n=Ud(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,bn(t,e,s)):(we&&n&&Rd(e),e.flags|=1,ht(t,e,r,s),e.child)}function Sm(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Xd(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,rv(t,e,i,r,s)):(t=ol(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ro,n(o,r)&&t.ref===e.ref)return bn(t,e,s)}return e.flags|=1,t=vr(i,r),t.ref=e.ref,t.return=e,e.child=t}function rv(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Ro(i,r)&&t.ref===e.ref)if(_t=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(_t=!0);else return e.lanes=t.lanes,bn(t,e,s)}return Sh(t,e,n,r,s)}function sv(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(zs,Ct),Ct|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,me(zs,Ct),Ct|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,me(zs,Ct),Ct|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,me(zs,Ct),Ct|=r;return ht(t,e,s,n),e.child}function iv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Sh(t,e,n,r,s){var i=wt(n)?ns:ut.current;return i=Zs(e,i),qs(e,s),n=Fd(t,e,n,r,i,s),r=Ud(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,bn(t,e,s)):(we&&r&&Rd(e),e.flags|=1,ht(t,e,n,s),e.child)}function Am(t,e,n,r,s){if(wt(n)){var i=!0;Rl(e)}else i=!1;if(qs(e,s),e.stateNode===null)rl(t,e),ev(e,n,r),Th(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=jt(h):(h=wt(n)?ns:ut.current,h=Zs(e,h));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&vm(e,o,r,h),rr=!1;var y=e.memoizedState;o.state=y,Dl(e,r,o,s),u=e.memoizedState,l!==r||y!==u||vt.current||rr?(typeof f=="function"&&(Eh(e,n,f,r),u=e.memoizedState),(l=rr||_m(e,n,l,r,y,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,V_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:$t(e.type,l),o.props=h,p=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=jt(u):(u=wt(n)?ns:ut.current,u=Zs(e,u));var R=n.getDerivedStateFromProps;(f=typeof R=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||y!==u)&&vm(e,o,r,u),rr=!1,y=e.memoizedState,o.state=y,Dl(e,r,o,s);var N=e.memoizedState;l!==p||y!==N||vt.current||rr?(typeof R=="function"&&(Eh(e,n,R,r),N=e.memoizedState),(h=rr||_m(e,n,h,r,y,N,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,N,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,N,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=N),o.props=r,o.state=N,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return Ah(t,e,n,r,i,s)}function Ah(t,e,n,r,s,i){iv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&cm(e,n,!1),bn(t,e,i);r=e.stateNode,pT.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ti(e,t.child,null,i),e.child=ti(e,null,l,i)):ht(t,e,l,i),e.memoizedState=r.state,s&&cm(e,n,!0),e.child}function ov(t){var e=t.stateNode;e.pendingContext?um(t,e.pendingContext,e.pendingContext!==e.context):e.context&&um(t,e.context,!1),Od(t,e.containerInfo)}function Cm(t,e,n,r,s){return ei(),xd(s),e.flags|=256,ht(t,e,n,r),e.child}var Ch={dehydrated:null,treeContext:null,retryLane:0};function Rh(t){return{baseLanes:t,cachePool:null,transitions:null}}function av(t,e,n){var r=e.pendingProps,s=Te.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),me(Te,s&1),t===null)return vh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=_u(o,r,0,null),t=Zr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Rh(n),e.memoizedState=Ch,t):$d(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return mT(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=vr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=vr(l,i):(i=Zr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Rh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Ch,r}return i=t.child,t=i.sibling,r=vr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function $d(t,e){return e=_u({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function La(t,e,n,r){return r!==null&&xd(r),ti(e,t.child,null,n),t=$d(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function mT(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Sc(Error(j(422))),La(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=_u({mode:"visible",children:r.children},s,0,null),i=Zr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&ti(e,t.child,null,o),e.child.memoizedState=Rh(o),e.memoizedState=Ch,i);if(!(e.mode&1))return La(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(j(419)),r=Sc(i,r,void 0),La(t,e,o,r)}if(l=(o&t.childLanes)!==0,_t||l){if(r=Xe,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Vn(t,s),Xt(r,t,s,-1))}return Qd(),r=Sc(Error(j(421))),La(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=kT.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Rt=mr(s.nextSibling),kt=e,we=!0,Wt=null,t!==null&&(Dt[Vt++]=An,Dt[Vt++]=Cn,Dt[Vt++]=rs,An=t.id,Cn=t.overflow,rs=e),e=$d(e,r.children),e.flags|=4096,e)}function Rm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),wh(t.return,e,n)}function Ac(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function lv(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(ht(t,e,r.children,n),r=Te.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rm(t,n,e);else if(t.tag===19)Rm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(me(Te,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Vl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Ac(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Vl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Ac(e,!0,n,null,i);break;case"together":Ac(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function rl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function bn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),is|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=vr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=vr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function gT(t,e,n){switch(e.tag){case 3:ov(e),ei();break;case 5:b_(e);break;case 1:wt(e.type)&&Rl(e);break;case 4:Od(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;me(Pl,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(me(Te,Te.current&1),e.flags|=128,null):n&e.child.childLanes?av(t,e,n):(me(Te,Te.current&1),t=bn(t,e,n),t!==null?t.sibling:null);me(Te,Te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return lv(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),me(Te,Te.current),r)break;return null;case 22:case 23:return e.lanes=0,sv(t,e,n)}return bn(t,e,n)}var uv,kh,cv,hv;uv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};kh=function(){};cv=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Qr(fn.current);var i=null;switch(n){case"input":s=Xc(t,s),r=Xc(t,r),i=[];break;case"select":s=Ae({},s,{value:void 0}),r=Ae({},r,{value:void 0}),i=[];break;case"textarea":s=Zc(t,s),r=Zc(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Al)}th(n,r);var o;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var l=s[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(wo.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var u=r[h];if(l=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(wo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&ye("scroll",t),i||l===u||(i=[])):(i=i||[]).push(h,u))}n&&(i=i||[]).push("style",n);var h=i;(e.updateQueue=h)&&(e.flags|=4)}};hv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Gi(t,e){if(!we)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function st(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function yT(t,e,n){var r=e.pendingProps;switch(kd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(e),null;case 1:return wt(e.type)&&Cl(),st(e),null;case 3:return r=e.stateNode,ni(),ve(vt),ve(ut),Ld(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Oa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wt!==null&&(Mh(Wt),Wt=null))),kh(t,e),st(e),null;case 5:Md(e);var s=Qr(Do.current);if(n=e.type,t!==null&&e.stateNode!=null)cv(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return st(e),null}if(t=Qr(fn.current),Oa(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[hn]=e,r[Po]=i,t=(e.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(s=0;s<Ji.length;s++)ye(Ji[s],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":Mp(r,i),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ye("invalid",r);break;case"textarea":jp(r,i),ye("invalid",r)}th(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&ba(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ba(r.textContent,l,t),s=["children",""+l]):wo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ye("scroll",r)}switch(n){case"input":Ca(r),Lp(r,i,!0);break;case"textarea":Ca(r),Fp(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Al)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Fy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[hn]=e,t[Po]=r,uv(t,e,!1,!1),e.stateNode=t;e:{switch(o=nh(n,r),n){case"dialog":ye("cancel",t),ye("close",t),s=r;break;case"iframe":case"object":case"embed":ye("load",t),s=r;break;case"video":case"audio":for(s=0;s<Ji.length;s++)ye(Ji[s],t);s=r;break;case"source":ye("error",t),s=r;break;case"img":case"image":case"link":ye("error",t),ye("load",t),s=r;break;case"details":ye("toggle",t),s=r;break;case"input":Mp(t,r),s=Xc(t,r),ye("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Ae({},r,{value:void 0}),ye("invalid",t);break;case"textarea":jp(t,r),s=Zc(t,r),ye("invalid",t);break;default:s=r}th(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?By(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Uy(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Eo(t,u):typeof u=="number"&&Eo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(wo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&ye("scroll",t):u!=null&&fd(t,i,u,o))}switch(n){case"input":Ca(t),Lp(t,r,!1);break;case"textarea":Ca(t),Fp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ar(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Bs(t,!!r.multiple,i,!1):r.defaultValue!=null&&Bs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Al)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return st(e),null;case 6:if(t&&e.stateNode!=null)hv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=Qr(Do.current),Qr(fn.current),Oa(e)){if(r=e.stateNode,n=e.memoizedProps,r[hn]=e,(i=r.nodeValue!==n)&&(t=kt,t!==null))switch(t.tag){case 3:ba(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ba(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[hn]=e,e.stateNode=r}return st(e),null;case 13:if(ve(Te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(we&&Rt!==null&&e.mode&1&&!(e.flags&128))x_(),ei(),e.flags|=98560,i=!1;else if(i=Oa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(j(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[hn]=e}else ei(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;st(e),i=!1}else Wt!==null&&(Mh(Wt),Wt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Te.current&1?$e===0&&($e=3):Qd())),e.updateQueue!==null&&(e.flags|=4),st(e),null);case 4:return ni(),kh(t,e),t===null&&ko(e.stateNode.containerInfo),st(e),null;case 10:return Dd(e.type._context),st(e),null;case 17:return wt(e.type)&&Cl(),st(e),null;case 19:if(ve(Te),i=e.memoizedState,i===null)return st(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Gi(i,!1);else{if($e!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Vl(t),o!==null){for(e.flags|=128,Gi(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return me(Te,Te.current&1|2),e.child}t=t.sibling}i.tail!==null&&De()>si&&(e.flags|=128,r=!0,Gi(i,!1),e.lanes=4194304)}else{if(!r)if(t=Vl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Gi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!we)return st(e),null}else 2*De()-i.renderingStartTime>si&&n!==1073741824&&(e.flags|=128,r=!0,Gi(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=De(),e.sibling=null,n=Te.current,me(Te,r?n&1|2:n&1),e):(st(e),null);case 22:case 23:return Kd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ct&1073741824&&(st(e),e.subtreeFlags&6&&(e.flags|=8192)):st(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function _T(t,e){switch(kd(e),e.tag){case 1:return wt(e.type)&&Cl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ni(),ve(vt),ve(ut),Ld(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Md(e),null;case 13:if(ve(Te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));ei()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ve(Te),null;case 4:return ni(),null;case 10:return Dd(e.type._context),null;case 22:case 23:return Kd(),null;case 24:return null;default:return null}}var ja=!1,at=!1,vT=typeof WeakSet=="function"?WeakSet:Set,W=null;function Us(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(t,e,r)}else n.current=null}function xh(t,e,n){try{n()}catch(r){ke(t,e,r)}}var km=!1;function wT(t,e){if(dh=Tl,t=g_(),Cd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,p=t,y=null;t:for(;;){for(var R;p!==n||s!==0&&p.nodeType!==3||(l=o+s),p!==i||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(R=p.firstChild)!==null;)y=p,p=R;for(;;){if(p===t)break t;if(y===n&&++h===s&&(l=o),y===i&&++f===r&&(u=o),(R=p.nextSibling)!==null)break;p=y,y=p.parentNode}p=R}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(fh={focusedElem:t,selectionRange:n},Tl=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var N=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var V=N.memoizedProps,M=N.memoizedState,S=e.stateNode,E=S.getSnapshotBeforeUpdate(e.elementType===e.type?V:$t(e.type,V),M);S.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(b){ke(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return N=km,km=!1,N}function uo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&xh(e,n,i)}s=s.next}while(s!==r)}}function gu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ph(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function dv(t){var e=t.alternate;e!==null&&(t.alternate=null,dv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[hn],delete e[Po],delete e[gh],delete e[nT],delete e[rT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function fv(t){return t.tag===5||t.tag===3||t.tag===4}function xm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||fv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Al));else if(r!==4&&(t=t.child,t!==null))for(Nh(t,e,n),t=t.sibling;t!==null;)Nh(t,e,n),t=t.sibling}function Dh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Dh(t,e,n),t=t.sibling;t!==null;)Dh(t,e,n),t=t.sibling}var Ye=null,Ht=!1;function er(t,e,n){for(n=n.child;n!==null;)pv(t,e,n),n=n.sibling}function pv(t,e,n){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount(lu,n)}catch{}switch(n.tag){case 5:at||Us(n,e);case 6:var r=Ye,s=Ht;Ye=null,er(t,e,n),Ye=r,Ht=s,Ye!==null&&(Ht?(t=Ye,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ye.removeChild(n.stateNode));break;case 18:Ye!==null&&(Ht?(t=Ye,n=n.stateNode,t.nodeType===8?_c(t.parentNode,n):t.nodeType===1&&_c(t,n),Ao(t)):_c(Ye,n.stateNode));break;case 4:r=Ye,s=Ht,Ye=n.stateNode.containerInfo,Ht=!0,er(t,e,n),Ye=r,Ht=s;break;case 0:case 11:case 14:case 15:if(!at&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&xh(n,e,o),s=s.next}while(s!==r)}er(t,e,n);break;case 1:if(!at&&(Us(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ke(n,e,l)}er(t,e,n);break;case 21:er(t,e,n);break;case 22:n.mode&1?(at=(r=at)||n.memoizedState!==null,er(t,e,n),at=r):er(t,e,n);break;default:er(t,e,n)}}function Pm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new vT),e.forEach(function(r){var s=xT.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Bt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ye=l.stateNode,Ht=!1;break e;case 3:Ye=l.stateNode.containerInfo,Ht=!0;break e;case 4:Ye=l.stateNode.containerInfo,Ht=!0;break e}l=l.return}if(Ye===null)throw Error(j(160));pv(i,o,s),Ye=null,Ht=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(h){ke(s,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)mv(e,t),e=e.sibling}function mv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bt(e,t),ln(t),r&4){try{uo(3,t,t.return),gu(3,t)}catch(V){ke(t,t.return,V)}try{uo(5,t,t.return)}catch(V){ke(t,t.return,V)}}break;case 1:Bt(e,t),ln(t),r&512&&n!==null&&Us(n,n.return);break;case 5:if(Bt(e,t),ln(t),r&512&&n!==null&&Us(n,n.return),t.flags&32){var s=t.stateNode;try{Eo(s,"")}catch(V){ke(t,t.return,V)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Ly(s,i),nh(l,o);var h=nh(l,i);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?By(s,p):f==="dangerouslySetInnerHTML"?Uy(s,p):f==="children"?Eo(s,p):fd(s,f,p,h)}switch(l){case"input":Yc(s,i);break;case"textarea":jy(s,i);break;case"select":var y=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var R=i.value;R!=null?Bs(s,!!i.multiple,R,!1):y!==!!i.multiple&&(i.defaultValue!=null?Bs(s,!!i.multiple,i.defaultValue,!0):Bs(s,!!i.multiple,i.multiple?[]:"",!1))}s[Po]=i}catch(V){ke(t,t.return,V)}}break;case 6:if(Bt(e,t),ln(t),r&4){if(t.stateNode===null)throw Error(j(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(V){ke(t,t.return,V)}}break;case 3:if(Bt(e,t),ln(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ao(e.containerInfo)}catch(V){ke(t,t.return,V)}break;case 4:Bt(e,t),ln(t);break;case 13:Bt(e,t),ln(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(qd=De())),r&4&&Pm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(at=(h=at)||f,Bt(e,t),at=h):Bt(e,t),ln(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(W=t,f=t.child;f!==null;){for(p=W=f;W!==null;){switch(y=W,R=y.child,y.tag){case 0:case 11:case 14:case 15:uo(4,y,y.return);break;case 1:Us(y,y.return);var N=y.stateNode;if(typeof N.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,N.props=e.memoizedProps,N.state=e.memoizedState,N.componentWillUnmount()}catch(V){ke(r,n,V)}}break;case 5:Us(y,y.return);break;case 22:if(y.memoizedState!==null){Dm(p);continue}}R!==null?(R.return=y,W=R):Dm(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{s=p.stateNode,h?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=zy("display",o))}catch(V){ke(t,t.return,V)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(V){ke(t,t.return,V)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Bt(e,t),ln(t),r&4&&Pm(t);break;case 21:break;default:Bt(e,t),ln(t)}}function ln(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(fv(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Eo(s,""),r.flags&=-33);var i=xm(t);Dh(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=xm(t);Nh(t,l,o);break;default:throw Error(j(161))}}catch(u){ke(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ET(t,e,n){W=t,gv(t)}function gv(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var s=W,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||ja;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||at;l=ja;var h=at;if(ja=o,(at=u)&&!h)for(W=s;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?Vm(s):u!==null?(u.return=o,W=u):Vm(s);for(;i!==null;)W=i,gv(i),i=i.sibling;W=s,ja=l,at=h}Nm(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,W=i):Nm(t)}}function Nm(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:at||gu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!at)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:$t(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&mm(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}mm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Ao(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}at||e.flags&512&&Ph(e)}catch(y){ke(e,e.return,y)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function Dm(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function Vm(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{gu(4,e)}catch(u){ke(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){ke(e,s,u)}}var i=e.return;try{Ph(e)}catch(u){ke(e,i,u)}break;case 5:var o=e.return;try{Ph(e)}catch(u){ke(e,o,u)}}}catch(u){ke(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var TT=Math.ceil,Ml=Fn.ReactCurrentDispatcher,Hd=Fn.ReactCurrentOwner,Lt=Fn.ReactCurrentBatchConfig,ue=0,Xe=null,Me=null,et=0,Ct=0,zs=br(0),$e=0,Mo=null,is=0,yu=0,Wd=0,co=null,yt=null,qd=0,si=1/0,Tn=null,Ll=!1,Vh=null,yr=null,Fa=!1,cr=null,jl=0,ho=0,bh=null,sl=-1,il=0;function dt(){return ue&6?De():sl!==-1?sl:sl=De()}function _r(t){return t.mode&1?ue&2&&et!==0?et&-et:iT.transition!==null?(il===0&&(il=e_()),il):(t=de,t!==0||(t=window.event,t=t===void 0?16:a_(t.type)),t):1}function Xt(t,e,n,r){if(50<ho)throw ho=0,bh=null,Error(j(185));Ko(t,n,r),(!(ue&2)||t!==Xe)&&(t===Xe&&(!(ue&2)&&(yu|=n),$e===4&&ir(t,et)),Et(t,r),n===1&&ue===0&&!(e.mode&1)&&(si=De()+500,fu&&Or()))}function Et(t,e){var n=t.callbackNode;i1(t,e);var r=El(t,t===Xe?et:0);if(r===0)n!==null&&Bp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Bp(n),e===1)t.tag===0?sT(bm.bind(null,t)):C_(bm.bind(null,t)),eT(function(){!(ue&6)&&Or()}),n=null;else{switch(t_(r)){case 1:n=_d;break;case 4:n=Jy;break;case 16:n=wl;break;case 536870912:n=Zy;break;default:n=wl}n=Sv(n,yv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function yv(t,e){if(sl=-1,il=0,ue&6)throw Error(j(327));var n=t.callbackNode;if(Gs()&&t.callbackNode!==n)return null;var r=El(t,t===Xe?et:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Fl(t,r);else{e=r;var s=ue;ue|=2;var i=vv();(Xe!==t||et!==e)&&(Tn=null,si=De()+500,Jr(t,e));do try{AT();break}catch(l){_v(t,l)}while(!0);Nd(),Ml.current=i,ue=s,Me!==null?e=0:(Xe=null,et=0,e=$e)}if(e!==0){if(e===2&&(s=ah(t),s!==0&&(r=s,e=Oh(t,s))),e===1)throw n=Mo,Jr(t,0),ir(t,r),Et(t,De()),n;if(e===6)ir(t,r);else{if(s=t.current.alternate,!(r&30)&&!IT(s)&&(e=Fl(t,r),e===2&&(i=ah(t),i!==0&&(r=i,e=Oh(t,i))),e===1))throw n=Mo,Jr(t,0),ir(t,r),Et(t,De()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:Wr(t,yt,Tn);break;case 3:if(ir(t,r),(r&130023424)===r&&(e=qd+500-De(),10<e)){if(El(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){dt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=mh(Wr.bind(null,t,yt,Tn),e);break}Wr(t,yt,Tn);break;case 4:if(ir(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Qt(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*TT(r/1960))-r,10<r){t.timeoutHandle=mh(Wr.bind(null,t,yt,Tn),r);break}Wr(t,yt,Tn);break;case 5:Wr(t,yt,Tn);break;default:throw Error(j(329))}}}return Et(t,De()),t.callbackNode===n?yv.bind(null,t):null}function Oh(t,e){var n=co;return t.current.memoizedState.isDehydrated&&(Jr(t,e).flags|=256),t=Fl(t,e),t!==2&&(e=yt,yt=n,e!==null&&Mh(e)),t}function Mh(t){yt===null?yt=t:yt.push.apply(yt,t)}function IT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Jt(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ir(t,e){for(e&=~Wd,e&=~yu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qt(e),r=1<<n;t[n]=-1,e&=~r}}function bm(t){if(ue&6)throw Error(j(327));Gs();var e=El(t,0);if(!(e&1))return Et(t,De()),null;var n=Fl(t,e);if(t.tag!==0&&n===2){var r=ah(t);r!==0&&(e=r,n=Oh(t,r))}if(n===1)throw n=Mo,Jr(t,0),ir(t,e),Et(t,De()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wr(t,yt,Tn),Et(t,De()),null}function Gd(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(si=De()+500,fu&&Or())}}function os(t){cr!==null&&cr.tag===0&&!(ue&6)&&Gs();var e=ue;ue|=1;var n=Lt.transition,r=de;try{if(Lt.transition=null,de=1,t)return t()}finally{de=r,Lt.transition=n,ue=e,!(ue&6)&&Or()}}function Kd(){Ct=zs.current,ve(zs)}function Jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Z1(n)),Me!==null)for(n=Me.return;n!==null;){var r=n;switch(kd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Cl();break;case 3:ni(),ve(vt),ve(ut),Ld();break;case 5:Md(r);break;case 4:ni();break;case 13:ve(Te);break;case 19:ve(Te);break;case 10:Dd(r.type._context);break;case 22:case 23:Kd()}n=n.return}if(Xe=t,Me=t=vr(t.current,null),et=Ct=e,$e=0,Mo=null,Wd=yu=is=0,yt=co=null,Kr!==null){for(e=0;e<Kr.length;e++)if(n=Kr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Kr=null}return t}function _v(t,e){do{var n=Me;try{if(Nd(),tl.current=Ol,bl){for(var r=Se.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}bl=!1}if(ss=0,Ke=ze=Se=null,lo=!1,Vo=0,Hd.current=null,n===null||n.return===null){$e=1,Mo=e,Me=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=et,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var R=Em(o);if(R!==null){R.flags&=-257,Tm(R,o,l,i,e),R.mode&1&&wm(i,h,e),e=R,u=h;var N=e.updateQueue;if(N===null){var V=new Set;V.add(u),e.updateQueue=V}else N.add(u);break e}else{if(!(e&1)){wm(i,h,e),Qd();break e}u=Error(j(426))}}else if(we&&l.mode&1){var M=Em(o);if(M!==null){!(M.flags&65536)&&(M.flags|=256),Tm(M,o,l,i,e),xd(ri(u,l));break e}}i=u=ri(u,l),$e!==4&&($e=2),co===null?co=[i]:co.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var S=tv(i,u,e);pm(i,S);break e;case 1:l=u;var E=i.type,C=i.stateNode;if(!(i.flags&128)&&(typeof E.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(yr===null||!yr.has(C)))){i.flags|=65536,e&=-e,i.lanes|=e;var b=nv(i,l,e);pm(i,b);break e}}i=i.return}while(i!==null)}Ev(n)}catch(F){e=F,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(!0)}function vv(){var t=Ml.current;return Ml.current=Ol,t===null?Ol:t}function Qd(){($e===0||$e===3||$e===2)&&($e=4),Xe===null||!(is&268435455)&&!(yu&268435455)||ir(Xe,et)}function Fl(t,e){var n=ue;ue|=2;var r=vv();(Xe!==t||et!==e)&&(Tn=null,Jr(t,e));do try{ST();break}catch(s){_v(t,s)}while(!0);if(Nd(),ue=n,Ml.current=r,Me!==null)throw Error(j(261));return Xe=null,et=0,$e}function ST(){for(;Me!==null;)wv(Me)}function AT(){for(;Me!==null&&!XE();)wv(Me)}function wv(t){var e=Iv(t.alternate,t,Ct);t.memoizedProps=t.pendingProps,e===null?Ev(t):Me=e,Hd.current=null}function Ev(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=_T(n,e),n!==null){n.flags&=32767,Me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$e=6,Me=null;return}}else if(n=yT(n,e,Ct),n!==null){Me=n;return}if(e=e.sibling,e!==null){Me=e;return}Me=e=t}while(e!==null);$e===0&&($e=5)}function Wr(t,e,n){var r=de,s=Lt.transition;try{Lt.transition=null,de=1,CT(t,e,n,r)}finally{Lt.transition=s,de=r}return null}function CT(t,e,n,r){do Gs();while(cr!==null);if(ue&6)throw Error(j(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(o1(t,i),t===Xe&&(Me=Xe=null,et=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fa||(Fa=!0,Sv(wl,function(){return Gs(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Lt.transition,Lt.transition=null;var o=de;de=1;var l=ue;ue|=4,Hd.current=null,wT(t,n),mv(n,t),q1(fh),Tl=!!dh,fh=dh=null,t.current=n,ET(n),YE(),ue=l,de=o,Lt.transition=i}else t.current=n;if(Fa&&(Fa=!1,cr=t,jl=s),i=t.pendingLanes,i===0&&(yr=null),e1(n.stateNode),Et(t,De()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Ll)throw Ll=!1,t=Vh,Vh=null,t;return jl&1&&t.tag!==0&&Gs(),i=t.pendingLanes,i&1?t===bh?ho++:(ho=0,bh=t):ho=0,Or(),null}function Gs(){if(cr!==null){var t=t_(jl),e=Lt.transition,n=de;try{if(Lt.transition=null,de=16>t?16:t,cr===null)var r=!1;else{if(t=cr,cr=null,jl=0,ue&6)throw Error(j(331));var s=ue;for(ue|=4,W=t.current;W!==null;){var i=W,o=i.child;if(W.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(W=h;W!==null;){var f=W;switch(f.tag){case 0:case 11:case 15:uo(8,f,i)}var p=f.child;if(p!==null)p.return=f,W=p;else for(;W!==null;){f=W;var y=f.sibling,R=f.return;if(dv(f),f===h){W=null;break}if(y!==null){y.return=R,W=y;break}W=R}}}var N=i.alternate;if(N!==null){var V=N.child;if(V!==null){N.child=null;do{var M=V.sibling;V.sibling=null,V=M}while(V!==null)}}W=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,W=o;else e:for(;W!==null;){if(i=W,i.flags&2048)switch(i.tag){case 0:case 11:case 15:uo(9,i,i.return)}var S=i.sibling;if(S!==null){S.return=i.return,W=S;break e}W=i.return}}var E=t.current;for(W=E;W!==null;){o=W;var C=o.child;if(o.subtreeFlags&2064&&C!==null)C.return=o,W=C;else e:for(o=E;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:gu(9,l)}}catch(F){ke(l,l.return,F)}if(l===o){W=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,W=b;break e}W=l.return}}if(ue=s,Or(),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot(lu,t)}catch{}r=!0}return r}finally{de=n,Lt.transition=e}}return!1}function Om(t,e,n){e=ri(n,e),e=tv(t,e,1),t=gr(t,e,1),e=dt(),t!==null&&(Ko(t,1,e),Et(t,e))}function ke(t,e,n){if(t.tag===3)Om(t,t,n);else for(;e!==null;){if(e.tag===3){Om(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yr===null||!yr.has(r))){t=ri(n,t),t=nv(e,t,1),e=gr(e,t,1),t=dt(),e!==null&&(Ko(e,1,t),Et(e,t));break}}e=e.return}}function RT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=dt(),t.pingedLanes|=t.suspendedLanes&n,Xe===t&&(et&n)===n&&($e===4||$e===3&&(et&130023424)===et&&500>De()-qd?Jr(t,0):Wd|=n),Et(t,e)}function Tv(t,e){e===0&&(t.mode&1?(e=xa,xa<<=1,!(xa&130023424)&&(xa=4194304)):e=1);var n=dt();t=Vn(t,e),t!==null&&(Ko(t,e,n),Et(t,n))}function kT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Tv(t,n)}function xT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),Tv(t,n)}var Iv;Iv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vt.current)_t=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return _t=!1,gT(t,e,n);_t=!!(t.flags&131072)}else _t=!1,we&&e.flags&1048576&&R_(e,xl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;rl(t,e),t=e.pendingProps;var s=Zs(e,ut.current);qs(e,n),s=Fd(null,e,r,t,s,n);var i=Ud();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wt(r)?(i=!0,Rl(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,bd(e),s.updater=mu,e.stateNode=s,s._reactInternals=e,Th(e,r,t,n),e=Ah(null,e,r,!0,i,n)):(e.tag=0,we&&i&&Rd(e),ht(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(rl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=NT(r),t=$t(r,t),s){case 0:e=Sh(null,e,r,t,n);break e;case 1:e=Am(null,e,r,t,n);break e;case 11:e=Im(null,e,r,t,n);break e;case 14:e=Sm(null,e,r,$t(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:$t(r,s),Sh(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:$t(r,s),Am(t,e,r,s,n);case 3:e:{if(ov(e),t===null)throw Error(j(387));r=e.pendingProps,i=e.memoizedState,s=i.element,V_(t,e),Dl(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=ri(Error(j(423)),e),e=Cm(t,e,r,n,s);break e}else if(r!==s){s=ri(Error(j(424)),e),e=Cm(t,e,r,n,s);break e}else for(Rt=mr(e.stateNode.containerInfo.firstChild),kt=e,we=!0,Wt=null,n=N_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ei(),r===s){e=bn(t,e,n);break e}ht(t,e,r,n)}e=e.child}return e;case 5:return b_(e),t===null&&vh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,ph(r,s)?o=null:i!==null&&ph(r,i)&&(e.flags|=32),iv(t,e),ht(t,e,o,n),e.child;case 6:return t===null&&vh(e),null;case 13:return av(t,e,n);case 4:return Od(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ti(e,null,r,n):ht(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:$t(r,s),Im(t,e,r,s,n);case 7:return ht(t,e,e.pendingProps,n),e.child;case 8:return ht(t,e,e.pendingProps.children,n),e.child;case 12:return ht(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,me(Pl,r._currentValue),r._currentValue=o,i!==null)if(Jt(i.value,o)){if(i.children===s.children&&!vt.current){e=bn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=xn(-1,n&-n),u.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),wh(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),wh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ht(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,qs(e,n),s=jt(s),r=r(s),e.flags|=1,ht(t,e,r,n),e.child;case 14:return r=e.type,s=$t(r,e.pendingProps),s=$t(r.type,s),Sm(t,e,r,s,n);case 15:return rv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:$t(r,s),rl(t,e),e.tag=1,wt(r)?(t=!0,Rl(e)):t=!1,qs(e,n),ev(e,r,s),Th(e,r,s,n),Ah(null,e,r,!0,t,n);case 19:return lv(t,e,n);case 22:return sv(t,e,n)}throw Error(j(156,e.tag))};function Sv(t,e){return Yy(t,e)}function PT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(t,e,n,r){return new PT(t,e,n,r)}function Xd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function NT(t){if(typeof t=="function")return Xd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===md)return 11;if(t===gd)return 14}return 2}function vr(t,e){var n=t.alternate;return n===null?(n=Mt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ol(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Xd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ns:return Zr(n.children,s,i,e);case pd:o=8,s|=8;break;case qc:return t=Mt(12,n,e,s|2),t.elementType=qc,t.lanes=i,t;case Gc:return t=Mt(13,n,e,s),t.elementType=Gc,t.lanes=i,t;case Kc:return t=Mt(19,n,e,s),t.elementType=Kc,t.lanes=i,t;case by:return _u(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Dy:o=10;break e;case Vy:o=9;break e;case md:o=11;break e;case gd:o=14;break e;case nr:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=Mt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Zr(t,e,n,r){return t=Mt(7,t,r,e),t.lanes=n,t}function _u(t,e,n,r){return t=Mt(22,t,r,e),t.elementType=by,t.lanes=n,t.stateNode={isHidden:!1},t}function Cc(t,e,n){return t=Mt(6,t,null,e),t.lanes=n,t}function Rc(t,e,n){return e=Mt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function DT(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ac(0),this.expirationTimes=ac(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ac(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Yd(t,e,n,r,s,i,o,l,u){return t=new DT(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Mt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bd(i),t}function VT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ps,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Av(t){if(!t)return Cr;t=t._reactInternals;e:{if(fs(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(wt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(wt(n))return A_(t,n,e)}return e}function Cv(t,e,n,r,s,i,o,l,u){return t=Yd(n,r,!0,t,s,i,o,l,u),t.context=Av(null),n=t.current,r=dt(),s=_r(n),i=xn(r,s),i.callback=e??null,gr(n,i,s),t.current.lanes=s,Ko(t,s,r),Et(t,r),t}function vu(t,e,n,r){var s=e.current,i=dt(),o=_r(s);return n=Av(n),e.context===null?e.context=n:e.pendingContext=n,e=xn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=gr(s,e,o),t!==null&&(Xt(t,s,o,i),el(t,s,o)),o}function Ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Mm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Jd(t,e){Mm(t,e),(t=t.alternate)&&Mm(t,e)}function bT(){return null}var Rv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Zd(t){this._internalRoot=t}wu.prototype.render=Zd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));vu(t,e,null,null)};wu.prototype.unmount=Zd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;os(function(){vu(null,t,null,null)}),e[Dn]=null}};function wu(t){this._internalRoot=t}wu.prototype.unstable_scheduleHydration=function(t){if(t){var e=s_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<sr.length&&e!==0&&e<sr[n].priority;n++);sr.splice(n,0,t),n===0&&o_(t)}};function ef(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Eu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Lm(){}function OT(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var h=Ul(o);i.call(h)}}var o=Cv(e,r,t,0,null,!1,!1,"",Lm);return t._reactRootContainer=o,t[Dn]=o.current,ko(t.nodeType===8?t.parentNode:t),os(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var h=Ul(u);l.call(h)}}var u=Yd(t,0,!1,null,null,!1,!1,"",Lm);return t._reactRootContainer=u,t[Dn]=u.current,ko(t.nodeType===8?t.parentNode:t),os(function(){vu(e,u,n,r)}),u}function Tu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=Ul(o);l.call(u)}}vu(e,o,t,s)}else o=OT(n,e,t,s,r);return Ul(o)}n_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Yi(e.pendingLanes);n!==0&&(vd(e,n|1),Et(e,De()),!(ue&6)&&(si=De()+500,Or()))}break;case 13:os(function(){var r=Vn(t,1);if(r!==null){var s=dt();Xt(r,t,1,s)}}),Jd(t,1)}};wd=function(t){if(t.tag===13){var e=Vn(t,134217728);if(e!==null){var n=dt();Xt(e,t,134217728,n)}Jd(t,134217728)}};r_=function(t){if(t.tag===13){var e=_r(t),n=Vn(t,e);if(n!==null){var r=dt();Xt(n,t,e,r)}Jd(t,e)}};s_=function(){return de};i_=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};sh=function(t,e,n){switch(e){case"input":if(Yc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=du(r);if(!s)throw Error(j(90));My(r),Yc(r,s)}}}break;case"textarea":jy(t,n);break;case"select":e=n.value,e!=null&&Bs(t,!!n.multiple,e,!1)}};Wy=Gd;qy=os;var MT={usingClientEntryPoint:!1,Events:[Xo,Os,du,$y,Hy,Gd]},Ki={findFiberByHostInstance:Gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},LT={bundleType:Ki.bundleType,version:Ki.version,rendererPackageName:Ki.rendererPackageName,rendererConfig:Ki.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Qy(t),t===null?null:t.stateNode},findFiberByHostInstance:Ki.findFiberByHostInstance||bT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ua=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ua.isDisabled&&Ua.supportsFiber)try{lu=Ua.inject(LT),dn=Ua}catch{}}Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MT;Pt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ef(e))throw Error(j(200));return VT(t,e,null,n)};Pt.createRoot=function(t,e){if(!ef(t))throw Error(j(299));var n=!1,r="",s=Rv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Yd(t,1,!1,null,null,n,!1,r,s),t[Dn]=e.current,ko(t.nodeType===8?t.parentNode:t),new Zd(e)};Pt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=Qy(e),t=t===null?null:t.stateNode,t};Pt.flushSync=function(t){return os(t)};Pt.hydrate=function(t,e,n){if(!Eu(e))throw Error(j(200));return Tu(null,t,e,!0,n)};Pt.hydrateRoot=function(t,e,n){if(!ef(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=Rv;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Cv(e,null,t,1,n??null,s,!1,i,o),t[Dn]=e.current,ko(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new wu(e)};Pt.render=function(t,e,n){if(!Eu(e))throw Error(j(200));return Tu(null,t,e,!1,n)};Pt.unmountComponentAtNode=function(t){if(!Eu(t))throw Error(j(40));return t._reactRootContainer?(os(function(){Tu(null,null,t,!1,function(){t._reactRootContainer=null,t[Dn]=null})}),!0):!1};Pt.unstable_batchedUpdates=Gd;Pt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Eu(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return Tu(t,e,n,!1,r)};Pt.version="18.3.1-next-f1338f8080-20240426";function kv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kv)}catch(t){console.error(t)}}kv(),ky.exports=Pt;var jT=ky.exports,xv,jm=jT;xv=jm.createRoot,jm.hydrateRoot;/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Pv=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var UT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zT=re.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...l},u)=>re.createElement("svg",{ref:u,...UT,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Pv("lucide",s),...l},[...o.map(([h,f])=>re.createElement(h,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=(t,e)=>{const n=re.forwardRef(({className:r,...s},i)=>re.createElement(zT,{ref:i,iconNode:e,className:Pv(`lucide-${FT(t)}`,r),...s}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BT=xe("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=xe("Bell",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=xe("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=xe("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=xe("ChartPie",[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WT=xe("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=xe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GT=xe("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=xe("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QT=xe("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XT=xe("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=xe("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=xe("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=xe("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=xe("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JT=xe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=xe("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=xe("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=xe("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eI=xe("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=xe("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=xe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),tI=()=>{};var qm={};/**
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
 */const Nv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},nI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Dv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let y=(l&15)<<2|h>>6,R=h&63;u||(R=64,o||(y=64)),r.push(n[f],n[p],n[y],n[R])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Nv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):nI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new rI;const y=i<<2|l>>4;if(r.push(y),h!==64){const R=l<<4&240|h>>2;if(r.push(R),p!==64){const N=h<<6&192|p;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sI=function(t){const e=Nv(t);return Dv.encodeByteArray(e,!0)},zl=function(t){return sI(t).replace(/\./g,"")},Vv=function(t){try{return Dv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function iI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const oI=()=>iI().__FIREBASE_DEFAULTS__,aI=()=>{if(typeof process>"u"||typeof qm>"u")return;const t=qm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vv(t[1]);return e&&JSON.parse(e)},Iu=()=>{try{return tI()||oI()||aI()||lI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},bv=t=>{var e,n;return(n=(e=Iu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},uI=t=>{const e=bv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ov=()=>{var t;return(t=Iu())==null?void 0:t.config},Mv=t=>{var e;return(e=Iu())==null?void 0:e[`_${t}`]};/**
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
 */class cI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function gi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Lv(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function hI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[zl(JSON.stringify(n)),zl(JSON.stringify(o)),""].join(".")}const fo={};function dI(){const t={prod:[],emulator:[]};for(const e of Object.keys(fo))fo[e]?t.emulator.push(e):t.prod.push(e);return t}function fI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Gm=!1;function jv(t,e){if(typeof window>"u"||typeof document>"u"||!gi(window.location.host)||fo[t]===e||fo[t]||Gm)return;fo[t]=e;function n(y){return`__firebase__banner__${y}`}const r="__firebase__banner",i=dI().prod.length>0;function o(){const y=document.getElementById(r);y&&y.remove()}function l(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function u(y,R){y.setAttribute("width","24"),y.setAttribute("id",R),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function h(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{Gm=!0,o()},y}function f(y,R){y.setAttribute("id",R),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function p(){const y=fI(r),R=n("text"),N=document.getElementById(R)||document.createElement("span"),V=n("learnmore"),M=document.getElementById(V)||document.createElement("a"),S=n("preprendIcon"),E=document.getElementById(S)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const C=y.element;l(C),f(M,V);const b=h();u(E,S),C.append(E,N,M,b),document.body.appendChild(C)}i?(N.innerText="Preview backend disconnected.",E.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(E.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function mI(){var e;const t=(e=Iu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function yI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function _I(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vI(){const t=ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wI(){return!mI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function EI(){try{return typeof indexedDB=="object"}catch{return!1}}function TI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const II="FirebaseError";class Un extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=II,Object.setPrototypeOf(this,Un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jo.prototype.create)}}class Jo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?SI(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Un(s,l,r)}}function SI(t,e){return t.replace(AI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const AI=/\{\$([^}]+)}/g;function CI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function as(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Km(i)&&Km(o)){if(!as(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Km(t){return t!==null&&typeof t=="object"}/**
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
 */function Zo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function RI(t,e){const n=new kI(t,e);return n.subscribe.bind(n)}class kI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");xI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=xc),s.error===void 0&&(s.error=xc),s.complete===void 0&&(s.complete=xc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xc(){}/**
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
 */function Ut(t){return t&&t._delegate?t._delegate:t}class ls{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qr="[DEFAULT]";/**
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
 */class PI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new cI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(DI(e))try{this.getOrInitializeService({instanceIdentifier:qr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=qr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qr){return this.instances.has(e)}getOptions(e=qr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:NI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qr){return this.component?this.component.multipleInstances?e:qr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function NI(t){return t===qr?void 0:t}function DI(t){return t.instantiationMode==="EAGER"}/**
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
 */class VI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new PI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const bI={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},OI=ie.INFO,MI={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},LI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=MI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class tf{constructor(e){this.name=e,this._logLevel=OI,this._logHandler=LI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const jI=(t,e)=>e.some(n=>t instanceof n);let Qm,Xm;function FI(){return Qm||(Qm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function UI(){return Xm||(Xm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fv=new WeakMap,Lh=new WeakMap,Uv=new WeakMap,Pc=new WeakMap,nf=new WeakMap;function zI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(wr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Fv.set(n,t)}).catch(()=>{}),nf.set(e,t),e}function BI(t){if(Lh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Lh.set(t,e)}let jh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Uv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $I(t){jh=t(jh)}function HI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Nc(this),e,...n);return Uv.set(r,e.sort?e.sort():[e]),wr(r)}:UI().includes(t)?function(...e){return t.apply(Nc(this),e),wr(Fv.get(this))}:function(...e){return wr(t.apply(Nc(this),e))}}function WI(t){return typeof t=="function"?HI(t):(t instanceof IDBTransaction&&BI(t),jI(t,FI())?new Proxy(t,jh):t)}function wr(t){if(t instanceof IDBRequest)return zI(t);if(Pc.has(t))return Pc.get(t);const e=WI(t);return e!==t&&(Pc.set(t,e),nf.set(e,t)),e}const Nc=t=>nf.get(t);function qI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=wr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(wr(o.result),u.oldVersion,u.newVersion,wr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const GI=["get","getKey","getAll","getAllKeys","count"],KI=["put","add","delete","clear"],Dc=new Map;function Ym(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Dc.get(e))return Dc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=KI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||GI.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return Dc.set(e,i),i}$I(t=>({...t,get:(e,n,r)=>Ym(e,n)||t.get(e,n,r),has:(e,n)=>!!Ym(e,n)||t.has(e,n)}));/**
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
 */class QI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(XI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function XI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fh="@firebase/app",Jm="0.14.6";/**
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
 */const On=new tf("@firebase/app"),YI="@firebase/app-compat",JI="@firebase/analytics-compat",ZI="@firebase/analytics",eS="@firebase/app-check-compat",tS="@firebase/app-check",nS="@firebase/auth",rS="@firebase/auth-compat",sS="@firebase/database",iS="@firebase/data-connect",oS="@firebase/database-compat",aS="@firebase/functions",lS="@firebase/functions-compat",uS="@firebase/installations",cS="@firebase/installations-compat",hS="@firebase/messaging",dS="@firebase/messaging-compat",fS="@firebase/performance",pS="@firebase/performance-compat",mS="@firebase/remote-config",gS="@firebase/remote-config-compat",yS="@firebase/storage",_S="@firebase/storage-compat",vS="@firebase/firestore",wS="@firebase/ai",ES="@firebase/firestore-compat",TS="firebase",IS="12.6.0";/**
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
 */const Uh="[DEFAULT]",SS={[Fh]:"fire-core",[YI]:"fire-core-compat",[ZI]:"fire-analytics",[JI]:"fire-analytics-compat",[tS]:"fire-app-check",[eS]:"fire-app-check-compat",[nS]:"fire-auth",[rS]:"fire-auth-compat",[sS]:"fire-rtdb",[iS]:"fire-data-connect",[oS]:"fire-rtdb-compat",[aS]:"fire-fn",[lS]:"fire-fn-compat",[uS]:"fire-iid",[cS]:"fire-iid-compat",[hS]:"fire-fcm",[dS]:"fire-fcm-compat",[fS]:"fire-perf",[pS]:"fire-perf-compat",[mS]:"fire-rc",[gS]:"fire-rc-compat",[yS]:"fire-gcs",[_S]:"fire-gcs-compat",[vS]:"fire-fst",[ES]:"fire-fst-compat",[wS]:"fire-vertex","fire-js":"fire-js",[TS]:"fire-js-all"};/**
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
 */const Bl=new Map,AS=new Map,zh=new Map;function Zm(t,e){try{t.container.addComponent(e)}catch(n){On.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ii(t){const e=t.name;if(zh.has(e))return On.debug(`There were multiple attempts to register component ${e}.`),!1;zh.set(e,t);for(const n of Bl.values())Zm(n,t);for(const n of AS.values())Zm(n,t);return!0}function rf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function qt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const CS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Er=new Jo("app","Firebase",CS);/**
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
 */class RS{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ls("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Er.create("app-deleted",{appName:this._name})}}/**
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
 */const yi=IS;function zv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Uh,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Er.create("bad-app-name",{appName:String(s)});if(n||(n=Ov()),!n)throw Er.create("no-options");const i=Bl.get(s);if(i){if(as(n,i.options)&&as(r,i.config))return i;throw Er.create("duplicate-app",{appName:s})}const o=new VI(s);for(const u of zh.values())o.addComponent(u);const l=new RS(n,r,o);return Bl.set(s,l),l}function Bv(t=Uh){const e=Bl.get(t);if(!e&&t===Uh&&Ov())return zv();if(!e)throw Er.create("no-app",{appName:t});return e}function Tr(t,e,n){let r=SS[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),On.warn(o.join(" "));return}ii(new ls(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const kS="firebase-heartbeat-database",xS=1,Lo="firebase-heartbeat-store";let Vc=null;function $v(){return Vc||(Vc=qI(kS,xS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Lo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Er.create("idb-open",{originalErrorMessage:t.message})})),Vc}async function PS(t){try{const n=(await $v()).transaction(Lo),r=await n.objectStore(Lo).get(Hv(t));return await n.done,r}catch(e){if(e instanceof Un)On.warn(e.message);else{const n=Er.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});On.warn(n.message)}}}async function eg(t,e){try{const r=(await $v()).transaction(Lo,"readwrite");await r.objectStore(Lo).put(e,Hv(t)),await r.done}catch(n){if(n instanceof Un)On.warn(n.message);else{const r=Er.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});On.warn(r.message)}}}function Hv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const NS=1024,DS=30;class VS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new OS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=tg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>DS){const o=MS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){On.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=tg(),{heartbeatsToSend:r,unsentEntries:s}=bS(this._heartbeatsCache.heartbeats),i=zl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return On.warn(n),""}}}function tg(){return new Date().toISOString().substring(0,10)}function bS(t,e=NS){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ng(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ng(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class OS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return EI()?TI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await PS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return eg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return eg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ng(t){return zl(JSON.stringify({version:2,heartbeats:t})).length}function MS(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function LS(t){ii(new ls("platform-logger",e=>new QI(e),"PRIVATE")),ii(new ls("heartbeat",e=>new VS(e),"PRIVATE")),Tr(Fh,Jm,t),Tr(Fh,Jm,"esm2020"),Tr("fire-js","")}LS("");var jS="firebase",FS="12.6.0";/**
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
 */Tr(jS,FS,"app");function Wv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const US=Wv,qv=new Jo("auth","Firebase",Wv());/**
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
 */const $l=new tf("@firebase/auth");function zS(t,...e){$l.logLevel<=ie.WARN&&$l.warn(`Auth (${yi}): ${t}`,...e)}function al(t,...e){$l.logLevel<=ie.ERROR&&$l.error(`Auth (${yi}): ${t}`,...e)}/**
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
 */function vn(t,...e){throw of(t,...e)}function Yt(t,...e){return of(t,...e)}function sf(t,e,n){const r={...US(),[e]:n};return new Jo("auth","Firebase",r).create(e,{appName:t.name})}function es(t){return sf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function BS(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&vn(t,"argument-error"),sf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function of(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return qv.create(t,...e)}function X(t,e,...n){if(!t)throw of(e,...n)}function Rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw al(e),new Error(e)}function Mn(t,e){t||Rn(e)}/**
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
 */function Bh(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function $S(){return rg()==="http:"||rg()==="https:"}function rg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function HS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($S()||yI()||"connection"in navigator)?navigator.onLine:!0}function WS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ea{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mn(n>e,"Short delay should be less than long delay!"),this.isMobile=pI()||_I()}get(){return HS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function af(t,e){Mn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Gv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const qS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const GS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],KS=new ea(3e4,6e4);function lf(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function _i(t,e,n,r,s={}){return Kv(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Zo({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...i};return gI()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&gi(t.emulatorConfig.host)&&(h.credentials="include"),Gv.fetch()(await Qv(t,t.config.apiHost,n,l),h)})}async function Kv(t,e,n){t._canInitEmulator=!1;const r={...qS,...e};try{const s=new XS(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ba(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ba(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ba(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ba(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw sf(t,f,h);vn(t,f)}}catch(s){if(s instanceof Un)throw s;vn(t,"network-request-failed",{message:String(s)})}}async function QS(t,e,n,r,s={}){const i=await _i(t,e,n,r,s);return"mfaPendingCredential"in i&&vn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Qv(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?af(t.config,s):`${t.config.apiScheme}://${s}`;return GS.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class XS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Yt(this.auth,"network-request-failed")),KS.get())})}}function Ba(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Yt(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function YS(t,e){return _i(t,"POST","/v1/accounts:delete",e)}async function Hl(t,e){return _i(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function po(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function JS(t,e=!1){const n=Ut(t),r=await n.getIdToken(e),s=uf(r);X(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:po(bc(s.auth_time)),issuedAtTime:po(bc(s.iat)),expirationTime:po(bc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function bc(t){return Number(t)*1e3}function uf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return al("JWT malformed, contained fewer than 3 sections"),null;try{const s=Vv(n);return s?JSON.parse(s):(al("Failed to decode base64 JWT payload"),null)}catch(s){return al("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function sg(t){const e=uf(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function jo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Un&&ZS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ZS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class eA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class $h{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=po(this.lastLoginAt),this.creationTime=po(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Wl(t){var p;const e=t.auth,n=await t.getIdToken(),r=await jo(t,Hl(e,{idToken:n}));X(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?Xv(s.providerUserInfo):[],o=nA(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new $h(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function tA(t){const e=Ut(t);await Wl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Xv(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function rA(t,e){const n=await Kv(t,{},async()=>{const r=Zo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Qv(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&gi(t.emulatorConfig.host)&&(u.credentials="include"),Gv.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function sA(t,e){return _i(t,"POST","/v2/accounts:revokeToken",lf(t,e))}/**
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
 */class Ks{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=sg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await rA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ks;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(X(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(X(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ks,this.toJSON())}_performRefresh(){return Rn("not implemented")}}/**
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
 */function tr(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Gt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new eA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new $h(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await jo(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return JS(this,e)}reload(){return tA(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Gt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Wl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qt(this.auth.app))return Promise.reject(es(this.auth));const e=await this.getIdToken();return await jo(this,YS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:y,isAnonymous:R,providerData:N,stsTokenManager:V}=n;X(p&&V,e,"internal-error");const M=Ks.fromJSON(this.name,V);X(typeof p=="string",e,"internal-error"),tr(r,e.name),tr(s,e.name),X(typeof y=="boolean",e,"internal-error"),X(typeof R=="boolean",e,"internal-error"),tr(i,e.name),tr(o,e.name),tr(l,e.name),tr(u,e.name),tr(h,e.name),tr(f,e.name);const S=new Gt({uid:p,auth:e,email:s,emailVerified:y,displayName:r,isAnonymous:R,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:M,createdAt:h,lastLoginAt:f});return N&&Array.isArray(N)&&(S.providerData=N.map(E=>({...E}))),u&&(S._redirectEventId=u),S}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ks;s.updateFromServerResponse(n);const i=new Gt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Wl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];X(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Xv(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Ks;l.updateFromIdToken(r);const u=new Gt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new $h(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
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
 */const ig=new Map;function kn(t){Mn(t instanceof Function,"Expected a class definition");let e=ig.get(t);return e?(Mn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ig.set(t,e),e)}/**
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
 */class Yv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Yv.type="NONE";const og=Yv;/**
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
 */function ll(t,e,n){return`firebase:${t}:${e}:${n}`}class Qs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ll(this.userKey,s.apiKey,i),this.fullPersistenceKey=ll("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Hl(this.auth,{idToken:e}).catch(()=>{});return n?Gt._fromGetAccountInfoResponse(this.auth,n,e):null}return Gt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Qs(kn(og),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||kn(og);const o=ll(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const y=await Hl(e,{idToken:f}).catch(()=>{});if(!y)break;p=await Gt._fromGetAccountInfoResponse(e,y,f)}else p=Gt._fromJSON(e,f);h!==i&&(l=p),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Qs(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Qs(i,e,r))}}/**
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
 */function ag(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(t0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(r0(e))return"Blackberry";if(s0(e))return"Webos";if(Zv(e))return"Safari";if((e.includes("chrome/")||e0(e))&&!e.includes("edge/"))return"Chrome";if(n0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Jv(t=ct()){return/firefox\//i.test(t)}function Zv(t=ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function e0(t=ct()){return/crios\//i.test(t)}function t0(t=ct()){return/iemobile/i.test(t)}function n0(t=ct()){return/android/i.test(t)}function r0(t=ct()){return/blackberry/i.test(t)}function s0(t=ct()){return/webos/i.test(t)}function cf(t=ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function iA(t=ct()){var e;return cf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function oA(){return vI()&&document.documentMode===10}function i0(t=ct()){return cf(t)||n0(t)||s0(t)||r0(t)||/windows phone/i.test(t)||t0(t)}/**
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
 */function o0(t,e=[]){let n;switch(t){case"Browser":n=ag(ct());break;case"Worker":n=`${ag(ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yi}/${r}`}/**
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
 */class aA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function lA(t,e={}){return _i(t,"GET","/v2/passwordPolicy",lf(t,e))}/**
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
 */const uA=6;class cA{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??uA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class hA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lg(this),this.idTokenSubscription=new lg(this),this.beforeStateQueue=new aA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Qs.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Hl(this,{idToken:e}),r=await Gt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(qt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Wl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=WS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qt(this.app))return Promise.reject(es(this));const n=e?Ut(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qt(this.app)?Promise.reject(es(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qt(this.app)?Promise.reject(es(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lA(this),n=new cA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Jo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await sA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await Qs.create(this,[kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=o0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(qt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&zS(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Su(t){return Ut(t)}class lg{constructor(e){this.auth=e,this.observer=null,this.addObserver=RI(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let hf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dA(t){hf=t}function fA(t){return hf.loadJS(t)}function pA(){return hf.gapiScript}function mA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function gA(t,e){const n=rf(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(as(i,e??{}))return s;vn(s,"already-initialized")}return n.initialize({options:e})}function yA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function _A(t,e,n){const r=Su(t);X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=a0(e),{host:o,port:l}=vA(e),u=l===null?"":`:${l}`,h={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){X(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),X(as(h,r.config.emulator)&&as(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,gi(o)?(Lv(`${i}//${o}${u}`),jv("Auth",!0)):wA()}function a0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function vA(t){const e=a0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ug(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ug(o)}}}function ug(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function wA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class l0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rn("not implemented")}_getIdTokenResponse(e){return Rn("not implemented")}_linkToIdToken(e,n){return Rn("not implemented")}_getReauthenticationResolver(e){return Rn("not implemented")}}/**
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
 */async function Xs(t,e){return QS(t,"POST","/v1/accounts:signInWithIdp",lf(t,e))}/**
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
 */const EA="http://localhost";class us extends l0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new us(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):vn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new us(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Xs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Xs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xs(e,n)}buildRequest(){const e={requestUri:EA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Zo(n)}return e}}/**
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
 */class df{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ta extends df{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class or extends ta{constructor(){super("facebook.com")}static credential(e){return us._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.FACEBOOK_SIGN_IN_METHOD="facebook.com";or.PROVIDER_ID="facebook.com";/**
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
 */class Sn extends ta{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return us._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Sn.credential(n,r)}catch{return null}}}Sn.GOOGLE_SIGN_IN_METHOD="google.com";Sn.PROVIDER_ID="google.com";/**
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
 */class ar extends ta{constructor(){super("github.com")}static credential(e){return us._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.GITHUB_SIGN_IN_METHOD="github.com";ar.PROVIDER_ID="github.com";/**
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
 */class lr extends ta{constructor(){super("twitter.com")}static credential(e,n){return us._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return lr.credential(n,r)}catch{return null}}}lr.TWITTER_SIGN_IN_METHOD="twitter.com";lr.PROVIDER_ID="twitter.com";/**
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
 */class oi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Gt._fromIdTokenResponse(e,r,s),o=cg(r);return new oi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=cg(r);return new oi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function cg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ql extends Un{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ql.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ql(e,n,r,s)}}function u0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ql._fromErrorAndOperation(t,i,e,r):i})}async function TA(t,e,n=!1){const r=await jo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return oi._forOperation(t,"link",r)}/**
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
 */async function IA(t,e,n=!1){const{auth:r}=t;if(qt(r.app))return Promise.reject(es(r));const s="reauthenticate";try{const i=await jo(t,u0(r,s,e,t),n);X(i.idToken,r,"internal-error");const o=uf(i.idToken);X(o,r,"internal-error");const{sub:l}=o;return X(t.uid===l,r,"user-mismatch"),oi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&vn(r,"user-mismatch"),i}}/**
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
 */async function SA(t,e,n=!1){if(qt(t.app))return Promise.reject(es(t));const r="signIn",s=await u0(t,r,e),i=await oi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function AA(t,e,n,r){return Ut(t).onIdTokenChanged(e,n,r)}function CA(t,e,n){return Ut(t).beforeAuthStateChanged(e,n)}function RA(t,e,n,r){return Ut(t).onAuthStateChanged(e,n,r)}function kA(t){return Ut(t).signOut()}const Gl="__sak";/**
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
 */class c0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gl,"1"),this.storage.removeItem(Gl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const xA=1e3,PA=10;class h0 extends c0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=i0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);oA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,PA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},xA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}h0.type="LOCAL";const NA=h0;/**
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
 */class d0 extends c0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}d0.type="SESSION";const f0=d0;/**
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
 */function DA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Au{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Au(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),u=await DA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Au.receivers=[];/**
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
 */function ff(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class VA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const h=ff("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const y=p;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(y.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function pn(){return window}function bA(t){pn().location.href=t}/**
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
 */function p0(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function OA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function MA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function LA(){return p0()?self:null}/**
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
 */const m0="firebaseLocalStorageDb",jA=1,Kl="firebaseLocalStorage",g0="fbase_key";class na{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Cu(t,e){return t.transaction([Kl],e?"readwrite":"readonly").objectStore(Kl)}function FA(){const t=indexedDB.deleteDatabase(m0);return new na(t).toPromise()}function Hh(){const t=indexedDB.open(m0,jA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Kl,{keyPath:g0})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Kl)?e(r):(r.close(),await FA(),e(await Hh()))})})}async function hg(t,e,n){const r=Cu(t,!0).put({[g0]:e,value:n});return new na(r).toPromise()}async function UA(t,e){const n=Cu(t,!1).get(e),r=await new na(n).toPromise();return r===void 0?null:r.value}function dg(t,e){const n=Cu(t,!0).delete(e);return new na(n).toPromise()}const zA=800,BA=3;class y0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>BA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return p0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Au._getInstance(LA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await OA(),!this.activeServiceWorker)return;this.sender=new VA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||MA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hh();return await hg(e,Gl,"1"),await dg(e,Gl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>hg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>UA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>dg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Cu(s,!1).getAll();return new na(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}y0.type="LOCAL";const $A=y0;new ea(3e4,6e4);/**
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
 */function _0(t,e){return e?kn(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class pf extends l0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function HA(t){return SA(t.auth,new pf(t),t.bypassAuthState)}function WA(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),IA(n,new pf(t),t.bypassAuthState)}async function qA(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),TA(n,new pf(t),t.bypassAuthState)}/**
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
 */class v0{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return HA;case"linkViaPopup":case"linkViaRedirect":return qA;case"reauthViaPopup":case"reauthViaRedirect":return WA;default:vn(this.auth,"internal-error")}}resolve(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const GA=new ea(2e3,1e4);async function KA(t,e,n){if(qt(t.app))return Promise.reject(Yt(t,"operation-not-supported-in-this-environment"));const r=Su(t);BS(t,e,df);const s=_0(r,n);return new Xr(r,"signInViaPopup",e,s).executeNotNull()}class Xr extends v0{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Xr.currentPopupAction&&Xr.currentPopupAction.cancel(),Xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){Mn(this.filter.length===1,"Popup operations only handle one event");const e=ff();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Yt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,GA.get())};e()}}Xr.currentPopupAction=null;/**
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
 */const QA="pendingRedirect",ul=new Map;class XA extends v0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ul.get(this.auth._key());if(!e){try{const r=await YA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ul.set(this.auth._key(),e)}return this.bypassAuthState||ul.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function YA(t,e){const n=e2(e),r=ZA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function JA(t,e){ul.set(t._key(),e)}function ZA(t){return kn(t._redirectPersistence)}function e2(t){return ll(QA,t.config.apiKey,t.name)}async function t2(t,e,n=!1){if(qt(t.app))return Promise.reject(es(t));const r=Su(t),s=_0(r,e),o=await new XA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const n2=10*60*1e3;class r2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!s2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!w0(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Yt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=n2&&this.cachedEventUids.clear(),this.cachedEventUids.has(fg(e))}saveEventToCache(e){this.cachedEventUids.add(fg(e)),this.lastProcessedEventTime=Date.now()}}function fg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function w0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function s2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return w0(t);default:return!1}}/**
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
 */async function i2(t,e={}){return _i(t,"GET","/v1/projects",e)}/**
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
 */const o2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,a2=/^https?/;async function l2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await i2(t);for(const n of e)try{if(u2(n))return}catch{}vn(t,"unauthorized-domain")}function u2(t){const e=Bh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!a2.test(n))return!1;if(o2.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const c2=new ea(3e4,6e4);function pg(){const t=pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function h2(t){return new Promise((e,n)=>{var s,i,o;function r(){pg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pg(),n(Yt(t,"network-request-failed"))},timeout:c2.get()})}if((i=(s=pn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=pn().gapi)!=null&&o.load)r();else{const l=mA("iframefcb");return pn()[l]=()=>{gapi.load?r():n(Yt(t,"network-request-failed"))},fA(`${pA()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw cl=null,e})}let cl=null;function d2(t){return cl=cl||h2(t),cl}/**
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
 */const f2=new ea(5e3,15e3),p2="__/auth/iframe",m2="emulator/auth/iframe",g2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},y2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _2(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?af(e,m2):`https://${t.config.authDomain}/${p2}`,r={apiKey:e.apiKey,appName:t.name,v:yi},s=y2.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Zo(r).slice(1)}`}async function v2(t){const e=await d2(t),n=pn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:_2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:g2,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Yt(t,"network-request-failed"),l=pn().setTimeout(()=>{i(o)},f2.get());function u(){pn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const w2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},E2=500,T2=600,I2="_blank",S2="http://localhost";class mg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function A2(t,e,n,r=E2,s=T2){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...w2,width:r.toString(),height:s.toString(),top:i,left:o},h=ct().toLowerCase();n&&(l=e0(h)?I2:n),Jv(h)&&(e=e||S2,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[R,N])=>`${y}${R}=${N},`,"");if(iA(h)&&l!=="_self")return C2(e||"",l),new mg(null);const p=window.open(e||"",l,f);X(p,t,"popup-blocked");try{p.focus()}catch{}return new mg(p)}function C2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const R2="__/auth/handler",k2="emulator/auth/handler",x2=encodeURIComponent("fac");async function gg(t,e,n,r,s,i){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:yi,eventId:s};if(e instanceof df){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",CI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof ta){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${x2}=${encodeURIComponent(u)}`:"";return`${P2(t)}?${Zo(l).slice(1)}${h}`}function P2({config:t}){return t.emulator?af(t,k2):`https://${t.authDomain}/${R2}`}/**
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
 */const Oc="webStorageSupport";class N2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=f0,this._completeRedirectFn=t2,this._overrideRedirectResult=JA}async _openPopup(e,n,r,s){var o;Mn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await gg(e,n,r,Bh(),s);return A2(e,i,ff())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await gg(e,n,r,Bh(),s);return bA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Mn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await v2(e),r=new r2(e);return n.register("authEvent",s=>(X(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Oc,{type:Oc},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Oc];i!==void 0&&n(!!i),vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=l2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return i0()||Zv()||cf()}}const D2=N2;var yg="@firebase/auth",_g="1.11.1";/**
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
 */class V2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function b2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function O2(t){ii(new ls("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:o0(t)},h=new hA(r,s,i,u);return yA(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ii(new ls("auth-internal",e=>{const n=Su(e.getProvider("auth").getImmediate());return(r=>new V2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tr(yg,_g,b2(t)),Tr(yg,_g,"esm2020")}/**
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
 */const M2=5*60,L2=Mv("authIdTokenMaxAge")||M2;let vg=null;const j2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>L2)return;const s=n==null?void 0:n.token;vg!==s&&(vg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function F2(t=Bv()){const e=rf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=gA(t,{popupRedirectResolver:D2,persistence:[$A,NA,f0]}),r=Mv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=j2(i.toString());CA(n,o,()=>o(n.currentUser)),AA(n,l=>o(l))}}const s=bv("auth");return s&&_A(n,`http://${s}`),n}function U2(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}dA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Yt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",U2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});O2("Browser");var wg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ir,E0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,g){function w(){}w.prototype=g.prototype,v.F=g.prototype,v.prototype=new w,v.prototype.constructor=v,v.D=function(I,A,k){for(var T=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)T[Ve-2]=arguments[Ve];return g.prototype[A].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,g,w){w||(w=0);const I=Array(16);if(typeof g=="string")for(var A=0;A<16;++A)I[A]=g.charCodeAt(w++)|g.charCodeAt(w++)<<8|g.charCodeAt(w++)<<16|g.charCodeAt(w++)<<24;else for(A=0;A<16;++A)I[A]=g[w++]|g[w++]<<8|g[w++]<<16|g[w++]<<24;g=v.g[0],w=v.g[1],A=v.g[2];let k=v.g[3],T;T=g+(k^w&(A^k))+I[0]+3614090360&4294967295,g=w+(T<<7&4294967295|T>>>25),T=k+(A^g&(w^A))+I[1]+3905402710&4294967295,k=g+(T<<12&4294967295|T>>>20),T=A+(w^k&(g^w))+I[2]+606105819&4294967295,A=k+(T<<17&4294967295|T>>>15),T=w+(g^A&(k^g))+I[3]+3250441966&4294967295,w=A+(T<<22&4294967295|T>>>10),T=g+(k^w&(A^k))+I[4]+4118548399&4294967295,g=w+(T<<7&4294967295|T>>>25),T=k+(A^g&(w^A))+I[5]+1200080426&4294967295,k=g+(T<<12&4294967295|T>>>20),T=A+(w^k&(g^w))+I[6]+2821735955&4294967295,A=k+(T<<17&4294967295|T>>>15),T=w+(g^A&(k^g))+I[7]+4249261313&4294967295,w=A+(T<<22&4294967295|T>>>10),T=g+(k^w&(A^k))+I[8]+1770035416&4294967295,g=w+(T<<7&4294967295|T>>>25),T=k+(A^g&(w^A))+I[9]+2336552879&4294967295,k=g+(T<<12&4294967295|T>>>20),T=A+(w^k&(g^w))+I[10]+4294925233&4294967295,A=k+(T<<17&4294967295|T>>>15),T=w+(g^A&(k^g))+I[11]+2304563134&4294967295,w=A+(T<<22&4294967295|T>>>10),T=g+(k^w&(A^k))+I[12]+1804603682&4294967295,g=w+(T<<7&4294967295|T>>>25),T=k+(A^g&(w^A))+I[13]+4254626195&4294967295,k=g+(T<<12&4294967295|T>>>20),T=A+(w^k&(g^w))+I[14]+2792965006&4294967295,A=k+(T<<17&4294967295|T>>>15),T=w+(g^A&(k^g))+I[15]+1236535329&4294967295,w=A+(T<<22&4294967295|T>>>10),T=g+(A^k&(w^A))+I[1]+4129170786&4294967295,g=w+(T<<5&4294967295|T>>>27),T=k+(w^A&(g^w))+I[6]+3225465664&4294967295,k=g+(T<<9&4294967295|T>>>23),T=A+(g^w&(k^g))+I[11]+643717713&4294967295,A=k+(T<<14&4294967295|T>>>18),T=w+(k^g&(A^k))+I[0]+3921069994&4294967295,w=A+(T<<20&4294967295|T>>>12),T=g+(A^k&(w^A))+I[5]+3593408605&4294967295,g=w+(T<<5&4294967295|T>>>27),T=k+(w^A&(g^w))+I[10]+38016083&4294967295,k=g+(T<<9&4294967295|T>>>23),T=A+(g^w&(k^g))+I[15]+3634488961&4294967295,A=k+(T<<14&4294967295|T>>>18),T=w+(k^g&(A^k))+I[4]+3889429448&4294967295,w=A+(T<<20&4294967295|T>>>12),T=g+(A^k&(w^A))+I[9]+568446438&4294967295,g=w+(T<<5&4294967295|T>>>27),T=k+(w^A&(g^w))+I[14]+3275163606&4294967295,k=g+(T<<9&4294967295|T>>>23),T=A+(g^w&(k^g))+I[3]+4107603335&4294967295,A=k+(T<<14&4294967295|T>>>18),T=w+(k^g&(A^k))+I[8]+1163531501&4294967295,w=A+(T<<20&4294967295|T>>>12),T=g+(A^k&(w^A))+I[13]+2850285829&4294967295,g=w+(T<<5&4294967295|T>>>27),T=k+(w^A&(g^w))+I[2]+4243563512&4294967295,k=g+(T<<9&4294967295|T>>>23),T=A+(g^w&(k^g))+I[7]+1735328473&4294967295,A=k+(T<<14&4294967295|T>>>18),T=w+(k^g&(A^k))+I[12]+2368359562&4294967295,w=A+(T<<20&4294967295|T>>>12),T=g+(w^A^k)+I[5]+4294588738&4294967295,g=w+(T<<4&4294967295|T>>>28),T=k+(g^w^A)+I[8]+2272392833&4294967295,k=g+(T<<11&4294967295|T>>>21),T=A+(k^g^w)+I[11]+1839030562&4294967295,A=k+(T<<16&4294967295|T>>>16),T=w+(A^k^g)+I[14]+4259657740&4294967295,w=A+(T<<23&4294967295|T>>>9),T=g+(w^A^k)+I[1]+2763975236&4294967295,g=w+(T<<4&4294967295|T>>>28),T=k+(g^w^A)+I[4]+1272893353&4294967295,k=g+(T<<11&4294967295|T>>>21),T=A+(k^g^w)+I[7]+4139469664&4294967295,A=k+(T<<16&4294967295|T>>>16),T=w+(A^k^g)+I[10]+3200236656&4294967295,w=A+(T<<23&4294967295|T>>>9),T=g+(w^A^k)+I[13]+681279174&4294967295,g=w+(T<<4&4294967295|T>>>28),T=k+(g^w^A)+I[0]+3936430074&4294967295,k=g+(T<<11&4294967295|T>>>21),T=A+(k^g^w)+I[3]+3572445317&4294967295,A=k+(T<<16&4294967295|T>>>16),T=w+(A^k^g)+I[6]+76029189&4294967295,w=A+(T<<23&4294967295|T>>>9),T=g+(w^A^k)+I[9]+3654602809&4294967295,g=w+(T<<4&4294967295|T>>>28),T=k+(g^w^A)+I[12]+3873151461&4294967295,k=g+(T<<11&4294967295|T>>>21),T=A+(k^g^w)+I[15]+530742520&4294967295,A=k+(T<<16&4294967295|T>>>16),T=w+(A^k^g)+I[2]+3299628645&4294967295,w=A+(T<<23&4294967295|T>>>9),T=g+(A^(w|~k))+I[0]+4096336452&4294967295,g=w+(T<<6&4294967295|T>>>26),T=k+(w^(g|~A))+I[7]+1126891415&4294967295,k=g+(T<<10&4294967295|T>>>22),T=A+(g^(k|~w))+I[14]+2878612391&4294967295,A=k+(T<<15&4294967295|T>>>17),T=w+(k^(A|~g))+I[5]+4237533241&4294967295,w=A+(T<<21&4294967295|T>>>11),T=g+(A^(w|~k))+I[12]+1700485571&4294967295,g=w+(T<<6&4294967295|T>>>26),T=k+(w^(g|~A))+I[3]+2399980690&4294967295,k=g+(T<<10&4294967295|T>>>22),T=A+(g^(k|~w))+I[10]+4293915773&4294967295,A=k+(T<<15&4294967295|T>>>17),T=w+(k^(A|~g))+I[1]+2240044497&4294967295,w=A+(T<<21&4294967295|T>>>11),T=g+(A^(w|~k))+I[8]+1873313359&4294967295,g=w+(T<<6&4294967295|T>>>26),T=k+(w^(g|~A))+I[15]+4264355552&4294967295,k=g+(T<<10&4294967295|T>>>22),T=A+(g^(k|~w))+I[6]+2734768916&4294967295,A=k+(T<<15&4294967295|T>>>17),T=w+(k^(A|~g))+I[13]+1309151649&4294967295,w=A+(T<<21&4294967295|T>>>11),T=g+(A^(w|~k))+I[4]+4149444226&4294967295,g=w+(T<<6&4294967295|T>>>26),T=k+(w^(g|~A))+I[11]+3174756917&4294967295,k=g+(T<<10&4294967295|T>>>22),T=A+(g^(k|~w))+I[2]+718787259&4294967295,A=k+(T<<15&4294967295|T>>>17),T=w+(k^(A|~g))+I[9]+3951481745&4294967295,v.g[0]=v.g[0]+g&4294967295,v.g[1]=v.g[1]+(A+(T<<21&4294967295|T>>>11))&4294967295,v.g[2]=v.g[2]+A&4294967295,v.g[3]=v.g[3]+k&4294967295}r.prototype.v=function(v,g){g===void 0&&(g=v.length);const w=g-this.blockSize,I=this.C;let A=this.h,k=0;for(;k<g;){if(A==0)for(;k<=w;)s(this,v,k),k+=this.blockSize;if(typeof v=="string"){for(;k<g;)if(I[A++]=v.charCodeAt(k++),A==this.blockSize){s(this,I),A=0;break}}else for(;k<g;)if(I[A++]=v[k++],A==this.blockSize){s(this,I),A=0;break}}this.h=A,this.o+=g},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var g=1;g<v.length-8;++g)v[g]=0;g=this.o*8;for(var w=v.length-8;w<v.length;++w)v[w]=g&255,g/=256;for(this.v(v),v=Array(16),g=0,w=0;w<4;++w)for(let I=0;I<32;I+=8)v[g++]=this.g[w]>>>I&255;return v};function i(v,g){var w=l;return Object.prototype.hasOwnProperty.call(w,v)?w[v]:w[v]=g(v)}function o(v,g){this.h=g;const w=[];let I=!0;for(let A=v.length-1;A>=0;A--){const k=v[A]|0;I&&k==g||(w[A]=k,I=!1)}this.g=w}var l={};function u(v){return-128<=v&&v<128?i(v,function(g){return new o([g|0],g<0?-1:0)}):new o([v|0],v<0?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return p;if(v<0)return M(h(-v));const g=[];let w=1;for(let I=0;v>=w;I++)g[I]=v/w|0,w*=4294967296;return new o(g,0)}function f(v,g){if(v.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(v.charAt(0)=="-")return M(f(v.substring(1),g));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=h(Math.pow(g,8));let I=p;for(let k=0;k<v.length;k+=8){var A=Math.min(8,v.length-k);const T=parseInt(v.substring(k,k+A),g);A<8?(A=h(Math.pow(g,A)),I=I.j(A).add(h(T))):(I=I.j(w),I=I.add(h(T)))}return I}var p=u(0),y=u(1),R=u(16777216);t=o.prototype,t.m=function(){if(V(this))return-M(this).m();let v=0,g=1;for(let w=0;w<this.g.length;w++){const I=this.i(w);v+=(I>=0?I:4294967296+I)*g,g*=4294967296}return v},t.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(N(this))return"0";if(V(this))return"-"+M(this).toString(v);const g=h(Math.pow(v,6));var w=this;let I="";for(;;){const A=b(w,g).g;w=S(w,A.j(g));let k=((w.g.length>0?w.g[0]:w.h)>>>0).toString(v);if(w=A,N(w))return k+I;for(;k.length<6;)k="0"+k;I=k+I}},t.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function N(v){if(v.h!=0)return!1;for(let g=0;g<v.g.length;g++)if(v.g[g]!=0)return!1;return!0}function V(v){return v.h==-1}t.l=function(v){return v=S(this,v),V(v)?-1:N(v)?0:1};function M(v){const g=v.g.length,w=[];for(let I=0;I<g;I++)w[I]=~v.g[I];return new o(w,~v.h).add(y)}t.abs=function(){return V(this)?M(this):this},t.add=function(v){const g=Math.max(this.g.length,v.g.length),w=[];let I=0;for(let A=0;A<=g;A++){let k=I+(this.i(A)&65535)+(v.i(A)&65535),T=(k>>>16)+(this.i(A)>>>16)+(v.i(A)>>>16);I=T>>>16,k&=65535,T&=65535,w[A]=T<<16|k}return new o(w,w[w.length-1]&-2147483648?-1:0)};function S(v,g){return v.add(M(g))}t.j=function(v){if(N(this)||N(v))return p;if(V(this))return V(v)?M(this).j(M(v)):M(M(this).j(v));if(V(v))return M(this.j(M(v)));if(this.l(R)<0&&v.l(R)<0)return h(this.m()*v.m());const g=this.g.length+v.g.length,w=[];for(var I=0;I<2*g;I++)w[I]=0;for(I=0;I<this.g.length;I++)for(let A=0;A<v.g.length;A++){const k=this.i(I)>>>16,T=this.i(I)&65535,Ve=v.i(A)>>>16,zt=v.i(A)&65535;w[2*I+2*A]+=T*zt,E(w,2*I+2*A),w[2*I+2*A+1]+=k*zt,E(w,2*I+2*A+1),w[2*I+2*A+1]+=T*Ve,E(w,2*I+2*A+1),w[2*I+2*A+2]+=k*Ve,E(w,2*I+2*A+2)}for(v=0;v<g;v++)w[v]=w[2*v+1]<<16|w[2*v];for(v=g;v<2*g;v++)w[v]=0;return new o(w,0)};function E(v,g){for(;(v[g]&65535)!=v[g];)v[g+1]+=v[g]>>>16,v[g]&=65535,g++}function C(v,g){this.g=v,this.h=g}function b(v,g){if(N(g))throw Error("division by zero");if(N(v))return new C(p,p);if(V(v))return g=b(M(v),g),new C(M(g.g),M(g.h));if(V(g))return g=b(v,M(g)),new C(M(g.g),g.h);if(v.g.length>30){if(V(v)||V(g))throw Error("slowDivide_ only works with positive integers.");for(var w=y,I=g;I.l(v)<=0;)w=F(w),I=F(I);var A=z(w,1),k=z(I,1);for(I=z(I,2),w=z(w,2);!N(I);){var T=k.add(I);T.l(v)<=0&&(A=A.add(w),k=T),I=z(I,1),w=z(w,1)}return g=S(v,A.j(g)),new C(A,g)}for(A=p;v.l(g)>=0;){for(w=Math.max(1,Math.floor(v.m()/g.m())),I=Math.ceil(Math.log(w)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),k=h(w),T=k.j(g);V(T)||T.l(v)>0;)w-=I,k=h(w),T=k.j(g);N(k)&&(k=y),A=A.add(k),v=S(v,T)}return new C(A,v)}t.B=function(v){return b(this,v).h},t.and=function(v){const g=Math.max(this.g.length,v.g.length),w=[];for(let I=0;I<g;I++)w[I]=this.i(I)&v.i(I);return new o(w,this.h&v.h)},t.or=function(v){const g=Math.max(this.g.length,v.g.length),w=[];for(let I=0;I<g;I++)w[I]=this.i(I)|v.i(I);return new o(w,this.h|v.h)},t.xor=function(v){const g=Math.max(this.g.length,v.g.length),w=[];for(let I=0;I<g;I++)w[I]=this.i(I)^v.i(I);return new o(w,this.h^v.h)};function F(v){const g=v.g.length+1,w=[];for(let I=0;I<g;I++)w[I]=v.i(I)<<1|v.i(I-1)>>>31;return new o(w,v.h)}function z(v,g){const w=g>>5;g%=32;const I=v.g.length-w,A=[];for(let k=0;k<I;k++)A[k]=g>0?v.i(k+w)>>>g|v.i(k+w+1)<<32-g:v.i(k+w);return new o(A,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,E0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Ir=o}).apply(typeof wg<"u"?wg:typeof self<"u"?self:typeof window<"u"?window:{});var $a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var T0,Zi,I0,hl,Wh,S0,A0,C0;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof $a=="object"&&$a];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,c){if(c)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var x=a[m];if(!(x in d))break e;d=d[x]}a=a[a.length-1],m=d[a],c=c(m),c!=m&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(c){var d=[],m;for(m in c)Object.prototype.hasOwnProperty.call(c,m)&&d.push([m,c[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function u(a,c,d){return a.call.apply(a.bind,arguments)}function h(a,c,d){return h=u,h.apply(null,arguments)}function f(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function p(a,c){function d(){}d.prototype=c.prototype,a.Z=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(m,x,D){for(var U=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)U[ee-2]=arguments[ee];return c.prototype[x].apply(m,U)}}var y=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function R(a){const c=a.length;if(c>0){const d=Array(c);for(let m=0;m<c;m++)d[m]=a[m];return d}return[]}function N(a,c){for(let m=1;m<arguments.length;m++){const x=arguments[m];var d=typeof x;if(d=d!="object"?d:x?Array.isArray(x)?"array":d:"null",d=="array"||d=="object"&&typeof x.length=="number"){d=a.length||0;const D=x.length||0;a.length=d+D;for(let U=0;U<D;U++)a[d+U]=x[U]}else a.push(x)}}class V{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function M(a){o.setTimeout(()=>{throw a},0)}function S(){var a=v;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class E{constructor(){this.h=this.g=null}add(c,d){const m=C.get();m.set(c,d),this.h?this.h.next=m:this.g=m,this.h=m}}var C=new V(()=>new b,a=>a.reset());class b{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let F,z=!1,v=new E,g=()=>{const a=Promise.resolve(void 0);F=()=>{a.then(w)}};function w(){for(var a;a=S();){try{a.h.call(a.g)}catch(d){M(d)}var c=C;c.j(a),c.h<100&&(c.h++,a.next=c.g,c.g=a)}z=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,c),o.removeEventListener("test",d,c)}catch{}return a}();function T(a){return/^[\s\xa0]*$/.test(a)}function Ve(a,c){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,c)}p(Ve,A),Ve.prototype.init=function(a,c){const d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget,c||(d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement)),this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Ve.Z.h.call(this)},Ve.prototype.h=function(){Ve.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var zt="closure_listenable_"+(Math.random()*1e6|0),zn=0;function Bn(a,c,d,m,x){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!m,this.ha=x,this.key=++zn,this.da=this.fa=!1}function $(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function K(a,c,d){for(const m in a)c.call(d,a[m],m,a)}function Z(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function fe(a){const c={};for(const d in a)c[d]=a[d];return c}const Ee="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Zt(a,c){let d,m;for(let x=1;x<arguments.length;x++){m=arguments[x];for(d in m)a[d]=m[d];for(let D=0;D<Ee.length;D++)d=Ee[D],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function mt(a){this.src=a,this.g={},this.h=0}mt.prototype.add=function(a,c,d,m,x){const D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);const U=Tt(a,c,m,x);return U>-1?(c=a[U],d||(c.fa=!1)):(c=new Bn(c,this.src,D,!!m,x),c.fa=d,a.push(c)),c};function en(a,c){const d=c.type;if(d in a.g){var m=a.g[d],x=Array.prototype.indexOf.call(m,c,void 0),D;(D=x>=0)&&Array.prototype.splice.call(m,x,1),D&&($(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Tt(a,c,d,m){for(let x=0;x<a.length;++x){const D=a[x];if(!D.da&&D.listener==c&&D.capture==!!d&&D.ha==m)return x}return-1}var It="closure_lm_"+(Math.random()*1e6|0),Ii={};function Mr(a,c,d,m,x){if(Array.isArray(c)){for(let D=0;D<c.length;D++)Mr(a,c[D],d,m,x);return null}return d=$n(d),a&&a[zt]?a.J(c,d,l(m)?!!m.capture:!1,x):la(a,c,d,!1,m,x)}function la(a,c,d,m,x,D){if(!c)throw Error("Invalid event type");const U=l(x)?!!x.capture:!!x;let ee=Si(a);if(ee||(a[It]=ee=new mt(a)),d=ee.add(c,d,m,U,D),d.proxy)return d;if(m=_s(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)k||(x=U),x===void 0&&(x=!1),a.addEventListener(c.toString(),m,x);else if(a.attachEvent)a.attachEvent(ca(c.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function _s(){function a(d){return c.call(a.src,a.listener,d)}const c=Fu;return a}function ua(a,c,d,m,x){if(Array.isArray(c))for(var D=0;D<c.length;D++)ua(a,c[D],d,m,x);else m=l(m)?!!m.capture:!!m,d=$n(d),a&&a[zt]?(a=a.i,D=String(c).toString(),D in a.g&&(c=a.g[D],d=Tt(c,d,m,x),d>-1&&($(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete a.g[D],a.h--)))):a&&(a=Si(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Tt(c,d,m,x)),(d=a>-1?c[a]:null)&&vs(d))}function vs(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[zt])en(c.i,a);else{var d=a.type,m=a.proxy;c.removeEventListener?c.removeEventListener(d,m,a.capture):c.detachEvent?c.detachEvent(ca(d),m):c.addListener&&c.removeListener&&c.removeListener(m),(d=Si(c))?(en(d,a),d.h==0&&(d.src=null,c[It]=null)):$(a)}}}function ca(a){return a in Ii?Ii[a]:Ii[a]="on"+a}function Fu(a,c){if(a.da)a=!0;else{c=new Ve(c,this);const d=a.listener,m=a.ha||a.src;a.fa&&vs(a),a=d.call(m,c)}return a}function Si(a){return a=a[It],a instanceof mt?a:null}var tn="__closure_events_fn_"+(Math.random()*1e9>>>0);function $n(a){return typeof a=="function"?a:(a[tn]||(a[tn]=function(c){return a.handleEvent(c)}),a[tn])}function je(){I.call(this),this.i=new mt(this),this.M=this,this.G=null}p(je,I),je.prototype[zt]=!0,je.prototype.removeEventListener=function(a,c,d,m){ua(this,a,c,d,m)};function Fe(a,c){var d,m=a.G;if(m)for(d=[];m;m=m.G)d.push(m);if(a=a.M,m=c.type||c,typeof c=="string")c=new A(c,a);else if(c instanceof A)c.target=c.target||a;else{var x=c;c=new A(m,a),Zt(c,x)}x=!0;let D,U;if(d)for(U=d.length-1;U>=0;U--)D=c.g=d[U],x=Hn(D,m,!0,c)&&x;if(D=c.g=a,x=Hn(D,m,!0,c)&&x,x=Hn(D,m,!1,c)&&x,d)for(U=0;U<d.length;U++)D=c.g=d[U],x=Hn(D,m,!1,c)&&x}je.prototype.N=function(){if(je.Z.N.call(this),this.i){var a=this.i;for(const c in a.g){const d=a.g[c];for(let m=0;m<d.length;m++)$(d[m]);delete a.g[c],a.h--}}this.G=null},je.prototype.J=function(a,c,d,m){return this.i.add(String(a),c,!1,d,m)},je.prototype.K=function(a,c,d,m){return this.i.add(String(a),c,!0,d,m)};function Hn(a,c,d,m){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();let x=!0;for(let D=0;D<c.length;++D){const U=c[D];if(U&&!U.da&&U.capture==d){const ee=U.listener,Ue=U.ha||U.src;U.fa&&en(a.i,U),x=ee.call(Ue,m)!==!1&&x}}return x&&!m.defaultPrevented}function ha(a,c){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:o.setTimeout(a,c||0)}function Ai(a){a.g=ha(()=>{a.g=null,a.i&&(a.i=!1,Ai(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class Uu extends I{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ai(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Lr(a){I.call(this),this.h=a,this.g={}}p(Lr,I);var da=[];function Ci(a){K(a.g,function(c,d){this.g.hasOwnProperty(d)&&vs(c)},a),a.g={}}Lr.prototype.N=function(){Lr.Z.N.call(this),Ci(this)},Lr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ri=o.JSON.stringify,zu=o.JSON.parse,fa=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function pa(){}function be(){}var Wn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function nn(){A.call(this,"d")}p(nn,A);function ws(){A.call(this,"c")}p(ws,A);var rn={},ki=null;function Es(){return ki=ki||new je}rn.Ia="serverreachability";function Ts(a){A.call(this,rn.Ia,a)}p(Ts,A);function qn(a){const c=Es();Fe(c,new Ts(c))}rn.STAT_EVENT="statevent";function xi(a,c){A.call(this,rn.STAT_EVENT,a),this.stat=c}p(xi,A);function We(a){const c=Es();Fe(c,new xi(c,a))}rn.Ja="timingevent";function P(a,c){A.call(this,rn.Ja,a),this.size=c}p(P,A);function B(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},c)}function ne(){this.g=!0}ne.prototype.ua=function(){this.g=!1};function te(a,c,d,m,x,D){a.info(function(){if(a.g)if(D){var U="",ee=D.split("&");for(let pe=0;pe<ee.length;pe++){var Ue=ee[pe].split("=");if(Ue.length>1){const qe=Ue[0];Ue=Ue[1];const an=qe.split("_");U=an.length>=2&&an[1]=="type"?U+(qe+"="+Ue+"&"):U+(qe+"=redacted&")}}}else U=null;else U=D;return"XMLHTTP REQ ("+m+") [attempt "+x+"]: "+c+`
`+d+`
`+U})}function ce(a,c,d,m,x,D,U){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+x+"]: "+c+`
`+d+`
`+D+" "+U})}function Pe(a,c,d,m){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+jr(a,d)+(m?" "+m:"")})}function St(a,c){a.info(function(){return"TIMEOUT: "+c})}ne.prototype.info=function(){};function jr(a,c){if(!a.g)return c;if(!c)return null;try{const D=JSON.parse(c);if(D){for(a=0;a<D.length;a++)if(Array.isArray(D[a])){var d=D[a];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var x=m[0];if(x!="noop"&&x!="stop"&&x!="close")for(let U=1;U<m.length;U++)m[U]=""}}}}return Ri(D)}catch{return c}}var sn={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Gn={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},qf;function Bu(){}p(Bu,pa),Bu.prototype.g=function(){return new XMLHttpRequest},qf=new Bu;function Pi(a){return encodeURIComponent(String(a))}function Qw(a){var c=1;a=a.split(":");const d=[];for(;c>0&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function Kn(a,c,d,m){this.j=a,this.i=c,this.l=d,this.S=m||1,this.V=new Lr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Gf}function Gf(){this.i=null,this.g="",this.h=!1}var Kf={},$u={};function Hu(a,c,d){a.M=1,a.A=ga(on(c)),a.u=d,a.R=!0,Qf(a,null)}function Qf(a,c){a.F=Date.now(),ma(a),a.B=on(a.A);var d=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),lp(d.i,"t",m),a.C=0,d=a.j.L,a.h=new Gf,a.g=Cp(a.j,d?c:null,!a.u),a.P>0&&(a.O=new Uu(h(a.Y,a,a.g),a.P)),c=a.V,d=a.g,m=a.ba;var x="readystatechange";Array.isArray(x)||(x&&(da[0]=x.toString()),x=da);for(let D=0;D<x.length;D++){const U=Mr(d,x[D],m||c.handleEvent,!1,c.h||c);if(!U)break;c.g[U.key]=U}c=a.J?fe(a.J):{},a.u?(a.v||(a.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,c)):(a.v="GET",a.g.ea(a.B,a.v,null,c)),qn(),te(a.i,a.v,a.B,a.l,a.S,a.u)}Kn.prototype.ba=function(a){a=a.target;const c=this.O;c&&Yn(a)==3?c.j():this.Y(a)},Kn.prototype.Y=function(a){try{if(a==this.g)e:{const ee=Yn(this.g),Ue=this.g.ya(),pe=this.g.ca();if(!(ee<3)&&(ee!=3||this.g&&(this.h.h||this.g.la()||mp(this.g)))){this.K||ee!=4||Ue==7||(Ue==8||pe<=0?qn(3):qn(2)),Wu(this);var c=this.g.ca();this.X=c;var d=Xw(this);if(this.o=c==200,ce(this.i,this.v,this.B,this.l,this.S,ee,c),this.o){if(this.U&&!this.L){t:{if(this.g){var m,x=this.g;if((m=x.g?x.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(m)){var D=m;break t}}D=null}if(a=D)Pe(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,qu(this,a);else{this.o=!1,this.m=3,We(12),Fr(this),Ni(this);break e}}if(this.R){a=!0;let qe;for(;!this.K&&this.C<d.length;)if(qe=Yw(this,d),qe==$u){ee==4&&(this.m=4,We(14),a=!1),Pe(this.i,this.l,null,"[Incomplete Response]");break}else if(qe==Kf){this.m=4,We(15),Pe(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Pe(this.i,this.l,qe,null),qu(this,qe);if(Xf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ee!=4||d.length!=0||this.h.h||(this.m=1,We(16),a=!1),this.o=this.o&&a,!a)Pe(this.i,this.l,d,"[Invalid Chunked Response]"),Fr(this),Ni(this);else if(d.length>0&&!this.W){this.W=!0;var U=this.j;U.g==this&&U.aa&&!U.P&&(U.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),ec(U),U.P=!0,We(11))}}else Pe(this.i,this.l,d,null),qu(this,d);ee==4&&Fr(this),this.o&&!this.K&&(ee==4?Tp(this.j,this):(this.o=!1,ma(this)))}else hE(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,We(12)):(this.m=0,We(13)),Fr(this),Ni(this)}}}catch{}finally{}};function Xw(a){if(!Xf(a))return a.g.la();const c=mp(a.g);if(c==="")return"";let d="";const m=c.length,x=Yn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Fr(a),Ni(a),"";a.h.i=new o.TextDecoder}for(let D=0;D<m;D++)a.h.h=!0,d+=a.h.i.decode(c[D],{stream:!(x&&D==m-1)});return c.length=0,a.h.g+=d,a.C=0,a.h.g}function Xf(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Yw(a,c){var d=a.C,m=c.indexOf(`
`,d);return m==-1?$u:(d=Number(c.substring(d,m)),isNaN(d)?Kf:(m+=1,m+d>c.length?$u:(c=c.slice(m,m+d),a.C=m+d,c)))}Kn.prototype.cancel=function(){this.K=!0,Fr(this)};function ma(a){a.T=Date.now()+a.H,Yf(a,a.H)}function Yf(a,c){if(a.D!=null)throw Error("WatchDog timer not null");a.D=B(h(a.aa,a),c)}function Wu(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Kn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(St(this.i,this.B),this.M!=2&&(qn(),We(17)),Fr(this),this.m=2,Ni(this)):Yf(this,this.T-a)};function Ni(a){a.j.I==0||a.K||Tp(a.j,a)}function Fr(a){Wu(a);var c=a.O;c&&typeof c.dispose=="function"&&c.dispose(),a.O=null,Ci(a.V),a.g&&(c=a.g,a.g=null,c.abort(),c.dispose())}function qu(a,c){try{var d=a.j;if(d.I!=0&&(d.g==a||Gu(d.h,a))){if(!a.L&&Gu(d.h,a)&&d.I==3){try{var m=d.Ba.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var x=m;if(x[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Ea(d),va(d);else break e;Zu(d),We(18)}}else d.xa=x[1],0<d.xa-d.K&&x[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=B(h(d.Va,d),6e3));ep(d.h)<=1&&d.ta&&(d.ta=void 0)}else zr(d,11)}else if((a.L||d.g==a)&&Ea(d),!T(c))for(x=d.Ba.g.parse(c),c=0;c<x.length;c++){let pe=x[c];const qe=pe[0];if(!(qe<=d.K))if(d.K=qe,pe=pe[1],d.I==2)if(pe[0]=="c"){d.M=pe[1],d.ba=pe[2];const an=pe[3];an!=null&&(d.ka=an,d.j.info("VER="+d.ka));const Br=pe[4];Br!=null&&(d.za=Br,d.j.info("SVER="+d.za));const Jn=pe[5];Jn!=null&&typeof Jn=="number"&&Jn>0&&(m=1.5*Jn,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Zn=a.g;if(Zn){const Ia=Zn.g?Zn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ia){var D=m.h;D.g||Ia.indexOf("spdy")==-1&&Ia.indexOf("quic")==-1&&Ia.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Ku(D,D.h),D.h=null))}if(m.G){const tc=Zn.g?Zn.g.getResponseHeader("X-HTTP-Session-Id"):null;tc&&(m.wa=tc,ge(m.J,m.G,tc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var U=a;if(m.na=Ap(m,m.L?m.ba:null,m.W),U.L){tp(m.h,U);var ee=U,Ue=m.O;Ue&&(ee.H=Ue),ee.D&&(Wu(ee),ma(ee)),m.g=U}else wp(m);d.i.length>0&&wa(d)}else pe[0]!="stop"&&pe[0]!="close"||zr(d,7);else d.I==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?zr(d,7):Ju(d):pe[0]!="noop"&&d.l&&d.l.qa(pe),d.A=0)}}qn(4)}catch{}}var Jw=class{constructor(a,c){this.g=a,this.map=c}};function Jf(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Zf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ep(a){return a.h?1:a.g?a.g.size:0}function Gu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Ku(a,c){a.g?a.g.add(c):a.h=c}function tp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Jf.prototype.cancel=function(){if(this.i=np(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function np(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.G);return c}return R(a.i)}var rp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zw(a,c){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const m=a[d].indexOf("=");let x,D=null;m>=0?(x=a[d].substring(0,m),D=a[d].substring(m+1)):x=a[d],c(x,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Qn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;a instanceof Qn?(this.l=a.l,Di(this,a.j),this.o=a.o,this.g=a.g,Vi(this,a.u),this.h=a.h,Qu(this,up(a.i)),this.m=a.m):a&&(c=String(a).match(rp))?(this.l=!1,Di(this,c[1]||"",!0),this.o=bi(c[2]||""),this.g=bi(c[3]||"",!0),Vi(this,c[4]),this.h=bi(c[5]||"",!0),Qu(this,c[6]||"",!0),this.m=bi(c[7]||"")):(this.l=!1,this.i=new Mi(null,this.l))}Qn.prototype.toString=function(){const a=[];var c=this.j;c&&a.push(Oi(c,sp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Oi(c,sp,!0),"@"),a.push(Pi(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Oi(d,d.charAt(0)=="/"?nE:tE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Oi(d,sE)),a.join("")},Qn.prototype.resolve=function(a){const c=on(this);let d=!!a.j;d?Di(c,a.j):d=!!a.o,d?c.o=a.o:d=!!a.g,d?c.g=a.g:d=a.u!=null;var m=a.h;if(d)Vi(c,a.u);else if(d=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var x=c.h.lastIndexOf("/");x!=-1&&(m=c.h.slice(0,x+1)+m)}if(x=m,x==".."||x==".")m="";else if(x.indexOf("./")!=-1||x.indexOf("/.")!=-1){m=x.lastIndexOf("/",0)==0,x=x.split("/");const D=[];for(let U=0;U<x.length;){const ee=x[U++];ee=="."?m&&U==x.length&&D.push(""):ee==".."?((D.length>1||D.length==1&&D[0]!="")&&D.pop(),m&&U==x.length&&D.push("")):(D.push(ee),m=!0)}m=D.join("/")}else m=x}return d?c.h=m:d=a.i.toString()!=="",d?Qu(c,up(a.i)):d=!!a.m,d&&(c.m=a.m),c};function on(a){return new Qn(a)}function Di(a,c,d){a.j=d?bi(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Vi(a,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);a.u=c}else a.u=null}function Qu(a,c,d){c instanceof Mi?(a.i=c,iE(a.i,a.l)):(d||(c=Oi(c,rE)),a.i=new Mi(c,a.l))}function ge(a,c,d){a.i.set(c,d)}function ga(a){return ge(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function bi(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Oi(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,eE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function eE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var sp=/[#\/\?@]/g,tE=/[#\?:]/g,nE=/[#\?]/g,rE=/[#\?@]/g,sE=/#/g;function Mi(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Ur(a){a.g||(a.g=new Map,a.h=0,a.i&&Zw(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=Mi.prototype,t.add=function(a,c){Ur(this),this.i=null,a=Is(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function ip(a,c){Ur(a),c=Is(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function op(a,c){return Ur(a),c=Is(a,c),a.g.has(c)}t.forEach=function(a,c){Ur(this),this.g.forEach(function(d,m){d.forEach(function(x){a.call(c,x,m,this)},this)},this)};function ap(a,c){Ur(a);let d=[];if(typeof c=="string")op(a,c)&&(d=d.concat(a.g.get(Is(a,c))));else for(a=Array.from(a.g.values()),c=0;c<a.length;c++)d=d.concat(a[c]);return d}t.set=function(a,c){return Ur(this),this.i=null,a=Is(this,a),op(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=ap(this,a),a.length>0?String(a[0]):c):c};function lp(a,c,d){ip(a,c),d.length>0&&(a.i=null,a.g.set(Is(a,c),R(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(let m=0;m<c.length;m++){var d=c[m];const x=Pi(d);d=ap(this,d);for(let D=0;D<d.length;D++){let U=x;d[D]!==""&&(U+="="+Pi(d[D])),a.push(U)}}return this.i=a.join("&")};function up(a){const c=new Mi;return c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),c}function Is(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function iE(a,c){c&&!a.j&&(Ur(a),a.i=null,a.g.forEach(function(d,m){const x=m.toLowerCase();m!=x&&(ip(this,m),lp(this,x,d))},a)),a.j=c}function oE(a,c){const d=new ne;if(o.Image){const m=new Image;m.onload=f(Xn,d,"TestLoadImage: loaded",!0,c,m),m.onerror=f(Xn,d,"TestLoadImage: error",!1,c,m),m.onabort=f(Xn,d,"TestLoadImage: abort",!1,c,m),m.ontimeout=f(Xn,d,"TestLoadImage: timeout",!1,c,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else c(!1)}function aE(a,c){const d=new ne,m=new AbortController,x=setTimeout(()=>{m.abort(),Xn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:m.signal}).then(D=>{clearTimeout(x),D.ok?Xn(d,"TestPingServer: ok",!0,c):Xn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(x),Xn(d,"TestPingServer: error",!1,c)})}function Xn(a,c,d,m,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),m(d)}catch{}}function lE(){this.g=new fa}function Xu(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Xu,pa),Xu.prototype.g=function(){return new ya(this.i,this.h)};function ya(a,c){je.call(this),this.H=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(ya,je),t=ya.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=c,this.readyState=1,ji(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(c.body=a),(this.H||o).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Li(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ji(this)),this.g&&(this.readyState=3,ji(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;cp(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function cp(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Li(this):ji(this),this.readyState==3&&cp(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Li(this))},t.Na=function(a){this.g&&(this.response=a,Li(this))},t.ga=function(){this.g&&Li(this)};function Li(a){a.readyState=4,a.l=null,a.j=null,a.B=null,ji(a)}t.setRequestHeader=function(a,c){this.A.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function ji(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ya.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function hp(a){let c="";return K(a,function(d,m){c+=m,c+=":",c+=d,c+=`\r
`}),c}function Yu(a,c,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=hp(d),typeof a=="string"?d!=null&&Pi(d):ge(a,c,d))}function Re(a){je.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Re,je);var uE=/^https?$/i,cE=["POST","PUT"];t=Re.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,c,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():qf.g(),this.g.onreadystatechange=y(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(D){dp(this,D);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var x in m)d.set(x,m[x]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const D of m.keys())d.set(D,m.get(D));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),x=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(cE,c,void 0)>=0)||m||x||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,U]of d)this.g.setRequestHeader(D,U);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(D){dp(this,D)}};function dp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.o=5,fp(a),_a(a)}function fp(a){a.A||(a.A=!0,Fe(a,"complete"),Fe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Fe(this,"complete"),Fe(this,"abort"),_a(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_a(this,!0)),Re.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?pp(this):this.Xa())},t.Xa=function(){pp(this)};function pp(a){if(a.h&&typeof i<"u"){if(a.v&&Yn(a)==4)setTimeout(a.Ca.bind(a),0);else if(Fe(a,"readystatechange"),Yn(a)==4){a.h=!1;try{const D=a.ca();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var m;if(m=D===0){let U=String(a.D).match(rp)[1]||null;!U&&o.self&&o.self.location&&(U=o.self.location.protocol.slice(0,-1)),m=!uE.test(U?U.toLowerCase():"")}d=m}if(d)Fe(a,"complete"),Fe(a,"success");else{a.o=6;try{var x=Yn(a)>2?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.ca()+"]",fp(a)}}finally{_a(a)}}}}function _a(a,c){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,c||Fe(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Yn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Yn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),zu(c)}};function mp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function hE(a){const c={};a=(a.g&&Yn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(T(a[m]))continue;var d=Qw(a[m]);const x=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=c[x]||[];c[x]=D,D.push(d)}Z(c,function(m){return m.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fi(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function gp(a){this.za=0,this.i=[],this.j=new ne,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Fi("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Fi("baseRetryDelayMs",5e3,a),this.Za=Fi("retryDelaySeedMs",1e4,a),this.Ta=Fi("forwardChannelMaxRetries",2,a),this.va=Fi("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Jf(a&&a.concurrentRequestLimit),this.Ba=new lE,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=gp.prototype,t.ka=8,t.I=1,t.connect=function(a,c,d,m){We(0),this.W=a,this.H=c||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=Ap(this,null,this.W),wa(this)};function Ju(a){if(yp(a),a.I==3){var c=a.V++,d=on(a.J);if(ge(d,"SID",a.M),ge(d,"RID",c),ge(d,"TYPE","terminate"),Ui(a,d),c=new Kn(a,a.j,c),c.M=2,c.A=ga(on(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=c.A,d=!0),d||(c.g=Cp(c.j,null),c.g.ea(c.A)),c.F=Date.now(),ma(c)}Sp(a)}function va(a){a.g&&(ec(a),a.g.cancel(),a.g=null)}function yp(a){va(a),a.v&&(o.clearTimeout(a.v),a.v=null),Ea(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function wa(a){if(!Zf(a.h)&&!a.m){a.m=!0;var c=a.Ea;F||g(),z||(F(),z=!0),v.add(c,a),a.D=0}}function dE(a,c){return ep(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=c.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=B(h(a.Ea,a,c),Ip(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const x=new Kn(this,this.j,a);let D=this.o;if(this.U&&(D?(D=fe(D),Zt(D,this.U)):D=this.U),this.u!==null||this.R||(x.J=D,D=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=vp(this,x,c),d=on(this.J),ge(d,"RID",a),ge(d,"CVER",22),this.G&&ge(d,"X-HTTP-Session-Id",this.G),Ui(this,d),D&&(this.R?c="headers="+Pi(hp(D))+"&"+c:this.u&&Yu(d,this.u,D)),Ku(this.h,x),this.Ra&&ge(d,"TYPE","init"),this.S?(ge(d,"$req",c),ge(d,"SID","null"),x.U=!0,Hu(x,d,null)):Hu(x,d,c),this.I=2}}else this.I==3&&(a?_p(this,a):this.i.length==0||Zf(this.h)||_p(this))};function _p(a,c){var d;c?d=c.l:d=a.V++;const m=on(a.J);ge(m,"SID",a.M),ge(m,"RID",d),ge(m,"AID",a.K),Ui(a,m),a.u&&a.o&&Yu(m,a.u,a.o),d=new Kn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),c&&(a.i=c.G.concat(a.i)),c=vp(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Ku(a.h,d),Hu(d,m,c)}function Ui(a,c){a.H&&K(a.H,function(d,m){ge(c,m,d)}),a.l&&K({},function(d,m){ge(c,m,d)})}function vp(a,c,d){d=Math.min(a.i.length,d);const m=a.l?h(a.l.Ka,a.l,a):null;e:{var x=a.i;let ee=-1;for(;;){const Ue=["count="+d];ee==-1?d>0?(ee=x[0].g,Ue.push("ofs="+ee)):ee=0:Ue.push("ofs="+ee);let pe=!0;for(let qe=0;qe<d;qe++){var D=x[qe].g;const an=x[qe].map;if(D-=ee,D<0)ee=Math.max(0,x[qe].g-100),pe=!1;else try{D="req"+D+"_"||"";try{var U=an instanceof Map?an:Object.entries(an);for(const[Br,Jn]of U){let Zn=Jn;l(Jn)&&(Zn=Ri(Jn)),Ue.push(D+Br+"="+encodeURIComponent(Zn))}}catch(Br){throw Ue.push(D+"type="+encodeURIComponent("_badmap")),Br}}catch{m&&m(an)}}if(pe){U=Ue.join("&");break e}}U=void 0}return a=a.i.splice(0,d),c.G=a,U}function wp(a){if(!a.g&&!a.v){a.Y=1;var c=a.Da;F||g(),z||(F(),z=!0),v.add(c,a),a.A=0}}function Zu(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=B(h(a.Da,a),Ip(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Ep(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=B(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,We(10),va(this),Ep(this))};function ec(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Ep(a){a.g=new Kn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var c=on(a.na);ge(c,"RID","rpc"),ge(c,"SID",a.M),ge(c,"AID",a.K),ge(c,"CI",a.F?"0":"1"),!a.F&&a.ia&&ge(c,"TO",a.ia),ge(c,"TYPE","xmlhttp"),Ui(a,c),a.u&&a.o&&Yu(c,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=ga(on(c)),d.u=null,d.R=!0,Qf(d,a)}t.Va=function(){this.C!=null&&(this.C=null,va(this),Zu(this),We(19))};function Ea(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Tp(a,c){var d=null;if(a.g==c){Ea(a),ec(a),a.g=null;var m=2}else if(Gu(a.h,c))d=c.G,tp(a.h,c),m=1;else return;if(a.I!=0){if(c.o)if(m==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var x=a.D;m=Es(),Fe(m,new P(m,d)),wa(a)}else wp(a);else if(x=c.m,x==3||x==0&&c.X>0||!(m==1&&dE(a,c)||m==2&&Zu(a)))switch(d&&d.length>0&&(c=a.h,c.i=c.i.concat(d)),x){case 1:zr(a,5);break;case 4:zr(a,10);break;case 3:zr(a,6);break;default:zr(a,2)}}}function Ip(a,c){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*c}function zr(a,c){if(a.j.info("Error code "+c),c==2){var d=h(a.bb,a),m=a.Ua;const x=!m;m=new Qn(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Di(m,"https"),ga(m),x?oE(m.toString(),d):aE(m.toString(),d)}else We(2);a.I=0,a.l&&a.l.pa(c),Sp(a),yp(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),We(2)):(this.j.info("Failed to ping google.com"),We(1))};function Sp(a){if(a.I=0,a.ja=[],a.l){const c=np(a.h);(c.length!=0||a.i.length!=0)&&(N(a.ja,c),N(a.ja,a.i),a.h.i.length=0,R(a.i),a.i.length=0),a.l.oa()}}function Ap(a,c,d){var m=d instanceof Qn?on(d):new Qn(d);if(m.g!="")c&&(m.g=c+"."+m.g),Vi(m,m.u);else{var x=o.location;m=x.protocol,c=c?c+"."+x.hostname:x.hostname,x=+x.port;const D=new Qn(null);m&&Di(D,m),c&&(D.g=c),x&&Vi(D,x),d&&(D.h=d),m=D}return d=a.G,c=a.wa,d&&c&&ge(m,d,c),ge(m,"VER",a.ka),Ui(a,m),m}function Cp(a,c,d){if(c&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Aa&&!a.ma?new Re(new Xu({ab:d})):new Re(a.ma),c.Fa(a.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Rp(){}t=Rp.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Ta(){}Ta.prototype.g=function(a,c){return new At(a,c)};function At(a,c){je.call(this),this.g=new gp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(a?a["X-WebChannel-Client-Profile"]=c.sa:a={"X-WebChannel-Client-Profile":c.sa}),this.g.U=a,(a=c&&c.Qb)&&!T(a)&&(this.g.u=a),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!T(c)&&(this.g.G=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Ss(this)}p(At,je),At.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){Ju(this.g)},At.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Ri(a),a=d);c.i.push(new Jw(c.Ya++,a)),c.I==3&&wa(c)},At.prototype.N=function(){this.g.l=null,delete this.j,Ju(this.g),delete this.g,At.Z.N.call(this)};function kp(a){nn.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}p(kp,nn);function xp(){ws.call(this),this.status=1}p(xp,ws);function Ss(a){this.g=a}p(Ss,Rp),Ss.prototype.ra=function(){Fe(this.g,"a")},Ss.prototype.qa=function(a){Fe(this.g,new kp(a))},Ss.prototype.pa=function(a){Fe(this.g,new xp)},Ss.prototype.oa=function(){Fe(this.g,"b")},Ta.prototype.createWebChannel=Ta.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,C0=function(){return new Ta},A0=function(){return Es()},S0=rn,Wh={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},sn.NO_ERROR=0,sn.TIMEOUT=8,sn.HTTP_ERROR=6,hl=sn,Gn.COMPLETE="complete",I0=Gn,be.EventType=Wn,Wn.OPEN="a",Wn.CLOSE="b",Wn.ERROR="c",Wn.MESSAGE="d",je.prototype.listen=je.prototype.J,Zi=be,Re.prototype.listenOnce=Re.prototype.K,Re.prototype.getLastError=Re.prototype.Ha,Re.prototype.getLastErrorCode=Re.prototype.ya,Re.prototype.getStatus=Re.prototype.ca,Re.prototype.getResponseJson=Re.prototype.La,Re.prototype.getResponseText=Re.prototype.la,Re.prototype.send=Re.prototype.ea,Re.prototype.setWithCredentials=Re.prototype.Fa,T0=Re}).apply(typeof $a<"u"?$a:typeof self<"u"?self:typeof window<"u"?window:{});const Eg="@firebase/firestore",Tg="4.9.2";/**
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
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
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
 */let vi="12.3.0";/**
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
 */const cs=new tf("@firebase/firestore");function Cs(){return cs.logLevel}function H(t,...e){if(cs.logLevel<=ie.DEBUG){const n=e.map(mf);cs.debug(`Firestore (${vi}): ${t}`,...n)}}function Ln(t,...e){if(cs.logLevel<=ie.ERROR){const n=e.map(mf);cs.error(`Firestore (${vi}): ${t}`,...n)}}function ai(t,...e){if(cs.logLevel<=ie.WARN){const n=e.map(mf);cs.warn(`Firestore (${vi}): ${t}`,...n)}}function mf(t){if(typeof t=="string")return t;try{/**
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
 */function Q(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,R0(t,r,n)}function R0(t,e,n){let r=`FIRESTORE (${vi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Ln(r),new Error(r)}function he(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||R0(e,s,r)}function J(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Un{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Sr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class k0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class z2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class B2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class $2{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){he(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Sr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Sr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Sr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(he(typeof r.accessToken=="string",31837,{l:r}),new k0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string",2055,{h:e}),new ot(e)}}class H2{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class W2{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new H2(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ig{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class q2{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,qt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){he(this.o===void 0,3512);const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ig(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(he(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Ig(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function G2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class gf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=G2(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function qh(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Mc(s)===Mc(i)?oe(s,i):Mc(s)?1:-1}return oe(t.length,e.length)}const K2=55296,Q2=57343;function Mc(t){const e=t.charCodeAt(0);return e>=K2&&e<=Q2}function li(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const Sg="__name__";class cn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Q(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return cn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof cn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=cn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return oe(e.length,n.length)}static compareSegments(e,n){const r=cn.isNumericId(e),s=cn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?cn.extractNumericId(e).compare(cn.extractNumericId(n)):qh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ir.fromString(e.substring(4,e.length-2))}}class Ie extends cn{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const X2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends cn{construct(e,n,r){return new Ze(e,n,r)}static isValidIdentifier(e){return X2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Sg}static keyField(){return new Ze([Sg])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new q(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new q(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new q(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(n)}static emptyPath(){return new Ze([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Ie.fromString(e))}static fromName(e){return new G(Ie.fromString(e).popFirst(5))}static empty(){return new G(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Ie(e.slice()))}}/**
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
 */function Y2(t,e,n){if(!n)throw new q(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function J2(t,e,n,r){if(e===!0&&r===!0)throw new q(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ag(t){if(!G.isDocumentKey(t))throw new q(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function x0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function yf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q(12329,{type:typeof t})}function Fo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=yf(t);throw new q(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Le(t,e){const n={typeString:t};return e&&(n.value=e),n}function ra(t,e){if(!x0(t))throw new q(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new q(L.INVALID_ARGUMENT,n);return!0}/**
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
 */const Cg=-62135596800,Rg=1e6;class _e{static now(){return _e.fromMillis(Date.now())}static fromDate(e){return _e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Rg);return new _e(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Cg)throw new q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Rg}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:_e._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ra(e,_e._jsonSchema))return new _e(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Cg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}_e._jsonSchemaVersion="firestore/timestamp/1.0",_e._jsonSchema={type:Le("string",_e._jsonSchemaVersion),seconds:Le("number"),nanoseconds:Le("number")};/**
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
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new _e(0,0))}static max(){return new Y(new _e(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Uo=-1;function Z2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(r===1e9?new _e(n+1,0):new _e(n,r));return new Rr(s,G.empty(),e)}function eC(t){return new Rr(t.readTime,t.key,Uo)}class Rr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Rr(Y.min(),G.empty(),Uo)}static max(){return new Rr(Y.max(),G.empty(),Uo)}}function tC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
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
 */const nC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function wi(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==nC)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(s=>s?O.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new O((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new O((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function sC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ei(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ru{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ru.ce=-1;/**
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
 */const _f=-1;function ku(t){return t==null}function Ql(t){return t===0&&1/t==-1/0}function iC(t){return typeof t=="number"&&Number.isInteger(t)&&!Ql(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const P0="";function oC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=kg(e)),e=aC(t.get(n),e);return kg(e)}function aC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case P0:n+="";break;default:n+=i}}return n}function kg(t){return t+P0+""}/**
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
 */function xg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ps(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function N0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||Je.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ha(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ha(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ha(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ha(this.root,e,this.comparator,!0)}}class Ha{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Je{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Je.RED,this.left=s??Je.EMPTY,this.right=i??Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Je(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Je.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Q(27949);return e+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1;Je.EMPTY=new class{constructor(){this.size=0}get key(){throw Q(57766)}get value(){throw Q(16141)}get color(){throw Q(16727)}get left(){throw Q(29726)}get right(){throw Q(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class He{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Pg(this.data.getIterator())}getIteratorFrom(e){return new Pg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new He(this.comparator);return n.data=e,n}}class Pg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Kt{constructor(e){this.fields=e,e.sort(Ze.comparator)}static empty(){return new Kt([])}unionWith(e){let n=new He(Ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return li(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class D0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class nt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new D0("Invalid base64 string: "+i):i}}(e);return new nt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new nt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const lC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kr(t){if(he(!!t,39018),typeof t=="string"){let e=0;const n=lC.exec(t);if(he(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ne(t.seconds),nanos:Ne(t.nanos)}}function Ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function xr(t){return typeof t=="string"?nt.fromBase64String(t):nt.fromUint8Array(t)}/**
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
 */const V0="server_timestamp",b0="__type__",O0="__previous_value__",M0="__local_write_time__";function vf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[b0])==null?void 0:r.stringValue)===V0}function xu(t){const e=t.mapValue.fields[O0];return vf(e)?xu(e):e}function zo(t){const e=kr(t.mapValue.fields[M0].timestampValue);return new _e(e.seconds,e.nanos)}/**
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
 */class uC{constructor(e,n,r,s,i,o,l,u,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const Xl="(default)";class Bo{constructor(e,n){this.projectId=e,this.database=n||Xl}static empty(){return new Bo("","")}get isDefaultDatabase(){return this.database===Xl}isEqual(e){return e instanceof Bo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const L0="__type__",cC="__max__",Wa={mapValue:{}},j0="__vector__",Yl="value";function Pr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?vf(t)?4:dC(t)?9007199254740991:hC(t)?10:11:Q(28295,{value:t})}function wn(t,e){if(t===e)return!0;const n=Pr(t);if(n!==Pr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return zo(t).isEqual(zo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=kr(s.timestampValue),l=kr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return xr(s.bytesValue).isEqual(xr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ne(s.geoPointValue.latitude)===Ne(i.geoPointValue.latitude)&&Ne(s.geoPointValue.longitude)===Ne(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ne(s.integerValue)===Ne(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ne(s.doubleValue),l=Ne(i.doubleValue);return o===l?Ql(o)===Ql(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return li(t.arrayValue.values||[],e.arrayValue.values||[],wn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(xg(o)!==xg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!wn(o[u],l[u])))return!1;return!0}(t,e);default:return Q(52216,{left:t})}}function $o(t,e){return(t.values||[]).find(n=>wn(n,e))!==void 0}function ui(t,e){if(t===e)return 0;const n=Pr(t),r=Pr(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ne(i.integerValue||i.doubleValue),u=Ne(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Ng(t.timestampValue,e.timestampValue);case 4:return Ng(zo(t),zo(e));case 5:return qh(t.stringValue,e.stringValue);case 6:return function(i,o){const l=xr(i),u=xr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=oe(l[h],u[h]);if(f!==0)return f}return oe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=oe(Ne(i.latitude),Ne(o.latitude));return l!==0?l:oe(Ne(i.longitude),Ne(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Dg(t.arrayValue,e.arrayValue);case 10:return function(i,o){var y,R,N,V;const l=i.fields||{},u=o.fields||{},h=(y=l[Yl])==null?void 0:y.arrayValue,f=(R=u[Yl])==null?void 0:R.arrayValue,p=oe(((N=h==null?void 0:h.values)==null?void 0:N.length)||0,((V=f==null?void 0:f.values)==null?void 0:V.length)||0);return p!==0?p:Dg(h,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Wa.mapValue&&o===Wa.mapValue)return 0;if(i===Wa.mapValue)return 1;if(o===Wa.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const y=qh(u[p],f[p]);if(y!==0)return y;const R=ui(l[u[p]],h[f[p]]);if(R!==0)return R}return oe(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Q(23264,{he:n})}}function Ng(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=kr(t),r=kr(e),s=oe(n.seconds,r.seconds);return s!==0?s:oe(n.nanos,r.nanos)}function Dg(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ui(n[s],r[s]);if(i)return i}return oe(n.length,r.length)}function ci(t){return Gh(t)}function Gh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=kr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return xr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Gh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Gh(n.fields[o])}`;return s+"}"}(t.mapValue):Q(61005,{value:t})}function dl(t){switch(Pr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=xu(t);return e?16+dl(e):16;case 5:return 2*t.stringValue.length;case 6:return xr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+dl(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return ps(r.fields,(i,o)=>{s+=i.length+dl(o)}),s}(t.mapValue);default:throw Q(13486,{value:t})}}function Kh(t){return!!t&&"integerValue"in t}function wf(t){return!!t&&"arrayValue"in t}function Vg(t){return!!t&&"nullValue"in t}function bg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function fl(t){return!!t&&"mapValue"in t}function hC(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[L0])==null?void 0:r.stringValue)===j0}function mo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ps(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=mo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=mo(t.arrayValue.values[n]);return e}return{...t}}function dC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===cC}/**
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
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!fl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=mo(n)}setAll(e){let n=Ze.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=mo(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());fl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];fl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ps(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new bt(mo(this.value))}}function F0(t){const e=[];return ps(t.fields,(n,r)=>{const s=new Ze([n]);if(fl(r)){const i=F0(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Kt(e)}/**
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
 */class lt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new lt(e,0,Y.min(),Y.min(),Y.min(),bt.empty(),0)}static newFoundDocument(e,n,r,s){return new lt(e,1,n,Y.min(),r,s,0)}static newNoDocument(e,n){return new lt(e,2,n,Y.min(),Y.min(),bt.empty(),0)}static newUnknownDocument(e,n){return new lt(e,3,n,Y.min(),Y.min(),bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Jl{constructor(e,n){this.position=e,this.inclusive=n}}function Og(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=ui(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Mg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Zl{constructor(e,n="asc"){this.field=e,this.dir=n}}function fC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class U0{}class Be extends U0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new mC(e,n,r):n==="array-contains"?new _C(e,r):n==="in"?new vC(e,r):n==="not-in"?new wC(e,r):n==="array-contains-any"?new EC(e,r):new Be(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new gC(e,r):new yC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ui(n,this.value)):n!==null&&Pr(this.value)===Pr(n)&&this.matchesComparison(ui(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class En extends U0{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new En(e,n)}matches(e){return z0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function z0(t){return t.op==="and"}function B0(t){return pC(t)&&z0(t)}function pC(t){for(const e of t.filters)if(e instanceof En)return!1;return!0}function Qh(t){if(t instanceof Be)return t.field.canonicalString()+t.op.toString()+ci(t.value);if(B0(t))return t.filters.map(e=>Qh(e)).join(",");{const e=t.filters.map(n=>Qh(n)).join(",");return`${t.op}(${e})`}}function $0(t,e){return t instanceof Be?function(r,s){return s instanceof Be&&r.op===s.op&&r.field.isEqual(s.field)&&wn(r.value,s.value)}(t,e):t instanceof En?function(r,s){return s instanceof En&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&$0(o,s.filters[l]),!0):!1}(t,e):void Q(19439)}function H0(t){return t instanceof Be?function(n){return`${n.field.canonicalString()} ${n.op} ${ci(n.value)}`}(t):t instanceof En?function(n){return n.op.toString()+" {"+n.getFilters().map(H0).join(" ,")+"}"}(t):"Filter"}class mC extends Be{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class gC extends Be{constructor(e,n){super(e,"in",n),this.keys=W0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class yC extends Be{constructor(e,n){super(e,"not-in",n),this.keys=W0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function W0(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class _C extends Be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return wf(n)&&$o(n.arrayValue,this.value)}}class vC extends Be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&$o(this.value.arrayValue,n)}}class wC extends Be{constructor(e,n){super(e,"not-in",n)}matches(e){if($o(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!$o(this.value.arrayValue,n)}}class EC extends Be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!wf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>$o(this.value.arrayValue,r))}}/**
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
 */class TC{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Lg(t,e=null,n=[],r=[],s=null,i=null,o=null){return new TC(t,e,n,r,s,i,o)}function Ef(t){const e=J(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Qh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ku(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ci(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ci(r)).join(",")),e.Te=n}return e.Te}function Tf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!fC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!$0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Mg(t.startAt,e.startAt)&&Mg(t.endAt,e.endAt)}function Xh(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Pu{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function IC(t,e,n,r,s,i,o,l){return new Pu(t,e,n,r,s,i,o,l)}function If(t){return new Pu(t)}function jg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function SC(t){return t.collectionGroup!==null}function go(t){const e=J(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new He(Ze.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Zl(i,r))}),n.has(Ze.keyField().canonicalString())||e.Ie.push(new Zl(Ze.keyField(),r))}return e.Ie}function mn(t){const e=J(t);return e.Ee||(e.Ee=AC(e,go(t))),e.Ee}function AC(t,e){if(t.limitType==="F")return Lg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Zl(s.field,i)});const n=t.endAt?new Jl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Jl(t.startAt.position,t.startAt.inclusive):null;return Lg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Yh(t,e,n){return new Pu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Nu(t,e){return Tf(mn(t),mn(e))&&t.limitType===e.limitType}function q0(t){return`${Ef(mn(t))}|lt:${t.limitType}`}function Rs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>H0(s)).join(", ")}]`),ku(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ci(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ci(s)).join(",")),`Target(${r})`}(mn(t))}; limitType=${t.limitType})`}function Du(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):G.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of go(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const h=Og(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,go(r),s)||r.endAt&&!function(o,l,u){const h=Og(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,go(r),s))}(t,e)}function CC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function G0(t){return(e,n)=>{let r=!1;for(const s of go(t)){const i=RC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function RC(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),h=l.data.field(i);return u!==null&&h!==null?ui(u,h):Q(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q(19790,{direction:t.dir})}}/**
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
 */class ms{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ps(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return N0(this.inner)}size(){return this.innerSize}}/**
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
 */const kC=new Ce(G.comparator);function jn(){return kC}const K0=new Ce(G.comparator);function eo(...t){let e=K0;for(const n of t)e=e.insert(n.key,n);return e}function Q0(t){let e=K0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Yr(){return yo()}function X0(){return yo()}function yo(){return new ms(t=>t.toString(),(t,e)=>t.isEqual(e))}const xC=new Ce(G.comparator),PC=new He(G.comparator);function ae(...t){let e=PC;for(const n of t)e=e.add(n);return e}const NC=new He(oe);function DC(){return NC}/**
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
 */function Sf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ql(e)?"-0":e}}function Y0(t){return{integerValue:""+t}}function VC(t,e){return iC(e)?Y0(e):Sf(t,e)}/**
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
 */class Vu{constructor(){this._=void 0}}function bC(t,e,n){return t instanceof eu?function(s,i){const o={fields:{[b0]:{stringValue:V0},[M0]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&vf(i)&&(i=xu(i)),i&&(o.fields[O0]=i),{mapValue:o}}(n,e):t instanceof Ho?Z0(t,e):t instanceof Wo?ew(t,e):function(s,i){const o=J0(s,i),l=Fg(o)+Fg(s.Ae);return Kh(o)&&Kh(s.Ae)?Y0(l):Sf(s.serializer,l)}(t,e)}function OC(t,e,n){return t instanceof Ho?Z0(t,e):t instanceof Wo?ew(t,e):n}function J0(t,e){return t instanceof tu?function(r){return Kh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class eu extends Vu{}class Ho extends Vu{constructor(e){super(),this.elements=e}}function Z0(t,e){const n=tw(e);for(const r of t.elements)n.some(s=>wn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Wo extends Vu{constructor(e){super(),this.elements=e}}function ew(t,e){let n=tw(e);for(const r of t.elements)n=n.filter(s=>!wn(s,r));return{arrayValue:{values:n}}}class tu extends Vu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Fg(t){return Ne(t.integerValue||t.doubleValue)}function tw(t){return wf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function MC(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ho&&s instanceof Ho||r instanceof Wo&&s instanceof Wo?li(r.elements,s.elements,wn):r instanceof tu&&s instanceof tu?wn(r.Ae,s.Ae):r instanceof eu&&s instanceof eu}(t.transform,e.transform)}class LC{constructor(e,n){this.version=e,this.transformResults=n}}class Pn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pn}static exists(e){return new Pn(void 0,e)}static updateTime(e){return new Pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function pl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class bu{}function nw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new sw(t.key,Pn.none()):new sa(t.key,t.data,Pn.none());{const n=t.data,r=bt.empty();let s=new He(Ze.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new gs(t.key,r,new Kt(s.toArray()),Pn.none())}}function jC(t,e,n){t instanceof sa?function(s,i,o){const l=s.value.clone(),u=zg(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof gs?function(s,i,o){if(!pl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=zg(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(rw(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function _o(t,e,n,r){return t instanceof sa?function(i,o,l,u){if(!pl(i.precondition,o))return l;const h=i.value.clone(),f=Bg(i.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof gs?function(i,o,l,u){if(!pl(i.precondition,o))return l;const h=Bg(i.fieldTransforms,u,o),f=o.data;return f.setAll(rw(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return pl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function FC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=J0(r.transform,s||null);i!=null&&(n===null&&(n=bt.empty()),n.set(r.field,i))}return n||null}function Ug(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&li(r,s,(i,o)=>MC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class sa extends bu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class gs extends bu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function rw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function zg(t,e,n){const r=new Map;he(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,OC(o,l,n[s]))}return r}function Bg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,bC(i,o,e))}return r}class sw extends bu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class UC extends bu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class zC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&jC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=_o(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=_o(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=X0();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=nw(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ae())}isEqual(e){return this.batchId===e.batchId&&li(this.mutations,e.mutations,(n,r)=>Ug(n,r))&&li(this.baseMutations,e.baseMutations,(n,r)=>Ug(n,r))}}class Af{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){he(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return xC}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Af(e,n,r,s)}}/**
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
 */class BC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class $C{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Oe,le;function HC(t){switch(t){case L.OK:return Q(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return Q(15467,{code:t})}}function iw(t){if(t===void 0)return Ln("GRPC error has no .code"),L.UNKNOWN;switch(t){case Oe.OK:return L.OK;case Oe.CANCELLED:return L.CANCELLED;case Oe.UNKNOWN:return L.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return L.INTERNAL;case Oe.UNAVAILABLE:return L.UNAVAILABLE;case Oe.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Oe.NOT_FOUND:return L.NOT_FOUND;case Oe.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Oe.ABORTED:return L.ABORTED;case Oe.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Oe.DATA_LOSS:return L.DATA_LOSS;default:return Q(39323,{code:t})}}(le=Oe||(Oe={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function WC(){return new TextEncoder}/**
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
 */const qC=new Ir([4294967295,4294967295],0);function $g(t){const e=WC().encode(t),n=new E0;return n.update(e),new Uint8Array(n.digest())}function Hg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ir([n,r],0),new Ir([s,i],0)]}class Cf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new to(`Invalid padding: ${n}`);if(r<0)throw new to(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new to(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new to(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Ir.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Ir.fromNumber(r)));return s.compare(qC)===1&&(s=new Ir([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=$g(e),[r,s]=Hg(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Cf(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=$g(e),[r,s]=Hg(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class to extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ou{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ia.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ou(Y.min(),s,new Ce(oe),jn(),ae())}}class ia{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ia(r,n,ae(),ae(),ae())}}/**
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
 */class ml{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class ow{constructor(e,n){this.targetId=e,this.Ce=n}}class aw{constructor(e,n,r=nt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Wg{constructor(){this.ve=0,this.Fe=qg(),this.Me=nt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ae(),n=ae(),r=ae();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Q(38017,{changeType:i})}}),new ia(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=qg()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,he(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class GC{constructor(e){this.Ge=e,this.ze=new Map,this.je=jn(),this.Je=qa(),this.He=qa(),this.Ye=new Ce(oe)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Q(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Xh(i))if(r===0){const o=new G(i.path);this.et(n,o,lt.newNoDocument(o,Y.min()))}else he(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=xr(r).toUint8Array()}catch(u){if(u instanceof D0)return ai("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Cf(o,s,i)}catch(u){return ai(u instanceof to?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Xh(l.target)){const u=new G(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,lt.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=ae();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Ou(e,n,this.Ye,this.je,r);return this.je=jn(),this.Je=qa(),this.He=qa(),this.Ye=new Ce(oe),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Wg,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new He(oe),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new He(oe),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Wg),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function qa(){return new Ce(G.comparator)}function qg(){return new Ce(G.comparator)}const KC={asc:"ASCENDING",desc:"DESCENDING"},QC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},XC={and:"AND",or:"OR"};class YC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Jh(t,e){return t.useProto3Json||ku(e)?e:{value:e}}function nu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function JC(t,e){return nu(t,e.toTimestamp())}function gn(t){return he(!!t,49232),Y.fromTimestamp(function(n){const r=kr(n);return new _e(r.seconds,r.nanos)}(t))}function Rf(t,e){return Zh(t,e).canonicalString()}function Zh(t,e){const n=function(s){return new Ie(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function uw(t){const e=Ie.fromString(t);return he(pw(e),10190,{key:e.toString()}),e}function ed(t,e){return Rf(t.databaseId,e.path)}function Lc(t,e){const n=uw(e);if(n.get(1)!==t.databaseId.projectId)throw new q(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(hw(n))}function cw(t,e){return Rf(t.databaseId,e)}function ZC(t){const e=uw(t);return e.length===4?Ie.emptyPath():hw(e)}function td(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function hw(t){return he(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Gg(t,e,n){return{name:ed(t,e),fields:n.value.mapValue.fields}}function eR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Q(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(he(f===void 0||typeof f=="string",58123),nt.fromBase64String(f||"")):(he(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),nt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?L.UNKNOWN:iw(h.code);return new q(f,h.message||"")}(o);n=new aw(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Lc(t,r.document.name),i=gn(r.document.updateTime),o=r.document.createTime?gn(r.document.createTime):Y.min(),l=new bt({mapValue:{fields:r.document.fields}}),u=lt.newFoundDocument(s,i,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new ml(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Lc(t,r.document),i=r.readTime?gn(r.readTime):Y.min(),o=lt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new ml([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Lc(t,r.document),i=r.removedTargetIds||[];n=new ml([],i,s,null)}else{if(!("filter"in e))return Q(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new $C(s,i),l=r.targetId;n=new ow(l,o)}}return n}function tR(t,e){let n;if(e instanceof sa)n={update:Gg(t,e.key,e.value)};else if(e instanceof sw)n={delete:ed(t,e.key)};else if(e instanceof gs)n={update:Gg(t,e.key,e.data),updateMask:cR(e.fieldMask)};else{if(!(e instanceof UC))return Q(16599,{Vt:e.type});n={verify:ed(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof eu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ho)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Wo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof tu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw Q(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:JC(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Q(27497)}(t,e.precondition)),n}function nR(t,e){return t&&t.length>0?(he(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?gn(s.updateTime):gn(i);return o.isEqual(Y.min())&&(o=gn(i)),new LC(o,s.transformResults||[])}(n,e))):[]}function rR(t,e){return{documents:[cw(t,e.path)]}}function sR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=cw(t,s);const i=function(h){if(h.length!==0)return fw(En.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:ks(y.field),direction:aR(y.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Jh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:s}}function iR(t){let e=ZC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){he(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const y=dw(p);return y instanceof En&&B0(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(y=>function(N){return new Zl(xs(N.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(p){let y;return y=typeof p=="object"?p.value:p,ku(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(p){const y=!!p.before,R=p.values||[];return new Jl(R,y)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const y=!p.before,R=p.values||[];return new Jl(R,y)}(n.endAt)),IC(e,s,o,i,l,"F",u,h)}function oR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function dw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=xs(n.unaryFilter.field);return Be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=xs(n.unaryFilter.field);return Be.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=xs(n.unaryFilter.field);return Be.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=xs(n.unaryFilter.field);return Be.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Q(61313);default:return Q(60726)}}(t):t.fieldFilter!==void 0?function(n){return Be.create(xs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Q(58110);default:return Q(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return En.create(n.compositeFilter.filters.map(r=>dw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Q(1026)}}(n.compositeFilter.op))}(t):Q(30097,{filter:t})}function aR(t){return KC[t]}function lR(t){return QC[t]}function uR(t){return XC[t]}function ks(t){return{fieldPath:t.canonicalString()}}function xs(t){return Ze.fromServerFormat(t.fieldPath)}function fw(t){return t instanceof Be?function(n){if(n.op==="=="){if(bg(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NAN"}};if(Vg(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(bg(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NOT_NAN"}};if(Vg(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ks(n.field),op:lR(n.op),value:n.value}}}(t):t instanceof En?function(n){const r=n.getFilters().map(s=>fw(s));return r.length===1?r[0]:{compositeFilter:{op:uR(n.op),filters:r}}}(t):Q(54877,{filter:t})}function cR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function pw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class hr{constructor(e,n,r,s,i=Y.min(),o=Y.min(),l=nt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new hr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class hR{constructor(e){this.yt=e}}function dR(t){const e=iR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Yh(e,e.limit,"L"):e}/**
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
 */class fR{constructor(){this.Cn=new pR}addToCollectionParentIndex(e,n){return this.Cn.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(Rr.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(Rr.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class pR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new He(Ie.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new He(Ie.comparator)).toArray()}}/**
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
 */const Kg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},mw=41943040;class gt{static withCacheSize(e){return new gt(e,gt.DEFAULT_COLLECTION_PERCENTILE,gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */gt.DEFAULT_COLLECTION_PERCENTILE=10,gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,gt.DEFAULT=new gt(mw,gt.DEFAULT_COLLECTION_PERCENTILE,gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),gt.DISABLED=new gt(-1,0,0);/**
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
 */class hi{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new hi(0)}static cr(){return new hi(-1)}}/**
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
 */const Qg="LruGarbageCollector",mR=1048576;function Xg([t,e],[n,r]){const s=oe(t,n);return s===0?oe(e,r):s}class gR{constructor(e){this.Ir=e,this.buffer=new He(Xg),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Xg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class yR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){H(Qg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ei(n)?H(Qg,"Ignoring IndexedDB error during garbage collection: ",n):await wi(n)}await this.Vr(3e5)})}}class _R{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return O.resolve(Ru.ce);const r=new gR(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(Kg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Kg):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Cs()<=ie.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function vR(t,e){return new _R(t,e)}/**
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
 */class wR{constructor(){this.changes=new ms(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,lt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ER{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class TR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&_o(r.mutation,s,Kt.empty(),_e.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ae()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ae()){const s=Yr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=eo();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Yr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ae()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=jn();const o=yo(),l=function(){return yo()}();return n.forEach((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof gs)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),_o(f.mutation,h,f.mutation.getFieldMask(),_e.now())):o.set(h.key,Kt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>l.set(h,new ER(f,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=yo();let s=new Ce((o,l)=>o-l),i=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Kt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(s.get(l.batchId)||ae()).add(u);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=X0();f.forEach(y=>{if(!i.has(y)){const R=nw(n.get(y),r.get(y));R!==null&&p.set(y,R),i=i.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):SC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):O.resolve(Yr());let l=Uo,u=i;return o.next(h=>O.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?O.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,ae())).next(f=>({batchId:l,changes:Q0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let s=eo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=eo();return this.indexManager.getCollectionParents(e,i).next(l=>O.forEach(l,u=>{const h=function(p,y){return new Pu(y,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,y)=>{o=o.insert(p,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,lt.newInvalidDocument(f)))});let l=eo();return o.forEach((u,h)=>{const f=i.get(u);f!==void 0&&_o(f.mutation,h,Kt.empty(),_e.now()),Du(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class IR{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return O.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:gn(s.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:dR(s.bundledQuery),readTime:gn(s.readTime)}}(n)),O.resolve()}}/**
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
 */class SR{constructor(){this.overlays=new Ce(G.comparator),this.qr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Yr();return O.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const s=Yr(),i=n.length+1,o=new G(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return O.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ce((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Yr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Yr(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return O.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new BC(n,r));let i=this.qr.get(n);i===void 0&&(i=ae(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
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
 */class AR{constructor(){this.sessionToken=nt.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
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
 */class kf{constructor(){this.Qr=new He(Ge.$r),this.Ur=new He(Ge.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Ge(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new Ge(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new G(new Ie([])),r=new Ge(n,e),s=new Ge(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new G(new Ie([])),r=new Ge(n,e),s=new Ge(n,e+1);let i=ae();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ge(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ge{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return G.comparator(e.key,n.key)||oe(e.Yr,n.Yr)}static Kr(e,n){return oe(e.Yr,n.Yr)||G.comparator(e.key,n.key)}}/**
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
 */class CR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new He(Ge.$r)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new zC(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Zr=this.Zr.add(new Ge(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return O.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?_f:this.tr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ge(n,0),s=new Ge(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const l=this.Xr(o.Yr);i.push(l)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new He(oe);return n.forEach(s=>{const i=new Ge(s,0),o=new Ge(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],l=>{r=r.add(l.Yr)})}),O.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;G.isDocumentKey(i)||(i=i.child(""));const o=new Ge(new G(i),0);let l=new He(oe);return this.Zr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.Yr)),!0)},o),O.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){he(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return O.forEach(n.mutations,s=>{const i=new Ge(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new Ge(n,0),s=this.Zr.firstAfterOrEqual(r);return O.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class RR{constructor(e){this.ri=e,this.docs=function(){return new Ce(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():lt.newInvalidDocument(n))}getEntries(e,n){let r=jn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():lt.newInvalidDocument(s))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=jn();const o=n.path,l=new G(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||tC(eC(f),r)<=0||(s.has(f.key)||Du(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return O.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Q(9500)}ii(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new kR(this)}getSize(e){return O.resolve(this.size)}}class kR extends wR{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class xR{constructor(e){this.persistence=e,this.si=new ms(n=>Ef(n),Tf),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.oi=0,this._i=new kf,this.targetCount=0,this.ai=hi.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),O.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new hi(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Pr(n),O.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),O.waitFor(i).next(()=>s)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this._i.containsKey(n))}}/**
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
 */class gw{constructor(e,n){this.ui={},this.overlays={},this.ci=new Ru(0),this.li=!1,this.li=!0,this.hi=new AR,this.referenceDelegate=e(this),this.Pi=new xR(this),this.indexManager=new fR,this.remoteDocumentCache=function(s){return new RR(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new hR(n),this.Ii=new IR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new SR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new CR(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const s=new PR(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return O.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class PR extends rC{constructor(e){super(),this.currentSequenceNumber=e}}class xf{constructor(e){this.persistence=e,this.Ri=new kf,this.Vi=null}static mi(e){return new xf(e)}get fi(){if(this.Vi)return this.Vi;throw Q(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),O.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.fi,r=>{const s=G.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,Y.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return O.or([()=>O.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class ru{constructor(e,n){this.persistence=e,this.pi=new ms(r=>oC(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=vR(this,n)}static mi(e,n){return new ru(e,n)}Ei(){}di(e){return O.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return O.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?O.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,i.removeEntry(o,Y.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),O.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),O.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=dl(e.data.value)),n}br(e,n,r){return O.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return O.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Pf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=ae(),s=ae();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Pf(e,n.fromCache,r,s)}}/**
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
 */class NR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class DR{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return wI()?8:sC(ct())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new NR;return this.Ss(e,n,o).next(l=>{if(i.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(Cs()<=ie.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Rs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),O.resolve()):(Cs()<=ie.DEBUG&&H("QueryEngine","Query:",Rs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Cs()<=ie.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Rs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mn(n))):O.resolve())}ys(e,n){if(jg(n))return O.resolve(null);let r=mn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Yh(n,null,"F"),r=mn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ae(...i);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ds(n,l);return this.Cs(n,h,o,u.readTime)?this.ys(e,Yh(n,null,"F")):this.vs(e,h,n,u)}))})))}ws(e,n,r,s){return jg(n)||s.isEqual(Y.min())?O.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?O.resolve(null):(Cs()<=ie.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Rs(n)),this.vs(e,o,n,Z2(s,Uo)).next(l=>l))})}Ds(e,n){let r=new He(G0(e));return n.forEach((s,i)=>{Du(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return Cs()<=ie.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Rs(n)),this.ps.getDocumentsMatchingQuery(e,n,Rr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Nf="LocalStore",VR=3e8;class bR{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Ce(oe),this.xs=new ms(i=>Ef(i),Tf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new TR(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function OR(t,e,n,r){return new bR(t,e,n,r)}async function yw(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=ae();for(const h of s){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ls:h,removedBatchIds:o,addedBatchIds:l}))})})}function MR(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,y=p.keys();let R=O.resolve();return y.forEach(N=>{R=R.next(()=>f.getEntry(u,N)).next(V=>{const M=h.docVersions.get(N);he(M!==null,48541),V.version.compareTo(M)<0&&(p.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),f.addEntry(V)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ae();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function _w(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function LR(t,e){const n=J(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const l=[];e.targetChanges.forEach((f,p)=>{const y=s.get(p);if(!y)return;l.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p)));let R=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?R=R.withResumeToken(nt.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,r)),s=s.insert(p,R),function(V,M,S){return V.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=VR?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(y,R,f)&&l.push(n.Pi.updateTargetData(i,R))});let u=jn(),h=ae();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(jR(i,o,e.documentUpdates).next(f=>{u=f.ks,h=f.qs})),!r.isEqual(Y.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next(p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return O.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.Ms=s,i))}function jR(t,e,n){let r=ae(),s=ae();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=jn();return n.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H(Nf,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{ks:o,qs:s}})}function FR(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=_f),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function UR(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,O.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new hr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function nd(t,e,n){const r=J(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ei(o))throw o;H(Nf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Yg(t,e,n){const r=J(t);let s=Y.min(),i=ae();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=J(u),y=p.xs.get(f);return y!==void 0?O.resolve(p.Ms.get(y)):p.Pi.getTargetData(h,f)}(r,o,mn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:Y.min(),n?i:ae())).next(l=>(zR(r,CC(e),l),{documents:l,Qs:i})))}function zR(t,e,n){let r=t.Os.get(e)||Y.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class Jg{constructor(){this.activeTargetIds=DC()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class BR{constructor(){this.Mo=new Jg,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Jg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class $R{Oo(e){}shutdown(){}}/**
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
 */const Zg="ConnectivityMonitor";class ey{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){H(Zg,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){H(Zg,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ga=null;function rd(){return Ga===null?Ga=function(){return 268435456+Math.round(2147483648*Math.random())}():Ga++,"0x"+Ga.toString(16)}/**
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
 */const jc="RestConnection",HR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class WR{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Xl?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=rd(),l=this.zo(e,n.toUriEncodedString());H(jc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:h}=new URL(l),f=gi(h);return this.Jo(e,l,u,r,f).then(p=>(H(jc,`Received RPC '${e}' ${o}: `,p),p),p=>{throw ai(jc,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+vi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=HR[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class qR{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const it="WebChannelConnection";class GR extends WR{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=rd();return new Promise((l,u)=>{const h=new T0;h.setWithCredentials(!0),h.listenOnce(I0.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case hl.NO_ERROR:const p=h.getResponseJson();H(it,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case hl.TIMEOUT:H(it,`RPC '${e}' ${o} timed out`),u(new q(L.DEADLINE_EXCEEDED,"Request time out"));break;case hl.HTTP_ERROR:const y=h.getStatus();if(H(it,`RPC '${e}' ${o} failed with status:`,y,"response text:",h.getResponseText()),y>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const N=R==null?void 0:R.error;if(N&&N.status&&N.message){const V=function(S){const E=S.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(E)>=0?E:L.UNKNOWN}(N.status);u(new q(V,N.message))}else u(new q(L.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new q(L.UNAVAILABLE,"Connection failed."));break;default:Q(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{H(it,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);H(it,`RPC '${e}' ${o} sending request:`,s),h.send(n,"POST",f,r,15)})}T_(e,n,r){const s=rd(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=C0(),l=A0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=i.join("");H(it,`Creating RPC '${e}' stream ${s}: ${f}`,u);const p=o.createWebChannel(f,u);this.I_(p);let y=!1,R=!1;const N=new qR({Yo:M=>{R?H(it,`Not sending because RPC '${e}' stream ${s} is closed:`,M):(y||(H(it,`Opening RPC '${e}' stream ${s} transport.`),p.open(),y=!0),H(it,`RPC '${e}' stream ${s} sending:`,M),p.send(M))},Zo:()=>p.close()}),V=(M,S,E)=>{M.listen(S,C=>{try{E(C)}catch(b){setTimeout(()=>{throw b},0)}})};return V(p,Zi.EventType.OPEN,()=>{R||(H(it,`RPC '${e}' stream ${s} transport opened.`),N.o_())}),V(p,Zi.EventType.CLOSE,()=>{R||(R=!0,H(it,`RPC '${e}' stream ${s} transport closed`),N.a_(),this.E_(p))}),V(p,Zi.EventType.ERROR,M=>{R||(R=!0,ai(it,`RPC '${e}' stream ${s} transport errored. Name:`,M.name,"Message:",M.message),N.a_(new q(L.UNAVAILABLE,"The operation could not be completed")))}),V(p,Zi.EventType.MESSAGE,M=>{var S;if(!R){const E=M.data[0];he(!!E,16349);const C=E,b=(C==null?void 0:C.error)||((S=C[0])==null?void 0:S.error);if(b){H(it,`RPC '${e}' stream ${s} received error:`,b);const F=b.status;let z=function(w){const I=Oe[w];if(I!==void 0)return iw(I)}(F),v=b.message;z===void 0&&(z=L.INTERNAL,v="Unknown error status: "+F+" with message "+b.message),R=!0,N.a_(new q(z,v)),p.close()}else H(it,`RPC '${e}' stream ${s} received:`,E),N.u_(E)}}),V(l,S0.STAT_EVENT,M=>{M.stat===Wh.PROXY?H(it,`RPC '${e}' stream ${s} detected buffering proxy`):M.stat===Wh.NOPROXY&&H(it,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{N.__()},0),N}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Fc(){return typeof document<"u"?document:null}/**
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
 */function Mu(t){return new YC(t,!0)}/**
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
 */class vw{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const ty="PersistentStream";class ww{constructor(e,n,r,s,i,o,l,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new vw(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Ln(n.toString()),Ln("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new q(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return H(ty,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(H(ty,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class KR extends ww{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=eR(this.serializer,e),r=function(i){if(!("targetChange"in i))return Y.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?gn(o.readTime):Y.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=td(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=Xh(u)?{documents:rR(i,u)}:{query:sR(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=lw(i,o.resumeToken);const h=Jh(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=nu(i,o.snapshotVersion.toTimestamp());const h=Jh(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=oR(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=td(this.serializer),n.removeTarget=e,this.q_(n)}}class QR extends ww{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return he(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,he(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){he(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=nR(e.writeResults,e.commitTime),r=gn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=td(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>tR(this.serializer,r))};this.q_(n)}}/**
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
 */class XR{}class YR extends XR{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new q(L.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,Zh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(L.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,Zh(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(L.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class JR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ln(n),this.aa=!1):H("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const hs="RemoteStore";class ZR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{ys(this)&&(H(hs,"Restarting streams for network reachability change."),await async function(u){const h=J(u);h.Ea.add(4),await oa(h),h.Ra.set("Unknown"),h.Ea.delete(4),await Lu(h)}(this))})}),this.Ra=new JR(r,s)}}async function Lu(t){if(ys(t))for(const e of t.da)await e(!0)}async function oa(t){for(const e of t.da)await e(!1)}function Ew(t,e){const n=J(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Of(n)?bf(n):Ti(n).O_()&&Vf(n,e))}function Df(t,e){const n=J(t),r=Ti(n);n.Ia.delete(e),r.O_()&&Tw(n,e),n.Ia.size===0&&(r.O_()?r.L_():ys(n)&&n.Ra.set("Unknown"))}function Vf(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ti(t).Y_(e)}function Tw(t,e){t.Va.Ue(e),Ti(t).Z_(e)}function bf(t){t.Va=new GC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ti(t).start(),t.Ra.ua()}function Of(t){return ys(t)&&!Ti(t).x_()&&t.Ia.size>0}function ys(t){return J(t).Ea.size===0}function Iw(t){t.Va=void 0}async function ek(t){t.Ra.set("Online")}async function tk(t){t.Ia.forEach((e,n)=>{Vf(t,e)})}async function nk(t,e){Iw(t),Of(t)?(t.Ra.ha(e),bf(t)):t.Ra.set("Unknown")}async function rk(t,e,n){if(t.Ra.set("Online"),e instanceof aw&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.Va.removeTarget(l))}(t,e)}catch(r){H(hs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await su(t,r)}else if(e instanceof ml?t.Va.Ze(e):e instanceof ow?t.Va.st(e):t.Va.tt(e),!n.isEqual(Y.min()))try{const r=await _w(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Va.Tt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(nt.EMPTY_BYTE_STRING,f.snapshotVersion)),Tw(i,u);const p=new hr(f.target,u,h,f.sequenceNumber);Vf(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H(hs,"Failed to raise snapshot:",r),await su(t,r)}}async function su(t,e,n){if(!Ei(e))throw e;t.Ea.add(1),await oa(t),t.Ra.set("Offline"),n||(n=()=>_w(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H(hs,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Lu(t)})}function Sw(t,e){return e().catch(n=>su(t,n,e))}async function ju(t){const e=J(t),n=Nr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:_f;for(;sk(e);)try{const s=await FR(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,ik(e,s)}catch(s){await su(e,s)}Aw(e)&&Cw(e)}function sk(t){return ys(t)&&t.Ta.length<10}function ik(t,e){t.Ta.push(e);const n=Nr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function Aw(t){return ys(t)&&!Nr(t).x_()&&t.Ta.length>0}function Cw(t){Nr(t).start()}async function ok(t){Nr(t).ra()}async function ak(t){const e=Nr(t);for(const n of t.Ta)e.ea(n.mutations)}async function lk(t,e,n){const r=t.Ta.shift(),s=Af.from(r,e,n);await Sw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ju(t)}async function uk(t,e){e&&Nr(t).X_&&await async function(r,s){if(function(o){return HC(o)&&o!==L.ABORTED}(s.code)){const i=r.Ta.shift();Nr(r).B_(),await Sw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ju(r)}}(t,e),Aw(t)&&Cw(t)}async function ny(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),H(hs,"RemoteStore received new credentials");const r=ys(n);n.Ea.add(3),await oa(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Lu(n)}async function ck(t,e){const n=J(t);e?(n.Ea.delete(2),await Lu(n)):e||(n.Ea.add(2),await oa(n),n.Ra.set("Unknown"))}function Ti(t){return t.ma||(t.ma=function(n,r,s){const i=J(n);return i.sa(),new KR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:ek.bind(null,t),t_:tk.bind(null,t),r_:nk.bind(null,t),H_:rk.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Of(t)?bf(t):t.Ra.set("Unknown")):(await t.ma.stop(),Iw(t))})),t.ma}function Nr(t){return t.fa||(t.fa=function(n,r,s){const i=J(n);return i.sa(),new QR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:ok.bind(null,t),r_:uk.bind(null,t),ta:ak.bind(null,t),na:lk.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await ju(t)):(await t.fa.stop(),t.Ta.length>0&&(H(hs,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class Mf{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Sr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Mf(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lf(t,e){if(Ln("AsyncQueue",`${e}: ${t}`),Ei(t))return new q(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ys{static emptySet(e){return new Ys(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=eo(),this.sortedSet=new Ce(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ys)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ys;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class ry{constructor(){this.ga=new Ce(G.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Q(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class di{constructor(e,n,r,s,i,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new di(e,n,Ys.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Nu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class hk{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class dk{constructor(){this.queries=sy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=J(n),i=s.queries;s.queries=sy(),i.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new q(L.ABORTED,"Firestore shutting down"))}}function sy(){return new ms(t=>q0(t),Nu)}async function fk(t,e){const n=J(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new hk,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Lf(o,`Initialization of query '${Rs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&jf(n)}async function pk(t,e){const n=J(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function mk(t,e){const n=J(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Fa(s)&&(r=!0);o.wa=s}}r&&jf(n)}function gk(t,e,n){const r=J(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function jf(t){t.Ca.forEach(e=>{e.next()})}var sd,iy;(iy=sd||(sd={})).Ma="default",iy.Cache="cache";class yk{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new di(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=di.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==sd.Cache}}/**
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
 */class Rw{constructor(e){this.key=e}}class kw{constructor(e){this.key=e}}class _k{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ae(),this.mutatedKeys=ae(),this.eu=G0(e),this.tu=new Ys(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new ry,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const y=s.get(f),R=Du(this.query,p)?p:null,N=!!y&&this.mutatedKeys.has(y.key),V=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let M=!1;y&&R?y.data.isEqual(R.data)?N!==V&&(r.track({type:3,doc:R}),M=!0):this.su(y,R)||(r.track({type:2,doc:R}),M=!0,(u&&this.eu(R,u)>0||h&&this.eu(R,h)<0)&&(l=!0)):!y&&R?(r.track({type:0,doc:R}),M=!0):y&&!R&&(r.track({type:1,doc:y}),M=!0,(u||h)&&(l=!0)),M&&(R?(o=o.add(R),i=V?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,p)=>function(R,N){const V=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q(20277,{Rt:M})}};return V(R)-V(N)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,h=u!==this.Za;return this.Za=u,o.length!==0||h?{snapshot:new di(this.query,e.tu,i,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ry,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ae(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new kw(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new Rw(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=ae();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return di.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Ff="SyncEngine";class vk{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class wk{constructor(e){this.key=e,this.hu=!1}}class Ek{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ms(l=>q0(l),Nu),this.Iu=new Map,this.Eu=new Set,this.du=new Ce(G.comparator),this.Au=new Map,this.Ru=new kf,this.Vu={},this.mu=new Map,this.fu=hi.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Tk(t,e,n=!0){const r=bw(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await xw(r,e,n,!0),s}async function Ik(t,e){const n=bw(t);await xw(n,e,!0,!1)}async function xw(t,e,n,r){const s=await UR(t.localStore,mn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await Sk(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Ew(t.remoteStore,s),l}async function Sk(t,e,n,r,s){t.pu=(p,y,R)=>async function(V,M,S,E){let C=M.view.ru(S);C.Cs&&(C=await Yg(V.localStore,M.query,!1).then(({documents:v})=>M.view.ru(v,C)));const b=E&&E.targetChanges.get(M.targetId),F=E&&E.targetMismatches.get(M.targetId)!=null,z=M.view.applyChanges(C,V.isPrimaryClient,b,F);return ay(V,M.targetId,z.au),z.snapshot}(t,p,y,R);const i=await Yg(t.localStore,e,!0),o=new _k(e,i.Qs),l=o.ru(i.documents),u=ia.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,u);ay(t,n,h.au);const f=new vk(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function Ak(t,e,n){const r=J(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!Nu(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await nd(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Df(r.remoteStore,s.targetId),id(r,s.targetId)}).catch(wi)):(id(r,s.targetId),await nd(r.localStore,s.targetId,!0))}async function Ck(t,e){const n=J(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Df(n.remoteStore,r.targetId))}async function Rk(t,e,n){const r=bk(t);try{const s=await function(o,l){const u=J(o),h=_e.now(),f=l.reduce((R,N)=>R.add(N.key),ae());let p,y;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let N=jn(),V=ae();return u.Ns.getEntries(R,f).next(M=>{N=M,N.forEach((S,E)=>{E.isValidDocument()||(V=V.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,N)).next(M=>{p=M;const S=[];for(const E of l){const C=FC(E,p.get(E.key).overlayedDocument);C!=null&&S.push(new gs(E.key,C,F0(C.value.mapValue),Pn.exists(!0)))}return u.mutationQueue.addMutationBatch(R,h,S,l)}).next(M=>{y=M;const S=M.applyToLocalDocumentSet(p,V);return u.documentOverlayCache.saveOverlays(R,M.batchId,S)})}).then(()=>({batchId:y.batchId,changes:Q0(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let h=o.Vu[o.currentUser.toKey()];h||(h=new Ce(oe)),h=h.insert(l,u),o.Vu[o.currentUser.toKey()]=h}(r,s.batchId,n),await aa(r,s.changes),await ju(r.remoteStore)}catch(s){const i=Lf(s,"Failed to persist write");n.reject(i)}}async function Pw(t,e){const n=J(t);try{const r=await LR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(he(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?he(o.hu,14607):s.removedDocuments.size>0&&(he(o.hu,42227),o.hu=!1))}),await aa(n,r,e)}catch(r){await wi(r)}}function oy(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=J(o);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const y of p.Sa)y.va(l)&&(h=!0)}),h&&jf(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function kk(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Ce(G.comparator);o=o.insert(i,lt.newNoDocument(i,Y.min()));const l=ae().add(i),u=new Ou(Y.min(),new Map,new Ce(oe),o,l);await Pw(r,u),r.du=r.du.remove(i),r.Au.delete(e),Uf(r)}else await nd(r.localStore,e,!1).then(()=>id(r,e,n)).catch(wi)}async function xk(t,e){const n=J(t),r=e.batch.batchId;try{const s=await MR(n.localStore,e);Dw(n,r,null),Nw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await aa(n,s)}catch(s){await wi(s)}}async function Pk(t,e,n){const r=J(t);try{const s=await function(o,l){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(he(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);Dw(r,e,n),Nw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await aa(r,s)}catch(s){await wi(s)}}function Nw(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function Dw(t,e,n){const r=J(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function id(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||Vw(t,r)})}function Vw(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Df(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Uf(t))}function ay(t,e,n){for(const r of n)r instanceof Rw?(t.Ru.addReference(r.key,e),Nk(t,r)):r instanceof kw?(H(Ff,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||Vw(t,r.key)):Q(19791,{wu:r})}function Nk(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(H(Ff,"New document in limbo: "+n),t.Eu.add(r),Uf(t))}function Uf(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new G(Ie.fromString(e)),r=t.fu.next();t.Au.set(r,new wk(n)),t.du=t.du.insert(n,r),Ew(t.remoteStore,new hr(mn(If(n.path)),r,"TargetPurposeLimboResolution",Ru.ce))}}async function aa(t,e,n){const r=J(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Pf.As(u.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(u,h){const f=J(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>O.forEach(h,y=>O.forEach(y.Es,R=>f.persistence.referenceDelegate.addReference(p,y.targetId,R)).next(()=>O.forEach(y.ds,R=>f.persistence.referenceDelegate.removeReference(p,y.targetId,R)))))}catch(p){if(!Ei(p))throw p;H(Nf,"Failed to update sequence numbers: "+p)}for(const p of h){const y=p.targetId;if(!p.fromCache){const R=f.Ms.get(y),N=R.snapshotVersion,V=R.withLastLimboFreeSnapshotVersion(N);f.Ms=f.Ms.insert(y,V)}}}(r.localStore,i))}async function Dk(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){H(Ff,"User change. New user:",e.toKey());const r=await yw(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new q(L.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await aa(n,r.Ls)}}function Vk(t,e){const n=J(t),r=n.Au.get(e);if(r&&r.hu)return ae().add(r.key);{let s=ae();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function bw(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Pw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kk.bind(null,e),e.Pu.H_=mk.bind(null,e.eventManager),e.Pu.yu=gk.bind(null,e.eventManager),e}function bk(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Pk.bind(null,e),e}class iu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Mu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return OR(this.persistence,new DR,e.initialUser,this.serializer)}Cu(e){return new gw(xf.mi,this.serializer)}Du(e){return new BR}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}iu.provider={build:()=>new iu};class Ok extends iu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){he(this.persistence.referenceDelegate instanceof ru,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new yR(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?gt.withCacheSize(this.cacheSizeBytes):gt.DEFAULT;return new gw(r=>ru.mi(r,n),this.serializer)}}class od{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>oy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Dk.bind(null,this.syncEngine),await ck(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new dk}()}createDatastore(e){const n=Mu(e.databaseInfo.databaseId),r=function(i){return new GR(i)}(e.databaseInfo);return function(i,o,l,u){return new YR(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new ZR(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>oy(this.syncEngine,n,0),function(){return ey.v()?new ey:new $R}())}createSyncEngine(e,n){return function(s,i,o,l,u,h,f){const p=new Ek(s,i,o,l,u,h);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=J(s);H(hs,"RemoteStore shutting down."),i.Ea.add(5),await oa(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}od.provider={build:()=>new od};/**
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
 */class Mk{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ln("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Dr="FirestoreClient";class Lk{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ot.UNAUTHENTICATED,this.clientId=gf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{H(Dr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H(Dr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Sr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Lf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Uc(t,e){t.asyncQueue.verifyOperationInProgress(),H(Dr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await yw(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ly(t,e){t.asyncQueue.verifyOperationInProgress();const n=await jk(t);H(Dr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>ny(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>ny(e.remoteStore,s)),t._onlineComponents=e}async function jk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H(Dr,"Using user provided OfflineComponentProvider");try{await Uc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ai("Error using user provided cache. Falling back to memory cache: "+n),await Uc(t,new iu)}}else H(Dr,"Using default OfflineComponentProvider"),await Uc(t,new Ok(void 0));return t._offlineComponents}async function Ow(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H(Dr,"Using user provided OnlineComponentProvider"),await ly(t,t._uninitializedComponentsProvider._online)):(H(Dr,"Using default OnlineComponentProvider"),await ly(t,new od))),t._onlineComponents}function Fk(t){return Ow(t).then(e=>e.syncEngine)}async function Uk(t){const e=await Ow(t),n=e.eventManager;return n.onListen=Tk.bind(null,e.syncEngine),n.onUnlisten=Ak.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Ik.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Ck.bind(null,e.syncEngine),n}function zk(t,e,n={}){const r=new Sr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const f=new Mk({next:y=>{f.Nu(),o.enqueueAndForget(()=>pk(i,p));const R=y.docs.has(l);!R&&y.fromCache?h.reject(new q(L.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&y.fromCache&&u&&u.source==="server"?h.reject(new q(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),p=new yk(If(l.path),f,{includeMetadataChanges:!0,qa:!0});return fk(i,p)}(await Uk(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Mw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const uy=new Map;/**
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
 */const Lw="firestore.googleapis.com",cy=!0;class hy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new q(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Lw,this.ssl=cy}else this.host=e.host,this.ssl=e.ssl??cy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=mw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<mR)throw new q(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}J2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Mw(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class zf{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new z2;switch(r.type){case"firstParty":return new W2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=uy.get(n);r&&(H("ComponentProvider","Removing Datastore"),uy.delete(n),r.terminate())}(this),Promise.resolve()}}function Bk(t,e,n,r={}){var h;t=Fo(t,zf);const s=gi(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(Lv(`https://${l}`),jv("Firestore",!0)),i.host!==Lw&&i.host!==l&&ai("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!as(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=ot.MOCK_USER;else{f=hI(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new q(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ot(y)}t._authCredentials=new B2(new k0(f,p))}}/**
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
 */class Bf{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Bf(this.firestore,e,this._query)}}class Qe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qo(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qe(this.firestore,e,this._key)}toJSON(){return{type:Qe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ra(n,Qe._jsonSchema))return new Qe(e,r||null,new G(Ie.fromString(n.referencePath)))}}Qe._jsonSchemaVersion="firestore/documentReference/1.0",Qe._jsonSchema={type:Le("string",Qe._jsonSchemaVersion),referencePath:Le("string")};class qo extends Bf{constructor(e,n,r){super(e,n,If(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qe(this.firestore,null,new G(e))}withConverter(e){return new qo(this.firestore,e,this._path)}}function dy(t,e,...n){if(t=Ut(t),arguments.length===1&&(e=gf.newId()),Y2("doc","path",e),t instanceof zf){const r=Ie.fromString(e,...n);return Ag(r),new Qe(t,null,new G(r))}{if(!(t instanceof Qe||t instanceof qo))throw new q(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return Ag(r),new Qe(t.firestore,t instanceof qo?t.converter:null,new G(r))}}/**
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
 */const fy="AsyncQueue";class py{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new vw(this,"async_queue_retry"),this._c=()=>{const r=Fc();r&&H(fy,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Fc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Fc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Sr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ei(e))throw e;H(fy,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Ln("INTERNAL UNHANDLED ERROR: ",my(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Mf.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&Q(47125,{Pc:my(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function my(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class $f extends zf{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new py,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new py(e),this._firestoreClient=void 0,await e}}}function $k(t,e){const n=typeof t=="object"?t:Bv(),r=typeof t=="string"?t:Xl,s=rf(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=uI("firestore");i&&Bk(s,...i)}return s}function jw(t){if(t._terminated)throw new q(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Hk(t),t._firestoreClient}function Hk(t){var r,s,i;const e=t._freezeSettings(),n=function(l,u,h,f){return new uC(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Mw(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new Lk(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Ot{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ot(nt.fromBase64String(e))}catch(n){throw new q(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ot(nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ot._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ra(e,Ot._jsonSchema))return Ot.fromBase64String(e.bytes)}}Ot._jsonSchemaVersion="firestore/bytes/1.0",Ot._jsonSchema={type:Le("string",Ot._jsonSchemaVersion),bytes:Le("string")};/**
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
 */class Hf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Fw{constructor(e){this._methodName=e}}/**
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
 */class yn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:yn._jsonSchemaVersion}}static fromJSON(e){if(ra(e,yn._jsonSchema))return new yn(e.latitude,e.longitude)}}yn._jsonSchemaVersion="firestore/geoPoint/1.0",yn._jsonSchema={type:Le("string",yn._jsonSchemaVersion),latitude:Le("number"),longitude:Le("number")};/**
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
 */class _n{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:_n._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ra(e,_n._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new _n(e.vectorValues);throw new q(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}_n._jsonSchemaVersion="firestore/vectorValue/1.0",_n._jsonSchema={type:Le("string",_n._jsonSchemaVersion),vectorValues:Le("object")};/**
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
 */const Wk=/^__.*__$/;class qk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new gs(e,this.data,this.fieldMask,n,this.fieldTransforms):new sa(e,this.data,n,this.fieldTransforms)}}function Uw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q(40011,{Ac:t})}}class Wf{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Wf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ou(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Uw(this.Ac)&&Wk.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Gk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Mu(e)}Cc(e,n,r,s=!1){return new Wf({Ac:e,methodName:n,Dc:r,path:Ze.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Kk(t){const e=t._freezeSettings(),n=Mu(t._databaseId);return new Gk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Qk(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);Hw("Data must be an object, but it was:",o,r);const l=Bw(r,o);let u,h;if(i.merge)u=new Kt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const y=Xk(e,p,n);if(!o.contains(y))throw new q(L.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);Jk(f,y)||f.push(y)}u=new Kt(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new qk(new bt(l),u,h)}function zw(t,e){if($w(t=Ut(t)))return Hw("Unsupported field value:",e,t),Bw(t,e);if(t instanceof Fw)return function(r,s){if(!Uw(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=zw(l,s.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ut(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return VC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=_e.fromDate(r);return{timestampValue:nu(s.serializer,i)}}if(r instanceof _e){const i=new _e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:nu(s.serializer,i)}}if(r instanceof yn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ot)return{bytesValue:lw(s.serializer,r._byteString)};if(r instanceof Qe){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Rf(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof _n)return function(o,l){return{mapValue:{fields:{[L0]:{stringValue:j0},[Yl]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw l.Sc("VectorValues must only contain numeric values.");return Sf(l.serializer,h)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${yf(r)}`)}(t,e)}function Bw(t,e){const n={};return N0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ps(t,(r,s)=>{const i=zw(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function $w(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof _e||t instanceof yn||t instanceof Ot||t instanceof Qe||t instanceof Fw||t instanceof _n)}function Hw(t,e,n){if(!$w(n)||!x0(n)){const r=yf(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function Xk(t,e,n){if((e=Ut(e))instanceof Hf)return e._internalPath;if(typeof e=="string")return Ww(t,e);throw ou("Field path arguments must be of type string or ",t,!1,void 0,n)}const Yk=new RegExp("[~\\*/\\[\\]]");function Ww(t,e,n){if(e.search(Yk)>=0)throw ou(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Hf(...e.split("."))._internalPath}catch{throw ou(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ou(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new q(L.INVALID_ARGUMENT,l+t+u)}function Jk(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class qw{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Zk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Gw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Zk extends qw{data(){return super.data()}}function Gw(t,e){return typeof e=="string"?Ww(t,e):e instanceof Hf?e._internalPath:e._delegate._internalPath}class ex{convertValue(e,n="none"){switch(Pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(xr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ps(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Yl].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Ne(o.doubleValue));return new _n(n)}convertGeoPoint(e){return new yn(Ne(e.latitude),Ne(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=xu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(zo(e));default:return null}}convertTimestamp(e){const n=kr(e);return new _e(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);he(pw(r),9688,{name:e});const s=new Bo(r.get(1),r.get(3)),i=new G(r.popFirst(5));return s.isEqual(n)||Ln(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function tx(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class no{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ts extends qw{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new gl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Gw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ts._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ts._jsonSchemaVersion="firestore/documentSnapshot/1.0",ts._jsonSchema={type:Le("string",ts._jsonSchemaVersion),bundleSource:Le("string","DocumentSnapshot"),bundleName:Le("string"),bundle:Le("string")};class gl extends ts{data(e={}){return super.data(e)}}class vo{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new no(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new gl(this._firestore,this._userDataWriter,r.key,r,new no(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new gl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new no(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new gl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new no(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:nx(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=vo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=gf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function nx(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q(61501,{type:t})}}/**
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
 */function rx(t){t=Fo(t,Qe);const e=Fo(t.firestore,$f);return zk(jw(e),t._key).then(n=>ax(e,t,n))}vo._jsonSchemaVersion="firestore/querySnapshot/1.0",vo._jsonSchema={type:Le("string",vo._jsonSchemaVersion),bundleSource:Le("string","QuerySnapshot"),bundleName:Le("string"),bundle:Le("string")};class sx extends ex{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ot(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Qe(this.firestore,null,n)}}function ix(t,e,n){t=Fo(t,Qe);const r=Fo(t.firestore,$f),s=tx(t.converter,e,n);return ox(r,[Qk(Kk(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Pn.none())])}function ox(t,e){return function(r,s){const i=new Sr;return r.asyncQueue.enqueueAndForget(async()=>Rk(await Fk(r),s,i)),i.promise}(jw(t),e)}function ax(t,e,n){const r=n.docs.get(e._key),s=new sx(t);return new ts(t,s,e._key,r,new no(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){vi=s})(yi),ii(new ls("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new $f(new $2(r.getProvider("auth-internal")),new q2(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new q(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bo(h.options.projectId,f)}(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Tr(Eg,Tg,e),Tr(Eg,Tg,"esm2020")})();const lx=typeof __firebase_config<"u"?JSON.parse(__firebase_config):{apiKey:"AIzaSyCLPIPwhSkUzoaISxFZlG9F97zRp1u0o9o",authDomain:"financeiro-app-df224.firebaseapp.com",projectId:"financeiro-app-df224",storageBucket:"financeiro-app-df224.firebasestorage.app",messagingSenderId:"1061825731478",appId:"1:1061825731478:web:70c2e8c4c5eb13c56b5bb7"},Kw=zv(lx),zc=F2(Kw),gy=$k(Kw),$r=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],Bc=[{id:1765839177531,month:"Dezembro",year:2025,description:"Seguro do Carro",amount:262.7,type:"despesa",category:"Outros",date:"28/12/2025"},{id:1765839222465,month:"Dezembro",year:2025,description:"Sem Parar ",amount:218.99,type:"despesa",category:"Outros",date:"20/12/2025"},{id:1765839293301,month:"Dezembro",year:2025,description:"Freelance do metropoly",amount:409.67,type:"receita",category:"Freelance",date:"15/12/2025"},{id:1765839336593,month:"Dezembro",year:2025,description:"Praia/Julia",amount:165.62,type:"despesa",category:"Lazer",date:"16/12/2025"},{id:1765839369950,month:"Janeiro",year:2026,description:"Cartão de Credito",amount:3758.37,type:"despesa",category:"Cartão de Crédito ",date:"03/01/2026"},{id:1765839399783,month:"Janeiro",year:2026,description:"Pensão ",amount:1518,type:"receita",category:"Salário",date:"01/01/2026"},{id:1765839422279,month:"Janeiro",year:2026,description:"Bolça PIBC",amount:700,type:"receita",category:"Salário",date:"07/01/2026"},{id:1765839461878,month:"Dezembro",year:2025,description:"Pensão",amount:1518,type:"receita",category:"Salário",date:"01/12/2025"}],$c={"2025_Moradia":350,"2025_Alimentação":450,"2025_Combustível":350,"2025_Cartão de Crédito ":850},Ka={receita:["Salário","Freelance","Investimentos","Reembolso","Outros"],despesa:["Moradia","Alimentação","Transporte","Saúde","Lazer","Educação","Contas Fixas","Outros","Combustível","Cartão de Crédito "]};function ux(){const t=new Date().getMonth(),[e,n]=re.useState($r[t]),[r,s]=re.useState(new Date().getFullYear()),[i,o]=re.useState(null),[l,u]=re.useState(!0),[h,f]=re.useState(""),[p,y]=re.useState([]),[R,N]=re.useState({}),[V,M]=re.useState(Ka),[S,E]=re.useState(""),[C,b]=re.useState(""),[F,z]=re.useState("despesa"),[v,g]=re.useState(""),[w,I]=re.useState(new Date().toISOString().split("T")[0]),[A,k]=re.useState(!1),[T,Ve]=re.useState(2),[zt,zn]=re.useState(null),[Bn,$]=re.useState(""),[K,Z]=re.useState(""),[fe,Ee]=re.useState(""),[Zt,mt]=re.useState(13.25),[en,Tt]=re.useState(12),[It,Ii]=re.useState(null),[Mr,la]=re.useState(""),[_s,ua]=re.useState("despesa"),vs=re.useRef(null);re.useEffect(()=>{const P=RA(zc,B=>{o(B),B||u(!1)});return()=>P()},[]),re.useEffect(()=>{i&&(u(!0),(async()=>{try{const B=dy(gy,"users",i.uid),ne=await rx(B);if(ne.exists()){const te=ne.data();y(te.transactions&&te.transactions.length>0?te.transactions:Bc),N(te.budgets&&Object.keys(te.budgets).length>0?te.budgets:$c),M(te.categories||Ka)}else y(Bc),N($c),M(Ka)}catch(B){console.error("Erro ao buscar dados:",B)}finally{u(!1)}})())},[i]),re.useEffect(()=>{if(i&&!l){const P=async()=>{try{await ix(dy(gy,"users",i.uid),{transactions:p,budgets:R,categories:V,lastUpdated:new Date().toISOString(),email:i.email},{merge:!0})}catch(ne){console.error("Erro ao salvar:",ne)}},B=setTimeout(()=>{P()},1e3);return()=>clearTimeout(B)}},[p,R,V,i,l]);const ca=async()=>{f("");const P=new Sn;try{await KA(zc,P)}catch(B){console.error(B),f("Erro ao fazer login com Google. Tente novamente.")}},Fu=async()=>{await kA(zc),y([])};re.useEffect(()=>{var P;((P=V[F])==null?void 0:P.length)>0&&!V[F].includes(v)&&g(V[F][0])},[F,V]);const Si=()=>{confirm("Isso irá substituir os dados atuais pelos dados do backup de 15/12/2025. Deseja continuar?")&&(y(Bc),N($c),M(Ka),alert("Dados restaurados com sucesso!"))},tn=P=>{if(!P)return new Date;const[B,ne,te]=P.split("/").map(Number);return new Date(te,ne-1,B)},$n=new Date;$n.setHours(0,0,0,0);const je=new Date($n);je.setDate($n.getDate()+7);const Fe=p.reduce((P,B)=>tn(B.date)<=$n?B.type==="receita"?P+B.amount:P-B.amount:P,0),Hn=p.filter(P=>{const B=tn(P.date);return P.type==="despesa"&&B>$n&&B<=je}).sort((P,B)=>tn(P.date)-tn(B.date)),ha=Hn.reduce((P,B)=>P+B.amount,0),Ai=Fe-ha,Uu=()=>{const P={transactions:p,budgets:R,categories:V,exportedAt:new Date().toISOString(),version:"3.0 (Cloud)"},B=document.createElement("a");B.href=`data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(P,null,2))}`,B.download=`financeiro_cloud_backup_${new Date().toLocaleDateString("pt-BR").replace(/\//g,"-")}.json`,B.click()},Lr=P=>{const B=P.target.files[0];if(!B)return;const ne=new FileReader;ne.onload=async te=>{try{const ce=JSON.parse(te.target.result);ce.transactions&&window.confirm(`Importar dados para sua conta na nuvem? Isso substituirá os dados atuais da conta ${i.email}.`)&&(y(ce.transactions),ce.budgets&&N(ce.budgets),ce.categories&&M(ce.categories),alert("Dados carregados! O salvamento automático enviará para a nuvem em instantes."))}catch{alert("Erro no arquivo.")}},ne.readAsText(B),P.target.value=null},da=P=>{P.preventDefault(),!(!Mr.trim()||V[_s].includes(Mr))&&(M(B=>({...B,[_s]:[...B[_s],Mr]})),la(""))},Ci=(P,B)=>{confirm(`Remover "${B}"?`)&&M(ne=>({...ne,[P]:ne[P].filter(te=>te!==B)}))},Ri=P=>{if(P.preventDefault(),!S||!C||!w)return;const[B,ne,te]=w.split("-").map(Number),ce=parseFloat(C),Pe=[];if(A&&T>1){for(let St=0;St<T;St++){const jr=ne-1+St,sn=B+Math.floor(jr/12),Gn=jr%12;Pe.push({id:Date.now()+St,month:$r[Gn],year:sn,description:`${S} (${St+1}/${T})`,amount:ce,type:F,category:v,date:`${te.toString().padStart(2,"0")}/${(Gn+1).toString().padStart(2,"0")}/${sn}`})}alert(`${T} parcelas agendadas!`)}else{Pe.push({id:Date.now(),month:$r[ne-1],year:B,description:S,amount:ce,type:F,category:v,date:`${te.toString().padStart(2,"0")}/${ne.toString().padStart(2,"0")}/${B}`});const St=$r[ne-1];(St!==e||B!==r)&&alert(`Lançamento agendado para ${St}/${B}!`)}y([...p,...Pe]),E(""),b(""),k(!1),Ve(2)},zu=P=>y(p.filter(B=>B.id!==P)),fa=P=>{const B=parseFloat(Bn);isNaN(B)||N({...R,[`${r}_${P}`]:B}),zn(null)},pa=()=>{const P=parseFloat(K)||0,B=parseFloat(fe)||0,ne=parseFloat(Zt)/100,te=parseFloat(en),ce=Math.pow(1+ne,1/12)-1,Pe=P*Math.pow(1+ce,te)+B*(Math.pow(1+ce,te)-1)/ce,St=P+B*te,jr=Pe-St;let sn=te*30>720?.15:te*30>360?.175:te*30>180?.2:.225;const Gn=jr*sn;Ii({totalInvested:St,grossProfit:jr,tax:Gn,netAmount:Pe-Gn,taxRate:sn*100})},be=P=>new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(P),Wn=p.filter(P=>P.year===r),nn=Wn.filter(P=>P.month===e).sort((P,B)=>tn(P.date)-tn(B.date)),ws=nn.filter(P=>P.type==="receita").reduce((P,B)=>P+B.amount,0),rn=nn.filter(P=>P.type==="despesa").reduce((P,B)=>P+B.amount,0),ki=ws-rn,Es=P=>{const B=nn.filter(te=>te.type==="despesa"&&te.category===P).reduce((te,ce)=>te+ce.amount,0),ne=R[`${r}_${P}`]||0;return{spent:B,limit:ne,percentage:ne>0?B/ne*100:0}},Ts=$r.map(P=>{const B=Wn.filter(ce=>ce.month===P),ne=B.filter(ce=>ce.type==="receita").reduce((ce,Pe)=>ce+Pe.amount,0),te=B.filter(ce=>ce.type==="despesa").reduce((ce,Pe)=>ce+Pe.amount,0);return{month:P,inc:ne,exp:te,bal:ne-te}}),qn=Ts.reduce((P,B)=>P+B.inc,0),xi=Ts.reduce((P,B)=>P+B.exp,0),We=qn-xi;return!i&&!l?_.jsx("div",{className:"min-h-screen flex items-center justify-center bg-slate-100 p-4",children:_.jsxs("div",{className:"bg-white p-8 rounded-2xl shadow-lg w-full max-w-md border border-slate-200",children:[_.jsxs("div",{className:"text-center mb-8",children:[_.jsx("div",{className:"inline-flex p-4 bg-blue-50 rounded-full mb-4",children:_.jsx(za,{className:"w-10 h-10 text-blue-600"})}),_.jsx("h1",{className:"text-2xl font-bold text-slate-800",children:"Controle Financeiro"}),_.jsx("p",{className:"text-slate-500 text-sm mt-2",children:"Seus dados seguros na nuvem."})]}),h&&_.jsxs("div",{className:"p-3 mb-4 bg-red-50 text-red-600 text-sm rounded-lg flex items-center gap-2",children:[_.jsx(ZT,{size:16})," ",h]}),_.jsx("div",{className:"space-y-4",children:_.jsxs("button",{onClick:ca,className:"w-full py-4 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold rounded-xl transition-all shadow-sm flex items-center justify-center gap-3",children:[_.jsx("img",{src:"https://www.google.com/favicon.ico",alt:"Google",className:"w-5 h-5"}),"Entrar com Google"]})}),_.jsx("div",{className:"mt-6 text-center text-xs text-slate-400",children:_.jsx("p",{children:"Acesso seguro e sincronizado."})})]})}):l?_.jsxs("div",{className:"min-h-screen flex items-center justify-center bg-slate-100 text-slate-500",children:[_.jsx(zm,{className:"w-6 h-6 animate-spin mr-2"})," Carregando seus dados..."]}):_.jsx("div",{className:"min-h-screen bg-slate-50 text-slate-800 font-sans p-4 md:p-8",children:_.jsxs("div",{className:"max-w-7xl mx-auto space-y-6",children:[_.jsxs("header",{className:"flex flex-col xl:flex-row justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-200 gap-4",children:[_.jsxs("div",{className:"w-full xl:w-auto",children:[_.jsxs("h1",{className:"text-2xl font-bold text-slate-900 flex items-center gap-2",children:[_.jsx(za,{className:"text-blue-600"})," Controle Financeiro"]}),_.jsxs("p",{className:"text-slate-500 text-sm mt-1 flex items-center gap-1",children:[_.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 inline-block"}),"Conectado como ",i.displayName||i.email]})]}),_.jsxs("div",{className:"flex flex-wrap justify-center items-center gap-3 w-full xl:w-auto",children:[_.jsxs("div",{className:"flex items-center bg-slate-100 rounded-lg p-1",children:[_.jsx("button",{onClick:()=>s(P=>P-1),className:"p-2 hover:bg-white rounded-md text-slate-600",children:_.jsx(WT,{size:18})}),_.jsx("span",{className:"px-4 font-bold text-slate-700 min-w-[80px] text-center",children:r}),_.jsx("button",{onClick:()=>s(P=>P+1),className:"p-2 hover:bg-white rounded-md text-slate-600",children:_.jsx(qT,{size:18})})]}),_.jsx("div",{className:"h-8 w-px bg-slate-200 hidden sm:block"}),_.jsxs("button",{onClick:()=>n("Investimentos"),className:`px-4 py-2 rounded-lg font-medium flex gap-2 ${e==="Investimentos"?"bg-indigo-600 text-white":"bg-white border text-slate-700"}`,children:[_.jsx(Fm,{size:18})," ",_.jsx("span",{className:"hidden sm:inline",children:"Investimentos"})]}),_.jsxs("button",{onClick:()=>n("Resumo"),className:`px-4 py-2 rounded-lg font-medium flex gap-2 ${e==="Resumo"?"bg-blue-600 text-white":"bg-white border text-slate-700"}`,children:[_.jsx(Um,{size:18})," ",_.jsx("span",{className:"hidden sm:inline",children:"Resumo"})]}),_.jsxs("button",{onClick:()=>n("Configuracoes"),className:`px-4 py-2 rounded-lg font-medium flex gap-2 ${e==="Configuracoes"?"bg-slate-700 text-white":"bg-white border text-slate-700"}`,children:[_.jsx(Bm,{size:18})," ",_.jsx("span",{className:"hidden sm:inline",children:"Config"})]}),_.jsx("div",{className:"h-8 w-px bg-slate-200 hidden sm:block"}),_.jsx("button",{onClick:Uu,className:"p-2 text-slate-600 border rounded-lg hover:text-blue-600",title:"Exportar Backup",children:_.jsx(KT,{size:20})}),_.jsx("button",{onClick:()=>vs.current.click(),className:"p-2 text-slate-600 border rounded-lg hover:text-emerald-600",title:"Importar Backup",children:_.jsx(eI,{size:20})}),_.jsx("input",{type:"file",ref:vs,className:"hidden",onChange:Lr,accept:".json"}),_.jsx("button",{onClick:Fu,className:"p-2 text-red-500 border border-red-100 bg-red-50 rounded-lg hover:bg-red-100",title:"Sair",children:_.jsx(XT,{size:20})})]})]}),!["Resumo","Investimentos","Configuracoes"].includes(e)&&_.jsx("div",{className:"overflow-x-auto pb-2 scrollbar-hide",children:_.jsx("div",{className:"flex gap-2 min-w-max",children:$r.map(P=>_.jsx("button",{onClick:()=>n(P),className:`px-4 py-2 rounded-full text-sm font-medium transition-all ${e===P?"bg-blue-600 text-white shadow-md scale-105":"bg-white text-slate-600 border"}`,children:P},P))})}),["Resumo","Investimentos","Configuracoes"].includes(e)?_.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden animate-fade-in relative",children:[_.jsxs("div",{className:"p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50",children:[_.jsxs("h2",{className:"text-xl font-bold text-slate-800 flex items-center gap-2",children:[e==="Resumo"&&_.jsxs(_.Fragment,{children:[_.jsx(Um,{className:"text-blue-600"})," Resumo Anual ",r]}),e==="Investimentos"&&_.jsxs(_.Fragment,{children:[_.jsx(Fm,{className:"text-indigo-600"})," Investimentos"]}),e==="Configuracoes"&&_.jsxs(_.Fragment,{children:[_.jsx(Bm,{className:"text-slate-600"})," Configurações"]})]}),_.jsxs("button",{onClick:()=>n($r[new Date().getMonth()]),className:"flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-100",children:[_.jsx(BT,{size:16})," Voltar"]})]}),_.jsxs("div",{className:"p-6",children:[e==="Configuracoes"&&_.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[_.jsxs("div",{className:"col-span-1 md:col-span-2 bg-slate-50 p-6 rounded-xl border border-slate-200",children:[_.jsxs("div",{className:"flex justify-between items-center mb-3",children:[_.jsx("h2",{className:"text-sm font-bold text-slate-600 uppercase",children:"Nova Categoria"}),_.jsxs("button",{onClick:Si,className:"text-xs flex items-center gap-1 text-red-600 bg-red-50 px-2 py-1 rounded border border-red-100 hover:bg-red-100",children:[_.jsx(zm,{size:12})," Restaurar Backup Inicial"]})]}),_.jsxs("form",{onSubmit:da,className:"flex gap-4 items-end",children:[_.jsxs("div",{className:"flex-1",children:[_.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Nome"}),_.jsx("input",{type:"text",value:Mr,onChange:P=>la(P.target.value),className:"w-full px-3 py-2 border rounded-lg"})]}),_.jsxs("div",{className:"w-40",children:[_.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Tipo"}),_.jsxs("select",{value:_s,onChange:P=>ua(P.target.value),className:"w-full px-3 py-2 border rounded-lg",children:[_.jsx("option",{value:"despesa",children:"Despesa"}),_.jsx("option",{value:"receita",children:"Receita"})]})]}),_.jsx("button",{type:"submit",className:"px-6 py-2 bg-slate-800 text-white rounded-lg",children:"Criar"})]})]}),_.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200",children:[_.jsxs("h3",{className:"font-bold text-emerald-600 mb-4 flex gap-2",children:[_.jsx(kc,{size:18})," Receitas"]}),_.jsx("div",{className:"space-y-2 max-h-60 overflow-y-auto",children:V.receita.map(P=>_.jsxs("div",{className:"flex justify-between p-2 bg-slate-50 rounded-lg group text-sm",children:[_.jsx("span",{children:P}),_.jsx("button",{onClick:()=>Ci("receita",P),className:"text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100",children:_.jsx(Wm,{size:14})})]},P))})]}),_.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200",children:[_.jsxs("h3",{className:"font-bold text-red-600 mb-4 flex gap-2",children:[_.jsx(Hm,{size:18})," Despesas"]}),_.jsx("div",{className:"space-y-2 max-h-60 overflow-y-auto",children:V.despesa.map(P=>_.jsxs("div",{className:"flex justify-between p-2 bg-slate-50 rounded-lg group text-sm",children:[_.jsx("span",{children:P}),_.jsx("button",{onClick:()=>Ci("despesa",P),className:"text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100",children:_.jsx(Wm,{size:14})})]},P))})]})]}),e==="Investimentos"&&_.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[_.jsxs("div",{className:"space-y-6",children:[_.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[_.jsxs("div",{children:[_.jsx("label",{className:"text-sm text-slate-600",children:"Inicial (R$)"}),_.jsx("input",{type:"number",value:K,onChange:P=>Z(P.target.value),className:"w-full p-3 border rounded-lg"})]}),_.jsxs("div",{children:[_.jsx("label",{className:"text-sm text-slate-600",children:"Mensal (R$)"}),_.jsx("input",{type:"number",value:fe,onChange:P=>Ee(P.target.value),className:"w-full p-3 border rounded-lg"})]})]}),_.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[_.jsxs("div",{children:[_.jsx("label",{className:"text-sm text-slate-600",children:"Taxa (% CDI)"}),_.jsx("input",{type:"number",value:Zt,onChange:P=>mt(P.target.value),className:"w-full p-3 border rounded-lg"})]}),_.jsxs("div",{children:[_.jsx("label",{className:"text-sm text-slate-600",children:"Meses"}),_.jsx("input",{type:"number",value:en,onChange:P=>Tt(P.target.value),className:"w-full p-3 border rounded-lg"})]})]}),_.jsxs("button",{onClick:pa,className:"w-full py-4 bg-indigo-600 text-white font-bold rounded-xl flex justify-center gap-2",children:[_.jsx(kc,{size:20})," Calcular"]})]}),_.jsx("div",{className:"bg-slate-900 text-white p-8 rounded-2xl flex flex-col justify-center shadow-xl relative overflow-hidden",children:It?_.jsxs("div",{className:"space-y-8 z-10",children:[_.jsxs("div",{children:[_.jsx("p",{className:"text-sm text-indigo-300 uppercase",children:"Valor Líquido"}),_.jsx("h3",{className:"text-5xl font-bold mt-2",children:be(It.netAmount)})]}),_.jsxs("div",{className:"grid grid-cols-2 gap-6 pt-6 border-t border-slate-700/50",children:[_.jsxs("div",{children:[_.jsx("p",{className:"text-xs text-slate-400",children:"Total Investido"}),_.jsx("p",{className:"font-semibold text-xl",children:be(It.totalInvested)})]}),_.jsxs("div",{children:[_.jsx("p",{className:"text-xs text-emerald-400",children:"Bruto"}),_.jsxs("p",{className:"font-semibold text-xl text-emerald-400",children:["+",be(It.grossProfit)]})]})]})]}):_.jsxs("div",{className:"text-center text-slate-400 z-10",children:[_.jsx($m,{className:"w-16 h-16 mx-auto mb-4 opacity-30"}),_.jsx("p",{children:"Simular investimento."})]})})]}),e==="Resumo"&&_.jsxs("div",{className:"space-y-8",children:[_.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[_.jsx(Hc,{title:"Receita",value:qn,icon:kc,color:"text-emerald-600"}),_.jsx(Hc,{title:"Despesa",value:xi,icon:Hm,color:"text-red-600"}),_.jsx(Hc,{title:"Saldo",value:We,icon:za,color:We>=0?"text-blue-600":"text-red-600"})]}),_.jsx("div",{className:"overflow-x-auto border rounded-xl border-slate-200",children:_.jsxs("table",{className:"w-full text-left text-sm",children:[_.jsx("thead",{className:"bg-slate-50 text-slate-500",children:_.jsxs("tr",{children:[_.jsx("th",{className:"p-4",children:"Mês"}),_.jsx("th",{className:"p-4 text-emerald-600",children:"Receitas"}),_.jsx("th",{className:"p-4 text-red-600",children:"Despesas"}),_.jsx("th",{className:"p-4",children:"Saldo"})]})}),_.jsx("tbody",{className:"divide-y divide-slate-100",children:Ts.map(P=>_.jsxs("tr",{className:"hover:bg-slate-50",children:[_.jsx("td",{className:"p-4 font-medium",children:P.month}),_.jsx("td",{className:"p-4 text-emerald-600",children:be(P.inc)}),_.jsx("td",{className:"p-4 text-red-600",children:be(P.exp)}),_.jsx("td",{className:`p-4 font-bold ${P.bal>=0?"text-blue-600":"text-red-600"}`,children:be(P.bal)})]},P.month))})]})})]})]})]}):_.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[_.jsxs("div",{className:"lg:col-span-4 space-y-6",children:[_.jsxs("div",{className:"bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl shadow-sm border border-amber-200",children:[_.jsxs("h2",{className:"font-bold text-amber-800 flex items-center gap-2 mb-4",children:[_.jsx($T,{className:"w-5 h-5"})," Previsão (7 dias)"]}),Hn.length>0?_.jsxs(_.Fragment,{children:[_.jsx("div",{className:"space-y-3 mb-4",children:Hn.map(P=>_.jsxs("div",{className:"flex justify-between items-center text-sm bg-white/60 p-2 rounded border border-amber-100",children:[_.jsxs("div",{children:[_.jsx("p",{className:"font-semibold text-slate-700",children:P.description}),_.jsx("p",{className:"text-xs text-slate-500",children:P.date})]}),_.jsxs("span",{className:"font-bold text-red-600",children:["- ",be(P.amount)]})]},P.id))}),_.jsxs("div",{className:"pt-3 border-t border-amber-200/50",children:[_.jsxs("div",{className:"flex justify-between text-xs text-slate-600 mb-1",children:[_.jsx("span",{children:"Saldo Hoje:"}),_.jsx("span",{className:"font-semibold",children:be(Fe)})]}),_.jsxs("div",{className:"flex justify-between text-xs text-red-600 mb-2",children:[_.jsx("span",{children:"A Pagar:"}),_.jsxs("span",{className:"font-bold",children:["- ",be(ha)]})]}),_.jsxs("div",{className:`flex justify-between items-center p-2 rounded-lg ${Ai>=0?"bg-emerald-100 text-emerald-800":"bg-red-100 text-red-800"}`,children:[_.jsx("span",{className:"text-xs font-bold uppercase",children:"Projeção"}),_.jsx("span",{className:"font-bold",children:be(Ai)})]})]})]}):_.jsxs("div",{className:"text-center py-4 text-amber-700/70",children:[_.jsx("p",{className:"text-sm font-medium",children:"Tudo tranquilo!"}),_.jsxs("div",{className:"mt-3 text-xs bg-white/50 p-2 rounded inline-block",children:["Saldo: ",_.jsx("strong",{children:be(Fe)})]})]})]}),_.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-4",children:[_.jsxs("h2",{className:"font-semibold text-slate-700 flex justify-between",children:[e," ",r," ",_.jsx(HT,{className:"w-4 h-4 text-slate-400"})]}),_.jsxs("div",{className:"space-y-3",children:[_.jsxs("div",{className:"flex justify-between p-3 bg-emerald-50 rounded-lg",children:[_.jsx("span",{className:"text-emerald-700 text-sm",children:"Entradas"}),_.jsx("span",{className:"text-emerald-700 font-bold",children:be(ws)})]}),_.jsxs("div",{className:"flex justify-between p-3 bg-red-50 rounded-lg",children:[_.jsx("span",{className:"text-red-700 text-sm",children:"Saídas"}),_.jsx("span",{className:"text-red-700 font-bold",children:be(rn)})]}),_.jsxs("div",{className:"pt-2 border-t border-slate-100 flex justify-between",children:[_.jsx("span",{className:"text-slate-600 font-medium",children:"Saldo"}),_.jsx("span",{className:`text-lg font-bold ${ki>=0?"text-blue-600":"text-red-600"}`,children:be(ki)})]})]})]}),_.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200",children:[_.jsxs("h3",{className:"font-semibold text-slate-700 mb-4 flex items-center gap-2",children:[_.jsx(GT,{className:"w-5 h-5 text-blue-600"})," Novo Lançamento"]}),_.jsxs("form",{onSubmit:Ri,className:"space-y-4",children:[_.jsxs("div",{className:"grid grid-cols-2 gap-2 mb-2",children:[_.jsx("button",{type:"button",onClick:()=>z("receita"),className:`py-2 text-sm rounded-lg border ${F==="receita"?"bg-emerald-100 border-emerald-200 text-emerald-700 font-bold":"bg-white text-slate-500"}`,children:"Receita"}),_.jsx("button",{type:"button",onClick:()=>z("despesa"),className:`py-2 text-sm rounded-lg border ${F==="despesa"?"bg-red-100 border-red-200 text-red-700 font-bold":"bg-white text-slate-500"}`,children:"Despesa"})]}),_.jsxs("div",{children:[_.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Descrição"}),_.jsx("input",{type:"text",value:S,onChange:P=>E(P.target.value),className:"w-full px-3 py-2 border rounded-lg"})]}),_.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[_.jsxs("div",{children:[_.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Data"}),_.jsx("input",{type:"date",value:w,onChange:P=>I(P.target.value),className:"w-full px-3 py-2 border rounded-lg"})]}),_.jsxs("div",{children:[_.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:A?"Valor Parcela":"Valor"}),_.jsx("input",{type:"number",step:"0.01",value:C,onChange:P=>b(P.target.value),className:"w-full px-3 py-2 border rounded-lg"})]})]}),F==="despesa"&&_.jsxs("div",{className:"bg-slate-50 p-3 rounded-lg border border-slate-100",children:[_.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[_.jsx("input",{type:"checkbox",checked:A,onChange:P=>k(P.target.checked),className:"rounded text-blue-600"}),_.jsxs("label",{className:"text-sm font-medium text-slate-600 flex items-center gap-1",children:[_.jsx(QT,{size:14})," Parcelado?"]})]}),A&&_.jsxs("div",{className:"animate-fade-in",children:[_.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Nº Parcelas"}),_.jsx("input",{type:"number",min:"2",max:"48",value:T,onChange:P=>Ve(P.target.value),className:"w-full px-3 py-2 border rounded-lg text-sm"})]})]}),_.jsxs("div",{children:[_.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Categoria"}),_.jsx("select",{value:v,onChange:P=>g(P.target.value),className:"w-full px-3 py-2 border rounded-lg",children:V[F].map(P=>_.jsx("option",{value:P,children:P},P))})]}),_.jsxs("button",{type:"submit",className:"w-full py-2 bg-blue-600 text-white rounded-lg font-medium flex justify-center gap-2",children:[_.jsx(YT,{className:"w-4 h-4"})," Adicionar"]})]})]}),_.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200",children:[_.jsxs("h3",{className:"font-semibold text-slate-700 mb-4 flex items-center gap-2",children:[_.jsx($m,{className:"w-5 h-5 text-indigo-600"})," Metas ",r]}),_.jsx("div",{className:"space-y-4",children:V.despesa.map(P=>{const{spent:B,limit:ne,percentage:te}=Es(P),ce=te>100;return _.jsxs("div",{className:"space-y-1",children:[_.jsxs("div",{className:"flex justify-between items-end",children:[_.jsx("span",{className:"text-xs font-medium text-slate-600",children:P}),_.jsx("div",{className:"flex items-center gap-2",children:zt===P?_.jsx("input",{autoFocus:!0,type:"number",className:"w-20 px-1 py-0.5 text-xs border rounded",placeholder:"Meta",value:Bn,onChange:Pe=>$(Pe.target.value),onBlur:()=>fa(P),onKeyDown:Pe=>Pe.key==="Enter"&&fa(P)}):_.jsx("button",{onClick:()=>{zn(P),$(R[`${r}_${P}`]||"")},className:"text-xs text-indigo-600 hover:text-indigo-800 cursor-pointer",children:ne>0?be(ne):"Definir"})})]}),ne>0&&_.jsxs("div",{className:"relative pt-1",children:[_.jsxs("div",{className:"flex mb-1 items-center justify-between",children:[_.jsx("span",{className:`text-[10px] font-semibold ${ce?"text-red-600":"text-slate-500"}`,children:be(B)}),_.jsxs("span",{className:"text-[10px] text-slate-400",children:[te.toFixed(0),"%"]})]}),_.jsx("div",{className:"overflow-hidden h-2 mb-2 text-xs flex rounded bg-slate-100",children:_.jsx("div",{style:{width:`${Math.min(te,100)}%`},className:`transition-all duration-500 ${ce?"bg-red-500":te>70?"bg-yellow-400":"bg-emerald-400"}`})})]})]},P)})})]})]}),_.jsxs("div",{className:"lg:col-span-8 bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col h-full min-h-[500px]",children:[_.jsxs("div",{className:"p-4 border-b border-slate-100 flex justify-between items-center",children:[_.jsxs("h3",{className:"font-semibold text-slate-700",children:["Extrato ",e]}),_.jsxs("span",{className:"text-xs text-slate-400",children:[nn.length," itens"]})]}),_.jsx("div",{className:"flex-1 overflow-auto",children:nn.length===0?_.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-slate-400 py-10",children:[_.jsx(za,{className:"w-12 h-12 mb-2 opacity-20"}),_.jsx("p",{children:"Nenhum lançamento."})]}):_.jsxs("table",{className:"w-full text-left text-sm",children:[_.jsx("thead",{className:"bg-slate-50 text-slate-500 sticky top-0 z-10",children:_.jsxs("tr",{children:[_.jsx("th",{className:"p-4 w-32",children:"Data"}),_.jsx("th",{className:"p-4",children:"Descrição"}),_.jsx("th",{className:"p-4 hidden sm:table-cell",children:"Categoria"}),_.jsx("th",{className:"p-4 text-right",children:"Valor"}),_.jsx("th",{className:"p-4 w-10"})]})}),_.jsx("tbody",{className:"divide-y divide-slate-100",children:nn.map(P=>_.jsxs("tr",{className:"hover:bg-slate-50 group",children:[_.jsx("td",{className:"p-4 text-slate-500",children:P.date}),_.jsxs("td",{className:"p-4 font-medium text-slate-700",children:[P.description,_.jsx("div",{className:"text-xs text-slate-400 sm:hidden mt-1",children:P.category})]}),_.jsx("td",{className:"p-4 text-slate-500 hidden sm:table-cell",children:_.jsx("span",{className:"px-2 py-1 rounded-full bg-slate-100 text-xs",children:P.category})}),_.jsxs("td",{className:`p-4 text-right font-bold ${P.type==="receita"?"text-emerald-600":"text-red-600"}`,children:[P.type==="despesa"?"-":"+"," ",be(P.amount)]}),_.jsx("td",{className:"p-4 text-right",children:_.jsx("button",{onClick:()=>zu(P.id),className:"p-1 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-colors",children:_.jsx(JT,{className:"w-4 h-4"})})})]},P.id))})]})})]})]})]})})}function Hc({title:t,value:e,icon:n,color:r}){const s=i=>new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(i);return _.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-start justify-between",children:[_.jsxs("div",{children:[_.jsx("p",{className:"text-slate-500 text-sm font-medium mb-1",children:t}),_.jsx("h3",{className:`text-2xl font-bold ${r}`,children:s(e)})]}),_.jsx("div",{className:`p-3 rounded-lg bg-slate-50 ${r}`,children:_.jsx(n,{className:"w-6 h-6"})})]})}xv(document.getElementById("root")).render(_.jsx(re.StrictMode,{children:_.jsx(ux,{})}));
