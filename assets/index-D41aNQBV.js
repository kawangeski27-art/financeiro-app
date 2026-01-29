(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var Dy={exports:{}},Bu={},Vy={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sa=Symbol.for("react.element"),f1=Symbol.for("react.portal"),p1=Symbol.for("react.fragment"),m1=Symbol.for("react.strict_mode"),g1=Symbol.for("react.profiler"),y1=Symbol.for("react.provider"),_1=Symbol.for("react.context"),v1=Symbol.for("react.forward_ref"),w1=Symbol.for("react.suspense"),E1=Symbol.for("react.memo"),T1=Symbol.for("react.lazy"),Gp=Symbol.iterator;function I1(t){return t===null||typeof t!="object"?null:(t=Gp&&t[Gp]||t["@@iterator"],typeof t=="function"?t:null)}var My={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Oy=Object.assign,Ly={};function $i(t,e,n){this.props=t,this.context=e,this.refs=Ly,this.updater=n||My}$i.prototype.isReactComponent={};$i.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};$i.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function jy(){}jy.prototype=$i.prototype;function $d(t,e,n){this.props=t,this.context=e,this.refs=Ly,this.updater=n||My}var Hd=$d.prototype=new jy;Hd.constructor=$d;Oy(Hd,$i.prototype);Hd.isPureReactComponent=!0;var Kp=Array.isArray,Fy=Object.prototype.hasOwnProperty,qd={current:null},Uy={key:!0,ref:!0,__self:!0,__source:!0};function zy(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Fy.call(e,r)&&!Uy.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Sa,type:t,key:i,ref:o,props:s,_owner:qd.current}}function S1(t,e){return{$$typeof:Sa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Wd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Sa}function x1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Qp=/\/+/g;function Oc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?x1(""+t.key):e.toString(36)}function Pl(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Sa:case f1:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Oc(o,0):r,Kp(s)?(n="",t!=null&&(n=t.replace(Qp,"$&/")+"/"),Pl(s,e,n,"",function(h){return h})):s!=null&&(Wd(s)&&(s=S1(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Qp,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Kp(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+Oc(i,l);o+=Pl(i,e,n,u,s)}else if(u=I1(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+Oc(i,l++),o+=Pl(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ol(t,e,n){if(t==null)return t;var r=[],s=0;return Pl(t,r,"","",function(i){return e.call(n,i,s++)}),r}function C1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var St={current:null},Nl={transition:null},A1={ReactCurrentDispatcher:St,ReactCurrentBatchConfig:Nl,ReactCurrentOwner:qd};function By(){throw Error("act(...) is not supported in production builds of React.")}oe.Children={map:ol,forEach:function(t,e,n){ol(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ol(t,function(){e++}),e},toArray:function(t){return ol(t,function(e){return e})||[]},only:function(t){if(!Wd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};oe.Component=$i;oe.Fragment=p1;oe.Profiler=g1;oe.PureComponent=$d;oe.StrictMode=m1;oe.Suspense=w1;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A1;oe.act=By;oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Oy({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=qd.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Fy.call(e,u)&&!Uy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Sa,type:t.type,key:s,ref:i,props:r,_owner:o}};oe.createContext=function(t){return t={$$typeof:_1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:y1,_context:t},t.Consumer=t};oe.createElement=zy;oe.createFactory=function(t){var e=zy.bind(null,t);return e.type=t,e};oe.createRef=function(){return{current:null}};oe.forwardRef=function(t){return{$$typeof:v1,render:t}};oe.isValidElement=Wd;oe.lazy=function(t){return{$$typeof:T1,_payload:{_status:-1,_result:t},_init:C1}};oe.memo=function(t,e){return{$$typeof:E1,type:t,compare:e===void 0?null:e}};oe.startTransition=function(t){var e=Nl.transition;Nl.transition={};try{t()}finally{Nl.transition=e}};oe.unstable_act=By;oe.useCallback=function(t,e){return St.current.useCallback(t,e)};oe.useContext=function(t){return St.current.useContext(t)};oe.useDebugValue=function(){};oe.useDeferredValue=function(t){return St.current.useDeferredValue(t)};oe.useEffect=function(t,e){return St.current.useEffect(t,e)};oe.useId=function(){return St.current.useId()};oe.useImperativeHandle=function(t,e,n){return St.current.useImperativeHandle(t,e,n)};oe.useInsertionEffect=function(t,e){return St.current.useInsertionEffect(t,e)};oe.useLayoutEffect=function(t,e){return St.current.useLayoutEffect(t,e)};oe.useMemo=function(t,e){return St.current.useMemo(t,e)};oe.useReducer=function(t,e,n){return St.current.useReducer(t,e,n)};oe.useRef=function(t){return St.current.useRef(t)};oe.useState=function(t){return St.current.useState(t)};oe.useSyncExternalStore=function(t,e,n){return St.current.useSyncExternalStore(t,e,n)};oe.useTransition=function(){return St.current.useTransition()};oe.version="18.3.1";Vy.exports=oe;var J=Vy.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k1=J,R1=Symbol.for("react.element"),P1=Symbol.for("react.fragment"),N1=Object.prototype.hasOwnProperty,b1=k1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,D1={key:!0,ref:!0,__self:!0,__source:!0};function $y(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)N1.call(e,r)&&!D1.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:R1,type:t,key:i,ref:o,props:s,_owner:b1.current}}Bu.Fragment=P1;Bu.jsx=$y;Bu.jsxs=$y;Dy.exports=Bu;var f=Dy.exports,Hy={exports:{}},$t={},qy={exports:{}},Wy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(q,Q){var se=q.length;q.push(Q);e:for(;0<se;){var ye=se-1>>>1,ke=q[ye];if(0<s(ke,Q))q[ye]=Q,q[se]=ke,se=ye;else break e}}function n(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var Q=q[0],se=q.pop();if(se!==Q){q[0]=se;e:for(var ye=0,ke=q.length,on=ke>>>1;ye<on;){var At=2*(ye+1)-1,qt=q[At],ct=At+1,kt=q[ct];if(0>s(qt,se))ct<ke&&0>s(kt,qt)?(q[ye]=kt,q[ct]=se,ye=ct):(q[ye]=qt,q[At]=se,ye=At);else if(ct<ke&&0>s(kt,se))q[ye]=kt,q[ct]=se,ye=ct;else break e}}return Q}function s(q,Q){var se=q.sortIndex-Q.sortIndex;return se!==0?se:q.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],p=1,m=null,_=3,k=!1,b=!1,D=!1,L=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(q){for(var Q=n(h);Q!==null;){if(Q.callback===null)r(h);else if(Q.startTime<=q)r(h),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(h)}}function M(q){if(D=!1,C(q),!b)if(n(u)!==null)b=!0,dr(j);else{var Q=n(h);Q!==null&&Fn(M,Q.startTime-q)}}function j(q,Q){b=!1,D&&(D=!1,x(y),y=-1),k=!0;var se=_;try{for(C(Q),m=n(u);m!==null&&(!(m.expirationTime>Q)||q&&!A());){var ye=m.callback;if(typeof ye=="function"){m.callback=null,_=m.priorityLevel;var ke=ye(m.expirationTime<=Q);Q=t.unstable_now(),typeof ke=="function"?m.callback=ke:m===n(u)&&r(u),C(Q)}else r(u);m=n(u)}if(m!==null)var on=!0;else{var At=n(h);At!==null&&Fn(M,At.startTime-Q),on=!1}return on}finally{m=null,_=se,k=!1}}var B=!1,v=null,y=-1,T=5,S=-1;function A(){return!(t.unstable_now()-S<T)}function R(){if(v!==null){var q=t.unstable_now();S=q;var Q=!0;try{Q=v(!0,q)}finally{Q?I():(B=!1,v=null)}}else B=!1}var I;if(typeof E=="function")I=function(){E(R)};else if(typeof MessageChannel<"u"){var He=new MessageChannel,Ct=He.port2;He.port1.onmessage=R,I=function(){Ct.postMessage(null)}}else I=function(){L(R,0)};function dr(q){v=q,B||(B=!0,I())}function Fn(q,Q){y=L(function(){q(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(q){q.callback=null},t.unstable_continueExecution=function(){b||k||(b=!0,dr(j))},t.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<q?Math.floor(1e3/q):5},t.unstable_getCurrentPriorityLevel=function(){return _},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(q){switch(_){case 1:case 2:case 3:var Q=3;break;default:Q=_}var se=_;_=Q;try{return q()}finally{_=se}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(q,Q){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var se=_;_=q;try{return Q()}finally{_=se}},t.unstable_scheduleCallback=function(q,Q,se){var ye=t.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?ye+se:ye):se=ye,q){case 1:var ke=-1;break;case 2:ke=250;break;case 5:ke=1073741823;break;case 4:ke=1e4;break;default:ke=5e3}return ke=se+ke,q={id:p++,callback:Q,priorityLevel:q,startTime:se,expirationTime:ke,sortIndex:-1},se>ye?(q.sortIndex=se,e(h,q),n(u)===null&&q===n(h)&&(D?(x(y),y=-1):D=!0,Fn(M,se-ye))):(q.sortIndex=ke,e(u,q),b||k||(b=!0,dr(j))),q},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(q){var Q=_;return function(){var se=_;_=Q;try{return q.apply(this,arguments)}finally{_=se}}}})(Wy);qy.exports=Wy;var V1=qy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M1=J,Bt=V1;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gy=new Set,Xo={};function Ms(t,e){ki(t,e),ki(t+"Capture",e)}function ki(t,e){for(Xo[t]=e,t=0;t<e.length;t++)Gy.add(e[t])}var nr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ah=Object.prototype.hasOwnProperty,O1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yp={},Xp={};function L1(t){return Ah.call(Xp,t)?!0:Ah.call(Yp,t)?!1:O1.test(t)?Xp[t]=!0:(Yp[t]=!0,!1)}function j1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function F1(t,e,n,r){if(e===null||typeof e>"u"||j1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){lt[t]=new xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];lt[e]=new xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){lt[t]=new xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){lt[t]=new xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){lt[t]=new xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){lt[t]=new xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){lt[t]=new xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){lt[t]=new xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){lt[t]=new xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Gd=/[\-:]([a-z])/g;function Kd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Gd,Kd);lt[e]=new xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Gd,Kd);lt[e]=new xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Gd,Kd);lt[e]=new xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){lt[t]=new xt(t,1,!1,t.toLowerCase(),null,!1,!1)});lt.xlinkHref=new xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){lt[t]=new xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qd(t,e,n,r){var s=lt.hasOwnProperty(e)?lt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(F1(e,n,s,r)&&(n=null),r||s===null?L1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var cr=M1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,al=Symbol.for("react.element"),oi=Symbol.for("react.portal"),ai=Symbol.for("react.fragment"),Yd=Symbol.for("react.strict_mode"),kh=Symbol.for("react.profiler"),Ky=Symbol.for("react.provider"),Qy=Symbol.for("react.context"),Xd=Symbol.for("react.forward_ref"),Rh=Symbol.for("react.suspense"),Ph=Symbol.for("react.suspense_list"),Jd=Symbol.for("react.memo"),Er=Symbol.for("react.lazy"),Yy=Symbol.for("react.offscreen"),Jp=Symbol.iterator;function vo(t){return t===null||typeof t!="object"?null:(t=Jp&&t[Jp]||t["@@iterator"],typeof t=="function"?t:null)}var Ve=Object.assign,Lc;function Ao(t){if(Lc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Lc=e&&e[1]||""}return`
`+Lc+t}var jc=!1;function Fc(t,e){if(!t||jc)return"";jc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{jc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ao(t):""}function U1(t){switch(t.tag){case 5:return Ao(t.type);case 16:return Ao("Lazy");case 13:return Ao("Suspense");case 19:return Ao("SuspenseList");case 0:case 2:case 15:return t=Fc(t.type,!1),t;case 11:return t=Fc(t.type.render,!1),t;case 1:return t=Fc(t.type,!0),t;default:return""}}function Nh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ai:return"Fragment";case oi:return"Portal";case kh:return"Profiler";case Yd:return"StrictMode";case Rh:return"Suspense";case Ph:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Qy:return(t.displayName||"Context")+".Consumer";case Ky:return(t._context.displayName||"Context")+".Provider";case Xd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jd:return e=t.displayName||null,e!==null?e:Nh(t.type)||"Memo";case Er:e=t._payload,t=t._init;try{return Nh(t(e))}catch{}}return null}function z1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nh(e);case 8:return e===Yd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function B1(t){var e=Xy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ll(t){t._valueTracker||(t._valueTracker=B1(t))}function Jy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Xy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Jl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bh(t,e){var n=e.checked;return Ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Zp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Zy(t,e){e=e.checked,e!=null&&Qd(t,"checked",e,!1)}function Dh(t,e){Zy(t,e);var n=Hr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vh(t,e.type,Hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function em(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vh(t,e,n){(e!=="number"||Jl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ko=Array.isArray;function _i(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Hr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Mh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function tm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(ko(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Hr(n)}}function e_(t,e){var n=Hr(e.value),r=Hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function nm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function t_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?t_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ul,n_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ul=ul||document.createElement("div"),ul.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ul.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Jo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Mo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$1=["Webkit","ms","Moz","O"];Object.keys(Mo).forEach(function(t){$1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Mo[e]=Mo[t]})});function r_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Mo.hasOwnProperty(t)&&Mo[t]?(""+e).trim():e+"px"}function s_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=r_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var H1=Ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lh(t,e){if(e){if(H1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function jh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fh=null;function Zd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Uh=null,vi=null,wi=null;function rm(t){if(t=Aa(t)){if(typeof Uh!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Gu(e),Uh(t.stateNode,t.type,e))}}function i_(t){vi?wi?wi.push(t):wi=[t]:vi=t}function o_(){if(vi){var t=vi,e=wi;if(wi=vi=null,rm(t),e)for(t=0;t<e.length;t++)rm(e[t])}}function a_(t,e){return t(e)}function l_(){}var Uc=!1;function u_(t,e,n){if(Uc)return t(e,n);Uc=!0;try{return a_(t,e,n)}finally{Uc=!1,(vi!==null||wi!==null)&&(l_(),o_())}}function Zo(t,e){var n=t.stateNode;if(n===null)return null;var r=Gu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var zh=!1;if(nr)try{var wo={};Object.defineProperty(wo,"passive",{get:function(){zh=!0}}),window.addEventListener("test",wo,wo),window.removeEventListener("test",wo,wo)}catch{zh=!1}function q1(t,e,n,r,s,i,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(p){this.onError(p)}}var Oo=!1,Zl=null,eu=!1,Bh=null,W1={onError:function(t){Oo=!0,Zl=t}};function G1(t,e,n,r,s,i,o,l,u){Oo=!1,Zl=null,q1.apply(W1,arguments)}function K1(t,e,n,r,s,i,o,l,u){if(G1.apply(this,arguments),Oo){if(Oo){var h=Zl;Oo=!1,Zl=null}else throw Error(U(198));eu||(eu=!0,Bh=h)}}function Os(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function c_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function sm(t){if(Os(t)!==t)throw Error(U(188))}function Q1(t){var e=t.alternate;if(!e){if(e=Os(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return sm(s),t;if(i===r)return sm(s),e;i=i.sibling}throw Error(U(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function h_(t){return t=Q1(t),t!==null?d_(t):null}function d_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=d_(t);if(e!==null)return e;t=t.sibling}return null}var f_=Bt.unstable_scheduleCallback,im=Bt.unstable_cancelCallback,Y1=Bt.unstable_shouldYield,X1=Bt.unstable_requestPaint,Fe=Bt.unstable_now,J1=Bt.unstable_getCurrentPriorityLevel,ef=Bt.unstable_ImmediatePriority,p_=Bt.unstable_UserBlockingPriority,tu=Bt.unstable_NormalPriority,Z1=Bt.unstable_LowPriority,m_=Bt.unstable_IdlePriority,$u=null,Rn=null;function eE(t){if(Rn&&typeof Rn.onCommitFiberRoot=="function")try{Rn.onCommitFiberRoot($u,t,void 0,(t.current.flags&128)===128)}catch{}}var gn=Math.clz32?Math.clz32:rE,tE=Math.log,nE=Math.LN2;function rE(t){return t>>>=0,t===0?32:31-(tE(t)/nE|0)|0}var cl=64,hl=4194304;function Ro(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function nu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Ro(l):(i&=o,i!==0&&(r=Ro(i)))}else o=n&~s,o!==0?r=Ro(o):i!==0&&(r=Ro(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-gn(e),s=1<<n,r|=t[n],e&=~s;return r}function sE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-gn(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=sE(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function $h(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function g_(){var t=cl;return cl<<=1,!(cl&4194240)&&(cl=64),t}function zc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function xa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-gn(e),t[e]=n}function oE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-gn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function tf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-gn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var Ee=0;function y_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var __,nf,v_,w_,E_,Hh=!1,dl=[],Nr=null,br=null,Dr=null,ea=new Map,ta=new Map,Ir=[],aE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function om(t,e){switch(t){case"focusin":case"focusout":Nr=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":Dr=null;break;case"pointerover":case"pointerout":ea.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ta.delete(e.pointerId)}}function Eo(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Aa(e),e!==null&&nf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function lE(t,e,n,r,s){switch(e){case"focusin":return Nr=Eo(Nr,t,e,n,r,s),!0;case"dragenter":return br=Eo(br,t,e,n,r,s),!0;case"mouseover":return Dr=Eo(Dr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return ea.set(i,Eo(ea.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,ta.set(i,Eo(ta.get(i)||null,t,e,n,r,s)),!0}return!1}function T_(t){var e=gs(t.target);if(e!==null){var n=Os(e);if(n!==null){if(e=n.tag,e===13){if(e=c_(n),e!==null){t.blockedOn=e,E_(t.priority,function(){v_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=qh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Fh=r,n.target.dispatchEvent(r),Fh=null}else return e=Aa(n),e!==null&&nf(e),t.blockedOn=n,!1;e.shift()}return!0}function am(t,e,n){bl(t)&&n.delete(e)}function uE(){Hh=!1,Nr!==null&&bl(Nr)&&(Nr=null),br!==null&&bl(br)&&(br=null),Dr!==null&&bl(Dr)&&(Dr=null),ea.forEach(am),ta.forEach(am)}function To(t,e){t.blockedOn===e&&(t.blockedOn=null,Hh||(Hh=!0,Bt.unstable_scheduleCallback(Bt.unstable_NormalPriority,uE)))}function na(t){function e(s){return To(s,t)}if(0<dl.length){To(dl[0],t);for(var n=1;n<dl.length;n++){var r=dl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Nr!==null&&To(Nr,t),br!==null&&To(br,t),Dr!==null&&To(Dr,t),ea.forEach(e),ta.forEach(e),n=0;n<Ir.length;n++)r=Ir[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ir.length&&(n=Ir[0],n.blockedOn===null);)T_(n),n.blockedOn===null&&Ir.shift()}var Ei=cr.ReactCurrentBatchConfig,ru=!0;function cE(t,e,n,r){var s=Ee,i=Ei.transition;Ei.transition=null;try{Ee=1,rf(t,e,n,r)}finally{Ee=s,Ei.transition=i}}function hE(t,e,n,r){var s=Ee,i=Ei.transition;Ei.transition=null;try{Ee=4,rf(t,e,n,r)}finally{Ee=s,Ei.transition=i}}function rf(t,e,n,r){if(ru){var s=qh(t,e,n,r);if(s===null)Xc(t,e,r,su,n),om(t,r);else if(lE(s,t,e,n,r))r.stopPropagation();else if(om(t,r),e&4&&-1<aE.indexOf(t)){for(;s!==null;){var i=Aa(s);if(i!==null&&__(i),i=qh(t,e,n,r),i===null&&Xc(t,e,r,su,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Xc(t,e,r,null,n)}}var su=null;function qh(t,e,n,r){if(su=null,t=Zd(r),t=gs(t),t!==null)if(e=Os(t),e===null)t=null;else if(n=e.tag,n===13){if(t=c_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return su=t,null}function I_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(J1()){case ef:return 1;case p_:return 4;case tu:case Z1:return 16;case m_:return 536870912;default:return 16}default:return 16}}var kr=null,sf=null,Dl=null;function S_(){if(Dl)return Dl;var t,e=sf,n=e.length,r,s="value"in kr?kr.value:kr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Dl=s.slice(t,1<r?1-r:void 0)}function Vl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function fl(){return!0}function lm(){return!1}function Ht(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?fl:lm,this.isPropagationStopped=lm,this}return Ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),e}var Hi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},of=Ht(Hi),Ca=Ve({},Hi,{view:0,detail:0}),dE=Ht(Ca),Bc,$c,Io,Hu=Ve({},Ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:af,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Io&&(Io&&t.type==="mousemove"?(Bc=t.screenX-Io.screenX,$c=t.screenY-Io.screenY):$c=Bc=0,Io=t),Bc)},movementY:function(t){return"movementY"in t?t.movementY:$c}}),um=Ht(Hu),fE=Ve({},Hu,{dataTransfer:0}),pE=Ht(fE),mE=Ve({},Ca,{relatedTarget:0}),Hc=Ht(mE),gE=Ve({},Hi,{animationName:0,elapsedTime:0,pseudoElement:0}),yE=Ht(gE),_E=Ve({},Hi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vE=Ht(_E),wE=Ve({},Hi,{data:0}),cm=Ht(wE),EE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},TE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},IE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function SE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=IE[t])?!!e[t]:!1}function af(){return SE}var xE=Ve({},Ca,{key:function(t){if(t.key){var e=EE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?TE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:af,charCode:function(t){return t.type==="keypress"?Vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),CE=Ht(xE),AE=Ve({},Hu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hm=Ht(AE),kE=Ve({},Ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:af}),RE=Ht(kE),PE=Ve({},Hi,{propertyName:0,elapsedTime:0,pseudoElement:0}),NE=Ht(PE),bE=Ve({},Hu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),DE=Ht(bE),VE=[9,13,27,32],lf=nr&&"CompositionEvent"in window,Lo=null;nr&&"documentMode"in document&&(Lo=document.documentMode);var ME=nr&&"TextEvent"in window&&!Lo,x_=nr&&(!lf||Lo&&8<Lo&&11>=Lo),dm=" ",fm=!1;function C_(t,e){switch(t){case"keyup":return VE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function A_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var li=!1;function OE(t,e){switch(t){case"compositionend":return A_(e);case"keypress":return e.which!==32?null:(fm=!0,dm);case"textInput":return t=e.data,t===dm&&fm?null:t;default:return null}}function LE(t,e){if(li)return t==="compositionend"||!lf&&C_(t,e)?(t=S_(),Dl=sf=kr=null,li=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return x_&&e.locale!=="ko"?null:e.data;default:return null}}var jE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jE[t.type]:e==="textarea"}function k_(t,e,n,r){i_(r),e=iu(e,"onChange"),0<e.length&&(n=new of("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var jo=null,ra=null;function FE(t){F_(t,0)}function qu(t){var e=hi(t);if(Jy(e))return t}function UE(t,e){if(t==="change")return e}var R_=!1;if(nr){var qc;if(nr){var Wc="oninput"in document;if(!Wc){var mm=document.createElement("div");mm.setAttribute("oninput","return;"),Wc=typeof mm.oninput=="function"}qc=Wc}else qc=!1;R_=qc&&(!document.documentMode||9<document.documentMode)}function gm(){jo&&(jo.detachEvent("onpropertychange",P_),ra=jo=null)}function P_(t){if(t.propertyName==="value"&&qu(ra)){var e=[];k_(e,ra,t,Zd(t)),u_(FE,e)}}function zE(t,e,n){t==="focusin"?(gm(),jo=e,ra=n,jo.attachEvent("onpropertychange",P_)):t==="focusout"&&gm()}function BE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return qu(ra)}function $E(t,e){if(t==="click")return qu(e)}function HE(t,e){if(t==="input"||t==="change")return qu(e)}function qE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var vn=typeof Object.is=="function"?Object.is:qE;function sa(t,e){if(vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Ah.call(e,s)||!vn(t[s],e[s]))return!1}return!0}function ym(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _m(t,e){var n=ym(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ym(n)}}function N_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?N_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function b_(){for(var t=window,e=Jl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Jl(t.document)}return e}function uf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function WE(t){var e=b_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&N_(n.ownerDocument.documentElement,n)){if(r!==null&&uf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=_m(n,i);var o=_m(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var GE=nr&&"documentMode"in document&&11>=document.documentMode,ui=null,Wh=null,Fo=null,Gh=!1;function vm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gh||ui==null||ui!==Jl(r)||(r=ui,"selectionStart"in r&&uf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fo&&sa(Fo,r)||(Fo=r,r=iu(Wh,"onSelect"),0<r.length&&(e=new of("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ui)))}function pl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ci={animationend:pl("Animation","AnimationEnd"),animationiteration:pl("Animation","AnimationIteration"),animationstart:pl("Animation","AnimationStart"),transitionend:pl("Transition","TransitionEnd")},Gc={},D_={};nr&&(D_=document.createElement("div").style,"AnimationEvent"in window||(delete ci.animationend.animation,delete ci.animationiteration.animation,delete ci.animationstart.animation),"TransitionEvent"in window||delete ci.transitionend.transition);function Wu(t){if(Gc[t])return Gc[t];if(!ci[t])return t;var e=ci[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in D_)return Gc[t]=e[n];return t}var V_=Wu("animationend"),M_=Wu("animationiteration"),O_=Wu("animationstart"),L_=Wu("transitionend"),j_=new Map,wm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jr(t,e){j_.set(t,e),Ms(e,[t])}for(var Kc=0;Kc<wm.length;Kc++){var Qc=wm[Kc],KE=Qc.toLowerCase(),QE=Qc[0].toUpperCase()+Qc.slice(1);Jr(KE,"on"+QE)}Jr(V_,"onAnimationEnd");Jr(M_,"onAnimationIteration");Jr(O_,"onAnimationStart");Jr("dblclick","onDoubleClick");Jr("focusin","onFocus");Jr("focusout","onBlur");Jr(L_,"onTransitionEnd");ki("onMouseEnter",["mouseout","mouseover"]);ki("onMouseLeave",["mouseout","mouseover"]);ki("onPointerEnter",["pointerout","pointerover"]);ki("onPointerLeave",["pointerout","pointerover"]);Ms("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ms("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ms("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ms("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ms("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ms("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Po));function Em(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,K1(r,e,void 0,t),t.currentTarget=null}function F_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;Em(s,l,h),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;Em(s,l,h),i=u}}}if(eu)throw t=Bh,eu=!1,Bh=null,t}function xe(t,e){var n=e[Jh];n===void 0&&(n=e[Jh]=new Set);var r=t+"__bubble";n.has(r)||(U_(e,t,2,!1),n.add(r))}function Yc(t,e,n){var r=0;e&&(r|=4),U_(n,t,r,e)}var ml="_reactListening"+Math.random().toString(36).slice(2);function ia(t){if(!t[ml]){t[ml]=!0,Gy.forEach(function(n){n!=="selectionchange"&&(YE.has(n)||Yc(n,!1,t),Yc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ml]||(e[ml]=!0,Yc("selectionchange",!1,e))}}function U_(t,e,n,r){switch(I_(e)){case 1:var s=cE;break;case 4:s=hE;break;default:s=rf}n=s.bind(null,e,n,t),s=void 0,!zh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Xc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=gs(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}u_(function(){var h=i,p=Zd(n),m=[];e:{var _=j_.get(t);if(_!==void 0){var k=of,b=t;switch(t){case"keypress":if(Vl(n)===0)break e;case"keydown":case"keyup":k=CE;break;case"focusin":b="focus",k=Hc;break;case"focusout":b="blur",k=Hc;break;case"beforeblur":case"afterblur":k=Hc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=um;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=pE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=RE;break;case V_:case M_:case O_:k=yE;break;case L_:k=NE;break;case"scroll":k=dE;break;case"wheel":k=DE;break;case"copy":case"cut":case"paste":k=vE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=hm}var D=(e&4)!==0,L=!D&&t==="scroll",x=D?_!==null?_+"Capture":null:_;D=[];for(var E=h,C;E!==null;){C=E;var M=C.stateNode;if(C.tag===5&&M!==null&&(C=M,x!==null&&(M=Zo(E,x),M!=null&&D.push(oa(E,M,C)))),L)break;E=E.return}0<D.length&&(_=new k(_,b,null,n,p),m.push({event:_,listeners:D}))}}if(!(e&7)){e:{if(_=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",_&&n!==Fh&&(b=n.relatedTarget||n.fromElement)&&(gs(b)||b[rr]))break e;if((k||_)&&(_=p.window===p?p:(_=p.ownerDocument)?_.defaultView||_.parentWindow:window,k?(b=n.relatedTarget||n.toElement,k=h,b=b?gs(b):null,b!==null&&(L=Os(b),b!==L||b.tag!==5&&b.tag!==6)&&(b=null)):(k=null,b=h),k!==b)){if(D=um,M="onMouseLeave",x="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(D=hm,M="onPointerLeave",x="onPointerEnter",E="pointer"),L=k==null?_:hi(k),C=b==null?_:hi(b),_=new D(M,E+"leave",k,n,p),_.target=L,_.relatedTarget=C,M=null,gs(p)===h&&(D=new D(x,E+"enter",b,n,p),D.target=C,D.relatedTarget=L,M=D),L=M,k&&b)t:{for(D=k,x=b,E=0,C=D;C;C=ti(C))E++;for(C=0,M=x;M;M=ti(M))C++;for(;0<E-C;)D=ti(D),E--;for(;0<C-E;)x=ti(x),C--;for(;E--;){if(D===x||x!==null&&D===x.alternate)break t;D=ti(D),x=ti(x)}D=null}else D=null;k!==null&&Tm(m,_,k,D,!1),b!==null&&L!==null&&Tm(m,L,b,D,!0)}}e:{if(_=h?hi(h):window,k=_.nodeName&&_.nodeName.toLowerCase(),k==="select"||k==="input"&&_.type==="file")var j=UE;else if(pm(_))if(R_)j=HE;else{j=BE;var B=zE}else(k=_.nodeName)&&k.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(j=$E);if(j&&(j=j(t,h))){k_(m,j,n,p);break e}B&&B(t,_,h),t==="focusout"&&(B=_._wrapperState)&&B.controlled&&_.type==="number"&&Vh(_,"number",_.value)}switch(B=h?hi(h):window,t){case"focusin":(pm(B)||B.contentEditable==="true")&&(ui=B,Wh=h,Fo=null);break;case"focusout":Fo=Wh=ui=null;break;case"mousedown":Gh=!0;break;case"contextmenu":case"mouseup":case"dragend":Gh=!1,vm(m,n,p);break;case"selectionchange":if(GE)break;case"keydown":case"keyup":vm(m,n,p)}var v;if(lf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else li?C_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(x_&&n.locale!=="ko"&&(li||y!=="onCompositionStart"?y==="onCompositionEnd"&&li&&(v=S_()):(kr=p,sf="value"in kr?kr.value:kr.textContent,li=!0)),B=iu(h,y),0<B.length&&(y=new cm(y,t,null,n,p),m.push({event:y,listeners:B}),v?y.data=v:(v=A_(n),v!==null&&(y.data=v)))),(v=ME?OE(t,n):LE(t,n))&&(h=iu(h,"onBeforeInput"),0<h.length&&(p=new cm("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:h}),p.data=v))}F_(m,e)})}function oa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function iu(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Zo(t,n),i!=null&&r.unshift(oa(t,i,s)),i=Zo(t,e),i!=null&&r.push(oa(t,i,s))),t=t.return}return r}function ti(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Tm(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,s?(u=Zo(n,i),u!=null&&o.unshift(oa(n,u,l))):s||(u=Zo(n,i),u!=null&&o.push(oa(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var XE=/\r\n?/g,JE=/\u0000|\uFFFD/g;function Im(t){return(typeof t=="string"?t:""+t).replace(XE,`
`).replace(JE,"")}function gl(t,e,n){if(e=Im(e),Im(t)!==e&&n)throw Error(U(425))}function ou(){}var Kh=null,Qh=null;function Yh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Xh=typeof setTimeout=="function"?setTimeout:void 0,ZE=typeof clearTimeout=="function"?clearTimeout:void 0,Sm=typeof Promise=="function"?Promise:void 0,eT=typeof queueMicrotask=="function"?queueMicrotask:typeof Sm<"u"?function(t){return Sm.resolve(null).then(t).catch(tT)}:Xh;function tT(t){setTimeout(function(){throw t})}function Jc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),na(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);na(e)}function Vr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function xm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qi=Math.random().toString(36).slice(2),kn="__reactFiber$"+qi,aa="__reactProps$"+qi,rr="__reactContainer$"+qi,Jh="__reactEvents$"+qi,nT="__reactListeners$"+qi,rT="__reactHandles$"+qi;function gs(t){var e=t[kn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[rr]||n[kn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=xm(t);t!==null;){if(n=t[kn])return n;t=xm(t)}return e}t=n,n=t.parentNode}return null}function Aa(t){return t=t[kn]||t[rr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function hi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Gu(t){return t[aa]||null}var Zh=[],di=-1;function Zr(t){return{current:t}}function Ae(t){0>di||(t.current=Zh[di],Zh[di]=null,di--)}function Se(t,e){di++,Zh[di]=t.current,t.current=e}var qr={},wt=Zr(qr),Vt=Zr(!1),xs=qr;function Ri(t,e){var n=t.type.contextTypes;if(!n)return qr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Mt(t){return t=t.childContextTypes,t!=null}function au(){Ae(Vt),Ae(wt)}function Cm(t,e,n){if(wt.current!==qr)throw Error(U(168));Se(wt,e),Se(Vt,n)}function z_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(U(108,z1(t)||"Unknown",s));return Ve({},n,r)}function lu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||qr,xs=wt.current,Se(wt,t),Se(Vt,Vt.current),!0}function Am(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=z_(t,e,xs),r.__reactInternalMemoizedMergedChildContext=t,Ae(Vt),Ae(wt),Se(wt,t)):Ae(Vt),Se(Vt,n)}var Kn=null,Ku=!1,Zc=!1;function B_(t){Kn===null?Kn=[t]:Kn.push(t)}function sT(t){Ku=!0,B_(t)}function es(){if(!Zc&&Kn!==null){Zc=!0;var t=0,e=Ee;try{var n=Kn;for(Ee=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Kn=null,Ku=!1}catch(s){throw Kn!==null&&(Kn=Kn.slice(t+1)),f_(ef,es),s}finally{Ee=e,Zc=!1}}return null}var fi=[],pi=0,uu=null,cu=0,Yt=[],Xt=0,Cs=null,Yn=1,Xn="";function fs(t,e){fi[pi++]=cu,fi[pi++]=uu,uu=t,cu=e}function $_(t,e,n){Yt[Xt++]=Yn,Yt[Xt++]=Xn,Yt[Xt++]=Cs,Cs=t;var r=Yn;t=Xn;var s=32-gn(r)-1;r&=~(1<<s),n+=1;var i=32-gn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Yn=1<<32-gn(e)+s|n<<s|r,Xn=i+t}else Yn=1<<i|n<<s|r,Xn=t}function cf(t){t.return!==null&&(fs(t,1),$_(t,1,0))}function hf(t){for(;t===uu;)uu=fi[--pi],fi[pi]=null,cu=fi[--pi],fi[pi]=null;for(;t===Cs;)Cs=Yt[--Xt],Yt[Xt]=null,Xn=Yt[--Xt],Yt[Xt]=null,Yn=Yt[--Xt],Yt[Xt]=null}var zt=null,Ut=null,Pe=!1,dn=null;function H_(t,e){var n=en(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function km(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,zt=t,Ut=Vr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,zt=t,Ut=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Cs!==null?{id:Yn,overflow:Xn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=en(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,zt=t,Ut=null,!0):!1;default:return!1}}function ed(t){return(t.mode&1)!==0&&(t.flags&128)===0}function td(t){if(Pe){var e=Ut;if(e){var n=e;if(!km(t,e)){if(ed(t))throw Error(U(418));e=Vr(n.nextSibling);var r=zt;e&&km(t,e)?H_(r,n):(t.flags=t.flags&-4097|2,Pe=!1,zt=t)}}else{if(ed(t))throw Error(U(418));t.flags=t.flags&-4097|2,Pe=!1,zt=t}}}function Rm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;zt=t}function yl(t){if(t!==zt)return!1;if(!Pe)return Rm(t),Pe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Yh(t.type,t.memoizedProps)),e&&(e=Ut)){if(ed(t))throw q_(),Error(U(418));for(;e;)H_(t,e),e=Vr(e.nextSibling)}if(Rm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ut=Vr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ut=null}}else Ut=zt?Vr(t.stateNode.nextSibling):null;return!0}function q_(){for(var t=Ut;t;)t=Vr(t.nextSibling)}function Pi(){Ut=zt=null,Pe=!1}function df(t){dn===null?dn=[t]:dn.push(t)}var iT=cr.ReactCurrentBatchConfig;function So(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function _l(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Pm(t){var e=t._init;return e(t._payload)}function W_(t){function e(x,E){if(t){var C=x.deletions;C===null?(x.deletions=[E],x.flags|=16):C.push(E)}}function n(x,E){if(!t)return null;for(;E!==null;)e(x,E),E=E.sibling;return null}function r(x,E){for(x=new Map;E!==null;)E.key!==null?x.set(E.key,E):x.set(E.index,E),E=E.sibling;return x}function s(x,E){return x=jr(x,E),x.index=0,x.sibling=null,x}function i(x,E,C){return x.index=C,t?(C=x.alternate,C!==null?(C=C.index,C<E?(x.flags|=2,E):C):(x.flags|=2,E)):(x.flags|=1048576,E)}function o(x){return t&&x.alternate===null&&(x.flags|=2),x}function l(x,E,C,M){return E===null||E.tag!==6?(E=oh(C,x.mode,M),E.return=x,E):(E=s(E,C),E.return=x,E)}function u(x,E,C,M){var j=C.type;return j===ai?p(x,E,C.props.children,M,C.key):E!==null&&(E.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Er&&Pm(j)===E.type)?(M=s(E,C.props),M.ref=So(x,E,C),M.return=x,M):(M=zl(C.type,C.key,C.props,null,x.mode,M),M.ref=So(x,E,C),M.return=x,M)}function h(x,E,C,M){return E===null||E.tag!==4||E.stateNode.containerInfo!==C.containerInfo||E.stateNode.implementation!==C.implementation?(E=ah(C,x.mode,M),E.return=x,E):(E=s(E,C.children||[]),E.return=x,E)}function p(x,E,C,M,j){return E===null||E.tag!==7?(E=Ts(C,x.mode,M,j),E.return=x,E):(E=s(E,C),E.return=x,E)}function m(x,E,C){if(typeof E=="string"&&E!==""||typeof E=="number")return E=oh(""+E,x.mode,C),E.return=x,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case al:return C=zl(E.type,E.key,E.props,null,x.mode,C),C.ref=So(x,null,E),C.return=x,C;case oi:return E=ah(E,x.mode,C),E.return=x,E;case Er:var M=E._init;return m(x,M(E._payload),C)}if(ko(E)||vo(E))return E=Ts(E,x.mode,C,null),E.return=x,E;_l(x,E)}return null}function _(x,E,C,M){var j=E!==null?E.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return j!==null?null:l(x,E,""+C,M);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case al:return C.key===j?u(x,E,C,M):null;case oi:return C.key===j?h(x,E,C,M):null;case Er:return j=C._init,_(x,E,j(C._payload),M)}if(ko(C)||vo(C))return j!==null?null:p(x,E,C,M,null);_l(x,C)}return null}function k(x,E,C,M,j){if(typeof M=="string"&&M!==""||typeof M=="number")return x=x.get(C)||null,l(E,x,""+M,j);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case al:return x=x.get(M.key===null?C:M.key)||null,u(E,x,M,j);case oi:return x=x.get(M.key===null?C:M.key)||null,h(E,x,M,j);case Er:var B=M._init;return k(x,E,C,B(M._payload),j)}if(ko(M)||vo(M))return x=x.get(C)||null,p(E,x,M,j,null);_l(E,M)}return null}function b(x,E,C,M){for(var j=null,B=null,v=E,y=E=0,T=null;v!==null&&y<C.length;y++){v.index>y?(T=v,v=null):T=v.sibling;var S=_(x,v,C[y],M);if(S===null){v===null&&(v=T);break}t&&v&&S.alternate===null&&e(x,v),E=i(S,E,y),B===null?j=S:B.sibling=S,B=S,v=T}if(y===C.length)return n(x,v),Pe&&fs(x,y),j;if(v===null){for(;y<C.length;y++)v=m(x,C[y],M),v!==null&&(E=i(v,E,y),B===null?j=v:B.sibling=v,B=v);return Pe&&fs(x,y),j}for(v=r(x,v);y<C.length;y++)T=k(v,x,y,C[y],M),T!==null&&(t&&T.alternate!==null&&v.delete(T.key===null?y:T.key),E=i(T,E,y),B===null?j=T:B.sibling=T,B=T);return t&&v.forEach(function(A){return e(x,A)}),Pe&&fs(x,y),j}function D(x,E,C,M){var j=vo(C);if(typeof j!="function")throw Error(U(150));if(C=j.call(C),C==null)throw Error(U(151));for(var B=j=null,v=E,y=E=0,T=null,S=C.next();v!==null&&!S.done;y++,S=C.next()){v.index>y?(T=v,v=null):T=v.sibling;var A=_(x,v,S.value,M);if(A===null){v===null&&(v=T);break}t&&v&&A.alternate===null&&e(x,v),E=i(A,E,y),B===null?j=A:B.sibling=A,B=A,v=T}if(S.done)return n(x,v),Pe&&fs(x,y),j;if(v===null){for(;!S.done;y++,S=C.next())S=m(x,S.value,M),S!==null&&(E=i(S,E,y),B===null?j=S:B.sibling=S,B=S);return Pe&&fs(x,y),j}for(v=r(x,v);!S.done;y++,S=C.next())S=k(v,x,y,S.value,M),S!==null&&(t&&S.alternate!==null&&v.delete(S.key===null?y:S.key),E=i(S,E,y),B===null?j=S:B.sibling=S,B=S);return t&&v.forEach(function(R){return e(x,R)}),Pe&&fs(x,y),j}function L(x,E,C,M){if(typeof C=="object"&&C!==null&&C.type===ai&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case al:e:{for(var j=C.key,B=E;B!==null;){if(B.key===j){if(j=C.type,j===ai){if(B.tag===7){n(x,B.sibling),E=s(B,C.props.children),E.return=x,x=E;break e}}else if(B.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Er&&Pm(j)===B.type){n(x,B.sibling),E=s(B,C.props),E.ref=So(x,B,C),E.return=x,x=E;break e}n(x,B);break}else e(x,B);B=B.sibling}C.type===ai?(E=Ts(C.props.children,x.mode,M,C.key),E.return=x,x=E):(M=zl(C.type,C.key,C.props,null,x.mode,M),M.ref=So(x,E,C),M.return=x,x=M)}return o(x);case oi:e:{for(B=C.key;E!==null;){if(E.key===B)if(E.tag===4&&E.stateNode.containerInfo===C.containerInfo&&E.stateNode.implementation===C.implementation){n(x,E.sibling),E=s(E,C.children||[]),E.return=x,x=E;break e}else{n(x,E);break}else e(x,E);E=E.sibling}E=ah(C,x.mode,M),E.return=x,x=E}return o(x);case Er:return B=C._init,L(x,E,B(C._payload),M)}if(ko(C))return b(x,E,C,M);if(vo(C))return D(x,E,C,M);_l(x,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,E!==null&&E.tag===6?(n(x,E.sibling),E=s(E,C),E.return=x,x=E):(n(x,E),E=oh(C,x.mode,M),E.return=x,x=E),o(x)):n(x,E)}return L}var Ni=W_(!0),G_=W_(!1),hu=Zr(null),du=null,mi=null,ff=null;function pf(){ff=mi=du=null}function mf(t){var e=hu.current;Ae(hu),t._currentValue=e}function nd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ti(t,e){du=t,ff=mi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Dt=!0),t.firstContext=null)}function nn(t){var e=t._currentValue;if(ff!==t)if(t={context:t,memoizedValue:e,next:null},mi===null){if(du===null)throw Error(U(308));mi=t,du.dependencies={lanes:0,firstContext:t}}else mi=mi.next=t;return e}var ys=null;function gf(t){ys===null?ys=[t]:ys.push(t)}function K_(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,gf(e)):(n.next=s.next,s.next=n),e.interleaved=n,sr(t,r)}function sr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Tr=!1;function yf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Q_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function er(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Mr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,pe&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,sr(t,n)}return s=r.interleaved,s===null?(e.next=e,gf(r)):(e.next=s.next,s.next=e),r.interleaved=e,sr(t,n)}function Ml(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,tf(t,n)}}function Nm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function fu(t,e,n,r){var s=t.updateQueue;Tr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?i=h:o.next=h,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=h:l.next=h,p.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,p=h=u=null,l=i;do{var _=l.lane,k=l.eventTime;if((r&_)===_){p!==null&&(p=p.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var b=t,D=l;switch(_=e,k=n,D.tag){case 1:if(b=D.payload,typeof b=="function"){m=b.call(k,m,_);break e}m=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=D.payload,_=typeof b=="function"?b.call(k,m,_):b,_==null)break e;m=Ve({},m,_);break e;case 2:Tr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,_=s.effects,_===null?s.effects=[l]:_.push(l))}else k={eventTime:k,lane:_,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(h=p=k,u=m):p=p.next=k,o|=_;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;_=l,l=_.next,_.next=null,s.lastBaseUpdate=_,s.shared.pending=null}}while(!0);if(p===null&&(u=m),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=p,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);ks|=o,t.lanes=o,t.memoizedState=m}}function bm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(U(191,s));s.call(r)}}}var ka={},Pn=Zr(ka),la=Zr(ka),ua=Zr(ka);function _s(t){if(t===ka)throw Error(U(174));return t}function _f(t,e){switch(Se(ua,e),Se(la,t),Se(Pn,ka),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Oh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Oh(e,t)}Ae(Pn),Se(Pn,e)}function bi(){Ae(Pn),Ae(la),Ae(ua)}function Y_(t){_s(ua.current);var e=_s(Pn.current),n=Oh(e,t.type);e!==n&&(Se(la,t),Se(Pn,n))}function vf(t){la.current===t&&(Ae(Pn),Ae(la))}var Ne=Zr(0);function pu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var eh=[];function wf(){for(var t=0;t<eh.length;t++)eh[t]._workInProgressVersionPrimary=null;eh.length=0}var Ol=cr.ReactCurrentDispatcher,th=cr.ReactCurrentBatchConfig,As=0,De=null,Ge=null,et=null,mu=!1,Uo=!1,ca=0,oT=0;function pt(){throw Error(U(321))}function Ef(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!vn(t[n],e[n]))return!1;return!0}function Tf(t,e,n,r,s,i){if(As=i,De=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ol.current=t===null||t.memoizedState===null?cT:hT,t=n(r,s),Uo){i=0;do{if(Uo=!1,ca=0,25<=i)throw Error(U(301));i+=1,et=Ge=null,e.updateQueue=null,Ol.current=dT,t=n(r,s)}while(Uo)}if(Ol.current=gu,e=Ge!==null&&Ge.next!==null,As=0,et=Ge=De=null,mu=!1,e)throw Error(U(300));return t}function If(){var t=ca!==0;return ca=0,t}function Cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?De.memoizedState=et=t:et=et.next=t,et}function rn(){if(Ge===null){var t=De.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var e=et===null?De.memoizedState:et.next;if(e!==null)et=e,Ge=t;else{if(t===null)throw Error(U(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},et===null?De.memoizedState=et=t:et=et.next=t}return et}function ha(t,e){return typeof e=="function"?e(t):e}function nh(t){var e=rn(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Ge,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,h=i;do{var p=h.lane;if((As&p)===p)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:p,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,De.lanes|=p,ks|=p}h=h.next}while(h!==null&&h!==i);u===null?o=r:u.next=l,vn(r,e.memoizedState)||(Dt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,De.lanes|=i,ks|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function rh(t){var e=rn(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);vn(i,e.memoizedState)||(Dt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function X_(){}function J_(t,e){var n=De,r=rn(),s=e(),i=!vn(r.memoizedState,s);if(i&&(r.memoizedState=s,Dt=!0),r=r.queue,Sf(tv.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||et!==null&&et.memoizedState.tag&1){if(n.flags|=2048,da(9,ev.bind(null,n,r,s,e),void 0,null),nt===null)throw Error(U(349));As&30||Z_(n,e,s)}return s}function Z_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ev(t,e,n,r){e.value=n,e.getSnapshot=r,nv(e)&&rv(t)}function tv(t,e,n){return n(function(){nv(e)&&rv(t)})}function nv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!vn(t,n)}catch{return!0}}function rv(t){var e=sr(t,1);e!==null&&yn(e,t,1,-1)}function Dm(t){var e=Cn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:t},e.queue=t,t=t.dispatch=uT.bind(null,De,t),[e.memoizedState,t]}function da(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function sv(){return rn().memoizedState}function Ll(t,e,n,r){var s=Cn();De.flags|=t,s.memoizedState=da(1|e,n,void 0,r===void 0?null:r)}function Qu(t,e,n,r){var s=rn();r=r===void 0?null:r;var i=void 0;if(Ge!==null){var o=Ge.memoizedState;if(i=o.destroy,r!==null&&Ef(r,o.deps)){s.memoizedState=da(e,n,i,r);return}}De.flags|=t,s.memoizedState=da(1|e,n,i,r)}function Vm(t,e){return Ll(8390656,8,t,e)}function Sf(t,e){return Qu(2048,8,t,e)}function iv(t,e){return Qu(4,2,t,e)}function ov(t,e){return Qu(4,4,t,e)}function av(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function lv(t,e,n){return n=n!=null?n.concat([t]):null,Qu(4,4,av.bind(null,e,t),n)}function xf(){}function uv(t,e){var n=rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ef(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function cv(t,e){var n=rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ef(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function hv(t,e,n){return As&21?(vn(n,e)||(n=g_(),De.lanes|=n,ks|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Dt=!0),t.memoizedState=n)}function aT(t,e){var n=Ee;Ee=n!==0&&4>n?n:4,t(!0);var r=th.transition;th.transition={};try{t(!1),e()}finally{Ee=n,th.transition=r}}function dv(){return rn().memoizedState}function lT(t,e,n){var r=Lr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},fv(t))pv(e,n);else if(n=K_(t,e,n,r),n!==null){var s=It();yn(n,t,r,s),mv(n,e,r)}}function uT(t,e,n){var r=Lr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(fv(t))pv(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,vn(l,o)){var u=e.interleaved;u===null?(s.next=s,gf(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=K_(t,e,s,r),n!==null&&(s=It(),yn(n,t,r,s),mv(n,e,r))}}function fv(t){var e=t.alternate;return t===De||e!==null&&e===De}function pv(t,e){Uo=mu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function mv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,tf(t,n)}}var gu={readContext:nn,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},cT={readContext:nn,useCallback:function(t,e){return Cn().memoizedState=[t,e===void 0?null:e],t},useContext:nn,useEffect:Vm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ll(4194308,4,av.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ll(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ll(4,2,t,e)},useMemo:function(t,e){var n=Cn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Cn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=lT.bind(null,De,t),[r.memoizedState,t]},useRef:function(t){var e=Cn();return t={current:t},e.memoizedState=t},useState:Dm,useDebugValue:xf,useDeferredValue:function(t){return Cn().memoizedState=t},useTransition:function(){var t=Dm(!1),e=t[0];return t=aT.bind(null,t[1]),Cn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=De,s=Cn();if(Pe){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),nt===null)throw Error(U(349));As&30||Z_(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Vm(tv.bind(null,r,i,t),[t]),r.flags|=2048,da(9,ev.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Cn(),e=nt.identifierPrefix;if(Pe){var n=Xn,r=Yn;n=(r&~(1<<32-gn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ca++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=oT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},hT={readContext:nn,useCallback:uv,useContext:nn,useEffect:Sf,useImperativeHandle:lv,useInsertionEffect:iv,useLayoutEffect:ov,useMemo:cv,useReducer:nh,useRef:sv,useState:function(){return nh(ha)},useDebugValue:xf,useDeferredValue:function(t){var e=rn();return hv(e,Ge.memoizedState,t)},useTransition:function(){var t=nh(ha)[0],e=rn().memoizedState;return[t,e]},useMutableSource:X_,useSyncExternalStore:J_,useId:dv,unstable_isNewReconciler:!1},dT={readContext:nn,useCallback:uv,useContext:nn,useEffect:Sf,useImperativeHandle:lv,useInsertionEffect:iv,useLayoutEffect:ov,useMemo:cv,useReducer:rh,useRef:sv,useState:function(){return rh(ha)},useDebugValue:xf,useDeferredValue:function(t){var e=rn();return Ge===null?e.memoizedState=t:hv(e,Ge.memoizedState,t)},useTransition:function(){var t=rh(ha)[0],e=rn().memoizedState;return[t,e]},useMutableSource:X_,useSyncExternalStore:J_,useId:dv,unstable_isNewReconciler:!1};function cn(t,e){if(t&&t.defaultProps){e=Ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function rd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Yu={isMounted:function(t){return(t=t._reactInternals)?Os(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=It(),s=Lr(t),i=er(r,s);i.payload=e,n!=null&&(i.callback=n),e=Mr(t,i,s),e!==null&&(yn(e,t,s,r),Ml(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=It(),s=Lr(t),i=er(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Mr(t,i,s),e!==null&&(yn(e,t,s,r),Ml(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=It(),r=Lr(t),s=er(n,r);s.tag=2,e!=null&&(s.callback=e),e=Mr(t,s,r),e!==null&&(yn(e,t,r,n),Ml(e,t,r))}};function Mm(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!sa(n,r)||!sa(s,i):!0}function gv(t,e,n){var r=!1,s=qr,i=e.contextType;return typeof i=="object"&&i!==null?i=nn(i):(s=Mt(e)?xs:wt.current,r=e.contextTypes,i=(r=r!=null)?Ri(t,s):qr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Om(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Yu.enqueueReplaceState(e,e.state,null)}function sd(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},yf(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=nn(i):(i=Mt(e)?xs:wt.current,s.context=Ri(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(rd(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Yu.enqueueReplaceState(s,s.state,null),fu(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Di(t,e){try{var n="",r=e;do n+=U1(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function sh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function id(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var fT=typeof WeakMap=="function"?WeakMap:Map;function yv(t,e,n){n=er(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){_u||(_u=!0,md=r),id(t,e)},n}function _v(t,e,n){n=er(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){id(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){id(t,e),typeof r!="function"&&(Or===null?Or=new Set([this]):Or.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Lm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new fT;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=AT.bind(null,t,e,n),e.then(t,t))}function jm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Fm(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=er(-1,1),e.tag=2,Mr(n,e,1))),n.lanes|=1),t)}var pT=cr.ReactCurrentOwner,Dt=!1;function Tt(t,e,n,r){e.child=t===null?G_(e,null,n,r):Ni(e,t.child,n,r)}function Um(t,e,n,r,s){n=n.render;var i=e.ref;return Ti(e,s),r=Tf(t,e,n,r,i,s),n=If(),t!==null&&!Dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,ir(t,e,s)):(Pe&&n&&cf(e),e.flags|=1,Tt(t,e,r,s),e.child)}function zm(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Df(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,vv(t,e,i,r,s)):(t=zl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:sa,n(o,r)&&t.ref===e.ref)return ir(t,e,s)}return e.flags|=1,t=jr(i,r),t.ref=e.ref,t.return=e,e.child=t}function vv(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(sa(i,r)&&t.ref===e.ref)if(Dt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Dt=!0);else return e.lanes=t.lanes,ir(t,e,s)}return od(t,e,n,r,s)}function wv(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(yi,Ft),Ft|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Se(yi,Ft),Ft|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Se(yi,Ft),Ft|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Se(yi,Ft),Ft|=r;return Tt(t,e,s,n),e.child}function Ev(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function od(t,e,n,r,s){var i=Mt(n)?xs:wt.current;return i=Ri(e,i),Ti(e,s),n=Tf(t,e,n,r,i,s),r=If(),t!==null&&!Dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,ir(t,e,s)):(Pe&&r&&cf(e),e.flags|=1,Tt(t,e,n,s),e.child)}function Bm(t,e,n,r,s){if(Mt(n)){var i=!0;lu(e)}else i=!1;if(Ti(e,s),e.stateNode===null)jl(t,e),gv(e,n,r),sd(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=nn(h):(h=Mt(n)?xs:wt.current,h=Ri(e,h));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Om(e,o,r,h),Tr=!1;var _=e.memoizedState;o.state=_,fu(e,r,o,s),u=e.memoizedState,l!==r||_!==u||Vt.current||Tr?(typeof p=="function"&&(rd(e,n,p,r),u=e.memoizedState),(l=Tr||Mm(e,n,l,r,_,u,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Q_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:cn(e.type,l),o.props=h,m=e.pendingProps,_=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=nn(u):(u=Mt(n)?xs:wt.current,u=Ri(e,u));var k=n.getDerivedStateFromProps;(p=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||_!==u)&&Om(e,o,r,u),Tr=!1,_=e.memoizedState,o.state=_,fu(e,r,o,s);var b=e.memoizedState;l!==m||_!==b||Vt.current||Tr?(typeof k=="function"&&(rd(e,n,k,r),b=e.memoizedState),(h=Tr||Mm(e,n,h,r,_,b,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,b,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,b,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=b),o.props=r,o.state=b,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),r=!1)}return ad(t,e,n,r,i,s)}function ad(t,e,n,r,s,i){Ev(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Am(e,n,!1),ir(t,e,i);r=e.stateNode,pT.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ni(e,t.child,null,i),e.child=Ni(e,null,l,i)):Tt(t,e,l,i),e.memoizedState=r.state,s&&Am(e,n,!0),e.child}function Tv(t){var e=t.stateNode;e.pendingContext?Cm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Cm(t,e.context,!1),_f(t,e.containerInfo)}function $m(t,e,n,r,s){return Pi(),df(s),e.flags|=256,Tt(t,e,n,r),e.child}var ld={dehydrated:null,treeContext:null,retryLane:0};function ud(t){return{baseLanes:t,cachePool:null,transitions:null}}function Iv(t,e,n){var r=e.pendingProps,s=Ne.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Se(Ne,s&1),t===null)return td(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Zu(o,r,0,null),t=Ts(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=ud(n),e.memoizedState=ld,t):Cf(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return mT(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=jr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=jr(l,i):(i=Ts(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?ud(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=ld,r}return i=t.child,t=i.sibling,r=jr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Cf(t,e){return e=Zu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function vl(t,e,n,r){return r!==null&&df(r),Ni(e,t.child,null,n),t=Cf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function mT(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=sh(Error(U(422))),vl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Zu({mode:"visible",children:r.children},s,0,null),i=Ts(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Ni(e,t.child,null,o),e.child.memoizedState=ud(o),e.memoizedState=ld,i);if(!(e.mode&1))return vl(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(U(419)),r=sh(i,r,void 0),vl(t,e,o,r)}if(l=(o&t.childLanes)!==0,Dt||l){if(r=nt,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,sr(t,s),yn(r,t,s,-1))}return bf(),r=sh(Error(U(421))),vl(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=kT.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Ut=Vr(s.nextSibling),zt=e,Pe=!0,dn=null,t!==null&&(Yt[Xt++]=Yn,Yt[Xt++]=Xn,Yt[Xt++]=Cs,Yn=t.id,Xn=t.overflow,Cs=e),e=Cf(e,r.children),e.flags|=4096,e)}function Hm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),nd(t.return,e,n)}function ih(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Sv(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Tt(t,e,r.children,n),r=Ne.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Hm(t,n,e);else if(t.tag===19)Hm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Se(Ne,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&pu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),ih(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&pu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}ih(e,!0,n,null,i);break;case"together":ih(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function jl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ir(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ks|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=jr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=jr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function gT(t,e,n){switch(e.tag){case 3:Tv(e),Pi();break;case 5:Y_(e);break;case 1:Mt(e.type)&&lu(e);break;case 4:_f(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Se(hu,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Se(Ne,Ne.current&1),e.flags|=128,null):n&e.child.childLanes?Iv(t,e,n):(Se(Ne,Ne.current&1),t=ir(t,e,n),t!==null?t.sibling:null);Se(Ne,Ne.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Sv(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Se(Ne,Ne.current),r)break;return null;case 22:case 23:return e.lanes=0,wv(t,e,n)}return ir(t,e,n)}var xv,cd,Cv,Av;xv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};cd=function(){};Cv=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,_s(Pn.current);var i=null;switch(n){case"input":s=bh(t,s),r=bh(t,r),i=[];break;case"select":s=Ve({},s,{value:void 0}),r=Ve({},r,{value:void 0}),i=[];break;case"textarea":s=Mh(t,s),r=Mh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ou)}Lh(n,r);var o;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var l=s[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Xo.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var u=r[h];if(l=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Xo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&xe("scroll",t),i||l===u||(i=[])):(i=i||[]).push(h,u))}n&&(i=i||[]).push("style",n);var h=i;(e.updateQueue=h)&&(e.flags|=4)}};Av=function(t,e,n,r){n!==r&&(e.flags|=4)};function xo(t,e){if(!Pe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function yT(t,e,n){var r=e.pendingProps;switch(hf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return Mt(e.type)&&au(),mt(e),null;case 3:return r=e.stateNode,bi(),Ae(Vt),Ae(wt),wf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(yl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,dn!==null&&(_d(dn),dn=null))),cd(t,e),mt(e),null;case 5:vf(e);var s=_s(ua.current);if(n=e.type,t!==null&&e.stateNode!=null)Cv(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return mt(e),null}if(t=_s(Pn.current),yl(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[kn]=e,r[aa]=i,t=(e.mode&1)!==0,n){case"dialog":xe("cancel",r),xe("close",r);break;case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(s=0;s<Po.length;s++)xe(Po[s],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"details":xe("toggle",r);break;case"input":Zp(r,i),xe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},xe("invalid",r);break;case"textarea":tm(r,i),xe("invalid",r)}Lh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&gl(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&gl(r.textContent,l,t),s=["children",""+l]):Xo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&xe("scroll",r)}switch(n){case"input":ll(r),em(r,i,!0);break;case"textarea":ll(r),nm(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ou)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=t_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[kn]=e,t[aa]=r,xv(t,e,!1,!1),e.stateNode=t;e:{switch(o=jh(n,r),n){case"dialog":xe("cancel",t),xe("close",t),s=r;break;case"iframe":case"object":case"embed":xe("load",t),s=r;break;case"video":case"audio":for(s=0;s<Po.length;s++)xe(Po[s],t);s=r;break;case"source":xe("error",t),s=r;break;case"img":case"image":case"link":xe("error",t),xe("load",t),s=r;break;case"details":xe("toggle",t),s=r;break;case"input":Zp(t,r),s=bh(t,r),xe("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Ve({},r,{value:void 0}),xe("invalid",t);break;case"textarea":tm(t,r),s=Mh(t,r),xe("invalid",t);break;default:s=r}Lh(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?s_(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&n_(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Jo(t,u):typeof u=="number"&&Jo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Xo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&xe("scroll",t):u!=null&&Qd(t,i,u,o))}switch(n){case"input":ll(t),em(t,r,!1);break;case"textarea":ll(t),nm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Hr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?_i(t,!!r.multiple,i,!1):r.defaultValue!=null&&_i(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=ou)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return mt(e),null;case 6:if(t&&e.stateNode!=null)Av(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=_s(ua.current),_s(Pn.current),yl(e)){if(r=e.stateNode,n=e.memoizedProps,r[kn]=e,(i=r.nodeValue!==n)&&(t=zt,t!==null))switch(t.tag){case 3:gl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&gl(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kn]=e,e.stateNode=r}return mt(e),null;case 13:if(Ae(Ne),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Pe&&Ut!==null&&e.mode&1&&!(e.flags&128))q_(),Pi(),e.flags|=98560,i=!1;else if(i=yl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(U(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(U(317));i[kn]=e}else Pi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;mt(e),i=!1}else dn!==null&&(_d(dn),dn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ne.current&1?Qe===0&&(Qe=3):bf())),e.updateQueue!==null&&(e.flags|=4),mt(e),null);case 4:return bi(),cd(t,e),t===null&&ia(e.stateNode.containerInfo),mt(e),null;case 10:return mf(e.type._context),mt(e),null;case 17:return Mt(e.type)&&au(),mt(e),null;case 19:if(Ae(Ne),i=e.memoizedState,i===null)return mt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)xo(i,!1);else{if(Qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=pu(t),o!==null){for(e.flags|=128,xo(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Se(Ne,Ne.current&1|2),e.child}t=t.sibling}i.tail!==null&&Fe()>Vi&&(e.flags|=128,r=!0,xo(i,!1),e.lanes=4194304)}else{if(!r)if(t=pu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),xo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Pe)return mt(e),null}else 2*Fe()-i.renderingStartTime>Vi&&n!==1073741824&&(e.flags|=128,r=!0,xo(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Fe(),e.sibling=null,n=Ne.current,Se(Ne,r?n&1|2:n&1),e):(mt(e),null);case 22:case 23:return Nf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ft&1073741824&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function _T(t,e){switch(hf(e),e.tag){case 1:return Mt(e.type)&&au(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return bi(),Ae(Vt),Ae(wt),wf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return vf(e),null;case 13:if(Ae(Ne),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));Pi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ae(Ne),null;case 4:return bi(),null;case 10:return mf(e.type._context),null;case 22:case 23:return Nf(),null;case 24:return null;default:return null}}var wl=!1,_t=!1,vT=typeof WeakSet=="function"?WeakSet:Set,K=null;function gi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(t,e,r)}else n.current=null}function hd(t,e,n){try{n()}catch(r){Oe(t,e,r)}}var qm=!1;function wT(t,e){if(Kh=ru,t=b_(),uf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,p=0,m=t,_=null;t:for(;;){for(var k;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(k=m.firstChild)!==null;)_=m,m=k;for(;;){if(m===t)break t;if(_===n&&++h===s&&(l=o),_===i&&++p===r&&(u=o),(k=m.nextSibling)!==null)break;m=_,_=m.parentNode}m=k}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qh={focusedElem:t,selectionRange:n},ru=!1,K=e;K!==null;)if(e=K,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,K=t;else for(;K!==null;){e=K;try{var b=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var D=b.memoizedProps,L=b.memoizedState,x=e.stateNode,E=x.getSnapshotBeforeUpdate(e.elementType===e.type?D:cn(e.type,D),L);x.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(M){Oe(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,K=t;break}K=e.return}return b=qm,qm=!1,b}function zo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&hd(e,n,i)}s=s.next}while(s!==r)}}function Xu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function dd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function kv(t){var e=t.alternate;e!==null&&(t.alternate=null,kv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[kn],delete e[aa],delete e[Jh],delete e[nT],delete e[rT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Rv(t){return t.tag===5||t.tag===3||t.tag===4}function Wm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Rv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ou));else if(r!==4&&(t=t.child,t!==null))for(fd(t,e,n),t=t.sibling;t!==null;)fd(t,e,n),t=t.sibling}function pd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(pd(t,e,n),t=t.sibling;t!==null;)pd(t,e,n),t=t.sibling}var st=null,hn=!1;function vr(t,e,n){for(n=n.child;n!==null;)Pv(t,e,n),n=n.sibling}function Pv(t,e,n){if(Rn&&typeof Rn.onCommitFiberUnmount=="function")try{Rn.onCommitFiberUnmount($u,n)}catch{}switch(n.tag){case 5:_t||gi(n,e);case 6:var r=st,s=hn;st=null,vr(t,e,n),st=r,hn=s,st!==null&&(hn?(t=st,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):st.removeChild(n.stateNode));break;case 18:st!==null&&(hn?(t=st,n=n.stateNode,t.nodeType===8?Jc(t.parentNode,n):t.nodeType===1&&Jc(t,n),na(t)):Jc(st,n.stateNode));break;case 4:r=st,s=hn,st=n.stateNode.containerInfo,hn=!0,vr(t,e,n),st=r,hn=s;break;case 0:case 11:case 14:case 15:if(!_t&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&hd(n,e,o),s=s.next}while(s!==r)}vr(t,e,n);break;case 1:if(!_t&&(gi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Oe(n,e,l)}vr(t,e,n);break;case 21:vr(t,e,n);break;case 22:n.mode&1?(_t=(r=_t)||n.memoizedState!==null,vr(t,e,n),_t=r):vr(t,e,n);break;default:vr(t,e,n)}}function Gm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new vT),e.forEach(function(r){var s=RT.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function un(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:st=l.stateNode,hn=!1;break e;case 3:st=l.stateNode.containerInfo,hn=!0;break e;case 4:st=l.stateNode.containerInfo,hn=!0;break e}l=l.return}if(st===null)throw Error(U(160));Pv(i,o,s),st=null,hn=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(h){Oe(s,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Nv(e,t),e=e.sibling}function Nv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(un(e,t),xn(t),r&4){try{zo(3,t,t.return),Xu(3,t)}catch(D){Oe(t,t.return,D)}try{zo(5,t,t.return)}catch(D){Oe(t,t.return,D)}}break;case 1:un(e,t),xn(t),r&512&&n!==null&&gi(n,n.return);break;case 5:if(un(e,t),xn(t),r&512&&n!==null&&gi(n,n.return),t.flags&32){var s=t.stateNode;try{Jo(s,"")}catch(D){Oe(t,t.return,D)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Zy(s,i),jh(l,o);var h=jh(l,i);for(o=0;o<u.length;o+=2){var p=u[o],m=u[o+1];p==="style"?s_(s,m):p==="dangerouslySetInnerHTML"?n_(s,m):p==="children"?Jo(s,m):Qd(s,p,m,h)}switch(l){case"input":Dh(s,i);break;case"textarea":e_(s,i);break;case"select":var _=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?_i(s,!!i.multiple,k,!1):_!==!!i.multiple&&(i.defaultValue!=null?_i(s,!!i.multiple,i.defaultValue,!0):_i(s,!!i.multiple,i.multiple?[]:"",!1))}s[aa]=i}catch(D){Oe(t,t.return,D)}}break;case 6:if(un(e,t),xn(t),r&4){if(t.stateNode===null)throw Error(U(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(D){Oe(t,t.return,D)}}break;case 3:if(un(e,t),xn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{na(e.containerInfo)}catch(D){Oe(t,t.return,D)}break;case 4:un(e,t),xn(t);break;case 13:un(e,t),xn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Rf=Fe())),r&4&&Gm(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(_t=(h=_t)||p,un(e,t),_t=h):un(e,t),xn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!p&&t.mode&1)for(K=t,p=t.child;p!==null;){for(m=K=p;K!==null;){switch(_=K,k=_.child,_.tag){case 0:case 11:case 14:case 15:zo(4,_,_.return);break;case 1:gi(_,_.return);var b=_.stateNode;if(typeof b.componentWillUnmount=="function"){r=_,n=_.return;try{e=r,b.props=e.memoizedProps,b.state=e.memoizedState,b.componentWillUnmount()}catch(D){Oe(r,n,D)}}break;case 5:gi(_,_.return);break;case 22:if(_.memoizedState!==null){Qm(m);continue}}k!==null?(k.return=_,K=k):Qm(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{s=m.stateNode,h?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=r_("display",o))}catch(D){Oe(t,t.return,D)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(D){Oe(t,t.return,D)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:un(e,t),xn(t),r&4&&Gm(t);break;case 21:break;default:un(e,t),xn(t)}}function xn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Rv(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Jo(s,""),r.flags&=-33);var i=Wm(t);pd(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Wm(t);fd(t,l,o);break;default:throw Error(U(161))}}catch(u){Oe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ET(t,e,n){K=t,bv(t)}function bv(t,e,n){for(var r=(t.mode&1)!==0;K!==null;){var s=K,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||wl;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||_t;l=wl;var h=_t;if(wl=o,(_t=u)&&!h)for(K=s;K!==null;)o=K,u=o.child,o.tag===22&&o.memoizedState!==null?Ym(s):u!==null?(u.return=o,K=u):Ym(s);for(;i!==null;)K=i,bv(i),i=i.sibling;K=s,wl=l,_t=h}Km(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,K=i):Km(t)}}function Km(t){for(;K!==null;){var e=K;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:_t||Xu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!_t)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:cn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&bm(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}bm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var p=h.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&na(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}_t||e.flags&512&&dd(e)}catch(_){Oe(e,e.return,_)}}if(e===t){K=null;break}if(n=e.sibling,n!==null){n.return=e.return,K=n;break}K=e.return}}function Qm(t){for(;K!==null;){var e=K;if(e===t){K=null;break}var n=e.sibling;if(n!==null){n.return=e.return,K=n;break}K=e.return}}function Ym(t){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xu(4,e)}catch(u){Oe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Oe(e,s,u)}}var i=e.return;try{dd(e)}catch(u){Oe(e,i,u)}break;case 5:var o=e.return;try{dd(e)}catch(u){Oe(e,o,u)}}}catch(u){Oe(e,e.return,u)}if(e===t){K=null;break}var l=e.sibling;if(l!==null){l.return=e.return,K=l;break}K=e.return}}var TT=Math.ceil,yu=cr.ReactCurrentDispatcher,Af=cr.ReactCurrentOwner,tn=cr.ReactCurrentBatchConfig,pe=0,nt=null,Be=null,at=0,Ft=0,yi=Zr(0),Qe=0,fa=null,ks=0,Ju=0,kf=0,Bo=null,bt=null,Rf=0,Vi=1/0,Gn=null,_u=!1,md=null,Or=null,El=!1,Rr=null,vu=0,$o=0,gd=null,Fl=-1,Ul=0;function It(){return pe&6?Fe():Fl!==-1?Fl:Fl=Fe()}function Lr(t){return t.mode&1?pe&2&&at!==0?at&-at:iT.transition!==null?(Ul===0&&(Ul=g_()),Ul):(t=Ee,t!==0||(t=window.event,t=t===void 0?16:I_(t.type)),t):1}function yn(t,e,n,r){if(50<$o)throw $o=0,gd=null,Error(U(185));xa(t,n,r),(!(pe&2)||t!==nt)&&(t===nt&&(!(pe&2)&&(Ju|=n),Qe===4&&Sr(t,at)),Ot(t,r),n===1&&pe===0&&!(e.mode&1)&&(Vi=Fe()+500,Ku&&es()))}function Ot(t,e){var n=t.callbackNode;iE(t,e);var r=nu(t,t===nt?at:0);if(r===0)n!==null&&im(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&im(n),e===1)t.tag===0?sT(Xm.bind(null,t)):B_(Xm.bind(null,t)),eT(function(){!(pe&6)&&es()}),n=null;else{switch(y_(r)){case 1:n=ef;break;case 4:n=p_;break;case 16:n=tu;break;case 536870912:n=m_;break;default:n=tu}n=Uv(n,Dv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Dv(t,e){if(Fl=-1,Ul=0,pe&6)throw Error(U(327));var n=t.callbackNode;if(Ii()&&t.callbackNode!==n)return null;var r=nu(t,t===nt?at:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=wu(t,r);else{e=r;var s=pe;pe|=2;var i=Mv();(nt!==t||at!==e)&&(Gn=null,Vi=Fe()+500,Es(t,e));do try{xT();break}catch(l){Vv(t,l)}while(!0);pf(),yu.current=i,pe=s,Be!==null?e=0:(nt=null,at=0,e=Qe)}if(e!==0){if(e===2&&(s=$h(t),s!==0&&(r=s,e=yd(t,s))),e===1)throw n=fa,Es(t,0),Sr(t,r),Ot(t,Fe()),n;if(e===6)Sr(t,r);else{if(s=t.current.alternate,!(r&30)&&!IT(s)&&(e=wu(t,r),e===2&&(i=$h(t),i!==0&&(r=i,e=yd(t,i))),e===1))throw n=fa,Es(t,0),Sr(t,r),Ot(t,Fe()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:ps(t,bt,Gn);break;case 3:if(Sr(t,r),(r&130023424)===r&&(e=Rf+500-Fe(),10<e)){if(nu(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){It(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Xh(ps.bind(null,t,bt,Gn),e);break}ps(t,bt,Gn);break;case 4:if(Sr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-gn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*TT(r/1960))-r,10<r){t.timeoutHandle=Xh(ps.bind(null,t,bt,Gn),r);break}ps(t,bt,Gn);break;case 5:ps(t,bt,Gn);break;default:throw Error(U(329))}}}return Ot(t,Fe()),t.callbackNode===n?Dv.bind(null,t):null}function yd(t,e){var n=Bo;return t.current.memoizedState.isDehydrated&&(Es(t,e).flags|=256),t=wu(t,e),t!==2&&(e=bt,bt=n,e!==null&&_d(e)),t}function _d(t){bt===null?bt=t:bt.push.apply(bt,t)}function IT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!vn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sr(t,e){for(e&=~kf,e&=~Ju,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-gn(e),r=1<<n;t[n]=-1,e&=~r}}function Xm(t){if(pe&6)throw Error(U(327));Ii();var e=nu(t,0);if(!(e&1))return Ot(t,Fe()),null;var n=wu(t,e);if(t.tag!==0&&n===2){var r=$h(t);r!==0&&(e=r,n=yd(t,r))}if(n===1)throw n=fa,Es(t,0),Sr(t,e),Ot(t,Fe()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ps(t,bt,Gn),Ot(t,Fe()),null}function Pf(t,e){var n=pe;pe|=1;try{return t(e)}finally{pe=n,pe===0&&(Vi=Fe()+500,Ku&&es())}}function Rs(t){Rr!==null&&Rr.tag===0&&!(pe&6)&&Ii();var e=pe;pe|=1;var n=tn.transition,r=Ee;try{if(tn.transition=null,Ee=1,t)return t()}finally{Ee=r,tn.transition=n,pe=e,!(pe&6)&&es()}}function Nf(){Ft=yi.current,Ae(yi)}function Es(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ZE(n)),Be!==null)for(n=Be.return;n!==null;){var r=n;switch(hf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&au();break;case 3:bi(),Ae(Vt),Ae(wt),wf();break;case 5:vf(r);break;case 4:bi();break;case 13:Ae(Ne);break;case 19:Ae(Ne);break;case 10:mf(r.type._context);break;case 22:case 23:Nf()}n=n.return}if(nt=t,Be=t=jr(t.current,null),at=Ft=e,Qe=0,fa=null,kf=Ju=ks=0,bt=Bo=null,ys!==null){for(e=0;e<ys.length;e++)if(n=ys[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}ys=null}return t}function Vv(t,e){do{var n=Be;try{if(pf(),Ol.current=gu,mu){for(var r=De.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}mu=!1}if(As=0,et=Ge=De=null,Uo=!1,ca=0,Af.current=null,n===null||n.return===null){Qe=1,fa=e,Be=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=at,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var _=p.alternate;_?(p.updateQueue=_.updateQueue,p.memoizedState=_.memoizedState,p.lanes=_.lanes):(p.updateQueue=null,p.memoizedState=null)}var k=jm(o);if(k!==null){k.flags&=-257,Fm(k,o,l,i,e),k.mode&1&&Lm(i,h,e),e=k,u=h;var b=e.updateQueue;if(b===null){var D=new Set;D.add(u),e.updateQueue=D}else b.add(u);break e}else{if(!(e&1)){Lm(i,h,e),bf();break e}u=Error(U(426))}}else if(Pe&&l.mode&1){var L=jm(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),Fm(L,o,l,i,e),df(Di(u,l));break e}}i=u=Di(u,l),Qe!==4&&(Qe=2),Bo===null?Bo=[i]:Bo.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var x=yv(i,u,e);Nm(i,x);break e;case 1:l=u;var E=i.type,C=i.stateNode;if(!(i.flags&128)&&(typeof E.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(Or===null||!Or.has(C)))){i.flags|=65536,e&=-e,i.lanes|=e;var M=_v(i,l,e);Nm(i,M);break e}}i=i.return}while(i!==null)}Lv(n)}catch(j){e=j,Be===n&&n!==null&&(Be=n=n.return);continue}break}while(!0)}function Mv(){var t=yu.current;return yu.current=gu,t===null?gu:t}function bf(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),nt===null||!(ks&268435455)&&!(Ju&268435455)||Sr(nt,at)}function wu(t,e){var n=pe;pe|=2;var r=Mv();(nt!==t||at!==e)&&(Gn=null,Es(t,e));do try{ST();break}catch(s){Vv(t,s)}while(!0);if(pf(),pe=n,yu.current=r,Be!==null)throw Error(U(261));return nt=null,at=0,Qe}function ST(){for(;Be!==null;)Ov(Be)}function xT(){for(;Be!==null&&!Y1();)Ov(Be)}function Ov(t){var e=Fv(t.alternate,t,Ft);t.memoizedProps=t.pendingProps,e===null?Lv(t):Be=e,Af.current=null}function Lv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=_T(n,e),n!==null){n.flags&=32767,Be=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qe=6,Be=null;return}}else if(n=yT(n,e,Ft),n!==null){Be=n;return}if(e=e.sibling,e!==null){Be=e;return}Be=e=t}while(e!==null);Qe===0&&(Qe=5)}function ps(t,e,n){var r=Ee,s=tn.transition;try{tn.transition=null,Ee=1,CT(t,e,n,r)}finally{tn.transition=s,Ee=r}return null}function CT(t,e,n,r){do Ii();while(Rr!==null);if(pe&6)throw Error(U(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(oE(t,i),t===nt&&(Be=nt=null,at=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||El||(El=!0,Uv(tu,function(){return Ii(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=tn.transition,tn.transition=null;var o=Ee;Ee=1;var l=pe;pe|=4,Af.current=null,wT(t,n),Nv(n,t),WE(Qh),ru=!!Kh,Qh=Kh=null,t.current=n,ET(n),X1(),pe=l,Ee=o,tn.transition=i}else t.current=n;if(El&&(El=!1,Rr=t,vu=s),i=t.pendingLanes,i===0&&(Or=null),eE(n.stateNode),Ot(t,Fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(_u)throw _u=!1,t=md,md=null,t;return vu&1&&t.tag!==0&&Ii(),i=t.pendingLanes,i&1?t===gd?$o++:($o=0,gd=t):$o=0,es(),null}function Ii(){if(Rr!==null){var t=y_(vu),e=tn.transition,n=Ee;try{if(tn.transition=null,Ee=16>t?16:t,Rr===null)var r=!1;else{if(t=Rr,Rr=null,vu=0,pe&6)throw Error(U(331));var s=pe;for(pe|=4,K=t.current;K!==null;){var i=K,o=i.child;if(K.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(K=h;K!==null;){var p=K;switch(p.tag){case 0:case 11:case 15:zo(8,p,i)}var m=p.child;if(m!==null)m.return=p,K=m;else for(;K!==null;){p=K;var _=p.sibling,k=p.return;if(kv(p),p===h){K=null;break}if(_!==null){_.return=k,K=_;break}K=k}}}var b=i.alternate;if(b!==null){var D=b.child;if(D!==null){b.child=null;do{var L=D.sibling;D.sibling=null,D=L}while(D!==null)}}K=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,K=o;else e:for(;K!==null;){if(i=K,i.flags&2048)switch(i.tag){case 0:case 11:case 15:zo(9,i,i.return)}var x=i.sibling;if(x!==null){x.return=i.return,K=x;break e}K=i.return}}var E=t.current;for(K=E;K!==null;){o=K;var C=o.child;if(o.subtreeFlags&2064&&C!==null)C.return=o,K=C;else e:for(o=E;K!==null;){if(l=K,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Xu(9,l)}}catch(j){Oe(l,l.return,j)}if(l===o){K=null;break e}var M=l.sibling;if(M!==null){M.return=l.return,K=M;break e}K=l.return}}if(pe=s,es(),Rn&&typeof Rn.onPostCommitFiberRoot=="function")try{Rn.onPostCommitFiberRoot($u,t)}catch{}r=!0}return r}finally{Ee=n,tn.transition=e}}return!1}function Jm(t,e,n){e=Di(n,e),e=yv(t,e,1),t=Mr(t,e,1),e=It(),t!==null&&(xa(t,1,e),Ot(t,e))}function Oe(t,e,n){if(t.tag===3)Jm(t,t,n);else for(;e!==null;){if(e.tag===3){Jm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Or===null||!Or.has(r))){t=Di(n,t),t=_v(e,t,1),e=Mr(e,t,1),t=It(),e!==null&&(xa(e,1,t),Ot(e,t));break}}e=e.return}}function AT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=It(),t.pingedLanes|=t.suspendedLanes&n,nt===t&&(at&n)===n&&(Qe===4||Qe===3&&(at&130023424)===at&&500>Fe()-Rf?Es(t,0):kf|=n),Ot(t,e)}function jv(t,e){e===0&&(t.mode&1?(e=hl,hl<<=1,!(hl&130023424)&&(hl=4194304)):e=1);var n=It();t=sr(t,e),t!==null&&(xa(t,e,n),Ot(t,n))}function kT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),jv(t,n)}function RT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),jv(t,n)}var Fv;Fv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Vt.current)Dt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Dt=!1,gT(t,e,n);Dt=!!(t.flags&131072)}else Dt=!1,Pe&&e.flags&1048576&&$_(e,cu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;jl(t,e),t=e.pendingProps;var s=Ri(e,wt.current);Ti(e,n),s=Tf(null,e,r,t,s,n);var i=If();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Mt(r)?(i=!0,lu(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,yf(e),s.updater=Yu,e.stateNode=s,s._reactInternals=e,sd(e,r,t,n),e=ad(null,e,r,!0,i,n)):(e.tag=0,Pe&&i&&cf(e),Tt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(jl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=NT(r),t=cn(r,t),s){case 0:e=od(null,e,r,t,n);break e;case 1:e=Bm(null,e,r,t,n);break e;case 11:e=Um(null,e,r,t,n);break e;case 14:e=zm(null,e,r,cn(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:cn(r,s),od(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:cn(r,s),Bm(t,e,r,s,n);case 3:e:{if(Tv(e),t===null)throw Error(U(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Q_(t,e),fu(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Di(Error(U(423)),e),e=$m(t,e,r,n,s);break e}else if(r!==s){s=Di(Error(U(424)),e),e=$m(t,e,r,n,s);break e}else for(Ut=Vr(e.stateNode.containerInfo.firstChild),zt=e,Pe=!0,dn=null,n=G_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Pi(),r===s){e=ir(t,e,n);break e}Tt(t,e,r,n)}e=e.child}return e;case 5:return Y_(e),t===null&&td(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Yh(r,s)?o=null:i!==null&&Yh(r,i)&&(e.flags|=32),Ev(t,e),Tt(t,e,o,n),e.child;case 6:return t===null&&td(e),null;case 13:return Iv(t,e,n);case 4:return _f(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ni(e,null,r,n):Tt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:cn(r,s),Um(t,e,r,s,n);case 7:return Tt(t,e,e.pendingProps,n),e.child;case 8:return Tt(t,e,e.pendingProps.children,n),e.child;case 12:return Tt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Se(hu,r._currentValue),r._currentValue=o,i!==null)if(vn(i.value,o)){if(i.children===s.children&&!Vt.current){e=ir(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=er(-1,n&-n),u.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var p=h.pending;p===null?u.next=u:(u.next=p.next,p.next=u),h.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),nd(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),nd(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Tt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Ti(e,n),s=nn(s),r=r(s),e.flags|=1,Tt(t,e,r,n),e.child;case 14:return r=e.type,s=cn(r,e.pendingProps),s=cn(r.type,s),zm(t,e,r,s,n);case 15:return vv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:cn(r,s),jl(t,e),e.tag=1,Mt(r)?(t=!0,lu(e)):t=!1,Ti(e,n),gv(e,r,s),sd(e,r,s,n),ad(null,e,r,!0,t,n);case 19:return Sv(t,e,n);case 22:return wv(t,e,n)}throw Error(U(156,e.tag))};function Uv(t,e){return f_(t,e)}function PT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(t,e,n,r){return new PT(t,e,n,r)}function Df(t){return t=t.prototype,!(!t||!t.isReactComponent)}function NT(t){if(typeof t=="function")return Df(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Xd)return 11;if(t===Jd)return 14}return 2}function jr(t,e){var n=t.alternate;return n===null?(n=en(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function zl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Df(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ai:return Ts(n.children,s,i,e);case Yd:o=8,s|=8;break;case kh:return t=en(12,n,e,s|2),t.elementType=kh,t.lanes=i,t;case Rh:return t=en(13,n,e,s),t.elementType=Rh,t.lanes=i,t;case Ph:return t=en(19,n,e,s),t.elementType=Ph,t.lanes=i,t;case Yy:return Zu(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ky:o=10;break e;case Qy:o=9;break e;case Xd:o=11;break e;case Jd:o=14;break e;case Er:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=en(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Ts(t,e,n,r){return t=en(7,t,r,e),t.lanes=n,t}function Zu(t,e,n,r){return t=en(22,t,r,e),t.elementType=Yy,t.lanes=n,t.stateNode={isHidden:!1},t}function oh(t,e,n){return t=en(6,t,null,e),t.lanes=n,t}function ah(t,e,n){return e=en(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function bT(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zc(0),this.expirationTimes=zc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Vf(t,e,n,r,s,i,o,l,u){return t=new bT(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=en(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yf(i),t}function DT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function zv(t){if(!t)return qr;t=t._reactInternals;e:{if(Os(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Mt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(Mt(n))return z_(t,n,e)}return e}function Bv(t,e,n,r,s,i,o,l,u){return t=Vf(n,r,!0,t,s,i,o,l,u),t.context=zv(null),n=t.current,r=It(),s=Lr(n),i=er(r,s),i.callback=e??null,Mr(n,i,s),t.current.lanes=s,xa(t,s,r),Ot(t,r),t}function ec(t,e,n,r){var s=e.current,i=It(),o=Lr(s);return n=zv(n),e.context===null?e.context=n:e.pendingContext=n,e=er(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Mr(s,e,o),t!==null&&(yn(t,s,o,i),Ml(t,s,o)),o}function Eu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Zm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Mf(t,e){Zm(t,e),(t=t.alternate)&&Zm(t,e)}function VT(){return null}var $v=typeof reportError=="function"?reportError:function(t){console.error(t)};function Of(t){this._internalRoot=t}tc.prototype.render=Of.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));ec(t,e,null,null)};tc.prototype.unmount=Of.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Rs(function(){ec(null,t,null,null)}),e[rr]=null}};function tc(t){this._internalRoot=t}tc.prototype.unstable_scheduleHydration=function(t){if(t){var e=w_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ir.length&&e!==0&&e<Ir[n].priority;n++);Ir.splice(n,0,t),n===0&&T_(t)}};function Lf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function eg(){}function MT(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var h=Eu(o);i.call(h)}}var o=Bv(e,r,t,0,null,!1,!1,"",eg);return t._reactRootContainer=o,t[rr]=o.current,ia(t.nodeType===8?t.parentNode:t),Rs(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var h=Eu(u);l.call(h)}}var u=Vf(t,0,!1,null,null,!1,!1,"",eg);return t._reactRootContainer=u,t[rr]=u.current,ia(t.nodeType===8?t.parentNode:t),Rs(function(){ec(e,u,n,r)}),u}function rc(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=Eu(o);l.call(u)}}ec(e,o,t,s)}else o=MT(n,e,t,s,r);return Eu(o)}__=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ro(e.pendingLanes);n!==0&&(tf(e,n|1),Ot(e,Fe()),!(pe&6)&&(Vi=Fe()+500,es()))}break;case 13:Rs(function(){var r=sr(t,1);if(r!==null){var s=It();yn(r,t,1,s)}}),Mf(t,1)}};nf=function(t){if(t.tag===13){var e=sr(t,134217728);if(e!==null){var n=It();yn(e,t,134217728,n)}Mf(t,134217728)}};v_=function(t){if(t.tag===13){var e=Lr(t),n=sr(t,e);if(n!==null){var r=It();yn(n,t,e,r)}Mf(t,e)}};w_=function(){return Ee};E_=function(t,e){var n=Ee;try{return Ee=t,e()}finally{Ee=n}};Uh=function(t,e,n){switch(e){case"input":if(Dh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Gu(r);if(!s)throw Error(U(90));Jy(r),Dh(r,s)}}}break;case"textarea":e_(t,n);break;case"select":e=n.value,e!=null&&_i(t,!!n.multiple,e,!1)}};a_=Pf;l_=Rs;var OT={usingClientEntryPoint:!1,Events:[Aa,hi,Gu,i_,o_,Pf]},Co={findFiberByHostInstance:gs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},LT={bundleType:Co.bundleType,version:Co.version,rendererPackageName:Co.rendererPackageName,rendererConfig:Co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=h_(t),t===null?null:t.stateNode},findFiberByHostInstance:Co.findFiberByHostInstance||VT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tl.isDisabled&&Tl.supportsFiber)try{$u=Tl.inject(LT),Rn=Tl}catch{}}$t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OT;$t.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lf(e))throw Error(U(200));return DT(t,e,null,n)};$t.createRoot=function(t,e){if(!Lf(t))throw Error(U(299));var n=!1,r="",s=$v;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Vf(t,1,!1,null,null,n,!1,r,s),t[rr]=e.current,ia(t.nodeType===8?t.parentNode:t),new Of(e)};$t.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=h_(e),t=t===null?null:t.stateNode,t};$t.flushSync=function(t){return Rs(t)};$t.hydrate=function(t,e,n){if(!nc(e))throw Error(U(200));return rc(null,t,e,!0,n)};$t.hydrateRoot=function(t,e,n){if(!Lf(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=$v;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Bv(e,null,t,1,n??null,s,!1,i,o),t[rr]=e.current,ia(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new tc(e)};$t.render=function(t,e,n){if(!nc(e))throw Error(U(200));return rc(null,t,e,!1,n)};$t.unmountComponentAtNode=function(t){if(!nc(t))throw Error(U(40));return t._reactRootContainer?(Rs(function(){rc(null,null,t,!1,function(){t._reactRootContainer=null,t[rr]=null})}),!0):!1};$t.unstable_batchedUpdates=Pf;$t.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!nc(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return rc(t,e,n,!1,r)};$t.version="18.3.1-next-f1338f8080-20240426";function Hv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hv)}catch(t){console.error(t)}}Hv(),Hy.exports=$t;var jT=Hy.exports,qv,tg=jT;qv=tg.createRoot,tg.hydrateRoot;/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Wv=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var UT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zT=J.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...l},u)=>J.createElement("svg",{ref:u,...UT,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Wv("lucide",s),...l},[...o.map(([h,p])=>J.createElement(h,p)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=(t,e)=>{const n=J.forwardRef(({className:r,...s},i)=>J.createElement(zT,{ref:i,iconNode:e,className:Wv(`lucide-${FT(t)}`,r),...s}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BT=he("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=he("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=he("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=he("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=he("Bell",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=he("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WT=he("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=he("ChartPie",[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GT=he("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=he("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QT=he("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=he("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=he("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XT=he("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=he("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JT=he("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=he("FileSpreadsheet",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eI=he("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tI=he("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nI=he("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rI=he("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sI=he("PiggyBank",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z",key:"1ivx2i"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h.01",key:"xkw8gn"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iI=he("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oI=he("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aI=he("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=he("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=he("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lI=he("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=he("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=he("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uI=he("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=he("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cI=he("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hI=he("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il=he("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]),dI=()=>{};var lg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},fI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Kv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,p=i>>2,m=(i&3)<<4|l>>4;let _=(l&15)<<2|h>>6,k=h&63;u||(k=64,o||(_=64)),r.push(n[p],n[m],n[_],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Gv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||m==null)throw new pI;const _=i<<2|l>>4;if(r.push(_),h!==64){const k=l<<4&240|h>>2;if(r.push(k),m!==64){const b=h<<6&192|m;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class pI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mI=function(t){const e=Gv(t);return Kv.encodeByteArray(e,!0)},Tu=function(t){return mI(t).replace(/\./g,"")},Qv=function(t){try{return Kv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const yI=()=>gI().__FIREBASE_DEFAULTS__,_I=()=>{if(typeof process>"u"||typeof lg>"u")return;const t=lg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Qv(t[1]);return e&&JSON.parse(e)},sc=()=>{try{return dI()||yI()||_I()||vI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Yv=t=>{var e,n;return(n=(e=sc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},wI=t=>{const e=Yv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Xv=()=>{var t;return(t=sc())==null?void 0:t.config},Jv=t=>{var e;return(e=sc())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Wi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Zv(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function TI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Tu(JSON.stringify(n)),Tu(JSON.stringify(o)),""].join(".")}const Ho={};function II(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ho))Ho[e]?t.emulator.push(e):t.prod.push(e);return t}function SI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let ug=!1;function e0(t,e){if(typeof window>"u"||typeof document>"u"||!Wi(window.location.host)||Ho[t]===e||Ho[t]||ug)return;Ho[t]=e;function n(_){return`__firebase__banner__${_}`}const r="__firebase__banner",i=II().prod.length>0;function o(){const _=document.getElementById(r);_&&_.remove()}function l(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function u(_,k){_.setAttribute("width","24"),_.setAttribute("id",k),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function h(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{ug=!0,o()},_}function p(_,k){_.setAttribute("id",k),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function m(){const _=SI(r),k=n("text"),b=document.getElementById(k)||document.createElement("span"),D=n("learnmore"),L=document.getElementById(D)||document.createElement("a"),x=n("preprendIcon"),E=document.getElementById(x)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const C=_.element;l(C),p(L,D);const M=h();u(E,x),C.append(E,b,L,M),document.body.appendChild(C)}i?(b.innerText="Preview backend disconnected.",E.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function Et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Et())}function CI(){var e;const t=(e=sc())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function AI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function kI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function RI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function PI(){const t=Et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function NI(){return!CI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bI(){try{return typeof indexedDB=="object"}catch{return!1}}function DI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI="FirebaseError";class hr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=VI,Object.setPrototypeOf(this,hr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ra.prototype.create)}}class Ra{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?MI(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new hr(s,l,r)}}function MI(t,e){return t.replace(OI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const OI=/\{\$([^}]+)}/g;function LI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ps(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(cg(i)&&cg(o)){if(!Ps(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function cg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function jI(t,e){const n=new FI(t,e);return n.subscribe.bind(n)}class FI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");UI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=dh),s.error===void 0&&(s.error=dh),s.complete===void 0&&(s.complete=dh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function UI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function dh(){}/**
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
 */function sn(t){return t&&t._delegate?t._delegate:t}class Ns{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ms="[DEFAULT]";/**
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
 */class zI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new EI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($I(e))try{this.getOrInitializeService({instanceIdentifier:ms})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ms){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ms){return this.instances.has(e)}getOptions(e=ms){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:BI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ms){return this.component?this.component.multipleInstances?e:ms:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function BI(t){return t===ms?void 0:t}function $I(t){return t.instantiationMode==="EAGER"}/**
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
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const qI={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},WI=le.INFO,GI={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},KI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=GI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jf{constructor(e){this.name=e,this._logLevel=WI,this._logHandler=KI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const QI=(t,e)=>e.some(n=>t instanceof n);let hg,dg;function YI(){return hg||(hg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XI(){return dg||(dg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const t0=new WeakMap,vd=new WeakMap,n0=new WeakMap,fh=new WeakMap,Ff=new WeakMap;function JI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Fr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&t0.set(n,t)}).catch(()=>{}),Ff.set(e,t),e}function ZI(t){if(vd.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});vd.set(t,e)}let wd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||n0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function eS(t){wd=t(wd)}function tS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ph(this),e,...n);return n0.set(r,e.sort?e.sort():[e]),Fr(r)}:XI().includes(t)?function(...e){return t.apply(ph(this),e),Fr(t0.get(this))}:function(...e){return Fr(t.apply(ph(this),e))}}function nS(t){return typeof t=="function"?tS(t):(t instanceof IDBTransaction&&ZI(t),QI(t,YI())?new Proxy(t,wd):t)}function Fr(t){if(t instanceof IDBRequest)return JI(t);if(fh.has(t))return fh.get(t);const e=nS(t);return e!==t&&(fh.set(t,e),Ff.set(e,t)),e}const ph=t=>Ff.get(t);function rS(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Fr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Fr(o.result),u.oldVersion,u.newVersion,Fr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const sS=["get","getKey","getAll","getAllKeys","count"],iS=["put","add","delete","clear"],mh=new Map;function fg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(mh.get(e))return mh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=iS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||sS.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return mh.set(e,i),i}eS(t=>({...t,get:(e,n,r)=>fg(e,n)||t.get(e,n,r),has:(e,n)=>!!fg(e,n)||t.has(e,n)}));/**
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
 */class oS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(aS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function aS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ed="@firebase/app",pg="0.14.6";/**
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
 */const or=new jf("@firebase/app"),lS="@firebase/app-compat",uS="@firebase/analytics-compat",cS="@firebase/analytics",hS="@firebase/app-check-compat",dS="@firebase/app-check",fS="@firebase/auth",pS="@firebase/auth-compat",mS="@firebase/database",gS="@firebase/data-connect",yS="@firebase/database-compat",_S="@firebase/functions",vS="@firebase/functions-compat",wS="@firebase/installations",ES="@firebase/installations-compat",TS="@firebase/messaging",IS="@firebase/messaging-compat",SS="@firebase/performance",xS="@firebase/performance-compat",CS="@firebase/remote-config",AS="@firebase/remote-config-compat",kS="@firebase/storage",RS="@firebase/storage-compat",PS="@firebase/firestore",NS="@firebase/ai",bS="@firebase/firestore-compat",DS="firebase",VS="12.6.0";/**
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
 */const Td="[DEFAULT]",MS={[Ed]:"fire-core",[lS]:"fire-core-compat",[cS]:"fire-analytics",[uS]:"fire-analytics-compat",[dS]:"fire-app-check",[hS]:"fire-app-check-compat",[fS]:"fire-auth",[pS]:"fire-auth-compat",[mS]:"fire-rtdb",[gS]:"fire-data-connect",[yS]:"fire-rtdb-compat",[_S]:"fire-fn",[vS]:"fire-fn-compat",[wS]:"fire-iid",[ES]:"fire-iid-compat",[TS]:"fire-fcm",[IS]:"fire-fcm-compat",[SS]:"fire-perf",[xS]:"fire-perf-compat",[CS]:"fire-rc",[AS]:"fire-rc-compat",[kS]:"fire-gcs",[RS]:"fire-gcs-compat",[PS]:"fire-fst",[bS]:"fire-fst-compat",[NS]:"fire-vertex","fire-js":"fire-js",[DS]:"fire-js-all"};/**
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
 */const Iu=new Map,OS=new Map,Id=new Map;function mg(t,e){try{t.container.addComponent(e)}catch(n){or.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Mi(t){const e=t.name;if(Id.has(e))return or.debug(`There were multiple attempts to register component ${e}.`),!1;Id.set(e,t);for(const n of Iu.values())mg(n,t);for(const n of OS.values())mg(n,t);return!0}function Uf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function fn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const LS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ur=new Ra("app","Firebase",LS);/**
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
 */class jS{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ns("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ur.create("app-deleted",{appName:this._name})}}/**
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
 */const Gi=VS;function r0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Td,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Ur.create("bad-app-name",{appName:String(s)});if(n||(n=Xv()),!n)throw Ur.create("no-options");const i=Iu.get(s);if(i){if(Ps(n,i.options)&&Ps(r,i.config))return i;throw Ur.create("duplicate-app",{appName:s})}const o=new HI(s);for(const u of Id.values())o.addComponent(u);const l=new jS(n,r,o);return Iu.set(s,l),l}function s0(t=Td){const e=Iu.get(t);if(!e&&t===Td&&Xv())return r0();if(!e)throw Ur.create("no-app",{appName:t});return e}function zr(t,e,n){let r=MS[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),or.warn(o.join(" "));return}Mi(new Ns(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const FS="firebase-heartbeat-database",US=1,pa="firebase-heartbeat-store";let gh=null;function i0(){return gh||(gh=rS(FS,US,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(pa)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ur.create("idb-open",{originalErrorMessage:t.message})})),gh}async function zS(t){try{const n=(await i0()).transaction(pa),r=await n.objectStore(pa).get(o0(t));return await n.done,r}catch(e){if(e instanceof hr)or.warn(e.message);else{const n=Ur.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});or.warn(n.message)}}}async function gg(t,e){try{const r=(await i0()).transaction(pa,"readwrite");await r.objectStore(pa).put(e,o0(t)),await r.done}catch(n){if(n instanceof hr)or.warn(n.message);else{const r=Ur.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});or.warn(r.message)}}}function o0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const BS=1024,$S=30;class HS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new WS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=yg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>$S){const o=GS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){or.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=yg(),{heartbeatsToSend:r,unsentEntries:s}=qS(this._heartbeatsCache.heartbeats),i=Tu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return or.warn(n),""}}}function yg(){return new Date().toISOString().substring(0,10)}function qS(t,e=BS){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),_g(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),_g(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class WS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bI()?DI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await zS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return gg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return gg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function _g(t){return Tu(JSON.stringify({version:2,heartbeats:t})).length}function GS(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function KS(t){Mi(new Ns("platform-logger",e=>new oS(e),"PRIVATE")),Mi(new Ns("heartbeat",e=>new HS(e),"PRIVATE")),zr(Ed,pg,t),zr(Ed,pg,"esm2020"),zr("fire-js","")}KS("");var QS="firebase",YS="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zr(QS,YS,"app");function a0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const XS=a0,l0=new Ra("auth","Firebase",a0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su=new jf("@firebase/auth");function JS(t,...e){Su.logLevel<=le.WARN&&Su.warn(`Auth (${Gi}): ${t}`,...e)}function Bl(t,...e){Su.logLevel<=le.ERROR&&Su.error(`Auth (${Gi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t,...e){throw Bf(t,...e)}function _n(t,...e){return Bf(t,...e)}function zf(t,e,n){const r={...XS(),[e]:n};return new Ra("auth","Firebase",r).create(e,{appName:t.name})}function Is(t){return zf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ZS(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&On(t,"argument-error"),zf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Bf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return l0.create(t,...e)}function te(t,e,...n){if(!t)throw Bf(e,...n)}function Jn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Bl(e),new Error(e)}function ar(t,e){t||Jn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function ex(){return vg()==="http:"||vg()==="https:"}function vg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Na{constructor(e,n){this.shortDelay=e,this.longDelay=n,ar(n>e,"Short delay should be less than long delay!"),this.isMobile=xI()||RI()}get(){return tx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(t,e){ar(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Jn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Jn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Jn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const sx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ix=new Na(3e4,6e4);function Hf(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ki(t,e,n,r,s={}){return c0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Pa({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...i};return AI()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Wi(t.emulatorConfig.host)&&(h.credentials="include"),u0.fetch()(await h0(t,t.config.apiHost,n,l),h)})}async function c0(t,e,n){t._canInitEmulator=!1;const r={...rx,...e};try{const s=new ax(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Sl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Sl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Sl(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw zf(t,p,h);On(t,p)}}catch(s){if(s instanceof hr)throw s;On(t,"network-request-failed",{message:String(s)})}}async function ox(t,e,n,r,s={}){const i=await Ki(t,e,n,r,s);return"mfaPendingCredential"in i&&On(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function h0(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?$f(t.config,s):`${t.config.apiScheme}://${s}`;return sx.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class ax{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(_n(this.auth,"network-request-failed")),ix.get())})}}function Sl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=_n(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lx(t,e){return Ki(t,"POST","/v1/accounts:delete",e)}async function xu(t,e){return Ki(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ux(t,e=!1){const n=sn(t),r=await n.getIdToken(e),s=qf(r);te(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:qo(yh(s.auth_time)),issuedAtTime:qo(yh(s.iat)),expirationTime:qo(yh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function yh(t){return Number(t)*1e3}function qf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Bl("JWT malformed, contained fewer than 3 sections"),null;try{const s=Qv(n);return s?JSON.parse(s):(Bl("Failed to decode base64 JWT payload"),null)}catch(s){return Bl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function wg(t){const e=qf(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ma(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof hr&&cx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function cx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class xd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qo(this.lastLoginAt),this.creationTime=qo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Cu(t){var m;const e=t.auth,n=await t.getIdToken(),r=await ma(t,xu(e,{idToken:n}));te(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(m=s.providerUserInfo)!=null&&m.length?d0(s.providerUserInfo):[],o=fx(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new xd(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,p)}async function dx(t){const e=sn(t);await Cu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fx(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function d0(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function px(t,e){const n=await c0(t,{},async()=>{const r=Pa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await h0(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Wi(t.emulatorConfig.host)&&(u.credentials="include"),u0.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function mx(t,e){return Ki(t,"POST","/v2/accounts:revokeToken",Hf(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){te(e.length!==0,"internal-error");const n=wg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await px(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Si;return r&&(te(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(te(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(te(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Si,this.toJSON())}_performRefresh(){return Jn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class pn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new hx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new xd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ma(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ux(this,e)}reload(){return dx(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new pn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Cu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fn(this.auth.app))return Promise.reject(Is(this.auth));const e=await this.getIdToken();return await ma(this,lx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,p=n.lastLoginAt??void 0,{uid:m,emailVerified:_,isAnonymous:k,providerData:b,stsTokenManager:D}=n;te(m&&D,e,"internal-error");const L=Si.fromJSON(this.name,D);te(typeof m=="string",e,"internal-error"),wr(r,e.name),wr(s,e.name),te(typeof _=="boolean",e,"internal-error"),te(typeof k=="boolean",e,"internal-error"),wr(i,e.name),wr(o,e.name),wr(l,e.name),wr(u,e.name),wr(h,e.name),wr(p,e.name);const x=new pn({uid:m,auth:e,email:s,emailVerified:_,displayName:r,isAnonymous:k,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:L,createdAt:h,lastLoginAt:p});return b&&Array.isArray(b)&&(x.providerData=b.map(E=>({...E}))),u&&(x._redirectEventId=u),x}static async _fromIdTokenResponse(e,n,r=!1){const s=new Si;s.updateFromServerResponse(n);const i=new pn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Cu(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];te(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?d0(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Si;l.updateFromIdToken(r);const u=new pn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new xd(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg=new Map;function Zn(t){ar(t instanceof Function,"Expected a class definition");let e=Eg.get(t);return e?(ar(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Eg.set(t,e),e)}/**
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
 */class f0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}f0.type="NONE";const Tg=f0;/**
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
 */function $l(t,e,n){return`firebase:${t}:${e}:${n}`}class xi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=$l(this.userKey,s.apiKey,i),this.fullPersistenceKey=$l("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await xu(this.auth,{idToken:e}).catch(()=>{});return n?pn._fromGetAccountInfoResponse(this.auth,n,e):null}return pn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new xi(Zn(Tg),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Zn(Tg);const o=$l(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const p=await h._get(o);if(p){let m;if(typeof p=="string"){const _=await xu(e,{idToken:p}).catch(()=>{});if(!_)break;m=await pn._fromGetAccountInfoResponse(e,_,p)}else m=pn._fromJSON(e,p);h!==i&&(l=m),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new xi(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new xi(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(y0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(p0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(v0(e))return"Blackberry";if(w0(e))return"Webos";if(m0(e))return"Safari";if((e.includes("chrome/")||g0(e))&&!e.includes("edge/"))return"Chrome";if(_0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function p0(t=Et()){return/firefox\//i.test(t)}function m0(t=Et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function g0(t=Et()){return/crios\//i.test(t)}function y0(t=Et()){return/iemobile/i.test(t)}function _0(t=Et()){return/android/i.test(t)}function v0(t=Et()){return/blackberry/i.test(t)}function w0(t=Et()){return/webos/i.test(t)}function Wf(t=Et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function gx(t=Et()){var e;return Wf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function yx(){return PI()&&document.documentMode===10}function E0(t=Et()){return Wf(t)||_0(t)||w0(t)||v0(t)||/windows phone/i.test(t)||y0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T0(t,e=[]){let n;switch(t){case"Browser":n=Ig(Et());break;case"Worker":n=`${Ig(Et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gi}/${r}`}/**
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
 */async function vx(t,e={}){return Ki(t,"GET","/v2/passwordPolicy",Hf(t,e))}/**
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
 */class Tx{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sg(this),this.idTokenSubscription=new Sg(this),this.beforeStateQueue=new _x(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Zn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await xi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await xu(this,{idToken:e}),r=await pn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(fn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Cu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(fn(this.app))return Promise.reject(Is(this));const n=e?sn(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return fn(this.app)?Promise.reject(Is(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return fn(this.app)?Promise.reject(Is(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Zn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vx(this),n=new Ex(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ra("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await mx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Zn(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await xi.create(this,[Zn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=T0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(fn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&JS(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ic(t){return sn(t)}class Sg{constructor(e){this.auth=e,this.observer=null,this.addObserver=jI(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ix(t){Gf=t}function Sx(t){return Gf.loadJS(t)}function xx(){return Gf.gapiScript}function Cx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ax(t,e){const n=Uf(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ps(i,e??{}))return s;On(s,"already-initialized")}return n.initialize({options:e})}function kx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Zn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Rx(t,e,n){const r=ic(t);te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=I0(e),{host:o,port:l}=Px(e),u=l===null?"":`:${l}`,h={url:`${i}//${o}${u}/`},p=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){te(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),te(Ps(h,r.config.emulator)&&Ps(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,Wi(o)?(Zv(`${i}//${o}${u}`),e0("Auth",!0)):Nx()}function I0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Px(t){const e=I0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:xg(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:xg(o)}}}function xg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Nx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Jn("not implemented")}_getIdTokenResponse(e){return Jn("not implemented")}_linkToIdToken(e,n){return Jn("not implemented")}_getReauthenticationResolver(e){return Jn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ci(t,e){return ox(t,"POST","/v1/accounts:signInWithIdp",Hf(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bx="http://localhost";class bs extends S0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new bs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):On("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new bs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ci(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ci(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ci(e,n)}buildRequest(){const e={requestUri:bx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Pa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ba extends Kf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends ba{constructor(){super("facebook.com")}static credential(e){return bs._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xr.credential(e.oauthAccessToken)}catch{return null}}}xr.FACEBOOK_SIGN_IN_METHOD="facebook.com";xr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends ba{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return bs._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.GOOGLE_SIGN_IN_METHOD="google.com";Qn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends ba{constructor(){super("github.com")}static credential(e){return bs._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cr.credential(e.oauthAccessToken)}catch{return null}}}Cr.GITHUB_SIGN_IN_METHOD="github.com";Cr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends ba{constructor(){super("twitter.com")}static credential(e,n){return bs._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ar.credential(n,r)}catch{return null}}}Ar.TWITTER_SIGN_IN_METHOD="twitter.com";Ar.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await pn._fromIdTokenResponse(e,r,s),o=Cg(r);return new Oi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Cg(r);return new Oi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Cg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au extends hr{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Au.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Au(e,n,r,s)}}function x0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Au._fromErrorAndOperation(t,i,e,r):i})}async function Dx(t,e,n=!1){const r=await ma(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Oi._forOperation(t,"link",r)}/**
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
 */async function Vx(t,e,n=!1){const{auth:r}=t;if(fn(r.app))return Promise.reject(Is(r));const s="reauthenticate";try{const i=await ma(t,x0(r,s,e,t),n);te(i.idToken,r,"internal-error");const o=qf(i.idToken);te(o,r,"internal-error");const{sub:l}=o;return te(t.uid===l,r,"user-mismatch"),Oi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&On(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mx(t,e,n=!1){if(fn(t.app))return Promise.reject(Is(t));const r="signIn",s=await x0(t,r,e),i=await Oi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function Ox(t,e,n,r){return sn(t).onIdTokenChanged(e,n,r)}function Lx(t,e,n){return sn(t).beforeAuthStateChanged(e,n)}function jx(t,e,n,r){return sn(t).onAuthStateChanged(e,n,r)}function Fx(t){return sn(t).signOut()}const ku="__sak";/**
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
 */class C0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ku,"1"),this.storage.removeItem(ku),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux=1e3,zx=10;class A0 extends C0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=E0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);yx()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,zx):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ux)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}A0.type="LOCAL";const Bx=A0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0 extends C0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}k0.type="SESSION";const R0=k0;/**
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
 */class oc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new oc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),u=await $x(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}oc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Hx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const h=Qf("",20);s.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const _=m;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(_.data.response);break;default:clearTimeout(p),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(){return window}function qx(t){Nn().location.href=t}/**
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
 */function P0(){return typeof Nn().WorkerGlobalScope<"u"&&typeof Nn().importScripts=="function"}async function Wx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Gx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Kx(){return P0()?self:null}/**
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
 */const N0="firebaseLocalStorageDb",Qx=1,Ru="firebaseLocalStorage",b0="fbase_key";class Da{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ac(t,e){return t.transaction([Ru],e?"readwrite":"readonly").objectStore(Ru)}function Yx(){const t=indexedDB.deleteDatabase(N0);return new Da(t).toPromise()}function Cd(){const t=indexedDB.open(N0,Qx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ru,{keyPath:b0})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ru)?e(r):(r.close(),await Yx(),e(await Cd()))})})}async function Ag(t,e,n){const r=ac(t,!0).put({[b0]:e,value:n});return new Da(r).toPromise()}async function Xx(t,e){const n=ac(t,!1).get(e),r=await new Da(n).toPromise();return r===void 0?null:r.value}function kg(t,e){const n=ac(t,!0).delete(e);return new Da(n).toPromise()}const Jx=800,Zx=3;class D0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Zx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return P0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=oc._getInstance(Kx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await Wx(),!this.activeServiceWorker)return;this.sender=new Hx(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Gx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cd();return await Ag(e,ku,"1"),await kg(e,ku),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ag(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Xx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>kg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ac(s,!1).getAll();return new Da(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Jx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}D0.type="LOCAL";const e2=D0;new Na(3e4,6e4);/**
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
 */function V0(t,e){return e?Zn(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Yf extends S0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ci(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ci(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ci(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function t2(t){return Mx(t.auth,new Yf(t),t.bypassAuthState)}function n2(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),Vx(n,new Yf(t),t.bypassAuthState)}async function r2(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),Dx(n,new Yf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return t2;case"linkViaPopup":case"linkViaRedirect":return r2;case"reauthViaPopup":case"reauthViaRedirect":return n2;default:On(this.auth,"internal-error")}}resolve(e){ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s2=new Na(2e3,1e4);async function i2(t,e,n){if(fn(t.app))return Promise.reject(_n(t,"operation-not-supported-in-this-environment"));const r=ic(t);ZS(t,e,Kf);const s=V0(r,n);return new vs(r,"signInViaPopup",e,s).executeNotNull()}class vs extends M0{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,vs.currentPopupAction&&vs.currentPopupAction.cancel(),vs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){ar(this.filter.length===1,"Popup operations only handle one event");const e=Qf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(_n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,s2.get())};e()}}vs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o2="pendingRedirect",Hl=new Map;class a2 extends M0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Hl.get(this.auth._key());if(!e){try{const r=await l2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Hl.set(this.auth._key(),e)}return this.bypassAuthState||Hl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function l2(t,e){const n=h2(e),r=c2(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function u2(t,e){Hl.set(t._key(),e)}function c2(t){return Zn(t._redirectPersistence)}function h2(t){return $l(o2,t.config.apiKey,t.name)}async function d2(t,e,n=!1){if(fn(t.app))return Promise.reject(Is(t));const r=ic(t),s=V0(r,e),o=await new a2(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f2=10*60*1e3;class p2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!m2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!O0(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(_n(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=f2&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rg(e))}saveEventToCache(e){this.cachedEventUids.add(Rg(e)),this.lastProcessedEventTime=Date.now()}}function Rg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function O0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function m2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return O0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g2(t,e={}){return Ki(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_2=/^https?/;async function v2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await g2(t);for(const n of e)try{if(w2(n))return}catch{}On(t,"unauthorized-domain")}function w2(t){const e=Sd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!_2.test(n))return!1;if(y2.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const E2=new Na(3e4,6e4);function Pg(){const t=Nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function T2(t){return new Promise((e,n)=>{var s,i,o;function r(){Pg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pg(),n(_n(t,"network-request-failed"))},timeout:E2.get()})}if((i=(s=Nn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Nn().gapi)!=null&&o.load)r();else{const l=Cx("iframefcb");return Nn()[l]=()=>{gapi.load?r():n(_n(t,"network-request-failed"))},Sx(`${xx()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw ql=null,e})}let ql=null;function I2(t){return ql=ql||T2(t),ql}/**
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
 */const S2=new Na(5e3,15e3),x2="__/auth/iframe",C2="emulator/auth/iframe",A2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},k2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function R2(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$f(e,C2):`https://${t.config.authDomain}/${x2}`,r={apiKey:e.apiKey,appName:t.name,v:Gi},s=k2.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Pa(r).slice(1)}`}async function P2(t){const e=await I2(t),n=Nn().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:R2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:A2,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=_n(t,"network-request-failed"),l=Nn().setTimeout(()=>{i(o)},S2.get());function u(){Nn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const N2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},b2=500,D2=600,V2="_blank",M2="http://localhost";class Ng{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function O2(t,e,n,r=b2,s=D2){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...N2,width:r.toString(),height:s.toString(),top:i,left:o},h=Et().toLowerCase();n&&(l=g0(h)?V2:n),p0(h)&&(e=e||M2,u.scrollbars="yes");const p=Object.entries(u).reduce((_,[k,b])=>`${_}${k}=${b},`,"");if(gx(h)&&l!=="_self")return L2(e||"",l),new Ng(null);const m=window.open(e||"",l,p);te(m,t,"popup-blocked");try{m.focus()}catch{}return new Ng(m)}function L2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const j2="__/auth/handler",F2="emulator/auth/handler",U2=encodeURIComponent("fac");async function bg(t,e,n,r,s,i){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Gi,eventId:s};if(e instanceof Kf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",LI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof ba){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),h=u?`#${U2}=${encodeURIComponent(u)}`:"";return`${z2(t)}?${Pa(l).slice(1)}${h}`}function z2({config:t}){return t.emulator?$f(t,F2):`https://${t.authDomain}/${j2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h="webStorageSupport";class B2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=R0,this._completeRedirectFn=d2,this._overrideRedirectResult=u2}async _openPopup(e,n,r,s){var o;ar((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await bg(e,n,r,Sd(),s);return O2(e,i,Qf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await bg(e,n,r,Sd(),s);return qx(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ar(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await P2(e),r=new p2(e);return n.register("authEvent",s=>(te(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_h,{type:_h},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[_h];i!==void 0&&n(!!i),On(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=v2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return E0()||m0()||Wf()}}const $2=B2;var Dg="@firebase/auth",Vg="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function q2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function W2(t){Mi(new Ns("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;te(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:T0(t)},h=new Tx(r,s,i,u);return kx(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Mi(new Ns("auth-internal",e=>{const n=ic(e.getProvider("auth").getImmediate());return(r=>new H2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zr(Dg,Vg,q2(t)),zr(Dg,Vg,"esm2020")}/**
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
 */const G2=5*60,K2=Jv("authIdTokenMaxAge")||G2;let Mg=null;const Q2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>K2)return;const s=n==null?void 0:n.token;Mg!==s&&(Mg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Y2(t=s0()){const e=Uf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ax(t,{popupRedirectResolver:$2,persistence:[e2,Bx,R0]}),r=Jv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Q2(i.toString());Lx(n,o,()=>o(n.currentUser)),Ox(n,l=>o(l))}}const s=Yv("auth");return s&&Rx(n,`http://${s}`),n}function X2(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Ix({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=_n("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",X2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});W2("Browser");var Og=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Br,L0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,y){function T(){}T.prototype=y.prototype,v.F=y.prototype,v.prototype=new T,v.prototype.constructor=v,v.D=function(S,A,R){for(var I=Array(arguments.length-2),He=2;He<arguments.length;He++)I[He-2]=arguments[He];return y.prototype[A].apply(S,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,y,T){T||(T=0);const S=Array(16);if(typeof y=="string")for(var A=0;A<16;++A)S[A]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(A=0;A<16;++A)S[A]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=v.g[0],T=v.g[1],A=v.g[2];let R=v.g[3],I;I=y+(R^T&(A^R))+S[0]+3614090360&4294967295,y=T+(I<<7&4294967295|I>>>25),I=R+(A^y&(T^A))+S[1]+3905402710&4294967295,R=y+(I<<12&4294967295|I>>>20),I=A+(T^R&(y^T))+S[2]+606105819&4294967295,A=R+(I<<17&4294967295|I>>>15),I=T+(y^A&(R^y))+S[3]+3250441966&4294967295,T=A+(I<<22&4294967295|I>>>10),I=y+(R^T&(A^R))+S[4]+4118548399&4294967295,y=T+(I<<7&4294967295|I>>>25),I=R+(A^y&(T^A))+S[5]+1200080426&4294967295,R=y+(I<<12&4294967295|I>>>20),I=A+(T^R&(y^T))+S[6]+2821735955&4294967295,A=R+(I<<17&4294967295|I>>>15),I=T+(y^A&(R^y))+S[7]+4249261313&4294967295,T=A+(I<<22&4294967295|I>>>10),I=y+(R^T&(A^R))+S[8]+1770035416&4294967295,y=T+(I<<7&4294967295|I>>>25),I=R+(A^y&(T^A))+S[9]+2336552879&4294967295,R=y+(I<<12&4294967295|I>>>20),I=A+(T^R&(y^T))+S[10]+4294925233&4294967295,A=R+(I<<17&4294967295|I>>>15),I=T+(y^A&(R^y))+S[11]+2304563134&4294967295,T=A+(I<<22&4294967295|I>>>10),I=y+(R^T&(A^R))+S[12]+1804603682&4294967295,y=T+(I<<7&4294967295|I>>>25),I=R+(A^y&(T^A))+S[13]+4254626195&4294967295,R=y+(I<<12&4294967295|I>>>20),I=A+(T^R&(y^T))+S[14]+2792965006&4294967295,A=R+(I<<17&4294967295|I>>>15),I=T+(y^A&(R^y))+S[15]+1236535329&4294967295,T=A+(I<<22&4294967295|I>>>10),I=y+(A^R&(T^A))+S[1]+4129170786&4294967295,y=T+(I<<5&4294967295|I>>>27),I=R+(T^A&(y^T))+S[6]+3225465664&4294967295,R=y+(I<<9&4294967295|I>>>23),I=A+(y^T&(R^y))+S[11]+643717713&4294967295,A=R+(I<<14&4294967295|I>>>18),I=T+(R^y&(A^R))+S[0]+3921069994&4294967295,T=A+(I<<20&4294967295|I>>>12),I=y+(A^R&(T^A))+S[5]+3593408605&4294967295,y=T+(I<<5&4294967295|I>>>27),I=R+(T^A&(y^T))+S[10]+38016083&4294967295,R=y+(I<<9&4294967295|I>>>23),I=A+(y^T&(R^y))+S[15]+3634488961&4294967295,A=R+(I<<14&4294967295|I>>>18),I=T+(R^y&(A^R))+S[4]+3889429448&4294967295,T=A+(I<<20&4294967295|I>>>12),I=y+(A^R&(T^A))+S[9]+568446438&4294967295,y=T+(I<<5&4294967295|I>>>27),I=R+(T^A&(y^T))+S[14]+3275163606&4294967295,R=y+(I<<9&4294967295|I>>>23),I=A+(y^T&(R^y))+S[3]+4107603335&4294967295,A=R+(I<<14&4294967295|I>>>18),I=T+(R^y&(A^R))+S[8]+1163531501&4294967295,T=A+(I<<20&4294967295|I>>>12),I=y+(A^R&(T^A))+S[13]+2850285829&4294967295,y=T+(I<<5&4294967295|I>>>27),I=R+(T^A&(y^T))+S[2]+4243563512&4294967295,R=y+(I<<9&4294967295|I>>>23),I=A+(y^T&(R^y))+S[7]+1735328473&4294967295,A=R+(I<<14&4294967295|I>>>18),I=T+(R^y&(A^R))+S[12]+2368359562&4294967295,T=A+(I<<20&4294967295|I>>>12),I=y+(T^A^R)+S[5]+4294588738&4294967295,y=T+(I<<4&4294967295|I>>>28),I=R+(y^T^A)+S[8]+2272392833&4294967295,R=y+(I<<11&4294967295|I>>>21),I=A+(R^y^T)+S[11]+1839030562&4294967295,A=R+(I<<16&4294967295|I>>>16),I=T+(A^R^y)+S[14]+4259657740&4294967295,T=A+(I<<23&4294967295|I>>>9),I=y+(T^A^R)+S[1]+2763975236&4294967295,y=T+(I<<4&4294967295|I>>>28),I=R+(y^T^A)+S[4]+1272893353&4294967295,R=y+(I<<11&4294967295|I>>>21),I=A+(R^y^T)+S[7]+4139469664&4294967295,A=R+(I<<16&4294967295|I>>>16),I=T+(A^R^y)+S[10]+3200236656&4294967295,T=A+(I<<23&4294967295|I>>>9),I=y+(T^A^R)+S[13]+681279174&4294967295,y=T+(I<<4&4294967295|I>>>28),I=R+(y^T^A)+S[0]+3936430074&4294967295,R=y+(I<<11&4294967295|I>>>21),I=A+(R^y^T)+S[3]+3572445317&4294967295,A=R+(I<<16&4294967295|I>>>16),I=T+(A^R^y)+S[6]+76029189&4294967295,T=A+(I<<23&4294967295|I>>>9),I=y+(T^A^R)+S[9]+3654602809&4294967295,y=T+(I<<4&4294967295|I>>>28),I=R+(y^T^A)+S[12]+3873151461&4294967295,R=y+(I<<11&4294967295|I>>>21),I=A+(R^y^T)+S[15]+530742520&4294967295,A=R+(I<<16&4294967295|I>>>16),I=T+(A^R^y)+S[2]+3299628645&4294967295,T=A+(I<<23&4294967295|I>>>9),I=y+(A^(T|~R))+S[0]+4096336452&4294967295,y=T+(I<<6&4294967295|I>>>26),I=R+(T^(y|~A))+S[7]+1126891415&4294967295,R=y+(I<<10&4294967295|I>>>22),I=A+(y^(R|~T))+S[14]+2878612391&4294967295,A=R+(I<<15&4294967295|I>>>17),I=T+(R^(A|~y))+S[5]+4237533241&4294967295,T=A+(I<<21&4294967295|I>>>11),I=y+(A^(T|~R))+S[12]+1700485571&4294967295,y=T+(I<<6&4294967295|I>>>26),I=R+(T^(y|~A))+S[3]+2399980690&4294967295,R=y+(I<<10&4294967295|I>>>22),I=A+(y^(R|~T))+S[10]+4293915773&4294967295,A=R+(I<<15&4294967295|I>>>17),I=T+(R^(A|~y))+S[1]+2240044497&4294967295,T=A+(I<<21&4294967295|I>>>11),I=y+(A^(T|~R))+S[8]+1873313359&4294967295,y=T+(I<<6&4294967295|I>>>26),I=R+(T^(y|~A))+S[15]+4264355552&4294967295,R=y+(I<<10&4294967295|I>>>22),I=A+(y^(R|~T))+S[6]+2734768916&4294967295,A=R+(I<<15&4294967295|I>>>17),I=T+(R^(A|~y))+S[13]+1309151649&4294967295,T=A+(I<<21&4294967295|I>>>11),I=y+(A^(T|~R))+S[4]+4149444226&4294967295,y=T+(I<<6&4294967295|I>>>26),I=R+(T^(y|~A))+S[11]+3174756917&4294967295,R=y+(I<<10&4294967295|I>>>22),I=A+(y^(R|~T))+S[2]+718787259&4294967295,A=R+(I<<15&4294967295|I>>>17),I=T+(R^(A|~y))+S[9]+3951481745&4294967295,v.g[0]=v.g[0]+y&4294967295,v.g[1]=v.g[1]+(A+(I<<21&4294967295|I>>>11))&4294967295,v.g[2]=v.g[2]+A&4294967295,v.g[3]=v.g[3]+R&4294967295}r.prototype.v=function(v,y){y===void 0&&(y=v.length);const T=y-this.blockSize,S=this.C;let A=this.h,R=0;for(;R<y;){if(A==0)for(;R<=T;)s(this,v,R),R+=this.blockSize;if(typeof v=="string"){for(;R<y;)if(S[A++]=v.charCodeAt(R++),A==this.blockSize){s(this,S),A=0;break}}else for(;R<y;)if(S[A++]=v[R++],A==this.blockSize){s(this,S),A=0;break}}this.h=A,this.o+=y},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var y=1;y<v.length-8;++y)v[y]=0;y=this.o*8;for(var T=v.length-8;T<v.length;++T)v[T]=y&255,y/=256;for(this.v(v),v=Array(16),y=0,T=0;T<4;++T)for(let S=0;S<32;S+=8)v[y++]=this.g[T]>>>S&255;return v};function i(v,y){var T=l;return Object.prototype.hasOwnProperty.call(T,v)?T[v]:T[v]=y(v)}function o(v,y){this.h=y;const T=[];let S=!0;for(let A=v.length-1;A>=0;A--){const R=v[A]|0;S&&R==y||(T[A]=R,S=!1)}this.g=T}var l={};function u(v){return-128<=v&&v<128?i(v,function(y){return new o([y|0],y<0?-1:0)}):new o([v|0],v<0?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return m;if(v<0)return L(h(-v));const y=[];let T=1;for(let S=0;v>=T;S++)y[S]=v/T|0,T*=4294967296;return new o(y,0)}function p(v,y){if(v.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(v.charAt(0)=="-")return L(p(v.substring(1),y));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=h(Math.pow(y,8));let S=m;for(let R=0;R<v.length;R+=8){var A=Math.min(8,v.length-R);const I=parseInt(v.substring(R,R+A),y);A<8?(A=h(Math.pow(y,A)),S=S.j(A).add(h(I))):(S=S.j(T),S=S.add(h(I)))}return S}var m=u(0),_=u(1),k=u(16777216);t=o.prototype,t.m=function(){if(D(this))return-L(this).m();let v=0,y=1;for(let T=0;T<this.g.length;T++){const S=this.i(T);v+=(S>=0?S:4294967296+S)*y,y*=4294967296}return v},t.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(b(this))return"0";if(D(this))return"-"+L(this).toString(v);const y=h(Math.pow(v,6));var T=this;let S="";for(;;){const A=M(T,y).g;T=x(T,A.j(y));let R=((T.g.length>0?T.g[0]:T.h)>>>0).toString(v);if(T=A,b(T))return R+S;for(;R.length<6;)R="0"+R;S=R+S}},t.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function b(v){if(v.h!=0)return!1;for(let y=0;y<v.g.length;y++)if(v.g[y]!=0)return!1;return!0}function D(v){return v.h==-1}t.l=function(v){return v=x(this,v),D(v)?-1:b(v)?0:1};function L(v){const y=v.g.length,T=[];for(let S=0;S<y;S++)T[S]=~v.g[S];return new o(T,~v.h).add(_)}t.abs=function(){return D(this)?L(this):this},t.add=function(v){const y=Math.max(this.g.length,v.g.length),T=[];let S=0;for(let A=0;A<=y;A++){let R=S+(this.i(A)&65535)+(v.i(A)&65535),I=(R>>>16)+(this.i(A)>>>16)+(v.i(A)>>>16);S=I>>>16,R&=65535,I&=65535,T[A]=I<<16|R}return new o(T,T[T.length-1]&-2147483648?-1:0)};function x(v,y){return v.add(L(y))}t.j=function(v){if(b(this)||b(v))return m;if(D(this))return D(v)?L(this).j(L(v)):L(L(this).j(v));if(D(v))return L(this.j(L(v)));if(this.l(k)<0&&v.l(k)<0)return h(this.m()*v.m());const y=this.g.length+v.g.length,T=[];for(var S=0;S<2*y;S++)T[S]=0;for(S=0;S<this.g.length;S++)for(let A=0;A<v.g.length;A++){const R=this.i(S)>>>16,I=this.i(S)&65535,He=v.i(A)>>>16,Ct=v.i(A)&65535;T[2*S+2*A]+=I*Ct,E(T,2*S+2*A),T[2*S+2*A+1]+=R*Ct,E(T,2*S+2*A+1),T[2*S+2*A+1]+=I*He,E(T,2*S+2*A+1),T[2*S+2*A+2]+=R*He,E(T,2*S+2*A+2)}for(v=0;v<y;v++)T[v]=T[2*v+1]<<16|T[2*v];for(v=y;v<2*y;v++)T[v]=0;return new o(T,0)};function E(v,y){for(;(v[y]&65535)!=v[y];)v[y+1]+=v[y]>>>16,v[y]&=65535,y++}function C(v,y){this.g=v,this.h=y}function M(v,y){if(b(y))throw Error("division by zero");if(b(v))return new C(m,m);if(D(v))return y=M(L(v),y),new C(L(y.g),L(y.h));if(D(y))return y=M(v,L(y)),new C(L(y.g),y.h);if(v.g.length>30){if(D(v)||D(y))throw Error("slowDivide_ only works with positive integers.");for(var T=_,S=y;S.l(v)<=0;)T=j(T),S=j(S);var A=B(T,1),R=B(S,1);for(S=B(S,2),T=B(T,2);!b(S);){var I=R.add(S);I.l(v)<=0&&(A=A.add(T),R=I),S=B(S,1),T=B(T,1)}return y=x(v,A.j(y)),new C(A,y)}for(A=m;v.l(y)>=0;){for(T=Math.max(1,Math.floor(v.m()/y.m())),S=Math.ceil(Math.log(T)/Math.LN2),S=S<=48?1:Math.pow(2,S-48),R=h(T),I=R.j(y);D(I)||I.l(v)>0;)T-=S,R=h(T),I=R.j(y);b(R)&&(R=_),A=A.add(R),v=x(v,I)}return new C(A,v)}t.B=function(v){return M(this,v).h},t.and=function(v){const y=Math.max(this.g.length,v.g.length),T=[];for(let S=0;S<y;S++)T[S]=this.i(S)&v.i(S);return new o(T,this.h&v.h)},t.or=function(v){const y=Math.max(this.g.length,v.g.length),T=[];for(let S=0;S<y;S++)T[S]=this.i(S)|v.i(S);return new o(T,this.h|v.h)},t.xor=function(v){const y=Math.max(this.g.length,v.g.length),T=[];for(let S=0;S<y;S++)T[S]=this.i(S)^v.i(S);return new o(T,this.h^v.h)};function j(v){const y=v.g.length+1,T=[];for(let S=0;S<y;S++)T[S]=v.i(S)<<1|v.i(S-1)>>>31;return new o(T,v.h)}function B(v,y){const T=y>>5;y%=32;const S=v.g.length-T,A=[];for(let R=0;R<S;R++)A[R]=y>0?v.i(R+T)>>>y|v.i(R+T+1)<<32-y:v.i(R+T);return new o(A,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,L0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=p,Br=o}).apply(typeof Og<"u"?Og:typeof self<"u"?self:typeof window<"u"?window:{});var xl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var j0,No,F0,Wl,Ad,U0,z0,B0;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof xl=="object"&&xl];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,c){if(c)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var P=a[g];if(!(P in d))break e;d=d[P]}a=a[a.length-1],g=d[a],c=c(g),c!=g&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(c){var d=[],g;for(g in c)Object.prototype.hasOwnProperty.call(c,g)&&d.push([g,c[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function u(a,c,d){return a.call.apply(a.bind,arguments)}function h(a,c,d){return h=u,h.apply(null,arguments)}function p(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function m(a,c){function d(){}d.prototype=c.prototype,a.Z=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,P,N){for(var $=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)$[ie-2]=arguments[ie];return c.prototype[P].apply(g,$)}}var _=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function k(a){const c=a.length;if(c>0){const d=Array(c);for(let g=0;g<c;g++)d[g]=a[g];return d}return[]}function b(a,c){for(let g=1;g<arguments.length;g++){const P=arguments[g];var d=typeof P;if(d=d!="object"?d:P?Array.isArray(P)?"array":d:"null",d=="array"||d=="object"&&typeof P.length=="number"){d=a.length||0;const N=P.length||0;a.length=d+N;for(let $=0;$<N;$++)a[d+$]=P[$]}else a.push(P)}}class D{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function L(a){o.setTimeout(()=>{throw a},0)}function x(){var a=v;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class E{constructor(){this.h=this.g=null}add(c,d){const g=C.get();g.set(c,d),this.h?this.h.next=g:this.g=g,this.h=g}}var C=new D(()=>new M,a=>a.reset());class M{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let j,B=!1,v=new E,y=()=>{const a=Promise.resolve(void 0);j=()=>{a.then(T)}};function T(){for(var a;a=x();){try{a.h.call(a.g)}catch(d){L(d)}var c=C;c.j(a),c.h<100&&(c.h++,a.next=c.g,c.g=a)}B=!1}function S(){this.u=this.u,this.C=this.C}S.prototype.u=!1,S.prototype.dispose=function(){this.u||(this.u=!0,this.N())},S.prototype[Symbol.dispose]=function(){this.dispose()},S.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,c),o.removeEventListener("test",d,c)}catch{}return a}();function I(a){return/^[\s\xa0]*$/.test(a)}function He(a,c){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,c)}m(He,A),He.prototype.init=function(a,c){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget,c||(d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement)),this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&He.Z.h.call(this)},He.prototype.h=function(){He.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ct="closure_listenable_"+(Math.random()*1e6|0),dr=0;function Fn(a,c,d,g,P){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!g,this.ha=P,this.key=++dr,this.da=this.fa=!1}function q(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Q(a,c,d){for(const g in a)c.call(d,a[g],g,a)}function se(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function ye(a){const c={};for(const d in a)c[d]=a[d];return c}const ke="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function on(a,c){let d,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(d in g)a[d]=g[d];for(let N=0;N<ke.length;N++)d=ke[N],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function At(a){this.src=a,this.g={},this.h=0}At.prototype.add=function(a,c,d,g,P){const N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);const $=ct(a,c,g,P);return $>-1?(c=a[$],d||(c.fa=!1)):(c=new Fn(c,this.src,N,!!g,P),c.fa=d,a.push(c)),c};function qt(a,c){const d=c.type;if(d in a.g){var g=a.g[d],P=Array.prototype.indexOf.call(g,c,void 0),N;(N=P>=0)&&Array.prototype.splice.call(g,P,1),N&&(q(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function ct(a,c,d,g){for(let P=0;P<a.length;++P){const N=a[P];if(!N.da&&N.listener==c&&N.capture==!!d&&N.ha==g)return P}return-1}var kt="closure_lm_"+(Math.random()*1e6|0),ts={};function an(a,c,d,g,P){if(Array.isArray(c)){for(let N=0;N<c.length;N++)an(a,c[N],d,g,P);return null}return d=eo(d),a&&a[Ct]?a.J(c,d,l(g)?!!g.capture:!1,P):wc(a,c,d,!1,g,P)}function wc(a,c,d,g,P,N){if(!c)throw Error("Invalid event type");const $=l(P)?!!P.capture:!!P;let ie=$s(a);if(ie||(a[kt]=ie=new At(a)),d=ie.add(c,d,g,$,N),d.proxy)return d;if(g=zs(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)R||(P=$),P===void 0&&(P=!1),a.addEventListener(c.toString(),g,P);else if(a.attachEvent)a.attachEvent(Zi(c.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function zs(){function a(d){return c.call(a.src,a.listener,d)}const c=Ua;return a}function Fa(a,c,d,g,P){if(Array.isArray(c))for(var N=0;N<c.length;N++)Fa(a,c[N],d,g,P);else g=l(g)?!!g.capture:!!g,d=eo(d),a&&a[Ct]?(a=a.i,N=String(c).toString(),N in a.g&&(c=a.g[N],d=ct(c,d,g,P),d>-1&&(q(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete a.g[N],a.h--)))):a&&(a=$s(a))&&(c=a.g[c.toString()],a=-1,c&&(a=ct(c,d,g,P)),(d=a>-1?c[a]:null)&&Bs(d))}function Bs(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[Ct])qt(c.i,a);else{var d=a.type,g=a.proxy;c.removeEventListener?c.removeEventListener(d,g,a.capture):c.detachEvent?c.detachEvent(Zi(d),g):c.addListener&&c.removeListener&&c.removeListener(g),(d=$s(c))?(qt(d,a),d.h==0&&(d.src=null,c[kt]=null)):q(a)}}}function Zi(a){return a in ts?ts[a]:ts[a]="on"+a}function Ua(a,c){if(a.da)a=!0;else{c=new He(c,this);const d=a.listener,g=a.ha||a.src;a.fa&&Bs(a),a=d.call(g,c)}return a}function $s(a){return a=a[kt],a instanceof At?a:null}var ns="__closure_events_fn_"+(Math.random()*1e9>>>0);function eo(a){return typeof a=="function"?a:(a[ns]||(a[ns]=function(c){return a.handleEvent(c)}),a[ns])}function Ue(){S.call(this),this.i=new At(this),this.M=this,this.G=null}m(Ue,S),Ue.prototype[Ct]=!0,Ue.prototype.removeEventListener=function(a,c,d,g){Fa(this,a,c,d,g)};function Xe(a,c){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=c.type||c,typeof c=="string")c=new A(c,a);else if(c instanceof A)c.target=c.target||a;else{var P=c;c=new A(g,a),on(c,P)}P=!0;let N,$;if(d)for($=d.length-1;$>=0;$--)N=c.g=d[$],P=fr(N,g,!0,c)&&P;if(N=c.g=a,P=fr(N,g,!0,c)&&P,P=fr(N,g,!1,c)&&P,d)for($=0;$<d.length;$++)N=c.g=d[$],P=fr(N,g,!1,c)&&P}Ue.prototype.N=function(){if(Ue.Z.N.call(this),this.i){var a=this.i;for(const c in a.g){const d=a.g[c];for(let g=0;g<d.length;g++)q(d[g]);delete a.g[c],a.h--}}this.G=null},Ue.prototype.J=function(a,c,d,g){return this.i.add(String(a),c,!1,d,g)},Ue.prototype.K=function(a,c,d,g){return this.i.add(String(a),c,!0,d,g)};function fr(a,c,d,g){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();let P=!0;for(let N=0;N<c.length;++N){const $=c[N];if($&&!$.da&&$.capture==d){const ie=$.listener,We=$.ha||$.src;$.fa&&qt(a.i,$),P=ie.call(We,g)!==!1&&P}}return P&&!g.defaultPrevented}function za(a,c){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:o.setTimeout(a,c||0)}function rs(a){a.g=za(()=>{a.g=null,a.i&&(a.i=!1,rs(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class Ba extends S{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:rs(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Un(a){S.call(this),this.h=a,this.g={}}m(Un,S);var to=[];function no(a){Q(a.g,function(c,d){this.g.hasOwnProperty(d)&&Bs(c)},a),a.g={}}Un.prototype.N=function(){Un.Z.N.call(this),no(this)},Un.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hs=o.JSON.stringify,Ec=o.JSON.parse,$a=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function ro(){}function so(){}var wn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function qs(){A.call(this,"d")}m(qs,A);function pr(){A.call(this,"c")}m(pr,A);var zn={},Tc=null;function io(){return Tc=Tc||new Ue}zn.Ia="serverreachability";function Ic(a){A.call(this,zn.Ia,a)}m(Ic,A);function Ws(a){const c=io();Xe(c,new Ic(c))}zn.STAT_EVENT="statevent";function Sc(a,c){A.call(this,zn.STAT_EVENT,a),this.stat=c}m(Sc,A);function ht(a){const c=io();Xe(c,new Sc(c,a))}zn.Ja="timingevent";function xc(a,c){A.call(this,zn.Ja,a),this.size=c}m(xc,A);function Gs(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},c)}function Ks(){this.g=!0}Ks.prototype.ua=function(){this.g=!1};function kp(a,c,d,g,P,N){a.info(function(){if(a.g)if(N){var $="",ie=N.split("&");for(let Te=0;Te<ie.length;Te++){var We=ie[Te].split("=");if(We.length>1){const Je=We[0];We=We[1];const Sn=Je.split("_");$=Sn.length>=2&&Sn[1]=="type"?$+(Je+"="+We+"&"):$+(Je+"=redacted&")}}}else $=null;else $=N;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+c+`
`+d+`
`+$})}function Ha(a,c,d,g,P,N,$){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+c+`
`+d+`
`+N+" "+$})}function Bn(a,c,d,g){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+Rp(a,d)+(g?" "+g:"")})}function Cc(a,c){a.info(function(){return"TIMEOUT: "+c})}Ks.prototype.info=function(){};function Rp(a,c){if(!a.g)return c;if(!c)return null;try{const N=JSON.parse(c);if(N){for(a=0;a<N.length;a++)if(Array.isArray(N[a])){var d=N[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var P=g[0];if(P!="noop"&&P!="stop"&&P!="close")for(let $=1;$<g.length;$++)g[$]=""}}}}return Hs(N)}catch{return c}}var Wt={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},qa={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Wa;function oo(){}m(oo,ro),oo.prototype.g=function(){return new XMLHttpRequest},Wa=new oo;function ss(a){return encodeURIComponent(String(a))}function Ac(a){var c=1;a=a.split(":");const d=[];for(;c>0&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function En(a,c,d,g){this.j=a,this.i=c,this.l=d,this.S=g||1,this.V=new Un(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ga}function Ga(){this.i=null,this.g="",this.h=!1}var ao={},Gt={};function $n(a,c,d){a.M=1,a.A=mr(Kt(c)),a.u=d,a.R=!0,Ka(a,null)}function Ka(a,c){a.F=Date.now(),Xs(a),a.B=Kt(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),G(d.i,"t",g),a.C=0,d=a.j.L,a.h=new Ga,a.g=$p(a.j,d?c:null,!a.u),a.P>0&&(a.O=new Ba(h(a.Y,a,a.g),a.P)),c=a.V,d=a.g,g=a.ba;var P="readystatechange";Array.isArray(P)||(P&&(to[0]=P.toString()),P=to);for(let N=0;N<P.length;N++){const $=an(d,P[N],g||c.handleEvent,!1,c.h||c);if(!$)break;c.g[$.key]=$}c=a.J?ye(a.J):{},a.u?(a.v||(a.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,c)):(a.v="GET",a.g.ea(a.B,a.v,null,c)),Ws(),kp(a.i,a.v,a.B,a.l,a.S,a.u)}En.prototype.ba=function(a){a=a.target;const c=this.O;c&&gr(a)==3?c.j():this.Y(a)},En.prototype.Y=function(a){try{if(a==this.g)e:{const ie=gr(this.g),We=this.g.ya(),Te=this.g.ca();if(!(ie<3)&&(ie!=3||this.g&&(this.h.h||this.g.la()||bp(this.g)))){this.K||ie!=4||We==7||(We==8||Te<=0?Ws(3):Ws(2)),lo(this);var c=this.g.ca();this.X=c;var d=Qs(this);if(this.o=c==200,Ha(this.i,this.v,this.B,this.l,this.S,ie,c),this.o){if(this.U&&!this.L){t:{if(this.g){var g,P=this.g;if((g=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(g)){var N=g;break t}}N=null}if(a=N)Bn(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,uo(this,a);else{this.o=!1,this.m=3,ht(12),Hn(this),is(this);break e}}if(this.R){a=!0;let Je;for(;!this.K&&this.C<d.length;)if(Je=Qa(this,d),Je==Gt){ie==4&&(this.m=4,ht(14),a=!1),Bn(this.i,this.l,null,"[Incomplete Response]");break}else if(Je==ao){this.m=4,ht(15),Bn(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Bn(this.i,this.l,Je,null),uo(this,Je);if(Ys(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ie!=4||d.length!=0||this.h.h||(this.m=1,ht(16),a=!1),this.o=this.o&&a,!a)Bn(this.i,this.l,d,"[Invalid Chunked Response]"),Hn(this),is(this);else if(d.length>0&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.aa&&!$.P&&($.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Vc($),$.P=!0,ht(11))}}else Bn(this.i,this.l,d,null),uo(this,d);ie==4&&Hn(this),this.o&&!this.K&&(ie==4?Fp(this.j,this):(this.o=!1,Xs(this)))}else h1(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,ht(12)):(this.m=0,ht(13)),Hn(this),is(this)}}}catch{}finally{}};function Qs(a){if(!Ys(a))return a.g.la();const c=bp(a.g);if(c==="")return"";let d="";const g=c.length,P=gr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Hn(a),is(a),"";a.h.i=new o.TextDecoder}for(let N=0;N<g;N++)a.h.h=!0,d+=a.h.i.decode(c[N],{stream:!(P&&N==g-1)});return c.length=0,a.h.g+=d,a.C=0,a.h.g}function Ys(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Qa(a,c){var d=a.C,g=c.indexOf(`
`,d);return g==-1?Gt:(d=Number(c.substring(d,g)),isNaN(d)?ao:(g+=1,g+d>c.length?Gt:(c=c.slice(g,g+d),a.C=g+d,c)))}En.prototype.cancel=function(){this.K=!0,Hn(this)};function Xs(a){a.T=Date.now()+a.H,Ya(a,a.H)}function Ya(a,c){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Gs(h(a.aa,a),c)}function lo(a){a.D&&(o.clearTimeout(a.D),a.D=null)}En.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Cc(this.i,this.B),this.M!=2&&(Ws(),ht(17)),Hn(this),this.m=2,is(this)):Ya(this,this.T-a)};function is(a){a.j.I==0||a.K||Fp(a.j,a)}function Hn(a){lo(a);var c=a.O;c&&typeof c.dispose=="function"&&c.dispose(),a.O=null,no(a.V),a.g&&(c=a.g,a.g=null,c.abort(),c.dispose())}function uo(a,c){try{var d=a.j;if(d.I!=0&&(d.g==a||os(d.h,a))){if(!a.L&&os(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)rl(d),tl(d);else break e;Dc(d),ht(18)}}else d.xa=P[1],0<d.xa-d.K&&P[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Gs(h(d.Va,d),6e3));rt(d.h)<=1&&d.ta&&(d.ta=void 0)}else hs(d,11)}else if((a.L||d.g==a)&&rl(d),!I(c))for(P=d.Ba.g.parse(c),c=0;c<P.length;c++){let Te=P[c];const Je=Te[0];if(!(Je<=d.K))if(d.K=Je,Te=Te[1],d.I==2)if(Te[0]=="c"){d.M=Te[1],d.ba=Te[2];const Sn=Te[3];Sn!=null&&(d.ka=Sn,d.j.info("VER="+d.ka));const ds=Te[4];ds!=null&&(d.za=ds,d.j.info("SVER="+d.za));const yr=Te[5];yr!=null&&typeof yr=="number"&&yr>0&&(g=1.5*yr,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const _r=a.g;if(_r){const il=_r.g?_r.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(il){var N=g.h;N.g||il.indexOf("spdy")==-1&&il.indexOf("quic")==-1&&il.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Tn(N,N.h),N.h=null))}if(g.G){const Mc=_r.g?_r.g.getResponseHeader("X-HTTP-Session-Id"):null;Mc&&(g.wa=Mc,_e(g.J,g.G,Mc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var $=a;if(g.na=Bp(g,g.L?g.ba:null,g.W),$.L){ho(g.h,$);var ie=$,We=g.O;We&&(ie.H=We),ie.D&&(lo(ie),Xs(ie)),g.g=$}else Lp(g);d.i.length>0&&nl(d)}else Te[0]!="stop"&&Te[0]!="close"||hs(d,7);else d.I==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?hs(d,7):bc(d):Te[0]!="noop"&&d.l&&d.l.qa(Te),d.A=0)}}Ws(4)}catch{}}var kc=class{constructor(a,c){this.g=a,this.map=c}};function Xa(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function co(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function rt(a){return a.h?1:a.g?a.g.size:0}function os(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Tn(a,c){a.g?a.g.add(c):a.h=c}function ho(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Xa.prototype.cancel=function(){if(this.i=fo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function fo(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.G);return c}return k(a.i)}var po=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rc(a,c){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let P,N=null;g>=0?(P=a[d].substring(0,g),N=a[d].substring(g+1)):P=a[d],c(P,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function ln(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;a instanceof ln?(this.l=a.l,qn(this,a.j),this.o=a.o,this.g=a.g,as(this,a.u),this.h=a.h,Js(this,Y(a.i)),this.m=a.m):a&&(c=String(a).match(po))?(this.l=!1,qn(this,c[1]||"",!0),this.o=ls(c[2]||""),this.g=ls(c[3]||"",!0),as(this,c[4]),this.h=ls(c[5]||"",!0),Js(this,c[6]||"",!0),this.m=ls(c[7]||"")):(this.l=!1,this.i=new cs(null,this.l))}ln.prototype.toString=function(){const a=[];var c=this.j;c&&a.push(us(c,Ja,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(us(c,Ja,!0),"@"),a.push(ss(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(us(d,d.charAt(0)=="/"?Zs:Za,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",us(d,Nc)),a.join("")},ln.prototype.resolve=function(a){const c=Kt(this);let d=!!a.j;d?qn(c,a.j):d=!!a.o,d?c.o=a.o:d=!!a.g,d?c.g=a.g:d=a.u!=null;var g=a.h;if(d)as(c,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var P=c.h.lastIndexOf("/");P!=-1&&(g=c.h.slice(0,P+1)+g)}if(P=g,P==".."||P==".")g="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){g=P.lastIndexOf("/",0)==0,P=P.split("/");const N=[];for(let $=0;$<P.length;){const ie=P[$++];ie=="."?g&&$==P.length&&N.push(""):ie==".."?((N.length>1||N.length==1&&N[0]!="")&&N.pop(),g&&$==P.length&&N.push("")):(N.push(ie),g=!0)}g=N.join("/")}else g=P}return d?c.h=g:d=a.i.toString()!=="",d?Js(c,Y(a.i)):d=!!a.m,d&&(c.m=a.m),c};function Kt(a){return new ln(a)}function qn(a,c,d){a.j=d?ls(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function as(a,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);a.u=c}else a.u=null}function Js(a,c,d){c instanceof cs?(a.i=c,Re(a.i,a.l)):(d||(c=us(c,mo)),a.i=new cs(c,a.l))}function _e(a,c,d){a.i.set(c,d)}function mr(a){return _e(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function ls(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function us(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,Pc),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Pc(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ja=/[#\/\?@]/g,Za=/[#\?:]/g,Zs=/[#\?]/g,mo=/[#\?@]/g,Nc=/#/g;function cs(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Wn(a){a.g||(a.g=new Map,a.h=0,a.i&&Rc(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=cs.prototype,t.add=function(a,c){Wn(this),this.i=null,a=me(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function w(a,c){Wn(a),c=me(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function V(a,c){return Wn(a),c=me(a,c),a.g.has(c)}t.forEach=function(a,c){Wn(this),this.g.forEach(function(d,g){d.forEach(function(P){a.call(c,P,g,this)},this)},this)};function z(a,c){Wn(a);let d=[];if(typeof c=="string")V(a,c)&&(d=d.concat(a.g.get(me(a,c))));else for(a=Array.from(a.g.values()),c=0;c<a.length;c++)d=d.concat(a[c]);return d}t.set=function(a,c){return Wn(this),this.i=null,a=me(this,a),V(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=z(this,a),a.length>0?String(a[0]):c):c};function G(a,c,d){w(a,c),d.length>0&&(a.i=null,a.g.set(me(a,c),k(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(let g=0;g<c.length;g++){var d=c[g];const P=ss(d);d=z(this,d);for(let N=0;N<d.length;N++){let $=P;d[N]!==""&&($+="="+ss(d[N])),a.push($)}}return this.i=a.join("&")};function Y(a){const c=new cs;return c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),c}function me(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function Re(a,c){c&&!a.j&&(Wn(a),a.i=null,a.g.forEach(function(d,g){const P=g.toLowerCase();g!=P&&(w(this,g),G(this,P,d))},a)),a.j=c}function dt(a,c){const d=new Ks;if(o.Image){const g=new Image;g.onload=p(ae,d,"TestLoadImage: loaded",!0,c,g),g.onerror=p(ae,d,"TestLoadImage: error",!1,c,g),g.onabort=p(ae,d,"TestLoadImage: abort",!1,c,g),g.ontimeout=p(ae,d,"TestLoadImage: timeout",!1,c,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else c(!1)}function qe(a,c){const d=new Ks,g=new AbortController,P=setTimeout(()=>{g.abort(),ae(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:g.signal}).then(N=>{clearTimeout(P),N.ok?ae(d,"TestPingServer: ok",!0,c):ae(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),ae(d,"TestPingServer: error",!1,c)})}function ae(a,c,d,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(d)}catch{}}function Ie(){this.g=new $a}function ge(a){this.i=a.Sb||null,this.h=a.ab||!1}m(ge,ro),ge.prototype.g=function(){return new ft(this.i,this.h)};function ft(a,c){Ue.call(this),this.H=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(ft,Ue),t=ft.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=c,this.readyState=1,Le(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(c.body=a),(this.H||o).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ve(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Le(this)),this.g&&(this.readyState=3,Le(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;H(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function H(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?ve(this):Le(this),this.readyState==3&&H(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,ve(this))},t.Na=function(a){this.g&&(this.response=a,ve(this))},t.ga=function(){this.g&&ve(this)};function ve(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Le(a)}t.setRequestHeader=function(a,c){this.A.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function Le(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ft.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function In(a){let c="";return Q(a,function(d,g){c+=g,c+=":",c+=d,c+=`\r
`}),c}function Rt(a,c,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=In(d),typeof a=="string"?d!=null&&ss(d):_e(a,c,d))}function fe(a){Ue.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(fe,Ue);var Qt=/^https?$/i,Lt=["POST","PUT"];t=fe.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,c,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Wa.g(),this.g.onreadystatechange=_(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(N){go(this,N);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)d.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const N of g.keys())d.set(N,g.get(N));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),P=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Lt,c,void 0)>=0)||g||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,$]of d)this.g.setRequestHeader(N,$);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(N){go(this,N)}};function go(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.o=5,Pp(a),el(a)}function Pp(a){a.A||(a.A=!0,Xe(a,"complete"),Xe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Xe(this,"complete"),Xe(this,"abort"),el(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),el(this,!0)),fe.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Np(this):this.Xa())},t.Xa=function(){Np(this)};function Np(a){if(a.h&&typeof i<"u"){if(a.v&&gr(a)==4)setTimeout(a.Ca.bind(a),0);else if(Xe(a,"readystatechange"),gr(a)==4){a.h=!1;try{const N=a.ca();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var g;if(g=N===0){let $=String(a.D).match(po)[1]||null;!$&&o.self&&o.self.location&&($=o.self.location.protocol.slice(0,-1)),g=!Qt.test($?$.toLowerCase():"")}d=g}if(d)Xe(a,"complete"),Xe(a,"success");else{a.o=6;try{var P=gr(a)>2?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.ca()+"]",Pp(a)}}finally{el(a)}}}}function el(a,c){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,c||Xe(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function gr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return gr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),Ec(c)}};function bp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function h1(a){const c={};a=(a.g&&gr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(I(a[g]))continue;var d=Ac(a[g]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=c[P]||[];c[P]=N,N.push(d)}se(c,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function yo(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Dp(a){this.za=0,this.i=[],this.j=new Ks,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=yo("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=yo("baseRetryDelayMs",5e3,a),this.Za=yo("retryDelaySeedMs",1e4,a),this.Ta=yo("forwardChannelMaxRetries",2,a),this.va=yo("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Xa(a&&a.concurrentRequestLimit),this.Ba=new Ie,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Dp.prototype,t.ka=8,t.I=1,t.connect=function(a,c,d,g){ht(0),this.W=a,this.H=c||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=Bp(this,null,this.W),nl(this)};function bc(a){if(Vp(a),a.I==3){var c=a.V++,d=Kt(a.J);if(_e(d,"SID",a.M),_e(d,"RID",c),_e(d,"TYPE","terminate"),_o(a,d),c=new En(a,a.j,c),c.M=2,c.A=mr(Kt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=c.A,d=!0),d||(c.g=$p(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Xs(c)}zp(a)}function tl(a){a.g&&(Vc(a),a.g.cancel(),a.g=null)}function Vp(a){tl(a),a.v&&(o.clearTimeout(a.v),a.v=null),rl(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function nl(a){if(!co(a.h)&&!a.m){a.m=!0;var c=a.Ea;j||y(),B||(j(),B=!0),v.add(c,a),a.D=0}}function d1(a,c){return rt(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=c.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Gs(h(a.Ea,a,c),Up(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const P=new En(this,this.j,a);let N=this.o;if(this.U&&(N?(N=ye(N),on(N,this.U)):N=this.U),this.u!==null||this.R||(P.J=N,N=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Op(this,P,c),d=Kt(this.J),_e(d,"RID",a),_e(d,"CVER",22),this.G&&_e(d,"X-HTTP-Session-Id",this.G),_o(this,d),N&&(this.R?c="headers="+ss(In(N))+"&"+c:this.u&&Rt(d,this.u,N)),Tn(this.h,P),this.Ra&&_e(d,"TYPE","init"),this.S?(_e(d,"$req",c),_e(d,"SID","null"),P.U=!0,$n(P,d,null)):$n(P,d,c),this.I=2}}else this.I==3&&(a?Mp(this,a):this.i.length==0||co(this.h)||Mp(this))};function Mp(a,c){var d;c?d=c.l:d=a.V++;const g=Kt(a.J);_e(g,"SID",a.M),_e(g,"RID",d),_e(g,"AID",a.K),_o(a,g),a.u&&a.o&&Rt(g,a.u,a.o),d=new En(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),c&&(a.i=c.G.concat(a.i)),c=Op(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Tn(a.h,d),$n(d,g,c)}function _o(a,c){a.H&&Q(a.H,function(d,g){_e(c,g,d)}),a.l&&Q({},function(d,g){_e(c,g,d)})}function Op(a,c,d){d=Math.min(a.i.length,d);const g=a.l?h(a.l.Ka,a.l,a):null;e:{var P=a.i;let ie=-1;for(;;){const We=["count="+d];ie==-1?d>0?(ie=P[0].g,We.push("ofs="+ie)):ie=0:We.push("ofs="+ie);let Te=!0;for(let Je=0;Je<d;Je++){var N=P[Je].g;const Sn=P[Je].map;if(N-=ie,N<0)ie=Math.max(0,P[Je].g-100),Te=!1;else try{N="req"+N+"_"||"";try{var $=Sn instanceof Map?Sn:Object.entries(Sn);for(const[ds,yr]of $){let _r=yr;l(yr)&&(_r=Hs(yr)),We.push(N+ds+"="+encodeURIComponent(_r))}}catch(ds){throw We.push(N+"type="+encodeURIComponent("_badmap")),ds}}catch{g&&g(Sn)}}if(Te){$=We.join("&");break e}}$=void 0}return a=a.i.splice(0,d),c.G=a,$}function Lp(a){if(!a.g&&!a.v){a.Y=1;var c=a.Da;j||y(),B||(j(),B=!0),v.add(c,a),a.A=0}}function Dc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Gs(h(a.Da,a),Up(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,jp(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Gs(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ht(10),tl(this),jp(this))};function Vc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function jp(a){a.g=new En(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var c=Kt(a.na);_e(c,"RID","rpc"),_e(c,"SID",a.M),_e(c,"AID",a.K),_e(c,"CI",a.F?"0":"1"),!a.F&&a.ia&&_e(c,"TO",a.ia),_e(c,"TYPE","xmlhttp"),_o(a,c),a.u&&a.o&&Rt(c,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=mr(Kt(c)),d.u=null,d.R=!0,Ka(d,a)}t.Va=function(){this.C!=null&&(this.C=null,tl(this),Dc(this),ht(19))};function rl(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Fp(a,c){var d=null;if(a.g==c){rl(a),Vc(a),a.g=null;var g=2}else if(os(a.h,c))d=c.G,ho(a.h,c),g=1;else return;if(a.I!=0){if(c.o)if(g==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var P=a.D;g=io(),Xe(g,new xc(g,d)),nl(a)}else Lp(a);else if(P=c.m,P==3||P==0&&c.X>0||!(g==1&&d1(a,c)||g==2&&Dc(a)))switch(d&&d.length>0&&(c=a.h,c.i=c.i.concat(d)),P){case 1:hs(a,5);break;case 4:hs(a,10);break;case 3:hs(a,6);break;default:hs(a,2)}}}function Up(a,c){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*c}function hs(a,c){if(a.j.info("Error code "+c),c==2){var d=h(a.bb,a),g=a.Ua;const P=!g;g=new ln(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||qn(g,"https"),mr(g),P?dt(g.toString(),d):qe(g.toString(),d)}else ht(2);a.I=0,a.l&&a.l.pa(c),zp(a),Vp(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function zp(a){if(a.I=0,a.ja=[],a.l){const c=fo(a.h);(c.length!=0||a.i.length!=0)&&(b(a.ja,c),b(a.ja,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.oa()}}function Bp(a,c,d){var g=d instanceof ln?Kt(d):new ln(d);if(g.g!="")c&&(g.g=c+"."+g.g),as(g,g.u);else{var P=o.location;g=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;const N=new ln(null);g&&qn(N,g),c&&(N.g=c),P&&as(N,P),d&&(N.h=d),g=N}return d=a.G,c=a.wa,d&&c&&_e(g,d,c),_e(g,"VER",a.ka),_o(a,g),g}function $p(a,c,d){if(c&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Aa&&!a.ma?new fe(new ge({ab:d})):new fe(a.ma),c.Fa(a.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Hp(){}t=Hp.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function sl(){}sl.prototype.g=function(a,c){return new jt(a,c)};function jt(a,c){Ue.call(this),this.g=new Dp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(a?a["X-WebChannel-Client-Profile"]=c.sa:a={"X-WebChannel-Client-Profile":c.sa}),this.g.U=a,(a=c&&c.Qb)&&!I(a)&&(this.g.u=a),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!I(c)&&(this.g.G=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new ei(this)}m(jt,Ue),jt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},jt.prototype.close=function(){bc(this.g)},jt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Hs(a),a=d);c.i.push(new kc(c.Ya++,a)),c.I==3&&nl(c)},jt.prototype.N=function(){this.g.l=null,delete this.j,bc(this.g),delete this.g,jt.Z.N.call(this)};function qp(a){qs.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}m(qp,qs);function Wp(){pr.call(this),this.status=1}m(Wp,pr);function ei(a){this.g=a}m(ei,Hp),ei.prototype.ra=function(){Xe(this.g,"a")},ei.prototype.qa=function(a){Xe(this.g,new qp(a))},ei.prototype.pa=function(a){Xe(this.g,new Wp)},ei.prototype.oa=function(){Xe(this.g,"b")},sl.prototype.createWebChannel=sl.prototype.g,jt.prototype.send=jt.prototype.o,jt.prototype.open=jt.prototype.m,jt.prototype.close=jt.prototype.close,B0=function(){return new sl},z0=function(){return io()},U0=zn,Ad={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Wt.NO_ERROR=0,Wt.TIMEOUT=8,Wt.HTTP_ERROR=6,Wl=Wt,qa.COMPLETE="complete",F0=qa,so.EventType=wn,wn.OPEN="a",wn.CLOSE="b",wn.ERROR="c",wn.MESSAGE="d",Ue.prototype.listen=Ue.prototype.J,No=so,fe.prototype.listenOnce=fe.prototype.K,fe.prototype.getLastError=fe.prototype.Ha,fe.prototype.getLastErrorCode=fe.prototype.ya,fe.prototype.getStatus=fe.prototype.ca,fe.prototype.getResponseJson=fe.prototype.La,fe.prototype.getResponseText=fe.prototype.la,fe.prototype.send=fe.prototype.ea,fe.prototype.setWithCredentials=fe.prototype.Fa,j0=fe}).apply(typeof xl<"u"?xl:typeof self<"u"?self:typeof window<"u"?window:{});const Lg="@firebase/firestore",jg="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qi="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=new jf("@firebase/firestore");function ni(){return Ds.logLevel}function W(t,...e){if(Ds.logLevel<=le.DEBUG){const n=e.map(Xf);Ds.debug(`Firestore (${Qi}): ${t}`,...n)}}function lr(t,...e){if(Ds.logLevel<=le.ERROR){const n=e.map(Xf);Ds.error(`Firestore (${Qi}): ${t}`,...n)}}function Li(t,...e){if(Ds.logLevel<=le.WARN){const n=e.map(Xf);Ds.warn(`Firestore (${Qi}): ${t}`,...n)}}function Xf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ee(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,$0(t,r,n)}function $0(t,e,n){let r=`FIRESTORE (${Qi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw lr(r),new Error(r)}function we(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||$0(e,s,r)}function re(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends hr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class J2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class Z2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class eC{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){we(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new $r;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new $r,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new $r)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(we(typeof r.accessToken=="string",31837,{l:r}),new H0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string",2055,{h:e}),new yt(e)}}class tC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class nC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new tC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Fg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,fn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){we(this.o===void 0,3512);const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Fg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(we(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Fg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=sC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function kd(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return vh(s)===vh(i)?ue(s,i):vh(s)?1:-1}return ue(t.length,e.length)}const iC=55296,oC=57343;function vh(t){const e=t.charCodeAt(0);return e>=iC&&e<=oC}function ji(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug="__name__";class An{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ee(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return An.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof An?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=An.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ue(e.length,n.length)}static compareSegments(e,n){const r=An.isNumericId(e),s=An.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?An.extractNumericId(e).compare(An.extractNumericId(n)):kd(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Br.fromString(e.substring(4,e.length-2))}}class be extends An{construct(e,n,r){return new be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new be(n)}static emptyPath(){return new be([])}}const aC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends An{construct(e,n,r){return new ot(e,n,r)}static isValidIdentifier(e){return aC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ug}static keyField(){return new ot([Ug])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new X(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new X(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new X(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new X(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(be.fromString(e))}static fromName(e){return new Z(be.fromString(e).popFirst(5))}static empty(){return new Z(be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new be(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(t,e,n){if(!n)throw new X(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function uC(t,e,n,r){if(e===!0&&r===!0)throw new X(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function zg(t){if(!Z.isDocumentKey(t))throw new X(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function q0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Zf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee(12329,{type:typeof t})}function ga(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zf(t);throw new X(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function $e(t,e){const n={typeString:t};return e&&(n.value=e),n}function Va(t,e){if(!q0(t))throw new X(F.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new X(F.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg=-62135596800,$g=1e6;class Ce{static now(){return Ce.fromMillis(Date.now())}static fromDate(e){return Ce.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*$g);return new Ce(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Bg)throw new X(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/$g}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ce._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Va(e,Ce._jsonSchema))return new Ce(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Bg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ce._jsonSchemaVersion="firestore/timestamp/1.0",Ce._jsonSchema={type:$e("string",Ce._jsonSchemaVersion),seconds:$e("number"),nanoseconds:$e("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{static fromTimestamp(e){return new ne(e)}static min(){return new ne(new Ce(0,0))}static max(){return new ne(new Ce(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ya=-1;function cC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ne.fromTimestamp(r===1e9?new Ce(n+1,0):new Ce(n,r));return new Wr(s,Z.empty(),e)}function hC(t){return new Wr(t.readTime,t.key,ya)}class Wr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Wr(ne.min(),Z.empty(),ya)}static max(){return new Wr(ne.max(),Z.empty(),ya)}}function dC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Z.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yi(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==fC)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(s=>s?O.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new O((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;n(e[h]).next(p=>{o[h]=p,++l,l===i&&r(o)},p=>s(p))}})}static doWhile(e,n){return new O((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function mC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Xi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class lc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}lc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep=-1;function uc(t){return t==null}function Pu(t){return t===0&&1/t==-1/0}function gC(t){return typeof t=="number"&&Number.isInteger(t)&&!Pu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0="";function yC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Hg(e)),e=_C(t.get(n),e);return Hg(e)}function _C(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case W0:n+="";break;default:n+=i}}return n}function Hg(t){return t+W0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ls(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function G0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){this.comparator=e,this.root=n||it.EMPTY}insert(e,n){return new Me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Cl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Cl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Cl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Cl(this.root,e,this.comparator,!0)}}class Cl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??it.RED,this.left=s??it.EMPTY,this.right=i??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new it(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return it.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ee(27949);return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw ee(57766)}get value(){throw ee(16141)}get color(){throw ee(16727)}get left(){throw ee(29726)}get right(){throw ee(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new it(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Wg(this.data.getIterator())}getIteratorFrom(e){return new Wg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ye(this.comparator);return n.data=e,n}}class Wg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new mn([])}unionWith(e){let n=new Ye(ot.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new mn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ji(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class K0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new K0("Invalid base64 string: "+i):i}}(e);return new ut(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const vC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gr(t){if(we(!!t,39018),typeof t=="string"){let e=0;const n=vC.exec(t);if(we(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Kr(t){return typeof t=="string"?ut.fromBase64String(t):ut.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0="server_timestamp",Y0="__type__",X0="__previous_value__",J0="__local_write_time__";function tp(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Y0])==null?void 0:r.stringValue)===Q0}function cc(t){const e=t.mapValue.fields[X0];return tp(e)?cc(e):e}function _a(t){const e=Gr(t.mapValue.fields[J0].timestampValue);return new Ce(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,n,r,s,i,o,l,u,h,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=p}}const Nu="(default)";class va{constructor(e,n){this.projectId=e,this.database=n||Nu}static empty(){return new va("","")}get isDefaultDatabase(){return this.database===Nu}isEqual(e){return e instanceof va&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0="__type__",EC="__max__",Al={mapValue:{}},ew="__vector__",bu="value";function Qr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?tp(t)?4:IC(t)?9007199254740991:TC(t)?10:11:ee(28295,{value:t})}function Ln(t,e){if(t===e)return!0;const n=Qr(t);if(n!==Qr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _a(t).isEqual(_a(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Gr(s.timestampValue),l=Gr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Kr(s.bytesValue).isEqual(Kr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return je(s.geoPointValue.latitude)===je(i.geoPointValue.latitude)&&je(s.geoPointValue.longitude)===je(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return je(s.integerValue)===je(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=je(s.doubleValue),l=je(i.doubleValue);return o===l?Pu(o)===Pu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ji(t.arrayValue.values||[],e.arrayValue.values||[],Ln);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(qg(o)!==qg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Ln(o[u],l[u])))return!1;return!0}(t,e);default:return ee(52216,{left:t})}}function wa(t,e){return(t.values||[]).find(n=>Ln(n,e))!==void 0}function Fi(t,e){if(t===e)return 0;const n=Qr(t),r=Qr(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=je(i.integerValue||i.doubleValue),u=je(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Gg(t.timestampValue,e.timestampValue);case 4:return Gg(_a(t),_a(e));case 5:return kd(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Kr(i),u=Kr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const p=ue(l[h],u[h]);if(p!==0)return p}return ue(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ue(je(i.latitude),je(o.latitude));return l!==0?l:ue(je(i.longitude),je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Kg(t.arrayValue,e.arrayValue);case 10:return function(i,o){var _,k,b,D;const l=i.fields||{},u=o.fields||{},h=(_=l[bu])==null?void 0:_.arrayValue,p=(k=u[bu])==null?void 0:k.arrayValue,m=ue(((b=h==null?void 0:h.values)==null?void 0:b.length)||0,((D=p==null?void 0:p.values)==null?void 0:D.length)||0);return m!==0?m:Kg(h,p)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Al.mapValue&&o===Al.mapValue)return 0;if(i===Al.mapValue)return 1;if(o===Al.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=o.fields||{},p=Object.keys(h);u.sort(),p.sort();for(let m=0;m<u.length&&m<p.length;++m){const _=kd(u[m],p[m]);if(_!==0)return _;const k=Fi(l[u[m]],h[p[m]]);if(k!==0)return k}return ue(u.length,p.length)}(t.mapValue,e.mapValue);default:throw ee(23264,{he:n})}}function Gg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=Gr(t),r=Gr(e),s=ue(n.seconds,r.seconds);return s!==0?s:ue(n.nanos,r.nanos)}function Kg(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Fi(n[s],r[s]);if(i)return i}return ue(n.length,r.length)}function Ui(t){return Rd(t)}function Rd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Gr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Kr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Z.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Rd(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Rd(n.fields[o])}`;return s+"}"}(t.mapValue):ee(61005,{value:t})}function Gl(t){switch(Qr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=cc(t);return e?16+Gl(e):16;case 5:return 2*t.stringValue.length;case 6:return Kr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Gl(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Ls(r.fields,(i,o)=>{s+=i.length+Gl(o)}),s}(t.mapValue);default:throw ee(13486,{value:t})}}function Pd(t){return!!t&&"integerValue"in t}function np(t){return!!t&&"arrayValue"in t}function Qg(t){return!!t&&"nullValue"in t}function Yg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Kl(t){return!!t&&"mapValue"in t}function TC(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Z0])==null?void 0:r.stringValue)===ew}function Wo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Ls(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Wo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Wo(t.arrayValue.values[n]);return e}return{...t}}function IC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===EC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.value=e}static empty(){return new Jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Kl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wo(n)}setAll(e){let n=ot.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Wo(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Kl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ln(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Kl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ls(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Jt(Wo(this.value))}}function tw(t){const e=[];return Ls(t.fields,(n,r)=>{const s=new ot([n]);if(Kl(r)){const i=tw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new mn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new vt(e,0,ne.min(),ne.min(),ne.min(),Jt.empty(),0)}static newFoundDocument(e,n,r,s){return new vt(e,1,n,ne.min(),r,s,0)}static newNoDocument(e,n){return new vt(e,2,n,ne.min(),ne.min(),Jt.empty(),0)}static newUnknownDocument(e,n){return new vt(e,3,n,ne.min(),ne.min(),Jt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Du{constructor(e,n){this.position=e,this.inclusive=n}}function Xg(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Z.comparator(Z.fromName(o.referenceValue),n.key):r=Fi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Jg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ln(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Vu{constructor(e,n="asc"){this.field=e,this.dir=n}}function SC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class nw{}class Ke extends nw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new CC(e,n,r):n==="array-contains"?new RC(e,r):n==="in"?new PC(e,r):n==="not-in"?new NC(e,r):n==="array-contains-any"?new bC(e,r):new Ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new AC(e,r):new kC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Fi(n,this.value)):n!==null&&Qr(this.value)===Qr(n)&&this.matchesComparison(Fi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jn extends nw{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new jn(e,n)}matches(e){return rw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function rw(t){return t.op==="and"}function sw(t){return xC(t)&&rw(t)}function xC(t){for(const e of t.filters)if(e instanceof jn)return!1;return!0}function Nd(t){if(t instanceof Ke)return t.field.canonicalString()+t.op.toString()+Ui(t.value);if(sw(t))return t.filters.map(e=>Nd(e)).join(",");{const e=t.filters.map(n=>Nd(n)).join(",");return`${t.op}(${e})`}}function iw(t,e){return t instanceof Ke?function(r,s){return s instanceof Ke&&r.op===s.op&&r.field.isEqual(s.field)&&Ln(r.value,s.value)}(t,e):t instanceof jn?function(r,s){return s instanceof jn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&iw(o,s.filters[l]),!0):!1}(t,e):void ee(19439)}function ow(t){return t instanceof Ke?function(n){return`${n.field.canonicalString()} ${n.op} ${Ui(n.value)}`}(t):t instanceof jn?function(n){return n.op.toString()+" {"+n.getFilters().map(ow).join(" ,")+"}"}(t):"Filter"}class CC extends Ke{constructor(e,n,r){super(e,n,r),this.key=Z.fromName(r.referenceValue)}matches(e){const n=Z.comparator(e.key,this.key);return this.matchesComparison(n)}}class AC extends Ke{constructor(e,n){super(e,"in",n),this.keys=aw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class kC extends Ke{constructor(e,n){super(e,"not-in",n),this.keys=aw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function aw(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>Z.fromName(r.referenceValue))}class RC extends Ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return np(n)&&wa(n.arrayValue,this.value)}}class PC extends Ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&wa(this.value.arrayValue,n)}}class NC extends Ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(wa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!wa(this.value.arrayValue,n)}}class bC extends Ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!np(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>wa(this.value.arrayValue,r))}}/**
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
 */class DC{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Zg(t,e=null,n=[],r=[],s=null,i=null,o=null){return new DC(t,e,n,r,s,i,o)}function rp(t){const e=re(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Nd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),uc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ui(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ui(r)).join(",")),e.Te=n}return e.Te}function sp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!SC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!iw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Jg(t.startAt,e.startAt)&&Jg(t.endAt,e.endAt)}function bd(t){return Z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function VC(t,e,n,r,s,i,o,l){return new hc(t,e,n,r,s,i,o,l)}function ip(t){return new hc(t)}function ey(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function MC(t){return t.collectionGroup!==null}function Go(t){const e=re(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ye(ot.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Vu(i,r))}),n.has(ot.keyField().canonicalString())||e.Ie.push(new Vu(ot.keyField(),r))}return e.Ie}function bn(t){const e=re(t);return e.Ee||(e.Ee=OC(e,Go(t))),e.Ee}function OC(t,e){if(t.limitType==="F")return Zg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Vu(s.field,i)});const n=t.endAt?new Du(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Du(t.startAt.position,t.startAt.inclusive):null;return Zg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Dd(t,e,n){return new hc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function dc(t,e){return sp(bn(t),bn(e))&&t.limitType===e.limitType}function lw(t){return`${rp(bn(t))}|lt:${t.limitType}`}function ri(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>ow(s)).join(", ")}]`),uc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ui(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ui(s)).join(",")),`Target(${r})`}(bn(t))}; limitType=${t.limitType})`}function fc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Go(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const h=Xg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Go(r),s)||r.endAt&&!function(o,l,u){const h=Xg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Go(r),s))}(t,e)}function LC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function uw(t){return(e,n)=>{let r=!1;for(const s of Go(t)){const i=jC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function jC(t,e,n){const r=t.field.isKeyField()?Z.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),h=l.data.field(i);return u!==null&&h!==null?Fi(u,h):ee(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ls(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return G0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC=new Me(Z.comparator);function ur(){return FC}const cw=new Me(Z.comparator);function bo(...t){let e=cw;for(const n of t)e=e.insert(n.key,n);return e}function hw(t){let e=cw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ws(){return Ko()}function dw(){return Ko()}function Ko(){return new js(t=>t.toString(),(t,e)=>t.isEqual(e))}const UC=new Me(Z.comparator),zC=new Ye(Z.comparator);function ce(...t){let e=zC;for(const n of t)e=e.add(n);return e}const BC=new Ye(ue);function $C(){return BC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pu(e)?"-0":e}}function fw(t){return{integerValue:""+t}}function HC(t,e){return gC(e)?fw(e):op(t,e)}/**
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
 */class pc{constructor(){this._=void 0}}function qC(t,e,n){return t instanceof Mu?function(s,i){const o={fields:{[Y0]:{stringValue:Q0},[J0]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&tp(i)&&(i=cc(i)),i&&(o.fields[X0]=i),{mapValue:o}}(n,e):t instanceof Ea?mw(t,e):t instanceof Ta?gw(t,e):function(s,i){const o=pw(s,i),l=ty(o)+ty(s.Ae);return Pd(o)&&Pd(s.Ae)?fw(l):op(s.serializer,l)}(t,e)}function WC(t,e,n){return t instanceof Ea?mw(t,e):t instanceof Ta?gw(t,e):n}function pw(t,e){return t instanceof Ou?function(r){return Pd(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Mu extends pc{}class Ea extends pc{constructor(e){super(),this.elements=e}}function mw(t,e){const n=yw(e);for(const r of t.elements)n.some(s=>Ln(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ta extends pc{constructor(e){super(),this.elements=e}}function gw(t,e){let n=yw(e);for(const r of t.elements)n=n.filter(s=>!Ln(s,r));return{arrayValue:{values:n}}}class Ou extends pc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function ty(t){return je(t.integerValue||t.doubleValue)}function yw(t){return np(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function GC(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ea&&s instanceof Ea||r instanceof Ta&&s instanceof Ta?ji(r.elements,s.elements,Ln):r instanceof Ou&&s instanceof Ou?Ln(r.Ae,s.Ae):r instanceof Mu&&s instanceof Mu}(t.transform,e.transform)}class KC{constructor(e,n){this.version=e,this.transformResults=n}}class tr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tr}static exists(e){return new tr(void 0,e)}static updateTime(e){return new tr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ql(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class mc{}function _w(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ww(t.key,tr.none()):new Ma(t.key,t.data,tr.none());{const n=t.data,r=Jt.empty();let s=new Ye(ot.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Fs(t.key,r,new mn(s.toArray()),tr.none())}}function QC(t,e,n){t instanceof Ma?function(s,i,o){const l=s.value.clone(),u=ry(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Fs?function(s,i,o){if(!Ql(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=ry(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(vw(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Qo(t,e,n,r){return t instanceof Ma?function(i,o,l,u){if(!Ql(i.precondition,o))return l;const h=i.value.clone(),p=sy(i.fieldTransforms,u,o);return h.setAll(p),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Fs?function(i,o,l,u){if(!Ql(i.precondition,o))return l;const h=sy(i.fieldTransforms,u,o),p=o.data;return p.setAll(vw(i)),p.setAll(h),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return Ql(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function YC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=pw(r.transform,s||null);i!=null&&(n===null&&(n=Jt.empty()),n.set(r.field,i))}return n||null}function ny(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ji(r,s,(i,o)=>GC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ma extends mc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Fs extends mc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function vw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ry(t,e,n){const r=new Map;we(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,WC(o,l,n[s]))}return r}function sy(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,qC(i,o,e))}return r}class ww extends mc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class XC extends mc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&QC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Qo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Qo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=dw();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=_w(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(ne.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&ji(this.mutations,e.mutations,(n,r)=>ny(n,r))&&ji(this.baseMutations,e.baseMutations,(n,r)=>ny(n,r))}}class ap{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){we(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return UC}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ap(e,n,r,s)}}/**
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
 */class ZC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class eA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,de;function tA(t){switch(t){case F.OK:return ee(64938);case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0;default:return ee(15467,{code:t})}}function Ew(t){if(t===void 0)return lr("GRPC error has no .code"),F.UNKNOWN;switch(t){case ze.OK:return F.OK;case ze.CANCELLED:return F.CANCELLED;case ze.UNKNOWN:return F.UNKNOWN;case ze.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case ze.INTERNAL:return F.INTERNAL;case ze.UNAVAILABLE:return F.UNAVAILABLE;case ze.UNAUTHENTICATED:return F.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case ze.NOT_FOUND:return F.NOT_FOUND;case ze.ALREADY_EXISTS:return F.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return F.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case ze.ABORTED:return F.ABORTED;case ze.OUT_OF_RANGE:return F.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return F.UNIMPLEMENTED;case ze.DATA_LOSS:return F.DATA_LOSS;default:return ee(39323,{code:t})}}(de=ze||(ze={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function nA(){return new TextEncoder}/**
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
 */const rA=new Br([4294967295,4294967295],0);function iy(t){const e=nA().encode(t),n=new L0;return n.update(e),new Uint8Array(n.digest())}function oy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Br([n,r],0),new Br([s,i],0)]}class lp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Do(`Invalid padding: ${n}`);if(r<0)throw new Do(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Do(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Do(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Br.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Br.fromNumber(r)));return s.compare(rA)===1&&(s=new Br([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=iy(e),[r,s]=oy(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new lp(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=iy(e),[r,s]=oy(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Do extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Oa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new gc(ne.min(),s,new Me(ue),ur(),ce())}}class Oa{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Oa(r,n,ce(),ce(),ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class Tw{constructor(e,n){this.targetId=e,this.Ce=n}}class Iw{constructor(e,n,r=ut.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class ay{constructor(){this.ve=0,this.Fe=ly(),this.Me=ut.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ce(),n=ce(),r=ce();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ee(38017,{changeType:i})}}),new Oa(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=ly()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,we(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class sA{constructor(e){this.Ge=e,this.ze=new Map,this.je=ur(),this.Je=kl(),this.He=kl(),this.Ye=new Me(ue)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ee(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(bd(i))if(r===0){const o=new Z(i.path);this.et(n,o,vt.newNoDocument(o,ne.min()))}else we(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Kr(r).toUint8Array()}catch(u){if(u instanceof K0)return Li("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new lp(o,s,i)}catch(u){return Li(u instanceof Do?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&bd(l.target)){const u=new Z(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,vt.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=ce();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new gc(e,n,this.Ye,this.je,r);return this.je=ur(),this.Je=kl(),this.He=kl(),this.Ye=new Me(ue),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new ay,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Ye(ue),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Ye(ue),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new ay),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function kl(){return new Me(Z.comparator)}function ly(){return new Me(Z.comparator)}const iA={asc:"ASCENDING",desc:"DESCENDING"},oA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},aA={and:"AND",or:"OR"};class lA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Vd(t,e){return t.useProto3Json||uc(e)?e:{value:e}}function Lu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Sw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function uA(t,e){return Lu(t,e.toTimestamp())}function Dn(t){return we(!!t,49232),ne.fromTimestamp(function(n){const r=Gr(n);return new Ce(r.seconds,r.nanos)}(t))}function up(t,e){return Md(t,e).canonicalString()}function Md(t,e){const n=function(s){return new be(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function xw(t){const e=be.fromString(t);return we(Pw(e),10190,{key:e.toString()}),e}function Od(t,e){return up(t.databaseId,e.path)}function wh(t,e){const n=xw(e);if(n.get(1)!==t.databaseId.projectId)throw new X(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Z(Aw(n))}function Cw(t,e){return up(t.databaseId,e)}function cA(t){const e=xw(t);return e.length===4?be.emptyPath():Aw(e)}function Ld(t){return new be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Aw(t){return we(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function uy(t,e,n){return{name:Od(t,e),fields:n.value.mapValue.fields}}function hA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ee(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,p){return h.useProto3Json?(we(p===void 0||typeof p=="string",58123),ut.fromBase64String(p||"")):(we(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),ut.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const p=h.code===void 0?F.UNKNOWN:Ew(h.code);return new X(p,h.message||"")}(o);n=new Iw(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=wh(t,r.document.name),i=Dn(r.document.updateTime),o=r.document.createTime?Dn(r.document.createTime):ne.min(),l=new Jt({mapValue:{fields:r.document.fields}}),u=vt.newFoundDocument(s,i,o,l),h=r.targetIds||[],p=r.removedTargetIds||[];n=new Yl(h,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=wh(t,r.document),i=r.readTime?Dn(r.readTime):ne.min(),o=vt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Yl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=wh(t,r.document),i=r.removedTargetIds||[];n=new Yl([],i,s,null)}else{if(!("filter"in e))return ee(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new eA(s,i),l=r.targetId;n=new Tw(l,o)}}return n}function dA(t,e){let n;if(e instanceof Ma)n={update:uy(t,e.key,e.value)};else if(e instanceof ww)n={delete:Od(t,e.key)};else if(e instanceof Fs)n={update:uy(t,e.key,e.data),updateMask:EA(e.fieldMask)};else{if(!(e instanceof XC))return ee(16599,{Vt:e.type});n={verify:Od(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Mu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ea)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ta)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ou)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw ee(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:uA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee(27497)}(t,e.precondition)),n}function fA(t,e){return t&&t.length>0?(we(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Dn(s.updateTime):Dn(i);return o.isEqual(ne.min())&&(o=Dn(i)),new KC(o,s.transformResults||[])}(n,e))):[]}function pA(t,e){return{documents:[Cw(t,e.path)]}}function mA(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Cw(t,s);const i=function(h){if(h.length!==0)return Rw(jn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(p=>function(_){return{field:si(_.field),direction:_A(_.dir)}}(p))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Vd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:s}}function gA(t){let e=cA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){we(r===1,65062);const p=n.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];n.where&&(i=function(m){const _=kw(m);return _ instanceof jn&&sw(_)?_.getFilters():[_]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(_=>function(b){return new Vu(ii(b.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(_))}(n.orderBy));let l=null;n.limit&&(l=function(m){let _;return _=typeof m=="object"?m.value:m,uc(_)?null:_}(n.limit));let u=null;n.startAt&&(u=function(m){const _=!!m.before,k=m.values||[];return new Du(k,_)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const _=!m.before,k=m.values||[];return new Du(k,_)}(n.endAt)),VC(e,s,o,i,l,"F",u,h)}function yA(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function kw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ii(n.unaryFilter.field);return Ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ii(n.unaryFilter.field);return Ke.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ii(n.unaryFilter.field);return Ke.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ii(n.unaryFilter.field);return Ke.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ee(61313);default:return ee(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ke.create(ii(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ee(58110);default:return ee(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return jn.create(n.compositeFilter.filters.map(r=>kw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ee(1026)}}(n.compositeFilter.op))}(t):ee(30097,{filter:t})}function _A(t){return iA[t]}function vA(t){return oA[t]}function wA(t){return aA[t]}function si(t){return{fieldPath:t.canonicalString()}}function ii(t){return ot.fromServerFormat(t.fieldPath)}function Rw(t){return t instanceof Ke?function(n){if(n.op==="=="){if(Yg(n.value))return{unaryFilter:{field:si(n.field),op:"IS_NAN"}};if(Qg(n.value))return{unaryFilter:{field:si(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Yg(n.value))return{unaryFilter:{field:si(n.field),op:"IS_NOT_NAN"}};if(Qg(n.value))return{unaryFilter:{field:si(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:si(n.field),op:vA(n.op),value:n.value}}}(t):t instanceof jn?function(n){const r=n.getFilters().map(s=>Rw(s));return r.length===1?r[0]:{compositeFilter:{op:wA(n.op),filters:r}}}(t):ee(54877,{filter:t})}function EA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Pw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n,r,s,i=ne.min(),o=ne.min(),l=ut.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Pr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e){this.yt=e}}function IA(t){const e=gA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Dd(e,e.limit,"L"):e}/**
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
 */class SA{constructor(){this.Cn=new xA}addToCollectionParentIndex(e,n){return this.Cn.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(Wr.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(Wr.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class xA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ye(be.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ye(be.comparator)).toArray()}}/**
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
 */const cy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Nw=41943040;class Nt{static withCacheSize(e){return new Nt(e,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt.DEFAULT_COLLECTION_PERCENTILE=10,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Nt.DEFAULT=new Nt(Nw,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Nt.DISABLED=new Nt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new zi(0)}static cr(){return new zi(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy="LruGarbageCollector",CA=1048576;function dy([t,e],[n,r]){const s=ue(t,n);return s===0?ue(e,r):s}class AA{constructor(e){this.Ir=e,this.buffer=new Ye(dy),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();dy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class kA{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){W(hy,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Xi(n)?W(hy,"Ignoring IndexedDB error during garbage collection: ",n):await Yi(n)}await this.Vr(3e5)})}}class RA{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return O.resolve(lc.ce);const r=new AA(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(cy)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),cy):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,l,u,h;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,o=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(i=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),ni()<=le.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-p}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(h-u)+`ms
Total Duration: ${h-p}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function PA(t,e){return new RA(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(){this.changes=new js(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class bA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Qo(r.mutation,s,mn.empty(),Ce.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ce()){const s=ws();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=bo();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ws();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ce()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=ur();const o=Ko(),l=function(){return Ko()}();return n.forEach((u,h)=>{const p=r.get(h.key);s.has(h.key)&&(p===void 0||p.mutation instanceof Fs)?i=i.insert(h.key,h):p!==void 0?(o.set(h.key,p.mutation.getFieldMask()),Qo(p.mutation,h,p.mutation.getFieldMask(),Ce.now())):o.set(h.key,mn.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,p)=>o.set(h,p)),n.forEach((h,p)=>l.set(h,new bA(p,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Ko();let s=new Me((o,l)=>o-l),i=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let p=r.get(u)||mn.empty();p=l.applyToLocalView(h,p),r.set(u,p);const m=(s.get(l.batchId)||ce()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,p=u.value,m=dw();p.forEach(_=>{if(!i.has(_)){const k=_w(n.get(_),r.get(_));k!==null&&m.set(_,k),i=i.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return Z.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):MC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):O.resolve(ws());let l=ya,u=i;return o.next(h=>O.forEach(h,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(p)?O.resolve():this.remoteDocumentCache.getEntry(e,p).next(_=>{u=u.insert(p,_)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,ce())).next(p=>({batchId:l,changes:hw(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Z(n)).next(r=>{let s=bo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=bo();return this.indexManager.getCollectionParents(e,i).next(l=>O.forEach(l,u=>{const h=function(m,_){return new hc(_,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(p=>{p.forEach((m,_)=>{o=o.insert(m,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,h)=>{const p=h.getKey();o.get(p)===null&&(o=o.insert(p,vt.newInvalidDocument(p)))});let l=bo();return o.forEach((u,h)=>{const p=i.get(u);p!==void 0&&Qo(p.mutation,h,mn.empty(),Ce.now()),fc(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return O.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Dn(s.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:IA(s.bundledQuery),readTime:Dn(s.readTime)}}(n)),O.resolve()}}/**
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
 */class MA{constructor(){this.overlays=new Me(Z.comparator),this.qr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ws();return O.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const s=ws(),i=n.length+1,o=new Z(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return O.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Me((h,p)=>h-p);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let p=i.get(h.largestBatchId);p===null&&(p=ws(),i=i.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const l=ws(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,p)=>l.set(h,p)),!(l.size()>=s)););return O.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ZC(n,r));let i=this.qr.get(n);i===void 0&&(i=ce(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
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
 */class OA{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(){this.Qr=new Ye(Ze.$r),this.Ur=new Ye(Ze.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new Ze(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new Z(new be([])),r=new Ze(n,e),s=new Ze(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new Z(new be([])),r=new Ze(n,e),s=new Ze(n,e+1);let i=ce();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ze(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return Z.comparator(e.key,n.key)||ue(e.Yr,n.Yr)}static Kr(e,n){return ue(e.Yr,n.Yr)||Z.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Ye(Ze.$r)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new JC(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Zr=this.Zr.add(new Ze(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return O.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?ep:this.tr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),s=new Ze(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const l=this.Xr(o.Yr);i.push(l)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ye(ue);return n.forEach(s=>{const i=new Ze(s,0),o=new Ze(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],l=>{r=r.add(l.Yr)})}),O.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Z.isDocumentKey(i)||(i=i.child(""));const o=new Ze(new Z(i),0);let l=new Ye(ue);return this.Zr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.Yr)),!0)},o),O.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){we(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return O.forEach(n.mutations,s=>{const i=new Ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new Ze(n,0),s=this.Zr.firstAfterOrEqual(r);return O.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e){this.ri=e,this.docs=function(){return new Me(Z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(n))}getEntries(e,n){let r=ur();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():vt.newInvalidDocument(s))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=ur();const o=n.path,l=new Z(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:p}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||dC(hC(p),r)<=0||(s.has(p.key)||fc(n,p))&&(i=i.insert(p.key,p.mutableCopy()))}return O.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ee(9500)}ii(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new FA(this)}getSize(e){return O.resolve(this.size)}}class FA extends NA{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e){this.persistence=e,this.si=new js(n=>rp(n),sp),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.oi=0,this._i=new cp,this.targetCount=0,this.ai=zi.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),O.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new zi(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Pr(n),O.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),O.waitFor(i).next(()=>s)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e,n){this.ui={},this.overlays={},this.ci=new lc(0),this.li=!1,this.li=!0,this.hi=new OA,this.referenceDelegate=e(this),this.Pi=new UA(this),this.indexManager=new SA,this.remoteDocumentCache=function(s){return new jA(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new TA(n),this.Ii=new VA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new MA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new LA(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const s=new zA(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return O.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class zA extends pC{constructor(e){super(),this.currentSequenceNumber=e}}class hp{constructor(e){this.persistence=e,this.Ri=new cp,this.Vi=null}static mi(e){return new hp(e)}get fi(){if(this.Vi)return this.Vi;throw ee(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),O.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.fi,r=>{const s=Z.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,ne.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return O.or([()=>O.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class ju{constructor(e,n){this.persistence=e,this.pi=new js(r=>yC(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=PA(this,n)}static mi(e,n){return new ju(e,n)}Ei(){}di(e){return O.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return O.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?O.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,i.removeEntry(o,ne.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),O.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),O.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Gl(e.data.value)),n}br(e,n,r){return O.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return O.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=ce(),s=ce();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new dp(e,n.fromCache,r,s)}}/**
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
 */class BA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class $A{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return NI()?8:mC(Et())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new BA;return this.Ss(e,n,o).next(l=>{if(i.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(ni()<=le.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",ri(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),O.resolve()):(ni()<=le.DEBUG&&W("QueryEngine","Query:",ri(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(ni()<=le.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",ri(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,bn(n))):O.resolve())}ys(e,n){if(ey(n))return O.resolve(null);let r=bn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Dd(n,null,"F"),r=bn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ce(...i);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ds(n,l);return this.Cs(n,h,o,u.readTime)?this.ys(e,Dd(n,null,"F")):this.vs(e,h,n,u)}))})))}ws(e,n,r,s){return ey(n)||s.isEqual(ne.min())?O.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?O.resolve(null):(ni()<=le.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ri(n)),this.vs(e,o,n,cC(s,ya)).next(l=>l))})}Ds(e,n){let r=new Ye(uw(e));return n.forEach((s,i)=>{fc(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return ni()<=le.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",ri(n)),this.ps.getDocumentsMatchingQuery(e,n,Wr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp="LocalStore",HA=3e8;class qA{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Me(ue),this.xs=new js(i=>rp(i),sp),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new DA(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function WA(t,e,n,r){return new qA(t,e,n,r)}async function Dw(t,e){const n=re(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=ce();for(const h of s){o.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}for(const h of i){l.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ls:h,removedBatchIds:o,addedBatchIds:l}))})})}function GA(t,e){const n=re(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,h,p){const m=h.batch,_=m.keys();let k=O.resolve();return _.forEach(b=>{k=k.next(()=>p.getEntry(u,b)).next(D=>{const L=h.docVersions.get(b);we(L!==null,48541),D.version.compareTo(L)<0&&(m.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),p.addEntry(D)))})}),k.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ce();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Vw(t){const e=re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function KA(t,e){const n=re(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const l=[];e.targetChanges.forEach((p,m)=>{const _=s.get(m);if(!_)return;l.push(n.Pi.removeMatchingKeys(i,p.removedDocuments,m).next(()=>n.Pi.addMatchingKeys(i,p.addedDocuments,m)));let k=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?k=k.withResumeToken(ut.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):p.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(p.resumeToken,r)),s=s.insert(m,k),function(D,L,x){return D.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=HA?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(_,k,p)&&l.push(n.Pi.updateTargetData(i,k))});let u=ur(),h=ce();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,p))}),l.push(QA(i,o,e.documentUpdates).next(p=>{u=p.ks,h=p.qs})),!r.isEqual(ne.min())){const p=n.Pi.getLastRemoteSnapshotVersion(i).next(m=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(p)}return O.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.Ms=s,i))}function QA(t,e,n){let r=ce(),s=ce();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=ur();return n.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(ne.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W(fp,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{ks:o,qs:s}})}function YA(t,e){const n=re(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ep),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function XA(t,e){const n=re(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,O.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new Pr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function jd(t,e,n){const r=re(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Xi(o))throw o;W(fp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function fy(t,e,n){const r=re(t);let s=ne.min(),i=ce();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,p){const m=re(u),_=m.xs.get(p);return _!==void 0?O.resolve(m.Ms.get(_)):m.Pi.getTargetData(h,p)}(r,o,bn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:ne.min(),n?i:ce())).next(l=>(JA(r,LC(e),l),{documents:l,Qs:i})))}function JA(t,e,n){let r=t.Os.get(e)||ne.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class py{constructor(){this.activeTargetIds=$C()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ZA{constructor(){this.Mo=new py,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new py,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */const my="ConnectivityMonitor";class gy{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){W(my,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){W(my,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Rl=null;function Fd(){return Rl===null?Rl=function(){return 268435456+Math.round(2147483648*Math.random())}():Rl++,"0x"+Rl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh="RestConnection",tk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class nk{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Nu?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=Fd(),l=this.zo(e,n.toUriEncodedString());W(Eh,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:h}=new URL(l),p=Wi(h);return this.Jo(e,l,u,r,p).then(m=>(W(Eh,`Received RPC '${e}' ${o}: `,m),m),m=>{throw Li(Eh,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=tk[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const gt="WebChannelConnection";class sk extends nk{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Fd();return new Promise((l,u)=>{const h=new j0;h.setWithCredentials(!0),h.listenOnce(F0.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Wl.NO_ERROR:const m=h.getResponseJson();W(gt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case Wl.TIMEOUT:W(gt,`RPC '${e}' ${o} timed out`),u(new X(F.DEADLINE_EXCEEDED,"Request time out"));break;case Wl.HTTP_ERROR:const _=h.getStatus();if(W(gt,`RPC '${e}' ${o} failed with status:`,_,"response text:",h.getResponseText()),_>0){let k=h.getResponseJson();Array.isArray(k)&&(k=k[0]);const b=k==null?void 0:k.error;if(b&&b.status&&b.message){const D=function(x){const E=x.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(E)>=0?E:F.UNKNOWN}(b.status);u(new X(D,b.message))}else u(new X(F.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new X(F.UNAVAILABLE,"Connection failed."));break;default:ee(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{W(gt,`RPC '${e}' ${o} completed.`)}});const p=JSON.stringify(s);W(gt,`RPC '${e}' ${o} sending request:`,s),h.send(n,"POST",p,r,15)})}T_(e,n,r){const s=Fd(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=B0(),l=z0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const p=i.join("");W(gt,`Creating RPC '${e}' stream ${s}: ${p}`,u);const m=o.createWebChannel(p,u);this.I_(m);let _=!1,k=!1;const b=new rk({Yo:L=>{k?W(gt,`Not sending because RPC '${e}' stream ${s} is closed:`,L):(_||(W(gt,`Opening RPC '${e}' stream ${s} transport.`),m.open(),_=!0),W(gt,`RPC '${e}' stream ${s} sending:`,L),m.send(L))},Zo:()=>m.close()}),D=(L,x,E)=>{L.listen(x,C=>{try{E(C)}catch(M){setTimeout(()=>{throw M},0)}})};return D(m,No.EventType.OPEN,()=>{k||(W(gt,`RPC '${e}' stream ${s} transport opened.`),b.o_())}),D(m,No.EventType.CLOSE,()=>{k||(k=!0,W(gt,`RPC '${e}' stream ${s} transport closed`),b.a_(),this.E_(m))}),D(m,No.EventType.ERROR,L=>{k||(k=!0,Li(gt,`RPC '${e}' stream ${s} transport errored. Name:`,L.name,"Message:",L.message),b.a_(new X(F.UNAVAILABLE,"The operation could not be completed")))}),D(m,No.EventType.MESSAGE,L=>{var x;if(!k){const E=L.data[0];we(!!E,16349);const C=E,M=(C==null?void 0:C.error)||((x=C[0])==null?void 0:x.error);if(M){W(gt,`RPC '${e}' stream ${s} received error:`,M);const j=M.status;let B=function(T){const S=ze[T];if(S!==void 0)return Ew(S)}(j),v=M.message;B===void 0&&(B=F.INTERNAL,v="Unknown error status: "+j+" with message "+M.message),k=!0,b.a_(new X(B,v)),m.close()}else W(gt,`RPC '${e}' stream ${s} received:`,E),b.u_(E)}}),D(l,U0.STAT_EVENT,L=>{L.stat===Ad.PROXY?W(gt,`RPC '${e}' stream ${s} detected buffering proxy`):L.stat===Ad.NOPROXY&&W(gt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{b.__()},0),b}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Th(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(t){return new lA(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy="PersistentStream";class Ow{constructor(e,n,r,s,i,o,l,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Mw(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(lr(n.toString()),lr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new X(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return W(yy,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(W(yy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ik extends Ow{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=hA(this.serializer,e),r=function(i){if(!("targetChange"in i))return ne.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ne.min():o.readTime?Dn(o.readTime):ne.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Ld(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=bd(u)?{documents:pA(i,u)}:{query:mA(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Sw(i,o.resumeToken);const h=Vd(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(ne.min())>0){l.readTime=Lu(i,o.snapshotVersion.toTimestamp());const h=Vd(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=yA(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Ld(this.serializer),n.removeTarget=e,this.q_(n)}}class ok extends Ow{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return we(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,we(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){we(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=fA(e.writeResults,e.commitTime),r=Dn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Ld(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>dA(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{}class lk extends ak{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new X(F.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,Md(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(F.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,Md(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new X(F.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class uk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(lr(n),this.aa=!1):W("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs="RemoteStore";class ck{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Us(this)&&(W(Vs,"Restarting streams for network reachability change."),await async function(u){const h=re(u);h.Ea.add(4),await La(h),h.Ra.set("Unknown"),h.Ea.delete(4),await _c(h)}(this))})}),this.Ra=new uk(r,s)}}async function _c(t){if(Us(t))for(const e of t.da)await e(!0)}async function La(t){for(const e of t.da)await e(!1)}function Lw(t,e){const n=re(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),yp(n)?gp(n):Ji(n).O_()&&mp(n,e))}function pp(t,e){const n=re(t),r=Ji(n);n.Ia.delete(e),r.O_()&&jw(n,e),n.Ia.size===0&&(r.O_()?r.L_():Us(n)&&n.Ra.set("Unknown"))}function mp(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ji(t).Y_(e)}function jw(t,e){t.Va.Ue(e),Ji(t).Z_(e)}function gp(t){t.Va=new sA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ji(t).start(),t.Ra.ua()}function yp(t){return Us(t)&&!Ji(t).x_()&&t.Ia.size>0}function Us(t){return re(t).Ea.size===0}function Fw(t){t.Va=void 0}async function hk(t){t.Ra.set("Online")}async function dk(t){t.Ia.forEach((e,n)=>{mp(t,e)})}async function fk(t,e){Fw(t),yp(t)?(t.Ra.ha(e),gp(t)):t.Ra.set("Unknown")}async function pk(t,e,n){if(t.Ra.set("Online"),e instanceof Iw&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.Va.removeTarget(l))}(t,e)}catch(r){W(Vs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Fu(t,r)}else if(e instanceof Yl?t.Va.Ze(e):e instanceof Tw?t.Va.st(e):t.Va.tt(e),!n.isEqual(ne.min()))try{const r=await Vw(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Va.Tt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const p=i.Ia.get(h);p&&i.Ia.set(h,p.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const p=i.Ia.get(u);if(!p)return;i.Ia.set(u,p.withResumeToken(ut.EMPTY_BYTE_STRING,p.snapshotVersion)),jw(i,u);const m=new Pr(p.target,u,h,p.sequenceNumber);mp(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W(Vs,"Failed to raise snapshot:",r),await Fu(t,r)}}async function Fu(t,e,n){if(!Xi(e))throw e;t.Ea.add(1),await La(t),t.Ra.set("Offline"),n||(n=()=>Vw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W(Vs,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await _c(t)})}function Uw(t,e){return e().catch(n=>Fu(t,n,e))}async function vc(t){const e=re(t),n=Yr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ep;for(;mk(e);)try{const s=await YA(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,gk(e,s)}catch(s){await Fu(e,s)}zw(e)&&Bw(e)}function mk(t){return Us(t)&&t.Ta.length<10}function gk(t,e){t.Ta.push(e);const n=Yr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function zw(t){return Us(t)&&!Yr(t).x_()&&t.Ta.length>0}function Bw(t){Yr(t).start()}async function yk(t){Yr(t).ra()}async function _k(t){const e=Yr(t);for(const n of t.Ta)e.ea(n.mutations)}async function vk(t,e,n){const r=t.Ta.shift(),s=ap.from(r,e,n);await Uw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await vc(t)}async function wk(t,e){e&&Yr(t).X_&&await async function(r,s){if(function(o){return tA(o)&&o!==F.ABORTED}(s.code)){const i=r.Ta.shift();Yr(r).B_(),await Uw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await vc(r)}}(t,e),zw(t)&&Bw(t)}async function _y(t,e){const n=re(t);n.asyncQueue.verifyOperationInProgress(),W(Vs,"RemoteStore received new credentials");const r=Us(n);n.Ea.add(3),await La(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await _c(n)}async function Ek(t,e){const n=re(t);e?(n.Ea.delete(2),await _c(n)):e||(n.Ea.add(2),await La(n),n.Ra.set("Unknown"))}function Ji(t){return t.ma||(t.ma=function(n,r,s){const i=re(n);return i.sa(),new ik(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:hk.bind(null,t),t_:dk.bind(null,t),r_:fk.bind(null,t),H_:pk.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),yp(t)?gp(t):t.Ra.set("Unknown")):(await t.ma.stop(),Fw(t))})),t.ma}function Yr(t){return t.fa||(t.fa=function(n,r,s){const i=re(n);return i.sa(),new ok(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:yk.bind(null,t),r_:wk.bind(null,t),ta:_k.bind(null,t),na:vk.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await vc(t)):(await t.fa.stop(),t.Ta.length>0&&(W(Vs,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new $r,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new _p(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vp(t,e){if(lr("AsyncQueue",`${e}: ${t}`),Xi(t))return new X(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{static emptySet(e){return new Ai(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Z.comparator(n.key,r.key):(n,r)=>Z.comparator(n.key,r.key),this.keyedMap=bo(),this.sortedSet=new Me(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ai)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ai;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(){this.ga=new Me(Z.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ee(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Bi{constructor(e,n,r,s,i,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Bi(e,n,Ai.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&dc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class Ik{constructor(){this.queries=wy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=re(n),i=s.queries;s.queries=wy(),i.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new X(F.ABORTED,"Firestore shutting down"))}}function wy(){return new js(t=>lw(t),dc)}async function Sk(t,e){const n=re(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new Tk,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=vp(o,`Initialization of query '${ri(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&wp(n)}async function xk(t,e){const n=re(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Ck(t,e){const n=re(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Fa(s)&&(r=!0);o.wa=s}}r&&wp(n)}function Ak(t,e,n){const r=re(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function wp(t){t.Ca.forEach(e=>{e.next()})}var Ud,Ey;(Ey=Ud||(Ud={})).Ma="default",Ey.Cache="cache";class kk{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Bi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Bi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ud.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e){this.key=e}}class Hw{constructor(e){this.key=e}}class Rk{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ce(),this.mutatedKeys=ce(),this.eu=uw(e),this.tu=new Ai(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new vy,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,m)=>{const _=s.get(p),k=fc(this.query,m)?m:null,b=!!_&&this.mutatedKeys.has(_.key),D=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let L=!1;_&&k?_.data.isEqual(k.data)?b!==D&&(r.track({type:3,doc:k}),L=!0):this.su(_,k)||(r.track({type:2,doc:k}),L=!0,(u&&this.eu(k,u)>0||h&&this.eu(k,h)<0)&&(l=!0)):!_&&k?(r.track({type:0,doc:k}),L=!0):_&&!k&&(r.track({type:1,doc:_}),L=!0,(u||h)&&(l=!0)),L&&(k?(o=o.add(k),i=D?i.add(p):i.delete(p)):(o=o.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{tu:o,iu:r,Cs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((p,m)=>function(k,b){const D=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee(20277,{Rt:L})}};return D(k)-D(b)}(p.type,m.type)||this.eu(p.doc,m.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,h=u!==this.Za;return this.Za=u,o.length!==0||h?{snapshot:new Bi(this.query,e.tu,i,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new vy,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ce(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new Hw(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new $w(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=ce();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Bi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Ep="SyncEngine";class Pk{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Nk{constructor(e){this.key=e,this.hu=!1}}class bk{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new js(l=>lw(l),dc),this.Iu=new Map,this.Eu=new Set,this.du=new Me(Z.comparator),this.Au=new Map,this.Ru=new cp,this.Vu={},this.mu=new Map,this.fu=zi.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Dk(t,e,n=!0){const r=Yw(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await qw(r,e,n,!0),s}async function Vk(t,e){const n=Yw(t);await qw(n,e,!0,!1)}async function qw(t,e,n,r){const s=await XA(t.localStore,bn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await Mk(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Lw(t.remoteStore,s),l}async function Mk(t,e,n,r,s){t.pu=(m,_,k)=>async function(D,L,x,E){let C=L.view.ru(x);C.Cs&&(C=await fy(D.localStore,L.query,!1).then(({documents:v})=>L.view.ru(v,C)));const M=E&&E.targetChanges.get(L.targetId),j=E&&E.targetMismatches.get(L.targetId)!=null,B=L.view.applyChanges(C,D.isPrimaryClient,M,j);return Iy(D,L.targetId,B.au),B.snapshot}(t,m,_,k);const i=await fy(t.localStore,e,!0),o=new Rk(e,i.Qs),l=o.ru(i.documents),u=Oa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,u);Iy(t,n,h.au);const p=new Pk(e,n,o);return t.Tu.set(e,p),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function Ok(t,e,n){const r=re(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!dc(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await jd(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&pp(r.remoteStore,s.targetId),zd(r,s.targetId)}).catch(Yi)):(zd(r,s.targetId),await jd(r.localStore,s.targetId,!0))}async function Lk(t,e){const n=re(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),pp(n.remoteStore,r.targetId))}async function jk(t,e,n){const r=qk(t);try{const s=await function(o,l){const u=re(o),h=Ce.now(),p=l.reduce((k,b)=>k.add(b.key),ce());let m,_;return u.persistence.runTransaction("Locally write mutations","readwrite",k=>{let b=ur(),D=ce();return u.Ns.getEntries(k,p).next(L=>{b=L,b.forEach((x,E)=>{E.isValidDocument()||(D=D.add(x))})}).next(()=>u.localDocuments.getOverlayedDocuments(k,b)).next(L=>{m=L;const x=[];for(const E of l){const C=YC(E,m.get(E.key).overlayedDocument);C!=null&&x.push(new Fs(E.key,C,tw(C.value.mapValue),tr.exists(!0)))}return u.mutationQueue.addMutationBatch(k,h,x,l)}).next(L=>{_=L;const x=L.applyToLocalDocumentSet(m,D);return u.documentOverlayCache.saveOverlays(k,L.batchId,x)})}).then(()=>({batchId:_.batchId,changes:hw(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let h=o.Vu[o.currentUser.toKey()];h||(h=new Me(ue)),h=h.insert(l,u),o.Vu[o.currentUser.toKey()]=h}(r,s.batchId,n),await ja(r,s.changes),await vc(r.remoteStore)}catch(s){const i=vp(s,"Failed to persist write");n.reject(i)}}async function Ww(t,e){const n=re(t);try{const r=await KA(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(we(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?we(o.hu,14607):s.removedDocuments.size>0&&(we(o.hu,42227),o.hu=!1))}),await ja(n,r,e)}catch(r){await Yi(r)}}function Ty(t,e,n){const r=re(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=re(o);u.onlineState=l;let h=!1;u.queries.forEach((p,m)=>{for(const _ of m.Sa)_.va(l)&&(h=!0)}),h&&wp(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Fk(t,e,n){const r=re(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Me(Z.comparator);o=o.insert(i,vt.newNoDocument(i,ne.min()));const l=ce().add(i),u=new gc(ne.min(),new Map,new Me(ue),o,l);await Ww(r,u),r.du=r.du.remove(i),r.Au.delete(e),Tp(r)}else await jd(r.localStore,e,!1).then(()=>zd(r,e,n)).catch(Yi)}async function Uk(t,e){const n=re(t),r=e.batch.batchId;try{const s=await GA(n.localStore,e);Kw(n,r,null),Gw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ja(n,s)}catch(s){await Yi(s)}}async function zk(t,e,n){const r=re(t);try{const s=await function(o,l){const u=re(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let p;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(we(m!==null,37113),p=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p)).next(()=>u.localDocuments.getDocuments(h,p))})}(r.localStore,e);Kw(r,e,n),Gw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ja(r,s)}catch(s){await Yi(s)}}function Gw(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function Kw(t,e,n){const r=re(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function zd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||Qw(t,r)})}function Qw(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(pp(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Tp(t))}function Iy(t,e,n){for(const r of n)r instanceof $w?(t.Ru.addReference(r.key,e),Bk(t,r)):r instanceof Hw?(W(Ep,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||Qw(t,r.key)):ee(19791,{wu:r})}function Bk(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(W(Ep,"New document in limbo: "+n),t.Eu.add(r),Tp(t))}function Tp(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new Z(be.fromString(e)),r=t.fu.next();t.Au.set(r,new Nk(n)),t.du=t.du.insert(n,r),Lw(t.remoteStore,new Pr(bn(ip(n.path)),r,"TargetPurposeLimboResolution",lc.ce))}}async function ja(t,e,n){const r=re(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(h=>{var p;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(p=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){s.push(h);const m=dp.As(u.targetId,h);i.push(m)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(u,h){const p=re(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>O.forEach(h,_=>O.forEach(_.Es,k=>p.persistence.referenceDelegate.addReference(m,_.targetId,k)).next(()=>O.forEach(_.ds,k=>p.persistence.referenceDelegate.removeReference(m,_.targetId,k)))))}catch(m){if(!Xi(m))throw m;W(fp,"Failed to update sequence numbers: "+m)}for(const m of h){const _=m.targetId;if(!m.fromCache){const k=p.Ms.get(_),b=k.snapshotVersion,D=k.withLastLimboFreeSnapshotVersion(b);p.Ms=p.Ms.insert(_,D)}}}(r.localStore,i))}async function $k(t,e){const n=re(t);if(!n.currentUser.isEqual(e)){W(Ep,"User change. New user:",e.toKey());const r=await Dw(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new X(F.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ja(n,r.Ls)}}function Hk(t,e){const n=re(t),r=n.Au.get(e);if(r&&r.hu)return ce().add(r.key);{let s=ce();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function Yw(t){const e=re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ww.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Hk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Fk.bind(null,e),e.Pu.H_=Ck.bind(null,e.eventManager),e.Pu.yu=Ak.bind(null,e.eventManager),e}function qk(t){const e=re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Uk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zk.bind(null,e),e}class Uu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=yc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return WA(this.persistence,new $A,e.initialUser,this.serializer)}Cu(e){return new bw(hp.mi,this.serializer)}Du(e){return new ZA}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Uu.provider={build:()=>new Uu};class Wk extends Uu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){we(this.persistence.referenceDelegate instanceof ju,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new kA(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Nt.withCacheSize(this.cacheSizeBytes):Nt.DEFAULT;return new bw(r=>ju.mi(r,n),this.serializer)}}class Bd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ty(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$k.bind(null,this.syncEngine),await Ek(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ik}()}createDatastore(e){const n=yc(e.databaseInfo.databaseId),r=function(i){return new sk(i)}(e.databaseInfo);return function(i,o,l,u){return new lk(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new ck(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Ty(this.syncEngine,n,0),function(){return gy.v()?new gy:new ek}())}createSyncEngine(e,n){return function(s,i,o,l,u,h,p){const m=new bk(s,i,o,l,u,h);return p&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=re(s);W(Vs,"RemoteStore shutting down."),i.Ea.add(5),await La(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Bd.provider={build:()=>new Bd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Gk{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):lr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr="FirestoreClient";class Kk{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=yt.UNAUTHENTICATED,this.clientId=Jf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{W(Xr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W(Xr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $r;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=vp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ih(t,e){t.asyncQueue.verifyOperationInProgress(),W(Xr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Dw(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Sy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Qk(t);W(Xr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>_y(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>_y(e.remoteStore,s)),t._onlineComponents=e}async function Qk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W(Xr,"Using user provided OfflineComponentProvider");try{await Ih(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===F.FAILED_PRECONDITION||s.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Li("Error using user provided cache. Falling back to memory cache: "+n),await Ih(t,new Uu)}}else W(Xr,"Using default OfflineComponentProvider"),await Ih(t,new Wk(void 0));return t._offlineComponents}async function Xw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W(Xr,"Using user provided OnlineComponentProvider"),await Sy(t,t._uninitializedComponentsProvider._online)):(W(Xr,"Using default OnlineComponentProvider"),await Sy(t,new Bd))),t._onlineComponents}function Yk(t){return Xw(t).then(e=>e.syncEngine)}async function Xk(t){const e=await Xw(t),n=e.eventManager;return n.onListen=Dk.bind(null,e.syncEngine),n.onUnlisten=Ok.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Vk.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Lk.bind(null,e.syncEngine),n}function Jk(t,e,n={}){const r=new $r;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const p=new Gk({next:_=>{p.Nu(),o.enqueueAndForget(()=>xk(i,m));const k=_.docs.has(l);!k&&_.fromCache?h.reject(new X(F.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&_.fromCache&&u&&u.source==="server"?h.reject(new X(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),m=new kk(ip(l.path),p,{includeMetadataChanges:!0,qa:!0});return Sk(i,m)}(await Xk(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Jw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw="firestore.googleapis.com",Cy=!0;class Ay{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new X(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Zw,this.ssl=Cy}else this.host=e.host,this.ssl=e.ssl??Cy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Nw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<CA)throw new X(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}uC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Jw(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new X(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new X(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new X(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ip{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ay({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new X(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ay(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new J2;switch(r.type){case"firstParty":return new nC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=xy.get(n);r&&(W("ComponentProvider","Removing Datastore"),xy.delete(n),r.terminate())}(this),Promise.resolve()}}function Zk(t,e,n,r={}){var h;t=ga(t,Ip);const s=Wi(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(Zv(`https://${l}`),e0("Firestore",!0)),i.host!==Zw&&i.host!==l&&Li("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!Ps(u,o)&&(t._setSettings(u),r.mockUserToken)){let p,m;if(typeof r.mockUserToken=="string")p=r.mockUserToken,m=yt.MOCK_USER;else{p=TI(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const _=r.mockUserToken.sub||r.mockUserToken.user_id;if(!_)throw new X(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new yt(_)}t._authCredentials=new Z2(new H0(p,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Sp(this.firestore,e,this._query)}}class tt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ia(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new tt(this.firestore,e,this._key)}toJSON(){return{type:tt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Va(n,tt._jsonSchema))return new tt(e,r||null,new Z(be.fromString(n.referencePath)))}}tt._jsonSchemaVersion="firestore/documentReference/1.0",tt._jsonSchema={type:$e("string",tt._jsonSchemaVersion),referencePath:$e("string")};class Ia extends Sp{constructor(e,n,r){super(e,n,ip(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new tt(this.firestore,null,new Z(e))}withConverter(e){return new Ia(this.firestore,e,this._path)}}function ky(t,e,...n){if(t=sn(t),arguments.length===1&&(e=Jf.newId()),lC("doc","path",e),t instanceof Ip){const r=be.fromString(e,...n);return zg(r),new tt(t,null,new Z(r))}{if(!(t instanceof tt||t instanceof Ia))throw new X(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return zg(r),new tt(t.firestore,t instanceof Ia?t.converter:null,new Z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry="AsyncQueue";class Py{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Mw(this,"async_queue_retry"),this._c=()=>{const r=Th();r&&W(Ry,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Th();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Th();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new $r;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Xi(e))throw e;W(Ry,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,lr("INTERNAL UNHANDLED ERROR: ",Ny(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=_p.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&ee(47125,{Pc:Ny(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Ny(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class xp extends Ip{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Py,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Py(e),this._firestoreClient=void 0,await e}}}function eR(t,e){const n=typeof t=="object"?t:s0(),r=typeof t=="string"?t:Nu,s=Uf(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=wI("firestore");i&&Zk(s,...i)}return s}function e1(t){if(t._terminated)throw new X(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||tR(t),t._firestoreClient}function tR(t){var r,s,i;const e=t._freezeSettings(),n=function(l,u,h,p){return new wC(l,u,h,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Jw(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new Kk(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Zt(ut.fromBase64String(e))}catch(n){throw new X(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Zt(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Zt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Va(e,Zt._jsonSchema))return Zt.fromBase64String(e.bytes)}}Zt._jsonSchemaVersion="firestore/bytes/1.0",Zt._jsonSchema={type:$e("string",Zt._jsonSchemaVersion),bytes:$e("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Vn._jsonSchemaVersion}}static fromJSON(e){if(Va(e,Vn._jsonSchema))return new Vn(e.latitude,e.longitude)}}Vn._jsonSchemaVersion="firestore/geoPoint/1.0",Vn._jsonSchema={type:$e("string",Vn._jsonSchemaVersion),latitude:$e("number"),longitude:$e("number")};/**
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
 */class Mn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Mn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Va(e,Mn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Mn(e.vectorValues);throw new X(F.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Mn._jsonSchemaVersion="firestore/vectorValue/1.0",Mn._jsonSchema={type:$e("string",Mn._jsonSchemaVersion),vectorValues:$e("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR=/^__.*__$/;class rR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Fs(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ma(e,this.data,n,this.fieldTransforms)}}function n1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee(40011,{Ac:t})}}class Ap{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Ap({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return zu(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(n1(this.Ac)&&nR.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class sR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||yc(e)}Cc(e,n,r,s=!1){return new Ap({Ac:e,methodName:n,Dc:r,path:ot.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function iR(t){const e=t._freezeSettings(),n=yc(t._databaseId);return new sR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function oR(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);o1("Data must be an object, but it was:",o,r);const l=s1(r,o);let u,h;if(i.merge)u=new mn(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const p=[];for(const m of i.mergeFields){const _=aR(e,m,n);if(!o.contains(_))throw new X(F.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);uR(p,_)||p.push(_)}u=new mn(p),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new rR(new Jt(l),u,h)}function r1(t,e){if(i1(t=sn(t)))return o1("Unsupported field value:",e,t),s1(t,e);if(t instanceof t1)return function(r,s){if(!n1(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=r1(l,s.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=sn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return HC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ce.fromDate(r);return{timestampValue:Lu(s.serializer,i)}}if(r instanceof Ce){const i=new Ce(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Lu(s.serializer,i)}}if(r instanceof Vn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Zt)return{bytesValue:Sw(s.serializer,r._byteString)};if(r instanceof tt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:up(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Mn)return function(o,l){return{mapValue:{fields:{[Z0]:{stringValue:ew},[bu]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw l.Sc("VectorValues must only contain numeric values.");return op(l.serializer,h)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${Zf(r)}`)}(t,e)}function s1(t,e){const n={};return G0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ls(t,(r,s)=>{const i=r1(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function i1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ce||t instanceof Vn||t instanceof Zt||t instanceof tt||t instanceof t1||t instanceof Mn)}function o1(t,e,n){if(!i1(n)||!q0(n)){const r=Zf(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function aR(t,e,n){if((e=sn(e))instanceof Cp)return e._internalPath;if(typeof e=="string")return a1(t,e);throw zu("Field path arguments must be of type string or ",t,!1,void 0,n)}const lR=new RegExp("[~\\*/\\[\\]]");function a1(t,e,n){if(e.search(lR)>=0)throw zu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Cp(...e.split("."))._internalPath}catch{throw zu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function zu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new X(F.INVALID_ARGUMENT,l+t+u)}function uR(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(u1("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class cR extends l1{data(){return super.data()}}function u1(t,e){return typeof e=="string"?a1(t,e):e instanceof Cp?e._internalPath:e._delegate._internalPath}class hR{convertValue(e,n="none"){switch(Qr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Kr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ee(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ls(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[bu].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>je(o.doubleValue));return new Mn(n)}convertGeoPoint(e){return new Vn(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=cc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(_a(e));default:return null}}convertTimestamp(e){const n=Gr(e);return new Ce(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=be.fromString(e);we(Pw(r),9688,{name:e});const s=new va(r.get(1),r.get(3)),i=new Z(r.popFirst(5));return s.isEqual(n)||lr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Vo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ss extends l1{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Xl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(u1("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new X(F.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ss._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ss._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ss._jsonSchema={type:$e("string",Ss._jsonSchemaVersion),bundleSource:$e("string","DocumentSnapshot"),bundleName:$e("string"),bundle:$e("string")};class Xl extends Ss{data(e={}){return super.data(e)}}class Yo{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Vo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Xl(this._firestore,this._userDataWriter,r.key,r,new Vo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new Xl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Vo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Xl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Vo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,p=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:fR(l.type),doc:u,oldIndex:h,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new X(F.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Yo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Jf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function fR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pR(t){t=ga(t,tt);const e=ga(t.firestore,xp);return Jk(e1(e),t._key).then(n=>_R(e,t,n))}Yo._jsonSchemaVersion="firestore/querySnapshot/1.0",Yo._jsonSchema={type:$e("string",Yo._jsonSchemaVersion),bundleSource:$e("string","QuerySnapshot"),bundleName:$e("string"),bundle:$e("string")};class mR extends hR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new tt(this.firestore,null,n)}}function gR(t,e,n){t=ga(t,tt);const r=ga(t.firestore,xp),s=dR(t.converter,e,n);return yR(r,[oR(iR(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,tr.none())])}function yR(t,e){return function(r,s){const i=new $r;return r.asyncQueue.enqueueAndForget(async()=>jk(await Yk(r),s,i)),i.promise}(e1(t),e)}function _R(t,e,n){const r=n.docs.get(e._key),s=new mR(t);return new Ss(t,s,e._key,r,new Vo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Qi=s})(Gi),Mi(new Ns("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new xp(new eC(r.getProvider("auth-internal")),new rC(o,r.getProvider("app-check-internal")),function(h,p){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new X(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new va(h.options.projectId,p)}(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),zr(Lg,jg,e),zr(Lg,jg,"esm2020")})();const vR=typeof __firebase_config<"u"?JSON.parse(__firebase_config):{apiKey:"AIzaSyCLPIPwhSkUzoaISxFZlG9F97zRp1u0o9o",authDomain:"financeiro-app-df224.firebaseapp.com",projectId:"financeiro-app-df224",storageBucket:"financeiro-app-df224.firebasestorage.app",messagingSenderId:"1061825731478",appId:"1:1061825731478:web:70c2e8c4c5eb13c56b5bb7"},c1=r0(vR),Sh=Y2(c1),by=eR(c1),Pt=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],xh={receita:["Salário","Vale/Adiantamento","Freelance","Investimentos","Reembolso","Outros"],despesa:["Moradia","Alimentação","Transporte","Saúde","Lazer","Educação","Contas Fixas","Outros","Combustível","Cartão de Crédito "]};function wR(){const t=new Date().getMonth(),[e,n]=J.useState(Pt[t]),[r,s]=J.useState(new Date().getFullYear()),[i,o]=J.useState(null),[l,u]=J.useState(!0),[h,p]=J.useState(""),[m,_]=J.useState([]),[k,b]=J.useState({}),[D,L]=J.useState(xh),[x,E]=J.useState([]),[C,M]=J.useState({day:5,amount:""}),[j,B]=J.useState({enabled:!1,day:20,amount:""}),[v,y]=J.useState([]),[T,S]=J.useState([]),[A,R]=J.useState(!1),[I,He]=J.useState([]),[Ct,dr]=J.useState(""),[Fn,q]=J.useState(""),[Q,se]=J.useState("despesa"),[ye,ke]=J.useState(""),[on,At]=J.useState(new Date().toISOString().split("T")[0]),[qt,ct]=J.useState(!1),[kt,ts]=J.useState(2),[an,wc]=J.useState("Pix"),[zs,Fa]=J.useState(""),[Bs,Zi]=J.useState(!1),[Ua,$s]=J.useState(""),[ns,eo]=J.useState(""),[Ue,Xe]=J.useState(""),[fr,za]=J.useState(""),[rs,Ba]=J.useState(""),[Un,to]=J.useState(""),[no,Hs]=J.useState(""),[Ec,$a]=J.useState(null),[ro,so]=J.useState(""),[wn,qs]=J.useState(""),[pr,zn]=J.useState("despesa"),[Tc,io]=J.useState(""),[Ic,Ws]=J.useState(""),[Sc,ht]=J.useState(13.25),[xc,Gs]=J.useState(12),[Ks,kp]=J.useState(null),Ha=J.useRef(null),Bn=J.useRef(null);J.useEffect(()=>{const w=jx(Sh,V=>{o(V),V||u(!1)});return()=>w()},[]),J.useEffect(()=>{i&&(u(!0),(async()=>{try{const V=ky(by,"users",i.uid),z=await pR(V);if(z.exists()){const G=z.data();_(G.transactions||[]),b(G.budgets||{}),L(G.categories||xh),y(G.savingsGoals||[]),E(G.cards||[]),G.salaryConfig?M(G.salaryConfig):G.baseSalary&&M({day:5,amount:G.baseSalary}),G.valeConfig&&B(G.valeConfig)}else _([]),b({}),L(xh),y([]),E([])}catch(V){console.error("Erro ao buscar:",V)}finally{u(!1)}})())},[i]),J.useEffect(()=>{if(i&&!l){const w=async()=>{try{await gR(ky(by,"users",i.uid),{transactions:m,budgets:k,categories:D,salaryConfig:C,valeConfig:j,savingsGoals:v,cards:x,lastUpdated:new Date().toISOString(),email:i.email},{merge:!0})}catch(z){console.error("Erro ao salvar:",z)}},V=setTimeout(()=>{w()},1e3);return()=>clearTimeout(V)}},[m,k,D,C,j,v,x,i,l]);const Cc=(w,V)=>{const z=x.find(H=>H.id===V);if(!z)return w;const[G,Y,me]=w.split("-").map(Number),Re=parseInt(z.closingDay),dt=parseInt(z.dueDay);let qe=Y-1,ae=G;me>=Re&&(qe++,qe>11&&(qe=0,ae++));let Ie=qe,ge=ae;return dt<Re&&(Ie++,Ie>11&&(Ie=0,ge++)),new Date(ge,Ie,dt).toISOString().split("T")[0]},Wt=(()=>{const w=new Date,V=w.getDate();let z=[];if(C.amount&&z.push({day:C.day,label:"Salário",amount:C.amount}),j.enabled&&j.amount&&z.push({day:j.day,label:"Vale",amount:j.amount}),z.length===0)return null;z.sort((dt,qe)=>dt.day-qe.day);let G=z.find(dt=>dt.day>=V),Y=!1;G||(G=z[0],Y=!0);const me=new Date(w.getFullYear(),w.getMonth()+1,0).getDate(),Re=Y?me-V+G.day:G.day-V;return{...G,daysLeft:Re,isToday:Re===0}})();J.useEffect(()=>{if(!m.length)return;const w=[],V=[],z=new Date;z.setHours(0,0,0,0);const G=Pt[z.getMonth()],Y=z.getFullYear(),me={};m.forEach(H=>{H.type==="despesa"&&(me[H.category]||(me[H.category]={total:0,count:0,max:0}),me[H.category].total+=H.amount,me[H.category].count+=1,H.amount>me[H.category].max&&(me[H.category].max=H.amount))});const Re=m.filter(H=>H.month===G&&H.year===Y&&H.type==="despesa");Re.forEach(H=>{const ve=me[H.category];if(ve&&ve.count>5){const Le=ve.total/ve.count;H.amount>Le*2.5&&H.amount>100&&V.push({type:"alert",icon:cI,title:"Gasto Incomum Detectado",msg:`A despesa "${H.description}" (${rt(H.amount)}) em ${H.category} é muito maior que sua média habitual.`})}});const dt=t===0?Pt[11]:Pt[t-1],qe=t===0?Y-1:Y,ae={},Ie={};m.filter(H=>H.year===Y&&H.month===G&&H.type==="despesa").forEach(H=>ae[H.category]=(ae[H.category]||0)+H.amount),m.filter(H=>H.year===qe&&H.month===dt&&H.type==="despesa").forEach(H=>Ie[H.category]=(Ie[H.category]||0)+H.amount),Object.keys(ae).forEach(H=>{const ve=ae[H],Le=Ie[H]||0;Le>0&&ve>Le*1.2&&ve>200&&V.push({type:"trend",icon:hh,title:`Atenção com ${H}`,msg:`Seus gastos com ${H} subiram ${((ve/Le-1)*100).toFixed(0)}% em relação ao mês passado.`})}),He(V);const ge=m.filter(H=>{const ve=H.financialDate||H.date,In=Gt(ve)-z,Rt=Math.ceil(In/(1e3*60*60*24));return H.type==="despesa"&&!H.paid&&Rt<=7});if(ge.length>0){const H=ge.filter(ve=>Gt(ve.financialDate||ve.date)<z).length;w.push({type:H>0?"danger":"warning",title:"Contas a Pagar",msg:H>0?`${H} contas estão atrasadas!`:`${ge.length} contas vencem esta semana.`,icon:rg})}const ft=Re.reduce((H,ve)=>(H[ve.category]=(H[ve.category]||0)+ve.amount,H),{});Object.keys(ft).forEach(H=>{const ve=k[`${Y}_${H}`];ve&&ft[H]>ve&&w.push({type:"danger",title:"Limite Excedido",msg:`Você estourou o orçamento de ${H}.`,icon:YT})}),S(w)},[m,k]);const qa=async()=>{p("");const w=new Qn;try{await i2(Sh,w)}catch{p("Erro ao fazer login. Tente novamente.")}},Wa=async()=>{await Fx(Sh),_([])},oo=w=>{if(w.preventDefault(),!ns||!Ue||!fr)return;const V={id:Date.now().toString(),name:ns,closingDay:parseInt(Ue),dueDay:parseInt(fr)};E([...x,V]),eo(""),Xe(""),za(""),alert("Cartão adicionado com sucesso!")},ss=w=>{confirm("Remover este cartão?")&&E(x.filter(V=>V.id!==w))},Ac=()=>{if(!C.amount){alert("Configure o valor do salário primeiro na aba Configurações.");return}if(!window.confirm(`Gerar lançamentos automáticos para o ano de ${r} baseados na sua configuração?`))return;const w=m.filter(z=>!(z.isAutoSalary&&z.year===r)),V=[];for(let z=0;z<12;z++)V.push({id:`auto_salary_${r}_${z}`,month:Pt[z],year:r,description:"Salário Mensal",amount:parseFloat(C.amount),type:"receita",category:"Salário",date:`${C.day.toString().padStart(2,"0")}/${(z+1).toString().padStart(2,"0")}/${r}`,financialDate:`${r}-${(z+1).toString().padStart(2,"0")}-${C.day.toString().padStart(2,"0")}`,paymentMethod:"Conta Salário",isAutoSalary:!0,paid:!0}),j.enabled&&j.amount&&V.push({id:`auto_vale_${r}_${z}`,month:Pt[z],year:r,description:"Vale/Adiantamento",amount:parseFloat(j.amount),type:"receita",category:"Vale/Adiantamento",date:`${j.day.toString().padStart(2,"0")}/${(z+1).toString().padStart(2,"0")}/${r}`,financialDate:`${r}-${(z+1).toString().padStart(2,"0")}-${j.day.toString().padStart(2,"0")}`,paymentMethod:"Conta Salário",isAutoSalary:!0,paid:!0});_([...w,...V]),alert("Lançamentos gerados!")},En=w=>{if(w.preventDefault(),!rs||!Un)return;const V={id:Date.now(),name:rs,target:parseFloat(Un),saved:parseFloat(no)||0},z=`Meta: ${rs}`,G={...D};G.despesa.includes(z)||(G.despesa=[...G.despesa,z],L(G)),y([...v,V]),Ba(""),to(""),Hs(""),alert(`Meta criada! Use a categoria "${z}" nos lançamentos.`)},Ga=w=>{confirm("Excluir esta meta?")&&y(v.filter(V=>V.id!==w))},ao=(w,V)=>{const z=parseFloat(V);isNaN(z)||y(v.map(G=>G.id===w?{...G,saved:z}:G))};J.useEffect(()=>{var w;((w=D[Q])==null?void 0:w.length)>0&&!D[Q].includes(ye)&&ke(D[Q][0])},[Q,D]);const Gt=w=>{if(!w)return new Date;if(w.includes("-")){const[V,z,G]=w.split("-").map(Number);return new Date(V,z-1,G)}else{const[V,z,G]=w.split("/").map(Number);return new Date(G,z-1,V)}},$n=new Date;$n.setHours(0,0,0,0);const Ka=new Date($n.getFullYear(),$n.getMonth()+1,0),Qs=m.reduce((w,V)=>(V.financialDate?Gt(V.financialDate):Gt(V.date))<=$n?V.type==="receita"?w+V.amount:w-V.amount:w,0),Ys=m.filter(w=>{const V=w.financialDate?Gt(w.financialDate):Gt(w.date);return V>$n&&V<=Ka}),Qa=Qs+Ys.reduce((w,V)=>V.type==="receita"?w+V.amount:w-V.amount,0),Xs=w=>{if(w.preventDefault(),!Ct||!Fn||!on)return;const[V,z,G]=on.split("-").map(Number),Y=parseFloat(Fn),me=[];if(an==="Cartão de Crédito"&&!zs&&Q==="despesa"){alert("Selecione um cartão de crédito para calcular o vencimento.");return}if(Q==="despesa"&&ye.startsWith("Meta: ")){const ae=ye.replace("Meta: ",""),Ie=v.findIndex(ge=>ge.name===ae);if(Ie>=0){const ge=qt&&kt>1?Y*kt:Y,ft=[...v];ft[Ie].saved+=ge,y(ft)}}const Re=qt&&kt>1?parseInt(kt):1;let dt=`${V}-${z.toString().padStart(2,"0")}-${G.toString().padStart(2,"0")}`,qe=dt;Q==="despesa"&&an==="Cartão de Crédito"&&(qe=Cc(dt,zs));for(let ae=0;ae<Re;ae++){const Ie=new Date(V,z-1+ae,G),ge=Ie.getFullYear(),ft=Ie.getMonth(),ve=`${Ie.getDate().toString().padStart(2,"0")}/${(ft+1).toString().padStart(2,"0")}/${ge}`,Le=Pt[ft];let In=null;if(Q==="despesa"&&an==="Cartão de Crédito"){const[fe,Qt,Lt]=qe.split("-").map(Number);In=new Date(fe,Qt-1+ae,Lt).toISOString().split("T")[0]}else In=new Date(V,z-1+ae,G).toISOString().split("T")[0];const Rt=Re>1?`${Ct} (${ae+1}/${Re})`:Ct;me.push({id:Date.now()+ae,month:Le,year:ge,description:Rt,amount:Y,type:Q,category:ye,subCategory:Ua.trim(),paymentMethod:an,cardId:an==="Cartão de Crédito"?zs:null,isFixed:Q==="despesa"?Bs:!1,date:ve,financialDate:In,paid:Q==="receita"})}_([...m,...me]),dr(""),q(""),$s(""),ct(!1),ts(2),Zi(!1),Re>1&&alert(`${Re} lançamentos criados!`)},Ya=()=>{const V=[["ID","Data Compra","Data Vencimento","Mês","Ano","Descrição","Categoria","Valor","Tipo","Meio Pagamento"].join(","),...m.map(Y=>[Y.id,Y.date,Y.financialDate||Y.date,Y.month,Y.year,`"${Y.description}"`,Y.category,Y.amount.toFixed(2),Y.type,Y.paymentMethod].join(","))].join(`
`),z=new Blob([V],{type:"text/csv;charset=utf-8;"}),G=document.createElement("a");G.href=URL.createObjectURL(z),G.download=`relatorio_financeiro_${new Date().toISOString().slice(0,10)}.csv`,G.click()},lo=()=>{const w={transactions:m,budgets:k,categories:D,salaryConfig:C,valeConfig:j,savingsGoals:v,cards:x,exportedAt:new Date().toISOString()},V=document.createElement("a");V.href=`data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(w,null,2))}`,V.download=`backup_completo_${new Date().toISOString().slice(0,10)}.json`,V.click()},is=()=>{window.print()},Hn=w=>{const V=w.target.files[0];if(!V)return;const z=new FileReader;z.onload=G=>{const me=G.target.result.split(`
`),Re=[];let dt=0;for(let qe=1;qe<me.length;qe++){const ae=me[qe].trim();if(!ae)continue;const Ie=ae.includes(";")?ae.split(";"):ae.split(",");if(Ie.length>=3){let ge=Ie[0],ft=Ie[1],H=Ie[Ie.length-1];H=H.replace("R$","").trim();const ve=H.includes("-");H=H.replace(/[^\d.,-]/g,""),H.includes(",")&&!H.includes(".")?H=H.replace(",","."):H.includes(",")&&H.includes(".")&&(H=H.replace(".","").replace(",","."));let Le=parseFloat(H);if(ve&&Le>0&&(Le=-Le),!isNaN(Le)){const In=Le<0?"despesa":"receita";let Rt,fe,Qt;if(ge.includes("/")){if([Rt,fe,Qt]=ge.split("/").map(Number),!Qt&&new Date(ge).getFullYear()){const Lt=new Date(ge);Rt=Lt.getDate(),fe=Lt.getMonth()+1,Qt=Lt.getFullYear()}}else if(ge.includes("-")){const Lt=new Date(ge);Rt=Lt.getDate(),fe=Lt.getMonth()+1,Qt=Lt.getFullYear()}if(Rt&&fe&&Qt){const Lt=`${Rt.toString().padStart(2,"0")}/${fe.toString().padStart(2,"0")}/${Qt}`,go=`${Qt}-${fe.toString().padStart(2,"0")}-${Rt.toString().padStart(2,"0")}`;Re.push({id:Date.now()+dt,date:Lt,financialDate:go,month:Pt[fe-1],year:Qt,description:ft.replace(/"/g,""),amount:Math.abs(Le),type:In,category:"Outros",subCategory:"Importado",paymentMethod:"Débito",isFixed:!1}),dt++}}}}if(Re.length>0){const qe=Re.filter(ge=>ge.type==="receita").length;let ae=!1,Ie=!1;qe>Re.length*.7?confirm(`⚠️ DETECTAMOS POSSÍVEL FATURA DE CARTÃO ⚠️

A maioria dos valores são positivos (entradas). Deseja converter tudo para DESPESA?

[OK] Sim (Converter para Despesas)
[Cancelar] Não`)?(ae=!0,Ie=!0):confirm("Importar mantendo como RECEITA?")&&(ae=!0):confirm(`Encontramos ${Re.length} transações. Importar?`)&&(ae=!0),ae&&(Ie&&Re.forEach(ge=>{ge.type="despesa",ge.paymentMethod="Cartão de Crédito"}),_(ge=>[...ge,...Re]),alert("Importação concluída!"))}else alert("Não conseguimos ler o formato deste CSV.")},z.readAsText(V),w.target.value=null},uo=w=>{const V=w.target.files[0];if(!V)return;const z=new FileReader;z.onload=async G=>{try{const Y=JSON.parse(G.target.result);Y.transactions&&confirm("Importar backup completo?")&&(_(Y.transactions),Y.budgets&&b(Y.budgets),Y.categories&&L(Y.categories),Y.salaryConfig&&M(Y.salaryConfig),Y.valeConfig&&B(Y.valeConfig),Y.savingsGoals&&y(Y.savingsGoals),Y.cards&&E(Y.cards),alert("Dados carregados!"))}catch{alert("Erro no arquivo.")}},z.readAsText(V),w.target.value=null},kc=w=>{w.preventDefault(),!(!wn.trim()||D[pr].includes(wn))&&(L(V=>({...V,[pr]:[...V[pr],wn]})),qs(""))},Xa=w=>_(m.filter(V=>V.id!==w)),co=w=>{const V=parseFloat(ro);isNaN(V)||b({...k,[`${r}_${w}`]:V}),$a(null)},rt=w=>new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(w),os=m.filter(w=>w.year===r),Tn=os.filter(w=>w.month===e).sort((w,V)=>Gt(w.date)-Gt(V.date)),ho=Tn.filter(w=>w.type==="receita").reduce((w,V)=>w+V.amount,0),fo=Tn.filter(w=>w.type==="despesa").reduce((w,V)=>w+V.amount,0),po=ho-fo,Rc=w=>{const V=Tn.filter(G=>G.type==="despesa"&&G.category===w).reduce((G,Y)=>G+Y.amount,0),z=k[`${r}_${w}`]||0;return{spent:V,limit:z,percentage:z>0?V/z*100:0}},ln=Pt.map(w=>{const V=os.filter(Y=>Y.month===w),z=V.filter(Y=>Y.type==="receita").reduce((Y,me)=>Y+me.amount,0),G=V.filter(Y=>Y.type==="despesa").reduce((Y,me)=>Y+me.amount,0);return{month:w,inc:z,exp:G,bal:z-G}}),Kt=ln.reduce((w,V)=>w+V.inc,0),qn=ln.reduce((w,V)=>w+V.exp,0),as=os.filter(w=>w.type==="despesa").reduce((w,V)=>(w[V.category]=(w[V.category]||0)+V.amount,w),{});Object.entries(as).sort(([,w],[,V])=>V-w).map(([w,V])=>({cat:w,val:V,percent:qn>0?V/qn*100:0}));const Js=new Date,_e=Js.getMonth(),mr=Js.getFullYear(),ls=_e===0?11:_e-1,us=_e===0?mr-1:mr,Pc=m.filter(w=>w.month===Pt[_e]&&w.year===mr&&w.type==="despesa"),Ja=m.filter(w=>w.month===Pt[ls]&&w.year===us&&w.type==="despesa"),Za=Pc.reduce((w,V)=>w+V.amount,0),Zs=Ja.reduce((w,V)=>w+V.amount,0),mo=Za-Zs,Nc=Zs>0?(Za-Zs)/Zs*100:0,cs=w=>{switch(w){case"Pix":return f.jsx(lI,{size:14,className:"text-emerald-500"});case"Cartão de Crédito":return f.jsx(lh,{size:14,className:"text-blue-500"});case"Cartão de Débito":return f.jsx(lh,{size:14,className:"text-slate-500"});case"Dinheiro":return f.jsx(ng,{size:14,className:"text-green-600"});default:return f.jsx(XT,{size:14,className:"text-slate-400"})}},Wn=w=>{if(!w)return"-";const[V,z,G]=w.split("-");return`${G}/${z}`};return!i&&!l?f.jsx("div",{className:"min-h-screen flex items-center justify-center bg-slate-100 p-4",children:f.jsxs("div",{className:"bg-white p-8 rounded-2xl shadow-lg w-full max-w-md border border-slate-200 text-center",children:[f.jsx("div",{className:"inline-flex p-4 bg-blue-50 rounded-full mb-4",children:f.jsx(Il,{className:"w-10 h-10 text-blue-600"})}),f.jsx("h1",{className:"text-2xl font-bold text-slate-800",children:"Controle Financeiro"}),f.jsx("p",{className:"text-slate-500 text-sm mt-2",children:"Inteligência para o seu dinheiro."}),h&&f.jsx("div",{className:"p-3 mb-4 bg-red-50 text-red-600 text-sm rounded-lg mt-4",children:h}),f.jsxs("button",{onClick:qa,className:"w-full mt-6 py-4 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold rounded-xl flex items-center justify-center gap-3",children:[f.jsx("img",{src:"https://www.google.com/favicon.ico",alt:"Google",className:"w-5 h-5"})," Entrar com Google"]})]})}):l?f.jsxs("div",{className:"min-h-screen flex items-center justify-center bg-slate-100 text-slate-500",children:[f.jsx(oI,{className:"w-6 h-6 animate-spin mr-2"})," Carregando..."]}):f.jsxs("div",{className:"min-h-screen bg-slate-50 text-slate-800 font-sans p-4 md:p-8 print:p-0 print:bg-white",children:[f.jsx("style",{children:`
        @media print {
          .no-print { display: none !important; }
          .print-only { display: block !important; }
          body { background: white; color: black; }
          .shadow-sm, .shadow-lg { box-shadow: none !important; }
          .border { border-color: #ddd !important; }
        }
      `}),f.jsxs("div",{className:"max-w-7xl mx-auto space-y-6",children:[f.jsxs("header",{className:"flex flex-col xl:flex-row justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-200 gap-4 no-print",children:[f.jsxs("div",{className:"w-full xl:w-auto",children:[f.jsxs("h1",{className:"text-2xl font-bold text-slate-900 flex items-center gap-2",children:[f.jsx(Il,{className:"text-blue-600"})," Controle Financeiro"]}),f.jsxs("p",{className:"text-slate-500 text-sm mt-1 flex items-center gap-1",children:[f.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 inline-block"})," ",i.displayName||i.email]})]}),f.jsxs("div",{className:"flex flex-wrap justify-center items-center gap-3 w-full xl:w-auto",children:[Wt?f.jsxs("div",{className:`flex items-center gap-2 px-3 py-1.5 rounded-lg mr-2 border ${Wt.isToday?"bg-emerald-100 border-emerald-200 text-emerald-800 animate-pulse":"bg-slate-50 border-slate-200 text-slate-600"}`,children:[f.jsx(qT,{size:16,className:Wt.isToday?"text-emerald-600":"text-slate-400"}),f.jsxs("div",{className:"flex flex-col leading-none",children:[f.jsx("span",{className:"text-[10px] uppercase font-bold tracking-wide mb-0.5",children:Wt.label}),Wt.isToday?f.jsx("span",{className:"text-xs font-bold",children:"Cai Hoje!"}):f.jsxs("span",{className:"text-xs",children:["Dia ",Wt.day," (",Wt.daysLeft,"d)"]})]})]}):f.jsx("div",{className:"flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg mr-2 border border-slate-200 text-slate-400 text-xs",children:"Configure seu Salário"}),f.jsxs("div",{className:"flex items-center bg-slate-100 rounded-lg p-1",children:[f.jsx("button",{onClick:()=>s(w=>w-1),className:"p-2 hover:bg-white rounded-md text-slate-600",children:f.jsx(KT,{size:18})}),f.jsx("span",{className:"px-4 font-bold text-slate-700 min-w-[60px] text-center",children:r}),f.jsx("button",{onClick:()=>s(w=>w+1),className:"p-2 hover:bg-white rounded-md text-slate-600",children:f.jsx(QT,{size:18})})]}),f.jsx("div",{className:"h-8 w-px bg-slate-200 hidden sm:block"}),f.jsxs("button",{onClick:()=>n("Metas"),className:`px-3 py-2 rounded-lg font-medium flex gap-2 ${e==="Metas"?"bg-orange-500 text-white":"bg-white border text-slate-700"}`,children:[f.jsx(uh,{size:18})," ",f.jsx("span",{className:"hidden xl:inline",children:"Metas"})]}),f.jsxs("button",{onClick:()=>n("Resumo"),className:`px-3 py-2 rounded-lg font-medium flex gap-2 ${e==="Resumo"?"bg-blue-600 text-white":"bg-white border text-slate-700"}`,children:[f.jsx(sg,{size:18})," ",f.jsx("span",{className:"hidden xl:inline",children:"Resumo"})]}),f.jsxs("button",{onClick:()=>n("Configuracoes"),className:`px-3 py-2 rounded-lg font-medium flex gap-2 ${e==="Configuracoes"?"bg-slate-700 text-white":"bg-white border text-slate-700"}`,children:[f.jsx(ag,{size:18})," ",f.jsx("span",{className:"hidden xl:inline",children:"Config"})]}),f.jsx("div",{className:"h-8 w-px bg-slate-200 hidden sm:block"}),f.jsxs("div",{className:"relative",children:[f.jsxs("button",{onClick:()=>R(!A),className:"p-2 text-slate-600 border rounded-lg hover:text-blue-600 relative",children:[f.jsx(rg,{size:20}),T.length>0&&f.jsx("span",{className:"absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"})]}),A&&f.jsxs("div",{className:"absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-slate-200 z-50 overflow-hidden",children:[f.jsx("div",{className:"p-3 bg-slate-50 border-b border-slate-100 font-bold text-slate-700 text-sm",children:"Notificações"}),f.jsx("div",{className:"max-h-60 overflow-y-auto",children:T.length===0?f.jsx("div",{className:"p-4 text-center text-slate-400 text-sm",children:"Tudo tranquilo!"}):T.map((w,V)=>f.jsxs("div",{className:"p-3 border-b border-slate-100 hover:bg-slate-50 flex items-start gap-3",children:[f.jsx("div",{className:`p-2 rounded-full ${w.type==="danger"?"bg-red-100 text-red-600":"bg-amber-100 text-amber-600"}`,children:f.jsx(w.icon,{size:16})}),f.jsxs("div",{children:[f.jsx("p",{className:"text-sm font-bold text-slate-700",children:w.title}),f.jsx("p",{className:"text-xs text-slate-500",children:w.msg})]})]},V))})]})]}),f.jsxs("div",{className:"flex gap-1",children:[f.jsx("button",{onClick:()=>Bn.current.click(),className:"p-2 text-slate-600 border rounded-lg hover:text-indigo-600 hover:bg-indigo-50",title:"Importar Extrato Bancário (CSV)",children:f.jsx(eI,{size:20})}),f.jsx("input",{type:"file",ref:Bn,className:"hidden",onChange:Hn,accept:".csv,.txt"}),f.jsx("button",{onClick:Ya,className:"p-2 text-slate-600 border rounded-lg hover:text-emerald-600 hover:bg-emerald-50",title:"Exportar para Excel",children:f.jsx(ZT,{size:20})}),f.jsx("button",{onClick:is,className:"p-2 text-slate-600 border rounded-lg hover:text-slate-900 hover:bg-slate-100",title:"Imprimir Relatório / PDF",children:f.jsx(iI,{size:20})})]}),f.jsx("button",{onClick:Wa,className:"p-2 text-red-500 border border-red-100 bg-red-50 rounded-lg hover:bg-red-100",children:f.jsx(rI,{size:20})})]})]}),f.jsxs("div",{className:"hidden print:block mb-8",children:[f.jsx("h1",{className:"text-3xl font-bold text-black",children:"Relatório Financeiro"}),f.jsxs("p",{className:"text-gray-600",children:["Gerado em: ",new Date().toLocaleDateString()]}),f.jsxs("p",{className:"text-gray-600",children:["Período: ",e," / ",r]})]}),!["Resumo","Investimentos","Configuracoes","Metas"].includes(e)&&f.jsx("div",{className:"overflow-x-auto pb-2 scrollbar-hide no-print",children:f.jsx("div",{className:"flex gap-2 min-w-max",children:Pt.map(w=>f.jsx("button",{onClick:()=>n(w),className:`px-4 py-2 rounded-full text-sm font-medium transition-all ${e===w?"bg-blue-600 text-white shadow-md scale-105":"bg-white text-slate-600 border"}`,children:w},w))})}),["Resumo","Investimentos","Configuracoes","Metas"].includes(e)?f.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden animate-fade-in relative",children:[f.jsxs("div",{className:"p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50 no-print",children:[f.jsxs("h2",{className:"text-xl font-bold text-slate-800 flex items-center gap-2",children:[e==="Resumo"&&f.jsxs(f.Fragment,{children:[f.jsx(sg,{className:"text-blue-600"})," Análise Financeira"]}),e==="Metas"&&f.jsxs(f.Fragment,{children:[f.jsx(uh,{className:"text-orange-500"})," Metas & Objetivos"]}),e==="Configuracoes"&&f.jsxs(f.Fragment,{children:[f.jsx(ag,{className:"text-slate-600"})," Configurações"]})]}),f.jsxs("button",{onClick:()=>n(Pt[new Date().getMonth()]),className:"flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-100",children:[f.jsx($T,{size:16})," Voltar"]})]}),f.jsxs("div",{className:"p-6",children:[e==="Resumo"&&f.jsxs("div",{className:"space-y-8",children:[I.length>0&&f.jsxs("div",{className:"bg-gradient-to-r from-violet-50 to-fuchsia-50 p-6 rounded-xl border border-violet-100 no-print",children:[f.jsxs("h3",{className:"font-bold text-violet-800 flex items-center gap-2 mb-4",children:[f.jsx(nI,{className:"w-5 h-5"})," Assistente Inteligente"]}),f.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:I.map((w,V)=>f.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-sm border border-violet-100 flex items-start gap-3",children:[f.jsx("div",{className:"p-2 rounded-full bg-violet-100 text-violet-600 flex-shrink-0",children:f.jsx(w.icon,{size:18})}),f.jsxs("div",{children:[f.jsx("h4",{className:"font-bold text-slate-700 text-sm",children:w.title}),f.jsx("p",{className:"text-xs text-slate-500 mt-1",children:w.msg})]})]},V))})]}),f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[f.jsx(Ch,{title:"Saldo em Caixa (Real)",value:Qs,icon:Il,color:Qs>=0?"text-blue-600":"text-red-600"}),f.jsx(Ch,{title:"Receita (Ano)",value:Kt,icon:hh,color:"text-emerald-600"}),f.jsx(Ch,{title:"Despesa (Ano)",value:qn,icon:uI,color:"text-red-600"}),f.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between",children:[f.jsxs("div",{children:[f.jsx("p",{className:"text-slate-500 text-xs font-medium mb-1 uppercase",children:"Comparativo Mês"}),f.jsx("h3",{className:"text-lg font-bold text-slate-700",children:Pt[new Date().getMonth()]}),f.jsxs("div",{className:`flex items-center gap-1 text-sm font-semibold mt-1 ${mo<=0?"text-emerald-600":"text-red-600"}`,children:[mo<=0?f.jsx(BT,{size:16}):f.jsx(HT,{size:16}),Math.abs(Nc).toFixed(1),"% ",mo<=0?"Melhor":"Pior"]})]}),f.jsx("div",{className:"mt-2 pt-2 border-t border-slate-100 text-xs text-slate-500",children:"vs Mês Anterior"})]})]})]}),e==="Metas"&&f.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[f.jsx("div",{className:"space-y-6",children:f.jsxs("div",{className:"bg-indigo-50 p-6 rounded-xl border border-indigo-100",children:[f.jsxs("h3",{className:"font-bold text-indigo-800 mb-4 flex items-center gap-2",children:[f.jsx(sI,{size:20})," Metas de Economia"]}),f.jsxs("form",{onSubmit:En,className:"flex gap-2 mb-6",children:[f.jsx("input",{type:"text",placeholder:"Ex: Viagem",value:rs,onChange:w=>Ba(w.target.value),className:"flex-1 p-2 rounded border text-sm",required:!0}),f.jsx("input",{type:"number",placeholder:"Alvo (R$)",value:Un,onChange:w=>to(w.target.value),className:"w-24 p-2 rounded border text-sm",required:!0}),f.jsx("input",{type:"number",placeholder:"Já tenho",value:no,onChange:w=>Hs(w.target.value),className:"w-24 p-2 rounded border text-sm"}),f.jsx("button",{type:"submit",className:"bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700",children:f.jsx(ig,{size:20})})]}),f.jsxs("div",{className:"space-y-4",children:[v.map(w=>{const V=Math.min(w.saved/w.target*100,100);return f.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-sm border border-indigo-100",children:[f.jsxs("div",{className:"flex justify-between items-center mb-2",children:[f.jsx("span",{className:"font-bold text-slate-700",children:w.name}),f.jsx("button",{onClick:()=>Ga(w.id),className:"text-slate-300 hover:text-red-500",children:f.jsx(ch,{size:14})})]}),f.jsxs("div",{className:"flex justify-between text-xs text-slate-500 mb-1",children:[f.jsx("span",{children:rt(w.saved)}),f.jsxs("span",{children:["Meta: ",rt(w.target)]})]}),f.jsx("div",{className:"h-2 w-full bg-slate-100 rounded-full overflow-hidden mb-2",children:f.jsx("div",{className:"h-full bg-indigo-500 rounded-full transition-all duration-1000",style:{width:`${V}%`}})}),f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsxs("span",{className:"text-xs text-indigo-600 font-bold",children:[V.toFixed(0),"%"]}),f.jsx("input",{type:"number",className:"w-full bg-slate-50 border-b border-slate-200 text-xs px-2 py-1 outline-none focus:border-indigo-500",placeholder:"Atualizar valor guardado...",onBlur:z=>ao(w.id,z.target.value),onKeyDown:z=>z.key==="Enter"&&ao(w.id,z.target.value)})]})]},w.id)}),v.length===0&&f.jsx("p",{className:"text-center text-indigo-300 text-sm",children:"Nenhuma meta definida."})]})]})}),f.jsx("div",{className:"space-y-6",children:f.jsxs("div",{className:"bg-white p-6 rounded-xl border border-slate-200",children:[f.jsxs("h3",{className:"font-bold text-slate-700 mb-4 flex items-center gap-2",children:[f.jsx(uh,{size:20,className:"text-red-500"})," Limites de Gastos"]}),f.jsx("div",{className:"space-y-4 max-h-[500px] overflow-y-auto pr-2",children:D.despesa.map(w=>{const{spent:V,limit:z,percentage:G}=Rc(w),Y=G>100;return f.jsxs("div",{className:"space-y-1",children:[f.jsxs("div",{className:"flex justify-between items-end",children:[f.jsx("span",{className:"text-sm font-medium text-slate-600",children:w}),f.jsx("div",{className:"flex items-center gap-2",children:Ec===w?f.jsx("input",{autoFocus:!0,type:"number",className:"w-24 px-2 py-1 text-xs border rounded",placeholder:"Limite",value:ro,onChange:me=>so(me.target.value),onBlur:()=>co(w),onKeyDown:me=>me.key==="Enter"&&co(w)}):f.jsx("button",{onClick:()=>{$a(w),so(k[`${r}_${w}`]||"")},className:"text-xs text-indigo-600 hover:text-indigo-800 cursor-pointer border-b border-dashed border-indigo-300",children:z>0?rt(z):"Definir"})})]}),z>0&&f.jsxs("div",{className:"relative pt-1",children:[f.jsxs("div",{className:"flex mb-1 items-center justify-between",children:[f.jsxs("span",{className:`text-[10px] font-semibold ${Y?"text-red-600":"text-slate-500"}`,children:[rt(V)," de ",rt(z)]}),f.jsxs("span",{className:`text-[10px] ${Y?"text-red-600 font-bold":"text-slate-400"}`,children:[G.toFixed(0),"%"]})]}),f.jsx("div",{className:"overflow-hidden h-2 mb-2 text-xs flex rounded bg-slate-100",children:f.jsx("div",{style:{width:`${Math.min(G,100)}%`},className:`transition-all duration-500 ${Y?"bg-red-500":G>80?"bg-yellow-400":"bg-emerald-400"}`})})]})]},w)})})]})})]}),e==="Configuracoes"&&f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[f.jsxs("div",{className:"col-span-1 bg-white rounded-xl border border-slate-200 overflow-hidden no-print",children:[f.jsx("div",{className:"p-4 bg-slate-50 border-b border-slate-100",children:f.jsxs("h3",{className:"font-bold text-slate-700 flex items-center gap-2",children:[f.jsx(lh,{size:18,className:"text-blue-600"})," Meus Cartões"]})}),f.jsxs("div",{className:"p-6",children:[f.jsxs("form",{onSubmit:oo,className:"mb-6 space-y-4 bg-slate-50 p-4 rounded-lg border border-slate-100",children:[f.jsxs("div",{children:[f.jsx("label",{className:"text-xs font-bold text-slate-500",children:"Nome do Cartão"}),f.jsx("input",{type:"text",value:ns,onChange:w=>eo(w.target.value),className:"w-full p-2 border rounded",placeholder:"Ex: Nubank, Inter..."})]}),f.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[f.jsxs("div",{children:[f.jsx("label",{className:"text-xs font-bold text-slate-500",children:"Dia Fechamento"}),f.jsx("input",{type:"number",min:"1",max:"31",value:Ue,onChange:w=>Xe(w.target.value),className:"w-full p-2 border rounded",placeholder:"Ex: 25"})]}),f.jsxs("div",{children:[f.jsx("label",{className:"text-xs font-bold text-slate-500",children:"Dia Vencimento"}),f.jsx("input",{type:"number",min:"1",max:"31",value:fr,onChange:w=>za(w.target.value),className:"w-full p-2 border rounded",placeholder:"Ex: 05"})]})]}),f.jsx("button",{type:"submit",className:"w-full bg-blue-600 text-white py-2 rounded font-bold text-sm",children:"Adicionar Cartão"})]}),f.jsxs("div",{className:"space-y-2",children:[x.map(w=>f.jsxs("div",{className:"flex justify-between items-center p-3 border rounded-lg bg-white",children:[f.jsxs("div",{children:[f.jsx("p",{className:"font-bold text-slate-700",children:w.name}),f.jsxs("p",{className:"text-xs text-slate-500",children:["Fecha dia ",w.closingDay," • Vence dia ",w.dueDay]})]}),f.jsx("button",{onClick:()=>ss(w.id),className:"text-red-400 hover:text-red-600",children:f.jsx(ch,{size:16})})]},w.id)),x.length===0&&f.jsx("p",{className:"text-sm text-slate-400 text-center italic",children:"Nenhum cartão cadastrado."})]})]})]}),f.jsxs("div",{className:"col-span-1 bg-white rounded-xl border border-slate-200 overflow-hidden no-print",children:[f.jsx("div",{className:"p-4 bg-slate-50 border-b border-slate-100",children:f.jsxs("h3",{className:"font-bold text-slate-700 flex items-center gap-2",children:[f.jsx(og,{size:18,className:"text-blue-600"})," Backup & Dados"]})}),f.jsxs("div",{className:"p-6 flex gap-4",children:[f.jsxs("button",{onClick:lo,className:"flex-1 py-3 border border-slate-200 rounded-lg hover:bg-slate-50 flex flex-col items-center gap-2 text-sm text-slate-600",children:[f.jsx(JT,{className:"text-blue-600"})," Exportar Backup (JSON)"]}),f.jsxs("button",{onClick:()=>Ha.current.click(),className:"flex-1 py-3 border border-slate-200 rounded-lg hover:bg-slate-50 flex flex-col items-center gap-2 text-sm text-slate-600",children:[f.jsx(hI,{className:"text-emerald-600"})," Restaurar Backup"]}),f.jsx("input",{type:"file",ref:Ha,className:"hidden",onChange:uo,accept:".json"})]})]}),f.jsxs("div",{className:"col-span-1 md:col-span-2 bg-white rounded-xl border border-slate-200 overflow-hidden no-print",children:[f.jsxs("div",{className:"p-4 bg-slate-50 border-b border-slate-100 flex justify-between items-center",children:[f.jsxs("h3",{className:"font-bold text-slate-700 flex items-center gap-2",children:[f.jsx(ng,{size:18,className:"text-emerald-600"})," Renda Automática"]}),f.jsxs("button",{onClick:Ac,className:"px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-2",children:[f.jsx(GT,{size:14})," Gerar no Extrato"]})]}),f.jsxs("div",{className:"p-6 grid grid-cols-1 md:grid-cols-2 gap-8",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[f.jsx("span",{className:"w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold",children:"1"}),f.jsx("h4",{className:"font-bold text-slate-600",children:"Pagamento Principal"})]}),f.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Dia"}),f.jsx("input",{type:"number",min:"1",max:"31",value:C.day,onChange:w=>M({...C,day:parseInt(w.target.value)}),className:"w-full px-3 py-2 border rounded-lg"})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Valor (R$)"}),f.jsx("input",{type:"number",value:C.amount,onChange:w=>M({...C,amount:w.target.value}),className:"w-full px-3 py-2 border rounded-lg",placeholder:"0.00"})]})]})]}),f.jsxs("div",{className:`transition-opacity duration-300 ${j.enabled?"opacity-100":"opacity-60"}`,children:[f.jsxs("div",{className:"flex justify-between items-center mb-4",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("span",{className:"w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold",children:"2"}),f.jsx("h4",{className:"font-bold text-slate-600",children:"Vale"})]}),f.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[f.jsx("input",{type:"checkbox",checked:j.enabled,onChange:()=>B({...j,enabled:!j.enabled}),className:"sr-only peer"}),f.jsx("div",{className:"w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"})]})]}),f.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Dia"}),f.jsx("input",{disabled:!j.enabled,type:"number",min:"1",max:"31",value:j.day,onChange:w=>B({...j,day:parseInt(w.target.value)}),className:"w-full px-3 py-2 border rounded-lg disabled:bg-slate-50"})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Valor (R$)"}),f.jsx("input",{disabled:!j.enabled,type:"number",value:j.amount,onChange:w=>B({...j,amount:w.target.value}),className:"w-full px-3 py-2 border rounded-lg disabled:bg-slate-50",placeholder:"0.00"})]})]})]})]})]}),f.jsxs("div",{className:"col-span-1 md:col-span-2 bg-slate-50 p-6 rounded-xl border border-slate-200 no-print",children:[f.jsx("div",{className:"flex justify-between items-center mb-3",children:f.jsx("h2",{className:"text-sm font-bold text-slate-600 uppercase",children:"Nova Categoria"})}),f.jsxs("form",{onSubmit:kc,className:"flex gap-4 items-end",children:[f.jsxs("div",{className:"flex-1",children:[f.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Nome"}),f.jsx("input",{type:"text",value:wn,onChange:w=>qs(w.target.value),className:"w-full px-3 py-2 border rounded-lg"})]}),f.jsxs("div",{className:"w-40",children:[f.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Tipo"}),f.jsxs("select",{value:pr,onChange:w=>zn(w.target.value),className:"w-full px-3 py-2 border rounded-lg",children:[f.jsx("option",{value:"despesa",children:"Despesa"}),f.jsx("option",{value:"receita",children:"Receita"})]})]}),f.jsx("button",{type:"submit",className:"px-6 py-2 bg-slate-800 text-white rounded-lg",children:"Criar"})]})]})]})]})]}):f.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6 print:block",children:[f.jsxs("div",{className:"lg:col-span-4 space-y-6 no-print",children:[f.jsxs("div",{className:"bg-gradient-to-br from-indigo-900 to-slate-800 p-6 rounded-xl shadow-lg text-white",children:[f.jsxs("h2",{className:"font-bold flex items-center gap-2 mb-4 text-indigo-100",children:[f.jsx(hh,{className:"w-5 h-5"})," Fluxo de Caixa"]}),f.jsx("div",{className:"flex justify-between items-end mb-4",children:f.jsxs("div",{children:[f.jsx("p",{className:"text-xs text-indigo-300 uppercase",children:"Saldo Projetado"}),f.jsx("p",{className:`text-3xl font-bold mt-1 ${Qa>=0?"text-emerald-400":"text-red-400"}`,children:rt(Qa)})]})}),f.jsxs("div",{className:"bg-white/10 p-3 rounded-lg border border-white/10 text-sm space-y-2",children:[f.jsxs("div",{className:"flex justify-between",children:[f.jsx("span",{children:"Saldo Hoje (Real):"})," ",f.jsx("span",{className:"font-semibold",children:rt(Qs)})]}),f.jsxs("div",{className:"flex justify-between text-indigo-200",children:[f.jsx("span",{children:"Entradas Futuras:"})," ",f.jsxs("span",{children:["+ ",rt(Ys.filter(w=>w.type==="receita").reduce((w,V)=>w+V.amount,0))]})]}),f.jsxs("div",{className:"flex justify-between text-red-300",children:[f.jsx("span",{children:"Saídas Futuras:"})," ",f.jsxs("span",{children:["- ",rt(Ys.filter(w=>w.type==="despesa").reduce((w,V)=>w+V.amount,0))]})]})]})]}),f.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-4",children:[f.jsxs("h2",{className:"font-semibold text-slate-700 flex justify-between",children:[e," ",r," ",f.jsx(WT,{className:"w-4 h-4 text-slate-400"})]}),f.jsxs("div",{className:"space-y-3",children:[f.jsxs("div",{className:"flex justify-between p-3 bg-emerald-50 rounded-lg",children:[f.jsx("span",{className:"text-emerald-700 text-sm",children:"Entradas"}),f.jsx("span",{className:"text-emerald-700 font-bold",children:rt(ho)})]}),f.jsxs("div",{className:"flex justify-between p-3 bg-red-50 rounded-lg",children:[f.jsx("span",{className:"text-red-700 text-sm",children:"Saídas"}),f.jsx("span",{className:"text-red-700 font-bold",children:rt(fo)})]}),f.jsxs("div",{className:"pt-2 border-t border-slate-100 flex justify-between",children:[f.jsx("span",{className:"text-slate-600 font-medium",children:"Saldo"}),f.jsx("span",{className:`text-lg font-bold ${po>=0?"text-blue-600":"text-red-600"}`,children:rt(po)})]})]})]}),f.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200",children:[f.jsxs("h3",{className:"font-semibold text-slate-700 mb-4 flex items-center gap-2",children:[f.jsx(ig,{className:"w-5 h-5 text-blue-600"})," Novo Lançamento"]}),f.jsxs("form",{onSubmit:Xs,className:"space-y-4",children:[f.jsxs("div",{className:"grid grid-cols-2 gap-2 mb-2",children:[f.jsx("button",{type:"button",onClick:()=>{se("receita"),ct(!1)},className:`py-2 text-sm rounded-lg border ${Q==="receita"?"bg-emerald-100 border-emerald-200 text-emerald-700 font-bold":"bg-white text-slate-500"}`,children:"Receita"}),f.jsx("button",{type:"button",onClick:()=>{se("despesa"),ct(!1)},className:`py-2 text-sm rounded-lg border ${Q==="despesa"?"bg-red-100 border-red-200 text-red-700 font-bold":"bg-white text-slate-500"}`,children:"Despesa"})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Descrição"}),f.jsx("input",{type:"text",value:Ct,onChange:w=>dr(w.target.value),className:"w-full px-3 py-2 border rounded-lg",placeholder:"Ex: Mercado"})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Subcategoria (Opcional)"}),f.jsx("input",{type:"text",value:Ua,onChange:w=>$s(w.target.value),className:"w-full px-3 py-2 border rounded-lg",placeholder:"Ex: Frios..."})]}),f.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Data"}),f.jsx("input",{type:"date",value:on,onChange:w=>At(w.target.value),className:"w-full px-3 py-2 border rounded-lg"})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Valor"}),f.jsx("input",{type:"number",step:"0.01",value:Fn,onChange:w=>q(w.target.value),className:"w-full px-3 py-2 border rounded-lg"})]})]}),f.jsxs("div",{className:"space-y-2 bg-slate-50 p-3 rounded-lg border border-slate-100",children:[f.jsx("label",{className:"block text-xs font-bold text-slate-500",children:"Pagamento"}),f.jsxs("select",{value:an,onChange:w=>wc(w.target.value),className:"w-full px-3 py-2 border rounded-lg text-sm bg-white mb-2",children:[f.jsx("option",{value:"Pix",children:"Pix / Dinheiro"}),f.jsx("option",{value:"Cartão de Débito",children:"Débito"}),f.jsx("option",{value:"Cartão de Crédito",children:"Cartão de Crédito"})]}),an==="Cartão de Crédito"&&Q==="despesa"&&f.jsxs("div",{className:"animate-fade-in",children:[f.jsx("label",{className:"block text-xs font-bold text-blue-600 mb-1",children:"Qual Cartão?"}),f.jsxs("select",{value:zs,onChange:w=>Fa(w.target.value),className:"w-full px-3 py-2 border border-blue-200 rounded-lg text-sm bg-white",children:[f.jsx("option",{value:"",children:"Selecione..."}),x.map(w=>f.jsx("option",{value:w.id,children:w.name},w.id))]}),x.length===0&&f.jsx("p",{className:"text-[10px] text-red-500 mt-1",children:"Cadastre um cartão em Configurações."})]}),f.jsx("div",{className:"flex items-end pt-2 border-t border-slate-200 mt-2",children:f.jsxs("label",{className:"flex items-center gap-2 text-sm text-slate-600 cursor-pointer",children:[f.jsx("input",{type:"checkbox",checked:Bs,onChange:w=>Zi(w.target.checked),className:"rounded text-blue-600"})," Despesa Fixa?"]})})]}),f.jsxs("div",{className:"bg-slate-50 p-3 rounded-lg border border-slate-100",children:[f.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[f.jsx("input",{type:"checkbox",checked:qt,onChange:w=>{ct(w.target.checked),ts(Q==="receita"?12:2)},className:"rounded text-blue-600"}),f.jsx("label",{className:"text-sm font-medium text-slate-600 flex items-center gap-1",children:Q==="despesa"?f.jsxs(f.Fragment,{children:[f.jsx(tI,{size:14})," Parcelar / Repetir?"]}):f.jsxs(f.Fragment,{children:[f.jsx(aI,{size:14})," Repetir?"]})})]}),qt&&f.jsxs("div",{className:"animate-fade-in",children:[f.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:Q==="despesa"&&an==="Cartão de Crédito"?"Número de Parcelas":"Repetir por quantos meses?"}),f.jsx("input",{type:"number",min:"2",max:"60",value:kt,onChange:w=>ts(w.target.value),className:"w-full px-3 py-2 border rounded-lg text-sm"})]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-medium text-slate-500 mb-1",children:"Categoria"}),f.jsx("select",{value:ye,onChange:w=>ke(w.target.value),className:"w-full px-3 py-2 border rounded-lg",children:D[Q].map(w=>f.jsx("option",{value:w,children:w},w))})]}),f.jsxs("button",{type:"submit",className:"w-full py-2 bg-blue-600 text-white rounded-lg font-medium flex justify-center gap-2",children:[f.jsx(og,{className:"w-4 h-4"})," Adicionar"]})]})]})]}),f.jsxs("div",{className:"lg:col-span-8 bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col h-full min-h-[500px]",children:[f.jsxs("div",{className:"p-4 border-b border-slate-100 flex justify-between items-center",children:[f.jsxs("h3",{className:"font-semibold text-slate-700",children:["Extrato ",e]}),f.jsxs("span",{className:"text-xs text-slate-400",children:[Tn.length," itens"]})]}),f.jsx("div",{className:"flex-1 overflow-auto",children:Tn.length===0?f.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-slate-400 py-10 no-print",children:[f.jsx(Il,{className:"w-12 h-12 mb-2 opacity-20"}),f.jsx("p",{children:"Nenhum lançamento."})]}):f.jsxs("table",{className:"w-full text-left text-sm",children:[f.jsx("thead",{className:"bg-slate-50 text-slate-500 sticky top-0 z-10",children:f.jsxs("tr",{children:[f.jsx("th",{className:"p-4 w-28",children:"Data"}),f.jsx("th",{className:"p-4",children:"Descrição"}),f.jsx("th",{className:"p-4 hidden sm:table-cell",children:"Pgto"}),f.jsx("th",{className:"p-4 text-right",children:"Valor"}),f.jsx("th",{className:"p-4 w-10 no-print"})]})}),f.jsx("tbody",{className:"divide-y divide-slate-100",children:Tn.map(w=>{const V=w.date?w.date.split("/")[0]:"",z=w.financialDate,G=w.paymentMethod==="Cartão de Crédito";return f.jsxs("tr",{className:"hover:bg-slate-50 group",children:[f.jsxs("td",{className:"p-4 text-slate-700 font-bold w-16 text-center",children:[f.jsx("div",{className:"text-lg",children:V}),f.jsxs("div",{className:"text-[10px] text-slate-400 font-normal uppercase",children:[w.date.split("/")[1],"/",w.date.split("/")[2].slice(2)]})]}),f.jsxs("td",{className:"p-4 font-medium text-slate-700",children:[w.description,f.jsxs("div",{className:"flex gap-2 mt-1",children:[w.subCategory&&f.jsx("span",{className:"text-[10px] bg-indigo-50 text-indigo-600 px-1.5 py-0.5 rounded border border-indigo-100",children:w.subCategory}),w.isFixed&&f.jsx("span",{className:"text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded border border-slate-200",children:"Fixa"}),f.jsx("div",{className:"text-xs text-slate-400 sm:hidden",children:w.category})]})]}),f.jsxs("td",{className:"p-4 text-slate-500 hidden sm:table-cell",children:[f.jsxs("div",{className:"flex items-center gap-1",children:[cs(w.paymentMethod),f.jsx("span",{className:"text-xs",children:w.paymentMethod})]}),G&&z&&f.jsxs("div",{className:"text-[10px] text-orange-600 font-semibold mt-1",children:["Vence: ",Wn(z)]})]}),f.jsxs("td",{className:`p-4 text-right font-bold ${w.type==="receita"?"text-emerald-600":"text-red-600"}`,children:[w.type==="despesa"?"-":"+"," ",rt(w.amount)]}),f.jsx("td",{className:"p-4 text-right no-print",children:f.jsx("button",{onClick:()=>Xa(w.id),className:"p-1 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-colors",children:f.jsx(ch,{className:"w-4 h-4"})})})]},w.id)})})]})})]})]})]})]})}function Ch({title:t,value:e,icon:n,color:r}){const s=i=>new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(i);return f.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-start justify-between",children:[f.jsxs("div",{children:[f.jsx("p",{className:"text-slate-500 text-sm font-medium mb-1",children:t}),f.jsx("h3",{className:`text-2xl font-bold ${r}`,children:s(e)})]}),f.jsx("div",{className:`p-3 rounded-lg bg-slate-50 ${r}`,children:f.jsx(n,{className:"w-6 h-6"})})]})}qv(document.getElementById("root")).render(f.jsx(J.StrictMode,{children:f.jsx(wR,{})}));
