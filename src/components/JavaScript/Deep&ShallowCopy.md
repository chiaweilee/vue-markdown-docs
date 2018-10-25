## Deep & Shallow Copy

### Shallow Copy

Shallow copy is a `bit-wise` copy of an object.
If any of the fields of the object are references to other objects, just `the reference address are copied`.
i.e, `only the memory address is copied`.

```JavaScript
const A = { c: 1 }
const B = A // shallow copy
B.c = 2
console.log(A.c)
```

```
// result: 2
```

### Deep Copy

```JavaScript
const B = JSON.parse(JSON.stringify(A))
```

```JavaScript
function deepClone (object) {
    const clonedObject = object.constructor()
    for (let key in object) {
        clonedObject[key] = deepClone(object[key])
    }
    return clonedObject
}

const A = { c: 1 }
const B = deepClone(A) // deep copy
B.c = 2
console.log(B.c)
console.log(A.c)
```

```
// result: 2 1
```
