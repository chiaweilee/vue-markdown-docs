## Memory Leak

### DOM/BOM Event in Render()

avoid use DOM/BOM Event if using `render()`

### addEventListener

`beforeDestroy` call `removeEventListener`, and `delete` `callback`/set props `null`/`undefined`

avoid use `anonymous function` to callback

### $on and $off

### closure

## Closure

```vue.js
let closure = 1
export default {
    data () {
        return {
            closure: closure
        }
    },
    mounted () {
        console.log(closure)
        console.log(this.closure)
        closure += 1
    }
}
```

*every time mounted*

```
// result: 1 1, 2 2, 3 3 ...
```
