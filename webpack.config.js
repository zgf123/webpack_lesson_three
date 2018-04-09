const path = require('path');

module.exports = {
    entry:{
        app: './index.js'
    },
    output:{
        filename:'[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer:{
		publicPath: '/dist/',
		contentBase: './',
		host: '127.0.0.1',
		port: 8080,
		quiet: true,
		open: true
    }
}