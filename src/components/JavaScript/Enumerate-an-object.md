## Enmerate an object

### for..in
`for...in` iterate over `all the enumerable properties` of an object.
It traverses all enumerable properties of an object and `its prototype chain`.

### Object.keys()
returns an `array` with all the own(`not in the prototype chain`) enumerable properties' names('keys') of an object.

### Object.getOwnPropertyName()
returns an `array` containing all own properties' names(`enumerable or not`) of an object.

```JavaScript
Object.getOwnPropertyNames(['a', 'b', 3])
Object.getOwnPropertyNames({ a: 1, b: { c: 3 } })
```

```
// result: ['0', '1', '2', 'length']
// result: ['a', 'b']
```

### Object.assign()

used to copy the values of all `enumerable own properties` from `one or more` source objects to a target object.
It will return return the target object.

```JavaScript
Object.assign({}, { a: 1 }, { b: 2 })
```

```
// result: { a: 1, b: 2 }
```

#### Warning for Deep Clone

`Object.assign()` copies property values.
If the source value is a reference to an object, it only copies that reference value.

```JavaScript
const A = { a: 0, b: { c: 0 }}
const B = Object.assign({}, A)
A.a = 1
B.a = 2
A.b.c = 3
console.log(A)
console.log(B)
```

```
// result: { a: 1, b: { c: 3} }
// result: { a: 2, b: { c: 3} }
```

### Object.defineProperty()

defines new or modifies existing property(s) directly on  an object, returning the object.

### Descriptors

#### configurable
`true` if and only if the type of this property `descriptor may be changed and may be deleted` from the corresponding object.
Defaults to `false`

#### enumerable
`true` if and only if this property shows up during enumeration.
Defaults to `false`

#### get

getter from the property, or `undefined` if no getter.
When the property is `accessed`, this function is called `without arguments` and with `this` set to the object through which the property is accessed.
The `return value` will be used as the value of the property.
Defaults to `undefined`

#### set

setter for the property, or `undefined` if no setter.
When the property is `assigned to`, this function is called with `one argument`(the value being assigned)
and with `this` set to the object through which the property is assigned.

```JavaScript
var value
Object.definedProperty(object, 'key', {
    enumerable: true,
    configurable: true,
    get: function () {
        return value
    },
    set: function (to) {
        value = to
    }
})
```
