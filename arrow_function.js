let inputs = process.argv.slice(2);
let result = inputs.map((i) => i[0].toUpperCase()).reduce((res, i) => res + i);


console.log(result);

