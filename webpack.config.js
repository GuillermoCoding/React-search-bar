const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

console.log('webpack');
console.log(path.resolve(__dirname,'./client'));
module.exports = {
	devtool: '#source-map',
	entry: ['./client/App.js'],
	output : {
		path: path.resolve(__dirname,'client'),
		filename: './bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: [/node_modules/,/server.js/]
			},
			{
				test:/\.css$/,
				loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({template: './client/index.html'})
	]
}
