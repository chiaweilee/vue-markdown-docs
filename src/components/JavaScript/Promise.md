## Promise

### states

A `Promise` is in one of these states:

* `pending`: initial state, neither fulfilled and rejected.
* `fulfilled`: completed successfully
* `rejected`: operation failed

### then and catch return promises

`.then()` and `.catch()` return `promises`, they can be chained.

```JavaScript
const promise = new Promise(function (resolve) {
    resolve(100)
})

promise.then(function (value) {
    return value * 2
})

promise.then(function (value) {
    return value * 2
})

promise.then(function (value) {
    console.log(value)
})
```

```
// result: 100
```

### Promise.all()

return a promise that either `fulfills` when:

* `all` promises `fulfilled`
* or `one` of promises `rejects`

```JavaScript
function setTime (time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(time)
        }, time)
    })
}

Promise.all([setTime(1), setTime(100), setTime(200)])
    .then(value => {
        console.log(value)
    })
```

```
// result: [1, 100, 200]
```

```JavaScript
function fail (time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(time)
        }, time)
    })
}

Promise.all([setTime(1), fail(100), setTime(200)])
    .then(value => {
        console.log(value)
    })
    .catch((err) => {
        console.error(err)
    })
```

```
// result: Error(100)
```

### Promise.race()

return a promise that either `fulfills` when:

* one of promise `fulfilled` or `rejects`

```JavaScript
const rabit = new Promise(resolve => {
    setTimeout(() => {
        console.log('rabit race!')
        resolve('rabit win!')
    }, 1000)
})

const turtle = new Promise(resolve => {
    setTimeout(() => {
        console.log('turtle race!')
        resolve('turtle win!')
    }, 10)
})

Promise.race([rabit, turtle])
    .then(result => {
        console.log(result)
    })
```

```
// turtle race!
// turtle win!
// rabit race!
```

### Promise.resolve()

```JavaScript
const task1 = value => value + 1
const task2 = value => value + 2
const task3 = value => {
    console.log(value + 3)
}

Promise.resolve(1).then(task1).then(task2).then(task3)
```

```
// result: 7
```
