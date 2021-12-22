function findFirstDuplicate(arr) {
  // type your code here
  let duplicateFound = false
  let duplicateValue = -1

  if (arr.length === 0 || arr.length === 1) {
    return duplicateValue
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        if (arr[i] === arr[j]) {
          duplicateFound = true
          duplicateValue = arr[i]
          break;
        }
      }
    }

    if (duplicateFound) {
      return duplicateValue
    }
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// let boolean = false
// first loop (i=0; i< array length; i++)
// second loop (j=0; j< array length; j++)
//   in this loop, first make sure we're only comparing with values that we're not currrently holding
//   if (i !== j) {
//     then, compare array spots i to j
//     if (array[i] === array[j]) {
//       change boolean to true
//       return something? or break
//     }
//   }
//   THEN close first loop
//   with if (boolean is true) {
//     return array[i]
//   }

// And a written explanation of your solution
