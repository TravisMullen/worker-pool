import {
  performance,
  PerformanceObserver
} from 'node:perf_hooks'

const obs = new PerformanceObserver((list, observer) => {
  // Called once asynchronously. `list` contains three items.
  console.log(list.getEntriesByType('measure'))
  performance.clearMarks()
  performance.clearMeasures()
  observer.disconnect()
})
obs.observe({ entryTypes: ['mark', 'measure'] })

const singleThread = () => {
  let finished = 0
  for (let i = 0; i < 10; i++) {
    const result = 42 + 100
    console.log(i, result)
    if (++finished === 10) {
      console.log('singleThread done')
      return
    }
  }
}

performance.mark('singleThread:start')
singleThread()
performance.mark('singleThread:end')
performance.measure('singleThread', 'singleThread:start', 'singleThread:end')

performance.mark('workerPool:start')
import('../dist/index.esm.js')
performance.mark('workerPool:end')
performance.measure('workerPool', 'workerPool:start', 'workerPool:end')
