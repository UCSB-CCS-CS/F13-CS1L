My starting project is drawing a point set. But wait, there is more! 

The points are represented relative to eachother. A exists, B exists, C is to the right of the line formed by AB/BA. A shorter version of this is [A|Entire Plan],[B|Entire Plan],[C|AB],[D|AB,AC,BC],[E|AB,AC,AD,BC,BD,CD]. We can represent each of the relations in binary, so the entire representation can be reduced to an integer.

I must convert these "Siegel Space Representations" into regular X,Y coordinates in order to draw them. This is greatly aided by the fact that we have the ability to generate a matrix with the angular relationships. If I can solve this matrix then I can easily convert it into X,Y coordinates. 

Because we cannot generate a angle matrix from an invalide Siegel Space, the Angle matrix is gauranteed to have infinitely many solutions. Finding a solution is trivial (Row reduce, plug stuff in), but this can result in getting angles outside of the range of 0-180. 

To solve this, I'm implementing the simplex agorithm to solve the parametric form of the solution.
