/* eslint-disable guard-for-in */
/* 

https://goo.gl/mVK9Jt

https://goo.gl/MWfh9V
*/

function sumVals(obj) {
  // obj => { a: 1, b: { c: 3 }}
  let sum = 0; // 4
  for (let key in obj) { // 
    let value = obj[key]; //
    if (typeof value === 'object') {
      // recursive case
      const nestedObj = value; //  nestedObj => { c: 3}
      // sumOfNestedObj = sumVals({ c : 3})
      // sumOfNestedObj = 3
      const valueOfNestedObj = sumVals(nestedObj);
      sum += valueOfNestedObj;
    } else {
      // base case
      sum += value;
    }
  }
  // => 4
  return sum;
}

// functionSumVals({c : 3}) => 3
// function sumVals(obj) {
//   // obj => { c: 3 }
//   let sum = 0; // 3
//   for (let key in obj) { // c
//     let value = obj[key]; // 3
//     if (typeof value === 'object') {
//       // recursive case
//       const nestedObj = value
//       const returnedVal = sumVals(nestedObj);

//     } else {
//       // base case
//       sum += value;
//     }
//   }
//   // => 3
//   return sum;
// }

// let result = sumVals({ a: 1, b: { c: 3 }}); // 4

let result = sumVals({
  a: 1,
  b: {
    c: {
      d: {
        e: 2,
        f: 3
      }
    }
  }
})

console.log(result);