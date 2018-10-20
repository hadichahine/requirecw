const cwrequire = require('../source/main.js');
try {
	cwrequire('testFolder/1')();
}catch(exception){
	console.log("Test failed - Couldn't load module.");
	console.log(exception);
}
