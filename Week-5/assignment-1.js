// generator 
async function* foo() {  // generateor fn (*)
    yield await Promise.resolve('a');  // yields (returns the value when promise resolved)
    yield await Promise.resolve('b');
    yield await Promise.resolve('c');
  }
  let str = ''; //declaring variable
  async function generate() {  // fn
    for await (const val of foo()) { // loop 
      str = str + val;
    }
    console.log(str);
}
generate();     // calling fn

// async 
function resolveAfter2Seconds() {  // fn
    return new Promise(resolve => { 
        setTimeout(() => {          //async fn
          resolve('abc');           
        }, 0);
    });
}
    
async function asyncCall() {    // sync
    const result = await resolveAfter2Seconds();  // awaits until executes
    console.log(result);
}
asyncCall();  // calling fn