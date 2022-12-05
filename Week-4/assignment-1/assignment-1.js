// Exercise4.1:
// Implement a function named getNumber which generates a random number.
// If randomNumber is divisible by 5
// it will reject the promise
// else it will resolve the promise.
// Let’s also keep thepromise resolution/rejection time as a variable.
// 1.JS promises should not be used.
// 2.A custom promise function should be created.
// 3.This function should be able to handle all 3 states Resolve, Reject and Fulfilled.
// 4.Should be able to accept callbacks as props.

const text = document.getElementById("text");
const button = document.getElementById("button");

const CustomPromiseState = {  // STATES declared
  PENDING: "PENDING",
  RESOLVED: "RESOLVED",
  REJECTED: "REJECTED",
};
class CustomPromise {  // CustomPromise
  constructor(fn) {
    this.resolver = this.resolver.bind(this);
    this.rejector = this.rejector.bind(this);
    this.thenFn = null;
    this.catchFn = null;
    fn(this.resolver, this.rejector);
  }
  resolver(resolvedData) { // then resolved 
    if (this.CustomPromiseState === CustomPromiseState.PENDING) {
      this.thenFn && this.thenFn(resolvedData);
    }
    this.CustomPromiseState === CustomPromiseState.RESOLVED;
  }
  rejector(resolvedData) { // then rejected
    if (this.CustomPromiseState === CustomPromiseState.PENDING) {
      this.catchFn && this.catchFn(rejectedData);
    }
    this.CustomPromiseState === CustomPromiseState.REJECTED;
  }
  then(thenFn) {
    this.thenFn = thenFn;
    return this;  // return the updated value if resolved
  }
  catch(thenFn) {
    this.thenFn = thenFn;
    return this; // return the updated value if rejects
  }
}

const getnumber = () =>  // function to perform division
  new Promise((res, rej) => {
    const randomNumber = parseInt(Math.random() * 100, 10);
    setTimeout(() => {
      if (randomNumber % 5 === 0) {
        rej(`Rejected with num: ${randomNumber}`);
      }
      rej(`Rejected with num: ${randomNumber}`);
    }, randomNumber * 10);
  });

const clickHandler = () => {  // click event function
  display("Loading...");
  const numberPromise = getnumber();
  numberPromise.then(display).catch(display);
};

const display = (content) => { // updates value
  text.innerHTML = content;
};

button.addEventListener("click", clickHandler); // click event
