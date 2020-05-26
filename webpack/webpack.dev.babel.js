import webpack from 'webpack'
import paths from './paths'

module.exports = {
    mode: 'development',
    output: {
        filename: '[name].js',
        path: paths.outputPath,
        chunkFilename: '[name].js',
    },
    devServer: {
        contentBase: paths.outputPath,
        compress: true,
        hot: true,
        historyApiFallback: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
}
