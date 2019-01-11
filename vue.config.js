const path = require('path');
const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
module.exports = {
    baseUrl: './',
    outputDir: 'dist',
    lintOnSave: true,
    chainWebpack: config => {
        
    },
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            config.mode = 'production';
        } else {
            config.mode = 'development';
        }

        Object.assign(config, {
            resolve: {
                alias: {
                    "@": path.resolve(__dirname, "./src"),
                    "@c": path.resolve(__dirname, "./src/components"),
                    "@d": path.resolve(__dirname, "./src/directives")
                }
            }
        });

        let plugins = [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false,
                        drop_debugger: true,
                        drop_console: true,
                    },
                },
                sourceMap: false,
                parallel: true,
            }),
            new CompressionWebpackPlugin({
                filename: '[path].gz[query]',
                algorithm: 'gzip',
                test: new RegExp(
                    '\\.(' +
                    ['js', 'css'].join('|') +
                    ')$',
                ),
                threshold: 10240,
                minRatio: 0.8,
            }),
            new webpack.ProvidePlugin({
                'window.Quill': 'quill'
            })
        ]
        if (process.env.NODE_ENV !== 'development') {
            config.plugins = [...config.plugins, ...plugins]
        };

        
    },
    productionSourceMap: true,
    css: {
        extract: true,
        sourceMap: false,
        loaderOptions: {},
        modules: false
    },
    parallel: require('os').cpus().length > 1,
    pwa: {

    },
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        // proxy: {
        //  'http://localhost:8080/': {
        //      target: 'http://baidu.com:8080', 
        //      changeOrigin: true,
        //      pathRewrite: {
        //          '^http://localhost:8080/': ''
        //      }
        //  }
        // },
        before: (app) => { }
    },
    pluginOptions: {
        // ...
    }
};