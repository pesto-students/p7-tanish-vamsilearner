function sortArray(arr) {
    //  initializing an array count of length 3 with all values set to 0
    let count = [0, 0, 0];
    // loop that iterates through the input array, and for each element, 
    // it increments the corresponding element in the count array. 
    //  if the current element is 0, it increments the first element in the count array.
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }
    // After counting the number of occurrences of each element, it sets an index variable to 0, 
    // and then enters three nested loops, one for each element (0, 1, 2).

    //In each loop, it iterates as many times as the count of the corresponding element in the count array.
    //  For example, if the count of 0s is 3, it will iterate 3 times.

    //In each iteration, it assigns the current element to the corresponding index in the input array, 
    // and increments the index variable.
    let index = 0;
    for (let i = 0; i < count[0]; i++) {
        arr[index] = 0;
        index++;
    }
    for (let i = 0; i < count[1]; i++) {
        arr[index] = 1;
        index++;
    }
    for (let i = 0; i < count[2]; i++) {
        arr[index] = 2;
        index++;
    }
    //At the end of the three nested loops, 
    // the input array is sorted in ascending order with 0s, 1s, and 2s in it.
    return arr;  // returns arr
}
console.log(sortArray([0, 2, 1, 2, 0]));
// time complexity of this algorithm is O(n) and 
// space complexity is O(1) because it only uses a constant amount of extra space to store the count array.