// program to count the number of vowels in a string
const data = new Map(); // declares 
const vowels = ["a", "e", "i", "o", "u"]; // defining vowels

function logMapElements(value, key, map) {
  // function
  let count = 0; // initialize count
  // loop through string to test if each character is a vowel
  for (var i = 0; i < value.length; i++) {
    if (vowels.includes(value[i])) {
      count++; //count increment
    }
  }
  console.log("vowels-count", count);
}
data.set('bar', 'auioefoo');  // sets value 
new Map([["count", data.get('bar')]]) // assigns value , get- gets the value from data(map)
  .forEach(logMapElements);
