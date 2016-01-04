import RPi.GPIO as GPIO
import time

pin = 16

GPIO.setmode( GPIO.BOARD)
GPIO.setup(pin, GPIO.OUT)

GPIO.output(pin, GPIO.LOW)

