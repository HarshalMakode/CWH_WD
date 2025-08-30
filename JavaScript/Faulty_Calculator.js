const prompt = require("prompt-sync")();

console.log("\nSelect the operation");
console.log("0. Exit");
console.log("1. Addition");
console.log("2. Subtraction");
console.log("3. Multiplication");
console.log("4. Division");

var ch;
do {

    ch = parseInt(prompt("Enter your choice: "));

    if (ch === 0) {
        console.log("Exiting...");
        break;
    }

    // take inputs
    let a = parseFloat(prompt("Enter first number: "));
    let b = parseFloat(prompt("Enter second number: "));

    let faultRate = Math.random();

    if (faultRate < 0.5) {
        // faulty operations
        switch (ch) {
            case 1:
                console.log("Result: " + (a - b));
                break;
            case 2:
                console.log("Result: " + (a + b));
                break;
            case 3:
                if (b === 0) {
                    console.log("Invalid input");
                } else {
                    console.log("Result: " + (a / b));
                }
                break;
            case 4:
                console.log("Result: " + (a * b));
                break;
            default:
                console.log("Invalid choice");
        }
    } else {
        // correct operations
        switch (ch) {
            case 1:
                console.log("Result: " + (a + b));
                break;
            case 2:
                console.log("Result: " + (a - b));
                break;
            case 3:
                console.log("Result: " + (a * b));
                break;
            case 4:
                if (b === 0) {
                    console.log("Invalid input");
                } else {
                    console.log("Result: " + (a / b));
                }
                break;
            default:
                console.log("Invalid choice");
        }
    }

} while (ch !== 0);

console.log("Thank You!!");
