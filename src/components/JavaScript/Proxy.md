## Proxy

*not support IE*

```JavaScript
new Proxy(target, handler)
```

### Vue 3.0

```JavaScript
const observe = _ => {
  return new Proxy(_, {
    get (target, property) {
      return target[property]
    },
    set (target, key, value) {
      return Reflect.set(target, key, value)
    }
  })
}
```
