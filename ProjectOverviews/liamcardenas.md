Open Ledger Instant Messaging

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

Suggestions: Allow for custom encryption methods
