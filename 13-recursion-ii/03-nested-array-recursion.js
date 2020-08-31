/* 

https://goo.gl/XRkfQu

*/

function logsAnArray(array) {
  // [1, [2, 3]]
  for (let i = 0; i < array.length; i++) {
    let element = array[i]; // 

    
    // is it a nested array??
    if (Array.isArray(element)) {
      // recursive case
      // call function on nested array
      const nestedArr = element;
      logsAnArray(nestedArr); // logsAnArray([2, 3])
    } else {
      // base case
      console.log(element);
    }

  }
}



logsAnArray([1, [2, [3, [4, [5], 6]]]]);
