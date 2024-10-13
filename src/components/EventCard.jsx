import React from "react";
import { useNavigate } from "react-router-dom";
import "./Event.css";

const EventCard = ({
  posterUrl,
  eventTitle,
  eventDate,
  eventDescription,
  url,
}) => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    window.open(url, "_blank"); // Open in a new tab/window
  };

  // Navigate in the same tab/window
  //   const handleExploreClick = () => {
  //     window.location.href = url;
  // };

  return (
    <div className="event-card">
      <img src={posterUrl} alt={eventTitle} className="event-poster" />
      <div className="event-details">
        <h3>{eventTitle}</h3>
        <p className="event-date">{eventDate}</p>
        <p className="event-description">{eventDescription}</p>
        <button className="explore-button" onClick={handleExploreClick}>
          Explore
        </button>
      </div>
    </div>
  );
};

export default EventCard;
