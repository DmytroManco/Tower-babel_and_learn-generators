function askFoo() {
	return new Promise(function (resolve, reject) {
		resolve('foo')
	})
}

function run(generator) {
	let it = generator();

	it.next().value
		.then(result => it.next(result))
		.catch(err => it.throw(err));
}

run(function* () {
	try {
		const foo = yield askFoo();
		console.log(foo)
	} catch (err) {
		console.log(err)
	}
});

module.exports = run;