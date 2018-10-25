## v-if with v-for

when they exist on same node, `v-for` has a higher priority than `v-if`.
That means `v-if` can be useful when you want to render nodes for only `some` items.

*Instead, your intent is to skip execution of the loop,* you can place `v-if` on a wrapper or `<template>`.

### key

you need to provide a unique `key` for each item, `key` would be the unique id of each item.