let secretNumber = generateRandomNumber();
console.log(secretNumber);

function returnTextInScreen(tag, text){
    let field = document.querySelector(tag);
    field.innerHTML = text;
}

function generateRandomNumber(){
    return parseInt(Math.random() * 10 + 1);
}

function verificarChute() {
    console.log("Verified the inputed number");
    let numberInputed = document.querySelector('input').value;
    console.log(numberInputed == secretNumber)


}

returnTextInScreen('h1', 'Secret Game');
returnTextInScreen('p', 'Choose a number between 0 and 10');
