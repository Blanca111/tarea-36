radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == ID) {
        hasDuck = true
        basic.showIcon(IconNames.Ghost)
    } else {
        hasDuck = false
    }
})
input.onButtonPressed(Button.A, function () {
    if (hasDuck) {
        sendTo = randint(1, players)
        if (sendTo != ID) {
            hasDuck = false
            basic.clearScreen()
            radio.sendNumber(sendTo)
        }
    }
})
let sendTo = 0
let hasDuck = false
let ID = 0
let players = 0
players = 3
ID = 3
basic.showNumber(ID)
if (ID == randint(1, players)) {
    hasDuck = true
} else {
    hasDuck = false
}
radio.setGroup(42)
