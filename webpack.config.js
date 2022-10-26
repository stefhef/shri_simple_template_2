const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StatoscopePlugin = require('@statoscope/webpack-plugin').default;
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');


const config = {
    devServer: {
        historyApiFallback: true,
        static: {directory: path.join(__dirname, 'public')},
        open: true,
        compress: true,
        hot: true,
        port: 5000,
    },
    entry: {
        about: './src/pages/About.js',
        home: './src/pages/Home.js',
        index: {
            import: './src/index.js',
            dependOn: ['about', 'home']
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html"
        }),
        new LodashModuleReplacementPlugin({
            'collections': true,
            'paths': true
        }),
        new StatoscopePlugin({
            saveStatsTo: 'stats.json',
            saveOnlyStats: false,
            open: false,
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
                resolve: {
                    extensions: ['.css']
                }

            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                sideEffects: false,
                resolve: {
                    extensions: ['.js']
                }
            }
        ],
    },
    resolve: {
        alias: {
            'crypto-browserify': path.resolve(__dirname, 'src/crypto-fall.js')
        },
        fallback: {
            "stream": false,
            'crypto': require.resolve('crypto'),
            'buffer': require.resolve('buffer'),
        },
        modules: [
            path.resolve(__dirname, 'node_modules'),
            // path.resolve(__dirname, 'node_modules/ui/node_modules'),
        ],
    },
    optimization: {
        minimize: true,
        moduleIds: "deterministic",
        innerGraph: true,
        concatenateModules: true,
        usedExports: true,
        sideEffects: true,
        providedExports: true,
        splitChunks: {
            chunks: 'all',
            minSize: 20000,
            minRemainingSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                }
            },
        },
        runtimeChunk: {
            name: "runtime"
        },

    },
    target: "web",
    stats: {
        children: true
    }
// @TODO optimizations
// @TODO lodash treeshaking
// @TODO chunk for lodash
// @TODO chunk for runtime
// @TODO fallback for crypto

};

module.exports = config;
