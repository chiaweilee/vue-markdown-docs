## requestAnimationFrame

usually `60 times per second`, but generally match the display refresh rate as per W3C recommendation.

callback is passed a single argument, a DOMHighResTimeSteamp, indicates the current time then callbacks queued by `requestAnimationFrame()` begin to fire.

```JavaScript
window.requestAnimationFrame(function (timestamp) {})
```

### cancelAnimationFrame

```JavaScript
const a = window.requestAnimationFrame(...)
window.cancleAnimationFrame(a)
```
