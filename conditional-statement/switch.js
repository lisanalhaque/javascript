const prompt = require('prompt-sync')();

let day = prompt("Enter the day: ");

switch (day) {
    case "monday":
        console.log("Start of the work week.");
        break;
    case "friday":
        console.log("End of the work week.");
        break;
    case "saturday":
    case "sunday":
        console.log("It's the weekend!");
        break;
    default:
        console.log("Midweek days are busy.");
}
