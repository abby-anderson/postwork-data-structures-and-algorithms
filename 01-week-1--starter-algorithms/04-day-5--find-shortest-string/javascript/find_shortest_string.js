function findShortestString(arr) {
  // type your code here

  let shortestWord = arr.reduce((a,b) => a.length <= b.length? a :  b)

  return shortestWord
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dandelion']));

  console.log("");

  console.log("Expecting: 'mai'");
  console.log("=>", findShortestString(['abby', 'david', 'frances', 'mai']));

  console.log("");

  // BENCHMARK HERE
  const startTime = Date.now()
  for (let i = 0; i < 1000; i++) {
    findShortestString(['flower', 'juniper', 'lily', 'dandelion'])
  }
  const averageTime = (startTime - Date.now()) / 1000
  console.log(averageTime)
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// Use arr.reduce method and a ternary to check if a.length is <= b.length -- if true, set shortestWord to a, if false, set shortestWord to b
// Save the product in a shortestWord variable
// after working through the whole array, return shortestWord

// And a written explanation of your solution
// We're using the array.reduce method on the array that's passed in when the function is called. We look through each word in the array comparing them to each other. If the first is less than or equal to the second, we return the first word -- if not, we return the second. We store that return in a variable called shortestWord. Once the reduce method has compared all the words, we return the shortestWord.
