/* Pseudocode
*
* The user enters a number
* A loop starts with a variable (i) ininitialized to 1
* The variable increments by one after each loop iteration
* The console outputs the variable value as long as the variable if not a mulitiple of either 3 or 5
* If the current number is divisible by 3 then print "Fizz"
* If the current number is divisible by 5 then print "Buzz"
* If the current number is divisible by both 3 and 5 then print "FizzBuzz"
*/
const prompt = require ("prompt-sync")({sigint: true})


let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}