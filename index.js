const cardsInHand = []
let sum;
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name : "Tim",
    chips : 145
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
    isAlive = true

    for (i = 0; i < 2; i++) {
        cardsInHand.push(getRandomCard())
    }

    sum = cardsInHand.reduce(function(x,y) {
        return x+y;
    }, 0)

    renderGame()
}

function getRandomCard() {
    let randomCardValue = Math.floor(Math.random() * 13) + 1

    if (randomCardValue === 1) {
        return 11
    } else if (randomCardValue > 10 && randomCardValue <= 13) {
        return 10
    } else {
        return randomCardValue
    }
}

function renderGame() {
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
    if (isAlive === true && hasBlackJack === false) {
        let drawnCard = getRandomCard()
        cardsInHand.push(drawnCard)
        sum += drawnCard
        renderGame()
    }
}