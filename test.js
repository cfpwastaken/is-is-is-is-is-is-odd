const isIsIsIsIsOdd = require("is-is-is-is-is-odd");
const isIsIsIsIsIsOdd = require("./main.js");

if(isIsIsIsIsIsOdd(isIsIsIsIsOdd)) {
	console.log("Test 1 passed!");
} else {
	console.error("Test 1 failed!");
}

if(!(isIsIsIsIsIsOdd(() => {}))) {
	console.log("Test 2 passed!");
} else {
	console.error("Test 2 failed!");
}
