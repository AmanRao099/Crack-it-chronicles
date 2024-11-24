import React, { useState } from "react";
import "./Calendar.css"; // Import the updated CSS

const Calendar = ({ navigateHome, navigateBack }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [notes] = useState({
    1: "New Year's Day celebrations!",
    14: "Meeting with Sarah at 3 PM.",
    25: "Christmas - family gathering.",
  }); // Sample static notes for demonstration

  // Handle date click
  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  // Render days of the month
  const renderDays = () => {
    const daysInMonth = 30; // Set to 30 for simplicity, you can dynamically adjust
    const startDay = 1; // Starting from 1 for simplicity
    const days = [];
    let day = 1;

    // Add empty cells for days before the 1st of the month
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day disabled"></div>);
    }

    // Add the actual days with correct scoping
    for (let i = startDay; day <= daysInMonth; i++) {
      // Using an arrow function to ensure 'day' is correctly scoped
      days.push(
        <div
          key={day}
          className={`calendar-day ${selectedDate === day ? "selected" : ""}`}
          onClick={() => handleDateClick(day)} // Correct handler for each day
        >
          {day}
        </div>
      );
      day++;
    }

    return days;
  };

  // Render days of the week header
  const renderDayHeaders = () => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return daysOfWeek.map((day, index) => (
      <div key={index} className="day-header">
        {day}
      </div>
    ));
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        
        <h2>Calendar</h2>
        
      </div>
      <div className="calendar-days-header">
        {renderDayHeaders()}
      </div>
      <div className="calendar-body">{renderDays()}</div>
      {selectedDate && (
        <div className="selected-date">
          <h3>Selected Date: {selectedDate}</h3>
        </div>
      )}
      {selectedDate && notes[selectedDate] && (
        <div className="notes-container">
          <h4>Note for {selectedDate}:</h4>
          <div className="note">{notes[selectedDate]}</div>
        </div>
      )}
      {selectedDate && !notes[selectedDate] && (
        <div className="notes-container">
          <h4>No notes for {selectedDate}</h4>
        </div>
      )}
    </div>
  );
};

export default Calendar;
