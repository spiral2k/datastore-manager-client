import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import paths from './paths'

module.exports = {
    mode: 'production',
    output: {
        filename: `${paths.jsFolder}/[name].bundle.js`,
        path: paths.outputPath,
        chunkFilename: `${paths.jsFolder}/[name].bundle.js`,
    },
    performance: {
        hints: 'warning',
        maxAssetSize: 150000,
        maxEntrypointSize: 8500000,
        assetFilter: assetFilename => assetFilename.endsWith('.css') || assetFilename.endsWith('.js') || assetFilename.endsWith('.jsx'),
    },
    plugins: [new MiniCssExtractPlugin({ filename: 'css/[name].css' })],
    devtool: 'source-map',
}
