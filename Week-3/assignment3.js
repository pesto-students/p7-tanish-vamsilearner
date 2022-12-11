// output :

function createIncrement(){
	let count = 0;          // declared varaible count
function increment(){
  count++; // output -1,2,3 
}
let message = `Count is ${count}`; // update the '0' value, Bcz CreateIncrement function Executes first,
                                    // Then inside lines get executes
function log() {
  console.log(message); //output -  "Count is 0"
}
return [increment, log];  
}
const [increment,log] = createIncrement(); // here createIncrement executes first, so "count is '0'" after that when we call functions
                                            // but functions inside the createIncrement function will executes when we call with its name.

increment(); //increments the count then this function calls
increment();
increment();
log();  // consoles the message then this function calls

output:  "Count is 0"