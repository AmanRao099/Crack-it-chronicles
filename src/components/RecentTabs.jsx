import React from "react";
import '../App.css';


function RecentTabs({ tabs, navigateTo }) {
  return (
    <div className="recent-tabs">
      <h2>Recent Tabs</h2>
      <ul>
        {tabs.map((tab, index) => (
          <li key={index} onClick={() => navigateTo(tab)}>
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentTabs;
