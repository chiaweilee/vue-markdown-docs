(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["md11"],{"509c":function(e,t,r){t=e.exports=r("ed9b")(!1),t.push([e.i,"",""])},"6e32":function(e,t,r){var n=r("509c");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=r("85cb").default;o("24323d20",n,!0,{sourceMap:!1,shadowMode:!1})},b1c7:function(e,t,r){"use strict";r.d(t,"b",function(){return n}),r.d(t,"a",function(){return o});r("25d7");(function(e){e.forEach(function(e){e.prepend=e.prepend||function(){var e=Array.prototype.slice.call(arguments),t=document.createDocumentFragment();e.forEach(function(e){var r=e instanceof Node;t.appendChild(r?e:document.createTextNode(String(e)))}),this.insertBefore(t,this.firstChild)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]);var n=function(e){var t=[];return["h1","h2","h3"].map(function(r){e.querySelectorAll(r).forEach(function(e){var n="#".concat(e.innerText);t.push({tag:r,text:e.innerText,href:n});var o=document.createElement("a");o.innerText="#",o.className="header-anchor",o.href=n,e.prepend(o)})}),t};window.addEventListener("click",function(e){var t=e.target;"A"===t.tagName&&t.hash&&o(t.hash)});var o=function(e){var t=document.querySelector(".content").querySelector('a[href="'+decodeURI(e||location.hash)+'"]');t&&window.scrollTo({top:t.parentNode.offsetTop-parseInt(t.parentNode.clientHeight)/2-document.querySelector("header").clientHeight,behavior:"smooth"})}},bf22:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("h2",[e._v("Set")]),r("p",[r("code",{pre:!0},[e._v("Set")]),e._v(" object store unique values of "),r("code",{pre:!0},[e._v("any type")]),e._v(", whether "),r("code",{pre:!0},[e._v("primitive values")]),e._v(" or "),r("code",{pre:!0},[e._v("object references")]),e._v(".")]),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":"",class:"language-JavaScript"}},[e._v("const set = new Set([1, 1, 2, 2, 3, 4])\nset.add(2)\nset.delete(1)\nconsole.log(set.has(1))\nconsole.log(set.has(5))\nconsole.log(set)\n")])]),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("// result: true false [2, 3, 4]\n")])]),r("h3",[e._v(".has()")]),r("p",[r("code",{pre:!0},[e._v("has()")]),e._v(" returns a boolean whether an element value exists in a "),r("code",{pre:!0},[e._v("Set")]),e._v(".")]),r("h3",[e._v(".add()")]),r("h3",[e._v(".clear()")]),r("h3",[e._v(".delete()")]),r("h3",[e._v("Array.filter")]),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":"",class:"language-JavaScript"}},[e._v("[1, 1, 2, 2, 3, 4].filter((element, index, array) => array.indexOf(element) === index)\n")])]),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("// result: [1, 2, 3, 4]\n")])])])}],a=r("b1c7"),c={mounted:function(){this.$emit("markdown",Object(a["b"])(this.$root.$el)),Object(a["a"])()}},s=c,i=(r("c8f9"),r("048f")),l=Object(i["a"])(s,n,o,!1,null,null,null);l.options.__file="Set.md";t["default"]=l.exports},c8f9:function(e,t,r){"use strict";var n=r("6e32"),o=r.n(n);o.a}}]);