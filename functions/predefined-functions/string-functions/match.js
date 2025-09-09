// used to match a string against a regular expression
// match(regex)
let text = "The rain in SPAIN stays mainly in the plain";
let pattern = /ain/gi; // 'g' for global, 'i' for case-insensitive
console.log(text.match(pattern));