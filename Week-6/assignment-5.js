function pairWithDifference(arr, B) {
    let set = new Set(); //initializing an empty set.
    for (let i = 0; i < arr.length; i++) {
        //In each iteration, it checks if the set contains an element that is equal to the current element minus 
        //the given difference B or the current element plus the given difference B.
        if (set.has(arr[i] - B) || set.has(arr[i] + B)) {
            // if it finds such an element, it returns 1, indicating that a pair with the given difference has been found.
            return 1;
        }
        set.add(arr[i]);
    }
    // If the loop completes without finding such an element, the function returns 0, indicating that no such pair was found.
    return 0;
}
console.log(pairWithDifference([3,1,2,2,6], 1));
// The time complexity of this algorithm is O(n) and space complexity is O(n
