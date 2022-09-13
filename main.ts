input.onButtonPressed(Button.A, function () {
    lol = randint(0, 1)
    if (lol == 0) {
        basic.showString("Truth")
    } else {
        basic.showString("Dare")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    XD = randint(1, 4)
    if (XD == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (XD == 2) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (XD == 3) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
})
let XD = 0
let lol = 0
basic.showString("Welcome to Truth or Dare!")
