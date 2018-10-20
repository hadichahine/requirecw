const RequireJS = require('requirejs');
const FileSystem = require('fs');

module.exports = function(moduleLocation){
	const loaderJSON = process.cwd()+"/"+"require_conf.json";
	var paths = JSON.parse(FileSystem.readFileSync(loaderJSON,"utf-8"));
	RequireJS.config({
		paths: paths,
		nodeRequire: require,
		baseUrl: process.cwd()
	});
	return RequireJS(moduleLocation);
}
