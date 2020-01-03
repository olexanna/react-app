const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./source/main.js",
	output: {
		path: path.join(__dirname, "/release"),
		filename: "index-bundle.js"
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader" ]
			},
			{
				test: /\.scss$/,
				use: [ "style-loader", "css-loader", "sass-loader" ]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./source/index.html"
		})
	]
};