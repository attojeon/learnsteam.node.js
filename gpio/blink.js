//
/*
var gpio = require("pi-gpio");

var intervalId;
var durationId;
var gpioPin = 16; // header pin 16 = GPIO Port 23

gpio.open(gpioPin, 'output', function(err) {
    var on = 1;
    console.log('GPIO pin ' + gpioPin + ' is open. toggling LED every 100 ms for 10s');

    intervalId = setInterval(function() {
        gpio.write(gpioPin, on, function() {
            on = (on + 1) % 2;
        });
    }, 100 );
}); */

var gpio = require("pi-gpio");
 
 //gpio.close( 16);

gpio.open(16, "output", function(err) {		// Open pin 16 for output 
	gpio.write(16, 1, function() {			// Set pin 16 high (1) 
		gpio.close(16);						// Close pin 16 
	});
});

