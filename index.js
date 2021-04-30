const myInfo = require('./information.js');
const cowsay = require("cowsay");

console.log(cowsay.say({
	text : "Hi, I'm " + myInfo.name + " from the famous " + myInfo.campus + " campus!",
	e : "oO",
	T : "U "
}));
