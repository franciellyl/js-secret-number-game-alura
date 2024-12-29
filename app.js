let secretNumber = generateRandomNumber();
console.log(secretNumber);

function returnTextInScreen(tag, text){
    let field = document.querySelector(tag);
    field.innerHTML = text;
}

function generateRandomNumber(){
    return parseInt(Math.random() * 10 + 1);
}

function validateInputtedNumber() {
    console.log("Verified the inputted number");
    let numberInputed = document.querySelector('input').value;
    console.log(numberInputed == secretNumber)
    if(numberInputed == secretNumber){
        console.log("The player choose the right number.")
        alert(`Good work! You discovery the secret number ${numberInputed}`)
    } else {
        alert("Please, try again!")
        document.getElementById('input').value='';
    }
}

returnTextInScreen('h1', 'Secret Game');
returnTextInScreen('p', 'Choose a number between 0 and 10');
