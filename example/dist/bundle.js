!function(e){function t(e){delete installedChunks[e]}function n(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.charset="utf-8",n.src=f.p+""+e+"."+E+".hot-update.js",t.appendChild(n)}function r(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=f.p+""+E+".hot-update.json";r.open("GET",o,!0),r.timeout=e,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void n(e)}t(e)}}})}function o(e){var t=L[e];if(!t)return f;var n=function(n){return t.hot.active?(L[n]?L[n].parents.indexOf(e)<0&&L[n].parents.push(e):(w=[e],g=n),t.children.indexOf(n)<0&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),w=[]),f(n)};for(var r in f)Object.prototype.hasOwnProperty.call(f,r)&&"e"!==r&&Object.defineProperty(n,r,function(e){return{configurable:!0,enumerable:!0,get:function(){return f[e]},set:function(t){f[e]=t}}}(r));return n.e=function(e){function t(){T--,"prepare"===j&&(M[e]||l(e),0===T&&0===S&&u())}return"ready"===j&&a("prepare"),T++,f.e(e).then(t,function(e){throw t(),e})},n}function i(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:g!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:c,apply:p,status:function(e){if(!e)return j;D.push(e)},addStatusHandler:function(e){D.push(e)},removeStatusHandler:function(e){var t=D.indexOf(e);t>=0&&D.splice(t,1)},data:_[e]};return g=void 0,t}function a(e){j=e;for(var t=0;t<D.length;t++)D[t].call(null,e)}function s(e){return+e+""===e?+e:e}function c(e){if("idle"!==j)throw new Error("check() is only allowed in idle status");return b=e,a("check"),r(x).then(function(e){if(!e)return a("idle"),null;C={},M={},P=e.c,y=e.h,a("prepare");var t=new Promise(function(e,t){v={resolve:e,reject:t}});m={};return l(0),"prepare"===j&&0===T&&0===S&&u(),t})}function d(e,t){if(P[e]&&C[e]){C[e]=!1;for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(m[n]=t[n]);0==--S&&0===T&&u()}}function l(e){P[e]?(C[e]=!0,S++,n(e)):M[e]=!0}function u(){a("ready");var e=v;if(v=null,e)if(b)Promise.resolve().then(function(){return p(b)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&t.push(s(n));e.resolve(t)}}function p(n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];e.indexOf(r)<0&&e.push(r)}}if("ready"!==j)throw new Error("apply() is only allowed in ready status");n=n||{};var o,i,c,d,l,u={},p=[],h={},g=function(){console.warn("[HMR] unexpected require("+b.moduleId+") to disposed module")};for(var v in m)if(Object.prototype.hasOwnProperty.call(m,v)){l=s(v);var b;b=m[v]?function(e){for(var t=[e],n={},o=t.slice().map(function(e){return{chain:[e],id:e}});o.length>0;){var i=o.pop(),a=i.id,s=i.chain;if((d=L[a])&&!d.hot._selfAccepted){if(d.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:a};if(d.hot._main)return{type:"unaccepted",chain:s,moduleId:a};for(var c=0;c<d.parents.length;c++){var l=d.parents[c],u=L[l];if(u){if(u.hot._declinedDependencies[a])return{type:"declined",chain:s.concat([l]),moduleId:a,parentId:l};t.indexOf(l)>=0||(u.hot._acceptedDependencies[a]?(n[l]||(n[l]=[]),r(n[l],[a])):(delete n[l],t.push(l),o.push({chain:s.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}(l):{type:"disposed",moduleId:v};var x=!1,O=!1,D=!1,S="";switch(b.chain&&(S="\nUpdate propagation: "+b.chain.join(" -> ")),b.type){case"self-declined":n.onDeclined&&n.onDeclined(b),n.ignoreDeclined||(x=new Error("Aborted because of self decline: "+b.moduleId+S));break;case"declined":n.onDeclined&&n.onDeclined(b),n.ignoreDeclined||(x=new Error("Aborted because of declined dependency: "+b.moduleId+" in "+b.parentId+S));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(b),n.ignoreUnaccepted||(x=new Error("Aborted because "+l+" is not accepted"+S));break;case"accepted":n.onAccepted&&n.onAccepted(b),O=!0;break;case"disposed":n.onDisposed&&n.onDisposed(b),D=!0;break;default:throw new Error("Unexception type "+b.type)}if(x)return a("abort"),Promise.reject(x);if(O){h[l]=m[l],r(p,b.outdatedModules);for(l in b.outdatedDependencies)Object.prototype.hasOwnProperty.call(b.outdatedDependencies,l)&&(u[l]||(u[l]=[]),r(u[l],b.outdatedDependencies[l]))}D&&(r(p,[b.moduleId]),h[l]=g)}var T=[];for(i=0;i<p.length;i++)l=p[i],L[l]&&L[l].hot._selfAccepted&&T.push({module:l,errorHandler:L[l].hot._selfAccepted});a("dispose"),Object.keys(P).forEach(function(e){!1===P[e]&&t(e)});for(var M,C=p.slice();C.length>0;)if(l=C.pop(),d=L[l]){var N={},I=d.hot._disposeHandlers;for(c=0;c<I.length;c++)(o=I[c])(N);for(_[l]=N,d.hot.active=!1,delete L[l],delete u[l],c=0;c<d.children.length;c++){var U=L[d.children[c]];U&&((M=U.parents.indexOf(l))>=0&&U.parents.splice(M,1))}}var A,R;for(l in u)if(Object.prototype.hasOwnProperty.call(u,l)&&(d=L[l]))for(R=u[l],c=0;c<R.length;c++)A=R[c],(M=d.children.indexOf(A))>=0&&d.children.splice(M,1);a("apply"),E=y;for(l in h)Object.prototype.hasOwnProperty.call(h,l)&&(e[l]=h[l]);var k=null;for(l in u)if(Object.prototype.hasOwnProperty.call(u,l)&&(d=L[l])){R=u[l];var X=[];for(i=0;i<R.length;i++)if(A=R[i],o=d.hot._acceptedDependencies[A]){if(X.indexOf(o)>=0)continue;X.push(o)}for(i=0;i<X.length;i++){o=X[i];try{o(R)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:l,dependencyId:R[i],error:e}),n.ignoreErrored||k||(k=e)}}}for(i=0;i<T.length;i++){var Y=T[i];l=Y.module,w=[l];try{f(l)}catch(e){if("function"==typeof Y.errorHandler)try{Y.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:t,orginalError:e,originalError:e}),n.ignoreErrored||k||(k=t),k||(k=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:l,error:e}),n.ignoreErrored||k||(k=e)}}return k?(a("fail"),Promise.reject(k)):(a("idle"),new Promise(function(e){e(p)}))}function f(t){if(L[t])return L[t].exports;var n=L[t]={i:t,l:!1,exports:{},hot:i(t),parents:(O=w,w=[],O),children:[]};return e[t].call(n.exports,n,n.exports,o(t)),n.l=!0,n.exports}var h=this.webpackHotUpdate;this.webpackHotUpdate=function(e,t){d(e,t),h&&h(e,t)};var g,v,m,y,b=!0,E="70a4ffc10ae328ad3928",x=1e4,_={},w=[],O=[],D=[],j="idle",S=0,T=0,M={},C={},P={},L={};f.m=e,f.c=L,f.d=function(e,t,n){f.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},f.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(t,"a",t),t},f.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},f.p="",f.h=function(){return E},o(0)(f.s=0)}({"../dist/react-redrag.js":function(e,t,n){!function(t,r){e.exports=r(n("react"),n("react-dom"))}(0,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DRAG_EVENT_TYPE="dnd:drag"},function(t,n){t.exports=e},function(e,t,n){"use strict";function r(){return document.body.appendChild(document.createElement("div"))}function o(e){p.unmountComponentAtNode(e),document.body.removeChild(e)}function i(e){return{clientX:e.clientX,clientY:e.clientY,pageX:e.pageX,pageY:e.pageY,target:e.target,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey}}function a(e){var t=e.changedTouches[0].clientX,n=e.changedTouches[0].clientY;return{clientX:t,clientY:n,pageX:e.changedTouches[0].pageX,pageY:e.changedTouches[0].pageY,target:document.elementFromPoint(t,n),ctrlKey:e.ctrlKey,shiftKey:e.shiftKey}}function s(e,t){try{return new CustomEvent(e,t)}catch(r){var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}}function c(e){document.body.style.userSelect=e,document.body.style.msUserSelect=e}var d=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),l=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e};Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),p=n(3),f=n(0),h={position:"fixed",zIndex:9999,opacity:.8,pointerEvents:"none"},g=0,v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.dragging=!1,t.originX=0,t.originY=0,t.shiftX=0,t.shiftY=0,t.container=void 0,t.dropTarget=void 0,t.draggedElement=void 0,t.onMouseDown=function(e){e.button===g&&t.onDown(i(e))},t.onTouchStart=function(e){1===e.touches.length&&(t.touchId=e.changedTouches[0].identifier,t.onDown(a(e)))},t.onMouseMove=function(e){t.onMove(t.extend(i(e)))},t.onTouchMove=function(e){1===e.touches.length&&t.onMove(t.extend(a(e)))},t.onMouseUp=function(e){t.onEnd(t.extend(i(e)))},t.onTouchEnd=function(e){for(var n=0;n<e.changedTouches.length;++n)if(e.changedTouches[n].identifier===t.touchId){t.onEnd(t.extend(a(e)));break}},t.onTouchCancel=function(e){t.onEnd(t.extend(a(e)))},t}return d(t,e),t.prototype.extend=function(e){return l({},e,{type:this.props.type,dragData:this.props.dragData,deltaX:e.pageX-this.originX,deltaY:e.pageY-this.originY})},t.prototype.dispatch=function(e,t){if(t.target&&t.type){var n={bubbles:!0,cancelable:!0,detail:t};t.target.dispatchEvent(s(e,n))}},t.prototype.onDown=function(e){if(this.addListeners(),c("none"),this.originX=e.pageX,this.originY=e.pageY,this.props.disableShift)this.shiftX=this.shiftY=0;else{var t=p.findDOMNode(this).getBoundingClientRect();this.shiftX=e.clientX-t.left,this.shiftY=e.clientY-t.top}this.onMove(this.extend(e))},t.prototype.startDrag=function(e){var t=null!=this.props.dragThreshold?this.props.dragThreshold:5;return!this.dragging&&Math.abs(e.deltaX)+Math.abs(e.deltaY)>=t},t.prototype.onMove=function(e){this.startDrag(e)&&(this.dragging=!0,this.props.onStart&&this.props.onStart(e),this.props.type&&(this.container=r(),this.draggedElement=this.props.dragLayer||this.props.children),this.dropTarget=void 0),this.dragging&&(this.container&&this.renderDragLayer(e),this.dispatch(f.DRAG_EVENT_TYPE,e),this.dropTarget!==e.dropTarget&&(this.dropTarget&&this.dropTarget.props.onLeave&&this.dropTarget.props.onLeave(e),e.dropTarget&&e.dropTarget.props.onEnter&&e.dropTarget.props.onEnter(e),this.dropTarget=e.dropTarget),this.props.onDrag&&this.props.onDrag(e))},t.prototype.onEnd=function(e){this.removeListeners(),c(null),this.dragging&&(this.dragging=!1,this.container&&(o(this.container),this.container=void 0,this.draggedElement=void 0),this.dropTarget&&this.dropTarget.props.onLeave&&this.dropTarget.props.onLeave(e),this.dropTarget&&this.dropTarget.props.onDrop&&this.dropTarget.props.onDrop(e),this.props.onEnd&&this.props.onEnd(l({},e,{dropTarget:this.dropTarget})))},t.prototype.addListeners=function(){window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("touchmove",this.onTouchMove),window.addEventListener("touchend",this.onTouchEnd),window.addEventListener("touchcancel",this.onTouchCancel)},t.prototype.removeListeners=function(){window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("touchup",this.onTouchEnd),window.removeEventListener("touchcancel",this.onTouchCancel)},t.prototype.componentDidMount=function(){var e=p.findDOMNode(this);e.addEventListener("mousedown",this.onMouseDown),e.addEventListener("touchstart",this.onTouchStart)},t.prototype.componentWillUnmount=function(){var e=p.findDOMNode(this);e.removeEventListener("mousedown",this.onMouseDown),e.removeEventListener("touchstart",this.onTouchStart)},t.prototype.renderDragLayer=function(e){var t=l({},h,{left:e.clientX-this.shiftX,top:e.clientY-this.shiftY});p.render(u.createElement("div",{style:t},this.draggedElement),this.container)},t.prototype.render=function(){return this.props.children},t}(u.Component);t.Draggable=v},function(e,n){e.exports=t},function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=n(3),a=n(0),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onDrag=function(e){t.handle(t.props.onDragOver,e)},t}return r(t,e),t.prototype.acceptable=function(e){var t=this.props.type;return Array.isArray(t)?-1!==t.indexOf(e):t===e},t.prototype.handle=function(e,t){var n=t.detail;this.acceptable(n.type)&&(n.dropTarget=this,t.stopPropagation(),e&&e(n))},t.prototype.componentDidMount=function(){i.findDOMNode(this).addEventListener(a.DRAG_EVENT_TYPE,this.onDrag)},t.prototype.componentWillUnmount=function(){i.findDOMNode(this).removeEventListener(a.DRAG_EVENT_TYPE,this.onDrag)},t.prototype.render=function(){return o.cloneElement(o.Children.only(this.props.children))},t}(o.Component);t.Droppable=s},function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),r(n(0)),r(n(2)),r(n(4)),r(n(6))},function(e,t,n){"use strict";function r(e,t,n){return e.splice(n,0,e.splice(t,1)[0]),e}function o(e){return{order:c.Children.map(e.children,function(e,t){return t}),startIndex:void 0}}var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),a=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},s=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]]);return n};Object.defineProperty(t,"__esModule",{value:!0});var c=n(1),d=n(2),l=n(4);t.arrayMove=r;var u=function(e){function t(t){var n=e.call(this,t)||this;return n.uid=Math.random(),n.onDragOver=function(e){var t=n.state.startIndex,o=e.dropTarget.props.dropData;void 0===t?n.setState({startIndex:o}):t!==o&&n.setState({order:r(n.state.order,n.indexOf(t),n.indexOf(o))})},n.onDragEnd=function(){var e=n.state.startIndex,t=n.indexOf(e);e!==t?n.props.onSortEnd(e,t):(n.props.onSortCancel&&n.props.onSortCancel(),n.setState(o(n.props)))},n.state=o(t),n}return i(t,e),t.prototype.indexOf=function(e){return this.state.order.indexOf(e)},t.prototype.componentWillReceiveProps=function(e){this.setState(o(e))},t.prototype.render=function(){var e=this,t=this.props,n=t.onSortStart,r=(t.onSortCancel,t.onSortEnd,t.hideDragged),o=t.customDraggable,i=t.children,u=s(t,["onSortStart","onSortCancel","onSortEnd","hideDragged","customDraggable","children"]),p=c.Children.toArray(i),f=this.state.order.map(function(t){var i=p[t];r&&e.state.startIndex===t&&(i=c.cloneElement(i,{style:{visibility:"hidden"}}));var s={type:e.uid,onEnd:e.onDragEnd};return i=o?c.cloneElement(i,s):c.createElement(d.Draggable,a({},s,{onStart:n}),i),c.createElement(l.Droppable,{key:p[t].key,type:e.uid,dropData:t,onDragOver:e.onDragOver},i)});return c.createElement("div",a({},u),f)},t}(c.Component);t.Sortable=u}])})},"./node_modules/css-loader/lib/css-base.js":function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},"./node_modules/react-hot-loader/lib/patch.js":function(e,t,n){"use strict";e.exports=n("./node_modules/react-hot-loader/lib/patch.prod.js")},"./node_modules/react-hot-loader/lib/patch.prod.js":function(e,t,n){"use strict"},"./node_modules/react-hot-loader/patch.js":function(e,t,n){e.exports=n("./node_modules/react-hot-loader/lib/patch.js")},"./node_modules/style-loader/lib/addStyles.js":function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=h[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(l(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(l(r.parts[i],t));h[r.id]={id:r.id,refs:1,parts:a}}}}function o(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s=i[1],c=i[2],d=i[3],l={css:s,media:c,sourceMap:d};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}function i(e,t){var n=v(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=b[b.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function s(e){var t=document.createElement("style");return e.attrs.type="text/css",d(t,e.attrs),i(e,t),t}function c(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",d(t,e.attrs),i(e,t),t}function d(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function l(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var d=y++;n=m||(m=s(t)),r=u.bind(null,n,d,!1),o=u.bind(null,n,d,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),r=f.bind(null,n,t),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=p.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function u(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function f(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=E(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var h={},g=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),v=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),m=null,y=0,b=[],E=n("./node_modules/style-loader/lib/urls.js");e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=g()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=h[s.id];c.refs--,i.push(c)}if(e){r(o(e,t),t)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var d=0;d<c.parts.length;d++)c.parts[d]();delete h[c.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},"./node_modules/style-loader/lib/urls.js":function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},'./node_modules/typings-for-css-modules-loader/lib/index.js?{"modules":true,"localIdentName":"[local]","namedExport":true,"camelCase":true}!./src/index.css':function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(void 0),t.push([e.i,"body{font-family:monospace}.column{flex-direction:column;justify-content:space-around;align-items:center}.column,.row{display:flex}.child-spacing-v>:not(:last-child){margin-bottom:15px}.child-spacing-h>:not(:last-child){margin-right:15px}.slider{position:relative;width:100px;height:5px;background-color:#d3d3d3;box-shadow:inset 0 1px 3px rgba(0,0,0,.14);border-radius:2px}.slider .draggable{top:-8px}.draggable{cursor:pointer;background-color:#fff;width:20px;height:20px;border-radius:50%}.draggable,.droppable{box-shadow:0 1px 3px rgba(0,0,0,.4)}.droppable{border-radius:2px;width:100px;height:50px;display:flex;align-items:center;justify-content:center}.acceptable{box-shadow:0 1px 2px 1px #485ec1}",""]),t.locals={column:"column",row:"row","child-spacing-v":"child-spacing-v",childSpacingV:"child-spacing-v","child-spacing-h":"child-spacing-h",childSpacingH:"child-spacing-h",slider:"slider",draggable:"draggable",droppable:"droppable",acceptable:"acceptable"}},"./src/index.css":function(e,t,n){var r=n('./node_modules/typings-for-css-modules-loader/lib/index.js?{"modules":true,"localIdentName":"[local]","namedExport":true,"camelCase":true}!./src/index.css');"string"==typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;var i=n("./node_modules/style-loader/lib/addStyles.js")(r,o);r.locals&&(e.exports=r.locals),r.locals||e.hot.accept('./node_modules/typings-for-css-modules-loader/lib/index.js?{"modules":true,"localIdentName":"[local]","namedExport":true,"camelCase":true}!./src/index.css',function(){var t=n('./node_modules/typings-for-css-modules-loader/lib/index.js?{"modules":true,"localIdentName":"[local]","namedExport":true,"camelCase":true}!./src/index.css');"string"==typeof t&&(t=[[e.i,t,""]]),i(t)}),e.hot.dispose(function(){i()})},"./src/index.tsx":function(e,t,n){"use strict";function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.filter(function(e){return"string"==typeof e}).join(" ")}function o(){return a.createElement("div",{className:d.column},a.createElement("h1",null,"Basic usage examples of ",a.createElement("a",{href:"https://github.com/Megaputer/react-redrag.git"},"react-redrag")),a.createElement("h1",null,"Draggable"),a.createElement(l,null),a.createElement("h1",null,"Droppable"),a.createElement(p,null),a.createElement("h1",null,"Sortable"),a.createElement(f,null))}var i=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var a=n("react"),s=n("react-dom"),c=n("../dist/react-redrag.js"),d=n("./src/index.css"),l=function(e){function t(){var t=e.call(this)||this;return t.onDrag=function(e){t.setState({left:t.normalize(e.deltaX)})},t.onEnd=function(e){t.setState({start:t.normalize(e.deltaX)})},t.state={start:0,left:0},t}return i(t,e),t.prototype.normalize=function(e){return Math.max(0,Math.min(80,this.state.start+e))},t.prototype.render=function(){return a.createElement("div",{className:d.slider},a.createElement(c.Draggable,{onDrag:this.onDrag,onEnd:this.onEnd,dragLayer:null},a.createElement("div",{className:d.draggable,style:{position:"absolute",left:this.state.left}})))},t}(a.Component),u=function(e){function t(t){var n=e.call(this,t)||this;return n.state={over:!1},n}return i(t,e),t.prototype.render=function(){var e=this;return a.createElement(c.Droppable,{type:this.props.type,onEnter:function(){return e.setState({over:!0})},onLeave:function(){return e.setState({over:!1})},onDrop:this.props.onDrop},a.createElement("div",{className:r(d.droppable,this.state.over&&d.acceptable),style:{backgroundColor:this.props.color}},this.props.children))},t}(a.Component),p=function(e){function t(){var t=e.call(this)||this;return t.onGreen=function(){t.setState({green:t.state.green+1})},t.onOrange=function(){t.setState({orange:t.state.orange+1})},t.state={orange:0,green:0},t}return i(t,e),t.prototype.render=function(){return a.createElement("div",{className:r(d.row,d.childSpacingH)},a.createElement("div",{className:r(d.column,d.childSpacingV)},a.createElement(c.Draggable,{type:"green"},a.createElement("div",{className:d.draggable,style:{backgroundColor:"mediumaquamarine"}})),a.createElement(c.Draggable,{type:"orange"},a.createElement("div",{className:d.draggable,style:{backgroundColor:"papayawhip"}}))),a.createElement("div",{className:r(d.column,d.childSpacingV)},a.createElement(u,{type:"orange",color:"papayawhip",onDrop:this.onOrange},this.state.orange),a.createElement(u,{type:"green",color:"mediumaquamarine",onDrop:this.onGreen},this.state.green)))},t}(a.Component),f=function(e){function t(){var t=e.call(this)||this;return t.onSortEnd=function(e,n){t.setState({list:c.arrayMove(t.state.list,e,n)})},t.state={list:[1,2,3,4,5]},t}return i(t,e),t.prototype.render=function(){return a.createElement(c.Sortable,{className:d.childSpacingV,onSortEnd:this.onSortEnd,hideDragged:!0},this.state.list.map(function(e){return a.createElement("div",{key:e,className:r(d.draggable,d.droppable)},e)}))},t}(a.Component);s.render(a.createElement(o,null),document.getElementById("root"))},0:function(e,t,n){n("./node_modules/react-hot-loader/patch.js"),e.exports=n("./src/index.tsx")},react:function(e,t){e.exports=React},"react-dom":function(e,t){e.exports=ReactDOM}});