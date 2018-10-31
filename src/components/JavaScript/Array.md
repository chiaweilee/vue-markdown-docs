## Array

### Array.from()

*not support IE*

create a new, `shallow-copied` Array instance from an array-like or iterable object.

```JavaScript
Array.from('foo')
```

```
// result: ['f', 'o', 'o']
```

```JavaScript
```

### prototype.pop()

delete last element, and `return this element`

### prototype.shift()

delete first element, and `return this element`

### prototype.push()

add element(s) at end, and `return new length`

### prototype.unshift()

add element(s) at start, and `return new length`

### prototype.splice()

`array.splice(start[, deleteCount[, item1[, item2[, ...]]]])`

### prototype.order()

```JavaScript
[1, 5, 4, 2, 3, 6].sort((a, b) => a - b)
[1, 5, 4, 2, 3, 6].sort((a, b) => b - a)
```

argument a start at [1]
argumemt b start at [0]

e.g: (5, 1) => (4, 5) => (2, 4)

```
// result: [1, 2, 3, 4, 5, 6] [6, 5, 4, 3, 2, 1]
```

### Vue Observer array

```JavaScript
const arrayProto = Array.prototype
const arrayMethods = Object.create(arrayProto)
const method = 'push'
const original = arrayProto[method]

Object.defineProperty(arrayMethods, method, {
    value: function (...args) {
        return original.apply(this, args)
    },
    enumerable: false,
    writable: true,
    configurable: true
  })
```
