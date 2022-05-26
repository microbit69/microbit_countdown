input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
})
basic.forever(function () {
    for (let Index = 0; Index <= 100; Index++) {
        basic.showNumber(Index)
    }
})
