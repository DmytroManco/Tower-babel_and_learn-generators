function *upper (items) {
	for(let i = 0; i < items.length; i++) {
		if(typeof items[i] === 'string') {
			yield items[i].toUpperCase();
		} else yield null;
	}
}

let bad_items = ['a', 'B', 1, 'c'];

for (let item of upper(bad_items)) {
	console.log(item);
}

module.exports = upper;