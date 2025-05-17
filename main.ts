/**
 * To time a low pulse...
 * 
 * Press RESET to start!
 * 
 * Wait for high
 * 
 * Wait for low
 * 
 * Record time of start of pulse
 * 
 * Wait for high
 * 
 * Record time of end of pulse
 * 
 * Calculate time difference
 */
let pin = AnalogPin.P0
let threshold = 800
images.iconImage(IconNames.No).showImage(0, 0)
while (pins.analogReadPin(pin) < threshold) {
	
}
images.iconImage(IconNames.Square).showImage(0)
while (pins.analogReadPin(pin) >= threshold) {
	
}
let timeStart = input.runningTimeMicros()
images.iconImage(IconNames.SmallSquare).showImage(0, 0)
while (pins.analogReadPin(pin) < threshold) {
	
}
let timeEnd = input.runningTimeMicros()
let time = timeEnd - timeStart
basic.forever(function () {
    basic.showNumber(time)
    basic.pause(200)
})
