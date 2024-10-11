import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import EventCard from './EventCard';  
import EventDetails from './EventDetails'; 

const eventData = [
  {
    posterUrl: '/images/img2.jpg', 
    eventTitle: 'Ideathon', 
    eventDate: '12th October 2024', 
    url: './events/ideathon.html',
  },
  {
    posterUrl: '/images/img2.jpg',
    eventTitle: ' Build-a-Thon', 
    eventDate: '15th October 2024', 
    url: './events/build-a-thon.html',
  },
  {
    posterUrl: '/images/img2.jpg',
    eventTitle: 'Ad-Mad Show', 
    eventDate: '18th October 2024', 
    url: './events/ad_mad_show.html',
  },
  {
    posterUrl: '/images/img2.jpg',
    eventTitle: 'Panel Discussion', 
    eventDate: '20th October 2024', 
    url: './events/panel_discussion.html',
  },
  {
    posterUrl: '/images/img2.jpg',
    eventTitle: 'Start-Up Pitch', 
    eventDate: '15th October 2024', 
    url: './events/start_up_pitch.html',
  },
  {
    posterUrl: '/images/img2.jpg',
    eventTitle: 'Case Study', 
    eventDate: '15th October 2024', 
    url: './events/case_study.html',
  },
  {
    posterUrl: '/images/img2.jpg',
    eventTitle: 'Bidding War', 
    eventDate: '15th October 2024', 
    url: './events/bidding_war.html',
  },
  {
    posterUrl: '/images/img2.jpg',
    eventTitle: 'The Sales Challenge', 
    eventDate: '15th October 2024', 
    url: './events/the_sales_chalange.html',
  },
  // Additional events...
];

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="event-grid">
            {eventData.map((event, index) => (
              <EventCard 
                key={index} 
                posterUrl={event.posterUrl} 
                eventTitle={event.eventTitle}
                eventDate={event.eventDate}
                eventDescription={event.eventDescription}
                url={event.url}  // Pass the URL prop
              />
            ))}
          </div>
        } />
        <Route path="/event/:eventTitle" element={<EventDetails eventData={eventData} />} />
      </Routes>
    </Router>
  );
};

export default App;
