# raw-loop

An unoptimized (no [`requestAnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)) version of [`main-loop`](https://github.com/Raynos/main-loop)

It is ment as an drop in replacement for when you don't want to do optimized
rendering.

# Test
Run `npm test`. The tests are copy&pasted directly from
https://github.com/Raynos/main-loop with the `requestAnimationFrame` bits removed.