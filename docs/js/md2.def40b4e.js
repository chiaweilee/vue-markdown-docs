(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["md2"],{"0ae2":function(e,t,s){"use strict";var r=s("342f"),a=s.n(r);a.a},"342f":function(e,t,s){var r=s("63ec");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=s("85cb").default;a("73d0bbc1",r,!0,{sourceMap:!1,shadowMode:!1})},"63ec":function(e,t,s){t=e.exports=s("ed9b")(!1),t.push([e.i,"",""])},a777:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("h2",[e._v("Enmerate an object")]),s("h3",[e._v("for..in")]),s("p",[s("code",{pre:!0},[e._v("for...in")]),e._v(" iterate over "),s("code",{pre:!0},[e._v("all the enumerable properties")]),e._v(" of an object.\nIt traverses all enumerable properties of an object and "),s("code",{pre:!0},[e._v("its prototype chain")]),e._v(".")]),s("h3",[e._v("Object.keys()")]),s("p",[e._v("returns an "),s("code",{pre:!0},[e._v("array")]),e._v(" with all the own("),s("code",{pre:!0},[e._v("not in the prototype chain")]),e._v(") enumerable properties' names('keys') of an object.")]),s("h3",[e._v("Object.getOwnPropertyName()")]),s("p",[e._v("returns an "),s("code",{pre:!0},[e._v("array")]),e._v(" containing all own properties' names("),s("code",{pre:!0},[e._v("enumerable or not")]),e._v(") of an object.")]),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":"",class:"language-JavaScript"}},[s("span",{attrs:{class:"hljs-built_in"}},[e._v("Object")]),e._v(".getOwnPropertyNames(["),s("span",{attrs:{class:"hljs-string"}},[e._v("'a'")]),e._v(", "),s("span",{attrs:{class:"hljs-string"}},[e._v("'b'")]),e._v(", "),s("span",{attrs:{class:"hljs-number"}},[e._v("3")]),e._v("])\n"),s("span",{attrs:{class:"hljs-built_in"}},[e._v("Object")]),e._v(".getOwnPropertyNames({ "),s("span",{attrs:{class:"hljs-attr"}},[e._v("a")]),e._v(": "),s("span",{attrs:{class:"hljs-number"}},[e._v("1")]),e._v(", "),s("span",{attrs:{class:"hljs-attr"}},[e._v("b")]),e._v(": { "),s("span",{attrs:{class:"hljs-attr"}},[e._v("c")]),e._v(": "),s("span",{attrs:{class:"hljs-number"}},[e._v("3")]),e._v(" } })\n")])]),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":""}},[e._v("// result: ['0', '1', '2', 'length']\n// result: ['a', 'b']\n")])]),s("h3",[e._v("Object.assign()")]),s("p",[e._v("used to copy the values of all "),s("code",{pre:!0},[e._v("enumerable own properties")]),e._v(" from "),s("code",{pre:!0},[e._v("one or more")]),e._v(" source objects to a target object.\nIt will return return the target object.")]),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":"",class:"language-JavaScript"}},[s("span",{attrs:{class:"hljs-built_in"}},[e._v("Object")]),e._v(".assign({}, { "),s("span",{attrs:{class:"hljs-attr"}},[e._v("a")]),e._v(": "),s("span",{attrs:{class:"hljs-number"}},[e._v("1")]),e._v(" }, { "),s("span",{attrs:{class:"hljs-attr"}},[e._v("b")]),e._v(": "),s("span",{attrs:{class:"hljs-number"}},[e._v("2")]),e._v(" })\n")])]),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":""}},[e._v("// result: { a: 1, b: 2 }\n")])]),s("h4",[e._v("Warning for Deep Clone")]),s("p",[s("code",{pre:!0},[e._v("Object.assign()")]),e._v(" copies property values.\nIf the source value is a reference to an object, it only copies that reference value.")]),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":"",class:"language-JavaScript"}},[s("span",{attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" A = { "),s("span",{attrs:{class:"hljs-attr"}},[e._v("a")]),e._v(": "),s("span",{attrs:{class:"hljs-number"}},[e._v("0")]),e._v(", "),s("span",{attrs:{class:"hljs-attr"}},[e._v("b")]),e._v(": { "),s("span",{attrs:{class:"hljs-attr"}},[e._v("c")]),e._v(": "),s("span",{attrs:{class:"hljs-number"}},[e._v("0")]),e._v(" }}\n"),s("span",{attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" B = "),s("span",{attrs:{class:"hljs-built_in"}},[e._v("Object")]),e._v(".assign({}, A)\nA.a = "),s("span",{attrs:{class:"hljs-number"}},[e._v("1")]),e._v("\nB.a = "),s("span",{attrs:{class:"hljs-number"}},[e._v("2")]),e._v("\nA.b.c = "),s("span",{attrs:{class:"hljs-number"}},[e._v("3")]),e._v("\n"),s("span",{attrs:{class:"hljs-built_in"}},[e._v("console")]),e._v(".log(A)\n"),s("span",{attrs:{class:"hljs-built_in"}},[e._v("console")]),e._v(".log(B)\n")])]),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":""}},[e._v("// result: { a: 1, b: { c: 3} }\n// result: { a: 2, b: { c: 3} }\n")])]),s("h3",[e._v("Object.defineProperty()")]),s("p",[e._v("defines new or modifies existing property(s) directly on  an object, returning the object.")]),s("h3",[e._v("Descriptors")]),s("h4",[e._v("configurable")]),s("p",[s("code",{pre:!0},[e._v("true")]),e._v(" if and only if the type of this property "),s("code",{pre:!0},[e._v("descriptor may be changed and may be deleted")]),e._v(" from the corresponding object.\nDefaults to "),s("code",{pre:!0},[e._v("false")])]),s("h4",[e._v("enumerable")]),s("p",[s("code",{pre:!0},[e._v("true")]),e._v(" if and only if this property shows up during enumeration.\nDefaults to "),s("code",{pre:!0},[e._v("false")])]),s("h4",[e._v("get")]),s("p",[e._v("getter from the property, or "),s("code",{pre:!0},[e._v("undefined")]),e._v(" if no getter.\nWhen the property is "),s("code",{pre:!0},[e._v("accessed")]),e._v(", this function is called "),s("code",{pre:!0},[e._v("without arguments")]),e._v(" and with "),s("code",{pre:!0},[e._v("this")]),e._v(" set to the object through which the property is accessed.\nThe "),s("code",{pre:!0},[e._v("return value")]),e._v(" will be used as the value of the property.\nDefaults to "),s("code",{pre:!0},[e._v("undefined")])]),s("h4",[e._v("set")]),s("p",[e._v("setter for the property, or "),s("code",{pre:!0},[e._v("undefined")]),e._v(" if no setter.\nWhen the property is "),s("code",{pre:!0},[e._v("assigned to")]),e._v(", this function is called with "),s("code",{pre:!0},[e._v("one argument")]),e._v("(the value being assigned)\nand with "),s("code",{pre:!0},[e._v("this")]),e._v(" set to the object through which the property is assigned.")]),s("pre",{pre:!0},[s("code",{attrs:{"v-pre":"",class:"language-JavaScript"}},[s("span",{attrs:{class:"hljs-keyword"}},[e._v("var")]),e._v(" value\n"),s("span",{attrs:{class:"hljs-built_in"}},[e._v("Object")]),e._v(".definedProperty(object, "),s("span",{attrs:{class:"hljs-string"}},[e._v("'key'")]),e._v(", {\n    "),s("span",{attrs:{class:"hljs-attr"}},[e._v("enumerable")]),e._v(": "),s("span",{attrs:{class:"hljs-literal"}},[e._v("true")]),e._v(",\n    "),s("span",{attrs:{class:"hljs-attr"}},[e._v("configurable")]),e._v(": "),s("span",{attrs:{class:"hljs-literal"}},[e._v("true")]),e._v(",\n    "),s("span",{attrs:{class:"hljs-attr"}},[e._v("get")]),e._v(": "),s("span",{attrs:{class:"hljs-function"}},[s("span",{attrs:{class:"hljs-keyword"}},[e._v("function")]),e._v(" ("),s("span",{attrs:{class:"hljs-params"}}),e._v(") ")]),e._v("{\n        "),s("span",{attrs:{class:"hljs-keyword"}},[e._v("return")]),e._v(" value\n    },\n    "),s("span",{attrs:{class:"hljs-attr"}},[e._v("set")]),e._v(": "),s("span",{attrs:{class:"hljs-function"}},[s("span",{attrs:{class:"hljs-keyword"}},[e._v("function")]),e._v(" ("),s("span",{attrs:{class:"hljs-params"}},[e._v("to")]),e._v(") ")]),e._v("{\n        value = to\n    }\n})\n")])])])}],n=(s("3a0f"),s("a3a3"),s("4d0b"),s("b1c7")),o={mounted:function(){this.$emit("markdown",Object(n["b"])(this.$root.$el)),Object(n["a"])()}},c=o,l=(s("0ae2"),s("048f")),v=Object(l["a"])(c,r,a,!1,null,null,null);v.options.__file="Enumerate-an-object.md";t["default"]=v.exports},b1c7:function(e,t,s){"use strict";s.d(t,"b",function(){return r}),s.d(t,"a",function(){return a});s("25d7");(function(e){e.forEach(function(e){e.prepend=e.prepend||function(){var e=Array.prototype.slice.call(arguments),t=document.createDocumentFragment();e.forEach(function(e){var s=e instanceof Node;t.appendChild(s?e:document.createTextNode(String(e)))}),this.insertBefore(t,this.firstChild)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]);var r=function(e){var t=[];return["h1","h2","h3"].map(function(s){e.querySelectorAll(s).forEach(function(e){var r="#".concat(e.innerText);t.push({tag:s,text:e.innerText,href:r});var a=document.createElement("a");a.innerText="#",a.className="header-anchor",a.href=r,e.prepend(a)})}),t};window.addEventListener("click",function(e){var t=e.target;"A"===t.tagName&&t.hash&&a(t.hash)});var a=function(e){var t=document.querySelector(".content").querySelector('a[href="'+decodeURI(e||location.hash)+'"]');t&&window.scrollTo({top:t.parentNode.offsetTop-parseInt(t.parentNode.clientHeight)/2-document.querySelector("header").clientHeight,behavior:"smooth"})}}}]);