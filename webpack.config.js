const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry : "./src/xero-algorithms.js",
    output : {
        globalObject : "this",
        path : path.resolve(__dirname, "./"),
        filename : "xero-algorithms.js",
        library : "xA",
        libraryTarget : "umd",
        umdNamedDefine : true
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                loader : 'babel-loader',
                query : {
                    presets : ['es2015']
                }
            }
        ]
    },
    optimization : {
        minimize : true
    }
}
