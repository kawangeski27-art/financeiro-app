(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var gy={exports:{}},gu={},yy={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zo=Symbol.for("react.element"),uE=Symbol.for("react.portal"),cE=Symbol.for("react.fragment"),hE=Symbol.for("react.strict_mode"),dE=Symbol.for("react.profiler"),fE=Symbol.for("react.provider"),pE=Symbol.for("react.context"),mE=Symbol.for("react.forward_ref"),gE=Symbol.for("react.suspense"),yE=Symbol.for("react.memo"),_E=Symbol.for("react.lazy"),Dp=Symbol.iterator;function vE(t){return t===null||typeof t!="object"?null:(t=Dp&&t[Dp]||t["@@iterator"],typeof t=="function"?t:null)}var _y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vy=Object.assign,wy={};function vi(t,e,n){this.props=t,this.context=e,this.refs=wy,this.updater=n||_y}vi.prototype.isReactComponent={};vi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};vi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ey(){}Ey.prototype=vi.prototype;function pd(t,e,n){this.props=t,this.context=e,this.refs=wy,this.updater=n||_y}var md=pd.prototype=new Ey;md.constructor=pd;vy(md,vi.prototype);md.isPureReactComponent=!0;var Vp=Array.isArray,Ty=Object.prototype.hasOwnProperty,gd={current:null},Iy={key:!0,ref:!0,__self:!0,__source:!0};function Sy(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Ty.call(e,r)&&!Iy.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Zo,type:t,key:i,ref:o,props:s,_owner:gd.current}}function wE(t,e){return{$$typeof:Zo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function yd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Zo}function EE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var bp=/\/+/g;function uc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?EE(""+t.key):e.toString(36)}function sl(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Zo:case uE:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+uc(o,0):r,Vp(s)?(n="",t!=null&&(n=t.replace(bp,"$&/")+"/"),sl(s,e,n,"",function(h){return h})):s!=null&&(yd(s)&&(s=wE(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(bp,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Vp(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+uc(i,l);o+=sl(i,e,n,u,s)}else if(u=vE(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+uc(i,l++),o+=sl(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ba(t,e,n){if(t==null)return t;var r=[],s=0;return sl(t,r,"","",function(i){return e.call(n,i,s++)}),r}function TE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ft={current:null},il={transition:null},IE={ReactCurrentDispatcher:ft,ReactCurrentBatchConfig:il,ReactCurrentOwner:gd};function Ay(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:ba,forEach:function(t,e,n){ba(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ba(t,function(){e++}),e},toArray:function(t){return ba(t,function(e){return e})||[]},only:function(t){if(!yd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=vi;re.Fragment=cE;re.Profiler=dE;re.PureComponent=pd;re.StrictMode=hE;re.Suspense=gE;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IE;re.act=Ay;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=vy({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=gd.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Ty.call(e,u)&&!Iy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Zo,type:t.type,key:s,ref:i,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:pE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:fE,_context:t},t.Consumer=t};re.createElement=Sy;re.createFactory=function(t){var e=Sy.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:mE,render:t}};re.isValidElement=yd;re.lazy=function(t){return{$$typeof:_E,_payload:{_status:-1,_result:t},_init:TE}};re.memo=function(t,e){return{$$typeof:yE,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=il.transition;il.transition={};try{t()}finally{il.transition=e}};re.unstable_act=Ay;re.useCallback=function(t,e){return ft.current.useCallback(t,e)};re.useContext=function(t){return ft.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return ft.current.useDeferredValue(t)};re.useEffect=function(t,e){return ft.current.useEffect(t,e)};re.useId=function(){return ft.current.useId()};re.useImperativeHandle=function(t,e,n){return ft.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return ft.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return ft.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return ft.current.useMemo(t,e)};re.useReducer=function(t,e,n){return ft.current.useReducer(t,e,n)};re.useRef=function(t){return ft.current.useRef(t)};re.useState=function(t){return ft.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return ft.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return ft.current.useTransition()};re.version="18.3.1";yy.exports=re;var te=yy.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var SE=te,AE=Symbol.for("react.element"),CE=Symbol.for("react.fragment"),xE=Object.prototype.hasOwnProperty,kE=SE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,RE={key:!0,ref:!0,__self:!0,__source:!0};function Cy(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)xE.call(e,r)&&!RE.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:AE,type:t,key:i,ref:o,props:s,_owner:kE.current}}gu.Fragment=CE;gu.jsx=Cy;gu.jsxs=Cy;gy.exports=gu;var g=gy.exports,xy={exports:{}},Pt={},ky={exports:{}},Ry={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Q){var Z=$.length;$.push(Q);e:for(;0<Z;){var de=Z-1>>>1,Te=$[de];if(0<s(Te,Q))$[de]=Q,$[Z]=Te,Z=de;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Q=$[0],Z=$.pop();if(Z!==Q){$[0]=Z;e:for(var de=0,Te=$.length,Dt=Te>>>1;de<Dt;){var mt=2*(de+1)-1,tn=$[mt],St=mt+1,Bt=$[St];if(0>s(tn,Z))St<Te&&0>s(Bt,tn)?($[de]=Bt,$[St]=Z,de=St):($[de]=tn,$[mt]=Z,de=mt);else if(St<Te&&0>s(Bt,Z))$[de]=Bt,$[St]=Z,de=St;else break e}}return Q}function s($,Q){var Z=$.sortIndex-Q.sortIndex;return Z!==0?Z:$.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,p=null,_=3,x=!1,D=!1,V=!1,M=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C($){for(var Q=n(h);Q!==null;){if(Q.callback===null)r(h);else if(Q.startTime<=$)r(h),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(h)}}function b($){if(V=!1,C($),!D)if(n(u)!==null)D=!0,wn(U);else{var Q=n(h);Q!==null&&Is(b,Q.startTime-$)}}function U($,Q){D=!1,V&&(V=!1,S(y),y=-1),x=!0;var Z=_;try{for(C(Q),p=n(u);p!==null&&(!(p.expirationTime>Q)||$&&!A());){var de=p.callback;if(typeof de=="function"){p.callback=null,_=p.priorityLevel;var Te=de(p.expirationTime<=Q);Q=t.unstable_now(),typeof Te=="function"?p.callback=Te:p===n(u)&&r(u),C(Q)}else r(u);p=n(u)}if(p!==null)var Dt=!0;else{var mt=n(h);mt!==null&&Is(b,mt.startTime-Q),Dt=!1}return Dt}finally{p=null,_=Z,x=!1}}var B=!1,v=null,y=-1,w=5,I=-1;function A(){return!(t.unstable_now()-I<w)}function R(){if(v!==null){var $=t.unstable_now();I=$;var Q=!0;try{Q=v(!0,$)}finally{Q?T():(B=!1,v=null)}}else B=!1}var T;if(typeof E=="function")T=function(){E(R)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,ct=Pe.port2;Pe.port1.onmessage=R,T=function(){ct.postMessage(null)}}else T=function(){M(R,0)};function wn($){v=$,B||(B=!0,T())}function Is($,Q){y=M(function(){$(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){D||x||(D=!0,wn(U))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return _},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(_){case 1:case 2:case 3:var Q=3;break;default:Q=_}var Z=_;_=Q;try{return $()}finally{_=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Q){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Z=_;_=$;try{return Q()}finally{_=Z}},t.unstable_scheduleCallback=function($,Q,Z){var de=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?de+Z:de):Z=de,$){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=Z+Te,$={id:f++,callback:Q,priorityLevel:$,startTime:Z,expirationTime:Te,sortIndex:-1},Z>de?($.sortIndex=Z,e(h,$),n(u)===null&&$===n(h)&&(V?(S(y),y=-1):V=!0,Is(b,Z-de))):($.sortIndex=Te,e(u,$),D||x||(D=!0,wn(U))),$},t.unstable_shouldYield=A,t.unstable_wrapCallback=function($){var Q=_;return function(){var Z=_;_=Q;try{return $.apply(this,arguments)}finally{_=Z}}}})(Ry);ky.exports=Ry;var PE=ky.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NE=te,Rt=PE;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Py=new Set,Co={};function ys(t,e){si(t,e),si(t+"Capture",e)}function si(t,e){for(Co[t]=e,t=0;t<e.length;t++)Py.add(e[t])}var Nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jc=Object.prototype.hasOwnProperty,DE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Op={},Mp={};function VE(t){return Jc.call(Mp,t)?!0:Jc.call(Op,t)?!1:DE.test(t)?Mp[t]=!0:(Op[t]=!0,!1)}function bE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function OE(t,e,n,r){if(e===null||typeof e>"u"||bE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){et[t]=new pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];et[e]=new pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){et[t]=new pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){et[t]=new pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){et[t]=new pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){et[t]=new pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){et[t]=new pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){et[t]=new pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){et[t]=new pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var _d=/[\-:]([a-z])/g;function vd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_d,vd);et[e]=new pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_d,vd);et[e]=new pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_d,vd);et[e]=new pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){et[t]=new pt(t,1,!1,t.toLowerCase(),null,!1,!1)});et.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){et[t]=new pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function wd(t,e,n,r){var s=et.hasOwnProperty(e)?et[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(OE(e,n,s,r)&&(n=null),r||s===null?VE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Fn=NE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oa=Symbol.for("react.element"),Ms=Symbol.for("react.portal"),Ls=Symbol.for("react.fragment"),Ed=Symbol.for("react.strict_mode"),Zc=Symbol.for("react.profiler"),Ny=Symbol.for("react.provider"),Dy=Symbol.for("react.context"),Td=Symbol.for("react.forward_ref"),eh=Symbol.for("react.suspense"),th=Symbol.for("react.suspense_list"),Id=Symbol.for("react.memo"),nr=Symbol.for("react.lazy"),Vy=Symbol.for("react.offscreen"),Lp=Symbol.iterator;function Gi(t){return t===null||typeof t!="object"?null:(t=Lp&&t[Lp]||t["@@iterator"],typeof t=="function"?t:null)}var ke=Object.assign,cc;function to(t){if(cc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);cc=e&&e[1]||""}return`
`+cc+t}var hc=!1;function dc(t,e){if(!t||hc)return"";hc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{hc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?to(t):""}function ME(t){switch(t.tag){case 5:return to(t.type);case 16:return to("Lazy");case 13:return to("Suspense");case 19:return to("SuspenseList");case 0:case 2:case 15:return t=dc(t.type,!1),t;case 11:return t=dc(t.type.render,!1),t;case 1:return t=dc(t.type,!0),t;default:return""}}function nh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ls:return"Fragment";case Ms:return"Portal";case Zc:return"Profiler";case Ed:return"StrictMode";case eh:return"Suspense";case th:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Dy:return(t.displayName||"Context")+".Consumer";case Ny:return(t._context.displayName||"Context")+".Provider";case Td:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Id:return e=t.displayName||null,e!==null?e:nh(t.type)||"Memo";case nr:e=t._payload,t=t._init;try{return nh(t(e))}catch{}}return null}function LE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nh(e);case 8:return e===Ed?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function by(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function jE(t){var e=by(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ma(t){t._valueTracker||(t._valueTracker=jE(t))}function Oy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=by(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Cl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function rh(t,e){var n=e.checked;return ke({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function jp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function My(t,e){e=e.checked,e!=null&&wd(t,"checked",e,!1)}function sh(t,e){My(t,e);var n=Ar(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ih(t,e.type,n):e.hasOwnProperty("defaultValue")&&ih(t,e.type,Ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ih(t,e,n){(e!=="number"||Cl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var no=Array.isArray;function Ks(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ar(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function oh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return ke({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Up(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(no(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ar(n)}}function Ly(t,e){var n=Ar(e.value),r=Ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function zp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function jy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ah(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?jy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var La,Fy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(La=La||document.createElement("div"),La.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=La.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function xo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var uo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},FE=["Webkit","ms","Moz","O"];Object.keys(uo).forEach(function(t){FE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),uo[e]=uo[t]})});function Uy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||uo.hasOwnProperty(t)&&uo[t]?(""+e).trim():e+"px"}function zy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Uy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var UE=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lh(t,e){if(e){if(UE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function uh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ch=null;function Sd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hh=null,Qs=null,Xs=null;function Bp(t){if(t=na(t)){if(typeof hh!="function")throw Error(j(280));var e=t.stateNode;e&&(e=Eu(e),hh(t.stateNode,t.type,e))}}function By(t){Qs?Xs?Xs.push(t):Xs=[t]:Qs=t}function $y(){if(Qs){var t=Qs,e=Xs;if(Xs=Qs=null,Bp(t),e)for(t=0;t<e.length;t++)Bp(e[t])}}function Hy(t,e){return t(e)}function Wy(){}var fc=!1;function qy(t,e,n){if(fc)return t(e,n);fc=!0;try{return Hy(t,e,n)}finally{fc=!1,(Qs!==null||Xs!==null)&&(Wy(),$y())}}function ko(t,e){var n=t.stateNode;if(n===null)return null;var r=Eu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var dh=!1;if(Nn)try{var Ki={};Object.defineProperty(Ki,"passive",{get:function(){dh=!0}}),window.addEventListener("test",Ki,Ki),window.removeEventListener("test",Ki,Ki)}catch{dh=!1}function zE(t,e,n,r,s,i,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var co=!1,xl=null,kl=!1,fh=null,BE={onError:function(t){co=!0,xl=t}};function $E(t,e,n,r,s,i,o,l,u){co=!1,xl=null,zE.apply(BE,arguments)}function HE(t,e,n,r,s,i,o,l,u){if($E.apply(this,arguments),co){if(co){var h=xl;co=!1,xl=null}else throw Error(j(198));kl||(kl=!0,fh=h)}}function _s(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Gy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function $p(t){if(_s(t)!==t)throw Error(j(188))}function WE(t){var e=t.alternate;if(!e){if(e=_s(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return $p(s),t;if(i===r)return $p(s),e;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function Ky(t){return t=WE(t),t!==null?Qy(t):null}function Qy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Qy(t);if(e!==null)return e;t=t.sibling}return null}var Xy=Rt.unstable_scheduleCallback,Hp=Rt.unstable_cancelCallback,qE=Rt.unstable_shouldYield,GE=Rt.unstable_requestPaint,Oe=Rt.unstable_now,KE=Rt.unstable_getCurrentPriorityLevel,Ad=Rt.unstable_ImmediatePriority,Yy=Rt.unstable_UserBlockingPriority,Rl=Rt.unstable_NormalPriority,QE=Rt.unstable_LowPriority,Jy=Rt.unstable_IdlePriority,yu=null,cn=null;function XE(t){if(cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot(yu,t,void 0,(t.current.flags&128)===128)}catch{}}var Yt=Math.clz32?Math.clz32:ZE,YE=Math.log,JE=Math.LN2;function ZE(t){return t>>>=0,t===0?32:31-(YE(t)/JE|0)|0}var ja=64,Fa=4194304;function ro(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Pl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=ro(l):(i&=o,i!==0&&(r=ro(i)))}else o=n&~s,o!==0?r=ro(o):i!==0&&(r=ro(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Yt(e),s=1<<n,r|=t[n],e&=~s;return r}function e1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function t1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Yt(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=e1(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function ph(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Zy(){var t=ja;return ja<<=1,!(ja&4194240)&&(ja=64),t}function pc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ea(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yt(e),t[e]=n}function n1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Yt(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Cd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Yt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var fe=0;function e_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var t_,xd,n_,r_,s_,mh=!1,Ua=[],dr=null,fr=null,pr=null,Ro=new Map,Po=new Map,sr=[],r1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wp(t,e){switch(t){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":pr=null;break;case"pointerover":case"pointerout":Ro.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(e.pointerId)}}function Qi(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=na(e),e!==null&&xd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function s1(t,e,n,r,s){switch(e){case"focusin":return dr=Qi(dr,t,e,n,r,s),!0;case"dragenter":return fr=Qi(fr,t,e,n,r,s),!0;case"mouseover":return pr=Qi(pr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Ro.set(i,Qi(Ro.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Po.set(i,Qi(Po.get(i)||null,t,e,n,r,s)),!0}return!1}function i_(t){var e=Jr(t.target);if(e!==null){var n=_s(e);if(n!==null){if(e=n.tag,e===13){if(e=Gy(n),e!==null){t.blockedOn=e,s_(t.priority,function(){n_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ol(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ch=r,n.target.dispatchEvent(r),ch=null}else return e=na(n),e!==null&&xd(e),t.blockedOn=n,!1;e.shift()}return!0}function qp(t,e,n){ol(t)&&n.delete(e)}function i1(){mh=!1,dr!==null&&ol(dr)&&(dr=null),fr!==null&&ol(fr)&&(fr=null),pr!==null&&ol(pr)&&(pr=null),Ro.forEach(qp),Po.forEach(qp)}function Xi(t,e){t.blockedOn===e&&(t.blockedOn=null,mh||(mh=!0,Rt.unstable_scheduleCallback(Rt.unstable_NormalPriority,i1)))}function No(t){function e(s){return Xi(s,t)}if(0<Ua.length){Xi(Ua[0],t);for(var n=1;n<Ua.length;n++){var r=Ua[n];r.blockedOn===t&&(r.blockedOn=null)}}for(dr!==null&&Xi(dr,t),fr!==null&&Xi(fr,t),pr!==null&&Xi(pr,t),Ro.forEach(e),Po.forEach(e),n=0;n<sr.length;n++)r=sr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<sr.length&&(n=sr[0],n.blockedOn===null);)i_(n),n.blockedOn===null&&sr.shift()}var Ys=Fn.ReactCurrentBatchConfig,Nl=!0;function o1(t,e,n,r){var s=fe,i=Ys.transition;Ys.transition=null;try{fe=1,kd(t,e,n,r)}finally{fe=s,Ys.transition=i}}function a1(t,e,n,r){var s=fe,i=Ys.transition;Ys.transition=null;try{fe=4,kd(t,e,n,r)}finally{fe=s,Ys.transition=i}}function kd(t,e,n,r){if(Nl){var s=gh(t,e,n,r);if(s===null)Sc(t,e,r,Dl,n),Wp(t,r);else if(s1(s,t,e,n,r))r.stopPropagation();else if(Wp(t,r),e&4&&-1<r1.indexOf(t)){for(;s!==null;){var i=na(s);if(i!==null&&t_(i),i=gh(t,e,n,r),i===null&&Sc(t,e,r,Dl,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Sc(t,e,r,null,n)}}var Dl=null;function gh(t,e,n,r){if(Dl=null,t=Sd(r),t=Jr(t),t!==null)if(e=_s(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Gy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Dl=t,null}function o_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(KE()){case Ad:return 1;case Yy:return 4;case Rl:case QE:return 16;case Jy:return 536870912;default:return 16}default:return 16}}var ur=null,Rd=null,al=null;function a_(){if(al)return al;var t,e=Rd,n=e.length,r,s="value"in ur?ur.value:ur.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return al=s.slice(t,1<r?1-r:void 0)}function ll(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function za(){return!0}function Gp(){return!1}function Nt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?za:Gp,this.isPropagationStopped=Gp,this}return ke(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=za)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=za)},persist:function(){},isPersistent:za}),e}var wi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pd=Nt(wi),ta=ke({},wi,{view:0,detail:0}),l1=Nt(ta),mc,gc,Yi,_u=ke({},ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yi&&(Yi&&t.type==="mousemove"?(mc=t.screenX-Yi.screenX,gc=t.screenY-Yi.screenY):gc=mc=0,Yi=t),mc)},movementY:function(t){return"movementY"in t?t.movementY:gc}}),Kp=Nt(_u),u1=ke({},_u,{dataTransfer:0}),c1=Nt(u1),h1=ke({},ta,{relatedTarget:0}),yc=Nt(h1),d1=ke({},wi,{animationName:0,elapsedTime:0,pseudoElement:0}),f1=Nt(d1),p1=ke({},wi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),m1=Nt(p1),g1=ke({},wi,{data:0}),Qp=Nt(g1),y1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},v1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function w1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=v1[t])?!!e[t]:!1}function Nd(){return w1}var E1=ke({},ta,{key:function(t){if(t.key){var e=y1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ll(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nd,charCode:function(t){return t.type==="keypress"?ll(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ll(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),T1=Nt(E1),I1=ke({},_u,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xp=Nt(I1),S1=ke({},ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nd}),A1=Nt(S1),C1=ke({},wi,{propertyName:0,elapsedTime:0,pseudoElement:0}),x1=Nt(C1),k1=ke({},_u,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),R1=Nt(k1),P1=[9,13,27,32],Dd=Nn&&"CompositionEvent"in window,ho=null;Nn&&"documentMode"in document&&(ho=document.documentMode);var N1=Nn&&"TextEvent"in window&&!ho,l_=Nn&&(!Dd||ho&&8<ho&&11>=ho),Yp=" ",Jp=!1;function u_(t,e){switch(t){case"keyup":return P1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function c_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var js=!1;function D1(t,e){switch(t){case"compositionend":return c_(e);case"keypress":return e.which!==32?null:(Jp=!0,Yp);case"textInput":return t=e.data,t===Yp&&Jp?null:t;default:return null}}function V1(t,e){if(js)return t==="compositionend"||!Dd&&u_(t,e)?(t=a_(),al=Rd=ur=null,js=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return l_&&e.locale!=="ko"?null:e.data;default:return null}}var b1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!b1[t.type]:e==="textarea"}function h_(t,e,n,r){By(r),e=Vl(e,"onChange"),0<e.length&&(n=new Pd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var fo=null,Do=null;function O1(t){T_(t,0)}function vu(t){var e=zs(t);if(Oy(e))return t}function M1(t,e){if(t==="change")return e}var d_=!1;if(Nn){var _c;if(Nn){var vc="oninput"in document;if(!vc){var em=document.createElement("div");em.setAttribute("oninput","return;"),vc=typeof em.oninput=="function"}_c=vc}else _c=!1;d_=_c&&(!document.documentMode||9<document.documentMode)}function tm(){fo&&(fo.detachEvent("onpropertychange",f_),Do=fo=null)}function f_(t){if(t.propertyName==="value"&&vu(Do)){var e=[];h_(e,Do,t,Sd(t)),qy(O1,e)}}function L1(t,e,n){t==="focusin"?(tm(),fo=e,Do=n,fo.attachEvent("onpropertychange",f_)):t==="focusout"&&tm()}function j1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vu(Do)}function F1(t,e){if(t==="click")return vu(e)}function U1(t,e){if(t==="input"||t==="change")return vu(e)}function z1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var en=typeof Object.is=="function"?Object.is:z1;function Vo(t,e){if(en(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Jc.call(e,s)||!en(t[s],e[s]))return!1}return!0}function nm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rm(t,e){var n=nm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nm(n)}}function p_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?p_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function m_(){for(var t=window,e=Cl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Cl(t.document)}return e}function Vd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function B1(t){var e=m_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&p_(n.ownerDocument.documentElement,n)){if(r!==null&&Vd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=rm(n,i);var o=rm(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $1=Nn&&"documentMode"in document&&11>=document.documentMode,Fs=null,yh=null,po=null,_h=!1;function sm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_h||Fs==null||Fs!==Cl(r)||(r=Fs,"selectionStart"in r&&Vd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),po&&Vo(po,r)||(po=r,r=Vl(yh,"onSelect"),0<r.length&&(e=new Pd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Fs)))}function Ba(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Us={animationend:Ba("Animation","AnimationEnd"),animationiteration:Ba("Animation","AnimationIteration"),animationstart:Ba("Animation","AnimationStart"),transitionend:Ba("Transition","TransitionEnd")},wc={},g_={};Nn&&(g_=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function wu(t){if(wc[t])return wc[t];if(!Us[t])return t;var e=Us[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in g_)return wc[t]=e[n];return t}var y_=wu("animationend"),__=wu("animationiteration"),v_=wu("animationstart"),w_=wu("transitionend"),E_=new Map,im="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vr(t,e){E_.set(t,e),ys(e,[t])}for(var Ec=0;Ec<im.length;Ec++){var Tc=im[Ec],H1=Tc.toLowerCase(),W1=Tc[0].toUpperCase()+Tc.slice(1);Vr(H1,"on"+W1)}Vr(y_,"onAnimationEnd");Vr(__,"onAnimationIteration");Vr(v_,"onAnimationStart");Vr("dblclick","onDoubleClick");Vr("focusin","onFocus");Vr("focusout","onBlur");Vr(w_,"onTransitionEnd");si("onMouseEnter",["mouseout","mouseover"]);si("onMouseLeave",["mouseout","mouseover"]);si("onPointerEnter",["pointerout","pointerover"]);si("onPointerLeave",["pointerout","pointerover"]);ys("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ys("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ys("onBeforeInput",["compositionend","keypress","textInput","paste"]);ys("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ys("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ys("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var so="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),q1=new Set("cancel close invalid load scroll toggle".split(" ").concat(so));function om(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,HE(r,e,void 0,t),t.currentTarget=null}function T_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;om(s,l,h),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;om(s,l,h),i=u}}}if(kl)throw t=fh,kl=!1,fh=null,t}function ve(t,e){var n=e[Ih];n===void 0&&(n=e[Ih]=new Set);var r=t+"__bubble";n.has(r)||(I_(e,t,2,!1),n.add(r))}function Ic(t,e,n){var r=0;e&&(r|=4),I_(n,t,r,e)}var $a="_reactListening"+Math.random().toString(36).slice(2);function bo(t){if(!t[$a]){t[$a]=!0,Py.forEach(function(n){n!=="selectionchange"&&(q1.has(n)||Ic(n,!1,t),Ic(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[$a]||(e[$a]=!0,Ic("selectionchange",!1,e))}}function I_(t,e,n,r){switch(o_(e)){case 1:var s=o1;break;case 4:s=a1;break;default:s=kd}n=s.bind(null,e,n,t),s=void 0,!dh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Sc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Jr(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}qy(function(){var h=i,f=Sd(n),p=[];e:{var _=E_.get(t);if(_!==void 0){var x=Pd,D=t;switch(t){case"keypress":if(ll(n)===0)break e;case"keydown":case"keyup":x=T1;break;case"focusin":D="focus",x=yc;break;case"focusout":D="blur",x=yc;break;case"beforeblur":case"afterblur":x=yc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Kp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=c1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=A1;break;case y_:case __:case v_:x=f1;break;case w_:x=x1;break;case"scroll":x=l1;break;case"wheel":x=R1;break;case"copy":case"cut":case"paste":x=m1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Xp}var V=(e&4)!==0,M=!V&&t==="scroll",S=V?_!==null?_+"Capture":null:_;V=[];for(var E=h,C;E!==null;){C=E;var b=C.stateNode;if(C.tag===5&&b!==null&&(C=b,S!==null&&(b=ko(E,S),b!=null&&V.push(Oo(E,b,C)))),M)break;E=E.return}0<V.length&&(_=new x(_,D,null,n,f),p.push({event:_,listeners:V}))}}if(!(e&7)){e:{if(_=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",_&&n!==ch&&(D=n.relatedTarget||n.fromElement)&&(Jr(D)||D[Dn]))break e;if((x||_)&&(_=f.window===f?f:(_=f.ownerDocument)?_.defaultView||_.parentWindow:window,x?(D=n.relatedTarget||n.toElement,x=h,D=D?Jr(D):null,D!==null&&(M=_s(D),D!==M||D.tag!==5&&D.tag!==6)&&(D=null)):(x=null,D=h),x!==D)){if(V=Kp,b="onMouseLeave",S="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(V=Xp,b="onPointerLeave",S="onPointerEnter",E="pointer"),M=x==null?_:zs(x),C=D==null?_:zs(D),_=new V(b,E+"leave",x,n,f),_.target=M,_.relatedTarget=C,b=null,Jr(f)===h&&(V=new V(S,E+"enter",D,n,f),V.target=C,V.relatedTarget=M,b=V),M=b,x&&D)t:{for(V=x,S=D,E=0,C=V;C;C=Ns(C))E++;for(C=0,b=S;b;b=Ns(b))C++;for(;0<E-C;)V=Ns(V),E--;for(;0<C-E;)S=Ns(S),C--;for(;E--;){if(V===S||S!==null&&V===S.alternate)break t;V=Ns(V),S=Ns(S)}V=null}else V=null;x!==null&&am(p,_,x,V,!1),D!==null&&M!==null&&am(p,M,D,V,!0)}}e:{if(_=h?zs(h):window,x=_.nodeName&&_.nodeName.toLowerCase(),x==="select"||x==="input"&&_.type==="file")var U=M1;else if(Zp(_))if(d_)U=U1;else{U=j1;var B=L1}else(x=_.nodeName)&&x.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(U=F1);if(U&&(U=U(t,h))){h_(p,U,n,f);break e}B&&B(t,_,h),t==="focusout"&&(B=_._wrapperState)&&B.controlled&&_.type==="number"&&ih(_,"number",_.value)}switch(B=h?zs(h):window,t){case"focusin":(Zp(B)||B.contentEditable==="true")&&(Fs=B,yh=h,po=null);break;case"focusout":po=yh=Fs=null;break;case"mousedown":_h=!0;break;case"contextmenu":case"mouseup":case"dragend":_h=!1,sm(p,n,f);break;case"selectionchange":if($1)break;case"keydown":case"keyup":sm(p,n,f)}var v;if(Dd)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else js?u_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(l_&&n.locale!=="ko"&&(js||y!=="onCompositionStart"?y==="onCompositionEnd"&&js&&(v=a_()):(ur=f,Rd="value"in ur?ur.value:ur.textContent,js=!0)),B=Vl(h,y),0<B.length&&(y=new Qp(y,t,null,n,f),p.push({event:y,listeners:B}),v?y.data=v:(v=c_(n),v!==null&&(y.data=v)))),(v=N1?D1(t,n):V1(t,n))&&(h=Vl(h,"onBeforeInput"),0<h.length&&(f=new Qp("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:h}),f.data=v))}T_(p,e)})}function Oo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Vl(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=ko(t,n),i!=null&&r.unshift(Oo(t,i,s)),i=ko(t,e),i!=null&&r.push(Oo(t,i,s))),t=t.return}return r}function Ns(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function am(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,s?(u=ko(n,i),u!=null&&o.unshift(Oo(n,u,l))):s||(u=ko(n,i),u!=null&&o.push(Oo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var G1=/\r\n?/g,K1=/\u0000|\uFFFD/g;function lm(t){return(typeof t=="string"?t:""+t).replace(G1,`
`).replace(K1,"")}function Ha(t,e,n){if(e=lm(e),lm(t)!==e&&n)throw Error(j(425))}function bl(){}var vh=null,wh=null;function Eh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Th=typeof setTimeout=="function"?setTimeout:void 0,Q1=typeof clearTimeout=="function"?clearTimeout:void 0,um=typeof Promise=="function"?Promise:void 0,X1=typeof queueMicrotask=="function"?queueMicrotask:typeof um<"u"?function(t){return um.resolve(null).then(t).catch(Y1)}:Th;function Y1(t){setTimeout(function(){throw t})}function Ac(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),No(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);No(e)}function mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function cm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ei=Math.random().toString(36).slice(2),un="__reactFiber$"+Ei,Mo="__reactProps$"+Ei,Dn="__reactContainer$"+Ei,Ih="__reactEvents$"+Ei,J1="__reactListeners$"+Ei,Z1="__reactHandles$"+Ei;function Jr(t){var e=t[un];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Dn]||n[un]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=cm(t);t!==null;){if(n=t[un])return n;t=cm(t)}return e}t=n,n=t.parentNode}return null}function na(t){return t=t[un]||t[Dn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function zs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function Eu(t){return t[Mo]||null}var Sh=[],Bs=-1;function br(t){return{current:t}}function Ee(t){0>Bs||(t.current=Sh[Bs],Sh[Bs]=null,Bs--)}function ge(t,e){Bs++,Sh[Bs]=t.current,t.current=e}var Cr={},lt=br(Cr),Et=br(!1),as=Cr;function ii(t,e){var n=t.type.contextTypes;if(!n)return Cr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Tt(t){return t=t.childContextTypes,t!=null}function Ol(){Ee(Et),Ee(lt)}function hm(t,e,n){if(lt.current!==Cr)throw Error(j(168));ge(lt,e),ge(Et,n)}function S_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(j(108,LE(t)||"Unknown",s));return ke({},n,r)}function Ml(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Cr,as=lt.current,ge(lt,t),ge(Et,Et.current),!0}function dm(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=S_(t,e,as),r.__reactInternalMemoizedMergedChildContext=t,Ee(Et),Ee(lt),ge(lt,t)):Ee(Et),ge(Et,n)}var In=null,Tu=!1,Cc=!1;function A_(t){In===null?In=[t]:In.push(t)}function eT(t){Tu=!0,A_(t)}function Or(){if(!Cc&&In!==null){Cc=!0;var t=0,e=fe;try{var n=In;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}In=null,Tu=!1}catch(s){throw In!==null&&(In=In.slice(t+1)),Xy(Ad,Or),s}finally{fe=e,Cc=!1}}return null}var $s=[],Hs=0,Ll=null,jl=0,Vt=[],bt=0,ls=null,An=1,Cn="";function Qr(t,e){$s[Hs++]=jl,$s[Hs++]=Ll,Ll=t,jl=e}function C_(t,e,n){Vt[bt++]=An,Vt[bt++]=Cn,Vt[bt++]=ls,ls=t;var r=An;t=Cn;var s=32-Yt(r)-1;r&=~(1<<s),n+=1;var i=32-Yt(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,An=1<<32-Yt(e)+s|n<<s|r,Cn=i+t}else An=1<<i|n<<s|r,Cn=t}function bd(t){t.return!==null&&(Qr(t,1),C_(t,1,0))}function Od(t){for(;t===Ll;)Ll=$s[--Hs],$s[Hs]=null,jl=$s[--Hs],$s[Hs]=null;for(;t===ls;)ls=Vt[--bt],Vt[bt]=null,Cn=Vt[--bt],Vt[bt]=null,An=Vt[--bt],Vt[bt]=null}var kt=null,xt=null,Ie=!1,Gt=null;function x_(t,e){var n=Lt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function fm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,kt=t,xt=mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,kt=t,xt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ls!==null?{id:An,overflow:Cn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Lt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,kt=t,xt=null,!0):!1;default:return!1}}function Ah(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ch(t){if(Ie){var e=xt;if(e){var n=e;if(!fm(t,e)){if(Ah(t))throw Error(j(418));e=mr(n.nextSibling);var r=kt;e&&fm(t,e)?x_(r,n):(t.flags=t.flags&-4097|2,Ie=!1,kt=t)}}else{if(Ah(t))throw Error(j(418));t.flags=t.flags&-4097|2,Ie=!1,kt=t}}}function pm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kt=t}function Wa(t){if(t!==kt)return!1;if(!Ie)return pm(t),Ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Eh(t.type,t.memoizedProps)),e&&(e=xt)){if(Ah(t))throw k_(),Error(j(418));for(;e;)x_(t,e),e=mr(e.nextSibling)}if(pm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xt=mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xt=null}}else xt=kt?mr(t.stateNode.nextSibling):null;return!0}function k_(){for(var t=xt;t;)t=mr(t.nextSibling)}function oi(){xt=kt=null,Ie=!1}function Md(t){Gt===null?Gt=[t]:Gt.push(t)}var tT=Fn.ReactCurrentBatchConfig;function Ji(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function qa(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function mm(t){var e=t._init;return e(t._payload)}function R_(t){function e(S,E){if(t){var C=S.deletions;C===null?(S.deletions=[E],S.flags|=16):C.push(E)}}function n(S,E){if(!t)return null;for(;E!==null;)e(S,E),E=E.sibling;return null}function r(S,E){for(S=new Map;E!==null;)E.key!==null?S.set(E.key,E):S.set(E.index,E),E=E.sibling;return S}function s(S,E){return S=vr(S,E),S.index=0,S.sibling=null,S}function i(S,E,C){return S.index=C,t?(C=S.alternate,C!==null?(C=C.index,C<E?(S.flags|=2,E):C):(S.flags|=2,E)):(S.flags|=1048576,E)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,E,C,b){return E===null||E.tag!==6?(E=Vc(C,S.mode,b),E.return=S,E):(E=s(E,C),E.return=S,E)}function u(S,E,C,b){var U=C.type;return U===Ls?f(S,E,C.props.children,b,C.key):E!==null&&(E.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===nr&&mm(U)===E.type)?(b=s(E,C.props),b.ref=Ji(S,E,C),b.return=S,b):(b=ml(C.type,C.key,C.props,null,S.mode,b),b.ref=Ji(S,E,C),b.return=S,b)}function h(S,E,C,b){return E===null||E.tag!==4||E.stateNode.containerInfo!==C.containerInfo||E.stateNode.implementation!==C.implementation?(E=bc(C,S.mode,b),E.return=S,E):(E=s(E,C.children||[]),E.return=S,E)}function f(S,E,C,b,U){return E===null||E.tag!==7?(E=ss(C,S.mode,b,U),E.return=S,E):(E=s(E,C),E.return=S,E)}function p(S,E,C){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Vc(""+E,S.mode,C),E.return=S,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Oa:return C=ml(E.type,E.key,E.props,null,S.mode,C),C.ref=Ji(S,null,E),C.return=S,C;case Ms:return E=bc(E,S.mode,C),E.return=S,E;case nr:var b=E._init;return p(S,b(E._payload),C)}if(no(E)||Gi(E))return E=ss(E,S.mode,C,null),E.return=S,E;qa(S,E)}return null}function _(S,E,C,b){var U=E!==null?E.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return U!==null?null:l(S,E,""+C,b);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Oa:return C.key===U?u(S,E,C,b):null;case Ms:return C.key===U?h(S,E,C,b):null;case nr:return U=C._init,_(S,E,U(C._payload),b)}if(no(C)||Gi(C))return U!==null?null:f(S,E,C,b,null);qa(S,C)}return null}function x(S,E,C,b,U){if(typeof b=="string"&&b!==""||typeof b=="number")return S=S.get(C)||null,l(E,S,""+b,U);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Oa:return S=S.get(b.key===null?C:b.key)||null,u(E,S,b,U);case Ms:return S=S.get(b.key===null?C:b.key)||null,h(E,S,b,U);case nr:var B=b._init;return x(S,E,C,B(b._payload),U)}if(no(b)||Gi(b))return S=S.get(C)||null,f(E,S,b,U,null);qa(E,b)}return null}function D(S,E,C,b){for(var U=null,B=null,v=E,y=E=0,w=null;v!==null&&y<C.length;y++){v.index>y?(w=v,v=null):w=v.sibling;var I=_(S,v,C[y],b);if(I===null){v===null&&(v=w);break}t&&v&&I.alternate===null&&e(S,v),E=i(I,E,y),B===null?U=I:B.sibling=I,B=I,v=w}if(y===C.length)return n(S,v),Ie&&Qr(S,y),U;if(v===null){for(;y<C.length;y++)v=p(S,C[y],b),v!==null&&(E=i(v,E,y),B===null?U=v:B.sibling=v,B=v);return Ie&&Qr(S,y),U}for(v=r(S,v);y<C.length;y++)w=x(v,S,y,C[y],b),w!==null&&(t&&w.alternate!==null&&v.delete(w.key===null?y:w.key),E=i(w,E,y),B===null?U=w:B.sibling=w,B=w);return t&&v.forEach(function(A){return e(S,A)}),Ie&&Qr(S,y),U}function V(S,E,C,b){var U=Gi(C);if(typeof U!="function")throw Error(j(150));if(C=U.call(C),C==null)throw Error(j(151));for(var B=U=null,v=E,y=E=0,w=null,I=C.next();v!==null&&!I.done;y++,I=C.next()){v.index>y?(w=v,v=null):w=v.sibling;var A=_(S,v,I.value,b);if(A===null){v===null&&(v=w);break}t&&v&&A.alternate===null&&e(S,v),E=i(A,E,y),B===null?U=A:B.sibling=A,B=A,v=w}if(I.done)return n(S,v),Ie&&Qr(S,y),U;if(v===null){for(;!I.done;y++,I=C.next())I=p(S,I.value,b),I!==null&&(E=i(I,E,y),B===null?U=I:B.sibling=I,B=I);return Ie&&Qr(S,y),U}for(v=r(S,v);!I.done;y++,I=C.next())I=x(v,S,y,I.value,b),I!==null&&(t&&I.alternate!==null&&v.delete(I.key===null?y:I.key),E=i(I,E,y),B===null?U=I:B.sibling=I,B=I);return t&&v.forEach(function(R){return e(S,R)}),Ie&&Qr(S,y),U}function M(S,E,C,b){if(typeof C=="object"&&C!==null&&C.type===Ls&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case Oa:e:{for(var U=C.key,B=E;B!==null;){if(B.key===U){if(U=C.type,U===Ls){if(B.tag===7){n(S,B.sibling),E=s(B,C.props.children),E.return=S,S=E;break e}}else if(B.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===nr&&mm(U)===B.type){n(S,B.sibling),E=s(B,C.props),E.ref=Ji(S,B,C),E.return=S,S=E;break e}n(S,B);break}else e(S,B);B=B.sibling}C.type===Ls?(E=ss(C.props.children,S.mode,b,C.key),E.return=S,S=E):(b=ml(C.type,C.key,C.props,null,S.mode,b),b.ref=Ji(S,E,C),b.return=S,S=b)}return o(S);case Ms:e:{for(B=C.key;E!==null;){if(E.key===B)if(E.tag===4&&E.stateNode.containerInfo===C.containerInfo&&E.stateNode.implementation===C.implementation){n(S,E.sibling),E=s(E,C.children||[]),E.return=S,S=E;break e}else{n(S,E);break}else e(S,E);E=E.sibling}E=bc(C,S.mode,b),E.return=S,S=E}return o(S);case nr:return B=C._init,M(S,E,B(C._payload),b)}if(no(C))return D(S,E,C,b);if(Gi(C))return V(S,E,C,b);qa(S,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,E!==null&&E.tag===6?(n(S,E.sibling),E=s(E,C),E.return=S,S=E):(n(S,E),E=Vc(C,S.mode,b),E.return=S,S=E),o(S)):n(S,E)}return M}var ai=R_(!0),P_=R_(!1),Fl=br(null),Ul=null,Ws=null,Ld=null;function jd(){Ld=Ws=Ul=null}function Fd(t){var e=Fl.current;Ee(Fl),t._currentValue=e}function xh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Js(t,e){Ul=t,Ld=Ws=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(wt=!0),t.firstContext=null)}function Ft(t){var e=t._currentValue;if(Ld!==t)if(t={context:t,memoizedValue:e,next:null},Ws===null){if(Ul===null)throw Error(j(308));Ws=t,Ul.dependencies={lanes:0,firstContext:t}}else Ws=Ws.next=t;return e}var Zr=null;function Ud(t){Zr===null?Zr=[t]:Zr.push(t)}function N_(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Ud(e)):(n.next=s.next,s.next=n),e.interleaved=n,Vn(t,r)}function Vn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var rr=!1;function zd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function D_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Rn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function gr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Vn(t,n)}return s=r.interleaved,s===null?(e.next=e,Ud(r)):(e.next=s.next,s.next=e),r.interleaved=e,Vn(t,n)}function ul(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cd(t,n)}}function gm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function zl(t,e,n,r){var s=t.updateQueue;rr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?i=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(i!==null){var p=s.baseState;o=0,f=h=u=null,l=i;do{var _=l.lane,x=l.eventTime;if((r&_)===_){f!==null&&(f=f.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var D=t,V=l;switch(_=e,x=n,V.tag){case 1:if(D=V.payload,typeof D=="function"){p=D.call(x,p,_);break e}p=D;break e;case 3:D.flags=D.flags&-65537|128;case 0:if(D=V.payload,_=typeof D=="function"?D.call(x,p,_):D,_==null)break e;p=ke({},p,_);break e;case 2:rr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,_=s.effects,_===null?s.effects=[l]:_.push(l))}else x={eventTime:x,lane:_,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=x,u=p):f=f.next=x,o|=_;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;_=l,l=_.next,_.next=null,s.lastBaseUpdate=_,s.shared.pending=null}}while(!0);if(f===null&&(u=p),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);cs|=o,t.lanes=o,t.memoizedState=p}}function ym(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(j(191,s));s.call(r)}}}var ra={},hn=br(ra),Lo=br(ra),jo=br(ra);function es(t){if(t===ra)throw Error(j(174));return t}function Bd(t,e){switch(ge(jo,e),ge(Lo,t),ge(hn,ra),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ah(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ah(e,t)}Ee(hn),ge(hn,e)}function li(){Ee(hn),Ee(Lo),Ee(jo)}function V_(t){es(jo.current);var e=es(hn.current),n=ah(e,t.type);e!==n&&(ge(Lo,t),ge(hn,n))}function $d(t){Lo.current===t&&(Ee(hn),Ee(Lo))}var Ae=br(0);function Bl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var xc=[];function Hd(){for(var t=0;t<xc.length;t++)xc[t]._workInProgressVersionPrimary=null;xc.length=0}var cl=Fn.ReactCurrentDispatcher,kc=Fn.ReactCurrentBatchConfig,us=0,xe=null,Ue=null,Ge=null,$l=!1,mo=!1,Fo=0,nT=0;function nt(){throw Error(j(321))}function Wd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!en(t[n],e[n]))return!1;return!0}function qd(t,e,n,r,s,i){if(us=i,xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,cl.current=t===null||t.memoizedState===null?oT:aT,t=n(r,s),mo){i=0;do{if(mo=!1,Fo=0,25<=i)throw Error(j(301));i+=1,Ge=Ue=null,e.updateQueue=null,cl.current=lT,t=n(r,s)}while(mo)}if(cl.current=Hl,e=Ue!==null&&Ue.next!==null,us=0,Ge=Ue=xe=null,$l=!1,e)throw Error(j(300));return t}function Gd(){var t=Fo!==0;return Fo=0,t}function an(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?xe.memoizedState=Ge=t:Ge=Ge.next=t,Ge}function Ut(){if(Ue===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var e=Ge===null?xe.memoizedState:Ge.next;if(e!==null)Ge=e,Ue=t;else{if(t===null)throw Error(j(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},Ge===null?xe.memoizedState=Ge=t:Ge=Ge.next=t}return Ge}function Uo(t,e){return typeof e=="function"?e(t):e}function Rc(t){var e=Ut(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=Ue,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,h=i;do{var f=h.lane;if((us&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,xe.lanes|=f,cs|=f}h=h.next}while(h!==null&&h!==i);u===null?o=r:u.next=l,en(r,e.memoizedState)||(wt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,xe.lanes|=i,cs|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Pc(t){var e=Ut(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);en(i,e.memoizedState)||(wt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function b_(){}function O_(t,e){var n=xe,r=Ut(),s=e(),i=!en(r.memoizedState,s);if(i&&(r.memoizedState=s,wt=!0),r=r.queue,Kd(j_.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Ge!==null&&Ge.memoizedState.tag&1){if(n.flags|=2048,zo(9,L_.bind(null,n,r,s,e),void 0,null),Qe===null)throw Error(j(349));us&30||M_(n,e,s)}return s}function M_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function L_(t,e,n,r){e.value=n,e.getSnapshot=r,F_(e)&&U_(t)}function j_(t,e,n){return n(function(){F_(e)&&U_(t)})}function F_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!en(t,n)}catch{return!0}}function U_(t){var e=Vn(t,1);e!==null&&Jt(e,t,1,-1)}function _m(t){var e=an();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Uo,lastRenderedState:t},e.queue=t,t=t.dispatch=iT.bind(null,xe,t),[e.memoizedState,t]}function zo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function z_(){return Ut().memoizedState}function hl(t,e,n,r){var s=an();xe.flags|=t,s.memoizedState=zo(1|e,n,void 0,r===void 0?null:r)}function Iu(t,e,n,r){var s=Ut();r=r===void 0?null:r;var i=void 0;if(Ue!==null){var o=Ue.memoizedState;if(i=o.destroy,r!==null&&Wd(r,o.deps)){s.memoizedState=zo(e,n,i,r);return}}xe.flags|=t,s.memoizedState=zo(1|e,n,i,r)}function vm(t,e){return hl(8390656,8,t,e)}function Kd(t,e){return Iu(2048,8,t,e)}function B_(t,e){return Iu(4,2,t,e)}function $_(t,e){return Iu(4,4,t,e)}function H_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function W_(t,e,n){return n=n!=null?n.concat([t]):null,Iu(4,4,H_.bind(null,e,t),n)}function Qd(){}function q_(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Wd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function G_(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Wd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function K_(t,e,n){return us&21?(en(n,e)||(n=Zy(),xe.lanes|=n,cs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,wt=!0),t.memoizedState=n)}function rT(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=kc.transition;kc.transition={};try{t(!1),e()}finally{fe=n,kc.transition=r}}function Q_(){return Ut().memoizedState}function sT(t,e,n){var r=_r(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},X_(t))Y_(e,n);else if(n=N_(t,e,n,r),n!==null){var s=dt();Jt(n,t,r,s),J_(n,e,r)}}function iT(t,e,n){var r=_r(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(X_(t))Y_(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,en(l,o)){var u=e.interleaved;u===null?(s.next=s,Ud(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=N_(t,e,s,r),n!==null&&(s=dt(),Jt(n,t,r,s),J_(n,e,r))}}function X_(t){var e=t.alternate;return t===xe||e!==null&&e===xe}function Y_(t,e){mo=$l=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function J_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cd(t,n)}}var Hl={readContext:Ft,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},oT={readContext:Ft,useCallback:function(t,e){return an().memoizedState=[t,e===void 0?null:e],t},useContext:Ft,useEffect:vm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,hl(4194308,4,H_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return hl(4194308,4,t,e)},useInsertionEffect:function(t,e){return hl(4,2,t,e)},useMemo:function(t,e){var n=an();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=an();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=sT.bind(null,xe,t),[r.memoizedState,t]},useRef:function(t){var e=an();return t={current:t},e.memoizedState=t},useState:_m,useDebugValue:Qd,useDeferredValue:function(t){return an().memoizedState=t},useTransition:function(){var t=_m(!1),e=t[0];return t=rT.bind(null,t[1]),an().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=xe,s=an();if(Ie){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),Qe===null)throw Error(j(349));us&30||M_(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,vm(j_.bind(null,r,i,t),[t]),r.flags|=2048,zo(9,L_.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=an(),e=Qe.identifierPrefix;if(Ie){var n=Cn,r=An;n=(r&~(1<<32-Yt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Fo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=nT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},aT={readContext:Ft,useCallback:q_,useContext:Ft,useEffect:Kd,useImperativeHandle:W_,useInsertionEffect:B_,useLayoutEffect:$_,useMemo:G_,useReducer:Rc,useRef:z_,useState:function(){return Rc(Uo)},useDebugValue:Qd,useDeferredValue:function(t){var e=Ut();return K_(e,Ue.memoizedState,t)},useTransition:function(){var t=Rc(Uo)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:b_,useSyncExternalStore:O_,useId:Q_,unstable_isNewReconciler:!1},lT={readContext:Ft,useCallback:q_,useContext:Ft,useEffect:Kd,useImperativeHandle:W_,useInsertionEffect:B_,useLayoutEffect:$_,useMemo:G_,useReducer:Pc,useRef:z_,useState:function(){return Pc(Uo)},useDebugValue:Qd,useDeferredValue:function(t){var e=Ut();return Ue===null?e.memoizedState=t:K_(e,Ue.memoizedState,t)},useTransition:function(){var t=Pc(Uo)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:b_,useSyncExternalStore:O_,useId:Q_,unstable_isNewReconciler:!1};function Wt(t,e){if(t&&t.defaultProps){e=ke({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function kh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ke({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Su={isMounted:function(t){return(t=t._reactInternals)?_s(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=dt(),s=_r(t),i=Rn(r,s);i.payload=e,n!=null&&(i.callback=n),e=gr(t,i,s),e!==null&&(Jt(e,t,s,r),ul(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=dt(),s=_r(t),i=Rn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=gr(t,i,s),e!==null&&(Jt(e,t,s,r),ul(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dt(),r=_r(t),s=Rn(n,r);s.tag=2,e!=null&&(s.callback=e),e=gr(t,s,r),e!==null&&(Jt(e,t,r,n),ul(e,t,r))}};function wm(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Vo(n,r)||!Vo(s,i):!0}function Z_(t,e,n){var r=!1,s=Cr,i=e.contextType;return typeof i=="object"&&i!==null?i=Ft(i):(s=Tt(e)?as:lt.current,r=e.contextTypes,i=(r=r!=null)?ii(t,s):Cr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Su,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Em(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Su.enqueueReplaceState(e,e.state,null)}function Rh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},zd(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Ft(i):(i=Tt(e)?as:lt.current,s.context=ii(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(kh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Su.enqueueReplaceState(s,s.state,null),zl(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function ui(t,e){try{var n="",r=e;do n+=ME(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Nc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ph(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var uT=typeof WeakMap=="function"?WeakMap:Map;function ev(t,e,n){n=Rn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ql||(ql=!0,Uh=r),Ph(t,e)},n}function tv(t,e,n){n=Rn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Ph(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ph(t,e),typeof r!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Tm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new uT;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=IT.bind(null,t,e,n),e.then(t,t))}function Im(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Sm(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Rn(-1,1),e.tag=2,gr(n,e,1))),n.lanes|=1),t)}var cT=Fn.ReactCurrentOwner,wt=!1;function ht(t,e,n,r){e.child=t===null?P_(e,null,n,r):ai(e,t.child,n,r)}function Am(t,e,n,r,s){n=n.render;var i=e.ref;return Js(e,s),r=qd(t,e,n,r,i,s),n=Gd(),t!==null&&!wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,bn(t,e,s)):(Ie&&n&&bd(e),e.flags|=1,ht(t,e,r,s),e.child)}function Cm(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!rf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,nv(t,e,i,r,s)):(t=ml(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Vo,n(o,r)&&t.ref===e.ref)return bn(t,e,s)}return e.flags|=1,t=vr(i,r),t.ref=e.ref,t.return=e,e.child=t}function nv(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Vo(i,r)&&t.ref===e.ref)if(wt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(wt=!0);else return e.lanes=t.lanes,bn(t,e,s)}return Nh(t,e,n,r,s)}function rv(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Gs,Ct),Ct|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(Gs,Ct),Ct|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ge(Gs,Ct),Ct|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,ge(Gs,Ct),Ct|=r;return ht(t,e,s,n),e.child}function sv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Nh(t,e,n,r,s){var i=Tt(n)?as:lt.current;return i=ii(e,i),Js(e,s),n=qd(t,e,n,r,i,s),r=Gd(),t!==null&&!wt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,bn(t,e,s)):(Ie&&r&&bd(e),e.flags|=1,ht(t,e,n,s),e.child)}function xm(t,e,n,r,s){if(Tt(n)){var i=!0;Ml(e)}else i=!1;if(Js(e,s),e.stateNode===null)dl(t,e),Z_(e,n,r),Rh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Ft(h):(h=Tt(n)?as:lt.current,h=ii(e,h));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Em(e,o,r,h),rr=!1;var _=e.memoizedState;o.state=_,zl(e,r,o,s),u=e.memoizedState,l!==r||_!==u||Et.current||rr?(typeof f=="function"&&(kh(e,n,f,r),u=e.memoizedState),(l=rr||wm(e,n,l,r,_,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,D_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Wt(e.type,l),o.props=h,p=e.pendingProps,_=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ft(u):(u=Tt(n)?as:lt.current,u=ii(e,u));var x=n.getDerivedStateFromProps;(f=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||_!==u)&&Em(e,o,r,u),rr=!1,_=e.memoizedState,o.state=_,zl(e,r,o,s);var D=e.memoizedState;l!==p||_!==D||Et.current||rr?(typeof x=="function"&&(kh(e,n,x,r),D=e.memoizedState),(h=rr||wm(e,n,h,r,_,D,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,D,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,D,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=D),o.props=r,o.state=D,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),r=!1)}return Dh(t,e,n,r,i,s)}function Dh(t,e,n,r,s,i){sv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&dm(e,n,!1),bn(t,e,i);r=e.stateNode,cT.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ai(e,t.child,null,i),e.child=ai(e,null,l,i)):ht(t,e,l,i),e.memoizedState=r.state,s&&dm(e,n,!0),e.child}function iv(t){var e=t.stateNode;e.pendingContext?hm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&hm(t,e.context,!1),Bd(t,e.containerInfo)}function km(t,e,n,r,s){return oi(),Md(s),e.flags|=256,ht(t,e,n,r),e.child}var Vh={dehydrated:null,treeContext:null,retryLane:0};function bh(t){return{baseLanes:t,cachePool:null,transitions:null}}function ov(t,e,n){var r=e.pendingProps,s=Ae.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ge(Ae,s&1),t===null)return Ch(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=xu(o,r,0,null),t=ss(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=bh(n),e.memoizedState=Vh,t):Xd(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return hT(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=vr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=vr(l,i):(i=ss(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?bh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Vh,r}return i=t.child,t=i.sibling,r=vr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Xd(t,e){return e=xu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ga(t,e,n,r){return r!==null&&Md(r),ai(e,t.child,null,n),t=Xd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hT(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Nc(Error(j(422))),Ga(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=xu({mode:"visible",children:r.children},s,0,null),i=ss(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&ai(e,t.child,null,o),e.child.memoizedState=bh(o),e.memoizedState=Vh,i);if(!(e.mode&1))return Ga(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(j(419)),r=Nc(i,r,void 0),Ga(t,e,o,r)}if(l=(o&t.childLanes)!==0,wt||l){if(r=Qe,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Vn(t,s),Jt(r,t,s,-1))}return nf(),r=Nc(Error(j(421))),Ga(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=ST.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,xt=mr(s.nextSibling),kt=e,Ie=!0,Gt=null,t!==null&&(Vt[bt++]=An,Vt[bt++]=Cn,Vt[bt++]=ls,An=t.id,Cn=t.overflow,ls=e),e=Xd(e,r.children),e.flags|=4096,e)}function Rm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),xh(t.return,e,n)}function Dc(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function av(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(ht(t,e,r.children,n),r=Ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rm(t,n,e);else if(t.tag===19)Rm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(Ae,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Bl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Dc(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Bl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Dc(e,!0,n,null,i);break;case"together":Dc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function dl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function bn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),cs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=vr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=vr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function dT(t,e,n){switch(e.tag){case 3:iv(e),oi();break;case 5:V_(e);break;case 1:Tt(e.type)&&Ml(e);break;case 4:Bd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;ge(Fl,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(Ae,Ae.current&1),e.flags|=128,null):n&e.child.childLanes?ov(t,e,n):(ge(Ae,Ae.current&1),t=bn(t,e,n),t!==null?t.sibling:null);ge(Ae,Ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return av(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ge(Ae,Ae.current),r)break;return null;case 22:case 23:return e.lanes=0,rv(t,e,n)}return bn(t,e,n)}var lv,Oh,uv,cv;lv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Oh=function(){};uv=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,es(hn.current);var i=null;switch(n){case"input":s=rh(t,s),r=rh(t,r),i=[];break;case"select":s=ke({},s,{value:void 0}),r=ke({},r,{value:void 0}),i=[];break;case"textarea":s=oh(t,s),r=oh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=bl)}lh(n,r);var o;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var l=s[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Co.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var u=r[h];if(l=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Co.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&ve("scroll",t),i||l===u||(i=[])):(i=i||[]).push(h,u))}n&&(i=i||[]).push("style",n);var h=i;(e.updateQueue=h)&&(e.flags|=4)}};cv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Zi(t,e){if(!Ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function rt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function fT(t,e,n){var r=e.pendingProps;switch(Od(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(e),null;case 1:return Tt(e.type)&&Ol(),rt(e),null;case 3:return r=e.stateNode,li(),Ee(Et),Ee(lt),Hd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Wa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gt!==null&&($h(Gt),Gt=null))),Oh(t,e),rt(e),null;case 5:$d(e);var s=es(jo.current);if(n=e.type,t!==null&&e.stateNode!=null)uv(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return rt(e),null}if(t=es(hn.current),Wa(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[un]=e,r[Mo]=i,t=(e.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(s=0;s<so.length;s++)ve(so[s],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":jp(r,i),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ve("invalid",r);break;case"textarea":Up(r,i),ve("invalid",r)}lh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Ha(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Ha(r.textContent,l,t),s=["children",""+l]):Co.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ve("scroll",r)}switch(n){case"input":Ma(r),Fp(r,i,!0);break;case"textarea":Ma(r),zp(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=bl)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=jy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[un]=e,t[Mo]=r,lv(t,e,!1,!1),e.stateNode=t;e:{switch(o=uh(n,r),n){case"dialog":ve("cancel",t),ve("close",t),s=r;break;case"iframe":case"object":case"embed":ve("load",t),s=r;break;case"video":case"audio":for(s=0;s<so.length;s++)ve(so[s],t);s=r;break;case"source":ve("error",t),s=r;break;case"img":case"image":case"link":ve("error",t),ve("load",t),s=r;break;case"details":ve("toggle",t),s=r;break;case"input":jp(t,r),s=rh(t,r),ve("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=ke({},r,{value:void 0}),ve("invalid",t);break;case"textarea":Up(t,r),s=oh(t,r),ve("invalid",t);break;default:s=r}lh(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?zy(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Fy(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&xo(t,u):typeof u=="number"&&xo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Co.hasOwnProperty(i)?u!=null&&i==="onScroll"&&ve("scroll",t):u!=null&&wd(t,i,u,o))}switch(n){case"input":Ma(t),Fp(t,r,!1);break;case"textarea":Ma(t),zp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ar(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Ks(t,!!r.multiple,i,!1):r.defaultValue!=null&&Ks(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=bl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return rt(e),null;case 6:if(t&&e.stateNode!=null)cv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=es(jo.current),es(hn.current),Wa(e)){if(r=e.stateNode,n=e.memoizedProps,r[un]=e,(i=r.nodeValue!==n)&&(t=kt,t!==null))switch(t.tag){case 3:Ha(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ha(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[un]=e,e.stateNode=r}return rt(e),null;case 13:if(Ee(Ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&xt!==null&&e.mode&1&&!(e.flags&128))k_(),oi(),e.flags|=98560,i=!1;else if(i=Wa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(j(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[un]=e}else oi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;rt(e),i=!1}else Gt!==null&&($h(Gt),Gt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ae.current&1?Be===0&&(Be=3):nf())),e.updateQueue!==null&&(e.flags|=4),rt(e),null);case 4:return li(),Oh(t,e),t===null&&bo(e.stateNode.containerInfo),rt(e),null;case 10:return Fd(e.type._context),rt(e),null;case 17:return Tt(e.type)&&Ol(),rt(e),null;case 19:if(Ee(Ae),i=e.memoizedState,i===null)return rt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Zi(i,!1);else{if(Be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Bl(t),o!==null){for(e.flags|=128,Zi(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(Ae,Ae.current&1|2),e.child}t=t.sibling}i.tail!==null&&Oe()>ci&&(e.flags|=128,r=!0,Zi(i,!1),e.lanes=4194304)}else{if(!r)if(t=Bl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Zi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ie)return rt(e),null}else 2*Oe()-i.renderingStartTime>ci&&n!==1073741824&&(e.flags|=128,r=!0,Zi(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Oe(),e.sibling=null,n=Ae.current,ge(Ae,r?n&1|2:n&1),e):(rt(e),null);case 22:case 23:return tf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ct&1073741824&&(rt(e),e.subtreeFlags&6&&(e.flags|=8192)):rt(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function pT(t,e){switch(Od(e),e.tag){case 1:return Tt(e.type)&&Ol(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return li(),Ee(Et),Ee(lt),Hd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $d(e),null;case 13:if(Ee(Ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));oi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(Ae),null;case 4:return li(),null;case 10:return Fd(e.type._context),null;case 22:case 23:return tf(),null;case 24:return null;default:return null}}var Ka=!1,ot=!1,mT=typeof WeakSet=="function"?WeakSet:Set,W=null;function qs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(t,e,r)}else n.current=null}function Mh(t,e,n){try{n()}catch(r){De(t,e,r)}}var Pm=!1;function gT(t,e){if(vh=Nl,t=m_(),Vd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,p=t,_=null;t:for(;;){for(var x;p!==n||s!==0&&p.nodeType!==3||(l=o+s),p!==i||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(x=p.firstChild)!==null;)_=p,p=x;for(;;){if(p===t)break t;if(_===n&&++h===s&&(l=o),_===i&&++f===r&&(u=o),(x=p.nextSibling)!==null)break;p=_,_=p.parentNode}p=x}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(wh={focusedElem:t,selectionRange:n},Nl=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var D=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(D!==null){var V=D.memoizedProps,M=D.memoizedState,S=e.stateNode,E=S.getSnapshotBeforeUpdate(e.elementType===e.type?V:Wt(e.type,V),M);S.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(b){De(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return D=Pm,Pm=!1,D}function go(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Mh(e,n,i)}s=s.next}while(s!==r)}}function Au(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Lh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function hv(t){var e=t.alternate;e!==null&&(t.alternate=null,hv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[un],delete e[Mo],delete e[Ih],delete e[J1],delete e[Z1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function dv(t){return t.tag===5||t.tag===3||t.tag===4}function Nm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||dv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=bl));else if(r!==4&&(t=t.child,t!==null))for(jh(t,e,n),t=t.sibling;t!==null;)jh(t,e,n),t=t.sibling}function Fh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Fh(t,e,n),t=t.sibling;t!==null;)Fh(t,e,n),t=t.sibling}var Xe=null,qt=!1;function er(t,e,n){for(n=n.child;n!==null;)fv(t,e,n),n=n.sibling}function fv(t,e,n){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount(yu,n)}catch{}switch(n.tag){case 5:ot||qs(n,e);case 6:var r=Xe,s=qt;Xe=null,er(t,e,n),Xe=r,qt=s,Xe!==null&&(qt?(t=Xe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Xe.removeChild(n.stateNode));break;case 18:Xe!==null&&(qt?(t=Xe,n=n.stateNode,t.nodeType===8?Ac(t.parentNode,n):t.nodeType===1&&Ac(t,n),No(t)):Ac(Xe,n.stateNode));break;case 4:r=Xe,s=qt,Xe=n.stateNode.containerInfo,qt=!0,er(t,e,n),Xe=r,qt=s;break;case 0:case 11:case 14:case 15:if(!ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Mh(n,e,o),s=s.next}while(s!==r)}er(t,e,n);break;case 1:if(!ot&&(qs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){De(n,e,l)}er(t,e,n);break;case 21:er(t,e,n);break;case 22:n.mode&1?(ot=(r=ot)||n.memoizedState!==null,er(t,e,n),ot=r):er(t,e,n);break;default:er(t,e,n)}}function Dm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new mT),e.forEach(function(r){var s=AT.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function $t(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Xe=l.stateNode,qt=!1;break e;case 3:Xe=l.stateNode.containerInfo,qt=!0;break e;case 4:Xe=l.stateNode.containerInfo,qt=!0;break e}l=l.return}if(Xe===null)throw Error(j(160));fv(i,o,s),Xe=null,qt=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(h){De(s,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)pv(e,t),e=e.sibling}function pv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($t(e,t),on(t),r&4){try{go(3,t,t.return),Au(3,t)}catch(V){De(t,t.return,V)}try{go(5,t,t.return)}catch(V){De(t,t.return,V)}}break;case 1:$t(e,t),on(t),r&512&&n!==null&&qs(n,n.return);break;case 5:if($t(e,t),on(t),r&512&&n!==null&&qs(n,n.return),t.flags&32){var s=t.stateNode;try{xo(s,"")}catch(V){De(t,t.return,V)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&My(s,i),uh(l,o);var h=uh(l,i);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?zy(s,p):f==="dangerouslySetInnerHTML"?Fy(s,p):f==="children"?xo(s,p):wd(s,f,p,h)}switch(l){case"input":sh(s,i);break;case"textarea":Ly(s,i);break;case"select":var _=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Ks(s,!!i.multiple,x,!1):_!==!!i.multiple&&(i.defaultValue!=null?Ks(s,!!i.multiple,i.defaultValue,!0):Ks(s,!!i.multiple,i.multiple?[]:"",!1))}s[Mo]=i}catch(V){De(t,t.return,V)}}break;case 6:if($t(e,t),on(t),r&4){if(t.stateNode===null)throw Error(j(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(V){De(t,t.return,V)}}break;case 3:if($t(e,t),on(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{No(e.containerInfo)}catch(V){De(t,t.return,V)}break;case 4:$t(e,t),on(t);break;case 13:$t(e,t),on(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Zd=Oe())),r&4&&Dm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(ot=(h=ot)||f,$t(e,t),ot=h):$t(e,t),on(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(W=t,f=t.child;f!==null;){for(p=W=f;W!==null;){switch(_=W,x=_.child,_.tag){case 0:case 11:case 14:case 15:go(4,_,_.return);break;case 1:qs(_,_.return);var D=_.stateNode;if(typeof D.componentWillUnmount=="function"){r=_,n=_.return;try{e=r,D.props=e.memoizedProps,D.state=e.memoizedState,D.componentWillUnmount()}catch(V){De(r,n,V)}}break;case 5:qs(_,_.return);break;case 22:if(_.memoizedState!==null){bm(p);continue}}x!==null?(x.return=_,W=x):bm(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{s=p.stateNode,h?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Uy("display",o))}catch(V){De(t,t.return,V)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(V){De(t,t.return,V)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:$t(e,t),on(t),r&4&&Dm(t);break;case 21:break;default:$t(e,t),on(t)}}function on(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(dv(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(xo(s,""),r.flags&=-33);var i=Nm(t);Fh(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Nm(t);jh(t,l,o);break;default:throw Error(j(161))}}catch(u){De(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function yT(t,e,n){W=t,mv(t)}function mv(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var s=W,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Ka;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||ot;l=Ka;var h=ot;if(Ka=o,(ot=u)&&!h)for(W=s;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?Om(s):u!==null?(u.return=o,W=u):Om(s);for(;i!==null;)W=i,mv(i),i=i.sibling;W=s,Ka=l,ot=h}Vm(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,W=i):Vm(t)}}function Vm(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ot||Au(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ot)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Wt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&ym(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ym(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&No(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}ot||e.flags&512&&Lh(e)}catch(_){De(e,e.return,_)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function bm(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function Om(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Au(4,e)}catch(u){De(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){De(e,s,u)}}var i=e.return;try{Lh(e)}catch(u){De(e,i,u)}break;case 5:var o=e.return;try{Lh(e)}catch(u){De(e,o,u)}}}catch(u){De(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var _T=Math.ceil,Wl=Fn.ReactCurrentDispatcher,Yd=Fn.ReactCurrentOwner,jt=Fn.ReactCurrentBatchConfig,le=0,Qe=null,Le=null,Ze=0,Ct=0,Gs=br(0),Be=0,Bo=null,cs=0,Cu=0,Jd=0,yo=null,vt=null,Zd=0,ci=1/0,Tn=null,ql=!1,Uh=null,yr=null,Qa=!1,cr=null,Gl=0,_o=0,zh=null,fl=-1,pl=0;function dt(){return le&6?Oe():fl!==-1?fl:fl=Oe()}function _r(t){return t.mode&1?le&2&&Ze!==0?Ze&-Ze:tT.transition!==null?(pl===0&&(pl=Zy()),pl):(t=fe,t!==0||(t=window.event,t=t===void 0?16:o_(t.type)),t):1}function Jt(t,e,n,r){if(50<_o)throw _o=0,zh=null,Error(j(185));ea(t,n,r),(!(le&2)||t!==Qe)&&(t===Qe&&(!(le&2)&&(Cu|=n),Be===4&&ir(t,Ze)),It(t,r),n===1&&le===0&&!(e.mode&1)&&(ci=Oe()+500,Tu&&Or()))}function It(t,e){var n=t.callbackNode;t1(t,e);var r=Pl(t,t===Qe?Ze:0);if(r===0)n!==null&&Hp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Hp(n),e===1)t.tag===0?eT(Mm.bind(null,t)):A_(Mm.bind(null,t)),X1(function(){!(le&6)&&Or()}),n=null;else{switch(e_(r)){case 1:n=Ad;break;case 4:n=Yy;break;case 16:n=Rl;break;case 536870912:n=Jy;break;default:n=Rl}n=Iv(n,gv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function gv(t,e){if(fl=-1,pl=0,le&6)throw Error(j(327));var n=t.callbackNode;if(Zs()&&t.callbackNode!==n)return null;var r=Pl(t,t===Qe?Ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Kl(t,r);else{e=r;var s=le;le|=2;var i=_v();(Qe!==t||Ze!==e)&&(Tn=null,ci=Oe()+500,rs(t,e));do try{ET();break}catch(l){yv(t,l)}while(!0);jd(),Wl.current=i,le=s,Le!==null?e=0:(Qe=null,Ze=0,e=Be)}if(e!==0){if(e===2&&(s=ph(t),s!==0&&(r=s,e=Bh(t,s))),e===1)throw n=Bo,rs(t,0),ir(t,r),It(t,Oe()),n;if(e===6)ir(t,r);else{if(s=t.current.alternate,!(r&30)&&!vT(s)&&(e=Kl(t,r),e===2&&(i=ph(t),i!==0&&(r=i,e=Bh(t,i))),e===1))throw n=Bo,rs(t,0),ir(t,r),It(t,Oe()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:Xr(t,vt,Tn);break;case 3:if(ir(t,r),(r&130023424)===r&&(e=Zd+500-Oe(),10<e)){if(Pl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){dt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Th(Xr.bind(null,t,vt,Tn),e);break}Xr(t,vt,Tn);break;case 4:if(ir(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Yt(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_T(r/1960))-r,10<r){t.timeoutHandle=Th(Xr.bind(null,t,vt,Tn),r);break}Xr(t,vt,Tn);break;case 5:Xr(t,vt,Tn);break;default:throw Error(j(329))}}}return It(t,Oe()),t.callbackNode===n?gv.bind(null,t):null}function Bh(t,e){var n=yo;return t.current.memoizedState.isDehydrated&&(rs(t,e).flags|=256),t=Kl(t,e),t!==2&&(e=vt,vt=n,e!==null&&$h(e)),t}function $h(t){vt===null?vt=t:vt.push.apply(vt,t)}function vT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!en(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ir(t,e){for(e&=~Jd,e&=~Cu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yt(e),r=1<<n;t[n]=-1,e&=~r}}function Mm(t){if(le&6)throw Error(j(327));Zs();var e=Pl(t,0);if(!(e&1))return It(t,Oe()),null;var n=Kl(t,e);if(t.tag!==0&&n===2){var r=ph(t);r!==0&&(e=r,n=Bh(t,r))}if(n===1)throw n=Bo,rs(t,0),ir(t,e),It(t,Oe()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Xr(t,vt,Tn),It(t,Oe()),null}function ef(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(ci=Oe()+500,Tu&&Or())}}function hs(t){cr!==null&&cr.tag===0&&!(le&6)&&Zs();var e=le;le|=1;var n=jt.transition,r=fe;try{if(jt.transition=null,fe=1,t)return t()}finally{fe=r,jt.transition=n,le=e,!(le&6)&&Or()}}function tf(){Ct=Gs.current,Ee(Gs)}function rs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Q1(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(Od(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ol();break;case 3:li(),Ee(Et),Ee(lt),Hd();break;case 5:$d(r);break;case 4:li();break;case 13:Ee(Ae);break;case 19:Ee(Ae);break;case 10:Fd(r.type._context);break;case 22:case 23:tf()}n=n.return}if(Qe=t,Le=t=vr(t.current,null),Ze=Ct=e,Be=0,Bo=null,Jd=Cu=cs=0,vt=yo=null,Zr!==null){for(e=0;e<Zr.length;e++)if(n=Zr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Zr=null}return t}function yv(t,e){do{var n=Le;try{if(jd(),cl.current=Hl,$l){for(var r=xe.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}$l=!1}if(us=0,Ge=Ue=xe=null,mo=!1,Fo=0,Yd.current=null,n===null||n.return===null){Be=1,Bo=e,Le=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=Ze,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var _=f.alternate;_?(f.updateQueue=_.updateQueue,f.memoizedState=_.memoizedState,f.lanes=_.lanes):(f.updateQueue=null,f.memoizedState=null)}var x=Im(o);if(x!==null){x.flags&=-257,Sm(x,o,l,i,e),x.mode&1&&Tm(i,h,e),e=x,u=h;var D=e.updateQueue;if(D===null){var V=new Set;V.add(u),e.updateQueue=V}else D.add(u);break e}else{if(!(e&1)){Tm(i,h,e),nf();break e}u=Error(j(426))}}else if(Ie&&l.mode&1){var M=Im(o);if(M!==null){!(M.flags&65536)&&(M.flags|=256),Sm(M,o,l,i,e),Md(ui(u,l));break e}}i=u=ui(u,l),Be!==4&&(Be=2),yo===null?yo=[i]:yo.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var S=ev(i,u,e);gm(i,S);break e;case 1:l=u;var E=i.type,C=i.stateNode;if(!(i.flags&128)&&(typeof E.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(yr===null||!yr.has(C)))){i.flags|=65536,e&=-e,i.lanes|=e;var b=tv(i,l,e);gm(i,b);break e}}i=i.return}while(i!==null)}wv(n)}catch(U){e=U,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(!0)}function _v(){var t=Wl.current;return Wl.current=Hl,t===null?Hl:t}function nf(){(Be===0||Be===3||Be===2)&&(Be=4),Qe===null||!(cs&268435455)&&!(Cu&268435455)||ir(Qe,Ze)}function Kl(t,e){var n=le;le|=2;var r=_v();(Qe!==t||Ze!==e)&&(Tn=null,rs(t,e));do try{wT();break}catch(s){yv(t,s)}while(!0);if(jd(),le=n,Wl.current=r,Le!==null)throw Error(j(261));return Qe=null,Ze=0,Be}function wT(){for(;Le!==null;)vv(Le)}function ET(){for(;Le!==null&&!qE();)vv(Le)}function vv(t){var e=Tv(t.alternate,t,Ct);t.memoizedProps=t.pendingProps,e===null?wv(t):Le=e,Yd.current=null}function wv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=pT(n,e),n!==null){n.flags&=32767,Le=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Be=6,Le=null;return}}else if(n=fT(n,e,Ct),n!==null){Le=n;return}if(e=e.sibling,e!==null){Le=e;return}Le=e=t}while(e!==null);Be===0&&(Be=5)}function Xr(t,e,n){var r=fe,s=jt.transition;try{jt.transition=null,fe=1,TT(t,e,n,r)}finally{jt.transition=s,fe=r}return null}function TT(t,e,n,r){do Zs();while(cr!==null);if(le&6)throw Error(j(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(n1(t,i),t===Qe&&(Le=Qe=null,Ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Qa||(Qa=!0,Iv(Rl,function(){return Zs(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=jt.transition,jt.transition=null;var o=fe;fe=1;var l=le;le|=4,Yd.current=null,gT(t,n),pv(n,t),B1(wh),Nl=!!vh,wh=vh=null,t.current=n,yT(n),GE(),le=l,fe=o,jt.transition=i}else t.current=n;if(Qa&&(Qa=!1,cr=t,Gl=s),i=t.pendingLanes,i===0&&(yr=null),XE(n.stateNode),It(t,Oe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(ql)throw ql=!1,t=Uh,Uh=null,t;return Gl&1&&t.tag!==0&&Zs(),i=t.pendingLanes,i&1?t===zh?_o++:(_o=0,zh=t):_o=0,Or(),null}function Zs(){if(cr!==null){var t=e_(Gl),e=jt.transition,n=fe;try{if(jt.transition=null,fe=16>t?16:t,cr===null)var r=!1;else{if(t=cr,cr=null,Gl=0,le&6)throw Error(j(331));var s=le;for(le|=4,W=t.current;W!==null;){var i=W,o=i.child;if(W.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(W=h;W!==null;){var f=W;switch(f.tag){case 0:case 11:case 15:go(8,f,i)}var p=f.child;if(p!==null)p.return=f,W=p;else for(;W!==null;){f=W;var _=f.sibling,x=f.return;if(hv(f),f===h){W=null;break}if(_!==null){_.return=x,W=_;break}W=x}}}var D=i.alternate;if(D!==null){var V=D.child;if(V!==null){D.child=null;do{var M=V.sibling;V.sibling=null,V=M}while(V!==null)}}W=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,W=o;else e:for(;W!==null;){if(i=W,i.flags&2048)switch(i.tag){case 0:case 11:case 15:go(9,i,i.return)}var S=i.sibling;if(S!==null){S.return=i.return,W=S;break e}W=i.return}}var E=t.current;for(W=E;W!==null;){o=W;var C=o.child;if(o.subtreeFlags&2064&&C!==null)C.return=o,W=C;else e:for(o=E;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Au(9,l)}}catch(U){De(l,l.return,U)}if(l===o){W=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,W=b;break e}W=l.return}}if(le=s,Or(),cn&&typeof cn.onPostCommitFiberRoot=="function")try{cn.onPostCommitFiberRoot(yu,t)}catch{}r=!0}return r}finally{fe=n,jt.transition=e}}return!1}function Lm(t,e,n){e=ui(n,e),e=ev(t,e,1),t=gr(t,e,1),e=dt(),t!==null&&(ea(t,1,e),It(t,e))}function De(t,e,n){if(t.tag===3)Lm(t,t,n);else for(;e!==null;){if(e.tag===3){Lm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yr===null||!yr.has(r))){t=ui(n,t),t=tv(e,t,1),e=gr(e,t,1),t=dt(),e!==null&&(ea(e,1,t),It(e,t));break}}e=e.return}}function IT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=dt(),t.pingedLanes|=t.suspendedLanes&n,Qe===t&&(Ze&n)===n&&(Be===4||Be===3&&(Ze&130023424)===Ze&&500>Oe()-Zd?rs(t,0):Jd|=n),It(t,e)}function Ev(t,e){e===0&&(t.mode&1?(e=Fa,Fa<<=1,!(Fa&130023424)&&(Fa=4194304)):e=1);var n=dt();t=Vn(t,e),t!==null&&(ea(t,e,n),It(t,n))}function ST(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ev(t,n)}function AT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),Ev(t,n)}var Tv;Tv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Et.current)wt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return wt=!1,dT(t,e,n);wt=!!(t.flags&131072)}else wt=!1,Ie&&e.flags&1048576&&C_(e,jl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;dl(t,e),t=e.pendingProps;var s=ii(e,lt.current);Js(e,n),s=qd(null,e,r,t,s,n);var i=Gd();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Tt(r)?(i=!0,Ml(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,zd(e),s.updater=Su,e.stateNode=s,s._reactInternals=e,Rh(e,r,t,n),e=Dh(null,e,r,!0,i,n)):(e.tag=0,Ie&&i&&bd(e),ht(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(dl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=xT(r),t=Wt(r,t),s){case 0:e=Nh(null,e,r,t,n);break e;case 1:e=xm(null,e,r,t,n);break e;case 11:e=Am(null,e,r,t,n);break e;case 14:e=Cm(null,e,r,Wt(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Wt(r,s),Nh(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Wt(r,s),xm(t,e,r,s,n);case 3:e:{if(iv(e),t===null)throw Error(j(387));r=e.pendingProps,i=e.memoizedState,s=i.element,D_(t,e),zl(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=ui(Error(j(423)),e),e=km(t,e,r,n,s);break e}else if(r!==s){s=ui(Error(j(424)),e),e=km(t,e,r,n,s);break e}else for(xt=mr(e.stateNode.containerInfo.firstChild),kt=e,Ie=!0,Gt=null,n=P_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(oi(),r===s){e=bn(t,e,n);break e}ht(t,e,r,n)}e=e.child}return e;case 5:return V_(e),t===null&&Ch(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Eh(r,s)?o=null:i!==null&&Eh(r,i)&&(e.flags|=32),sv(t,e),ht(t,e,o,n),e.child;case 6:return t===null&&Ch(e),null;case 13:return ov(t,e,n);case 4:return Bd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ai(e,null,r,n):ht(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Wt(r,s),Am(t,e,r,s,n);case 7:return ht(t,e,e.pendingProps,n),e.child;case 8:return ht(t,e,e.pendingProps.children,n),e.child;case 12:return ht(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,ge(Fl,r._currentValue),r._currentValue=o,i!==null)if(en(i.value,o)){if(i.children===s.children&&!Et.current){e=bn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Rn(-1,n&-n),u.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),xh(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),xh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ht(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Js(e,n),s=Ft(s),r=r(s),e.flags|=1,ht(t,e,r,n),e.child;case 14:return r=e.type,s=Wt(r,e.pendingProps),s=Wt(r.type,s),Cm(t,e,r,s,n);case 15:return nv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Wt(r,s),dl(t,e),e.tag=1,Tt(r)?(t=!0,Ml(e)):t=!1,Js(e,n),Z_(e,r,s),Rh(e,r,s,n),Dh(null,e,r,!0,t,n);case 19:return av(t,e,n);case 22:return rv(t,e,n)}throw Error(j(156,e.tag))};function Iv(t,e){return Xy(t,e)}function CT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(t,e,n,r){return new CT(t,e,n,r)}function rf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xT(t){if(typeof t=="function")return rf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Td)return 11;if(t===Id)return 14}return 2}function vr(t,e){var n=t.alternate;return n===null?(n=Lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ml(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")rf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ls:return ss(n.children,s,i,e);case Ed:o=8,s|=8;break;case Zc:return t=Lt(12,n,e,s|2),t.elementType=Zc,t.lanes=i,t;case eh:return t=Lt(13,n,e,s),t.elementType=eh,t.lanes=i,t;case th:return t=Lt(19,n,e,s),t.elementType=th,t.lanes=i,t;case Vy:return xu(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ny:o=10;break e;case Dy:o=9;break e;case Td:o=11;break e;case Id:o=14;break e;case nr:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=Lt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function ss(t,e,n,r){return t=Lt(7,t,r,e),t.lanes=n,t}function xu(t,e,n,r){return t=Lt(22,t,r,e),t.elementType=Vy,t.lanes=n,t.stateNode={isHidden:!1},t}function Vc(t,e,n){return t=Lt(6,t,null,e),t.lanes=n,t}function bc(t,e,n){return e=Lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function kT(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pc(0),this.expirationTimes=pc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function sf(t,e,n,r,s,i,o,l,u){return t=new kT(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Lt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zd(i),t}function RT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ms,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Sv(t){if(!t)return Cr;t=t._reactInternals;e:{if(_s(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Tt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(Tt(n))return S_(t,n,e)}return e}function Av(t,e,n,r,s,i,o,l,u){return t=sf(n,r,!0,t,s,i,o,l,u),t.context=Sv(null),n=t.current,r=dt(),s=_r(n),i=Rn(r,s),i.callback=e??null,gr(n,i,s),t.current.lanes=s,ea(t,s,r),It(t,r),t}function ku(t,e,n,r){var s=e.current,i=dt(),o=_r(s);return n=Sv(n),e.context===null?e.context=n:e.pendingContext=n,e=Rn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=gr(s,e,o),t!==null&&(Jt(t,s,o,i),ul(t,s,o)),o}function Ql(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function jm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function of(t,e){jm(t,e),(t=t.alternate)&&jm(t,e)}function PT(){return null}var Cv=typeof reportError=="function"?reportError:function(t){console.error(t)};function af(t){this._internalRoot=t}Ru.prototype.render=af.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));ku(t,e,null,null)};Ru.prototype.unmount=af.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;hs(function(){ku(null,t,null,null)}),e[Dn]=null}};function Ru(t){this._internalRoot=t}Ru.prototype.unstable_scheduleHydration=function(t){if(t){var e=r_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<sr.length&&e!==0&&e<sr[n].priority;n++);sr.splice(n,0,t),n===0&&i_(t)}};function lf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Pu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fm(){}function NT(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var h=Ql(o);i.call(h)}}var o=Av(e,r,t,0,null,!1,!1,"",Fm);return t._reactRootContainer=o,t[Dn]=o.current,bo(t.nodeType===8?t.parentNode:t),hs(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var h=Ql(u);l.call(h)}}var u=sf(t,0,!1,null,null,!1,!1,"",Fm);return t._reactRootContainer=u,t[Dn]=u.current,bo(t.nodeType===8?t.parentNode:t),hs(function(){ku(e,u,n,r)}),u}function Nu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=Ql(o);l.call(u)}}ku(e,o,t,s)}else o=NT(n,e,t,s,r);return Ql(o)}t_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ro(e.pendingLanes);n!==0&&(Cd(e,n|1),It(e,Oe()),!(le&6)&&(ci=Oe()+500,Or()))}break;case 13:hs(function(){var r=Vn(t,1);if(r!==null){var s=dt();Jt(r,t,1,s)}}),of(t,1)}};xd=function(t){if(t.tag===13){var e=Vn(t,134217728);if(e!==null){var n=dt();Jt(e,t,134217728,n)}of(t,134217728)}};n_=function(t){if(t.tag===13){var e=_r(t),n=Vn(t,e);if(n!==null){var r=dt();Jt(n,t,e,r)}of(t,e)}};r_=function(){return fe};s_=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};hh=function(t,e,n){switch(e){case"input":if(sh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Eu(r);if(!s)throw Error(j(90));Oy(r),sh(r,s)}}}break;case"textarea":Ly(t,n);break;case"select":e=n.value,e!=null&&Ks(t,!!n.multiple,e,!1)}};Hy=ef;Wy=hs;var DT={usingClientEntryPoint:!1,Events:[na,zs,Eu,By,$y,ef]},eo={findFiberByHostInstance:Jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},VT={bundleType:eo.bundleType,version:eo.version,rendererPackageName:eo.rendererPackageName,rendererConfig:eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ky(t),t===null?null:t.stateNode},findFiberByHostInstance:eo.findFiberByHostInstance||PT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xa.isDisabled&&Xa.supportsFiber)try{yu=Xa.inject(VT),cn=Xa}catch{}}Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=DT;Pt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lf(e))throw Error(j(200));return RT(t,e,null,n)};Pt.createRoot=function(t,e){if(!lf(t))throw Error(j(299));var n=!1,r="",s=Cv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=sf(t,1,!1,null,null,n,!1,r,s),t[Dn]=e.current,bo(t.nodeType===8?t.parentNode:t),new af(e)};Pt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=Ky(e),t=t===null?null:t.stateNode,t};Pt.flushSync=function(t){return hs(t)};Pt.hydrate=function(t,e,n){if(!Pu(e))throw Error(j(200));return Nu(null,t,e,!0,n)};Pt.hydrateRoot=function(t,e,n){if(!lf(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=Cv;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Av(e,null,t,1,n??null,s,!1,i,o),t[Dn]=e.current,bo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Ru(e)};Pt.render=function(t,e,n){if(!Pu(e))throw Error(j(200));return Nu(null,t,e,!1,n)};Pt.unmountComponentAtNode=function(t){if(!Pu(t))throw Error(j(40));return t._reactRootContainer?(hs(function(){Nu(null,null,t,!1,function(){t._reactRootContainer=null,t[Dn]=null})}),!0):!1};Pt.unstable_batchedUpdates=ef;Pt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Pu(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return Nu(t,e,n,!1,r)};Pt.version="18.3.1-next-f1338f8080-20240426";function xv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xv)}catch(t){console.error(t)}}xv(),xy.exports=Pt;var bT=xy.exports,kv,Um=bT;kv=Um.createRoot,Um.hydrateRoot;/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Rv=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var MT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LT=te.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...l},u)=>te.createElement("svg",{ref:u,...MT,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Rv("lucide",s),...l},[...o.map(([h,f])=>te.createElement(h,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=(t,e)=>{const n=te.forwardRef(({className:r,...s},i)=>te.createElement(LT,{ref:i,iconNode:e,className:Rv(`lucide-${OT(t)}`,r),...s}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jT=me("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=me("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UT=me("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zT=me("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BT=me("Bell",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=me("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=me("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=me("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=me("ChartPie",[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WT=me("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=me("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GT=me("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=me("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QT=me("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XT=me("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=me("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JT=me("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=me("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eI=me("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=me("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tI=me("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=me("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=me("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=me("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nI=me("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rI=me("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=me("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]),sI=()=>{};var Wm={};/**
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
 */const Pv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},iI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Nv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let _=(l&15)<<2|h>>6,x=h&63;u||(x=64,o||(_=64)),r.push(n[f],n[p],n[_],n[x])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Pv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):iI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new oI;const _=i<<2|l>>4;if(r.push(_),h!==64){const x=l<<4&240|h>>2;if(r.push(x),p!==64){const D=h<<6&192|p;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class oI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const aI=function(t){const e=Pv(t);return Nv.encodeByteArray(e,!0)},Xl=function(t){return aI(t).replace(/\./g,"")},Dv=function(t){try{return Nv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function lI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const uI=()=>lI().__FIREBASE_DEFAULTS__,cI=()=>{if(typeof process>"u"||typeof Wm>"u")return;const t=Wm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Dv(t[1]);return e&&JSON.parse(e)},Du=()=>{try{return sI()||uI()||cI()||hI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Vv=t=>{var e,n;return(n=(e=Du())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},dI=t=>{const e=Vv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},bv=()=>{var t;return(t=Du())==null?void 0:t.config},Ov=t=>{var e;return(e=Du())==null?void 0:e[`_${t}`]};/**
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
 */class fI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ti(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Mv(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function pI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Xl(JSON.stringify(n)),Xl(JSON.stringify(o)),""].join(".")}const vo={};function mI(){const t={prod:[],emulator:[]};for(const e of Object.keys(vo))vo[e]?t.emulator.push(e):t.prod.push(e);return t}function gI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let qm=!1;function Lv(t,e){if(typeof window>"u"||typeof document>"u"||!Ti(window.location.host)||vo[t]===e||vo[t]||qm)return;vo[t]=e;function n(_){return`__firebase__banner__${_}`}const r="__firebase__banner",i=mI().prod.length>0;function o(){const _=document.getElementById(r);_&&_.remove()}function l(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function u(_,x){_.setAttribute("width","24"),_.setAttribute("id",x),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function h(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{qm=!0,o()},_}function f(_,x){_.setAttribute("id",x),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function p(){const _=gI(r),x=n("text"),D=document.getElementById(x)||document.createElement("span"),V=n("learnmore"),M=document.getElementById(V)||document.createElement("a"),S=n("preprendIcon"),E=document.getElementById(S)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const C=_.element;l(C),f(M,V);const b=h();u(E,S),C.append(E,D,M,b),document.body.appendChild(C)}i?(D.innerText="Preview backend disconnected.",E.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,D.innerText="Preview backend running in this workspace."),D.setAttribute("id",x)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function _I(){var e;const t=(e=Du())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function vI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function wI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function EI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function TI(){const t=ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function II(){return!_I()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function SI(){try{return typeof indexedDB=="object"}catch{return!1}}function AI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const CI="FirebaseError";class Un extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=CI,Object.setPrototypeOf(this,Un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sa.prototype.create)}}class sa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?xI(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Un(s,l,r)}}function xI(t,e){return t.replace(kI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const kI=/\{\$([^}]+)}/g;function RI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ds(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Gm(i)&&Gm(o)){if(!ds(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Gm(t){return t!==null&&typeof t=="object"}/**
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
 */function ia(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function PI(t,e){const n=new NI(t,e);return n.subscribe.bind(n)}class NI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");DI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Lc),s.error===void 0&&(s.error=Lc),s.complete===void 0&&(s.complete=Lc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function DI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Lc(){}/**
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
 */function zt(t){return t&&t._delegate?t._delegate:t}class fs{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yr="[DEFAULT]";/**
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
 */class VI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new fI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(OI(e))try{this.getOrInitializeService({instanceIdentifier:Yr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yr){return this.instances.has(e)}getOptions(e=Yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yr){return this.component?this.component.multipleInstances?e:Yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bI(t){return t===Yr?void 0:t}function OI(t){return t.instantiationMode==="EAGER"}/**
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
 */class MI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new VI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const LI={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},jI=se.INFO,FI={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},UI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=FI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class uf{constructor(e){this.name=e,this._logLevel=jI,this._logHandler=UI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?LI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const zI=(t,e)=>e.some(n=>t instanceof n);let Km,Qm;function BI(){return Km||(Km=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $I(){return Qm||(Qm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jv=new WeakMap,Hh=new WeakMap,Fv=new WeakMap,jc=new WeakMap,cf=new WeakMap;function HI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(wr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&jv.set(n,t)}).catch(()=>{}),cf.set(e,t),e}function WI(t){if(Hh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Hh.set(t,e)}let Wh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Hh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qI(t){Wh=t(Wh)}function GI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Fc(this),e,...n);return Fv.set(r,e.sort?e.sort():[e]),wr(r)}:$I().includes(t)?function(...e){return t.apply(Fc(this),e),wr(jv.get(this))}:function(...e){return wr(t.apply(Fc(this),e))}}function KI(t){return typeof t=="function"?GI(t):(t instanceof IDBTransaction&&WI(t),zI(t,BI())?new Proxy(t,Wh):t)}function wr(t){if(t instanceof IDBRequest)return HI(t);if(jc.has(t))return jc.get(t);const e=KI(t);return e!==t&&(jc.set(t,e),cf.set(e,t)),e}const Fc=t=>cf.get(t);function QI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=wr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(wr(o.result),u.oldVersion,u.newVersion,wr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const XI=["get","getKey","getAll","getAllKeys","count"],YI=["put","add","delete","clear"],Uc=new Map;function Xm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Uc.get(e))return Uc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=YI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||XI.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return Uc.set(e,i),i}qI(t=>({...t,get:(e,n,r)=>Xm(e,n)||t.get(e,n,r),has:(e,n)=>!!Xm(e,n)||t.has(e,n)}));/**
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
 */class JI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ZI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ZI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qh="@firebase/app",Ym="0.14.6";/**
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
 */const On=new uf("@firebase/app"),eS="@firebase/app-compat",tS="@firebase/analytics-compat",nS="@firebase/analytics",rS="@firebase/app-check-compat",sS="@firebase/app-check",iS="@firebase/auth",oS="@firebase/auth-compat",aS="@firebase/database",lS="@firebase/data-connect",uS="@firebase/database-compat",cS="@firebase/functions",hS="@firebase/functions-compat",dS="@firebase/installations",fS="@firebase/installations-compat",pS="@firebase/messaging",mS="@firebase/messaging-compat",gS="@firebase/performance",yS="@firebase/performance-compat",_S="@firebase/remote-config",vS="@firebase/remote-config-compat",wS="@firebase/storage",ES="@firebase/storage-compat",TS="@firebase/firestore",IS="@firebase/ai",SS="@firebase/firestore-compat",AS="firebase",CS="12.6.0";/**
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
 */const Gh="[DEFAULT]",xS={[qh]:"fire-core",[eS]:"fire-core-compat",[nS]:"fire-analytics",[tS]:"fire-analytics-compat",[sS]:"fire-app-check",[rS]:"fire-app-check-compat",[iS]:"fire-auth",[oS]:"fire-auth-compat",[aS]:"fire-rtdb",[lS]:"fire-data-connect",[uS]:"fire-rtdb-compat",[cS]:"fire-fn",[hS]:"fire-fn-compat",[dS]:"fire-iid",[fS]:"fire-iid-compat",[pS]:"fire-fcm",[mS]:"fire-fcm-compat",[gS]:"fire-perf",[yS]:"fire-perf-compat",[_S]:"fire-rc",[vS]:"fire-rc-compat",[wS]:"fire-gcs",[ES]:"fire-gcs-compat",[TS]:"fire-fst",[SS]:"fire-fst-compat",[IS]:"fire-vertex","fire-js":"fire-js",[AS]:"fire-js-all"};/**
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
 */const Yl=new Map,kS=new Map,Kh=new Map;function Jm(t,e){try{t.container.addComponent(e)}catch(n){On.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function hi(t){const e=t.name;if(Kh.has(e))return On.debug(`There were multiple attempts to register component ${e}.`),!1;Kh.set(e,t);for(const n of Yl.values())Jm(n,t);for(const n of kS.values())Jm(n,t);return!0}function hf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Kt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const RS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Er=new sa("app","Firebase",RS);/**
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
 */class PS{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Er.create("app-deleted",{appName:this._name})}}/**
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
 */const Ii=CS;function Uv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Gh,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Er.create("bad-app-name",{appName:String(s)});if(n||(n=bv()),!n)throw Er.create("no-options");const i=Yl.get(s);if(i){if(ds(n,i.options)&&ds(r,i.config))return i;throw Er.create("duplicate-app",{appName:s})}const o=new MI(s);for(const u of Kh.values())o.addComponent(u);const l=new PS(n,r,o);return Yl.set(s,l),l}function zv(t=Gh){const e=Yl.get(t);if(!e&&t===Gh&&bv())return Uv();if(!e)throw Er.create("no-app",{appName:t});return e}function Tr(t,e,n){let r=xS[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),On.warn(o.join(" "));return}hi(new fs(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const NS="firebase-heartbeat-database",DS=1,$o="firebase-heartbeat-store";let zc=null;function Bv(){return zc||(zc=QI(NS,DS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore($o)}catch(n){console.warn(n)}}}}).catch(t=>{throw Er.create("idb-open",{originalErrorMessage:t.message})})),zc}async function VS(t){try{const n=(await Bv()).transaction($o),r=await n.objectStore($o).get($v(t));return await n.done,r}catch(e){if(e instanceof Un)On.warn(e.message);else{const n=Er.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});On.warn(n.message)}}}async function Zm(t,e){try{const r=(await Bv()).transaction($o,"readwrite");await r.objectStore($o).put(e,$v(t)),await r.done}catch(n){if(n instanceof Un)On.warn(n.message);else{const r=Er.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});On.warn(r.message)}}}function $v(t){return`${t.name}!${t.options.appId}`}/**
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
 */const bS=1024,OS=30;class MS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=eg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>OS){const o=FS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){On.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=eg(),{heartbeatsToSend:r,unsentEntries:s}=LS(this._heartbeatsCache.heartbeats),i=Xl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return On.warn(n),""}}}function eg(){return new Date().toISOString().substring(0,10)}function LS(t,e=bS){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),tg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),tg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class jS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return SI()?AI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await VS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Zm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Zm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function tg(t){return Xl(JSON.stringify({version:2,heartbeats:t})).length}function FS(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function US(t){hi(new fs("platform-logger",e=>new JI(e),"PRIVATE")),hi(new fs("heartbeat",e=>new MS(e),"PRIVATE")),Tr(qh,Ym,t),Tr(qh,Ym,"esm2020"),Tr("fire-js","")}US("");var zS="firebase",BS="12.6.0";/**
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
 */Tr(zS,BS,"app");function Hv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $S=Hv,Wv=new sa("auth","Firebase",Hv());/**
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
 */const Jl=new uf("@firebase/auth");function HS(t,...e){Jl.logLevel<=se.WARN&&Jl.warn(`Auth (${Ii}): ${t}`,...e)}function gl(t,...e){Jl.logLevel<=se.ERROR&&Jl.error(`Auth (${Ii}): ${t}`,...e)}/**
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
 */function yn(t,...e){throw ff(t,...e)}function Zt(t,...e){return ff(t,...e)}function df(t,e,n){const r={...$S(),[e]:n};return new sa("auth","Firebase",r).create(e,{appName:t.name})}function is(t){return df(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function WS(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&yn(t,"argument-error"),df(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ff(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Wv.create(t,...e)}function X(t,e,...n){if(!t)throw ff(e,...n)}function xn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw gl(e),new Error(e)}function Mn(t,e){t||xn(e)}/**
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
 */function Qh(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function qS(){return ng()==="http:"||ng()==="https:"}function ng(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function GS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qS()||wI()||"connection"in navigator)?navigator.onLine:!0}function KS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class oa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mn(n>e,"Short delay should be less than long delay!"),this.isMobile=yI()||EI()}get(){return GS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function pf(t,e){Mn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class qv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const QS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const XS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],YS=new oa(3e4,6e4);function mf(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Si(t,e,n,r,s={}){return Gv(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=ia({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...i};return vI()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Ti(t.emulatorConfig.host)&&(h.credentials="include"),qv.fetch()(await Kv(t,t.config.apiHost,n,l),h)})}async function Gv(t,e,n){t._canInitEmulator=!1;const r={...QS,...e};try{const s=new ZS(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ja(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ja(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ja(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ja(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw df(t,f,h);yn(t,f)}}catch(s){if(s instanceof Un)throw s;yn(t,"network-request-failed",{message:String(s)})}}async function JS(t,e,n,r,s={}){const i=await Si(t,e,n,r,s);return"mfaPendingCredential"in i&&yn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Kv(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?pf(t.config,s):`${t.config.apiScheme}://${s}`;return XS.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class ZS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Zt(this.auth,"network-request-failed")),YS.get())})}}function Ja(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Zt(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function eA(t,e){return Si(t,"POST","/v1/accounts:delete",e)}async function Zl(t,e){return Si(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function wo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tA(t,e=!1){const n=zt(t),r=await n.getIdToken(e),s=gf(r);X(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:wo(Bc(s.auth_time)),issuedAtTime:wo(Bc(s.iat)),expirationTime:wo(Bc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Bc(t){return Number(t)*1e3}function gf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return gl("JWT malformed, contained fewer than 3 sections"),null;try{const s=Dv(n);return s?JSON.parse(s):(gl("Failed to decode base64 JWT payload"),null)}catch(s){return gl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function rg(t){const e=gf(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ho(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Un&&nA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function nA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class rA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Xh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wo(this.lastLoginAt),this.creationTime=wo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function eu(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Ho(t,Zl(e,{idToken:n}));X(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?Qv(s.providerUserInfo):[],o=iA(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Xh(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function sA(t){const e=zt(t);await eu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Qv(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function oA(t,e){const n=await Gv(t,{},async()=>{const r=ia({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Kv(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Ti(t.emulatorConfig.host)&&(u.credentials="include"),qv.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function aA(t,e){return Si(t,"POST","/v2/accounts:revokeToken",mf(t,e))}/**
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
 */class ei{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=rg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await oA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ei;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(X(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(X(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ei,this.toJSON())}_performRefresh(){return xn("not implemented")}}/**
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
 */function tr(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Qt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new rA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Xh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ho(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tA(this,e)}reload(){return sA(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Qt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await eu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Kt(this.auth.app))return Promise.reject(is(this.auth));const e=await this.getIdToken();return await Ho(this,eA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:_,isAnonymous:x,providerData:D,stsTokenManager:V}=n;X(p&&V,e,"internal-error");const M=ei.fromJSON(this.name,V);X(typeof p=="string",e,"internal-error"),tr(r,e.name),tr(s,e.name),X(typeof _=="boolean",e,"internal-error"),X(typeof x=="boolean",e,"internal-error"),tr(i,e.name),tr(o,e.name),tr(l,e.name),tr(u,e.name),tr(h,e.name),tr(f,e.name);const S=new Qt({uid:p,auth:e,email:s,emailVerified:_,displayName:r,isAnonymous:x,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:M,createdAt:h,lastLoginAt:f});return D&&Array.isArray(D)&&(S.providerData=D.map(E=>({...E}))),u&&(S._redirectEventId=u),S}static async _fromIdTokenResponse(e,n,r=!1){const s=new ei;s.updateFromServerResponse(n);const i=new Qt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await eu(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];X(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Qv(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new ei;l.updateFromIdToken(r);const u=new Qt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Xh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
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
 */const sg=new Map;function kn(t){Mn(t instanceof Function,"Expected a class definition");let e=sg.get(t);return e?(Mn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,sg.set(t,e),e)}/**
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
 */class Xv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Xv.type="NONE";const ig=Xv;/**
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
 */function yl(t,e,n){return`firebase:${t}:${e}:${n}`}class ti{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=yl(this.userKey,s.apiKey,i),this.fullPersistenceKey=yl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Zl(this.auth,{idToken:e}).catch(()=>{});return n?Qt._fromGetAccountInfoResponse(this.auth,n,e):null}return Qt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ti(kn(ig),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||kn(ig);const o=yl(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const _=await Zl(e,{idToken:f}).catch(()=>{});if(!_)break;p=await Qt._fromGetAccountInfoResponse(e,_,f)}else p=Qt._fromJSON(e,f);h!==i&&(l=p),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new ti(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new ti(i,e,r))}}/**
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
 */function og(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(e0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(n0(e))return"Blackberry";if(r0(e))return"Webos";if(Jv(e))return"Safari";if((e.includes("chrome/")||Zv(e))&&!e.includes("edge/"))return"Chrome";if(t0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Yv(t=ut()){return/firefox\//i.test(t)}function Jv(t=ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zv(t=ut()){return/crios\//i.test(t)}function e0(t=ut()){return/iemobile/i.test(t)}function t0(t=ut()){return/android/i.test(t)}function n0(t=ut()){return/blackberry/i.test(t)}function r0(t=ut()){return/webos/i.test(t)}function yf(t=ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function lA(t=ut()){var e;return yf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function uA(){return TI()&&document.documentMode===10}function s0(t=ut()){return yf(t)||t0(t)||r0(t)||n0(t)||/windows phone/i.test(t)||e0(t)}/**
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
 */function i0(t,e=[]){let n;switch(t){case"Browser":n=og(ut());break;case"Worker":n=`${og(ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ii}/${r}`}/**
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
 */class cA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function hA(t,e={}){return Si(t,"GET","/v2/passwordPolicy",mf(t,e))}/**
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
 */const dA=6;class fA{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??dA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class pA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ag(this),this.idTokenSubscription=new ag(this),this.beforeStateQueue=new cA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await ti.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Zl(this,{idToken:e}),r=await Qt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Kt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await eu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=KS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Kt(this.app))return Promise.reject(is(this));const n=e?zt(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Kt(this.app)?Promise.reject(is(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Kt(this.app)?Promise.reject(is(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hA(this),n=new fA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new sa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await aA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kn(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await ti.create(this,[kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=i0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Kt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&HS(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Vu(t){return zt(t)}class ag{constructor(e){this.auth=e,this.observer=null,this.addObserver=PI(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let _f={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mA(t){_f=t}function gA(t){return _f.loadJS(t)}function yA(){return _f.gapiScript}function _A(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function vA(t,e){const n=hf(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ds(i,e??{}))return s;yn(s,"already-initialized")}return n.initialize({options:e})}function wA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function EA(t,e,n){const r=Vu(t);X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=o0(e),{host:o,port:l}=TA(e),u=l===null?"":`:${l}`,h={url:`${i}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){X(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),X(ds(h,r.config.emulator)&&ds(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ti(o)?(Mv(`${i}//${o}${u}`),Lv("Auth",!0)):IA()}function o0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function TA(t){const e=o0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:lg(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:lg(o)}}}function lg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function IA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class a0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xn("not implemented")}_getIdTokenResponse(e){return xn("not implemented")}_linkToIdToken(e,n){return xn("not implemented")}_getReauthenticationResolver(e){return xn("not implemented")}}/**
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
 */async function ni(t,e){return JS(t,"POST","/v1/accounts:signInWithIdp",mf(t,e))}/**
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
 */const SA="http://localhost";class ps extends a0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ps(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):yn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new ps(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ni(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ni(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ni(e,n)}buildRequest(){const e={requestUri:SA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ia(n)}return e}}/**
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
 */class vf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class aa extends vf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class or extends aa{constructor(){super("facebook.com")}static credential(e){return ps._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.FACEBOOK_SIGN_IN_METHOD="facebook.com";or.PROVIDER_ID="facebook.com";/**
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
 */class Sn extends aa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ps._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Sn.credential(n,r)}catch{return null}}}Sn.GOOGLE_SIGN_IN_METHOD="google.com";Sn.PROVIDER_ID="google.com";/**
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
 */class ar extends aa{constructor(){super("github.com")}static credential(e){return ps._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.GITHUB_SIGN_IN_METHOD="github.com";ar.PROVIDER_ID="github.com";/**
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
 */class lr extends aa{constructor(){super("twitter.com")}static credential(e,n){return ps._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return lr.credential(n,r)}catch{return null}}}lr.TWITTER_SIGN_IN_METHOD="twitter.com";lr.PROVIDER_ID="twitter.com";/**
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
 */class di{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Qt._fromIdTokenResponse(e,r,s),o=ug(r);return new di({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ug(r);return new di({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ug(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class tu extends Un{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,tu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new tu(e,n,r,s)}}function l0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?tu._fromErrorAndOperation(t,i,e,r):i})}async function AA(t,e,n=!1){const r=await Ho(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return di._forOperation(t,"link",r)}/**
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
 */async function CA(t,e,n=!1){const{auth:r}=t;if(Kt(r.app))return Promise.reject(is(r));const s="reauthenticate";try{const i=await Ho(t,l0(r,s,e,t),n);X(i.idToken,r,"internal-error");const o=gf(i.idToken);X(o,r,"internal-error");const{sub:l}=o;return X(t.uid===l,r,"user-mismatch"),di._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&yn(r,"user-mismatch"),i}}/**
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
 */async function xA(t,e,n=!1){if(Kt(t.app))return Promise.reject(is(t));const r="signIn",s=await l0(t,r,e),i=await di._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function kA(t,e,n,r){return zt(t).onIdTokenChanged(e,n,r)}function RA(t,e,n){return zt(t).beforeAuthStateChanged(e,n)}function PA(t,e,n,r){return zt(t).onAuthStateChanged(e,n,r)}function NA(t){return zt(t).signOut()}const nu="__sak";/**
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
 */class u0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(nu,"1"),this.storage.removeItem(nu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const DA=1e3,VA=10;class c0 extends u0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=s0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);uA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,VA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},DA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}c0.type="LOCAL";const bA=c0;/**
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
 */class h0 extends u0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}h0.type="SESSION";const d0=h0;/**
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
 */function OA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class bu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new bu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),u=await OA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bu.receivers=[];/**
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
 */function wf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class MA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const h=wf("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const _=p;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(_.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function dn(){return window}function LA(t){dn().location.href=t}/**
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
 */function f0(){return typeof dn().WorkerGlobalScope<"u"&&typeof dn().importScripts=="function"}async function jA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function FA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function UA(){return f0()?self:null}/**
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
 */const p0="firebaseLocalStorageDb",zA=1,ru="firebaseLocalStorage",m0="fbase_key";class la{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ou(t,e){return t.transaction([ru],e?"readwrite":"readonly").objectStore(ru)}function BA(){const t=indexedDB.deleteDatabase(p0);return new la(t).toPromise()}function Yh(){const t=indexedDB.open(p0,zA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ru,{keyPath:m0})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ru)?e(r):(r.close(),await BA(),e(await Yh()))})})}async function cg(t,e,n){const r=Ou(t,!0).put({[m0]:e,value:n});return new la(r).toPromise()}async function $A(t,e){const n=Ou(t,!1).get(e),r=await new la(n).toPromise();return r===void 0?null:r.value}function hg(t,e){const n=Ou(t,!0).delete(e);return new la(n).toPromise()}const HA=800,WA=3;class g0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>WA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return f0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bu._getInstance(UA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await jA(),!this.activeServiceWorker)return;this.sender=new MA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||FA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yh();return await cg(e,nu,"1"),await hg(e,nu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>cg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$A(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>hg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ou(s,!1).getAll();return new la(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),HA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}g0.type="LOCAL";const qA=g0;new oa(3e4,6e4);/**
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
 */function y0(t,e){return e?kn(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ef extends a0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ni(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ni(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ni(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function GA(t){return xA(t.auth,new Ef(t),t.bypassAuthState)}function KA(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),CA(n,new Ef(t),t.bypassAuthState)}async function QA(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),AA(n,new Ef(t),t.bypassAuthState)}/**
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
 */class _0{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return GA;case"linkViaPopup":case"linkViaRedirect":return QA;case"reauthViaPopup":case"reauthViaRedirect":return KA;default:yn(this.auth,"internal-error")}}resolve(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const XA=new oa(2e3,1e4);async function YA(t,e,n){if(Kt(t.app))return Promise.reject(Zt(t,"operation-not-supported-in-this-environment"));const r=Vu(t);WS(t,e,vf);const s=y0(r,n);return new ts(r,"signInViaPopup",e,s).executeNotNull()}class ts extends _0{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ts.currentPopupAction&&ts.currentPopupAction.cancel(),ts.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){Mn(this.filter.length===1,"Popup operations only handle one event");const e=wf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ts.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,XA.get())};e()}}ts.currentPopupAction=null;/**
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
 */const JA="pendingRedirect",_l=new Map;class ZA extends _0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_l.get(this.auth._key());if(!e){try{const r=await eC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_l.set(this.auth._key(),e)}return this.bypassAuthState||_l.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eC(t,e){const n=rC(e),r=nC(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function tC(t,e){_l.set(t._key(),e)}function nC(t){return kn(t._redirectPersistence)}function rC(t){return yl(JA,t.config.apiKey,t.name)}async function sC(t,e,n=!1){if(Kt(t.app))return Promise.reject(is(t));const r=Vu(t),s=y0(r,e),o=await new ZA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const iC=10*60*1e3;class oC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!aC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!v0(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Zt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iC&&this.cachedEventUids.clear(),this.cachedEventUids.has(dg(e))}saveEventToCache(e){this.cachedEventUids.add(dg(e)),this.lastProcessedEventTime=Date.now()}}function dg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function v0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function aC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return v0(t);default:return!1}}/**
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
 */async function lC(t,e={}){return Si(t,"GET","/v1/projects",e)}/**
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
 */const uC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cC=/^https?/;async function hC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lC(t);for(const n of e)try{if(dC(n))return}catch{}yn(t,"unauthorized-domain")}function dC(t){const e=Qh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!cC.test(n))return!1;if(uC.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const fC=new oa(3e4,6e4);function fg(){const t=dn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function pC(t){return new Promise((e,n)=>{var s,i,o;function r(){fg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fg(),n(Zt(t,"network-request-failed"))},timeout:fC.get()})}if((i=(s=dn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=dn().gapi)!=null&&o.load)r();else{const l=_A("iframefcb");return dn()[l]=()=>{gapi.load?r():n(Zt(t,"network-request-failed"))},gA(`${yA()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw vl=null,e})}let vl=null;function mC(t){return vl=vl||pC(t),vl}/**
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
 */const gC=new oa(5e3,15e3),yC="__/auth/iframe",_C="emulator/auth/iframe",vC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function EC(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?pf(e,_C):`https://${t.config.authDomain}/${yC}`,r={apiKey:e.apiKey,appName:t.name,v:Ii},s=wC.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ia(r).slice(1)}`}async function TC(t){const e=await mC(t),n=dn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:EC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vC,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Zt(t,"network-request-failed"),l=dn().setTimeout(()=>{i(o)},gC.get());function u(){dn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const IC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},SC=500,AC=600,CC="_blank",xC="http://localhost";class pg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kC(t,e,n,r=SC,s=AC){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...IC,width:r.toString(),height:s.toString(),top:i,left:o},h=ut().toLowerCase();n&&(l=Zv(h)?CC:n),Yv(h)&&(e=e||xC,u.scrollbars="yes");const f=Object.entries(u).reduce((_,[x,D])=>`${_}${x}=${D},`,"");if(lA(h)&&l!=="_self")return RC(e||"",l),new pg(null);const p=window.open(e||"",l,f);X(p,t,"popup-blocked");try{p.focus()}catch{}return new pg(p)}function RC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const PC="__/auth/handler",NC="emulator/auth/handler",DC=encodeURIComponent("fac");async function mg(t,e,n,r,s,i){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ii,eventId:s};if(e instanceof vf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",RI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof aa){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${DC}=${encodeURIComponent(u)}`:"";return`${VC(t)}?${ia(l).slice(1)}${h}`}function VC({config:t}){return t.emulator?pf(t,NC):`https://${t.authDomain}/${PC}`}/**
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
 */const $c="webStorageSupport";class bC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=d0,this._completeRedirectFn=sC,this._overrideRedirectResult=tC}async _openPopup(e,n,r,s){var o;Mn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await mg(e,n,r,Qh(),s);return kC(e,i,wf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await mg(e,n,r,Qh(),s);return LA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Mn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await TC(e),r=new oC(e);return n.register("authEvent",s=>(X(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($c,{type:$c},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[$c];i!==void 0&&n(!!i),yn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return s0()||Jv()||yf()}}const OC=bC;var gg="@firebase/auth",yg="1.11.1";/**
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
 */class MC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function LC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jC(t){hi(new fs("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:i0(t)},h=new pA(r,s,i,u);return wA(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),hi(new fs("auth-internal",e=>{const n=Vu(e.getProvider("auth").getImmediate());return(r=>new MC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tr(gg,yg,LC(t)),Tr(gg,yg,"esm2020")}/**
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
 */const FC=5*60,UC=Ov("authIdTokenMaxAge")||FC;let _g=null;const zC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>UC)return;const s=n==null?void 0:n.token;_g!==s&&(_g=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function BC(t=zv()){const e=hf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=vA(t,{popupRedirectResolver:OC,persistence:[qA,bA,d0]}),r=Ov("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=zC(i.toString());RA(n,o,()=>o(n.currentUser)),kA(n,l=>o(l))}}const s=Vv("auth");return s&&EA(n,`http://${s}`),n}function $C(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}mA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Zt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",$C().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jC("Browser");var vg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ir,w0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,y){function w(){}w.prototype=y.prototype,v.F=y.prototype,v.prototype=new w,v.prototype.constructor=v,v.D=function(I,A,R){for(var T=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)T[Pe-2]=arguments[Pe];return y.prototype[A].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,y,w){w||(w=0);const I=Array(16);if(typeof y=="string")for(var A=0;A<16;++A)I[A]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(A=0;A<16;++A)I[A]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=v.g[0],w=v.g[1],A=v.g[2];let R=v.g[3],T;T=y+(R^w&(A^R))+I[0]+3614090360&4294967295,y=w+(T<<7&4294967295|T>>>25),T=R+(A^y&(w^A))+I[1]+3905402710&4294967295,R=y+(T<<12&4294967295|T>>>20),T=A+(w^R&(y^w))+I[2]+606105819&4294967295,A=R+(T<<17&4294967295|T>>>15),T=w+(y^A&(R^y))+I[3]+3250441966&4294967295,w=A+(T<<22&4294967295|T>>>10),T=y+(R^w&(A^R))+I[4]+4118548399&4294967295,y=w+(T<<7&4294967295|T>>>25),T=R+(A^y&(w^A))+I[5]+1200080426&4294967295,R=y+(T<<12&4294967295|T>>>20),T=A+(w^R&(y^w))+I[6]+2821735955&4294967295,A=R+(T<<17&4294967295|T>>>15),T=w+(y^A&(R^y))+I[7]+4249261313&4294967295,w=A+(T<<22&4294967295|T>>>10),T=y+(R^w&(A^R))+I[8]+1770035416&4294967295,y=w+(T<<7&4294967295|T>>>25),T=R+(A^y&(w^A))+I[9]+2336552879&4294967295,R=y+(T<<12&4294967295|T>>>20),T=A+(w^R&(y^w))+I[10]+4294925233&4294967295,A=R+(T<<17&4294967295|T>>>15),T=w+(y^A&(R^y))+I[11]+2304563134&4294967295,w=A+(T<<22&4294967295|T>>>10),T=y+(R^w&(A^R))+I[12]+1804603682&4294967295,y=w+(T<<7&4294967295|T>>>25),T=R+(A^y&(w^A))+I[13]+4254626195&4294967295,R=y+(T<<12&4294967295|T>>>20),T=A+(w^R&(y^w))+I[14]+2792965006&4294967295,A=R+(T<<17&4294967295|T>>>15),T=w+(y^A&(R^y))+I[15]+1236535329&4294967295,w=A+(T<<22&4294967295|T>>>10),T=y+(A^R&(w^A))+I[1]+4129170786&4294967295,y=w+(T<<5&4294967295|T>>>27),T=R+(w^A&(y^w))+I[6]+3225465664&4294967295,R=y+(T<<9&4294967295|T>>>23),T=A+(y^w&(R^y))+I[11]+643717713&4294967295,A=R+(T<<14&4294967295|T>>>18),T=w+(R^y&(A^R))+I[0]+3921069994&4294967295,w=A+(T<<20&4294967295|T>>>12),T=y+(A^R&(w^A))+I[5]+3593408605&4294967295,y=w+(T<<5&4294967295|T>>>27),T=R+(w^A&(y^w))+I[10]+38016083&4294967295,R=y+(T<<9&4294967295|T>>>23),T=A+(y^w&(R^y))+I[15]+3634488961&4294967295,A=R+(T<<14&4294967295|T>>>18),T=w+(R^y&(A^R))+I[4]+3889429448&4294967295,w=A+(T<<20&4294967295|T>>>12),T=y+(A^R&(w^A))+I[9]+568446438&4294967295,y=w+(T<<5&4294967295|T>>>27),T=R+(w^A&(y^w))+I[14]+3275163606&4294967295,R=y+(T<<9&4294967295|T>>>23),T=A+(y^w&(R^y))+I[3]+4107603335&4294967295,A=R+(T<<14&4294967295|T>>>18),T=w+(R^y&(A^R))+I[8]+1163531501&4294967295,w=A+(T<<20&4294967295|T>>>12),T=y+(A^R&(w^A))+I[13]+2850285829&4294967295,y=w+(T<<5&4294967295|T>>>27),T=R+(w^A&(y^w))+I[2]+4243563512&4294967295,R=y+(T<<9&4294967295|T>>>23),T=A+(y^w&(R^y))+I[7]+1735328473&4294967295,A=R+(T<<14&4294967295|T>>>18),T=w+(R^y&(A^R))+I[12]+2368359562&4294967295,w=A+(T<<20&4294967295|T>>>12),T=y+(w^A^R)+I[5]+4294588738&4294967295,y=w+(T<<4&4294967295|T>>>28),T=R+(y^w^A)+I[8]+2272392833&4294967295,R=y+(T<<11&4294967295|T>>>21),T=A+(R^y^w)+I[11]+1839030562&4294967295,A=R+(T<<16&4294967295|T>>>16),T=w+(A^R^y)+I[14]+4259657740&4294967295,w=A+(T<<23&4294967295|T>>>9),T=y+(w^A^R)+I[1]+2763975236&4294967295,y=w+(T<<4&4294967295|T>>>28),T=R+(y^w^A)+I[4]+1272893353&4294967295,R=y+(T<<11&4294967295|T>>>21),T=A+(R^y^w)+I[7]+4139469664&4294967295,A=R+(T<<16&4294967295|T>>>16),T=w+(A^R^y)+I[10]+3200236656&4294967295,w=A+(T<<23&4294967295|T>>>9),T=y+(w^A^R)+I[13]+681279174&4294967295,y=w+(T<<4&4294967295|T>>>28),T=R+(y^w^A)+I[0]+3936430074&4294967295,R=y+(T<<11&4294967295|T>>>21),T=A+(R^y^w)+I[3]+3572445317&4294967295,A=R+(T<<16&4294967295|T>>>16),T=w+(A^R^y)+I[6]+76029189&4294967295,w=A+(T<<23&4294967295|T>>>9),T=y+(w^A^R)+I[9]+3654602809&4294967295,y=w+(T<<4&4294967295|T>>>28),T=R+(y^w^A)+I[12]+3873151461&4294967295,R=y+(T<<11&4294967295|T>>>21),T=A+(R^y^w)+I[15]+530742520&4294967295,A=R+(T<<16&4294967295|T>>>16),T=w+(A^R^y)+I[2]+3299628645&4294967295,w=A+(T<<23&4294967295|T>>>9),T=y+(A^(w|~R))+I[0]+4096336452&4294967295,y=w+(T<<6&4294967295|T>>>26),T=R+(w^(y|~A))+I[7]+1126891415&4294967295,R=y+(T<<10&4294967295|T>>>22),T=A+(y^(R|~w))+I[14]+2878612391&4294967295,A=R+(T<<15&4294967295|T>>>17),T=w+(R^(A|~y))+I[5]+4237533241&4294967295,w=A+(T<<21&4294967295|T>>>11),T=y+(A^(w|~R))+I[12]+1700485571&4294967295,y=w+(T<<6&4294967295|T>>>26),T=R+(w^(y|~A))+I[3]+2399980690&4294967295,R=y+(T<<10&4294967295|T>>>22),T=A+(y^(R|~w))+I[10]+4293915773&4294967295,A=R+(T<<15&4294967295|T>>>17),T=w+(R^(A|~y))+I[1]+2240044497&4294967295,w=A+(T<<21&4294967295|T>>>11),T=y+(A^(w|~R))+I[8]+1873313359&4294967295,y=w+(T<<6&4294967295|T>>>26),T=R+(w^(y|~A))+I[15]+4264355552&4294967295,R=y+(T<<10&4294967295|T>>>22),T=A+(y^(R|~w))+I[6]+2734768916&4294967295,A=R+(T<<15&4294967295|T>>>17),T=w+(R^(A|~y))+I[13]+1309151649&4294967295,w=A+(T<<21&4294967295|T>>>11),T=y+(A^(w|~R))+I[4]+4149444226&4294967295,y=w+(T<<6&4294967295|T>>>26),T=R+(w^(y|~A))+I[11]+3174756917&4294967295,R=y+(T<<10&4294967295|T>>>22),T=A+(y^(R|~w))+I[2]+718787259&4294967295,A=R+(T<<15&4294967295|T>>>17),T=w+(R^(A|~y))+I[9]+3951481745&4294967295,v.g[0]=v.g[0]+y&4294967295,v.g[1]=v.g[1]+(A+(T<<21&4294967295|T>>>11))&4294967295,v.g[2]=v.g[2]+A&4294967295,v.g[3]=v.g[3]+R&4294967295}r.prototype.v=function(v,y){y===void 0&&(y=v.length);const w=y-this.blockSize,I=this.C;let A=this.h,R=0;for(;R<y;){if(A==0)for(;R<=w;)s(this,v,R),R+=this.blockSize;if(typeof v=="string"){for(;R<y;)if(I[A++]=v.charCodeAt(R++),A==this.blockSize){s(this,I),A=0;break}}else for(;R<y;)if(I[A++]=v[R++],A==this.blockSize){s(this,I),A=0;break}}this.h=A,this.o+=y},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var y=1;y<v.length-8;++y)v[y]=0;y=this.o*8;for(var w=v.length-8;w<v.length;++w)v[w]=y&255,y/=256;for(this.v(v),v=Array(16),y=0,w=0;w<4;++w)for(let I=0;I<32;I+=8)v[y++]=this.g[w]>>>I&255;return v};function i(v,y){var w=l;return Object.prototype.hasOwnProperty.call(w,v)?w[v]:w[v]=y(v)}function o(v,y){this.h=y;const w=[];let I=!0;for(let A=v.length-1;A>=0;A--){const R=v[A]|0;I&&R==y||(w[A]=R,I=!1)}this.g=w}var l={};function u(v){return-128<=v&&v<128?i(v,function(y){return new o([y|0],y<0?-1:0)}):new o([v|0],v<0?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return p;if(v<0)return M(h(-v));const y=[];let w=1;for(let I=0;v>=w;I++)y[I]=v/w|0,w*=4294967296;return new o(y,0)}function f(v,y){if(v.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(v.charAt(0)=="-")return M(f(v.substring(1),y));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=h(Math.pow(y,8));let I=p;for(let R=0;R<v.length;R+=8){var A=Math.min(8,v.length-R);const T=parseInt(v.substring(R,R+A),y);A<8?(A=h(Math.pow(y,A)),I=I.j(A).add(h(T))):(I=I.j(w),I=I.add(h(T)))}return I}var p=u(0),_=u(1),x=u(16777216);t=o.prototype,t.m=function(){if(V(this))return-M(this).m();let v=0,y=1;for(let w=0;w<this.g.length;w++){const I=this.i(w);v+=(I>=0?I:4294967296+I)*y,y*=4294967296}return v},t.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(D(this))return"0";if(V(this))return"-"+M(this).toString(v);const y=h(Math.pow(v,6));var w=this;let I="";for(;;){const A=b(w,y).g;w=S(w,A.j(y));let R=((w.g.length>0?w.g[0]:w.h)>>>0).toString(v);if(w=A,D(w))return R+I;for(;R.length<6;)R="0"+R;I=R+I}},t.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function D(v){if(v.h!=0)return!1;for(let y=0;y<v.g.length;y++)if(v.g[y]!=0)return!1;return!0}function V(v){return v.h==-1}t.l=function(v){return v=S(this,v),V(v)?-1:D(v)?0:1};function M(v){const y=v.g.length,w=[];for(let I=0;I<y;I++)w[I]=~v.g[I];return new o(w,~v.h).add(_)}t.abs=function(){return V(this)?M(this):this},t.add=function(v){const y=Math.max(this.g.length,v.g.length),w=[];let I=0;for(let A=0;A<=y;A++){let R=I+(this.i(A)&65535)+(v.i(A)&65535),T=(R>>>16)+(this.i(A)>>>16)+(v.i(A)>>>16);I=T>>>16,R&=65535,T&=65535,w[A]=T<<16|R}return new o(w,w[w.length-1]&-2147483648?-1:0)};function S(v,y){return v.add(M(y))}t.j=function(v){if(D(this)||D(v))return p;if(V(this))return V(v)?M(this).j(M(v)):M(M(this).j(v));if(V(v))return M(this.j(M(v)));if(this.l(x)<0&&v.l(x)<0)return h(this.m()*v.m());const y=this.g.length+v.g.length,w=[];for(var I=0;I<2*y;I++)w[I]=0;for(I=0;I<this.g.length;I++)for(let A=0;A<v.g.length;A++){const R=this.i(I)>>>16,T=this.i(I)&65535,Pe=v.i(A)>>>16,ct=v.i(A)&65535;w[2*I+2*A]+=T*ct,E(w,2*I+2*A),w[2*I+2*A+1]+=R*ct,E(w,2*I+2*A+1),w[2*I+2*A+1]+=T*Pe,E(w,2*I+2*A+1),w[2*I+2*A+2]+=R*Pe,E(w,2*I+2*A+2)}for(v=0;v<y;v++)w[v]=w[2*v+1]<<16|w[2*v];for(v=y;v<2*y;v++)w[v]=0;return new o(w,0)};function E(v,y){for(;(v[y]&65535)!=v[y];)v[y+1]+=v[y]>>>16,v[y]&=65535,y++}function C(v,y){this.g=v,this.h=y}function b(v,y){if(D(y))throw Error("division by zero");if(D(v))return new C(p,p);if(V(v))return y=b(M(v),y),new C(M(y.g),M(y.h));if(V(y))return y=b(v,M(y)),new C(M(y.g),y.h);if(v.g.length>30){if(V(v)||V(y))throw Error("slowDivide_ only works with positive integers.");for(var w=_,I=y;I.l(v)<=0;)w=U(w),I=U(I);var A=B(w,1),R=B(I,1);for(I=B(I,2),w=B(w,2);!D(I);){var T=R.add(I);T.l(v)<=0&&(A=A.add(w),R=T),I=B(I,1),w=B(w,1)}return y=S(v,A.j(y)),new C(A,y)}for(A=p;v.l(y)>=0;){for(w=Math.max(1,Math.floor(v.m()/y.m())),I=Math.ceil(Math.log(w)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),R=h(w),T=R.j(y);V(T)||T.l(v)>0;)w-=I,R=h(w),T=R.j(y);D(R)&&(R=_),A=A.add(R),v=S(v,T)}return new C(A,v)}t.B=function(v){return b(this,v).h},t.and=function(v){const y=Math.max(this.g.length,v.g.length),w=[];for(let I=0;I<y;I++)w[I]=this.i(I)&v.i(I);return new o(w,this.h&v.h)},t.or=function(v){const y=Math.max(this.g.length,v.g.length),w=[];for(let I=0;I<y;I++)w[I]=this.i(I)|v.i(I);return new o(w,this.h|v.h)},t.xor=function(v){const y=Math.max(this.g.length,v.g.length),w=[];for(let I=0;I<y;I++)w[I]=this.i(I)^v.i(I);return new o(w,this.h^v.h)};function U(v){const y=v.g.length+1,w=[];for(let I=0;I<y;I++)w[I]=v.i(I)<<1|v.i(I-1)>>>31;return new o(w,v.h)}function B(v,y){const w=y>>5;y%=32;const I=v.g.length-w,A=[];for(let R=0;R<I;R++)A[R]=y>0?v.i(R+w)>>>y|v.i(R+w+1)<<32-y:v.i(R+w);return new o(A,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,w0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Ir=o}).apply(typeof vg<"u"?vg:typeof self<"u"?self:typeof window<"u"?window:{});var Za=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var E0,io,T0,wl,Jh,I0,S0,A0;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Za=="object"&&Za];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,c){if(c)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var P=a[m];if(!(P in d))break e;d=d[P]}a=a[a.length-1],m=d[a],c=c(m),c!=m&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(c){var d=[],m;for(m in c)Object.prototype.hasOwnProperty.call(c,m)&&d.push([m,c[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function u(a,c,d){return a.call.apply(a.bind,arguments)}function h(a,c,d){return h=u,h.apply(null,arguments)}function f(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function p(a,c){function d(){}d.prototype=c.prototype,a.Z=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(m,P,N){for(var z=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)z[ee-2]=arguments[ee];return c.prototype[P].apply(m,z)}}var _=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function x(a){const c=a.length;if(c>0){const d=Array(c);for(let m=0;m<c;m++)d[m]=a[m];return d}return[]}function D(a,c){for(let m=1;m<arguments.length;m++){const P=arguments[m];var d=typeof P;if(d=d!="object"?d:P?Array.isArray(P)?"array":d:"null",d=="array"||d=="object"&&typeof P.length=="number"){d=a.length||0;const N=P.length||0;a.length=d+N;for(let z=0;z<N;z++)a[d+z]=P[z]}else a.push(P)}}class V{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function M(a){o.setTimeout(()=>{throw a},0)}function S(){var a=v;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class E{constructor(){this.h=this.g=null}add(c,d){const m=C.get();m.set(c,d),this.h?this.h.next=m:this.g=m,this.h=m}}var C=new V(()=>new b,a=>a.reset());class b{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let U,B=!1,v=new E,y=()=>{const a=Promise.resolve(void 0);U=()=>{a.then(w)}};function w(){for(var a;a=S();){try{a.h.call(a.g)}catch(d){M(d)}var c=C;c.j(a),c.h<100&&(c.h++,a.next=c.g,c.g=a)}B=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,c),o.removeEventListener("test",d,c)}catch{}return a}();function T(a){return/^[\s\xa0]*$/.test(a)}function Pe(a,c){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,c)}p(Pe,A),Pe.prototype.init=function(a,c){const d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget,c||(d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement)),this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Pe.Z.h.call(this)},Pe.prototype.h=function(){Pe.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ct="closure_listenable_"+(Math.random()*1e6|0),wn=0;function Is(a,c,d,m,P){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!m,this.ha=P,this.key=++wn,this.da=this.fa=!1}function $(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Q(a,c,d){for(const m in a)c.call(d,a[m],m,a)}function Z(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function de(a){const c={};for(const d in a)c[d]=a[d];return c}const Te="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Dt(a,c){let d,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(d in m)a[d]=m[d];for(let N=0;N<Te.length;N++)d=Te[N],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function mt(a){this.src=a,this.g={},this.h=0}mt.prototype.add=function(a,c,d,m,P){const N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);const z=St(a,c,m,P);return z>-1?(c=a[z],d||(c.fa=!1)):(c=new Is(c,this.src,N,!!m,P),c.fa=d,a.push(c)),c};function tn(a,c){const d=c.type;if(d in a.g){var m=a.g[d],P=Array.prototype.indexOf.call(m,c,void 0),N;(N=P>=0)&&Array.prototype.splice.call(m,P,1),N&&($(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function St(a,c,d,m){for(let P=0;P<a.length;++P){const N=a[P];if(!N.da&&N.listener==c&&N.capture==!!d&&N.ha==m)return P}return-1}var Bt="closure_lm_"+(Math.random()*1e6|0),Ri={};function Pi(a,c,d,m,P){if(Array.isArray(c)){for(let N=0;N<c.length;N++)Pi(a,c[N],d,m,P);return null}return d=_a(d),a&&a[ct]?a.J(c,d,l(m)?!!m.capture:!1,P):Ku(a,c,d,!1,m,P)}function Ku(a,c,d,m,P,N){if(!c)throw Error("Invalid event type");const z=l(P)?!!P.capture:!!P;let ee=Ni(a);if(ee||(a[Bt]=ee=new mt(a)),d=ee.add(c,d,m,z,N),d.proxy)return d;if(m=pa(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)R||(P=z),P===void 0&&(P=!1),a.addEventListener(c.toString(),m,P);else if(a.attachEvent)a.attachEvent(ga(c.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function pa(){function a(d){return c.call(a.src,a.listener,d)}const c=ya;return a}function ma(a,c,d,m,P){if(Array.isArray(c))for(var N=0;N<c.length;N++)ma(a,c[N],d,m,P);else m=l(m)?!!m.capture:!!m,d=_a(d),a&&a[ct]?(a=a.i,N=String(c).toString(),N in a.g&&(c=a.g[N],d=St(c,d,m,P),d>-1&&($(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete a.g[N],a.h--)))):a&&(a=Ni(a))&&(c=a.g[c.toString()],a=-1,c&&(a=St(c,d,m,P)),(d=a>-1?c[a]:null)&&zn(d))}function zn(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[ct])tn(c.i,a);else{var d=a.type,m=a.proxy;c.removeEventListener?c.removeEventListener(d,m,a.capture):c.detachEvent?c.detachEvent(ga(d),m):c.addListener&&c.removeListener&&c.removeListener(m),(d=Ni(c))?(tn(d,a),d.h==0&&(d.src=null,c[Bt]=null)):$(a)}}}function ga(a){return a in Ri?Ri[a]:Ri[a]="on"+a}function ya(a,c){if(a.da)a=!0;else{c=new Pe(c,this);const d=a.listener,m=a.ha||a.src;a.fa&&zn(a),a=d.call(m,c)}return a}function Ni(a){return a=a[Bt],a instanceof mt?a:null}var Di="__closure_events_fn_"+(Math.random()*1e9>>>0);function _a(a){return typeof a=="function"?a:(a[Di]||(a[Di]=function(c){return a.handleEvent(c)}),a[Di])}function Se(){I.call(this),this.i=new mt(this),this.M=this,this.G=null}p(Se,I),Se.prototype[ct]=!0,Se.prototype.removeEventListener=function(a,c,d,m){ma(this,a,c,d,m)};function Ve(a,c){var d,m=a.G;if(m)for(d=[];m;m=m.G)d.push(m);if(a=a.M,m=c.type||c,typeof c=="string")c=new A(c,a);else if(c instanceof A)c.target=c.target||a;else{var P=c;c=new A(m,a),Dt(c,P)}P=!0;let N,z;if(d)for(z=d.length-1;z>=0;z--)N=c.g=d[z],P=Mr(N,m,!0,c)&&P;if(N=c.g=a,P=Mr(N,m,!0,c)&&P,P=Mr(N,m,!1,c)&&P,d)for(z=0;z<d.length;z++)N=c.g=d[z],P=Mr(N,m,!1,c)&&P}Se.prototype.N=function(){if(Se.Z.N.call(this),this.i){var a=this.i;for(const c in a.g){const d=a.g[c];for(let m=0;m<d.length;m++)$(d[m]);delete a.g[c],a.h--}}this.G=null},Se.prototype.J=function(a,c,d,m){return this.i.add(String(a),c,!1,d,m)},Se.prototype.K=function(a,c,d,m){return this.i.add(String(a),c,!0,d,m)};function Mr(a,c,d,m){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();let P=!0;for(let N=0;N<c.length;++N){const z=c[N];if(z&&!z.da&&z.capture==d){const ee=z.listener,Fe=z.ha||z.src;z.fa&&tn(a.i,z),P=ee.call(Fe,m)!==!1&&P}}return P&&!m.defaultPrevented}function Vi(a,c){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:o.setTimeout(a,c||0)}function Ss(a){a.g=Vi(()=>{a.g=null,a.i&&(a.i=!1,Ss(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class va extends I{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ss(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Bn(a){I.call(this),this.h=a,this.g={}}p(Bn,I);var wa=[];function Ea(a){Q(a.g,function(c,d){this.g.hasOwnProperty(d)&&zn(c)},a),a.g={}}Bn.prototype.N=function(){Bn.Z.N.call(this),Ea(this)},Bn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var bi=o.JSON.stringify,Qu=o.JSON.parse,Ta=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Ia(){}function Sa(){}var ye={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Lr(){A.call(this,"d")}p(Lr,A);function En(){A.call(this,"c")}p(En,A);var nn={},Oi=null;function jr(){return Oi=Oi||new Se}nn.Ia="serverreachability";function Fr(a){A.call(this,nn.Ia,a)}p(Fr,A);function $n(a){const c=jr();Ve(c,new Fr(c))}nn.STAT_EVENT="statevent";function Ur(a,c){A.call(this,nn.STAT_EVENT,a),this.stat=c}p(Ur,A);function He(a){const c=jr();Ve(c,new Ur(c,a))}nn.Ja="timingevent";function Aa(a,c){A.call(this,nn.Ja,a),this.size=c}p(Aa,A);function Hn(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},c)}function Wn(){this.g=!0}Wn.prototype.ua=function(){this.g=!1};function As(a,c,d,m,P,N){a.info(function(){if(a.g)if(N){var z="",ee=N.split("&");for(let pe=0;pe<ee.length;pe++){var Fe=ee[pe].split("=");if(Fe.length>1){const We=Fe[0];Fe=Fe[1];const sn=We.split("_");z=sn.length>=2&&sn[1]=="type"?z+(We+"="+Fe+"&"):z+(We+"=redacted&")}}}else z=null;else z=N;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+c+`
`+d+`
`+z})}function Mi(a,c,d,m,P,N,z){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+c+`
`+d+`
`+N+" "+z})}function qn(a,c,d,m){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+Yu(a,d)+(m?" "+m:"")})}function Xu(a,c){a.info(function(){return"TIMEOUT: "+c})}Wn.prototype.info=function(){};function Yu(a,c){if(!a.g)return c;if(!c)return null;try{const N=JSON.parse(c);if(N){for(a=0;a<N.length;a++)if(Array.isArray(N[a])){var d=N[a];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var P=m[0];if(P!="noop"&&P!="stop"&&P!="close")for(let z=1;z<m.length;z++)m[z]=""}}}}return bi(N)}catch{return c}}var Cs={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},xs={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Gn;function zr(){}p(zr,Ia),zr.prototype.g=function(){return new XMLHttpRequest},Gn=new zr;function Br(a){return encodeURIComponent(String(a))}function k(a){var c=1;a=a.split(":");const d=[];for(;c>0&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function F(a,c,d,m){this.j=a,this.i=c,this.l=d,this.S=m||1,this.V=new Bn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ue}function ue(){this.i=null,this.g="",this.h=!1}var ne={},ce={};function gt(a,c,d){a.M=1,a.A=Ca(rn(c)),a.u=d,a.R=!0,yt(a,null)}function yt(a,c){a.F=Date.now(),ks(a),a.B=rn(a.A);var d=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),cp(d.i,"t",m),a.C=0,d=a.j.L,a.h=new ue,a.g=kp(a.j,d?c:null,!a.u),a.P>0&&(a.O=new va(h(a.Y,a,a.g),a.P)),c=a.V,d=a.g,m=a.ba;var P="readystatechange";Array.isArray(P)||(P&&(wa[0]=P.toString()),P=wa);for(let N=0;N<P.length;N++){const z=Pi(d,P[N],m||c.handleEvent,!1,c.h||c);if(!z)break;c.g[z.key]=z}c=a.J?de(a.J):{},a.u?(a.v||(a.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,c)):(a.v="GET",a.g.ea(a.B,a.v,null,c)),$n(),As(a.i,a.v,a.B,a.l,a.S,a.u)}F.prototype.ba=function(a){a=a.target;const c=this.O;c&&Yn(a)==3?c.j():this.Y(a)},F.prototype.Y=function(a){try{if(a==this.g)e:{const ee=Yn(this.g),Fe=this.g.ya(),pe=this.g.ca();if(!(ee<3)&&(ee!=3||this.g&&(this.h.h||this.g.la()||yp(this.g)))){this.K||ee!=4||Fe==7||(Fe==8||pe<=0?$n(3):$n(2)),Ju(this);var c=this.g.ca();this.X=c;var d=$r(this);if(this.o=c==200,Mi(this.i,this.v,this.B,this.l,this.S,ee,c),this.o){if(this.U&&!this.L){t:{if(this.g){var m,P=this.g;if((m=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(m)){var N=m;break t}}N=null}if(a=N)qn(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Zu(this,a);else{this.o=!1,this.m=3,He(12),Wr(this),Li(this);break e}}if(this.R){a=!0;let We;for(;!this.K&&this.C<d.length;)if(We=Hr(this,d),We==ce){ee==4&&(this.m=4,He(14),a=!1),qn(this.i,this.l,null,"[Incomplete Response]");break}else if(We==ne){this.m=4,He(15),qn(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else qn(this.i,this.l,We,null),Zu(this,We);if(Kn(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ee!=4||d.length!=0||this.h.h||(this.m=1,He(16),a=!1),this.o=this.o&&a,!a)qn(this.i,this.l,d,"[Invalid Chunked Response]"),Wr(this),Li(this);else if(d.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),ac(z),z.P=!0,He(11))}}else qn(this.i,this.l,d,null),Zu(this,d);ee==4&&Wr(this),this.o&&!this.K&&(ee==4?Sp(this.j,this):(this.o=!1,ks(this)))}else aE(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,He(12)):(this.m=0,He(13)),Wr(this),Li(this)}}}catch{}finally{}};function $r(a){if(!Kn(a))return a.g.la();const c=yp(a.g);if(c==="")return"";let d="";const m=c.length,P=Yn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Wr(a),Li(a),"";a.h.i=new o.TextDecoder}for(let N=0;N<m;N++)a.h.h=!0,d+=a.h.i.decode(c[N],{stream:!(P&&N==m-1)});return c.length=0,a.h.g+=d,a.C=0,a.h.g}function Kn(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Hr(a,c){var d=a.C,m=c.indexOf(`
`,d);return m==-1?ce:(d=Number(c.substring(d,m)),isNaN(d)?ne:(m+=1,m+d>c.length?ce:(c=c.slice(m,m+d),a.C=m+d,c)))}F.prototype.cancel=function(){this.K=!0,Wr(this)};function ks(a){a.T=Date.now()+a.H,Zf(a,a.H)}function Zf(a,c){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Hn(h(a.aa,a),c)}function Ju(a){a.D&&(o.clearTimeout(a.D),a.D=null)}F.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Xu(this.i,this.B),this.M!=2&&($n(),He(17)),Wr(this),this.m=2,Li(this)):Zf(this,this.T-a)};function Li(a){a.j.I==0||a.K||Sp(a.j,a)}function Wr(a){Ju(a);var c=a.O;c&&typeof c.dispose=="function"&&c.dispose(),a.O=null,Ea(a.V),a.g&&(c=a.g,a.g=null,c.abort(),c.dispose())}function Zu(a,c){try{var d=a.j;if(d.I!=0&&(d.g==a||ec(d.h,a))){if(!a.L&&ec(d.h,a)&&d.I==3){try{var m=d.Ba.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Na(d),Ra(d);else break e;oc(d),He(18)}}else d.xa=P[1],0<d.xa-d.K&&P[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Hn(h(d.Va,d),6e3));np(d.h)<=1&&d.ta&&(d.ta=void 0)}else Gr(d,11)}else if((a.L||d.g==a)&&Na(d),!T(c))for(P=d.Ba.g.parse(c),c=0;c<P.length;c++){let pe=P[c];const We=pe[0];if(!(We<=d.K))if(d.K=We,pe=pe[1],d.I==2)if(pe[0]=="c"){d.M=pe[1],d.ba=pe[2];const sn=pe[3];sn!=null&&(d.ka=sn,d.j.info("VER="+d.ka));const Kr=pe[4];Kr!=null&&(d.za=Kr,d.j.info("SVER="+d.za));const Jn=pe[5];Jn!=null&&typeof Jn=="number"&&Jn>0&&(m=1.5*Jn,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Zn=a.g;if(Zn){const Va=Zn.g?Zn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Va){var N=m.h;N.g||Va.indexOf("spdy")==-1&&Va.indexOf("quic")==-1&&Va.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(tc(N,N.h),N.h=null))}if(m.G){const lc=Zn.g?Zn.g.getResponseHeader("X-HTTP-Session-Id"):null;lc&&(m.wa=lc,_e(m.J,m.G,lc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var z=a;if(m.na=xp(m,m.L?m.ba:null,m.W),z.L){rp(m.h,z);var ee=z,Fe=m.O;Fe&&(ee.H=Fe),ee.D&&(Ju(ee),ks(ee)),m.g=z}else Tp(m);d.i.length>0&&Pa(d)}else pe[0]!="stop"&&pe[0]!="close"||Gr(d,7);else d.I==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?Gr(d,7):ic(d):pe[0]!="noop"&&d.l&&d.l.qa(pe),d.A=0)}}$n(4)}catch{}}var Kw=class{constructor(a,c){this.g=a,this.map=c}};function ep(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function tp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function np(a){return a.h?1:a.g?a.g.size:0}function ec(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function tc(a,c){a.g?a.g.add(c):a.h=c}function rp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}ep.prototype.cancel=function(){if(this.i=sp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function sp(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.G);return c}return x(a.i)}var ip=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qw(a,c){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const m=a[d].indexOf("=");let P,N=null;m>=0?(P=a[d].substring(0,m),N=a[d].substring(m+1)):P=a[d],c(P,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Qn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;a instanceof Qn?(this.l=a.l,ji(this,a.j),this.o=a.o,this.g=a.g,Fi(this,a.u),this.h=a.h,nc(this,hp(a.i)),this.m=a.m):a&&(c=String(a).match(ip))?(this.l=!1,ji(this,c[1]||"",!0),this.o=Ui(c[2]||""),this.g=Ui(c[3]||"",!0),Fi(this,c[4]),this.h=Ui(c[5]||"",!0),nc(this,c[6]||"",!0),this.m=Ui(c[7]||"")):(this.l=!1,this.i=new Bi(null,this.l))}Qn.prototype.toString=function(){const a=[];var c=this.j;c&&a.push(zi(c,op,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(zi(c,op,!0),"@"),a.push(Br(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(zi(d,d.charAt(0)=="/"?Jw:Yw,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",zi(d,eE)),a.join("")},Qn.prototype.resolve=function(a){const c=rn(this);let d=!!a.j;d?ji(c,a.j):d=!!a.o,d?c.o=a.o:d=!!a.g,d?c.g=a.g:d=a.u!=null;var m=a.h;if(d)Fi(c,a.u);else if(d=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var P=c.h.lastIndexOf("/");P!=-1&&(m=c.h.slice(0,P+1)+m)}if(P=m,P==".."||P==".")m="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){m=P.lastIndexOf("/",0)==0,P=P.split("/");const N=[];for(let z=0;z<P.length;){const ee=P[z++];ee=="."?m&&z==P.length&&N.push(""):ee==".."?((N.length>1||N.length==1&&N[0]!="")&&N.pop(),m&&z==P.length&&N.push("")):(N.push(ee),m=!0)}m=N.join("/")}else m=P}return d?c.h=m:d=a.i.toString()!=="",d?nc(c,hp(a.i)):d=!!a.m,d&&(c.m=a.m),c};function rn(a){return new Qn(a)}function ji(a,c,d){a.j=d?Ui(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Fi(a,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);a.u=c}else a.u=null}function nc(a,c,d){c instanceof Bi?(a.i=c,tE(a.i,a.l)):(d||(c=zi(c,Zw)),a.i=new Bi(c,a.l))}function _e(a,c,d){a.i.set(c,d)}function Ca(a){return _e(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ui(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function zi(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,Xw),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Xw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var op=/[#\/\?@]/g,Yw=/[#\?:]/g,Jw=/[#\?]/g,Zw=/[#\?@]/g,eE=/#/g;function Bi(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function qr(a){a.g||(a.g=new Map,a.h=0,a.i&&Qw(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=Bi.prototype,t.add=function(a,c){qr(this),this.i=null,a=Rs(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function ap(a,c){qr(a),c=Rs(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function lp(a,c){return qr(a),c=Rs(a,c),a.g.has(c)}t.forEach=function(a,c){qr(this),this.g.forEach(function(d,m){d.forEach(function(P){a.call(c,P,m,this)},this)},this)};function up(a,c){qr(a);let d=[];if(typeof c=="string")lp(a,c)&&(d=d.concat(a.g.get(Rs(a,c))));else for(a=Array.from(a.g.values()),c=0;c<a.length;c++)d=d.concat(a[c]);return d}t.set=function(a,c){return qr(this),this.i=null,a=Rs(this,a),lp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=up(this,a),a.length>0?String(a[0]):c):c};function cp(a,c,d){ap(a,c),d.length>0&&(a.i=null,a.g.set(Rs(a,c),x(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(let m=0;m<c.length;m++){var d=c[m];const P=Br(d);d=up(this,d);for(let N=0;N<d.length;N++){let z=P;d[N]!==""&&(z+="="+Br(d[N])),a.push(z)}}return this.i=a.join("&")};function hp(a){const c=new Bi;return c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),c}function Rs(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function tE(a,c){c&&!a.j&&(qr(a),a.i=null,a.g.forEach(function(d,m){const P=m.toLowerCase();m!=P&&(ap(this,m),cp(this,P,d))},a)),a.j=c}function nE(a,c){const d=new Wn;if(o.Image){const m=new Image;m.onload=f(Xn,d,"TestLoadImage: loaded",!0,c,m),m.onerror=f(Xn,d,"TestLoadImage: error",!1,c,m),m.onabort=f(Xn,d,"TestLoadImage: abort",!1,c,m),m.ontimeout=f(Xn,d,"TestLoadImage: timeout",!1,c,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else c(!1)}function rE(a,c){const d=new Wn,m=new AbortController,P=setTimeout(()=>{m.abort(),Xn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:m.signal}).then(N=>{clearTimeout(P),N.ok?Xn(d,"TestPingServer: ok",!0,c):Xn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),Xn(d,"TestPingServer: error",!1,c)})}function Xn(a,c,d,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(d)}catch{}}function sE(){this.g=new Ta}function rc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(rc,Ia),rc.prototype.g=function(){return new xa(this.i,this.h)};function xa(a,c){Se.call(this),this.H=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(xa,Se),t=xa.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=c,this.readyState=1,Hi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(c.body=a),(this.H||o).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,$i(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Hi(this)),this.g&&(this.readyState=3,Hi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;dp(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function dp(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?$i(this):Hi(this),this.readyState==3&&dp(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,$i(this))},t.Na=function(a){this.g&&(this.response=a,$i(this))},t.ga=function(){this.g&&$i(this)};function $i(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Hi(a)}t.setRequestHeader=function(a,c){this.A.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function Hi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(xa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function fp(a){let c="";return Q(a,function(d,m){c+=m,c+=":",c+=d,c+=`\r
`}),c}function sc(a,c,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=fp(d),typeof a=="string"?d!=null&&Br(d):_e(a,c,d))}function Ne(a){Se.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Ne,Se);var iE=/^https?$/i,oE=["POST","PUT"];t=Ne.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,c,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Gn.g(),this.g.onreadystatechange=_(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(N){pp(this,N);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)d.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const N of m.keys())d.set(N,m.get(N));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),P=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(oE,c,void 0)>=0)||m||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,z]of d)this.g.setRequestHeader(N,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(N){pp(this,N)}};function pp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.o=5,mp(a),ka(a)}function mp(a){a.A||(a.A=!0,Ve(a,"complete"),Ve(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Ve(this,"complete"),Ve(this,"abort"),ka(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ka(this,!0)),Ne.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?gp(this):this.Xa())},t.Xa=function(){gp(this)};function gp(a){if(a.h&&typeof i<"u"){if(a.v&&Yn(a)==4)setTimeout(a.Ca.bind(a),0);else if(Ve(a,"readystatechange"),Yn(a)==4){a.h=!1;try{const N=a.ca();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var m;if(m=N===0){let z=String(a.D).match(ip)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),m=!iE.test(z?z.toLowerCase():"")}d=m}if(d)Ve(a,"complete"),Ve(a,"success");else{a.o=6;try{var P=Yn(a)>2?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.ca()+"]",mp(a)}}finally{ka(a)}}}}function ka(a,c){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,c||Ve(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Yn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Yn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),Qu(c)}};function yp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function aE(a){const c={};a=(a.g&&Yn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(T(a[m]))continue;var d=k(a[m]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=c[P]||[];c[P]=N,N.push(d)}Z(c,function(m){return m.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wi(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function _p(a){this.za=0,this.i=[],this.j=new Wn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Wi("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Wi("baseRetryDelayMs",5e3,a),this.Za=Wi("retryDelaySeedMs",1e4,a),this.Ta=Wi("forwardChannelMaxRetries",2,a),this.va=Wi("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new ep(a&&a.concurrentRequestLimit),this.Ba=new sE,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=_p.prototype,t.ka=8,t.I=1,t.connect=function(a,c,d,m){He(0),this.W=a,this.H=c||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=xp(this,null,this.W),Pa(this)};function ic(a){if(vp(a),a.I==3){var c=a.V++,d=rn(a.J);if(_e(d,"SID",a.M),_e(d,"RID",c),_e(d,"TYPE","terminate"),qi(a,d),c=new F(a,a.j,c),c.M=2,c.A=Ca(rn(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=c.A,d=!0),d||(c.g=kp(c.j,null),c.g.ea(c.A)),c.F=Date.now(),ks(c)}Cp(a)}function Ra(a){a.g&&(ac(a),a.g.cancel(),a.g=null)}function vp(a){Ra(a),a.v&&(o.clearTimeout(a.v),a.v=null),Na(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Pa(a){if(!tp(a.h)&&!a.m){a.m=!0;var c=a.Ea;U||y(),B||(U(),B=!0),v.add(c,a),a.D=0}}function lE(a,c){return np(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=c.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Hn(h(a.Ea,a,c),Ap(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const P=new F(this,this.j,a);let N=this.o;if(this.U&&(N?(N=de(N),Dt(N,this.U)):N=this.U),this.u!==null||this.R||(P.J=N,N=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Ep(this,P,c),d=rn(this.J),_e(d,"RID",a),_e(d,"CVER",22),this.G&&_e(d,"X-HTTP-Session-Id",this.G),qi(this,d),N&&(this.R?c="headers="+Br(fp(N))+"&"+c:this.u&&sc(d,this.u,N)),tc(this.h,P),this.Ra&&_e(d,"TYPE","init"),this.S?(_e(d,"$req",c),_e(d,"SID","null"),P.U=!0,gt(P,d,null)):gt(P,d,c),this.I=2}}else this.I==3&&(a?wp(this,a):this.i.length==0||tp(this.h)||wp(this))};function wp(a,c){var d;c?d=c.l:d=a.V++;const m=rn(a.J);_e(m,"SID",a.M),_e(m,"RID",d),_e(m,"AID",a.K),qi(a,m),a.u&&a.o&&sc(m,a.u,a.o),d=new F(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),c&&(a.i=c.G.concat(a.i)),c=Ep(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),tc(a.h,d),gt(d,m,c)}function qi(a,c){a.H&&Q(a.H,function(d,m){_e(c,m,d)}),a.l&&Q({},function(d,m){_e(c,m,d)})}function Ep(a,c,d){d=Math.min(a.i.length,d);const m=a.l?h(a.l.Ka,a.l,a):null;e:{var P=a.i;let ee=-1;for(;;){const Fe=["count="+d];ee==-1?d>0?(ee=P[0].g,Fe.push("ofs="+ee)):ee=0:Fe.push("ofs="+ee);let pe=!0;for(let We=0;We<d;We++){var N=P[We].g;const sn=P[We].map;if(N-=ee,N<0)ee=Math.max(0,P[We].g-100),pe=!1;else try{N="req"+N+"_"||"";try{var z=sn instanceof Map?sn:Object.entries(sn);for(const[Kr,Jn]of z){let Zn=Jn;l(Jn)&&(Zn=bi(Jn)),Fe.push(N+Kr+"="+encodeURIComponent(Zn))}}catch(Kr){throw Fe.push(N+"type="+encodeURIComponent("_badmap")),Kr}}catch{m&&m(sn)}}if(pe){z=Fe.join("&");break e}}z=void 0}return a=a.i.splice(0,d),c.G=a,z}function Tp(a){if(!a.g&&!a.v){a.Y=1;var c=a.Da;U||y(),B||(U(),B=!0),v.add(c,a),a.A=0}}function oc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Hn(h(a.Da,a),Ap(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Ip(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Hn(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,He(10),Ra(this),Ip(this))};function ac(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Ip(a){a.g=new F(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var c=rn(a.na);_e(c,"RID","rpc"),_e(c,"SID",a.M),_e(c,"AID",a.K),_e(c,"CI",a.F?"0":"1"),!a.F&&a.ia&&_e(c,"TO",a.ia),_e(c,"TYPE","xmlhttp"),qi(a,c),a.u&&a.o&&sc(c,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Ca(rn(c)),d.u=null,d.R=!0,yt(d,a)}t.Va=function(){this.C!=null&&(this.C=null,Ra(this),oc(this),He(19))};function Na(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Sp(a,c){var d=null;if(a.g==c){Na(a),ac(a),a.g=null;var m=2}else if(ec(a.h,c))d=c.G,rp(a.h,c),m=1;else return;if(a.I!=0){if(c.o)if(m==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var P=a.D;m=jr(),Ve(m,new Aa(m,d)),Pa(a)}else Tp(a);else if(P=c.m,P==3||P==0&&c.X>0||!(m==1&&lE(a,c)||m==2&&oc(a)))switch(d&&d.length>0&&(c=a.h,c.i=c.i.concat(d)),P){case 1:Gr(a,5);break;case 4:Gr(a,10);break;case 3:Gr(a,6);break;default:Gr(a,2)}}}function Ap(a,c){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*c}function Gr(a,c){if(a.j.info("Error code "+c),c==2){var d=h(a.bb,a),m=a.Ua;const P=!m;m=new Qn(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ji(m,"https"),Ca(m),P?nE(m.toString(),d):rE(m.toString(),d)}else He(2);a.I=0,a.l&&a.l.pa(c),Cp(a),vp(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),He(2)):(this.j.info("Failed to ping google.com"),He(1))};function Cp(a){if(a.I=0,a.ja=[],a.l){const c=sp(a.h);(c.length!=0||a.i.length!=0)&&(D(a.ja,c),D(a.ja,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.oa()}}function xp(a,c,d){var m=d instanceof Qn?rn(d):new Qn(d);if(m.g!="")c&&(m.g=c+"."+m.g),Fi(m,m.u);else{var P=o.location;m=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;const N=new Qn(null);m&&ji(N,m),c&&(N.g=c),P&&Fi(N,P),d&&(N.h=d),m=N}return d=a.G,c=a.wa,d&&c&&_e(m,d,c),_e(m,"VER",a.ka),qi(a,m),m}function kp(a,c,d){if(c&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Aa&&!a.ma?new Ne(new rc({ab:d})):new Ne(a.ma),c.Fa(a.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Rp(){}t=Rp.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Da(){}Da.prototype.g=function(a,c){return new At(a,c)};function At(a,c){Se.call(this),this.g=new _p(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(a?a["X-WebChannel-Client-Profile"]=c.sa:a={"X-WebChannel-Client-Profile":c.sa}),this.g.U=a,(a=c&&c.Qb)&&!T(a)&&(this.g.u=a),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!T(c)&&(this.g.G=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Ps(this)}p(At,Se),At.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){ic(this.g)},At.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=bi(a),a=d);c.i.push(new Kw(c.Ya++,a)),c.I==3&&Pa(c)},At.prototype.N=function(){this.g.l=null,delete this.j,ic(this.g),delete this.g,At.Z.N.call(this)};function Pp(a){Lr.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}p(Pp,Lr);function Np(){En.call(this),this.status=1}p(Np,En);function Ps(a){this.g=a}p(Ps,Rp),Ps.prototype.ra=function(){Ve(this.g,"a")},Ps.prototype.qa=function(a){Ve(this.g,new Pp(a))},Ps.prototype.pa=function(a){Ve(this.g,new Np)},Ps.prototype.oa=function(){Ve(this.g,"b")},Da.prototype.createWebChannel=Da.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,A0=function(){return new Da},S0=function(){return jr()},I0=nn,Jh={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Cs.NO_ERROR=0,Cs.TIMEOUT=8,Cs.HTTP_ERROR=6,wl=Cs,xs.COMPLETE="complete",T0=xs,Sa.EventType=ye,ye.OPEN="a",ye.CLOSE="b",ye.ERROR="c",ye.MESSAGE="d",Se.prototype.listen=Se.prototype.J,io=Sa,Ne.prototype.listenOnce=Ne.prototype.K,Ne.prototype.getLastError=Ne.prototype.Ha,Ne.prototype.getLastErrorCode=Ne.prototype.ya,Ne.prototype.getStatus=Ne.prototype.ca,Ne.prototype.getResponseJson=Ne.prototype.La,Ne.prototype.getResponseText=Ne.prototype.la,Ne.prototype.send=Ne.prototype.ea,Ne.prototype.setWithCredentials=Ne.prototype.Fa,E0=Ne}).apply(typeof Za<"u"?Za:typeof self<"u"?self:typeof window<"u"?window:{});const wg="@firebase/firestore",Eg="4.9.2";/**
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
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
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
 */let Ai="12.3.0";/**
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
 */const ms=new uf("@firebase/firestore");function Ds(){return ms.logLevel}function H(t,...e){if(ms.logLevel<=se.DEBUG){const n=e.map(Tf);ms.debug(`Firestore (${Ai}): ${t}`,...n)}}function Ln(t,...e){if(ms.logLevel<=se.ERROR){const n=e.map(Tf);ms.error(`Firestore (${Ai}): ${t}`,...n)}}function fi(t,...e){if(ms.logLevel<=se.WARN){const n=e.map(Tf);ms.warn(`Firestore (${Ai}): ${t}`,...n)}}function Tf(t){if(typeof t=="string")return t;try{/**
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
 */function K(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,C0(t,r,n)}function C0(t,e,n){let r=`FIRESTORE (${Ai}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Ln(r),new Error(r)}function he(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||C0(e,s,r)}function J(t,e){return t}/**
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
 */class x0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class HC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class WC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class qC{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){he(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Sr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Sr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Sr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(he(typeof r.accessToken=="string",31837,{l:r}),new x0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string",2055,{h:e}),new it(e)}}class GC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class KC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new GC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Tg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class QC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Kt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){he(this.o===void 0,3512);const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Tg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(he(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Tg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function XC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class If{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=XC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ie(t,e){return t<e?-1:t>e?1:0}function Zh(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Hc(s)===Hc(i)?ie(s,i):Hc(s)?1:-1}return ie(t.length,e.length)}const YC=55296,JC=57343;function Hc(t){const e=t.charCodeAt(0);return e>=YC&&e<=JC}function pi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const Ig="__name__";class ln{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&K(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ln.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ln?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=ln.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ie(e.length,n.length)}static compareSegments(e,n){const r=ln.isNumericId(e),s=ln.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?ln.extractNumericId(e).compare(ln.extractNumericId(n)):Zh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ir.fromString(e.substring(4,e.length-2))}}class Ce extends ln{construct(e,n,r){return new Ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ce(n)}static emptyPath(){return new Ce([])}}const ZC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Je extends ln{construct(e,n,r){return new Je(e,n,r)}static isValidIdentifier(e){return ZC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ig}static keyField(){return new Je([Ig])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new q(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new q(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new q(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Je(n)}static emptyPath(){return new Je([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Ce.fromString(e))}static fromName(e){return new G(Ce.fromString(e).popFirst(5))}static empty(){return new G(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Ce(e.slice()))}}/**
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
 */function ex(t,e,n){if(!n)throw new q(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function tx(t,e,n,r){if(e===!0&&r===!0)throw new q(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Sg(t){if(!G.isDocumentKey(t))throw new q(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function k0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Sf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K(12329,{type:typeof t})}function Wo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Sf(t);throw new q(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function je(t,e){const n={typeString:t};return e&&(n.value=e),n}function ua(t,e){if(!k0(t))throw new q(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new q(L.INVALID_ARGUMENT,n);return!0}/**
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
 */const Ag=-62135596800,Cg=1e6;class we{static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Cg);return new we(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Ag)throw new q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Cg}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:we._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ua(e,we._jsonSchema))return new we(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ag;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}we._jsonSchemaVersion="firestore/timestamp/1.0",we._jsonSchema={type:je("string",we._jsonSchemaVersion),seconds:je("number"),nanoseconds:je("number")};/**
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
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new we(0,0))}static max(){return new Y(new we(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const qo=-1;function nx(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(r===1e9?new we(n+1,0):new we(n,r));return new xr(s,G.empty(),e)}function rx(t){return new xr(t.readTime,t.key,qo)}class xr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new xr(Y.min(),G.empty(),qo)}static max(){return new xr(Y.max(),G.empty(),qo)}}function sx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
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
 */const ix="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ox{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ci(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==ix)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(s=>s?O.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new O((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new O((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function ax(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function xi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Mu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Mu.ce=-1;/**
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
 */const Af=-1;function Lu(t){return t==null}function su(t){return t===0&&1/t==-1/0}function lx(t){return typeof t=="number"&&Number.isInteger(t)&&!su(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const R0="";function ux(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=xg(e)),e=cx(t.get(n),e);return xg(e)}function cx(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case R0:n+="";break;default:n+=i}}return n}function xg(t){return t+R0+""}/**
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
 */function kg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function P0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Re{constructor(e,n){this.comparator=e,this.root=n||Ye.EMPTY}insert(e,n){return new Re(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new el(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new el(this.root,e,this.comparator,!1)}getReverseIterator(){return new el(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new el(this.root,e,this.comparator,!0)}}class el{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ye{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ye.RED,this.left=s??Ye.EMPTY,this.right=i??Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ye(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ye.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw K(27949);return e+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ye(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class $e{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Rg(this.data.getIterator())}getIteratorFrom(e){return new Rg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof $e)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new $e(this.comparator);return n.data=e,n}}class Rg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Xt{constructor(e){this.fields=e,e.sort(Je.comparator)}static empty(){return new Xt([])}unionWith(e){let n=new $e(Je.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return pi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class N0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new N0("Invalid base64 string: "+i):i}}(e);return new tt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const hx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kr(t){if(he(!!t,39018),typeof t=="string"){let e=0;const n=hx.exec(t);if(he(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Rr(t){return typeof t=="string"?tt.fromBase64String(t):tt.fromUint8Array(t)}/**
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
 */const D0="server_timestamp",V0="__type__",b0="__previous_value__",O0="__local_write_time__";function Cf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[V0])==null?void 0:r.stringValue)===D0}function ju(t){const e=t.mapValue.fields[b0];return Cf(e)?ju(e):e}function Go(t){const e=kr(t.mapValue.fields[O0].timestampValue);return new we(e.seconds,e.nanos)}/**
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
 */class dx{constructor(e,n,r,s,i,o,l,u,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const iu="(default)";class Ko{constructor(e,n){this.projectId=e,this.database=n||iu}static empty(){return new Ko("","")}get isDefaultDatabase(){return this.database===iu}isEqual(e){return e instanceof Ko&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const M0="__type__",fx="__max__",tl={mapValue:{}},L0="__vector__",ou="value";function Pr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Cf(t)?4:mx(t)?9007199254740991:px(t)?10:11:K(28295,{value:t})}function _n(t,e){if(t===e)return!0;const n=Pr(t);if(n!==Pr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Go(t).isEqual(Go(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=kr(s.timestampValue),l=kr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Rr(s.bytesValue).isEqual(Rr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return be(s.geoPointValue.latitude)===be(i.geoPointValue.latitude)&&be(s.geoPointValue.longitude)===be(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return be(s.integerValue)===be(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=be(s.doubleValue),l=be(i.doubleValue);return o===l?su(o)===su(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return pi(t.arrayValue.values||[],e.arrayValue.values||[],_n);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(kg(o)!==kg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!_n(o[u],l[u])))return!1;return!0}(t,e);default:return K(52216,{left:t})}}function Qo(t,e){return(t.values||[]).find(n=>_n(n,e))!==void 0}function mi(t,e){if(t===e)return 0;const n=Pr(t),r=Pr(e);if(n!==r)return ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=be(i.integerValue||i.doubleValue),u=be(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Pg(t.timestampValue,e.timestampValue);case 4:return Pg(Go(t),Go(e));case 5:return Zh(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Rr(i),u=Rr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ie(l[h],u[h]);if(f!==0)return f}return ie(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ie(be(i.latitude),be(o.latitude));return l!==0?l:ie(be(i.longitude),be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ng(t.arrayValue,e.arrayValue);case 10:return function(i,o){var _,x,D,V;const l=i.fields||{},u=o.fields||{},h=(_=l[ou])==null?void 0:_.arrayValue,f=(x=u[ou])==null?void 0:x.arrayValue,p=ie(((D=h==null?void 0:h.values)==null?void 0:D.length)||0,((V=f==null?void 0:f.values)==null?void 0:V.length)||0);return p!==0?p:Ng(h,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===tl.mapValue&&o===tl.mapValue)return 0;if(i===tl.mapValue)return 1;if(o===tl.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const _=Zh(u[p],f[p]);if(_!==0)return _;const x=mi(l[u[p]],h[f[p]]);if(x!==0)return x}return ie(u.length,f.length)}(t.mapValue,e.mapValue);default:throw K(23264,{he:n})}}function Pg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=kr(t),r=kr(e),s=ie(n.seconds,r.seconds);return s!==0?s:ie(n.nanos,r.nanos)}function Ng(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=mi(n[s],r[s]);if(i)return i}return ie(n.length,r.length)}function gi(t){return ed(t)}function ed(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=kr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Rr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ed(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ed(n.fields[o])}`;return s+"}"}(t.mapValue):K(61005,{value:t})}function El(t){switch(Pr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ju(t);return e?16+El(e):16;case 5:return 2*t.stringValue.length;case 6:return Rr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+El(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return vs(r.fields,(i,o)=>{s+=i.length+El(o)}),s}(t.mapValue);default:throw K(13486,{value:t})}}function td(t){return!!t&&"integerValue"in t}function xf(t){return!!t&&"arrayValue"in t}function Dg(t){return!!t&&"nullValue"in t}function Vg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Tl(t){return!!t&&"mapValue"in t}function px(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[M0])==null?void 0:r.stringValue)===L0}function Eo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return vs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Eo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Eo(t.arrayValue.values[n]);return e}return{...t}}function mx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===fx}/**
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
 */class Ot{constructor(e){this.value=e}static empty(){return new Ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Tl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Eo(n)}setAll(e){let n=Je.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Eo(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Tl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _n(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Tl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){vs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ot(Eo(this.value))}}function j0(t){const e=[];return vs(t.fields,(n,r)=>{const s=new Je([n]);if(Tl(r)){const i=j0(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Xt(e)}/**
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
 */class at{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new at(e,0,Y.min(),Y.min(),Y.min(),Ot.empty(),0)}static newFoundDocument(e,n,r,s){return new at(e,1,n,Y.min(),r,s,0)}static newNoDocument(e,n){return new at(e,2,n,Y.min(),Y.min(),Ot.empty(),0)}static newUnknownDocument(e,n){return new at(e,3,n,Y.min(),Y.min(),Ot.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof at&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class au{constructor(e,n){this.position=e,this.inclusive=n}}function bg(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=mi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Og(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_n(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class lu{constructor(e,n="asc"){this.field=e,this.dir=n}}function gx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class F0{}class ze extends F0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new _x(e,n,r):n==="array-contains"?new Ex(e,r):n==="in"?new Tx(e,r):n==="not-in"?new Ix(e,r):n==="array-contains-any"?new Sx(e,r):new ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new vx(e,r):new wx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(mi(n,this.value)):n!==null&&Pr(this.value)===Pr(n)&&this.matchesComparison(mi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class vn extends F0{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new vn(e,n)}matches(e){return U0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function U0(t){return t.op==="and"}function z0(t){return yx(t)&&U0(t)}function yx(t){for(const e of t.filters)if(e instanceof vn)return!1;return!0}function nd(t){if(t instanceof ze)return t.field.canonicalString()+t.op.toString()+gi(t.value);if(z0(t))return t.filters.map(e=>nd(e)).join(",");{const e=t.filters.map(n=>nd(n)).join(",");return`${t.op}(${e})`}}function B0(t,e){return t instanceof ze?function(r,s){return s instanceof ze&&r.op===s.op&&r.field.isEqual(s.field)&&_n(r.value,s.value)}(t,e):t instanceof vn?function(r,s){return s instanceof vn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&B0(o,s.filters[l]),!0):!1}(t,e):void K(19439)}function $0(t){return t instanceof ze?function(n){return`${n.field.canonicalString()} ${n.op} ${gi(n.value)}`}(t):t instanceof vn?function(n){return n.op.toString()+" {"+n.getFilters().map($0).join(" ,")+"}"}(t):"Filter"}class _x extends ze{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class vx extends ze{constructor(e,n){super(e,"in",n),this.keys=H0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class wx extends ze{constructor(e,n){super(e,"not-in",n),this.keys=H0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function H0(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class Ex extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return xf(n)&&Qo(n.arrayValue,this.value)}}class Tx extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Qo(this.value.arrayValue,n)}}class Ix extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(Qo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Qo(this.value.arrayValue,n)}}class Sx extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!xf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Qo(this.value.arrayValue,r))}}/**
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
 */class Ax{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Mg(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Ax(t,e,n,r,s,i,o)}function kf(t){const e=J(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>nd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Lu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>gi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>gi(r)).join(",")),e.Te=n}return e.Te}function Rf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!gx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!B0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Og(t.startAt,e.startAt)&&Og(t.endAt,e.endAt)}function rd(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Fu{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Cx(t,e,n,r,s,i,o,l){return new Fu(t,e,n,r,s,i,o,l)}function Pf(t){return new Fu(t)}function Lg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function xx(t){return t.collectionGroup!==null}function To(t){const e=J(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new $e(Je.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new lu(i,r))}),n.has(Je.keyField().canonicalString())||e.Ie.push(new lu(Je.keyField(),r))}return e.Ie}function fn(t){const e=J(t);return e.Ee||(e.Ee=kx(e,To(t))),e.Ee}function kx(t,e){if(t.limitType==="F")return Mg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new lu(s.field,i)});const n=t.endAt?new au(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new au(t.startAt.position,t.startAt.inclusive):null;return Mg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function sd(t,e,n){return new Fu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Uu(t,e){return Rf(fn(t),fn(e))&&t.limitType===e.limitType}function W0(t){return`${kf(fn(t))}|lt:${t.limitType}`}function Vs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>$0(s)).join(", ")}]`),Lu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>gi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>gi(s)).join(",")),`Target(${r})`}(fn(t))}; limitType=${t.limitType})`}function zu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):G.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of To(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const h=bg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,To(r),s)||r.endAt&&!function(o,l,u){const h=bg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,To(r),s))}(t,e)}function Rx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function q0(t){return(e,n)=>{let r=!1;for(const s of To(t)){const i=Px(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Px(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),h=l.data.field(i);return u!==null&&h!==null?mi(u,h):K(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K(19790,{direction:t.dir})}}/**
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
 */class ws{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){vs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return P0(this.inner)}size(){return this.innerSize}}/**
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
 */const Nx=new Re(G.comparator);function jn(){return Nx}const G0=new Re(G.comparator);function oo(...t){let e=G0;for(const n of t)e=e.insert(n.key,n);return e}function K0(t){let e=G0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ns(){return Io()}function Q0(){return Io()}function Io(){return new ws(t=>t.toString(),(t,e)=>t.isEqual(e))}const Dx=new Re(G.comparator),Vx=new $e(G.comparator);function oe(...t){let e=Vx;for(const n of t)e=e.add(n);return e}const bx=new $e(ie);function Ox(){return bx}/**
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
 */function Nf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:su(e)?"-0":e}}function X0(t){return{integerValue:""+t}}function Mx(t,e){return lx(e)?X0(e):Nf(t,e)}/**
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
 */class Bu{constructor(){this._=void 0}}function Lx(t,e,n){return t instanceof uu?function(s,i){const o={fields:{[V0]:{stringValue:D0},[O0]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Cf(i)&&(i=ju(i)),i&&(o.fields[b0]=i),{mapValue:o}}(n,e):t instanceof Xo?J0(t,e):t instanceof Yo?Z0(t,e):function(s,i){const o=Y0(s,i),l=jg(o)+jg(s.Ae);return td(o)&&td(s.Ae)?X0(l):Nf(s.serializer,l)}(t,e)}function jx(t,e,n){return t instanceof Xo?J0(t,e):t instanceof Yo?Z0(t,e):n}function Y0(t,e){return t instanceof cu?function(r){return td(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class uu extends Bu{}class Xo extends Bu{constructor(e){super(),this.elements=e}}function J0(t,e){const n=ew(e);for(const r of t.elements)n.some(s=>_n(s,r))||n.push(r);return{arrayValue:{values:n}}}class Yo extends Bu{constructor(e){super(),this.elements=e}}function Z0(t,e){let n=ew(e);for(const r of t.elements)n=n.filter(s=>!_n(s,r));return{arrayValue:{values:n}}}class cu extends Bu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function jg(t){return be(t.integerValue||t.doubleValue)}function ew(t){return xf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Fx(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Xo&&s instanceof Xo||r instanceof Yo&&s instanceof Yo?pi(r.elements,s.elements,_n):r instanceof cu&&s instanceof cu?_n(r.Ae,s.Ae):r instanceof uu&&s instanceof uu}(t.transform,e.transform)}class Ux{constructor(e,n){this.version=e,this.transformResults=n}}class Pn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pn}static exists(e){return new Pn(void 0,e)}static updateTime(e){return new Pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Il(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class $u{}function tw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new rw(t.key,Pn.none()):new ca(t.key,t.data,Pn.none());{const n=t.data,r=Ot.empty();let s=new $e(Je.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Es(t.key,r,new Xt(s.toArray()),Pn.none())}}function zx(t,e,n){t instanceof ca?function(s,i,o){const l=s.value.clone(),u=Ug(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Es?function(s,i,o){if(!Il(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Ug(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(nw(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function So(t,e,n,r){return t instanceof ca?function(i,o,l,u){if(!Il(i.precondition,o))return l;const h=i.value.clone(),f=zg(i.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Es?function(i,o,l,u){if(!Il(i.precondition,o))return l;const h=zg(i.fieldTransforms,u,o),f=o.data;return f.setAll(nw(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return Il(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Bx(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Y0(r.transform,s||null);i!=null&&(n===null&&(n=Ot.empty()),n.set(r.field,i))}return n||null}function Fg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&pi(r,s,(i,o)=>Fx(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ca extends $u{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Es extends $u{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function nw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ug(t,e,n){const r=new Map;he(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,jx(o,l,n[s]))}return r}function zg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Lx(i,o,e))}return r}class rw extends $u{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $x extends $u{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Hx{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&zx(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=So(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=So(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Q0();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=tw(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&pi(this.mutations,e.mutations,(n,r)=>Fg(n,r))&&pi(this.baseMutations,e.baseMutations,(n,r)=>Fg(n,r))}}class Df{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){he(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return Dx}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Df(e,n,r,s)}}/**
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
 */class Wx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class qx{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Me,ae;function Gx(t){switch(t){case L.OK:return K(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return K(15467,{code:t})}}function sw(t){if(t===void 0)return Ln("GRPC error has no .code"),L.UNKNOWN;switch(t){case Me.OK:return L.OK;case Me.CANCELLED:return L.CANCELLED;case Me.UNKNOWN:return L.UNKNOWN;case Me.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Me.INTERNAL:return L.INTERNAL;case Me.UNAVAILABLE:return L.UNAVAILABLE;case Me.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Me.NOT_FOUND:return L.NOT_FOUND;case Me.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Me.ABORTED:return L.ABORTED;case Me.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Me.DATA_LOSS:return L.DATA_LOSS;default:return K(39323,{code:t})}}(ae=Me||(Me={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Kx(){return new TextEncoder}/**
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
 */const Qx=new Ir([4294967295,4294967295],0);function Bg(t){const e=Kx().encode(t),n=new w0;return n.update(e),new Uint8Array(n.digest())}function $g(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ir([n,r],0),new Ir([s,i],0)]}class Vf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ao(`Invalid padding: ${n}`);if(r<0)throw new ao(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ao(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ao(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Ir.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Ir.fromNumber(r)));return s.compare(Qx)===1&&(s=new Ir([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Bg(e),[r,s]=$g(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Vf(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Bg(e),[r,s]=$g(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ao extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Hu{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ha.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Hu(Y.min(),s,new Re(ie),jn(),oe())}}class ha{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ha(r,n,oe(),oe(),oe())}}/**
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
 */class Sl{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class iw{constructor(e,n){this.targetId=e,this.Ce=n}}class ow{constructor(e,n,r=tt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Hg{constructor(){this.ve=0,this.Fe=Wg(),this.Me=tt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=oe(),n=oe(),r=oe();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:K(38017,{changeType:i})}}),new ha(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Wg()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,he(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Xx{constructor(e){this.Ge=e,this.ze=new Map,this.je=jn(),this.Je=nl(),this.He=nl(),this.Ye=new Re(ie)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:K(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(rd(i))if(r===0){const o=new G(i.path);this.et(n,o,at.newNoDocument(o,Y.min()))}else he(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Rr(r).toUint8Array()}catch(u){if(u instanceof N0)return fi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Vf(o,s,i)}catch(u){return fi(u instanceof ao?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&rd(l.target)){const u=new G(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,at.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=oe();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Hu(e,n,this.Ye,this.je,r);return this.je=jn(),this.Je=nl(),this.He=nl(),this.Ye=new Re(ie),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Hg,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new $e(ie),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new $e(ie),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Hg),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function nl(){return new Re(G.comparator)}function Wg(){return new Re(G.comparator)}const Yx={asc:"ASCENDING",desc:"DESCENDING"},Jx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Zx={and:"AND",or:"OR"};class e2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function id(t,e){return t.useProto3Json||Lu(e)?e:{value:e}}function hu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function aw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function t2(t,e){return hu(t,e.toTimestamp())}function pn(t){return he(!!t,49232),Y.fromTimestamp(function(n){const r=kr(n);return new we(r.seconds,r.nanos)}(t))}function bf(t,e){return od(t,e).canonicalString()}function od(t,e){const n=function(s){return new Ce(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function lw(t){const e=Ce.fromString(t);return he(fw(e),10190,{key:e.toString()}),e}function ad(t,e){return bf(t.databaseId,e.path)}function Wc(t,e){const n=lw(e);if(n.get(1)!==t.databaseId.projectId)throw new q(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(cw(n))}function uw(t,e){return bf(t.databaseId,e)}function n2(t){const e=lw(t);return e.length===4?Ce.emptyPath():cw(e)}function ld(t){return new Ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function cw(t){return he(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function qg(t,e,n){return{name:ad(t,e),fields:n.value.mapValue.fields}}function r2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:K(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(he(f===void 0||typeof f=="string",58123),tt.fromBase64String(f||"")):(he(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),tt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?L.UNKNOWN:sw(h.code);return new q(f,h.message||"")}(o);n=new ow(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Wc(t,r.document.name),i=pn(r.document.updateTime),o=r.document.createTime?pn(r.document.createTime):Y.min(),l=new Ot({mapValue:{fields:r.document.fields}}),u=at.newFoundDocument(s,i,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Sl(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Wc(t,r.document),i=r.readTime?pn(r.readTime):Y.min(),o=at.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Sl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Wc(t,r.document),i=r.removedTargetIds||[];n=new Sl([],i,s,null)}else{if(!("filter"in e))return K(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new qx(s,i),l=r.targetId;n=new iw(l,o)}}return n}function s2(t,e){let n;if(e instanceof ca)n={update:qg(t,e.key,e.value)};else if(e instanceof rw)n={delete:ad(t,e.key)};else if(e instanceof Es)n={update:qg(t,e.key,e.data),updateMask:f2(e.fieldMask)};else{if(!(e instanceof $x))return K(16599,{Vt:e.type});n={verify:ad(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof uu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Xo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Yo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof cu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw K(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:t2(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:K(27497)}(t,e.precondition)),n}function i2(t,e){return t&&t.length>0?(he(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?pn(s.updateTime):pn(i);return o.isEqual(Y.min())&&(o=pn(i)),new Ux(o,s.transformResults||[])}(n,e))):[]}function o2(t,e){return{documents:[uw(t,e.path)]}}function a2(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=uw(t,s);const i=function(h){if(h.length!==0)return dw(vn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(_){return{field:bs(_.field),direction:c2(_.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=id(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:s}}function l2(t){let e=n2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){he(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const _=hw(p);return _ instanceof vn&&z0(_)?_.getFilters():[_]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(_=>function(D){return new lu(Os(D.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(_))}(n.orderBy));let l=null;n.limit&&(l=function(p){let _;return _=typeof p=="object"?p.value:p,Lu(_)?null:_}(n.limit));let u=null;n.startAt&&(u=function(p){const _=!!p.before,x=p.values||[];return new au(x,_)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const _=!p.before,x=p.values||[];return new au(x,_)}(n.endAt)),Cx(e,s,o,i,l,"F",u,h)}function u2(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function hw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Os(n.unaryFilter.field);return ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Os(n.unaryFilter.field);return ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Os(n.unaryFilter.field);return ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Os(n.unaryFilter.field);return ze.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}}(t):t.fieldFilter!==void 0?function(n){return ze.create(Os(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return vn.create(n.compositeFilter.filters.map(r=>hw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return K(1026)}}(n.compositeFilter.op))}(t):K(30097,{filter:t})}function c2(t){return Yx[t]}function h2(t){return Jx[t]}function d2(t){return Zx[t]}function bs(t){return{fieldPath:t.canonicalString()}}function Os(t){return Je.fromServerFormat(t.fieldPath)}function dw(t){return t instanceof ze?function(n){if(n.op==="=="){if(Vg(n.value))return{unaryFilter:{field:bs(n.field),op:"IS_NAN"}};if(Dg(n.value))return{unaryFilter:{field:bs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Vg(n.value))return{unaryFilter:{field:bs(n.field),op:"IS_NOT_NAN"}};if(Dg(n.value))return{unaryFilter:{field:bs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bs(n.field),op:h2(n.op),value:n.value}}}(t):t instanceof vn?function(n){const r=n.getFilters().map(s=>dw(s));return r.length===1?r[0]:{compositeFilter:{op:d2(n.op),filters:r}}}(t):K(54877,{filter:t})}function f2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function fw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class hr{constructor(e,n,r,s,i=Y.min(),o=Y.min(),l=tt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new hr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class p2{constructor(e){this.yt=e}}function m2(t){const e=l2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?sd(e,e.limit,"L"):e}/**
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
 */class g2{constructor(){this.Cn=new y2}addToCollectionParentIndex(e,n){return this.Cn.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(xr.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(xr.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class y2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new $e(Ce.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new $e(Ce.comparator)).toArray()}}/**
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
 */const Gg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},pw=41943040;class _t{static withCacheSize(e){return new _t(e,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */_t.DEFAULT_COLLECTION_PERCENTILE=10,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_t.DEFAULT=new _t(pw,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_t.DISABLED=new _t(-1,0,0);/**
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
 */class yi{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new yi(0)}static cr(){return new yi(-1)}}/**
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
 */const Kg="LruGarbageCollector",_2=1048576;function Qg([t,e],[n,r]){const s=ie(t,n);return s===0?ie(e,r):s}class v2{constructor(e){this.Ir=e,this.buffer=new $e(Qg),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Qg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class w2{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){H(Kg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){xi(n)?H(Kg,"Ignoring IndexedDB error during garbage collection: ",n):await Ci(n)}await this.Vr(3e5)})}}class E2{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return O.resolve(Mu.ce);const r=new v2(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(Gg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Gg):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Ds()<=se.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function T2(t,e){return new E2(t,e)}/**
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
 */class I2{constructor(){this.changes=new ws(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,at.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class S2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class A2{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&So(r.mutation,s,Xt.empty(),we.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const s=ns();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=oo();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ns();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=jn();const o=Io(),l=function(){return Io()}();return n.forEach((u,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Es)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),So(f.mutation,h,f.mutation.getFieldMask(),we.now())):o.set(h.key,Xt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>l.set(h,new S2(f,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Io();let s=new Re((o,l)=>o-l),i=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Xt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(s.get(l.batchId)||oe()).add(u);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=Q0();f.forEach(_=>{if(!i.has(_)){const x=tw(n.get(_),r.get(_));x!==null&&p.set(_,x),i=i.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):xx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):O.resolve(ns());let l=qo,u=i;return o.next(h=>O.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?O.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{u=u.insert(f,_)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,oe())).next(f=>({batchId:l,changes:K0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let s=oo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=oo();return this.indexManager.getCollectionParents(e,i).next(l=>O.forEach(l,u=>{const h=function(p,_){return new Fu(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,_)=>{o=o.insert(p,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,at.newInvalidDocument(f)))});let l=oo();return o.forEach((u,h)=>{const f=i.get(u);f!==void 0&&So(f.mutation,h,Xt.empty(),we.now()),zu(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class C2{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return O.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:pn(s.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:m2(s.bundledQuery),readTime:pn(s.readTime)}}(n)),O.resolve()}}/**
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
 */class x2{constructor(){this.overlays=new Re(G.comparator),this.qr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ns();return O.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const s=ns(),i=n.length+1,o=new G(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return O.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Re((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=ns(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=ns(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return O.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Wx(n,r));let i=this.qr.get(n);i===void 0&&(i=oe(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
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
 */class k2{constructor(){this.sessionToken=tt.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
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
 */class Of{constructor(){this.Qr=new $e(qe.$r),this.Ur=new $e(qe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new qe(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new qe(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new G(new Ce([])),r=new qe(n,e),s=new qe(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new G(new Ce([])),r=new qe(n,e),s=new qe(n,e+1);let i=oe();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new qe(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class qe{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return G.comparator(e.key,n.key)||ie(e.Yr,n.Yr)}static Kr(e,n){return ie(e.Yr,n.Yr)||G.comparator(e.key,n.key)}}/**
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
 */class R2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new $e(qe.$r)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Hx(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Zr=this.Zr.add(new qe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return O.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?Af:this.tr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new qe(n,0),s=new qe(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const l=this.Xr(o.Yr);i.push(l)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new $e(ie);return n.forEach(s=>{const i=new qe(s,0),o=new qe(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],l=>{r=r.add(l.Yr)})}),O.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;G.isDocumentKey(i)||(i=i.child(""));const o=new qe(new G(i),0);let l=new $e(ie);return this.Zr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.Yr)),!0)},o),O.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){he(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return O.forEach(n.mutations,s=>{const i=new qe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new qe(n,0),s=this.Zr.firstAfterOrEqual(r);return O.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class P2{constructor(e){this.ri=e,this.docs=function(){return new Re(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():at.newInvalidDocument(n))}getEntries(e,n){let r=jn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():at.newInvalidDocument(s))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=jn();const o=n.path,l=new G(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||sx(rx(f),r)<=0||(s.has(f.key)||zu(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return O.resolve(i)}getAllFromCollectionGroup(e,n,r,s){K(9500)}ii(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new N2(this)}getSize(e){return O.resolve(this.size)}}class N2 extends I2{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class D2{constructor(e){this.persistence=e,this.si=new ws(n=>kf(n),Rf),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.oi=0,this._i=new Of,this.targetCount=0,this.ai=yi.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),O.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new yi(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Pr(n),O.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),O.waitFor(i).next(()=>s)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this._i.containsKey(n))}}/**
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
 */class mw{constructor(e,n){this.ui={},this.overlays={},this.ci=new Mu(0),this.li=!1,this.li=!0,this.hi=new k2,this.referenceDelegate=e(this),this.Pi=new D2(this),this.indexManager=new g2,this.remoteDocumentCache=function(s){return new P2(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new p2(n),this.Ii=new C2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new x2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new R2(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const s=new V2(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return O.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class V2 extends ox{constructor(e){super(),this.currentSequenceNumber=e}}class Mf{constructor(e){this.persistence=e,this.Ri=new Of,this.Vi=null}static mi(e){return new Mf(e)}get fi(){if(this.Vi)return this.Vi;throw K(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),O.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.fi,r=>{const s=G.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,Y.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return O.or([()=>O.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class du{constructor(e,n){this.persistence=e,this.pi=new ws(r=>ux(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=T2(this,n)}static mi(e,n){return new du(e,n)}Ei(){}di(e){return O.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return O.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?O.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,i.removeEntry(o,Y.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),O.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),O.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=El(e.data.value)),n}br(e,n,r){return O.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return O.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Lf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=oe(),s=oe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Lf(e,n.fromCache,r,s)}}/**
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
 */class b2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class O2{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return II()?8:ax(ut())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new b2;return this.Ss(e,n,o).next(l=>{if(i.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(Ds()<=se.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Vs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),O.resolve()):(Ds()<=se.DEBUG&&H("QueryEngine","Query:",Vs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Ds()<=se.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Vs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,fn(n))):O.resolve())}ys(e,n){if(Lg(n))return O.resolve(null);let r=fn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=sd(n,null,"F"),r=fn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=oe(...i);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ds(n,l);return this.Cs(n,h,o,u.readTime)?this.ys(e,sd(n,null,"F")):this.vs(e,h,n,u)}))})))}ws(e,n,r,s){return Lg(n)||s.isEqual(Y.min())?O.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?O.resolve(null):(Ds()<=se.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Vs(n)),this.vs(e,o,n,nx(s,qo)).next(l=>l))})}Ds(e,n){let r=new $e(q0(e));return n.forEach((s,i)=>{zu(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return Ds()<=se.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Vs(n)),this.ps.getDocumentsMatchingQuery(e,n,xr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const jf="LocalStore",M2=3e8;class L2{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Re(ie),this.xs=new ws(i=>kf(i),Rf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new A2(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function j2(t,e,n,r){return new L2(t,e,n,r)}async function gw(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=oe();for(const h of s){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ls:h,removedBatchIds:o,addedBatchIds:l}))})})}function F2(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,_=p.keys();let x=O.resolve();return _.forEach(D=>{x=x.next(()=>f.getEntry(u,D)).next(V=>{const M=h.docVersions.get(D);he(M!==null,48541),V.version.compareTo(M)<0&&(p.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),f.addEntry(V)))})}),x.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=oe();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function yw(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function U2(t,e){const n=J(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const l=[];e.targetChanges.forEach((f,p)=>{const _=s.get(p);if(!_)return;l.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p)));let x=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?x=x.withResumeToken(tt.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(f.resumeToken,r)),s=s.insert(p,x),function(V,M,S){return V.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=M2?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(_,x,f)&&l.push(n.Pi.updateTargetData(i,x))});let u=jn(),h=oe();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(z2(i,o,e.documentUpdates).next(f=>{u=f.ks,h=f.qs})),!r.isEqual(Y.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next(p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return O.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.Ms=s,i))}function z2(t,e,n){let r=oe(),s=oe();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=jn();return n.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H(jf,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{ks:o,qs:s}})}function B2(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Af),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function $2(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,O.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new hr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function ud(t,e,n){const r=J(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!xi(o))throw o;H(jf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Xg(t,e,n){const r=J(t);let s=Y.min(),i=oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=J(u),_=p.xs.get(f);return _!==void 0?O.resolve(p.Ms.get(_)):p.Pi.getTargetData(h,f)}(r,o,fn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:Y.min(),n?i:oe())).next(l=>(H2(r,Rx(e),l),{documents:l,Qs:i})))}function H2(t,e,n){let r=t.Os.get(e)||Y.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class Yg{constructor(){this.activeTargetIds=Ox()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class W2{constructor(){this.Mo=new Yg,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Yg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class q2{Oo(e){}shutdown(){}}/**
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
 */const Jg="ConnectivityMonitor";class Zg{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){H(Jg,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){H(Jg,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let rl=null;function cd(){return rl===null?rl=function(){return 268435456+Math.round(2147483648*Math.random())}():rl++,"0x"+rl.toString(16)}/**
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
 */const qc="RestConnection",G2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class K2{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===iu?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=cd(),l=this.zo(e,n.toUriEncodedString());H(qc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:h}=new URL(l),f=Ti(h);return this.Jo(e,l,u,r,f).then(p=>(H(qc,`Received RPC '${e}' ${o}: `,p),p),p=>{throw fi(qc,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ai}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=G2[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class Q2{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const st="WebChannelConnection";class X2 extends K2{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=cd();return new Promise((l,u)=>{const h=new E0;h.setWithCredentials(!0),h.listenOnce(T0.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case wl.NO_ERROR:const p=h.getResponseJson();H(st,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case wl.TIMEOUT:H(st,`RPC '${e}' ${o} timed out`),u(new q(L.DEADLINE_EXCEEDED,"Request time out"));break;case wl.HTTP_ERROR:const _=h.getStatus();if(H(st,`RPC '${e}' ${o} failed with status:`,_,"response text:",h.getResponseText()),_>0){let x=h.getResponseJson();Array.isArray(x)&&(x=x[0]);const D=x==null?void 0:x.error;if(D&&D.status&&D.message){const V=function(S){const E=S.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(E)>=0?E:L.UNKNOWN}(D.status);u(new q(V,D.message))}else u(new q(L.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new q(L.UNAVAILABLE,"Connection failed."));break;default:K(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{H(st,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);H(st,`RPC '${e}' ${o} sending request:`,s),h.send(n,"POST",f,r,15)})}T_(e,n,r){const s=cd(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=A0(),l=S0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=i.join("");H(st,`Creating RPC '${e}' stream ${s}: ${f}`,u);const p=o.createWebChannel(f,u);this.I_(p);let _=!1,x=!1;const D=new Q2({Yo:M=>{x?H(st,`Not sending because RPC '${e}' stream ${s} is closed:`,M):(_||(H(st,`Opening RPC '${e}' stream ${s} transport.`),p.open(),_=!0),H(st,`RPC '${e}' stream ${s} sending:`,M),p.send(M))},Zo:()=>p.close()}),V=(M,S,E)=>{M.listen(S,C=>{try{E(C)}catch(b){setTimeout(()=>{throw b},0)}})};return V(p,io.EventType.OPEN,()=>{x||(H(st,`RPC '${e}' stream ${s} transport opened.`),D.o_())}),V(p,io.EventType.CLOSE,()=>{x||(x=!0,H(st,`RPC '${e}' stream ${s} transport closed`),D.a_(),this.E_(p))}),V(p,io.EventType.ERROR,M=>{x||(x=!0,fi(st,`RPC '${e}' stream ${s} transport errored. Name:`,M.name,"Message:",M.message),D.a_(new q(L.UNAVAILABLE,"The operation could not be completed")))}),V(p,io.EventType.MESSAGE,M=>{var S;if(!x){const E=M.data[0];he(!!E,16349);const C=E,b=(C==null?void 0:C.error)||((S=C[0])==null?void 0:S.error);if(b){H(st,`RPC '${e}' stream ${s} received error:`,b);const U=b.status;let B=function(w){const I=Me[w];if(I!==void 0)return sw(I)}(U),v=b.message;B===void 0&&(B=L.INTERNAL,v="Unknown error status: "+U+" with message "+b.message),x=!0,D.a_(new q(B,v)),p.close()}else H(st,`RPC '${e}' stream ${s} received:`,E),D.u_(E)}}),V(l,I0.STAT_EVENT,M=>{M.stat===Jh.PROXY?H(st,`RPC '${e}' stream ${s} detected buffering proxy`):M.stat===Jh.NOPROXY&&H(st,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.__()},0),D}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Gc(){return typeof document<"u"?document:null}/**
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
 */function Wu(t){return new e2(t,!0)}/**
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
 */class _w{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const ey="PersistentStream";class vw{constructor(e,n,r,s,i,o,l,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new _w(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Ln(n.toString()),Ln("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new q(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return H(ey,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(H(ey,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Y2 extends vw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=r2(this.serializer,e),r=function(i){if(!("targetChange"in i))return Y.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?pn(o.readTime):Y.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=ld(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=rd(u)?{documents:o2(i,u)}:{query:a2(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=aw(i,o.resumeToken);const h=id(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=hu(i,o.snapshotVersion.toTimestamp());const h=id(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=u2(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=ld(this.serializer),n.removeTarget=e,this.q_(n)}}class J2 extends vw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return he(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,he(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){he(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=i2(e.writeResults,e.commitTime),r=pn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=ld(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>s2(this.serializer,r))};this.q_(n)}}/**
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
 */class Z2{}class ek extends Z2{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new q(L.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,od(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(L.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,od(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(L.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class tk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */const gs="RemoteStore";class nk{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Ts(this)&&(H(gs,"Restarting streams for network reachability change."),await async function(u){const h=J(u);h.Ea.add(4),await da(h),h.Ra.set("Unknown"),h.Ea.delete(4),await qu(h)}(this))})}),this.Ra=new tk(r,s)}}async function qu(t){if(Ts(t))for(const e of t.da)await e(!0)}async function da(t){for(const e of t.da)await e(!1)}function ww(t,e){const n=J(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Bf(n)?zf(n):ki(n).O_()&&Uf(n,e))}function Ff(t,e){const n=J(t),r=ki(n);n.Ia.delete(e),r.O_()&&Ew(n,e),n.Ia.size===0&&(r.O_()?r.L_():Ts(n)&&n.Ra.set("Unknown"))}function Uf(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ki(t).Y_(e)}function Ew(t,e){t.Va.Ue(e),ki(t).Z_(e)}function zf(t){t.Va=new Xx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ki(t).start(),t.Ra.ua()}function Bf(t){return Ts(t)&&!ki(t).x_()&&t.Ia.size>0}function Ts(t){return J(t).Ea.size===0}function Tw(t){t.Va=void 0}async function rk(t){t.Ra.set("Online")}async function sk(t){t.Ia.forEach((e,n)=>{Uf(t,e)})}async function ik(t,e){Tw(t),Bf(t)?(t.Ra.ha(e),zf(t)):t.Ra.set("Unknown")}async function ok(t,e,n){if(t.Ra.set("Online"),e instanceof ow&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.Va.removeTarget(l))}(t,e)}catch(r){H(gs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await fu(t,r)}else if(e instanceof Sl?t.Va.Ze(e):e instanceof iw?t.Va.st(e):t.Va.tt(e),!n.isEqual(Y.min()))try{const r=await yw(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Va.Tt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(tt.EMPTY_BYTE_STRING,f.snapshotVersion)),Ew(i,u);const p=new hr(f.target,u,h,f.sequenceNumber);Uf(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H(gs,"Failed to raise snapshot:",r),await fu(t,r)}}async function fu(t,e,n){if(!xi(e))throw e;t.Ea.add(1),await da(t),t.Ra.set("Offline"),n||(n=()=>yw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H(gs,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await qu(t)})}function Iw(t,e){return e().catch(n=>fu(t,n,e))}async function Gu(t){const e=J(t),n=Nr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Af;for(;ak(e);)try{const s=await B2(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,lk(e,s)}catch(s){await fu(e,s)}Sw(e)&&Aw(e)}function ak(t){return Ts(t)&&t.Ta.length<10}function lk(t,e){t.Ta.push(e);const n=Nr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function Sw(t){return Ts(t)&&!Nr(t).x_()&&t.Ta.length>0}function Aw(t){Nr(t).start()}async function uk(t){Nr(t).ra()}async function ck(t){const e=Nr(t);for(const n of t.Ta)e.ea(n.mutations)}async function hk(t,e,n){const r=t.Ta.shift(),s=Df.from(r,e,n);await Iw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Gu(t)}async function dk(t,e){e&&Nr(t).X_&&await async function(r,s){if(function(o){return Gx(o)&&o!==L.ABORTED}(s.code)){const i=r.Ta.shift();Nr(r).B_(),await Iw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Gu(r)}}(t,e),Sw(t)&&Aw(t)}async function ty(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),H(gs,"RemoteStore received new credentials");const r=Ts(n);n.Ea.add(3),await da(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await qu(n)}async function fk(t,e){const n=J(t);e?(n.Ea.delete(2),await qu(n)):e||(n.Ea.add(2),await da(n),n.Ra.set("Unknown"))}function ki(t){return t.ma||(t.ma=function(n,r,s){const i=J(n);return i.sa(),new Y2(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:rk.bind(null,t),t_:sk.bind(null,t),r_:ik.bind(null,t),H_:ok.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Bf(t)?zf(t):t.Ra.set("Unknown")):(await t.ma.stop(),Tw(t))})),t.ma}function Nr(t){return t.fa||(t.fa=function(n,r,s){const i=J(n);return i.sa(),new J2(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:uk.bind(null,t),r_:dk.bind(null,t),ta:ck.bind(null,t),na:hk.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await Gu(t)):(await t.fa.stop(),t.Ta.length>0&&(H(gs,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class $f{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Sr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new $f(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hf(t,e){if(Ln("AsyncQueue",`${e}: ${t}`),xi(t))return new q(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ri{static emptySet(e){return new ri(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=oo(),this.sortedSet=new Re(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ri)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ri;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class ny{constructor(){this.ga=new Re(G.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):K(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class _i{constructor(e,n,r,s,i,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new _i(e,n,ri.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Uu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class pk{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class mk{constructor(){this.queries=ry(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=J(n),i=s.queries;s.queries=ry(),i.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new q(L.ABORTED,"Firestore shutting down"))}}function ry(){return new ws(t=>W0(t),Uu)}async function gk(t,e){const n=J(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new pk,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Hf(o,`Initialization of query '${Vs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Wf(n)}async function yk(t,e){const n=J(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function _k(t,e){const n=J(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Fa(s)&&(r=!0);o.wa=s}}r&&Wf(n)}function vk(t,e,n){const r=J(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Wf(t){t.Ca.forEach(e=>{e.next()})}var hd,sy;(sy=hd||(hd={})).Ma="default",sy.Cache="cache";class wk{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new _i(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=_i.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==hd.Cache}}/**
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
 */class Cw{constructor(e){this.key=e}}class xw{constructor(e){this.key=e}}class Ek{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=oe(),this.mutatedKeys=oe(),this.eu=q0(e),this.tu=new ri(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new ny,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const _=s.get(f),x=zu(this.query,p)?p:null,D=!!_&&this.mutatedKeys.has(_.key),V=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let M=!1;_&&x?_.data.isEqual(x.data)?D!==V&&(r.track({type:3,doc:x}),M=!0):this.su(_,x)||(r.track({type:2,doc:x}),M=!0,(u&&this.eu(x,u)>0||h&&this.eu(x,h)<0)&&(l=!0)):!_&&x?(r.track({type:0,doc:x}),M=!0):_&&!x&&(r.track({type:1,doc:_}),M=!0,(u||h)&&(l=!0)),M&&(x?(o=o.add(x),i=V?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,p)=>function(x,D){const V=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K(20277,{Rt:M})}};return V(x)-V(D)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,h=u!==this.Za;return this.Za=u,o.length!==0||h?{snapshot:new _i(this.query,e.tu,i,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ny,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=oe(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new xw(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new Cw(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=oe();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return _i.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const qf="SyncEngine";class Tk{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Ik{constructor(e){this.key=e,this.hu=!1}}class Sk{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ws(l=>W0(l),Uu),this.Iu=new Map,this.Eu=new Set,this.du=new Re(G.comparator),this.Au=new Map,this.Ru=new Of,this.Vu={},this.mu=new Map,this.fu=yi.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Ak(t,e,n=!0){const r=Vw(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await kw(r,e,n,!0),s}async function Ck(t,e){const n=Vw(t);await kw(n,e,!0,!1)}async function kw(t,e,n,r){const s=await $2(t.localStore,fn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await xk(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&ww(t.remoteStore,s),l}async function xk(t,e,n,r,s){t.pu=(p,_,x)=>async function(V,M,S,E){let C=M.view.ru(S);C.Cs&&(C=await Xg(V.localStore,M.query,!1).then(({documents:v})=>M.view.ru(v,C)));const b=E&&E.targetChanges.get(M.targetId),U=E&&E.targetMismatches.get(M.targetId)!=null,B=M.view.applyChanges(C,V.isPrimaryClient,b,U);return oy(V,M.targetId,B.au),B.snapshot}(t,p,_,x);const i=await Xg(t.localStore,e,!0),o=new Ek(e,i.Qs),l=o.ru(i.documents),u=ha.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,u);oy(t,n,h.au);const f=new Tk(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function kk(t,e,n){const r=J(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!Uu(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ud(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ff(r.remoteStore,s.targetId),dd(r,s.targetId)}).catch(Ci)):(dd(r,s.targetId),await ud(r.localStore,s.targetId,!0))}async function Rk(t,e){const n=J(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ff(n.remoteStore,r.targetId))}async function Pk(t,e,n){const r=Lk(t);try{const s=await function(o,l){const u=J(o),h=we.now(),f=l.reduce((x,D)=>x.add(D.key),oe());let p,_;return u.persistence.runTransaction("Locally write mutations","readwrite",x=>{let D=jn(),V=oe();return u.Ns.getEntries(x,f).next(M=>{D=M,D.forEach((S,E)=>{E.isValidDocument()||(V=V.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(x,D)).next(M=>{p=M;const S=[];for(const E of l){const C=Bx(E,p.get(E.key).overlayedDocument);C!=null&&S.push(new Es(E.key,C,j0(C.value.mapValue),Pn.exists(!0)))}return u.mutationQueue.addMutationBatch(x,h,S,l)}).next(M=>{_=M;const S=M.applyToLocalDocumentSet(p,V);return u.documentOverlayCache.saveOverlays(x,M.batchId,S)})}).then(()=>({batchId:_.batchId,changes:K0(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let h=o.Vu[o.currentUser.toKey()];h||(h=new Re(ie)),h=h.insert(l,u),o.Vu[o.currentUser.toKey()]=h}(r,s.batchId,n),await fa(r,s.changes),await Gu(r.remoteStore)}catch(s){const i=Hf(s,"Failed to persist write");n.reject(i)}}async function Rw(t,e){const n=J(t);try{const r=await U2(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(he(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?he(o.hu,14607):s.removedDocuments.size>0&&(he(o.hu,42227),o.hu=!1))}),await fa(n,r,e)}catch(r){await Ci(r)}}function iy(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=J(o);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const _ of p.Sa)_.va(l)&&(h=!0)}),h&&Wf(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Nk(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Re(G.comparator);o=o.insert(i,at.newNoDocument(i,Y.min()));const l=oe().add(i),u=new Hu(Y.min(),new Map,new Re(ie),o,l);await Rw(r,u),r.du=r.du.remove(i),r.Au.delete(e),Gf(r)}else await ud(r.localStore,e,!1).then(()=>dd(r,e,n)).catch(Ci)}async function Dk(t,e){const n=J(t),r=e.batch.batchId;try{const s=await F2(n.localStore,e);Nw(n,r,null),Pw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await fa(n,s)}catch(s){await Ci(s)}}async function Vk(t,e,n){const r=J(t);try{const s=await function(o,l){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(he(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);Nw(r,e,n),Pw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await fa(r,s)}catch(s){await Ci(s)}}function Pw(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function Nw(t,e,n){const r=J(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function dd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||Dw(t,r)})}function Dw(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Ff(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Gf(t))}function oy(t,e,n){for(const r of n)r instanceof Cw?(t.Ru.addReference(r.key,e),bk(t,r)):r instanceof xw?(H(qf,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||Dw(t,r.key)):K(19791,{wu:r})}function bk(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(H(qf,"New document in limbo: "+n),t.Eu.add(r),Gf(t))}function Gf(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new G(Ce.fromString(e)),r=t.fu.next();t.Au.set(r,new Ik(n)),t.du=t.du.insert(n,r),ww(t.remoteStore,new hr(fn(Pf(n.path)),r,"TargetPurposeLimboResolution",Mu.ce))}}async function fa(t,e,n){const r=J(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Lf.As(u.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(u,h){const f=J(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>O.forEach(h,_=>O.forEach(_.Es,x=>f.persistence.referenceDelegate.addReference(p,_.targetId,x)).next(()=>O.forEach(_.ds,x=>f.persistence.referenceDelegate.removeReference(p,_.targetId,x)))))}catch(p){if(!xi(p))throw p;H(jf,"Failed to update sequence numbers: "+p)}for(const p of h){const _=p.targetId;if(!p.fromCache){const x=f.Ms.get(_),D=x.snapshotVersion,V=x.withLastLimboFreeSnapshotVersion(D);f.Ms=f.Ms.insert(_,V)}}}(r.localStore,i))}async function Ok(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){H(qf,"User change. New user:",e.toKey());const r=await gw(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new q(L.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await fa(n,r.Ls)}}function Mk(t,e){const n=J(t),r=n.Au.get(e);if(r&&r.hu)return oe().add(r.key);{let s=oe();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function Vw(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Rw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Mk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Nk.bind(null,e),e.Pu.H_=_k.bind(null,e.eventManager),e.Pu.yu=vk.bind(null,e.eventManager),e}function Lk(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Dk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Vk.bind(null,e),e}class pu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Wu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return j2(this.persistence,new O2,e.initialUser,this.serializer)}Cu(e){return new mw(Mf.mi,this.serializer)}Du(e){return new W2}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}pu.provider={build:()=>new pu};class jk extends pu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){he(this.persistence.referenceDelegate instanceof du,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new w2(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?_t.withCacheSize(this.cacheSizeBytes):_t.DEFAULT;return new mw(r=>du.mi(r,n),this.serializer)}}class fd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>iy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ok.bind(null,this.syncEngine),await fk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new mk}()}createDatastore(e){const n=Wu(e.databaseInfo.databaseId),r=function(i){return new X2(i)}(e.databaseInfo);return function(i,o,l,u){return new ek(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new nk(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>iy(this.syncEngine,n,0),function(){return Zg.v()?new Zg:new q2}())}createSyncEngine(e,n){return function(s,i,o,l,u,h,f){const p=new Sk(s,i,o,l,u,h);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=J(s);H(gs,"RemoteStore shutting down."),i.Ea.add(5),await da(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}fd.provider={build:()=>new fd};/**
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
 */class Fk{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ln("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Dr="FirestoreClient";class Uk{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=it.UNAUTHENTICATED,this.clientId=If.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{H(Dr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H(Dr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Sr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Hf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Kc(t,e){t.asyncQueue.verifyOperationInProgress(),H(Dr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await gw(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ay(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zk(t);H(Dr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>ty(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>ty(e.remoteStore,s)),t._onlineComponents=e}async function zk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H(Dr,"Using user provided OfflineComponentProvider");try{await Kc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;fi("Error using user provided cache. Falling back to memory cache: "+n),await Kc(t,new pu)}}else H(Dr,"Using default OfflineComponentProvider"),await Kc(t,new jk(void 0));return t._offlineComponents}async function bw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H(Dr,"Using user provided OnlineComponentProvider"),await ay(t,t._uninitializedComponentsProvider._online)):(H(Dr,"Using default OnlineComponentProvider"),await ay(t,new fd))),t._onlineComponents}function Bk(t){return bw(t).then(e=>e.syncEngine)}async function $k(t){const e=await bw(t),n=e.eventManager;return n.onListen=Ak.bind(null,e.syncEngine),n.onUnlisten=kk.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Ck.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Rk.bind(null,e.syncEngine),n}function Hk(t,e,n={}){const r=new Sr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const f=new Fk({next:_=>{f.Nu(),o.enqueueAndForget(()=>yk(i,p));const x=_.docs.has(l);!x&&_.fromCache?h.reject(new q(L.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&_.fromCache&&u&&u.source==="server"?h.reject(new q(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),p=new wk(Pf(l.path),f,{includeMetadataChanges:!0,qa:!0});return gk(i,p)}(await $k(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Ow(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const ly=new Map;/**
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
 */const Mw="firestore.googleapis.com",uy=!0;class cy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new q(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Mw,this.ssl=uy}else this.host=e.host,this.ssl=e.ssl??uy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=pw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<_2)throw new q(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}tx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ow(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Kf{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new HC;switch(r.type){case"firstParty":return new KC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ly.get(n);r&&(H("ComponentProvider","Removing Datastore"),ly.delete(n),r.terminate())}(this),Promise.resolve()}}function Wk(t,e,n,r={}){var h;t=Wo(t,Kf);const s=Ti(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(Mv(`https://${l}`),Lv("Firestore",!0)),i.host!==Mw&&i.host!==l&&fi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!ds(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=it.MOCK_USER;else{f=pI(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const _=r.mockUserToken.sub||r.mockUserToken.user_id;if(!_)throw new q(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new it(_)}t._authCredentials=new WC(new x0(f,p))}}/**
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
 */class Qf{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Qf(this.firestore,e,this._query)}}class Ke{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jo(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ke(this.firestore,e,this._key)}toJSON(){return{type:Ke._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ua(n,Ke._jsonSchema))return new Ke(e,r||null,new G(Ce.fromString(n.referencePath)))}}Ke._jsonSchemaVersion="firestore/documentReference/1.0",Ke._jsonSchema={type:je("string",Ke._jsonSchemaVersion),referencePath:je("string")};class Jo extends Qf{constructor(e,n,r){super(e,n,Pf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ke(this.firestore,null,new G(e))}withConverter(e){return new Jo(this.firestore,e,this._path)}}function hy(t,e,...n){if(t=zt(t),arguments.length===1&&(e=If.newId()),ex("doc","path",e),t instanceof Kf){const r=Ce.fromString(e,...n);return Sg(r),new Ke(t,null,new G(r))}{if(!(t instanceof Ke||t instanceof Jo))throw new q(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return Sg(r),new Ke(t.firestore,t instanceof Jo?t.converter:null,new G(r))}}/**
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
 */const dy="AsyncQueue";class fy{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new _w(this,"async_queue_retry"),this._c=()=>{const r=Gc();r&&H(dy,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Gc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Gc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Sr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!xi(e))throw e;H(dy,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Ln("INTERNAL UNHANDLED ERROR: ",py(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=$f.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&K(47125,{Pc:py(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function py(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Xf extends Kf{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new fy,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new fy(e),this._firestoreClient=void 0,await e}}}function qk(t,e){const n=typeof t=="object"?t:zv(),r=typeof t=="string"?t:iu,s=hf(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=dI("firestore");i&&Wk(s,...i)}return s}function Lw(t){if(t._terminated)throw new q(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Gk(t),t._firestoreClient}function Gk(t){var r,s,i;const e=t._freezeSettings(),n=function(l,u,h,f){return new dx(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Ow(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new Uk(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Mt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Mt(tt.fromBase64String(e))}catch(n){throw new q(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Mt(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Mt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ua(e,Mt._jsonSchema))return Mt.fromBase64String(e.bytes)}}Mt._jsonSchemaVersion="firestore/bytes/1.0",Mt._jsonSchema={type:je("string",Mt._jsonSchemaVersion),bytes:je("string")};/**
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
 */class Yf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class jw{constructor(e){this._methodName=e}}/**
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
 */class mn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:mn._jsonSchemaVersion}}static fromJSON(e){if(ua(e,mn._jsonSchema))return new mn(e.latitude,e.longitude)}}mn._jsonSchemaVersion="firestore/geoPoint/1.0",mn._jsonSchema={type:je("string",mn._jsonSchemaVersion),latitude:je("number"),longitude:je("number")};/**
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
 */class gn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:gn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ua(e,gn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new gn(e.vectorValues);throw new q(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}gn._jsonSchemaVersion="firestore/vectorValue/1.0",gn._jsonSchema={type:je("string",gn._jsonSchemaVersion),vectorValues:je("object")};/**
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
 */const Kk=/^__.*__$/;class Qk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Es(e,this.data,this.fieldMask,n,this.fieldTransforms):new ca(e,this.data,n,this.fieldTransforms)}}function Fw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{Ac:t})}}class Jf{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Jf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return mu(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Fw(this.Ac)&&Kk.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Xk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Wu(e)}Cc(e,n,r,s=!1){return new Jf({Ac:e,methodName:n,Dc:r,path:Je.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yk(t){const e=t._freezeSettings(),n=Wu(t._databaseId);return new Xk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Jk(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);$w("Data must be an object, but it was:",o,r);const l=zw(r,o);let u,h;if(i.merge)u=new Xt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const _=Zk(e,p,n);if(!o.contains(_))throw new q(L.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);tR(f,_)||f.push(_)}u=new Xt(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new Qk(new Ot(l),u,h)}function Uw(t,e){if(Bw(t=zt(t)))return $w("Unsupported field value:",e,t),zw(t,e);if(t instanceof jw)return function(r,s){if(!Fw(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=Uw(l,s.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=zt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Mx(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=we.fromDate(r);return{timestampValue:hu(s.serializer,i)}}if(r instanceof we){const i=new we(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:hu(s.serializer,i)}}if(r instanceof mn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Mt)return{bytesValue:aw(s.serializer,r._byteString)};if(r instanceof Ke){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:bf(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof gn)return function(o,l){return{mapValue:{fields:{[M0]:{stringValue:L0},[ou]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw l.Sc("VectorValues must only contain numeric values.");return Nf(l.serializer,h)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${Sf(r)}`)}(t,e)}function zw(t,e){const n={};return P0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vs(t,(r,s)=>{const i=Uw(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Bw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof we||t instanceof mn||t instanceof Mt||t instanceof Ke||t instanceof jw||t instanceof gn)}function $w(t,e,n){if(!Bw(n)||!k0(n)){const r=Sf(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function Zk(t,e,n){if((e=zt(e))instanceof Yf)return e._internalPath;if(typeof e=="string")return Hw(t,e);throw mu("Field path arguments must be of type string or ",t,!1,void 0,n)}const eR=new RegExp("[~\\*/\\[\\]]");function Hw(t,e,n){if(e.search(eR)>=0)throw mu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Yf(...e.split("."))._internalPath}catch{throw mu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function mu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new q(L.INVALID_ARGUMENT,l+t+u)}function tR(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Ww{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(qw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class nR extends Ww{data(){return super.data()}}function qw(t,e){return typeof e=="string"?Hw(t,e):e instanceof Yf?e._internalPath:e._delegate._internalPath}class rR{convertValue(e,n="none"){switch(Pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Rr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw K(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return vs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[ou].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>be(o.doubleValue));return new gn(n)}convertGeoPoint(e){return new mn(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ju(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Go(e));default:return null}}convertTimestamp(e){const n=kr(e);return new we(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ce.fromString(e);he(fw(r),9688,{name:e});const s=new Ko(r.get(1),r.get(3)),i=new G(r.popFirst(5));return s.isEqual(n)||Ln(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function sR(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class lo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class os extends Ww{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Al(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(qw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=os._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}os._jsonSchemaVersion="firestore/documentSnapshot/1.0",os._jsonSchema={type:je("string",os._jsonSchemaVersion),bundleSource:je("string","DocumentSnapshot"),bundleName:je("string"),bundle:je("string")};class Al extends os{data(e={}){return super.data(e)}}class Ao{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new lo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Al(this._firestore,this._userDataWriter,r.key,r,new lo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new Al(s._firestore,s._userDataWriter,l.doc.key,l.doc,new lo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Al(s._firestore,s._userDataWriter,l.doc.key,l.doc,new lo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:iR(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ao._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=If.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function iR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:t})}}/**
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
 */function oR(t){t=Wo(t,Ke);const e=Wo(t.firestore,Xf);return Hk(Lw(e),t._key).then(n=>cR(e,t,n))}Ao._jsonSchemaVersion="firestore/querySnapshot/1.0",Ao._jsonSchema={type:je("string",Ao._jsonSchemaVersion),bundleSource:je("string","QuerySnapshot"),bundleName:je("string"),bundle:je("string")};class aR extends rR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Mt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ke(this.firestore,null,n)}}function lR(t,e,n){t=Wo(t,Ke);const r=Wo(t.firestore,Xf),s=sR(t.converter,e,n);return uR(r,[Jk(Yk(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Pn.none())])}function uR(t,e){return function(r,s){const i=new Sr;return r.asyncQueue.enqueueAndForget(async()=>Pk(await Bk(r),s,i)),i.promise}(Lw(t),e)}function cR(t,e,n){const r=n.docs.get(e._key),s=new aR(t);return new os(t,s,e._key,r,new lo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Ai=s})(Ii),hi(new fs("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Xf(new qC(r.getProvider("auth-internal")),new QC(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new q(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ko(h.options.projectId,f)}(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Tr(wg,Eg,e),Tr(wg,Eg,"esm2020")})();const hR=typeof __firebase_config<"u"?JSON.parse(__firebase_config):{apiKey:"AIzaSyCLPIPwhSkUzoaISxFZlG9F97zRp1u0o9o",authDomain:"financeiro-app-df224.firebaseapp.com",projectId:"financeiro-app-df224",storageBucket:"financeiro-app-df224.firebasestorage.app",messagingSenderId:"1061825731478",appId:"1:1061825731478:web:70c2e8c4c5eb13c56b5bb7"},Gw=Uv(hR),Qc=BC(Gw),my=qk(Gw),Ht=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],Xc={receita:["Salário","Freelance","Investimentos","Reembolso","Outros"],despesa:["Moradia","Alimentação","Transporte","Saúde","Lazer","Educação","Contas Fixas","Outros","Combustível","Cartão de Crédito "]};function dR(){const t=new Date().getMonth(),[e,n]=te.useState(Ht[t]),[r,s]=te.useState(new Date().getFullYear()),[i,o]=te.useState(null),[l,u]=te.useState(!0),[h,f]=te.useState(""),[p,_]=te.useState([]),[x,D]=te.useState({}),[V,M]=te.useState(Xc),[S,E]=te.useState(""),[C,b]=te.useState(""),[U,B]=te.useState(""),[v,y]=te.useState("despesa"),[w,I]=te.useState(""),[A,R]=te.useState(new Date().toISOString().split("T")[0]),[T,Pe]=te.useState(!1),[ct,wn]=te.useState(2),[Is,$]=te.useState(null),[Q,Z]=te.useState(""),[de,Te]=te.useState(""),[Dt,mt]=te.useState("despesa"),[tn,St]=te.useState(""),[Bt,Ri]=te.useState(""),[Pi,Ku]=te.useState(13.25),[pa,ma]=te.useState(12),[zn,ga]=te.useState(null),ya=te.useRef(null);te.useEffect(()=>{const k=PA(Qc,F=>{o(F),F||u(!1)});return()=>k()},[]),te.useEffect(()=>{i&&(u(!0),(async()=>{try{const F=hy(my,"users",i.uid),ue=await oR(F);if(ue.exists()){const ne=ue.data();_(ne.transactions||[]),D(ne.budgets||{}),M(ne.categories||Xc),E(ne.baseSalary||"")}else _([]),D({}),M(Xc),E("")}catch(F){console.error("Erro ao buscar:",F)}finally{u(!1)}})())},[i]),te.useEffect(()=>{if(i&&!l){const k=async()=>{try{await lR(hy(my,"users",i.uid),{transactions:p,budgets:x,categories:V,baseSalary:S,lastUpdated:new Date().toISOString(),email:i.email},{merge:!0})}catch(ue){console.error("Erro ao salvar:",ue)}},F=setTimeout(()=>{k()},1e3);return()=>clearTimeout(F)}},[p,x,V,S,i,l]);const Ni=async()=>{f("");const k=new Sn;try{await YA(Qc,k)}catch{f("Erro ao fazer login. Tente novamente.")}},Di=async()=>{await NA(Qc),_([])},_a=()=>{const k=parseFloat(S);if(isNaN(k)||k<=0||!window.confirm(`Definir Salário Base de ${ye(k)} para TODO o ano de ${r}? 
Isso atualizará os lançamentos automáticos de salário deste ano.`))return;const F=p.filter(ne=>!(ne.isAutoSalary&&ne.year===r)),ue=[];for(let ne=0;ne<12;ne++)ue.push({id:`auto_salary_${r}_${ne}`,month:Ht[ne],year:r,description:"Salário Mensal",amount:k,type:"receita",category:"Salário",date:`01/${(ne+1).toString().padStart(2,"0")}/${r}`,isAutoSalary:!0});_([...F,...ue]),alert("Salários atualizados com sucesso!")};te.useEffect(()=>{var k;((k=V[v])==null?void 0:k.length)>0&&!V[v].includes(w)&&I(V[v][0])},[v,V]);const Se=k=>{if(!k)return new Date;const[F,ue,ne]=k.split("/").map(Number);return new Date(ne,ue-1,F)},Ve=new Date;Ve.setHours(0,0,0,0);const Mr=new Date(Ve);Mr.setDate(Ve.getDate()+7);const Vi=p.reduce((k,F)=>Se(F.date)<=Ve?F.type==="receita"?k+F.amount:k-F.amount:k,0),Ss=p.filter(k=>{const F=Se(k.date);return k.type==="despesa"&&F>Ve&&F<=Mr}).sort((k,F)=>Se(k.date)-Se(F.date)),va=Ss.reduce((k,F)=>k+F.amount,0),Bn=Vi-va,wa=k=>{if(k.preventDefault(),!C||!U||!A)return;const[F,ue,ne]=A.split("-").map(Number),ce=parseFloat(U),gt=[];if(T&&ct>1){for(let yt=0;yt<ct;yt++){const $r=ue-1+yt,Kn=F+Math.floor($r/12),Hr=$r%12,ks=v==="despesa"?`${C} (${yt+1}/${ct})`:C;gt.push({id:Date.now()+yt,month:Ht[Hr],year:Kn,description:ks,amount:ce,type:v,category:w,date:`${ne.toString().padStart(2,"0")}/${(Hr+1).toString().padStart(2,"0")}/${Kn}`})}alert(`${ct} lançamentos criados!`)}else{gt.push({id:Date.now(),month:Ht[ue-1],year:F,description:C,amount:ce,type:v,category:w,date:`${ne.toString().padStart(2,"0")}/${ue.toString().padStart(2,"0")}/${F}`});const yt=Ht[ue-1];(yt!==e||F!==r)&&alert(`Lançamento agendado para ${yt}/${F}!`)}_([...p,...gt]),b(""),B(""),Pe(!1),wn(v==="receita"?12:2)},Ea=()=>{const k={transactions:p,budgets:x,categories:V,baseSalary:S,exportedAt:new Date().toISOString()},F=document.createElement("a");F.href=`data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(k,null,2))}`,F.download=`backup_financeiro_${new Date().toLocaleDateString("pt-BR").replace(/\//g,"-")}.json`,F.click()},bi=k=>{const F=k.target.files[0];if(!F)return;const ue=new FileReader;ue.onload=async ne=>{try{const ce=JSON.parse(ne.target.result);ce.transactions&&confirm("Importar dados?")&&(_(ce.transactions),ce.budgets&&D(ce.budgets),ce.categories&&M(ce.categories),ce.baseSalary&&E(ce.baseSalary),alert("Dados carregados!"))}catch{alert("Erro no arquivo.")}},ue.readAsText(F),k.target.value=null},Qu=k=>{k.preventDefault(),!(!de.trim()||V[Dt].includes(de))&&(M(F=>({...F,[Dt]:[...F[Dt],de]})),Te(""))},Ta=(k,F)=>{confirm(`Remover "${F}"?`)&&M(ue=>({...ue,[k]:ue[k].filter(ne=>ne!==F)}))},Ia=k=>_(p.filter(F=>F.id!==k)),Sa=()=>{const k=parseFloat(tn)||0,F=parseFloat(Bt)||0,ue=parseFloat(Pi)/100,ne=parseFloat(pa),ce=Math.pow(1+ue,1/12)-1,gt=k*Math.pow(1+ce,ne)+F*(Math.pow(1+ce,ne)-1)/ce,yt=k+F*ne,$r=gt-yt;let Kn=ne*30>720?.15:ne*30>360?.175:ne*30>180?.2:.225;const Hr=$r*Kn;ga({totalInvested:yt,grossProfit:$r,tax:Hr,netAmount:gt-Hr,taxRate:Kn*100})},ye=k=>new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(k),Lr=p.filter(k=>k.year===r),En=Lr.filter(k=>k.month===e).sort((k,F)=>Se(k.date)-Se(F.date)),nn=En.filter(k=>k.type==="receita").reduce((k,F)=>k+F.amount,0),Oi=En.filter(k=>k.type==="despesa").reduce((k,F)=>k+F.amount,0),jr=nn-Oi,Fr=Ht.map(k=>{const F=Lr.filter(ce=>ce.month===k),ue=F.filter(ce=>ce.type==="receita").reduce((ce,gt)=>ce+gt.amount,0),ne=F.filter(ce=>ce.type==="despesa").reduce((ce,gt)=>ce+gt.amount,0);return{month:k,inc:ue,exp:ne,bal:ue-ne}}),$n=Fr.reduce((k,F)=>k+F.inc,0),Ur=Fr.reduce((k,F)=>k+F.exp,0),He=$n-Ur,Aa=Lr.filter(k=>k.type==="despesa").reduce((k,F)=>(k[F.category]=(k[F.category]||0)+F.amount,k),{}),Hn=Object.entries(Aa).sort(([,k],[,F])=>F-k).map(([k,F])=>({cat:k,val:F,percent:Ur>0?F/Ur*100:0})),Wn=new Date,As=Wn.getMonth(),Mi=Wn.getFullYear(),qn=As===0?11:As-1,Xu=As===0?Mi-1:Mi,Yu=p.filter(k=>k.month===Ht[As]&&k.year===Mi&&k.type==="despesa"),Cs=p.filter(k=>k.month===Ht[qn]&&k.year===Xu&&k.type==="despesa"),xs=Yu.reduce((k,F)=>k+F.amount,0),Gn=Cs.reduce((k,F)=>k+F.amount,0),zr=xs-Gn,Br=Gn>0?(xs-Gn)/Gn*100:0;return!i&&!l?g.jsx("div",{className:"min-h-screen flex items-center justify-center bg-slate-100 p-4",children:g.jsxs("div",{className:"bg-white p-8 rounded-2xl shadow-lg w-full max-w-md border border-slate-200",children:[g.jsxs("div",{className:"text-center mb-8",children:[g.jsx("div",{className:"inline-flex p-4 bg-blue-50 rounded-full mb-4",children:g.jsx(Ya,{className:"w-10 h-10 text-blue-600"})}),g.jsx("h1",{className:"text-2xl font-bold text-slate-800",children:"Controle Financeiro"}),g.jsx("p",{className:"text-slate-500 text-sm mt-2",children:"Seus dados seguros na nuvem."})]}),h&&g.jsxs("div",{className:"p-3 mb-4 bg-red-50 text-red-600 text-sm rounded-lg flex items-center gap-2",children:[g.jsx(nI,{size:16})," ",h]}),g.jsx("div",{className:"space-y-4",children:g.jsxs("button",{onClick:Ni,className:"w-full py-4 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold rounded-xl transition-all shadow-sm flex items-center justify-center gap-3",children:[g.jsx("img",{src:"https://www.google.com/favicon.ico",alt:"Google",className:"w-5 h-5"})," Entrar com Google"]})})]})}):l?g.jsxs("div",{className:"min-h-screen flex items-center justify-center bg-slate-100 text-slate-500",children:[g.jsx(JT,{className:"w-6 h-6 animate-spin mr-2"})," Carregando seus dados..."]}):g.jsx("div",{className:"min-h-screen bg-slate-50 text-slate-800 font-sans p-4 md:p-8",children:g.jsxs("div",{className:"max-w-7xl mx-auto space-y-6",children:[g.jsxs("header",{className:"flex flex-col xl:flex-row justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-200 gap-4",children:[g.jsxs("div",{className:"w-full xl:w-auto",children:[g.jsxs("h1",{className:"text-2xl font-bold text-slate-900 flex items-center gap-2",children:[g.jsx(Ya,{className:"text-blue-600"})," Controle Financeiro"]}),g.jsxs("p",{className:"text-slate-500 text-sm mt-1 flex items-center gap-1",children:[g.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 inline-block"})," Conectado como ",i.displayName||i.email]})]}),g.jsxs("div",{className:"flex flex-wrap justify-center items-center gap-3 w-full xl:w-auto",children:[g.jsxs("div",{className:"flex items-center gap-2 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-lg mr-2",children:[g.jsxs("div",{className:"text-emerald-600 flex items-center gap-1",children:[g.jsx(zT,{size:16}),g.jsx("span",{className:"text-xs font-bold uppercase hidden sm:inline",children:"Salário"})]}),g.jsxs("div",{className:"flex items-center",children:[g.jsx("span",{className:"text-emerald-700 text-sm font-semibold mr-1",children:"R$"}),g.jsx("input",{type:"number",value:S,onChange:k=>E(k.target.value),className:"w-20 bg-transparent border-b border-emerald-300 focus:border-emerald-600 outline-none text-sm font-bold text-emerald-800 text-right",placeholder:"0,00"}),g.jsx("button",{onClick:_a,className:"ml-2 p-1 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors",title:"Atualizar Salário Mensal Automático",children:g.jsx(WT,{size:14})})]})]}),g.jsxs("div",{className:"flex items-center bg-slate-100 rounded-lg p-1",children:[g.jsx("button",{onClick:()=>s(k=>k-1),className:"p-2 hover:bg-white rounded-md text-slate-600",children:g.jsx(qT,{size:18})}),g.jsx("span",{className:"px-4 font-bold text-slate-700 min-w-[80px] text-center",children:r}),g.jsx("button",{onClick:()=>s(k=>k+1),className:"p-2 hover:bg-white rounded-md text-slate-600",children:g.jsx(GT,{size:18})})]}),g.jsx("div",{className:"h-8 w-px bg-slate-200 hidden sm:block"}),g.jsxs("button",{onClick:()=>n("Investimentos"),className:`px-4 py-2 rounded-lg font-medium flex gap-2 ${e==="Investimentos"?"bg-indigo-600 text-white":"bg-white border text-slate-700"}`,children:[g.jsx(zm,{size:18})," ",g.jsx("span",{className:"hidden xl:inline",children:"Investimentos"})]}),g.jsxs("button",{onClick:()=>n("Resumo"),className:`px-4 py-2 rounded-lg font-medium flex gap-2 ${e==="Resumo"?"bg-blue-600 text-white":"bg-white border text-slate-700"}`,children:[g.jsx(Bm,{size:18})," ",g.jsx("span",{className:"hidden xl:inline",children:"Resumo"})]}),g.jsxs("button",{onClick:()=>n("Configuracoes"),className:`px-4 py-2 rounded-lg font-medium flex gap-2 ${e==="Configuracoes"?"bg-slate-700 text-white":"bg-white border text-slate-700"}`,children:[g.jsx($m,{size:18})," ",g.jsx("span",{className:"hidden xl:inline",children:"Config"})]}),g.jsx("div",{className:"h-8 w-px bg-slate-200 hidden sm:block"}),g.jsx("button",{onClick:Ea,className:"p-2 text-slate-600 border rounded-lg hover:text-blue-600",title:"Exportar Backup",children:g.jsx(QT,{size:20})}),g.jsx("button",{onClick:()=>ya.current.click(),className:"p-2 text-slate-600 border rounded-lg hover:text-emerald-600",title:"Importar Backup",children:g.jsx(rI,{size:20})}),g.jsx("input",{type:"file",ref:ya,className:"hidden",onChange:bi,accept:".json"}),g.jsx("button",{onClick:Di,className:"p-2 text-red-500 border border-red-100 bg-red-50 rounded-lg hover:bg-red-100",title:"Sair",children:g.jsx(YT,{size:20})})]})]}),!["Resumo","Investimentos","Configuracoes"].includes(e)&&g.jsx("div",{className:"overflow-x-auto pb-2 scrollbar-hide",children:g.jsx("div",{className:"flex gap-2 min-w-max",children:Ht.map(k=>g.jsx("button",{onClick:()=>n(k),className:`px-4 py-2 rounded-full text-sm font-medium transition-all ${e===k?"bg-blue-600 text-white shadow-md scale-105":"bg-white text-slate-600 border"}`,children:k},k))})}),["Resumo","Investimentos","Configuracoes"].includes(e)?g.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden animate-fade-in relative",children:[g.jsxs("div",{className:"p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50",children:[g.jsxs("h2",{className:"text-xl font-bold text-slate-800 flex items-center gap-2",children:[e==="Resumo"&&g.jsxs(g.Fragment,{children:[g.jsx(Bm,{className:"text-blue-600"})," Resumo Anual ",r]}),e==="Investimentos"&&g.jsxs(g.Fragment,{children:[g.jsx(zm,{className:"text-indigo-600"})," Investimentos"]}),e==="Configuracoes"&&g.jsxs(g.Fragment,{children:[g.jsx($m,{className:"text-slate-600"})," Configurações"]})]}),g.jsxs("button",{onClick:()=>n(Ht[new Date().getMonth()]),className:"flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-100",children:[g.jsx(FT,{size:16})," Voltar"]})]}),g.jsxs("div",{className:"p-6",children:[e==="Configuracoes"&&g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[g.jsxs("div",{className:"col-span-1 md:col-span-2 bg-slate-50 p-6 rounded-xl border border-slate-200",children:[g.jsx("div",{className:"flex justify-between items-center mb-3",children:g.jsx("h2",{className:"text-sm font-bold text-slate-600 uppercase",children:"Nova Categoria"})}),g.jsxs("form",{onSubmit:Qu,className:"flex gap-4 items-end",children:[g.jsxs("div",{className:"flex-1",children:[g.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Nome"}),g.jsx("input",{type:"text",value:de,onChange:k=>Te(k.target.value),className:"w-full px-3 py-2 border rounded-lg"})]}),g.jsxs("div",{className:"w-40",children:[g.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Tipo"}),g.jsxs("select",{value:Dt,onChange:k=>mt(k.target.value),className:"w-full px-3 py-2 border rounded-lg",children:[g.jsx("option",{value:"despesa",children:"Despesa"}),g.jsx("option",{value:"receita",children:"Receita"})]})]}),g.jsx("button",{type:"submit",className:"px-6 py-2 bg-slate-800 text-white rounded-lg",children:"Criar"})]})]}),g.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200",children:[g.jsxs("h3",{className:"font-bold text-emerald-600 mb-4 flex gap-2",children:[g.jsx(Mc,{size:18})," Receitas"]}),g.jsx("div",{className:"space-y-2 max-h-60 overflow-y-auto",children:V.receita.map(k=>g.jsxs("div",{className:"flex justify-between items-center p-2 bg-slate-50 rounded-lg text-sm",children:[g.jsx("span",{className:"text-slate-700 font-medium",children:k}),g.jsx("button",{onClick:()=>Ta("receita",k),className:"text-slate-400 hover:text-red-500 p-1.5 hover:bg-red-50 rounded-md transition-colors",title:"Excluir",children:g.jsx(Oc,{size:16})})]},k))})]}),g.jsxs("div",{className:"bg-white p-4 rounded-xl border border-slate-200",children:[g.jsxs("h3",{className:"font-bold text-red-600 mb-4 flex gap-2",children:[g.jsx(Hm,{size:18})," Despesas"]}),g.jsx("div",{className:"space-y-2 max-h-60 overflow-y-auto",children:V.despesa.map(k=>g.jsxs("div",{className:"flex justify-between items-center p-2 bg-slate-50 rounded-lg text-sm",children:[g.jsx("span",{className:"text-slate-700 font-medium",children:k}),g.jsx("button",{onClick:()=>Ta("despesa",k),className:"text-slate-400 hover:text-red-500 p-1.5 hover:bg-red-50 rounded-md transition-colors",title:"Excluir",children:g.jsx(Oc,{size:16})})]},k))})]})]}),e==="Investimentos"&&g.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[g.jsxs("div",{className:"space-y-6",children:[g.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"text-sm text-slate-600",children:"Inicial (R$)"}),g.jsx("input",{type:"number",value:tn,onChange:k=>St(k.target.value),className:"w-full p-3 border rounded-lg"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"text-sm text-slate-600",children:"Mensal (R$)"}),g.jsx("input",{type:"number",value:Bt,onChange:k=>Ri(k.target.value),className:"w-full p-3 border rounded-lg"})]})]}),g.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"text-sm text-slate-600",children:"Taxa (% CDI)"}),g.jsx("input",{type:"number",value:Pi,onChange:k=>Ku(k.target.value),className:"w-full p-3 border rounded-lg"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"text-sm text-slate-600",children:"Meses"}),g.jsx("input",{type:"number",value:pa,onChange:k=>ma(k.target.value),className:"w-full p-3 border rounded-lg"})]})]}),g.jsxs("button",{onClick:Sa,className:"w-full py-4 bg-indigo-600 text-white font-bold rounded-xl flex justify-center gap-2",children:[g.jsx(Mc,{size:20})," Calcular"]})]}),g.jsx("div",{className:"bg-slate-900 text-white p-8 rounded-2xl flex flex-col justify-center shadow-xl relative overflow-hidden",children:zn?g.jsxs("div",{className:"space-y-8 z-10",children:[g.jsxs("div",{children:[g.jsx("p",{className:"text-sm text-indigo-300 uppercase",children:"Valor Líquido"}),g.jsx("h3",{className:"text-5xl font-bold mt-2",children:ye(zn.netAmount)})]}),g.jsxs("div",{className:"grid grid-cols-2 gap-6 pt-6 border-t border-slate-700/50",children:[g.jsxs("div",{children:[g.jsx("p",{className:"text-xs text-slate-400",children:"Total Investido"}),g.jsx("p",{className:"font-semibold text-xl",children:ye(zn.totalInvested)})]}),g.jsxs("div",{children:[g.jsx("p",{className:"text-xs text-emerald-400",children:"Bruto"}),g.jsxs("p",{className:"font-semibold text-xl text-emerald-400",children:["+",ye(zn.grossProfit)]})]})]})]}):g.jsxs("div",{className:"text-center text-slate-400 z-10",children:[g.jsx(tI,{className:"w-16 h-16 mx-auto mb-4 opacity-30"}),g.jsx("p",{children:"Simular investimento."})]})})]}),e==="Resumo"&&g.jsxs("div",{className:"space-y-8",children:[g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[g.jsx(Yc,{title:"Receita",value:$n,icon:Mc,color:"text-emerald-600"}),g.jsx(Yc,{title:"Despesa",value:Ur,icon:Hm,color:"text-red-600"}),g.jsx(Yc,{title:"Saldo",value:He,icon:Ya,color:He>=0?"text-blue-600":"text-red-600"}),g.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between",children:[g.jsxs("div",{children:[g.jsx("p",{className:"text-slate-500 text-xs font-medium mb-1 uppercase",children:"Comparativo Mês Atual"}),g.jsx("h3",{className:"text-lg font-bold text-slate-700",children:Ht[new Date().getMonth()]}),g.jsxs("div",{className:`flex items-center gap-1 text-sm font-semibold mt-1 ${zr<=0?"text-emerald-600":"text-red-600"}`,children:[zr<=0?g.jsx(jT,{size:16}):g.jsx(UT,{size:16}),Math.abs(Br).toFixed(1),"% ",zr<=0?"Menos":"Mais",g.jsx("span",{className:"text-slate-400 font-normal text-xs ml-1",children:"vs mês passado"})]})]}),g.jsxs("div",{className:"mt-2 pt-2 border-t border-slate-100 text-xs text-slate-500",children:["Gastos: ",ye(xs)," vs ",ye(Gn)]})]})]}),g.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[g.jsxs("div",{className:"lg:col-span-1 bg-white p-6 rounded-xl border border-slate-200",children:[g.jsxs("h3",{className:"font-bold text-slate-700 mb-6 flex items-center gap-2",children:[g.jsx(HT,{className:"text-indigo-600",size:20})," Onde você mais gastou"]}),g.jsxs("div",{className:"space-y-4",children:[Hn.slice(0,6).map((k,F)=>g.jsxs("div",{children:[g.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[g.jsxs("span",{className:"font-medium text-slate-700",children:[F+1,". ",k.cat]}),g.jsx("span",{className:"text-slate-500",children:ye(k.val)})]}),g.jsx("div",{className:"h-2 w-full bg-slate-100 rounded-full overflow-hidden",children:g.jsx("div",{className:"h-full bg-indigo-500 rounded-full",style:{width:`${k.percent}%`}})})]},k.cat)),Hn.length===0&&g.jsx("p",{className:"text-slate-400 text-sm italic",children:"Nenhuma despesa registrada."})]})]}),g.jsx("div",{className:"lg:col-span-2 overflow-x-auto border rounded-xl border-slate-200",children:g.jsxs("table",{className:"w-full text-left text-sm",children:[g.jsx("thead",{className:"bg-slate-50 text-slate-500",children:g.jsxs("tr",{children:[g.jsx("th",{className:"p-4",children:"Mês"}),g.jsx("th",{className:"p-4",children:"Evolução"}),g.jsx("th",{className:"p-4 text-emerald-600",children:"Receitas"}),g.jsx("th",{className:"p-4 text-red-600",children:"Despesas"}),g.jsx("th",{className:"p-4",children:"Saldo"})]})}),g.jsx("tbody",{className:"divide-y divide-slate-100",children:Fr.map(k=>{const F=Math.max(...Fr.map(ne=>ne.exp))||1,ue=k.exp/F*100;return g.jsxs("tr",{className:"hover:bg-slate-50",children:[g.jsx("td",{className:"p-4 font-medium",children:k.month}),g.jsx("td",{className:"p-4 w-32",children:g.jsx("div",{className:"h-1.5 w-full bg-slate-100 rounded-full overflow-hidden",children:g.jsx("div",{className:`h-full rounded-full ${k.exp>k.inc?"bg-red-400":"bg-blue-400"}`,style:{width:`${ue}%`}})})}),g.jsx("td",{className:"p-4 text-emerald-600",children:ye(k.inc)}),g.jsx("td",{className:"p-4 text-red-600",children:ye(k.exp)}),g.jsx("td",{className:`p-4 font-bold ${k.bal>=0?"text-blue-600":"text-red-600"}`,children:ye(k.bal)})]},k.month)})})]})})]})]})]})]}):g.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[g.jsxs("div",{className:"lg:col-span-4 space-y-6",children:[g.jsxs("div",{className:"bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl shadow-sm border border-amber-200",children:[g.jsxs("h2",{className:"font-bold text-amber-800 flex items-center gap-2 mb-4",children:[g.jsx(BT,{className:"w-5 h-5"})," Previsão (7 dias)"]}),Ss.length>0?g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"space-y-3 mb-4",children:Ss.map(k=>g.jsxs("div",{className:"flex justify-between items-center text-sm bg-white/60 p-2 rounded border border-amber-100",children:[g.jsxs("div",{children:[g.jsx("p",{className:"font-semibold text-slate-700",children:k.description}),g.jsx("p",{className:"text-xs text-slate-500",children:k.date})]}),g.jsxs("span",{className:"font-bold text-red-600",children:["- ",ye(k.amount)]})]},k.id))}),g.jsxs("div",{className:"pt-3 border-t border-amber-200/50",children:[g.jsxs("div",{className:"flex justify-between text-xs text-slate-600 mb-1",children:[g.jsx("span",{children:"Saldo Hoje:"}),g.jsx("span",{className:"font-semibold",children:ye(Vi)})]}),g.jsxs("div",{className:"flex justify-between text-xs text-red-600 mb-2",children:[g.jsx("span",{children:"A Pagar:"}),g.jsxs("span",{className:"font-bold",children:["- ",ye(va)]})]}),g.jsxs("div",{className:`flex justify-between items-center p-2 rounded-lg ${Bn>=0?"bg-emerald-100 text-emerald-800":"bg-red-100 text-red-800"}`,children:[g.jsx("span",{className:"text-xs font-bold uppercase",children:"Projeção"}),g.jsx("span",{className:"font-bold",children:ye(Bn)})]})]})]}):g.jsxs("div",{className:"text-center py-4 text-amber-700/70",children:[g.jsx("p",{className:"text-sm font-medium",children:"Tudo tranquilo!"}),g.jsxs("div",{className:"mt-3 text-xs bg-white/50 p-2 rounded inline-block",children:["Saldo: ",g.jsx("strong",{children:ye(Vi)})]})]})]}),g.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-4",children:[g.jsxs("h2",{className:"font-semibold text-slate-700 flex justify-between",children:[e," ",r," ",g.jsx($T,{className:"w-4 h-4 text-slate-400"})]}),g.jsxs("div",{className:"space-y-3",children:[g.jsxs("div",{className:"flex justify-between p-3 bg-emerald-50 rounded-lg",children:[g.jsx("span",{className:"text-emerald-700 text-sm",children:"Entradas"}),g.jsx("span",{className:"text-emerald-700 font-bold",children:ye(nn)})]}),g.jsxs("div",{className:"flex justify-between p-3 bg-red-50 rounded-lg",children:[g.jsx("span",{className:"text-red-700 text-sm",children:"Saídas"}),g.jsx("span",{className:"text-red-700 font-bold",children:ye(Oi)})]}),g.jsxs("div",{className:"pt-2 border-t border-slate-100 flex justify-between",children:[g.jsx("span",{className:"text-slate-600 font-medium",children:"Saldo"}),g.jsx("span",{className:`text-lg font-bold ${jr>=0?"text-blue-600":"text-red-600"}`,children:ye(jr)})]})]})]}),g.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200",children:[g.jsxs("h3",{className:"font-semibold text-slate-700 mb-4 flex items-center gap-2",children:[g.jsx(KT,{className:"w-5 h-5 text-blue-600"})," Novo Lançamento"]}),g.jsxs("form",{onSubmit:wa,className:"space-y-4",children:[g.jsxs("div",{className:"grid grid-cols-2 gap-2 mb-2",children:[g.jsx("button",{type:"button",onClick:()=>{y("receita"),Pe(!1)},className:`py-2 text-sm rounded-lg border ${v==="receita"?"bg-emerald-100 border-emerald-200 text-emerald-700 font-bold":"bg-white text-slate-500"}`,children:"Receita"}),g.jsx("button",{type:"button",onClick:()=>{y("despesa"),Pe(!1)},className:`py-2 text-sm rounded-lg border ${v==="despesa"?"bg-red-100 border-red-200 text-red-700 font-bold":"bg-white text-slate-500"}`,children:"Despesa"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Descrição"}),g.jsx("input",{type:"text",value:C,onChange:k=>b(k.target.value),className:"w-full px-3 py-2 border rounded-lg"})]}),g.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Data"}),g.jsx("input",{type:"date",value:A,onChange:k=>R(k.target.value),className:"w-full px-3 py-2 border rounded-lg"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Valor"}),g.jsx("input",{type:"number",step:"0.01",value:U,onChange:k=>B(k.target.value),className:"w-full px-3 py-2 border rounded-lg"})]})]}),g.jsxs("div",{className:"bg-slate-50 p-3 rounded-lg border border-slate-100",children:[g.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[g.jsx("input",{type:"checkbox",checked:T,onChange:k=>{Pe(k.target.checked),wn(v==="receita"?12:2)},className:"rounded text-blue-600"}),g.jsx("label",{className:"text-sm font-medium text-slate-600 flex items-center gap-1",children:v==="despesa"?g.jsxs(g.Fragment,{children:[g.jsx(XT,{size:14})," Parcelado?"]}):g.jsxs(g.Fragment,{children:[g.jsx(ZT,{size:14})," Repetir?"]})})]}),T&&g.jsxs("div",{className:"animate-fade-in",children:[g.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:v==="despesa"?"Nº Parcelas":"Quantos Meses?"}),g.jsx("input",{type:"number",min:"2",max:"60",value:ct,onChange:k=>wn(k.target.value),className:"w-full px-3 py-2 border rounded-lg text-sm"})]})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Categoria"}),g.jsx("select",{value:w,onChange:k=>I(k.target.value),className:"w-full px-3 py-2 border rounded-lg",children:V[v].map(k=>g.jsx("option",{value:k,children:k},k))})]}),g.jsxs("button",{type:"submit",className:"w-full py-2 bg-blue-600 text-white rounded-lg font-medium flex justify-center gap-2",children:[g.jsx(eI,{className:"w-4 h-4"})," Adicionar"]})]})]})]}),g.jsxs("div",{className:"lg:col-span-8 bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col h-full min-h-[500px]",children:[g.jsxs("div",{className:"p-4 border-b border-slate-100 flex justify-between items-center",children:[g.jsxs("h3",{className:"font-semibold text-slate-700",children:["Extrato ",e]}),g.jsxs("span",{className:"text-xs text-slate-400",children:[En.length," itens"]})]}),g.jsx("div",{className:"flex-1 overflow-auto",children:En.length===0?g.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-slate-400 py-10",children:[g.jsx(Ya,{className:"w-12 h-12 mb-2 opacity-20"}),g.jsx("p",{children:"Nenhum lançamento."})]}):g.jsxs("table",{className:"w-full text-left text-sm",children:[g.jsx("thead",{className:"bg-slate-50 text-slate-500 sticky top-0 z-10",children:g.jsxs("tr",{children:[g.jsx("th",{className:"p-4 w-32",children:"Data"}),g.jsx("th",{className:"p-4",children:"Descrição"}),g.jsx("th",{className:"p-4 hidden sm:table-cell",children:"Categoria"}),g.jsx("th",{className:"p-4 text-right",children:"Valor"}),g.jsx("th",{className:"p-4 w-10"})]})}),g.jsx("tbody",{className:"divide-y divide-slate-100",children:En.map(k=>g.jsxs("tr",{className:"hover:bg-slate-50 group",children:[g.jsx("td",{className:"p-4 text-slate-500",children:k.date}),g.jsxs("td",{className:"p-4 font-medium text-slate-700",children:[k.description,g.jsx("div",{className:"text-xs text-slate-400 sm:hidden mt-1",children:k.category})]}),g.jsx("td",{className:"p-4 text-slate-500 hidden sm:table-cell",children:g.jsx("span",{className:"px-2 py-1 rounded-full bg-slate-100 text-xs",children:k.category})}),g.jsxs("td",{className:`p-4 text-right font-bold ${k.type==="receita"?"text-emerald-600":"text-red-600"}`,children:[k.type==="despesa"?"-":"+"," ",ye(k.amount)]}),g.jsx("td",{className:"p-4 text-right",children:g.jsx("button",{onClick:()=>Ia(k.id),className:"p-1 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-colors",children:g.jsx(Oc,{className:"w-4 h-4"})})})]},k.id))})]})})]})]})]})})}function Yc({title:t,value:e,icon:n,color:r}){const s=i=>new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(i);return g.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-start justify-between",children:[g.jsxs("div",{children:[g.jsx("p",{className:"text-slate-500 text-sm font-medium mb-1",children:t}),g.jsx("h3",{className:`text-2xl font-bold ${r}`,children:s(e)})]}),g.jsx("div",{className:`p-3 rounded-lg bg-slate-50 ${r}`,children:g.jsx(n,{className:"w-6 h-6"})})]})}kv(document.getElementById("root")).render(g.jsx(te.StrictMode,{children:g.jsx(dR,{})}));
