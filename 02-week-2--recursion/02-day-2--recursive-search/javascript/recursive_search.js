function recursiveSearch(arr, target) {
  // type your code here
  if (arr.length === 0) {
    return false;
  } 

  // if (arr[0] === target) {
  //   return true;
  // }

  // return recursiveSearch(arr.slice(1), target)

  // here we're checking the first index and sending the others to the next layer of the recursion
  // could we do the reverse? where we check the last index and send the first group up the stack?
  
  if (arr[0] === target) {
    return true
  }
  
  return recursiveSearch(arr.slice(1), target)




}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3, 4, 5, 6], 5));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 15));

  console.log("");


}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
// And a written explanation of your solution
