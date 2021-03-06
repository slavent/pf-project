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
            },
            {
                test: /\.css$/,
                use: [ "style-loader", "css-loader" ]
            }
        ]
    },
    plugins: [ new HtmlWebpackPlugin( {
        template: "./src/assets/index.html"
    } ) ],
    devServer: {
        contentBase: path.join( __dirname, "dist" ),
        port: 8080
    }
}
