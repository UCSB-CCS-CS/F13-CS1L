Repository: https://github.com/r5sowa/ArduinoMIDI

4 Oct. 2013 Friday (Week 1)
  
  - met with Alex, Austin, and Conrad for an overview of the Arduino MIDI shield and board and the program they had previosuly created for it
  - used basic MIDI Arduino code by Nathan Seidle that makes the Arduino play chromatic scales with each MIDI instrument
  - expanded upon this code using int arrays to define different note increments of a scale
    - using int array allows one to create a different array for each scale mode that can easily be switched between, rather than hard coding a separate noteOn function for each note of each scale
      - makes it possible to play multiple and varying scale modes
  
Shortterm Goals:
  - get reacquainted with Arduino accelerometer shield and program
    - figure out how to get it to talk/feed data to MIDI program
  - use accelerometer to control some aspect of the sound/notes
  	- i.e. pitch, velocity, amplitude/loudness, instrument number, scale mode
  
Longterm Goals:
  - synchronized visualization with Processing
  - add back the other sensors, etc on Alex and Austin's original project
  - add range finder and 3D controller that Kevin was talking about in class
  - is there a way to have arduino communicate wirelessly with the computer?
    - this would allow for a better physical user interface with the accelerometer and make for better musical "performances"
