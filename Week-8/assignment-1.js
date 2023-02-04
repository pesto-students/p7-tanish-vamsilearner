// The function for finding the maximum depth of a binary tree
function maxDepth(root) {
  // If the current node is null, return 0
  if (!root) return 0;

  // Recursively find the maximum depth of the left and right subtrees
  // and return the larger one, plus 1 to account for the current node
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

// The binary tree defined as a nested object
let root = {
  val: 3,
  left: {
      val: 9,
      left: null,
      right: null
  },
  right: {
      val: 20,
      left: {
          val: 15,
          left: null,
          right: null
      },
      right: {
          val: 7,
          left: null,
          right: null
      }
  }
};

console.log(maxDepth(root));  // expected output: 3
