const {defineConfig} = require('@vue/cli-service')
const CompressionPlugin = require('compression-webpack-plugin')
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: true,
  publicPath: '/',
  devServer: {
    port: 9982,
    proxy: {
      // add your proxies here
    }
  },
  outputDir: path.resolve(__dirname, 'dist'),
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.output.filename = '[name].[contenthash].bundle.js'
      config.devtool = false
      config.plugins = [
        ...config.plugins,
        new TerserPlugin({
          extractComments: {
            condition: /^\**!|@preserve|@license|@cc_on/i
          },
          terserOptions: {
            sourceMap: false,
            ecma: 2016,
            output: {
              comments: false,
              beautify: false
            },
            compress: {
              sequences: true,
              dead_code: true,
              conditionals: true,
              booleans: true,
              unused: true,
              if_return: true,
              pure_funcs: ['console.log', 'console.debug', 'console.info', 'console.warn']
            }
          }
        }),
        new CompressionPlugin({
          filename: '[path].br[query]',
          algorithm: 'brotliCompress',
          compressionOptions: {level: 11},
          minRatio: 1,
          deleteOriginalAssets: false
        }),
        new CompressionPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          minRatio: 1
        })
      ]
      config.optimization = {
        minimize: true,
        moduleIds: 'hashed',
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'async',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name (module) {
                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                return `lib.${packageName.replace('@', '')}`
              }
            }
          }
        }
      }
    }
  }
})
