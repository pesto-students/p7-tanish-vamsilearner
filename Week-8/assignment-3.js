// Definition for a binary tree node
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// Function for binary tree level order traversal
function levelOrder(root) {
    // Check if the root node is null, return an empty array
    if (!root) return [];
    
    // Initialize the result array and the queue
    let result = [];
    let queue = [];
    // Push the root node into the queue
    queue.push(root);
    
    // Loop until the queue is empty
    while (queue.length > 0) {
        // Initialize the level array
        let level = [];
        // Get the size of the queue
        let size = queue.length;
        // Loop through the current level of nodes
        for (let i = 0; i < size; i++) {
            // Shift the node from the front of the queue
            let node = queue.shift();
            // Push the node value into the level array
            level.push(node.val);
            // If the node has a left child, push it into the queue
            if (node.left) queue.push(node.left);
            // If the node has a right child, push it into the queue
            if (node.right) queue.push(node.right);
        }
        // Push the level array into the result array
        result.push(level);
    }
    
    // Return the result array
    return result;
}

// Example input
let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

// Call the levelOrder function with the root node and log the result to the console
console.log(levelOrder(root));  // expected output: [[3], [9, 20], [15, 7]]
