!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/",e(0)}([function(t,e,n){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}var i=n(1),u=o(i),a=n(58),c=n(70),f=o(c),s=n(71),l=r(s),d=n(72);o(d);!function(){function t(t,e){for(var n=Math.floor(Math.random()*t*e),r=[];n>0;){var o=Math.floor(Math.random()*t),i=Math.floor(Math.random()*e);r.push({x:o,y:i,state:1}),n--}return r}function e(t){var e=[],n=t.split(";");return n.forEach(function(t){var n=t.split(","),r=(0,u.default)(n,2),o=r[0],i=r[1];e.push({x:o,y:i,state:1})}),e}var n=document.querySelector("#app"),r=document.querySelector("#start"),o=document.querySelector("#stop"),i=document.querySelector("#step"),c=document.querySelector("#reset"),s=document.querySelector("#generationsPerMinute"),d=document.querySelector("#randomized"),h=null,p=null,v={width:100,height:40,diff:d.checked?t(function(){return this.width},function(){return this.height}):[],running:!1,generationsPerMinute:120,randomize:d.checked},y=l.getParams(window.location.search);Number.isInteger(+y.w)&&+y.w>0&&+y.w<=1e3&&(v.width=+y.w),Number.isInteger(+y.h)&&+y.h>0&&+y.h<=1e3&&(v.height=+y.h),Number.isInteger(+y.gpm)&&+y.gpm>=+s.min&&+y.gpm<=+s.max&&(v.generationsPerMinute=+y.gpm),void 0!==y.r&&(v.running=!!y.r),y.d&&("r"===y.d?d.checked||(v.randomize=!0,v.diff=t(v.width,v.height)):(v.randomize=!1,v.diff=e(y.d)));var g=JSON.parse(JSON.stringify(v));r.addEventListener("click",function(t){r.disabled=!0,i.disabled=!0,o.disabled=!1,g.running=!0,p=setInterval(function(){m.next()},1e3*(60/g.generationsPerMinute))}),o.addEventListener("click",function(t){clearInterval(p),g.running=!1,r.disabled=!1,i.disabled=!1,o.disabled=!0}),i.addEventListener("click",function(t){m.next()}),c.addEventListener("click",function(e){g.diff=d.checked?t(g.width,g.height):[],clearInterval(p),g.running=!1,h.remove(),h=null,m=new a.GameOfLifeBoard(g.width,g.height,g.diff,n),r.disabled=!1,i.disabled=!1,o.disabled=!0}),n.addEventListener(f.default.BOARD_LOADED.Name,function(t){h=n.querySelector("#gameoflifeboard"),h.addEventListener("click",function(t){if(!g.running){var e=t.path[0].getAttribute("data-coord-x"),n=t.path[0].getAttribute("data-coord-y");null!==e&&null!==n&&m.toggleCell(e,n)}})}),n.addEventListener(f.default.BOARD_STABILIZED.Name,function(t){clearInterval(p),g.running=!1,r.disabled=!0,i.disabled=!0,o.disabled=!0,alert("Board has stabilized!")}),s.addEventListener("change",function(t){g.generationsPerMinute=+t.target.value,g.running&&(o.click(),r.click())});var m=new a.GameOfLifeBoard(g.width,g.height,g.diff,n);s.value=g.generationsPerMinute,d.checked=g.randomize,g.running&&r.click()}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(2),i=r(o),u=n(54),a=r(u);e.default=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var u,c=(0,a.default)(t);!(r=(u=c.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if((0,i.default)(Object(e)))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},function(t,e,n){t.exports={default:n(3),__esModule:!0}},function(t,e,n){n(4),n(50),t.exports=n(52)},function(t,e,n){n(5);for(var r=n(16),o=n(20),i=n(8),u=n(47)("toStringTag"),a=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],c=0;c<5;c++){var f=a[c],s=r[f],l=s&&s.prototype;l&&!l[u]&&o(l,u,f),i[f]=i.Array}},function(t,e,n){"use strict";var r=n(6),o=n(7),i=n(8),u=n(9);t.exports=n(13)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e){t.exports={}},function(t,e,n){var r=n(10),o=n(12);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(11);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){"use strict";var r=n(14),o=n(15),i=n(30),u=n(20),a=n(31),c=n(8),f=n(32),s=n(46),l=n(48),d=n(47)("iterator"),h=!([].keys&&"next"in[].keys()),p="@@iterator",v="keys",y="values",g=function(){return this};t.exports=function(t,e,n,m,b,w,x){f(n,e,m);var _,L,E,O=function(t){if(!h&&t in A)return A[t];switch(t){case v:return function(){return new n(this,t)};case y:return function(){return new n(this,t)}}return function(){return new n(this,t)}},j=e+" Iterator",S=b==y,k=!1,A=t.prototype,M=A[d]||A[p]||b&&A[b],P=M||O(b),T=b?S?O("entries"):P:void 0,C="Array"==e?A.entries||M:M;if(C&&(E=l(C.call(new t)),E!==Object.prototype&&(s(E,j,!0),r||a(E,d)||u(E,d,g))),S&&M&&M.name!==y&&(k=!0,P=function(){return M.call(this)}),r&&!x||!h&&!k&&A[d]||u(A,d,P),c[e]=P,c[j]=g,b)if(_={values:S?P:O(y),keys:w?P:O(v),entries:T},x)for(L in _)L in A||i(A,L,_[L]);else o(o.P+o.F*(h||k),e,_);return _}},function(t,e){t.exports=!0},function(t,e,n){var r=n(16),o=n(17),i=n(18),u=n(20),a="prototype",c=function(t,e,n){var f,s,l,d=t&c.F,h=t&c.G,p=t&c.S,v=t&c.P,y=t&c.B,g=t&c.W,m=h?o:o[e]||(o[e]={}),b=m[a],w=h?r:p?r[e]:(r[e]||{})[a];h&&(n=e);for(f in n)s=!d&&w&&void 0!==w[f],s&&f in m||(l=s?w[f]:n[f],m[f]=h&&"function"!=typeof w[f]?n[f]:y&&s?i(l,r):g&&w[f]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[a]=t[a],e}(l):v&&"function"==typeof l?i(Function.call,l):l,v&&((m.virtual||(m.virtual={}))[f]=l,t&c.R&&b&&!b[f]&&u(b,f,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(19);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(21),o=n(29);t.exports=n(25)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(22),o=n(24),i=n(28),u=Object.defineProperty;e.f=n(25)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(23);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(25)&&!n(26)(function(){return 7!=Object.defineProperty(n(27)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){t.exports=!n(26)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(23),o=n(16).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(23);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){t.exports=n(20)},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){"use strict";var r=n(33),o=n(29),i=n(46),u={};n(20)(u,n(47)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(22),o=n(34),i=n(44),u=n(41)("IE_PROTO"),a=function(){},c="prototype",f=function(){var t,e=n(27)("iframe"),r=i.length,o="<",u=">";for(e.style.display="none",n(45).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+u+"document.F=Object"+o+"/script"+u),t.close(),f=t.F;r--;)delete f[c][i[r]];return f()};t.exports=Object.create||function(t,e){var n;return null!==t?(a[c]=r(t),n=new a,a[c]=null,n[u]=t):n=f(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(21),o=n(22),i=n(35);t.exports=n(25)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),a=u.length,c=0;a>c;)r.f(t,n=u[c++],e[n]);return t}},function(t,e,n){var r=n(36),o=n(44);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(31),o=n(9),i=n(37)(!1),u=n(41)("IE_PROTO");t.exports=function(t,e){var n,a=o(t),c=0,f=[];for(n in a)n!=u&&r(a,n)&&f.push(n);for(;e.length>c;)r(a,n=e[c++])&&(~i(f,n)||f.push(n));return f}},function(t,e,n){var r=n(9),o=n(38),i=n(40);t.exports=function(t){return function(e,n,u){var a,c=r(e),f=o(c.length),s=i(u,f);if(t&&n!=n){for(;f>s;)if(a=c[s++],a!=a)return!0}else for(;f>s;s++)if((t||s in c)&&c[s]===n)return t||s||0;return!t&&-1}}},function(t,e,n){var r=n(39),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(39),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(42)("keys"),o=n(43);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(16),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){t.exports=n(16).document&&document.documentElement},function(t,e,n){var r=n(21).f,o=n(31),i=n(47)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(42)("wks"),o=n(43),i=n(16).Symbol,u="function"==typeof i,a=t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))};a.store=r},function(t,e,n){var r=n(31),o=n(49),i=n(41)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(12);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";var r=n(51)(!0);n(13)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(39),o=n(12);t.exports=function(t){return function(e,n){var i,u,a=String(o(e)),c=r(n),f=a.length;return c<0||c>=f?t?"":void 0:(i=a.charCodeAt(c),i<55296||i>56319||c+1===f||(u=a.charCodeAt(c+1))<56320||u>57343?t?a.charAt(c):i:t?a.slice(c,c+2):(i-55296<<10)+(u-56320)+65536)}}},function(t,e,n){var r=n(53),o=n(47)("iterator"),i=n(8);t.exports=n(17).isIterable=function(t){var e=Object(t);return void 0!==e[o]||"@@iterator"in e||i.hasOwnProperty(r(e))}},function(t,e,n){var r=n(11),o=n(47)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=Object(t),o))?n:i?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,n){t.exports={default:n(55),__esModule:!0}},function(t,e,n){n(4),n(50),t.exports=n(56)},function(t,e,n){var r=n(22),o=n(57);t.exports=n(17).getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},function(t,e,n){var r=n(53),o=n(47)("iterator"),i=n(8);t.exports=n(17).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.GameOfLifeBoard=void 0;var i=n(59),u=o(i),a=n(60),c=o(a),f=n(64),s=r(f),l=n(70),d=o(l),h=Symbol(),p=Symbol(),v=Symbol(),y=Symbol(),g=(e.GameOfLifeBoard=function(){function t(e,n,r,o){(0,u.default)(this,t),this[h]=new s.Game(e,n,r),this[p]=this[h].board,this[y]=o;for(var i=0;i<this[h].height;i++)for(var a=0;a<this[h].width;a++)this[p][i][a]=g(a,i,this[p][i][a]);m(this[p],o),o.dispatchEvent(d.default.BOARD_LOADED.EventObject),this[v]=this[h].start()}return(0,c.default)(t,[{key:"toggleCell",value:function(t,e){this[h].toggleCell(t,e)===s.CELL_ALIVE?this[p][e][t].classList.add("alive"):this[p][e][t].classList.remove("alive")}},{key:"next",value:function(){var t=this,e=this[v].next().value;return void 0===e?void this[y].dispatchEvent(d.default.BOARD_STABILIZED.EventObject):void e.forEach(function(e){var n=e.x,r=e.y;e.state===s.CELL_ALIVE?t[p][r][n].classList.add("alive"):t[p][r][n].classList.remove("alive")})}}]),t}(),function(t,e,n){var r=document.createElement("div");return r.classList.add("cell"),n&&r.classList.add("alive"),r.setAttribute("data-coord-x",t),r.setAttribute("data-coord-y",e),r}),m=function(t,e){var n=document.createDocumentFragment(),r=document.createElement("table");r.id="gameoflifeboard";for(var o=0;o<t.length;o++){for(var i=document.createElement("tr"),u=0;u<t[o].length;u++){var a=document.createElement("td");a.appendChild(t[o][u]),i.appendChild(a)}r.appendChild(i)}n.appendChild(r),e.appendChild(n)}},function(t,e){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(61),i=r(o);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){t.exports={default:n(62),__esModule:!0}},function(t,e,n){n(63);var r=n(17).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){var r=n(15);r(r.S+r.F*!n(25),"Object",{defineProperty:n(21).f})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){for(var r=t.length,o=t[0].length,i=0,u=-1;u<2;u++)for(var a=-1;a<2;a++){var c=e+a,f=n+u;0===a&&0===u||c<0||f<0||c>=o||f>=r||t[f][c]===v&&++i}return i}function i(t,e,n){var r=h.default.initialize2dArray(t,e,p);return n.forEach(function(n){n.x>=0&&n.x<t&&n.y>=0&&n.y<e&&(r[n.y][n.x]=n.state)}),r}Object.defineProperty(e,"__esModule",{value:!0}),e.Game=e.CELL_ALIVE=e.CELL_DEAD=void 0;var u=n(65),a=r(u),c=n(59),f=r(c),s=n(60),l=r(s),d=n(69),h=r(d),p=e.CELL_DEAD=0,v=e.CELL_ALIVE=1,y=Symbol(),g=Symbol(),m=Symbol();e.Game=function(){function t(e,n,r){if((0,f.default)(this,t),e<=0||n<=0)throw"Error: Board must be at least 1x1.";this[y]=e,this[g]=n,this[m]=i(e,n,r)}return(0,l.default)(t,[{key:"toggleCell",value:function(t,e){return this[m][e][t]=this[m][e][t]===v?p:v,this[m][e][t]}},{key:"start",value:a.default.mark(function t(){var e,n,r,i,u,c,f;return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=!0,0!==this.height&&0!==this.width){t.next=3;break}throw"Error: Game has not been initialized.";case 3:if(!e){t.next=15;break}for(n=[],r=this.board,i=0;i<this.height;i++)for(u=0;u<this.width;u++)c=o(r,u,i),f=!!this[m][i][u],f?(c<2||c>3)&&(this[m][i][u]=p):3===c&&(this[m][i][u]=v),this[m][i][u]!==r[i][u]&&n.push({x:u,y:i,state:this[m][i][u]});if(!(n.length>0)){t.next=12;break}return t.next=10,n;case 10:t.next=13;break;case 12:return t.abrupt("return");case 13:t.next=3;break;case 15:case"end":return t.stop()}},t,this)})},{key:"toString",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"\n",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";return this.board.map(function(t){return t.join(e)}).join(t)}},{key:"width",get:function(){return this[y]}},{key:"height",get:function(){return this[g]}},{key:"board",get:function(){return h.default.clone2dArray(this[m])}}]),t}()},function(t,e,n){t.exports=n(66)},function(t,e,n){(function(e){var r="object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this,o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n(67),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}}).call(e,function(){return this}())},function(t,e,n){(function(e,n){!function(e){"use strict";function r(t,e,n,r){var o=e&&e.prototype instanceof i?e:i,u=Object.create(o.prototype),a=new h(r||[]);return u._invoke=s(t,n,a),u}function o(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function i(){}function u(){}function a(){}function c(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function f(t){function e(n,r,i,u){var a=o(t[n],t,r);if("throw"!==a.type){var c=a.arg,f=c.value;return f&&"object"==typeof f&&m.call(f,"__await")?Promise.resolve(f.__await).then(function(t){e("next",t,i,u)},function(t){e("throw",t,i,u)}):Promise.resolve(f).then(function(t){c.value=t,i(c)},u)}u(a.arg)}function r(t,n){function r(){return new Promise(function(r,o){e(t,n,r,o)})}return i=i?i.then(r,r):r()}"object"==typeof n&&n.domain&&(e=n.domain.bind(e));var i;this._invoke=r}function s(t,e,n){var r=E;return function(i,u){if(r===j)throw new Error("Generator is already running");if(r===S){if("throw"===i)throw u;return v()}for(;;){var a=n.delegate;if(a){if("return"===i||"throw"===i&&a.iterator[i]===y){n.delegate=null;var c=a.iterator.return;if(c){var f=o(c,a.iterator,u);if("throw"===f.type){i="throw",u=f.arg;continue}}if("return"===i)continue}var f=o(a.iterator[i],a.iterator,u);if("throw"===f.type){n.delegate=null,i="throw",u=f.arg;continue}i="next",u=y;var s=f.arg;if(!s.done)return r=O,s;n[a.resultName]=s.value,n.next=a.nextLoc,n.delegate=null}if("next"===i)n.sent=n._sent=u;else if("throw"===i){if(r===E)throw r=S,u;n.dispatchException(u)&&(i="next",u=y)}else"return"===i&&n.abrupt("return",u);r=j;var f=o(t,e,n);if("normal"===f.type){r=n.done?S:O;var s={value:f.arg,done:n.done};if(f.arg!==k)return s;n.delegate&&"next"===i&&(u=y)}else"throw"===f.type&&(r=S,i="throw",u=f.arg)}}}function l(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function d(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function h(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(l,this),this.reset(!0)}function p(t){if(t){var e=t[w];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(m.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=y,e.done=!0,e};return r.next=r}}return{next:v}}function v(){return{value:y,done:!0}}var y,g=Object.prototype,m=g.hasOwnProperty,b="function"==typeof Symbol?Symbol:{},w=b.iterator||"@@iterator",x=b.toStringTag||"@@toStringTag",_="object"==typeof t,L=e.regeneratorRuntime;if(L)return void(_&&(t.exports=L));L=e.regeneratorRuntime=_?t.exports:{},L.wrap=r;var E="suspendedStart",O="suspendedYield",j="executing",S="completed",k={},A={};A[w]=function(){return this};var M=Object.getPrototypeOf,P=M&&M(M(p([])));P&&P!==g&&m.call(P,w)&&(A=P);var T=a.prototype=i.prototype=Object.create(A);u.prototype=T.constructor=a,a.constructor=u,a[x]=u.displayName="GeneratorFunction",L.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===u||"GeneratorFunction"===(e.displayName||e.name))},L.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,x in t||(t[x]="GeneratorFunction")),t.prototype=Object.create(T),t},L.awrap=function(t){return{__await:t}},c(f.prototype),L.AsyncIterator=f,L.async=function(t,e,n,o){var i=new f(r(t,e,n,o));return L.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},c(T),T[x]="Generator",T.toString=function(){return"[object Generator]"},L.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},L.values=p,h.prototype={constructor:h,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=y,this.done=!1,this.delegate=null,this.tryEntries.forEach(d),!t)for(var e in this)"t"===e.charAt(0)&&m.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=y)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,r){return i.type="throw",i.arg=t,n.next=e,!!r}if(this.done)throw t;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var u=m.call(o,"catchLoc"),a=m.call(o,"finallyLoc");if(u&&a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&m.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?this.next=o.finallyLoc:this.complete(i),k},complete:function(t,e){if("throw"===t.type)throw t.arg;"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=t.arg,this.next="end"):"normal"===t.type&&e&&(this.next=e)},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),d(n),k}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;d(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:p(t),resultName:e,nextLoc:n},k}}}("object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this)}).call(e,function(){return this}(),n(68))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(s===setTimeout)return setTimeout(t,0);if((s===n||!s)&&setTimeout)return s=setTimeout,setTimeout(t,0);try{return s(t,0)}catch(e){try{return s.call(null,t,0)}catch(e){return s.call(this,t,0)}}}function i(t){if(l===clearTimeout)return clearTimeout(t);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}function u(){v&&h&&(v=!1,h.length?p=h.concat(p):y=-1,p.length&&a())}function a(){if(!v){var t=o(u);v=!0;for(var e=p.length;e;){for(h=p,p=[];++y<e;)h&&h[y].run();y=-1,e=p.length}h=null,v=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function f(){}var s,l,d=t.exports={};!function(){try{s="function"==typeof setTimeout?setTimeout:n}catch(t){s=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(t){l=r}}();var h,p=[],v=!1,y=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];p.push(new c(t,e)),1!==p.length||v||o(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=f,d.addListener=f,d.once=f,d.off=f,d.removeListener=f,d.removeAllListeners=f,d.emit=f,d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t){return t.slice().map(function(t){return t.slice()})}function e(t,e,n){for(var r=[],o=0;o<e;o++)r[o]=new Array(t).fill(n);return r}return{clone2dArray:t,initialize2dArray:e}}();e.default=n},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={BOARD_LOADED:{Name:"board-loaded",EventObject:new CustomEvent("board-loaded",{bubbles:!0,cancelable:!0})},BOARD_STABILIZED:{Name:"board-stabilized",EventObject:new CustomEvent("board-stabilized",{bubbles:!0,cancelable:!0})}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.getParams=void 0;var o=n(1),i=r(o);e.getParams=function(t){return t?(/^[?#]/.test(t)?t.slice(1):t).split("&").reduce(function(t,e){var n=e.split("="),r=(0,i.default)(n,2),o=r[0],u=r[1];return t[o]=u?decodeURIComponent(u.replace(/\+/g," ")):"",t},{}):{}}},function(t,e,n){var r=n(73);"string"==typeof r&&(r=[[t.id,r,""]]);n(75)(r,{});r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(74)(),e.push([t.id,"#app *{padding:0;margin:0}#gameoflifeboard{border-spacing:0;border-collapse:collapse;margin-top:5px}#app table td{width:15px;height:15px;border:1px solid gray}#app table td .cell{height:100%;width:100%}#app table td .alive{background-color:#000}#app table td .cell:hover{cursor:pointer}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var u=e[o];"number"==typeof u[0]&&r[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),t.push(u))}},t}},function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=h[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(f(r.parts[i],e))}else{for(var u=[],i=0;i<r.parts.length;i++)u.push(f(r.parts[i],e));h[r.id]={id:r.id,refs:1,parts:u}}}}function o(t){for(var e=[],n={},r=0;r<t.length;r++){var o=t[r],i=o[0],u=o[1],a=o[2],c=o[3],f={css:u,media:a,sourceMap:c};n[i]?n[i].parts.push(f):e.push(n[i]={id:i,parts:[f]})}return e}function i(t,e){var n=y(),r=b[b.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),b.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function u(t){t.parentNode.removeChild(t);var e=b.indexOf(t);e>=0&&b.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",i(t,e),e}function c(t){var e=document.createElement("link");return e.rel="stylesheet",i(t,e),e}function f(t,e){var n,r,o;if(e.singleton){var i=m++;n=g||(g=a(e)),r=s.bind(null,n,i,!1),o=s.bind(null,n,i,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),r=d.bind(null,n),o=function(){u(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(e),r=l.bind(null,n),o=function(){u(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}function s(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var i=document.createTextNode(o),u=t.childNodes;u[e]&&t.removeChild(u[e]),u.length?t.insertBefore(i,u[e]):t.appendChild(i)}}function l(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function d(t,e){var n=e.css,r=e.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=t.href;t.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var h={},p=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},v=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),y=p(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,m=0,b=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=v()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=o(t);return r(n,e),function(t){for(var i=[],u=0;u<n.length;u++){var a=n[u],c=h[a.id];c.refs--,i.push(c)}if(t){var f=o(t);r(f,e)}for(var u=0;u<i.length;u++){var c=i[u];if(0===c.refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete h[c.id]}}}};var w=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()}]);
//# sourceMappingURL=app.js.map