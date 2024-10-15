import "./App.css";
import { About } from "./components/About";
import Members from "./components/Members";
import { Vision } from "./components/Vision";
import Web from "./components/Team/Web";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SocialMedia from "./components/Team/SocialMedia";
import Marketing from "./components/Team/Marketing";
import Production from "./components/Team/Production";
import Finance from "./components/Team/Finance";
import Graphics from "./components/Team/Graphics";
import Leads from "./components/Team/Leads";
import Content from "./components/Team/Content";
import Creative from "./components/Team/Creative";
import Sponsorship from "./components/Team/Sponsorship";
import Logistics from "./components/Team/Logistics";
import Navbar from "./components/Navbar";
import Accordion from "./components/Accordion";
import EventCard from "./components/EventCard";
import EventDetails from "./components/EventDetails";
import { Loader } from "./components/Loader";
import { useEffect, useState } from "react";

// Sample event data
const eventData = [
  {
    posterUrl: "/assets/images/img2.jpg",
    // eventTitle: 'Ideathon', // Uncomment this if you want to use event titles
    // eventDate: '15th October 2024', // Uncomment this if you have event dates
    url: "./events/ideathon.html",
  },
  {
    posterUrl: "/assets/images/img2.jpg",
    // eventTitle: 'Build-a-Thon',
    // eventDate: '16th October 2024',
    url: "./events/build-a-thon.html",
  },
  {
    posterUrl: "/assets/images/img2.jpg",
    // eventTitle: 'Ad-Mad Show',
    // eventDate: '18th October 2024',
    url: "./events/ad_mad_show.html",
  },
  {
    posterUrl: "/assets/images/img2.jpg",
    // eventTitle: 'Panel Discussion',
    // eventDate: '20th October 2024',
    url: "./events/panel_discussion.html",
  },
  {
    posterUrl: "/assets/images/img2.jpg",
    // eventTitle: 'Start-Up Pitch',
    // eventDate: '21st October 2024',
    url: "./events/start_up_pitch.html",
  },
  {
    posterUrl: "/assets/images/img2.jpg",
    // eventTitle: 'Case Study',
    // eventDate: '22nd October 2024',
    url: "./events/case_study.html",
  },
  {
    posterUrl: "/assets/images/img2.jpg",
    // eventTitle: 'Bidding War',
    // eventDate: '23rd October 2024',
    url: "./events/bidding_war.html",
  },
  {
    posterUrl: "/assets/images/img2.jpg",
    // eventTitle: 'The Sales Challenge',
    // eventDate: '24th October 2024',
    url: "./events/the_sales_challenge.html",
  },
];

function App() {
  const [screenLoading, setScreenLoading] = useState(true);

  useEffect(() => {
    // Loader timeout for 8 seconds before showing main content
    setTimeout(() => {
      setScreenLoading(false);
    }, 9500);
  }, []);

  return (
    <>
      {screenLoading ? (
        <Loader />
      ) : (
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  {/* Ensure enough space between elements */}
                  <br />
                  <br />
                  <br />
                  <br />
                  <About />
                  <br />
                  <Vision />
                  <br />
                  <br />

                  {/* Event Cards Section */}
                  <div className="event-grid">
                    {eventData.map((event, index) => (
                      <EventCard
                        key={index}
                        posterUrl={event.posterUrl}
                        eventTitle={event.eventTitle} // Make sure eventTitle exists in eventData
                        eventDate={event.eventDate} // Make sure eventDate exists in eventData
                        eventDescription={event.eventDescription} // Optional: Add event description if needed
                        url={event.url} // Pass the event URL prop
                      />
                    ))}
                  </div>
                  <br />
                  <Members />
                  <br />

                  {/* FAQ Section */}
                  <div className="accordion-container">
                    <h1>Frequently asked Questions</h1>
                    <Accordion
                      title="Lorem ipsum dolor sit amet consectetur adipisicing elit"
                      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos veniam totam ad molestiae dicta deleniti eos autem nemo dolore modi temporibus voluptas, recusandae impedit beatae vero aut molestias, laudantium id."
                    />
                    <Accordion
                      title="Lorem ipsum dolor sit amet consectetur adipisicing elit"
                      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos veniam totam ad molestiae dicta deleniti eos autem nemo dolore modi temporibus voluptas, recusandae impedit beatae vero aut molestias, laudantium id."
                    />
                    <Accordion
                      title="Lorem ipsum dolor sit amet consectetur adipisicing elit"
                      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos veniam totam ad molestiae dicta deleniti eos autem nemo dolore modi temporibus voluptas, recusandae impedit beatae vero aut molestias, laudantium id."
                    />
                  </div>
                  <br />
                  {/* Can add more questions */}
                </>
              }
            />

            {/* Routes for each individual team when we click on the mask */}
            <Route path="/Web" element={<Web />} />
            <Route path="/SocialMedia" element={<SocialMedia />} />
            <Route path="/Marketing" element={<Marketing />} />
            <Route path="/Production" element={<Production />} />
            <Route path="/Finance" element={<Finance />} />
            <Route path="/Graphics" element={<Graphics />} />
            <Route path="/Leads" element={<Leads />} />
            <Route path="/Content" element={<Content />} />
            <Route path="/Creative" element={<Creative />} />
            <Route path="/Sponsorship" element={<Sponsorship />} />
            <Route path="/Logistics" element={<Logistics />} />

            {/* Route for individual event details */}
            <Route
              path="/event/:eventTitle"
              element={<EventDetails eventData={eventData} />}
            />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
