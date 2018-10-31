(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["md4"],{"1d53":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("h2",[e._v("Headers and Caching")]),r("h3",[e._v("Expires")]),r("p",[r("code",{pre:!0},[e._v("HTTP/1.0")])]),r("p",[r("em",[e._v("Invalid dates, like 0 mean already expired")])]),r("pre",{pre:!0},[r("code",{attrs:{"v-pre":""}},[e._v("Expires: Wed, 21 Oct 2015 07:28:00 GMT\n")])]),r("h3",[e._v("Cache-Control")]),r("p",[r("code",{pre:!0},[e._v("HTTP/1.1")])]),r("h4",[e._v("max-age=<"),r("code",{pre:!0},[e._v("seconds")]),e._v(">")]),r("h3",[e._v("Etag & If-none-match")]),r("p",[e._v("Server compares "),r("code",{pre:!0},[e._v("ETag")]),e._v(" with the "),r("code",{pre:!0},[e._v("Etag")]),e._v(" of the resource, server send back a "),r("code",{pre:!0},[e._v("304 Not Modified")]),e._v(" if cache is still fresh.")]),r("h4",[e._v("304 Not Modified")]),r("p",[e._v("maximum time a resource will be considered fresh.")]),r("h3",[e._v("Last-Modified")]),r("p",[e._v("contains date and time which server believes resource was last modified.")]),r("p",[r("code",{pre:!0},[e._v("Less accurate")]),e._v(" than "),r("code",{pre:!0},[e._v("ETag")])]),r("h3",[e._v("HTTP/2")]),r("ul",[r("li",[e._v("Longer-lived connection")]),r("li",[e._v("Request and response multiplexing within a shared connection")]),r("li",[e._v("HPACK - Header Compression")]),r("li",[e._v("Server push resources")])])])}],a=(r("3a0f"),r("a3a3"),r("4d0b"),r("b1c7")),c={mounted:function(){this.$emit("markdown",Object(a["b"])(this.$root.$el)),Object(a["a"])()}},i=c,d=(r("d004"),r("048f")),s=Object(d["a"])(i,n,o,!1,null,null,null);s.options.__file="Headers-and-Caching.md";t["default"]=s.exports},"821e":function(e,t,r){var n=r("99da");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=r("85cb").default;o("7f977c2e",n,!0,{sourceMap:!1,shadowMode:!1})},"99da":function(e,t,r){t=e.exports=r("ed9b")(!1),t.push([e.i,"",""])},b1c7:function(e,t,r){"use strict";r.d(t,"b",function(){return n}),r.d(t,"a",function(){return o});r("25d7");(function(e){e.forEach(function(e){e.prepend=e.prepend||function(){var e=Array.prototype.slice.call(arguments),t=document.createDocumentFragment();e.forEach(function(e){var r=e instanceof Node;t.appendChild(r?e:document.createTextNode(String(e)))}),this.insertBefore(t,this.firstChild)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]);var n=function(e){var t=[];return["h1","h2","h3"].map(function(r){e.querySelectorAll(r).forEach(function(e){var n="#".concat(e.innerText);t.push({tag:r,text:e.innerText,href:n});var o=document.createElement("a");o.innerText="#",o.className="header-anchor",o.href=n,e.prepend(o)})}),t};window.addEventListener("click",function(e){var t=e.target;"A"===t.tagName&&t.hash&&o(t.hash)});var o=function(e){var t=document.querySelector(".content").querySelector('a[href="'+decodeURI(e||location.hash)+'"]');t&&window.scrollTo({top:t.parentNode.offsetTop-parseInt(t.parentNode.clientHeight)/2-document.querySelector("header").clientHeight,behavior:"smooth"})}},d004:function(e,t,r){"use strict";var n=r("821e"),o=r.n(n);o.a}}]);