const foo = function*() { // generator fn
  yield 'a';  // yield returns the values
  yield 'b';
  yield 'c';
};

let str = '';
for (const val of foo()) { // loop
  str = str + val;
}

console.log(str);

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