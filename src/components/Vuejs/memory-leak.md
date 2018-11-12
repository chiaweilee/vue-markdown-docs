## Memory Leak

### DOM/BOM Event in Render()

avoid use DOM/BOM Event if using `render()`

### addEventListener

`beforeDestroy` call `removeEventListener`, and `delete` `callback`/set props `null`/`undefined`

avoid use `anonymous function` to callback

### $on and $off
