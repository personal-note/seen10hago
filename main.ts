namespace SpriteKind {
    export const UI = SpriteKind.create()
}
function me () {
    mySprite = sprites.create(img`
        ................
        ......ffff......
        ......ffff......
        ......f1ff......
        ......f41f......
        .....ff11ff.....
        .....f.11.f.....
        .......1..f.....
        .......1..f.....
        ....11111111....
        ....22111111....
        ....22.11.1.....
        .....2.31..1....
        ....22.31..2....
        ....12.33..2....
        ....1..33..2....
        ...11..33..22...
        ...1...433..2...
        ..333..444.11...
        ..333.34.4.11...
        ..31..3..4.313..
        ..34..3..4..33..
        ..44..3..3..33..
        ..4..3...3..44..
        .....3...3...4..
        .....3...3......
        ....11...3......
        ....1....3......
        ....1....3......
        ....1....11.....
        ....1.....1.....
        ....1.....1.....
        `, SpriteKind.Enemy)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(11, 10))
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    if (gate2) {
        game.showLongText("Why am I always second?", DialogLayout.Bottom)
        gate2 = false
        gate1 = false
        gate3 = true
        gate4 = false
        gate5 = false
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    if (gate3) {
        game.showLongText("Did you ever think about me?", DialogLayout.Bottom)
        gate3 = false
        gate1 = false
        gate2 = false
        gate4 = true
        gate5 = false
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    if (gate4) {
        game.showLongText("I know you saw me", DialogLayout.Bottom)
        gate1 = false
        gate2 = false
        gate3 = false
        gate4 = false
        gate5 = true
        me()
        Render.setSpriteAttribute(mySprite, RCSpriteAttribute.ZOffset, 0)
        timer.after(5000, function () {
            tiles.setTileAt(tiles.getTileLocation(8, 10), assets.tile`myTile4`)
            tiles.setTileAt(tiles.getTileLocation(5, 10), assets.tile`myTile5`)
            tiles.setTileAt(tiles.getTileLocation(4, 9), assets.tile`myTile6`)
            mySprite.follow(mySprite2, 90)
        })
    }
})
function music2 () {
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Whole))
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Whole))
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(370, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(370, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(659, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Whole))
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Whole))
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(494, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Whole))
    music.play(music.tonePlayable(370, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    if (gate1) {
        game.showLongText("Why did you leave me behind?", DialogLayout.Bottom)
        gate1 = false
        gate2 = true
        gate3 = false
        gate4 = false
        gate5 = false
    }
    if (gate5) {
        color.FadeToWhite.startScreenEffect(500)
        timer.after(3000, function () {
            color.startFadeFromCurrent(color.originalPalette, 500)
        })
        pause(2500)
        game.reset()
    }
})
let mySprite: Sprite = null
let mySprite2: Sprite = null
let gate5 = false
let gate4 = false
let gate3 = false
let gate2 = false
let gate1 = false
music.setTempo(80)
gate1 = true
gate2 = false
gate3 = false
gate4 = false
let lock = true
gate5 = false
let hidden_msg = sprites.create(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ............................................................b.....c1c1.....................1....................................................................
    ...........................................................c1.....c1c1.....................1....................................................................
    ...........................................................111b11bc1c1..b11111.111..c1.1ccd111c1.db.............................................................
    ...........................................................c1.1bc1c1c1..bd.1.1c1.1c..1.1ddb1.dd1.1..............................................................
    ...........................................................c1.111dc1c1..bd.1.1c111c..1dd11.1.dddb1..............................................................
    ...........................................................c1.1bcdc1c1..bd.1.1b1.dc..b1c11.1.ddc1b..............................................................
    ............................................................1db11dc1c1..bd.1.1b111....1.dd.1.dd.1...............................................................
    ...............................................................cc...............c.........cc...c1...............................................................
    ...............................................................................................db...............................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `, SpriteKind.UI)
hidden_msg.setStayInScreen(true)
hidden_msg.setFlag(SpriteFlag.Ghost, true)
hidden_msg.setFlag(SpriteFlag.RelativeToCamera, true)
hidden_msg.setFlag(SpriteFlag.Invisible, true)
lock = false
color.FadeToWhite.startScreenEffect(500)
timer.after(3000, function () {
    color.startFadeFromCurrent(color.originalPalette, 500)
})
pause(2500)
let title = sprites.create(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffddfffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffddffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffddffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffddffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffddffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffdfdffddffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffdddffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffdddddffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffdfffffddddddffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddffffffffffffddfffffdfddddffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddfffffffffddffdddddfffdfddffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddfffddddddddfffddfddffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddffddddddddffddddfddffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddffddddddfdddddddfddffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddffdddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddffdddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffddddddddddddfffffddddddddddddddddddddddddddddddddddddfffdddddddddddfddddffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffdddddddddddfffffffffffffffffffffffffffffffffdfdddddddffddddddddddddfddddffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffddddddddddffffffffffffffffffffffffffffffffffffddddddffddddddddddddfddddffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffddddddddddffffffffffffffffffffffffffffffffffffddddddffddddddddddddfddddffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffddddddddddffffffffffffffffffffffffffffffffffffddddddffddddddddddfdfdddddfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffdddddddddddffffffffffffffffffffffffffffffffffffddddddffdddddddddffffdddddfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffdddddddddddffffffffffffffffffffffffffffffffffffddddddfddddddddddfffddddddfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffddddddddddddfffffffffffffffffffffffffffffffffffddddddfddddddddddffdddddddfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffddddddddddddfffffffffffffffffffffffffffffffffffddddddfddddddddddffdddddddfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffddddddddddddfffffffffffffffffffffffffffffffffffddddddfddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffddddddddddddfffffffffffffffffffffffffffffffffffddddddfddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffddddddddddddfffffffffffffffffffffffffffffffffffddddddfddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffddddddddddddfffffffffffffffffffffffffffffffffffddddddfddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffddddddddddddfffffffffffffffffffffffffffffffffffddddddfddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffddddddddddddfffffffffffffffffffffffffffffffffffddddddfddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffddddddddddddfffffffffffffffffffffffffffffffffffddddddfddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffddddddddddddfffffffffffffffffffffffffffffffffffddddddfddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffff
    fffffffffffdffffffffffffffffffffffffffffffddddddddddddfffffffffffffffffffffffffffffffffffddddddfddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffff
    ffffffffffddffffffffffffffffffffffffffffffddddddddddddfffffffffffffffffffffffffffffffffffddddddfddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffff
    ffffffffffddfffffffffffffffffffffffffffffffdddddddddddfffffffffffffffffffffffffffffffffffddddddfdddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffff
    fffffffffdddfffffffffffffffffffffffffffffffdddddddddddfffffffffffffffffffffffffffffffffffddddddfdddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffff
    fffffffffbdcfcbbbbbcbbbbbfbbbfcbcffffffbbffdbdbddcbbdcbbfffffbbbfffcddcfffcddcfffffffffffddddddfdddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffff
    fffffffc1111dd11111d11111c111f11bfffffd11fc11111dd11d111ffffb111cfd1111bfd1111bffffffffffddddddfdddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffff
    fffffffd11111d11111d11111c111b11bfffb1111fb11111cd11d111ffffb111bf11111df111111ffffffffffddddddfdddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffff
    fffffff111c11d11fffd11fffc111d11bfffb1111f111d11dd11d111ffffd111bc11bd11c11bd11ffffffffffddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffff
    fffffff111cddd11fccd11fccc111111bfffffd11f111d11dd11d111ffff1111db11cb11b11cb11cfffffffffddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffff
    fffffdfb111ccd11ddbd11ddbc111111bccfffd11c111d11dd11d111ccff11111b11bbbbb11cb11ccffffffffddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffff
    fffffddf1111cd1111dd1111dc111111bccfffd11c111c11dd111111ccfc11d11b11d111b11bd11cccfffffffddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffff
    fffffdddd111dd11d1bd11d1bc111111bccfffd11c111c11dd11d111cccb11b11b11d111b11bd11cccfffffffddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffff
    ffdffddfdc111d11cccd11cccc11d111bccfffd11f111c11dd11c111cccb11d11d11bd11b11bd11cccfffffffdddb11dddddddddddddddddddddddddddddb1dddffffffffffb1ffffffffff1bfffffff
    fddfddd11bb11111cccd11cccc11c111bccfffd11f111c11dd11c111cccd11111d11bd11b11bd11cccfffffffdddb111bddcddcdddccdddcddddddcdddddb1ddccffffffcffd1fffcffffcf1dfffffff
    fddfddd111d11d11bbcd11bbcc11c111bccfffb11fd11b11dd11c111ccc111111d11d111c11d111cccfffffffdddb1d1dd11cd11cb11cd111ddddd11cddc111c11dffffd11c111c111fd11d11bffffff
    fddfdddd11111d11111d11111c11cd11bccfffb11fb11111cd11c111ccc11bf11111111dc11111dcccfffffffdddb1d1dd1bc1d1d111db1d1cddc1d1ddddd1cd1d1fffc1d1bd1cb1d1bd1bc1dcffffff
    fddddddcd111bd11111d11111c11cb11bccfffb11fcd111dcd11c111ccc11bfd11b1111ccb1111ccccfffffffdddb1d1dd1db1c1d11d1b1b1bddc1c1ddddd1d11b1cffc1d1dd1fb1c1bd1ff1dfffffff
    fddddddfddccccccccccffccccfffccccccfffffffccccccccccccccccfffffccccccccccccccccccffffffffdddb111bd1db111dd1dcc11cddddb11ddddd1d11b1cfffd1bfd1fcd11bd1ff1dfffffff
    fddddddddddccccccccccccccccffccccccffffffffdddcccccddcccccfffffcccccccccccfffccccffffffffdddb1dbcd1cb1bbbcd1dcc11ccdc1b1dcddd1d11b1ccfff11bd1fd1b1bd1ff1dfffffff
    fddddddfdddddcffffccfffcccffffffffffffffffffddddcddddddffffffffffffffffccfffffccfffffffffdddb1cdcd1cb1b1d1d11b1b1bcdb1c1dccdd1d11b1ccfc1b1dd1fd1c1bd1cf1dfffffff
    fdddddddddddddffffffffffffffffffffffffffffffdddddddddddfffffffffffffffffffffffffffffffffddddb1cdcd1dc1d1d1111b1d1bcdc1d1dccdd1cd1d1ccff1d1dd1cd1d1bd1cf1dcffffff
    fdddddddddddddfffffffffffffffffffffffffffffddddddddddddfffffffffffffffffffffffffffffffddddddb1dddd1dd111cb11bc111ccdd111dccdb11b11dccffd11bb11c111bd1cf11bffffff
    fdddddddddddddfffffffffffffffffffffffffffffddddddddddddffdddfffffffffffffffffffffffffffdddddddddddddddcdccccccccdccddddddccdddddcccccffffffcccffffccccffcfffffff
    fdddddddddddddfffffffffffffffffffffffffffffddddddddddddffcd1ffffffffffffffc1fffffffffffffddddddddddddddddccddccdddcddddddccddddddffccffffffccfffffcccfffffffffff
    fdddddddddddddffffffffffffcfffffcffffcffffcdddddcddddcdfffb1fffffcffffcfffb1fffffcfffffffddddddddddddddddddddddddddddddddfdddddddfffffffffffffffffffffffffffffff
    fdddddddddddddffffd111bfb111ff1111cb111cf111bd1111dc111bffb1ffb111bfb111fb111dfb111ffffffddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffff
    fdddddddddddddffffd1cb1c1bc1df11fbf11cbcd1fb1d1dd1bdbdb1ffb1ffb1cb1f1bf1dfb1fff1bc1dfffffddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffff
    fdddddddfdddddffffd1ff1b1111bf1bfffcd11c1dfd1c1bd1bc1111cfb1ffb1fc1c1ffd1fb1ffc1111bfffffddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffff
    fdddddddfdddddffffd1cb1c1bfbcf1bfffdcf1dd1cb1c1bd1bd1db1cfb1ffb1fc1c1bc1dfb1cbf1bfbcfffffddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffff
    fdddddddfdddddffffd111dfb111bf1bfff1111cc111bd1cd1bb1111c1111bb1fc1fb111cfc111cb111bfffffddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffff
    fdddddddfdddddffffddccffffcccfffffffffffffcddddddddddcdfccffffffffffffcffffffffffcfcfffffddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffff
    fdddddddddddddffffbdfffffffffffffffffffffffddddddddddddffcfffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffff
    fdddddddddddddfffffffffffffffffffffffffffffddddddddddddffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffff
    fdddddddddddddffffffffffffffffffffffffffffffdddddddddddffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffff
    fdddddddddddddffffffffffffffffffffffffffffffdddddddddddffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffff
    fdddddddddddddffffffffffffffffffffffffffffffdddddddddddffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffff
    fdddddddddddddffffffffffffffffffffffffffffffdddddddddddffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffff
    fddddddddddddddfffffffffffffffffffffffffffffdddddddddddffffffffffffffffffffffffffffffffffdddddddddddddddddddffdddddddddddddddddddffdffffffffffffffffffffffffffff
    fddddddddddddddfffffffffffffffffffffffdfffffdddddddddddffffffffffffffffffffffffffffffffffddddddddddddddddddfffdddddddddddddddddddfffffffffffffffffffffffffffffff
    fddddddddddddddfffffffffffffffffffffffffffffdddddddddddffffffffffffffffffffffffffffffffffddddddddddddddddddfffdddddddddddddddddddffdffffffffffffffffffffffffffff
    fddddddddddddddfffffffffffffffffffffffffffffdddddddddddffffffffffffffffffffffffffffffffffdddddddddddddddddddffdddddddddddddddddddffdffffffffffffffffffffffffffff
    fddddddddddddddffffffffffffffffffffffffffffffddddddddddffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddffdffffffffffffffffffffffffffff
    fddddddddddddddffffffffffffffffffffffffffffffddddddddddffffffffffffffffffffffffffffffffffdddddddfddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffff
    fddddddddddddddffffffffffffffffffffffffffffffddddddddddffffffffffffffffffffffffffffffffffdddddddfddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffff
    fddddddddddddddfffffffffffffffffffffffffffffdddddddddddffffffffffffffffffffffffffffffffffdddddddfddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffff
    fddddddddddddddfffffffffffffffffffffffffffffdddddddddddffffffffffffffffffffffffffffffffffdddddddfddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffff
    fddddddddddddddfffffffffffffffffffffffffffffdddddddddddffffffffffffffffffffffffffffffffffdddddddfddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffff
    fddddddddddddddfffffffffffffffffffffffffffffdddddddddddffffffffffffffffffffffffffffffffffdddddddfddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffff
    fddddddddddddddfffffffffffffffffffffffffffffdddddddddddffffffffffffffffffffffffffffffffffddddddffddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffff
    fddddddddddddddfffffffffffffffffffffffffffffdddddddddddffffffffffffffffffffffffffffffffffddddddffddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffff
    fddddddddddddddfffffffffffffffffffffffffffffdddddddddddffffffffffffffffffffffffffffffffffddddddffddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffff
    fddddddddddddddfffffffffffffffffffffffffffffdddddddddddffffffffffffffffffffffffffffffffffddddddffddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffff
    fddddddddddddddffffffffffffffffffffffffffffffddddddddddffffffffffffffffffffffffffffffffffddddddffddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffff
    fddddddddddddddffffffffffffffffffffffffffffffddddddddddffffffffffffffffffffffffffffffffffddddddffdddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffff
    fddddddddddddddffffffffffffffffffffffffffffffddddddddddffffffffffffffffffffffffffffffffffddddddffdddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffff
    fddddddddddddddffffffffffffffffffffffffffffffdddddddddddfffffffffffffffffffffffffffffffffddddddffdddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffff
    fdddddddddddddddfffffffffffffffffffffffffffffdddddddddddfffffffffffffffffffffffffffffffffddddddffdddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffff
    fdddddddddddddddfffffffffffffffffffffffffffffdddddddddddfffffffffffffffffffffffffffffffffddddddffddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffff
    fdddddddddddddddfffffffffffffffffffffffffffffdddddddddddfffffffffffffffffffffffffffffffffddddddffddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffff
    fdddddddddddddddfffffffffffffffffffffffffffffdddddddddddfffffffffffffffffffffffffffffffffddddddffdddddddddddddddddddddffddddddddffffffffffffffffffffffffffffffff
    fdddddddddddddddfffffffffffffffffffffffffffffdddddddddddfffffffffffffffffffffffffffffffffddddddffdddddddddddddddddddddfffdddddddffffffffffffffffffffffffffffffff
    fddddddddfddddddfffffffffffffffffffffffffffffddddddddddffffffffffffffffffffffffffffffffffdddddddddddddddddfffddddddffffffffdddddffffffffffffffffffffffffffffffff
    fddddddddfddddddfffffffffffffffffffffffffffffdddddddddddfffffffffffffffffffffffffffffffffdddddddddddddddddfffddddddffffffffdddddffffffffffffffffffffffffffffffff
    fddddddddfddddddfffffffffffffffffffffffffffffddddfddddddfffffffffffffffffffffffffffffffffdddddddddddddddddfffddddddfffffffffffffffffffffffffffffffffffffffffffff
    fdddddddddddddddfffffffffffffffffffffffffffffddddfddddddfffffffffffffffffffffffffffffffffdddddddddddddddddfffddddddfffffffffffffffffffffffffffffffffffffffffffff
    fdddddddddddddddfffffffffffffffffffffffffffffdddddddddddfffffffffffffffffffffffffffffffffdddddddddddddddddfffddddddfffffffffffffffffffffffffffffffffffffffffffff
    fdddddddddddddddffffffffffffffffffffffffffffffddddddddddffffffffffffffffffffffffffffffffffddddddddddddffffffdfddddffffffffffffffffffffffffffffffffffffffffffffff
    fdddddddddddddddffffffffffffffffffffffffffffffdddddddddffffffffffffffffffffffffffffffffffffdddddffddfdffffffffddddffffffffffffffffffffffffffffffffffffffffffffff
    fdddddddddddddddffffffffffffffffffffffffffffffdddddddddfffffffffffffffffffffffffffffffffffffffffffddffffffffffddddffffffffffffffffffffffffffffffffffffffffffffff
    fdddddddddddddddffffffffffffffffffffffffffffffdddddddddfffffffffffffffffffffffffffffffffffffffffffddffffffffffdfddffffffffffffffffffffffffffffffffffffffffffffff
    fdddddddddddddddffffffffffffffffffffffffffffffddddddddfffffffffffffffffffffffffffffffffffffffffffffdffffffffffdfddffffffffffffffffffffffffffffffffffffffffffffff
    fdddddddddddddddffffffffffffffffffffffffffffffddddffffffffffffffffffffffffffffffffffffffffffffffffddffffffffffdddfffffffffffffffffffffffffffffffffffffffffffffff
    fddddddfddddddddffffffffffffffffffffffffffffffddddfffffffffffffffffffffffffffffffffffffffffffffffffdffffffffffdddfffffffffffffffffffffffffffffffffffffffffffffff
    fddddddfddffddddffffffffffffffffffffffffffffffddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddfffffffffffffffffffffffffffffffffffffffffffffff
    fddddddfddffddddffffffffffffffffffffffffffffffddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddfffffffffffffffffffffffffffffffffffffffffffffff
    fddddddfddffddddffffffffffffffffffffffffffffffddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddfffffffffffffffffffffffffffffffffffffffffffffff
    fddddddddddddddddfffffffffffffffffffffffffffffdddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddfffffffffffffffffffffffffffffffffffffffffffffff
    fddddddddddddddddfffffffffffffffffffffffffffffdddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddfffffffffffffffffffffffffffffffffffffffffffffff
    fddddddddddddddddfffffffffffffffffffffffffffffdddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddfffffffffffffffffffffffffffffffffffffffffffffff
    fddddddddddddddddfffffffffffffffffffffffffffffdddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddfffffffffffffffffffffffffffffffffffffffffffffff
    fddddddddddddddddfffffffffffffffffffffffffffffdddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddfffffffffffffffffffffffffffffffffffffffffffffff
    fddddddddddddddddffffffffffffffffffffffffffffffddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddfffffffffffffffffffffffffffffffffffffffffffffff
    `, SpriteKind.UI)
game.setDialogFrame(img`
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
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
game.showLongText("", DialogLayout.Bottom)
sprites.destroy(title)
mySprite2 = Render.getRenderSpriteVariable()
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
forever(function () {
    music2()
})
game.onUpdateInterval(5000, function () {
    if (!(lock)) {
        hidden_msg.setFlag(SpriteFlag.Invisible, false)
        timer.after(250, function () {
            hidden_msg.setFlag(SpriteFlag.Invisible, true)
        })
    }
})
