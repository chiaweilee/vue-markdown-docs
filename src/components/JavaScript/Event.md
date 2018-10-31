## Event

`capturing` and `bubbling`

*IE only support event `budding`*

first `captured` until reaches the target element and then `buddles` up again

### on event

only fire in `budding`, bind only one listener once

### addEventListener

element.addEventListener(type, listener[ , useCapture])

#### useCapture

addEventListener support both `capturing` and `budding`

`options`, `Boolean`, default `false`

#### event.target & event.currentTarget

`currentTarget`: element which event handler attached
`target`: the element which event handler fired
