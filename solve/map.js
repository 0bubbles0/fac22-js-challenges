// Prototype

Array.prototype.myMap = function (callback) {
	var newArray = [];
	// Only change code below this line
	for (let i = 0; i < this.length; i++) {
		newArray.push(callback(this[i]));
	}
	// Only change code above this line
	return newArray;
};

var s = [23, 65, 98, 5];
var new_s = s.myMap(function (item) {
	return item * 2;
});

console.log(new_s);
