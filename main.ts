for (let Index = 0; Index <= 2; Index++) {
    music.playTone(262, music.beat(BeatFraction.Quarter))
    basic.showNumber(3 - Index)
}
music.playTone(392, music.beat(BeatFraction.Whole))
basic.showString("GIAN")
music.playMelody("E G C5 A B G A F ", 120)
basic.forever(function () {
	
})
