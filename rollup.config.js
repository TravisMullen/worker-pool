import pkg from './package.json'
export default [
  {
    input: 'src/index.js',
    // banner: `/** ${pkg.name}; ${pkg.version} */`,
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ]
  },
  {
    input: 'src/task_processer.js',
    output: [
      { file: 'dist/task_processer.js', format: 'es' }
    ]
  }
]
