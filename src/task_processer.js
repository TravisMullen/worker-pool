import { parentPort } from 'node:worker_threads'
parentPort.on('message', (task) => {
  const computed = task.a + task.b
  parentPort.postMessage(computed)
})
