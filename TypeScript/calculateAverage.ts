// Link: https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/typescript
/* Instructions:
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
 */
// Concepts to Note: reduce, NaN, ternary operator
// My Solution
export function findAverage(array: number[]): number {
  let sum: number = 0;
  let length: number = 0;
  if (array && typeof array.length === "number") {
    sum = array.reduce((acc, val) => acc + val, 0);
    length = array.length;
  }
  if (Number.isNaN(sum / length)) {
    return 0;
  }
  return sum / length;
}

/*
Top Solution
export function findAverage(array: number[]): number {
  return !array.length ? 0 : array.reduce((a, b) => a + b, 0) / array.length;
}
*/
