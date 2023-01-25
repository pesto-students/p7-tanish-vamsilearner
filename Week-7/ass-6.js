class Queue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  enqueue(x) {
    // push x to s1
    this.s1.push(x);
  }

  dequeue() {
    // if s2 is not empty, pop from s2
    if (this.s2.length !== 0) {
      return this.s2.pop();
    }

    // if s2 is empty, transfer elements from s1 to s2
    while (this.s1.length !== 0) {
      this.s2.push(this.s1.pop());
    }

    // if s2 is still empty, return null
    if (this.s2.length === 0) {
      return null;
    }

    // pop from s2
    return this.s2.pop();
  }
}
let q = new Queue();
q.enqueue(1);
q.enqueue(2);
console.log(q.dequeue()); // prints 1
console.log(q.dequeue()); // prints 2

// The space complexity is O(n) as it uses two stacks to store the elements in the queue.
// The time complexity for the enqueue method is O(1).