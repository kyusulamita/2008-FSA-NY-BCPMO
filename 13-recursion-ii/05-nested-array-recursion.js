/*

https://goo.gl/9tzNEC

https://goo.gl/46nYK4

*/

// will always return a string
// will return a string
// @param array
// @returns string
function concatEls(array) {
  // ['a', ['b', 'd']]
  let finalString = ''; // 'abd'
  for (let i = 0; i < array.length; i++) {
    let element = array[i]; //
    // checking to see is this nested
    if (Array.isArray(element)) {
      // recursive case
      const nestedArr = element;
      // nestedConcat => 'bd'
      nestedArr = concatEls(nestedArr); // concatEls(['b', 'd'])
      finalString += nestedConcat; // 
    } else {
      // base case
      finalString += element;
    }
  }
  // 'abd'
  return finalString;
}

// concatEls(['b', 'd']) => 'bd'
// function concatEls(array) {
//   // ['b', 'd']
//   let finalString = ''; // 'bd'
//   for (let i = 0; i < array.length; i++) {
//     let element = array[i]; // 'd'
//     // checking to see is this nested
//     if (Array.isArray(element)) {
//       // recursive case
//       const nestedArr = element;
//       // nestedConcat
//       const nestedConcat = concatEls(nestedArr); // 
//       finalString += nestedConcat;
//     } else {
//       // base case
//       finalString += element;
//     }
//   }
//   //  => 'bd'
//   return finalString;
// }

let result = concatEls(['a', ['b', ['d', ['e']]]]);
console.log(result);
