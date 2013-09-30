#### How to write a simple interpreter in JavaScript
[link](http://www.codeproject.com/Articles/345888/How-to-write-a-simple-interpreter-in-JavaScript)
[simple interpreter fiddle](http://jsfiddle.net/h3xwj/)

#### Lexical Analysis, Parsing, Evalutation

##### Lexing
Lexer takes in string of characters -> outputs **list of tokens**

this:

    (12 + 4) / 6

to this:

    [
      ["operator", "("],
      ["number", 12],
      ["operator", "+"],
      ["number", 4],
      ["operator", ")"],
      ["operator", "/"],
      ["number", 6]
    ]

##### Parsing
Parser takes the list of tokens, outputs a **parse tree**
Parse tree: [wiki](http://en.wikipedia.org/wiki/Parse_tree)
represents structure of a string according to some [formal grammar](http://en.wikipedia.org/wiki/Formal_grammar)


## meeting with Conrad

regular languages: turning things into tokens (regex's)

added as collaborators to https://github.com/ucsb-cs-education/picoc-ucsb

conrad's plan for proceding:

instrument the code (so we can wee what is happening)
this way we run C version along side JS version,
output the trace files
take the git Diff and see if they are the same

_____ or

take all the names and parameters of every function



