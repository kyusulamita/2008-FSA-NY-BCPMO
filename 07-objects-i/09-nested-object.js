/* objects can store any type of value, including arrays and other objects */


let pusheen = {
  name: 'Pusheen',
  age: 7,
  siblings: {
    sister: 'Stormy',
    brother: 'Pip'
  }
};


// console.log(pusheen.siblings.sister); // 'Stormy'
// console.log(pusheen.siblings.brother); // 'Pip'
// console.log(pusheen['siblings']['sister'])
// console.log(pusheen)

const siblingToLookFor = "brother";

// the same
console.log(pusheen["siblings"][siblingToLookFor]);
console.log(pusheen.siblings[siblingToLookFor]);

// const siblings = pusheen.siblings;
// console.log(siblings[siblingToLookFor])

// making a copy of the object
const siblings = Object.assign({}, pusheen.siblings);

siblings.lilBrother = 'Tom'

console.log(siblings);

console.log(pusheen);