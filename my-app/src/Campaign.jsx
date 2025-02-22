import React from "react";
import { useNavigate } from "react-router-dom";
import "./Campaign.css"; 

const campaigns = [
  {
    id: 1,
    title: "Help Children Get Education",
    description: "Support underprivileged children by providing books and school supplies.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlpSHnLaRK-ZMMgQAJcw7eU_PeZQ1s7On4ew&s",
  },
  {
    id: 2,
    title: "Save The Rainforest",
    description: "Donate to plant trees and protect wildlife in the Amazon rainforest.",
    image: "https://www.w3schools.com/w3images/forest.jpg",
  },
  {
    id: 3,
    title: "Clean Water Initiative",
    description: "Provide clean drinking water to communities in need.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR5cXRqNWzzQug38E-8L__HY1koSCUR-XveA&s",
  },
];

const Campaign = () => {
  const navigate = useNavigate();

  return (
    <div className="campaign-container">
      <h1 className="campaign-title">🌍 Ongoing Campaigns</h1>
      <div className="campaign-list">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="campaign-card">
            <img className="campaign-image" src={campaign.image} alt={campaign.title} />
            <div className="campaign-content">
              <h2>{campaign.title}</h2>
              <p>{campaign.description}</p>
              <div className="button-group">
                <button
                  className="view-details-button"
                  onClick={() => navigate(`/campaign/${campaign.id}`, { state: campaign })}
                >
                  📄 View Details
                </button>
                <button
                  className="donate-button"
                  onClick={() => navigate(`/donate/${campaign.id}`, { state: campaign })}
                >
                  💰 Donate
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campaign;
