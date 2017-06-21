const path = require("path");
const webpack = require('webpack');

module.exports = {
	entry: {
		pageA: "./src/pageA",
		pageB: "./src/pageB"
	},
	output: {
		path: path.resolve("dist"),
		filename: "[name].bundle.js",
		chunkFilename: "[id].chunk.js"
	},
	plugins: [
		new webpack.optimize.ModuleConcatenationPlugin()
	]
};


/* NOTE That one works fine */
/*
const output = {
	path: path.resolve("dist"),
		filename: "[name].bundle.js",
		chunkFilename: "[id].chunk.js"
};
const plugins = [
	new webpack.optimize.ModuleConcatenationPlugin()
];

module.exports = [
	{
		entry: {pageA: "./src/pageA"},
		output,
		plugins,
	},
	{
		entry: {pageB: "./src/pageB"},
		output,
		plugins,
	}
];
*/
