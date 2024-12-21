alert("Welcome to the secret number game!")
let maximeNumber = 100;
let secretNumber = parseInt(Math.random() * maximeNumber + 1)
console.log(secretNumber)
let numberFromUser
let tentatives = 1;

while(numberFromUser != secretNumber){
    numberFromUser = prompt(`Choose a number between 1 and ${maximeNumber}.`)
    if(secretNumber == numberFromUser){
        break;
    } else {
        if(numberFromUser > secretNumber){
            alert(`The secret number its smaller than number ${numberFromUser}.`)
        } else {
            alert(`The secret number its greather than number ${numberFromUser}.`)
        }
        tentatives++
    }
}

let wordTentatives = tentatives > 1 ? 'tentatives' : 'tentative';
alert(`Awesome! You discovery the secret number with ${tentatives} ${wordTentatives}! :D`)
