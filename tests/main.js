const cwrequire = require('../source/requirecw.js');

console.log("Single Require");
try {
	cwrequire('testFolder/1')();
}catch(exception){
	console.log("Test failed - Couldn't load module.");
	console.log(exception);
}

console.log("Double Require");
try {
	cwrequire('testFolder/2')();
}catch(exception){
	console.log("Test failed - Couldn't load module.");
	console.log(exception);
}
