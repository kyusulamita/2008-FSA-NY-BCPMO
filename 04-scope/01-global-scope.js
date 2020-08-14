// on the global scope'

console.log('outer', global);

let global = 'hamster';

console.log('outer', global);
function funFunction() {
  // functional scope
  console.log('inner', global);
}


funFunction();
