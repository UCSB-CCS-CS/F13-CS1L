#GURPS subset generator

My project is to make a GURPS subset generator / software character sheet.

GURPS stands for "Generic Universal Role Playing System". GURPS has long been critizized for being far to rules heavy and complex. The issue here is a fundamantal misunderstanding of how to use GURPS. GURPS is actually a RPG _tool kit_ rather than a system ment to be played as is.

To aid those enlightened in the proper use of GURPS, I intend to make a _subset generator_. Basically, I want a utility that allows the user to select which rules they want to use in the final system. Once the rules are choosen, It will output a superburbly formated pdf of the final system.

Additionally, it should be able to integrate with a character sheet program. There are already excellent character sheet programs that I can use as a resource.

I plan on using the Swing GUI Builder (formerly Project Matisse) that is built into Netbeans. 

#Thursday Oct 3
Progress: So far I've managed to build a program that loads text from a file and displays it on a text frame using the tutorials at
https://netbeans.org/kb/docs/java/gui-functionality.html
https://netbeans.org/kb/docs/java/gui-filechooser.html




____________________________________________________________________________
Ignore below
___________________________________________________________________________
My starting project is drawing a point set. But wait, there is more! 

The points are represented relative to eachother. A exists, B exists, C is to the right of the line formed by AB/BA. A shorter version of this is [A|Entire Plan],[B|Entire Plan],[C|AB],[D|AB,AC,BC],[E|AB,AC,AD,BC,BD,CD]. We can represent each of the relations in binary, so the entire representation can be reduced to an integer.

I must convert these "Siegel Space Representations" into regular X,Y coordinates in order to draw them. This is greatly aided by the fact that we have the ability to generate a matrix with the angular relationships. If I can solve this matrix then I can easily convert it into X,Y coordinates. 

Because we cannot generate a angle matrix from an invalide Siegel Space, the Angle matrix is gauranteed to have infinitely many solutions. Finding a solution is trivial (Row reduce, plug stuff in), but this can result in getting angles outside of the range of 0-180. 

To solve this, I'm implementing the simplex agorithm to solve the parametric form of the solution.
