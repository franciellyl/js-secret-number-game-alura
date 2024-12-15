alert("Welcome to the secret number game!");
let secretNumber = 7;
let numberFromUser = prompt("Choose a number between 1 and 15.");

if (secretNumber == numberFromUser){
    alert(`Awesome! You discovery the secret number: ${secretNumber}! :D`);
} else {
    alert("Sorry, you're wrong! Try again.")
    numberFromUser = prompt("Choose another number between 1 and 15.");
    if(secretNumber == numberFromUser){
        alert(`Awesome! You discovery the secret number: ${secretNumber}! :D`);
    } else {
        alert("Sorry, you're wrong! Game Over!")
    }
}

