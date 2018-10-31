## require & import

### CommonJs

```JavaScript
const test = 1
module.exports = {
    test
}
```

```JavaScript
const { test } = require('./test')
```

### ES Moudle

```JavaScript
const test = 1
export default test
export {
    test
}
```

```JavaScript
import _test, { test } from './test'
```

### different

* CommonJs output `a copy of value`
* ES Moudle output `reference` of value

* CommonJs Load at running
* ES Module output at compile
