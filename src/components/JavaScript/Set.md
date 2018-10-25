## Set

`Set` object store unique values of `any type`, whether `primitive values` or `object references`.

```JavaScript
const set = new Set([1, 1, 2, 2, 3, 4])
set.add(2)
set.delete(1)
console.log(set.has(1))
console.log(set.has(5))
console.log(set)
```

```
// result: true false [2, 3, 4]
```

### .has()

`has()` returns a boolean whether an element value exists in a `Set`.

### .add()

### .clear()

### .delete()

### Array.filter

```JavaScript
[1, 1, 2, 2, 3, 4].filter((element, index, array) => array.indexOf(element) === index)
```

```
// result: [1, 2, 3, 4]
```
