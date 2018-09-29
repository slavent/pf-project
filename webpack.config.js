const path = require( "path" )
const HtmlWebpackPlugin = require( "html-webpack-plugin" )

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve( __dirname, "dist" ),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [ "@babel/preset-env" ]
                    }
                }
            }
        ]
    },
    plugins: [ new HtmlWebpackPlugin() ]
}
