(function(n){function e(e){for(var t,i,s=e[0],d=e[1],l=e[2],c=0,m=[];c<s.length;c++)i=s[c],r[i]&&m.push(r[i][0]),r[i]=0;for(t in d)Object.prototype.hasOwnProperty.call(d,t)&&(n[t]=d[t]);p&&p(e);while(m.length)m.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var n,e=0;e<a.length;e++){for(var o=a[e],t=!0,i=1;i<o.length;i++){var d=o[i];0!==r[d]&&(t=!1)}t&&(a.splice(e--,1),n=s(s.s=o[0]))}return n}var t={},r={app:0},a=[];function i(n){return s.p+"js/"+({md11:"md11",md2:"md2",md3:"md3",md4:"md4",md5:"md5",md6:"md6",md7:"md7",md8:"md8",md9:"md9"}[n]||n)+"."+{md11:"62319644",md2:"ce325332",md3:"87d66a9a",md4:"35870de2",md5:"c9cedbc0",md6:"87dc1b18",md7:"015f2571",md8:"03130e1d",md9:"552ae103"}[n]+".js"}function s(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(n){var e=[],o=r[n];if(0!==o)if(o)e.push(o[2]);else{var t=new Promise(function(e,t){o=r[n]=[e,t]});e.push(o[2]=t);var a,d=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(n),a=function(e){l.onerror=l.onload=null,clearTimeout(c);var o=r[n];if(0!==o){if(o){var t=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,i=new Error("Loading chunk "+n+" failed.\n("+t+": "+a+")");i.type=t,i.request=a,o[1](i)}r[n]=void 0}};var c=setTimeout(function(){a({type:"timeout",target:l})},12e4);l.onerror=l.onload=a,d.appendChild(l)}return Promise.all(e)},s.m=n,s.c=t,s.d=function(n,e,o){s.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},s.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},s.t=function(n,e){if(1&e&&(n=s(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)s.d(o,t,function(e){return n[e]}.bind(null,t));return o},s.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return s.d(e,"a",e),e},s.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},s.p="/vue-markdown-docs/",s.oe=function(n){throw console.error(n),n};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=e,d=d.slice();for(var c=0;c<d.length;c++)e(d[c]);var p=l;a.push([0,"chunk-vendors"]),o()})({0:function(n,e,o){n.exports=o("56d7")},"034f":function(n,e,o){"use strict";var t=o("d829"),r=o.n(t);r.a},"3dfd":function(n,e,o){"use strict";o.r(e);var t=function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("div",{attrs:{id:"app"}},[o("navbar"),o("sidebar",{attrs:{markdown:n.markdown}}),o("page",{on:{markdown:n.getMarkdown}})],1)},r=[],a=o("f454"),i=o("68c4"),s=o("e348"),d={name:"App",data:function(){return{markdown:[]}},methods:{getMarkdown:function(n){this.markdown=n}},components:{navbar:a["default"],sidebar:i["default"],page:s["default"]}},l=d,c=(o("034f"),o("048f")),p=Object(c["a"])(l,t,r,!1,null,null,null);p.options.__file="App.vue";e["default"]=p.exports},"41cb":function(n,e,o){"use strict";o.r(e);o("cf54"),o("dc2a"),o("25d7"),o("3a0f"),o("a3a3"),o("4d0b");var t=o("329b"),r=o("b8e5"),a=o("5665"),i=o("710a");t["a"].use(r["a"]);var s=function(n){return/\/([^/]+)\.[^/]+$/i.exec(n)},d=[],l=function n(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=[];return Object.keys(e).forEach(function(a){var l=s(a);if(l){var c=l[1];e[a].default&&d.unshift({path:"/",redirect:{name:c}}),r.push({path:t?"/".concat(c):c,name:c,meta:{title:e[a].title},component:function(){return o("d43f")("".concat(a))}})}else r.push({path:"/".concat(a),meta:{name:a},component:i["default"],children:n(e[a],!1)})}),r},c=function(n){var e=l(n);return d[0]&&e.unshift(d[0]),e},p=new r["a"]({base:"/vue-markdown-docs/",mode:"history",routes:c(a["default"]),scrollBehavior:function(n,e){if(n.name!==e.name)return{x:0,y:0}}}),m=document.title;p.beforeEach(function(n,e,o){o()}),p.afterEach(function(n,e){document.title=(n.meta.title?"".concat(n.meta.title).concat(m?" — ".concat(m):""):null)||m}),e["default"]=p},"4fe5":function(n,e,o){"use strict";o.r(e);var t=function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("ul",{staticClass:"sidebar-links"},[o("li",[o("div",{staticClass:"sidebar-group first"},[o("p",{staticClass:"sidebar-heading open"},[o("span",{domProps:{textContent:n._s(n.title)}})]),o("ul",{staticClass:"sidebar-group-items"},n._l(n.markdown,function(e){return o("li",{key:e.href,class:"sidebar-group-"+e.tag},[o("router-link",{staticClass:"sidebar-link",attrs:{to:e.href}},[n._v(n._s(e.text))])],1)}))])])])},r=[],a={name:"Links",props:{markdown:{type:Array,required:!0}},computed:{title:function(){return this.$route.meta.title}}},i=a,s=o("048f"),d=Object(s["a"])(i,t,r,!1,null,null,null);d.options.__file="links.vue";e["default"]=d.exports},5665:function(n,e,o){"use strict";o.r(e);o("3a0f"),o("a3a3"),o("4d0b");e["default"]={"./components/Introduction.md":{title:"Introduction",default:!0},Demo:{"./components/Demo/vue.md":{title:"Vue README"},"./components/Demo/vuex.md":{title:"Vuex README"},"./components/Demo/vue-router.md":{title:"Vue-Router README"},"./components/Demo/vuejs.org.md":{title:"Vuejs.org README"},"./components/Demo/vue-devtools.md":{title:"Vue-DevTools README"}}}},"56d7":function(n,e,o){"use strict";o.r(e);o("3a0f"),o("a3a3"),o("4d0b");var t=o("329b"),r=o("3dfd"),a=o("41cb"),i=o("9e64");t["a"].config.productionTip=!1,t["a"].component("routes-map",i["default"]),new t["a"]({router:a["default"],render:function(n){return n(r["default"])}}).$mount("#app")},"68c4":function(n,e,o){"use strict";o.r(e);var t=function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("div",{staticClass:"sidebar"},[o("route-map",{attrs:{routes:n.routes}}),o("links",{attrs:{markdown:n.markdown}})],1)},r=[],a=(o("25d7"),o("9e64")),i=o("4fe5"),s={name:"SideBar",components:{routeMap:a["default"],links:i["default"]},props:{markdown:{type:Array,required:!0}},computed:{routes:function(){var n=[];return this.$router.options.routes.forEach(function(e){(e.hasOwnProperty("name")||e.hasOwnProperty("children"))&&n.push(e)}),n}}},d=s,l=o("048f"),c=Object(l["a"])(d,t,r,!1,null,null,null);c.options.__file="sidebar.vue";e["default"]=c.exports},"710a":function(n,e,o){"use strict";o.r(e);var t=function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("router-view",{on:{markdown:n.emit}})},r=[],a={methods:{emit:function(n){this.$emit("markdown",n)}}},i=a,s=o("048f"),d=Object(s["a"])(i,t,r,!1,null,null,null);d.options.__file="routerView.vue";e["default"]=d.exports},9224:function(n){n.exports={a:"vue-markdown-docs",b:"0.1.0"}},"9e64":function(n,e,o){"use strict";o.r(e);var t=function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("nav",{staticClass:"nav-links"},[n._l(n.routes,function(e){return[e.hasOwnProperty("children")?o("dd",{key:e.path,staticClass:"nav-item"},[o("div",{staticClass:"dropdown-title"},[n._v(n._s(e.meta.name))]),o("routes-map",{attrs:{routes:e.children}})],1):o("dd",{key:e.path,staticClass:"nav-item"},[o("router-link",{staticClass:"nav-link",attrs:{to:{name:e.name}}},[n._v("\n        "+n._s(e.title||e.name)+"\n      ")])],1)]})],2)},r=[],a={name:"RoutesMap",props:{routes:{type:Array,required:!0}}},i=a,s=o("048f"),d=Object(s["a"])(i,t,r,!1,null,null,null);d.options.__file="routesMap.vue";e["default"]=d.exports},b104:function(n,e,o){e=n.exports=o("ed9b")(!1),e.push([n.i,'\n.home{padding:3.6rem 2rem 0;max-width:960px;margin:0 auto\n}\n.home .hero{text-align:center\n}\n.home .hero img{max-height:280px;display:block;margin:3rem auto 1.5rem\n}\n.home .hero h1{font-size:3rem\n}\n.home .hero .action,.home .hero .description,.home .hero h1{margin:1.8rem auto\n}\n.home .hero .description{max-width:35rem;font-size:1.6rem;line-height:1.3;color:#6a8bad\n}\n.home .hero .action-button{display:inline-block;font-size:1.2rem;color:#fff;background-color:#0984e3;padding:.8rem 1.6rem;border-radius:4px;-webkit-transition:background-color .1s ease;transition:background-color .1s ease;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:1px solid #0877cc\n}\n.home .hero .action-button:hover{background-color:#1292f6\n}\n.home .features{border-top:1px solid #eaecef;padding:1.2rem 0;margin-top:2.5rem;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between\n}\n.home .feature{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-preferred-size:30%;flex-basis:30%;max-width:30%\n}\n.home .feature h2{font-size:1.4rem;font-weight:500;border-bottom:none;padding-bottom:0;color:#3a5169\n}\n.home .feature p{color:#4e6e8e\n}\n.home .footer{padding:2.5rem;border-top:1px solid #eaecef;text-align:center;color:#4e6e8e\n}\n@media (max-width:719px){\n.home .features{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column\n}\n.home .feature{max-width:100%;padding:0 2.5rem\n}\n}\n@media (max-width:419px){\n.home{padding-left:1.5rem;padding-right:1.5rem\n}\n.home .hero img{max-height:210px;margin:2rem auto 1.2rem\n}\n.home .hero h1{font-size:2rem\n}\n.home .hero .action,.home .hero .description,.home .hero h1{margin:1.2rem auto\n}\n.home .hero .description{font-size:1.2rem\n}\n.home .hero .action-button{font-size:1rem;padding:.6rem 1.2rem\n}\n.home .feature h2{font-size:1.25rem\n}\n}\n.sidebar-button{display:none;width:1.25rem;height:1.25rem;position:absolute;padding:.6rem;top:.6rem;left:1rem\n}\n.sidebar-button .icon{display:block;width:1.25rem;height:1.25rem\n}\n@media (max-width:719px){\n.sidebar-button{display:block\n}\n}\n.search-box{display:inline-block;position:relative;margin-right:1rem\n}\n.search-box input{cursor:text;width:10rem;color:#4e6e8e;display:inline-block;border:1px solid #cfd4db;border-radius:2rem;font-size:.9rem;line-height:2rem;padding:0 .5rem 0 2rem;outline:none;-webkit-transition:all .2s ease;transition:all .2s ease;background-size:1rem\n}\n.search-box input:focus{cursor:auto;border-color:#0984e3\n}\n.search-box .suggestions{background:#fff;width:20rem;position:absolute;top:1.5rem;border:1px solid #cfd4db;border-radius:6px;padding:.4rem;list-style-type:none\n}\n.search-box .suggestions.align-right{right:0\n}\n.search-box .suggestion{line-height:1.4;padding:.4rem .6rem;border-radius:4px;cursor:pointer\n}\n.search-box .suggestion a{white-space:normal;color:#5d82a6\n}\n.search-box .suggestion a .page-title{font-weight:600\n}\n.search-box .suggestion a .header{font-size:.9em;margin-left:.25em\n}\n.search-box .suggestion.focused{background-color:#f3f4f5\n}\n.search-box .suggestion.focused a{color:#0984e3\n}\n@media (max-width:959px){\n.search-box input{cursor:pointer;width:0;border-color:transparent;position:relative\n}\n.search-box input:focus{cursor:text;left:0;width:10rem\n}\n}\n@media (max-width:959px) and (min-width:719px){\n.search-box .suggestions{left:0\n}\n}\n@media (max-width:719px){\n.search-box{margin-right:0\n}\n.search-box input{left:1rem\n}\n.search-box .suggestions{right:0\n}\n}\n@media (max-width:419px){\n.search-box .suggestions{width:calc(100vw - 4rem)\n}\n.search-box input:focus{width:8rem\n}\n}\n.dropdown-enter,.dropdown-leave-to{height:0!important\n}\n.dropdown-wrapper{cursor:pointer\n}\n.dropdown-wrapper .dropdown-title{display:block\n}\n.dropdown-wrapper .dropdown-title:hover{border-color:transparent\n}\n.dropdown-wrapper .dropdown-title .arrow{vertical-align:middle;margin-top:-1px;margin-left:.4rem\n}\n.dropdown-wrapper .nav-dropdown .dropdown-item{color:inherit;line-height:1.7rem\n}\n.dropdown-wrapper .nav-dropdown .dropdown-item h4{margin:.45rem 0 0;border-top:1px solid #eee;padding:.45rem 1.5rem 0 1.25rem\n}\n.dropdown-wrapper .nav-dropdown .dropdown-item .dropdown-subitem-wrapper{padding:0;list-style:none\n}\n.dropdown-wrapper .nav-dropdown .dropdown-item .dropdown-subitem-wrapper .dropdown-subitem{font-size:.9em\n}\n.dropdown-wrapper .nav-dropdown .dropdown-item a{display:block;line-height:1.7rem;position:relative;border-bottom:none;font-weight:400;margin-bottom:0;padding:0 1.5rem 0 1.25rem\n}\n.dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active,.dropdown-wrapper .nav-dropdown .dropdown-item a:hover{color:#0984e3\n}\n.dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active:after{content:"";width:0;height:0;border-left:5px solid #0984e3;border-top:3px solid transparent;border-bottom:3px solid transparent;position:absolute;top:calc(50% - 2px);left:9px\n}\n.dropdown-wrapper .nav-dropdown .dropdown-item:first-child h4{margin-top:0;padding-top:0;border-top:0\n}\n@media (max-width:719px){\n.dropdown-wrapper.open .dropdown-title{margin-bottom:.5rem\n}\n.dropdown-wrapper .nav-dropdown{-webkit-transition:height .1s ease-out;transition:height .1s ease-out;overflow:hidden\n}\n.dropdown-wrapper .nav-dropdown .dropdown-item h4{border-top:0;margin-top:0;padding-top:0\n}\n.dropdown-wrapper .nav-dropdown .dropdown-item>a,.dropdown-wrapper .nav-dropdown .dropdown-item h4{font-size:15px;line-height:2rem\n}\n.dropdown-wrapper .nav-dropdown .dropdown-item .dropdown-subitem{font-size:14px;padding-left:1rem\n}\n}\n@media (min-width:719px){\n.dropdown-wrapper{height:1.8rem\n}\n.dropdown-wrapper:hover .nav-dropdown{display:block!important\n}\n.dropdown-wrapper .dropdown-title .arrow{border-left:4px solid transparent;border-right:4px solid transparent;border-top:6px solid #ccc;border-bottom:0\n}\n.dropdown-wrapper .nav-dropdown{display:none;height:auto!important;-webkit-box-sizing:border-box;box-sizing:border-box;max-height:calc(100vh - 2.7rem);overflow-y:auto;position:absolute;top:100%;right:0;background-color:#fff;padding:.6rem 0;border:1px solid #ddd;border-bottom-color:#ccc;text-align:left;border-radius:.25rem;white-space:nowrap;margin:0\n}\n}\n.nav-links{display:inline-block\n}\n.nav-links a{line-height:1.4rem;color:inherit\n}\n.nav-links a.router-link-active,.nav-links a:hover{color:#0984e3\n}\n.nav-links .nav-item{position:relative;display:inline-block;margin-left:1.5rem;line-height:2rem;margin-left:0\n}\n.nav-links .repo-link{margin-left:1.5rem\n}\n@media (max-width:719px){\n.nav-links .nav-item,.nav-links .repo-link{margin-left:0\n}\n}\n@media (min-width:719px){\n.nav-links a.router-link-active,.nav-links a:hover{color:#2c3e50\n}\n.nav-item>a:not(.external).router-link-active,.nav-item>a:not(.external):hover{margin-bottom:-2px;border-bottom:2px solid #0d90f5\n}\n}\n.navbar{padding:.7rem 1.5rem;line-height:2.2rem;position:relative\n}\n.navbar a,.navbar img,.navbar span{display:inline-block\n}\n.navbar .logo{height:2.2rem;min-width:2.2rem;margin-right:.8rem;vertical-align:top\n}\n.navbar .site-name{font-size:1.3rem;font-weight:600;color:#2c3e50;position:relative\n}\n.navbar .links{padding-left:1.5rem;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff;white-space:nowrap;font-size:.9rem;position:absolute;right:1.5rem;top:.7rem;display:-webkit-box;display:-ms-flexbox;display:flex\n}\n.navbar .links .search-box{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;vertical-align:top\n}\n.navbar .links .nav-links{-webkit-box-flex:1;-ms-flex:1;flex:1\n}\n@media (max-width:719px){\n.navbar{padding-left:4rem\n}\n.navbar .can-hide{display:none\n}\n.navbar .links{padding-left:1.5rem\n}\n}\n.page-edit,.page-nav{max-width:740px;margin:0 auto;padding:2rem 2.5rem\n}\n@media (max-width:959px){\n.page-edit,.page-nav{padding:2rem\n}\n}\n@media (max-width:419px){\n.page-edit,.page-nav{padding:1.5rem\n}\n}\n.page{padding-bottom:2rem\n}\n.page-edit{padding-top:1rem;padding-bottom:1rem;overflow:auto\n}\n.page-edit .edit-link{display:inline-block\n}\n.page-edit .edit-link a{color:#4e6e8e;margin-right:.25rem\n}\n.page-edit .last-updated{float:right;font-size:.9em\n}\n.page-edit .last-updated .prefix{font-weight:500;color:#4e6e8e\n}\n.page-edit .last-updated .time{font-weight:400;color:#aaa\n}\n.page-nav{padding-top:1rem;padding-bottom:0\n}\n.page-nav .inner{min-height:2rem;margin-top:0;border-top:1px solid #eaecef;padding-top:1rem;overflow:auto\n}\n.page-nav .next{float:right\n}\n@media (max-width:719px){\n.page-edit .edit-link{margin-bottom:.5rem\n}\n.page-edit .last-updated{font-size:.8em;float:none;text-align:left\n}\n}\n.sidebar .sidebar-sub-headers{padding-left:1rem;font-size:.95em\n}\na.sidebar-link{font-weight:400;display:inline-block;color:#2c3e50;border-left:.25rem solid transparent;padding:.35rem 1rem .35rem 1.25rem;line-height:1.4;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box\n}\na.sidebar-link:hover{color:#0984e3\n}\na.sidebar-link.active{font-weight:600;color:#0984e3;border-left-color:#0984e3\n}\n.sidebar-group a.sidebar-link{padding-left:2rem\n}\n.sidebar-sub-headers a.sidebar-link{padding-top:.25rem;padding-bottom:.25rem;border-left:none\n}\n.sidebar-sub-headers a.sidebar-link.active{font-weight:500\n}\n.sidebar-group:not(.first){margin-top:1em\n}\n.sidebar-group .sidebar-group{padding-left:.5em\n}\n.sidebar-group:not(.collapsable) .sidebar-heading{cursor:auto;color:inherit\n}\n.sidebar-heading{color:#999;-webkit-transition:color .15s ease;transition:color .15s ease;cursor:pointer;font-size:1.1em;font-weight:700;padding:0 1.5rem;margin-top:0;margin-bottom:.5rem\n}\n.sidebar-heading.open,.sidebar-heading:hover{color:inherit\n}\n.sidebar-heading .arrow{position:relative;top:-.12em;left:.5em\n}\n.sidebar-heading .open .arrow{top:-.18em\n}\n.sidebar-group-items{-webkit-transition:height .1s ease-out;transition:height .1s ease-out;overflow:hidden\n}\n.sidebar ul{padding:0;margin:0;list-style-type:none\n}\n.sidebar a{display:inline-block\n}\n.sidebar .nav-links{border-bottom:1px solid #eaecef;padding:.5rem 0 .75rem 0\n}\n.sidebar .nav-links a{font-weight:600\n}\n.sidebar .nav-links .nav-item,.sidebar .nav-links .repo-link{display:block;line-height:1.25rem;font-size:1.1em;padding:.5rem 0 .5rem 1.5rem\n}\n.sidebar .sidebar-links{padding:1.5rem 0\n}\n@media (max-width:719px){\n.sidebar .nav-links{display:block\n}\n.sidebar .nav-links .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active:after{top:calc(1rem - 2px)\n}\n.sidebar .sidebar-links{padding:1rem 0\n}\n}\n.sw-update-popup{position:fixed;right:1em;bottom:1em;padding:1em;border:1px solid #0984e3;border-radius:3px;background:#fff;-webkit-box-shadow:0 4px 16px rgba(0,0,0,.5);box-shadow:0 4px 16px rgba(0,0,0,.5);text-align:center\n}\n.sw-update-popup button{margin-top:.5em;padding:.25em 2em\n}\n.sw-update-popup-enter-active,.sw-update-popup-leave-active{-webkit-transition:opacity .3s,-webkit-transform .3s;transition:opacity .3s,-webkit-transform .3s;transition:opacity .3s,transform .3s;transition:opacity .3s,transform .3s,-webkit-transform .3s\n}\n.sw-update-popup-enter,.sw-update-popup-leave-to{opacity:0;-webkit-transform:translateY(50%) scale(.5);transform:translateY(50%) scale(.5)\n}\ncode[class*=language-],pre[class*=language-]{color:#ccc;background:none;font-family:Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none\n}\npre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto\n}\n:not(pre)>code[class*=language-],pre[class*=language-]{background:#2d2d2d\n}\n:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal\n}\n.token.block-comment,.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#999\n}\n.token.punctuation{color:#ccc\n}\n.token.attr-name,.token.deleted,.token.namespace,.token.tag{color:#e2777a\n}\n.token.function-name{color:#6196cc\n}\n.token.boolean,.token.function,.token.number{color:#f08d49\n}\n.token.class-name,.token.constant,.token.property,.token.symbol{color:#f8c555\n}\n.token.atrule,.token.builtin,.token.important,.token.keyword,.token.selector{color:#cc99cd\n}\n.token.attr-value,.token.char,.token.regex,.token.string,.token.variable{color:#7ec699\n}\n.token.entity,.token.operator,.token.url{color:#67cdcc\n}\n.token.bold,.token.important{font-weight:700\n}\n.token.italic{font-style:italic\n}\n.token.entity{cursor:help\n}\n.token.inserted{color:green\n}\n#nprogress{pointer-events:none\n}\n#nprogress .bar{background:#0984e3;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px\n}\n#nprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;-webkit-box-shadow:0 0 10px #0984e3,0 0 5px #0984e3;box-shadow:0 0 10px #0984e3,0 0 5px #0984e3;opacity:1;-webkit-transform:rotate(3deg) translateY(-4px);transform:rotate(3deg) translateY(-4px)\n}\n#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px\n}\n#nprogress .spinner-icon{width:18px;height:18px;-webkit-box-sizing:border-box;box-sizing:border-box;border:2px solid transparent;border-top-color:#0984e3;border-left-color:#0984e3;border-radius:50%;-webkit-animation:nprogress-spinner .4s linear infinite;animation:nprogress-spinner .4s linear infinite\n}\n.nprogress-custom-parent{overflow:hidden;position:relative\n}\n.nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner{position:absolute\n}\n@-webkit-keyframes nprogress-spinner{\n0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)\n}\nto{-webkit-transform:rotate(1turn);transform:rotate(1turn)\n}\n}\n@keyframes nprogress-spinner{\n0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)\n}\nto{-webkit-transform:rotate(1turn);transform:rotate(1turn)\n}\n}\n.content code{color:#476582;padding:.25rem .5rem;margin:0;font-size:.85em;background-color:rgba(27,31,35,.05);border-radius:3px\n}\n.content pre,.content pre[class*=language-]{line-height:1.4;padding:1.25rem 1.5rem;margin:.85rem 0;background-color:#282c34;border-radius:6px;overflow:auto\n}\n.content pre[class*=language-] code,.content pre code{color:#fff;padding:0;background-color:transparent;border-radius:0\n}\ndiv[class*=language-]{position:relative;background-color:#282c34;border-radius:6px\n}\ndiv[class*=language-] .highlight-lines{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding-top:1.3rem;position:absolute;top:0;left:0;width:100%;line-height:1.4\n}\ndiv[class*=language-] .highlight-lines .highlighted{background-color:rgba(0,0,0,.66)\n}\ndiv[class*=language-] pre,div[class*=language-] pre[class*=language-]{background:transparent;position:relative;z-index:1\n}\ndiv[class*=language-]:before{position:absolute;z-index:3;top:.8em;right:1em;font-size:.75rem;color:hsla(0,0%,100%,.4)\n}\ndiv[class*=language-]:not(.line-numbers-mode) .line-numbers-wrapper{display:none\n}\ndiv[class*=language-].line-numbers-mode .highlight-lines .highlighted{position:relative\n}\ndiv[class*=language-].line-numbers-mode .highlight-lines .highlighted:before{content:" ";position:absolute;z-index:3;left:0;top:0;display:block;width:3.5rem;height:100%;background-color:rgba(0,0,0,.66)\n}\ndiv[class*=language-].line-numbers-mode pre{padding-left:4.5rem;vertical-align:middle\n}\ndiv[class*=language-].line-numbers-mode .line-numbers-wrapper{position:absolute;top:0;width:3.5rem;text-align:center;color:hsla(0,0%,100%,.3);padding:1.25rem 0;line-height:1.4\n}\ndiv[class*=language-].line-numbers-mode .line-numbers-wrapper .line-number,div[class*=language-].line-numbers-mode .line-numbers-wrapper br{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none\n}\ndiv[class*=language-].line-numbers-mode .line-numbers-wrapper .line-number{position:relative;z-index:4;font-size:.85em\n}\ndiv[class*=language-].line-numbers-mode:after{content:"";position:absolute;z-index:2;top:0;left:0;width:3.5rem;height:100%;border-radius:6px 0 0 6px;border-right:1px solid rgba(0,0,0,.66);background-color:#282c34\n}\ndiv[class~=language-js]:before{content:"js"\n}\ndiv[class~=language-ts]:before{content:"ts"\n}\ndiv[class~=language-html]:before{content:"html"\n}\ndiv[class~=language-md]:before{content:"md"\n}\ndiv[class~=language-vue]:before{content:"vue"\n}\ndiv[class~=language-css]:before{content:"css"\n}\ndiv[class~=language-sass]:before{content:"sass"\n}\ndiv[class~=language-scss]:before{content:"scss"\n}\ndiv[class~=language-less]:before{content:"less"\n}\ndiv[class~=language-stylus]:before{content:"stylus"\n}\ndiv[class~=language-go]:before{content:"go"\n}\ndiv[class~=language-java]:before{content:"java"\n}\ndiv[class~=language-c]:before{content:"c"\n}\ndiv[class~=language-sh]:before{content:"sh"\n}\ndiv[class~=language-yaml]:before{content:"yaml"\n}\ndiv[class~=language-py]:before{content:"py"\n}\ndiv[class~=language-javascript]:before{content:"js"\n}\ndiv[class~=language-typescript]:before{content:"ts"\n}\ndiv[class~=language-markup]:before{content:"html"\n}\ndiv[class~=language-markdown]:before{content:"md"\n}\ndiv[class~=language-json]:before{content:"json"\n}\ndiv[class~=language-ruby]:before{content:"rb"\n}\ndiv[class~=language-python]:before{content:"py"\n}\ndiv[class~=language-bash]:before{content:"sh"\n}\n.custom-block .custom-block-title{font-weight:600;margin-bottom:-.4rem\n}\n.custom-block.danger,.custom-block.tip,.custom-block.warning{padding:.1rem 1.5rem;border-left-width:.5rem;border-left-style:solid;margin:1rem 0\n}\n.custom-block.tip{background-color:#f3f5f7;border-color:#42b983\n}\n.custom-block.warning{background-color:rgba(255,229,100,.3);border-color:#e7c000;color:#6b5900\n}\n.custom-block.warning .custom-block-title{color:#b29400\n}\n.custom-block.warning a{color:#2c3e50\n}\n.custom-block.danger{background-color:#ffe6e6;border-color:#c00;color:#4d0000\n}\n.custom-block.danger .custom-block-title{color:#900\n}\n.custom-block.danger a{color:#2c3e50\n}\n.arrow{display:inline-block;width:0;height:0\n}\n.arrow.up{border-bottom:6px solid #ccc\n}\n.arrow.down,.arrow.up{border-left:4px solid transparent;border-right:4px solid transparent\n}\n.arrow.down{border-top:6px solid #ccc\n}\n.arrow.right{border-left:6px solid #ccc\n}\n.arrow.left,.arrow.right{border-top:4px solid transparent;border-bottom:4px solid transparent\n}\n.arrow.left{border-right:6px solid #ccc\n}\n.content:not(.custom){max-width:740px;margin:0 auto;padding:2rem 2.5rem\n}\n@media (max-width:959px){\n.content:not(.custom){padding:2rem\n}\n}\n@media (max-width:419px){\n.content:not(.custom){padding:1.5rem\n}\n}\n.table-of-contents .badge{vertical-align:middle\n}\nbody,html{padding:0;margin:0\n}\nbody{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:16px;color:#2c3e50\n}\n.page{padding-left:20rem\n}\n.navbar{z-index:20;right:0;height:3.6rem;background-color:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:1px solid #eaecef\n}\n.navbar,.sidebar-mask{position:fixed;top:0;left:0\n}\n.sidebar-mask{z-index:9;width:100vw;height:100vh;display:none\n}\n.sidebar{font-size:15px;background-color:#fff;width:20rem;position:fixed;z-index:10;margin:0;top:3.6rem;left:0;bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;border-right:1px solid #eaecef;overflow-y:auto\n}\n.content:not(.custom)>:first-child{margin-top:3.6rem\n}\n.content:not(.custom) a:hover{text-decoration:underline\n}\n.content:not(.custom) p.demo{padding:1rem 1.5rem;border:1px solid #ddd;border-radius:4px\n}\n.content:not(.custom) img{max-width:100%\n}\n.content.custom{padding:0;margin:0\n}\n.content.custom img{max-width:100%\n}\na{font-weight:500;text-decoration:none\n}\na,p a code{color:#0984e3\n}\np a code{font-weight:400\n}\nkbd{background:#eee;border:.15rem solid #ddd;border-bottom:.25rem solid #ddd;border-radius:.15rem;padding:0 .15em\n}\nblockquote{font-size:1.2rem;color:#999;border-left:.25rem solid #dfe2e5;margin-left:0;padding-left:1rem\n}\nol,ul{padding-left:1.2em\n}\nstrong{font-weight:600\n}\nh1,h2,h3,h4,h5,h6{font-weight:600;line-height:1.25\n}\n.content:not(.custom)>h1,.content:not(.custom)>h2,.content:not(.custom)>h3,.content:not(.custom)>h4,.content:not(.custom)>h5,.content:not(.custom)>h6{margin-top:-3.1rem;padding-top:4.6rem;margin-bottom:0\n}\n.content:not(.custom)>h1:first-child,.content:not(.custom)>h2:first-child,.content:not(.custom)>h3:first-child,.content:not(.custom)>h4:first-child,.content:not(.custom)>h5:first-child,.content:not(.custom)>h6:first-child{margin-top:-1.5rem;margin-bottom:1rem\n}\n.content:not(.custom)>h1:first-child+.custom-block,.content:not(.custom)>h1:first-child+p,.content:not(.custom)>h1:first-child+pre,.content:not(.custom)>h2:first-child+.custom-block,.content:not(.custom)>h2:first-child+p,.content:not(.custom)>h2:first-child+pre,.content:not(.custom)>h3:first-child+.custom-block,.content:not(.custom)>h3:first-child+p,.content:not(.custom)>h3:first-child+pre,.content:not(.custom)>h4:first-child+.custom-block,.content:not(.custom)>h4:first-child+p,.content:not(.custom)>h4:first-child+pre,.content:not(.custom)>h5:first-child+.custom-block,.content:not(.custom)>h5:first-child+p,.content:not(.custom)>h5:first-child+pre,.content:not(.custom)>h6:first-child+.custom-block,.content:not(.custom)>h6:first-child+p,.content:not(.custom)>h6:first-child+pre{margin-top:2rem\n}\nh1:hover .header-anchor,h2:hover .header-anchor,h3:hover .header-anchor,h4:hover .header-anchor,h5:hover .header-anchor,h6:hover .header-anchor{opacity:1\n}\nh1{font-size:2.2rem\n}\nh2{font-size:1.65rem;padding-bottom:.3rem;border-bottom:1px solid #eaecef\n}\nh3{font-size:1.35rem\n}\na.header-anchor{font-size:.85em;float:left;margin-left:-.87em;padding-right:.23em;margin-top:.125em;opacity:0\n}\na.header-anchor:hover{text-decoration:none\n}\n.line-number,code,kbd{font-family:source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace\n}\nol,p,ul{line-height:1.7\n}\nhr{border:0;border-top:1px solid #eaecef\n}\ntable{border-collapse:collapse;margin:1rem 0;display:block;overflow-x:auto\n}\ntr{border-top:1px solid #dfe2e5\n}\ntr:nth-child(2n){background-color:#f6f8fa\n}\ntd,th{border:1px solid #dfe2e5;padding:.6em 1em\n}\n.custom-layout{padding-top:3.6rem\n}\n.theme-container.sidebar-open .sidebar-mask{display:block\n}\n.theme-container.no-navbar .content:not(.custom)>h1,.theme-container.no-navbar h2,.theme-container.no-navbar h3,.theme-container.no-navbar h4,.theme-container.no-navbar h5,.theme-container.no-navbar h6{margin-top:1.5rem;padding-top:0\n}\n.theme-container.no-navbar .sidebar{top:0\n}\n.theme-container.no-navbar .custom-layout{padding-top:0\n}\n@media (min-width:720px){\n.theme-container.no-sidebar .sidebar{display:none\n}\n.theme-container.no-sidebar .page{padding-left:0\n}\n}\n@media (max-width:959px){\n.sidebar{font-size:15px;width:16.4rem\n}\n.page{padding-left:16.4rem\n}\n}\n@media (max-width:719px){\n.sidebar{top:0;padding-top:3.6rem;-webkit-transform:translateX(-100%);transform:translateX(-100%);-webkit-transition:-webkit-transform .2s ease;transition:-webkit-transform .2s ease;transition:transform .2s ease;transition:transform .2s ease,-webkit-transform .2s ease\n}\n.page{padding-left:0\n}\n.theme-container.sidebar-open .sidebar{-webkit-transform:translateX(0);transform:translateX(0)\n}\n.theme-container.no-navbar .sidebar{padding-top:0\n}\n}\n@media (max-width:419px){\nh1{font-size:1.9rem\n}\n.content div[class*=language-]{margin:.85rem -1.5rem;border-radius:0\n}\n}\n.icon.outbound{color:#aaa;display:inline-block;display:none\n}\n.badge[data-v-099ab69c]{display:inline-block;font-size:14px;height:18px;line-height:18px;border-radius:3px;padding:0 6px;color:#fff;margin-right:5px;background-color:#42b983\n}\n.badge.middle[data-v-099ab69c]{vertical-align:middle\n}\n.badge.top[data-v-099ab69c]{vertical-align:top\n}\n.badge.green[data-v-099ab69c],.badge.tip[data-v-099ab69c]{background-color:#42b983\n}\n.badge.error[data-v-099ab69c]{background-color:#da5961\n}\n.badge.warn[data-v-099ab69c],.badge.warning[data-v-099ab69c],.badge.yellow[data-v-099ab69c]{background-color:#e7c000\n}\n.nav-links .nav-item .dropdown-title{font-size:1rem\n}\n.nav-links .nav-item .nav-links .nav-item{font-size:1rem;padding:.25rem 0 .25rem 1.5rem\n}\n.nav-links .nav-item .nav-links .nav-item a{font-weight:400\n}\n.sidebar-group-h2{padding-left:1rem\n}\n.sidebar-group-h3{padding-left:2rem\n}',""])},d43f:function(n,e,o){var t={"./App":["3dfd"],"./App.vue":["3dfd"],"./components/Demo/vue-cli.md":["290f","md2"],"./components/Demo/vue-devtools.md":["db12","md3"],"./components/Demo/vue-router.md":["f1f8","md4"],"./components/Demo/vue.md":["7913","md5"],"./components/Demo/vuejs.org.md":["a6cb","md6"],"./components/Demo/vuex.md":["befd","md7"],"./components/Introduction.md":["5ebb","md8"],"./core/loader-option":["0210","md9"],"./core/loader-option.js":["0210","md9"],"./core/utils":["b1c7","md11"],"./core/utils.js":["b1c7","md11"],"./main":["56d7"],"./main.js":["56d7"],"./router":["41cb"],"./router.js":["41cb"],"./routes":["5665"],"./routes.js":["5665"],"./views/links":["4fe5"],"./views/links.vue":["4fe5"],"./views/navbar":["f454"],"./views/navbar.vue":["f454"],"./views/page":["e348"],"./views/page.vue":["e348"],"./views/routerView":["710a"],"./views/routerView.vue":["710a"],"./views/routesMap":["9e64"],"./views/routesMap.vue":["9e64"],"./views/sidebar":["68c4"],"./views/sidebar.vue":["68c4"]};function r(n){var e=t[n];return e?Promise.all(e.slice(1).map(o.e)).then(function(){var n=e[0];return o(n)}):Promise.resolve().then(function(){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e})}r.keys=function(){return Object.keys(t)},r.id="d43f",n.exports=r},d829:function(n,e,o){var t=o("b104");"string"===typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);var r=o("85cb").default;r("bd0b16aa",t,!0,{sourceMap:!1,shadowMode:!1})},e348:function(n,e,o){"use strict";o.r(e);var t=function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("div",{staticClass:"page"},[o("div",{staticClass:"content"},[o("router-view",{on:{markdown:n.emit}})],1)])},r=[],a={name:"Page",methods:{emit:function(n){this.$emit("markdown",n)}}},i=a,s=o("048f"),d=Object(s["a"])(i,t,r,!1,null,null,null);d.options.__file="page.vue";e["default"]=d.exports},f454:function(n,e,o){"use strict";o.r(e);var t=function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("header",{staticClass:"navbar"},[o("div",{staticClass:"sidebar-button"},[o("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[o("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])]),o("a",{staticClass:"home-link router-link-active",attrs:{href:"/"}},[o("span",{staticClass:"site-name"},[n._v(n._s(n.name)+" "+n._s(n.version)+"\n    ")])]),n._m(0)])},r=[function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("div",{staticClass:"links"},[o("nav",{staticClass:"nav-links"},[o("div",{staticClass:"nav-item"},[o("a",{staticClass:"nav-link external",attrs:{href:"https://github.com/chiaweilee/vue-markdown-docs",target:"_blank"}},[n._v("Github")])])])])}],a=(o("3a0f"),o("a3a3"),o("4d0b"),o("9224")),i={name:"NavBar",data:function(){return{name:a["a"],version:a["b"]}}},s=i,d=o("048f"),l=Object(d["a"])(s,t,r,!1,null,null,null);l.options.__file="navbar.vue";e["default"]=l.exports}});