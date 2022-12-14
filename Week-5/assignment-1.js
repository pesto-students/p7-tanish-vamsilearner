const get = () => 'ElonM@2022'; // 3 functions defined
const set = () => 'Elon Musk';
const go = () => 'Silicon Valley, USA';

async function* mixedFunction() {  //async function and generator function
    const v1 = await get();       // await waits until it gets its value
    yield v1;                     // yield returns the value to mixed function

    const v2 = await set();
    yield v2;

    const v3 = await go();
    yield v3;
}

const iteration = mixedFunction()  // intializing the function by assigning it to iteration
iteration.next().then((value) => console.log(value)); // using next() calls mixed function
iteration.next().then((value) => console.log(value));
iteration.next().then((value) => console.log(value));
// here done: true and value: undefined because we have only 3 yielded values after that done : true if you try to executes the function
iteration.next().then((value) => console.log(value));  