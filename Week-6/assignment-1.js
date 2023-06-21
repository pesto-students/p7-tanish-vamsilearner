// Kadane's algorithm
//function maxSubArray takes in an array A as its input
function maxSubArray(A) {
  //It starts by initializing two variables currentSum and maxSum to the first element of the array A[0].
  let currentSum = (maxSum = A[0]);
  for (let i = 1; i < A.length; i++) {
    //loop starts at index 1 and goes till the end of the array A.
    //In the loop, it first updates the currentSum by taking the maximum of either the current element A[i] or the current sum plus the current element currentSum + A[i].
    currentSum = Math.max(A[i], currentSum + A[i]);
    maxSum = Math.max(maxSum, currentSum); //updates the maxSum by taking the maximum of either the current maximum sum or the current sum.
  }
  return maxSum;  // after loop completion, it returns the maxSum which is the maximum sum of all the subarrays in the input array.
}
console.log(maxSubArray([1, 2, 3, 4, -10]))
// Input: A = [1, 2, 3, 4, -10];

// Output: 10;
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// Input: A = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// Output: 6;

// The time complexity of this algorithm is O(n) and space complexity is O(1
