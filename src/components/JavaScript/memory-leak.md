## Memory Leak

### Garbage Collected

`reference counting`, when the count reaches zero

### Accidental Global variables

```JavaScript
function foo () {
    bar = 'this is a hidden global variables'
}
```

*in fact, it's:*

```JavaScript
function foo () {
    window.bar = 'this is a hidden global variables'
}
```

to avoid, add `use strict`

### Forgotten timers or callbacks

`setInterval`, `on`, `addEventListener`

### Out of DOM references

```JavaScript
const elements = {
    button: document.getElementById('button')
}

function removeButton () {
    // direct child of body
    document.body.removeChild(document.getElementById('button'))
    // after remove, still a reference to #button
    // the button element is still in memory
    // and can not be collected by GC
}
```

### Closures
