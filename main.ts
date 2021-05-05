radio.onReceivedNumber(function (receivedNumber) {
    if (Clock < Noon) {
        Clock += 1
    }
})
let Noon = 0
let Clock = 0
radio.setGroup(268)
Clock = 1
Noon = 8
basic.forever(function () {
    if (Clock >= Noon) {
        radio.sendNumber(0)
        game.addScore(1)
        basic.pause(200)
        Clock = 0
    } else {
        basic.pause(100)
        Clock += 1
    }
})
