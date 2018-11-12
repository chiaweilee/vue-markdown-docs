## Data()

*to avoid closure share between components*

`Data()` return `an new object` within the function, so every time it called, `a fresh object is returned`.
This means each component instance is self-contained as it should be and will contain its own internal state.

```JavaScript
let closureNumber = 1
export default {
  data () {
    return {
      stateNumber: 1
    }
  },
  mounted () {
    closureNumber += 1
    this.stateNumber += 1
  }
}
```

*every time this component init:*

```
// result
// closureNumber: 2, 3, 4, 5 ..
// stateNumber: 2, 2, 2, 2 ..
```
