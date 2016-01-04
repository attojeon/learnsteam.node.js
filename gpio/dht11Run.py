import RPi.GPIO as GPIO
import dht11
import time

# initialize GPIO
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)
GPIO.cleanup()

# read data using pin 14
###########################################
# pin이 물리적인 핀번호가 아님, gpio 포트 번호를 말하는 것임. 
###########################################
instance = dht11.DHT11(pin = 23)

while( 1 ) :
	result = instance.read()

	if result.is_valid():
	   	print("Temperature: %d C" % result.temperature)
	    	print("Humidity: %d %%" % result.humidity)
	else:
	    	print("Error: %d" % result.error_code)

	time.sleep(0.5)
