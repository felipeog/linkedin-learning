import { lazy } from 'react'

export function lazyImportWithDelay(importModule, delayInMs = 400) {
  return lazy(() => {
    return Promise.all([
      importModule(),
      new Promise((resolve) => setTimeout(resolve, delayInMs)),
    ]).then(([moduleExports]) => moduleExports)
  })
}
