webpackJsonp([3],{"./app/containers/TestPage/index.js":function(e,o,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,o=arguments[1];switch(o.type){case b:return e.set("number",e.get("number")+o.number);default:return e}}function r(e){return{type:b,number:e}}function s(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function u(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}function a(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}function d(e){return{onAddNumber:function(){return e(r(1))}}}Object.defineProperty(o,"__esModule",{value:!0});var l=t("./node_modules/react/react.js"),i=t.n(l),c=(t("./node_modules/prop-types/index.js"),t("./node_modules/react-helmet/lib/Helmet.js")),f=t("./node_modules/react-redux/es/index.js"),p=t("./node_modules/redux/es/index.js"),j=t("./node_modules/reselect/es/index.js"),_=t("./app/utils/injectReducer.js"),m=t("./node_modules/immutable/dist/immutable.js"),b="rtc/test/ADD_NUMBER",h=Object(m.fromJS)({number:10}),y=n,v=function(e){return e.get("test")};o.mapDispatchToProps=d;var g=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(o,t,n,r){var s=o&&o.defaultProps,u=arguments.length-3;if(t||0===u||(t={}),t&&s)for(var a in s)void 0===t[a]&&(t[a]=s[a]);else t||(t=s||{});if(1===u)t.children=r;else if(u>1){for(var d=Array(u),l=0;l<u;l++)d[l]=arguments[l+3];t.children=d}return{$$typeof:e,type:o,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}}(),x=function(){function e(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(o,t,n){return t&&e(o.prototype,t),n&&e(o,n),o}}(),O=g(c.Helmet,{},void 0,g("title",{},void 0,"Test Page : WebRTC"),g("meta",{name:"description",content:"wehago video main page"})),w=function(e){function o(){return s(this,o),u(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return a(o,e),x(o,[{key:"render",value:function(){return g("div",{},void 0,O,g("div",{},void 0,this.props.number,g("button",{onClick:this.props.onAddNumber},void 0," + ")))}}]),o}(i.a.PureComponent),A=Object(j.b)({number:function(){return Object(j.a)(v,function(e){return e.get("number")})}()}),T=Object(f.b)(A,d),S=Object(_.a)({key:"test",reducer:y});o.default=Object(p.c)(S,T)(w)},"./app/utils/injectReducer.js":function(e,o,t){"use strict";function n(e){var o={dispatch:v.a,subscribe:v.a,getState:v.a,replaceReducer:v.a,runSaga:v.a,injectedReducers:T.a,injectedSagas:T.a};m()(w()(e,o),"(app/utils...) injectors: Expected a valid redux store")}function r(e,o){return function(t,r){o||n(e),m()(x()(t)&&!h()(t)&&v()(r),"(app/utils...) injectReducer: Expected `reducer` to be a reducer function"),Reflect.has(e.injectedReducers,t)&&e.injectedReducers[t]===r||(e.injectedReducers[t]=r,e.replaceReducer(Object(S.a)(e.injectedReducers)))}}function s(e){return n(e),{injectReducer:r(e,!0)}}function u(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function a(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}function d(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}var l=t("./node_modules/react/react.js"),i=t.n(l),c=t("./node_modules/prop-types/index.js"),f=t.n(c),p=t("./node_modules/hoist-non-react-statics/index.js"),j=t.n(p),_=t("./node_modules/invariant/browser.js"),m=t.n(_),b=t("./node_modules/lodash/isEmpty.js"),h=t.n(b),y=t("./node_modules/lodash/isFunction.js"),v=t.n(y),g=t("./node_modules/lodash/isString.js"),x=t.n(g),O=t("./node_modules/lodash/conformsTo.js"),w=t.n(O),A=t("./node_modules/lodash/isObject.js"),T=t.n(A),S=t("./app/reducers.js"),k=function(){function e(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(o,t,n){return t&&e(o.prototype,t),n&&e(o,n),o}}();o.a=function(e){var o=e.key,t=e.reducer;return function(e){var n=function(n){function r(){var e,o,t,n;u(this,r);for(var d=arguments.length,l=Array(d),i=0;i<d;i++)l[i]=arguments[i];return o=t=a(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(l))),t.injectors=s(t.context.store),n=o,a(t,n)}return d(r,n),k(r,[{key:"componentWillMount",value:function(){(0,this.injectors.injectReducer)(o,t)}},{key:"render",value:function(){return i.a.createElement(e,this.props)}}]),r}(i.a.Component);return n.WrappedComponent=e,n.contextTypes={store:f.a.object.isRequired},n.displayName="withReducer("+(e.displayName||e.name||"Component")+")",j()(n,e)}}},"./node_modules/hoist-non-react-statics/index.js":function(e,o,t){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s=Object.getOwnPropertySymbols,u=(Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable),a=Object.getPrototypeOf,d=a&&a(Object),l=Object.getOwnPropertyNames;e.exports=function e(o,t,i){if("string"!=typeof t){if(d){var c=a(t);c&&c!==d&&e(o,c,i)}var f=l(t);s&&(f=f.concat(s(t)));for(var p=0;p<f.length;++p){var j=f[p];if(!(n[j]||r[j]||i&&i[j])&&(u.call(t,j)||"function"==typeof t[j]))try{o[j]=t[j]}catch(e){}}return o}return o}},"./node_modules/lodash/_DataView.js":function(e,o,t){var n=t("./node_modules/lodash/_getNative.js"),r=t("./node_modules/lodash/_root.js"),s=n(r,"DataView");e.exports=s},"./node_modules/lodash/_Map.js":function(e,o,t){var n=t("./node_modules/lodash/_getNative.js"),r=t("./node_modules/lodash/_root.js"),s=n(r,"Map");e.exports=s},"./node_modules/lodash/_Promise.js":function(e,o,t){var n=t("./node_modules/lodash/_getNative.js"),r=t("./node_modules/lodash/_root.js"),s=n(r,"Promise");e.exports=s},"./node_modules/lodash/_Set.js":function(e,o,t){var n=t("./node_modules/lodash/_getNative.js"),r=t("./node_modules/lodash/_root.js"),s=n(r,"Set");e.exports=s},"./node_modules/lodash/_Symbol.js":function(e,o,t){var n=t("./node_modules/lodash/_root.js"),r=n.Symbol;e.exports=r},"./node_modules/lodash/_WeakMap.js":function(e,o,t){var n=t("./node_modules/lodash/_getNative.js"),r=t("./node_modules/lodash/_root.js"),s=n(r,"WeakMap");e.exports=s},"./node_modules/lodash/_arrayLikeKeys.js":function(e,o,t){function n(e,o){var t=u(e),n=!t&&s(e),i=!t&&!n&&a(e),f=!t&&!n&&!i&&l(e),p=t||n||i||f,j=p?r(e.length,String):[],_=j.length;for(var m in e)!o&&!c.call(e,m)||p&&("length"==m||i&&("offset"==m||"parent"==m)||f&&("buffer"==m||"byteLength"==m||"byteOffset"==m)||d(m,_))||j.push(m);return j}var r=t("./node_modules/lodash/_baseTimes.js"),s=t("./node_modules/lodash/isArguments.js"),u=t("./node_modules/lodash/isArray.js"),a=t("./node_modules/lodash/isBuffer.js"),d=t("./node_modules/lodash/_isIndex.js"),l=t("./node_modules/lodash/isTypedArray.js"),i=Object.prototype,c=i.hasOwnProperty;e.exports=n},"./node_modules/lodash/_baseConformsTo.js":function(e,o){function t(e,o,t){var n=t.length;if(null==e)return!n;for(e=Object(e);n--;){var r=t[n],s=o[r],u=e[r];if(void 0===u&&!(r in e)||!s(u))return!1}return!0}e.exports=t},"./node_modules/lodash/_baseGetTag.js":function(e,o,t){function n(e){return null==e?void 0===e?d:a:l&&l in Object(e)?s(e):u(e)}var r=t("./node_modules/lodash/_Symbol.js"),s=t("./node_modules/lodash/_getRawTag.js"),u=t("./node_modules/lodash/_objectToString.js"),a="[object Null]",d="[object Undefined]",l=r?r.toStringTag:void 0;e.exports=n},"./node_modules/lodash/_baseIsArguments.js":function(e,o,t){function n(e){return s(e)&&r(e)==u}var r=t("./node_modules/lodash/_baseGetTag.js"),s=t("./node_modules/lodash/isObjectLike.js"),u="[object Arguments]";e.exports=n},"./node_modules/lodash/_baseIsNative.js":function(e,o,t){function n(e){return!(!u(e)||s(e))&&(r(e)?j:l).test(a(e))}var r=t("./node_modules/lodash/isFunction.js"),s=t("./node_modules/lodash/_isMasked.js"),u=t("./node_modules/lodash/isObject.js"),a=t("./node_modules/lodash/_toSource.js"),d=/[\\^$.*+?()[\]{}|]/g,l=/^\[object .+?Constructor\]$/,i=Function.prototype,c=Object.prototype,f=i.toString,p=c.hasOwnProperty,j=RegExp("^"+f.call(p).replace(d,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=n},"./node_modules/lodash/_baseIsTypedArray.js":function(e,o,t){function n(e){return u(e)&&s(e.length)&&!!a[r(e)]}var r=t("./node_modules/lodash/_baseGetTag.js"),s=t("./node_modules/lodash/isLength.js"),u=t("./node_modules/lodash/isObjectLike.js"),a={};a["[object Float32Array]"]=a["[object Float64Array]"]=a["[object Int8Array]"]=a["[object Int16Array]"]=a["[object Int32Array]"]=a["[object Uint8Array]"]=a["[object Uint8ClampedArray]"]=a["[object Uint16Array]"]=a["[object Uint32Array]"]=!0,a["[object Arguments]"]=a["[object Array]"]=a["[object ArrayBuffer]"]=a["[object Boolean]"]=a["[object DataView]"]=a["[object Date]"]=a["[object Error]"]=a["[object Function]"]=a["[object Map]"]=a["[object Number]"]=a["[object Object]"]=a["[object RegExp]"]=a["[object Set]"]=a["[object String]"]=a["[object WeakMap]"]=!1,e.exports=n},"./node_modules/lodash/_baseKeys.js":function(e,o,t){function n(e){if(!r(e))return s(e);var o=[];for(var t in Object(e))a.call(e,t)&&"constructor"!=t&&o.push(t);return o}var r=t("./node_modules/lodash/_isPrototype.js"),s=t("./node_modules/lodash/_nativeKeys.js"),u=Object.prototype,a=u.hasOwnProperty;e.exports=n},"./node_modules/lodash/_baseTimes.js":function(e,o){function t(e,o){for(var t=-1,n=Array(e);++t<e;)n[t]=o(t);return n}e.exports=t},"./node_modules/lodash/_baseUnary.js":function(e,o){function t(e){return function(o){return e(o)}}e.exports=t},"./node_modules/lodash/_coreJsData.js":function(e,o,t){var n=t("./node_modules/lodash/_root.js"),r=n["__core-js_shared__"];e.exports=r},"./node_modules/lodash/_freeGlobal.js":function(e,o,t){(function(o){var t="object"==typeof o&&o&&o.Object===Object&&o;e.exports=t}).call(o,t("./node_modules/webpack/buildin/global.js"))},"./node_modules/lodash/_getNative.js":function(e,o,t){function n(e,o){var t=s(e,o);return r(t)?t:void 0}var r=t("./node_modules/lodash/_baseIsNative.js"),s=t("./node_modules/lodash/_getValue.js");e.exports=n},"./node_modules/lodash/_getRawTag.js":function(e,o,t){function n(e){var o=u.call(e,d),t=e[d];try{e[d]=void 0;var n=!0}catch(e){}var r=a.call(e);return n&&(o?e[d]=t:delete e[d]),r}var r=t("./node_modules/lodash/_Symbol.js"),s=Object.prototype,u=s.hasOwnProperty,a=s.toString,d=r?r.toStringTag:void 0;e.exports=n},"./node_modules/lodash/_getTag.js":function(e,o,t){var n=t("./node_modules/lodash/_DataView.js"),r=t("./node_modules/lodash/_Map.js"),s=t("./node_modules/lodash/_Promise.js"),u=t("./node_modules/lodash/_Set.js"),a=t("./node_modules/lodash/_WeakMap.js"),d=t("./node_modules/lodash/_baseGetTag.js"),l=t("./node_modules/lodash/_toSource.js"),i=l(n),c=l(r),f=l(s),p=l(u),j=l(a),_=d;(n&&"[object DataView]"!=_(new n(new ArrayBuffer(1)))||r&&"[object Map]"!=_(new r)||s&&"[object Promise]"!=_(s.resolve())||u&&"[object Set]"!=_(new u)||a&&"[object WeakMap]"!=_(new a))&&(_=function(e){var o=d(e),t="[object Object]"==o?e.constructor:void 0,n=t?l(t):"";if(n)switch(n){case i:return"[object DataView]";case c:return"[object Map]";case f:return"[object Promise]";case p:return"[object Set]";case j:return"[object WeakMap]"}return o}),e.exports=_},"./node_modules/lodash/_getValue.js":function(e,o){function t(e,o){return null==e?void 0:e[o]}e.exports=t},"./node_modules/lodash/_isIndex.js":function(e,o){function t(e,o){return!!(o=null==o?n:o)&&("number"==typeof e||r.test(e))&&e>-1&&e%1==0&&e<o}var n=9007199254740991,r=/^(?:0|[1-9]\d*)$/;e.exports=t},"./node_modules/lodash/_isMasked.js":function(e,o,t){function n(e){return!!s&&s in e}var r=t("./node_modules/lodash/_coreJsData.js"),s=function(){var e=/[^.]+$/.exec(r&&r.keys&&r.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();e.exports=n},"./node_modules/lodash/_isPrototype.js":function(e,o){function t(e){var o=e&&e.constructor;return e===("function"==typeof o&&o.prototype||n)}var n=Object.prototype;e.exports=t},"./node_modules/lodash/_nativeKeys.js":function(e,o,t){var n=t("./node_modules/lodash/_overArg.js"),r=n(Object.keys,Object);e.exports=r},"./node_modules/lodash/_nodeUtil.js":function(e,o,t){(function(e){var n=t("./node_modules/lodash/_freeGlobal.js"),r="object"==typeof o&&o&&!o.nodeType&&o,s=r&&"object"==typeof e&&e&&!e.nodeType&&e,u=s&&s.exports===r,a=u&&n.process,d=function(){try{return a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=d}).call(o,t("./node_modules/webpack/buildin/module.js")(e))},"./node_modules/lodash/_objectToString.js":function(e,o){function t(e){return r.call(e)}var n=Object.prototype,r=n.toString;e.exports=t},"./node_modules/lodash/_overArg.js":function(e,o){function t(e,o){return function(t){return e(o(t))}}e.exports=t},"./node_modules/lodash/_root.js":function(e,o,t){var n=t("./node_modules/lodash/_freeGlobal.js"),r="object"==typeof self&&self&&self.Object===Object&&self,s=n||r||Function("return this")();e.exports=s},"./node_modules/lodash/_toSource.js":function(e,o){function t(e){if(null!=e){try{return r.call(e)}catch(e){}try{return e+""}catch(e){}}return""}var n=Function.prototype,r=n.toString;e.exports=t},"./node_modules/lodash/conformsTo.js":function(e,o,t){function n(e,o){return null==o||r(e,o,s(o))}var r=t("./node_modules/lodash/_baseConformsTo.js"),s=t("./node_modules/lodash/keys.js");e.exports=n},"./node_modules/lodash/isArguments.js":function(e,o,t){var n=t("./node_modules/lodash/_baseIsArguments.js"),r=t("./node_modules/lodash/isObjectLike.js"),s=Object.prototype,u=s.hasOwnProperty,a=s.propertyIsEnumerable,d=n(function(){return arguments}())?n:function(e){return r(e)&&u.call(e,"callee")&&!a.call(e,"callee")};e.exports=d},"./node_modules/lodash/isArray.js":function(e,o){var t=Array.isArray;e.exports=t},"./node_modules/lodash/isArrayLike.js":function(e,o,t){function n(e){return null!=e&&s(e.length)&&!r(e)}var r=t("./node_modules/lodash/isFunction.js"),s=t("./node_modules/lodash/isLength.js");e.exports=n},"./node_modules/lodash/isBuffer.js":function(e,o,t){(function(e){var n=t("./node_modules/lodash/_root.js"),r=t("./node_modules/lodash/stubFalse.js"),s="object"==typeof o&&o&&!o.nodeType&&o,u=s&&"object"==typeof e&&e&&!e.nodeType&&e,a=u&&u.exports===s,d=a?n.Buffer:void 0,l=d?d.isBuffer:void 0,i=l||r;e.exports=i}).call(o,t("./node_modules/webpack/buildin/module.js")(e))},"./node_modules/lodash/isEmpty.js":function(e,o,t){function n(e){if(null==e)return!0;if(d(e)&&(a(e)||"string"==typeof e||"function"==typeof e.splice||l(e)||c(e)||u(e)))return!e.length;var o=s(e);if(o==f||o==p)return!e.size;if(i(e))return!r(e).length;for(var t in e)if(_.call(e,t))return!1;return!0}var r=t("./node_modules/lodash/_baseKeys.js"),s=t("./node_modules/lodash/_getTag.js"),u=t("./node_modules/lodash/isArguments.js"),a=t("./node_modules/lodash/isArray.js"),d=t("./node_modules/lodash/isArrayLike.js"),l=t("./node_modules/lodash/isBuffer.js"),i=t("./node_modules/lodash/_isPrototype.js"),c=t("./node_modules/lodash/isTypedArray.js"),f="[object Map]",p="[object Set]",j=Object.prototype,_=j.hasOwnProperty;e.exports=n},"./node_modules/lodash/isFunction.js":function(e,o,t){function n(e){if(!s(e))return!1;var o=r(e);return o==a||o==d||o==u||o==l}var r=t("./node_modules/lodash/_baseGetTag.js"),s=t("./node_modules/lodash/isObject.js"),u="[object AsyncFunction]",a="[object Function]",d="[object GeneratorFunction]",l="[object Proxy]";e.exports=n},"./node_modules/lodash/isLength.js":function(e,o){function t(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}var n=9007199254740991;e.exports=t},"./node_modules/lodash/isObject.js":function(e,o){function t(e){var o=typeof e;return null!=e&&("object"==o||"function"==o)}e.exports=t},"./node_modules/lodash/isObjectLike.js":function(e,o){function t(e){return null!=e&&"object"==typeof e}e.exports=t},"./node_modules/lodash/isString.js":function(e,o,t){function n(e){return"string"==typeof e||!s(e)&&u(e)&&r(e)==a}var r=t("./node_modules/lodash/_baseGetTag.js"),s=t("./node_modules/lodash/isArray.js"),u=t("./node_modules/lodash/isObjectLike.js"),a="[object String]";e.exports=n},"./node_modules/lodash/isTypedArray.js":function(e,o,t){var n=t("./node_modules/lodash/_baseIsTypedArray.js"),r=t("./node_modules/lodash/_baseUnary.js"),s=t("./node_modules/lodash/_nodeUtil.js"),u=s&&s.isTypedArray,a=u?r(u):n;e.exports=a},"./node_modules/lodash/keys.js":function(e,o,t){function n(e){return u(e)?r(e):s(e)}var r=t("./node_modules/lodash/_arrayLikeKeys.js"),s=t("./node_modules/lodash/_baseKeys.js"),u=t("./node_modules/lodash/isArrayLike.js");e.exports=n},"./node_modules/lodash/stubFalse.js":function(e,o){function t(){return!1}e.exports=t},"./node_modules/reselect/es/index.js":function(e,o,t){"use strict";function n(e,o){return e===o}function r(e,o,t){if(null===o||null===t||o.length!==t.length)return!1;for(var n=o.length,r=0;r<n;r++)if(!e(o[r],t[r]))return!1;return!0}function s(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n,t=null,s=null;return function(){return r(o,t,arguments)||(s=e.apply(null,arguments)),t=arguments,s}}function u(e){var o=Array.isArray(e[0])?e[0]:e;if(!o.every(function(e){return"function"==typeof e})){var t=o.map(function(e){return typeof e}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+t+"]")}return o}function a(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d;if("object"!=typeof e)throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a "+typeof e);var t=Object.keys(e);return o(t.map(function(o){return e[o]}),function(){for(var e=arguments.length,o=Array(e),n=0;n<e;n++)o[n]=arguments[n];return o.reduce(function(e,o,n){return e[t[n]]=o,e},{})})}t.d(o,"a",function(){return d}),o.b=a;var d=function(e){for(var o=arguments.length,t=Array(o>1?o-1:0),n=1;n<o;n++)t[n-1]=arguments[n];return function(){for(var o=arguments.length,n=Array(o),r=0;r<o;r++)n[r]=arguments[r];var a=0,d=n.pop(),l=u(n),i=e.apply(void 0,[function(){return a++,d.apply(null,arguments)}].concat(t)),c=s(function(){for(var e=[],o=l.length,t=0;t<o;t++)e.push(l[t].apply(null,arguments));return i.apply(null,e)});return c.resultFunc=d,c.recomputations=function(){return a},c.resetRecomputations=function(){return a=0},c}}(s)}});