// Link: https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/typescript
/* Instructions:
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.



*/
// Concepts to Note: spread operator, map, string.reverse(), array.push(), Number.parseInt(), string.length, toString()
// My Solution
export const digitize = (n: number): number[] => {
  // Convert the number to a string
  let numString: string = n.toString();

  // Create an array to store the result
  let nums: number[] = [];

  // Iterate through the array in reverse and push each number into a new array
  for (let i: number = numString.length - 1; i >= 0; i--) {
    nums.push(Number.parseInt(numString[i]));
  }

  return nums;
};

/*
Top Solution
export const digitize = (n: number): number[] => {
  return [...n.toString()].map(Number).reverse();
};
*/
