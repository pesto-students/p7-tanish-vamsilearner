//  linked list
let head = { val: 1, next: { val: 3, next: { val: 4, next: null } } };

let array = [];
let temp = head;
while (temp !== null) { //loop
    array.push(temp.val); //pushs value
    temp = temp.next;    // goes to next node
}
array.push("null");
array.reverse();
console.log(array.join("-->"));
