function selectionSort(arr) {
  // type your code here
  let arrLength = arr.length

  for (let i = 0; i < arrLength; i++) {
    let min = i

    for (let j = i+1; j < arrLength; j++) {
      if (arr[min] > arr[j]) {
        min = j
      }
    }
    if (min !== i) {
      let temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
    }
  }

  return arr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  console.log("Expecting: [-5, -1, 1, 3, 9, 15]");
  console.log("=>", selectionSort([1, 15, 3, -1, 9, -5]));

  console.log("");

  console.log("Expecting: [-1, -1]");
  console.log("=>", selectionSort([-1, -1]));

  console.log("");

  

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;
// Thinking through the problem
// Loop through the elements in the unsorted array passed in when the function is invoked
// For each element, compare it to each other element. If it's less than the others, it's the minimum element. At the end of the element's comparison, move it to the lefternmost position in the array
// Once we've iterated through all the elements, we should have a full sorted array, which we can return as the last step


// Please add your pseudocode to this file

//   for (let i = 0; i < arr.length; i++) {
//     compare arr[i] to each other value
//     if arr[i] <= next value 
//       then arr[i] is the minimum
//       otherwise, the other value is the minimum
//       move the minimum to the left side of arr 
//     then keep doing this through all the values until the arr is sorted
//   }

//   return arr


// And a written explanation of your solution
// We're using nested for loops to complete this possible solution where we take two elements, compare them to find the minimum, and iterate through all the elements this way. As we iterate through th elements performing this comparison, we update the minimum value as we go, and once we're through with a loop we move the minimum to the left. 
// Once we do this comparison and movement for each group of two elements, we'll have checked through the entire array and it will be sorted. Then, we just return the final sorted array.
