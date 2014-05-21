function square(x) {

	var TypeError = new Error("square function must be given a number");

	if (typeof(x) !== 'number') {
		throw(TypeError);
	}
 return x * x;
}

function roll(dice) {
	
}

// Should return 2
// Does the click button generate the 2
// Does the click button itself animate when clicked &:hover'd
// Clicking div.a should &.active div.bA div.c
// Click should animate div.bA
// div.c should display the correct value returned by random
// 