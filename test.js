const isIsIsIsOdd = require("is-is-is-is-odd");
const isIsIsIsIsOdd = require("./main.js");

if(isIsIsIsIsOdd(isIsIsIsOdd)) {
	console.log("Test 1 passed!");
} else {
	console.error("Test 1 failed!");
}

if(!(isIsIsIsIsOdd(() => {}))) {
	console.log("Test 2 passed!");
} else {
	console.error("Test 2 failed!");
}
