//assignment-4 - question: Refactor the above stack implementation, using the concept of closure, 
// such that there is noway to access items array outside of createStack() function scope: 
function createStack(){
    let items = []  // Let is Blocked scope, so it is accessible only on this createStack function &
                    //items is now privately accessible for push, pop methods because this two are now in closure function. 
    return {
        push(item) {
            items.push(item);
        },
        pop(item) {
            return items.pop();
        }
    };
}
const stack = createStack();
stack.push(10);
stack.push(5);
console.log(stack.pop());// => 5
console.log(stack.items);// => undefined