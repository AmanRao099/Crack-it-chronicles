import React, { useState } from "react";
import "./Messages.css";

const Messages = () => {
  const [selectedContact, setSelectedContact] = useState(null);

  const contacts = [
    { name: "Jane", lastMessage: "really?", messages: ["Hi", "Hey, how are you?","am good","its been soo long ","yeah right","you seem to be really busy","well i wont deny that, lol","hey do u remember that hint we saw that day","yeah i remember it, i got the pic too","really ?"] },
    { name: "Amy", lastMessage: "okkkk, See you tomorrow!", messages: ["Hi","Hey, did you figure out that thing we talked about?", "What thing?","The one you might’ve written down somewhere to remember. 😉","Ohhh, let me check!","In the land of numbers, where the wizard play, An ancient spell begins wiht an 8 today. Next, the wise on stands, tall and true, a 1, it;s known by few. Two enchanted 4s, guarding the door, And a mighty 7 stands to secure the lore","okkkk, See you tomorrow!"] },
    { name: "Alex Johnson", lastMessage: "Don't forget the meeting.", messages: ["Hey", "Hey, remember that girl who went missing while searching for treasure?","Yeah, they say she turned into a ghost, right?","Exactly. And if you start dancing at the ruins where she vanished, they say her spirit gives you hints about the treasure","Dancing? How does that work?","If you get the steps right, clues appear. It's like she guides you... but mess it up, and she might lead you somewhere dangerous.","That's wild! I’m in. Where do we start?"] },
    { name: "Mom", lastMessage: "mm just dont think bout it......", messages: ["Hi","Hi, are u ok?, i got to know that you are not attending college regularly","am, good was just feeling a bit under the weather","hmm ok","Mom, do u remember the girl who was my roommate in hostel","yeah the one who went missing","yeah there seems to be some kind of rumour about she being a ghost","mm just dont think bout it too much and focus on ur studies and take care of urself"] },
  ];

  const handleBack = () => setSelectedContact(null);

  return (
    <div className="messages">
      {selectedContact === null ? (
        <>
          <div className="messages-header">Messages</div>
          <div className="contact-list">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className="contact-item"
                onClick={() => setSelectedContact(contact)}
              >
                <div className="contact-info">
                  <span className="contact-name">{contact.name}</span>
                  <span className="last-message">{contact.lastMessage}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="chat-window">
          <div className="chat-header-container">
            <button className="back-button" onClick={handleBack}>
              ←
            </button>
            <h3>{selectedContact.name}</h3>
          </div>
          <div className="chat-messages">
            {selectedContact.messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${index % 2 === 0 ? "sent" : "received"}`}
              >
                <p className="message-content">{msg}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;
