const rollup = require('rollup');
rollup.rollup({
    input: './src/index.js',
    output: {
        file: 'index.js',
        format: 'cjs'
    }
}).then(bundle=> {
    bundle.write({
        file: './dist/index.js',
        format: 'umd',
        name: 'library',
        sourcemap: true
    });
})

