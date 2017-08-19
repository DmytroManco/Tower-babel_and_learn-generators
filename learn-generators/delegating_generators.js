function *flat(arr) {
	const [first, ...rest] = arr;

	if (first instanceof Array && first.length) {
		yield* flat(first);
	} else if (first instanceof Array === false) {
		yield first;
	}

	if (rest instanceof Array && rest.length) {
		yield* flat(rest);
	}

}

let A = [1, [2, [3, 4], 5], 6];

for (let f of flat(A)) {
	console.log(f);
}

module.exports = flat;