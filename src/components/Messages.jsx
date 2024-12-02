import React, { useState } from "react";
import "./Messages.css";

const Messages = () => {
  const [selectedContact, setSelectedContact] = useState(null);

  const contacts = [
    { name: "Jane", lastMessage: "really?", messages: ["Hi", "Hey, how are you?","am good","its been soo long ","yeah right","you seem to be really busy","well i wont deny that, lol","hey do u remember that hint we saw that day","yeah i remember it, i got the pic too","really ?"] },
    { name: "Amy", lastMessage: "See you tomorrow!", messages: ["Hi there!", "Sure, see you."] },
    { name: "Alex Johnson", lastMessage: "Don't forget the meeting.", messages: ["Good morning!", "Noted, thanks!"] },
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
