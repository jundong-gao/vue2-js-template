/**
 * Created by WebStorm.
 * User: 高俊东
 * Date: 3/30/21
 * Time: 1:16 PM
 */
const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    productionSourceMap: false,
    chainWebpack: config => {
        config.plugin('html').tap(res => {
            res[0].title = 'vue2-tempalte-title'
            return res
        })
        config.resolve.alias.set('@comps', resolve('src/components'))
    },
    css:{
        loaderOptions:{
            sass: {
                prependData: `@import "@/assets/style/global.scss";`
            }
        },
        extract: process.env.NODE_ENV === 'production' ? {
            ignoreOrder: true,
        } : false,
    },
    configureWebpack: config => {
        if (isProd) {
            // gzip
            config.plugins.push(
                new CompressionWebpackPlugin({
                    test: /\.(html|js|css|map|ttf)$/,
                    // 超过4kb压缩
                    threshold: 4096
                })
            )
        }


        config.performance = {
            hints: 'warning',
            // 入口起点的最大体积
            maxEntrypointSize: 50000000,
            // 生成文件的最大体积
            maxAssetSize: 30000000,
            // 只给出 js 文件的性能提示
            // assetFilter: function (assetFilename) {
            //     return assetFilename.endsWith('.js')
            // }
        }
    },
    devServer: {
        host: '0.0.0.0',
        open: true
    }
}
