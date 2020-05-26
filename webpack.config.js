require('@babel/register')

const webpackMerge = require('webpack-merge')
const common = require('./webpack/webpack.common.babel')

const buildEnv = process.env.NODE_ENV === 'production' ? 'prod' : 'dev'

// eslint-disable-next-line import/no-dynamic-require
const webpackConfig = require(`./webpack/webpack.${buildEnv}.babel`)

module.exports = webpackMerge(common, webpackConfig)
