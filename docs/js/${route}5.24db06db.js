(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["${route}5","${route}13"],{b1c7:function(e,t,o){"use strict";o.r(t),o.d(t,"refactorHn",function(){return n}),o.d(t,"goHash",function(){return r});o("25d7"),o("3a0f"),o("a3a3"),o("4d0b");(function(e){e.forEach(function(e){e.prepend=e.prepend||function(){var e=Array.prototype.slice.call(arguments),t=document.createDocumentFragment();e.forEach(function(e){var o=e instanceof Node;t.appendChild(o?e:document.createTextNode(String(e)))}),this.insertBefore(t,this.firstChild)}})})([Element.prototype,Document.prototype,DocumentFragment.prototype]);var n=function(e){var t=[];return["h1","h2","h3"].map(function(o){e.querySelectorAll(o).forEach(function(e){var n="#".concat(e.innerText);t.push({tag:o,text:e.innerText,href:n});var r=document.createElement("a");r.innerText="#",r.className="header-anchor",r.href=n,e.prepend(r)})}),t};window.addEventListener("click",function(e){var t=e.target;"A"===t.tagName&&t.hash&&r(t.hash)});var r=function(e){var t=document.querySelector(".content").querySelector('a[href="'+decodeURI(e||location.hash)+'"]');t&&window.scrollTo({top:t.parentNode.offsetTop-parseInt(t.parentNode.clientHeight)/2-document.querySelector("header").clientHeight,behavior:"smooth"})}},db12:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",[o("h1",[e._v("vue-devtools")]),o("h3",[e._v("Important Usage Notes")]),o("ol",[o("li",[o("p",[e._v("If the page uses a production/minified build of Vue.js, devtools inspection is disabled by default so the Vue pane won't show up.")])]),o("li",[o("p",[e._v("To make it work for pages opened via "),o("code",{pre:!0},[e._v("file://")]),e._v(' protocol, you need to check "Allow access to file URLs" for this extension in Chrome\'s extension management panel.')])])]),o("p",{attrs:{align:"center"}},[o("img",{attrs:{width:"720px",src:"https://raw.githubusercontent.com/vuejs/vue-devtools/master/media/screenshot-shadow.png",alt:"screenshot"}})]),o("p",[e._v("Works with "),o("a",{attrs:{href:"https://github.com/vuejs/vuex"}},[e._v("vuex")]),e._v(" for time-travel debugging:")]),o("p",{attrs:{align:"center"}},[o("img",{attrs:{width:"600px",src:"https://raw.githubusercontent.com/vuejs/vue-devtools/master/media/demo.gif",alt:"demo"}})]),o("h3",[e._v("Installation")]),o("ul",[o("li",[o("p",[o("a",{attrs:{href:"https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd"}},[e._v("Get the Chrome Extension")]),e._v(" ("),o("a",{attrs:{href:"https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg"}},[e._v("beta")]),e._v(")")])]),o("li",[o("p",[o("a",{attrs:{href:"https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/"}},[e._v("Get the Firefox Addon")]),e._v(" ("),o("a",{attrs:{href:"https://github.com/vuejs/vue-devtools/releases"}},[e._v("beta")]),e._v(")")])]),o("li",[o("p",[o("a",{attrs:{href:"https://github.com/vuejs/vue-devtools/blob/master/shells/electron/README.md"}},[e._v("Get standalone Electron app (works with any environment!)")])])])]),o("h4",[e._v("Open component in editor")]),o("p",[e._v("To enable this feature, follow "),o("a",{attrs:{href:"./docs/open-in-editor.md"}},[e._v("this guide")]),e._v(".")]),o("h3",[e._v("Manual Installation")]),o("p",[o("strong",[e._v("Make sure you are using Node 6+ and NPM 3+")])]),o("ol",[o("li",[e._v("Clone this repo")]),o("li",[o("code",{pre:!0},[e._v("npm install")]),e._v(" (Or "),o("code",{pre:!0},[e._v("yarn install")]),e._v(" if you are using yarn as the package manager)")]),o("li",[o("code",{pre:!0},[e._v("npm run build")])]),o("li",[e._v("Open Chrome extension page")]),o("li",[e._v('Check "developer mode"')]),o("li",[e._v('Click "load unpacked extension", and choose '),o("code",{pre:!0},[e._v("shells/chrome")]),e._v(".")])]),o("h3",[e._v("Hacking")]),o("ol",[o("li",[e._v("Clone this repo")]),o("li",[o("code",{pre:!0},[e._v("npm install")])]),o("li",[o("code",{pre:!0},[e._v("npm run dev")])]),o("li",[e._v("A plain shell with a test app will be available at "),o("code",{pre:!0},[e._v("localhost:8100")]),e._v(".")])]),o("h3",[e._v("Testing as Firefox addon")]),o("ol",[o("li",[o("p",[e._v("Install "),o("code",{pre:!0},[e._v("web-ext")])]),o("pre",{pre:!0},[o("code",{attrs:{"v-pre":""}},[e._v("$ npm install --global web-ext\n")])]),o("p",[e._v("Or, for Yarn:")]),o("pre",{pre:!0},[o("code",{attrs:{"v-pre":""}},[e._v("$ yarn global add web-ext\n")])]),o("p",[e._v("Also, make sure "),o("code",{pre:!0},[e._v("PATH")]),e._v(" is set up. Something like this in "),o("code",{pre:!0},[e._v("~/.bash_profile")]),e._v(":")]),o("pre",{pre:!0},[o("code",{attrs:{"v-pre":""}},[e._v("$ PATH=$PATH:$(yarn global bin)\n")])])]),o("li",[o("p",[e._v("Build and run in Firefox")]),o("pre",{pre:!0},[o("code",{attrs:{"v-pre":""}},[e._v("$ npm run build\n$ npm run run:firefox\n")])]),o("p",[e._v("When using Yarn, just replace "),o("code",{pre:!0},[e._v("npm")]),e._v(" with "),o("code",{pre:!0},[e._v("yarn")]),e._v(".")])])]),o("h3",[e._v("Common problems and how to fix")]),o("ol",[o("li",[o("p",[e._v('Fixing "Download the Vue Devtools for a better development experience" console message when working locally over '),o("code",{pre:!0},[e._v("file://")]),e._v(' protocol:\n1.1 - Google Chrome: Right click on vue-devtools icon and click "Manage Extensions" then search for vue-devtools on the extensions list. Check the "Allow access to file URLs" box.')])]),o("li",[o("p",[e._v("How to use the devtools in IE/Edge/Safari or any other browser? "),o("a",{attrs:{href:"https://github.com/vuejs/vue-devtools/blob/master/shells/electron/README.md"}},[e._v("Get the standalone Electron app (works with any environment!)")])])])]),o("h3",[e._v("License")]),o("p",[o("a",{attrs:{href:"http://opensource.org/licenses/MIT"}},[e._v("MIT")])])])}],a=o("b1c7"),s={mounted:function(){this.$emit("markdown",Object(a["refactorHn"])(this.$root.$el)),Object(a["goHash"])()}},i=s,l=o("048f"),c=Object(l["a"])(i,n,r,!1,null,null,null);c.options.__file="vue-devtools.md";t["default"]=c.exports}}]);
//# sourceMappingURL=${route}5.24db06db.js.map