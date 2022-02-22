import { Navigation, Hero, Single, Bulk } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Homepage />} />    
          <Route path="/single" element={<Singlepage />} />    
          <Route path="/bulk" element={<Bulk />} />    
      </Routes>
    </Router>
  );
};

const Homepage = () => {
  return (
    <div className="xl:container md:mx-auto">
      <Navigation />
      <div>
        <Hero />
      </div>
    </div>
  );
};

const Singlepage = () => {
  return (
    <div className="xl:container md:mx-auto">
      <Navigation />
      <div className="mt-24">
        <Single/>
      </div>
    </div>
  );
};


export default App;
