import RPi.GPIO as GPIO
import dht11
import time

# initialize GPIO
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)
GPIO.cleanup()


instance = dht11.DHT11(pin = 23)

while( 1 ) :
	result = instance.read()

	if result.is_valid():
	   	print("Temperature: %d C" % result.temperature)
	    	print("Humidity: %d %%" % result.humidity)
	else:
		continue
		# print("Error: %d" % result.error_code)

	time.sleep(0.5)
