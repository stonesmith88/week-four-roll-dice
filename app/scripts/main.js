function square(x) {

	var TypeError = new Error("square function must be given a number");

	if (typeof(x) !== 'number') {
		throw(TypeError);
	}
 return x * x;
}

function roll(dice) {
	
}