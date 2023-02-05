// This function finds the label of the town judge in a town, if it exists.
// n: the number of people in the town
// trust: an array of pairs [a, b] representing the trust relationship, where a trusts b
function findJudge(n, trust) {
    // Initialize an array to store the in-degree and out-degree of each person
    let degrees = Array(n + 1).fill(0);
    // Iterate over the trust relationships and update the in-degree and out-degree of each person
    for (let [a, b] of trust) {
        degrees[a]--;
        degrees[b]++;
    }
    // Find the person with in-degree n - 1 and out-degree 0, which satisfies properties 1 and 2
    for (let i = 1; i <= n; i++) {
        if (degrees[i] === n - 1) return i;
    }
    // Return -1 if no such person exists
    return -1;
}

// Test the function with sample input
let n = 2;
let trust = [[1, 2]];

console.log(findJudge(n, trust)); // expected output: 2

// The time complexity of this solution is O(n), where n is the number of people in the town.
// The space complexity of this solution is O(n), where n is the number of people in the town.