function isBalanced(exp) {
    // Initialize a stack to store open brackets
    let stack = [];

    // Iterate through the expression string
    for (let i = 0; i < exp.length; i++) {
        let char = exp[i];

        // If the current character is an open bracket, push it to the stack
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            // If the current character is a closing bracket
            // check if it matches the last open bracket in the stack
            let lastOpenBracket = stack.pop();
            if (
                (char === ')' && lastOpenBracket !== '(') ||
                (char === ']' && lastOpenBracket !== '[') ||
                (char === '}' && lastOpenBracket !== '{')
            ) {
                return false;
            }
        }
    }

    // If all brackets are balanced, the stack should be empty
    return stack.length === 0;
}
console.log(isBalanced("{([])}")); // Output: true
console.log(isBalanced("[(])")); // Output: false

//The time complexity of this function is O(n) as it iterates through the expression string of length n once.
// The space complexity is also O(n) as the stack used to store open brackets can have a maximum size of n.