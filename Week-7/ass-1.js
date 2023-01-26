function reverseLinkedList(head) {
    // Initialize variables to keep track of the current node, previous node, and next node
    let prev = null;
    let current = head;
    let next = null;

    // Iterate through the linked list
    while (current) {
        // Store the next node in the list
        next = current.next;
        // Reverse the current node's pointer to point to the previous node
        current.next = prev;
        // Move the previous node up one
        prev = current;
        // Move the current node up one
        current = next;
    }
    // The new head of the reversed list is the previous node
    return prev;
}

//  linked list
let head = { val: 1, next: { val: 3, next: { val: 4, next: null } } };

console.log(reverseLinkedList(head));
