const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MyPlugin  = require("./src/my-plugin");
module.exports = {
    mode: 'development',
    output: {
        chunkFilename: '[id].js',
        library: 'WebpackExample',
        libraryTarget: 'umd2',
        auxiliaryComment: 'Test Comment',
        publicPath: './'
    },
    module: {
        rules: [
            {
                test: /\.m?jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            '@babel/plugin-transform-runtime',
                            'transform-vue-jsx'
                        ]
                    }
                }
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            maxSize: 50000,
            minChunks: 1,
            name(module, chunks){
                console.log(chunks);
                return module.hash
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(),
        new MyPlugin()
    ]
}
