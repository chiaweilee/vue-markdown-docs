(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["${route}17"],{ddb8:function(n,e,o){"use strict";o.r(e);o("3a0f"),o("a3a3"),o("4d0b");var r=function(){return Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))};function t(n,e){var o=function(n){var o=[],r=arguments.length-1;while(r-- >0)o[r]=arguments[r+1];e&&e[n]&&e[n].apply(e,o)};"serviceWorker"in navigator&&window.addEventListener("load",function(){r()?(a(n,o),navigator.serviceWorker.ready.then(function(n){o("ready",n)})):i(n,o)})}function i(n,e){navigator.serviceWorker.register(n).then(function(n){e("registered",n),n.waiting?e("updated",n):n.onupdatefound=function(){e("updatefound",n);var o=n.installing;o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?e("updated",n):e("cached",n))}}}).catch(function(n){e("error",n)})}function a(n,e){fetch(n).then(function(o){404===o.status||-1===o.headers.get("content-type").indexOf("javascript")?(e("error",new Error("Service worker not found at "+n)),c()):i(n,e)}).catch(function(n){navigator.onLine?e("error",n):e("offline")})}function c(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}t("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(n){console.error("Error during service worker registration:",n)}})}}]);
//# sourceMappingURL=${route}17.3ddb2757.js.map