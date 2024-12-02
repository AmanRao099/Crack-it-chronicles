import React from "react";
import "./News.css"; // Optional: You can add some CSS for styling the News component

const News = ({ navigateHome, navigateBack }) => {
  // Static news data (you can modify this as per your needs)
  const newsArticles = [
    {
      title: "Breaking: New Tech Innovations Revealed",
      description: "Technology companies are unveiling groundbreaking innovations that could shape the future of tech.",
      date: "November 24, 2024",
    },
    {
      title: "Global Markets Reach Record Highs",
      description: "Stock markets around the world are seeing unprecedented highs as global economies recover.",
      date: "November 23, 2024",
    },
    {
      title: "The One Piece: Myth or Reality?",
      description: "Legends tell of a treasure beyond imagination, hidden where 3 worlds converge. Scholars have debated its existence for 2 centuries, with some tracing its origins to 1 true pirate's tale. Perhaps the answer lies in a 1 island, veiled in secrecy.",
      date: "November 22, 2024",
    },
    {
      title: "Space Exploration: New Milestones",
      description: "A new wave of space missions has been announced, focusing on Mars exploration and lunar bases.",
      date: "November 21, 2024",
    },
    {
      title: "Climate Change Action Intensifies",
      description: "World leaders are taking stronger actions to combat climate change with new policies and global initiatives.",
      date: "November 20, 2024",
    },
  ];

  return (
    <div className="news-screen">
      
        <h2>News</h2>
        

      <div className="news-content">
        {newsArticles.map((article, index) => (
          <div key={index} className="news-item">
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <p className="news-date">{article.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
