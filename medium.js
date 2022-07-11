
// MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month. For example: if the user enters the number 3, then it should return the month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).

const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]; 

function monthFunct(input){
    input =+1;
    if (1 <= input <= 12){
        console.log(months[input]);
    }
    else {
        return "invalid input!";
    }
}
const input = prompt();
console.log(monthFunct(input));
