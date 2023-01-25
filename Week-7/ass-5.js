function nextGreaterElement(arr) {
  // Initialize the result array with -1 as the first element
  var result = [-1];
  // Initialize the stack with the first element of the input array
  var stack = [arr[0]];

  // Iterate through the input array starting from the second element
  for (var i = 1; i < arr.length; i++) {
    // Get the next element in the array
    var next = arr[i];

    // Check if the stack is not empty
    if (stack.length > 0) {
      // Pop the top element from the stack
      var element = stack.pop();

      // Keep popping elements from the stack while they are less than the current element
      while (element < next) {
        // Print the next greater element for the popped element
        console.log(element + " --> " + next);

        // Check if the stack is now empty
        if (stack.length == 0) {
          // If the stack is empty, break out of the loop
          break;
        }

        // Pop the next element from the stack
        element = stack.pop();
      }

      // If the popped element is greater than the current element,push it back onto the stack
      if (element > next) {
        stack.push(element);
      }
    }

    // Push the current element onto the stack
    stack.push(next);
  }

  // After iterating through the entire array, any remaining elements in the stack have no next greater element
  // So we print each element with -1 as the next greater element
  while (stack.length > 0) {
    var element = stack.pop();
    console.log(element + " --> -1");
  }
}
nextGreaterElement([1, 3, 2, 4]);

// The time complexity of this function is O(n) because it iterates through the input array once and performs a constant amount of operations for each element.
// The space complexity is also O(n) because it uses a stack to store elements, and the size of the stack can grow up to the size of the input array.