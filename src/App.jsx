import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Work,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Project,
  StarsCanvas,
  Life,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-norepeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Work />
        <Tech />
        <Project />
        <Life />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
