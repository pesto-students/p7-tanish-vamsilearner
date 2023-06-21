// using a two-pointer approach to find the three integers in the input array whose sum is closest to the given target.
function threeSumClosest(arr, target) {
    // sorting the input array in ascending order.
    arr.sort((a, b) => a - b);
    let closestSum = Infinity;
    for (let i = 0; i < arr.length - 2; i++) {
        // for each element, it initializes two pointers, j and k, to the next and last elements in the array, respectively.
        let j = i + 1;
        let k = arr.length - 1;
        while (j < k) { //while loop that continues as long as j is less than k.
            let sum = arr[i] + arr[j] + arr[k]; 
            //it calculates the sum of the elements at the current positions of the three pointers, and compares it to the target.
            if (sum === target) { //If the sum is equal to the target, it returns the sum.
                return sum;
            }
            else if (sum < target) { //If the sum is less than the target, it increments the j pointer.
                j++;
            }
            else { //If the sum is greater than the target, it decrements the k pointer.
                k--;
            }
            //comparing the absolute difference between the current sum and the target with the absolute difference between 
            //the closest sum found so far and the target. If the current sum is closer, it updates the closest sum.
            closestSum = (Math.abs(sum - target) < Math.abs(closestSum - target)) ? sum : closestSum;
        }
    }
    return closestSum;
}

console.log(threeSumClosest([1,3,6], 5));
//The time complexity of this algorithm is O(n^2) and the space complexity is O(1)