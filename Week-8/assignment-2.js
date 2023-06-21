function isValidBST(root, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
    // If the current node is null, it's a valid BST
    if (!root) return true;

    // If the value of the current node is outside the min/max range, it's not a valid BST
    if (root.val <= min || root.val >= max) return false;

    // Recursively validate the left and right subtrees, using the current node's value as the new min/max
    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
}

let root = {
    val: 2,
    left: {
        val: 1,
        left: null,
        right: null
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
};

console.log(isValidBST(root));  // expected output: true
