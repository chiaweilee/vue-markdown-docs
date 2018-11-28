## classes

Classes are in fact "special functions", and just as you can define `function expressions` and `function declarations`, the class syntax has two components:
`class expressions` and `class declarations`

### Class declarations

```JavaScript
class Test {
    constructor () {}
}
```

#### Hoisting

`function declarations` are `hoisting` and `class declarations` are not

```JavaScript
new Test() // ReferenceError
class Test {}
```

### Class expressions

```JavaScript
const Test = class {}
const Test = class Test2 {}
```

### Prototype methods

```JavaScript
Class Test {
    constructor (h, w) {
        this.h = h
        this.w = w
    }
    // Getter
    get area () {
        return this.clacArea()
    }
    // Method
    calcArea () {
        return this.h * this.w
    }
}
```

### Static methods

