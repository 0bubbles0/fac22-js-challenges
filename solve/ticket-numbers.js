/* Everyone draws a numbered ticket.

Those with an even number on their ticket win their ticket number in pounds!

How large does the jackpot need to be?

Example:
The group draws the tickets: [1, 2, 3, 4, 5, 6]

The jackpot needs to be: 2 + 4 + 6 = 12

Task:
Write a function that 
- given an array of drawn ticket numbers
- returns the required number value of the jackpot

- The array will never be empty
- Ticket numbers are not 0, negative or decimals
- If no one draws an even number, the jackpot will be 0

Use either:
- only for loops
*/
Array.prototype.myreduce = function (callback, initialval) {

  for (let i = 0; i < this.length; i++) {
    let initialval = callback(intialval, this[i], i, this);
  }
  return intialval;
}


function jackpotSize (arr) {
  //write your code here
  return arr.myreduce((item, cu => item % 2 === 0 ? item : );
}

//Tests:
console.log(jackpotSize([1, 2, 3, 4, 5, 6]), "Should return 12");
console.log(jackpotSize([45, 4, 9, 12, 5, 6]), "Should return 22");
console.log(jackpotSize([1, 3, 5, 7]), "Should return 0");
console.log(jackpotSize([2, 2, 2, 12, 6]), "Should return 24");














/*
Bonus:
Is a jackpot of £20 enough? 
*/