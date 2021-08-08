//Arrays

// Create Arrays
const fruits = ['a', 'b'];
const execer = /d(b+)(d)/i.exec('cdbBdbsbz'); // [ 'dbBd', 'bB', 'd', index: 1, input: 'cdbBdbsbz', groups: undefined ]
//also String.match(), String.replace()

const arrMaker = Array('a', 'b'); // [ 'a', 'b' ]
const arrMakerFill = Array(4).fill('a'); // [ 'a', 'a', 'a', 'a' ]
const arrFrom = Array.from('abc'); // [ 'a', 'b', 'c' ]
const arrFromF = Array.from([1, 2, 3], x => x + x); // [ 2, 4, 6 ]
const arrOf = Array.of(7); // [7]
const arrOfN = Array.of(1, 2, 3); // [1, 2, 3]
const allArr = [...arrMaker, ...arrMakerFill];
console.log(allArr);

// Generate number Arrays
// const keyser = [...Array(5).keys()]; // [0, 1, 2, 3, 4]

const numArr = [];
for (var i = 1; i <= 5; i++) {
	numArr.push(i);
}
// [1, 2, 3, 4, 5]

Number.prototype[Symbol.iterator] = function* () {
	for (let i = 1; i <= 5; i++) {
		yield i;
	}
};
[...5]; // [ 1, 2, 3, 4, 5 ]
