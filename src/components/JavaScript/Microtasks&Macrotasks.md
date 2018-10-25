## Microtasks & Macrotasks

```JavaScript
setTimeout(() => {
    console.log(1)
})

new Promise(resolve => {
    resolve()
    console.log(2)
})
    .then(() => {
        console.log(3)
    })

console.log(4)
```

```console
// result: 2 4 3 1
```

### Macrotask

`setTimeout`, `setInterval`, `process.nextTick`

### Microtask
`process.nextTick`, `Promise`
