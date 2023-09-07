const cardsInHand = [5, 6]
let sum = cardsInHand.reduce(function(x,y) {
    return x+y;
}, 0)
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function startGame() {
    sumEl.textContent = 'Sum: ' + sum
    cardsEl.textContent = 'Cards: ' + cardsInHand.join(' | ')

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
    let drawnCard = 11
    cardsInHand.push(drawnCard)
    sum += drawnCard

    startGame()
}