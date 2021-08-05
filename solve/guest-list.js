/* Club Bouncer

Write a function that:
- looks at a group
- returns a guest list 
  - of all people aged 18+
  - with the full names 

Example guest list:
["Austen, Jane", "Potter, Harry"]

**Bonus**: sort guest list in alphabetical order. Can just describe steps
*/

function guestLister(arr) {
	return arr
		.filter(x => x.age >= 18)
		.map(x => `${x.lastName}, ${x.firstName}`)
		.sort();
}

const group = [
	{ firstName: 'Harry', lastName: 'Potter', age: 15 },
	{ firstName: 'Tom', lastName: 'Smith', age: 18 },
	{ firstName: 'Jane', lastName: 'Austen', age: 17 },
	{ firstName: 'Emma', lastName: 'Smith', age: 20 },
	{ firstName: 'Mary', lastName: 'Shelley', age: 4 },
	{ firstName: 'Charles', lastName: 'Dickens', age: 50 },
];

console.log(guestLister(group));
console.log('Should be ', ['Dickens, Charles', 'Smith, Emma', 'Smith, Tom']);
