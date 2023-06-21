function hasLoop(head, x) {
  // Initialize two pointers, fast and slow
  let slow = head;
  let fast = head;

  // Move fast pointer x steps ahead
  for (let i = 0; i < x; i++) {
    fast = fast.next;
  }

  // Move both pointers at the same pace
  // If there is a loop, they will eventually meet
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

// create linked list [1, 3, 4] with x = 2
let head = { val: 1, next: { val: 3, next: { val: 4, next: null } } };
head.next.next.next = head.next; // create a loop with x = 2
let x = 2;

console.log(hasLoop(head, x)); // Output: true

//The time complexity of this function is O(n) where n is the number of nodes in the linked list.
//The space complexity is O(1) as the function only uses a constant amount of extra memory for the two pointers.