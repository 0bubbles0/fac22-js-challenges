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

//Prototype
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
	// Only change code below this line
	var newArray = [];
	for (let i = 0; i < this.length; i++) {
		if (callback(this[i])) {
			newArray.push(this[i]);
		}
	}
	// Only change code above this line
	return newArray;
};

var new_s = s.myFilter(function (item) {
	return item % 2 === 1;
});
console.log(new_s);
