alert("Welcome to the secret number game!");
let secretNumber = 7;
let numberFromUser
let tentatives = 1;

while(numberFromUser != secretNumber){
    numberFromUser = prompt("Choose a number between 1 and 15.")
    if(secretNumber == numberFromUser){
        alert(`Awesome! You discovery the secret number: ${secretNumber}! :D`)
        break;
    } {
        if(numberFromUser > secretNumber){
            alert(`The secret number its smaller than number ${numberFromUser}.`)
        } else {
            alert(`The secret number its greather than number ${numberFromUser}.`)
        }
        tentatives = tentatives + 1
    }
}

