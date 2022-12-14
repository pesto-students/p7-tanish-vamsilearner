// Create a Set
const letters = new Set(["a","b","c","a","b","e"]);

// List all Elements
let text = "";
function hasDuplicate(mama) {
mama.forEach (function(value) {
  text += value + "";
})
}
hasDuplicate(letters) // calling fn
console.log(text)