#Open Ledger Instant Messaging

<strong>Repos:</strong> https://github.com/liamcardenas/openledger https://github.com/liamcardenas/sxc https://github.com/liamcardenas/ccs-cs1l-experiements

Prism-breaking instant messaging system

Quick summary: An instant messaging system to send secure and anonymous messages.

Problems with current communications options:
- Bitmessage anonymous but slow and getting slower
- RetroShare only partially anonymous due to friend model
- TorChat running on Tor

This system:
- Semi-centralized
- Fast
- Completely anonymous
- Impossible to censor
- Very difficult to shut down
- Encrypted
- Independent of tor
- Open source

How it works:
When a conversation is started, a unique conversation key is generated. This will be used for not only encryption, but also for message hashing. Based on the aforementioned key, the message will be encrypted and sent to the central server. However, to increases anonymity, I may implement a P2P system in which one can connect to another computer to vicariously post to the central server, thus shielding the IP of the original sender. Messages will definitely have proxy support.

Once the message is posted to the server it is hashed in a ledger of all messages (and queued with other messages in that spot). Then the recipient of the message will download and decrypt that entry from the ledger along with a large number of extra entries thus hiding which entry was actually accessed.

This way no hacker or surveillance program will be able to:
- Tell whose messages you are reading
- Tell who is reading your messages
- Read your messages
- Identify the IP of who they are communicating with in this system

Note: The server will be open source thus allowing a large number of independent servers to run, thereby making it even harder for censorship to take place.

Languages used: Java, PHP

Suggestions: Allow for custom encryption methods

#Rough Timeline:

- Week 1 - UML diagrams and planning, get new laptop in the mail, learn php
- Week 2 - start basic php openledger system barebones
- Week 3 - start basic chat client barebones, finish barebones php open ledger
- Week 4 - implement security in openledger system, finish barebones chat client
- Week 5+ - TBD

#Progress
UML Diagrams
https://docs.google.com/file/d/0B13XoS92NKxWd1hpUGRUQUg0VHM/edit?usp=sharing
https://docs.google.com/file/d/0B13XoS92NKxWMXVSU1h0dWlfZEk/edit?usp=sharing
http://www.websequencediagrams.com/# with text "title Open Ledger Instant Messaging System

User1->Server: Post Encrpyted Message
User2->Server: Get Message Ledger
note left of User2: User2 Parses Ledger\nand Decrypts Message
User2->Server: Post Encrypted Message
User1->Server: Get Message Ledger
note right of User1: User2 Parses Ledger\nand Decrypts Message"

<strong>Update: Oct 5</strong>
This is a link to the repo:
https://github.com/liamcardenas/openledger

More info will be available there!

<strong>Update: Oct 8</strong>
I am officially decoupling the openledger system and the chat client to be more modular and customizable. The separate chat program repo is located here: https://github.com/liamcardenas/sxc

<strong>Update: Oct 9</strong>
Created barebones version of Open Ledger System
