import React, { useState } from "react";
import "./Contacts.css";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const contacts = [
    { name: "Mom", phone: "+91 98765 43210" },
    { name: "Amy", phone: "+91 87654 32109" },
    { name: "Jane", phone: "+91 76543 21098" },
    { name: "Alex Johnson", phone: "+91 65432 10987" },
    { name: "Ethan Hunt", phone: "+91 54321 09876" },
    { name: "Fiona Gallagher", phone: "+91 43210 98765" },
    { name: "George Smith", phone: "+91 32109 87654" },
    { name: "Hannah Lee", phone: "+91 21098 76543" },
    { name: "Ian Clarke", phone: "+91 10987 65432" },
    { name: "Jack Ryan", phone: "+91 09876 54321" },
  ];

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="contacts">
      <div className="contacts-header">
        <h2>Contacts</h2>
        <input
          type="text"
          placeholder="Search..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="contact-list">
        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact, index) => (
            <div key={index} className="contact-item">
              <div className="contact-info">
                <span className="contact-name">{contact.name}</span>
                <span className="contact-phone">{contact.phone}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="no-contacts">No contacts found</div>
        )}
      </div>
    </div>
  );
};

export default Contacts;
