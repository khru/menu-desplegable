// importamos el modulo de webpack, con esta sintaxis ya que aun
// no podemos utilizar la sinbtaxis de importación de es6
const webpack = require('webpack');

// variabloe de la configuración del entorno
const nodeEnv = process.env.NODE_ENV || 'production';

module.exports = {
    devtool: 'source-map',
    entry : {
        filename : './js/app.js'
    },
    output : {
        filename : './js/_build/bundle.js'
    },
    module : {
        loaders : [
            {
                test : /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query : {
                    presets : ['es2015-native-modules'] 
                }
            }
        ]
    },
    plugins : [
        // uglify js
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            output : { comments: false },
            sourceMap : true 
        }),
        // env plugin
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV : JSON.stringify(nodeEnv) }
        })
    ]
}