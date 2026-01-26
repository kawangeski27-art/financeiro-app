(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var wy={exports:{}},Au={},Ey={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oa=Symbol.for("react.element"),hE=Symbol.for("react.portal"),dE=Symbol.for("react.fragment"),fE=Symbol.for("react.strict_mode"),pE=Symbol.for("react.profiler"),mE=Symbol.for("react.provider"),gE=Symbol.for("react.context"),yE=Symbol.for("react.forward_ref"),_E=Symbol.for("react.suspense"),vE=Symbol.for("react.memo"),wE=Symbol.for("react.lazy"),Mp=Symbol.iterator;function EE(t){return t===null||typeof t!="object"?null:(t=Mp&&t[Mp]||t["@@iterator"],typeof t=="function"?t:null)}var Ty={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Iy=Object.assign,Sy={};function xi(t,e,n){this.props=t,this.context=e,this.refs=Sy,this.updater=n||Ty}xi.prototype.isReactComponent={};xi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ay(){}Ay.prototype=xi.prototype;function Id(t,e,n){this.props=t,this.context=e,this.refs=Sy,this.updater=n||Ty}var Sd=Id.prototype=new Ay;Sd.constructor=Id;Iy(Sd,xi.prototype);Sd.isPureReactComponent=!0;var Lp=Array.isArray,xy=Object.prototype.hasOwnProperty,Ad={current:null},Cy={key:!0,ref:!0,__self:!0,__source:!0};function ky(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)xy.call(e,r)&&!Cy.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:oa,type:t,key:i,ref:o,props:s,_owner:Ad.current}}function TE(t,e){return{$$typeof:oa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function xd(t){return typeof t=="object"&&t!==null&&t.$$typeof===oa}function IE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var jp=/\/+/g;function yc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?IE(""+t.key):e.toString(36)}function fl(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case oa:case hE:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+yc(o,0):r,Lp(s)?(n="",t!=null&&(n=t.replace(jp,"$&/")+"/"),fl(s,e,n,"",function(h){return h})):s!=null&&(xd(s)&&(s=TE(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(jp,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Lp(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+yc(i,l);o+=fl(i,e,n,u,s)}else if(u=EE(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+yc(i,l++),o+=fl(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ba(t,e,n){if(t==null)return t;var r=[],s=0;return fl(t,r,"","",function(i){return e.call(n,i,s++)}),r}function SE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var yt={current:null},pl={transition:null},AE={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:pl,ReactCurrentOwner:Ad};function Ry(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:Ba,forEach:function(t,e,n){Ba(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ba(t,function(){e++}),e},toArray:function(t){return Ba(t,function(e){return e})||[]},only:function(t){if(!xd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=xi;ie.Fragment=dE;ie.Profiler=pE;ie.PureComponent=Id;ie.StrictMode=fE;ie.Suspense=_E;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AE;ie.act=Ry;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Iy({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Ad.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)xy.call(e,u)&&!Cy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:oa,type:t.type,key:s,ref:i,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:gE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:mE,_context:t},t.Consumer=t};ie.createElement=ky;ie.createFactory=function(t){var e=ky.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:yE,render:t}};ie.isValidElement=xd;ie.lazy=function(t){return{$$typeof:wE,_payload:{_status:-1,_result:t},_init:SE}};ie.memo=function(t,e){return{$$typeof:vE,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=pl.transition;pl.transition={};try{t()}finally{pl.transition=e}};ie.unstable_act=Ry;ie.useCallback=function(t,e){return yt.current.useCallback(t,e)};ie.useContext=function(t){return yt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return yt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return yt.current.useEffect(t,e)};ie.useId=function(){return yt.current.useId()};ie.useImperativeHandle=function(t,e,n){return yt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return yt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return yt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return yt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return yt.current.useReducer(t,e,n)};ie.useRef=function(t){return yt.current.useRef(t)};ie.useState=function(t){return yt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return yt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return yt.current.useTransition()};ie.version="18.3.1";Ey.exports=ie;var ee=Ey.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xE=ee,CE=Symbol.for("react.element"),kE=Symbol.for("react.fragment"),RE=Object.prototype.hasOwnProperty,PE=xE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,NE={key:!0,ref:!0,__self:!0,__source:!0};function Py(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)RE.call(e,r)&&!NE.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:CE,type:t,key:i,ref:o,props:s,_owner:PE.current}}Au.Fragment=kE;Au.jsx=Py;Au.jsxs=Py;wy.exports=Au;var g=wy.exports,Ny={exports:{}},Dt={},Dy={exports:{}},Vy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Q){var Z=$.length;$.push(Q);e:for(;0<Z;){var de=Z-1>>>1,ve=$[de];if(0<s(ve,Q))$[de]=Q,$[Z]=ve,Z=de;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Q=$[0],Z=$.pop();if(Z!==Q){$[0]=Z;e:for(var de=0,ve=$.length,Ht=ve>>>1;de<Ht;){var ft=2*(de+1)-1,Wt=$[ft],wt=ft+1,qt=$[wt];if(0>s(Wt,Z))wt<ve&&0>s(qt,Wt)?($[de]=qt,$[wt]=Z,de=wt):($[de]=Wt,$[ft]=Z,de=ft);else if(wt<ve&&0>s(qt,Z))$[de]=qt,$[wt]=Z,de=wt;else break e}}return Q}function s($,Q){var Z=$.sortIndex-Q.sortIndex;return Z!==0?Z:$.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,p=null,y=3,k=!1,D=!1,V=!1,L=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C($){for(var Q=n(h);Q!==null;){if(Q.callback===null)r(h);else if(Q.startTime<=$)r(h),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(h)}}function b($){if(V=!1,C($),!D)if(n(u)!==null)D=!0,Gn(U);else{var Q=n(h);Q!==null&&In(b,Q.startTime-$)}}function U($,Q){D=!1,V&&(V=!1,S(_),_=-1),k=!0;var Z=y;try{for(C(Q),p=n(u);p!==null&&(!(p.expirationTime>Q)||$&&!x());){var de=p.callback;if(typeof de=="function"){p.callback=null,y=p.priorityLevel;var ve=de(p.expirationTime<=Q);Q=t.unstable_now(),typeof ve=="function"?p.callback=ve:p===n(u)&&r(u),C(Q)}else r(u);p=n(u)}if(p!==null)var Ht=!0;else{var ft=n(h);ft!==null&&In(b,ft.startTime-Q),Ht=!1}return Ht}finally{p=null,y=Z,k=!1}}var B=!1,v=null,_=-1,w=5,I=-1;function x(){return!(t.unstable_now()-I<w)}function R(){if(v!==null){var $=t.unstable_now();I=$;var Q=!0;try{Q=v(!0,$)}finally{Q?E():(B=!1,v=null)}}else B=!1}var E;if(typeof T=="function")E=function(){T(R)};else if(typeof MessageChannel<"u"){var Oe=new MessageChannel,vt=Oe.port2;Oe.port1.onmessage=R,E=function(){vt.postMessage(null)}}else E=function(){L(R,0)};function Gn($){v=$,B||(B=!0,E())}function In($,Q){_=L(function(){$(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){D||k||(D=!0,Gn(U))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(y){case 1:case 2:case 3:var Q=3;break;default:Q=y}var Z=y;y=Q;try{return $()}finally{y=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Q){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Z=y;y=$;try{return Q()}finally{y=Z}},t.unstable_scheduleCallback=function($,Q,Z){var de=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?de+Z:de):Z=de,$){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=Z+ve,$={id:f++,callback:Q,priorityLevel:$,startTime:Z,expirationTime:ve,sortIndex:-1},Z>de?($.sortIndex=Z,e(h,$),n(u)===null&&$===n(h)&&(V?(S(_),_=-1):V=!0,In(b,Z-de))):($.sortIndex=ve,e(u,$),D||k||(D=!0,Gn(U))),$},t.unstable_shouldYield=x,t.unstable_wrapCallback=function($){var Q=y;return function(){var Z=y;y=Q;try{return $.apply(this,arguments)}finally{y=Z}}}})(Vy);Dy.exports=Vy;var DE=Dy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VE=ee,Nt=DE;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var by=new Set,Vo={};function Es(t,e){hi(t,e),hi(t+"Capture",e)}function hi(t,e){for(Vo[t]=e,t=0;t<e.length;t++)by.add(e[t])}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ah=Object.prototype.hasOwnProperty,bE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fp={},Up={};function OE(t){return ah.call(Up,t)?!0:ah.call(Fp,t)?!1:bE.test(t)?Up[t]=!0:(Fp[t]=!0,!1)}function ME(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function LE(t,e,n,r){if(e===null||typeof e>"u"||ME(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function _t(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){tt[t]=new _t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];tt[e]=new _t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){tt[t]=new _t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){tt[t]=new _t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){tt[t]=new _t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){tt[t]=new _t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){tt[t]=new _t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){tt[t]=new _t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){tt[t]=new _t(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cd=/[\-:]([a-z])/g;function kd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cd,kd);tt[e]=new _t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cd,kd);tt[e]=new _t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cd,kd);tt[e]=new _t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){tt[t]=new _t(t,1,!1,t.toLowerCase(),null,!1,!1)});tt.xlinkHref=new _t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){tt[t]=new _t(t,1,!1,t.toLowerCase(),null,!0,!0)});function Rd(t,e,n,r){var s=tt.hasOwnProperty(e)?tt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(LE(e,n,s,r)&&(n=null),r||s===null?OE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Wn=VE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$a=Symbol.for("react.element"),$s=Symbol.for("react.portal"),Hs=Symbol.for("react.fragment"),Pd=Symbol.for("react.strict_mode"),lh=Symbol.for("react.profiler"),Oy=Symbol.for("react.provider"),My=Symbol.for("react.context"),Nd=Symbol.for("react.forward_ref"),uh=Symbol.for("react.suspense"),ch=Symbol.for("react.suspense_list"),Dd=Symbol.for("react.memo"),hr=Symbol.for("react.lazy"),Ly=Symbol.for("react.offscreen"),zp=Symbol.iterator;function eo(t){return t===null||typeof t!="object"?null:(t=zp&&t[zp]||t["@@iterator"],typeof t=="function"?t:null)}var ke=Object.assign,_c;function lo(t){if(_c===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);_c=e&&e[1]||""}return`
`+_c+t}var vc=!1;function wc(t,e){if(!t||vc)return"";vc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{vc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?lo(t):""}function jE(t){switch(t.tag){case 5:return lo(t.type);case 16:return lo("Lazy");case 13:return lo("Suspense");case 19:return lo("SuspenseList");case 0:case 2:case 15:return t=wc(t.type,!1),t;case 11:return t=wc(t.type.render,!1),t;case 1:return t=wc(t.type,!0),t;default:return""}}function hh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Hs:return"Fragment";case $s:return"Portal";case lh:return"Profiler";case Pd:return"StrictMode";case uh:return"Suspense";case ch:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case My:return(t.displayName||"Context")+".Consumer";case Oy:return(t._context.displayName||"Context")+".Provider";case Nd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Dd:return e=t.displayName||null,e!==null?e:hh(t.type)||"Memo";case hr:e=t._payload,t=t._init;try{return hh(t(e))}catch{}}return null}function FE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hh(e);case 8:return e===Pd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function br(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function UE(t){var e=jy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ha(t){t._valueTracker||(t._valueTracker=UE(t))}function Fy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=jy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ol(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function dh(t,e){var n=e.checked;return ke({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Bp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=br(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Uy(t,e){e=e.checked,e!=null&&Rd(t,"checked",e,!1)}function fh(t,e){Uy(t,e);var n=br(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ph(t,e.type,n):e.hasOwnProperty("defaultValue")&&ph(t,e.type,br(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function $p(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ph(t,e,n){(e!=="number"||Ol(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var uo=Array.isArray;function ti(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+br(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function mh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return ke({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(uo(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:br(n)}}function zy(t,e){var n=br(e.value),r=br(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Wp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function By(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?By(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Wa,$y=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Wa=Wa||document.createElement("div"),Wa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function bo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var yo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zE=["Webkit","ms","Moz","O"];Object.keys(yo).forEach(function(t){zE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),yo[e]=yo[t]})});function Hy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||yo.hasOwnProperty(t)&&yo[t]?(""+e).trim():e+"px"}function Wy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Hy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var BE=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yh(t,e){if(e){if(BE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function _h(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vh=null;function Vd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var wh=null,ni=null,ri=null;function qp(t){if(t=ua(t)){if(typeof wh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Pu(e),wh(t.stateNode,t.type,e))}}function qy(t){ni?ri?ri.push(t):ri=[t]:ni=t}function Gy(){if(ni){var t=ni,e=ri;if(ri=ni=null,qp(t),e)for(t=0;t<e.length;t++)qp(e[t])}}function Ky(t,e){return t(e)}function Qy(){}var Ec=!1;function Yy(t,e,n){if(Ec)return t(e,n);Ec=!0;try{return Ky(t,e,n)}finally{Ec=!1,(ni!==null||ri!==null)&&(Qy(),Gy())}}function Oo(t,e){var n=t.stateNode;if(n===null)return null;var r=Pu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Eh=!1;if(Ln)try{var to={};Object.defineProperty(to,"passive",{get:function(){Eh=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{Eh=!1}function $E(t,e,n,r,s,i,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var _o=!1,Ml=null,Ll=!1,Th=null,HE={onError:function(t){_o=!0,Ml=t}};function WE(t,e,n,r,s,i,o,l,u){_o=!1,Ml=null,$E.apply(HE,arguments)}function qE(t,e,n,r,s,i,o,l,u){if(WE.apply(this,arguments),_o){if(_o){var h=Ml;_o=!1,Ml=null}else throw Error(F(198));Ll||(Ll=!0,Th=h)}}function Ts(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Xy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gp(t){if(Ts(t)!==t)throw Error(F(188))}function GE(t){var e=t.alternate;if(!e){if(e=Ts(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Gp(s),t;if(i===r)return Gp(s),e;i=i.sibling}throw Error(F(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function Jy(t){return t=GE(t),t!==null?Zy(t):null}function Zy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Zy(t);if(e!==null)return e;t=t.sibling}return null}var e_=Nt.unstable_scheduleCallback,Kp=Nt.unstable_cancelCallback,KE=Nt.unstable_shouldYield,QE=Nt.unstable_requestPaint,be=Nt.unstable_now,YE=Nt.unstable_getCurrentPriorityLevel,bd=Nt.unstable_ImmediatePriority,t_=Nt.unstable_UserBlockingPriority,jl=Nt.unstable_NormalPriority,XE=Nt.unstable_LowPriority,n_=Nt.unstable_IdlePriority,xu=null,fn=null;function JE(t){if(fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot(xu,t,void 0,(t.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:t1,ZE=Math.log,e1=Math.LN2;function t1(t){return t>>>=0,t===0?32:31-(ZE(t)/e1|0)|0}var qa=64,Ga=4194304;function co(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=co(l):(i&=o,i!==0&&(r=co(i)))}else o=n&~s,o!==0?r=co(o):i!==0&&(r=co(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-rn(e),s=1<<n,r|=t[n],e&=~s;return r}function n1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function r1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-rn(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=n1(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Ih(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function r_(){var t=qa;return qa<<=1,!(qa&4194240)&&(qa=64),t}function Tc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function aa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-rn(e),t[e]=n}function s1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-rn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Od(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-rn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var me=0;function s_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var i_,Md,o_,a_,l_,Sh=!1,Ka=[],Er=null,Tr=null,Ir=null,Mo=new Map,Lo=new Map,fr=[],i1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qp(t,e){switch(t){case"focusin":case"focusout":Er=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":Mo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(e.pointerId)}}function no(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=ua(e),e!==null&&Md(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function o1(t,e,n,r,s){switch(e){case"focusin":return Er=no(Er,t,e,n,r,s),!0;case"dragenter":return Tr=no(Tr,t,e,n,r,s),!0;case"mouseover":return Ir=no(Ir,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Mo.set(i,no(Mo.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Lo.set(i,no(Lo.get(i)||null,t,e,n,r,s)),!0}return!1}function u_(t){var e=ns(t.target);if(e!==null){var n=Ts(e);if(n!==null){if(e=n.tag,e===13){if(e=Xy(n),e!==null){t.blockedOn=e,l_(t.priority,function(){o_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ml(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ah(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);vh=r,n.target.dispatchEvent(r),vh=null}else return e=ua(n),e!==null&&Md(e),t.blockedOn=n,!1;e.shift()}return!0}function Yp(t,e,n){ml(t)&&n.delete(e)}function a1(){Sh=!1,Er!==null&&ml(Er)&&(Er=null),Tr!==null&&ml(Tr)&&(Tr=null),Ir!==null&&ml(Ir)&&(Ir=null),Mo.forEach(Yp),Lo.forEach(Yp)}function ro(t,e){t.blockedOn===e&&(t.blockedOn=null,Sh||(Sh=!0,Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority,a1)))}function jo(t){function e(s){return ro(s,t)}if(0<Ka.length){ro(Ka[0],t);for(var n=1;n<Ka.length;n++){var r=Ka[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Er!==null&&ro(Er,t),Tr!==null&&ro(Tr,t),Ir!==null&&ro(Ir,t),Mo.forEach(e),Lo.forEach(e),n=0;n<fr.length;n++)r=fr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<fr.length&&(n=fr[0],n.blockedOn===null);)u_(n),n.blockedOn===null&&fr.shift()}var si=Wn.ReactCurrentBatchConfig,Ul=!0;function l1(t,e,n,r){var s=me,i=si.transition;si.transition=null;try{me=1,Ld(t,e,n,r)}finally{me=s,si.transition=i}}function u1(t,e,n,r){var s=me,i=si.transition;si.transition=null;try{me=4,Ld(t,e,n,r)}finally{me=s,si.transition=i}}function Ld(t,e,n,r){if(Ul){var s=Ah(t,e,n,r);if(s===null)Dc(t,e,r,zl,n),Qp(t,r);else if(o1(s,t,e,n,r))r.stopPropagation();else if(Qp(t,r),e&4&&-1<i1.indexOf(t)){for(;s!==null;){var i=ua(s);if(i!==null&&i_(i),i=Ah(t,e,n,r),i===null&&Dc(t,e,r,zl,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Dc(t,e,r,null,n)}}var zl=null;function Ah(t,e,n,r){if(zl=null,t=Vd(r),t=ns(t),t!==null)if(e=Ts(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Xy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return zl=t,null}function c_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(YE()){case bd:return 1;case t_:return 4;case jl:case XE:return 16;case n_:return 536870912;default:return 16}default:return 16}}var _r=null,jd=null,gl=null;function h_(){if(gl)return gl;var t,e=jd,n=e.length,r,s="value"in _r?_r.value:_r.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return gl=s.slice(t,1<r?1-r:void 0)}function yl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Qa(){return!0}function Xp(){return!1}function Vt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Qa:Xp,this.isPropagationStopped=Xp,this}return ke(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qa)},persist:function(){},isPersistent:Qa}),e}var Ci={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fd=Vt(Ci),la=ke({},Ci,{view:0,detail:0}),c1=Vt(la),Ic,Sc,so,Cu=ke({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ud,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==so&&(so&&t.type==="mousemove"?(Ic=t.screenX-so.screenX,Sc=t.screenY-so.screenY):Sc=Ic=0,so=t),Ic)},movementY:function(t){return"movementY"in t?t.movementY:Sc}}),Jp=Vt(Cu),h1=ke({},Cu,{dataTransfer:0}),d1=Vt(h1),f1=ke({},la,{relatedTarget:0}),Ac=Vt(f1),p1=ke({},Ci,{animationName:0,elapsedTime:0,pseudoElement:0}),m1=Vt(p1),g1=ke({},Ci,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),y1=Vt(g1),_1=ke({},Ci,{data:0}),Zp=Vt(_1),v1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},w1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},E1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function T1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=E1[t])?!!e[t]:!1}function Ud(){return T1}var I1=ke({},la,{key:function(t){if(t.key){var e=v1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=yl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?w1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ud,charCode:function(t){return t.type==="keypress"?yl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),S1=Vt(I1),A1=ke({},Cu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),em=Vt(A1),x1=ke({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ud}),C1=Vt(x1),k1=ke({},Ci,{propertyName:0,elapsedTime:0,pseudoElement:0}),R1=Vt(k1),P1=ke({},Cu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),N1=Vt(P1),D1=[9,13,27,32],zd=Ln&&"CompositionEvent"in window,vo=null;Ln&&"documentMode"in document&&(vo=document.documentMode);var V1=Ln&&"TextEvent"in window&&!vo,d_=Ln&&(!zd||vo&&8<vo&&11>=vo),tm=" ",nm=!1;function f_(t,e){switch(t){case"keyup":return D1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function p_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ws=!1;function b1(t,e){switch(t){case"compositionend":return p_(e);case"keypress":return e.which!==32?null:(nm=!0,tm);case"textInput":return t=e.data,t===tm&&nm?null:t;default:return null}}function O1(t,e){if(Ws)return t==="compositionend"||!zd&&f_(t,e)?(t=h_(),gl=jd=_r=null,Ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return d_&&e.locale!=="ko"?null:e.data;default:return null}}var M1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!M1[t.type]:e==="textarea"}function m_(t,e,n,r){qy(r),e=Bl(e,"onChange"),0<e.length&&(n=new Fd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var wo=null,Fo=null;function L1(t){x_(t,0)}function ku(t){var e=Ks(t);if(Fy(e))return t}function j1(t,e){if(t==="change")return e}var g_=!1;if(Ln){var xc;if(Ln){var Cc="oninput"in document;if(!Cc){var sm=document.createElement("div");sm.setAttribute("oninput","return;"),Cc=typeof sm.oninput=="function"}xc=Cc}else xc=!1;g_=xc&&(!document.documentMode||9<document.documentMode)}function im(){wo&&(wo.detachEvent("onpropertychange",y_),Fo=wo=null)}function y_(t){if(t.propertyName==="value"&&ku(Fo)){var e=[];m_(e,Fo,t,Vd(t)),Yy(L1,e)}}function F1(t,e,n){t==="focusin"?(im(),wo=e,Fo=n,wo.attachEvent("onpropertychange",y_)):t==="focusout"&&im()}function U1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ku(Fo)}function z1(t,e){if(t==="click")return ku(e)}function B1(t,e){if(t==="input"||t==="change")return ku(e)}function $1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var an=typeof Object.is=="function"?Object.is:$1;function Uo(t,e){if(an(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!ah.call(e,s)||!an(t[s],e[s]))return!1}return!0}function om(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function am(t,e){var n=om(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=om(n)}}function __(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?__(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function v_(){for(var t=window,e=Ol();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ol(t.document)}return e}function Bd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function H1(t){var e=v_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&__(n.ownerDocument.documentElement,n)){if(r!==null&&Bd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=am(n,i);var o=am(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var W1=Ln&&"documentMode"in document&&11>=document.documentMode,qs=null,xh=null,Eo=null,Ch=!1;function lm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ch||qs==null||qs!==Ol(r)||(r=qs,"selectionStart"in r&&Bd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Eo&&Uo(Eo,r)||(Eo=r,r=Bl(xh,"onSelect"),0<r.length&&(e=new Fd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=qs)))}function Ya(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Gs={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionend:Ya("Transition","TransitionEnd")},kc={},w_={};Ln&&(w_=document.createElement("div").style,"AnimationEvent"in window||(delete Gs.animationend.animation,delete Gs.animationiteration.animation,delete Gs.animationstart.animation),"TransitionEvent"in window||delete Gs.transitionend.transition);function Ru(t){if(kc[t])return kc[t];if(!Gs[t])return t;var e=Gs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in w_)return kc[t]=e[n];return t}var E_=Ru("animationend"),T_=Ru("animationiteration"),I_=Ru("animationstart"),S_=Ru("transitionend"),A_=new Map,um="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Br(t,e){A_.set(t,e),Es(e,[t])}for(var Rc=0;Rc<um.length;Rc++){var Pc=um[Rc],q1=Pc.toLowerCase(),G1=Pc[0].toUpperCase()+Pc.slice(1);Br(q1,"on"+G1)}Br(E_,"onAnimationEnd");Br(T_,"onAnimationIteration");Br(I_,"onAnimationStart");Br("dblclick","onDoubleClick");Br("focusin","onFocus");Br("focusout","onBlur");Br(S_,"onTransitionEnd");hi("onMouseEnter",["mouseout","mouseover"]);hi("onMouseLeave",["mouseout","mouseover"]);hi("onPointerEnter",["pointerout","pointerover"]);hi("onPointerLeave",["pointerout","pointerover"]);Es("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Es("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Es("onBeforeInput",["compositionend","keypress","textInput","paste"]);Es("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),K1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ho));function cm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,qE(r,e,void 0,t),t.currentTarget=null}function x_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;cm(s,l,h),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;cm(s,l,h),i=u}}}if(Ll)throw t=Th,Ll=!1,Th=null,t}function Ee(t,e){var n=e[Dh];n===void 0&&(n=e[Dh]=new Set);var r=t+"__bubble";n.has(r)||(C_(e,t,2,!1),n.add(r))}function Nc(t,e,n){var r=0;e&&(r|=4),C_(n,t,r,e)}var Xa="_reactListening"+Math.random().toString(36).slice(2);function zo(t){if(!t[Xa]){t[Xa]=!0,by.forEach(function(n){n!=="selectionchange"&&(K1.has(n)||Nc(n,!1,t),Nc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xa]||(e[Xa]=!0,Nc("selectionchange",!1,e))}}function C_(t,e,n,r){switch(c_(e)){case 1:var s=l1;break;case 4:s=u1;break;default:s=Ld}n=s.bind(null,e,n,t),s=void 0,!Eh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Dc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=ns(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}Yy(function(){var h=i,f=Vd(n),p=[];e:{var y=A_.get(t);if(y!==void 0){var k=Fd,D=t;switch(t){case"keypress":if(yl(n)===0)break e;case"keydown":case"keyup":k=S1;break;case"focusin":D="focus",k=Ac;break;case"focusout":D="blur",k=Ac;break;case"beforeblur":case"afterblur":k=Ac;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Jp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=d1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=C1;break;case E_:case T_:case I_:k=m1;break;case S_:k=R1;break;case"scroll":k=c1;break;case"wheel":k=N1;break;case"copy":case"cut":case"paste":k=y1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=em}var V=(e&4)!==0,L=!V&&t==="scroll",S=V?y!==null?y+"Capture":null:y;V=[];for(var T=h,C;T!==null;){C=T;var b=C.stateNode;if(C.tag===5&&b!==null&&(C=b,S!==null&&(b=Oo(T,S),b!=null&&V.push(Bo(T,b,C)))),L)break;T=T.return}0<V.length&&(y=new k(y,D,null,n,f),p.push({event:y,listeners:V}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",y&&n!==vh&&(D=n.relatedTarget||n.fromElement)&&(ns(D)||D[jn]))break e;if((k||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,k?(D=n.relatedTarget||n.toElement,k=h,D=D?ns(D):null,D!==null&&(L=Ts(D),D!==L||D.tag!==5&&D.tag!==6)&&(D=null)):(k=null,D=h),k!==D)){if(V=Jp,b="onMouseLeave",S="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(V=em,b="onPointerLeave",S="onPointerEnter",T="pointer"),L=k==null?y:Ks(k),C=D==null?y:Ks(D),y=new V(b,T+"leave",k,n,f),y.target=L,y.relatedTarget=C,b=null,ns(f)===h&&(V=new V(S,T+"enter",D,n,f),V.target=C,V.relatedTarget=L,b=V),L=b,k&&D)t:{for(V=k,S=D,T=0,C=V;C;C=js(C))T++;for(C=0,b=S;b;b=js(b))C++;for(;0<T-C;)V=js(V),T--;for(;0<C-T;)S=js(S),C--;for(;T--;){if(V===S||S!==null&&V===S.alternate)break t;V=js(V),S=js(S)}V=null}else V=null;k!==null&&hm(p,y,k,V,!1),D!==null&&L!==null&&hm(p,L,D,V,!0)}}e:{if(y=h?Ks(h):window,k=y.nodeName&&y.nodeName.toLowerCase(),k==="select"||k==="input"&&y.type==="file")var U=j1;else if(rm(y))if(g_)U=B1;else{U=U1;var B=F1}else(k=y.nodeName)&&k.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(U=z1);if(U&&(U=U(t,h))){m_(p,U,n,f);break e}B&&B(t,y,h),t==="focusout"&&(B=y._wrapperState)&&B.controlled&&y.type==="number"&&ph(y,"number",y.value)}switch(B=h?Ks(h):window,t){case"focusin":(rm(B)||B.contentEditable==="true")&&(qs=B,xh=h,Eo=null);break;case"focusout":Eo=xh=qs=null;break;case"mousedown":Ch=!0;break;case"contextmenu":case"mouseup":case"dragend":Ch=!1,lm(p,n,f);break;case"selectionchange":if(W1)break;case"keydown":case"keyup":lm(p,n,f)}var v;if(zd)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ws?f_(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(d_&&n.locale!=="ko"&&(Ws||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ws&&(v=h_()):(_r=f,jd="value"in _r?_r.value:_r.textContent,Ws=!0)),B=Bl(h,_),0<B.length&&(_=new Zp(_,t,null,n,f),p.push({event:_,listeners:B}),v?_.data=v:(v=p_(n),v!==null&&(_.data=v)))),(v=V1?b1(t,n):O1(t,n))&&(h=Bl(h,"onBeforeInput"),0<h.length&&(f=new Zp("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:h}),f.data=v))}x_(p,e)})}function Bo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bl(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Oo(t,n),i!=null&&r.unshift(Bo(t,i,s)),i=Oo(t,e),i!=null&&r.push(Bo(t,i,s))),t=t.return}return r}function js(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hm(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,s?(u=Oo(n,i),u!=null&&o.unshift(Bo(n,u,l))):s||(u=Oo(n,i),u!=null&&o.push(Bo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Q1=/\r\n?/g,Y1=/\u0000|\uFFFD/g;function dm(t){return(typeof t=="string"?t:""+t).replace(Q1,`
`).replace(Y1,"")}function Ja(t,e,n){if(e=dm(e),dm(t)!==e&&n)throw Error(F(425))}function $l(){}var kh=null,Rh=null;function Ph(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Nh=typeof setTimeout=="function"?setTimeout:void 0,X1=typeof clearTimeout=="function"?clearTimeout:void 0,fm=typeof Promise=="function"?Promise:void 0,J1=typeof queueMicrotask=="function"?queueMicrotask:typeof fm<"u"?function(t){return fm.resolve(null).then(t).catch(Z1)}:Nh;function Z1(t){setTimeout(function(){throw t})}function Vc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),jo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);jo(e)}function Sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function pm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ki=Math.random().toString(36).slice(2),dn="__reactFiber$"+ki,$o="__reactProps$"+ki,jn="__reactContainer$"+ki,Dh="__reactEvents$"+ki,eT="__reactListeners$"+ki,tT="__reactHandles$"+ki;function ns(t){var e=t[dn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[jn]||n[dn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=pm(t);t!==null;){if(n=t[dn])return n;t=pm(t)}return e}t=n,n=t.parentNode}return null}function ua(t){return t=t[dn]||t[jn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ks(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Pu(t){return t[$o]||null}var Vh=[],Qs=-1;function $r(t){return{current:t}}function Ie(t){0>Qs||(t.current=Vh[Qs],Vh[Qs]=null,Qs--)}function _e(t,e){Qs++,Vh[Qs]=t.current,t.current=e}var Or={},ht=$r(Or),St=$r(!1),hs=Or;function di(t,e){var n=t.type.contextTypes;if(!n)return Or;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function At(t){return t=t.childContextTypes,t!=null}function Hl(){Ie(St),Ie(ht)}function mm(t,e,n){if(ht.current!==Or)throw Error(F(168));_e(ht,e),_e(St,n)}function k_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(F(108,FE(t)||"Unknown",s));return ke({},n,r)}function Wl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Or,hs=ht.current,_e(ht,t),_e(St,St.current),!0}function gm(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=k_(t,e,hs),r.__reactInternalMemoizedMergedChildContext=t,Ie(St),Ie(ht),_e(ht,t)):Ie(St),_e(St,n)}var Rn=null,Nu=!1,bc=!1;function R_(t){Rn===null?Rn=[t]:Rn.push(t)}function nT(t){Nu=!0,R_(t)}function Hr(){if(!bc&&Rn!==null){bc=!0;var t=0,e=me;try{var n=Rn;for(me=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Rn=null,Nu=!1}catch(s){throw Rn!==null&&(Rn=Rn.slice(t+1)),e_(bd,Hr),s}finally{me=e,bc=!1}}return null}var Ys=[],Xs=0,ql=null,Gl=0,Ot=[],Mt=0,ds=null,Nn=1,Dn="";function Zr(t,e){Ys[Xs++]=Gl,Ys[Xs++]=ql,ql=t,Gl=e}function P_(t,e,n){Ot[Mt++]=Nn,Ot[Mt++]=Dn,Ot[Mt++]=ds,ds=t;var r=Nn;t=Dn;var s=32-rn(r)-1;r&=~(1<<s),n+=1;var i=32-rn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Nn=1<<32-rn(e)+s|n<<s|r,Dn=i+t}else Nn=1<<i|n<<s|r,Dn=t}function $d(t){t.return!==null&&(Zr(t,1),P_(t,1,0))}function Hd(t){for(;t===ql;)ql=Ys[--Xs],Ys[Xs]=null,Gl=Ys[--Xs],Ys[Xs]=null;for(;t===ds;)ds=Ot[--Mt],Ot[Mt]=null,Dn=Ot[--Mt],Ot[Mt]=null,Nn=Ot[--Mt],Ot[Mt]=null}var Pt=null,Rt=null,Se=!1,Zt=null;function N_(t,e){var n=Ft(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ym(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pt=t,Rt=Sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pt=t,Rt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ds!==null?{id:Nn,overflow:Dn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ft(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pt=t,Rt=null,!0):!1;default:return!1}}function bh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Oh(t){if(Se){var e=Rt;if(e){var n=e;if(!ym(t,e)){if(bh(t))throw Error(F(418));e=Sr(n.nextSibling);var r=Pt;e&&ym(t,e)?N_(r,n):(t.flags=t.flags&-4097|2,Se=!1,Pt=t)}}else{if(bh(t))throw Error(F(418));t.flags=t.flags&-4097|2,Se=!1,Pt=t}}}function _m(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pt=t}function Za(t){if(t!==Pt)return!1;if(!Se)return _m(t),Se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ph(t.type,t.memoizedProps)),e&&(e=Rt)){if(bh(t))throw D_(),Error(F(418));for(;e;)N_(t,e),e=Sr(e.nextSibling)}if(_m(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rt=Sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rt=null}}else Rt=Pt?Sr(t.stateNode.nextSibling):null;return!0}function D_(){for(var t=Rt;t;)t=Sr(t.nextSibling)}function fi(){Rt=Pt=null,Se=!1}function Wd(t){Zt===null?Zt=[t]:Zt.push(t)}var rT=Wn.ReactCurrentBatchConfig;function io(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function el(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function vm(t){var e=t._init;return e(t._payload)}function V_(t){function e(S,T){if(t){var C=S.deletions;C===null?(S.deletions=[T],S.flags|=16):C.push(T)}}function n(S,T){if(!t)return null;for(;T!==null;)e(S,T),T=T.sibling;return null}function r(S,T){for(S=new Map;T!==null;)T.key!==null?S.set(T.key,T):S.set(T.index,T),T=T.sibling;return S}function s(S,T){return S=kr(S,T),S.index=0,S.sibling=null,S}function i(S,T,C){return S.index=C,t?(C=S.alternate,C!==null?(C=C.index,C<T?(S.flags|=2,T):C):(S.flags|=2,T)):(S.flags|=1048576,T)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,T,C,b){return T===null||T.tag!==6?(T=zc(C,S.mode,b),T.return=S,T):(T=s(T,C),T.return=S,T)}function u(S,T,C,b){var U=C.type;return U===Hs?f(S,T,C.props.children,b,C.key):T!==null&&(T.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===hr&&vm(U)===T.type)?(b=s(T,C.props),b.ref=io(S,T,C),b.return=S,b):(b=Sl(C.type,C.key,C.props,null,S.mode,b),b.ref=io(S,T,C),b.return=S,b)}function h(S,T,C,b){return T===null||T.tag!==4||T.stateNode.containerInfo!==C.containerInfo||T.stateNode.implementation!==C.implementation?(T=Bc(C,S.mode,b),T.return=S,T):(T=s(T,C.children||[]),T.return=S,T)}function f(S,T,C,b,U){return T===null||T.tag!==7?(T=ls(C,S.mode,b,U),T.return=S,T):(T=s(T,C),T.return=S,T)}function p(S,T,C){if(typeof T=="string"&&T!==""||typeof T=="number")return T=zc(""+T,S.mode,C),T.return=S,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case $a:return C=Sl(T.type,T.key,T.props,null,S.mode,C),C.ref=io(S,null,T),C.return=S,C;case $s:return T=Bc(T,S.mode,C),T.return=S,T;case hr:var b=T._init;return p(S,b(T._payload),C)}if(uo(T)||eo(T))return T=ls(T,S.mode,C,null),T.return=S,T;el(S,T)}return null}function y(S,T,C,b){var U=T!==null?T.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return U!==null?null:l(S,T,""+C,b);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case $a:return C.key===U?u(S,T,C,b):null;case $s:return C.key===U?h(S,T,C,b):null;case hr:return U=C._init,y(S,T,U(C._payload),b)}if(uo(C)||eo(C))return U!==null?null:f(S,T,C,b,null);el(S,C)}return null}function k(S,T,C,b,U){if(typeof b=="string"&&b!==""||typeof b=="number")return S=S.get(C)||null,l(T,S,""+b,U);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case $a:return S=S.get(b.key===null?C:b.key)||null,u(T,S,b,U);case $s:return S=S.get(b.key===null?C:b.key)||null,h(T,S,b,U);case hr:var B=b._init;return k(S,T,C,B(b._payload),U)}if(uo(b)||eo(b))return S=S.get(C)||null,f(T,S,b,U,null);el(T,b)}return null}function D(S,T,C,b){for(var U=null,B=null,v=T,_=T=0,w=null;v!==null&&_<C.length;_++){v.index>_?(w=v,v=null):w=v.sibling;var I=y(S,v,C[_],b);if(I===null){v===null&&(v=w);break}t&&v&&I.alternate===null&&e(S,v),T=i(I,T,_),B===null?U=I:B.sibling=I,B=I,v=w}if(_===C.length)return n(S,v),Se&&Zr(S,_),U;if(v===null){for(;_<C.length;_++)v=p(S,C[_],b),v!==null&&(T=i(v,T,_),B===null?U=v:B.sibling=v,B=v);return Se&&Zr(S,_),U}for(v=r(S,v);_<C.length;_++)w=k(v,S,_,C[_],b),w!==null&&(t&&w.alternate!==null&&v.delete(w.key===null?_:w.key),T=i(w,T,_),B===null?U=w:B.sibling=w,B=w);return t&&v.forEach(function(x){return e(S,x)}),Se&&Zr(S,_),U}function V(S,T,C,b){var U=eo(C);if(typeof U!="function")throw Error(F(150));if(C=U.call(C),C==null)throw Error(F(151));for(var B=U=null,v=T,_=T=0,w=null,I=C.next();v!==null&&!I.done;_++,I=C.next()){v.index>_?(w=v,v=null):w=v.sibling;var x=y(S,v,I.value,b);if(x===null){v===null&&(v=w);break}t&&v&&x.alternate===null&&e(S,v),T=i(x,T,_),B===null?U=x:B.sibling=x,B=x,v=w}if(I.done)return n(S,v),Se&&Zr(S,_),U;if(v===null){for(;!I.done;_++,I=C.next())I=p(S,I.value,b),I!==null&&(T=i(I,T,_),B===null?U=I:B.sibling=I,B=I);return Se&&Zr(S,_),U}for(v=r(S,v);!I.done;_++,I=C.next())I=k(v,S,_,I.value,b),I!==null&&(t&&I.alternate!==null&&v.delete(I.key===null?_:I.key),T=i(I,T,_),B===null?U=I:B.sibling=I,B=I);return t&&v.forEach(function(R){return e(S,R)}),Se&&Zr(S,_),U}function L(S,T,C,b){if(typeof C=="object"&&C!==null&&C.type===Hs&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case $a:e:{for(var U=C.key,B=T;B!==null;){if(B.key===U){if(U=C.type,U===Hs){if(B.tag===7){n(S,B.sibling),T=s(B,C.props.children),T.return=S,S=T;break e}}else if(B.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===hr&&vm(U)===B.type){n(S,B.sibling),T=s(B,C.props),T.ref=io(S,B,C),T.return=S,S=T;break e}n(S,B);break}else e(S,B);B=B.sibling}C.type===Hs?(T=ls(C.props.children,S.mode,b,C.key),T.return=S,S=T):(b=Sl(C.type,C.key,C.props,null,S.mode,b),b.ref=io(S,T,C),b.return=S,S=b)}return o(S);case $s:e:{for(B=C.key;T!==null;){if(T.key===B)if(T.tag===4&&T.stateNode.containerInfo===C.containerInfo&&T.stateNode.implementation===C.implementation){n(S,T.sibling),T=s(T,C.children||[]),T.return=S,S=T;break e}else{n(S,T);break}else e(S,T);T=T.sibling}T=Bc(C,S.mode,b),T.return=S,S=T}return o(S);case hr:return B=C._init,L(S,T,B(C._payload),b)}if(uo(C))return D(S,T,C,b);if(eo(C))return V(S,T,C,b);el(S,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,T!==null&&T.tag===6?(n(S,T.sibling),T=s(T,C),T.return=S,S=T):(n(S,T),T=zc(C,S.mode,b),T.return=S,S=T),o(S)):n(S,T)}return L}var pi=V_(!0),b_=V_(!1),Kl=$r(null),Ql=null,Js=null,qd=null;function Gd(){qd=Js=Ql=null}function Kd(t){var e=Kl.current;Ie(Kl),t._currentValue=e}function Mh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ii(t,e){Ql=t,qd=Js=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(It=!0),t.firstContext=null)}function zt(t){var e=t._currentValue;if(qd!==t)if(t={context:t,memoizedValue:e,next:null},Js===null){if(Ql===null)throw Error(F(308));Js=t,Ql.dependencies={lanes:0,firstContext:t}}else Js=Js.next=t;return e}var rs=null;function Qd(t){rs===null?rs=[t]:rs.push(t)}function O_(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Qd(e)):(n.next=s.next,s.next=n),e.interleaved=n,Fn(t,r)}function Fn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var dr=!1;function Yd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function M_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function On(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ar(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Fn(t,n)}return s=r.interleaved,s===null?(e.next=e,Qd(r)):(e.next=s.next,s.next=e),r.interleaved=e,Fn(t,n)}function _l(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Od(t,n)}}function wm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Yl(t,e,n,r){var s=t.updateQueue;dr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?i=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(i!==null){var p=s.baseState;o=0,f=h=u=null,l=i;do{var y=l.lane,k=l.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var D=t,V=l;switch(y=e,k=n,V.tag){case 1:if(D=V.payload,typeof D=="function"){p=D.call(k,p,y);break e}p=D;break e;case 3:D.flags=D.flags&-65537|128;case 0:if(D=V.payload,y=typeof D=="function"?D.call(k,p,y):D,y==null)break e;p=ke({},p,y);break e;case 2:dr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=s.effects,y===null?s.effects=[l]:y.push(l))}else k={eventTime:k,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=k,u=p):f=f.next=k,o|=y;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;y=l,l=y.next,y.next=null,s.lastBaseUpdate=y,s.shared.pending=null}}while(!0);if(f===null&&(u=p),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);ps|=o,t.lanes=o,t.memoizedState=p}}function Em(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(F(191,s));s.call(r)}}}var ca={},pn=$r(ca),Ho=$r(ca),Wo=$r(ca);function ss(t){if(t===ca)throw Error(F(174));return t}function Xd(t,e){switch(_e(Wo,e),_e(Ho,t),_e(pn,ca),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=gh(e,t)}Ie(pn),_e(pn,e)}function mi(){Ie(pn),Ie(Ho),Ie(Wo)}function L_(t){ss(Wo.current);var e=ss(pn.current),n=gh(e,t.type);e!==n&&(_e(Ho,t),_e(pn,n))}function Jd(t){Ho.current===t&&(Ie(pn),Ie(Ho))}var Ae=$r(0);function Xl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Oc=[];function Zd(){for(var t=0;t<Oc.length;t++)Oc[t]._workInProgressVersionPrimary=null;Oc.length=0}var vl=Wn.ReactCurrentDispatcher,Mc=Wn.ReactCurrentBatchConfig,fs=0,Ce=null,Ue=null,qe=null,Jl=!1,To=!1,qo=0,sT=0;function it(){throw Error(F(321))}function ef(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!an(t[n],e[n]))return!1;return!0}function tf(t,e,n,r,s,i){if(fs=i,Ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vl.current=t===null||t.memoizedState===null?lT:uT,t=n(r,s),To){i=0;do{if(To=!1,qo=0,25<=i)throw Error(F(301));i+=1,qe=Ue=null,e.updateQueue=null,vl.current=cT,t=n(r,s)}while(To)}if(vl.current=Zl,e=Ue!==null&&Ue.next!==null,fs=0,qe=Ue=Ce=null,Jl=!1,e)throw Error(F(300));return t}function nf(){var t=qo!==0;return qo=0,t}function cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?Ce.memoizedState=qe=t:qe=qe.next=t,qe}function Bt(){if(Ue===null){var t=Ce.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var e=qe===null?Ce.memoizedState:qe.next;if(e!==null)qe=e,Ue=t;else{if(t===null)throw Error(F(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},qe===null?Ce.memoizedState=qe=t:qe=qe.next=t}return qe}function Go(t,e){return typeof e=="function"?e(t):e}function Lc(t){var e=Bt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Ue,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,h=i;do{var f=h.lane;if((fs&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Ce.lanes|=f,ps|=f}h=h.next}while(h!==null&&h!==i);u===null?o=r:u.next=l,an(r,e.memoizedState)||(It=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Ce.lanes|=i,ps|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function jc(t){var e=Bt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);an(i,e.memoizedState)||(It=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function j_(){}function F_(t,e){var n=Ce,r=Bt(),s=e(),i=!an(r.memoizedState,s);if(i&&(r.memoizedState=s,It=!0),r=r.queue,rf(B_.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,Ko(9,z_.bind(null,n,r,s,e),void 0,null),Ke===null)throw Error(F(349));fs&30||U_(n,e,s)}return s}function U_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function z_(t,e,n,r){e.value=n,e.getSnapshot=r,$_(e)&&H_(t)}function B_(t,e,n){return n(function(){$_(e)&&H_(t)})}function $_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!an(t,n)}catch{return!0}}function H_(t){var e=Fn(t,1);e!==null&&sn(e,t,1,-1)}function Tm(t){var e=cn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Go,lastRenderedState:t},e.queue=t,t=t.dispatch=aT.bind(null,Ce,t),[e.memoizedState,t]}function Ko(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function W_(){return Bt().memoizedState}function wl(t,e,n,r){var s=cn();Ce.flags|=t,s.memoizedState=Ko(1|e,n,void 0,r===void 0?null:r)}function Du(t,e,n,r){var s=Bt();r=r===void 0?null:r;var i=void 0;if(Ue!==null){var o=Ue.memoizedState;if(i=o.destroy,r!==null&&ef(r,o.deps)){s.memoizedState=Ko(e,n,i,r);return}}Ce.flags|=t,s.memoizedState=Ko(1|e,n,i,r)}function Im(t,e){return wl(8390656,8,t,e)}function rf(t,e){return Du(2048,8,t,e)}function q_(t,e){return Du(4,2,t,e)}function G_(t,e){return Du(4,4,t,e)}function K_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Q_(t,e,n){return n=n!=null?n.concat([t]):null,Du(4,4,K_.bind(null,e,t),n)}function sf(){}function Y_(t,e){var n=Bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ef(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function X_(t,e){var n=Bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ef(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function J_(t,e,n){return fs&21?(an(n,e)||(n=r_(),Ce.lanes|=n,ps|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,It=!0),t.memoizedState=n)}function iT(t,e){var n=me;me=n!==0&&4>n?n:4,t(!0);var r=Mc.transition;Mc.transition={};try{t(!1),e()}finally{me=n,Mc.transition=r}}function Z_(){return Bt().memoizedState}function oT(t,e,n){var r=Cr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ev(t))tv(e,n);else if(n=O_(t,e,n,r),n!==null){var s=gt();sn(n,t,r,s),nv(n,e,r)}}function aT(t,e,n){var r=Cr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ev(t))tv(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,an(l,o)){var u=e.interleaved;u===null?(s.next=s,Qd(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=O_(t,e,s,r),n!==null&&(s=gt(),sn(n,t,r,s),nv(n,e,r))}}function ev(t){var e=t.alternate;return t===Ce||e!==null&&e===Ce}function tv(t,e){To=Jl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function nv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Od(t,n)}}var Zl={readContext:zt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},lT={readContext:zt,useCallback:function(t,e){return cn().memoizedState=[t,e===void 0?null:e],t},useContext:zt,useEffect:Im,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,wl(4194308,4,K_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return wl(4194308,4,t,e)},useInsertionEffect:function(t,e){return wl(4,2,t,e)},useMemo:function(t,e){var n=cn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=cn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=oT.bind(null,Ce,t),[r.memoizedState,t]},useRef:function(t){var e=cn();return t={current:t},e.memoizedState=t},useState:Tm,useDebugValue:sf,useDeferredValue:function(t){return cn().memoizedState=t},useTransition:function(){var t=Tm(!1),e=t[0];return t=iT.bind(null,t[1]),cn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ce,s=cn();if(Se){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Ke===null)throw Error(F(349));fs&30||U_(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Im(B_.bind(null,r,i,t),[t]),r.flags|=2048,Ko(9,z_.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=cn(),e=Ke.identifierPrefix;if(Se){var n=Dn,r=Nn;n=(r&~(1<<32-rn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=qo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=sT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},uT={readContext:zt,useCallback:Y_,useContext:zt,useEffect:rf,useImperativeHandle:Q_,useInsertionEffect:q_,useLayoutEffect:G_,useMemo:X_,useReducer:Lc,useRef:W_,useState:function(){return Lc(Go)},useDebugValue:sf,useDeferredValue:function(t){var e=Bt();return J_(e,Ue.memoizedState,t)},useTransition:function(){var t=Lc(Go)[0],e=Bt().memoizedState;return[t,e]},useMutableSource:j_,useSyncExternalStore:F_,useId:Z_,unstable_isNewReconciler:!1},cT={readContext:zt,useCallback:Y_,useContext:zt,useEffect:rf,useImperativeHandle:Q_,useInsertionEffect:q_,useLayoutEffect:G_,useMemo:X_,useReducer:jc,useRef:W_,useState:function(){return jc(Go)},useDebugValue:sf,useDeferredValue:function(t){var e=Bt();return Ue===null?e.memoizedState=t:J_(e,Ue.memoizedState,t)},useTransition:function(){var t=jc(Go)[0],e=Bt().memoizedState;return[t,e]},useMutableSource:j_,useSyncExternalStore:F_,useId:Z_,unstable_isNewReconciler:!1};function Xt(t,e){if(t&&t.defaultProps){e=ke({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Lh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ke({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Vu={isMounted:function(t){return(t=t._reactInternals)?Ts(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=gt(),s=Cr(t),i=On(r,s);i.payload=e,n!=null&&(i.callback=n),e=Ar(t,i,s),e!==null&&(sn(e,t,s,r),_l(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=gt(),s=Cr(t),i=On(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Ar(t,i,s),e!==null&&(sn(e,t,s,r),_l(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=gt(),r=Cr(t),s=On(n,r);s.tag=2,e!=null&&(s.callback=e),e=Ar(t,s,r),e!==null&&(sn(e,t,r,n),_l(e,t,r))}};function Sm(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Uo(n,r)||!Uo(s,i):!0}function rv(t,e,n){var r=!1,s=Or,i=e.contextType;return typeof i=="object"&&i!==null?i=zt(i):(s=At(e)?hs:ht.current,r=e.contextTypes,i=(r=r!=null)?di(t,s):Or),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Vu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Am(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Vu.enqueueReplaceState(e,e.state,null)}function jh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Yd(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=zt(i):(i=At(e)?hs:ht.current,s.context=di(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Lh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Vu.enqueueReplaceState(s,s.state,null),Yl(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function gi(t,e){try{var n="",r=e;do n+=jE(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Fc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Fh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var hT=typeof WeakMap=="function"?WeakMap:Map;function sv(t,e,n){n=On(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){tu||(tu=!0,Qh=r),Fh(t,e)},n}function iv(t,e,n){n=On(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Fh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Fh(t,e),typeof r!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function xm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new hT;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=AT.bind(null,t,e,n),e.then(t,t))}function Cm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function km(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=On(-1,1),e.tag=2,Ar(n,e,1))),n.lanes|=1),t)}var dT=Wn.ReactCurrentOwner,It=!1;function mt(t,e,n,r){e.child=t===null?b_(e,null,n,r):pi(e,t.child,n,r)}function Rm(t,e,n,r,s){n=n.render;var i=e.ref;return ii(e,s),r=tf(t,e,n,r,i,s),n=nf(),t!==null&&!It?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Un(t,e,s)):(Se&&n&&$d(e),e.flags|=1,mt(t,e,r,s),e.child)}function Pm(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!ff(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,ov(t,e,i,r,s)):(t=Sl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Uo,n(o,r)&&t.ref===e.ref)return Un(t,e,s)}return e.flags|=1,t=kr(i,r),t.ref=e.ref,t.return=e,e.child=t}function ov(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Uo(i,r)&&t.ref===e.ref)if(It=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(It=!0);else return e.lanes=t.lanes,Un(t,e,s)}return Uh(t,e,n,r,s)}function av(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(ei,kt),kt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(ei,kt),kt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,_e(ei,kt),kt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,_e(ei,kt),kt|=r;return mt(t,e,s,n),e.child}function lv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Uh(t,e,n,r,s){var i=At(n)?hs:ht.current;return i=di(e,i),ii(e,s),n=tf(t,e,n,r,i,s),r=nf(),t!==null&&!It?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Un(t,e,s)):(Se&&r&&$d(e),e.flags|=1,mt(t,e,n,s),e.child)}function Nm(t,e,n,r,s){if(At(n)){var i=!0;Wl(e)}else i=!1;if(ii(e,s),e.stateNode===null)El(t,e),rv(e,n,r),jh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=zt(h):(h=At(n)?hs:ht.current,h=di(e,h));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Am(e,o,r,h),dr=!1;var y=e.memoizedState;o.state=y,Yl(e,r,o,s),u=e.memoizedState,l!==r||y!==u||St.current||dr?(typeof f=="function"&&(Lh(e,n,f,r),u=e.memoizedState),(l=dr||Sm(e,n,l,r,y,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,M_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Xt(e.type,l),o.props=h,p=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=zt(u):(u=At(n)?hs:ht.current,u=di(e,u));var k=n.getDerivedStateFromProps;(f=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||y!==u)&&Am(e,o,r,u),dr=!1,y=e.memoizedState,o.state=y,Yl(e,r,o,s);var D=e.memoizedState;l!==p||y!==D||St.current||dr?(typeof k=="function"&&(Lh(e,n,k,r),D=e.memoizedState),(h=dr||Sm(e,n,h,r,y,D,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,D,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,D,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=D),o.props=r,o.state=D,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return zh(t,e,n,r,i,s)}function zh(t,e,n,r,s,i){lv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&gm(e,n,!1),Un(t,e,i);r=e.stateNode,dT.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=pi(e,t.child,null,i),e.child=pi(e,null,l,i)):mt(t,e,l,i),e.memoizedState=r.state,s&&gm(e,n,!0),e.child}function uv(t){var e=t.stateNode;e.pendingContext?mm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&mm(t,e.context,!1),Xd(t,e.containerInfo)}function Dm(t,e,n,r,s){return fi(),Wd(s),e.flags|=256,mt(t,e,n,r),e.child}var Bh={dehydrated:null,treeContext:null,retryLane:0};function $h(t){return{baseLanes:t,cachePool:null,transitions:null}}function cv(t,e,n){var r=e.pendingProps,s=Ae.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),_e(Ae,s&1),t===null)return Oh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Mu(o,r,0,null),t=ls(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=$h(n),e.memoizedState=Bh,t):of(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return fT(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=kr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=kr(l,i):(i=ls(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?$h(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Bh,r}return i=t.child,t=i.sibling,r=kr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function of(t,e){return e=Mu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function tl(t,e,n,r){return r!==null&&Wd(r),pi(e,t.child,null,n),t=of(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function fT(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Fc(Error(F(422))),tl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Mu({mode:"visible",children:r.children},s,0,null),i=ls(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&pi(e,t.child,null,o),e.child.memoizedState=$h(o),e.memoizedState=Bh,i);if(!(e.mode&1))return tl(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(F(419)),r=Fc(i,r,void 0),tl(t,e,o,r)}if(l=(o&t.childLanes)!==0,It||l){if(r=Ke,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Fn(t,s),sn(r,t,s,-1))}return df(),r=Fc(Error(F(421))),tl(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=xT.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Rt=Sr(s.nextSibling),Pt=e,Se=!0,Zt=null,t!==null&&(Ot[Mt++]=Nn,Ot[Mt++]=Dn,Ot[Mt++]=ds,Nn=t.id,Dn=t.overflow,ds=e),e=of(e,r.children),e.flags|=4096,e)}function Vm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Mh(t.return,e,n)}function Uc(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function hv(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(mt(t,e,r.children,n),r=Ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vm(t,n,e);else if(t.tag===19)Vm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(_e(Ae,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Xl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Uc(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Xl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Uc(e,!0,n,null,i);break;case"together":Uc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function El(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Un(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ps|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=kr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=kr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function pT(t,e,n){switch(e.tag){case 3:uv(e),fi();break;case 5:L_(e);break;case 1:At(e.type)&&Wl(e);break;case 4:Xd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;_e(Kl,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(_e(Ae,Ae.current&1),e.flags|=128,null):n&e.child.childLanes?cv(t,e,n):(_e(Ae,Ae.current&1),t=Un(t,e,n),t!==null?t.sibling:null);_e(Ae,Ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return hv(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),_e(Ae,Ae.current),r)break;return null;case 22:case 23:return e.lanes=0,av(t,e,n)}return Un(t,e,n)}var dv,Hh,fv,pv;dv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hh=function(){};fv=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,ss(pn.current);var i=null;switch(n){case"input":s=dh(t,s),r=dh(t,r),i=[];break;case"select":s=ke({},s,{value:void 0}),r=ke({},r,{value:void 0}),i=[];break;case"textarea":s=mh(t,s),r=mh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=$l)}yh(n,r);var o;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var l=s[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Vo.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var u=r[h];if(l=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Vo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&Ee("scroll",t),i||l===u||(i=[])):(i=i||[]).push(h,u))}n&&(i=i||[]).push("style",n);var h=i;(e.updateQueue=h)&&(e.flags|=4)}};pv=function(t,e,n,r){n!==r&&(e.flags|=4)};function oo(t,e){if(!Se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function mT(t,e,n){var r=e.pendingProps;switch(Hd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(e),null;case 1:return At(e.type)&&Hl(),ot(e),null;case 3:return r=e.stateNode,mi(),Ie(St),Ie(ht),Zd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Za(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Zt!==null&&(Jh(Zt),Zt=null))),Hh(t,e),ot(e),null;case 5:Jd(e);var s=ss(Wo.current);if(n=e.type,t!==null&&e.stateNode!=null)fv(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return ot(e),null}if(t=ss(pn.current),Za(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[dn]=e,r[$o]=i,t=(e.mode&1)!==0,n){case"dialog":Ee("cancel",r),Ee("close",r);break;case"iframe":case"object":case"embed":Ee("load",r);break;case"video":case"audio":for(s=0;s<ho.length;s++)Ee(ho[s],r);break;case"source":Ee("error",r);break;case"img":case"image":case"link":Ee("error",r),Ee("load",r);break;case"details":Ee("toggle",r);break;case"input":Bp(r,i),Ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Ee("invalid",r);break;case"textarea":Hp(r,i),Ee("invalid",r)}yh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Ja(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Ja(r.textContent,l,t),s=["children",""+l]):Vo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ee("scroll",r)}switch(n){case"input":Ha(r),$p(r,i,!0);break;case"textarea":Ha(r),Wp(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=$l)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=By(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[dn]=e,t[$o]=r,dv(t,e,!1,!1),e.stateNode=t;e:{switch(o=_h(n,r),n){case"dialog":Ee("cancel",t),Ee("close",t),s=r;break;case"iframe":case"object":case"embed":Ee("load",t),s=r;break;case"video":case"audio":for(s=0;s<ho.length;s++)Ee(ho[s],t);s=r;break;case"source":Ee("error",t),s=r;break;case"img":case"image":case"link":Ee("error",t),Ee("load",t),s=r;break;case"details":Ee("toggle",t),s=r;break;case"input":Bp(t,r),s=dh(t,r),Ee("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=ke({},r,{value:void 0}),Ee("invalid",t);break;case"textarea":Hp(t,r),s=mh(t,r),Ee("invalid",t);break;default:s=r}yh(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?Wy(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&$y(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&bo(t,u):typeof u=="number"&&bo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Vo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Ee("scroll",t):u!=null&&Rd(t,i,u,o))}switch(n){case"input":Ha(t),$p(t,r,!1);break;case"textarea":Ha(t),Wp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+br(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?ti(t,!!r.multiple,i,!1):r.defaultValue!=null&&ti(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=$l)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ot(e),null;case 6:if(t&&e.stateNode!=null)pv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=ss(Wo.current),ss(pn.current),Za(e)){if(r=e.stateNode,n=e.memoizedProps,r[dn]=e,(i=r.nodeValue!==n)&&(t=Pt,t!==null))switch(t.tag){case 3:Ja(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ja(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dn]=e,e.stateNode=r}return ot(e),null;case 13:if(Ie(Ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Se&&Rt!==null&&e.mode&1&&!(e.flags&128))D_(),fi(),e.flags|=98560,i=!1;else if(i=Za(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(F(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[dn]=e}else fi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ot(e),i=!1}else Zt!==null&&(Jh(Zt),Zt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ae.current&1?Be===0&&(Be=3):df())),e.updateQueue!==null&&(e.flags|=4),ot(e),null);case 4:return mi(),Hh(t,e),t===null&&zo(e.stateNode.containerInfo),ot(e),null;case 10:return Kd(e.type._context),ot(e),null;case 17:return At(e.type)&&Hl(),ot(e),null;case 19:if(Ie(Ae),i=e.memoizedState,i===null)return ot(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)oo(i,!1);else{if(Be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Xl(t),o!==null){for(e.flags|=128,oo(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _e(Ae,Ae.current&1|2),e.child}t=t.sibling}i.tail!==null&&be()>yi&&(e.flags|=128,r=!0,oo(i,!1),e.lanes=4194304)}else{if(!r)if(t=Xl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),oo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Se)return ot(e),null}else 2*be()-i.renderingStartTime>yi&&n!==1073741824&&(e.flags|=128,r=!0,oo(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=be(),e.sibling=null,n=Ae.current,_e(Ae,r?n&1|2:n&1),e):(ot(e),null);case 22:case 23:return hf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?kt&1073741824&&(ot(e),e.subtreeFlags&6&&(e.flags|=8192)):ot(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function gT(t,e){switch(Hd(e),e.tag){case 1:return At(e.type)&&Hl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return mi(),Ie(St),Ie(ht),Zd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Jd(e),null;case 13:if(Ie(Ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));fi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ie(Ae),null;case 4:return mi(),null;case 10:return Kd(e.type._context),null;case 22:case 23:return hf(),null;case 24:return null;default:return null}}var nl=!1,ut=!1,yT=typeof WeakSet=="function"?WeakSet:Set,W=null;function Zs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(t,e,r)}else n.current=null}function Wh(t,e,n){try{n()}catch(r){Ne(t,e,r)}}var bm=!1;function _T(t,e){if(kh=Ul,t=v_(),Bd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,p=t,y=null;t:for(;;){for(var k;p!==n||s!==0&&p.nodeType!==3||(l=o+s),p!==i||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(k=p.firstChild)!==null;)y=p,p=k;for(;;){if(p===t)break t;if(y===n&&++h===s&&(l=o),y===i&&++f===r&&(u=o),(k=p.nextSibling)!==null)break;p=y,y=p.parentNode}p=k}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rh={focusedElem:t,selectionRange:n},Ul=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var D=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(D!==null){var V=D.memoizedProps,L=D.memoizedState,S=e.stateNode,T=S.getSnapshotBeforeUpdate(e.elementType===e.type?V:Xt(e.type,V),L);S.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(b){Ne(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return D=bm,bm=!1,D}function Io(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Wh(e,n,i)}s=s.next}while(s!==r)}}function bu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function qh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function mv(t){var e=t.alternate;e!==null&&(t.alternate=null,mv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[dn],delete e[$o],delete e[Dh],delete e[eT],delete e[tT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function gv(t){return t.tag===5||t.tag===3||t.tag===4}function Om(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||gv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=$l));else if(r!==4&&(t=t.child,t!==null))for(Gh(t,e,n),t=t.sibling;t!==null;)Gh(t,e,n),t=t.sibling}function Kh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Kh(t,e,n),t=t.sibling;t!==null;)Kh(t,e,n),t=t.sibling}var Xe=null,Jt=!1;function ur(t,e,n){for(n=n.child;n!==null;)yv(t,e,n),n=n.sibling}function yv(t,e,n){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount(xu,n)}catch{}switch(n.tag){case 5:ut||Zs(n,e);case 6:var r=Xe,s=Jt;Xe=null,ur(t,e,n),Xe=r,Jt=s,Xe!==null&&(Jt?(t=Xe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Xe.removeChild(n.stateNode));break;case 18:Xe!==null&&(Jt?(t=Xe,n=n.stateNode,t.nodeType===8?Vc(t.parentNode,n):t.nodeType===1&&Vc(t,n),jo(t)):Vc(Xe,n.stateNode));break;case 4:r=Xe,s=Jt,Xe=n.stateNode.containerInfo,Jt=!0,ur(t,e,n),Xe=r,Jt=s;break;case 0:case 11:case 14:case 15:if(!ut&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Wh(n,e,o),s=s.next}while(s!==r)}ur(t,e,n);break;case 1:if(!ut&&(Zs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ne(n,e,l)}ur(t,e,n);break;case 21:ur(t,e,n);break;case 22:n.mode&1?(ut=(r=ut)||n.memoizedState!==null,ur(t,e,n),ut=r):ur(t,e,n);break;default:ur(t,e,n)}}function Mm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new yT),e.forEach(function(r){var s=CT.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Yt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Xe=l.stateNode,Jt=!1;break e;case 3:Xe=l.stateNode.containerInfo,Jt=!0;break e;case 4:Xe=l.stateNode.containerInfo,Jt=!0;break e}l=l.return}if(Xe===null)throw Error(F(160));yv(i,o,s),Xe=null,Jt=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(h){Ne(s,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)_v(e,t),e=e.sibling}function _v(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Yt(e,t),un(t),r&4){try{Io(3,t,t.return),bu(3,t)}catch(V){Ne(t,t.return,V)}try{Io(5,t,t.return)}catch(V){Ne(t,t.return,V)}}break;case 1:Yt(e,t),un(t),r&512&&n!==null&&Zs(n,n.return);break;case 5:if(Yt(e,t),un(t),r&512&&n!==null&&Zs(n,n.return),t.flags&32){var s=t.stateNode;try{bo(s,"")}catch(V){Ne(t,t.return,V)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Uy(s,i),_h(l,o);var h=_h(l,i);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?Wy(s,p):f==="dangerouslySetInnerHTML"?$y(s,p):f==="children"?bo(s,p):Rd(s,f,p,h)}switch(l){case"input":fh(s,i);break;case"textarea":zy(s,i);break;case"select":var y=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?ti(s,!!i.multiple,k,!1):y!==!!i.multiple&&(i.defaultValue!=null?ti(s,!!i.multiple,i.defaultValue,!0):ti(s,!!i.multiple,i.multiple?[]:"",!1))}s[$o]=i}catch(V){Ne(t,t.return,V)}}break;case 6:if(Yt(e,t),un(t),r&4){if(t.stateNode===null)throw Error(F(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(V){Ne(t,t.return,V)}}break;case 3:if(Yt(e,t),un(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{jo(e.containerInfo)}catch(V){Ne(t,t.return,V)}break;case 4:Yt(e,t),un(t);break;case 13:Yt(e,t),un(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(uf=be())),r&4&&Mm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(ut=(h=ut)||f,Yt(e,t),ut=h):Yt(e,t),un(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(W=t,f=t.child;f!==null;){for(p=W=f;W!==null;){switch(y=W,k=y.child,y.tag){case 0:case 11:case 14:case 15:Io(4,y,y.return);break;case 1:Zs(y,y.return);var D=y.stateNode;if(typeof D.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,D.props=e.memoizedProps,D.state=e.memoizedState,D.componentWillUnmount()}catch(V){Ne(r,n,V)}}break;case 5:Zs(y,y.return);break;case 22:if(y.memoizedState!==null){jm(p);continue}}k!==null?(k.return=y,W=k):jm(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{s=p.stateNode,h?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Hy("display",o))}catch(V){Ne(t,t.return,V)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(V){Ne(t,t.return,V)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Yt(e,t),un(t),r&4&&Mm(t);break;case 21:break;default:Yt(e,t),un(t)}}function un(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(gv(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(bo(s,""),r.flags&=-33);var i=Om(t);Kh(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Om(t);Gh(t,l,o);break;default:throw Error(F(161))}}catch(u){Ne(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function vT(t,e,n){W=t,vv(t)}function vv(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var s=W,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||nl;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||ut;l=nl;var h=ut;if(nl=o,(ut=u)&&!h)for(W=s;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?Fm(s):u!==null?(u.return=o,W=u):Fm(s);for(;i!==null;)W=i,vv(i),i=i.sibling;W=s,nl=l,ut=h}Lm(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,W=i):Lm(t)}}function Lm(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ut||bu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ut)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Xt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Em(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Em(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&jo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}ut||e.flags&512&&qh(e)}catch(y){Ne(e,e.return,y)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function jm(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function Fm(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{bu(4,e)}catch(u){Ne(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Ne(e,s,u)}}var i=e.return;try{qh(e)}catch(u){Ne(e,i,u)}break;case 5:var o=e.return;try{qh(e)}catch(u){Ne(e,o,u)}}}catch(u){Ne(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var wT=Math.ceil,eu=Wn.ReactCurrentDispatcher,af=Wn.ReactCurrentOwner,Ut=Wn.ReactCurrentBatchConfig,he=0,Ke=null,Le=null,et=0,kt=0,ei=$r(0),Be=0,Qo=null,ps=0,Ou=0,lf=0,So=null,Tt=null,uf=0,yi=1/0,kn=null,tu=!1,Qh=null,xr=null,rl=!1,vr=null,nu=0,Ao=0,Yh=null,Tl=-1,Il=0;function gt(){return he&6?be():Tl!==-1?Tl:Tl=be()}function Cr(t){return t.mode&1?he&2&&et!==0?et&-et:rT.transition!==null?(Il===0&&(Il=r_()),Il):(t=me,t!==0||(t=window.event,t=t===void 0?16:c_(t.type)),t):1}function sn(t,e,n,r){if(50<Ao)throw Ao=0,Yh=null,Error(F(185));aa(t,n,r),(!(he&2)||t!==Ke)&&(t===Ke&&(!(he&2)&&(Ou|=n),Be===4&&pr(t,et)),xt(t,r),n===1&&he===0&&!(e.mode&1)&&(yi=be()+500,Nu&&Hr()))}function xt(t,e){var n=t.callbackNode;r1(t,e);var r=Fl(t,t===Ke?et:0);if(r===0)n!==null&&Kp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Kp(n),e===1)t.tag===0?nT(Um.bind(null,t)):R_(Um.bind(null,t)),J1(function(){!(he&6)&&Hr()}),n=null;else{switch(s_(r)){case 1:n=bd;break;case 4:n=t_;break;case 16:n=jl;break;case 536870912:n=n_;break;default:n=jl}n=Cv(n,wv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function wv(t,e){if(Tl=-1,Il=0,he&6)throw Error(F(327));var n=t.callbackNode;if(oi()&&t.callbackNode!==n)return null;var r=Fl(t,t===Ke?et:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ru(t,r);else{e=r;var s=he;he|=2;var i=Tv();(Ke!==t||et!==e)&&(kn=null,yi=be()+500,as(t,e));do try{IT();break}catch(l){Ev(t,l)}while(!0);Gd(),eu.current=i,he=s,Le!==null?e=0:(Ke=null,et=0,e=Be)}if(e!==0){if(e===2&&(s=Ih(t),s!==0&&(r=s,e=Xh(t,s))),e===1)throw n=Qo,as(t,0),pr(t,r),xt(t,be()),n;if(e===6)pr(t,r);else{if(s=t.current.alternate,!(r&30)&&!ET(s)&&(e=ru(t,r),e===2&&(i=Ih(t),i!==0&&(r=i,e=Xh(t,i))),e===1))throw n=Qo,as(t,0),pr(t,r),xt(t,be()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:es(t,Tt,kn);break;case 3:if(pr(t,r),(r&130023424)===r&&(e=uf+500-be(),10<e)){if(Fl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){gt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Nh(es.bind(null,t,Tt,kn),e);break}es(t,Tt,kn);break;case 4:if(pr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-rn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wT(r/1960))-r,10<r){t.timeoutHandle=Nh(es.bind(null,t,Tt,kn),r);break}es(t,Tt,kn);break;case 5:es(t,Tt,kn);break;default:throw Error(F(329))}}}return xt(t,be()),t.callbackNode===n?wv.bind(null,t):null}function Xh(t,e){var n=So;return t.current.memoizedState.isDehydrated&&(as(t,e).flags|=256),t=ru(t,e),t!==2&&(e=Tt,Tt=n,e!==null&&Jh(e)),t}function Jh(t){Tt===null?Tt=t:Tt.push.apply(Tt,t)}function ET(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!an(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pr(t,e){for(e&=~lf,e&=~Ou,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-rn(e),r=1<<n;t[n]=-1,e&=~r}}function Um(t){if(he&6)throw Error(F(327));oi();var e=Fl(t,0);if(!(e&1))return xt(t,be()),null;var n=ru(t,e);if(t.tag!==0&&n===2){var r=Ih(t);r!==0&&(e=r,n=Xh(t,r))}if(n===1)throw n=Qo,as(t,0),pr(t,e),xt(t,be()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,es(t,Tt,kn),xt(t,be()),null}function cf(t,e){var n=he;he|=1;try{return t(e)}finally{he=n,he===0&&(yi=be()+500,Nu&&Hr())}}function ms(t){vr!==null&&vr.tag===0&&!(he&6)&&oi();var e=he;he|=1;var n=Ut.transition,r=me;try{if(Ut.transition=null,me=1,t)return t()}finally{me=r,Ut.transition=n,he=e,!(he&6)&&Hr()}}function hf(){kt=ei.current,Ie(ei)}function as(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,X1(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(Hd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hl();break;case 3:mi(),Ie(St),Ie(ht),Zd();break;case 5:Jd(r);break;case 4:mi();break;case 13:Ie(Ae);break;case 19:Ie(Ae);break;case 10:Kd(r.type._context);break;case 22:case 23:hf()}n=n.return}if(Ke=t,Le=t=kr(t.current,null),et=kt=e,Be=0,Qo=null,lf=Ou=ps=0,Tt=So=null,rs!==null){for(e=0;e<rs.length;e++)if(n=rs[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}rs=null}return t}function Ev(t,e){do{var n=Le;try{if(Gd(),vl.current=Zl,Jl){for(var r=Ce.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Jl=!1}if(fs=0,qe=Ue=Ce=null,To=!1,qo=0,af.current=null,n===null||n.return===null){Be=1,Qo=e,Le=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=et,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var k=Cm(o);if(k!==null){k.flags&=-257,km(k,o,l,i,e),k.mode&1&&xm(i,h,e),e=k,u=h;var D=e.updateQueue;if(D===null){var V=new Set;V.add(u),e.updateQueue=V}else D.add(u);break e}else{if(!(e&1)){xm(i,h,e),df();break e}u=Error(F(426))}}else if(Se&&l.mode&1){var L=Cm(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),km(L,o,l,i,e),Wd(gi(u,l));break e}}i=u=gi(u,l),Be!==4&&(Be=2),So===null?So=[i]:So.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var S=sv(i,u,e);wm(i,S);break e;case 1:l=u;var T=i.type,C=i.stateNode;if(!(i.flags&128)&&(typeof T.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(xr===null||!xr.has(C)))){i.flags|=65536,e&=-e,i.lanes|=e;var b=iv(i,l,e);wm(i,b);break e}}i=i.return}while(i!==null)}Sv(n)}catch(U){e=U,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(!0)}function Tv(){var t=eu.current;return eu.current=Zl,t===null?Zl:t}function df(){(Be===0||Be===3||Be===2)&&(Be=4),Ke===null||!(ps&268435455)&&!(Ou&268435455)||pr(Ke,et)}function ru(t,e){var n=he;he|=2;var r=Tv();(Ke!==t||et!==e)&&(kn=null,as(t,e));do try{TT();break}catch(s){Ev(t,s)}while(!0);if(Gd(),he=n,eu.current=r,Le!==null)throw Error(F(261));return Ke=null,et=0,Be}function TT(){for(;Le!==null;)Iv(Le)}function IT(){for(;Le!==null&&!KE();)Iv(Le)}function Iv(t){var e=xv(t.alternate,t,kt);t.memoizedProps=t.pendingProps,e===null?Sv(t):Le=e,af.current=null}function Sv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=gT(n,e),n!==null){n.flags&=32767,Le=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Be=6,Le=null;return}}else if(n=mT(n,e,kt),n!==null){Le=n;return}if(e=e.sibling,e!==null){Le=e;return}Le=e=t}while(e!==null);Be===0&&(Be=5)}function es(t,e,n){var r=me,s=Ut.transition;try{Ut.transition=null,me=1,ST(t,e,n,r)}finally{Ut.transition=s,me=r}return null}function ST(t,e,n,r){do oi();while(vr!==null);if(he&6)throw Error(F(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(s1(t,i),t===Ke&&(Le=Ke=null,et=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||rl||(rl=!0,Cv(jl,function(){return oi(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ut.transition,Ut.transition=null;var o=me;me=1;var l=he;he|=4,af.current=null,_T(t,n),_v(n,t),H1(Rh),Ul=!!kh,Rh=kh=null,t.current=n,vT(n),QE(),he=l,me=o,Ut.transition=i}else t.current=n;if(rl&&(rl=!1,vr=t,nu=s),i=t.pendingLanes,i===0&&(xr=null),JE(n.stateNode),xt(t,be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(tu)throw tu=!1,t=Qh,Qh=null,t;return nu&1&&t.tag!==0&&oi(),i=t.pendingLanes,i&1?t===Yh?Ao++:(Ao=0,Yh=t):Ao=0,Hr(),null}function oi(){if(vr!==null){var t=s_(nu),e=Ut.transition,n=me;try{if(Ut.transition=null,me=16>t?16:t,vr===null)var r=!1;else{if(t=vr,vr=null,nu=0,he&6)throw Error(F(331));var s=he;for(he|=4,W=t.current;W!==null;){var i=W,o=i.child;if(W.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(W=h;W!==null;){var f=W;switch(f.tag){case 0:case 11:case 15:Io(8,f,i)}var p=f.child;if(p!==null)p.return=f,W=p;else for(;W!==null;){f=W;var y=f.sibling,k=f.return;if(mv(f),f===h){W=null;break}if(y!==null){y.return=k,W=y;break}W=k}}}var D=i.alternate;if(D!==null){var V=D.child;if(V!==null){D.child=null;do{var L=V.sibling;V.sibling=null,V=L}while(V!==null)}}W=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,W=o;else e:for(;W!==null;){if(i=W,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Io(9,i,i.return)}var S=i.sibling;if(S!==null){S.return=i.return,W=S;break e}W=i.return}}var T=t.current;for(W=T;W!==null;){o=W;var C=o.child;if(o.subtreeFlags&2064&&C!==null)C.return=o,W=C;else e:for(o=T;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:bu(9,l)}}catch(U){Ne(l,l.return,U)}if(l===o){W=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,W=b;break e}W=l.return}}if(he=s,Hr(),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot(xu,t)}catch{}r=!0}return r}finally{me=n,Ut.transition=e}}return!1}function zm(t,e,n){e=gi(n,e),e=sv(t,e,1),t=Ar(t,e,1),e=gt(),t!==null&&(aa(t,1,e),xt(t,e))}function Ne(t,e,n){if(t.tag===3)zm(t,t,n);else for(;e!==null;){if(e.tag===3){zm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xr===null||!xr.has(r))){t=gi(n,t),t=iv(e,t,1),e=Ar(e,t,1),t=gt(),e!==null&&(aa(e,1,t),xt(e,t));break}}e=e.return}}function AT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=gt(),t.pingedLanes|=t.suspendedLanes&n,Ke===t&&(et&n)===n&&(Be===4||Be===3&&(et&130023424)===et&&500>be()-uf?as(t,0):lf|=n),xt(t,e)}function Av(t,e){e===0&&(t.mode&1?(e=Ga,Ga<<=1,!(Ga&130023424)&&(Ga=4194304)):e=1);var n=gt();t=Fn(t,e),t!==null&&(aa(t,e,n),xt(t,n))}function xT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Av(t,n)}function CT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),Av(t,n)}var xv;xv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||St.current)It=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return It=!1,pT(t,e,n);It=!!(t.flags&131072)}else It=!1,Se&&e.flags&1048576&&P_(e,Gl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;El(t,e),t=e.pendingProps;var s=di(e,ht.current);ii(e,n),s=tf(null,e,r,t,s,n);var i=nf();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,At(r)?(i=!0,Wl(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Yd(e),s.updater=Vu,e.stateNode=s,s._reactInternals=e,jh(e,r,t,n),e=zh(null,e,r,!0,i,n)):(e.tag=0,Se&&i&&$d(e),mt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(El(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=RT(r),t=Xt(r,t),s){case 0:e=Uh(null,e,r,t,n);break e;case 1:e=Nm(null,e,r,t,n);break e;case 11:e=Rm(null,e,r,t,n);break e;case 14:e=Pm(null,e,r,Xt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Xt(r,s),Uh(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Xt(r,s),Nm(t,e,r,s,n);case 3:e:{if(uv(e),t===null)throw Error(F(387));r=e.pendingProps,i=e.memoizedState,s=i.element,M_(t,e),Yl(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=gi(Error(F(423)),e),e=Dm(t,e,r,n,s);break e}else if(r!==s){s=gi(Error(F(424)),e),e=Dm(t,e,r,n,s);break e}else for(Rt=Sr(e.stateNode.containerInfo.firstChild),Pt=e,Se=!0,Zt=null,n=b_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fi(),r===s){e=Un(t,e,n);break e}mt(t,e,r,n)}e=e.child}return e;case 5:return L_(e),t===null&&Oh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Ph(r,s)?o=null:i!==null&&Ph(r,i)&&(e.flags|=32),lv(t,e),mt(t,e,o,n),e.child;case 6:return t===null&&Oh(e),null;case 13:return cv(t,e,n);case 4:return Xd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=pi(e,null,r,n):mt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Xt(r,s),Rm(t,e,r,s,n);case 7:return mt(t,e,e.pendingProps,n),e.child;case 8:return mt(t,e,e.pendingProps.children,n),e.child;case 12:return mt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,_e(Kl,r._currentValue),r._currentValue=o,i!==null)if(an(i.value,o)){if(i.children===s.children&&!St.current){e=Un(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=On(-1,n&-n),u.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Mh(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Mh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}mt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,ii(e,n),s=zt(s),r=r(s),e.flags|=1,mt(t,e,r,n),e.child;case 14:return r=e.type,s=Xt(r,e.pendingProps),s=Xt(r.type,s),Pm(t,e,r,s,n);case 15:return ov(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Xt(r,s),El(t,e),e.tag=1,At(r)?(t=!0,Wl(e)):t=!1,ii(e,n),rv(e,r,s),jh(e,r,s,n),zh(null,e,r,!0,t,n);case 19:return hv(t,e,n);case 22:return av(t,e,n)}throw Error(F(156,e.tag))};function Cv(t,e){return e_(t,e)}function kT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(t,e,n,r){return new kT(t,e,n,r)}function ff(t){return t=t.prototype,!(!t||!t.isReactComponent)}function RT(t){if(typeof t=="function")return ff(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Nd)return 11;if(t===Dd)return 14}return 2}function kr(t,e){var n=t.alternate;return n===null?(n=Ft(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Sl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")ff(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Hs:return ls(n.children,s,i,e);case Pd:o=8,s|=8;break;case lh:return t=Ft(12,n,e,s|2),t.elementType=lh,t.lanes=i,t;case uh:return t=Ft(13,n,e,s),t.elementType=uh,t.lanes=i,t;case ch:return t=Ft(19,n,e,s),t.elementType=ch,t.lanes=i,t;case Ly:return Mu(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Oy:o=10;break e;case My:o=9;break e;case Nd:o=11;break e;case Dd:o=14;break e;case hr:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Ft(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function ls(t,e,n,r){return t=Ft(7,t,r,e),t.lanes=n,t}function Mu(t,e,n,r){return t=Ft(22,t,r,e),t.elementType=Ly,t.lanes=n,t.stateNode={isHidden:!1},t}function zc(t,e,n){return t=Ft(6,t,null,e),t.lanes=n,t}function Bc(t,e,n){return e=Ft(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function PT(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tc(0),this.expirationTimes=Tc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function pf(t,e,n,r,s,i,o,l,u){return t=new PT(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Ft(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yd(i),t}function NT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$s,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function kv(t){if(!t)return Or;t=t._reactInternals;e:{if(Ts(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(At(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(At(n))return k_(t,n,e)}return e}function Rv(t,e,n,r,s,i,o,l,u){return t=pf(n,r,!0,t,s,i,o,l,u),t.context=kv(null),n=t.current,r=gt(),s=Cr(n),i=On(r,s),i.callback=e??null,Ar(n,i,s),t.current.lanes=s,aa(t,s,r),xt(t,r),t}function Lu(t,e,n,r){var s=e.current,i=gt(),o=Cr(s);return n=kv(n),e.context===null?e.context=n:e.pendingContext=n,e=On(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ar(s,e,o),t!==null&&(sn(t,s,o,i),_l(t,s,o)),o}function su(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function mf(t,e){Bm(t,e),(t=t.alternate)&&Bm(t,e)}function DT(){return null}var Pv=typeof reportError=="function"?reportError:function(t){console.error(t)};function gf(t){this._internalRoot=t}ju.prototype.render=gf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Lu(t,e,null,null)};ju.prototype.unmount=gf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ms(function(){Lu(null,t,null,null)}),e[jn]=null}};function ju(t){this._internalRoot=t}ju.prototype.unstable_scheduleHydration=function(t){if(t){var e=a_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fr.length&&e!==0&&e<fr[n].priority;n++);fr.splice(n,0,t),n===0&&u_(t)}};function yf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $m(){}function VT(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var h=su(o);i.call(h)}}var o=Rv(e,r,t,0,null,!1,!1,"",$m);return t._reactRootContainer=o,t[jn]=o.current,zo(t.nodeType===8?t.parentNode:t),ms(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var h=su(u);l.call(h)}}var u=pf(t,0,!1,null,null,!1,!1,"",$m);return t._reactRootContainer=u,t[jn]=u.current,zo(t.nodeType===8?t.parentNode:t),ms(function(){Lu(e,u,n,r)}),u}function Uu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=su(o);l.call(u)}}Lu(e,o,t,s)}else o=VT(n,e,t,s,r);return su(o)}i_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=co(e.pendingLanes);n!==0&&(Od(e,n|1),xt(e,be()),!(he&6)&&(yi=be()+500,Hr()))}break;case 13:ms(function(){var r=Fn(t,1);if(r!==null){var s=gt();sn(r,t,1,s)}}),mf(t,1)}};Md=function(t){if(t.tag===13){var e=Fn(t,134217728);if(e!==null){var n=gt();sn(e,t,134217728,n)}mf(t,134217728)}};o_=function(t){if(t.tag===13){var e=Cr(t),n=Fn(t,e);if(n!==null){var r=gt();sn(n,t,e,r)}mf(t,e)}};a_=function(){return me};l_=function(t,e){var n=me;try{return me=t,e()}finally{me=n}};wh=function(t,e,n){switch(e){case"input":if(fh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Pu(r);if(!s)throw Error(F(90));Fy(r),fh(r,s)}}}break;case"textarea":zy(t,n);break;case"select":e=n.value,e!=null&&ti(t,!!n.multiple,e,!1)}};Ky=cf;Qy=ms;var bT={usingClientEntryPoint:!1,Events:[ua,Ks,Pu,qy,Gy,cf]},ao={findFiberByHostInstance:ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},OT={bundleType:ao.bundleType,version:ao.version,rendererPackageName:ao.rendererPackageName,rendererConfig:ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Jy(t),t===null?null:t.stateNode},findFiberByHostInstance:ao.findFiberByHostInstance||DT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sl.isDisabled&&sl.supportsFiber)try{xu=sl.inject(OT),fn=sl}catch{}}Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bT;Dt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yf(e))throw Error(F(200));return NT(t,e,null,n)};Dt.createRoot=function(t,e){if(!yf(t))throw Error(F(299));var n=!1,r="",s=Pv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=pf(t,1,!1,null,null,n,!1,r,s),t[jn]=e.current,zo(t.nodeType===8?t.parentNode:t),new gf(e)};Dt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=Jy(e),t=t===null?null:t.stateNode,t};Dt.flushSync=function(t){return ms(t)};Dt.hydrate=function(t,e,n){if(!Fu(e))throw Error(F(200));return Uu(null,t,e,!0,n)};Dt.hydrateRoot=function(t,e,n){if(!yf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=Pv;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Rv(e,null,t,1,n??null,s,!1,i,o),t[jn]=e.current,zo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new ju(e)};Dt.render=function(t,e,n){if(!Fu(e))throw Error(F(200));return Uu(null,t,e,!1,n)};Dt.unmountComponentAtNode=function(t){if(!Fu(t))throw Error(F(40));return t._reactRootContainer?(ms(function(){Uu(null,null,t,!1,function(){t._reactRootContainer=null,t[jn]=null})}),!0):!1};Dt.unstable_batchedUpdates=cf;Dt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Fu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Uu(t,e,n,!1,r)};Dt.version="18.3.1-next-f1338f8080-20240426";function Nv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nv)}catch(t){console.error(t)}}Nv(),Ny.exports=Dt;var MT=Ny.exports,Dv,Hm=MT;Dv=Hm.createRoot,Hm.hydrateRoot;/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Vv=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=ee.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...l},u)=>ee.createElement("svg",{ref:u,...jT,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Vv("lucide",s),...l},[...o.map(([h,f])=>ee.createElement(h,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=(t,e)=>{const n=ee.forwardRef(({className:r,...s},i)=>ee.createElement(FT,{ref:i,iconNode:e,className:Vv(`lucide-${LT(t)}`,r),...s}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UT=ge("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zT=ge("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BT=ge("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=ge("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=ge("Bell",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=ge("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WT=ge("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=ge("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=ge("ChartPie",[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GT=ge("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=ge("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QT=ge("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=ge("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=ge("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XT=ge("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JT=ge("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=ge("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eI=ge("PiggyBank",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z",key:"1ivx2i"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h.01",key:"xkw8gn"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tI=ge("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nI=ge("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rI=ge("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=ge("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=ge("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const il=ge("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=ge("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=ge("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sI=ge("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ol=ge("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]),iI=()=>{};var Qm={};/**
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
 */const bv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},oI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ov={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let y=(l&15)<<2|h>>6,k=h&63;u||(k=64,o||(y=64)),r.push(n[f],n[p],n[y],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):oI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new aI;const y=i<<2|l>>4;if(r.push(y),h!==64){const k=l<<4&240|h>>2;if(r.push(k),p!==64){const D=h<<6&192|p;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class aI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lI=function(t){const e=bv(t);return Ov.encodeByteArray(e,!0)},iu=function(t){return lI(t).replace(/\./g,"")},Mv=function(t){try{return Ov.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function uI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const cI=()=>uI().__FIREBASE_DEFAULTS__,hI=()=>{if(typeof process>"u"||typeof Qm>"u")return;const t=Qm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},dI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Mv(t[1]);return e&&JSON.parse(e)},zu=()=>{try{return iI()||cI()||hI()||dI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Lv=t=>{var e,n;return(n=(e=zu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},fI=t=>{const e=Lv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},jv=()=>{var t;return(t=zu())==null?void 0:t.config},Fv=t=>{var e;return(e=zu())==null?void 0:e[`_${t}`]};/**
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
 */class pI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ri(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Uv(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function mI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[iu(JSON.stringify(n)),iu(JSON.stringify(o)),""].join(".")}const xo={};function gI(){const t={prod:[],emulator:[]};for(const e of Object.keys(xo))xo[e]?t.emulator.push(e):t.prod.push(e);return t}function yI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Ym=!1;function zv(t,e){if(typeof window>"u"||typeof document>"u"||!Ri(window.location.host)||xo[t]===e||xo[t]||Ym)return;xo[t]=e;function n(y){return`__firebase__banner__${y}`}const r="__firebase__banner",i=gI().prod.length>0;function o(){const y=document.getElementById(r);y&&y.remove()}function l(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function u(y,k){y.setAttribute("width","24"),y.setAttribute("id",k),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function h(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{Ym=!0,o()},y}function f(y,k){y.setAttribute("id",k),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function p(){const y=yI(r),k=n("text"),D=document.getElementById(k)||document.createElement("span"),V=n("learnmore"),L=document.getElementById(V)||document.createElement("a"),S=n("preprendIcon"),T=document.getElementById(S)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const C=y.element;l(C),f(L,V);const b=h();u(T,S),C.append(T,D,L,b),document.body.appendChild(C)}i?(D.innerText="Preview backend disconnected.",T.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(T.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,D.innerText="Preview backend running in this workspace."),D.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _I(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function vI(){var e;const t=(e=zu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function EI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function TI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function II(){const t=dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function SI(){return!vI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function AI(){try{return typeof indexedDB=="object"}catch{return!1}}function xI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const CI="FirebaseError";class qn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=CI,Object.setPrototypeOf(this,qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ha.prototype.create)}}class ha{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?kI(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new qn(s,l,r)}}function kI(t,e){return t.replace(RI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const RI=/\{\$([^}]+)}/g;function PI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function gs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Xm(i)&&Xm(o)){if(!gs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Xm(t){return t!==null&&typeof t=="object"}/**
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
 */function da(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function NI(t,e){const n=new DI(t,e);return n.subscribe.bind(n)}class DI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");VI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=qc),s.error===void 0&&(s.error=qc),s.complete===void 0&&(s.complete=qc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function VI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qc(){}/**
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
 */function $t(t){return t&&t._delegate?t._delegate:t}class ys{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ts="[DEFAULT]";/**
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
 */class bI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new pI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(MI(e))try{this.getOrInitializeService({instanceIdentifier:ts})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ts){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ts){return this.instances.has(e)}getOptions(e=ts){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:OI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ts){return this.component?this.component.multipleInstances?e:ts:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function OI(t){return t===ts?void 0:t}function MI(t){return t.instantiationMode==="EAGER"}/**
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
 */class LI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const jI={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},FI=oe.INFO,UI={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},zI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=UI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _f{constructor(e){this.name=e,this._logLevel=FI,this._logHandler=zI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const BI=(t,e)=>e.some(n=>t instanceof n);let Jm,Zm;function $I(){return Jm||(Jm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function HI(){return Zm||(Zm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bv=new WeakMap,Zh=new WeakMap,$v=new WeakMap,Gc=new WeakMap,vf=new WeakMap;function WI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Rr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Bv.set(n,t)}).catch(()=>{}),vf.set(e,t),e}function qI(t){if(Zh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Zh.set(t,e)}let ed={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$v.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function GI(t){ed=t(ed)}function KI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Kc(this),e,...n);return $v.set(r,e.sort?e.sort():[e]),Rr(r)}:HI().includes(t)?function(...e){return t.apply(Kc(this),e),Rr(Bv.get(this))}:function(...e){return Rr(t.apply(Kc(this),e))}}function QI(t){return typeof t=="function"?KI(t):(t instanceof IDBTransaction&&qI(t),BI(t,$I())?new Proxy(t,ed):t)}function Rr(t){if(t instanceof IDBRequest)return WI(t);if(Gc.has(t))return Gc.get(t);const e=QI(t);return e!==t&&(Gc.set(t,e),vf.set(e,t)),e}const Kc=t=>vf.get(t);function YI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Rr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Rr(o.result),u.oldVersion,u.newVersion,Rr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const XI=["get","getKey","getAll","getAllKeys","count"],JI=["put","add","delete","clear"],Qc=new Map;function eg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qc.get(e))return Qc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=JI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||XI.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return Qc.set(e,i),i}GI(t=>({...t,get:(e,n,r)=>eg(e,n)||t.get(e,n,r),has:(e,n)=>!!eg(e,n)||t.has(e,n)}));/**
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
 */class ZI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(eS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function eS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const td="@firebase/app",tg="0.14.6";/**
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
 */const zn=new _f("@firebase/app"),tS="@firebase/app-compat",nS="@firebase/analytics-compat",rS="@firebase/analytics",sS="@firebase/app-check-compat",iS="@firebase/app-check",oS="@firebase/auth",aS="@firebase/auth-compat",lS="@firebase/database",uS="@firebase/data-connect",cS="@firebase/database-compat",hS="@firebase/functions",dS="@firebase/functions-compat",fS="@firebase/installations",pS="@firebase/installations-compat",mS="@firebase/messaging",gS="@firebase/messaging-compat",yS="@firebase/performance",_S="@firebase/performance-compat",vS="@firebase/remote-config",wS="@firebase/remote-config-compat",ES="@firebase/storage",TS="@firebase/storage-compat",IS="@firebase/firestore",SS="@firebase/ai",AS="@firebase/firestore-compat",xS="firebase",CS="12.6.0";/**
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
 */const nd="[DEFAULT]",kS={[td]:"fire-core",[tS]:"fire-core-compat",[rS]:"fire-analytics",[nS]:"fire-analytics-compat",[iS]:"fire-app-check",[sS]:"fire-app-check-compat",[oS]:"fire-auth",[aS]:"fire-auth-compat",[lS]:"fire-rtdb",[uS]:"fire-data-connect",[cS]:"fire-rtdb-compat",[hS]:"fire-fn",[dS]:"fire-fn-compat",[fS]:"fire-iid",[pS]:"fire-iid-compat",[mS]:"fire-fcm",[gS]:"fire-fcm-compat",[yS]:"fire-perf",[_S]:"fire-perf-compat",[vS]:"fire-rc",[wS]:"fire-rc-compat",[ES]:"fire-gcs",[TS]:"fire-gcs-compat",[IS]:"fire-fst",[AS]:"fire-fst-compat",[SS]:"fire-vertex","fire-js":"fire-js",[xS]:"fire-js-all"};/**
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
 */const ou=new Map,RS=new Map,rd=new Map;function ng(t,e){try{t.container.addComponent(e)}catch(n){zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _i(t){const e=t.name;if(rd.has(e))return zn.debug(`There were multiple attempts to register component ${e}.`),!1;rd.set(e,t);for(const n of ou.values())ng(n,t);for(const n of RS.values())ng(n,t);return!0}function wf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function en(t){return t==null?!1:t.settings!==void 0}/**
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
 */const PS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pr=new ha("app","Firebase",PS);/**
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
 */class NS{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ys("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pr.create("app-deleted",{appName:this._name})}}/**
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
 */const Pi=CS;function Hv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:nd,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Pr.create("bad-app-name",{appName:String(s)});if(n||(n=jv()),!n)throw Pr.create("no-options");const i=ou.get(s);if(i){if(gs(n,i.options)&&gs(r,i.config))return i;throw Pr.create("duplicate-app",{appName:s})}const o=new LI(s);for(const u of rd.values())o.addComponent(u);const l=new NS(n,r,o);return ou.set(s,l),l}function Wv(t=nd){const e=ou.get(t);if(!e&&t===nd&&jv())return Hv();if(!e)throw Pr.create("no-app",{appName:t});return e}function Nr(t,e,n){let r=kS[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zn.warn(o.join(" "));return}_i(new ys(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const DS="firebase-heartbeat-database",VS=1,Yo="firebase-heartbeat-store";let Yc=null;function qv(){return Yc||(Yc=YI(DS,VS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Yo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Pr.create("idb-open",{originalErrorMessage:t.message})})),Yc}async function bS(t){try{const n=(await qv()).transaction(Yo),r=await n.objectStore(Yo).get(Gv(t));return await n.done,r}catch(e){if(e instanceof qn)zn.warn(e.message);else{const n=Pr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zn.warn(n.message)}}}async function rg(t,e){try{const r=(await qv()).transaction(Yo,"readwrite");await r.objectStore(Yo).put(e,Gv(t)),await r.done}catch(n){if(n instanceof qn)zn.warn(n.message);else{const r=Pr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zn.warn(r.message)}}}function Gv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const OS=1024,MS=30;class LS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new FS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=sg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>MS){const o=US(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){zn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=sg(),{heartbeatsToSend:r,unsentEntries:s}=jS(this._heartbeatsCache.heartbeats),i=iu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return zn.warn(n),""}}}function sg(){return new Date().toISOString().substring(0,10)}function jS(t,e=OS){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ig(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ig(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class FS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return AI()?xI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await bS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return rg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return rg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ig(t){return iu(JSON.stringify({version:2,heartbeats:t})).length}function US(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function zS(t){_i(new ys("platform-logger",e=>new ZI(e),"PRIVATE")),_i(new ys("heartbeat",e=>new LS(e),"PRIVATE")),Nr(td,tg,t),Nr(td,tg,"esm2020"),Nr("fire-js","")}zS("");var BS="firebase",$S="12.6.0";/**
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
 */Nr(BS,$S,"app");function Kv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HS=Kv,Qv=new ha("auth","Firebase",Kv());/**
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
 */const au=new _f("@firebase/auth");function WS(t,...e){au.logLevel<=oe.WARN&&au.warn(`Auth (${Pi}): ${t}`,...e)}function Al(t,...e){au.logLevel<=oe.ERROR&&au.error(`Auth (${Pi}): ${t}`,...e)}/**
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
 */function wn(t,...e){throw Tf(t,...e)}function on(t,...e){return Tf(t,...e)}function Ef(t,e,n){const r={...HS(),[e]:n};return new ha("auth","Firebase",r).create(e,{appName:t.name})}function us(t){return Ef(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qS(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&wn(t,"argument-error"),Ef(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Tf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Qv.create(t,...e)}function J(t,e,...n){if(!t)throw Tf(e,...n)}function Vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Al(e),new Error(e)}function Bn(t,e){t||Vn(e)}/**
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
 */function sd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function GS(){return og()==="http:"||og()==="https:"}function og(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function KS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(GS()||EI()||"connection"in navigator)?navigator.onLine:!0}function QS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class fa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Bn(n>e,"Short delay should be less than long delay!"),this.isMobile=_I()||TI()}get(){return KS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function If(t,e){Bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Yv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const YS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const XS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],JS=new fa(3e4,6e4);function Sf(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ni(t,e,n,r,s={}){return Xv(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=da({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...i};return wI()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Ri(t.emulatorConfig.host)&&(h.credentials="include"),Yv.fetch()(await Jv(t,t.config.apiHost,n,l),h)})}async function Xv(t,e,n){t._canInitEmulator=!1;const r={...YS,...e};try{const s=new eA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw al(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw al(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw al(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw al(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Ef(t,f,h);wn(t,f)}}catch(s){if(s instanceof qn)throw s;wn(t,"network-request-failed",{message:String(s)})}}async function ZS(t,e,n,r,s={}){const i=await Ni(t,e,n,r,s);return"mfaPendingCredential"in i&&wn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Jv(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?If(t.config,s):`${t.config.apiScheme}://${s}`;return XS.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class eA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(on(this.auth,"network-request-failed")),JS.get())})}}function al(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=on(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function tA(t,e){return Ni(t,"POST","/v1/accounts:delete",e)}async function lu(t,e){return Ni(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Co(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nA(t,e=!1){const n=$t(t),r=await n.getIdToken(e),s=Af(r);J(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Co(Xc(s.auth_time)),issuedAtTime:Co(Xc(s.iat)),expirationTime:Co(Xc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Xc(t){return Number(t)*1e3}function Af(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Al("JWT malformed, contained fewer than 3 sections"),null;try{const s=Mv(n);return s?JSON.parse(s):(Al("Failed to decode base64 JWT payload"),null)}catch(s){return Al("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ag(t){const e=Af(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Xo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof qn&&rA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function rA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class sA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class id{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Co(this.lastLoginAt),this.creationTime=Co(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function uu(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Xo(t,lu(e,{idToken:n}));J(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?Zv(s.providerUserInfo):[],o=oA(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new id(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function iA(t){const e=$t(t);await uu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Zv(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function aA(t,e){const n=await Xv(t,{},async()=>{const r=da({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Jv(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Ri(t.emulatorConfig.host)&&(u.credentials="include"),Yv.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function lA(t,e){return Ni(t,"POST","/v2/accounts:revokeToken",Sf(t,e))}/**
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
 */class ai{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ag(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=ag(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await aA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ai;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(J(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(J(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ai,this.toJSON())}_performRefresh(){return Vn("not implemented")}}/**
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
 */function cr(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class tn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new sA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new id(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Xo(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return nA(this,e)}reload(){return iA(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new tn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await uu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(en(this.auth.app))return Promise.reject(us(this.auth));const e=await this.getIdToken();return await Xo(this,tA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:y,isAnonymous:k,providerData:D,stsTokenManager:V}=n;J(p&&V,e,"internal-error");const L=ai.fromJSON(this.name,V);J(typeof p=="string",e,"internal-error"),cr(r,e.name),cr(s,e.name),J(typeof y=="boolean",e,"internal-error"),J(typeof k=="boolean",e,"internal-error"),cr(i,e.name),cr(o,e.name),cr(l,e.name),cr(u,e.name),cr(h,e.name),cr(f,e.name);const S=new tn({uid:p,auth:e,email:s,emailVerified:y,displayName:r,isAnonymous:k,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:L,createdAt:h,lastLoginAt:f});return D&&Array.isArray(D)&&(S.providerData=D.map(T=>({...T}))),u&&(S._redirectEventId=u),S}static async _fromIdTokenResponse(e,n,r=!1){const s=new ai;s.updateFromServerResponse(n);const i=new tn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await uu(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];J(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Zv(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new ai;l.updateFromIdToken(r);const u=new tn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new id(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
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
 */const lg=new Map;function bn(t){Bn(t instanceof Function,"Expected a class definition");let e=lg.get(t);return e?(Bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,lg.set(t,e),e)}/**
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
 */class e0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}e0.type="NONE";const ug=e0;/**
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
 */function xl(t,e,n){return`firebase:${t}:${e}:${n}`}class li{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=xl(this.userKey,s.apiKey,i),this.fullPersistenceKey=xl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await lu(this.auth,{idToken:e}).catch(()=>{});return n?tn._fromGetAccountInfoResponse(this.auth,n,e):null}return tn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new li(bn(ug),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||bn(ug);const o=xl(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const y=await lu(e,{idToken:f}).catch(()=>{});if(!y)break;p=await tn._fromGetAccountInfoResponse(e,y,f)}else p=tn._fromJSON(e,f);h!==i&&(l=p),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new li(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new li(i,e,r))}}/**
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
 */function cg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(s0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(t0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(o0(e))return"Blackberry";if(a0(e))return"Webos";if(n0(e))return"Safari";if((e.includes("chrome/")||r0(e))&&!e.includes("edge/"))return"Chrome";if(i0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function t0(t=dt()){return/firefox\//i.test(t)}function n0(t=dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function r0(t=dt()){return/crios\//i.test(t)}function s0(t=dt()){return/iemobile/i.test(t)}function i0(t=dt()){return/android/i.test(t)}function o0(t=dt()){return/blackberry/i.test(t)}function a0(t=dt()){return/webos/i.test(t)}function xf(t=dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function uA(t=dt()){var e;return xf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function cA(){return II()&&document.documentMode===10}function l0(t=dt()){return xf(t)||i0(t)||a0(t)||o0(t)||/windows phone/i.test(t)||s0(t)}/**
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
 */function u0(t,e=[]){let n;switch(t){case"Browser":n=cg(dt());break;case"Worker":n=`${cg(dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Pi}/${r}`}/**
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
 */class hA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function dA(t,e={}){return Ni(t,"GET","/v2/passwordPolicy",Sf(t,e))}/**
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
 */const fA=6;class pA{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??fA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class mA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hg(this),this.idTokenSubscription=new hg(this),this.beforeStateQueue=new hA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=bn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await li.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await lu(this,{idToken:e}),r=await tn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(en(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await uu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=QS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(en(this.app))return Promise.reject(us(this));const n=e?$t(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return en(this.app)?Promise.reject(us(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return en(this.app)?Promise.reject(us(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await dA(this),n=new pA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ha("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await lA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&bn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await li.create(this,[bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=u0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(en(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&WS(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Bu(t){return $t(t)}class hg{constructor(e){this.auth=e,this.observer=null,this.addObserver=NI(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Cf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gA(t){Cf=t}function yA(t){return Cf.loadJS(t)}function _A(){return Cf.gapiScript}function vA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function wA(t,e){const n=wf(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(gs(i,e??{}))return s;wn(s,"already-initialized")}return n.initialize({options:e})}function EA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(bn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function TA(t,e,n){const r=Bu(t);J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=c0(e),{host:o,port:l}=IA(e),u=l===null?"":`:${l}`,h={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){J(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),J(gs(h,r.config.emulator)&&gs(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ri(o)?(Uv(`${i}//${o}${u}`),zv("Auth",!0)):SA()}function c0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function IA(t){const e=c0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:dg(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:dg(o)}}}function dg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function SA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class h0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vn("not implemented")}_getIdTokenResponse(e){return Vn("not implemented")}_linkToIdToken(e,n){return Vn("not implemented")}_getReauthenticationResolver(e){return Vn("not implemented")}}/**
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
 */async function ui(t,e){return ZS(t,"POST","/v1/accounts:signInWithIdp",Sf(t,e))}/**
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
 */const AA="http://localhost";class _s extends h0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _s(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new _s(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ui(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ui(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ui(e,n)}buildRequest(){const e={requestUri:AA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=da(n)}return e}}/**
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
 */class kf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class pa extends kf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class mr extends pa{constructor(){super("facebook.com")}static credential(e){return _s._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mr.credential(e.oauthAccessToken)}catch{return null}}}mr.FACEBOOK_SIGN_IN_METHOD="facebook.com";mr.PROVIDER_ID="facebook.com";/**
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
 */class Pn extends pa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _s._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Pn.credential(n,r)}catch{return null}}}Pn.GOOGLE_SIGN_IN_METHOD="google.com";Pn.PROVIDER_ID="google.com";/**
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
 */class gr extends pa{constructor(){super("github.com")}static credential(e){return _s._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gr.credential(e.oauthAccessToken)}catch{return null}}}gr.GITHUB_SIGN_IN_METHOD="github.com";gr.PROVIDER_ID="github.com";/**
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
 */class yr extends pa{constructor(){super("twitter.com")}static credential(e,n){return _s._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return yr.credential(n,r)}catch{return null}}}yr.TWITTER_SIGN_IN_METHOD="twitter.com";yr.PROVIDER_ID="twitter.com";/**
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
 */class vi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await tn._fromIdTokenResponse(e,r,s),o=fg(r);return new vi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=fg(r);return new vi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function fg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class cu extends qn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,cu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new cu(e,n,r,s)}}function d0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?cu._fromErrorAndOperation(t,i,e,r):i})}async function xA(t,e,n=!1){const r=await Xo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vi._forOperation(t,"link",r)}/**
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
 */async function CA(t,e,n=!1){const{auth:r}=t;if(en(r.app))return Promise.reject(us(r));const s="reauthenticate";try{const i=await Xo(t,d0(r,s,e,t),n);J(i.idToken,r,"internal-error");const o=Af(i.idToken);J(o,r,"internal-error");const{sub:l}=o;return J(t.uid===l,r,"user-mismatch"),vi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&wn(r,"user-mismatch"),i}}/**
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
 */async function kA(t,e,n=!1){if(en(t.app))return Promise.reject(us(t));const r="signIn",s=await d0(t,r,e),i=await vi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function RA(t,e,n,r){return $t(t).onIdTokenChanged(e,n,r)}function PA(t,e,n){return $t(t).beforeAuthStateChanged(e,n)}function NA(t,e,n,r){return $t(t).onAuthStateChanged(e,n,r)}function DA(t){return $t(t).signOut()}const hu="__sak";/**
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
 */class f0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hu,"1"),this.storage.removeItem(hu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const VA=1e3,bA=10;class p0 extends f0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=l0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);cA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,bA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},VA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}p0.type="LOCAL";const OA=p0;/**
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
 */class m0 extends f0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}m0.type="SESSION";const g0=m0;/**
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
 */function MA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class $u{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new $u(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),u=await MA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$u.receivers=[];/**
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
 */function Rf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class LA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const h=Rf("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const y=p;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(y.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function mn(){return window}function jA(t){mn().location.href=t}/**
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
 */function y0(){return typeof mn().WorkerGlobalScope<"u"&&typeof mn().importScripts=="function"}async function FA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function UA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function zA(){return y0()?self:null}/**
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
 */const _0="firebaseLocalStorageDb",BA=1,du="firebaseLocalStorage",v0="fbase_key";class ma{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hu(t,e){return t.transaction([du],e?"readwrite":"readonly").objectStore(du)}function $A(){const t=indexedDB.deleteDatabase(_0);return new ma(t).toPromise()}function od(){const t=indexedDB.open(_0,BA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(du,{keyPath:v0})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(du)?e(r):(r.close(),await $A(),e(await od()))})})}async function pg(t,e,n){const r=Hu(t,!0).put({[v0]:e,value:n});return new ma(r).toPromise()}async function HA(t,e){const n=Hu(t,!1).get(e),r=await new ma(n).toPromise();return r===void 0?null:r.value}function mg(t,e){const n=Hu(t,!0).delete(e);return new ma(n).toPromise()}const WA=800,qA=3;class w0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await od(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>qA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return y0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$u._getInstance(zA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await FA(),!this.activeServiceWorker)return;this.sender=new LA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||UA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await od();return await pg(e,hu,"1"),await mg(e,hu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>pg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>HA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>mg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Hu(s,!1).getAll();return new ma(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}w0.type="LOCAL";const GA=w0;new fa(3e4,6e4);/**
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
 */function E0(t,e){return e?bn(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Pf extends h0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ui(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ui(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ui(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function KA(t){return kA(t.auth,new Pf(t),t.bypassAuthState)}function QA(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),CA(n,new Pf(t),t.bypassAuthState)}async function YA(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),xA(n,new Pf(t),t.bypassAuthState)}/**
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
 */class T0{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return KA;case"linkViaPopup":case"linkViaRedirect":return YA;case"reauthViaPopup":case"reauthViaRedirect":return QA;default:wn(this.auth,"internal-error")}}resolve(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const XA=new fa(2e3,1e4);async function JA(t,e,n){if(en(t.app))return Promise.reject(on(t,"operation-not-supported-in-this-environment"));const r=Bu(t);qS(t,e,kf);const s=E0(r,n);return new is(r,"signInViaPopup",e,s).executeNotNull()}class is extends T0{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,is.currentPopupAction&&is.currentPopupAction.cancel(),is.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Bn(this.filter.length===1,"Popup operations only handle one event");const e=Rf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,is.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,XA.get())};e()}}is.currentPopupAction=null;/**
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
 */const ZA="pendingRedirect",Cl=new Map;class ex extends T0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Cl.get(this.auth._key());if(!e){try{const r=await tx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Cl.set(this.auth._key(),e)}return this.bypassAuthState||Cl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tx(t,e){const n=sx(e),r=rx(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function nx(t,e){Cl.set(t._key(),e)}function rx(t){return bn(t._redirectPersistence)}function sx(t){return xl(ZA,t.config.apiKey,t.name)}async function ix(t,e,n=!1){if(en(t.app))return Promise.reject(us(t));const r=Bu(t),s=E0(r,e),o=await new ex(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const ox=10*60*1e3;class ax{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!I0(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(on(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ox&&this.cachedEventUids.clear(),this.cachedEventUids.has(gg(e))}saveEventToCache(e){this.cachedEventUids.add(gg(e)),this.lastProcessedEventTime=Date.now()}}function gg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function I0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return I0(t);default:return!1}}/**
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
 */async function ux(t,e={}){return Ni(t,"GET","/v1/projects",e)}/**
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
 */const cx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hx=/^https?/;async function dx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ux(t);for(const n of e)try{if(fx(n))return}catch{}wn(t,"unauthorized-domain")}function fx(t){const e=sd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!hx.test(n))return!1;if(cx.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const px=new fa(3e4,6e4);function yg(){const t=mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mx(t){return new Promise((e,n)=>{var s,i,o;function r(){yg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yg(),n(on(t,"network-request-failed"))},timeout:px.get()})}if((i=(s=mn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=mn().gapi)!=null&&o.load)r();else{const l=vA("iframefcb");return mn()[l]=()=>{gapi.load?r():n(on(t,"network-request-failed"))},yA(`${_A()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw kl=null,e})}let kl=null;function gx(t){return kl=kl||mx(t),kl}/**
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
 */const yx=new fa(5e3,15e3),_x="__/auth/iframe",vx="emulator/auth/iframe",wx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ex=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Tx(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?If(e,vx):`https://${t.config.authDomain}/${_x}`,r={apiKey:e.apiKey,appName:t.name,v:Pi},s=Ex.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${da(r).slice(1)}`}async function Ix(t){const e=await gx(t),n=mn().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:Tx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wx,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=on(t,"network-request-failed"),l=mn().setTimeout(()=>{i(o)},yx.get());function u(){mn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const Sx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ax=500,xx=600,Cx="_blank",kx="http://localhost";class _g{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Rx(t,e,n,r=Ax,s=xx){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...Sx,width:r.toString(),height:s.toString(),top:i,left:o},h=dt().toLowerCase();n&&(l=r0(h)?Cx:n),t0(h)&&(e=e||kx,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[k,D])=>`${y}${k}=${D},`,"");if(uA(h)&&l!=="_self")return Px(e||"",l),new _g(null);const p=window.open(e||"",l,f);J(p,t,"popup-blocked");try{p.focus()}catch{}return new _g(p)}function Px(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Nx="__/auth/handler",Dx="emulator/auth/handler",Vx=encodeURIComponent("fac");async function vg(t,e,n,r,s,i){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Pi,eventId:s};if(e instanceof kf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",PI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof pa){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${Vx}=${encodeURIComponent(u)}`:"";return`${bx(t)}?${da(l).slice(1)}${h}`}function bx({config:t}){return t.emulator?If(t,Dx):`https://${t.authDomain}/${Nx}`}/**
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
 */const Jc="webStorageSupport";class Ox{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=g0,this._completeRedirectFn=ix,this._overrideRedirectResult=nx}async _openPopup(e,n,r,s){var o;Bn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await vg(e,n,r,sd(),s);return Rx(e,i,Rf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await vg(e,n,r,sd(),s);return jA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Bn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ix(e),r=new ax(e);return n.register("authEvent",s=>(J(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Jc,{type:Jc},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Jc];i!==void 0&&n(!!i),wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return l0()||n0()||xf()}}const Mx=Ox;var wg="@firebase/auth",Eg="1.11.1";/**
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
 */class Lx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function jx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Fx(t){_i(new ys("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:u0(t)},h=new mA(r,s,i,u);return EA(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),_i(new ys("auth-internal",e=>{const n=Bu(e.getProvider("auth").getImmediate());return(r=>new Lx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nr(wg,Eg,jx(t)),Nr(wg,Eg,"esm2020")}/**
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
 */const Ux=5*60,zx=Fv("authIdTokenMaxAge")||Ux;let Tg=null;const Bx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>zx)return;const s=n==null?void 0:n.token;Tg!==s&&(Tg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function $x(t=Wv()){const e=wf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=wA(t,{popupRedirectResolver:Mx,persistence:[GA,OA,g0]}),r=Fv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Bx(i.toString());PA(n,o,()=>o(n.currentUser)),RA(n,l=>o(l))}}const s=Lv("auth");return s&&TA(n,`http://${s}`),n}function Hx(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}gA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=on("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Hx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Fx("Browser");var Ig=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dr,S0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,_){function w(){}w.prototype=_.prototype,v.F=_.prototype,v.prototype=new w,v.prototype.constructor=v,v.D=function(I,x,R){for(var E=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)E[Oe-2]=arguments[Oe];return _.prototype[x].apply(I,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,_,w){w||(w=0);const I=Array(16);if(typeof _=="string")for(var x=0;x<16;++x)I[x]=_.charCodeAt(w++)|_.charCodeAt(w++)<<8|_.charCodeAt(w++)<<16|_.charCodeAt(w++)<<24;else for(x=0;x<16;++x)I[x]=_[w++]|_[w++]<<8|_[w++]<<16|_[w++]<<24;_=v.g[0],w=v.g[1],x=v.g[2];let R=v.g[3],E;E=_+(R^w&(x^R))+I[0]+3614090360&4294967295,_=w+(E<<7&4294967295|E>>>25),E=R+(x^_&(w^x))+I[1]+3905402710&4294967295,R=_+(E<<12&4294967295|E>>>20),E=x+(w^R&(_^w))+I[2]+606105819&4294967295,x=R+(E<<17&4294967295|E>>>15),E=w+(_^x&(R^_))+I[3]+3250441966&4294967295,w=x+(E<<22&4294967295|E>>>10),E=_+(R^w&(x^R))+I[4]+4118548399&4294967295,_=w+(E<<7&4294967295|E>>>25),E=R+(x^_&(w^x))+I[5]+1200080426&4294967295,R=_+(E<<12&4294967295|E>>>20),E=x+(w^R&(_^w))+I[6]+2821735955&4294967295,x=R+(E<<17&4294967295|E>>>15),E=w+(_^x&(R^_))+I[7]+4249261313&4294967295,w=x+(E<<22&4294967295|E>>>10),E=_+(R^w&(x^R))+I[8]+1770035416&4294967295,_=w+(E<<7&4294967295|E>>>25),E=R+(x^_&(w^x))+I[9]+2336552879&4294967295,R=_+(E<<12&4294967295|E>>>20),E=x+(w^R&(_^w))+I[10]+4294925233&4294967295,x=R+(E<<17&4294967295|E>>>15),E=w+(_^x&(R^_))+I[11]+2304563134&4294967295,w=x+(E<<22&4294967295|E>>>10),E=_+(R^w&(x^R))+I[12]+1804603682&4294967295,_=w+(E<<7&4294967295|E>>>25),E=R+(x^_&(w^x))+I[13]+4254626195&4294967295,R=_+(E<<12&4294967295|E>>>20),E=x+(w^R&(_^w))+I[14]+2792965006&4294967295,x=R+(E<<17&4294967295|E>>>15),E=w+(_^x&(R^_))+I[15]+1236535329&4294967295,w=x+(E<<22&4294967295|E>>>10),E=_+(x^R&(w^x))+I[1]+4129170786&4294967295,_=w+(E<<5&4294967295|E>>>27),E=R+(w^x&(_^w))+I[6]+3225465664&4294967295,R=_+(E<<9&4294967295|E>>>23),E=x+(_^w&(R^_))+I[11]+643717713&4294967295,x=R+(E<<14&4294967295|E>>>18),E=w+(R^_&(x^R))+I[0]+3921069994&4294967295,w=x+(E<<20&4294967295|E>>>12),E=_+(x^R&(w^x))+I[5]+3593408605&4294967295,_=w+(E<<5&4294967295|E>>>27),E=R+(w^x&(_^w))+I[10]+38016083&4294967295,R=_+(E<<9&4294967295|E>>>23),E=x+(_^w&(R^_))+I[15]+3634488961&4294967295,x=R+(E<<14&4294967295|E>>>18),E=w+(R^_&(x^R))+I[4]+3889429448&4294967295,w=x+(E<<20&4294967295|E>>>12),E=_+(x^R&(w^x))+I[9]+568446438&4294967295,_=w+(E<<5&4294967295|E>>>27),E=R+(w^x&(_^w))+I[14]+3275163606&4294967295,R=_+(E<<9&4294967295|E>>>23),E=x+(_^w&(R^_))+I[3]+4107603335&4294967295,x=R+(E<<14&4294967295|E>>>18),E=w+(R^_&(x^R))+I[8]+1163531501&4294967295,w=x+(E<<20&4294967295|E>>>12),E=_+(x^R&(w^x))+I[13]+2850285829&4294967295,_=w+(E<<5&4294967295|E>>>27),E=R+(w^x&(_^w))+I[2]+4243563512&4294967295,R=_+(E<<9&4294967295|E>>>23),E=x+(_^w&(R^_))+I[7]+1735328473&4294967295,x=R+(E<<14&4294967295|E>>>18),E=w+(R^_&(x^R))+I[12]+2368359562&4294967295,w=x+(E<<20&4294967295|E>>>12),E=_+(w^x^R)+I[5]+4294588738&4294967295,_=w+(E<<4&4294967295|E>>>28),E=R+(_^w^x)+I[8]+2272392833&4294967295,R=_+(E<<11&4294967295|E>>>21),E=x+(R^_^w)+I[11]+1839030562&4294967295,x=R+(E<<16&4294967295|E>>>16),E=w+(x^R^_)+I[14]+4259657740&4294967295,w=x+(E<<23&4294967295|E>>>9),E=_+(w^x^R)+I[1]+2763975236&4294967295,_=w+(E<<4&4294967295|E>>>28),E=R+(_^w^x)+I[4]+1272893353&4294967295,R=_+(E<<11&4294967295|E>>>21),E=x+(R^_^w)+I[7]+4139469664&4294967295,x=R+(E<<16&4294967295|E>>>16),E=w+(x^R^_)+I[10]+3200236656&4294967295,w=x+(E<<23&4294967295|E>>>9),E=_+(w^x^R)+I[13]+681279174&4294967295,_=w+(E<<4&4294967295|E>>>28),E=R+(_^w^x)+I[0]+3936430074&4294967295,R=_+(E<<11&4294967295|E>>>21),E=x+(R^_^w)+I[3]+3572445317&4294967295,x=R+(E<<16&4294967295|E>>>16),E=w+(x^R^_)+I[6]+76029189&4294967295,w=x+(E<<23&4294967295|E>>>9),E=_+(w^x^R)+I[9]+3654602809&4294967295,_=w+(E<<4&4294967295|E>>>28),E=R+(_^w^x)+I[12]+3873151461&4294967295,R=_+(E<<11&4294967295|E>>>21),E=x+(R^_^w)+I[15]+530742520&4294967295,x=R+(E<<16&4294967295|E>>>16),E=w+(x^R^_)+I[2]+3299628645&4294967295,w=x+(E<<23&4294967295|E>>>9),E=_+(x^(w|~R))+I[0]+4096336452&4294967295,_=w+(E<<6&4294967295|E>>>26),E=R+(w^(_|~x))+I[7]+1126891415&4294967295,R=_+(E<<10&4294967295|E>>>22),E=x+(_^(R|~w))+I[14]+2878612391&4294967295,x=R+(E<<15&4294967295|E>>>17),E=w+(R^(x|~_))+I[5]+4237533241&4294967295,w=x+(E<<21&4294967295|E>>>11),E=_+(x^(w|~R))+I[12]+1700485571&4294967295,_=w+(E<<6&4294967295|E>>>26),E=R+(w^(_|~x))+I[3]+2399980690&4294967295,R=_+(E<<10&4294967295|E>>>22),E=x+(_^(R|~w))+I[10]+4293915773&4294967295,x=R+(E<<15&4294967295|E>>>17),E=w+(R^(x|~_))+I[1]+2240044497&4294967295,w=x+(E<<21&4294967295|E>>>11),E=_+(x^(w|~R))+I[8]+1873313359&4294967295,_=w+(E<<6&4294967295|E>>>26),E=R+(w^(_|~x))+I[15]+4264355552&4294967295,R=_+(E<<10&4294967295|E>>>22),E=x+(_^(R|~w))+I[6]+2734768916&4294967295,x=R+(E<<15&4294967295|E>>>17),E=w+(R^(x|~_))+I[13]+1309151649&4294967295,w=x+(E<<21&4294967295|E>>>11),E=_+(x^(w|~R))+I[4]+4149444226&4294967295,_=w+(E<<6&4294967295|E>>>26),E=R+(w^(_|~x))+I[11]+3174756917&4294967295,R=_+(E<<10&4294967295|E>>>22),E=x+(_^(R|~w))+I[2]+718787259&4294967295,x=R+(E<<15&4294967295|E>>>17),E=w+(R^(x|~_))+I[9]+3951481745&4294967295,v.g[0]=v.g[0]+_&4294967295,v.g[1]=v.g[1]+(x+(E<<21&4294967295|E>>>11))&4294967295,v.g[2]=v.g[2]+x&4294967295,v.g[3]=v.g[3]+R&4294967295}r.prototype.v=function(v,_){_===void 0&&(_=v.length);const w=_-this.blockSize,I=this.C;let x=this.h,R=0;for(;R<_;){if(x==0)for(;R<=w;)s(this,v,R),R+=this.blockSize;if(typeof v=="string"){for(;R<_;)if(I[x++]=v.charCodeAt(R++),x==this.blockSize){s(this,I),x=0;break}}else for(;R<_;)if(I[x++]=v[R++],x==this.blockSize){s(this,I),x=0;break}}this.h=x,this.o+=_},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var _=1;_<v.length-8;++_)v[_]=0;_=this.o*8;for(var w=v.length-8;w<v.length;++w)v[w]=_&255,_/=256;for(this.v(v),v=Array(16),_=0,w=0;w<4;++w)for(let I=0;I<32;I+=8)v[_++]=this.g[w]>>>I&255;return v};function i(v,_){var w=l;return Object.prototype.hasOwnProperty.call(w,v)?w[v]:w[v]=_(v)}function o(v,_){this.h=_;const w=[];let I=!0;for(let x=v.length-1;x>=0;x--){const R=v[x]|0;I&&R==_||(w[x]=R,I=!1)}this.g=w}var l={};function u(v){return-128<=v&&v<128?i(v,function(_){return new o([_|0],_<0?-1:0)}):new o([v|0],v<0?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return p;if(v<0)return L(h(-v));const _=[];let w=1;for(let I=0;v>=w;I++)_[I]=v/w|0,w*=4294967296;return new o(_,0)}function f(v,_){if(v.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(v.charAt(0)=="-")return L(f(v.substring(1),_));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=h(Math.pow(_,8));let I=p;for(let R=0;R<v.length;R+=8){var x=Math.min(8,v.length-R);const E=parseInt(v.substring(R,R+x),_);x<8?(x=h(Math.pow(_,x)),I=I.j(x).add(h(E))):(I=I.j(w),I=I.add(h(E)))}return I}var p=u(0),y=u(1),k=u(16777216);t=o.prototype,t.m=function(){if(V(this))return-L(this).m();let v=0,_=1;for(let w=0;w<this.g.length;w++){const I=this.i(w);v+=(I>=0?I:4294967296+I)*_,_*=4294967296}return v},t.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(D(this))return"0";if(V(this))return"-"+L(this).toString(v);const _=h(Math.pow(v,6));var w=this;let I="";for(;;){const x=b(w,_).g;w=S(w,x.j(_));let R=((w.g.length>0?w.g[0]:w.h)>>>0).toString(v);if(w=x,D(w))return R+I;for(;R.length<6;)R="0"+R;I=R+I}},t.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function D(v){if(v.h!=0)return!1;for(let _=0;_<v.g.length;_++)if(v.g[_]!=0)return!1;return!0}function V(v){return v.h==-1}t.l=function(v){return v=S(this,v),V(v)?-1:D(v)?0:1};function L(v){const _=v.g.length,w=[];for(let I=0;I<_;I++)w[I]=~v.g[I];return new o(w,~v.h).add(y)}t.abs=function(){return V(this)?L(this):this},t.add=function(v){const _=Math.max(this.g.length,v.g.length),w=[];let I=0;for(let x=0;x<=_;x++){let R=I+(this.i(x)&65535)+(v.i(x)&65535),E=(R>>>16)+(this.i(x)>>>16)+(v.i(x)>>>16);I=E>>>16,R&=65535,E&=65535,w[x]=E<<16|R}return new o(w,w[w.length-1]&-2147483648?-1:0)};function S(v,_){return v.add(L(_))}t.j=function(v){if(D(this)||D(v))return p;if(V(this))return V(v)?L(this).j(L(v)):L(L(this).j(v));if(V(v))return L(this.j(L(v)));if(this.l(k)<0&&v.l(k)<0)return h(this.m()*v.m());const _=this.g.length+v.g.length,w=[];for(var I=0;I<2*_;I++)w[I]=0;for(I=0;I<this.g.length;I++)for(let x=0;x<v.g.length;x++){const R=this.i(I)>>>16,E=this.i(I)&65535,Oe=v.i(x)>>>16,vt=v.i(x)&65535;w[2*I+2*x]+=E*vt,T(w,2*I+2*x),w[2*I+2*x+1]+=R*vt,T(w,2*I+2*x+1),w[2*I+2*x+1]+=E*Oe,T(w,2*I+2*x+1),w[2*I+2*x+2]+=R*Oe,T(w,2*I+2*x+2)}for(v=0;v<_;v++)w[v]=w[2*v+1]<<16|w[2*v];for(v=_;v<2*_;v++)w[v]=0;return new o(w,0)};function T(v,_){for(;(v[_]&65535)!=v[_];)v[_+1]+=v[_]>>>16,v[_]&=65535,_++}function C(v,_){this.g=v,this.h=_}function b(v,_){if(D(_))throw Error("division by zero");if(D(v))return new C(p,p);if(V(v))return _=b(L(v),_),new C(L(_.g),L(_.h));if(V(_))return _=b(v,L(_)),new C(L(_.g),_.h);if(v.g.length>30){if(V(v)||V(_))throw Error("slowDivide_ only works with positive integers.");for(var w=y,I=_;I.l(v)<=0;)w=U(w),I=U(I);var x=B(w,1),R=B(I,1);for(I=B(I,2),w=B(w,2);!D(I);){var E=R.add(I);E.l(v)<=0&&(x=x.add(w),R=E),I=B(I,1),w=B(w,1)}return _=S(v,x.j(_)),new C(x,_)}for(x=p;v.l(_)>=0;){for(w=Math.max(1,Math.floor(v.m()/_.m())),I=Math.ceil(Math.log(w)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),R=h(w),E=R.j(_);V(E)||E.l(v)>0;)w-=I,R=h(w),E=R.j(_);D(R)&&(R=y),x=x.add(R),v=S(v,E)}return new C(x,v)}t.B=function(v){return b(this,v).h},t.and=function(v){const _=Math.max(this.g.length,v.g.length),w=[];for(let I=0;I<_;I++)w[I]=this.i(I)&v.i(I);return new o(w,this.h&v.h)},t.or=function(v){const _=Math.max(this.g.length,v.g.length),w=[];for(let I=0;I<_;I++)w[I]=this.i(I)|v.i(I);return new o(w,this.h|v.h)},t.xor=function(v){const _=Math.max(this.g.length,v.g.length),w=[];for(let I=0;I<_;I++)w[I]=this.i(I)^v.i(I);return new o(w,this.h^v.h)};function U(v){const _=v.g.length+1,w=[];for(let I=0;I<_;I++)w[I]=v.i(I)<<1|v.i(I-1)>>>31;return new o(w,v.h)}function B(v,_){const w=_>>5;_%=32;const I=v.g.length-w,x=[];for(let R=0;R<I;R++)x[R]=_>0?v.i(R+w)>>>_|v.i(R+w+1)<<32-_:v.i(R+w);return new o(x,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,S0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Dr=o}).apply(typeof Ig<"u"?Ig:typeof self<"u"?self:typeof window<"u"?window:{});var ll=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var A0,fo,x0,Rl,ad,C0,k0,R0;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ll=="object"&&ll];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,c){if(c)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var P=a[m];if(!(P in d))break e;d=d[P]}a=a[a.length-1],m=d[a],c=c(m),c!=m&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(c){var d=[],m;for(m in c)Object.prototype.hasOwnProperty.call(c,m)&&d.push([m,c[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function u(a,c,d){return a.call.apply(a.bind,arguments)}function h(a,c,d){return h=u,h.apply(null,arguments)}function f(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function p(a,c){function d(){}d.prototype=c.prototype,a.Z=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(m,P,N){for(var z=Array(arguments.length-2),se=2;se<arguments.length;se++)z[se-2]=arguments[se];return c.prototype[P].apply(m,z)}}var y=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function k(a){const c=a.length;if(c>0){const d=Array(c);for(let m=0;m<c;m++)d[m]=a[m];return d}return[]}function D(a,c){for(let m=1;m<arguments.length;m++){const P=arguments[m];var d=typeof P;if(d=d!="object"?d:P?Array.isArray(P)?"array":d:"null",d=="array"||d=="object"&&typeof P.length=="number"){d=a.length||0;const N=P.length||0;a.length=d+N;for(let z=0;z<N;z++)a[d+z]=P[z]}else a.push(P)}}class V{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function L(a){o.setTimeout(()=>{throw a},0)}function S(){var a=v;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class T{constructor(){this.h=this.g=null}add(c,d){const m=C.get();m.set(c,d),this.h?this.h.next=m:this.g=m,this.h=m}}var C=new V(()=>new b,a=>a.reset());class b{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let U,B=!1,v=new T,_=()=>{const a=Promise.resolve(void 0);U=()=>{a.then(w)}};function w(){for(var a;a=S();){try{a.h.call(a.g)}catch(d){L(d)}var c=C;c.j(a),c.h<100&&(c.h++,a.next=c.g,c.g=a)}B=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function x(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,c),o.removeEventListener("test",d,c)}catch{}return a}();function E(a){return/^[\s\xa0]*$/.test(a)}function Oe(a,c){x.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,c)}p(Oe,x),Oe.prototype.init=function(a,c){const d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget,c||(d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement)),this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Oe.Z.h.call(this)},Oe.prototype.h=function(){Oe.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var vt="closure_listenable_"+(Math.random()*1e6|0),Gn=0;function In(a,c,d,m,P){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!m,this.ha=P,this.key=++Gn,this.da=this.fa=!1}function $(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Q(a,c,d){for(const m in a)c.call(d,a[m],m,a)}function Z(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function de(a){const c={};for(const d in a)c[d]=a[d];return c}const ve="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ht(a,c){let d,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(d in m)a[d]=m[d];for(let N=0;N<ve.length;N++)d=ve[N],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function ft(a){this.src=a,this.g={},this.h=0}ft.prototype.add=function(a,c,d,m,P){const N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);const z=wt(a,c,m,P);return z>-1?(c=a[z],d||(c.fa=!1)):(c=new In(c,this.src,N,!!m,P),c.fa=d,a.push(c)),c};function Wt(a,c){const d=c.type;if(d in a.g){var m=a.g[d],P=Array.prototype.indexOf.call(m,c,void 0),N;(N=P>=0)&&Array.prototype.splice.call(m,P,1),N&&($(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function wt(a,c,d,m){for(let P=0;P<a.length;++P){const N=a[P];if(!N.da&&N.listener==c&&N.capture==!!d&&N.ha==m)return P}return-1}var qt="closure_lm_"+(Math.random()*1e6|0),Cs={};function Ea(a,c,d,m,P){if(Array.isArray(c)){for(let N=0;N<c.length;N++)Ea(a,c[N],d,m,P);return null}return d=rc(d),a&&a[vt]?a.J(c,d,l(m)?!!m.capture:!1,P):Ta(a,c,d,!1,m,P)}function Ta(a,c,d,m,P,N){if(!c)throw Error("Invalid event type");const z=l(P)?!!P.capture:!!P;let se=ji(a);if(se||(a[qt]=se=new ft(a)),d=se.add(c,d,m,z,N),d.proxy)return d;if(m=Ia(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)R||(P=z),P===void 0&&(P=!1),a.addEventListener(c.toString(),m,P);else if(a.attachEvent)a.attachEvent(Li(c.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Ia(){function a(d){return c.call(a.src,a.listener,d)}const c=ks;return a}function Mi(a,c,d,m,P){if(Array.isArray(c))for(var N=0;N<c.length;N++)Mi(a,c[N],d,m,P);else m=l(m)?!!m.capture:!!m,d=rc(d),a&&a[vt]?(a=a.i,N=String(c).toString(),N in a.g&&(c=a.g[N],d=wt(c,d,m,P),d>-1&&($(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete a.g[N],a.h--)))):a&&(a=ji(a))&&(c=a.g[c.toString()],a=-1,c&&(a=wt(c,d,m,P)),(d=a>-1?c[a]:null)&&Kn(d))}function Kn(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[vt])Wt(c.i,a);else{var d=a.type,m=a.proxy;c.removeEventListener?c.removeEventListener(d,m,a.capture):c.detachEvent?c.detachEvent(Li(d),m):c.addListener&&c.removeListener&&c.removeListener(m),(d=ji(c))?(Wt(d,a),d.h==0&&(d.src=null,c[qt]=null)):$(a)}}}function Li(a){return a in Cs?Cs[a]:Cs[a]="on"+a}function ks(a,c){if(a.da)a=!0;else{c=new Oe(c,this);const d=a.listener,m=a.ha||a.src;a.fa&&Kn(a),a=d.call(m,c)}return a}function ji(a){return a=a[qt],a instanceof ft?a:null}var Sa="__closure_events_fn_"+(Math.random()*1e9>>>0);function rc(a){return typeof a=="function"?a:(a[Sa]||(a[Sa]=function(c){return a.handleEvent(c)}),a[Sa])}function Qe(){I.call(this),this.i=new ft(this),this.M=this,this.G=null}p(Qe,I),Qe.prototype[vt]=!0,Qe.prototype.removeEventListener=function(a,c,d,m){Mi(this,a,c,d,m)};function rt(a,c){var d,m=a.G;if(m)for(d=[];m;m=m.G)d.push(m);if(a=a.M,m=c.type||c,typeof c=="string")c=new x(c,a);else if(c instanceof x)c.target=c.target||a;else{var P=c;c=new x(m,a),Ht(c,P)}P=!0;let N,z;if(d)for(z=d.length-1;z>=0;z--)N=c.g=d[z],P=Fi(N,m,!0,c)&&P;if(N=c.g=a,P=Fi(N,m,!0,c)&&P,P=Fi(N,m,!1,c)&&P,d)for(z=0;z<d.length;z++)N=c.g=d[z],P=Fi(N,m,!1,c)&&P}Qe.prototype.N=function(){if(Qe.Z.N.call(this),this.i){var a=this.i;for(const c in a.g){const d=a.g[c];for(let m=0;m<d.length;m++)$(d[m]);delete a.g[c],a.h--}}this.G=null},Qe.prototype.J=function(a,c,d,m){return this.i.add(String(a),c,!1,d,m)},Qe.prototype.K=function(a,c,d,m){return this.i.add(String(a),c,!0,d,m)};function Fi(a,c,d,m){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();let P=!0;for(let N=0;N<c.length;++N){const z=c[N];if(z&&!z.da&&z.capture==d){const se=z.listener,Fe=z.ha||z.src;z.fa&&Wt(a.i,z),P=se.call(Fe,m)!==!1&&P}}return P&&!m.defaultPrevented}function lp(a,c){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:o.setTimeout(a,c||0)}function sc(a){a.g=lp(()=>{a.g=null,a.i&&(a.i=!1,sc(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class up extends I{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:sc(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Rs(a){I.call(this),this.h=a,this.g={}}p(Rs,I);var ic=[];function Ui(a){Q(a.g,function(c,d){this.g.hasOwnProperty(d)&&Kn(c)},a),a.g={}}Rs.prototype.N=function(){Rs.Z.N.call(this),Ui(this)},Rs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zi=o.JSON.stringify,oc=o.JSON.parse,ac=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Aa(){}function xa(){}var Qn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Gt(){x.call(this,"d")}p(Gt,x);function Sn(){x.call(this,"c")}p(Sn,x);var An={},Bi=null;function Yn(){return Bi=Bi||new Qe}An.Ia="serverreachability";function $i(a){x.call(this,An.Ia,a)}p($i,x);function Wr(a){const c=Yn();rt(c,new $i(c))}An.STAT_EVENT="statevent";function Ca(a,c){x.call(this,An.STAT_EVENT,a),this.stat=c}p(Ca,x);function Ye(a){const c=Yn();rt(c,new Ca(c,a))}An.Ja="timingevent";function ka(a,c){x.call(this,An.Ja,a),this.size=c}p(ka,x);function Xn(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},c)}function qr(){this.g=!0}qr.prototype.ua=function(){this.g=!1};function Ra(a,c,d,m,P,N){a.info(function(){if(a.g)if(N){var z="",se=N.split("&");for(let ye=0;ye<se.length;ye++){var Fe=se[ye].split("=");if(Fe.length>1){const He=Fe[0];Fe=Fe[1];const ln=He.split("_");z=ln.length>=2&&ln[1]=="type"?z+(He+"="+Fe+"&"):z+(He+"=redacted&")}}}else z=null;else z=N;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+c+`
`+d+`
`+z})}function De(a,c,d,m,P,N,z){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+c+`
`+d+`
`+N+" "+z})}function Kt(a,c,d,m){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+Pa(a,d)+(m?" "+m:"")})}function Jn(a,c){a.info(function(){return"TIMEOUT: "+c})}qr.prototype.info=function(){};function Pa(a,c){if(!a.g)return c;if(!c)return null;try{const N=JSON.parse(c);if(N){for(a=0;a<N.length;a++)if(Array.isArray(N[a])){var d=N[a];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var P=m[0];if(P!="noop"&&P!="stop"&&P!="close")for(let z=1;z<m.length;z++)m[z]=""}}}}return zi(N)}catch{return c}}var Gr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Hi={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Na;function Zn(){}p(Zn,Aa),Zn.prototype.g=function(){return new XMLHttpRequest},Na=new Zn;function er(a){return encodeURIComponent(String(a))}function Ps(a){var c=1;a=a.split(":");const d=[];for(;c>0&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function Qt(a,c,d,m){this.j=a,this.i=c,this.l=d,this.S=m||1,this.V=new Rs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Da}function Da(){this.i=null,this.g="",this.h=!1}var Wi={},Ns={};function tr(a,c,d){a.M=1,a.A=ba(fe(c)),a.u=d,a.R=!0,Ds(a,null)}function Ds(a,c){a.F=Date.now(),Vs(a),a.B=fe(a.A);var d=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),pp(d.i,"t",m),a.C=0,d=a.j.L,a.h=new Da,a.g=Dp(a.j,d?c:null,!a.u),a.P>0&&(a.O=new up(h(a.Y,a,a.g),a.P)),c=a.V,d=a.g,m=a.ba;var P="readystatechange";Array.isArray(P)||(P&&(ic[0]=P.toString()),P=ic);for(let N=0;N<P.length;N++){const z=Ea(d,P[N],m||c.handleEvent,!1,c.h||c);if(!z)break;c.g[z.key]=z}c=a.J?de(a.J):{},a.u?(a.v||(a.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,c)):(a.v="GET",a.g.ea(a.B,a.v,null,c)),Wr(),Ra(a.i,a.v,a.B,a.l,a.S,a.u)}Qt.prototype.ba=function(a){a=a.target;const c=this.O;c&&or(a)==3?c.j():this.Y(a)},Qt.prototype.Y=function(a){try{if(a==this.g)e:{const se=or(this.g),Fe=this.g.ya(),ye=this.g.ca();if(!(se<3)&&(se!=3||this.g&&(this.h.h||this.g.la()||Ep(this.g)))){this.K||se!=4||Fe==7||(Fe==8||ye<=0?Wr(3):Wr(2)),nr(this);var c=this.g.ca();this.X=c;var d=lc(this);if(this.o=c==200,De(this.i,this.v,this.B,this.l,this.S,se,c),this.o){if(this.U&&!this.L){t:{if(this.g){var m,P=this.g;if((m=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(m)){var N=m;break t}}N=null}if(a=N)Kt(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,A(this,a);else{this.o=!1,this.m=3,Ye(12),Cn(this),xn(this);break e}}if(this.R){a=!0;let He;for(;!this.K&&this.C<d.length;)if(He=uc(this,d),He==Ns){se==4&&(this.m=4,Ye(14),a=!1),Kt(this.i,this.l,null,"[Incomplete Response]");break}else if(He==Wi){this.m=4,Ye(15),Kt(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Kt(this.i,this.l,He,null),A(this,He);if(Va(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),se!=4||d.length!=0||this.h.h||(this.m=1,Ye(16),a=!1),this.o=this.o&&a,!a)Kt(this.i,this.l,d,"[Invalid Chunked Response]"),Cn(this),xn(this);else if(d.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),mc(z),z.P=!0,Ye(11))}}else Kt(this.i,this.l,d,null),A(this,d);se==4&&Cn(this),this.o&&!this.K&&(se==4?kp(this.j,this):(this.o=!1,Vs(this)))}else uE(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,Ye(12)):(this.m=0,Ye(13)),Cn(this),xn(this)}}}catch{}finally{}};function lc(a){if(!Va(a))return a.g.la();const c=Ep(a.g);if(c==="")return"";let d="";const m=c.length,P=or(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Cn(a),xn(a),"";a.h.i=new o.TextDecoder}for(let N=0;N<m;N++)a.h.h=!0,d+=a.h.i.decode(c[N],{stream:!(P&&N==m-1)});return c.length=0,a.h.g+=d,a.C=0,a.h.g}function Va(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function uc(a,c){var d=a.C,m=c.indexOf(`
`,d);return m==-1?Ns:(d=Number(c.substring(d,m)),isNaN(d)?Wi:(m+=1,m+d>c.length?Ns:(c=c.slice(m,m+d),a.C=m+d,c)))}Qt.prototype.cancel=function(){this.K=!0,Cn(this)};function Vs(a){a.T=Date.now()+a.H,qi(a,a.H)}function qi(a,c){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Xn(h(a.aa,a),c)}function nr(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Qt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Jn(this.i,this.B),this.M!=2&&(Wr(),Ye(17)),Cn(this),this.m=2,xn(this)):qi(this,this.T-a)};function xn(a){a.j.I==0||a.K||kp(a.j,a)}function Cn(a){nr(a);var c=a.O;c&&typeof c.dispose=="function"&&c.dispose(),a.O=null,Ui(a.V),a.g&&(c=a.g,a.g=null,c.abort(),c.dispose())}function A(a,c){try{var d=a.j;if(d.I!=0&&(d.g==a||st(d.h,a))){if(!a.L&&st(d.h,a)&&d.I==3){try{var m=d.Ba.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Fa(d),La(d);else break e;pc(d),Ye(18)}}else d.xa=P[1],0<d.xa-d.K&&P[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Xn(h(d.Va,d),6e3));re(d.h)<=1&&d.ta&&(d.ta=void 0)}else Xr(d,11)}else if((a.L||d.g==a)&&Fa(d),!E(c))for(P=d.Ba.g.parse(c),c=0;c<P.length;c++){let ye=P[c];const He=ye[0];if(!(He<=d.K))if(d.K=He,ye=ye[1],d.I==2)if(ye[0]=="c"){d.M=ye[1],d.ba=ye[2];const ln=ye[3];ln!=null&&(d.ka=ln,d.j.info("VER="+d.ka));const Jr=ye[4];Jr!=null&&(d.za=Jr,d.j.info("SVER="+d.za));const ar=ye[5];ar!=null&&typeof ar=="number"&&ar>0&&(m=1.5*ar,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const lr=a.g;if(lr){const za=lr.g?lr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(za){var N=m.h;N.g||za.indexOf("spdy")==-1&&za.indexOf("quic")==-1&&za.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(pt(N,N.h),N.h=null))}if(m.G){const gc=lr.g?lr.g.getResponseHeader("X-HTTP-Session-Id"):null;gc&&(m.wa=gc,we(m.J,m.G,gc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var z=a;if(m.na=Np(m,m.L?m.ba:null,m.W),z.L){Kr(m.h,z);var se=z,Fe=m.O;Fe&&(se.H=Fe),se.D&&(nr(se),Vs(se)),m.g=z}else xp(m);d.i.length>0&&ja(d)}else ye[0]!="stop"&&ye[0]!="close"||Xr(d,7);else d.I==3&&(ye[0]=="stop"||ye[0]=="close"?ye[0]=="stop"?Xr(d,7):fc(d):ye[0]!="noop"&&d.l&&d.l.qa(ye),d.A=0)}}Wr(4)}catch{}}var M=class{constructor(a,c){this.g=a,this.map=c}};function X(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function G(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function re(a){return a.h?1:a.g?a.g.size:0}function st(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function pt(a,c){a.g?a.g.add(c):a.h=c}function Kr(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}X.prototype.cancel=function(){if(this.i=Qr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Qr(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.G);return c}return k(a.i)}var bs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Os(a,c){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const m=a[d].indexOf("=");let P,N=null;m>=0?(P=a[d].substring(0,m),N=a[d].substring(m+1)):P=a[d],c(P,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function ce(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;a instanceof ce?(this.l=a.l,rr(this,a.j),this.o=a.o,this.g=a.g,sr(this,a.u),this.h=a.h,cc(this,mp(a.i)),this.m=a.m):a&&(c=String(a).match(bs))?(this.l=!1,rr(this,c[1]||"",!0),this.o=Gi(c[2]||""),this.g=Gi(c[3]||"",!0),sr(this,c[4]),this.h=Gi(c[5]||"",!0),cc(this,c[6]||"",!0),this.m=Gi(c[7]||"")):(this.l=!1,this.i=new Qi(null,this.l))}ce.prototype.toString=function(){const a=[];var c=this.j;c&&a.push(Ki(c,cp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Ki(c,cp,!0),"@"),a.push(er(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ki(d,d.charAt(0)=="/"?eE:Zw,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ki(d,nE)),a.join("")},ce.prototype.resolve=function(a){const c=fe(this);let d=!!a.j;d?rr(c,a.j):d=!!a.o,d?c.o=a.o:d=!!a.g,d?c.g=a.g:d=a.u!=null;var m=a.h;if(d)sr(c,a.u);else if(d=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var P=c.h.lastIndexOf("/");P!=-1&&(m=c.h.slice(0,P+1)+m)}if(P=m,P==".."||P==".")m="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){m=P.lastIndexOf("/",0)==0,P=P.split("/");const N=[];for(let z=0;z<P.length;){const se=P[z++];se=="."?m&&z==P.length&&N.push(""):se==".."?((N.length>1||N.length==1&&N[0]!="")&&N.pop(),m&&z==P.length&&N.push("")):(N.push(se),m=!0)}m=N.join("/")}else m=P}return d?c.h=m:d=a.i.toString()!=="",d?cc(c,mp(a.i)):d=!!a.m,d&&(c.m=a.m),c};function fe(a){return new ce(a)}function rr(a,c,d){a.j=d?Gi(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function sr(a,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);a.u=c}else a.u=null}function cc(a,c,d){c instanceof Qi?(a.i=c,rE(a.i,a.l)):(d||(c=Ki(c,tE)),a.i=new Qi(c,a.l))}function we(a,c,d){a.i.set(c,d)}function ba(a){return we(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Gi(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ki(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,Jw),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Jw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var cp=/[#\/\?@]/g,Zw=/[#\?:]/g,eE=/[#\?]/g,tE=/[#\?@]/g,nE=/#/g;function Qi(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Yr(a){a.g||(a.g=new Map,a.h=0,a.i&&Os(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=Qi.prototype,t.add=function(a,c){Yr(this),this.i=null,a=Ms(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function hp(a,c){Yr(a),c=Ms(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function dp(a,c){return Yr(a),c=Ms(a,c),a.g.has(c)}t.forEach=function(a,c){Yr(this),this.g.forEach(function(d,m){d.forEach(function(P){a.call(c,P,m,this)},this)},this)};function fp(a,c){Yr(a);let d=[];if(typeof c=="string")dp(a,c)&&(d=d.concat(a.g.get(Ms(a,c))));else for(a=Array.from(a.g.values()),c=0;c<a.length;c++)d=d.concat(a[c]);return d}t.set=function(a,c){return Yr(this),this.i=null,a=Ms(this,a),dp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=fp(this,a),a.length>0?String(a[0]):c):c};function pp(a,c,d){hp(a,c),d.length>0&&(a.i=null,a.g.set(Ms(a,c),k(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(let m=0;m<c.length;m++){var d=c[m];const P=er(d);d=fp(this,d);for(let N=0;N<d.length;N++){let z=P;d[N]!==""&&(z+="="+er(d[N])),a.push(z)}}return this.i=a.join("&")};function mp(a){const c=new Qi;return c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),c}function Ms(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function rE(a,c){c&&!a.j&&(Yr(a),a.i=null,a.g.forEach(function(d,m){const P=m.toLowerCase();m!=P&&(hp(this,m),pp(this,P,d))},a)),a.j=c}function sE(a,c){const d=new qr;if(o.Image){const m=new Image;m.onload=f(ir,d,"TestLoadImage: loaded",!0,c,m),m.onerror=f(ir,d,"TestLoadImage: error",!1,c,m),m.onabort=f(ir,d,"TestLoadImage: abort",!1,c,m),m.ontimeout=f(ir,d,"TestLoadImage: timeout",!1,c,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else c(!1)}function iE(a,c){const d=new qr,m=new AbortController,P=setTimeout(()=>{m.abort(),ir(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:m.signal}).then(N=>{clearTimeout(P),N.ok?ir(d,"TestPingServer: ok",!0,c):ir(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),ir(d,"TestPingServer: error",!1,c)})}function ir(a,c,d,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(d)}catch{}}function oE(){this.g=new ac}function hc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(hc,Aa),hc.prototype.g=function(){return new Oa(this.i,this.h)};function Oa(a,c){Qe.call(this),this.H=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Oa,Qe),t=Oa.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=c,this.readyState=1,Xi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(c.body=a),(this.H||o).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Yi(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Xi(this)),this.g&&(this.readyState=3,Xi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;gp(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function gp(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Yi(this):Xi(this),this.readyState==3&&gp(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Yi(this))},t.Na=function(a){this.g&&(this.response=a,Yi(this))},t.ga=function(){this.g&&Yi(this)};function Yi(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Xi(a)}t.setRequestHeader=function(a,c){this.A.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function Xi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Oa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function yp(a){let c="";return Q(a,function(d,m){c+=m,c+=":",c+=d,c+=`\r
`}),c}function dc(a,c,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=yp(d),typeof a=="string"?d!=null&&er(d):we(a,c,d))}function Pe(a){Qe.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Pe,Qe);var aE=/^https?$/i,lE=["POST","PUT"];t=Pe.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,c,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Na.g(),this.g.onreadystatechange=y(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(N){_p(this,N);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)d.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const N of m.keys())d.set(N,m.get(N));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),P=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(lE,c,void 0)>=0)||m||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,z]of d)this.g.setRequestHeader(N,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(N){_p(this,N)}};function _p(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.o=5,vp(a),Ma(a)}function vp(a){a.A||(a.A=!0,rt(a,"complete"),rt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,rt(this,"complete"),rt(this,"abort"),Ma(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ma(this,!0)),Pe.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?wp(this):this.Xa())},t.Xa=function(){wp(this)};function wp(a){if(a.h&&typeof i<"u"){if(a.v&&or(a)==4)setTimeout(a.Ca.bind(a),0);else if(rt(a,"readystatechange"),or(a)==4){a.h=!1;try{const N=a.ca();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var m;if(m=N===0){let z=String(a.D).match(bs)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),m=!aE.test(z?z.toLowerCase():"")}d=m}if(d)rt(a,"complete"),rt(a,"success");else{a.o=6;try{var P=or(a)>2?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.ca()+"]",vp(a)}}finally{Ma(a)}}}}function Ma(a,c){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,c||rt(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function or(a){return a.g?a.g.readyState:0}t.ca=function(){try{return or(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),oc(c)}};function Ep(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function uE(a){const c={};a=(a.g&&or(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(E(a[m]))continue;var d=Ps(a[m]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=c[P]||[];c[P]=N,N.push(d)}Z(c,function(m){return m.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ji(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Tp(a){this.za=0,this.i=[],this.j=new qr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ji("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ji("baseRetryDelayMs",5e3,a),this.Za=Ji("retryDelaySeedMs",1e4,a),this.Ta=Ji("forwardChannelMaxRetries",2,a),this.va=Ji("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new X(a&&a.concurrentRequestLimit),this.Ba=new oE,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Tp.prototype,t.ka=8,t.I=1,t.connect=function(a,c,d,m){Ye(0),this.W=a,this.H=c||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=Np(this,null,this.W),ja(this)};function fc(a){if(Ip(a),a.I==3){var c=a.V++,d=fe(a.J);if(we(d,"SID",a.M),we(d,"RID",c),we(d,"TYPE","terminate"),Zi(a,d),c=new Qt(a,a.j,c),c.M=2,c.A=ba(fe(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=c.A,d=!0),d||(c.g=Dp(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Vs(c)}Pp(a)}function La(a){a.g&&(mc(a),a.g.cancel(),a.g=null)}function Ip(a){La(a),a.v&&(o.clearTimeout(a.v),a.v=null),Fa(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function ja(a){if(!G(a.h)&&!a.m){a.m=!0;var c=a.Ea;U||_(),B||(U(),B=!0),v.add(c,a),a.D=0}}function cE(a,c){return re(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=c.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Xn(h(a.Ea,a,c),Rp(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const P=new Qt(this,this.j,a);let N=this.o;if(this.U&&(N?(N=de(N),Ht(N,this.U)):N=this.U),this.u!==null||this.R||(P.J=N,N=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Ap(this,P,c),d=fe(this.J),we(d,"RID",a),we(d,"CVER",22),this.G&&we(d,"X-HTTP-Session-Id",this.G),Zi(this,d),N&&(this.R?c="headers="+er(yp(N))+"&"+c:this.u&&dc(d,this.u,N)),pt(this.h,P),this.Ra&&we(d,"TYPE","init"),this.S?(we(d,"$req",c),we(d,"SID","null"),P.U=!0,tr(P,d,null)):tr(P,d,c),this.I=2}}else this.I==3&&(a?Sp(this,a):this.i.length==0||G(this.h)||Sp(this))};function Sp(a,c){var d;c?d=c.l:d=a.V++;const m=fe(a.J);we(m,"SID",a.M),we(m,"RID",d),we(m,"AID",a.K),Zi(a,m),a.u&&a.o&&dc(m,a.u,a.o),d=new Qt(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),c&&(a.i=c.G.concat(a.i)),c=Ap(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),pt(a.h,d),tr(d,m,c)}function Zi(a,c){a.H&&Q(a.H,function(d,m){we(c,m,d)}),a.l&&Q({},function(d,m){we(c,m,d)})}function Ap(a,c,d){d=Math.min(a.i.length,d);const m=a.l?h(a.l.Ka,a.l,a):null;e:{var P=a.i;let se=-1;for(;;){const Fe=["count="+d];se==-1?d>0?(se=P[0].g,Fe.push("ofs="+se)):se=0:Fe.push("ofs="+se);let ye=!0;for(let He=0;He<d;He++){var N=P[He].g;const ln=P[He].map;if(N-=se,N<0)se=Math.max(0,P[He].g-100),ye=!1;else try{N="req"+N+"_"||"";try{var z=ln instanceof Map?ln:Object.entries(ln);for(const[Jr,ar]of z){let lr=ar;l(ar)&&(lr=zi(ar)),Fe.push(N+Jr+"="+encodeURIComponent(lr))}}catch(Jr){throw Fe.push(N+"type="+encodeURIComponent("_badmap")),Jr}}catch{m&&m(ln)}}if(ye){z=Fe.join("&");break e}}z=void 0}return a=a.i.splice(0,d),c.G=a,z}function xp(a){if(!a.g&&!a.v){a.Y=1;var c=a.Da;U||_(),B||(U(),B=!0),v.add(c,a),a.A=0}}function pc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Xn(h(a.Da,a),Rp(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Cp(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Xn(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ye(10),La(this),Cp(this))};function mc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Cp(a){a.g=new Qt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var c=fe(a.na);we(c,"RID","rpc"),we(c,"SID",a.M),we(c,"AID",a.K),we(c,"CI",a.F?"0":"1"),!a.F&&a.ia&&we(c,"TO",a.ia),we(c,"TYPE","xmlhttp"),Zi(a,c),a.u&&a.o&&dc(c,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=ba(fe(c)),d.u=null,d.R=!0,Ds(d,a)}t.Va=function(){this.C!=null&&(this.C=null,La(this),pc(this),Ye(19))};function Fa(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function kp(a,c){var d=null;if(a.g==c){Fa(a),mc(a),a.g=null;var m=2}else if(st(a.h,c))d=c.G,Kr(a.h,c),m=1;else return;if(a.I!=0){if(c.o)if(m==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var P=a.D;m=Yn(),rt(m,new ka(m,d)),ja(a)}else xp(a);else if(P=c.m,P==3||P==0&&c.X>0||!(m==1&&cE(a,c)||m==2&&pc(a)))switch(d&&d.length>0&&(c=a.h,c.i=c.i.concat(d)),P){case 1:Xr(a,5);break;case 4:Xr(a,10);break;case 3:Xr(a,6);break;default:Xr(a,2)}}}function Rp(a,c){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*c}function Xr(a,c){if(a.j.info("Error code "+c),c==2){var d=h(a.bb,a),m=a.Ua;const P=!m;m=new ce(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||rr(m,"https"),ba(m),P?sE(m.toString(),d):iE(m.toString(),d)}else Ye(2);a.I=0,a.l&&a.l.pa(c),Pp(a),Ip(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Ye(2)):(this.j.info("Failed to ping google.com"),Ye(1))};function Pp(a){if(a.I=0,a.ja=[],a.l){const c=Qr(a.h);(c.length!=0||a.i.length!=0)&&(D(a.ja,c),D(a.ja,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.oa()}}function Np(a,c,d){var m=d instanceof ce?fe(d):new ce(d);if(m.g!="")c&&(m.g=c+"."+m.g),sr(m,m.u);else{var P=o.location;m=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;const N=new ce(null);m&&rr(N,m),c&&(N.g=c),P&&sr(N,P),d&&(N.h=d),m=N}return d=a.G,c=a.wa,d&&c&&we(m,d,c),we(m,"VER",a.ka),Zi(a,m),m}function Dp(a,c,d){if(c&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Aa&&!a.ma?new Pe(new hc({ab:d})):new Pe(a.ma),c.Fa(a.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Vp(){}t=Vp.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Ua(){}Ua.prototype.g=function(a,c){return new Ct(a,c)};function Ct(a,c){Qe.call(this),this.g=new Tp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(a?a["X-WebChannel-Client-Profile"]=c.sa:a={"X-WebChannel-Client-Profile":c.sa}),this.g.U=a,(a=c&&c.Qb)&&!E(a)&&(this.g.u=a),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!E(c)&&(this.g.G=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Ls(this)}p(Ct,Qe),Ct.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){fc(this.g)},Ct.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=zi(a),a=d);c.i.push(new M(c.Ya++,a)),c.I==3&&ja(c)},Ct.prototype.N=function(){this.g.l=null,delete this.j,fc(this.g),delete this.g,Ct.Z.N.call(this)};function bp(a){Gt.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}p(bp,Gt);function Op(){Sn.call(this),this.status=1}p(Op,Sn);function Ls(a){this.g=a}p(Ls,Vp),Ls.prototype.ra=function(){rt(this.g,"a")},Ls.prototype.qa=function(a){rt(this.g,new bp(a))},Ls.prototype.pa=function(a){rt(this.g,new Op)},Ls.prototype.oa=function(){rt(this.g,"b")},Ua.prototype.createWebChannel=Ua.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,R0=function(){return new Ua},k0=function(){return Yn()},C0=An,ad={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Gr.NO_ERROR=0,Gr.TIMEOUT=8,Gr.HTTP_ERROR=6,Rl=Gr,Hi.COMPLETE="complete",x0=Hi,xa.EventType=Qn,Qn.OPEN="a",Qn.CLOSE="b",Qn.ERROR="c",Qn.MESSAGE="d",Qe.prototype.listen=Qe.prototype.J,fo=xa,Pe.prototype.listenOnce=Pe.prototype.K,Pe.prototype.getLastError=Pe.prototype.Ha,Pe.prototype.getLastErrorCode=Pe.prototype.ya,Pe.prototype.getStatus=Pe.prototype.ca,Pe.prototype.getResponseJson=Pe.prototype.La,Pe.prototype.getResponseText=Pe.prototype.la,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Fa,A0=Pe}).apply(typeof ll<"u"?ll:typeof self<"u"?self:typeof window<"u"?window:{});const Sg="@firebase/firestore",Ag="4.9.2";/**
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
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
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
 */let Di="12.3.0";/**
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
 */const vs=new _f("@firebase/firestore");function Fs(){return vs.logLevel}function H(t,...e){if(vs.logLevel<=oe.DEBUG){const n=e.map(Nf);vs.debug(`Firestore (${Di}): ${t}`,...n)}}function $n(t,...e){if(vs.logLevel<=oe.ERROR){const n=e.map(Nf);vs.error(`Firestore (${Di}): ${t}`,...n)}}function wi(t,...e){if(vs.logLevel<=oe.WARN){const n=e.map(Nf);vs.warn(`Firestore (${Di}): ${t}`,...n)}}function Nf(t){if(typeof t=="string")return t;try{/**
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
 */function Y(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,P0(t,r,n)}function P0(t,e,n){let r=`FIRESTORE (${Di}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw $n(r),new Error(r)}function pe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||P0(e,s,r)}function ne(t,e){return t}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends qn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Vr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class N0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Wx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class qx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Gx{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){pe(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Vr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Vr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Vr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(pe(typeof r.accessToken=="string",31837,{l:r}),new N0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return pe(e===null||typeof e=="string",2055,{h:e}),new lt(e)}}class Kx{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Qx{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Kx(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Yx{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,en(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){pe(this.o===void 0,3512);const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new xg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(pe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new xg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Xx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Df{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Xx(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function ld(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Zc(s)===Zc(i)?ae(s,i):Zc(s)?1:-1}return ae(t.length,e.length)}const Jx=55296,Zx=57343;function Zc(t){const e=t.charCodeAt(0);return e>=Jx&&e<=Zx}function Ei(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const Cg="__name__";class hn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Y(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return hn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof hn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=hn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ae(e.length,n.length)}static compareSegments(e,n){const r=hn.isNumericId(e),s=hn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?hn.extractNumericId(e).compare(hn.extractNumericId(n)):ld(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Dr.fromString(e.substring(4,e.length-2))}}class xe extends hn{construct(e,n,r){return new xe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new xe(n)}static emptyPath(){return new xe([])}}const eC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends hn{construct(e,n,r){return new Ze(e,n,r)}static isValidIdentifier(e){return eC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Cg}static keyField(){return new Ze([Cg])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new q(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new q(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new q(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(n)}static emptyPath(){return new Ze([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(xe.fromString(e))}static fromName(e){return new K(xe.fromString(e).popFirst(5))}static empty(){return new K(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new xe(e.slice()))}}/**
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
 */function tC(t,e,n){if(!n)throw new q(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function nC(t,e,n,r){if(e===!0&&r===!0)throw new q(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function kg(t){if(!K.isDocumentKey(t))throw new q(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function D0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Vf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y(12329,{type:typeof t})}function Jo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vf(t);throw new q(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function je(t,e){const n={typeString:t};return e&&(n.value=e),n}function ga(t,e){if(!D0(t))throw new q(j.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new q(j.INVALID_ARGUMENT,n);return!0}/**
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
 */const Rg=-62135596800,Pg=1e6;class Te{static now(){return Te.fromMillis(Date.now())}static fromDate(e){return Te.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Pg);return new Te(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Rg)throw new q(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Pg}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Te._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ga(e,Te._jsonSchema))return new Te(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Rg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Te._jsonSchemaVersion="firestore/timestamp/1.0",Te._jsonSchema={type:je("string",Te._jsonSchemaVersion),seconds:je("number"),nanoseconds:je("number")};/**
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
 */class te{static fromTimestamp(e){return new te(e)}static min(){return new te(new Te(0,0))}static max(){return new te(new Te(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Zo=-1;function rC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=te.fromTimestamp(r===1e9?new Te(n+1,0):new Te(n,r));return new Mr(s,K.empty(),e)}function sC(t){return new Mr(t.readTime,t.key,Zo)}class Mr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Mr(te.min(),K.empty(),Zo)}static max(){return new Mr(te.max(),K.empty(),Zo)}}function iC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
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
 */const oC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class aC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Vi(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==oC)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(s=>s?O.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new O((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new O((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function lC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function bi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Wu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Wu.ce=-1;/**
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
 */const bf=-1;function qu(t){return t==null}function fu(t){return t===0&&1/t==-1/0}function uC(t){return typeof t=="number"&&Number.isInteger(t)&&!fu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const V0="";function cC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Ng(e)),e=hC(t.get(n),e);return Ng(e)}function hC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case V0:n+="";break;default:n+=i}}return n}function Ng(t){return t+V0+""}/**
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
 */function Dg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Is(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function b0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Re{constructor(e,n){this.comparator=e,this.root=n||Je.EMPTY}insert(e,n){return new Re(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ul(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ul(this.root,e,this.comparator,!1)}getReverseIterator(){return new ul(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ul(this.root,e,this.comparator,!0)}}class ul{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Je{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Je.RED,this.left=s??Je.EMPTY,this.right=i??Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Je(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Je.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Y(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Y(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Y(27949);return e+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1;Je.EMPTY=new class{constructor(){this.size=0}get key(){throw Y(57766)}get value(){throw Y(16141)}get color(){throw Y(16727)}get left(){throw Y(29726)}get right(){throw Y(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class $e{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Vg(this.data.getIterator())}getIteratorFrom(e){return new Vg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof $e)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new $e(this.comparator);return n.data=e,n}}class Vg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class nn{constructor(e){this.fields=e,e.sort(Ze.comparator)}static empty(){return new nn([])}unionWith(e){let n=new $e(Ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new nn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ei(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class O0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class nt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new O0("Invalid base64 string: "+i):i}}(e);return new nt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new nt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const dC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lr(t){if(pe(!!t,39018),typeof t=="string"){let e=0;const n=dC.exec(t);if(pe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function jr(t){return typeof t=="string"?nt.fromBase64String(t):nt.fromUint8Array(t)}/**
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
 */const M0="server_timestamp",L0="__type__",j0="__previous_value__",F0="__local_write_time__";function Of(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[L0])==null?void 0:r.stringValue)===M0}function Gu(t){const e=t.mapValue.fields[j0];return Of(e)?Gu(e):e}function ea(t){const e=Lr(t.mapValue.fields[F0].timestampValue);return new Te(e.seconds,e.nanos)}/**
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
 */class fC{constructor(e,n,r,s,i,o,l,u,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const pu="(default)";class ta{constructor(e,n){this.projectId=e,this.database=n||pu}static empty(){return new ta("","")}get isDefaultDatabase(){return this.database===pu}isEqual(e){return e instanceof ta&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const U0="__type__",pC="__max__",cl={mapValue:{}},z0="__vector__",mu="value";function Fr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Of(t)?4:gC(t)?9007199254740991:mC(t)?10:11:Y(28295,{value:t})}function En(t,e){if(t===e)return!0;const n=Fr(t);if(n!==Fr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ea(t).isEqual(ea(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Lr(s.timestampValue),l=Lr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return jr(s.bytesValue).isEqual(jr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ve(s.geoPointValue.latitude)===Ve(i.geoPointValue.latitude)&&Ve(s.geoPointValue.longitude)===Ve(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ve(s.integerValue)===Ve(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ve(s.doubleValue),l=Ve(i.doubleValue);return o===l?fu(o)===fu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ei(t.arrayValue.values||[],e.arrayValue.values||[],En);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Dg(o)!==Dg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!En(o[u],l[u])))return!1;return!0}(t,e);default:return Y(52216,{left:t})}}function na(t,e){return(t.values||[]).find(n=>En(n,e))!==void 0}function Ti(t,e){if(t===e)return 0;const n=Fr(t),r=Fr(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ve(i.integerValue||i.doubleValue),u=Ve(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return bg(t.timestampValue,e.timestampValue);case 4:return bg(ea(t),ea(e));case 5:return ld(t.stringValue,e.stringValue);case 6:return function(i,o){const l=jr(i),u=jr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ae(l[h],u[h]);if(f!==0)return f}return ae(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ae(Ve(i.latitude),Ve(o.latitude));return l!==0?l:ae(Ve(i.longitude),Ve(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Og(t.arrayValue,e.arrayValue);case 10:return function(i,o){var y,k,D,V;const l=i.fields||{},u=o.fields||{},h=(y=l[mu])==null?void 0:y.arrayValue,f=(k=u[mu])==null?void 0:k.arrayValue,p=ae(((D=h==null?void 0:h.values)==null?void 0:D.length)||0,((V=f==null?void 0:f.values)==null?void 0:V.length)||0);return p!==0?p:Og(h,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===cl.mapValue&&o===cl.mapValue)return 0;if(i===cl.mapValue)return 1;if(o===cl.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const y=ld(u[p],f[p]);if(y!==0)return y;const k=Ti(l[u[p]],h[f[p]]);if(k!==0)return k}return ae(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Y(23264,{he:n})}}function bg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=Lr(t),r=Lr(e),s=ae(n.seconds,r.seconds);return s!==0?s:ae(n.nanos,r.nanos)}function Og(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ti(n[s],r[s]);if(i)return i}return ae(n.length,r.length)}function Ii(t){return ud(t)}function ud(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Lr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return jr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ud(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ud(n.fields[o])}`;return s+"}"}(t.mapValue):Y(61005,{value:t})}function Pl(t){switch(Fr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Gu(t);return e?16+Pl(e):16;case 5:return 2*t.stringValue.length;case 6:return jr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Pl(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Is(r.fields,(i,o)=>{s+=i.length+Pl(o)}),s}(t.mapValue);default:throw Y(13486,{value:t})}}function cd(t){return!!t&&"integerValue"in t}function Mf(t){return!!t&&"arrayValue"in t}function Mg(t){return!!t&&"nullValue"in t}function Lg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Nl(t){return!!t&&"mapValue"in t}function mC(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[U0])==null?void 0:r.stringValue)===z0}function ko(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Is(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ko(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ko(t.arrayValue.values[n]);return e}return{...t}}function gC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===pC}/**
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
 */class Lt{constructor(e){this.value=e}static empty(){return new Lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Nl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ko(n)}setAll(e){let n=Ze.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=ko(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Nl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return En(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Nl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Is(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Lt(ko(this.value))}}function B0(t){const e=[];return Is(t.fields,(n,r)=>{const s=new Ze([n]);if(Nl(r)){const i=B0(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new nn(e)}/**
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
 */class ct{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ct(e,0,te.min(),te.min(),te.min(),Lt.empty(),0)}static newFoundDocument(e,n,r,s){return new ct(e,1,n,te.min(),r,s,0)}static newNoDocument(e,n){return new ct(e,2,n,te.min(),te.min(),Lt.empty(),0)}static newUnknownDocument(e,n){return new ct(e,3,n,te.min(),te.min(),Lt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class gu{constructor(e,n){this.position=e,this.inclusive=n}}function jg(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=Ti(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Fg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!En(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class yu{constructor(e,n="asc"){this.field=e,this.dir=n}}function yC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class $0{}class ze extends $0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new vC(e,n,r):n==="array-contains"?new TC(e,r):n==="in"?new IC(e,r):n==="not-in"?new SC(e,r):n==="array-contains-any"?new AC(e,r):new ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new wC(e,r):new EC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ti(n,this.value)):n!==null&&Fr(this.value)===Fr(n)&&this.matchesComparison(Ti(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Tn extends $0{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Tn(e,n)}matches(e){return H0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function H0(t){return t.op==="and"}function W0(t){return _C(t)&&H0(t)}function _C(t){for(const e of t.filters)if(e instanceof Tn)return!1;return!0}function hd(t){if(t instanceof ze)return t.field.canonicalString()+t.op.toString()+Ii(t.value);if(W0(t))return t.filters.map(e=>hd(e)).join(",");{const e=t.filters.map(n=>hd(n)).join(",");return`${t.op}(${e})`}}function q0(t,e){return t instanceof ze?function(r,s){return s instanceof ze&&r.op===s.op&&r.field.isEqual(s.field)&&En(r.value,s.value)}(t,e):t instanceof Tn?function(r,s){return s instanceof Tn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&q0(o,s.filters[l]),!0):!1}(t,e):void Y(19439)}function G0(t){return t instanceof ze?function(n){return`${n.field.canonicalString()} ${n.op} ${Ii(n.value)}`}(t):t instanceof Tn?function(n){return n.op.toString()+" {"+n.getFilters().map(G0).join(" ,")+"}"}(t):"Filter"}class vC extends ze{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class wC extends ze{constructor(e,n){super(e,"in",n),this.keys=K0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class EC extends ze{constructor(e,n){super(e,"not-in",n),this.keys=K0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function K0(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class TC extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Mf(n)&&na(n.arrayValue,this.value)}}class IC extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&na(this.value.arrayValue,n)}}class SC extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(na(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!na(this.value.arrayValue,n)}}class AC extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Mf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>na(this.value.arrayValue,r))}}/**
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
 */class xC{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Ug(t,e=null,n=[],r=[],s=null,i=null,o=null){return new xC(t,e,n,r,s,i,o)}function Lf(t){const e=ne(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>hd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),qu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ii(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ii(r)).join(",")),e.Te=n}return e.Te}function jf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!yC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!q0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Fg(t.startAt,e.startAt)&&Fg(t.endAt,e.endAt)}function dd(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ku{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function CC(t,e,n,r,s,i,o,l){return new Ku(t,e,n,r,s,i,o,l)}function Ff(t){return new Ku(t)}function zg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function kC(t){return t.collectionGroup!==null}function Ro(t){const e=ne(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new $e(Ze.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new yu(i,r))}),n.has(Ze.keyField().canonicalString())||e.Ie.push(new yu(Ze.keyField(),r))}return e.Ie}function gn(t){const e=ne(t);return e.Ee||(e.Ee=RC(e,Ro(t))),e.Ee}function RC(t,e){if(t.limitType==="F")return Ug(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new yu(s.field,i)});const n=t.endAt?new gu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new gu(t.startAt.position,t.startAt.inclusive):null;return Ug(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function fd(t,e,n){return new Ku(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Qu(t,e){return jf(gn(t),gn(e))&&t.limitType===e.limitType}function Q0(t){return`${Lf(gn(t))}|lt:${t.limitType}`}function Us(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>G0(s)).join(", ")}]`),qu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ii(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ii(s)).join(",")),`Target(${r})`}(gn(t))}; limitType=${t.limitType})`}function Yu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):K.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ro(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const h=jg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Ro(r),s)||r.endAt&&!function(o,l,u){const h=jg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Ro(r),s))}(t,e)}function PC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Y0(t){return(e,n)=>{let r=!1;for(const s of Ro(t)){const i=NC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function NC(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),h=l.data.field(i);return u!==null&&h!==null?Ti(u,h):Y(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y(19790,{direction:t.dir})}}/**
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
 */class Ss{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Is(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return b0(this.inner)}size(){return this.innerSize}}/**
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
 */const DC=new Re(K.comparator);function Hn(){return DC}const X0=new Re(K.comparator);function po(...t){let e=X0;for(const n of t)e=e.insert(n.key,n);return e}function J0(t){let e=X0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function os(){return Po()}function Z0(){return Po()}function Po(){return new Ss(t=>t.toString(),(t,e)=>t.isEqual(e))}const VC=new Re(K.comparator),bC=new $e(K.comparator);function le(...t){let e=bC;for(const n of t)e=e.add(n);return e}const OC=new $e(ae);function MC(){return OC}/**
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
 */function Uf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fu(e)?"-0":e}}function ew(t){return{integerValue:""+t}}function LC(t,e){return uC(e)?ew(e):Uf(t,e)}/**
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
 */class Xu{constructor(){this._=void 0}}function jC(t,e,n){return t instanceof _u?function(s,i){const o={fields:{[L0]:{stringValue:M0},[F0]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Of(i)&&(i=Gu(i)),i&&(o.fields[j0]=i),{mapValue:o}}(n,e):t instanceof ra?nw(t,e):t instanceof sa?rw(t,e):function(s,i){const o=tw(s,i),l=Bg(o)+Bg(s.Ae);return cd(o)&&cd(s.Ae)?ew(l):Uf(s.serializer,l)}(t,e)}function FC(t,e,n){return t instanceof ra?nw(t,e):t instanceof sa?rw(t,e):n}function tw(t,e){return t instanceof vu?function(r){return cd(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class _u extends Xu{}class ra extends Xu{constructor(e){super(),this.elements=e}}function nw(t,e){const n=sw(e);for(const r of t.elements)n.some(s=>En(s,r))||n.push(r);return{arrayValue:{values:n}}}class sa extends Xu{constructor(e){super(),this.elements=e}}function rw(t,e){let n=sw(e);for(const r of t.elements)n=n.filter(s=>!En(s,r));return{arrayValue:{values:n}}}class vu extends Xu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Bg(t){return Ve(t.integerValue||t.doubleValue)}function sw(t){return Mf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function UC(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ra&&s instanceof ra||r instanceof sa&&s instanceof sa?Ei(r.elements,s.elements,En):r instanceof vu&&s instanceof vu?En(r.Ae,s.Ae):r instanceof _u&&s instanceof _u}(t.transform,e.transform)}class zC{constructor(e,n){this.version=e,this.transformResults=n}}class Mn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Mn}static exists(e){return new Mn(void 0,e)}static updateTime(e){return new Mn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Dl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ju{}function iw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new aw(t.key,Mn.none()):new ya(t.key,t.data,Mn.none());{const n=t.data,r=Lt.empty();let s=new $e(Ze.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new As(t.key,r,new nn(s.toArray()),Mn.none())}}function BC(t,e,n){t instanceof ya?function(s,i,o){const l=s.value.clone(),u=Hg(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof As?function(s,i,o){if(!Dl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Hg(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(ow(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function No(t,e,n,r){return t instanceof ya?function(i,o,l,u){if(!Dl(i.precondition,o))return l;const h=i.value.clone(),f=Wg(i.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof As?function(i,o,l,u){if(!Dl(i.precondition,o))return l;const h=Wg(i.fieldTransforms,u,o),f=o.data;return f.setAll(ow(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return Dl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function $C(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=tw(r.transform,s||null);i!=null&&(n===null&&(n=Lt.empty()),n.set(r.field,i))}return n||null}function $g(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ei(r,s,(i,o)=>UC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ya extends Ju{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class As extends Ju{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ow(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Hg(t,e,n){const r=new Map;pe(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,FC(o,l,n[s]))}return r}function Wg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,jC(i,o,e))}return r}class aw extends Ju{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class HC extends Ju{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class WC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&BC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=No(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=No(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Z0();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=iw(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&Ei(this.mutations,e.mutations,(n,r)=>$g(n,r))&&Ei(this.baseMutations,e.baseMutations,(n,r)=>$g(n,r))}}class zf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){pe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return VC}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new zf(e,n,r,s)}}/**
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
 */class qC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class GC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Me,ue;function KC(t){switch(t){case j.OK:return Y(64938);case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0;default:return Y(15467,{code:t})}}function lw(t){if(t===void 0)return $n("GRPC error has no .code"),j.UNKNOWN;switch(t){case Me.OK:return j.OK;case Me.CANCELLED:return j.CANCELLED;case Me.UNKNOWN:return j.UNKNOWN;case Me.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case Me.INTERNAL:return j.INTERNAL;case Me.UNAVAILABLE:return j.UNAVAILABLE;case Me.UNAUTHENTICATED:return j.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case Me.NOT_FOUND:return j.NOT_FOUND;case Me.ALREADY_EXISTS:return j.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return j.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case Me.ABORTED:return j.ABORTED;case Me.OUT_OF_RANGE:return j.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return j.UNIMPLEMENTED;case Me.DATA_LOSS:return j.DATA_LOSS;default:return Y(39323,{code:t})}}(ue=Me||(Me={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function QC(){return new TextEncoder}/**
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
 */const YC=new Dr([4294967295,4294967295],0);function qg(t){const e=QC().encode(t),n=new S0;return n.update(e),new Uint8Array(n.digest())}function Gg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Dr([n,r],0),new Dr([s,i],0)]}class Bf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new mo(`Invalid padding: ${n}`);if(r<0)throw new mo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new mo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new mo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Dr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Dr.fromNumber(r)));return s.compare(YC)===1&&(s=new Dr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=qg(e),[r,s]=Gg(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Bf(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=qg(e),[r,s]=Gg(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class mo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Zu{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,_a.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Zu(te.min(),s,new Re(ae),Hn(),le())}}class _a{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new _a(r,n,le(),le(),le())}}/**
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
 */class Vl{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class uw{constructor(e,n){this.targetId=e,this.Ce=n}}class cw{constructor(e,n,r=nt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Kg{constructor(){this.ve=0,this.Fe=Qg(),this.Me=nt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=le(),n=le(),r=le();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Y(38017,{changeType:i})}}),new _a(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Qg()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,pe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class XC{constructor(e){this.Ge=e,this.ze=new Map,this.je=Hn(),this.Je=hl(),this.He=hl(),this.Ye=new Re(ae)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Y(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(dd(i))if(r===0){const o=new K(i.path);this.et(n,o,ct.newNoDocument(o,te.min()))}else pe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=jr(r).toUint8Array()}catch(u){if(u instanceof O0)return wi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Bf(o,s,i)}catch(u){return wi(u instanceof mo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&dd(l.target)){const u=new K(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,ct.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=le();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Zu(e,n,this.Ye,this.je,r);return this.je=Hn(),this.Je=hl(),this.He=hl(),this.Ye=new Re(ae),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Kg,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new $e(ae),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new $e(ae),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Kg),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function hl(){return new Re(K.comparator)}function Qg(){return new Re(K.comparator)}const JC={asc:"ASCENDING",desc:"DESCENDING"},ZC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},e2={and:"AND",or:"OR"};class t2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function pd(t,e){return t.useProto3Json||qu(e)?e:{value:e}}function wu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function n2(t,e){return wu(t,e.toTimestamp())}function yn(t){return pe(!!t,49232),te.fromTimestamp(function(n){const r=Lr(n);return new Te(r.seconds,r.nanos)}(t))}function $f(t,e){return md(t,e).canonicalString()}function md(t,e){const n=function(s){return new xe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function dw(t){const e=xe.fromString(t);return pe(yw(e),10190,{key:e.toString()}),e}function gd(t,e){return $f(t.databaseId,e.path)}function eh(t,e){const n=dw(e);if(n.get(1)!==t.databaseId.projectId)throw new q(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(pw(n))}function fw(t,e){return $f(t.databaseId,e)}function r2(t){const e=dw(t);return e.length===4?xe.emptyPath():pw(e)}function yd(t){return new xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function pw(t){return pe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Yg(t,e,n){return{name:gd(t,e),fields:n.value.mapValue.fields}}function s2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Y(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(pe(f===void 0||typeof f=="string",58123),nt.fromBase64String(f||"")):(pe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),nt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?j.UNKNOWN:lw(h.code);return new q(f,h.message||"")}(o);n=new cw(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=eh(t,r.document.name),i=yn(r.document.updateTime),o=r.document.createTime?yn(r.document.createTime):te.min(),l=new Lt({mapValue:{fields:r.document.fields}}),u=ct.newFoundDocument(s,i,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Vl(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=eh(t,r.document),i=r.readTime?yn(r.readTime):te.min(),o=ct.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Vl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=eh(t,r.document),i=r.removedTargetIds||[];n=new Vl([],i,s,null)}else{if(!("filter"in e))return Y(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new GC(s,i),l=r.targetId;n=new uw(l,o)}}return n}function i2(t,e){let n;if(e instanceof ya)n={update:Yg(t,e.key,e.value)};else if(e instanceof aw)n={delete:gd(t,e.key)};else if(e instanceof As)n={update:Yg(t,e.key,e.data),updateMask:p2(e.fieldMask)};else{if(!(e instanceof HC))return Y(16599,{Vt:e.type});n={verify:gd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof _u)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ra)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof sa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof vu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw Y(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:n2(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Y(27497)}(t,e.precondition)),n}function o2(t,e){return t&&t.length>0?(pe(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?yn(s.updateTime):yn(i);return o.isEqual(te.min())&&(o=yn(i)),new zC(o,s.transformResults||[])}(n,e))):[]}function a2(t,e){return{documents:[fw(t,e.path)]}}function l2(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=fw(t,s);const i=function(h){if(h.length!==0)return gw(Tn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:zs(y.field),direction:h2(y.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=pd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:s}}function u2(t){let e=r2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){pe(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const y=mw(p);return y instanceof Tn&&W0(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(y=>function(D){return new yu(Bs(D.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(p){let y;return y=typeof p=="object"?p.value:p,qu(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(p){const y=!!p.before,k=p.values||[];return new gu(k,y)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const y=!p.before,k=p.values||[];return new gu(k,y)}(n.endAt)),CC(e,s,o,i,l,"F",u,h)}function c2(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function mw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Bs(n.unaryFilter.field);return ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Bs(n.unaryFilter.field);return ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Bs(n.unaryFilter.field);return ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Bs(n.unaryFilter.field);return ze.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Y(61313);default:return Y(60726)}}(t):t.fieldFilter!==void 0?function(n){return ze.create(Bs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Y(58110);default:return Y(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Tn.create(n.compositeFilter.filters.map(r=>mw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Y(1026)}}(n.compositeFilter.op))}(t):Y(30097,{filter:t})}function h2(t){return JC[t]}function d2(t){return ZC[t]}function f2(t){return e2[t]}function zs(t){return{fieldPath:t.canonicalString()}}function Bs(t){return Ze.fromServerFormat(t.fieldPath)}function gw(t){return t instanceof ze?function(n){if(n.op==="=="){if(Lg(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NAN"}};if(Mg(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Lg(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NOT_NAN"}};if(Mg(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zs(n.field),op:d2(n.op),value:n.value}}}(t):t instanceof Tn?function(n){const r=n.getFilters().map(s=>gw(s));return r.length===1?r[0]:{compositeFilter:{op:f2(n.op),filters:r}}}(t):Y(54877,{filter:t})}function p2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function yw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class wr{constructor(e,n,r,s,i=te.min(),o=te.min(),l=nt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new wr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class m2{constructor(e){this.yt=e}}function g2(t){const e=u2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?fd(e,e.limit,"L"):e}/**
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
 */class y2{constructor(){this.Cn=new _2}addToCollectionParentIndex(e,n){return this.Cn.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(Mr.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(Mr.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class _2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new $e(xe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new $e(xe.comparator)).toArray()}}/**
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
 */const Xg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},_w=41943040;class Et{static withCacheSize(e){return new Et(e,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Et.DEFAULT_COLLECTION_PERCENTILE=10,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Et.DEFAULT=new Et(_w,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Et.DISABLED=new Et(-1,0,0);/**
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
 */class Si{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Si(0)}static cr(){return new Si(-1)}}/**
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
 */const Jg="LruGarbageCollector",v2=1048576;function Zg([t,e],[n,r]){const s=ae(t,n);return s===0?ae(e,r):s}class w2{constructor(e){this.Ir=e,this.buffer=new $e(Zg),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Zg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class E2{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){H(Jg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){bi(n)?H(Jg,"Ignoring IndexedDB error during garbage collection: ",n):await Vi(n)}await this.Vr(3e5)})}}class T2{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return O.resolve(Wu.ce);const r=new w2(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(Xg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Xg):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Fs()<=oe.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function I2(t,e){return new T2(t,e)}/**
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
 */class S2{constructor(){this.changes=new Ss(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class A2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class x2{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&No(r.mutation,s,nn.empty(),Te.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,n,r=le()){const s=os();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=po();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=os();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,le()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Hn();const o=Po(),l=function(){return Po()}();return n.forEach((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof As)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),No(f.mutation,h,f.mutation.getFieldMask(),Te.now())):o.set(h.key,nn.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>l.set(h,new A2(f,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Po();let s=new Re((o,l)=>o-l),i=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||nn.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(s.get(l.batchId)||le()).add(u);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=Z0();f.forEach(y=>{if(!i.has(y)){const k=iw(n.get(y),r.get(y));k!==null&&p.set(y,k),i=i.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):kC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):O.resolve(os());let l=Zo,u=i;return o.next(h=>O.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?O.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,le())).next(f=>({batchId:l,changes:J0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let s=po();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=po();return this.indexManager.getCollectionParents(e,i).next(l=>O.forEach(l,u=>{const h=function(p,y){return new Ku(y,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,y)=>{o=o.insert(p,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ct.newInvalidDocument(f)))});let l=po();return o.forEach((u,h)=>{const f=i.get(u);f!==void 0&&No(f.mutation,h,nn.empty(),Te.now()),Yu(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class C2{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return O.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:yn(s.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:g2(s.bundledQuery),readTime:yn(s.readTime)}}(n)),O.resolve()}}/**
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
 */class k2{constructor(){this.overlays=new Re(K.comparator),this.qr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=os();return O.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const s=os(),i=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return O.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Re((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=os(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=os(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return O.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new qC(n,r));let i=this.qr.get(n);i===void 0&&(i=le(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
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
 */class R2{constructor(){this.sessionToken=nt.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
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
 */class Hf{constructor(){this.Qr=new $e(We.$r),this.Ur=new $e(We.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new We(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new We(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new K(new xe([])),r=new We(n,e),s=new We(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new K(new xe([])),r=new We(n,e),s=new We(n,e+1);let i=le();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new We(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class We{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return K.comparator(e.key,n.key)||ae(e.Yr,n.Yr)}static Kr(e,n){return ae(e.Yr,n.Yr)||K.comparator(e.key,n.key)}}/**
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
 */class P2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new $e(We.$r)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new WC(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Zr=this.Zr.add(new We(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return O.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?bf:this.tr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new We(n,0),s=new We(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const l=this.Xr(o.Yr);i.push(l)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new $e(ae);return n.forEach(s=>{const i=new We(s,0),o=new We(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],l=>{r=r.add(l.Yr)})}),O.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;K.isDocumentKey(i)||(i=i.child(""));const o=new We(new K(i),0);let l=new $e(ae);return this.Zr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.Yr)),!0)},o),O.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){pe(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return O.forEach(n.mutations,s=>{const i=new We(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new We(n,0),s=this.Zr.firstAfterOrEqual(r);return O.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class N2{constructor(e){this.ri=e,this.docs=function(){return new Re(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(n))}getEntries(e,n){let r=Hn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ct.newInvalidDocument(s))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Hn();const o=n.path,l=new K(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||iC(sC(f),r)<=0||(s.has(f.key)||Yu(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return O.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Y(9500)}ii(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new D2(this)}getSize(e){return O.resolve(this.size)}}class D2 extends S2{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class V2{constructor(e){this.persistence=e,this.si=new Ss(n=>Lf(n),jf),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.oi=0,this._i=new Hf,this.targetCount=0,this.ai=Si.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),O.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Si(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Pr(n),O.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),O.waitFor(i).next(()=>s)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this._i.containsKey(n))}}/**
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
 */class vw{constructor(e,n){this.ui={},this.overlays={},this.ci=new Wu(0),this.li=!1,this.li=!0,this.hi=new R2,this.referenceDelegate=e(this),this.Pi=new V2(this),this.indexManager=new y2,this.remoteDocumentCache=function(s){return new N2(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new m2(n),this.Ii=new C2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new k2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new P2(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const s=new b2(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return O.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class b2 extends aC{constructor(e){super(),this.currentSequenceNumber=e}}class Wf{constructor(e){this.persistence=e,this.Ri=new Hf,this.Vi=null}static mi(e){return new Wf(e)}get fi(){if(this.Vi)return this.Vi;throw Y(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),O.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.fi,r=>{const s=K.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,te.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return O.or([()=>O.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Eu{constructor(e,n){this.persistence=e,this.pi=new Ss(r=>cC(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=I2(this,n)}static mi(e,n){return new Eu(e,n)}Ei(){}di(e){return O.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return O.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?O.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,i.removeEntry(o,te.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),O.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),O.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Pl(e.data.value)),n}br(e,n,r){return O.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return O.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class qf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=le(),s=le();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new qf(e,n.fromCache,r,s)}}/**
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
 */class O2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class M2{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return SI()?8:lC(dt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new O2;return this.Ss(e,n,o).next(l=>{if(i.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(Fs()<=oe.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Us(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),O.resolve()):(Fs()<=oe.DEBUG&&H("QueryEngine","Query:",Us(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Fs()<=oe.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Us(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,gn(n))):O.resolve())}ys(e,n){if(zg(n))return O.resolve(null);let r=gn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=fd(n,null,"F"),r=gn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=le(...i);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ds(n,l);return this.Cs(n,h,o,u.readTime)?this.ys(e,fd(n,null,"F")):this.vs(e,h,n,u)}))})))}ws(e,n,r,s){return zg(n)||s.isEqual(te.min())?O.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?O.resolve(null):(Fs()<=oe.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Us(n)),this.vs(e,o,n,rC(s,Zo)).next(l=>l))})}Ds(e,n){let r=new $e(Y0(e));return n.forEach((s,i)=>{Yu(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return Fs()<=oe.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Us(n)),this.ps.getDocumentsMatchingQuery(e,n,Mr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Gf="LocalStore",L2=3e8;class j2{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Re(ae),this.xs=new Ss(i=>Lf(i),jf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new x2(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function F2(t,e,n,r){return new j2(t,e,n,r)}async function ww(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=le();for(const h of s){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ls:h,removedBatchIds:o,addedBatchIds:l}))})})}function U2(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,y=p.keys();let k=O.resolve();return y.forEach(D=>{k=k.next(()=>f.getEntry(u,D)).next(V=>{const L=h.docVersions.get(D);pe(L!==null,48541),V.version.compareTo(L)<0&&(p.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),f.addEntry(V)))})}),k.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=le();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Ew(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function z2(t,e){const n=ne(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const l=[];e.targetChanges.forEach((f,p)=>{const y=s.get(p);if(!y)return;l.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p)));let k=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?k=k.withResumeToken(nt.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):f.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(f.resumeToken,r)),s=s.insert(p,k),function(V,L,S){return V.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=L2?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(y,k,f)&&l.push(n.Pi.updateTargetData(i,k))});let u=Hn(),h=le();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(B2(i,o,e.documentUpdates).next(f=>{u=f.ks,h=f.qs})),!r.isEqual(te.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next(p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return O.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.Ms=s,i))}function B2(t,e,n){let r=le(),s=le();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Hn();return n.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(te.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H(Gf,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{ks:o,qs:s}})}function $2(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=bf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function H2(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,O.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new wr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function _d(t,e,n){const r=ne(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!bi(o))throw o;H(Gf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function ey(t,e,n){const r=ne(t);let s=te.min(),i=le();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=ne(u),y=p.xs.get(f);return y!==void 0?O.resolve(p.Ms.get(y)):p.Pi.getTargetData(h,f)}(r,o,gn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:te.min(),n?i:le())).next(l=>(W2(r,PC(e),l),{documents:l,Qs:i})))}function W2(t,e,n){let r=t.Os.get(e)||te.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class ty{constructor(){this.activeTargetIds=MC()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class q2{constructor(){this.Mo=new ty,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new ty,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class G2{Oo(e){}shutdown(){}}/**
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
 */const ny="ConnectivityMonitor";class ry{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){H(ny,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){H(ny,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let dl=null;function vd(){return dl===null?dl=function(){return 268435456+Math.round(2147483648*Math.random())}():dl++,"0x"+dl.toString(16)}/**
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
 */const th="RestConnection",K2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Q2{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===pu?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=vd(),l=this.zo(e,n.toUriEncodedString());H(th,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:h}=new URL(l),f=Ri(h);return this.Jo(e,l,u,r,f).then(p=>(H(th,`Received RPC '${e}' ${o}: `,p),p),p=>{throw wi(th,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Di}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=K2[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class Y2{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const at="WebChannelConnection";class X2 extends Q2{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=vd();return new Promise((l,u)=>{const h=new A0;h.setWithCredentials(!0),h.listenOnce(x0.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Rl.NO_ERROR:const p=h.getResponseJson();H(at,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Rl.TIMEOUT:H(at,`RPC '${e}' ${o} timed out`),u(new q(j.DEADLINE_EXCEEDED,"Request time out"));break;case Rl.HTTP_ERROR:const y=h.getStatus();if(H(at,`RPC '${e}' ${o} failed with status:`,y,"response text:",h.getResponseText()),y>0){let k=h.getResponseJson();Array.isArray(k)&&(k=k[0]);const D=k==null?void 0:k.error;if(D&&D.status&&D.message){const V=function(S){const T=S.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(T)>=0?T:j.UNKNOWN}(D.status);u(new q(V,D.message))}else u(new q(j.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new q(j.UNAVAILABLE,"Connection failed."));break;default:Y(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{H(at,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);H(at,`RPC '${e}' ${o} sending request:`,s),h.send(n,"POST",f,r,15)})}T_(e,n,r){const s=vd(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=R0(),l=k0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=i.join("");H(at,`Creating RPC '${e}' stream ${s}: ${f}`,u);const p=o.createWebChannel(f,u);this.I_(p);let y=!1,k=!1;const D=new Y2({Yo:L=>{k?H(at,`Not sending because RPC '${e}' stream ${s} is closed:`,L):(y||(H(at,`Opening RPC '${e}' stream ${s} transport.`),p.open(),y=!0),H(at,`RPC '${e}' stream ${s} sending:`,L),p.send(L))},Zo:()=>p.close()}),V=(L,S,T)=>{L.listen(S,C=>{try{T(C)}catch(b){setTimeout(()=>{throw b},0)}})};return V(p,fo.EventType.OPEN,()=>{k||(H(at,`RPC '${e}' stream ${s} transport opened.`),D.o_())}),V(p,fo.EventType.CLOSE,()=>{k||(k=!0,H(at,`RPC '${e}' stream ${s} transport closed`),D.a_(),this.E_(p))}),V(p,fo.EventType.ERROR,L=>{k||(k=!0,wi(at,`RPC '${e}' stream ${s} transport errored. Name:`,L.name,"Message:",L.message),D.a_(new q(j.UNAVAILABLE,"The operation could not be completed")))}),V(p,fo.EventType.MESSAGE,L=>{var S;if(!k){const T=L.data[0];pe(!!T,16349);const C=T,b=(C==null?void 0:C.error)||((S=C[0])==null?void 0:S.error);if(b){H(at,`RPC '${e}' stream ${s} received error:`,b);const U=b.status;let B=function(w){const I=Me[w];if(I!==void 0)return lw(I)}(U),v=b.message;B===void 0&&(B=j.INTERNAL,v="Unknown error status: "+U+" with message "+b.message),k=!0,D.a_(new q(B,v)),p.close()}else H(at,`RPC '${e}' stream ${s} received:`,T),D.u_(T)}}),V(l,C0.STAT_EVENT,L=>{L.stat===ad.PROXY?H(at,`RPC '${e}' stream ${s} detected buffering proxy`):L.stat===ad.NOPROXY&&H(at,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.__()},0),D}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function nh(){return typeof document<"u"?document:null}/**
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
 */function ec(t){return new t2(t,!0)}/**
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
 */class Tw{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const sy="PersistentStream";class Iw{constructor(e,n,r,s,i,o,l,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Tw(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?($n(n.toString()),$n("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new q(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return H(sy,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(H(sy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class J2 extends Iw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=s2(this.serializer,e),r=function(i){if(!("targetChange"in i))return te.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?yn(o.readTime):te.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=yd(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=dd(u)?{documents:a2(i,u)}:{query:l2(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=hw(i,o.resumeToken);const h=pd(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(te.min())>0){l.readTime=wu(i,o.snapshotVersion.toTimestamp());const h=pd(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=c2(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=yd(this.serializer),n.removeTarget=e,this.q_(n)}}class Z2 extends Iw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return pe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,pe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){pe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=o2(e.writeResults,e.commitTime),r=yn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=yd(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>i2(this.serializer,r))};this.q_(n)}}/**
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
 */class ek{}class tk extends ek{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new q(j.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,md(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(j.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,md(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(j.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class nk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?($n(n),this.aa=!1):H("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ws="RemoteStore";class rk{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{xs(this)&&(H(ws,"Restarting streams for network reachability change."),await async function(u){const h=ne(u);h.Ea.add(4),await va(h),h.Ra.set("Unknown"),h.Ea.delete(4),await tc(h)}(this))})}),this.Ra=new nk(r,s)}}async function tc(t){if(xs(t))for(const e of t.da)await e(!0)}async function va(t){for(const e of t.da)await e(!1)}function Sw(t,e){const n=ne(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Xf(n)?Yf(n):Oi(n).O_()&&Qf(n,e))}function Kf(t,e){const n=ne(t),r=Oi(n);n.Ia.delete(e),r.O_()&&Aw(n,e),n.Ia.size===0&&(r.O_()?r.L_():xs(n)&&n.Ra.set("Unknown"))}function Qf(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Oi(t).Y_(e)}function Aw(t,e){t.Va.Ue(e),Oi(t).Z_(e)}function Yf(t){t.Va=new XC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Oi(t).start(),t.Ra.ua()}function Xf(t){return xs(t)&&!Oi(t).x_()&&t.Ia.size>0}function xs(t){return ne(t).Ea.size===0}function xw(t){t.Va=void 0}async function sk(t){t.Ra.set("Online")}async function ik(t){t.Ia.forEach((e,n)=>{Qf(t,e)})}async function ok(t,e){xw(t),Xf(t)?(t.Ra.ha(e),Yf(t)):t.Ra.set("Unknown")}async function ak(t,e,n){if(t.Ra.set("Online"),e instanceof cw&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.Va.removeTarget(l))}(t,e)}catch(r){H(ws,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Tu(t,r)}else if(e instanceof Vl?t.Va.Ze(e):e instanceof uw?t.Va.st(e):t.Va.tt(e),!n.isEqual(te.min()))try{const r=await Ew(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Va.Tt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(nt.EMPTY_BYTE_STRING,f.snapshotVersion)),Aw(i,u);const p=new wr(f.target,u,h,f.sequenceNumber);Qf(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H(ws,"Failed to raise snapshot:",r),await Tu(t,r)}}async function Tu(t,e,n){if(!bi(e))throw e;t.Ea.add(1),await va(t),t.Ra.set("Offline"),n||(n=()=>Ew(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H(ws,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await tc(t)})}function Cw(t,e){return e().catch(n=>Tu(t,n,e))}async function nc(t){const e=ne(t),n=Ur(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:bf;for(;lk(e);)try{const s=await $2(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,uk(e,s)}catch(s){await Tu(e,s)}kw(e)&&Rw(e)}function lk(t){return xs(t)&&t.Ta.length<10}function uk(t,e){t.Ta.push(e);const n=Ur(t);n.O_()&&n.X_&&n.ea(e.mutations)}function kw(t){return xs(t)&&!Ur(t).x_()&&t.Ta.length>0}function Rw(t){Ur(t).start()}async function ck(t){Ur(t).ra()}async function hk(t){const e=Ur(t);for(const n of t.Ta)e.ea(n.mutations)}async function dk(t,e,n){const r=t.Ta.shift(),s=zf.from(r,e,n);await Cw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await nc(t)}async function fk(t,e){e&&Ur(t).X_&&await async function(r,s){if(function(o){return KC(o)&&o!==j.ABORTED}(s.code)){const i=r.Ta.shift();Ur(r).B_(),await Cw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await nc(r)}}(t,e),kw(t)&&Rw(t)}async function iy(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),H(ws,"RemoteStore received new credentials");const r=xs(n);n.Ea.add(3),await va(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await tc(n)}async function pk(t,e){const n=ne(t);e?(n.Ea.delete(2),await tc(n)):e||(n.Ea.add(2),await va(n),n.Ra.set("Unknown"))}function Oi(t){return t.ma||(t.ma=function(n,r,s){const i=ne(n);return i.sa(),new J2(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:sk.bind(null,t),t_:ik.bind(null,t),r_:ok.bind(null,t),H_:ak.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Xf(t)?Yf(t):t.Ra.set("Unknown")):(await t.ma.stop(),xw(t))})),t.ma}function Ur(t){return t.fa||(t.fa=function(n,r,s){const i=ne(n);return i.sa(),new Z2(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:ck.bind(null,t),r_:fk.bind(null,t),ta:hk.bind(null,t),na:dk.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await nc(t)):(await t.fa.stop(),t.Ta.length>0&&(H(ws,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class Jf{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Vr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Jf(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zf(t,e){if($n("AsyncQueue",`${e}: ${t}`),bi(t))return new q(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ci{static emptySet(e){return new ci(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=po(),this.sortedSet=new Re(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ci)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ci;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class oy{constructor(){this.ga=new Re(K.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Y(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ai{constructor(e,n,r,s,i,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ai(e,n,ci.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class mk{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class gk{constructor(){this.queries=ay(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ne(n),i=s.queries;s.queries=ay(),i.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new q(j.ABORTED,"Firestore shutting down"))}}function ay(){return new Ss(t=>Q0(t),Qu)}async function yk(t,e){const n=ne(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new mk,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Zf(o,`Initialization of query '${Us(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&ep(n)}async function _k(t,e){const n=ne(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function vk(t,e){const n=ne(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Fa(s)&&(r=!0);o.wa=s}}r&&ep(n)}function wk(t,e,n){const r=ne(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function ep(t){t.Ca.forEach(e=>{e.next()})}var wd,ly;(ly=wd||(wd={})).Ma="default",ly.Cache="cache";class Ek{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ai(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ai.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==wd.Cache}}/**
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
 */class Pw{constructor(e){this.key=e}}class Nw{constructor(e){this.key=e}}class Tk{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=le(),this.mutatedKeys=le(),this.eu=Y0(e),this.tu=new ci(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new oy,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const y=s.get(f),k=Yu(this.query,p)?p:null,D=!!y&&this.mutatedKeys.has(y.key),V=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let L=!1;y&&k?y.data.isEqual(k.data)?D!==V&&(r.track({type:3,doc:k}),L=!0):this.su(y,k)||(r.track({type:2,doc:k}),L=!0,(u&&this.eu(k,u)>0||h&&this.eu(k,h)<0)&&(l=!0)):!y&&k?(r.track({type:0,doc:k}),L=!0):y&&!k&&(r.track({type:1,doc:y}),L=!0,(u||h)&&(l=!0)),L&&(k?(o=o.add(k),i=V?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,p)=>function(k,D){const V=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y(20277,{Rt:L})}};return V(k)-V(D)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,h=u!==this.Za;return this.Za=u,o.length!==0||h?{snapshot:new Ai(this.query,e.tu,i,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new oy,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=le(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new Nw(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new Pw(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=le();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ai.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const tp="SyncEngine";class Ik{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Sk{constructor(e){this.key=e,this.hu=!1}}class Ak{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Ss(l=>Q0(l),Qu),this.Iu=new Map,this.Eu=new Set,this.du=new Re(K.comparator),this.Au=new Map,this.Ru=new Hf,this.Vu={},this.mu=new Map,this.fu=Si.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function xk(t,e,n=!0){const r=Lw(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Dw(r,e,n,!0),s}async function Ck(t,e){const n=Lw(t);await Dw(n,e,!0,!1)}async function Dw(t,e,n,r){const s=await H2(t.localStore,gn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await kk(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Sw(t.remoteStore,s),l}async function kk(t,e,n,r,s){t.pu=(p,y,k)=>async function(V,L,S,T){let C=L.view.ru(S);C.Cs&&(C=await ey(V.localStore,L.query,!1).then(({documents:v})=>L.view.ru(v,C)));const b=T&&T.targetChanges.get(L.targetId),U=T&&T.targetMismatches.get(L.targetId)!=null,B=L.view.applyChanges(C,V.isPrimaryClient,b,U);return cy(V,L.targetId,B.au),B.snapshot}(t,p,y,k);const i=await ey(t.localStore,e,!0),o=new Tk(e,i.Qs),l=o.ru(i.documents),u=_a.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,u);cy(t,n,h.au);const f=new Ik(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function Rk(t,e,n){const r=ne(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!Qu(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await _d(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Kf(r.remoteStore,s.targetId),Ed(r,s.targetId)}).catch(Vi)):(Ed(r,s.targetId),await _d(r.localStore,s.targetId,!0))}async function Pk(t,e){const n=ne(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Kf(n.remoteStore,r.targetId))}async function Nk(t,e,n){const r=jk(t);try{const s=await function(o,l){const u=ne(o),h=Te.now(),f=l.reduce((k,D)=>k.add(D.key),le());let p,y;return u.persistence.runTransaction("Locally write mutations","readwrite",k=>{let D=Hn(),V=le();return u.Ns.getEntries(k,f).next(L=>{D=L,D.forEach((S,T)=>{T.isValidDocument()||(V=V.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(k,D)).next(L=>{p=L;const S=[];for(const T of l){const C=$C(T,p.get(T.key).overlayedDocument);C!=null&&S.push(new As(T.key,C,B0(C.value.mapValue),Mn.exists(!0)))}return u.mutationQueue.addMutationBatch(k,h,S,l)}).next(L=>{y=L;const S=L.applyToLocalDocumentSet(p,V);return u.documentOverlayCache.saveOverlays(k,L.batchId,S)})}).then(()=>({batchId:y.batchId,changes:J0(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let h=o.Vu[o.currentUser.toKey()];h||(h=new Re(ae)),h=h.insert(l,u),o.Vu[o.currentUser.toKey()]=h}(r,s.batchId,n),await wa(r,s.changes),await nc(r.remoteStore)}catch(s){const i=Zf(s,"Failed to persist write");n.reject(i)}}async function Vw(t,e){const n=ne(t);try{const r=await z2(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(pe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?pe(o.hu,14607):s.removedDocuments.size>0&&(pe(o.hu,42227),o.hu=!1))}),await wa(n,r,e)}catch(r){await Vi(r)}}function uy(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=ne(o);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const y of p.Sa)y.va(l)&&(h=!0)}),h&&ep(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Dk(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Re(K.comparator);o=o.insert(i,ct.newNoDocument(i,te.min()));const l=le().add(i),u=new Zu(te.min(),new Map,new Re(ae),o,l);await Vw(r,u),r.du=r.du.remove(i),r.Au.delete(e),np(r)}else await _d(r.localStore,e,!1).then(()=>Ed(r,e,n)).catch(Vi)}async function Vk(t,e){const n=ne(t),r=e.batch.batchId;try{const s=await U2(n.localStore,e);Ow(n,r,null),bw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await wa(n,s)}catch(s){await Vi(s)}}async function bk(t,e,n){const r=ne(t);try{const s=await function(o,l){const u=ne(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(pe(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);Ow(r,e,n),bw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await wa(r,s)}catch(s){await Vi(s)}}function bw(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function Ow(t,e,n){const r=ne(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Ed(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||Mw(t,r)})}function Mw(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Kf(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),np(t))}function cy(t,e,n){for(const r of n)r instanceof Pw?(t.Ru.addReference(r.key,e),Ok(t,r)):r instanceof Nw?(H(tp,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||Mw(t,r.key)):Y(19791,{wu:r})}function Ok(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(H(tp,"New document in limbo: "+n),t.Eu.add(r),np(t))}function np(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new K(xe.fromString(e)),r=t.fu.next();t.Au.set(r,new Sk(n)),t.du=t.du.insert(n,r),Sw(t.remoteStore,new wr(gn(Ff(n.path)),r,"TargetPurposeLimboResolution",Wu.ce))}}async function wa(t,e,n){const r=ne(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){s.push(h);const p=qf.As(u.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(u,h){const f=ne(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>O.forEach(h,y=>O.forEach(y.Es,k=>f.persistence.referenceDelegate.addReference(p,y.targetId,k)).next(()=>O.forEach(y.ds,k=>f.persistence.referenceDelegate.removeReference(p,y.targetId,k)))))}catch(p){if(!bi(p))throw p;H(Gf,"Failed to update sequence numbers: "+p)}for(const p of h){const y=p.targetId;if(!p.fromCache){const k=f.Ms.get(y),D=k.snapshotVersion,V=k.withLastLimboFreeSnapshotVersion(D);f.Ms=f.Ms.insert(y,V)}}}(r.localStore,i))}async function Mk(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){H(tp,"User change. New user:",e.toKey());const r=await ww(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new q(j.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await wa(n,r.Ls)}}function Lk(t,e){const n=ne(t),r=n.Au.get(e);if(r&&r.hu)return le().add(r.key);{let s=le();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function Lw(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Vw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Lk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Dk.bind(null,e),e.Pu.H_=vk.bind(null,e.eventManager),e.Pu.yu=wk.bind(null,e.eventManager),e}function jk(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Vk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bk.bind(null,e),e}class Iu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ec(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return F2(this.persistence,new M2,e.initialUser,this.serializer)}Cu(e){return new vw(Wf.mi,this.serializer)}Du(e){return new q2}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Iu.provider={build:()=>new Iu};class Fk extends Iu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){pe(this.persistence.referenceDelegate instanceof Eu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new E2(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Et.withCacheSize(this.cacheSizeBytes):Et.DEFAULT;return new vw(r=>Eu.mi(r,n),this.serializer)}}class Td{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>uy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Mk.bind(null,this.syncEngine),await pk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new gk}()}createDatastore(e){const n=ec(e.databaseInfo.databaseId),r=function(i){return new X2(i)}(e.databaseInfo);return function(i,o,l,u){return new tk(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new rk(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>uy(this.syncEngine,n,0),function(){return ry.v()?new ry:new G2}())}createSyncEngine(e,n){return function(s,i,o,l,u,h,f){const p=new Ak(s,i,o,l,u,h);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ne(s);H(ws,"RemoteStore shutting down."),i.Ea.add(5),await va(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Td.provider={build:()=>new Td};/**
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
 */class Uk{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):$n("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const zr="FirestoreClient";class zk{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=lt.UNAUTHENTICATED,this.clientId=Df.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{H(zr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H(zr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Zf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function rh(t,e){t.asyncQueue.verifyOperationInProgress(),H(zr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await ww(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function hy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Bk(t);H(zr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>iy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>iy(e.remoteStore,s)),t._onlineComponents=e}async function Bk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H(zr,"Using user provided OfflineComponentProvider");try{await rh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===j.FAILED_PRECONDITION||s.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;wi("Error using user provided cache. Falling back to memory cache: "+n),await rh(t,new Iu)}}else H(zr,"Using default OfflineComponentProvider"),await rh(t,new Fk(void 0));return t._offlineComponents}async function jw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H(zr,"Using user provided OnlineComponentProvider"),await hy(t,t._uninitializedComponentsProvider._online)):(H(zr,"Using default OnlineComponentProvider"),await hy(t,new Td))),t._onlineComponents}function $k(t){return jw(t).then(e=>e.syncEngine)}async function Hk(t){const e=await jw(t),n=e.eventManager;return n.onListen=xk.bind(null,e.syncEngine),n.onUnlisten=Rk.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Ck.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Pk.bind(null,e.syncEngine),n}function Wk(t,e,n={}){const r=new Vr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const f=new Uk({next:y=>{f.Nu(),o.enqueueAndForget(()=>_k(i,p));const k=y.docs.has(l);!k&&y.fromCache?h.reject(new q(j.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&y.fromCache&&u&&u.source==="server"?h.reject(new q(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),p=new Ek(Ff(l.path),f,{includeMetadataChanges:!0,qa:!0});return yk(i,p)}(await Hk(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Fw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const dy=new Map;/**
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
 */const Uw="firestore.googleapis.com",fy=!0;class py{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new q(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Uw,this.ssl=fy}else this.host=e.host,this.ssl=e.ssl??fy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=_w;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<v2)throw new q(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}nC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Fw(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new q(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new q(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new q(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class rp{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new py({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new py(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Wx;switch(r.type){case"firstParty":return new Qx(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=dy.get(n);r&&(H("ComponentProvider","Removing Datastore"),dy.delete(n),r.terminate())}(this),Promise.resolve()}}function qk(t,e,n,r={}){var h;t=Jo(t,rp);const s=Ri(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(Uv(`https://${l}`),zv("Firestore",!0)),i.host!==Uw&&i.host!==l&&wi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!gs(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=lt.MOCK_USER;else{f=mI(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new q(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new lt(y)}t._authCredentials=new qx(new N0(f,p))}}/**
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
 */class sp{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new sp(this.firestore,e,this._query)}}class Ge{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ia(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ge(this.firestore,e,this._key)}toJSON(){return{type:Ge._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ga(n,Ge._jsonSchema))return new Ge(e,r||null,new K(xe.fromString(n.referencePath)))}}Ge._jsonSchemaVersion="firestore/documentReference/1.0",Ge._jsonSchema={type:je("string",Ge._jsonSchemaVersion),referencePath:je("string")};class ia extends sp{constructor(e,n,r){super(e,n,Ff(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ge(this.firestore,null,new K(e))}withConverter(e){return new ia(this.firestore,e,this._path)}}function my(t,e,...n){if(t=$t(t),arguments.length===1&&(e=Df.newId()),tC("doc","path",e),t instanceof rp){const r=xe.fromString(e,...n);return kg(r),new Ge(t,null,new K(r))}{if(!(t instanceof Ge||t instanceof ia))throw new q(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(xe.fromString(e,...n));return kg(r),new Ge(t.firestore,t instanceof ia?t.converter:null,new K(r))}}/**
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
 */const gy="AsyncQueue";class yy{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Tw(this,"async_queue_retry"),this._c=()=>{const r=nh();r&&H(gy,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=nh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=nh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Vr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!bi(e))throw e;H(gy,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,$n("INTERNAL UNHANDLED ERROR: ",_y(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Jf.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&Y(47125,{Pc:_y(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function _y(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ip extends rp{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new yy,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new yy(e),this._firestoreClient=void 0,await e}}}function Gk(t,e){const n=typeof t=="object"?t:Wv(),r=typeof t=="string"?t:pu,s=wf(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=fI("firestore");i&&qk(s,...i)}return s}function zw(t){if(t._terminated)throw new q(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Kk(t),t._firestoreClient}function Kk(t){var r,s,i;const e=t._freezeSettings(),n=function(l,u,h,f){return new fC(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Fw(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new zk(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class jt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new jt(nt.fromBase64String(e))}catch(n){throw new q(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new jt(nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:jt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ga(e,jt._jsonSchema))return jt.fromBase64String(e.bytes)}}jt._jsonSchemaVersion="firestore/bytes/1.0",jt._jsonSchema={type:je("string",jt._jsonSchemaVersion),bytes:je("string")};/**
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
 */class op{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Bw{constructor(e){this._methodName=e}}/**
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
 */class _n{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:_n._jsonSchemaVersion}}static fromJSON(e){if(ga(e,_n._jsonSchema))return new _n(e.latitude,e.longitude)}}_n._jsonSchemaVersion="firestore/geoPoint/1.0",_n._jsonSchema={type:je("string",_n._jsonSchemaVersion),latitude:je("number"),longitude:je("number")};/**
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
 */class vn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:vn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ga(e,vn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new vn(e.vectorValues);throw new q(j.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}vn._jsonSchemaVersion="firestore/vectorValue/1.0",vn._jsonSchema={type:je("string",vn._jsonSchemaVersion),vectorValues:je("object")};/**
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
 */const Qk=/^__.*__$/;class Yk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new As(e,this.data,this.fieldMask,n,this.fieldTransforms):new ya(e,this.data,n,this.fieldTransforms)}}function $w(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y(40011,{Ac:t})}}class ap{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new ap({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Su(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if($w(this.Ac)&&Qk.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Xk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ec(e)}Cc(e,n,r,s=!1){return new ap({Ac:e,methodName:n,Dc:r,path:Ze.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Jk(t){const e=t._freezeSettings(),n=ec(t._databaseId);return new Xk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Zk(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);Gw("Data must be an object, but it was:",o,r);const l=Ww(r,o);let u,h;if(i.merge)u=new nn(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const y=eR(e,p,n);if(!o.contains(y))throw new q(j.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);nR(f,y)||f.push(y)}u=new nn(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new Yk(new Lt(l),u,h)}function Hw(t,e){if(qw(t=$t(t)))return Gw("Unsupported field value:",e,t),Ww(t,e);if(t instanceof Bw)return function(r,s){if(!$w(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=Hw(l,s.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=$t(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return LC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Te.fromDate(r);return{timestampValue:wu(s.serializer,i)}}if(r instanceof Te){const i=new Te(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:wu(s.serializer,i)}}if(r instanceof _n)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof jt)return{bytesValue:hw(s.serializer,r._byteString)};if(r instanceof Ge){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:$f(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof vn)return function(o,l){return{mapValue:{fields:{[U0]:{stringValue:z0},[mu]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw l.Sc("VectorValues must only contain numeric values.");return Uf(l.serializer,h)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${Vf(r)}`)}(t,e)}function Ww(t,e){const n={};return b0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Is(t,(r,s)=>{const i=Hw(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function qw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Te||t instanceof _n||t instanceof jt||t instanceof Ge||t instanceof Bw||t instanceof vn)}function Gw(t,e,n){if(!qw(n)||!D0(n)){const r=Vf(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function eR(t,e,n){if((e=$t(e))instanceof op)return e._internalPath;if(typeof e=="string")return Kw(t,e);throw Su("Field path arguments must be of type string or ",t,!1,void 0,n)}const tR=new RegExp("[~\\*/\\[\\]]");function Kw(t,e,n){if(e.search(tR)>=0)throw Su(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new op(...e.split("."))._internalPath}catch{throw Su(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Su(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new q(j.INVALID_ARGUMENT,l+t+u)}function nR(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Qw{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Yw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class rR extends Qw{data(){return super.data()}}function Yw(t,e){return typeof e=="string"?Kw(t,e):e instanceof op?e._internalPath:e._delegate._internalPath}class sR{convertValue(e,n="none"){switch(Fr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Is(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[mu].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Ve(o.doubleValue));return new vn(n)}convertGeoPoint(e){return new _n(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Gu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ea(e));default:return null}}convertTimestamp(e){const n=Lr(e);return new Te(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=xe.fromString(e);pe(yw(r),9688,{name:e});const s=new ta(r.get(1),r.get(3)),i=new K(r.popFirst(5));return s.isEqual(n)||$n(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function iR(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class go{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class cs extends Qw{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new bl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Yw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(j.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=cs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}cs._jsonSchemaVersion="firestore/documentSnapshot/1.0",cs._jsonSchema={type:je("string",cs._jsonSchemaVersion),bundleSource:je("string","DocumentSnapshot"),bundleName:je("string"),bundle:je("string")};class bl extends cs{data(e={}){return super.data(e)}}class Do{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new go(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new bl(this._firestore,this._userDataWriter,r.key,r,new go(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new bl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new go(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new bl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new go(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:oR(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(j.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Do._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Df.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function oR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y(61501,{type:t})}}/**
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
 */function aR(t){t=Jo(t,Ge);const e=Jo(t.firestore,ip);return Wk(zw(e),t._key).then(n=>hR(e,t,n))}Do._jsonSchemaVersion="firestore/querySnapshot/1.0",Do._jsonSchema={type:je("string",Do._jsonSchemaVersion),bundleSource:je("string","QuerySnapshot"),bundleName:je("string"),bundle:je("string")};class lR extends sR{constructor(e){super(),this.firestore=e}convertBytes(e){return new jt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ge(this.firestore,null,n)}}function uR(t,e,n){t=Jo(t,Ge);const r=Jo(t.firestore,ip),s=iR(t.converter,e,n);return cR(r,[Zk(Jk(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Mn.none())])}function cR(t,e){return function(r,s){const i=new Vr;return r.asyncQueue.enqueueAndForget(async()=>Nk(await $k(r),s,i)),i.promise}(zw(t),e)}function hR(t,e,n){const r=n.docs.get(e._key),s=new lR(t);return new cs(t,s,e._key,r,new go(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Di=s})(Pi),_i(new ys("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new ip(new Gx(r.getProvider("auth-internal")),new Yx(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new q(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ta(h.options.projectId,f)}(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Nr(Sg,Ag,e),Nr(Sg,Ag,"esm2020")})();const dR=typeof __firebase_config<"u"?JSON.parse(__firebase_config):{apiKey:"AIzaSyCLPIPwhSkUzoaISxFZlG9F97zRp1u0o9o",authDomain:"financeiro-app-df224.firebaseapp.com",projectId:"financeiro-app-df224",storageBucket:"financeiro-app-df224.firebasestorage.app",messagingSenderId:"1061825731478",appId:"1:1061825731478:web:70c2e8c4c5eb13c56b5bb7"},Xw=Hv(dR),sh=$x(Xw),vy=Gk(Xw),bt=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],ih={receita:["Salário","Freelance","Investimentos","Reembolso","Outros"],despesa:["Moradia","Alimentação","Transporte","Saúde","Lazer","Educação","Contas Fixas","Outros","Combustível","Cartão de Crédito "]};function fR(){const t=new Date().getMonth(),[e,n]=ee.useState(bt[t]),[r,s]=ee.useState(new Date().getFullYear()),[i,o]=ee.useState(null),[l,u]=ee.useState(!0),[h,f]=ee.useState(""),[p,y]=ee.useState([]),[k,D]=ee.useState({}),[V,L]=ee.useState(ih),[S,T]=ee.useState(""),[C,b]=ee.useState([]),[U,B]=ee.useState([]),[v,_]=ee.useState(!1),[w,I]=ee.useState(""),[x,R]=ee.useState(""),[E,Oe]=ee.useState("despesa"),[vt,Gn]=ee.useState(""),[In,$]=ee.useState(new Date().toISOString().split("T")[0]),[Q,Z]=ee.useState(!1),[de,ve]=ee.useState(2),[Ht,ft]=ee.useState(""),[Wt,wt]=ee.useState(""),[qt,Cs]=ee.useState(""),[Ea,Ta]=ee.useState(null),[Ia,Mi]=ee.useState(""),[Kn,Li]=ee.useState(""),[ks,ji]=ee.useState("despesa"),[Sa,rc]=ee.useState(""),[Qe,rt]=ee.useState(""),[Fi,lp]=ee.useState(13.25),[sc,up]=ee.useState(12),[Rs,ic]=ee.useState(null),Ui=ee.useRef(null);ee.useEffect(()=>{const A=NA(sh,M=>{o(M),M||u(!1)});return()=>A()},[]),ee.useEffect(()=>{i&&(u(!0),(async()=>{try{const M=my(vy,"users",i.uid),X=await aR(M);if(X.exists()){const G=X.data();y(G.transactions||[]),D(G.budgets||{}),L(G.categories||ih),T(G.baseSalary||""),b(G.savingsGoals||[])}else y([]),D({}),L(ih),T(""),b([])}catch(M){console.error("Erro ao buscar:",M)}finally{u(!1)}})())},[i]),ee.useEffect(()=>{if(i&&!l){const A=async()=>{try{await uR(my(vy,"users",i.uid),{transactions:p,budgets:k,categories:V,baseSalary:S,savingsGoals:C,lastUpdated:new Date().toISOString(),email:i.email},{merge:!0})}catch(X){console.error("Erro ao salvar:",X)}},M=setTimeout(()=>{A()},1e3);return()=>clearTimeout(M)}},[p,k,V,S,C,i,l]),ee.useEffect(()=>{if(!p.length)return;const A=[],M=new Date,X=bt[M.getMonth()],G=M.getFullYear(),re=p.filter(ce=>{const rr=Gt(ce.date)-M,sr=Math.ceil(rr/(1e3*60*60*24));return ce.type==="despesa"&&sr>=0&&sr<=3&&ce.year===G});re.length>0&&A.push({type:"warning",title:"Contas Próximas",msg:`${re.length} conta(s) vencem nos próximos 3 dias.`,icon:Wm});const pt=p.filter(ce=>ce.month===X&&ce.year===G&&ce.type==="despesa").reduce((ce,fe)=>(ce[fe.category]=(ce[fe.category]||0)+fe.amount,ce),{});Object.keys(pt).forEach(ce=>{const fe=k[`${G}_${ce}`];fe&&pt[ce]>fe&&A.push({type:"danger",title:"Orçamento Estourado",msg:`Você excedeu o limite em ${ce}.`,icon:YT})});const Kr=new Date(G,M.getMonth()+1,0),Qr=p.filter(ce=>{const fe=Gt(ce.date);return fe>M&&fe<=Kr}),Os=p.reduce((ce,fe)=>Gt(fe.date)<=M?fe.type==="receita"?ce+fe.amount:ce-fe.amount:ce,0)+Qr.reduce((ce,fe)=>fe.type==="receita"?ce+fe.amount:ce-fe.amount,0);Os<0&&A.push({type:"danger",title:"Risco de Saldo Negativo",msg:`Previsão de fechar o mês com ${De(Os)}.`,icon:Hc}),B(A)},[p,k]);const zi=async()=>{f("");const A=new Pn;try{await JA(sh,A)}catch{f("Erro ao fazer login. Tente novamente.")}},oc=async()=>{await DA(sh),y([])},ac=()=>{const A=parseFloat(S);if(isNaN(A)||A<=0||!window.confirm(`Definir Salário Base de ${De(A)} para TODO o ano de ${r}?`))return;const M=p.filter(G=>!(G.isAutoSalary&&G.year===r)),X=[];for(let G=0;G<12;G++)X.push({id:`auto_salary_${r}_${G}`,month:bt[G],year:r,description:"Salário Mensal",amount:A,type:"receita",category:"Salário",date:`01/${(G+1).toString().padStart(2,"0")}/${r}`,isAutoSalary:!0});y([...M,...X]),alert("Salários atualizados!")},Aa=A=>{if(A.preventDefault(),!Ht||!Wt)return;const M={id:Date.now(),name:Ht,target:parseFloat(Wt),saved:parseFloat(qt)||0};b([...C,M]),ft(""),wt(""),Cs("")},xa=A=>{confirm("Excluir esta meta?")&&b(C.filter(M=>M.id!==A))},Qn=(A,M)=>{const X=parseFloat(M);isNaN(X)||b(C.map(G=>G.id===A?{...G,saved:X}:G))};ee.useEffect(()=>{var A;((A=V[E])==null?void 0:A.length)>0&&!V[E].includes(vt)&&Gn(V[E][0])},[E,V]);const Gt=A=>{if(!A)return new Date;const[M,X,G]=A.split("/").map(Number);return new Date(G,X-1,M)},Sn=new Date;Sn.setHours(0,0,0,0);const An=new Date(Sn.getFullYear(),Sn.getMonth()+1,0),Bi=p.reduce((A,M)=>Gt(M.date)<=Sn?M.type==="receita"?A+M.amount:A-M.amount:A,0),Yn=p.filter(A=>{const M=Gt(A.date);return M>Sn&&M<=An}),$i=Bi+Yn.reduce((A,M)=>M.type==="receita"?A+M.amount:A-M.amount,0),Wr=A=>{if(A.preventDefault(),!w||!x||!In)return;const[M,X,G]=In.split("-").map(Number),re=parseFloat(x),st=[];if(Q&&de>1){for(let pt=0;pt<de;pt++){const Kr=X-1+pt,Qr=M+Math.floor(Kr/12),bs=Kr%12,Os=E==="despesa"?`${w} (${pt+1}/${de})`:w;st.push({id:Date.now()+pt,month:bt[bs],year:Qr,description:Os,amount:re,type:E,category:vt,date:`${G.toString().padStart(2,"0")}/${(bs+1).toString().padStart(2,"0")}/${Qr}`})}alert(`${de} lançamentos criados!`)}else{st.push({id:Date.now(),month:bt[X-1],year:M,description:w,amount:re,type:E,category:vt,date:`${G.toString().padStart(2,"0")}/${X.toString().padStart(2,"0")}/${M}`});const pt=bt[X-1];(pt!==e||M!==r)&&alert(`Lançamento agendado para ${pt}/${M}!`)}y([...p,...st]),I(""),R(""),Z(!1),ve(2)},Ca=()=>{const A={transactions:p,budgets:k,categories:V,baseSalary:S,savingsGoals:C,exportedAt:new Date().toISOString()},M=document.createElement("a");M.href=`data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(A,null,2))}`,M.download=`backup_financeiro_${new Date().toLocaleDateString("pt-BR").replace(/\//g,"-")}.json`,M.click()},Ye=A=>{const M=A.target.files[0];if(!M)return;const X=new FileReader;X.onload=async G=>{try{const re=JSON.parse(G.target.result);re.transactions&&confirm("Importar dados?")&&(y(re.transactions),re.budgets&&D(re.budgets),re.categories&&L(re.categories),re.baseSalary&&T(re.baseSalary),re.savingsGoals&&b(re.savingsGoals),alert("Dados carregados!"))}catch{alert("Erro no arquivo.")}},X.readAsText(M),A.target.value=null},ka=A=>{A.preventDefault(),!(!Kn.trim()||V[ks].includes(Kn))&&(L(M=>({...M,[ks]:[...M[ks],Kn]})),Li(""))},Xn=(A,M)=>{confirm(`Remover "${M}"?`)&&L(X=>({...X,[A]:X[A].filter(G=>G!==M)}))},qr=A=>y(p.filter(M=>M.id!==A)),Ra=A=>{const M=parseFloat(Ia);isNaN(M)||D({...k,[`${r}_${A}`]:M}),Ta(null)},De=A=>new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(A),Kt=p.filter(A=>A.year===r),Jn=Kt.filter(A=>A.month===e).sort((A,M)=>Gt(A.date)-Gt(M.date)),Pa=Jn.filter(A=>A.type==="receita").reduce((A,M)=>A+M.amount,0),Gr=Jn.filter(A=>A.type==="despesa").reduce((A,M)=>A+M.amount,0),Hi=Pa-Gr,Na=A=>{Kt.filter(G=>G.type==="despesa"&&G.category===A).reduce((G,re)=>G+re.amount,0);const M=k[`${r}_${A}`]||0,X=Jn.filter(G=>G.type==="despesa"&&G.category===A).reduce((G,re)=>G+re.amount,0);return{spent:X,limit:M,percentage:M>0?X/M*100:0}},Zn=bt.map(A=>{const M=Kt.filter(re=>re.month===A),X=M.filter(re=>re.type==="receita").reduce((re,st)=>re+st.amount,0),G=M.filter(re=>re.type==="despesa").reduce((re,st)=>re+st.amount,0);return{month:A,inc:X,exp:G,bal:X-G}}),er=Zn.reduce((A,M)=>A+M.inc,0),Ps=Zn.reduce((A,M)=>A+M.exp,0),Qt=er-Ps,Da=Kt.filter(A=>A.type==="despesa").reduce((A,M)=>(A[M.category]=(A[M.category]||0)+M.amount,A),{}),Wi=Object.entries(Da).sort(([,A],[,M])=>M-A).map(([A,M])=>({cat:A,val:M,percent:Ps>0?M/Ps*100:0})),Ns=new Date,tr=Ns.getMonth(),Ds=Ns.getFullYear(),lc=tr===0?11:tr-1,Va=tr===0?Ds-1:Ds,uc=p.filter(A=>A.month===bt[tr]&&A.year===Ds&&A.type==="despesa"),Vs=p.filter(A=>A.month===bt[lc]&&A.year===Va&&A.type==="despesa"),qi=uc.reduce((A,M)=>A+M.amount,0),nr=Vs.reduce((A,M)=>A+M.amount,0),xn=qi-nr,Cn=nr>0?(qi-nr)/nr*100:0;return!i&&!l?g.jsx("div",{className:"min-h-screen flex items-center justify-center bg-slate-100 p-4",children:g.jsxs("div",{className:"bg-white p-8 rounded-2xl shadow-lg w-full max-w-md border border-slate-200 text-center",children:[g.jsx("div",{className:"inline-flex p-4 bg-blue-50 rounded-full mb-4",children:g.jsx(ol,{className:"w-10 h-10 text-blue-600"})}),g.jsx("h1",{className:"text-2xl font-bold text-slate-800",children:"Controle Financeiro"}),g.jsx("p",{className:"text-slate-500 text-sm mt-2",children:"Inteligência para o seu dinheiro."}),h&&g.jsx("div",{className:"p-3 mb-4 bg-red-50 text-red-600 text-sm rounded-lg mt-4",children:h}),g.jsxs("button",{onClick:zi,className:"w-full mt-6 py-4 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold rounded-xl flex items-center justify-center gap-3",children:[g.jsx("img",{src:"https://www.google.com/favicon.ico",alt:"Google",className:"w-5 h-5"})," Entrar com Google"]})]})}):l?g.jsxs("div",{className:"min-h-screen flex items-center justify-center bg-slate-100 text-slate-500",children:[g.jsx(tI,{className:"w-6 h-6 animate-spin mr-2"})," Carregando..."]}):g.jsx("div",{className:"min-h-screen bg-slate-50 text-slate-800 font-sans p-4 md:p-8",children:g.jsxs("div",{className:"max-w-7xl mx-auto space-y-6",children:[g.jsxs("header",{className:"flex flex-col xl:flex-row justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-200 gap-4",children:[g.jsxs("div",{className:"w-full xl:w-auto",children:[g.jsxs("h1",{className:"text-2xl font-bold text-slate-900 flex items-center gap-2",children:[g.jsx(ol,{className:"text-blue-600"})," Controle Financeiro"]}),g.jsxs("p",{className:"text-slate-500 text-sm mt-1 flex items-center gap-1",children:[g.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 inline-block"})," ",i.displayName||i.email]})]}),g.jsxs("div",{className:"flex flex-wrap justify-center items-center gap-3 w-full xl:w-auto",children:[g.jsxs("div",{className:"flex items-center gap-2 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-lg mr-2",children:[g.jsx($T,{size:16,className:"text-emerald-600"}),g.jsx("input",{type:"number",value:S,onChange:A=>T(A.target.value),className:"w-20 bg-transparent border-b border-emerald-300 focus:border-emerald-600 outline-none text-sm font-bold text-emerald-800 text-right",placeholder:"Salário"}),g.jsx("button",{onClick:ac,className:"p-1 bg-emerald-600 text-white rounded hover:bg-emerald-700",title:"Atualizar Salário",children:g.jsx(GT,{size:14})})]}),g.jsxs("div",{className:"flex items-center bg-slate-100 rounded-lg p-1",children:[g.jsx("button",{onClick:()=>s(A=>A-1),className:"p-2 hover:bg-white rounded-md text-slate-600",children:g.jsx(KT,{size:18})}),g.jsx("span",{className:"px-4 font-bold text-slate-700 min-w-[60px] text-center",children:r}),g.jsx("button",{onClick:()=>s(A=>A+1),className:"p-2 hover:bg-white rounded-md text-slate-600",children:g.jsx(QT,{size:18})})]}),g.jsx("div",{className:"h-8 w-px bg-slate-200 hidden sm:block"}),g.jsxs("button",{onClick:()=>n("Metas"),className:`px-3 py-2 rounded-lg font-medium flex gap-2 ${e==="Metas"?"bg-orange-500 text-white":"bg-white border text-slate-700"}`,children:[g.jsx($c,{size:18})," ",g.jsx("span",{className:"hidden xl:inline",children:"Metas"})]}),g.jsxs("button",{onClick:()=>n("Resumo"),className:`px-3 py-2 rounded-lg font-medium flex gap-2 ${e==="Resumo"?"bg-blue-600 text-white":"bg-white border text-slate-700"}`,children:[g.jsx(qm,{size:18})," ",g.jsx("span",{className:"hidden xl:inline",children:"Resumo"})]}),g.jsxs("button",{onClick:()=>n("Configuracoes"),className:`px-3 py-2 rounded-lg font-medium flex gap-2 ${e==="Configuracoes"?"bg-slate-700 text-white":"bg-white border text-slate-700"}`,children:[g.jsx(Km,{size:18})," ",g.jsx("span",{className:"hidden xl:inline",children:"Config"})]}),g.jsx("div",{className:"h-8 w-px bg-slate-200 hidden sm:block"}),g.jsxs("div",{className:"relative",children:[g.jsxs("button",{onClick:()=>_(!v),className:"p-2 text-slate-600 border rounded-lg hover:text-blue-600 relative",children:[g.jsx(Wm,{size:20}),U.length>0&&g.jsx("span",{className:"absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"})]}),v&&g.jsxs("div",{className:"absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-slate-200 z-50 overflow-hidden",children:[g.jsx("div",{className:"p-3 bg-slate-50 border-b border-slate-100 font-bold text-slate-700 text-sm",children:"Notificações"}),g.jsx("div",{className:"max-h-60 overflow-y-auto",children:U.length===0?g.jsx("div",{className:"p-4 text-center text-slate-400 text-sm",children:"Tudo tranquilo! Nenhum alerta."}):U.map((A,M)=>g.jsxs("div",{className:"p-3 border-b border-slate-100 hover:bg-slate-50 flex items-start gap-3",children:[g.jsx("div",{className:`p-2 rounded-full ${A.type==="danger"?"bg-red-100 text-red-600":"bg-amber-100 text-amber-600"}`,children:g.jsx(A.icon,{size:16})}),g.jsxs("div",{children:[g.jsx("p",{className:"text-sm font-bold text-slate-700",children:A.title}),g.jsx("p",{className:"text-xs text-slate-500",children:A.msg})]})]},M))})]})]}),g.jsx("button",{onClick:Ca,className:"p-2 text-slate-600 border rounded-lg hover:text-blue-600",title:"Exportar",children:g.jsx(XT,{size:20})}),g.jsx("button",{onClick:()=>Ui.current.click(),className:"p-2 text-slate-600 border rounded-lg hover:text-emerald-600",title:"Importar",children:g.jsx(sI,{size:20})}),g.jsx("input",{type:"file",ref:Ui,className:"hidden",onChange:Ye,accept:".json"}),g.jsx("button",{onClick:oc,className:"p-2 text-red-500 border border-red-100 bg-red-50 rounded-lg hover:bg-red-100",children:g.jsx(ZT,{size:20})})]})]}),!["Resumo","Investimentos","Configuracoes","Metas"].includes(e)&&g.jsx("div",{className:"overflow-x-auto pb-2 scrollbar-hide",children:g.jsx("div",{className:"flex gap-2 min-w-max",children:bt.map(A=>g.jsx("button",{onClick:()=>n(A),className:`px-4 py-2 rounded-full text-sm font-medium transition-all ${e===A?"bg-blue-600 text-white shadow-md scale-105":"bg-white text-slate-600 border"}`,children:A},A))})}),["Resumo","Investimentos","Configuracoes","Metas"].includes(e)?g.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden animate-fade-in relative",children:[g.jsxs("div",{className:"p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50",children:[g.jsxs("h2",{className:"text-xl font-bold text-slate-800 flex items-center gap-2",children:[e==="Resumo"&&g.jsxs(g.Fragment,{children:[g.jsx(qm,{className:"text-blue-600"})," Análise Financeira"]}),e==="Metas"&&g.jsxs(g.Fragment,{children:[g.jsx($c,{className:"text-orange-500"})," Metas & Objetivos"]}),e==="Investimentos"&&g.jsxs(g.Fragment,{children:[g.jsx(HT,{className:"text-indigo-600"})," Investimentos"]}),e==="Configuracoes"&&g.jsxs(g.Fragment,{children:[g.jsx(Km,{className:"text-slate-600"})," Configurações"]})]}),g.jsxs("button",{onClick:()=>n(bt[new Date().getMonth()]),className:"flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-100",children:[g.jsx(zT,{size:16})," Voltar"]})]}),g.jsxs("div",{className:"p-6",children:[e==="Metas"&&g.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[g.jsx("div",{className:"space-y-6",children:g.jsxs("div",{className:"bg-indigo-50 p-6 rounded-xl border border-indigo-100",children:[g.jsxs("h3",{className:"font-bold text-indigo-800 mb-4 flex items-center gap-2",children:[g.jsx(eI,{size:20})," Metas de Economia"]}),g.jsxs("form",{onSubmit:Aa,className:"flex gap-2 mb-6",children:[g.jsx("input",{type:"text",placeholder:"Ex: Viagem",value:Ht,onChange:A=>ft(A.target.value),className:"flex-1 p-2 rounded border text-sm",required:!0}),g.jsx("input",{type:"number",placeholder:"Alvo (R$)",value:Wt,onChange:A=>wt(A.target.value),className:"w-24 p-2 rounded border text-sm",required:!0}),g.jsx("input",{type:"number",placeholder:"Já tenho",value:qt,onChange:A=>Cs(A.target.value),className:"w-24 p-2 rounded border text-sm"}),g.jsx("button",{type:"submit",className:"bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700",children:g.jsx(Gm,{size:20})})]}),g.jsxs("div",{className:"space-y-4",children:[C.map(A=>{const M=Math.min(A.saved/A.target*100,100);return g.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-sm border border-indigo-100",children:[g.jsxs("div",{className:"flex justify-between items-center mb-2",children:[g.jsx("span",{className:"font-bold text-slate-700",children:A.name}),g.jsx("button",{onClick:()=>xa(A.id),className:"text-slate-300 hover:text-red-500",children:g.jsx(il,{size:14})})]}),g.jsxs("div",{className:"flex justify-between text-xs text-slate-500 mb-1",children:[g.jsx("span",{children:De(A.saved)}),g.jsxs("span",{children:["Meta: ",De(A.target)]})]}),g.jsx("div",{className:"h-2 w-full bg-slate-100 rounded-full overflow-hidden mb-2",children:g.jsx("div",{className:"h-full bg-indigo-500 rounded-full transition-all duration-1000",style:{width:`${M}%`}})}),g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsxs("span",{className:"text-xs text-indigo-600 font-bold",children:[M.toFixed(0),"%"]}),g.jsx("input",{type:"number",className:"w-full bg-slate-50 border-b border-slate-200 text-xs px-2 py-1 outline-none focus:border-indigo-500",placeholder:"Atualizar valor guardado...",onBlur:X=>Qn(A.id,X.target.value),onKeyDown:X=>X.key==="Enter"&&Qn(A.id,X.target.value)})]})]},A.id)}),C.length===0&&g.jsx("p",{className:"text-center text-indigo-300 text-sm",children:"Nenhuma meta definida."})]})]})}),g.jsx("div",{className:"space-y-6",children:g.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200",children:[g.jsxs("h3",{className:"font-bold text-slate-700 mb-4 flex items-center gap-2",children:[g.jsx($c,{size:20,className:"text-red-500"})," Limites de Gastos (Mensal)"]}),g.jsx("p",{className:"text-xs text-slate-500 mb-4",children:"Defina quanto quer gastar por categoria neste mês."}),g.jsx("div",{className:"space-y-4 max-h-[500px] overflow-y-auto pr-2",children:V.despesa.map(A=>{const{spent:M,limit:X,percentage:G}=Na(A),re=G>100;return g.jsxs("div",{className:"space-y-1",children:[g.jsxs("div",{className:"flex justify-between items-end",children:[g.jsx("span",{className:"text-sm font-medium text-slate-600",children:A}),g.jsx("div",{className:"flex items-center gap-2",children:Ea===A?g.jsx("input",{autoFocus:!0,type:"number",className:"w-24 px-2 py-1 text-xs border rounded",placeholder:"Limite",value:Ia,onChange:st=>Mi(st.target.value),onBlur:()=>Ra(A),onKeyDown:st=>st.key==="Enter"&&Ra(A)}):g.jsx("button",{onClick:()=>{Ta(A),Mi(k[`${r}_${A}`]||"")},className:"text-xs text-indigo-600 hover:text-indigo-800 cursor-pointer border-b border-dashed border-indigo-300",children:X>0?De(X):"Definir Limite"})})]}),X>0&&g.jsxs("div",{className:"relative pt-1",children:[g.jsxs("div",{className:"flex mb-1 items-center justify-between",children:[g.jsxs("span",{className:`text-[10px] font-semibold ${re?"text-red-600":"text-slate-500"}`,children:[De(M)," de ",De(X)]}),g.jsxs("span",{className:`text-[10px] ${re?"text-red-600 font-bold":"text-slate-400"}`,children:[G.toFixed(0),"%"]})]}),g.jsx("div",{className:"overflow-hidden h-2 mb-2 text-xs flex rounded bg-slate-100",children:g.jsx("div",{style:{width:`${Math.min(G,100)}%`},className:`transition-all duration-500 ${re?"bg-red-500":G>80?"bg-yellow-400":"bg-emerald-400"}`})})]})]},A)})})]})})]}),e==="Configuracoes"&&g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[g.jsxs("div",{className:"col-span-1 md:col-span-2 bg-slate-50 p-6 rounded-xl border border-slate-200",children:[g.jsx("div",{className:"flex justify-between items-center mb-3",children:g.jsx("h2",{className:"text-sm font-bold text-slate-600 uppercase",children:"Nova Categoria"})}),g.jsxs("form",{onSubmit:ka,className:"flex gap-4 items-end",children:[g.jsxs("div",{className:"flex-1",children:[g.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Nome"}),g.jsx("input",{type:"text",value:Kn,onChange:A=>Li(A.target.value),className:"w-full px-3 py-2 border rounded-lg"})]}),g.jsxs("div",{className:"w-40",children:[g.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Tipo"}),g.jsxs("select",{value:ks,onChange:A=>ji(A.target.value),className:"w-full px-3 py-2 border rounded-lg",children:[g.jsx("option",{value:"despesa",children:"Despesa"}),g.jsx("option",{value:"receita",children:"Receita"})]})]}),g.jsx("button",{type:"submit",className:"px-6 py-2 bg-slate-800 text-white rounded-lg",children:"Criar"})]})]}),g.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200",children:[g.jsxs("h3",{className:"font-bold text-emerald-600 mb-4 flex gap-2",children:[g.jsx(Wc,{size:18})," Receitas"]}),g.jsx("div",{className:"space-y-2 max-h-60 overflow-y-auto",children:V.receita.map(A=>g.jsxs("div",{className:"flex justify-between items-center p-2 bg-slate-50 rounded-lg text-sm",children:[g.jsx("span",{className:"text-slate-700 font-medium",children:A}),g.jsx("button",{onClick:()=>Xn("receita",A),className:"text-slate-400 hover:text-red-500 p-1.5 hover:bg-red-50 rounded-md transition-colors",children:g.jsx(il,{size:16})})]},A))})]}),g.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200",children:[g.jsxs("h3",{className:"font-bold text-red-600 mb-4 flex gap-2",children:[g.jsx(Hc,{size:18})," Despesas"]}),g.jsx("div",{className:"space-y-2 max-h-60 overflow-y-auto",children:V.despesa.map(A=>g.jsxs("div",{className:"flex justify-between items-center p-2 bg-slate-50 rounded-lg text-sm",children:[g.jsx("span",{className:"text-slate-700 font-medium",children:A}),g.jsx("button",{onClick:()=>Xn("despesa",A),className:"text-slate-400 hover:text-red-500 p-1.5 hover:bg-red-50 rounded-md transition-colors",children:g.jsx(il,{size:16})})]},A))})]})]}),e==="Resumo"&&g.jsxs("div",{className:"space-y-8",children:[g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[g.jsx(oh,{title:"Receita",value:er,icon:Wc,color:"text-emerald-600"}),g.jsx(oh,{title:"Despesa",value:Ps,icon:Hc,color:"text-red-600"}),g.jsx(oh,{title:"Saldo",value:Qt,icon:ol,color:Qt>=0?"text-blue-600":"text-red-600"}),g.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between",children:[g.jsxs("div",{children:[g.jsx("p",{className:"text-slate-500 text-xs font-medium mb-1 uppercase",children:"Comparativo Mês"}),g.jsx("h3",{className:"text-lg font-bold text-slate-700",children:bt[new Date().getMonth()]}),g.jsxs("div",{className:`flex items-center gap-1 text-sm font-semibold mt-1 ${xn<=0?"text-emerald-600":"text-red-600"}`,children:[xn<=0?g.jsx(UT,{size:16}):g.jsx(BT,{size:16}),Math.abs(Cn).toFixed(1),"% ",xn<=0?"Melhor":"Pior"]})]}),g.jsx("div",{className:"mt-2 pt-2 border-t border-slate-100 text-xs text-slate-500",children:"vs Mês Anterior"})]})]}),g.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[g.jsxs("div",{className:"lg:col-span-1 bg-white p-6 rounded-xl border border-slate-200",children:[g.jsxs("h3",{className:"font-bold text-slate-700 mb-6 flex items-center gap-2",children:[g.jsx(qT,{className:"text-indigo-600",size:20})," Maiores Gastos (Ano)"]}),g.jsxs("div",{className:"space-y-4",children:[Wi.slice(0,6).map((A,M)=>g.jsxs("div",{children:[g.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[g.jsxs("span",{className:"font-medium text-slate-700",children:[M+1,". ",A.cat]}),g.jsx("span",{className:"text-slate-500",children:De(A.val)})]}),g.jsx("div",{className:"h-2 w-full bg-slate-100 rounded-full overflow-hidden",children:g.jsx("div",{className:"h-full bg-indigo-500 rounded-full",style:{width:`${A.percent}%`}})})]},A.cat)),Wi.length===0&&g.jsx("p",{className:"text-slate-400 text-sm italic",children:"Sem dados."})]})]}),g.jsx("div",{className:"lg:col-span-2 overflow-x-auto border rounded-xl border-slate-200",children:g.jsxs("table",{className:"w-full text-left text-sm",children:[g.jsx("thead",{className:"bg-slate-50 text-slate-500",children:g.jsxs("tr",{children:[g.jsx("th",{className:"p-4",children:"Mês"}),g.jsx("th",{className:"p-4",children:"Fluxo"}),g.jsx("th",{className:"p-4 text-emerald-600",children:"Entrada"}),g.jsx("th",{className:"p-4 text-red-600",children:"Saída"}),g.jsx("th",{className:"p-4",children:"Saldo"})]})}),g.jsx("tbody",{className:"divide-y divide-slate-100",children:Zn.map(A=>{const M=Math.max(...Zn.map(re=>Math.max(re.inc,re.exp)))||1,X=A.inc/M*100,G=A.exp/M*100;return g.jsxs("tr",{className:"hover:bg-slate-50",children:[g.jsx("td",{className:"p-4 font-medium",children:A.month}),g.jsx("td",{className:"p-4 w-32",children:g.jsxs("div",{className:"space-y-1",children:[g.jsx("div",{className:"h-1 bg-emerald-200 rounded-full",style:{width:`${X}%`}}),g.jsx("div",{className:"h-1 bg-red-200 rounded-full",style:{width:`${G}%`}})]})}),g.jsx("td",{className:"p-4 text-emerald-600",children:De(A.inc)}),g.jsx("td",{className:"p-4 text-red-600",children:De(A.exp)}),g.jsx("td",{className:`p-4 font-bold ${A.bal>=0?"text-blue-600":"text-red-600"}`,children:De(A.bal)})]},A.month)})})]})})]})]})]})]}):g.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[g.jsxs("div",{className:"lg:col-span-4 space-y-6",children:[g.jsxs("div",{className:"bg-gradient-to-br from-indigo-900 to-slate-800 p-6 rounded-xl shadow-lg text-white",children:[g.jsxs("h2",{className:"font-bold flex items-center gap-2 mb-4 text-indigo-100",children:[g.jsx(Wc,{className:"w-5 h-5"})," Previsão Mensal"]}),g.jsx("div",{className:"flex justify-between items-end mb-4",children:g.jsxs("div",{children:[g.jsx("p",{className:"text-xs text-indigo-300 uppercase",children:"Saldo Projetado (Fim do Mês)"}),g.jsx("p",{className:`text-3xl font-bold mt-1 ${$i>=0?"text-emerald-400":"text-red-400"}`,children:De($i)})]})}),g.jsxs("div",{className:"bg-white/10 p-3 rounded-lg border border-white/10 text-sm space-y-2",children:[g.jsxs("div",{className:"flex justify-between",children:[g.jsx("span",{children:"Saldo Hoje:"})," ",g.jsx("span",{className:"font-semibold",children:De(Bi)})]}),g.jsxs("div",{className:"flex justify-between text-indigo-200",children:[g.jsx("span",{children:"Entradas Futuras:"})," ",g.jsxs("span",{children:["+ ",De(Yn.filter(A=>A.type==="receita").reduce((A,M)=>A+M.amount,0))]})]}),g.jsxs("div",{className:"flex justify-between text-red-300",children:[g.jsx("span",{children:"Saídas Futuras:"})," ",g.jsxs("span",{children:["- ",De(Yn.filter(A=>A.type==="despesa").reduce((A,M)=>A+M.amount,0))]})]})]})]}),g.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-4",children:[g.jsxs("h2",{className:"font-semibold text-slate-700 flex justify-between",children:[e," ",r," ",g.jsx(WT,{className:"w-4 h-4 text-slate-400"})]}),g.jsxs("div",{className:"space-y-3",children:[g.jsxs("div",{className:"flex justify-between p-3 bg-emerald-50 rounded-lg",children:[g.jsx("span",{className:"text-emerald-700 text-sm",children:"Entradas"}),g.jsx("span",{className:"text-emerald-700 font-bold",children:De(Pa)})]}),g.jsxs("div",{className:"flex justify-between p-3 bg-red-50 rounded-lg",children:[g.jsx("span",{className:"text-red-700 text-sm",children:"Saídas"}),g.jsx("span",{className:"text-red-700 font-bold",children:De(Gr)})]}),g.jsxs("div",{className:"pt-2 border-t border-slate-100 flex justify-between",children:[g.jsx("span",{className:"text-slate-600 font-medium",children:"Saldo"}),g.jsx("span",{className:`text-lg font-bold ${Hi>=0?"text-blue-600":"text-red-600"}`,children:De(Hi)})]})]})]}),g.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200",children:[g.jsxs("h3",{className:"font-semibold text-slate-700 mb-4 flex items-center gap-2",children:[g.jsx(Gm,{className:"w-5 h-5 text-blue-600"})," Novo Lançamento"]}),g.jsxs("form",{onSubmit:Wr,className:"space-y-4",children:[g.jsxs("div",{className:"grid grid-cols-2 gap-2 mb-2",children:[g.jsx("button",{type:"button",onClick:()=>{Oe("receita"),Z(!1)},className:`py-2 text-sm rounded-lg border ${E==="receita"?"bg-emerald-100 border-emerald-200 text-emerald-700 font-bold":"bg-white text-slate-500"}`,children:"Receita"}),g.jsx("button",{type:"button",onClick:()=>{Oe("despesa"),Z(!1)},className:`py-2 text-sm rounded-lg border ${E==="despesa"?"bg-red-100 border-red-200 text-red-700 font-bold":"bg-white text-slate-500"}`,children:"Despesa"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Descrição"}),g.jsx("input",{type:"text",value:w,onChange:A=>I(A.target.value),className:"w-full px-3 py-2 border rounded-lg"})]}),g.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Data"}),g.jsx("input",{type:"date",value:In,onChange:A=>$(A.target.value),className:"w-full px-3 py-2 border rounded-lg"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Valor"}),g.jsx("input",{type:"number",step:"0.01",value:x,onChange:A=>R(A.target.value),className:"w-full px-3 py-2 border rounded-lg"})]})]}),g.jsxs("div",{className:"bg-slate-50 p-3 rounded-lg border border-slate-100",children:[g.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[g.jsx("input",{type:"checkbox",checked:Q,onChange:A=>{Z(A.target.checked),ve(E==="receita"?12:2)},className:"rounded text-blue-600"}),g.jsx("label",{className:"text-sm font-medium text-slate-600 flex items-center gap-1",children:E==="despesa"?g.jsxs(g.Fragment,{children:[g.jsx(JT,{size:14})," Parcelado?"]}):g.jsxs(g.Fragment,{children:[g.jsx(nI,{size:14})," Repetir?"]})})]}),Q&&g.jsxs("div",{className:"animate-fade-in",children:[g.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:E==="despesa"?"Nº Parcelas":"Quantos Meses?"}),g.jsx("input",{type:"number",min:"2",max:"60",value:de,onChange:A=>ve(A.target.value),className:"w-full px-3 py-2 border rounded-lg text-sm"})]})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Categoria"}),g.jsx("select",{value:vt,onChange:A=>Gn(A.target.value),className:"w-full px-3 py-2 border rounded-lg",children:V[E].map(A=>g.jsx("option",{value:A,children:A},A))})]}),g.jsxs("button",{type:"submit",className:"w-full py-2 bg-blue-600 text-white rounded-lg font-medium flex justify-center gap-2",children:[g.jsx(rI,{className:"w-4 h-4"})," Adicionar"]})]})]})]}),g.jsxs("div",{className:"lg:col-span-8 bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col h-full min-h-[500px]",children:[g.jsxs("div",{className:"p-4 border-b border-slate-100 flex justify-between items-center",children:[g.jsxs("h3",{className:"font-semibold text-slate-700",children:["Extrato ",e]}),g.jsxs("span",{className:"text-xs text-slate-400",children:[Jn.length," itens"]})]}),g.jsx("div",{className:"flex-1 overflow-auto",children:Jn.length===0?g.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-slate-400 py-10",children:[g.jsx(ol,{className:"w-12 h-12 mb-2 opacity-20"}),g.jsx("p",{children:"Nenhum lançamento."})]}):g.jsxs("table",{className:"w-full text-left text-sm",children:[g.jsx("thead",{className:"bg-slate-50 text-slate-500 sticky top-0 z-10",children:g.jsxs("tr",{children:[g.jsx("th",{className:"p-4 w-32",children:"Data"}),g.jsx("th",{className:"p-4",children:"Descrição"}),g.jsx("th",{className:"p-4 hidden sm:table-cell",children:"Categoria"}),g.jsx("th",{className:"p-4 text-right",children:"Valor"}),g.jsx("th",{className:"p-4 w-10"})]})}),g.jsx("tbody",{className:"divide-y divide-slate-100",children:Jn.map(A=>g.jsxs("tr",{className:"hover:bg-slate-50 group",children:[g.jsx("td",{className:"p-4 text-slate-500",children:A.date}),g.jsxs("td",{className:"p-4 font-medium text-slate-700",children:[A.description,g.jsx("div",{className:"text-xs text-slate-400 sm:hidden mt-1",children:A.category})]}),g.jsx("td",{className:"p-4 text-slate-500 hidden sm:table-cell",children:g.jsx("span",{className:"px-2 py-1 rounded-full bg-slate-100 text-xs",children:A.category})}),g.jsxs("td",{className:`p-4 text-right font-bold ${A.type==="receita"?"text-emerald-600":"text-red-600"}`,children:[A.type==="despesa"?"-":"+"," ",De(A.amount)]}),g.jsx("td",{className:"p-4 text-right",children:g.jsx("button",{onClick:()=>qr(A.id),className:"p-1 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-colors",children:g.jsx(il,{className:"w-4 h-4"})})})]},A.id))})]})})]})]})]})})}function oh({title:t,value:e,icon:n,color:r}){const s=i=>new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(i);return g.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-start justify-between",children:[g.jsxs("div",{children:[g.jsx("p",{className:"text-slate-500 text-sm font-medium mb-1",children:t}),g.jsx("h3",{className:`text-2xl font-bold ${r}`,children:s(e)})]}),g.jsx("div",{className:`p-3 rounded-lg bg-slate-50 ${r}`,children:g.jsx(n,{className:"w-6 h-6"})})]})}Dv(document.getElementById("root")).render(g.jsx(ee.StrictMode,{children:g.jsx(fR,{})}));
