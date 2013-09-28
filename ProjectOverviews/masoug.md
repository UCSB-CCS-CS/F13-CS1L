#Dodgeball#
##3D Dodgeball Game##
In dodgeball there are two teams of six players on opposing sides of 10x10 m court. For the sake of simplicity, this game will 
not include all the rules and regulations of dodgeball as laid out [here](http://www.thendl.com/thendl-dodgeball-101.asp)
(such as substitutes or "The Rush"). Ultimately, this game will allow the users to:
* Form two teams of six via a computer network i.e. a networked game.
* The two teams are "blue" or "red"
* Players obtain balls by bumping into "inactive" (balls on floor, balls that have bounced, etc...) balls (if the player possesses 2 or fewer balls)
* Players can possess up to three balls at any given time
* Players can be hit by an active ball up to three times before they are "out" (removed from the match) "lives"
* A single match lasts five minutes with 12 balls on each side. Balls are conservative i.e. there will always be 24 balls total in any point
in time during a match.
* A single gameplay will consist of a single match. (Once the match ends, the program exits with a message of who won etc...)
* The winning team is the one with the most players at the end of the match.
* Matches will end if one team lost all its players.
* The game will only initialize once all twelve players have joined the session.
* A central server will manage every match.
* Super-balls that have unnaturally advantageous characteristics (like a "missile" ball, a multi-bounce ball, etc...)

Unfortuantely, due to real-life time and resource constraints, there is a large chance that most of these features will not make
be complete. In fact, 3D computer games are notorious for ruining a student's project due to the involving nature of games. It is 
very likely that over the course of the ten weeks, there will be crippling problems that surface at extremely inconvenient times.
But it is this uncertainty that makes game projects so thrilling :)

##Plan##
In order to address the issues above, I'll be taking a two-phase approach: The first phase is a proof-of-concept app that 
demonstrates the feasability of the game. If the proof-of-concept app yields negative results, then the project will convert to 
implementing a simple path tracer. If the proof-of-concept app yields positive results, then the project is officially greenlighted (second phase).

Unfortunately, even though the proof-of-concept shows that such game is possible under given constraints, it is most certainly does
*NOT* indicate a successful project. Chances are, there will be major roadblocks that cripple the project. To account for that, my plan
will have "plan Bs" laid out beforehand in case things go awry. Ultimately, if everything crashes and burns, my project will default
to the Google AppEngine CMS.

The main objective of the project is to learn how games are put together and how to bring together various different components in a 
cooperative environment. The actual game's usability or user base is second to learning. Therefore, I predict that the end result of this
project will lie between two "states":

###Worst-Case###
Many roadblocks are hit, causing major parts of the game's features (but not functionality) to be omitted from the result. This is the state
where the resulting game doesn't differ much from the original proof-of-concept.
* Players can throw a ball
* Balls interacts with the scene
* No network management
* No super-balls
* No other players
* No ball possession capabilities
* No "lives"
* No "matches"; the game just runs forever
* No ball-player collision detection

###Best-Case###
Where all features listed above are met. If I get here, something is wrong with the world (or I just got extremely lucky).

So somewhere between best-case and worst case is where this project will most likely end up if the proof-of-concept passes. In other words,
I really don't know what will happen :) The project is a success if it ends up at least the worst-case state.

###Timeline###
Each week there is a goal that must be met or else the project will immediately revert to the app engine or path tracer "mode" depending on how far along
the project has already reached.

####Prototype (Week 1)####
A proof of concept app must demonstrate:
* An FPS-style interface
* Ball throwing
* Reasonable texturing of models within the game
* Basic court setup
* Physics integration (balls bouncing, collisions, etc...)
* Bouncing/collision detection (ball hit floor/player, player hit by active ball, etc...)
* Everything is as simple as possible: players are just cubes, balls are just spheres, the environment is just a box, etc...
* Devise an architecture for the game: Classes, methods, modules, etc...
If these conditions can be met by the end of the first week, then the game is greenlit. If not, then my project reverts to a pathtracer app.

####Multiplayer (Week 2)####
This stage must demonstrate multiple players in the game. Players can be controlled with keyboard strokes. Only one screen/view
is required, no split-screen needed.
* More than one player is displayed in the game; the model itself must be a rudimentary character
* The players do not need articulation capabilities
* The players can move
* Only two players required
* No network support required (no split screen)
* Collision support; players don't have the capability to walk through walls, etc...
* All players can throw an arbitrary number of balls

If these requirements cannot be met, then the project is converted to a pathtracer.

####Multiplayer II (Week 2)####
The multiplayer-ness is enhanced, allowing 6 players on either sides of the court.
* Six players on either sides of the court.
* Players cannot travel to the opposite side.
* Players are articulated with rudimentary animation (running, idle, throwing).
* Rudimentary gaze following (player faces the right direction)
* The game stops once a player gets hit by a ball (no "active/inactive" capability needed)

If these requirements are not met, then the project is converted to a pathtracer.

####FPS Enhancement (Week 3)####
Dodgeball requires a wide field of view. Therefore, the camera projection matrix will need to be modified.
* Experiment with the camera's projection matrix to allow for wider field of view
* Add a crosshair :)
* Add HUD elements; can be rudimentary text/images
* Fine-tune the user interface/interaction with the FPS style.
* Possibly rewrite the camera FPS system to avoid using Irrlicht's createFPSCamera...(...) function.

If these requirements are not met, then the project is converted to a pathtracer.

####FPS II (Week 4)####
I'm anticipating issues with the HUD and FPS-ness of the game. The object for this week is to freeze further development and 
assess the project's state. There may be requirements that have been pushed around, and this week would be the time to fix them.
* Enhance HUD; display basic indicators like numbers and text
* Begin adding state machines to the balls and players.
* Start adding lives and ball possesion statistics.

This is the "point of no return" for the project: Past this point, there's really no turning back. All "failures" after this 
point would cause the project to convert to the AppEngine state. So I'll be assessing the situation at this point to see if I should
consider switching projects to a more manageable one. This is also the point at which if I think the game will not make its goals, then
I'll switch my project to the pathtracer. This is the scary part ;)

####Networking (Week 5)####
Networking will be tricky. Irrlicht is a C/C++ library yet I really want to use python's twisted API. So this week will be to check the 
feasability of networking. I'm thinking of running a Twisted server that tells each client when to start/stop the game and the ip addresses 
of all the other players.

_NOTE_: If for a given week that most but not all requirements are met, then those unmet requirement(s) may be moved to the next week.

***
***

#Sammy's Project#
Right now, I have two ideas that I have been bouncing around in my head:
* A Google AppEngine app that behaves as a CMS...
* A 3D dodgeball game using Irrlicht+Bullet+network (hopefully)
* A pathtracer...
* Mini operating system (???)

Right now I'm debating between the game and the appengine projects; the major battling point is between practicality/awesomeness :)
Specifically, the game will take gobs more time and effort to complete, BUT its a little _funner_.
On the other hand, the appengine project is very likely to work, BUT it is mostly just reading the API docs and calling functions.

For now, I'm leaning towards the game...
