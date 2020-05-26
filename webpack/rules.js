const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { isDev } = require('../src/config/config').default

module.exports = [
    // js
    {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
        },
    },
    // css
    {
        test: /\.(sa|sc|c)ss$/,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            {
                loader: 'sass-loader',
                options: {
                    data: `$env: ${process.env.NODE_ENV};`,
                },
            },
        ],
    },
]
