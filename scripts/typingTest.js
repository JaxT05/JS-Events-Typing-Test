let typingElement = document.getElementById("typingElement");
let restartButton = document.getElementById("restartButton");
let amountCorrectHeader = document.getElementById("amountCorrectHeader");
let amountErrorsHeader = document.getElementById("amountErrorsHeader");

let paragraphString = typingElement.innerText;
let spannedTypingElement = "";
let stringIterator = 0;
let amountCorrect = 0;
let amountErrors = 0;

for (i = 0; i < paragraphString.length; i++) {
    spannedTypingElement += "<span>" + paragraphString[i] + "</span>";
}
typingElement.innerHtml = spannedTypingElement;

document.querySelector(`span:nth-child(${stringIterator})`).classList.add("selected");

window.addEventListener("keydown", (event) => {
    userKeyInput = event.key;
    console.log(userKeyInput);
    if (userKeyInput == (paragraphString[stringIterator])) {
        amountCorrect += 1;
        amountCorrectHeader.innerHTML = "Correct: " + amountCorrect;
        stringIterator += 1;
    }
    else{
        amountErrors += 1;
        amountErrorsHeader.innerHTML = "Errors: " + amountErrors;
    }
})

restartButton.addEventListener("click", () => {
    stringIterator = 0;
})