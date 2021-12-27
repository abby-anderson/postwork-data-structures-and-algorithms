function fibonacci(num) {
  // num is the target index
  
  // initialize empty array
  let fibSequence = []

  // if empty, push the starter values of 0 and 1 in 
  if (fibSequence.length === 0) {
    fibSequence.push(0)
    fibSequence.push(1)
  }

  // grab the last two current values in the fibSequence array, add them together, and then push that sum onto the end of the array
  // the while loop will keep that going until the array holds enough items to return the array's value at the index of the provided num 
  while (fibSequence.length < num+1) {
    let a = fibSequence[fibSequence.length-1]
    let b = fibSequence[fibSequence.length-2]
    let sum = a+b
    fibSequence.push(sum)
    console.log(fibSequence)
  }

  // return value associated with num index, fibSeq[num]
  return fibSequence[num]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file

// problem: given n, where n = the targeted index, return the corresponding value in the fib sequence

// there are obviously a lot of ways to do this! I am going to start by declaring an empty array, pushing the first two values in so that we have two values to start the addition pattern
// then, we can grab the last two values in the array by saying 
// let variable = array[array.length-1] and let anotherVariable = array[array.length-2]
// then, let the sum = variable + anotherVariable
// then use array.push(sum) to add that sum into the array
// We'll want to put that into a loop so that it keeps doing this -- choosing the last two array values, finding the sum, and adding it onto the array -- until we're able to return the array's value at the index number that's provided when the function is invoked

// And a written explanation of your solution
// Here's one way to solve this problem. We start by declaring an empty array. Since the pattern in the Fibonacci sequence involves finding the sum of the two final values and then tacking that sum onto the end of the sequence, we'll start by also adding 0 and 1 to the empty array that way we have some values to work with. 
// The next portion will be inside a while loop that checks the array's length. If the array is still too short, we'll grab the two final values, find their sum, and add it to the array.
// Once the array is long enough that we can return the value at the target index, which is the index at the number that's passed in the function invocation, we return that value. 