//Use forEach to write a function that behaves like filter
//The function will use a callback function as a "condition"

function filter(arr, callback) {
	//your code
}

console.log(
	filter([1, 2, 3], num => num >= 0),
	', Expected [1, 2, 3]'
);
console.log(
	filter([1, 2, 3], num => num > 1),
	', Expected [2, 3]'
);
console.log(
	filter([1, 2, 3], num => num > 5),
	', Expected []'
);
console.log(
	filter([null, undefined], num => true),
	', Expected [null, undefined]'
);
console.log(
	filter([], num => true),
	', Expected []'
);

function f(arr, callback) {
	const result = [];
	arr.forEach(x => {
		if (callback(x)) {
			result.push(x);
		}
	});
	return result;
}

//Bonus: Use reduce
function f(arr, callback) {
	return arr.reduce((acc, current) => {
		// console.log(acc);
		// console.log(typeof acc);
		// console.log(callback(current));
		if (callback(current)) {
			// console.log('make' + acc + current);
			return acc.concat(current);
		}
		return acc;
	}, []);
}
