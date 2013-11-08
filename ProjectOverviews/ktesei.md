#GURPS subset generator

My repo:
https://github.com/ktesei/GurpsSystemGenerator

My project is to make a GURPS subset generator / software character sheet.

GURPS stands for "Generic Universal Role Playing System". GURPS has long been critizized for being far to rules heavy and complex. The issue here is a fundamantal misunderstanding of how to use GURPS. GURPS is actually a RPG _tool kit_ rather than a system ment to be played as is.

To aid those enlightened in the proper use of GURPS, I intend to make a _subset generator_. Basically, I want a utility that allows the user to select which rules they want to use in the final system. Once the rules are choosen, It will output a superburbly formated pdf of the final system.

Additionally, it should be able to integrate with a character sheet program. There are already excellent character sheet programs that I can use as a resource.

I plan on using the Swing GUI Builder (formerly Project Matisse) that is built into Netbeans. 

Here is a link to the "lite" version of GURPS: https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=4&ved=0CEMQFjAD&url=http%3A%2F%2Fwww.sjgames.com%2Fgurps%2Flite%2F3e%2Fgurpslite.pdf&ei=mR5OUsacJYbxkAWA2oCwAg&usg=AFQjCNFgW9kJ7hZSsJjaYC2fnRqR4Y8cBA&sig2=C8OSsGJ6B5QkK5MwfioOew&bvm=bv.53537100,d.dGI

#Thursday Oct 3
Progress: So far I've managed to build a program that loads text from a file and displays it on a text frame using the tutorials at
https://netbeans.org/kb/docs/java/gui-functionality.html
https://netbeans.org/kb/docs/java/gui-filechooser.html

Goal for next week: Make a test database of the GURPS rules and load them into data structures. I will need to determine how the rules will be represented as data. 

#Thursday Oct 17
Progess: Previous goal acheived.

Format for perks is
<name><type><value><per value><source><tags><text>

where 
* name is self explanitory,
* type is an integer where the bits represent the difference types it can be (supernatural, mind, body, social, etc)
* value is the cost in GURPS points
* per val is an elaboration of the cost (some cost a certain amount of points "per" level/strength points/etc) (may be left blank)
* source is a String representing the source book it is from (there are over 100 of them)
* tags is different tags that the perks can be sorted by later (can be left blank)
* text is the rules explaining what the perk actually does.

I used "~" to separate the tokens rather than "," because there are many "," in the <text> token

Goal for next week: Decide which widget(s) will represent the GURPS perks and implement them. I should no longer have to use the text field.

#Thursday Nov 7
Progress: I have two JLists for perks that are used/not used. You can move perks back and forth and highlighting perks cause thier data to be displayed in the text window.

See the README at https://github.com/ktesei/GurpsSystemGenerator for a more detailed explanation for the project.
