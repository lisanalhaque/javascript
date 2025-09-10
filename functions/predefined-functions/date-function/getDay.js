// used to get the day of the week from a date object
const date = new Date();
const dayOfWeek = date.getDay();
console.log(dayOfWeek);
// Note: Days are 0-indexed (0 = Sunday, 1 = Monday, ..., 6 = Saturday)