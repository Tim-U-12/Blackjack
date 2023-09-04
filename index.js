let cardOne = 5
let cardTwo = 6
let sum = cardOne + cardTwo
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function startGame() {
    sumEl.textContent += sum
    cardsEl.textContent += cardOne + " | " + cardTwo

    if (sum < 21) {
        message = "Do you want to draw another card?"
    } else if (sum === 21) {
        message = "WooHoo! You've got BlackJack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCard() {
    
}