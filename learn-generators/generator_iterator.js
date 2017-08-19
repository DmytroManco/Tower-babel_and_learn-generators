function *factorial(n){
	let fac = 1;

	for(let i = 1; i <= n; i++) {
		fac = fac * i;
		yield fac;
	}
}

for (let n of factorial(5)) {
	console.log(n)
}

moule.exports = factorial;