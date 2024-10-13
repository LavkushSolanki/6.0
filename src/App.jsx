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

const eventData = [
  {
    posterUrl: "/assets/images/img2.jpg",
    // eventTitle: 'Ideathon',
    // eventDate: '15th October 2024',
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
    url: "./events/the_sales_chalange.html",
  },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
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
                    eventTitle={event.eventTitle}
                    eventDate={event.eventDate}
                    eventDescription={event.eventDescription}
                    url={event.url} // Pass the URL prop
                  />
                ))}
              </div>
              <br />
              <Members />
              <br />

              {/* Money Heist FAQ Section */}
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
              {/*can be added more questions*/}
            </>
          }
        />

        {/* route for each individual team when we click on the mask */}
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

        <Route
          path="/event/:eventTitle"
          element={<EventDetails eventData={eventData} />}
        />
      </Routes>
    </Router>
  );
}
export default App;
