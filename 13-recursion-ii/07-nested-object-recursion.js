/* eslint-disable guard-for-in */
/* 

https://goo.gl/mVK9Jt

https://goo.gl/MWfh9V
*/

function sumVals(obj) {
  // 
  let sum = 0; // 4
  for (let key in obj) { // c
    let value = obj[key]; // 3
    // is this a nested object??
    if (typeof value === 'object') {
      // recursive case
      const nestedObj = value
// 3
      const sumOfNestedObj = sumVals(nestedObj);
      // 1 + 3
      sum += sumOfNestedObj;
    } else {
      // base case
      sum += value;
    }
  }
  return sum;
}


let result = sumVals({ a: 1, b: { c: 3 }}); // 4

// let result = sumVals({
//   a: 1,
//   b: {
//     c: {
//       d: {
//         e: 2,
//         f: 3
//       }
//     }
//   }
// })

console.log(result);