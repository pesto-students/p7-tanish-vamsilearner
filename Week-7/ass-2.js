class Node { //creating a class Node with a constructor that takes in a data parameter and assigns it to the data property of the object. 
  constructor(data) {
    this.data = data;
    this.next = null; //assigns null to the next property, which will be used to link nodes together to form a linked list.
  }
}

function arrayToLinkedList(arr) { //The arrayToLinkedList function takes in an array and converts it into a linked list data structure.
  let head = new Node(arr[0]); //creates a new Node for the first element of the array and assigns it to the head of the list.
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new Node(arr[i]); //creates a new Node for each subsequent element of the array and assigns it to the next property of the previous node.
    current = current.next;
  }
  return head;
}

function leftShiftLinkedList(head, k) { // takes in the head of the linked list and k, and performs the left shift operation on the linked list.
  let current = head;
  let kthNode = head;
  let count = 0;
  while (count < k) { // while loop condition
    current = current.next;
    count++;
  }
  while (current.next) {
    current = current.next;
    kthNode = kthNode.next;
  }
  current.next = head;
  head = kthNode.next;
  kthNode.next = null;
  return head;
}

let arr = [2, 4, 7, 8, 9];
let head = arrayToLinkedList(arr);
let shiftedHead = leftShiftLinkedList(head, 3);
let shiftedArr = [];
while (shiftedHead) {
  shiftedArr.push(shiftedHead.data);
  shiftedHead = shiftedHead.next;
}
console.log(shiftedArr);

//The space complexity is O(n)
//The time complexity  is O(n)
