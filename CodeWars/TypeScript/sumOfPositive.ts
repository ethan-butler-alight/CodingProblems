// Link:
/* Instructions:
 */
// Concepts to Note: forEach, filter, reduce, not here but look into using thisArg and callback functions on forEach

// My Solution
export function positiveSum(arr: number[]): number {
  let sum: number = 0;
  arr.forEach((elem) => {
    if (elem > 0) {
      sum += elem;
    }
  });
  return sum;
}

/*
Top Solution
export function positiveSum(arr:number[]):number {
  return arr.filter((e) => e >= 0).reduce((acc, e) => acc + e , 0)
}
*/
