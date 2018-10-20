const RequireJS = require('requirejs');
const FileSystem = require('fs');

var ___CONFIGURED;

module.exports = function(moduleLocation){
	if(!___CONFIGURED)
		configureRequireJS();
	else ___CONFIGURED = true;
	return RequireJS(moduleLocation);
}

function configureRequireJS(){
	const loaderJSON = process.cwd()+"/"+"require_conf.json";
	var paths = JSON.parse(FileSystem.readFileSync(loaderJSON,"utf-8"));
	RequireJS.config({
		paths: paths,
		nodeRequire: require,
		baseUrl: process.cwd()
	});
}
