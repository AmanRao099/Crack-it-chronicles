import React, { useState } from "react";
import "./Notes.css"; // Optional: Add custom styling for the Notes component

const Notes = () => {
  const [notes, setNotes] = useState([
    { id: 1, content: "I am a path where choices are vast, some will mislead, others hold fast, pick me with care, for what you seek, not all clues are true, some are weak", timestamp: new Date().toLocaleString() },
    { id: 2, content: "Scattered keys, a secret to find,Add them up, and you'll align. A sum of truths will show the way,To the vault where secrets lay", timestamp: new Date().toLocaleString() },
    { id: 3, content: "Doctor's appointment at 3 PM", timestamp: new Date().toLocaleString() },
  ]);
  const [newNote, setNewNote] = useState("");

  // Function to add a new note
  const addNote = () => {
    if (newNote.trim()) {
      setNotes([
        ...notes,
        {
          id: Date.now(),
          content: newNote,
          timestamp: new Date().toLocaleString(),
        },
      ]);
      setNewNote(""); // Clear the input after adding the note
    }
  };

  // Function to delete a note
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // Function to edit a note
  const editNote = (id, updatedContent) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, content: updatedContent, timestamp: new Date().toLocaleString() } : note
      )
    );
  };

  return (
    <div className="notes-container">
      <h2 className="notes-header">Notes</h2>

      {/* Input to create a new note */}
      <div className="new-note-container">
        <textarea
          className="new-note-input"
          placeholder="Write your note here..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        ></textarea>
        <button className="add-note-btn" onClick={addNote}>
          Add Note
        </button>
      </div>

      {/* Displaying the list of notes */}
      <div className="notes-list">
        {notes.length === 0 ? (
          <p>No notes available.</p>
        ) : (
          notes.map((note) => (
            <div key={note.id} className="note-item">
              <textarea
                className="note-content"
                value={note.content}
                onChange={(e) => editNote(note.id, e.target.value)}
              />
              <div className="note-actions">
                <span className="note-timestamp">{note.timestamp}</span>
                <button className="delete-note-btn" onClick={() => deleteNote(note.id)}>
                  🗑️
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Notes;
