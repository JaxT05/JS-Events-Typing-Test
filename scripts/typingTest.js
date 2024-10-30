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
document.getElementById("typingElement").innerHTML = spannedTypingElement;

const targetElement = document.querySelectorAll("span");
targetElement[stringIterator].classList.add("selected");

window.addEventListener("keydown", (e) => {
    
    userKeyInput = e.key;
    if (paragraphString[stringIterator] == undefined) {
        restart();
    }
    if (userKeyInput == (paragraphString[stringIterator])) {
        amountCorrect += 1;
        amountCorrectHeader.innerHTML = amountCorrect;
        stringIterator += 1;
    }
    else{
        amountErrors += 1;
        amountErrorsHeader.innerHTML = amountErrors;
    }
    for (i = 0; i < targetElement.length; i++) {
        targetElement[i].classList.remove("selected");
    }
    targetElement[stringIterator].classList.add("selected");
})

restartButton.addEventListener("click", restart);

function restart() {
    restartButton.blur();
    stringIterator = 0;
    amountCorrect = 0;
    amountErrors = 0;
    amountCorrectHeader.innerHTML = amountCorrect;
    amountErrorsHeader.innerHTML = amountErrors;
