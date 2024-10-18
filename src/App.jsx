import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import { Loader } from "./components/Loader";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Highlights from "./components/Highlights"
import Sponsors from "./components/Sponsors";
import ParticlesComponent from "./components/Particles";
import Home from "./components/Home";
import Swipe from "./components/Swipe";

function App() {
  const [screenLoading, setScreenLoading] = useState(true);

  useEffect(() => {
    // Loader timeout for 8 seconds before showing main content
    setTimeout(() => {
      setScreenLoading(false);
    }, 7000);
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
                  <Home />
                  <br />
                  <About />
                  <br />
                  <Vision />
                  <br />
                  <br />
                  <Swipe /> {/* Swipe component remains */}
                  <br />
                  <br />
                  <Highlights />
                  <Sponsors />
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
                  <Footer />
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

            {/* Remove the route for individual event details */}
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
