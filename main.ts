let hand = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("tie")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("loss")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("win")
})
input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showIcon(IconNames.Diamond)
    } else if (hand == 2) {
        basic.showIcon(IconNames.Scissors)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
loops.everyInterval(15000, function () {
    basic.clearScreen()
})
