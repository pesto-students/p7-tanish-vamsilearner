const Fib = (num) => ( {
    [Symbol.iterator]: () => { //  adds @iterator method to object
        let i = 0;              // variable declared, recurring value based on if condition
        let old = 0, latest = 0;  // variables declared to the store/update values
        return {  
            next : () => { //  iterator method should return a object, with method next
                if (i++ <= num) {
                    [old, latest] = [latest, (old + latest) || 1];  // updates value
                    return { value: old, done: false} // returns value based on condition
                } else {
                    return { done: true } // returns value
                }
            }
        }

    }
})

console.log([...Fib(6)]); // passing the paramters while calling the function here 