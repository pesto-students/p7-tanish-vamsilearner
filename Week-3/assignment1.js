// memoize Assignment-1

const memoize = (fn) => {
    let cache = {}       //cache stores value
    return (...args) => {  // args is array
        let cacheKey = args.map(n => n.toString() + '+').join('') // when multiple args passed then cacheKey will seperates the args with '+' , here it is nothing but key
        if (cacheKey in cache) { // checks the cacheKey, if key exists then returns that value without computation
            return cache[cacheKey]
        } else {            // if cachekey not exists then comes to else
            let result = args.reduce((acc, curr) => fn(acc, curr), 0); // reduce used to sum of all the args which are passed 
            cache[cacheKey] = result; //the sum result will update into cache along with cacheKey, it helps when same arguments passed, it directly returns the value without computation.
            return result; //returns sum value
        }
    }
}

const add = (a, b) => a + b  

const memoizeAdd = memoize(add) //add function is passed as arg to memoize function

console.log(memoizeAdd(9, 10));  // 9,10 are passing as args 
console.log(memoizeAdd(11, 10,99));
console.log(memoizeAdd(9, 10));