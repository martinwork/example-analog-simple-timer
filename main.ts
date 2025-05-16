let pin = AnalogPin.P0
let threshold = 800
images.iconImage(IconNames.Square).showImage(0)
while (pins.analogReadPin(pin) >= threshold) {
	
}
let timeLow = input.runningTimeMicros()
images.iconImage(IconNames.SmallSquare).showImage(0, 0)
while (pins.analogReadPin(pin) < threshold) {
	
}
let timeHigh = input.runningTimeMicros()
let time = timeHigh - timeLow
basic.forever(function () {
    basic.showNumber(time)
    basic.pause(200)
})
