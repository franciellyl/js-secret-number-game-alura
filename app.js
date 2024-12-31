let secretNumber = generateRandomNumber();
let numberOfTentative = 0;
console.log(secretNumber);

function returnTextInScreen(tag, text){
    let field = document.querySelector(tag);
    field.innerHTML = text;
}

function returnInitialMessage(){
    returnTextInScreen('h1', 'Secret Number Game');
    returnTextInScreen('p', 'Choose a number between 0 and 10');
}

returnInitialMessage();

function validateInputtedNumber() {
    console.log("Verified the inputted number");
    let numberInputted = document.querySelector('input').value;
    console.log(numberInputted == secretNumber);

    if(numberInputted == secretNumber){
        console.log("The player choose the right number.");

        returnTextInScreen('h1', 'Good work!');
        let tentativeWord = numberOfTentative > 1 ? 'tentatives' : 'tentative';
        let tentativeMessage = `You discovery the secret number with ${numberOfTentative} ${tentativeWord}!`;
        returnTextInScreen('p', tentativeMessage);

        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(numberInputted > secretNumber){
            returnTextInScreen('p', 'The secret number is smaller.');
        } else {
            returnTextInScreen('p', 'The secret number is higher.');
        }
        numberOfTentative++
        cleanField();
    }
}

function generateRandomNumber(){
    return parseInt(Math.random() * 10 + 1);
}

function cleanField(){
    numberInputted = document.querySelector('input');
    numberInputted.value = '';
}

function restartGame(){
    secretNumber = generateRandomNumber();
    cleanField();
    numberOfTentative = 1;
    returnInitialMessage();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
