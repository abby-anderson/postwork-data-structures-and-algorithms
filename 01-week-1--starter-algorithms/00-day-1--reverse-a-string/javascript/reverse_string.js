function reverseString(str) {
  const provided_string = str
  const starting_array = str.split("")
  const ending_array = []

  if (provided_string === "") {
    return ""
  } else {
    while (starting_array.length > 0) {
      let last_char = starting_array[starting_array.length -1]
      ending_array.push(last_char)
      starting_array.pop()
    }
    return ending_array.join("")
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

  console.log("");

  console.log("Expecting: 'tac-eiknarf'");
  console.log("=>", reverseString("frankie-cat"));

  console.log("");

  console.log("Expecting: '0987-654-321'");
  console.log("=>", reverseString("123-456-7890"));
}

module.exports = reverseString;

// Please add your working pseudocode to this file

// receive String in function invocation
// const string = "string"

// const array2 = string.split('')
// RETURNS ['s', 't', 'r', 'i', 'n', 'g']

// likely want to split string up so that each character is a value pushed in to the empty array
// declare empty final array
//   isolate last index of startting array
//   push into final array
//   AND pop off of starting array

//   loop through that until the starting array is empty
// return final array



// And a written explanation of your solution

// declare string variable with string provided in fxn invocation
// declare new array and split string into it
// declare final array that we'll push split string into
// if string is only one character, just return that character
// otherwise, while we still have letters left to reverse, we'll find the final character of the string, we'll push it into the final array, and we'll remove it from the starting array
// then after there are no more characters to reverse, we'll return the array BUT first we'll turn it back into a string by joining the value at each index
