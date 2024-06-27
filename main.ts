namespace SpriteKind {
    export const UI = SpriteKind.create()
}
let gate1 = true
let gate2 = true
let gate3 = true
let gate4 = true
let gate5 = true
let mySprite = Render.getRenderSpriteVariable()
tiles.setCurrentTilemap(tilemap`level2`)
Render.changeBrightness(3, 1.4)
game.setDialogFrame(img`
    ..bbbbbbbbbbbbbbbbbbbb..
    .bd111111111111111111db.
    bd1dbbbbbbbbbbbbbbbbd1db
    b1dbbbbbbbbbbbbbbbbbbd1b
    b1bd1111111111111111db1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1bd1111111111111111db1b
    bd1bbbbbbbbbbbbbbbbbb1db
    bbd111111111111111111dbb
    .bbbbbbbbbbbbbbbbbbbbbb.
    ..bbbbbbbbbbbbbbbbbbbb..
    `)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
game.showLongText("*something crashes in the background*", DialogLayout.Bottom)
game.onUpdate(function () {
    if (mySprite.tilemapLocation() == tiles.getTileLocation(4, 6)) {
        if (gate1) {
        	
        }
    } else if (mySprite.tilemapLocation() == tiles.getTileLocation(4, 9)) {
        if (gate2) {
        	
        }
    } else if (mySprite.tilemapLocation() == tiles.getTileLocation(6, 10)) {
        if (gate3) {
        	
        }
    } else if (mySprite.tilemapLocation() == tiles.getTileLocation(9, 10)) {
        if (gate1) {
        	
        }
    } else if (mySprite.tilemapLocation() == tiles.getTileLocation(0, 0)) {
        if (gate1) {
        	
        }
    }
})
