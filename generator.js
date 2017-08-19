const max = process.argv[2];

let fizzBuzz = function* () {
	for(let i = 1; i <= max; i++) {
		if (i % 3 === 0 && i % 5 === 0) yield 'FizzBuzz';
		else if (i % 3 === 0) yield 'Fizz';
		else if (i % 5 === 0) yield 'Buzz';
		else yield i;
	}
}();

for (let n of fizzBuzz) {
	console.log(n);
}

module.exports = fizzBuzz;