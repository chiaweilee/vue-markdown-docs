##

### AMD

`Asynchronous` Module Definition (AMD)

```JavaScript
// filename: foo.js
define(['jquery'], function ($) {
  // methods
  function myFunc(){}
  // exposed public methods
  return myFunc
});
```

```JavaScript
//  filename: foo.js
define(['jquery', 'underscore'], function ($, _) {
  //  methods
  function a(){}  //  private because it's not returned (see below)
  function b(){}  //  public because it's returned
  function c(){}  //  public because it's returned
  //  exposed public methods
  return {
  b: b,
  c: c
  }
});
```

### Common JS

```JavaScript
//  filename: foo.js
var $ = require('jquery');
var _ = require('underscore');
//  methods
function a(){}  //  private because it's omitted from module.exports (see below)
function b(){}  //  public because it's defined in module.exports
function c(){}  //  public because it's defined in module.exports
//  exposed public methods
module.exports = {
  b: b,
  c: c
}
```

### UMD

`Universal` Module Definition

```JavaScript
(function (global, factory) {
  if (typeof export === 'object && typeof module !== 'undefined') {
    // AMD
    defined(factory)
  } else if (typeof define === 'function' && define.amd) {
    // Node, CommonJS-like
    module.exports = factory()
  } else {
    // Broswer globals (root is window)
    global.vue = factory()
  }
})(this, function () {
  // vue
})
```
