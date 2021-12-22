function findFirstDuplicate(arr) {
  // type your code here
  let duplicateValue = -1

  let uniqueValues = new Set()

  for (const value of arr) {
    // check the set for value
    if (uniqueValues.has(value)) {
      // if the set does already have value, that's your duplicate! 
      duplicateValue = value
      return duplicateValue;

    } else {
      // if the set doesn't have value, add it
      uniqueValues.add(value)
    }
      
  } 
  return duplicateValue;
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
// declare variable = -1, which is what we want to return on default unless we find a duplicate
// declare a new set, which is a JS data structure that by nature only allows unique values
// then, iterate through the provided array to check each value against the set.
//    if the set already has the array value, then we know it's a duplicate and we return that value
//    if the set doesn't have the array value, that means it's a unique value and we'll want to add it to the set
// after the loop is completed, return the first variable 


// And a written explanation of your solution
// After refactoring to use the JS Set data structure, the function now uses the for/of loop to check every value inside the given array.
// In the for/of loop, we're checking if the uniqueValues set already contains the array value. 
// If the set already does have that same value, we know we're holding the duplicate, so we can return that value and end the looping. 
// If the set doesn't already have the array's value, that means it's unique and can be added to the set.
// Since we started by declaring the return value equal to negative one, at the end of the function we'll return that -1 if there were no duplicates found. Otherwise, if there were duplicates, that variable will be reassigned to the duplicate and returned.
// For future refactoring, could get rid of the first variable all together and simply return the duplicate value or -1, depending on whether or not any duplicate is found.
