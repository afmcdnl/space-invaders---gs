input.onButtonPressed(Button.A, function () {
    star_ship.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    shoot = game.createSprite(star_ship.get(LedSpriteProperty.X), star_ship.get(LedSpriteProperty.Y))
    shoot.change(LedSpriteProperty.Brightness, 80)
    for (let index = 0; index < 4; index++) {
        shoot.change(LedSpriteProperty.Y, -1)
        basic.pause(150)
        if (shoot.isTouching(enemy)) {
            enemy.delete()
            shoot.delete()
            game.addScore(1)
        }
    }
    if (shoot.get(LedSpriteProperty.Y) <= 0) {
        shoot.delete()
    }
})
input.onButtonPressed(Button.B, function () {
    star_ship.move(1)
})
let enemy: game.LedSprite = null
let shoot: game.LedSprite = null
let star_ship: game.LedSprite = null
star_ship = game.createSprite(2, 4)
game.setScore(0)
basic.forever(function () {
    enemy = game.createSprite(randint(0, 4), 0)
    enemy.set(LedSpriteProperty.Brightness, 150)
    basic.pause(100)
    enemy.turn(Direction.Right, 90)
    for (let index = 0; index < 4; index++) {
        enemy.move(1)
        basic.pause(500)
    }
    if (enemy.isTouching(star_ship)) {
        game.gameOver()
    }
    if (enemy.isTouchingEdge()) {
        enemy.delete()
    }
})
