## nextTick

`callback` to be executed after the next DOM update cycle.
Use it immediately after you've changed some data to wait for the DOM update.

### DOM update asynchronously

DOM is updated `asynchronously`.
When a value changed in Vue, the change is not immediately rendered to DOM.
Instead, Vue queues a DOM update and then, on a timer, updated the DOM.
