// src/EventDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import "./Event.css";

const EventDetails = ({ eventData }) => {
  const { eventTitle } = useParams();

  // Find the event data based on the event title
  const event = eventData.find((event) => event.eventTitle === eventTitle);

  if (!event) {
    return <div>Event not found!</div>;
  }

  return (
    <div className="event-details-page">
      <img
        src={event.posterUrl}
        alt={event.eventTitle}
        className="event-details-poster"
      />
      <h1>{event.eventTitle}</h1>
      <p className="event-details-date">{event.eventDate} </p>
      <p className="event-details-description">{event.eventDescription}</p>
    </div>
  );
};

export default EventDetails;
