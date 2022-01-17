// What does this return?
[true, false, true, false].slice(2000000, 3000000); // []

[30, 200, 1000].sort(); // [1000, 200, 30]

/*Read
What does this function do? 
What type of value does it return? 
What would be a good name for this function 
Write a function call with examples for arr1 & arr2
*/

function f(arr1, arr2) {
	let result = arr1.length === arr2.length;
	arr1.forEach((value, i) => {
		if (value !== arr2[i]) {
			result = false;
		}
	});
	return result;
}

//What does this return?
const numbers = [1, [2, 3]];
numbers.flat();
numbers; // [1, [2, 3]]

console.log("Hello");
